/**
 * WOULD YOU RATHER? - Classroom English Speaking Game Controller
 */

class WouldYouRatherGame {
  constructor() {
    // Config & Game State
    this.grade = '7'; // '7' or '8'
    this.mode = 'team'; // 'individual' or 'team'
    this.teamCount = 3;
    this.teamNames = ['Team Alpha 🦁', 'Team Bravo ⚡', 'Team Charlie 🚀', 'Team Delta 🔥'];
    this.teamScores = [0, 0, 0, 0];
    this.currentTeamIndex = 0;
    this.totalQuestions = 20; // 10, 20, 30, or Infinity
    this.currentQuestionNumber = 0;
    
    this.usedQuestionIds = new Set();
    this.currentQuestion = null;
    this.selectedOption = null; // 'A' or 'B'
    this.answeredThisQuestion = false;

    // Confetti / Particle Canvas
    this.canvas = document.getElementById('fxCanvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animationFrameId = null;

    this.initDOM();
    this.initEvents();
    this.initCanvas();
    this.updateTeamInputsUI();
  }

  initDOM() {
    // Screens
    this.screenSetup = document.getElementById('screenSetup');
    this.screenArena = document.getElementById('screenArena');
    this.screenEnd = document.getElementById('screenEnd');

    // Navigation & Status
    this.navStatusBanner = document.getElementById('navStatusBanner');
    this.navStagePill = document.getElementById('navStagePill');
    this.navTeamPill = document.getElementById('navTeamPill');
    this.btnToggleSound = document.getElementById('btnToggleSound');
    this.soundIcon = document.getElementById('soundIcon');
    this.btnToggleFullscreen = document.getElementById('btnToggleFullscreen');
    this.btnRestartGame = document.getElementById('btnRestartGame');

    // Setup Screen Elements
    this.gradeSelectBtns = document.querySelectorAll('.btn-select[data-grade]');
    this.modeSelectBtns = document.querySelectorAll('.btn-select[data-mode]');
    this.teamCountGroup = document.getElementById('teamCountGroup');
    this.teamCountBtns = document.querySelectorAll('.btn-select[data-teams]');
    this.teamNamesBox = document.getElementById('teamNamesBox');
    this.teamInputsGrid = document.getElementById('teamInputsGrid');
    this.lengthBtns = document.querySelectorAll('.btn-select[data-length]');
    this.btnStartGame = document.getElementById('btnStartGame');

    // Arena Elements
    this.stageTitle = document.getElementById('stageTitle');
    this.stageDots = document.querySelectorAll('.stage-dot');
    this.questionCounterPill = document.getElementById('questionCounterPill');
    this.arenaTeamsBar = document.getElementById('arenaTeamsBar');
    this.categoryTag = document.getElementById('categoryTag');
    
    // Cards
    this.optionCardA = document.getElementById('optionCardA');
    this.optionCardB = document.getElementById('optionCardB');
    this.emojiA = document.getElementById('emojiA');
    this.emojiB = document.getElementById('emojiB');
    this.textA = document.getElementById('textA');
    this.textB = document.getElementById('textB');

    // Speaking Panel
    this.speakingPanel = document.getElementById('speakingPanel');
    this.choiceBadgeSelected = document.getElementById('choiceBadgeSelected');
    this.reactionPill = document.getElementById('reactionPill');
    this.promptQuestion = document.getElementById('promptQuestion');
    this.scaffoldText = document.getElementById('scaffoldText');
    this.btnGoodAnswer = document.getElementById('btnGoodAnswer');
    this.btnTryAgain = document.getElementById('btnTryAgain');
    this.btnNextQuestion = document.getElementById('btnNextQuestion');

    // End Screen Elements
    this.endScoreboard = document.getElementById('endScoreboard');
    this.endWinnerText = document.getElementById('endWinnerText');
    this.btnPlayAgain = document.getElementById('btnPlayAgain');
  }

  initEvents() {
    // Sound Toggle
    this.btnToggleSound.addEventListener('click', () => {
      const isSound = window.audioManager.toggle();
      this.soundIcon.textContent = isSound ? '🔊' : '🔇';
    });

    // Fullscreen Toggle
    this.btnToggleFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    // Restart Button
    this.btnRestartGame.addEventListener('click', () => {
      window.audioManager.playClick();
      if (confirm('Restart game and return to setup?')) {
        this.showScreen('setup');
      }
    });

    // Setup: Grade Selection
    this.gradeSelectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        window.audioManager.playClick();
        this.gradeSelectBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.grade = btn.dataset.grade;
      });
    });

    // Setup: Mode Selection
    this.modeSelectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        window.audioManager.playClick();
        this.modeSelectBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.mode = btn.dataset.mode;
        if (this.mode === 'individual') {
          this.teamCountGroup.style.display = 'none';
          this.teamNamesBox.style.display = 'none';
        } else {
          this.teamCountGroup.style.display = 'flex';
          this.teamNamesBox.style.display = 'block';
        }
      });
    });

    // Setup: Team Count
    this.teamCountBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        window.audioManager.playClick();
        this.teamCountBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.teamCount = parseInt(btn.dataset.teams, 10);
        this.updateTeamInputsUI();
      });
    });

    // Setup: Game Length
    this.lengthBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        window.audioManager.playClick();
        this.lengthBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const val = btn.dataset.length;
        this.totalQuestions = val === 'endless' ? Infinity : parseInt(val, 10);
      });
    });

    // Start Game Button
    this.btnStartGame.addEventListener('click', () => {
      window.audioManager.playClick();
      this.collectTeamNames();
      this.startGame();
    });

    // Option Cards Clicks
    this.optionCardA.addEventListener('click', () => this.selectOption('A'));
    this.optionCardB.addEventListener('click', () => this.selectOption('B'));

    // Teacher Judge Buttons
    this.btnGoodAnswer.addEventListener('click', () => this.handleGoodAnswer());
    this.btnTryAgain.addEventListener('click', () => this.handleTryAgain());
    this.btnNextQuestion.addEventListener('click', () => this.nextQuestion());

    // Play Again Button
    this.btnPlayAgain.addEventListener('click', () => {
      window.audioManager.playClick();
      this.showScreen('setup');
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (this.screenArena.classList.contains('active')) {
        if (!this.selectedOption) {
          if (e.key === '1' || e.key.toLowerCase() === 'a') {
            this.selectOption('A');
          } else if (e.key === '2' || e.key.toLowerCase() === 'b') {
            this.selectOption('B');
          }
        } else {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            this.handleGoodAnswer();
          } else if (e.key.toLowerCase() === 'r') {
            this.handleTryAgain();
          } else if (e.key.toLowerCase() === 'n' || e.key === 'ArrowRight') {
            this.nextQuestion();
          }
        }
      }
    });

    // Resize Canvas
    window.addEventListener('resize', () => {
      if (this.canvas) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      }
    });
  }

  updateTeamInputsUI() {
    this.teamInputsGrid.innerHTML = '';
    for (let i = 0; i < this.teamCount; i++) {
      const defaultName = this.teamNames[i] || `Team ${String.fromCharCode(65 + i)}`;
      const col = document.createElement('div');
      col.className = 'team-input-group';
      col.innerHTML = `
        <label>TEAM ${i + 1} NAME</label>
        <input type="text" class="team-name-input" data-index="${i}" value="${defaultName}" maxlength="20">
      `;
      this.teamInputsGrid.appendChild(col);
    }
  }

  collectTeamNames() {
    const inputs = document.querySelectorAll('.team-name-input');
    inputs.forEach(input => {
      const idx = parseInt(input.dataset.index, 10);
      const val = input.value.trim();
      if (val) {
        this.teamNames[idx] = val;
      }
    });
  }

  showScreen(screenName) {
    this.screenSetup.classList.remove('active');
    this.screenArena.classList.remove('active');
    this.screenEnd.classList.remove('active');

    if (screenName === 'setup') {
      this.screenSetup.classList.add('active');
      this.navStatusBanner.style.display = 'none';
    } else if (screenName === 'arena') {
      this.screenArena.classList.add('active');
      this.navStatusBanner.style.display = 'flex';
    } else if (screenName === 'end') {
      this.screenEnd.classList.add('active');
      this.navStatusBanner.style.display = 'none';
    }
  }

  startGame() {
    this.currentQuestionNumber = 0;
    this.currentTeamIndex = 0;
    this.teamScores = new Array(this.teamCount).fill(0);
    this.usedQuestionIds.clear();

    this.showScreen('arena');
    this.nextQuestion();
  }

  /**
   * Determine stage based on current question count:
   * Q 1-5: Stage 1 (Ice Breaker)
   * Q 6-10: Stage 2 (Getting to Know You)
   * Q 11-15: Stage 3 (Think About It)
   * Q 16+: Stage 4 (Challenge)
   */
  getStageForQuestion(num) {
    if (num <= 5) return 1;
    if (num <= 10) return 2;
    if (num <= 15) return 3;
    return 4;
  }

  getStageName(stage) {
    switch(stage) {
      case 1: return "STAGE 1: ICE BREAKER";
      case 2: return "STAGE 2: GETTING TO KNOW YOU";
      case 3: return "STAGE 3: THINK ABOUT IT";
      case 4: return "STAGE 4: CHALLENGE";
      default: return "STAGE 1: ICE BREAKER";
    }
  }

  nextQuestion() {
    window.audioManager.playNext();
    this.currentQuestionNumber++;

    // Check if game length reached
    if (this.currentQuestionNumber > this.totalQuestions) {
      this.endGame();
      return;
    }

    const stage = this.getStageForQuestion(this.currentQuestionNumber);
    this.selectedOption = null;
    this.answeredThisQuestion = false;

    // Pick non-repeated question
    this.currentQuestion = this.pickQuestion(stage);
    if (!this.currentQuestion) {
      // If pool exhausted in that stage, pick from any available in that grade
      this.currentQuestion = this.pickFallbackQuestion();
    }

    if (!this.currentQuestion) {
      this.endGame();
      return;
    }

    this.usedQuestionIds.add(this.currentQuestion.id);

    // Update HUD
    this.updateArenaHUD(stage);

    // Render Question Cards
    this.renderQuestionCard();

    // Reset Speaking Panel
    this.speakingPanel.classList.remove('active');
    this.optionCardA.classList.remove('selected', 'dimmed');
    this.optionCardB.classList.remove('selected', 'dimmed');
  }

  pickQuestion(stage) {
    const bankKey = `grade${this.grade}`;
    const stageKey = `stage${stage}`;
    const bank = WOULD_YOU_RATHER_DATA[bankKey][stageKey] || [];
    const available = bank.filter(q => !this.usedQuestionIds.has(q.id));

    if (available.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * available.length);
    return available[randomIndex];
  }

  pickFallbackQuestion() {
    const bankKey = `grade${this.grade}`;
    const allStages = ['stage1', 'stage2', 'stage3', 'stage4'];
    let allAvailable = [];
    allStages.forEach(st => {
      const list = WOULD_YOU_RATHER_DATA[bankKey][st] || [];
      list.forEach(q => {
        if (!this.usedQuestionIds.has(q.id)) {
          allAvailable.push(q);
        }
      });
    });

    if (allAvailable.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * allAvailable.length);
    return allAvailable[randomIndex];
  }

  updateArenaHUD(stage) {
    // Stage Title & Dots
    this.stageTitle.textContent = this.getStageName(stage);
    this.stageDots.forEach((dot, index) => {
      if (index < stage) {
        dot.classList.add('filled');
      } else {
        dot.classList.remove('filled');
      }
    });

    // Nav Bar Status
    this.navStagePill.textContent = `STAGE ${stage}`;
    if (this.mode === 'team') {
      const activeTeamName = this.teamNames[this.currentTeamIndex];
      this.navTeamPill.textContent = `TURN: ${activeTeamName.toUpperCase()}`;
      this.navTeamPill.style.display = 'inline-block';
    } else {
      this.navTeamPill.style.display = 'none';
    }

    // Question Counter
    const totalStr = this.totalQuestions === Infinity ? '∞' : this.totalQuestions;
    this.questionCounterPill.textContent = `QUESTION ${this.currentQuestionNumber} / ${totalStr}`;

    // Render Teams Score Bar
    this.renderTeamsBar();
  }

  renderTeamsBar() {
    if (this.mode === 'individual') {
      this.arenaTeamsBar.style.display = 'none';
      return;
    }
    this.arenaTeamsBar.style.display = 'flex';
    this.arenaTeamsBar.innerHTML = '';

    for (let i = 0; i < this.teamCount; i++) {
      const isTurn = (i === this.currentTeamIndex);
      const chip = document.createElement('div');
      chip.className = `team-score-chip ${isTurn ? 'active-turn' : ''}`;
      chip.innerHTML = `
        <span class="team-chip-name">${this.teamNames[i]}</span>
        <span class="team-chip-pts">${this.teamScores[i]} pts</span>
      `;
      this.arenaTeamsBar.appendChild(chip);
    }
  }

  renderQuestionCard() {
    const q = this.currentQuestion;
    this.categoryTag.textContent = `${q.category || 'Topic'} • Grade ${this.grade}`;

    this.emojiA.textContent = q.optionA.emoji || '🎯';
    this.textA.textContent = q.optionA.text;

    this.emojiB.textContent = q.optionB.emoji || '⚡';
    this.textB.textContent = q.optionB.text;
  }

  selectOption(opt) {
    if (this.selectedOption) return;
    this.selectedOption = opt;
    window.audioManager.playSelect();

    const chosen = (opt === 'A') ? this.currentQuestion.optionA : this.currentQuestion.optionB;

    if (opt === 'A') {
      this.optionCardA.classList.add('selected');
      this.optionCardB.classList.add('dimmed');
    } else {
      this.optionCardB.classList.add('selected');
      this.optionCardA.classList.add('dimmed');
    }

    // Open Speaking Panel
    this.showSpeakingPanel(chosen);
  }

  showSpeakingPanel(chosen) {
    const stage = this.getStageForQuestion(this.currentQuestionNumber);
    
    // Pick Speaking Prompt
    let promptText = "";
    if (this.currentQuestion.prompts && this.currentQuestion.prompts.length > 0) {
      promptText = this.currentQuestion.prompts[Math.floor(Math.random() * this.currentQuestion.prompts.length)];
    } else {
      const stagePrompts = WOULD_YOU_RATHER_DATA.prompts[`stage${stage}`] || WOULD_YOU_RATHER_DATA.prompts.stage1;
      promptText = stagePrompts[Math.floor(Math.random() * stagePrompts.length)];
    }

    // Pick Reaction
    const reactions = WOULD_YOU_RATHER_DATA.reactions;
    const reaction = reactions[Math.floor(Math.random() * reactions.length)];

    // Scaffolding starter
    const starter = this.currentQuestion.starter || "I would rather choose this because ...";

    // Populate UI
    this.choiceBadgeSelected.textContent = `${chosen.emoji} ${chosen.text}`;
    this.reactionPill.textContent = reaction.text;
    this.reactionPill.style.background = `${reaction.color}25`;
    this.reactionPill.style.color = reaction.color;
    this.reactionPill.style.border = `1px solid ${reaction.color}60`;

    this.promptQuestion.textContent = promptText;
    this.scaffoldText.textContent = `"${starter}"`;

    this.speakingPanel.classList.add('active');

    // Scroll slightly if on smaller screens
    setTimeout(() => {
      this.speakingPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  handleGoodAnswer() {
    if (this.answeredThisQuestion) {
      this.nextQuestion();
      return;
    }
    this.answeredThisQuestion = true;

    window.audioManager.playGoodAnswer();
    this.fireConfetti();

    // Award point if in team mode
    if (this.mode === 'team') {
      this.teamScores[this.currentTeamIndex]++;
      this.renderTeamsBar();
    }

    // Advance turn
    if (this.mode === 'team') {
      this.currentTeamIndex = (this.currentTeamIndex + 1) % this.teamCount;
    }

    // Auto next after brief delay
    setTimeout(() => {
      this.nextQuestion();
    }, 1100);
  }

  handleTryAgain() {
    window.audioManager.playTryAgain();
    // Gentle pulse animation on scaffold box
    const scaffold = document.querySelector('.scaffold-box');
    if (scaffold) {
      scaffold.style.transform = 'scale(1.06)';
      setTimeout(() => {
        scaffold.style.transform = 'scale(1)';
      }, 250);
    }
  }

  endGame() {
    window.audioManager.playWin();
    this.fireConfetti(120);
    this.showScreen('end');

    if (this.mode === 'individual') {
      this.endWinnerText.textContent = `🎉 Fantastic Speaking! You answered ${this.currentQuestionNumber - 1} questions.`;
      this.endScoreboard.innerHTML = `
        <div class="scoreboard-item winner-item">
          <span class="score-rank">🌟</span>
          <span class="score-team-name">Great Job!</span>
          <span class="score-points-val">Completed</span>
        </div>
      `;
      return;
    }

    // Determine ranking for team mode
    const rankedTeams = [];
    for (let i = 0; i < this.teamCount; i++) {
      rankedTeams.push({ name: this.teamNames[i], score: this.teamScores[i] });
    }
    rankedTeams.sort((a, b) => b.score - a.score);

    const winner = rankedTeams[0];
    const isTie = rankedTeams.length > 1 && rankedTeams[0].score === rankedTeams[1].score && rankedTeams[0].score > 0;

    if (isTie) {
      this.endWinnerText.textContent = `🤝 It's a Tie! Outstanding speaking from all teams!`;
    } else {
      this.endWinnerText.textContent = `🏆 WINNER: ${winner.name.toUpperCase()} with ${winner.score} Points!`;
    }

    this.endScoreboard.innerHTML = '';
    const medals = ['🥇', '🥈', '🥉', '🏅'];
    rankedTeams.forEach((team, idx) => {
      const item = document.createElement('div');
      item.className = `scoreboard-item ${idx === 0 ? 'winner-item' : ''}`;
      item.innerHTML = `
        <span class="score-rank">${medals[idx] || '👏'}</span>
        <span class="score-team-name">${team.name}</span>
        <span class="score-points-val">${team.score} PTS</span>
      `;
      this.endScoreboard.appendChild(item);
    });
  }

  /* ============================================================
     CONFETTI & PARTICLE SYSTEM
     ============================================================ */
  initCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.particles = [];
    this.loopCanvas();
  }

  fireConfetti(count = 60) {
    if (!this.canvas) return;
    const colors = ['#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#8b5cf6', '#38bdf8'];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
        y: window.innerHeight * 0.45,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 12 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        alpha: 1,
        life: Math.random() * 50 + 60
      });
    }
  }

  loopCanvas() {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // Gravity
        p.rotation += p.rotSpeed;
        p.life--;
        if (p.life < 20) {
          p.alpha = p.life / 20;
        }

        if (p.life <= 0 || p.y > this.canvas.height) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.globalAlpha = p.alpha;
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        this.ctx.restore();
      }
    }
    this.animationFrameId = requestAnimationFrame(() => this.loopCanvas());
  }
}

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.game = new WouldYouRatherGame();
});
