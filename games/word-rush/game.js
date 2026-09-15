/**
 * WORD RUSH — Game Engine & State Controller
 * High-precision timestamp timer, independent fair team generation,
 * teacher-controlled turn pacing, and classroom-ready feedback.
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

  function formatTimeShort(ms) {
    return (ms / 1000).toFixed(2) + 's';
  }

  // --- Main Word Rush Game Controller ---
  class WordRushGame {
    constructor() {
      // Sound Controller
      this.sound = window.soundCtrl || new SoundController();
      this.confetti = new ConfettiManager('confettiCanvas');

      // Teacher Settings State
      this.settings = {
        grade: 'grade7',
        categoryId: 'verbs',
        difficulty: 'easy',
        totalWords: 20,
        teamCount: 2
      };

      // Match State
      this.match = {
        currentTeamIndex: 0,
        teamResults: [], // [{ teamNum: 1, name: 'TEAM 1', timeMs: 18420, formattedTime: '00:18.42' }]
        usedTargetWords: new Set(),
        currentBoardData: null,
        foundTargetsCount: 0,
        totalTargetsNeeded: 0
      };

      // High-accuracy Timer
      this.timer = {
        startTime: 0,
        elapsedMs: 0,
        isRunning: false,
        rafId: null
      };

      this.cacheDom();
      this.bindEvents();
      this.renderCategoryGrid();
    }

    cacheDom() {
      // Screens
      this.screens = {
        setup: document.getElementById('screenSetup'),
        ready: document.getElementById('screenReady'),
        gameplay: document.getElementById('screenGameplay'),
        freeze: document.getElementById('screenFreeze'),
        results: document.getElementById('screenResults')
      };

      // Setup Controls
      this.groupGrade = document.getElementById('groupGrade');
      this.groupCategory = document.getElementById('groupCategory');
      this.groupDifficulty = document.getElementById('groupDifficulty');
      this.groupWordCount = document.getElementById('groupWordCount');
      this.groupTeams = document.getElementById('groupTeams');
      this.btnStartMatch = document.getElementById('btnStartMatch');

      // Ready Screen Elements
      this.readyTeamBadge = document.getElementById('readyTeamBadge');
      this.readyTeamName = document.getElementById('readyTeamName');
      this.readyTargetReminder = document.getElementById('readyTargetReminder');
      this.btnStartTurn = document.getElementById('btnStartTurn');

      // Gameplay Elements
      this.hudTeamTag = document.getElementById('hudTeamTag');
      this.hudTeamName = document.getElementById('hudTeamName');
      this.hudPrompt = document.getElementById('hudPrompt');
      this.hudTimer = document.getElementById('hudTimer');
      this.wordBoard = document.getElementById('wordBoard');

      // Freeze Screen Elements
      this.freezeTeamBadge = document.getElementById('freezeTeamBadge');
      this.freezeTeamName = document.getElementById('freezeTeamName');
      this.freezeTimeVal = document.getElementById('freezeTimeVal');
      this.btnNextTeam = document.getElementById('btnNextTeam');
      this.btnNextTeamText = document.getElementById('btnNextTeamText');

      // Results Screen Elements
      this.leaderboardList = document.getElementById('leaderboardList');
      this.btnPlayAgain = document.getElementById('btnPlayAgain');
      this.btnBackToSetup = document.getElementById('btnBackToSetup');

      // Top Header Controls
      this.btnSoundToggle = document.getElementById('btnSoundToggle');
      this.btnFullscreenToggle = document.getElementById('btnFullscreenToggle');
    }

    bindEvents() {
      // Option selector button delegation
      this.bindOptionGroup(this.groupGrade, 'grade');
      this.bindOptionGroup(this.groupDifficulty, 'difficulty');
      this.bindOptionGroup(this.groupWordCount, 'totalWords', true);
      this.bindOptionGroup(this.groupTeams, 'teamCount', true);

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
        this.beginTeamTurn();
      });

      // Next Team / View Results from Freeze Screen
      this.btnNextTeam.addEventListener('click', () => {
        this.sound.playClick();
        this.advanceNextTeamOrResults();
      });

      // Play Again (Keeps same settings)
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

    renderCategoryGrid() {
      if (!this.groupCategory) return;
      const categories = window.WORD_RUSH_CATEGORIES || [];
      this.groupCategory.innerHTML = categories.map((cat, idx) => `
        <button type="button" class="opt-btn category-btn ${cat.id === this.settings.categoryId ? 'active' : ''}" data-val="${cat.id}">
          <span class="cat-icon">${cat.icon}</span>
          <span class="cat-name">${cat.name}</span>
        </button>
      `).join('');
    }

    showScreen(screenName) {
      Object.values(this.screens).forEach(s => {
        if (s) s.classList.remove('active-screen');
      });
      if (this.screens[screenName]) {
        this.screens[screenName].classList.add('active-screen');
      }
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

    // --- Match Initialization ---
    startNewMatch() {
      this.match.currentTeamIndex = 0;
      this.match.teamResults = [];
      this.match.usedTargetWords.clear();
      this.prepareTeamReadyScreen();
    }

    // --- Prepare Team Ready Screen ---
    prepareTeamReadyScreen() {
      const teamNum = this.match.currentTeamIndex + 1;
      const teamName = this.settings.teamCount === 1 ? 'SOLO PLAYER' : `TEAM ${teamNum}`;
      const teamColor = this.getTeamColor(teamNum);

      this.readyTeamName.textContent = teamName;
      this.readyTeamBadge.style.borderColor = teamColor.border;
      this.readyTeamBadge.style.background = teamColor.bg;
      this.readyTeamBadge.style.color = teamColor.text;

      // Find Category Prompt
      const catMeta = (window.WORD_RUSH_CATEGORIES || []).find(c => c.id === this.settings.categoryId);
      const promptText = catMeta ? catMeta.prompt.replace('{TARGET}', 'WORDS') : 'FIND ALL THE TARGET WORDS';
      this.readyTargetReminder.textContent = `🎯 Task: ${promptText}`;

      this.showScreen('ready');
    }

    // --- Begin Active Team Turn ---
    beginTeamTurn() {
      const teamNum = this.match.currentTeamIndex + 1;
      const teamName = this.settings.teamCount === 1 ? 'SOLO PLAYER' : `TEAM ${teamNum}`;
      const teamColor = this.getTeamColor(teamNum);

      // Generate Fresh Independent Board for this team
      // Strict equality: Same Grade, Same Category, Same Difficulty, Same Word Count
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
      this.hudTeamName.textContent = teamName;
      this.hudTeamTag.style.borderColor = teamColor.border;
      this.hudTeamTag.style.background = teamColor.bg;
      this.hudTeamTag.style.color = teamColor.text;
      this.hudPrompt.textContent = boardData.bannerPrompt;
      this.hudTimer.textContent = '00:00.00';

      // Render Word Board Cards
      this.renderWordBoard(boardData);

      // Switch to Gameplay Screen
      this.showScreen('gameplay');

      // Start High-accuracy Timestamp Timer
      this.startTimer();
    }

    renderWordBoard(boardData) {
      this.wordBoard.className = `word-board board-count-${boardData.totalWords}`;
      this.wordBoard.innerHTML = '';

      boardData.cards.forEach((cardObj, idx) => {
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

      if (cardObj.isTarget) {
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
        // Force DOM reflow to re-trigger animation if clicked again
        void btnElement.offsetWidth;
        btnElement.classList.add('shake-error');
        setTimeout(() => {
          btnElement.classList.remove('shake-error');
        }, 450);
      }
    }

    // --- Turn Complete (Freeze Screen) ---
    handleTurnCompletion() {
      // STOP TIMER IMMEDIATELY
      const finalElapsedMs = this.stopTimer();
      const teamNum = this.match.currentTeamIndex + 1;
      const teamName = this.settings.teamCount === 1 ? 'SOLO PLAYER' : `TEAM ${teamNum}`;
      const teamColor = this.getTeamColor(teamNum);

      // Record result
      this.match.teamResults.push({
        teamNum,
        name: teamName,
        timeMs: finalElapsedMs,
        formattedTime: formatTime(finalElapsedMs),
        timeSec: formatTimeShort(finalElapsedMs)
      });

      // Fanfare & Confetti
      this.sound.playRoundComplete();
      this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 70);

      // Setup Freeze Screen
      this.freezeTeamName.textContent = teamName;
      this.freezeTeamBadge.style.borderColor = teamColor.border;
      this.freezeTeamBadge.style.background = teamColor.bg;
      this.freezeTeamBadge.style.color = teamColor.text;
      this.freezeTimeVal.textContent = formatTime(finalElapsedMs);

      const isLastTeam = teamNum >= this.settings.teamCount;
      if (isLastTeam) {
        this.btnNextTeamText.textContent = this.settings.teamCount === 1 ? 'VIEW RESULTS' : 'VIEW FINAL RESULTS';
      } else {
        this.btnNextTeamText.textContent = 'NEXT TEAM';
      }

      // Freeze and show Screen 4 (Wait for teacher!)
      this.showScreen('freeze');
    }

    // --- Teacher Advances Game ---
    advanceNextTeamOrResults() {
      this.match.currentTeamIndex++;
      if (this.match.currentTeamIndex < this.settings.teamCount) {
        // Proceed to next team ready screen (Teacher Controlled!)
        this.prepareTeamReadyScreen();
      } else {
        // All teams finished -> Show Final Results
        this.showFinalResults();
      }
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

    // --- Final Results & Leaderboard ---
    showFinalResults() {
      this.sound.playVictory();
      this.confetti.burst(window.innerWidth / 2, window.innerHeight / 3, 100);

      // Sort by fastest time (Lowest total completion time wins!)
      const ranked = [...this.match.teamResults].sort((a, b) => a.timeMs - b.timeMs);
      const isSolo = this.settings.teamCount === 1;

      const medals = ['🥇', '🥈', '🥉', '4️⃣'];

      this.leaderboardList.innerHTML = ranked.map((team, idx) => {
        const isWinner = idx === 0 && !isSolo;
        const isTie = idx > 0 && Math.abs(team.timeMs - ranked[0].timeMs) < 10;
        const medal = medals[idx] || `${idx + 1}.`;

        return `
          <div class="team-rank-row ${isWinner ? 'winner' : ''}">
            <div class="rank-left">
              <span class="rank-medal">${isSolo ? '⏱️' : medal}</span>
              <div>
                <span class="rank-team-name">${team.name}</span>
                ${isWinner ? '<span class="rank-badge-win">WINNER</span>' : ''}
                ${isTie ? '<span class="rank-badge-win" style="background:#06b6d4;">TIE</span>' : ''}
              </div>
            </div>
            <div class="rank-time">${team.formattedTime}</div>
          </div>
        `;
      }).join('');

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
