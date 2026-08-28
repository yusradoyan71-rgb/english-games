/**
 * WORD PATH - Core Game Engine
 * Manages game state, path generation, animated token movement,
 * question lifecycle, scoring, streak system, and accessibility hotkeys.
 */

class WordPathGame {
  constructor() {
    this.currentGrade = 7;
    this.currentStageIndex = 0;
    this.currentTileIndex = 0;
    this.currentQuestion = null;
    this.currentStageQuestions = [];
    this.usedQuestionIds = new Set();

    // Stats
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.totalCorrect = 0;
    this.totalAttempts = 0;
    this.stageCorrect = 0;
    this.stageAttempts = 0;

    // Timer
    this.timerInterval = null;
    this.timeLeft = 0;
    this.maxTime = 20;

    // Audio & State
    this.isAnswerLocked = false;
    this.activeScreen = 'menu'; // 'menu', 'game', 'stage_clear', 'game_clear'

    this.initDOM();
    this.bindEvents();
    this.updateSoundToggleUI();
  }

  initDOM() {
    // Screens
    this.screenMenu = document.getElementById('menuScreen');
    this.screenGame = document.getElementById('gameScreen');

    // Modals
    this.modalStageClear = document.getElementById('modalStageClear');
    this.modalGameClear = document.getElementById('modalGameClear');
    this.modalHowToPlay = document.getElementById('modalHowToPlay');

    // HUD elements
    this.hudStageBadge = document.getElementById('hudStageBadge');
    this.hudScore = document.getElementById('hudScore');
    this.hudStreak = document.getElementById('hudStreak');
    this.hudStreakContainer = document.getElementById('hudStreakContainer');
    this.hudTimerContainer = document.getElementById('hudTimerContainer');
    this.hudTimer = document.getElementById('hudTimer');
    this.btnSoundToggle = document.getElementById('btnSoundToggle');
    this.btnMenuSound = document.getElementById('btnMenuSound');

    // Board elements
    this.stageStepIndicator = document.getElementById('stageStepIndicator');
    this.pathSvg = document.getElementById('pathSvg');

    // Challenge elements
    this.rootWordBadge = document.getElementById('rootWordBadge');
    this.rootWordValue = document.getElementById('rootWordValue');
    this.questionStageTag = document.getElementById('questionStageTag');
    this.sentenceContainer = document.getElementById('sentenceContainer');
    this.optionsGrid = document.getElementById('optionsGrid');

    // Feedback elements
    this.feedbackContainer = document.getElementById('feedbackContainer');
    this.feedbackStatus = document.getElementById('feedbackStatus');
    this.feedbackPos = document.getElementById('feedbackPos');
    this.feedbackExplanation = document.getElementById('feedbackExplanation');
    this.feedbackRule = document.getElementById('feedbackRule');
    this.btnFeedbackNext = document.getElementById('btnFeedbackNext');
    this.wordFamilyDrawer = document.getElementById('wordFamilyDrawer');
    this.wfNodesList = document.getElementById('wfNodesList');

    // Stage Clear Modal Elements
    this.stageClearTitle = document.getElementById('stageClearTitle');
    this.stageClearDesc = document.getElementById('stageClearDesc');
    this.stageClearScore = document.getElementById('stageClearScore');
    this.stageClearAccuracy = document.getElementById('stageClearAccuracy');
    this.stageClearStreak = document.getElementById('stageClearStreak');
    this.btnNextStage = document.getElementById('btnNextStage');

    // Game Clear Modal Elements
    this.gameClearGradeBadge = document.getElementById('gameClearGradeBadge');
    this.gameClearScore = document.getElementById('gameClearScore');
    this.gameClearAccuracy = document.getElementById('gameClearAccuracy');
    this.gameClearStreak = document.getElementById('gameClearStreak');
    this.btnPlayAgain = document.getElementById('btnPlayAgain');
    this.btnSwitchGrade = document.getElementById('btnSwitchGrade');
  }

  bindEvents() {
    // Menu Buttons
    document.getElementById('btnStartG7')?.addEventListener('click', () => {
      soundManager.playTap();
      this.startGame(7);
    });

    document.getElementById('btnStartG8')?.addEventListener('click', () => {
      soundManager.playTap();
      this.startGame(8);
    });

    document.getElementById('btnHowToPlay')?.addEventListener('click', () => {
      soundManager.playTap();
      this.openHowToPlay();
    });

    document.getElementById('btnCloseHowToPlay')?.addEventListener('click', () => {
      soundManager.playTap();
      this.closeHowToPlay();
    });

    // Sound Toggles
    const toggleSound = () => {
      const muted = soundManager.toggleMute();
      this.updateSoundToggleUI();
      if (!muted) soundManager.playTap();
    };

    this.btnSoundToggle?.addEventListener('click', toggleSound);
    this.btnMenuSound?.addEventListener('click', toggleSound);

    // Quit to Menu
    document.getElementById('btnQuitToMenu')?.addEventListener('click', () => {
      soundManager.playTap();
      if (confirm("Return to main menu? Your current game progress will be reset.")) {
        this.goToMenu();
      }
    });

    // Feedback Next Button
    this.btnFeedbackNext?.addEventListener('click', () => {
      soundManager.playTap();
      this.advanceAfterFeedback();
    });

    // Next Stage Modal Button
    this.btnNextStage?.addEventListener('click', () => {
      soundManager.playTap();
      this.modalStageClear.classList.remove('active');
      this.nextStage();
    });

    // Game Clear Modal Buttons
    this.btnPlayAgain?.addEventListener('click', () => {
      soundManager.playTap();
      this.modalGameClear.classList.remove('active');
      this.startGame(this.currentGrade);
    });

    this.btnSwitchGrade?.addEventListener('click', () => {
      soundManager.playTap();
      this.modalGameClear.classList.remove('active');
      this.goToMenu();
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => this.handleKeyboard(e));
  }

  updateSoundToggleUI() {
    const isMuted = soundManager.isMuted();
    const icon = isMuted ? '🔇' : '🔊';
    const text = isMuted ? 'Sound OFF' : 'Sound ON';

    if (this.btnSoundToggle) {
      this.btnSoundToggle.innerHTML = `<span class="btn-icon">${icon}</span> ${text}`;
    }
    if (this.btnMenuSound) {
      this.btnMenuSound.innerHTML = `<span class="btn-icon">${icon}</span> ${text}`;
    }
  }

  handleKeyboard(e) {
    if (e.repeat) return;

    // ESC to close modal or go to menu
    if (e.key === 'Escape') {
      if (this.modalHowToPlay.classList.contains('active')) {
        this.closeHowToPlay();
      }
      return;
    }

    // Mute shortcut
    if (e.key === 'm' || e.key === 'M') {
      soundManager.toggleMute();
      this.updateSoundToggleUI();
      return;
    }

    // Feedback Next / Modal Confirm via Space or Enter
    if (e.key === 'Enter' || e.key === ' ') {
      if (this.modalStageClear.classList.contains('active')) {
        e.preventDefault();
        this.btnNextStage.click();
        return;
      }
      if (this.modalGameClear.classList.contains('active')) {
        e.preventDefault();
        this.btnPlayAgain.click();
        return;
      }
      if (this.modalHowToPlay.classList.contains('active')) {
        e.preventDefault();
        this.closeHowToPlay();
        return;
      }
      if (this.feedbackContainer.classList.contains('active')) {
        e.preventDefault();
        this.advanceAfterFeedback();
        return;
      }
    }

    // Option Keys (1-4 or A-D)
    if (!this.isAnswerLocked && this.activeScreen === 'game') {
      let optionIndex = -1;
      if (e.key === '1' || e.key === 'a' || e.key === 'A') optionIndex = 0;
      else if (e.key === '2' || e.key === 'b' || e.key === 'B') optionIndex = 1;
      else if (e.key === '3' || e.key === 'c' || e.key === 'C') optionIndex = 2;
      else if (e.key === '4' || e.key === 'd' || e.key === 'D') optionIndex = 3;

      if (optionIndex >= 0) {
        const optionButtons = this.optionsGrid.querySelectorAll('.btn-option');
        if (optionButtons[optionIndex]) {
          optionButtons[optionIndex].click();
        }
      }
    }
  }

  goToMenu() {
    this.stopTimer();
    this.activeScreen = 'menu';
    this.screenGame.classList.remove('active');
    this.screenMenu.classList.add('active');
    this.modalStageClear.classList.remove('active');
    this.modalGameClear.classList.remove('active');
    this.modalHowToPlay.classList.remove('active');
  }

  openHowToPlay() {
    this.modalHowToPlay.classList.add('active');
  }

  closeHowToPlay() {
    this.modalHowToPlay.classList.remove('active');
  }

  startGame(grade) {
    this.currentGrade = grade;
    this.currentStageIndex = 0;
    this.currentTileIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.totalCorrect = 0;
    this.totalAttempts = 0;
    this.usedQuestionIds.clear();

    this.activeScreen = 'game';
    this.screenMenu.classList.remove('active');
    this.screenGame.classList.add('active');

    this.loadStage(0);
  }

  loadStage(stageIndex) {
    this.currentStageIndex = stageIndex;
    this.currentTileIndex = 0;
    this.stageCorrect = 0;
    this.stageAttempts = 0;

    const stages = getStagesForGrade(this.currentGrade);
    const stageInfo = stages[this.currentStageIndex];

    // Update HUD
    this.hudStageBadge.innerHTML = `<span>${stageInfo.icon}</span> ${stageInfo.name.split(':')[0]} — Gr. ${this.currentGrade}`;
    this.updateHUD();

    // Prepare questions for this stage
    const rawQuestions = getQuestionsForGradeAndStage(this.currentGrade, stageInfo.id);
    this.currentStageQuestions = this.shuffleArray([...rawQuestions]);

    // Build the SVG Board Path
    this.renderPathBoard(stageInfo.tilesCount);

    // Present first tile challenge
    this.loadNextQuestion();
  }

  renderPathBoard(tilesCount) {
    this.totalTiles = tilesCount;
    this.stageStepIndicator.textContent = `Tile ${this.currentTileIndex + 1} of ${this.totalTiles}`;

    // SVG coordinates setup for a curved snake journey
    const width = 560;
    const height = 360;
    const padding = 50;

    // Generate snake / serpentine nodes
    this.tilePoints = [];
    const rows = 3;
    const cols = Math.ceil(tilesCount / rows);

    for (let i = 0; i < tilesCount; i++) {
      const row = Math.floor(i / cols);
      const isReverseRow = row % 2 === 1;
      const col = isReverseRow ? (cols - 1 - (i % cols)) : (i % cols);

      const x = padding + (col / Math.max(1, cols - 1)) * (width - 2 * padding);
      const y = padding + (row / Math.max(1, rows - 1)) * (height - 2 * padding);

      this.tilePoints.push({ x, y, index: i });
    }

    // Build SVG Path string
    let pathD = `M ${this.tilePoints[0].x} ${this.tilePoints[0].y}`;
    for (let i = 1; i < this.tilePoints.length; i++) {
      const prev = this.tilePoints[i - 1];
      const curr = this.tilePoints[i];
      const midX = (prev.x + curr.x) / 2;
      const midY = (prev.y + curr.y) / 2;
      pathD += ` Q ${midX} ${midY + (i % 2 === 0 ? -12 : 12)} ${curr.x} ${curr.y}`;
    }

    // SVG HTML
    let svgContent = `
      <defs>
        <linearGradient id="pathGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00d2ff" />
          <stop offset="50%" stop-color="#6366f1" />
          <stop offset="100%" stop-color="#10b981" />
        </linearGradient>
        <filter id="tileGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Path Tracks -->
      <path class="path-track-bg" d="${pathD}" />
      <path class="path-track-active" d="${pathD}" />

      <!-- Tile Nodes -->
    `;

    this.tilePoints.forEach((pt, idx) => {
      const isStart = idx === 0;
      const isFinish = idx === tilesCount - 1;
      const isCompleted = idx < this.currentTileIndex;
      const isCurrent = idx === this.currentTileIndex;

      let statusClass = 'locked';
      if (isCompleted) statusClass = 'completed';
      else if (isCurrent) statusClass = 'current';

      let label = `${idx + 1}`;
      if (isStart) label = 'START';
      if (isFinish) label = '🏆';

      svgContent += `
        <g class="tile-node ${statusClass} ${isFinish ? 'finish' : ''}" id="tile-node-${idx}" transform="translate(${pt.x}, ${pt.y})">
          <circle class="tile-circle" r="22" />
          <text text-anchor="middle" dy="5" font-family="'Outfit', sans-serif" font-weight="800" font-size="${label.length > 2 ? '10' : '14'}" fill="#ffffff">${label}</text>
        </g>
      `;
    });

    // Animated Token Avatar
    const startPt = this.tilePoints[this.currentTileIndex];
    svgContent += `
      <g id="playerToken" class="player-token" transform="translate(${startPt.x}, ${startPt.y})">
        <circle r="15" fill="#00d2ff" filter="url(#tileGlow)" />
        <circle r="12" fill="#ffffff" />
        <circle r="8" fill="#0369a1" />
        <text text-anchor="middle" dy="4" font-size="10" fill="#ffffff">★</text>
      </g>
    `;

    this.pathSvg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    this.pathSvg.innerHTML = svgContent;
  }

  updateTokenPosition() {
    this.stageStepIndicator.textContent = `Tile ${this.currentTileIndex + 1} of ${this.totalTiles}`;

    // Update tile visual states
    this.tilePoints.forEach((pt, idx) => {
      const nodeEl = document.getElementById(`tile-node-${idx}`);
      if (!nodeEl) return;

      nodeEl.classList.remove('completed', 'current', 'locked');
      if (idx < this.currentTileIndex) {
        nodeEl.classList.add('completed');
      } else if (idx === this.currentTileIndex) {
        nodeEl.classList.add('current');
      } else {
        nodeEl.classList.add('locked');
      }
    });

    // Animate token
    const pt = this.tilePoints[this.currentTileIndex];
    const tokenEl = document.getElementById('playerToken');
    if (tokenEl && pt) {
      tokenEl.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
      soundManager.playStep();
    }
  }

  loadNextQuestion() {
    this.isAnswerLocked = false;
    this.feedbackContainer.classList.remove('active');
    this.wordFamilyDrawer.classList.remove('visible');

    // Get available questions for this stage
    const available = this.currentStageQuestions.filter(q => !this.usedQuestionIds.has(q.id));
    if (available.length === 0) {
      // Re-shuffle stage questions if pool exhausted
      this.currentStageQuestions = this.shuffleArray([...this.currentStageQuestions]);
      this.currentQuestion = this.currentStageQuestions[0];
    } else {
      this.currentQuestion = available[0];
    }

    this.usedQuestionIds.add(this.currentQuestion.id);

    // Render Question
    this.renderQuestionUI(this.currentQuestion);

    // Setup Stage Timer if applicable
    const stages = getStagesForGrade(this.currentGrade);
    const stageInfo = stages[this.currentStageIndex];

    if (stageInfo.hasTimer) {
      this.startTimer(stageInfo.timerSeconds || 20);
    } else {
      this.stopTimer();
      this.hudTimerContainer.style.display = 'none';
    }
  }

  renderQuestionUI(q) {
    // Root word badge
    if (q.rootWord) {
      this.rootWordBadge.style.display = 'inline-flex';
      this.rootWordValue.textContent = q.rootWord;
    } else {
      this.rootWordBadge.style.display = 'none';
    }

    this.questionStageTag.textContent = `Grade ${this.currentGrade} • ${q.partOfSpeech || 'Word Formation'}`;

    // Sentence Box with Blank Highlight
    const formattedSentence = q.question.replace('______', '<span class="blank-highlight">______</span>');
    this.sentenceContainer.innerHTML = `<p class="sentence-text">${formattedSentence}</p>`;

    // Options Buttons
    this.optionsGrid.innerHTML = '';
    const keys = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn-option';
      btn.setAttribute('type', 'button');
      btn.setAttribute('data-option', opt);
      btn.innerHTML = `
        <span class="option-key">${keys[idx]}</span>
        <span class="option-text">${opt}</span>
      `;

      btn.addEventListener('click', () => {
        if (this.isAnswerLocked) return;
        this.checkAnswer(opt, btn);
      });

      this.optionsGrid.appendChild(btn);
    });
  }

  startTimer(seconds) {
    this.stopTimer();
    this.timeLeft = seconds;
    this.maxTime = seconds;
    this.hudTimerContainer.style.display = 'flex';
    this.hudTimerContainer.classList.remove('warning');
    this.hudTimer.textContent = `${this.timeLeft}s`;

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.hudTimer.textContent = `${this.timeLeft}s`;

      if (this.timeLeft <= 5) {
        this.hudTimerContainer.classList.add('warning');
      }

      if (this.timeLeft <= 0) {
        this.stopTimer();
        this.handleTimeout();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  handleTimeout() {
    if (this.isAnswerLocked) return;
    this.isAnswerLocked = true;
    soundManager.playWrong();

    this.totalAttempts++;
    this.stageAttempts++;
    this.streak = 0;
    this.updateHUD();

    // Highlight correct button
    const buttons = this.optionsGrid.querySelectorAll('.btn-option');
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.getAttribute('data-option') === this.currentQuestion.correctAnswer) {
        btn.classList.add('correct');
      }
    });

    this.showFeedback(false, "Time's up! Let's examine the correct answer:");
  }

  checkAnswer(selectedOption, clickedButton) {
    this.isAnswerLocked = true;
    this.stopTimer();

    this.totalAttempts++;
    this.stageAttempts++;

    const isCorrect = selectedOption.toLowerCase().trim() === this.currentQuestion.correctAnswer.toLowerCase().trim();
    const buttons = this.optionsGrid.querySelectorAll('.btn-option');

    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.getAttribute('data-option') === this.currentQuestion.correctAnswer) {
        btn.classList.add('correct');
      }
    });

    if (isCorrect) {
      clickedButton.classList.add('correct');
      soundManager.playCorrect();

      // Score Calculation
      let points = 100;
      if (this.timeLeft > 0) {
        // Speed bonus
        const speedBonus = Math.floor((this.timeLeft / this.maxTime) * 40);
        points += speedBonus;
      }

      this.streak++;
      if (this.streak > this.maxStreak) {
        this.maxStreak = this.streak;
      }

      // Streak multiplier bonus
      if (this.streak >= 3) {
        points += 50;
        soundManager.playStreak(this.streak);
      }

      this.score += points;
      this.totalCorrect++;
      this.stageCorrect++;

      this.updateHUD();
      this.showFeedback(true, "Correct!");
    } else {
      clickedButton.classList.add('wrong');
      soundManager.playWrong();
      this.streak = 0;
      this.updateHUD();
      this.showFeedback(false, "Not quite!");
    }
  }

  showFeedback(isCorrect, statusText) {
    this.feedbackContainer.classList.add('active');
    this.feedbackStatus.className = `feedback-status ${isCorrect ? 'correct' : 'wrong'}`;
    this.feedbackStatus.innerHTML = `<span>${isCorrect ? '✨' : 'ℹ️'}</span> ${statusText}`;

    this.feedbackPos.textContent = this.currentQuestion.partOfSpeech || 'Word Form';
    this.feedbackExplanation.textContent = this.currentQuestion.explanation;

    if (this.currentQuestion.rule) {
      this.feedbackRule.style.display = 'block';
      this.feedbackRule.textContent = this.currentQuestion.rule;
    } else {
      this.feedbackRule.style.display = 'none';
    }

    // Word Family Drawer
    if (this.currentQuestion.wordFamily && this.currentQuestion.wordFamily.length > 0) {
      this.wordFamilyDrawer.classList.add('visible');
      this.wfNodesList.innerHTML = '';

      this.currentQuestion.wordFamily.forEach(wf => {
        const isMatch = wf.word.toLowerCase() === this.currentQuestion.correctAnswer.toLowerCase();
        const span = document.createElement('span');
        span.className = `wf-node ${isMatch ? 'current-match' : ''}`;
        span.innerHTML = `<strong>${wf.word}</strong> <span class="wf-node-pos">(${wf.pos})</span>`;
        this.wfNodesList.appendChild(span);
      });
    } else {
      this.wordFamilyDrawer.classList.remove('visible');
    }

    // Focus the next button for seamless Enter key workflow
    this.btnFeedbackNext.focus();
  }

  advanceAfterFeedback() {
    this.feedbackContainer.classList.remove('active');
    this.wordFamilyDrawer.classList.remove('visible');

    const wasCorrect = this.optionsGrid.querySelector('.btn-option.correct')?.getAttribute('data-option') === this.currentQuestion.correctAnswer;

    if (wasCorrect) {
      this.currentTileIndex++;
      this.updateTokenPosition();

      // Check if stage completed
      if (this.currentTileIndex >= this.totalTiles - 1) {
        this.onStageComplete();
        return;
      }
    }

    // Load next challenge tile
    this.loadNextQuestion();
  }

  onStageComplete() {
    soundManager.playStageWin();

    const stages = getStagesForGrade(this.currentGrade);
    const currentStage = stages[this.currentStageIndex];
    const isFinalStage = this.currentStageIndex >= stages.length - 1;

    const accuracy = this.stageAttempts > 0 ? Math.round((this.stageCorrect / this.stageAttempts) * 100) : 100;

    if (isFinalStage) {
      this.onGameComplete();
      return;
    }

    this.stageClearTitle.textContent = `${currentStage.name} Cleared! 🎉`;
    this.stageClearDesc.textContent = `Great word formation mastery! Ready for the next challenge path?`;
    this.stageClearScore.textContent = this.score;
    this.stageClearAccuracy.textContent = `${accuracy}%`;
    this.stageClearStreak.textContent = `x${this.streak}`;

    this.modalStageClear.classList.add('active');
  }

  nextStage() {
    this.loadStage(this.currentStageIndex + 1);
  }

  onGameComplete() {
    soundManager.playGameWin();

    const accuracy = this.totalAttempts > 0 ? Math.round((this.totalCorrect / this.totalAttempts) * 100) : 100;

    this.gameClearGradeBadge.textContent = `Grade ${this.currentGrade} Champion 🏆`;
    this.gameClearScore.textContent = this.score;
    this.gameClearAccuracy.textContent = `${accuracy}%`;
    this.gameClearStreak.textContent = `x${this.maxStreak}`;

    this.modalGameClear.classList.add('active');
  }

  updateHUD() {
    this.hudScore.textContent = this.score;
    this.hudStreak.textContent = `x${this.streak}`;

    if (this.streak >= 2) {
      this.hudStreakContainer.classList.add('active');
    } else {
      this.hudStreakContainer.classList.remove('active');
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

// Bootstrap Game on Window Load
document.addEventListener('DOMContentLoaded', () => {
  window.wordPathApp = new WordPathGame();
});
