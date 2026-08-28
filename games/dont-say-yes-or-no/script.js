/**
 * Don't Say Yes or No — Game Script
 * Fast-paced speaking reflex engine with authentic Grade 7 & 8 questions
 */

const G7_QUESTIONS = [
  { question: "Do you like pizza?", category: "Food & Preferences" },
  { question: "Are you a student?", category: "Daily Life" },
  { question: "Do you have a brother?", category: "Family" },
  { question: "Do you like football?", category: "Sports" },
  { question: "Can you swim?", category: "Abilities" },
  { question: "Do you have a pet at home?", category: "Animals" },
  { question: "Is your favorite color blue?", category: "Favorites" },
  { question: "Do you like learning English?", category: "School" },
  { question: "Do you play computer games?", category: "Hobbies" },
  { question: "Are you tired today?", category: "Feelings" },
  { question: "Do you like chocolate?", category: "Food" },
  { question: "Can you ride a bicycle?", category: "Abilities" },
  { question: "Do you watch TV every single day?", category: "Habits" },
  { question: "Do you like summer holidays?", category: "Seasons" },
  { question: "Are you good at mathematics?", category: "School" },
  { question: "Do you usually wake up very early?", category: "Daily Routine" },
  { question: "Do you like going shopping?", category: "Lifestyle" },
  { question: "Have you ever travelled to another city?", category: "Travel" },
  { question: "Do you often use social media?", category: "Technology" },
  { question: "Can you cook something delicious?", category: "Abilities" },
  { question: "Do you like studying at home?", category: "School" },
  { question: "Do you think English is easy?", category: "Opinions" },
  { question: "Do you enjoy watching movies with friends?", category: "Entertainment" },
  { question: "Do you always finish your homework on time?", category: "School Habits" },
  { question: "Do you have a secret superpower?", category: "Fun & Imagination" },
  { question: "Do you like rainy weather?", category: "Weather" },
  { question: "Have you ever ridden a horse?", category: "Experiences" },
  { question: "Is today a sunny day?", category: "Environment" }
];

const G8_QUESTIONS = [
  { question: "Have you ever travelled abroad?", category: "Travel & Culture" },
  { question: "Do you spend too much time on your phone?", category: "Teen Life" },
  { question: "Do you enjoy studying with your friends?", category: "Friendship" },
  { question: "Do you think you are an organized student?", category: "Self Reflection" },
  { question: "Would you like to live in another country in the future?", category: "Future Dreams" },
  { question: "Do you think school uniforms should be required?", category: "School Debate" },
  { question: "Can you cook a complete meal by yourself?", category: "Life Skills" },
  { question: "Have you ever forgotten an important friend's birthday?", category: "Friendship" },
  { question: "Do you listen to music while doing your homework?", category: "Study Habits" },
  { question: "Are you ready for high school?", category: "Milestones" },
  { question: "Do you think robots will replace teachers?", category: "Technology & AI" },
  { question: "Do you prefer reading books over watching movies?", category: "Preferences" },
  { question: "Have you ever performed on a stage in front of people?", category: "Confidence" },
  { question: "Do you believe in aliens?", category: "Mysteries" },
  { question: "Are you an early bird or a night owl?", category: "Personality" },
  { question: "Do you follow football or basketball matches regularly?", category: "Sports" },
  { question: "Do you enjoy science experiments?", category: "School Subjects" },
  { question: "Is breakfast your favorite meal of the day?", category: "Nutrition" }
];

// Sound System
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
  playBuzzer() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(140, this.ctx.currentTime);
    osc.frequency.setValueAtTime(100, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  }
  playSuccess() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(587.33, this.ctx.currentTime); // D5
    osc.frequency.setValueAtTime(880, this.ctx.currentTime + 0.08); // A5
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
  playTick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(750, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
}

const sfx = new SoundFX();

let gameState = {
  grade: "both",
  duration: 45,
  timeRemaining: 45,
  timerInterval: null,
  streak: 0,
  maxStreak: 0,
  questionsAnswered: 0,
  deck: [],
  currentQuestionIdx: 0
};

// Elements
const setupScreen = document.getElementById("setupScreen");
const playScreen = document.getElementById("playScreen");
const resultScreen = document.getElementById("resultScreen");

const streakCountEl = document.getElementById("streakCount");
const timerSecondsEl = document.getElementById("timerSeconds");
const timerBadgeEl = document.getElementById("timerBadge");
const questionCategoryEl = document.getElementById("questionCategory");
const activeQuestionEl = document.getElementById("activeQuestion");

const resultStatusPill = document.getElementById("resultStatusPill");
const resultHeadline = document.getElementById("resultHeadline");
const resultDetail = document.getElementById("resultDetail");
const finalScoreVal = document.getElementById("finalScoreVal");
const finalStreakVal = document.getElementById("finalStreakVal");

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

  document.getElementById("btnStartGame").addEventListener("click", startHotSeat);
  document.getElementById("btnSurvivedQ").addEventListener("click", onGoodAnswer);
  document.getElementById("btnPassQ").addEventListener("click", onSkipQuestion);
  document.getElementById("btnCaught").addEventListener("click", onCaughtForbidden);
  document.getElementById("btnNextStudent").addEventListener("click", resetToSetup);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startHotSeat() {
  sfx.init();
  const selectedGrade = document.querySelector("#gradeOptions .pill-btn.active").dataset.grade;
  const selectedDuration = parseInt(document.querySelector("#durationOptions .pill-btn.active").dataset.time, 10);

  gameState.grade = selectedGrade;
  gameState.duration = selectedDuration;
  gameState.timeRemaining = selectedDuration;
  gameState.streak = 0;
  gameState.maxStreak = 0;
  gameState.questionsAnswered = 0;
  gameState.currentQuestionIdx = 0;

  if (selectedGrade === "g7") {
    gameState.deck = shuffle(G7_QUESTIONS);
  } else if (selectedGrade === "g8") {
    gameState.deck = shuffle(G8_QUESTIONS);
  } else {
    gameState.deck = shuffle([...G7_QUESTIONS, ...G8_QUESTIONS]);
  }

  setupScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  playScreen.classList.remove("hidden");

  streakCountEl.textContent = "0";
  showNextQuestion();
  startTimer();
}

function showNextQuestion() {
  if (gameState.currentQuestionIdx >= gameState.deck.length) {
    gameState.deck = shuffle([...G7_QUESTIONS, ...G8_QUESTIONS]);
    gameState.currentQuestionIdx = 0;
  }

  const q = gameState.deck[gameState.currentQuestionIdx];
  questionCategoryEl.textContent = q.category;
  activeQuestionEl.textContent = q.question;

  const box = document.querySelector(".question-box");
  box.style.transform = "scale(0.97)";
  setTimeout(() => { box.style.transform = "scale(1)"; }, 120);
}

function startTimer() {
  clearInterval(gameState.timerInterval);
  timerSecondsEl.textContent = gameState.timeRemaining;
  timerBadgeEl.classList.remove("timer-warning");

  gameState.timerInterval = setInterval(() => {
    gameState.timeRemaining--;
    timerSecondsEl.textContent = gameState.timeRemaining;

    if (gameState.timeRemaining <= 10) {
      timerBadgeEl.classList.add("timer-warning");
      sfx.playTick();
    }

    if (gameState.timeRemaining <= 0) {
      clearInterval(gameState.timerInterval);
      endRound(true);
    }
  }, 1000);
}

function onGoodAnswer() {
  sfx.playSuccess();
  gameState.streak++;
  gameState.questionsAnswered++;
  if (gameState.streak > gameState.maxStreak) {
    gameState.maxStreak = gameState.streak;
  }
  streakCountEl.textContent = gameState.streak;

  gameState.currentQuestionIdx++;
  showNextQuestion();
}

function onSkipQuestion() {
  gameState.currentQuestionIdx++;
  showNextQuestion();
}

function onCaughtForbidden() {
  sfx.playBuzzer();
  clearInterval(gameState.timerInterval);
  endRound(false);
}

function endRound(survivedTime) {
  playScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  finalScoreVal.textContent = gameState.questionsAnswered;
  finalStreakVal.textContent = gameState.maxStreak;

  if (survivedTime) {
    sfx.playSuccess();
    resultStatusPill.textContent = "TIME COMPLETED! 🏆";
    resultHeadline.textContent = "Master of Fluency!";
    resultDetail.textContent = `You survived the entire ${gameState.duration}s timer without saying YES or NO!`;
  } else {
    resultStatusPill.textContent = "CAUGHT! 🚨";
    resultHeadline.textContent = "Caught by the Forbidden Words!";
    resultDetail.textContent = "A forbidden word was spoken! Practice expressing thoughts with creative phrasing.";
  }
}

function resetToSetup() {
  clearInterval(gameState.timerInterval);
  resultScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
}
