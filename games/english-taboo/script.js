/**
 * English Taboo — Game Script
 * Complete client-side game engine with authentic curriculum cards & procedural Web Audio
 */

// Authentic cards extracted from teacher materials
const TABOO_DECK = [
  { word: "BEACH", taboo: ["sea", "sand", "swim", "summer"] },
  { word: "TEACHER", taboo: ["school", "student", "lesson", "class"] },
  { word: "HAMBURGER", taboo: ["food", "meat", "bread", "restaurant"] },
  { word: "ELEPHANT", taboo: ["animal", "big", "Africa", "trunk"] },
  { word: "DOCTOR", taboo: ["hospital", "sick", "medicine", "nurse"] },
  { word: "MOBILE PHONE", taboo: ["call", "message", "internet", "screen"] },
  { word: "BIRTHDAY", taboo: ["cake", "present", "party", "age"] },
  { word: "AIRPLANE", taboo: ["fly", "airport", "sky", "travel"] },
  { word: "LIBRARY", taboo: ["book", "read", "school", "quiet"] },
  { word: "POLICE OFFICER", taboo: ["police", "crime", "uniform", "arrest"] },
  { word: "PIZZA", taboo: ["cheese", "Italian", "food", "tomato"] },
  { word: "RAIN", taboo: ["water", "weather", "umbrella", "wet"] },
  { word: "MOUNTAIN", taboo: ["high", "climb", "snow", "hill"] },
  { word: "CINEMA", taboo: ["movie", "film", "watch", "popcorn"] },
  { word: "SCHOOL BUS", taboo: ["school", "bus", "student", "drive"] },
  { word: "GUITAR", taboo: ["music", "instrument", "play", "strings"] },
  { word: "SUPERMARKET", taboo: ["food", "shop", "buy", "shopping"] },
  { word: "DOOR", taboo: ["open", "close", "room", "house"] },
  { word: "SLEEP", taboo: ["bed", "night", "tired", "dream"] },
  { word: "SUMMER", taboo: ["hot", "holiday", "sun", "beach"] },
  { word: "FOOTBALL", taboo: ["ball", "player", "goal", "sport"] },
  { word: "BREAKFAST", taboo: ["morning", "eat", "egg", "bread"] },
  { word: "ZOO", taboo: ["animals", "lion", "cage", "park"] },
  { word: "CAMERA", taboo: ["photo", "picture", "take", "phone"] },
  { word: "HOMEWORK", taboo: ["school", "teacher", "study", "exercise"] },
  { word: "COLD", taboo: ["winter", "snow", "weather", "ice"] },
  { word: "BASKETBALL", taboo: ["ball", "sport", "hoop", "player"] },
  { word: "RESTAURANT", taboo: ["food", "eat", "waiter", "menu"] },
  { word: "VACATION", taboo: ["holiday", "travel", "hotel", "summer"] },
  { word: "DOG", taboo: ["animal", "pet", "bark", "tail"] },
  { word: "CHOCOLATE", taboo: ["sweet", "candy", "brown", "eat"] },
  { word: "CAR", taboo: ["drive", "road", "vehicle", "wheel"] },
  { word: "TELEVISION", taboo: ["watch", "screen", "program", "remote"] },
  { word: "TELEPHONE", taboo: ["call", "speak", "number", "mobile"] },
  { word: "BEDROOM", taboo: ["sleep", "bed", "room", "house"] },
  { word: "SUN", taboo: ["hot", "sky", "yellow", "light"] },
  { word: "WINTER", taboo: ["cold", "snow", "season", "December"] },
  { word: "BICYCLE", taboo: ["ride", "wheel", "helmet", "bike"] },
  { word: "KITCHEN", taboo: ["cook", "food", "house", "room"] },
  { word: "PARK", taboo: ["trees", "children", "play", "outside"] },
  { word: "CAT", taboo: ["animal", "pet", "meow", "mouse"] },
  { word: "ICE CREAM", taboo: ["cold", "sweet", "summer", "dessert"] },
  { word: "BOOKSTORE", taboo: ["book", "buy", "read", "shop"] },
  { word: "BUS", taboo: ["travel", "driver", "passengers", "road"] },
  { word: "MUSIC", taboo: ["song", "listen", "singer", "sound"] },
  { word: "RAINBOW", taboo: ["colors", "sky", "rain", "seven"] },
  { word: "GHOST", taboo: ["scary", "dead", "spirit", "Halloween"] },
  { word: "CASTLE", taboo: ["king", "queen", "old", "building"] },
  { word: "PILOT", taboo: ["airplane", "fly", "airport", "person"] },
  { word: "FIRE", taboo: ["hot", "burn", "smoke", "red"] },
  { word: "CAMEL", taboo: ["desert", "animal", "hump", "sand"] },
  { word: "JACKET", taboo: ["clothes", "wear", "cold", "coat"] },
  { word: "SCHOOLBAG", taboo: ["school", "books", "carry", "student"] },
  { word: "MIRROR", taboo: ["look", "face", "see", "glass"] },
  { word: "TEETH", taboo: ["mouth", "dentist", "brush", "white"] },
  { word: "BREAK", taboo: ["rest", "school", "time", "lunch"] },
  { word: "MORNING", taboo: ["wake up", "breakfast", "early", "day"] },
  { word: "THUNDER", taboo: ["storm", "sound", "rain", "lightning"] },
  { word: "ISLAND", taboo: ["sea", "land", "ocean", "beach"] },
  { word: "BIRTHDAY CANDLE", taboo: ["cake", "fire", "present", "party"] },
  { word: "DINOSAUR", taboo: ["extinct", "animal", "T-Rex", "old"] },
  { word: "ASTRONAUT", taboo: ["space", "moon", "rocket", "NASA"] },
  { word: "ROBOT", taboo: ["machine", "computer", "metal", "future"] },
  { word: "PRINCESS", taboo: ["king", "queen", "castle", "girl"] },
  { word: "PIRATE", taboo: ["ship", "sea", "treasure", "sword"] },
  { word: "DETECTIVE", taboo: ["crime", "police", "mystery", "find"] },
  { word: "WIZARD", taboo: ["magic", "spell", "Harry Potter", "witch"] },
  { word: "MERMAID", taboo: ["sea", "fish", "girl", "tail"] },
  { word: "SUPERHERO", taboo: ["power", "hero", "cape", "save"] },
  { word: "TREASURE", taboo: ["gold", "money", "pirate", "find"] },
  { word: "VOLCANO", taboo: ["mountain", "lava", "hot", "eruption"] },
  { word: "DESERT", taboo: ["sand", "hot", "camel", "dry"] },
  { word: "FOREST", taboo: ["trees", "animals", "green", "woods"] },
  { word: "WATERFALL", taboo: ["water", "river", "fall", "mountain"] },
  { word: "BRIDGE", taboo: ["river", "road", "cross", "over"] },
  { word: "ELEVATOR", taboo: ["building", "up", "down", "stairs"] },
  { word: "BALLOON", taboo: ["air", "party", "fly", "birthday"] },
  { word: "UMBRELLA", taboo: ["rain", "wet", "weather", "hold"] },
  { word: "SUNGLASSES", taboo: ["eyes", "sun", "wear", "summer"] },
  { word: "TOOTHBRUSH", taboo: ["teeth", "bathroom", "brush", "toothpaste"] },
  { word: "PILLOW", taboo: ["bed", "sleep", "head", "soft"] },
  { word: "BLANKET", taboo: ["bed", "warm", "sleep", "cover"] },
  { word: "FRIDGE", taboo: ["kitchen", "cold", "food", "refrigerator"] },
  { word: "MICROWAVE", taboo: ["kitchen", "heat", "food", "oven"] },
  { word: "KEY", taboo: ["door", "lock", "open", "house"] },
  { word: "WALLET", taboo: ["money", "pocket", "cards", "carry"] },
  { word: "BACKPACK", taboo: ["bag", "school", "books", "carry"] },
  { word: "MAP", taboo: ["country", "place", "directions", "find"] },
  { word: "TICKET", taboo: ["bus", "cinema", "price", "travel"] }
];

// Sound System (Web Audio API)
class SoundFX {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
    osc.frequency.setValueAtTime(659.25, this.ctx.currentTime + 0.1); // E5
    osc.frequency.setValueAtTime(783.99, this.ctx.currentTime + 0.2); // G5
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  }

  playBuzz() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(130, this.ctx.currentTime);
    osc.frequency.setValueAtTime(90, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }

  playTick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
}

const sfx = new SoundFX();

// Game State
let gameState = {
  mode: "teams", // 'teams', '3teams', 'practice'
  roundTime: 60,
  maxPasses: 3,
  currentTeam: 0,
  teams: [
    { name: "Team 1", score: 0 },
    { name: "Team 2", score: 0 }
  ],
  passesLeft: 3,
  timeRemaining: 60,
  timerInterval: null,
  deck: [],
  currentCardIndex: 0
};

// DOM Elements
const setupScreen = document.getElementById("setupScreen");
const playScreen = document.getElementById("playScreen");
const resultScreen = document.getElementById("resultScreen");

const targetWordEl = document.getElementById("targetWord");
const forbiddenListEl = document.getElementById("forbiddenList");
const timerSecondsEl = document.getElementById("timerSeconds");
const timerDisplayEl = document.getElementById("timerDisplay");
const turnIndicatorEl = document.getElementById("turnIndicator");
const scoreboardBarEl = document.getElementById("scoreboardBar");
const passBtnTextEl = document.getElementById("passBtnText");
const btnPassEl = document.getElementById("btnPass");

document.addEventListener("DOMContentLoaded", () => {
  setupOptionPills();
  initEventListeners();
});

function setupOptionPills() {
  document.querySelectorAll(".option-pills").forEach(group => {
    group.querySelectorAll(".pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        group.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  });
}

function initEventListeners() {
  document.getElementById("btnSoundToggle").addEventListener("click", (e) => {
    sfx.muted = !sfx.muted;
    e.currentTarget.textContent = sfx.muted ? "🔇" : "🔊";
  });

  document.getElementById("btnStartGame").addEventListener("click", startGame);
  document.getElementById("btnCorrect").addEventListener("click", handleCorrect);
  document.getElementById("btnTabooBuzzer").addEventListener("click", handleTaboo);
  document.getElementById("btnPass").addEventListener("click", handlePass);
  document.getElementById("btnNextRound").addEventListener("click", nextRound);
  document.getElementById("btnEndGame").addEventListener("click", resetToSetup);
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startGame() {
  sfx.init();
  const selectedMode = document.querySelector("#modeOptions .pill-btn.active").dataset.mode;
  const selectedTime = parseInt(document.querySelector("#timerOptions .pill-btn.active").dataset.time, 10);
  const selectedPasses = document.querySelector("#passOptions .pill-btn.active").dataset.passes;

  gameState.mode = selectedMode;
  gameState.roundTime = selectedTime;
  gameState.maxPasses = selectedPasses === "unlimited" ? 999 : parseInt(selectedPasses, 10);
  gameState.passesLeft = gameState.maxPasses;
  gameState.currentTeam = 0;

  if (selectedMode === "3teams") {
    gameState.teams = [
      { name: "Team 1", score: 0 },
      { name: "Team 2", score: 0 },
      { name: "Team 3", score: 0 }
    ];
  } else if (selectedMode === "teams") {
    gameState.teams = [
      { name: "Team 1", score: 0 },
      { name: "Team 2", score: 0 }
    ];
  } else {
    gameState.teams = [{ name: "Player Score", score: 0 }];
  }

  gameState.deck = shuffleArray(TABOO_DECK);
  gameState.currentCardIndex = 0;

  startRound();
}

function startRound() {
  gameState.timeRemaining = gameState.roundTime;
  gameState.passesLeft = gameState.maxPasses;

  setupScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  playScreen.classList.remove("hidden");

  updateScoreboard();
  updatePassButton();
  displayNextCard();
  startTimer();
}

function updateScoreboard() {
  scoreboardBarEl.innerHTML = "";
  gameState.teams.forEach((t, idx) => {
    const chip = document.createElement("div");
    chip.className = `score-chip ${idx === gameState.currentTeam ? "active-team" : ""}`;
    chip.innerHTML = `<span class="team-name">${t.name}</span><span class="team-pts">${t.score}</span>`;
    scoreboardBarEl.appendChild(chip);
  });

  if (gameState.mode !== "practice") {
    turnIndicatorEl.textContent = `${gameState.teams[gameState.currentTeam].name}'s Turn`;
  } else {
    turnIndicatorEl.textContent = "Practice Round";
  }
}

function updatePassButton() {
  if (gameState.maxPasses > 50) {
    passBtnTextEl.textContent = "PASS";
    btnPassEl.disabled = false;
  } else {
    passBtnTextEl.textContent = `PASS (${gameState.passesLeft} left)`;
    btnPassEl.disabled = gameState.passesLeft <= 0;
  }
}

function displayNextCard() {
  if (gameState.currentCardIndex >= gameState.deck.length) {
    gameState.deck = shuffleArray(TABOO_DECK);
    gameState.currentCardIndex = 0;
  }

  const card = gameState.deck[gameState.currentCardIndex];
  targetWordEl.textContent = card.word;

  forbiddenListEl.innerHTML = "";
  card.taboo.forEach(w => {
    const li = document.createElement("li");
    li.textContent = w;
    forbiddenListEl.appendChild(li);
  });

  // Card pop animation
  const cardEl = document.getElementById("activeCard");
  cardEl.style.transform = "scale(0.96)";
  setTimeout(() => { cardEl.style.transform = "scale(1)"; }, 150);
}

function startTimer() {
  clearInterval(gameState.timerInterval);
  timerSecondsEl.textContent = gameState.timeRemaining;
  timerDisplayEl.classList.remove("timer-warning");

  gameState.timerInterval = setInterval(() => {
    gameState.timeRemaining--;
    timerSecondsEl.textContent = gameState.timeRemaining;

    if (gameState.timeRemaining <= 10) {
      timerDisplayEl.classList.add("timer-warning");
      sfx.playTick();
    }

    if (gameState.timeRemaining <= 0) {
      clearInterval(gameState.timerInterval);
      endRound();
    }
  }, 1000);
}

function handleCorrect() {
  sfx.playCorrect();
  gameState.teams[gameState.currentTeam].score += 1;
  updateScoreboard();
  gameState.currentCardIndex++;
  displayNextCard();
}

function handleTaboo() {
  sfx.playBuzz();
  gameState.teams[gameState.currentTeam].score = Math.max(0, gameState.teams[gameState.currentTeam].score - 1);
  updateScoreboard();
  gameState.currentCardIndex++;
  displayNextCard();
}

function handlePass() {
  if (gameState.passesLeft > 0 || gameState.maxPasses > 50) {
    if (gameState.maxPasses <= 50) gameState.passesLeft--;
    updatePassButton();
    gameState.currentCardIndex++;
    displayNextCard();
  }
}

function endRound() {
  sfx.playBuzz();
  playScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  renderResults();
}

function renderResults() {
  const podium = document.getElementById("resultsPodium");
  podium.innerHTML = "";

  const sorted = [...gameState.teams].sort((a, b) => b.score - a.score);

  sorted.forEach((team, idx) => {
    const card = document.createElement("div");
    card.className = `podium-card ${idx === 0 ? "winner" : ""}`;
    const medal = idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉";
    card.innerHTML = `
      <div class="podium-rank">${medal}</div>
      <h3 style="font-family: var(--font-heading); margin-bottom: 0.25rem;">${team.name}</h3>
      <div style="font-size: 1.5rem; font-weight: 700; color: #38bdf8;">${team.score} pts</div>
    `;
    podium.appendChild(card);
  });
}

function nextRound() {
  if (gameState.mode !== "practice") {
    gameState.currentTeam = (gameState.currentTeam + 1) % gameState.teams.length;
  }
  startRound();
}

function resetToSetup() {
  clearInterval(gameState.timerInterval);
  resultScreen.classList.add("hidden");
  playScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
}
