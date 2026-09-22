/**
 * WORD RUSH — Multi-Round Tournament Engine & State Controller
 * High-precision timestamp timer, independent fair team generation,
 * teacher-controlled multi-round pacing, and comprehensive round breakdown matrix.
 */

(function () {
  'use strict';

  // --- Confetti & Particle Engine ---
  class ConfettiManager {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
      this.particles = [];
      this.animationId = null;
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    burst(x = window.innerWidth / 2, y = window.innerHeight / 3, count = 75) {
      if (!this.ctx) return;
      const colors = ['#38bdf8', '#818cf8', '#c084fc', '#f59e0b', '#10b981', '#f43f5e', '#ffffff'];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 3;
        this.particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 4,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 10,
          opacity: 1,
          gravity: 0.18,
          drag: 0.96
        });
      }

      if (!this.animationId) {
        this.render();
      }
    }

    render() {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.rotation += p.rotSpeed;
        p.opacity -= 0.012;

        if (p.opacity <= 0 || p.y > this.canvas.height) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.globalAlpha = p.opacity;
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        this.ctx.restore();
      }

      if (this.particles.length > 0) {
        this.animationId = requestAnimationFrame(() => this.render());
      } else {
        this.animationId = null;
      }
    }
  }

  // --- Format Timer Helper ---
  function formatTime(ms) {
    if (ms < 0 || isNaN(ms)) ms = 0;
    const totalSeconds = ms / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const centiseconds = Math.floor((ms % 1000) / 10);

    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');
    const cc = String(centiseconds).padStart(2, '0');
    return `${mm}:${ss}.${cc}`;
  }

  function formatTimeSec(ms) {
    if (ms < 0 || isNaN(ms)) ms = 0;
    return (ms / 1000).toFixed(2) + 's';
  }

  // --- Main Word Rush Tournament Controller ---
  class WordRushGame {
    constructor() {
      // Sound Controller
      this.sound = window.soundCtrl || new SoundController();
      this.confetti = new ConfettiManager('confettiCanvas');

      // Teacher Settings State
      this.settings = {
        gameMode: 'team',     // 'team' | 'individual'
        grade: 'grade7',
        categoryId: 'verbs',
        difficulty: 'easy',
        totalWords: 20,
        teamCount: 2,
        playerCount: 14,
        playerNames: [],      // Array of custom player names
        totalRounds: 5
      };

      // Multi-Round Tournament State
      this.match = {
        currentRound: 1,        // 1 to totalRounds
        currentTurnIndex: 0,    // 0 to participantCount - 1
        currentTeamIndex: 0,    // Backward compatibility for team mode
        participantTimes: {},   // { 0: [ms1, ms2, ...], 1: [ms1, ms2, ...] }
        teamTimes: {},          // { 1: [ms1, ms2, ...], 2: [ms1, ms2, ...] }
        usedTargetWords: new Set(),
        currentBoardData: null,
        foundTargetsCount: 0,
        totalTargetsNeeded: 0
      };

      // High-accuracy Timestamp Timer
      this.timer = {
        startTime: 0,
        elapsedMs: 0,
        isRunning: false,
        rafId: null
      };

      this.cacheDom();
      this.bindEvents();
      this.renderCategoryGrid();
      this.renderPlayerNamesGrid();
    }

    cacheDom() {
      // Screens
      this.screens = {
        setup: document.getElementById('screenSetup'),
        ready: document.getElementById('screenReady'),
        gameplay: document.getElementById('screenGameplay'),
        freeze: document.getElementById('screenFreeze'),
        roundComplete: document.getElementById('screenRoundComplete'),
        results: document.getElementById('screenResults')
      };

      // Mode & Setup Controls
      this.groupGameMode = document.getElementById('groupGameMode');
      this.sectionTeamSetup = document.getElementById('sectionTeamSetup');
      this.sectionIndividualSetup = document.getElementById('sectionIndividualSetup');
      this.groupGrade = document.getElementById('groupGrade');
      this.groupCategory = document.getElementById('groupCategory');
      this.groupDifficulty = document.getElementById('groupDifficulty');
      this.groupWordCount = document.getElementById('groupWordCount');
      this.groupTeams = document.getElementById('groupTeams');
      this.groupRounds = document.getElementById('groupRounds');
      this.btnStartMatch = document.getElementById('btnStartMatch');

      // Individual Mode Controls
      this.btnPlayerMinus = document.getElementById('btnPlayerMinus');
      this.inputPlayerCount = document.getElementById('inputPlayerCount');
      this.btnPlayerPlus = document.getElementById('btnPlayerPlus');
      this.quickPlayerChips = document.getElementById('quickPlayerChips');
      this.playerNamesGrid = document.getElementById('playerNamesGrid');

      // Custom Rounds Stepper Elements
      this.customRoundsBox = document.getElementById('customRoundsBox');
      this.inputCustomRounds = document.getElementById('inputCustomRounds');
      this.btnRoundMinus = document.getElementById('btnRoundMinus');
      this.btnRoundPlus = document.getElementById('btnRoundPlus');

      // Ready Screen Elements
      this.readyRoundBadge = document.getElementById('readyRoundBadge');
      this.readyRoundText = document.getElementById('readyRoundText');
      this.readyTeamBadge = document.getElementById('readyTeamBadge');
      this.readyTeamName = document.getElementById('readyTeamName');
      this.readyTargetReminder = document.getElementById('readyTargetReminder');
      this.btnStartTurn = document.getElementById('btnStartTurn');

      // Gameplay Elements
      this.hudRoundBadge = document.getElementById('hudRoundBadge');
      this.hudRoundText = document.getElementById('hudRoundText');
      this.hudTeamTag = document.getElementById('hudTeamTag');
      this.hudTeamName = document.getElementById('hudTeamName');
      this.hudPrompt = document.getElementById('hudPrompt');
      this.hudTimer = document.getElementById('hudTimer');
      this.wordBoard = document.getElementById('wordBoard');

      // Freeze Screen Elements
      this.freezeRoundBadge = document.getElementById('freezeRoundBadge');
      this.freezeRoundText = document.getElementById('freezeRoundText');
      this.freezeTeamBadge = document.getElementById('freezeTeamBadge');
      this.freezeTeamName = document.getElementById('freezeTeamName');
      this.freezeTimeVal = document.getElementById('freezeTimeVal');
      this.btnNextTeam = document.getElementById('btnNextTeam');
      this.btnNextTeamText = document.getElementById('btnNextTeamText');

      // Round Complete Screen Elements
      this.rcBadgeText = document.getElementById('rcBadgeText');
      this.rcTitle = document.getElementById('rcTitle');
      this.rcRoundTimesList = document.getElementById('rcRoundTimesList');
      this.rcCumulativeTotalsList = document.getElementById('rcCumulativeTotalsList');
      this.btnNextRound = document.getElementById('btnNextRound');
      this.btnNextRoundText = document.getElementById('btnNextRoundText');

      // Results Screen Elements
      this.leaderboardList = document.getElementById('leaderboardList');
      this.breakdownTableWrapper = document.getElementById('breakdownTableWrapper');
      this.btnPlayAgain = document.getElementById('btnPlayAgain');
      this.btnBackToSetup = document.getElementById('btnBackToSetup');

      // Top Header Controls
      this.btnSoundToggle = document.getElementById('btnSoundToggle');
      this.btnFullscreenToggle = document.getElementById('btnFullscreenToggle');
    }

    bindEvents() {
      // Game Mode Selection delegation
      if (this.groupGameMode) {
        this.groupGameMode.addEventListener('click', (e) => {
          const btn = e.target.closest('.opt-btn');
          if (!btn) return;
          this.sound.playClick();
          this.groupGameMode.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.settings.gameMode = btn.dataset.val;

          if (this.settings.gameMode === 'individual') {
            if (this.sectionTeamSetup) this.sectionTeamSetup.style.display = 'none';
            if (this.sectionIndividualSetup) this.sectionIndividualSetup.style.display = 'block';
            this.renderPlayerNamesGrid();
          } else {
            if (this.sectionTeamSetup) this.sectionTeamSetup.style.display = 'block';
            if (this.sectionIndividualSetup) this.sectionIndividualSetup.style.display = 'none';
          }
        });
      }

      // Individual Mode Player Count Controls
      const setPlayerCount = (val) => {
        const num = Math.max(2, Math.min(40, Number(val) || 14));
        this.settings.playerCount = num;
        if (this.inputPlayerCount) this.inputPlayerCount.value = num;
        if (this.quickPlayerChips) {
          this.quickPlayerChips.querySelectorAll('.chip-btn').forEach(chip => {
            chip.classList.toggle('active', Number(chip.dataset.count) === num);
          });
        }
        this.renderPlayerNamesGrid();
      };

      if (this.btnPlayerMinus) {
        this.btnPlayerMinus.addEventListener('click', () => {
          this.sound.playClick();
          setPlayerCount(this.settings.playerCount - 1);
        });
      }

      if (this.btnPlayerPlus) {
        this.btnPlayerPlus.addEventListener('click', () => {
          this.sound.playClick();
          setPlayerCount(this.settings.playerCount + 1);
        });
      }

      if (this.inputPlayerCount) {
        this.inputPlayerCount.addEventListener('input', () => {
          const val = Number(this.inputPlayerCount.value);
          if (val >= 2 && val <= 40) {
            setPlayerCount(val);
          }
        });
        this.inputPlayerCount.addEventListener('change', () => {
          setPlayerCount(this.inputPlayerCount.value);
        });
      }

      if (this.quickPlayerChips) {
        this.quickPlayerChips.addEventListener('click', (e) => {
          const chip = e.target.closest('.chip-btn');
          if (!chip) return;
          this.sound.playClick();
          setPlayerCount(chip.dataset.count);
        });
      }

      // Option selector button delegation
      this.bindOptionGroup(this.groupGrade, 'grade');
      this.bindOptionGroup(this.groupDifficulty, 'difficulty');
      this.bindOptionGroup(this.groupWordCount, 'totalWords', true);
      this.bindOptionGroup(this.groupTeams, 'teamCount', true);

      // Rounds Selector delegation
      if (this.groupRounds) {
        this.groupRounds.addEventListener('click', (e) => {
          const btn = e.target.closest('.opt-btn');
          if (!btn) return;
          this.sound.playClick();
          this.groupRounds.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          if (btn.dataset.val === 'custom') {
            this.customRoundsBox.style.display = 'flex';
            this.settings.totalRounds = Math.min(20, Math.max(1, Number(this.inputCustomRounds.value) || 5));
          } else {
            this.customRoundsBox.style.display = 'none';
            this.settings.totalRounds = Number(btn.dataset.val);
          }
        });
      }

      // Stepper for Custom Rounds (1–20)
      if (this.btnRoundMinus && this.btnRoundPlus && this.inputCustomRounds) {
        this.btnRoundMinus.addEventListener('click', () => {
          this.sound.playClick();
          let val = (Number(this.inputCustomRounds.value) || 5) - 1;
          if (val < 1) val = 1;
          this.inputCustomRounds.value = val;
          this.settings.totalRounds = val;
        });

        this.btnRoundPlus.addEventListener('click', () => {
          this.sound.playClick();
          let val = (Number(this.inputCustomRounds.value) || 5) + 1;
          if (val > 20) val = 20;
          this.inputCustomRounds.value = val;
          this.settings.totalRounds = val;
        });

        this.inputCustomRounds.addEventListener('input', () => {
          let val = Number(this.inputCustomRounds.value);
          if (val < 1) val = 1;
          if (val > 20) val = 20;
          this.settings.totalRounds = val;
        });
      }

      // Category Click delegation
      if (this.groupCategory) {
        this.groupCategory.addEventListener('click', (e) => {
          const btn = e.target.closest('.opt-btn');
          if (!btn) return;
          this.sound.playClick();
          this.groupCategory.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.settings.categoryId = btn.dataset.val;
        });
      }

      // Start Match from Setup
      this.btnStartMatch.addEventListener('click', () => {
        this.sound.playClick();
        this.startNewMatch();
      });

      // Start Turn from Ready Screen
      this.btnStartTurn.addEventListener('click', () => {
        this.sound.playReadyBeep(true);
        this.beginTurn();
      });

      // Next Participant from Freeze Screen
      this.btnNextTeam.addEventListener('click', () => {
        this.sound.playClick();
        this.advanceToNextInRound();
      });

      // Next Round from Round Complete Screen (Between ROUNDS)
      this.btnNextRound.addEventListener('click', () => {
        this.sound.playClick();
        this.advanceToNextRound();
      });

      // Play Again (Keeps same tournament settings and player names)
      this.btnPlayAgain.addEventListener('click', () => {
        this.sound.playClick();
        this.startNewMatch();
      });

      // Back to Setup
      this.btnBackToSetup.addEventListener('click', () => {
        this.sound.playClick();
        this.showScreen('setup');
      });

      // Sound & Fullscreen
      this.btnSoundToggle.addEventListener('click', () => {
        const isEnabled = this.sound.toggle();
        this.btnSoundToggle.textContent = isEnabled ? '🔊' : '🔇';
      });

      this.btnFullscreenToggle.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    bindOptionGroup(container, settingKey, isNumber = false) {
      if (!container) return;
      container.addEventListener('click', (e) => {
        const btn = e.target.closest('.opt-btn');
        if (!btn) return;
        this.sound.playClick();
        container.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.settings[settingKey] = isNumber ? Number(btn.dataset.val) : btn.dataset.val;
      });
    }

    escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    renderCategoryGrid() {
      if (!this.groupCategory) return;
      const categories = window.WORD_RUSH_CATEGORIES || [];
      this.groupCategory.innerHTML = categories.map((cat) => `
        <button type="button" class="opt-btn category-btn ${cat.id === this.settings.categoryId ? 'active' : ''}" data-val="${cat.id}">
          <span class="cat-icon">${cat.icon}</span>
          <span class="cat-name">${cat.name}</span>
        </button>
      `).join('');
    }

    renderPlayerNamesGrid() {
      if (!this.playerNamesGrid) return;
      // Capture any current input values before re-rendering
      const currentInputs = this.playerNamesGrid.querySelectorAll('.player-name-field');
      currentInputs.forEach(input => {
        const idx = parseInt(input.dataset.index, 10);
        if (!isNaN(idx)) {
          this.settings.playerNames[idx] = input.value;
        }
      });

      const count = this.settings.playerCount;
      let html = '';
      for (let i = 0; i < count; i++) {
        const currentVal = (this.settings.playerNames[i] !== undefined) ? this.settings.playerNames[i] : '';
        html += `
          <div class="player-input-card">
            <span class="player-idx-badge">${i + 1}</span>
            <input type="text" class="player-name-field" data-index="${i}" placeholder="Player ${i + 1}" value="${this.escapeHtml(currentVal)}" maxlength="25">
          </div>
        `;
      }
      this.playerNamesGrid.innerHTML = html;

      // Add live input listeners
      this.playerNamesGrid.querySelectorAll('.player-name-field').forEach(input => {
        input.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.index, 10);
          if (!isNaN(idx)) {
            this.settings.playerNames[idx] = e.target.value;
          }
        });
      });
    }

    showScreen(screenName) {
      Object.values(this.screens).forEach(s => {
        if (s) s.classList.remove('active-screen');
      });
      if (this.screens[screenName]) {
        this.screens[screenName].classList.add('active-screen');
      }
    }

    getParticipantCount() {
      return this.settings.gameMode === 'individual'
        ? this.settings.playerCount
        : this.settings.teamCount;
    }

    getTeamColor(teamNum) {
      const colors = {
        1: { border: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', text: '#38bdf8' },
        2: { border: '#f97316', bg: 'rgba(249, 115, 22, 0.15)', text: '#fb923c' },
        3: { border: '#a855f7', bg: 'rgba(168, 85, 247, 0.15)', text: '#c084fc' },
        4: { border: '#10b981', bg: 'rgba(16, 185, 129, 0.15)', text: '#34d399' }
      };
      return colors[teamNum] || colors[1];
    }

    getTeamDisplayName(teamNum) {
      return this.settings.teamCount === 1 ? 'SOLO PLAYER' : `TEAM ${teamNum}`;
    }

    getParticipantColor(participantIndex) {
      if (this.settings.gameMode === 'team') {
        return this.getTeamColor(participantIndex + 1);
      }
      const individualPalette = [
        { border: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', text: '#38bdf8' },
        { border: '#f97316', bg: 'rgba(249, 115, 22, 0.15)', text: '#fb923c' },
        { border: '#a855f7', bg: 'rgba(168, 85, 247, 0.15)', text: '#c084fc' },
        { border: '#10b981', bg: 'rgba(16, 185, 129, 0.15)', text: '#34d399' },
        { border: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)', text: '#f472b6' },
        { border: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)', text: '#fbbf24' },
        { border: '#06b6d4', bg: 'rgba(6, 182, 212, 0.15)', text: '#22d3ee' },
        { border: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)', text: '#a78bfa' }
      ];
      return individualPalette[participantIndex % individualPalette.length];
    }

    getParticipantDisplayName(participantIndex) {
      if (this.settings.gameMode === 'team') {
        const teamNum = participantIndex + 1;
        return this.getTeamDisplayName(teamNum);
      }
      const rawName = (this.settings.playerNames[participantIndex] || '').trim();
      return rawName || `Player ${participantIndex + 1}`;
    }

    // --- Tournament Initialization ---
    startNewMatch() {
      // If individual mode, ensure latest entered names are stored
      if (this.settings.gameMode === 'individual' && this.playerNamesGrid) {
        this.playerNamesGrid.querySelectorAll('.player-name-field').forEach(input => {
          const idx = parseInt(input.dataset.index, 10);
          if (!isNaN(idx)) {
            this.settings.playerNames[idx] = input.value;
          }
        });
      }

      this.match.currentRound = 1;
      this.match.currentTurnIndex = 0;
      this.match.currentTeamIndex = 0;
      this.match.usedTargetWords.clear();
      
      const count = this.getParticipantCount();
      this.match.participantTimes = {};
      for (let i = 0; i < count; i++) {
        this.match.participantTimes[i] = [];
      }

      // Initialize teamTimes for backward compatibility in team mode
      this.match.teamTimes = {};
      if (this.settings.gameMode === 'team') {
        for (let t = 1; t <= this.settings.teamCount; t++) {
          this.match.teamTimes[t] = [];
        }
      }

      this.prepareReadyScreen();
    }

    // --- Prepare Turn Ready Screen ---
    prepareReadyScreen() {
      const idx = this.match.currentTurnIndex;
      const name = this.getParticipantDisplayName(idx);
      const color = this.getParticipantColor(idx);
      const roundStr = `ROUND ${this.match.currentRound} / ${this.settings.totalRounds}`;

      this.readyRoundText.textContent = roundStr;
      
      if (this.settings.gameMode === 'individual') {
        this.readyTeamName.textContent = `${name.toUpperCase()}'S TURN`;
      } else {
        this.readyTeamName.textContent = name;
      }

      this.readyTeamBadge.style.borderColor = color.border;
      this.readyTeamBadge.style.background = color.bg;
      this.readyTeamBadge.style.color = color.text;

      // Category Prompt
      const catMeta = (window.WORD_RUSH_CATEGORIES || []).find(c => c.id === this.settings.categoryId);
      const promptText = catMeta ? catMeta.prompt.replace('{TARGET}', 'WORDS') : 'FIND ALL THE TARGET WORDS';
      this.readyTargetReminder.textContent = `🎯 Task: ${promptText}`;

      this.showScreen('ready');
    }

    // Alias for backward compatibility
    prepareTeamReadyScreen() {
      this.prepareReadyScreen();
    }

    // --- Begin Active Turn ---
    beginTurn() {
      const idx = this.match.currentTurnIndex;
      const name = this.getParticipantDisplayName(idx);
      const color = this.getParticipantColor(idx);
      const roundStr = `ROUND ${this.match.currentRound} / ${this.settings.totalRounds}`;

      // Generate Fresh Independent Board for this attempt
      // Selected difficulty, grade, and category remain identical throughout the entire tournament
      const boardData = window.generateWordRushBoard({
        grade: this.settings.grade,
        categoryId: this.settings.categoryId,
        difficulty: this.settings.difficulty,
        totalWords: this.settings.totalWords,
        usedTargetWords: this.match.usedTargetWords
      });

      this.match.currentBoardData = boardData;
      this.match.foundTargetsCount = 0;
      this.match.totalTargetsNeeded = boardData.targetCount;

      // Update HUD
      this.hudRoundText.textContent = roundStr;
      this.hudTeamName.textContent = name.toUpperCase();
      this.hudTeamTag.style.borderColor = color.border;
      this.hudTeamTag.style.background = color.bg;
      this.hudTeamTag.style.color = color.text;
      this.hudPrompt.textContent = boardData.bannerPrompt;
      this.hudTimer.textContent = '00:00.00';

      // Render Word Board Cards
      this.renderWordBoard(boardData);

      // Switch to Gameplay Screen
      this.showScreen('gameplay');

      // Start High-accuracy Timestamp Timer
      this.startTimer();
    }

    // Alias for backward compatibility
    beginTeamTurn() {
      this.beginTurn();
    }

    renderWordBoard(boardData) {
      this.wordBoard.className = `word-board board-count-${boardData.totalWords}`;
      this.wordBoard.innerHTML = '';

      boardData.cards.forEach((cardObj) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'word-card';
        btn.dataset.id = cardObj.id;
        btn.dataset.isTarget = cardObj.isTarget ? '1' : '0';
        btn.textContent = cardObj.text;

        btn.addEventListener('click', () => this.handleCardClick(btn, cardObj));
        this.wordBoard.appendChild(btn);
      });
    }

    // --- Handle Word Selection ---
    handleCardClick(btnElement, cardObj) {
      if (!this.timer.isRunning) return;
      if (btnElement.classList.contains('found')) return;

      const targetCategory = this.match.currentBoardData ? this.match.currentBoardData.targetClass : this.settings.categoryId;
      const isValidTarget = cardObj.isTarget || (typeof window.isWordInCategory === 'function' && window.isWordInCategory(cardObj.text, targetCategory, this.settings.grade));

      if (isValidTarget) {
        // CORRECT SELECTION
        btnElement.classList.add('found');
        this.sound.playCorrect();
        this.match.foundTargetsCount++;

        // Check if all target words are found
        if (this.match.foundTargetsCount >= this.match.totalTargetsNeeded) {
          this.handleTurnCompletion();
        }
      } else {
        // INCORRECT SELECTION
        this.sound.playWrong();
        btnElement.classList.remove('shake-error');
        void btnElement.offsetWidth;
        btnElement.classList.add('shake-error');
        setTimeout(() => {
          btnElement.classList.remove('shake-error');
        }, 450);
      }
    }

    // --- Turn Complete Logic ---
    handleTurnCompletion() {
      // 1. STOP TIMER IMMEDIATELY
      const finalElapsedMs = this.stopTimer();
      const idx = this.match.currentTurnIndex;
      const name = this.getParticipantDisplayName(idx);
      const color = this.getParticipantColor(idx);
      const roundStr = `ROUND ${this.match.currentRound} / ${this.settings.totalRounds}`;

      // 2. STORE RAW ELAPSED TIME IN HISTORY
      this.match.participantTimes[idx].push(finalElapsedMs);
      if (this.settings.gameMode === 'team') {
        const teamNum = idx + 1;
        this.match.teamTimes[teamNum].push(finalElapsedMs);
      }

      // Fanfare & Confetti
      this.sound.playRoundComplete();
      this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 70);

      // 3. EVALUATE TOURNAMENT PROGRESSION
      const totalParticipants = this.getParticipantCount();
      const isLastParticipantOfRound = (idx === totalParticipants - 1);

      if (!isLastParticipantOfRound) {
        // Case A: More participants remain in the CURRENT round
        // Show Turn Freeze Screen
        this.freezeRoundText.textContent = roundStr;
        this.freezeTeamName.textContent = name;
        this.freezeTeamBadge.style.borderColor = color.border;
        this.freezeTeamBadge.style.background = color.bg;
        this.freezeTeamBadge.style.color = color.text;
        this.freezeTimeVal.textContent = formatTime(finalElapsedMs);
        if (this.btnNextTeamText) {
          this.btnNextTeamText.textContent = this.settings.gameMode === 'individual' ? 'NEXT PLAYER →' : 'NEXT TEAM →';
        }

        this.showScreen('freeze');
      } else {
        // Case B: The LAST participant of this round has finished!
        if (this.match.currentRound < this.settings.totalRounds) {
          // Intermediate Round Ended -> Directly show Round Complete Screen (Screen 4B)
          this.showRoundCompleteScreen();
        } else {
          // Final Round Ended (currentRound === totalRounds) -> Directly show Final Results!
          this.showFinalResults();
        }
      }
    }

    // --- Advance to Next Participant within the Same Round ---
    advanceToNextInRound() {
      this.match.currentTurnIndex++;
      this.match.currentTeamIndex = this.match.currentTurnIndex;
      if (this.match.currentTurnIndex < this.getParticipantCount()) {
        this.prepareReadyScreen();
      }
    }

    // Alias for backward compatibility
    advanceToNextTeamInRound() {
      this.advanceToNextInRound();
    }

    // --- Screen 4B: Intermediate Round Complete Screen ---
    showRoundCompleteScreen() {
      const r = this.match.currentRound;
      const totalR = this.settings.totalRounds;
      const count = this.getParticipantCount();

      this.rcBadgeText.textContent = `ROUND ${r} OF ${totalR} COMPLETE`;
      this.rcTitle.textContent = `ROUND ${r} COMPLETE`;

      // 1. Render This Round Times
      this.rcRoundTimesList.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const name = this.getParticipantDisplayName(i);
        const thisRoundMs = this.match.participantTimes[i][r - 1] || 0;

        const row = document.createElement('div');
        row.className = 'rc-row';
        row.innerHTML = `
          <span class="rc-team-name">${name}</span>
          <span class="rc-team-time">${formatTime(thisRoundMs)}</span>
        `;
        this.rcRoundTimesList.appendChild(row);
      }

      // 2. Render Current Tournament Totals So Far (Cumulative sum)
      this.rcCumulativeTotalsList.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const name = this.getParticipantDisplayName(i);
        const cumulativeMs = this.match.participantTimes[i].reduce((sum, val) => sum + val, 0);

        const row = document.createElement('div');
        row.className = 'rc-row';
        row.innerHTML = `
          <span class="rc-team-name">${name}</span>
          <span class="rc-team-time" style="color:#fef08a;">${formatTime(cumulativeMs)}</span>
        `;
        this.rcCumulativeTotalsList.appendChild(row);
      }

      this.btnNextRoundText.textContent = `START ROUND ${r + 1} →`;
      this.showScreen('roundComplete');
    }

    // --- Advance to Next Round (Increments round, resets participant to 0) ---
    advanceToNextRound() {
      // Strict safety check: Never increment beyond totalRounds
      if (this.match.currentRound >= this.settings.totalRounds) {
        this.showFinalResults();
        return;
      }

      this.match.currentRound++;
      this.match.currentTurnIndex = 0;
      this.match.currentTeamIndex = 0;
      this.prepareReadyScreen();
    }

    // --- High Accuracy Timestamp Timer ---
    startTimer() {
      if (this.timer.isRunning) return;
      this.timer.isRunning = true;
      this.timer.startTime = performance.now();

      const tick = () => {
        if (!this.timer.isRunning) return;
        const now = performance.now();
        this.timer.elapsedMs = now - this.timer.startTime;
        this.hudTimer.textContent = formatTime(this.timer.elapsedMs);
        this.timer.rafId = requestAnimationFrame(tick);
      };

      this.timer.rafId = requestAnimationFrame(tick);
    }

    stopTimer() {
      if (this.timer.isRunning) {
        const now = performance.now();
        this.timer.elapsedMs = now - this.timer.startTime;
        this.timer.isRunning = false;
        if (this.timer.rafId) {
          cancelAnimationFrame(this.timer.rafId);
          this.timer.rafId = null;
        }
      }
      return this.timer.elapsedMs;
    }

    // --- Final Results & Comprehensive Matrix Table ---
    showFinalResults() {
      // Defensive check: Final results can ONLY occur when tournament has reached totalRounds
      if (this.match.currentRound < this.settings.totalRounds) {
        return;
      }

      this.sound.playVictory();
      this.confetti.burst(window.innerWidth / 2, window.innerHeight / 3, 100);

      const count = this.getParticipantCount();
      const isSolo = (this.settings.gameMode === 'team' && this.settings.teamCount === 1);
      const medals = ['🥇', '🥈', '🥉'];

      // Compute total cumulative time for each participant
      const summaryList = [];
      for (let i = 0; i < count; i++) {
        const times = this.match.participantTimes[i] || [];
        const totalMs = times.reduce((sum, val) => sum + val, 0);
        summaryList.push({
          index: i,
          num: i + 1,
          name: this.getParticipantDisplayName(i),
          roundTimes: times,
          totalMs: totalMs,
          formattedTotal: formatTime(totalMs),
          totalSec: formatTimeSec(totalMs)
        });
      }

      // Sort by fastest total time (Lowest raw cumulative milliseconds wins!)
      summaryList.sort((a, b) => a.totalMs - b.totalMs);

      // 1. Render Top Leaderboard Rankings
      this.leaderboardList.innerHTML = summaryList.map((item, idx) => {
        const isWinner = idx === 0 && !isSolo;
        const isTie = idx > 0 && Math.abs(item.totalMs - summaryList[0].totalMs) < 10;
        const medal = medals[idx] || `${idx + 1}.`;

        return `
          <div class="team-rank-row ${isWinner ? 'winner' : ''}">
            <div class="rank-left">
              <span class="rank-medal">${isSolo ? '⏱️' : medal}</span>
              <div>
                <span class="rank-team-name">${item.name}</span>
                ${isWinner ? '<span class="rank-badge-win">WINNER</span>' : ''}
                ${isTie ? '<span class="rank-badge-win" style="background:#06b6d4;">TIE</span>' : ''}
              </div>
            </div>
            <div class="rank-time">${item.formattedTotal}</div>
          </div>
        `;
      }).join('');

      // 2. Render Comprehensive Round-by-Round Breakdown Matrix Table
      const entityColName = this.settings.gameMode === 'individual' ? 'PLAYER' : 'TEAM';
      let tableHtml = `
        <table class="breakdown-table">
          <thead>
            <tr>
              <th>${entityColName}</th>
      `;

      for (let r = 1; r <= this.settings.totalRounds; r++) {
        tableHtml += `<th>Round ${r}</th>`;
      }
      tableHtml += `<th>TOTAL TIME</th></tr></thead><tbody>`;

      // Display rows ordered by original participant index (Player 1, Player 2... or Team 1, Team 2...)
      const displayRows = [...summaryList].sort((a, b) => a.index - b.index);

      displayRows.forEach(item => {
        const isWinner = item.index === summaryList[0].index && !isSolo;
        tableHtml += `<tr class="${isWinner ? 'winner-row' : ''}">`;
        tableHtml += `<td class="team-cell">${item.name} ${isWinner ? '🏆' : ''}</td>`;

        for (let r = 0; r < this.settings.totalRounds; r++) {
          const rTime = item.roundTimes[r] !== undefined ? formatTime(item.roundTimes[r]) : '-';
          tableHtml += `<td>${rTime}</td>`;
        }

        tableHtml += `<td class="total-cell">${item.formattedTotal}</td>`;
        tableHtml += `</tr>`;
      });

      tableHtml += `</tbody></table>`;
      this.breakdownTableWrapper.innerHTML = tableHtml;

      this.showScreen('results');
    }
  }

  // --- Start on DOM Ready ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.wordRushGame = new WordRushGame();
    });
  } else {
    window.wordRushGame = new WordRushGame();
  }
})();
