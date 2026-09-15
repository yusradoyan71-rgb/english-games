/**
 * SAYI AVI (Number Hunt) — Complete Standalone Game Controller
 * Self-contained, zero external dependency, projector-ready.
 */

class SayiAviGame {
  constructor() {
    this.config = {
      teamCount: 2,
      difficulty: 'kolay',
      timeLimit: 45,
      totalRounds: 10,
      teamNames: ['Takım 1', 'Takım 2', 'Takım 3', 'Takım 4'],
      teamColors: ['#ff4757', '#00d2ff', '#2ed573', '#ffa502'],
      teamClasses: ['team-1', 'team-2', 'team-3', 'team-4']
    };

    this.state = {
      screen: 'setup',
      currentRound: 1,
      currentTeamIdx: 0,
      scores: [0, 0, 0, 0],
      roundScores: [0, 0, 0, 0],
      stats: {
        correctPicks: [0, 0, 0, 0],
        wrongPicks: [0, 0, 0, 0],
        bonuses: [0, 0, 0, 0]
      },
      usedTargets: new Set(),
      currentRoundData: null,
      foundCorrectCount: 0,
      roundPoints: 0,
      isBonusAchieved: false,
      isRoundOver: false,
      timeLeft: 45,
      timerId: null,
      isPaused: false
    };

    this.dom = {};
    this.confettiParticles = [];
    this.confettiAnimationId = null;

    this.initDOM();
    this.bindEvents();
    this.initConfetti();
  }

  getSound() {
    if (typeof window !== 'undefined' && window.soundCtrl) {
      return window.soundCtrl;
    }
    if (typeof SoundController !== 'undefined') {
      if (!this._fallbackSound) this._fallbackSound = new SoundController();
      return this._fallbackSound;
    }
    return {
      init: () => {},
      toggle: () => true,
      playCorrect: () => {},
      playWrong: () => {},
      playBonus: () => {},
      playTick: () => {},
      playUrgentTick: () => {},
      playTimeUp: () => {},
      playVictory: () => {}
    };
  }

  getMathEngine() {
    if (typeof MathEngine !== 'undefined') {
      return MathEngine;
    }
    if (typeof window !== 'undefined' && window.MathEngine) {
      return window.MathEngine;
    }
    throw new Error('MathEngine is not available');
  }

  initDOM() {
    this.dom.setupScreen = document.getElementById('setupScreen');
    this.dom.gameScreen = document.getElementById('gameScreen');
    this.dom.winnerScreen = document.getElementById('winnerScreen');

    this.dom.teamCountGroup = document.getElementById('teamCountGroup');
    this.dom.difficultyGroup = document.getElementById('difficultyGroup');
    this.dom.timeLimitGroup = document.getElementById('timeLimitGroup');
    this.dom.roundsCountGroup = document.getElementById('roundsCountGroup');
    this.dom.teamRosterSection = document.getElementById('teamRosterSection');
    this.dom.teamRosterContainer = document.getElementById('teamRosterContainer');
    this.dom.btnStartGame = document.getElementById('btnStartGame');

    this.dom.turnBanner = document.getElementById('turnBanner');
    this.dom.activeTeamTurnText = document.getElementById('activeTeamTurnText');
    this.dom.teamsScoreList = document.getElementById('teamsScoreList');
    this.dom.currentRoundDisplay = document.getElementById('currentRoundDisplay');
    this.dom.totalRoundsDisplay = document.getElementById('totalRoundsDisplay');
    this.dom.targetNumberBadge = document.getElementById('targetNumberBadge');
    this.dom.timerContainer = document.getElementById('timerContainer');
    this.dom.timerDigits = document.getElementById('timerDigits');
    this.dom.liveRoundScore = document.getElementById('liveRoundScore');
    this.dom.remainingCorrectBadge = document.getElementById('remainingCorrectBadge');
    this.dom.cardsGrid = document.getElementById('cardsGrid');
    this.dom.btnFinishRound = document.getElementById('btnFinishRound');
    this.dom.btnSoundToggle = document.getElementById('btnSoundToggle');
    this.dom.soundIcon = document.getElementById('soundIcon');
    this.dom.soundLabel = document.getElementById('soundLabel');
    this.dom.btnFullscreen = document.getElementById('btnFullscreen');
    this.dom.btnRules = document.getElementById('btnRules');
    this.dom.btnReset = document.getElementById('btnReset');

    this.dom.roundRevealModal = document.getElementById('roundRevealModal');
    this.dom.revealModalTitle = document.getElementById('revealModalTitle');
    this.dom.revealModalSubtitle = document.getElementById('revealModalSubtitle');
    this.dom.revealFoundCount = document.getElementById('revealFoundCount');
    this.dom.revealRoundPoints = document.getElementById('revealRoundPoints');
    this.dom.revealBonusBox = document.getElementById('revealBonusBox');
    this.dom.btnModalNextRound = document.getElementById('btnModalNextRound');

    this.dom.rulesModal = document.getElementById('rulesModal');
    this.dom.btnCloseRules = document.getElementById('btnCloseRules');

    this.dom.pauseModal = document.getElementById('pauseModal');
    this.dom.btnResume = document.getElementById('btnResume');

    this.dom.winningTeamName = document.getElementById('winningTeamName');
    this.dom.finalScoreboardRows = document.getElementById('finalScoreboardRows');
    this.dom.btnPlayAgain = document.getElementById('btnPlayAgain');
    this.dom.btnNewGameSetup = document.getElementById('btnNewGameSetup');

    this.dom.fxCanvas = document.getElementById('fxCanvas');
  }

  bindEvents() {
    this.setupButtonGroup(this.dom.teamCountGroup, (val) => {
      this.config.teamCount = parseInt(val, 10);
      this.renderTeamRosterInputs();
    });

    this.setupButtonGroup(this.dom.difficultyGroup, (val) => {
      this.config.difficulty = val;
    });

    this.setupButtonGroup(this.dom.timeLimitGroup, (val) => {
      this.config.timeLimit = parseInt(val, 10);
    });

    this.setupButtonGroup(this.dom.roundsCountGroup, (val) => {
      this.config.totalRounds = parseInt(val, 10);
    });

    this.renderTeamRosterInputs();

    if (this.dom.btnStartGame) {
      this.dom.btnStartGame.addEventListener('click', (e) => {
        if (e) e.preventDefault();
        this.getSound().init();
        this.collectTeamNames();
        this.startGame();
      });
    }

    if (this.dom.btnSoundToggle) {
      this.dom.btnSoundToggle.addEventListener('click', () => this.toggleSound());
    }
    if (this.dom.btnFullscreen) {
      this.dom.btnFullscreen.addEventListener('click', () => this.toggleFullscreen());
    }
    if (this.dom.btnRules) {
      this.dom.btnRules.addEventListener('click', () => this.openRules());
    }
    if (this.dom.btnCloseRules) {
      this.dom.btnCloseRules.addEventListener('click', () => this.closeRules());
    }

    if (this.dom.btnReset) {
      this.dom.btnReset.addEventListener('click', () => {
        if (confirm('Oyundan çıkıp başlangıç ayarlarına dönmek istiyor musunuz?')) {
          this.resetToSetup();
        }
      });
    }

    if (this.dom.btnFinishRound) {
      this.dom.btnFinishRound.addEventListener('click', () => {
        if (!this.state.isRoundOver) {
          this.endRound('Turu Bitirdiniz');
        }
      });
    }

    if (this.dom.btnModalNextRound) {
      this.dom.btnModalNextRound.addEventListener('click', () => this.nextRound());
    }
    if (this.dom.btnResume) {
      this.dom.btnResume.addEventListener('click', () => this.togglePause(false));
    }

    if (this.dom.btnPlayAgain) {
      this.dom.btnPlayAgain.addEventListener('click', () => {
        this.startGame();
      });
    }
    if (this.dom.btnNewGameSetup) {
      this.dom.btnNewGameSetup.addEventListener('click', () => {
        this.resetToSetup();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;

      if (e.key === 'p' || e.key === 'P') {
        if (this.state.screen === 'game' && !this.state.isRoundOver) {
          this.togglePause();
        }
      } else if (e.key === 'm' || e.key === 'M') {
        this.toggleSound();
      } else if (e.key === 'f' || e.key === 'F') {
        this.toggleFullscreen();
      } else if (e.key === ' ' || e.key === 'Enter') {
        if (this.dom.roundRevealModal && !this.dom.roundRevealModal.classList.contains('hidden')) {
          e.preventDefault();
          this.nextRound();
        }
      } else if (e.key === 'Escape') {
        this.closeRules();
        if (this.state.isPaused) this.togglePause(false);
      }
    });
  }

  setupButtonGroup(container, callback) {
    if (!container) return;
    const buttons = container.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e) e.preventDefault();
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const val = btn.getAttribute('data-value') || btn.getAttribute('data-teams') || btn.getAttribute('data-diff') || btn.getAttribute('data-time') || btn.getAttribute('data-rounds') || (btn.dataset && (btn.dataset.value || btn.dataset.teams || btn.dataset.diff || btn.dataset.time || btn.dataset.rounds));
        if (val !== null && val !== undefined) {
          callback(val);
        }
      });
    });
  }

  renderTeamRosterInputs() {
    if (!this.dom.teamRosterContainer) return;

    if (this.config.teamCount <= 1) {
      if (this.dom.teamRosterSection) {
        this.dom.teamRosterSection.style.display = 'none';
      }
      return;
    }

    if (this.dom.teamRosterSection) {
      this.dom.teamRosterSection.style.display = 'flex';
    }

    this.dom.teamRosterContainer.innerHTML = '';
    for (let i = 0; i < this.config.teamCount; i++) {
      const card = document.createElement('div');
      card.className = 'team-input-item team-roster-card';
      card.innerHTML = `
        <span class="team-color-circle team-dot" style="background: ${this.config.teamColors[i]}"></span>
        <input type="text" class="team-name-field team-roster-input" id="teamInput${i}" value="${this.config.teamNames[i] || ('Takım ' + (i + 1))}" maxlength="18" placeholder="Takım Adı">
      `;
      this.dom.teamRosterContainer.appendChild(card);
    }
  }

  collectTeamNames() {
    for (let i = 0; i < this.config.teamCount; i++) {
      const input = document.getElementById(`teamInput${i}`);
      if (input && input.value.trim()) {
        this.config.teamNames[i] = input.value.trim();
      } else if (!this.config.teamNames[i]) {
        this.config.teamNames[i] = `Takım ${i + 1}`;
      }
    }
  }

  toggleSound() {
    const isEnabled = this.getSound().toggle();
    if (this.dom.soundIcon) this.dom.soundIcon.textContent = isEnabled ? '🔊' : '🔇';
    if (this.dom.soundLabel) this.dom.soundLabel.textContent = isEnabled ? 'Ses Açık' : 'Ses Kapalı';
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  openRules() {
    if (this.dom.rulesModal) this.dom.rulesModal.classList.remove('hidden');
  }

  closeRules() {
    if (this.dom.rulesModal) this.dom.rulesModal.classList.add('hidden');
  }

  togglePause(forceState) {
    this.state.isPaused = forceState !== undefined ? forceState : !this.state.isPaused;
    if (this.dom.pauseModal) {
      if (this.state.isPaused) {
        this.dom.pauseModal.classList.remove('hidden');
      } else {
        this.dom.pauseModal.classList.add('hidden');
      }
    }
  }

  startGame() {
    this.state.screen = 'game';
    this.state.currentRound = 1;
    this.state.currentTeamIdx = 0;
    this.state.scores = new Array(this.config.teamCount).fill(0);
    this.state.stats = {
      correctPicks: new Array(this.config.teamCount).fill(0),
      wrongPicks: new Array(this.config.teamCount).fill(0),
      bonuses: new Array(this.config.teamCount).fill(0)
    };
    this.state.usedTargets = new Set();

    if (this.dom.setupScreen) this.dom.setupScreen.classList.remove('active');
    if (this.dom.winnerScreen) this.dom.winnerScreen.classList.remove('active');
    if (this.dom.roundRevealModal) this.dom.roundRevealModal.classList.add('hidden');
    if (this.dom.pauseModal) this.dom.pauseModal.classList.add('hidden');
    if (this.dom.gameScreen) this.dom.gameScreen.classList.add('active');

    if (this.dom.totalRoundsDisplay) {
      this.dom.totalRoundsDisplay.textContent = this.config.totalRounds > 0 ? this.config.totalRounds : '∞';
    }

    this.startRound();
  }

  startRound() {
    this.state.isRoundOver = false;
    this.state.foundCorrectCount = 0;
    this.state.roundPoints = 0;
    this.state.isBonusAchieved = false;
    this.state.isPaused = false;

    // Generate verified round
    const engine = this.getMathEngine();
    this.state.currentRoundData = engine.generateRound(this.config.difficulty, 12, this.state.usedTargets);
    if (this.state.currentRoundData && this.state.currentRoundData.target) {
      this.state.usedTargets.add(this.state.currentRoundData.target);
    }

    this.renderHeader();
    this.renderScoreboard();
    this.renderTarget();
    this.renderCards();
    this.startTimer();
  }

  renderHeader() {
    if (this.dom.currentRoundDisplay) {
      this.dom.currentRoundDisplay.textContent = this.state.currentRound;
    }

    const teamIdx = this.state.currentTeamIdx;
    const teamName = this.config.teamNames[teamIdx] || `Takım ${teamIdx + 1}`;
    const teamClass = this.config.teamClasses[teamIdx] || 'team-1';

    if (this.dom.turnBanner) {
      this.dom.turnBanner.className = `turn-banner-strip turn-banner ${teamClass}`;
    }
    if (this.dom.activeTeamTurnText) {
      this.dom.activeTeamTurnText.textContent = `${teamName.toUpperCase()}'İN SIRASI`;
    }

    if (this.dom.liveRoundScore) {
      this.dom.liveRoundScore.textContent = '+0';
    }
    this.updateRemainingPill();
  }

  updateRemainingPill() {
    if (!this.dom.remainingCorrectBadge || !this.state.currentRoundData) return;
    const totalCorrect = this.state.currentRoundData.correctCount;
    const found = this.state.foundCorrectCount;
    this.dom.remainingCorrectBadge.textContent = `${found} / ${totalCorrect}`;
  }

  renderScoreboard() {
    if (!this.dom.teamsScoreList) return;
    this.dom.teamsScoreList.innerHTML = '';
    for (let i = 0; i < this.config.teamCount; i++) {
      const card = document.createElement('div');
      const isActive = i === this.state.currentTeamIdx;
      card.className = `scoreboard-item-card team-score-card ${isActive ? 'active-turn' : ''}`;
      card.innerHTML = `
        <div class="sb-left score-card-left">
          <span class="sb-dot team-indicator-dot" style="background: ${this.config.teamColors[i]}"></span>
          <span class="sb-name team-card-name">${this.config.teamNames[i]}</span>
        </div>
        <span class="sb-score team-card-score" id="teamScoreDisplay${i}">${this.state.scores[i]}</span>
      `;
      this.dom.teamsScoreList.appendChild(card);
    }
  }

  renderTarget() {
    if (this.dom.targetNumberBadge && this.state.currentRoundData) {
      this.dom.targetNumberBadge.textContent = this.state.currentRoundData.target;
    }
  }

  renderCards() {
    if (!this.dom.cardsGrid || !this.state.currentRoundData) return;
    this.dom.cardsGrid.innerHTML = '';
    this.state.currentRoundData.cards.forEach((cardData, idx) => {
      const card = document.createElement('div');
      card.className = 'math-card-item math-card';
      card.setAttribute('data-idx', idx);
      card.innerHTML = `
        <span class="card-math-text math-card-expr">${cardData.expression}</span>
      `;

      card.addEventListener('click', (e) => this.handleCardClick(card, cardData, e));
      this.dom.cardsGrid.appendChild(card);
    });
  }

  startTimer() {
    clearInterval(this.state.timerId);
    if (this.dom.timerContainer) {
      this.dom.timerContainer.classList.remove('urgent-timer', 'urgent');
    }

    if (this.config.timeLimit <= 0) {
      if (this.dom.timerDigits) this.dom.timerDigits.textContent = '∞';
      return;
    }

    this.state.timeLeft = this.config.timeLimit;
    if (this.dom.timerDigits) this.dom.timerDigits.textContent = this.state.timeLeft;

    this.state.timerId = setInterval(() => {
      if (this.state.isPaused || this.state.isRoundOver) return;

      this.state.timeLeft--;
      if (this.dom.timerDigits) this.dom.timerDigits.textContent = this.state.timeLeft;

      if (this.state.timeLeft <= 10 && this.state.timeLeft > 0) {
        if (this.dom.timerContainer) this.dom.timerContainer.classList.add('urgent-timer', 'urgent');
        this.getSound().playUrgentTick();
      } else if (this.state.timeLeft > 10) {
        this.getSound().playTick();
      }

      if (this.state.timeLeft <= 0) {
        clearInterval(this.state.timerId);
        this.getSound().playTimeUp();
        this.endRound('SÜRE DOLDU! ⏱️');
      }
    }, 1000);
  }

  handleCardClick(cardElement, cardData, event) {
    if (this.state.isRoundOver || this.state.isPaused) return;
    if (cardElement.classList.contains('locked')) return;

    cardElement.classList.add('locked');
    const currentTeam = this.state.currentTeamIdx;

    if (cardData.isCorrect) {
      cardElement.classList.add('selected-correct');
      this.getSound().playCorrect();

      const earned = 100;
      this.state.roundPoints += earned;
      this.state.scores[currentTeam] += earned;
      this.state.stats.correctPicks[currentTeam]++;
      this.state.foundCorrectCount++;

      this.showFloatingPoints(event ? event.clientX : null, event ? event.clientY : null, '+100', true);
      this.updateRemainingPill();

      if (this.state.foundCorrectCount === this.state.currentRoundData.correctCount) {
        this.state.isBonusAchieved = true;
        const bonus = 250;
        this.state.roundPoints += bonus;
        this.state.scores[currentTeam] += bonus;
        this.state.stats.bonuses[currentTeam]++;

        this.getSound().playBonus();
        this.triggerConfetti();
        this.showFloatingPoints(window.innerWidth / 2, window.innerHeight / 2 - 50, '+250 BONUS! 🌟', true);

        setTimeout(() => {
          this.endRound('MÜKEMMEL! TÜM HEDEFLER BULUNDU! 🌟');
        }, 800);
      }
    } else {
      cardElement.classList.add('selected-wrong');
      this.getSound().playWrong();

      const penalty = 50;
      this.state.roundPoints = Math.max(0, this.state.roundPoints - penalty);
      this.state.scores[currentTeam] = Math.max(0, this.state.scores[currentTeam] - penalty);
      this.state.stats.wrongPicks[currentTeam]++;

      this.showFloatingPoints(event ? event.clientX : null, event ? event.clientY : null, '-50', false);
    }

    if (this.dom.liveRoundScore) {
      this.dom.liveRoundScore.textContent = `+${this.state.roundPoints}`;
    }
    const scoreElem = document.getElementById(`teamScoreDisplay${currentTeam}`);
    if (scoreElem) scoreElem.textContent = this.state.scores[currentTeam];
  }

  showFloatingPoints(x, y, text, isPositive) {
    if (typeof document === 'undefined' || !document.body) return;
    const el = document.createElement('div');
    el.className = `floating-point-fx floating-point-text ${isPositive ? 'positive' : 'negative'}`;
    el.textContent = text;
    el.style.left = `${x || window.innerWidth / 2}px`;
    el.style.top = `${y || window.innerHeight / 2}px`;
    document.body.appendChild(el);

    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 1000);
  }

  endRound(reasonText = 'Tur Tamamlandı') {
    this.state.isRoundOver = true;
    clearInterval(this.state.timerId);

    if (this.dom.cardsGrid) {
      const cardElements = this.dom.cardsGrid.querySelectorAll('.math-card-item, .math-card');
      cardElements.forEach((cardEl, idx) => {
        cardEl.classList.add('locked');
        const data = this.state.currentRoundData.cards[idx];

        if (data && data.isCorrect && !cardEl.classList.contains('selected-correct')) {
          cardEl.classList.add('reveal-missed');
        } else if (data && !data.isCorrect && !cardEl.classList.contains('selected-wrong')) {
          cardEl.classList.add('reveal-wrong-unselected');
          const valBadge = document.createElement('span');
          valBadge.className = 'card-val-tag card-actual-val';
          valBadge.textContent = `= ${data.actualValue}`;
          cardEl.appendChild(valBadge);
        }
      });
    }

    setTimeout(() => {
      this.showRoundRevealModal(reasonText);
    }, 1000);
  }

  showRoundRevealModal(reasonText) {
    const teamIdx = this.state.currentTeamIdx;
    const teamName = this.config.teamNames[teamIdx] || `Takım ${teamIdx + 1}`;
    const totalCorrect = this.state.currentRoundData ? this.state.currentRoundData.correctCount : 0;
    const found = this.state.foundCorrectCount;

    if (this.dom.revealModalTitle) this.dom.revealModalTitle.textContent = reasonText;
    if (this.dom.revealModalSubtitle) this.dom.revealModalSubtitle.textContent = `${teamName} Tur Özeti`;
    if (this.dom.revealFoundCount) this.dom.revealFoundCount.textContent = `${found} / ${totalCorrect}`;
    if (this.dom.revealRoundPoints) this.dom.revealRoundPoints.textContent = `+${this.state.roundPoints}`;

    if (this.dom.revealBonusBox) {
      if (this.state.isBonusAchieved) {
        this.dom.revealBonusBox.classList.add('bonus-glow', 'bonus-active');
        const figure = this.dom.revealBonusBox.querySelector('.stat-figure, .stat-val');
        const caption = this.dom.revealBonusBox.querySelector('.stat-caption, .stat-lbl');
        if (figure) figure.textContent = '+250 🌟';
        if (caption) caption.textContent = 'Tüm Doğrular Bulundu!';
      } else {
        this.dom.revealBonusBox.classList.remove('bonus-glow', 'bonus-active');
        const figure = this.dom.revealBonusBox.querySelector('.stat-figure, .stat-val');
        const caption = this.dom.revealBonusBox.querySelector('.stat-caption, .stat-lbl');
        if (figure) figure.textContent = '-';
        if (caption) caption.textContent = 'Bonus Yok';
      }
    }

    if (this.dom.roundRevealModal) this.dom.roundRevealModal.classList.remove('hidden');
  }

  nextRound() {
    if (this.dom.roundRevealModal) this.dom.roundRevealModal.classList.add('hidden');

    const isLastRound = this.config.totalRounds > 0 && this.state.currentRound >= this.config.totalRounds;
    const isLastTeamInCycle = this.state.currentTeamIdx === this.config.teamCount - 1;

    if (isLastRound && isLastTeamInCycle) {
      this.showGameOverScreen();
      return;
    }

    if (this.config.teamCount > 1) {
      this.state.currentTeamIdx = (this.state.currentTeamIdx + 1) % this.config.teamCount;
      if (this.state.currentTeamIdx === 0) {
        this.state.currentRound++;
      }
    } else {
      this.state.currentRound++;
    }

    this.startRound();
  }

  showGameOverScreen() {
    this.state.screen = 'winner';
    clearInterval(this.state.timerId);

    if (this.dom.gameScreen) this.dom.gameScreen.classList.remove('active');
    if (this.dom.roundRevealModal) this.dom.roundRevealModal.classList.add('hidden');
    if (this.dom.winnerScreen) this.dom.winnerScreen.classList.add('active');

    this.getSound().playVictory();
    this.triggerConfetti(5000);

    const teamRankings = [];
    for (let i = 0; i < this.config.teamCount; i++) {
      teamRankings.push({
        idx: i,
        name: this.config.teamNames[i],
        color: this.config.teamColors[i],
        score: this.state.scores[i],
        correct: this.state.stats.correctPicks[i],
        wrong: this.state.stats.wrongPicks[i],
        bonuses: this.state.stats.bonuses[i]
      });
    }

    teamRankings.sort((a, b) => b.score - a.score);

    const winner = teamRankings[0];
    if (this.dom.winningTeamName) {
      this.dom.winningTeamName.textContent = winner.name.toUpperCase();
      this.dom.winningTeamName.style.color = winner.color;
    }

    if (this.dom.finalScoreboardRows) {
      this.dom.finalScoreboardRows.innerHTML = '';
      teamRankings.forEach((team, rank) => {
        const row = document.createElement('div');
        row.className = `standing-table-row final-scoreboard-row ${rank === 0 ? 'rank-first rank-1' : ''}`;
        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 14px;">
            <span class="rank-circle final-rank-badge" style="border: 2px solid ${team.color}; color: ${team.color}">${rank + 1}</span>
            <span style="color: ${team.color}; font-weight: 800;">${team.name}</span>
          </div>
          <div style="font-size: 0.95rem; color: #94a3b8;">
            ✅ ${team.correct} Doğru &bull; ❌ ${team.wrong} Yanlış &bull; 🌟 ${team.bonuses} Bonus
          </div>
          <div style="font-family: var(--font-num); font-size: 1.8rem; color: #38bdf8;">
            ${team.score} PUAN
          </div>
        `;
        this.dom.finalScoreboardRows.appendChild(row);
      });
    }
  }

  resetToSetup() {
    clearInterval(this.state.timerId);
    this.state.screen = 'setup';

    if (this.dom.gameScreen) this.dom.gameScreen.classList.remove('active');
    if (this.dom.winnerScreen) this.dom.winnerScreen.classList.remove('active');
    if (this.dom.roundRevealModal) this.dom.roundRevealModal.classList.add('hidden');
    if (this.dom.pauseModal) this.dom.pauseModal.classList.add('hidden');
    if (this.dom.rulesModal) this.dom.rulesModal.classList.add('hidden');

    if (this.dom.setupScreen) this.dom.setupScreen.classList.add('active');
  }

  initConfetti() {
    const canvas = this.dom.fxCanvas;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();
  }

  triggerConfetti(duration = 2500) {
    const canvas = this.dom.fxCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const colors = ['#ffd700', '#ff4757', '#00d2ff', '#2ed573', '#ffa502', '#ec4899', '#ffffff'];
    const particleCount = 120;

    for (let i = 0; i < particleCount; i++) {
      this.confettiParticles.push({
        x: canvas.width / 2 + (Math.random() * 400 - 200),
        y: canvas.height * 0.4 + (Math.random() * 200 - 100),
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 1.2) * 14,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 12,
        opacity: 1
      });
    }

    if (!this.confettiAnimationId) {
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = this.confettiParticles.length - 1; i >= 0; i--) {
          const p = this.confettiParticles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.35;
          p.rotation += p.rSpeed;
          p.opacity -= 0.008;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();

        if (p.opacity <= 0 || p.y > canvas.height + 50) {
            this.confettiParticles.splice(i, 1);
          }
        }

        if (this.confettiParticles.length > 0) {
          this.confettiAnimationId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(this.confettiAnimationId);
          this.confettiAnimationId = null;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      };

      this.confettiAnimationId = requestAnimationFrame(animate);
    }
  }
}

// Immediate & Robust Initialization
function initSayiAvi() {
  if (typeof window !== 'undefined' && !window.sayiAvi) {
    window.sayiAvi = new SayiAviGame();
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSayiAvi);
  } else {
    initSayiAvi();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SayiAviGame };
}
