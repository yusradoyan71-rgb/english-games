/**
 * SAYI AVI (Number Hunt) — Complete Standalone Game Controller
 * Self-contained, zero external dependency, projector-ready.
 */

// Math Engine
class MathEngine {
  static evaluate(expr) {
    if (!expr || typeof expr !== 'string') {
      return { value: null, isValid: false, isInteger: false };
    }

    let clean = expr
      .replace(/×/g, '*')
      .replace(/x/g, '*')
      .replace(/X/g, '*')
      .replace(/−/g, '-')
      .replace(/–/g, '-')
      .replace(/÷/g, '/')
      .replace(/:/g, '/')
      .replace(/\s+/g, '');

    if (!/^[0-9+\-*/()]+$/.test(clean)) {
      return { value: null, isValid: false, isInteger: false };
    }

    try {
      const tokens = this.tokenize(clean);
      if (!tokens) return { value: null, isValid: false, isInteger: false };
      
      const rpn = this.shuntingYard(tokens);
      if (!rpn) return { value: null, isValid: false, isInteger: false };

      const result = this.evalRPN(rpn);
      if (result === null || !Number.isFinite(result)) {
        return { value: null, isValid: false, isInteger: false };
      }

      const isInteger = Number.isInteger(result);
      return { value: result, isValid: true, isInteger };
    } catch (e) {
      return { value: null, isValid: false, isInteger: false };
    }
  }

  static tokenize(str) {
    const tokens = [];
    let i = 0;
    while (i < str.length) {
      const char = str[i];
      if ('+-*/()'.includes(char)) {
        tokens.push(char);
        i++;
      } else if (/[0-9]/.test(char)) {
        let numStr = '';
        while (i < str.length && /[0-9]/.test(str[i])) {
          numStr += str[i];
          i++;
        }
        tokens.push(Number(numStr));
      } else {
        return null;
      }
    }
    return tokens;
  }

  static shuntingYard(tokens) {
    const output = [];
    const ops = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

    for (let token of tokens) {
      if (typeof token === 'number') {
        output.push(token);
      } else if ('+-*/'.includes(token)) {
        while (
          ops.length > 0 &&
          ops[ops.length - 1] !== '(' &&
          precedence[ops[ops.length - 1]] >= precedence[token]
        ) {
          output.push(ops.pop());
        }
        ops.push(token);
      } else if (token === '(') {
        ops.push(token);
      } else if (token === ')') {
        while (ops.length > 0 && ops[ops.length - 1] !== '(') {
          output.push(ops.pop());
        }
        if (ops.length === 0) return null;
        ops.pop();
      }
    }

    while (ops.length > 0) {
      const op = ops.pop();
      if (op === '(' || op === ')') return null;
      output.push(op);
    }

    return output;
  }

  static evalRPN(rpn) {
    const stack = [];
    for (let token of rpn) {
      if (typeof token === 'number') {
        stack.push(token);
      } else {
        if (stack.length < 2) return null;
        const b = stack.pop();
        const a = stack.pop();
        let res;
        switch (token) {
          case '+': res = a + b; break;
          case '-': res = a - b; break;
          case '*': res = a * b; break;
          case '/':
            if (b === 0) return null;
            res = a / b;
            break;
          default: return null;
        }
        stack.push(res);
      }
    }
    return stack.length === 1 ? stack[0] : null;
  }

  static randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  static formatDisplay(expr) {
    return expr
      .replace(/\*/g, ' × ')
      .replace(/\//g, ' ÷ ')
      .replace(/\+/g, ' + ')
      .replace(/-/g, ' − ')
      .replace(/\s+/g, ' ')
      .replace(/\(\s+/g, '(')
      .replace(/\s+\)/g, ')')
      .trim();
  }

  static pickTarget(difficulty) {
    switch (difficulty) {
      case 'kolay': {
        const easyTargets = [
          12, 16, 18, 20, 24, 25, 28, 30, 32, 36, 40, 42, 45, 48, 50,
          54, 56, 60, 64, 70, 72, 75, 80, 84, 90, 96, 100
        ];
        return this.randChoice(easyTargets);
      }
      case 'orta': {
        const mediumTargets = [
          48, 60, 72, 80, 90, 96, 100, 120, 125, 140, 144, 150, 160, 175, 180,
          200, 210, 220, 240, 250, 280, 300, 320, 350, 360, 400, 420, 450, 480, 500
        ];
        return this.randChoice(mediumTargets);
      }
      case 'zor': {
        const hardTargets = [
          48, 64, 72, 84, 96, 100, 120, 144, 150, 168, 180, 200, 216, 240, 250,
          288, 300, 324, 360, 400, 450, 480, 500, 540, 600, 640, 720, 750, 800, 900, 1000
        ];
        return this.randChoice(hardTargets);
      }
      default:
        return 48;
    }
  }

  static generateCorrectExpressions(target, difficulty, count = 5) {
    const expressions = new Set();
    const results = [];

    const addIfValid = (rawExpr) => {
      const evalRes = this.evaluate(rawExpr);
      if (evalRes.isValid && evalRes.isInteger && evalRes.value === target) {
        const display = this.formatDisplay(rawExpr);
        if (!expressions.has(display)) {
          expressions.add(display);
          results.push({
            expression: display,
            raw: rawExpr,
            value: target,
            isCorrect: true
          });
          return true;
        }
      }
      return false;
    };

    let attempts = 0;
    while (results.length < count && attempts < 300) {
      attempts++;

      // 1. Addition
      if (target > 1) {
        let a = this.randInt(1, target - 1);
        let b = target - a;
        addIfValid(`${a}+${b}`);
      }

      // 2. Subtraction
      {
        let b = this.randInt(1, difficulty === 'kolay' ? 60 : 200);
        let a = target + b;
        addIfValid(`${a}-${b}`);
      }

      // 3. Multiplication
      {
        const factors = [];
        for (let i = 2; i <= Math.sqrt(target); i++) {
          if (target % i === 0) {
            factors.push([i, target / i]);
          }
        }
        if (factors.length > 0) {
          const pair = this.randChoice(factors);
          if (Math.random() < 0.5) {
            addIfValid(`${pair[0]}*${pair[1]}`);
          } else {
            addIfValid(`${pair[1]}*${pair[0]}`);
          }
        }
      }

      // 4. Division
      {
        let b = this.randInt(2, difficulty === 'kolay' ? 5 : (difficulty === 'orta' ? 8 : 12));
        let a = target * b;
        addIfValid(`${a}/${b}`);
      }

      // 5. Multi-step expressions
      if (difficulty === 'orta' || difficulty === 'zor') {
        let c = this.randInt(1, Math.min(target - 1, 60));
        let rem = target - c;
        for (let i = 2; i <= 20; i++) {
          if (rem % i === 0 && rem / i >= 2 && rem / i <= 50) {
            addIfValid(`(${i}*${rem / i})+${c}`);
            addIfValid(`${c}+(${i}*${rem / i})`);
            break;
          }
        }

        let cSub = this.randInt(2, 50);
        let total = target + cSub;
        for (let i = 2; i <= 25; i++) {
          if (total % i === 0 && total / i >= 2 && total / i <= 50) {
            addIfValid(`(${i}*${total / i})-${cSub}`);
            break;
          }
        }

        for (let cMul = 2; cMul <= 10; cMul++) {
          if (target % cMul === 0) {
            let sum = target / cMul;
            if (sum >= 3) {
              let aAdd = this.randInt(1, sum - 1);
              let bAdd = sum - aAdd;
              addIfValid(`(${aAdd}+${bAdd})*${cMul}`);
              addIfValid(`${cMul}*(${aAdd}+${bAdd})`);
            }
          }
        }

        if (difficulty === 'zor') {
          let cDiv = this.randInt(2, 6);
          let diffVal = target * cDiv;
          let bVal = this.randInt(10, 100);
          let aVal = diffVal + bVal;
          addIfValid(`(${aVal}-${bVal})/${cDiv}`);

          let cM = this.randInt(1, 20);
          let bM = this.randInt(2, 5);
          let aM = (target + cM) * bM;
          addIfValid(`(${aM}/${bM})-${cM}`);

          let part1 = this.randInt(Math.floor(target * 0.2), Math.floor(target * 0.8));
          let part2 = target - part1;
          let p1_f = [];
          for (let k = 2; k <= 15; k++) if (part1 % k === 0) p1_f.push([k, part1 / k]);
          let p2_f = [];
          for (let k = 2; k <= 15; k++) if (part2 % k === 0) p2_f.push([k, part2 / k]);
          if (p1_f.length > 0 && p2_f.length > 0) {
            let f1 = this.randChoice(p1_f);
            let f2 = this.randChoice(p2_f);
            addIfValid(`(${f1[0]}*${f1[1]})+(${f2[0]}*${f2[1]})`);
          }
        }
      }
    }

    return results.slice(0, count);
  }

  static generateDistractors(target, difficulty, count = 7, correctSet = new Set()) {
    const expressions = new Set(correctSet);
    const results = [];

    const addDistractor = (rawExpr) => {
      const evalRes = this.evaluate(rawExpr);
      if (evalRes.isValid && evalRes.isInteger && evalRes.value !== target && evalRes.value > 0) {
        const display = this.formatDisplay(rawExpr);
        if (!expressions.has(display)) {
          expressions.add(display);
          results.push({
            expression: display,
            raw: rawExpr,
            value: evalRes.value,
            isCorrect: false
          });
          return true;
        }
      }
      return false;
    };

    let attempts = 0;
    while (results.length < count && attempts < 450) {
      attempts++;

      let offset = this.randChoice([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 10, -10]);
      let fakeTarget = target + offset;
      if (fakeTarget > 2) {
        let a = this.randInt(1, fakeTarget - 1);
        let b = fakeTarget - a;
        addDistractor(`${a}+${b}`);
      }

      {
        let b = this.randInt(1, 50);
        let fakeDiff = target + this.randChoice([-3, -2, -1, 1, 2, 3, 5, -5]);
        let a = fakeDiff + b;
        if (a > b && fakeDiff > 0) {
          addDistractor(`${a}-${b}`);
        }
      }

      {
        let a = this.randInt(2, Math.min(20, Math.max(5, Math.floor(Math.sqrt(target) + 3))));
        let b = this.randInt(2, 20);
        if (a * b !== target && a * b > 0) {
          addDistractor(`${a}*${b}`);
        }
      }

      {
        let b = this.randInt(2, 6);
        let wrongAns = target + this.randChoice([-4, -2, -1, 1, 2, 4, 10]);
        if (wrongAns > 0) {
          let a = wrongAns * b;
          addDistractor(`${a}/${b}`);
        }
      }

      if (difficulty === 'orta' || difficulty === 'zor') {
        let a = this.randInt(2, 12);
        let b = this.randInt(2, 12);
        let c = this.randInt(1, 25);
        
        if ((a * b) - c > 0) {
          addDistractor(`(${a}*${b})-${c}`);
        }
        addDistractor(`(${a}*${b})+${c}`);
        addDistractor(`(${a}+${b})*${c}`);

        if (difficulty === 'zor') {
          let d = this.randInt(2, 6);
          if ((a * b) > c) {
            let num = (a * b) + c;
            let divExact = num * d;
            addDistractor(`(${divExact}/${d})-${c}`);
          }
        }
      }
    }

    return results.slice(0, count);
  }

  static generateRound(difficulty = 'kolay', totalCards = 12) {
    const target = this.pickTarget(difficulty);
    const correctCount = this.randChoice([4, 5, 5, 6]);
    const distractorCount = totalCards - correctCount;

    const correctCards = this.generateCorrectExpressions(target, difficulty, correctCount);
    const actualCorrectCount = correctCards.length;
    const actualDistractorCount = totalCards - actualCorrectCount;

    const correctSet = new Set(correctCards.map(c => c.expression));
    const distractorCards = this.generateDistractors(target, difficulty, actualDistractorCount, correctSet);

    const allCards = [...correctCards, ...distractorCards];

    for (let card of allCards) {
      const evalRes = this.evaluate(card.raw);
      if (!evalRes.isValid || !evalRes.isInteger) {
        throw new Error(`Invalid math card generated: ${card.expression} (${card.raw})`);
      }
      if (card.isCorrect && evalRes.value !== target) {
        throw new Error(`Correct card did not match target: ${card.expression} = ${evalRes.value} != ${target}`);
      }
      if (!card.isCorrect && evalRes.value === target) {
        throw new Error(`Distractor card accidentally matched target: ${card.expression} = ${evalRes.value} == ${target}`);
      }
      card.actualValue = evalRes.value;
    }

    for (let i = allCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
    }

    return {
      target,
      difficulty,
      totalCards: allCards.length,
      correctCount: correctCards.length,
      cards: allCards
    };
  }
}

// Sound Controller
class SoundController {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.25, startDelay = 0) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime + startDelay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    } catch (e) {}
  }

  playCorrect() {
    if (!this.enabled) return;
    this.playTone(523.25, 'triangle', 0.12, 0.2, 0.00);
    this.playTone(659.25, 'triangle', 0.14, 0.22, 0.06);
    this.playTone(783.99, 'triangle', 0.18, 0.25, 0.12);
    this.playTone(1046.50, 'sine', 0.25, 0.28, 0.18);
  }

  playWrong() {
    if (!this.enabled) return;
    this.playTone(220.00, 'sawtooth', 0.20, 0.18, 0.00);
    this.playTone(207.65, 'sawtooth', 0.25, 0.18, 0.06);
  }

  playBonus() {
    if (!this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.22, 0.2, idx * 0.07);
    });
  }

  playTick() {
    if (!this.enabled) return;
    this.playTone(880, 'sine', 0.04, 0.05);
  }

  playUrgentTick() {
    if (!this.enabled) return;
    this.playTone(1200, 'square', 0.06, 0.12);
  }

  playTimeUp() {
    if (!this.enabled) return;
    this.playTone(330, 'sawtooth', 0.35, 0.25, 0.00);
    this.playTone(261.63, 'sawtooth', 0.45, 0.25, 0.18);
    this.playTone(196.00, 'sawtooth', 0.60, 0.30, 0.38);
  }

  playVictory() {
    if (!this.enabled) return;
    const melody = [
      { f: 523.25, d: 0.15, t: 0.00 },
      { f: 523.25, d: 0.15, t: 0.15 },
      { f: 523.25, d: 0.15, t: 0.30 },
      { f: 659.25, d: 0.35, t: 0.45 },
      { f: 783.99, d: 0.20, t: 0.80 },
      { f: 1046.50, d: 0.60, t: 1.00 }
    ];
    melody.forEach(n => {
      this.playTone(n.f, 'triangle', n.d, 0.25, n.t);
    });
  }
}

window.soundCtrl = new SoundController();

// Main Game Controller
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
        window.soundCtrl.init();
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
    const isEnabled = window.soundCtrl.toggle();
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

    this.state.currentRoundData = MathEngine.generateRound(this.config.difficulty, 12);

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
        window.soundCtrl.playUrgentTick();
      } else if (this.state.timeLeft > 10) {
        window.soundCtrl.playTick();
      }

      if (this.state.timeLeft <= 0) {
        clearInterval(this.state.timerId);
        window.soundCtrl.playTimeUp();
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
      window.soundCtrl.playCorrect();

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

        window.soundCtrl.playBonus();
        this.triggerConfetti();
        this.showFloatingPoints(window.innerWidth / 2, window.innerHeight / 2 - 50, '+250 BONUS! 🌟', true);

        setTimeout(() => {
          this.endRound('MÜKEMMEL! TÜM HEDEFLER BULUNDU! 🌟');
        }, 800);
      }
    } else {
      cardElement.classList.add('selected-wrong');
      window.soundCtrl.playWrong();

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

        if (data.isCorrect && !cardEl.classList.contains('selected-correct')) {
          cardEl.classList.add('reveal-missed');
        } else if (!data.isCorrect && !cardEl.classList.contains('selected-wrong')) {
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
    const totalCorrect = this.state.currentRoundData.correctCount;
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

    window.soundCtrl.playVictory();
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
  if (!window.sayiAvi) {
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
  module.exports = { MathEngine, SoundController, SayiAviGame };
}
