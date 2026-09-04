/**
 * WHO WANTS TO BE A MILLIONAIRE? — ENGLISH GRAMMAR EDITION
 * Complete Game State Controller & TV Quiz Show Logic
 */

(function () {
  'use strict';

  // --- 15-STEP MONEY LADDER CONFIGURATION ---
  const LADDER_VALUES = [
    0,      // Level 0: Start / Reset
    100,    // Level 1 (Easy)
    200,    // Level 2 (Easy)
    300,    // Level 3 (Easy)
    500,    // Level 4 (Easy)
    750,    // Level 5 (Easy)
    1000,   // Level 6 (Medium)
    1500,   // Level 7 (Medium)
    2000,   // Level 8 (Medium)
    3000,   // Level 9 (Medium)
    5000,   // Level 10 (Hard)
    7500,   // Level 11 (Hard)
    10000,  // Level 12 (Hard)
    15000,  // Level 13 (Very Hard)
    20000,  // Level 14 (Very Hard)
    25000   // Level 15 (Very Hard - TOP PRIZE)
  ];

  const LADDER_TIERS = [
    'easy',      // 0
    'easy',      // 1: 100
    'easy',      // 2: 200
    'easy',      // 3: 300
    'easy',      // 4: 500
    'easy',      // 5: 750
    'medium',    // 6: 1,000
    'medium',    // 7: 1,500
    'medium',    // 8: 2,000
    'medium',    // 9: 3,000
    'hard',      // 10: 5,000
    'hard',      // 11: 7,500
    'hard',      // 12: 10,000
    'very_hard', // 13: 15,000
    'very_hard', // 14: 20,000
    'very_hard'  // 15: 25,000
  ];

  const DEFAULT_TEAM_NAMES = [
    ["TEAM A - EAGLES", "TEAM B - LIONS", "TEAM C - SHARKS", "TEAM D - FALCONS"],
    ["TEAM ALPHA", "TEAM BRAVO", "TEAM CHARLIE", "TEAM DELTA"],
    ["GRAMMAR KINGS", "VERB MASTERS", "SYNTAX HEROES", "TENSE TITANS"],
    ["WIZARDS", "DRAGONS", "PHOENIXES", "TIGERS"]
  ];

  // --- GAME STATE ---
  const state = {
    grade: 7,
    teamCount: 3,
    maxQuestions: 20,
    currentQuestionIndex: 0,
    currentTeamIndex: 0,
    teams: [],
    usedQuestionIds: new Set(),
    currentQuestion: null,
    currentShuffledOptions: [],
    correctShuffledIndex: -1,
    isLocking: false,
    isAnswerRevealed: false,
    doubleAnswerActive: false,
    doubleAnswerAttempt: 1,
    teacherTimerInterval: null,
    teacherTimerSeconds: 45
  };

  // --- DOM ELEMENTS ---
  const screens = {
    setup: document.getElementById('setupScreen'),
    game: document.getElementById('gameScreen'),
    results: document.getElementById('resultsScreen')
  };

  // Setup Elements
  const gradeButtons = document.querySelectorAll('#gradeToggleGroup .btn-toggle');
  const teamCountButtons = document.querySelectorAll('#teamCountGroup .btn-choice');
  const gameLengthButtons = document.querySelectorAll('#gameLengthGroup .btn-choice');
  const teamsConfigGrid = document.getElementById('teamsConfigGrid');
  const btnAutoTeamNames = document.getElementById('btnAutoTeamNames');
  const btnStartGame = document.getElementById('btnStartGame');

  // Game Arena Elements
  const currentGradeTag = document.getElementById('currentGradeTag');
  const qCurrentNum = document.getElementById('qCurrentNum');
  const qTotalNum = document.getElementById('qTotalNum');
  const marqueeTeamName = document.getElementById('marqueeTeamName');
  const marqueeTeamBadge = document.getElementById('marqueeTeamBadge');
  const turnIndicatorText = document.getElementById('turnIndicatorText');
  const turnTargetPoints = document.getElementById('turnTargetPoints');
  const doubleAnswerAlert = document.getElementById('doubleAnswerAlert');

  const questionTopicTag = document.getElementById('questionTopicTag');
  const questionPrizeTag = document.getElementById('questionPrizeTag');
  const questionTierTag = document.getElementById('questionTierTag');
  const questionText = document.getElementById('questionText');
  const answerButtons = [
    document.getElementById('optBtn0'),
    document.getElementById('optBtn1'),
    document.getElementById('optBtn2'),
    document.getElementById('optBtn3')
  ];
  const optionLabels = [
    document.getElementById('optLabel0'),
    document.getElementById('optLabel1'),
    document.getElementById('optLabel2'),
    document.getElementById('optLabel3')
  ];

  const suspenseBanner = document.getElementById('suspenseBanner');
  const suspenseStatusText = document.getElementById('suspenseStatusText');
  const explanationBox = document.getElementById('explanationBox');
  const explanationHeader = document.getElementById('explanationHeader');
  const explanationContent = document.getElementById('explanationContent');
  const btnNextQuestion = document.getElementById('btnNextQuestion');

  const ladderList = document.getElementById('ladderList');
  const teamsPodiumsContainer = document.getElementById('teamsPodiumsContainer');

  // Controls & Modals
  const btnSoundToggle = document.getElementById('btnSoundToggle');
  const soundIcon = document.getElementById('soundIcon');
  const soundLabel = document.getElementById('soundLabel');
  const btnRulesModal = document.getElementById('btnRulesModal');
  const btnQuitGame = document.getElementById('btnQuitGame');

  const askTeacherModal = document.getElementById('askTeacherModal');
  const askTeacherTeamName = document.getElementById('askTeacherTeamName');
  const teacherTimerNum = document.getElementById('teacherTimerNum');
  const btnCloseTeacherModal = document.getElementById('btnCloseTeacherModal');

  const resetModal = document.getElementById('resetModal');
  const resetModalTeamName = document.getElementById('resetModalTeamName');
  const resetPrevScore = document.getElementById('resetPrevScore');
  const resetCorrectAnswerText = document.getElementById('resetCorrectAnswerText');
  const btnDismissResetModal = document.getElementById('btnDismissResetModal');

  const rulesModal = document.getElementById('rulesModal');
  const btnCloseRulesX = document.getElementById('btnCloseRulesX');
  const btnCloseRulesBtn = document.getElementById('btnCloseRulesBtn');

  // Results Elements
  const winnerTeamName = document.getElementById('winnerTeamName');
  const winnerPoints = document.getElementById('winnerPoints');
  const leaderboardList = document.getElementById('leaderboardList');
  const btnPlayAgain = document.getElementById('btnPlayAgain');

  // Confetti FX Canvas
  const fxCanvas = document.getElementById('fxCanvas');
  let ctx = fxCanvas.getContext('2d');
  let confettiParticles = [];
  let confettiAnimId = null;

  // ==========================================================================
  // INITIALIZATION & SETUP CONTROLLERS
  // ==========================================================================
  function init() {
    renderLadder();
    renderTeamConfigInputs();
    setupEventListeners();
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }

  function renderLadder() {
    ladderList.innerHTML = '';
    // Render steps 15 down to 1
    for (let level = 15; level >= 1; level--) {
      const val = LADDER_VALUES[level];
      const tier = LADDER_TIERS[level];
      const stepDiv = document.createElement('div');
      stepDiv.className = `ladder-step-item tier-color-${tier} ${level === 15 ? 'is-milestone' : ''}`;
      stepDiv.id = `ladderStep${level}`;
      stepDiv.innerHTML = `
        <span class="ladder-step-num">${level}</span>
        <span class="ladder-step-val">${val.toLocaleString()}</span>
      `;
      ladderList.appendChild(stepDiv);
    }
  }

  function renderTeamConfigInputs() {
    teamsConfigGrid.innerHTML = '';
    const preset = DEFAULT_TEAM_NAMES[0];

    for (let i = 0; i < state.teamCount; i++) {
      const defaultName = preset[i] || `TEAM ${String.fromCharCode(65 + i)}`;
      const card = document.createElement('div');
      card.className = 'team-input-card';
      card.style.borderLeftColor = getTeamColor(i);
      card.innerHTML = `
        <label class="team-input-label" for="teamInput${i}">TEAM ${String.fromCharCode(65 + i)} NAME</label>
        <input type="text" class="team-name-input" id="teamInput${i}" value="${defaultName}" maxlength="20" />
      `;
      teamsConfigGrid.appendChild(card);
    }
  }

  function getTeamColor(index) {
    const colors = ['#38bdf8', '#f43f5e', '#10b981', '#fbbf24'];
    return colors[index % colors.length];
  }

  function setupEventListeners() {
    // Grade Toggles
    gradeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundController.playClick();
        gradeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.grade = parseInt(btn.dataset.grade, 10);
      });
    });

    // Team Count Toggles
    teamCountButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundController.playClick();
        teamCountButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.teamCount = parseInt(btn.dataset.teams, 10);
        renderTeamConfigInputs();
      });
    });

    // Game Length Toggles
    gameLengthButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundController.playClick();
        gameLengthButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.maxQuestions = parseInt(btn.dataset.rounds, 10);
      });
    });

    // Auto Team Names Button
    btnAutoTeamNames.addEventListener('click', () => {
      window.soundController.playClick();
      const randomPreset = DEFAULT_TEAM_NAMES[Math.floor(Math.random() * DEFAULT_TEAM_NAMES.length)];
      for (let i = 0; i < state.teamCount; i++) {
        const input = document.getElementById(`teamInput${i}`);
        if (input) input.value = randomPreset[i] || `TEAM ${String.fromCharCode(65 + i)}`;
      }
    });

    // Start Game
    btnStartGame.addEventListener('click', startGame);

    // Answer Buttons
    answerButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => handleOptionSelected(index));
    });

    // Next Question Button
    btnNextQuestion.addEventListener('click', advanceToNextTurn);

    // Sound Toggle
    btnSoundToggle.addEventListener('click', () => {
      const enabled = window.soundController.toggleSound();
      soundIcon.textContent = enabled ? '🔊' : '🔇';
      soundLabel.textContent = enabled ? 'Sound ON' : 'Sound OFF';
    });

    // Rules Modal
    btnRulesModal.addEventListener('click', () => {
      window.soundController.playClick();
      rulesModal.classList.remove('hidden');
    });
    btnCloseRulesX.addEventListener('click', () => rulesModal.classList.add('hidden'));
    btnCloseRulesBtn.addEventListener('click', () => rulesModal.classList.add('hidden'));

    // End Game Early
    btnQuitGame.addEventListener('click', () => {
      if (confirm("Are you sure you want to end the game and view final results?")) {
        endGame();
      }
    });

    // Ask Teacher Modal Close
    btnCloseTeacherModal.addEventListener('click', closeTeacherModal);

    // Reset Modal Dismiss
    btnDismissResetModal.addEventListener('click', () => {
      resetModal.classList.add('hidden');
      advanceToNextTurn();
    });

    // Play Again
    btnPlayAgain.addEventListener('click', () => {
      window.soundController.playClick();
      stopConfetti();
      switchScreen('setup');
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', handleKeyboard);
  }

  function handleKeyboard(e) {
    if (screens.game.classList.contains('hidden')) return;

    // A, B, C, D or 1, 2, 3, 4
    if (!state.isLocking && !state.isAnswerRevealed) {
      if (e.key === 'a' || e.key === 'A' || e.key === '1') handleOptionSelected(0);
      else if (e.key === 'b' || e.key === 'B' || e.key === '2') handleOptionSelected(1);
      else if (e.key === 'c' || e.key === 'C' || e.key === '3') handleOptionSelected(2);
      else if (e.key === 'd' || e.key === 'D' || e.key === '4') handleOptionSelected(3);
    } else if (state.isAnswerRevealed && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      if (!resetModal.classList.contains('hidden')) {
        resetModal.classList.add('hidden');
        advanceToNextTurn();
      } else if (!explanationBox.classList.contains('hidden')) {
        advanceToNextTurn();
      }
    } else if (e.key === 'm' || e.key === 'M') {
      btnSoundToggle.click();
    }
  }

  function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
    screens[screenName].classList.add('active');
  }

  // ==========================================================================
  // GAME FLOW & STATE MACHINE
  // ==========================================================================
  function startGame() {
    window.soundController.playClick();
    window.soundController.init();

    // Initialize Teams
    state.teams = [];
    for (let i = 0; i < state.teamCount; i++) {
      const input = document.getElementById(`teamInput${i}`);
      const name = input && input.value.trim() ? input.value.trim() : `TEAM ${String.fromCharCode(65 + i)}`;
      state.teams.push({
        id: i,
        name: name,
        color: getTeamColor(i),
        currentStep: 0,
        score: 0,
        highestScore: 0,
        correctAnswers: 0,
        jokers: {
          askTeacher: true,
          fiftyFifty: true,
          doubleAnswer: true
        }
      });
    }

    state.currentQuestionIndex = 0;
    state.currentTeamIndex = 0;
    state.usedQuestionIds.clear();
    state.doubleAnswerActive = false;
    state.doubleAnswerAttempt = 1;

    currentGradeTag.textContent = `${state.grade}TH GRADE`;
    qTotalNum.textContent = state.maxQuestions >= 900 ? '♾️' : state.maxQuestions;

    switchScreen('game');
    renderBottomPodiums();
    loadNextQuestionForActiveTeam();
  }

  function getActiveTeam() {
    return state.teams[state.currentTeamIndex];
  }

  function loadNextQuestionForActiveTeam() {
    state.currentQuestionIndex++;
    qCurrentNum.textContent = state.currentQuestionIndex;

    const team = getActiveTeam();
    const targetStep = Math.min(team.currentStep + 1, 15);
    const tier = LADDER_TIERS[targetStep];
    const targetPoints = LADDER_VALUES[targetStep];

    // Reset Round UI States
    state.isLocking = false;
    state.isAnswerRevealed = false;
    state.doubleAnswerActive = false;
    state.doubleAnswerAttempt = 1;
    doubleAnswerAlert.classList.add('hidden');
    suspenseBanner.classList.add('hidden');
    explanationBox.classList.add('hidden');

    // Update Header Marquee
    marqueeTeamName.textContent = team.name;
    marqueeTeamBadge.textContent = `Level ${team.currentStep} (💰 ${team.score.toLocaleString()} pts)`;
    marqueeTeamName.style.color = team.color;

    turnIndicatorText.textContent = `🎯 ${team.name}'S TURN`;
    turnTargetPoints.innerHTML = `Playing for <b>${targetPoints.toLocaleString()} POINTS</b> (Step ${targetStep})`;

    questionPrizeTag.textContent = `💰 ${targetPoints.toLocaleString()} PTS`;
    questionTierTag.textContent = tier.replace('_', ' ').toUpperCase();
    questionTierTag.className = `tier-tag tier-${tier}`;

    // Select Unused Question from Question Bank
    const bankKey = `grade${state.grade}`;
    const allQuestions = window.MILLIONAIRE_QUESTIONS[bankKey] || [];
    let pool = allQuestions.filter(q => q.tier === tier && !state.usedQuestionIds.has(q.id));

    // Fallback if specific tier pool exhausted in endless matches
    if (pool.length === 0) {
      pool = allQuestions.filter(q => !state.usedQuestionIds.has(q.id));
    }
    if (pool.length === 0) {
      // If entire 160-question bank exhausted, recycle
      state.usedQuestionIds.clear();
      pool = allQuestions.filter(q => q.tier === tier);
    }

    const randomQuestion = pool[Math.floor(Math.random() * pool.length)];
    state.usedQuestionIds.add(randomQuestion.id);
    state.currentQuestion = randomQuestion;

    // Randomize Option Positions A, B, C, D
    const originalOptions = randomQuestion.options.map((opt, idx) => ({
      text: opt,
      isCorrect: idx === randomQuestion.correctIndex
    }));
    const shuffled = shuffleArray([...originalOptions]);
    state.currentShuffledOptions = shuffled;
    state.correctShuffledIndex = shuffled.findIndex(o => o.isCorrect);

    // Update Question UI
    questionTopicTag.textContent = randomQuestion.topic.toUpperCase();
    questionText.textContent = randomQuestion.question;

    answerButtons.forEach((btn, idx) => {
      btn.className = 'answer-btn';
      btn.disabled = false;
      optionLabels[idx].textContent = shuffled[idx].text;
    });

    updateLadderHighlight(targetStep);
    renderBottomPodiums();
    window.soundController.playQuestionSting();
  }

  function updateLadderHighlight(targetStep) {
    const team = getActiveTeam();
    for (let level = 1; level <= 15; level++) {
      const stepEl = document.getElementById(`ladderStep${level}`);
      if (!stepEl) continue;

      stepEl.classList.remove('is-current-active', 'is-past-passed');

      if (level === targetStep) {
        stepEl.classList.add('is-current-active');
      } else if (level <= team.currentStep) {
        stepEl.classList.add('is-past-passed');
      }
    }
  }

  function renderBottomPodiums() {
    teamsPodiumsContainer.innerHTML = '';

    state.teams.forEach((team, idx) => {
      const isActive = idx === state.currentTeamIndex;
      const podium = document.createElement('div');
      podium.className = `team-podium-card ${isActive ? 'is-active-turn' : 'is-inactive-turn'}`;
      podium.style.borderTop = `4px solid ${team.color}`;

      podium.innerHTML = `
        <div class="team-podium-header">
          <span class="team-podium-name" style="color: ${team.color}">
            ${team.name}
          </span>
          ${isActive ? '<span class="team-turn-halo-badge">ACTIVE TURN</span>' : ''}
        </div>
        <div class="team-podium-score-row">
          <div>
            <span class="podium-score-lbl">CURRENT LADDER</span>
            <div class="podium-score-val">${team.score.toLocaleString()} PTS</div>
          </div>
          <div style="text-align: right;">
            <span class="podium-score-lbl">STEP</span>
            <div style="font-size: 1.1rem; font-weight: 800; color: #ffffff;">${team.currentStep} / 15</div>
          </div>
        </div>
        <div class="team-jokers-row">
          <button type="button" class="joker-btn ${!team.jokers.askTeacher ? 'is-used' : ''}" 
                  data-joker="askTeacher" data-team="${idx}" 
                  ${!isActive || !team.jokers.askTeacher || state.isLocking || state.isAnswerRevealed ? 'disabled' : ''}>
            <span class="joker-icon">👨‍🏫</span>
            <span class="joker-text">${team.jokers.askTeacher ? 'Ask Teacher' : 'USED'}</span>
          </button>
          <button type="button" class="joker-btn ${!team.jokers.fiftyFifty ? 'is-used' : ''}" 
                  data-joker="fiftyFifty" data-team="${idx}" 
                  ${!isActive || !team.jokers.fiftyFifty || state.isLocking || state.isAnswerRevealed ? 'disabled' : ''}>
            <span class="joker-icon">✂️</span>
            <span class="joker-text">${team.jokers.fiftyFifty ? '50:50' : 'USED'}</span>
          </button>
          <button type="button" class="joker-btn ${!team.jokers.doubleAnswer ? 'is-used' : ''}" 
                  data-joker="doubleAnswer" data-team="${idx}" 
                  ${!isActive || !team.jokers.doubleAnswer || state.isLocking || state.isAnswerRevealed ? 'disabled' : ''}>
            <span class="joker-icon">🔁</span>
            <span class="joker-text">${team.jokers.doubleAnswer ? 'Double Ans' : 'USED'}</span>
          </button>
        </div>
      `;

      // Attach Joker Click Handlers
      if (isActive) {
        const jokerBtns = podium.querySelectorAll('.joker-btn');
        jokerBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const jokerType = btn.dataset.joker;
            handleJokerActivation(jokerType);
          });
        });
      }

      teamsPodiumsContainer.appendChild(podium);
    });
  }

  // ==========================================================================
  // JOKER ACTIVATION LOGIC
  // ==========================================================================
  function handleJokerActivation(jokerType) {
    const team = getActiveTeam();
    if (!team.jokers[jokerType] || state.isLocking || state.isAnswerRevealed) return;

    if (jokerType === 'askTeacher') {
      window.soundController.playAskTeacher();
      team.jokers.askTeacher = false;
      openTeacherModal();
    } else if (jokerType === 'fiftyFifty') {
      window.soundController.playJoker5050();
      team.jokers.fiftyFifty = false;
      activateFiftyFifty();
    } else if (jokerType === 'doubleAnswer') {
      window.soundController.playDoubleAnswer();
      team.jokers.doubleAnswer = false;
      state.doubleAnswerActive = true;
      state.doubleAnswerAttempt = 1;
      doubleAnswerAlert.classList.remove('hidden');
    }

    renderBottomPodiums();
  }

  // JOKER 1: ASK THE TEACHER
  function openTeacherModal() {
    const team = getActiveTeam();
    askTeacherTeamName.textContent = team.name;
    askTeacherModal.classList.remove('hidden');

    state.teacherTimerSeconds = 45;
    teacherTimerNum.textContent = `${state.teacherTimerSeconds}s`;

    if (state.teacherTimerInterval) clearInterval(state.teacherTimerInterval);
    state.teacherTimerInterval = setInterval(() => {
      state.teacherTimerSeconds--;
      teacherTimerNum.textContent = `${state.teacherTimerSeconds}s`;
      if (state.teacherTimerSeconds <= 0) {
        closeTeacherModal();
      }
    }, 1000);
  }

  function closeTeacherModal() {
    if (state.teacherTimerInterval) {
      clearInterval(state.teacherTimerInterval);
      state.teacherTimerInterval = null;
    }
    askTeacherModal.classList.add('hidden');
  }

  // JOKER 2: 50:50
  function activateFiftyFifty() {
    const wrongIndices = [];
    state.currentShuffledOptions.forEach((opt, idx) => {
      if (!opt.isCorrect && !answerButtons[idx].classList.contains('eliminated-5050')) {
        wrongIndices.push(idx);
      }
    });

    // Randomly pick 2 wrong options to eliminate
    const shuffledWrong = shuffleArray(wrongIndices);
    const toEliminate = shuffledWrong.slice(0, 2);

    toEliminate.forEach(idx => {
      answerButtons[idx].classList.add('eliminated-5050');
      answerButtons[idx].disabled = true;
    });
  }

  // ==========================================================================
  // ANSWER SELECTION & SUSPENSE SEQUENCE
  // ==========================================================================
  function handleOptionSelected(index) {
    if (state.isLocking || state.isAnswerRevealed) return;
    const selectedBtn = answerButtons[index];
    if (selectedBtn.classList.contains('eliminated-5050') || selectedBtn.disabled) return;

    state.isLocking = true;
    window.soundController.playOptionSelect();

    // Disable all options during suspense lock
    answerButtons.forEach(btn => btn.disabled = true);
    selectedBtn.classList.add('selected-locking');

    suspenseBanner.classList.remove('hidden');
    suspenseStatusText.textContent = `LOCKING IN FINAL ANSWER: OPTION ${String.fromCharCode(65 + index)}...`;
    window.soundController.playLockIn();

    // Suspense delay before dramatic reveal (1.4s)
    setTimeout(() => {
      revealAnswerResult(index);
    }, 1400);
  }

  function revealAnswerResult(selectedIndex) {
    state.isLocking = false;
    suspenseBanner.classList.add('hidden');

    const isCorrect = selectedIndex === state.correctShuffledIndex;
    const team = getActiveTeam();

    if (isCorrect) {
      // --- CORRECT ANSWER ---
      state.isAnswerRevealed = true;
      window.soundController.playCorrect();
      window.soundController.playLadderClimb();

      answerButtons[selectedIndex].classList.remove('selected-locking');
      answerButtons[selectedIndex].classList.add('correct-reveal');

      // Update Team Score & Step
      team.currentStep = Math.min(team.currentStep + 1, 15);
      team.score = LADDER_VALUES[team.currentStep];
      if (team.score > team.highestScore) {
        team.highestScore = team.score;
      }
      team.correctAnswers++;

      // Update Explanation Box
      explanationHeader.className = 'explanation-header is-correct';
      explanationHeader.textContent = `✓ CORRECT! +${team.score.toLocaleString()} PTS`;
      explanationContent.textContent = state.currentQuestion.explanation;
      explanationBox.classList.remove('hidden');

      updateLadderHighlight(team.currentStep);
      renderBottomPodiums();

    } else {
      // --- WRONG ANSWER ---
      if (state.doubleAnswerActive && state.doubleAnswerAttempt === 1) {
        // DOUBLE ANSWER: Attempt 1 Failed -> Give 2nd Attempt
        window.soundController.playWrong();
        state.doubleAnswerAttempt = 2;

        answerButtons[selectedIndex].classList.remove('selected-locking');
        answerButtons[selectedIndex].classList.add('eliminated-5050');
        answerButtons[selectedIndex].disabled = true;

        // Re-enable remaining options
        answerButtons.forEach((btn, idx) => {
          if (idx !== selectedIndex && !btn.classList.contains('eliminated-5050')) {
            btn.disabled = false;
          }
        });

        doubleAnswerAlert.textContent = "⚠️ FIRST CHOICE WAS WRONG! DOUBLE ANSWER: PICK 1 MORE REMAINING OPTION!";
        state.isLocking = false;
        return;
      }

      // Final Wrong Answer: Reset Progress to 0
      state.isAnswerRevealed = true;
      window.soundController.playWrong();

      answerButtons[selectedIndex].classList.remove('selected-locking');
      answerButtons[selectedIndex].classList.add('wrong-reveal');
      answerButtons[state.correctShuffledIndex].classList.add('correct-reveal');

      const prevScore = team.score;
      // CRITICAL RULE: RESET PROGRESS TO ZERO
      team.currentStep = 0;
      team.score = 0;

      // Show Reset Modal
      resetModalTeamName.textContent = team.name;
      resetPrevScore.textContent = `${prevScore.toLocaleString()} PTS`;
      resetCorrectAnswerText.textContent = `${String.fromCharCode(65 + state.correctShuffledIndex)}) ${state.currentShuffledOptions[state.correctShuffledIndex].text}`;
      
      setTimeout(() => {
        resetModal.classList.remove('hidden');
      }, 700);

      updateLadderHighlight(0);
      renderBottomPodiums();
    }
  }

  function advanceToNextTurn() {
    explanationBox.classList.add('hidden');

    // Check if max question limit reached
    if (state.maxQuestions < 900 && state.currentQuestionIndex >= state.maxQuestions) {
      endGame();
      return;
    }

    // Advance to next team in rotation
    state.currentTeamIndex = (state.currentTeamIndex + 1) % state.teams.length;
    loadNextQuestionForActiveTeam();
  }

  // ==========================================================================
  // GAME OVER & RESULTS SCREEN
  // ==========================================================================
  function endGame() {
    switchScreen('results');
    window.soundController.playVictory();
    startConfetti();

    // Sort Teams by Highest Score achieved, then current score, then correct answers
    const sortedTeams = [...state.teams].sort((a, b) => {
      if (b.highestScore !== a.highestScore) return b.highestScore - a.highestScore;
      if (b.score !== a.score) return b.score - a.score;
      return b.correctAnswers - a.correctAnswers;
    });

    const champion = sortedTeams[0];
    winnerTeamName.textContent = champion.name;
    winnerTeamName.style.color = champion.color;
    winnerPoints.textContent = `${(champion.highestScore || champion.score).toLocaleString()} PTS`;

    leaderboardList.innerHTML = '';
    sortedTeams.forEach((team, rank) => {
      const row = document.createElement('div');
      row.className = 'leaderboard-row';
      const medal = rank === 0 ? '🥇' : rank === 1 ? '🥈' : rank === 2 ? '🥉' : '🎖️';
      row.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span class="rank-pill rank-${rank + 1}">${medal}</span>
          <span style="color: ${team.color}; font-weight: 800;">${team.name}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1.5rem;">
          <span style="font-size: 0.85rem; color: #94a3b8;">Peak: <b>${team.highestScore.toLocaleString()} pts</b></span>
          <span style="font-family: var(--font-display); font-weight: 900; color: var(--gold-primary); font-size: 1.25rem;">
            ${team.score.toLocaleString()} PTS
          </span>
        </div>
      `;
      leaderboardList.appendChild(row);
    });
  }

  // ==========================================================================
  // CONFETTI CELEBRATION FX
  // ==========================================================================
  function resizeCanvas() {
    fxCanvas.width = window.innerWidth;
    fxCanvas.height = window.innerHeight;
  }

  function startConfetti() {
    confettiParticles = [];
    const colors = ['#ffd700', '#f59e0b', '#38bdf8', '#10b981', '#f43f5e', '#a855f7'];

    for (let i = 0; i < 120; i++) {
      confettiParticles.push({
        x: Math.random() * fxCanvas.width,
        y: Math.random() * -fxCanvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 120 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleInc: Math.random() * 0.07 + 0.05,
        tiltAngle: 0
      });
    }

    function draw() {
      ctx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
      confettiParticles.forEach(p => {
        p.tiltAngle += p.tiltAngleInc;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.tilt = Math.sin(p.tiltAngle - (p.r / 3)) * 15;

        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + (p.r / 4), p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + (p.r / 4));
        ctx.stroke();

        if (p.y > fxCanvas.height) {
          p.x = Math.random() * fxCanvas.width;
          p.y = -20;
        }
      });
      confettiAnimId = requestAnimationFrame(draw);
    }
    draw();
  }

  function stopConfetti() {
    if (confettiAnimId) {
      cancelAnimationFrame(confettiAnimId);
      confettiAnimId = null;
    }
    ctx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
  }

  // --- UTILITY: Array Shuffle ---
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Boot on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
