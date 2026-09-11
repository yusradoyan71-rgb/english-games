/**
 * TENSE BUILDING RACE - Enhanced Core Game Engine
 * Features:
 * - 510+ Calibrated Question Bank strictly for Simple Present, Present Continuous, and Simple Past
 * - Absolute Zero Question Repetition within a match
 * - Independent Answer & Distractor Randomization with Anti-Streak Pattern Protection
 * - Dramatic Crane-Drop Floor Construction Animation
 * - Occasional Unstable Wobble Landing with Suspenseful Sound Effects
 * - Continuous Single Global Timer (5, 10, 15, 20 mins)
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
    ["Grammar Ninjas", "Tense Masters", "Verb Voyagers", "Clause Champs"],
    ["Lightning", "Titans", "Comets", "Knights"]
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
    availablePool: [],
    usedQuestions: new Set(),
    currentQuestion: null,
    shuffledOptions: [],
    recentCorrectPositions: [], // Track last 3 correct positions to prevent streaks
    answeredInTurn: false,
    isAnimatingFloor: false,

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
    dom.gradeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.gradeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.grade = btn.getAttribute('data-grade');
        soundCtrl.playClick();
      });
    });

    dom.diffButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.diffButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.difficulty = btn.getAttribute('data-diff');
        soundCtrl.playClick();
      });
    });

    dom.teamCountButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.teamCountButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.teamCount = parseInt(btn.getAttribute('data-teams'), 10);
        renderTeamInputs();
        soundCtrl.playClick();
      });
    });

    dom.durationButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.durationButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.durationMinutes = parseInt(btn.getAttribute('data-duration'), 10);
        soundCtrl.playClick();
      });
    });

    dom.btnAutofill.addEventListener('click', () => {
      funNameIdx = (funNameIdx + 1) % FUN_TEAM_NAMES.length;
      const names = FUN_TEAM_NAMES[funNameIdx];
      const inputs = dom.teamInputsGrid.querySelectorAll('.team-input-field');
      inputs.forEach((input, idx) => {
        if (names[idx]) input.value = names[idx];
      });
      soundCtrl.playClick();
    });

    dom.btnStartRace.addEventListener('click', startGame);
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

    // Timer setup
    state.timerTotalSeconds = state.durationMinutes * 60;
    state.timerRemainingSeconds = state.timerTotalSeconds;
    state.isGameOver = false;
    state.isPaused = false;
    state.activeTeamIdx = 0;
    state.recentCorrectPositions = [];

    // Initialize Question Pool with Zero-Repetition Manager
    initFreshQuestionPool();

    // Render Tower Buildings
    renderTowers();

    // Switch Screens
    dom.setupScreen.classList.add('hidden');
    dom.arenaScreen.classList.remove('hidden');
    dom.victoryModal.classList.add('hidden');
    dom.pauseModal.classList.add('hidden');

    // Start Global Countdown Timer
    startGlobalTimer();

    // Present First Question
    loadNextQuestion();
  }

  function initFreshQuestionPool() {
    state.usedQuestions.clear();
    const gradeBank = window.GAME_QUESTIONS[state.grade];
    let sourceList = (gradeBank && gradeBank[state.difficulty]) ? gradeBank[state.difficulty] : [];

    if (sourceList.length === 0) {
      sourceList = window.GAME_QUESTIONS.grade7.easy;
    }

    // Attach unique identifier to each question object
    state.availablePool = sourceList.map((q, idx) => ({
      ...q,
      _uid: `${state.grade}_${state.difficulty}_${idx}_${q.question.substring(0, 15)}`
    }));

    // Perform Fisher-Yates shuffle
    state.availablePool = shuffleArray(state.availablePool);
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
  // TOWER & DYNAMIC SKYSCRAPER RENDERING
  // =========================================================================

  const MAX_DISPLAY_FLOORS = 30;

  function renderTowers() {
    dom.buildingsTrack.innerHTML = '';

    state.teams.forEach((team, idx) => {
      const tower = document.createElement('div');
      tower.className = `team-tower team-${idx + 1} ${idx === state.activeTeamIdx ? 'active-turn' : ''}`;
      tower.id = `tower_${idx}`;

      let floorsHtml = '';
      for (let f = 0; f <= MAX_DISPLAY_FLOORS; f++) {
        floorsHtml += `
          <div class="floor-cell ${f === 0 ? 'reached' : ''}" id="floorCell_${idx}_${f}" data-floor="${f}">
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

  // =========================================================================
  // DRAMATIC FLOOR-BUILDING & UNSTABLE WOBBLE ANIMATION
  // =========================================================================

  function triggerFloorConstruction(teamIdx, newFloor, callback) {
    state.isAnimatingFloor = true;
    const tower = document.getElementById(`tower_${teamIdx}`);
    const targetCell = document.getElementById(`floorCell_${teamIdx}_${newFloor}`);
    const shaft = document.getElementById(`towerShaft_${teamIdx}`);
    const elevator = document.getElementById(`elevator_${teamIdx}`);
    const elevatorTag = document.getElementById(`elevatorTag_${teamIdx}`);
    const floorVal = document.getElementById(`towerFloorVal_${teamIdx}`);
    const scroller = document.getElementById(`towerScroller_${teamIdx}`);

    if (!tower || !targetCell) {
      if (callback) callback();
      return;
    }

    // Step 1: Drop from sky
    soundCtrl.playFloorDrop();
    targetCell.classList.add('floor-dropping');
    showTowerToast(teamIdx, "+1 FLOOR! 🏗️", "toast-up");

    // Randomize whether this floor experiences an unstable landing (~28% chance)
    const isUnstable = Math.random() < 0.28 && newFloor > 1;

    setTimeout(() => {
      // Step 2: Land on building with impact shake
      tower.classList.add('impact-shake');
      targetCell.classList.remove('floor-dropping');
      targetCell.classList.add('reached');

      setTimeout(() => tower.classList.remove('impact-shake'), 350);

      if (isUnstable) {
        // Unstable crooked wobble landing
        const wobbleDir = Math.random() < 0.5 ? 'floor-land-wobble-left' : 'floor-land-wobble-right';
        targetCell.classList.add(wobbleDir);
        soundCtrl.playFloorWobbleCreak();

        setTimeout(() => {
          soundCtrl.playFloorStabilize();
          targetCell.classList.remove(wobbleDir);
          soundCtrl.playFloorLock();
          finishClimb();
        }, 650);
      } else {
        // Normal firm landing
        targetCell.classList.add('floor-land-normal');
        soundCtrl.playFloorLock();
        setTimeout(() => {
          targetCell.classList.remove('floor-land-normal');
          finishClimb();
        }, 300);
      }
    }, 380);

    function finishClimb() {
      // Update floor counters
      floorVal.textContent = newFloor;
      elevatorTag.textContent = `F${newFloor}`;

      // Move elevator
      const floorUnitHeight = 42; // matches CSS --floor-unit-height
      const shaftHeight = shaft.clientHeight;
      const targetBottom = newFloor * floorUnitHeight;
      const maxVisibleBottom = shaftHeight - 50;

      if (targetBottom > maxVisibleBottom) {
        const scrollOffset = targetBottom - maxVisibleBottom;
        scroller.style.transform = `translateY(${scrollOffset}px)`;
        elevator.style.bottom = `${maxVisibleBottom}px`;
      } else {
        scroller.style.transform = `translateY(0px)`;
        elevator.style.bottom = `${targetBottom}px`;
      }

      state.isAnimatingFloor = false;
      if (callback) callback();
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
    if (activeTeam) {
      dom.activeTeamName.innerHTML = `${activeTeam.avatar} ${escapeHtml(activeTeam.name)}`;
    }
  }

  // =========================================================================
  // GLOBAL TIMER MECHANIC
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
  // QUESTION ENGINE & ANTI-STREAK OPTION RANDOMIZATION
  // =========================================================================

  function loadNextQuestion() {
    if (state.isGameOver) return;

    state.answeredInTurn = false;
    updateActiveTowerHighlight();

    // Pull next non-repeated question
    if (state.availablePool.length === 0) {
      // If an entire 500-question pool was completely exhausted, reload fresh pool
      initFreshQuestionPool();
    }

    state.currentQuestion = state.availablePool.pop();
    state.usedQuestions.add(state.currentQuestion._uid);

    const q = state.currentQuestion;

    // Question Type Display Badge
    const typeNames = {
      'verb-choice': '🎯 Choose the Verb',
      'sentence-choice': '📝 Correct Sentence',
      'complete-sentence': '✍️ Complete Sentence',
      'find-mistake': '🔍 Find the Mistake',
      'correct-incorrect': '⚖️ Correct or Incorrect',
      'context': '📖 Context Question',
      'grammar-structure': '🧩 Grammar Structure'
    };

    dom.qTypeBadge.textContent = typeNames[q.type] || 'Grammar Challenge';
    dom.qTenseHint.textContent = `Tense: ${q.tense || 'Simple Present / Past / Continuous'}`;
    dom.qPromptText.textContent = q.question;

    // Independent Answer Option Randomization with Anti-Streak Protection
    const originalOptions = q.options.map((opt, i) => ({
      text: opt,
      isCorrect: i === q.correct
    }));

    let randomized = shuffleArray(originalOptions);
    let correctPos = randomized.findIndex(o => o.isCorrect);

    // Anti-Streak Check: If last 2 answers were at same position, shift to prevent 3-in-a-row
    const recent = state.recentCorrectPositions;
    if (recent.length >= 2 && recent[recent.length - 1] === correctPos && recent[recent.length - 2] === correctPos) {
      // Shift options by 1
      const item = randomized.pop();
      randomized.unshift(item);
      correctPos = randomized.findIndex(o => o.isCorrect);
    }

    state.recentCorrectPositions.push(correctPos);
    if (state.recentCorrectPositions.length > 6) {
      state.recentCorrectPositions.shift();
    }

    state.shuffledOptions = randomized;

    // Render Options Buttons
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
    if (state.answeredInTurn || state.isGameOver || state.isPaused || state.isAnimatingFloor) return;
    state.answeredInTurn = true;

    const chosen = state.shuffledOptions[selectedIdx];
    const isCorrect = chosen.isCorrect;
    const activeTeam = state.teams[state.activeTeamIdx];

    // Highlight options
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

      // Trigger crane drop construction animation
      triggerFloorConstruction(state.activeTeamIdx, activeTeam.floor, () => {
        setTimeout(() => {
          if (state.isGameOver) return;
          state.activeTeamIdx = (state.activeTeamIdx + 1) % state.teams.length;
          loadNextQuestion();
        }, 400);
      });
    } else {
      btnElement.classList.add('wrong-ans');
      activeTeam.incorrect += 1;
      soundCtrl.playSoftError();
      showTowerToast(state.activeTeamIdx, "STAY ON FLOOR 🛑", "toast-stay");

      setTimeout(() => {
        if (state.isGameOver) return;
        state.activeTeamIdx = (state.activeTeamIdx + 1) % state.teams.length;
        loadNextQuestion();
      }, 950);
    }
  }

  // =========================================================================
  // GAME OVER & WINNER CALCULATION
  // =========================================================================

  function triggerGameOver() {
    state.isGameOver = true;
    clearInterval(state.timerInterval);

    const allButtons = dom.optionsGrid.querySelectorAll('.btn-option-choice');
    allButtons.forEach(b => b.disabled = true);

    soundCtrl.playVictory();
    launchConfetti();

    // 1st: Highest Floor, 2nd: Total Correct Answers (Tie-breaker)
    const rankedTeams = [...state.teams].sort((a, b) => {
      if (b.floor !== a.floor) return b.floor - a.floor;
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

    // Render Standings
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

    dom.victoryModal.classList.remove('hidden');
  }

  // =========================================================================
  // KEYBOARD & TEACHER CONTROLS
  // =========================================================================

  function initControls() {
    dom.btnSound.addEventListener('click', () => {
      const muted = soundCtrl.toggleMute();
      dom.soundIcon.textContent = muted ? '🔇' : '🔊';
    });

    dom.btnPause.addEventListener('click', togglePause);
    dom.btnResume.addEventListener('click', togglePause);

    dom.btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    dom.btnEndGame.addEventListener('click', () => {
      if (confirm("End the race right now and view final scores?")) {
        triggerGameOver();
      }
    });

    dom.btnSkip.addEventListener('click', () => {
      if (!state.isGameOver && !state.isPaused && !state.answeredInTurn && !state.isAnimatingFloor) {
        loadNextQuestion();
      }
    });

    dom.btnPlayAgain.addEventListener('click', () => {
      stopConfetti();
      dom.victoryModal.classList.add('hidden');
      dom.arenaScreen.classList.add('hidden');
      dom.setupScreen.classList.remove('hidden');
    });

    window.addEventListener('keydown', (e) => {
      if (state.isGameOver) return;

      const key = e.key.toUpperCase();
      let optionIndex = -1;

      if (key === '1' || key === 'A') optionIndex = 0;
      else if (key === '2' || key === 'B') optionIndex = 1;
      else if (key === '3' || key === 'C') optionIndex = 2;
      else if (key === '4' || key === 'D') optionIndex = 3;

      if (optionIndex >= 0 && !dom.arenaScreen.classList.contains('hidden') && !state.isPaused && !state.isAnimatingFloor) {
        const buttons = dom.optionsGrid.querySelectorAll('.btn-option-choice');
        if (buttons[optionIndex] && !buttons[optionIndex].disabled) {
          handleOptionSelect(optionIndex, buttons[optionIndex]);
        }
      }

      if (e.code === 'Space' || key === 'P') {
        if (!dom.arenaScreen.classList.contains('hidden')) {
          e.preventDefault();
          togglePause();
        }
      }

      if (key === 'M') {
        const muted = soundCtrl.toggleMute();
        dom.soundIcon.textContent = muted ? '🔇' : '🔊';
      }

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

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  document.addEventListener('DOMContentLoaded', () => {
    cacheDom();
    initSetup();
    initControls();
  });

})();
