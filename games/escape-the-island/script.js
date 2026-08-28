/**
 * Escape the Island — Game Script
 * Cooperative classroom English quest engine
 */

const SURVIVAL_PROMPTS = [
  { prompt: "Would you survive one week without your smartphone? 📱", category: "Daily Survival", milestone: "Beach Camp" },
  { prompt: "Would you survive one night in a thick jungle? 🌴", category: "Jungle Expedition", milestone: "Deep Jungle" },
  { prompt: "Would you survive on a deserted island with only 3 items? 🏝️", category: "Island Dilemma", milestone: "Resource Hunt" },
  { prompt: "Would you survive one week eating only vegetables and fruits? 🥦", category: "Food Challenge", milestone: "Foraging" },
  { prompt: "Would you survive if your boat engine broke down in the ocean? ⛵", category: "Open Sea", milestone: "Raft Building" },
  { prompt: "Would you survive one night in a mysterious ancient cave? 🦇", category: "Exploration", milestone: "Cave Crossing" },
  { prompt: "Would you survive one month without playing any video games? 🎮", category: "Modern Challenge", milestone: "Focus Test" },
  { prompt: "Would you survive a camping trip in the pouring rain without a tent? ⛺", category: "Weather Survival", milestone: "Shelter Build" },
  { prompt: "Would you survive if you got separated from your team in the mountains? ⛰️", category: "Team Navigation", milestone: "High Ridge" },
  { prompt: "Would you survive one day without saying 'I don't know'? 🤐", category: "Fluency Challenge", milestone: "Signal Tower" },
  { prompt: "Would you survive one week waking up at 5:00 a.m. to gather supplies? ⏰", category: "Discipline", milestone: "Supply Run" },
  { prompt: "Would you survive if you encountered a wild bear in the forest? 🐻", category: "Wildlife Encounter", milestone: "River Crossing" },
  { prompt: "Would you survive a 10-kilometer hike across steep cliffs? 🥾", category: "Endurance", milestone: "Cliff Ascent" },
  { prompt: "Would you survive building an emergency SOS fire using dry wood? 🔥", category: "Rescue Signal", milestone: "Signal Fire" }
];

const STEP_NAMES = [
  "Beach Landing 🏖️",
  "Jungle Path 🌴",
  "River Crossing 🌊",
  "Mountain Ridge ⛰️",
  "Signal Beacon 🔥",
  "Rescue Boat ⛵",
  "Harbor Escape 🚢",
  "Victory Flight 🚁"
];

// Web Audio FX
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
  playStep() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.setValueAtTime(659.25, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }
  playVictory() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.12 + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.12);
      osc.stop(this.ctx.currentTime + i * 0.12 + 0.4);
    });
  }
}

const sfx = new SoundFX();

let gameState = {
  totalSteps: 6,
  currentStep: 0,
  deck: [],
  currentPromptIdx: 0
};

// Elements
const setupScreen = document.getElementById("setupScreen");
const playScreen = document.getElementById("playScreen");
const victoryScreen = document.getElementById("victoryScreen");

const islandTrackEl = document.getElementById("islandTrack");
const scenarioCategoryEl = document.getElementById("scenarioCategory");
const stepCounterEl = document.getElementById("stepCounter");
const scenarioPromptEl = document.getElementById("scenarioPrompt");

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

  document.getElementById("btnStartGame").addEventListener("click", startExpedition);
  document.getElementById("btnPassedAnswer").addEventListener("click", advanceIslandStep);
  document.getElementById("btnFailedAnswer").addEventListener("click", skipPrompt);
  document.getElementById("btnPlayAgain").addEventListener("click", resetExpedition);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startExpedition() {
  sfx.init();
  const selectedSteps = parseInt(document.querySelector("#stepOptions .pill-btn.active").dataset.steps, 10);

  gameState.totalSteps = selectedSteps;
  gameState.currentStep = 0;
  gameState.deck = shuffle(SURVIVAL_PROMPTS);
  gameState.currentPromptIdx = 0;

  setupScreen.classList.add("hidden");
  victoryScreen.classList.add("hidden");
  playScreen.classList.remove("hidden");

  renderTrack();
  showCurrentPrompt();
}

function renderTrack() {
  islandTrackEl.innerHTML = "";
  for (let i = 0; i < gameState.totalSteps; i++) {
    const stepDiv = document.createElement("div");
    stepDiv.className = `track-step ${i < gameState.currentStep ? "completed" : i === gameState.currentStep ? "current" : ""}`;
    const icon = i === gameState.totalSteps - 1 ? "⛵" : i < gameState.currentStep ? "✔️" : `0${i+1}`;
    stepDiv.innerHTML = `
      <div class="step-bubble">${icon}</div>
      <div class="step-label">${STEP_NAMES[i] || `Stage ${i+1}`}</div>
    `;
    islandTrackEl.appendChild(stepDiv);
  }
}

function showCurrentPrompt() {
  if (gameState.currentPromptIdx >= gameState.deck.length) {
    gameState.deck = shuffle(SURVIVAL_PROMPTS);
    gameState.currentPromptIdx = 0;
  }

  const p = gameState.deck[gameState.currentPromptIdx];
  scenarioCategoryEl.textContent = `🏝️ ${p.category}`;
  stepCounterEl.textContent = `Stage ${gameState.currentStep + 1} of ${gameState.totalSteps}`;
  scenarioPromptEl.textContent = p.prompt;

  const card = document.querySelector(".survival-card");
  card.style.transform = "scale(0.97)";
  setTimeout(() => { card.style.transform = "scale(1)"; }, 120);
}

function advanceIslandStep() {
  sfx.playStep();
  gameState.currentStep++;
  gameState.currentPromptIdx++;

  renderTrack();

  if (gameState.currentStep >= gameState.totalSteps) {
    sfx.playVictory();
    playScreen.classList.add("hidden");
    victoryScreen.classList.remove("hidden");
  } else {
    showCurrentPrompt();
  }
}

function skipPrompt() {
  gameState.currentPromptIdx++;
  showCurrentPrompt();
}

function resetExpedition() {
  victoryScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
}
