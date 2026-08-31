/**
 * Keep or Pass — Game Script
 * Team-based vocabulary and strategy game with procedural Web Audio
 */

const KEEP_OR_PASS_QUESTIONS = [
  { question: "Fill in the blank: I ___ a student.", hint: "Verb to be (am / is / are)", category: "Grammar Basics" },
  { question: "What color is the sun?", hint: "Colors", category: "Vocabulary" },
  { question: "Fill in the blank: A cat says : ___", hint: "Animal sounds in English", category: "Vocabulary" },
  { question: "What do we use to write on the board? (classroom object)", hint: "Marker / Chalk / Pen", category: "Classroom" },
  { question: "Fill in the blank: She ___ wearing a red dress.", hint: "Present continuous (am / is / are)", category: "Grammar" },
  { question: "Which animal is very big and has a long trunk?", hint: "Wild animals", category: "Vocabulary" },
  { question: "What color do you get when you mix blue and yellow?", hint: "Color mixing", category: "General Knowledge" },
  { question: "Fill in the blank: This ___ my English book.", hint: "Verb to be (is / are)", category: "Grammar" },
  { question: "What do you wear on your feet? (clothing item)", hint: "Shoes / Socks / Boots", category: "Clothing" },
  { question: "Fill in the blank: He ___ my best friend.", hint: "Verb to be", category: "Grammar" },
  { question: "Which animal gives us milk and eats grass?", hint: "Farm animals", category: "Vocabulary" },
  { question: "What do students sit on in the classroom?", hint: "Chair / Desk / Bench", category: "Classroom" },
  { question: "What is the opposite of 'HOT'?", hint: "Adjectives", category: "Vocabulary" },
  { question: "How many days are there in a week?", hint: "Numbers & Time", category: "General Knowledge" },
  { question: "What do you say when you meet someone in the morning?", hint: "Daily Greetings", category: "Communication" },
  { question: "Which season comes after winter?", hint: "Seasons", category: "Vocabulary" }
];

const MYSTERY_REWARDS = [
  // Positive Outcomes (~63%)
  { points: 100, type: "gain", icon: "⭐", badge: "GAIN", text: "+100 POINTS" },
  { points: 200, type: "gain", icon: "🌟", badge: "GAIN", text: "+200 POINTS" },
  { points: 300, type: "gain", icon: "💎", badge: "REWARD", text: "+300 POINTS" },
  { points: 500, type: "gain", icon: "🎁", badge: "BIG GAIN", text: "+500 POINTS" },
  { points: 750, type: "gain", icon: "🏆", badge: "MEGA REWARD", text: "+750 POINTS" },
  { points: 1000, type: "gain", icon: "👑", badge: "JACKPOT", text: "+1000 POINTS" },
  { points: 200, type: "gain", icon: "💰", badge: "GAIN", text: "+200 POINTS" },
  { points: 500, type: "gain", icon: "🔥", badge: "BIG GAIN", text: "+500 POINTS" },
  { points: 100, type: "gain", icon: "✨", badge: "GAIN", text: "+100 POINTS" },
  { points: 300, type: "gain", icon: "🍀", badge: "REWARD", text: "+300 POINTS" },

  // Negative Outcomes (~37%)
  { points: -100, type: "loss", icon: "⚠️", badge: "RISK", text: "-100 POINTS" },
  { points: -200, type: "loss", icon: "💣", badge: "RISK", text: "-200 POINTS" },
  { points: -300, type: "loss", icon: "⚡", badge: "LOSS", text: "-300 POINTS" },
  { points: -500, type: "loss", icon: "💥", badge: "BIG LOSS", text: "-500 POINTS" },
  { points: -750, type: "loss", icon: "☠️", badge: "HEAVY LOSS", text: "-750 POINTS" },
  { points: -1000, type: "loss", icon: "🚨", badge: "CRITICAL RISK", text: "-1000 POINTS" }
];

// Procedural Sound Effects
class SoundFX {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }
  playFanfare() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    [440, 554.37, 659.25, 880].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.1 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.1);
      osc.stop(this.ctx.currentTime + i * 0.1 + 0.35);
    });
  }
  playBoom() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  }
  playChime() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.setValueAtTime(900, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }
}

const sfx = new SoundFX();

let gameState = {
  numTeams: 2,
  totalRounds: 12,
  currentQuestionIdx: 0,
  activeTeamIdx: 0,
  teams: [],
  questions: [],
  pendingReward: null
};

// Elements
const setupScreen = document.getElementById("setupScreen");
const questionScreen = document.getElementById("questionScreen");
const decisionScreen = document.getElementById("decisionScreen");
const revealScreen = document.getElementById("revealScreen");
const podiumScreen = document.getElementById("podiumScreen");

const scoreboardBar = document.getElementById("scoreboardBar");
const decisionScoreboard = document.getElementById("decisionScoreboard");
const activeTeamTurnEl = document.getElementById("activeTeamTurn");
const questionProgressEl = document.getElementById("questionProgress");
const questionCategoryEl = document.getElementById("questionCategory");
const questionTextEl = document.getElementById("questionText");
const hintBoxEl = document.getElementById("hintBox");

const decisionTeamTitle = document.getElementById("decisionTeamTitle");
const revealCard = document.getElementById("revealCard");
const revealBadge = document.getElementById("revealBadge");
const revealActionTag = document.getElementById("revealActionTag");
const revealTargetTeam = document.getElementById("revealTargetTeam");
const revealIcon = document.getElementById("revealIcon");
const revealPointsText = document.getElementById("revealPointsText");
const revealDescText = document.getElementById("revealDescText");

let consecutiveLossCount = 0;

function getRandomReward() {
  let pool = MYSTERY_REWARDS;
  // If we already had 2 negative outcomes in a row, guarantee a positive reward to avoid long negative streaks
  if (consecutiveLossCount >= 2) {
    pool = MYSTERY_REWARDS.filter(r => r.type === "gain");
  }
  const reward = pool[Math.floor(Math.random() * pool.length)];
  if (reward.type === "loss") {
    consecutiveLossCount++;
  } else {
    consecutiveLossCount = 0;
  }
  return reward;
}

document.addEventListener("DOMContentLoaded", () => {
  setupPills();
  initEvents();
});

function setupPills() {
  document.querySelectorAll(".option-pills").forEach(group => {
    group.querySelectorAll(".pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        group.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  });
}

function initEvents() {
  document.getElementById("btnSoundToggle").addEventListener("click", (e) => {
    sfx.muted = !sfx.muted;
    e.currentTarget.textContent = sfx.muted ? "🔇" : "🔊";
  });

  document.getElementById("btnStartGame").addEventListener("click", startMatch);
  document.getElementById("btnAnswerCorrect").addEventListener("click", onAnswerCorrect);
  document.getElementById("btnAnswerWrong").addEventListener("click", onAnswerWrong);
  document.getElementById("btnChoiceKeep").addEventListener("click", () => handleDecision("keep"));
  document.getElementById("btnChoicePass").addEventListener("click", () => handleDecision("pass"));
  document.getElementById("btnNextQuestion").addEventListener("click", nextQuestion);
  document.getElementById("btnPlayAgain").addEventListener("click", resetMatch);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startMatch() {
  sfx.init();
  const teamCount = parseInt(document.querySelector("#teamOptions .pill-btn.active").dataset.teams, 10);
  const roundCount = parseInt(document.querySelector("#roundOptions .pill-btn.active").dataset.rounds, 10);

  gameState.numTeams = teamCount;
  gameState.totalRounds = roundCount;
  gameState.currentQuestionIdx = 0;
  gameState.activeTeamIdx = 0;
  consecutiveLossCount = 0;

  gameState.teams = [];
  for (let i = 1; i <= teamCount; i++) {
    gameState.teams.push({ name: `Team ${i}`, score: 0 });
  }

  gameState.questions = shuffle(KEEP_OR_PASS_QUESTIONS).slice(0, roundCount);
  if (gameState.questions.length < roundCount) {
    gameState.questions = shuffle([...KEEP_OR_PASS_QUESTIONS, ...KEEP_OR_PASS_QUESTIONS]).slice(0, roundCount);
  }

  setupScreen.classList.add("hidden");
  podiumScreen.classList.add("hidden");
  showQuestionScreen();
}

function renderScoreboard(container) {
  container.innerHTML = "";
  gameState.teams.forEach((t, idx) => {
    const chip = document.createElement("div");
    chip.className = `score-chip ${idx === gameState.activeTeamIdx ? "active-team" : ""}`;
    chip.innerHTML = `<span class="team-name">${t.name}</span><span class="team-pts">${t.score}</span>`;
    container.appendChild(chip);
  });
}

function showQuestionScreen() {
  questionScreen.classList.remove("hidden");
  decisionScreen.classList.add("hidden");
  revealScreen.classList.add("hidden");

  renderScoreboard(scoreboardBar);

  const curQ = gameState.questions[gameState.currentQuestionIdx];
  activeTeamTurnEl.textContent = `${gameState.teams[gameState.activeTeamIdx].name}'s Turn`;
  questionProgressEl.textContent = `Question ${gameState.currentQuestionIdx + 1} / ${gameState.totalRounds}`;
  questionCategoryEl.textContent = curQ.category;
  questionTextEl.textContent = curQ.question;
  hintBoxEl.textContent = `💡 Hint: ${curQ.hint}`;
}

function onAnswerCorrect() {
  sfx.playChime();
  // Pick random reward from valid point pool (positive & negative balanced, no empty boxes)
  gameState.pendingReward = getRandomReward();

  questionScreen.classList.add("hidden");
  decisionScreen.classList.remove("hidden");

  renderScoreboard(decisionScoreboard);
  decisionTeamTitle.textContent = `${gameState.teams[gameState.activeTeamIdx].name}, what will you do?`;
}

function onAnswerWrong() {
  sfx.playBoom();
  // Pass turn directly to next question/team
  advanceTurn();
  if (gameState.currentQuestionIdx >= gameState.totalRounds) {
    showPodium();
  } else {
    showQuestionScreen();
  }
}

function handleDecision(choice) {
  decisionScreen.classList.add("hidden");
  revealScreen.classList.remove("hidden");

  let targetTeamIdx;
  if (choice === "keep") {
    targetTeamIdx = gameState.activeTeamIdx;
    revealActionTag.textContent = `${gameState.teams[targetTeamIdx].name} KEPT THE BOX!`;
    revealTargetTeam.textContent = `${gameState.teams[targetTeamIdx].name} receives:`;
  } else {
    // Pass to next opponent team
    targetTeamIdx = (gameState.activeTeamIdx + 1) % gameState.numTeams;
    revealActionTag.textContent = `PASSED TO ${gameState.teams[targetTeamIdx].name.toUpperCase()}!`;
    revealTargetTeam.textContent = `${gameState.teams[targetTeamIdx].name} must take:`;
  }

  const rew = gameState.pendingReward;

  // Restart card animations smoothly
  revealCard.classList.remove("is-gain", "is-loss");
  void revealCard.offsetWidth; // trigger reflow

  revealIcon.textContent = rew.icon;
  revealPointsText.textContent = rew.text;

  if (rew.type === "gain") {
    revealCard.classList.add("is-gain");
    revealBadge.className = "reveal-badge gain-badge";
    revealBadge.textContent = rew.badge || "GAIN";
    sfx.playFanfare();
    revealDescText.textContent = `Awesome! +${rew.points} points awarded to ${gameState.teams[targetTeamIdx].name}.`;
  } else {
    revealCard.classList.add("is-loss");
    revealBadge.className = "reveal-badge loss-badge";
    revealBadge.textContent = rew.badge || "RISK";
    sfx.playBoom();
    revealDescText.textContent = `Uh oh! ${gameState.teams[targetTeamIdx].name} loses ${Math.abs(rew.points)} points!`;
  }

  // Update target team score (floor at 0)
  gameState.teams[targetTeamIdx].score = Math.max(0, gameState.teams[targetTeamIdx].score + rew.points);
}

function nextQuestion() {
  advanceTurn();
  if (gameState.currentQuestionIdx >= gameState.totalRounds) {
    showPodium();
  } else {
    showQuestionScreen();
  }
}

function advanceTurn() {
  gameState.currentQuestionIdx++;
  gameState.activeTeamIdx = (gameState.activeTeamIdx + 1) % gameState.numTeams;
}

function showPodium() {
  revealScreen.classList.add("hidden");
  questionScreen.classList.add("hidden");
  podiumScreen.classList.remove("hidden");

  sfx.playFanfare();
  const podiumEl = document.getElementById("finalPodium");
  podiumEl.innerHTML = "";

  const sorted = [...gameState.teams].sort((a, b) => b.score - a.score);
  sorted.forEach((team, idx) => {
    const card = document.createElement("div");
    card.className = `podium-card ${idx === 0 ? "winner" : ""}`;
    const medal = idx === 0 ? "🥇 1st Place" : idx === 1 ? "🥈 2nd Place" : idx === 2 ? "🥉 3rd Place" : "4th Place";
    card.innerHTML = `
      <div class="podium-rank">${medal}</div>
      <h3 style="font-family: var(--font-heading); margin-bottom: 0.25rem;">${team.name}</h3>
      <div style="font-size: 1.6rem; font-weight: 700; color: #fbbf24;">${team.score} pts</div>
    `;
    podiumEl.appendChild(card);
  });
}

function resetMatch() {
  podiumScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
}
