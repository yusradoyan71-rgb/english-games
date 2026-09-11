/**
 * TENSE BUILDING RACE - Core Game Engine
 * Strictly adhering to:
 * - Simple Present, Present Continuous, Simple Past
 * - Single Global Game Timer (5, 10, 15, 20 mins)
 * - Strict Team Turn Rotation
 * - Vertical Skyscraper Climbing Mechanic
 * - Smartboard & Classroom Optimized Controls
 */

(function () {
  'use strict';

  // Preset Team Defaults & Avatars
  const TEAM_PRESETS = [
    { name: "Tigers", avatar: "🐯", color: "var(--team-1)" },
    { name: "Eagles", avatar: "🦅", color: "var(--team-2)" },
    { name: "Lions", avatar: "🦁", color: "var(--team-3)" },
    { name: "Falcons", avatar: "⚡", color: "var(--team-4)" }
  ];

  const FUN_TEAM_NAMES = [
    ["Tigers", "Eagles", "Lions", "Falcons"],
    ["Class 7A", "Class 7B", "Class 8A", "Class 8B"],
    ["Storm", "Blaze", "Thunder", "Vortex"],
    ["Dragons", "Phoenixes", "Wolves", "Bears"],
    ["Grammar Ninjas", "Tense Masters", "Verb Voyagers", "Clause Champs"]
  ];

  let funNameIdx = 0;

  // Game State
  const state = {
    grade: "grade7",
    difficulty: "easy",
    teamCount: 3,
    durationMinutes: 10,
    teams: [],
    activeTeamIdx: 0,

    // Timer
    timerRemainingSeconds: 600,
    timerTotalSeconds: 600,
    timerInterval: null,
    timerRunning: false,
    timerEndTime: null,

    // Question Engine
    questionPool: [],
    currentQuestion: null,
    shuffledOptions: [],
    answeredInTurn: false,

    // Pause & Control
    isPaused: false,
    isGameOver: false
  };

  // DOM Elements
  const dom = {};

  function cacheDom() {
    dom.setupScreen = document.getElementById('setupScreen');
    dom.arenaScreen = document.getElementById('arenaScreen');
    dom.victoryModal = document.getElementById('victoryModal');
    dom.pauseModal = document.getElementById('pauseModal');

    // Setup controls
    dom.gradeButtons = document.querySelectorAll('[data-grade]');
    dom.diffButtons = document.querySelectorAll('[data-diff]');
    dom.teamCountButtons = document.querySelectorAll('[data-teams]');
    dom.durationButtons = document.querySelectorAll('[data-duration]');
    dom.teamInputsGrid = document.getElementById('teamInputsGrid');
    dom.btnAutofill = document.getElementById('btnAutofill');
    dom.btnStartRace = document.getElementById('btnStartRace');

    // Arena elements
    dom.timerDisplay = document.getElementById('timerDisplay');
    dom.timerWidget = document.getElementById('timerWidget');
    dom.activeTeamBadge = document.getElementById('activeTeamBadge');
    dom.activeTeamName = document.getElementById('activeTeamName');
    dom.buildingsTrack = document.getElementById('buildingsTrack');

    // Question elements
    dom.qTypeBadge = document.getElementById('qTypeBadge');
    dom.qTenseHint = document.getElementById('qTenseHint');
    dom.qPromptText = document.getElementById('qPromptText');
    dom.optionsGrid = document.getElementById('optionsGrid');

    // Arena buttons
    dom.btnSound = document.getElementById('btnSound');
    dom.soundIcon = document.getElementById('soundIcon');
    dom.btnPause = document.getElementById('btnPause');
    dom.btnResume = document.getElementById('btnResume');
    dom.btnFullscreen = document.getElementById('btnFullscreen');
    dom.btnEndGame = document.getElementById('btnEndGame');
    dom.btnSkip = document.getElementById('btnSkip');
    dom.btnPlayAgain = document.getElementById('btnPlayAgain');

    // Victory elements
    dom.winnerName = document.getElementById('winnerName');
    dom.winnerFloor = document.getElementById('winnerFloor');
    dom.winnerAvatar = document.getElementById('winnerAvatar');
    dom.standingsBody = document.getElementById('standingsBody');
    dom.confettiCanvas = document.getElementById('confettiCanvas');
  }

  // =========================================================================
  // SETUP SCREEN LOGIC
  // =========================================================================

  function initSetup() {
    // Grade Selection
    dom.gradeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.gradeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.grade = btn.getAttribute('data-grade');
        soundCtrl.playClick();
      });
    });

    // Difficulty Selection
    dom.diffButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.diffButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.difficulty = btn.getAttribute('data-diff');
        soundCtrl.playClick();
      });
    });

    // Team Count Selection
    dom.teamCountButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.teamCountButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.teamCount = parseInt(btn.getAttribute('data-teams'), 10);
        renderTeamInputs();
        soundCtrl.playClick();
      });
    });

    // Duration Selection
    dom.durationButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.durationButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.durationMinutes = parseInt(btn.getAttribute('data-duration'), 10);
        soundCtrl.playClick();
      });
    });

    // Autofill names button
    dom.btnAutofill.addEventListener('click', () => {
      funNameIdx = (funNameIdx + 1) % FUN_TEAM_NAMES.length;
      const names = FUN_TEAM_NAMES[funNameIdx];
      const inputs = dom.teamInputsGrid.querySelectorAll('.team-input-field');
      inputs.forEach((input, idx) => {
        if (names[idx]) input.value = names[idx];
      });
      soundCtrl.playClick();
    });

    // Start Game
    dom.btnStartRace.addEventListener('click', startGame);

    // Initial render of team input fields
    renderTeamInputs();
  }

  function renderTeamInputs() {
    dom.teamInputsGrid.innerHTML = '';
    for (let i = 0; i < state.teamCount; i++) {
      const preset = TEAM_PRESETS[i];
      const card = document.createElement('div');
      card.className = `team-input-card team-${i + 1}`;
      card.innerHTML = `
        <label>
          <span>${preset.avatar}</span>
          <span>Team ${i + 1} Name</span>
        </label>
        <input type="text" class="team-input-field" id="teamInput_${i}" value="${preset.name}" maxlength="18" placeholder="Team ${i + 1}" />
      `;
      dom.teamInputsGrid.appendChild(card);
    }
  }

  // =========================================================================
  // GAME LAUNCH & INITIALIZATION
  // =========================================================================

  function startGame() {
    soundCtrl.init();
    soundCtrl.playGameStart();

    // Collect team configuration
    state.teams = [];
    for (let i = 0; i < state.teamCount; i++) {
      const input = document.getElementById(`teamInput_${i}`);
      const name = (input && input.value.trim()) ? input.value.trim() : TEAM_PRESETS[i].name;
      state.teams.push({
        id: i,
        name: name,
        avatar: TEAM_PRESETS[i].avatar,
        floor: 0,
        correct: 0,
        incorrect: 0
      });
    }

    // Set Timer
    state.timerTotalSeconds = state.durationMinutes * 60;
    state.timerRemainingSeconds = state.timerTotalSeconds;
    state.isGameOver = false;
    state.isPaused = false;
    state.activeTeamIdx = 0;

    // Build Question Pool
    initQuestionPool();

    // Render Tower Buildings
    renderTowers();

    // Switch Screens
    dom.setupScreen.classList.add('hidden');
    dom.arenaScreen.classList.remove('hidden');
    dom.victoryModal.classList.add('hidden');
    dom.pauseModal.classList.add('hidden');

    // Start Global Timer
    startGlobalTimer();

    // Present First Question
    loadNextQuestion();
  }

  function initQuestionPool() {
    const gradeBank = window.GAME_QUESTIONS[state.grade];
    let list = (gradeBank && gradeBank[state.difficulty]) ? [...gradeBank[state.difficulty]] : [];

    // Fallback if needed
    if (list.length === 0) {
      list = [...window.GAME_QUESTIONS.grade7.easy];
    }

    // Shuffle pool
    state.questionPool = shuffleArray([...list]);
  }

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // =========================================================================
  // TOWER & BUILDING RENDERING
  // =========================================================================

  const MAX_DISPLAY_FLOORS = 25;

  function renderTowers() {
    dom.buildingsTrack.innerHTML = '';

    state.teams.forEach((team, idx) => {
      const tower = document.createElement('div');
      tower.className = `team-tower team-${idx + 1} ${idx === state.activeTeamIdx ? 'active-turn' : ''}`;
      tower.id = `tower_${idx}`;

      // Floors HTML
      let floorsHtml = '';
      for (let f = 0; f <= MAX_DISPLAY_FLOORS; f++) {
        floorsHtml += `
          <div class="floor-cell ${f === 0 ? 'reached' : ''}" data-floor="${f}">
            <span class="floor-cell-num">F${f}</span>
            <div class="floor-windows">
              <div class="floor-window"></div>
              <div class="floor-window"></div>
            </div>
          </div>
        `;
      }

      tower.innerHTML = `
        <div class="tower-header">
          <div class="tower-team-badge">
            <span>${team.avatar}</span>
            <span class="tower-team-text">${escapeHtml(team.name)}</span>
          </div>
          <div class="tower-current-floor">
            <span>FLOOR</span>
            <span class="floor-val" id="towerFloorVal_${idx}">0</span>
          </div>
        </div>

        <div class="tower-shaft" id="towerShaft_${idx}">
          <div class="tower-floors-scroller" id="towerScroller_${idx}">
            ${floorsHtml}
          </div>

          <!-- Elevator Pod -->
          <div class="elevator-pod" id="elevator_${idx}" style="bottom: 0px;">
            <span class="elevator-avatar">${team.avatar}</span>
            <span class="elevator-floor-tag" id="elevatorTag_${idx}">F0</span>
          </div>

          <!-- Toast Floating Banner -->
          <div class="tower-toast" id="towerToast_${idx}"></div>
        </div>
      `;

      dom.buildingsTrack.appendChild(tower);
    });
  }

  function updateElevatorPosition(teamIdx, newFloor, isClimb) {
    const shaft = document.getElementById(`towerShaft_${teamIdx}`);
    const elevator = document.getElementById(`elevator_${teamIdx}`);
    const elevatorTag = document.getElementById(`elevatorTag_${teamIdx}`);
    const floorVal = document.getElementById(`towerFloorVal_${teamIdx}`);
    const scroller = document.getElementById(`towerScroller_${teamIdx}`);
    const tower = document.getElementById(`tower_${teamIdx}`);

    if (!elevator || !shaft) return;

    floorVal.textContent = newFloor;
    elevatorTag.textContent = `F${newFloor}`;

    // Mark floors as reached
    const floorCells = tower.querySelectorAll('.floor-cell');
    floorCells.forEach(cell => {
      const fNum = parseInt(cell.getAttribute('data-floor'), 10);
      if (fNum <= newFloor) {
        cell.classList.add('reached');
      }
    });

    // Compute floor cell height
    const floorHeight = 48; // matches CSS --floor-height
    const shaftHeight = shaft.clientHeight;
    const targetBottom = newFloor * floorHeight;

    // If target floor goes higher than shaft, scroll the floors container
    const maxVisibleBottom = shaftHeight - 55;
    if (targetBottom > maxVisibleBottom) {
      const scrollOffset = targetBottom - maxVisibleBottom;
      scroller.style.transform = `translateY(${scrollOffset}px)`;
      elevator.style.bottom = `${maxVisibleBottom}px`;
    } else {
      scroller.style.transform = `translateY(0px)`;
      elevator.style.bottom = `${targetBottom}px`;
    }

    if (isClimb) {
      soundCtrl.playElevatorClimb();
      showTowerToast(teamIdx, "+1 FLOOR! 🚀", "toast-up");
    } else {
      soundCtrl.playIncorrect();
      showTowerToast(teamIdx, "STAY ON FLOOR 🛑", "toast-stay");
    }
  }

  function showTowerToast(teamIdx, message, className) {
    const toast = document.getElementById(`towerToast_${teamIdx}`);
    if (!toast) return;

    toast.textContent = message;
    toast.className = `tower-toast ${className} show`;

    setTimeout(() => {
      toast.classList.remove('show');
    }, 1000);
  }

  function updateActiveTowerHighlight() {
    state.teams.forEach((_, idx) => {
      const tower = document.getElementById(`tower_${idx}`);
      if (tower) {
        if (idx === state.activeTeamIdx) {
          tower.classList.add('active-turn');
        } else {
          tower.classList.remove('active-turn');
        }
      }
    });

    const activeTeam = state.teams[state.activeTeamIdx];
    dom.activeTeamName.innerHTML = `${activeTeam.avatar} ${escapeHtml(activeTeam.name)}`;
  }

  // =========================================================================
  // GLOBAL TIMER MECHANIC
  // Continuous countdown throughout the game; never resets after questions
  // =========================================================================

  function startGlobalTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerRunning = true;
    state.timerEndTime = Date.now() + (state.timerRemainingSeconds * 1000);

    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
      if (state.isPaused || state.isGameOver) return;

      const now = Date.now();
      const remainingMs = Math.max(0, state.timerEndTime - now);
      state.timerRemainingSeconds = Math.ceil(remainingMs / 1000);

      updateTimerDisplay();

      // Tick sound in final 30 seconds
      if (state.timerRemainingSeconds <= 30 && state.timerRemainingSeconds > 0) {
        soundCtrl.playTick();
      }

      if (state.timerRemainingSeconds <= 0) {
        clearInterval(state.timerInterval);
        state.timerRunning = false;
        triggerGameOver();
      }
    }, 500);
  }

  function updateTimerDisplay() {
    const m = Math.floor(state.timerRemainingSeconds / 60);
    const s = state.timerRemainingSeconds % 60;
    const formatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    dom.timerDisplay.textContent = formatted;

    if (state.timerRemainingSeconds <= 60) {
      dom.timerWidget.classList.add('warning');
    } else {
      dom.timerWidget.classList.remove('warning');
    }
  }

  // =========================================================================
  // QUESTION FLOW & ANSWER RANDOMIZATION
  // =========================================================================

  function loadNextQuestion() {
    if (state.isGameOver) return;

    state.answeredInTurn = false;
    updateActiveTowerHighlight();

    // Check pool
    if (state.questionPool.length === 0) {
      initQuestionPool();
    }

    state.currentQuestion = state.questionPool.pop();
    const q = state.currentQuestion;

    // Render Question Type Badge
    const typeNames = {
      'tense-choice': '🎯 Tense Selection',
      'complete-sentence': '✍️ Complete the Sentence',
      'find-mistake': '🔍 Find the Mistake',
      'correct-incorrect': '⚖️ Correct or Incorrect',
      'context': '📖 Context Question'
    };

    dom.qTypeBadge.textContent = typeNames[q.type] || 'Grammar Challenge';
    dom.qTenseHint.textContent = `Target: ${q.tense || 'Simple Present / Past / Continuous'}`;
    dom.qPromptText.textContent = q.question;

    // Randomize Option Positions (Uniform distribution for A, B, C, D)
    const originalOptions = q.options.map((opt, i) => ({
      text: opt,
      isCorrect: i === q.correct
    }));

    state.shuffledOptions = shuffleArray(originalOptions);

    // Render Options
    const letters = ['A', 'B', 'C', 'D'];
    dom.optionsGrid.innerHTML = '';

    state.shuffledOptions.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn-option-choice';
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span class="option-text">${escapeHtml(opt.text)}</span>
      `;

      btn.addEventListener('click', () => handleOptionSelect(idx, btn));
      dom.optionsGrid.appendChild(btn);
    });
  }

  function handleOptionSelect(selectedIdx, btnElement) {
    if (state.answeredInTurn || state.isGameOver || state.isPaused) return;
    state.answeredInTurn = true;

    const chosen = state.shuffledOptions[selectedIdx];
    const isCorrect = chosen.isCorrect;
    const activeTeam = state.teams[state.activeTeamIdx];

    // Disable all option buttons
    const allButtons = dom.optionsGrid.querySelectorAll('.btn-option-choice');
    allButtons.forEach((b, i) => {
      b.disabled = true;
      if (state.shuffledOptions[i].isCorrect) {
        b.classList.add('correct-ans');
      }
    });

    if (isCorrect) {
      btnElement.classList.add('correct-ans');
      activeTeam.correct += 1;
      activeTeam.floor += 1;
      soundCtrl.playCorrect();
      updateElevatorPosition(state.activeTeamIdx, activeTeam.floor, true);
    } else {
      btnElement.classList.add('wrong-ans');
      activeTeam.incorrect += 1;
      updateElevatorPosition(state.activeTeamIdx, activeTeam.floor, false);
    }

    // Short delay so students see feedback without losing race time
    setTimeout(() => {
      if (state.isGameOver) return;
      // Advance to next team
      state.activeTeamIdx = (state.activeTeamIdx + 1) % state.teams.length;
      loadNextQuestion();
    }, 1100);
  }

  // =========================================================================
  // GAME OVER & WINNER CALCULATION
  // =========================================================================

  function triggerGameOver() {
    state.isGameOver = true;
    clearInterval(state.timerInterval);

    // Stop accepting questions & freeze UI
    const allButtons = dom.optionsGrid.querySelectorAll('.btn-option-choice');
    allButtons.forEach(b => b.disabled = true);

    soundCtrl.playVictory();
    launchConfetti();

    // Calculate Rank Order:
    // 1st criteria: Highest Floor
    // 2nd criteria (tie-breaker): Total Correct Answers
    const rankedTeams = [...state.teams].sort((a, b) => {
      if (b.floor !== a.floor) {
        return b.floor - a.floor;
      }
      return b.correct - a.correct;
    });

    const winner = rankedTeams[0];
    const isDraw = rankedTeams.length > 1 &&
      rankedTeams[0].floor === rankedTeams[1].floor &&
      rankedTeams[0].correct === rankedTeams[1].correct;

    if (isDraw) {
      dom.winnerAvatar.textContent = "🤝";
      dom.winnerName.textContent = `DRAW! (${rankedTeams[0].name} & ${rankedTeams[1].name})`;
      dom.winnerFloor.textContent = `Floor ${rankedTeams[0].floor}`;
    } else {
      dom.winnerAvatar.textContent = winner.avatar;
      dom.winnerName.textContent = winner.name;
      dom.winnerFloor.textContent = `Floor ${winner.floor}`;
    }

    // Render Standings Table
    dom.standingsBody.innerHTML = '';
    rankedTeams.forEach((t, i) => {
      const totalAnswers = t.correct + t.incorrect;
      const accuracy = totalAnswers > 0 ? Math.round((t.correct / totalAnswers) * 100) : 0;
      const rankBadge = i === 0 ? '🥇 1st' : i === 1 ? '🥈 2nd' : i === 2 ? '🥉 3rd' : '4th';

      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="rank-cell rank-${i + 1}">${rankBadge}</td>
        <td><strong>${t.avatar} ${escapeHtml(t.name)}</strong></td>
        <td><strong style="color: #38bdf8; font-size: 1.15rem;">Floor ${t.floor}</strong></td>
        <td style="color: #4ade80;">${t.correct}</td>
        <td style="color: #f87171;">${t.incorrect}</td>
        <td><strong>${accuracy}%</strong></td>
      `;
      dom.standingsBody.appendChild(row);
    });

    // Show victory modal
    dom.victoryModal.classList.remove('hidden');
  }

  // =========================================================================
  // KEYBOARD & TEACHER CONTROLS
  // =========================================================================

  function initControls() {
    // Sound Toggle
    dom.btnSound.addEventListener('click', () => {
      const muted = soundCtrl.toggleMute();
      dom.soundIcon.textContent = muted ? '🔇' : '🔊';
    });

    // Pause / Resume
    dom.btnPause.addEventListener('click', togglePause);
    dom.btnResume.addEventListener('click', togglePause);

    // Fullscreen
    dom.btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    // End Game early
    dom.btnEndGame.addEventListener('click', () => {
      if (confirm("End the race right now and view final scores?")) {
        triggerGameOver();
      }
    });

    // Skip question (Teacher utility)
    dom.btnSkip.addEventListener('click', () => {
      if (!state.isGameOver && !state.isPaused && !state.answeredInTurn) {
        loadNextQuestion();
      }
    });

    // Play Again
    dom.btnPlayAgain.addEventListener('click', () => {
      stopConfetti();
      dom.victoryModal.classList.add('hidden');
      dom.arenaScreen.classList.add('hidden');
      dom.setupScreen.classList.remove('hidden');
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (state.isGameOver) return;

      // Number keys 1-4 or A-D for answering
      const key = e.key.toUpperCase();
      let optionIndex = -1;

      if (key === '1' || key === 'A') optionIndex = 0;
      else if (key === '2' || key === 'B') optionIndex = 1;
      else if (key === '3' || key === 'C') optionIndex = 2;
      else if (key === '4' || key === 'D') optionIndex = 3;

      if (optionIndex >= 0 && !dom.arenaScreen.classList.contains('hidden') && !state.isPaused) {
        const buttons = dom.optionsGrid.querySelectorAll('.btn-option-choice');
        if (buttons[optionIndex] && !buttons[optionIndex].disabled) {
          handleOptionSelect(optionIndex, buttons[optionIndex]);
        }
      }

      // Space or P -> Pause
      if (e.code === 'Space' || key === 'P') {
        if (!dom.arenaScreen.classList.contains('hidden')) {
          e.preventDefault();
          togglePause();
        }
      }

      // M -> Mute
      if (key === 'M') {
        const muted = soundCtrl.toggleMute();
        dom.soundIcon.textContent = muted ? '🔇' : '🔊';
      }

      // F -> Fullscreen
      if (key === 'F') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      }
    });
  }

  function togglePause() {
    if (state.isGameOver) return;

    state.isPaused = !state.isPaused;
    if (state.isPaused) {
      dom.pauseModal.classList.remove('hidden');
      // Store exact remaining ms
      if (state.timerEndTime) {
        state.pausedRemainingMs = state.timerEndTime - Date.now();
      }
    } else {
      dom.pauseModal.classList.add('hidden');
      if (state.pausedRemainingMs) {
        state.timerEndTime = Date.now() + state.pausedRemainingMs;
      }
    }
  }

  // =========================================================================
  // CONFETTI CELEBRATION ENGINE
  // =========================================================================

  let confettiParticles = [];
  let confettiAnimId = null;

  function launchConfetti() {
    const canvas = dom.confettiCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    confettiParticles = [];
    const colors = ['#f43f5e', '#38bdf8', '#10b981', '#f59e0b', '#a855f7', '#ec4899', '#fde047'];

    for (let i = 0; i < 150; i++) {
      confettiParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 9 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 4 + 3,
        speedX: Math.random() * 3 - 1.5,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 6 - 3
      });
    }

    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confettiParticles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      confettiAnimId = requestAnimationFrame(renderConfetti);
    }

    renderConfetti();
  }

  function stopConfetti() {
    if (confettiAnimId) cancelAnimationFrame(confettiAnimId);
    if (dom.confettiCanvas) {
      const ctx = dom.confettiCanvas.getContext('2d');
      ctx.clearRect(0, 0, dom.confettiCanvas.width, dom.confettiCanvas.height);
    }
  }

  // Safe HTML escape helper
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // On DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    cacheDom();
    initSetup();
    initControls();
  });

})();
