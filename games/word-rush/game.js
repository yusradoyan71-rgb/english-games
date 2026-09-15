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
        grade: 'grade7',
        categoryId: 'verbs',
        difficulty: 'easy',
        totalWords: 20,
        teamCount: 2,
        totalRounds: 5
      };

      // Multi-Round Tournament State
      this.match = {
        currentRound: 1,      // 1 to totalRounds
        currentTeamIndex: 0,  // 0 to teamCount - 1
        teamTimes: {},        // { 1: [ms1, ms2, ...], 2: [ms1, ms2, ...] }
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

      // Setup Controls
      this.groupGrade = document.getElementById('groupGrade');
      this.groupCategory = document.getElementById('groupCategory');
      this.groupDifficulty = document.getElementById('groupDifficulty');
      this.groupWordCount = document.getElementById('groupWordCount');
      this.groupTeams = document.getElementById('groupTeams');
      this.groupRounds = document.getElementById('groupRounds');
      this.btnStartMatch = document.getElementById('btnStartMatch');

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

      // Freeze Screen Elements (Used between teams in the SAME round)
      this.freezeRoundBadge = document.getElementById('freezeRoundBadge');
      this.freezeRoundText = document.getElementById('freezeRoundText');
      this.freezeTeamBadge = document.getElementById('freezeTeamBadge');
      this.freezeTeamName = document.getElementById('freezeTeamName');
      this.freezeTimeVal = document.getElementById('freezeTimeVal');
      this.btnNextTeam = document.getElementById('btnNextTeam');

      // Round Complete Screen Elements (Used between ROUNDS)
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
        this.beginTeamTurn();
      });

      // Next Team from Freeze Screen (Between teams in SAME round)
      this.btnNextTeam.addEventListener('click', () => {
        this.sound.playClick();
        this.advanceToNextTeamInRound();
      });

      // Next Round from Round Complete Screen (Between ROUNDS)
      this.btnNextRound.addEventListener('click', () => {
        this.sound.playClick();
        this.advanceToNextRound();
      });

      // Play Again (Keeps same tournament settings)
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
      this.groupCategory.innerHTML = categories.map((cat) => `
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

    getTeamDisplayName(teamNum) {
      return this.settings.teamCount === 1 ? 'SOLO PLAYER' : `TEAM ${teamNum}`;
    }

    // --- Tournament Initialization ---
    startNewMatch() {
      this.match.currentRound = 1;
      this.match.currentTeamIndex = 0;
      this.match.usedTargetWords.clear();
      
      // Initialize raw time array for all participating teams
      this.match.teamTimes = {};
      for (let t = 1; t <= this.settings.teamCount; t++) {
        this.match.teamTimes[t] = [];
      }

      this.prepareTeamReadyScreen();
    }

    // --- Prepare Team Ready Screen ---
    prepareTeamReadyScreen() {
      const teamNum = this.match.currentTeamIndex + 1;
      const teamName = this.getTeamDisplayName(teamNum);
      const teamColor = this.getTeamColor(teamNum);
      const roundStr = `ROUND ${this.match.currentRound} / ${this.settings.totalRounds}`;

      this.readyRoundText.textContent = roundStr;
      this.readyTeamName.textContent = teamName;
      this.readyTeamBadge.style.borderColor = teamColor.border;
      this.readyTeamBadge.style.background = teamColor.bg;
      this.readyTeamBadge.style.color = teamColor.text;

      // Category Prompt
      const catMeta = (window.WORD_RUSH_CATEGORIES || []).find(c => c.id === this.settings.categoryId);
      const promptText = catMeta ? catMeta.prompt.replace('{TARGET}', 'WORDS') : 'FIND ALL THE TARGET WORDS';
      this.readyTargetReminder.textContent = `🎯 Task: ${promptText}`;

      this.showScreen('ready');
    }

    // --- Begin Active Team Turn ---
    beginTeamTurn() {
      const teamNum = this.match.currentTeamIndex + 1;
      const teamName = this.getTeamDisplayName(teamNum);
      const teamColor = this.getTeamColor(teamNum);
      const roundStr = `ROUND ${this.match.currentRound} / ${this.settings.totalRounds}`;

      // Generate Fresh Independent Board for this team attempt
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
      const teamNum = this.match.currentTeamIndex + 1;
      const teamName = this.getTeamDisplayName(teamNum);
      const teamColor = this.getTeamColor(teamNum);
      const roundStr = `ROUND ${this.match.currentRound} / ${this.settings.totalRounds}`;

      // 2. STORE RAW ELAPSED TIME IN TOURNAMENT HISTORY
      this.match.teamTimes[teamNum].push(finalElapsedMs);

      // Fanfare & Confetti
      this.sound.playRoundComplete();
      this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 70);

      // 3. EVALUATE TOURNAMENT PROGRESSION
      const isLastTeamOfRound = (this.match.currentTeamIndex === this.settings.teamCount - 1);

      if (!isLastTeamOfRound) {
        // Case A: More teams remain in the CURRENT round
        // Show Turn Freeze Screen with [ NEXT TEAM → ]
        this.freezeRoundText.textContent = roundStr;
        this.freezeTeamName.textContent = teamName;
        this.freezeTeamBadge.style.borderColor = teamColor.border;
        this.freezeTeamBadge.style.background = teamColor.bg;
        this.freezeTeamBadge.style.color = teamColor.text;
        this.freezeTimeVal.textContent = formatTime(finalElapsedMs);

        this.showScreen('freeze');
      } else {
        // Case B: The LAST team of this round has finished!
        if (this.match.currentRound < this.settings.totalRounds) {
          // Intermediate Round Ended -> Directly show Round Complete Screen (Screen 4B)
          this.showRoundCompleteScreen();
        } else {
          // Final Round Ended (currentRound === totalRounds) -> Directly show Final Results!
          this.showFinalResults();
        }
      }
    }

    // --- Advance to Next Team within the Same Round ---
    advanceToNextTeamInRound() {
      this.match.currentTeamIndex++;
      if (this.match.currentTeamIndex < this.settings.teamCount) {
        this.prepareTeamReadyScreen();
      }
    }

    // --- Screen 4B: Intermediate Round Complete Screen ---
    showRoundCompleteScreen() {
      const r = this.match.currentRound;
      const totalR = this.settings.totalRounds;

      this.rcBadgeText.textContent = `ROUND ${r} OF ${totalR} COMPLETE`;
      this.rcTitle.textContent = `ROUND ${r} COMPLETE`;

      // 1. Render This Round Times
      this.rcRoundTimesList.innerHTML = '';
      for (let t = 1; t <= this.settings.teamCount; t++) {
        const teamName = this.getTeamDisplayName(t);
        const thisRoundMs = this.match.teamTimes[t][r - 1] || 0;

        const row = document.createElement('div');
        row.className = 'rc-row';
        row.innerHTML = `
          <span class="rc-team-name">${teamName}</span>
          <span class="rc-team-time">${formatTime(thisRoundMs)}</span>
        `;
        this.rcRoundTimesList.appendChild(row);
      }

      // 2. Render Current Tournament Totals So Far (Cumulative sum)
      this.rcCumulativeTotalsList.innerHTML = '';
      for (let t = 1; t <= this.settings.teamCount; t++) {
        const teamName = this.getTeamDisplayName(t);
        const cumulativeMs = this.match.teamTimes[t].reduce((sum, val) => sum + val, 0);

        const row = document.createElement('div');
        row.className = 'rc-row';
        row.innerHTML = `
          <span class="rc-team-name">${teamName}</span>
          <span class="rc-team-time" style="color:#fef08a;">${formatTime(cumulativeMs)}</span>
        `;
        this.rcCumulativeTotalsList.appendChild(row);
      }

      this.btnNextRoundText.textContent = `START ROUND ${r + 1} →`;
      this.showScreen('roundComplete');
    }

    // --- Advance to Next Round (Increments round, resets team to Team 1) ---
    advanceToNextRound() {
      // Strict safety check: Never increment beyond totalRounds
      if (this.match.currentRound >= this.settings.totalRounds) {
        this.showFinalResults();
        return;
      }

      this.match.currentRound++;
      this.match.currentTeamIndex = 0;
      this.prepareTeamReadyScreen();
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

      const isSolo = this.settings.teamCount === 1;
      const medals = ['🥇', '🥈', '🥉', '4️⃣'];

      // Compute total cumulative time for each team
      const teamSummaryList = [];
      for (let t = 1; t <= this.settings.teamCount; t++) {
        const times = this.match.teamTimes[t] || [];
        const totalMs = times.reduce((sum, val) => sum + val, 0);
        teamSummaryList.push({
          teamNum: t,
          name: this.getTeamDisplayName(t),
          roundTimes: times,
          totalMs: totalMs,
          formattedTotal: formatTime(totalMs),
          totalSec: formatTimeSec(totalMs)
        });
      }

      // Sort by fastest total time (Lowest raw cumulative milliseconds wins!)
      teamSummaryList.sort((a, b) => a.totalMs - b.totalMs);

      // 1. Render Top Leaderboard Rankings
      this.leaderboardList.innerHTML = teamSummaryList.map((team, idx) => {
        const isWinner = idx === 0 && !isSolo;
        const isTie = idx > 0 && Math.abs(team.totalMs - teamSummaryList[0].totalMs) < 10;
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
            <div class="rank-time">${team.formattedTotal}</div>
          </div>
        `;
      }).join('');

      // 2. Render Comprehensive Round-by-Round Breakdown Matrix Table
      let tableHtml = `
        <table class="breakdown-table">
          <thead>
            <tr>
              <th>TEAM</th>
      `;

      for (let r = 1; r <= this.settings.totalRounds; r++) {
        tableHtml += `<th>Round ${r}</th>`;
      }
      tableHtml += `<th>TOTAL TIME</th></tr></thead><tbody>`;

      // Display rows ordered by team number (Team 1, Team 2, ...)
      const displayRows = [...teamSummaryList].sort((a, b) => a.teamNum - b.teamNum);

      displayRows.forEach(team => {
        const isWinner = team.teamNum === teamSummaryList[0].teamNum && !isSolo;
        tableHtml += `<tr class="${isWinner ? 'winner-row' : ''}">`;
        tableHtml += `<td class="team-cell">${team.name} ${isWinner ? '🏆' : ''}</td>`;

        for (let r = 0; r < this.settings.totalRounds; r++) {
          const rTime = team.roundTimes[r] !== undefined ? formatTime(team.roundTimes[r]) : '-';
          tableHtml += `<td>${rTime}</td>`;
        }

        tableHtml += `<td class="total-cell">${team.formattedTotal}</td>`;
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
