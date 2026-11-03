/**
 * GRAMMAR AUCTION — Interactive Classroom Game
 * Features:
 * - 300 CEFR A2-B1 Curriculum Questions (Grade 7, Grade 8, Mixed)
 * - 2 to 8 Team Accounts with Live Balances & Points
 * - Real Auction Mechanics: Bidding increments (+$10, +$25, +$50, +$100), Custom Bids, All-In
 * - Auctioneer Controls: GOING ONCE! -> GOING TWICE! -> SOLD! (Manual controls)
 * - Verbal Correction Evaluation for Incorrect sentences
 * - Strict Budget & Score Rules: Points = Winning Bid; Balance -= Winning Bid
 * - Smartboard Classroom UX with Fullscreen & High Contrast
 * - LocalStorage Persistence across page refreshes
 * - Web Audio API Procedural Sound Engine (Muted by default)
 */

// Procedural Sound Effects Engine
class AuctionSFX {
  constructor() {
    this.ctx = null;
    this.muted = true; // Muted by default per requirements
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  // Woody Gavel Strike Sound
  playGavel() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      // Low woody resonant thud
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(160, t);
      osc.frequency.exponentialRampToValueAtTime(32, t + 0.28);
      gain.gain.setValueAtTime(0.75, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.28);

      // High sharp snap
      const snap = this.ctx.createOscillator();
      const snapGain = this.ctx.createGain();
      snap.type = "triangle";
      snap.frequency.setValueAtTime(950, t);
      snap.frequency.exponentialRampToValueAtTime(220, t + 0.09);
      snapGain.gain.setValueAtTime(0.45, t);
      snapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);

      snap.connect(snapGain);
      snapGain.connect(this.ctx.destination);
      snap.start(t);
      snap.stop(t + 0.09);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Cash Register Coin Chime
  playCash() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      [1046.50, 1318.51, 1567.98, 2093.00].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, t + idx * 0.06);
        gain.gain.setValueAtTime(0.2, t + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.06 + 0.32);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t + idx * 0.06);
        osc.stop(t + idx * 0.06 + 0.32);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Stage Call Chime (Going Once / Going Twice)
  playCallChime(isTwice = false) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const baseFreq = isTwice ? 783.99 : 659.25;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(baseFreq, t);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, t + 0.2);
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.35);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Negative Buzzer
  playBuzzer() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, t);
      osc.frequency.setValueAtTime(110, t + 0.16);
      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.42);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.42);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Victory Fanfare
  playFanfare() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      const t = this.ctx.currentTime;
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.22, t + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.1 + 0.45);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t + i * 0.1);
        osc.stop(t + i * 0.1 + 0.45);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }
}

const sfx = new AuctionSFX();

// Standard 8 Classroom Team Color Palette
const TEAM_COLORS = [
  "#3b82f6", // Team 1 Blue
  "#10b981", // Team 2 Emerald
  "#f59e0b", // Team 3 Gold/Amber
  "#ec4899", // Team 4 Pink
  "#8b5cf6", // Team 5 Purple
  "#06b6d4", // Team 6 Cyan
  "#f97316", // Team 7 Orange
  "#14b8a6"  // Team 8 Teal
];

// Grade Topic Definitions for Topic Filter
const GRADE_7_TOPICS = [
  "Present Simple",
  "Present Continuous",
  "Present Simple vs Present Continuous",
  "Past Simple",
  "Past Continuous",
  "Past Perfect",
  "Mixed Past Tenses",
  "Used to / Would / Be used to",
  "Gerunds and Infinitives",
  "Modals and Mixed Grammar"
];

const GRADE_8_TOPICS = [
  "Present and Past Tenses",
  "Past Simple / Past Continuous",
  "Past Perfect and Mixed Tenses",
  "Comparatives",
  "Superlatives",
  "Adjectives vs Adverbs",
  "Modals",
  "Future Forms",
  "Conditionals",
  "Passive Voice and Mixed Grammar"
];

const LOCAL_STORAGE_KEY = "grammar_auction_saved_game_v2";

// Game State Object
let gameState = {
  grade: "7",              // '7' | '8' | 'mixed'
  numTeams: 2,
  teamNames: [],
  teams: [],               // [{ name, balance, points, correctCount, failCount, totalPurchased }]
  startingBudget: 1000,
  totalRounds: 10,
  currentRoundIdx: 0,
  selectedDifficulty: "mixed", // 'mixed' | 'easy' | 'medium' | 'hard'
  selectedTopic: "all",
  lots: [],                // Array of questions for current game
  
  // Active Round State
  currentBid: 0,
  highestBidderIdx: null,
  selectedTeamIdx: 0,
  callStage: "open",       // 'open' | 'once' | 'twice' | 'sold'
  biddingHistory: [],      // [{ teamName, bidAmount }]
  roundResult: null        // temporary evaluation result
};

// DOM Elements Cache
let dom = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  initSetupPills();
  renderTeamNamesEditor(gameState.numTeams);
  renderTopicFilterPills("7");
  initEvents();
  checkSavedGame();
});

function cacheDom() {
  dom.setupScreen = document.getElementById("setupScreen");
  dom.auctionScreen = document.getElementById("auctionScreen");
  dom.evaluationScreen = document.getElementById("evaluationScreen");
  dom.revealScreen = document.getElementById("revealScreen");
  dom.podiumScreen = document.getElementById("podiumScreen");

  dom.teamNamesEditor = document.getElementById("teamNamesEditor");
  dom.customBudgetWrap = document.getElementById("customBudgetWrap");
  dom.customBudgetInput = document.getElementById("customBudgetInput");
  dom.topicFilterPills = document.getElementById("topicFilterPills");
  dom.btnResumeGame = document.getElementById("btnResumeGame");

  // Auction Screen
  dom.bankBar = document.getElementById("bankBar");
  dom.lotBadge = document.getElementById("lotBadge");
  dom.lotTopic = document.getElementById("lotTopic");
  dom.lotDifficultyBadge = document.getElementById("lotDifficultyBadge");
  dom.callStageBadge = document.getElementById("callStageBadge");
  dom.sentenceText = document.getElementById("sentenceText");
  dom.currentBidAmount = document.getElementById("currentBidAmount");
  dom.currentBidLeader = document.getElementById("currentBidLeader");
  dom.minBidChip = document.getElementById("minBidChip");
  dom.biddingTeamPills = document.getElementById("biddingTeamPills");
  dom.customBidInput = document.getElementById("customBidInput");
  dom.biddingHistoryList = document.getElementById("biddingHistoryList");
  dom.btnGoingOnce = document.getElementById("btnGoingOnce");
  dom.btnGoingTwice = document.getElementById("btnGoingTwice");
  dom.btnHammerSold = document.getElementById("btnHammerSold");

  // Evaluation Screen
  dom.evalTitle = document.getElementById("evalTitle");
  dom.evalSubtitle = document.getElementById("evalSubtitle");
  dom.evalWinnerName = document.getElementById("evalWinnerName");
  dom.evalWinnerBid = document.getElementById("evalWinnerBid");
  dom.evalSentenceText = document.getElementById("evalSentenceText");
  dom.verbalCorrectionSubpanel = document.getElementById("verbalCorrectionSubpanel");

  // Reveal Screen
  dom.verdictCard = document.getElementById("verdictCard");
  dom.stampBadge = document.getElementById("stampBadge");
  dom.verdictOrigSentence = document.getElementById("verdictOrigSentence");
  dom.correctionBox = document.getElementById("correctionBox");
  dom.verdictCorrectedSentence = document.getElementById("verdictCorrectedSentence");
  dom.verdictExplanationText = document.getElementById("verdictExplanationText");
  dom.payoutIcon = document.getElementById("payoutIcon");
  dom.payoutHeadline = document.getElementById("payoutHeadline");
  dom.payoutText = document.getElementById("payoutText");
  dom.payoutBalanceChip = document.getElementById("payoutBalanceChip");
  dom.btnNextLot = document.getElementById("btnNextLot");

  // Podium Screen
  dom.finalPodium = document.getElementById("finalPodium");
  dom.scoreboardTableBody = document.getElementById("scoreboardTableBody");

  // Confirmation Modal & Toasts
  dom.confirmModal = document.getElementById("confirmModal");
  dom.toastContainer = document.getElementById("toastContainer");
}

function initSetupPills() {
  // Pill button group listeners
  const setupGroups = [
    { container: "#gradeOptions", key: "grade", onSelect: (val) => { gameState.grade = val; renderTopicFilterPills(val); } },
    { container: "#teamCountOptions", key: "teams", onSelect: (val) => { gameState.numTeams = parseInt(val, 10); renderTeamNamesEditor(gameState.numTeams); } },
    { container: "#budgetOptions", key: "budget", onSelect: (val) => {
      if (val === "custom") {
        dom.customBudgetWrap.classList.remove("hidden");
        dom.customBudgetInput.focus();
      } else {
        dom.customBudgetWrap.classList.add("hidden");
        gameState.startingBudget = parseInt(val, 10);
      }
    }},
    { container: "#roundOptions", key: "rounds", onSelect: (val) => { gameState.totalRounds = parseInt(val, 10); } },
    { container: "#difficultyOptions", key: "difficulty", onSelect: (val) => { gameState.selectedDifficulty = val; } }
  ];

  setupGroups.forEach(grp => {
    const el = document.querySelector(grp.container);
    if (!el) return;
    el.querySelectorAll(".pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        el.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const val = btn.dataset[grp.key];
        grp.onSelect(val);
      });
    });
  });
}

function renderTeamNamesEditor(count) {
  if (!dom.teamNamesEditor) return;
  dom.teamNamesEditor.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const defaultName = gameState.teamNames[i] || `Team ${i + 1}`;
    const color = TEAM_COLORS[i % TEAM_COLORS.length];

    const card = document.createElement("div");
    card.className = "team-name-card";
    card.innerHTML = `
      <span class="team-color-dot" style="background-color: ${color};"></span>
      <input type="text" class="team-name-input" data-team-idx="${i}" maxlength="24" value="${defaultName}" placeholder="Team ${i + 1} Name">
    `;

    const input = card.querySelector("input");
    input.addEventListener("input", (e) => {
      const idx = parseInt(e.target.dataset.teamIdx, 10);
      gameState.teamNames[idx] = e.target.value.trim() || `Team ${idx + 1}`;
    });

    dom.teamNamesEditor.appendChild(card);
  }
}

function renderTopicFilterPills(grade) {
  if (!dom.topicFilterPills) return;
  dom.topicFilterPills.innerHTML = "";

  let topics = [];
  if (grade === "7") {
    topics = GRADE_7_TOPICS;
  } else if (grade === "8") {
    topics = GRADE_8_TOPICS;
  } else {
    // Mixed Grade: combine unique topics
    topics = Array.from(new Set([...GRADE_7_TOPICS, ...GRADE_8_TOPICS]));
  }

  // "All Topics / Mixed Grammar" button
  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = "topic-pill active";
  allBtn.textContent = "Mixed Grammar (All Topics)";
  allBtn.dataset.topic = "all";
  allBtn.addEventListener("click", () => {
    dom.topicFilterPills.querySelectorAll(".topic-pill").forEach(p => p.classList.remove("active"));
    allBtn.classList.add("active");
    gameState.selectedTopic = "all";
  });
  dom.topicFilterPills.appendChild(allBtn);
  gameState.selectedTopic = "all";

  topics.forEach(t => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "topic-pill";
    btn.textContent = t;
    btn.dataset.topic = t;
    btn.addEventListener("click", () => {
      dom.topicFilterPills.querySelectorAll(".topic-pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      gameState.selectedTopic = t;
    });
    dom.topicFilterPills.appendChild(btn);
  });
}

function initEvents() {
  // Sound Toggle
  const soundBtn = document.getElementById("btnSoundToggle");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      sfx.muted = !sfx.muted;
      soundBtn.textContent = sfx.muted ? "🔇" : "🔊";
      showToast(sfx.muted ? "Audio Muted" : "Audio Enabled 🔊", "info");
    });
  }

  // Fullscreen Toggle
  const fsBtn = document.getElementById("btnFullscreenToggle");
  if (fsBtn) {
    fsBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  // New Game confirmation
  document.getElementById("btnNewGameConfirm").addEventListener("click", () => {
    dom.confirmModal.classList.remove("hidden");
  });
  document.getElementById("btnCancelModal").addEventListener("click", () => {
    dom.confirmModal.classList.add("hidden");
  });
  document.getElementById("btnConfirmNewGame").addEventListener("click", () => {
    dom.confirmModal.classList.add("hidden");
    clearSavedGame();
    returnToSetup();
  });

  // Setup Actions
  document.getElementById("btnStartAuction").addEventListener("click", startNewAuction);
  dom.btnResumeGame.addEventListener("click", resumeSavedGame);

  // Bidding Actions
  document.querySelectorAll(".btn-bid[data-inc]").forEach(btn => {
    btn.addEventListener("click", () => {
      const inc = parseInt(btn.dataset.inc, 10);
      handleBidIncrement(inc);
    });
  });

  document.getElementById("btnAllIn").addEventListener("click", handleAllInBid);
  document.getElementById("btnPlaceCustomBid").addEventListener("click", handleCustomBid);
  dom.customBidInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleCustomBid();
  });
  document.getElementById("btnResetLotBid").addEventListener("click", resetCurrentRoundBids);

  // Auctioneer Gavel & Call Controls
  dom.btnGoingOnce.addEventListener("click", () => setAuctioneerCallStage("once"));
  dom.btnGoingTwice.addEventListener("click", () => setAuctioneerCallStage("twice"));
  dom.btnHammerSold.addEventListener("click", executeGavelSlam);
  document.getElementById("btnPassLot").addEventListener("click", passAuctionLot);

  // Evaluation Actions
  document.getElementById("btnEvalCorrect").addEventListener("click", () => handleTeamEvaluation(true));
  document.getElementById("btnEvalIncorrect").addEventListener("click", () => handleTeamEvaluation(false));
  document.getElementById("btnCorrectionSuccess").addEventListener("click", () => finalizeVerbalCorrection(true));
  document.getElementById("btnCorrectionFail").addEventListener("click", () => finalizeVerbalCorrection(false));

  // Next Lot & Restart Actions
  dom.btnNextLot.addEventListener("click", advanceToNextLot);
  document.getElementById("btnPlayAgain").addEventListener("click", restartSameSettings);
  document.getElementById("btnReconfigure").addEventListener("click", returnToSetup);
}

// ==============================================================
// GAME SETUP & QUESTION FILTERING
// ==============================================================

function startNewAuction() {
  sfx.init();

  // Validate custom budget if selected
  const activeBudgetBtn = document.querySelector("#budgetOptions .pill-btn.active");
  if (activeBudgetBtn && activeBudgetBtn.dataset.budget === "custom") {
    const customVal = parseInt(dom.customBudgetInput.value, 10);
    if (!customVal || customVal < 50) {
      showToast("Please enter a valid starting budget of at least $50", "error");
      dom.customBudgetInput.focus();
      return;
    }
    gameState.startingBudget = customVal;
  }

  // Populate Team Objects
  gameState.teams = [];
  const nameInputs = dom.teamNamesEditor.querySelectorAll(".team-name-input");
  for (let i = 0; i < gameState.numTeams; i++) {
    const customName = nameInputs[i] ? nameInputs[i].value.trim() : null;
    gameState.teams.push({
      name: customName || `Team ${i + 1}`,
      balance: gameState.startingBudget,
      points: 0,
      correctCount: 0,
      failCount: 0,
      totalPurchased: 0,
      color: TEAM_COLORS[i % TEAM_COLORS.length]
    });
  }

  // Load and Filter Question Pool
  const filteredPool = loadFilteredQuestions();
  if (filteredPool.length === 0) {
    showToast("No questions found matching your filter criteria. Defaulting to full bank.", "error");
    gameState.selectedTopic = "all";
    gameState.selectedDifficulty = "mixed";
    return startNewAuction();
  }

  // Shuffle and slice to selected round count
  const shuffled = shuffleArray([...filteredPool]);
  const lotCount = Math.min(gameState.totalRounds, shuffled.length);
  gameState.lots = shuffled.slice(0, lotCount);
  gameState.totalRounds = lotCount;
  gameState.currentRoundIdx = 0;

  saveGameState();
  showAuctionScreen();
}

function loadFilteredQuestions() {
  let pool = [];
  const data = (typeof window !== "undefined" && window.GRAMMAR_AUCTION_DATA)
    ? window.GRAMMAR_AUCTION_DATA
    : null;

  if (data) {
    if (gameState.grade === "7") {
      pool = [...data.grade7];
    } else if (gameState.grade === "8") {
      pool = [...data.grade8];
    } else {
      pool = [...data.all];
    }
  } else if (typeof window !== "undefined" && window.Grade7Unit1LifeOnline && window.Grade7Unit1LifeOnline.grammarAuctionSentences) {
    // Fallback if data file was loaded
    pool = [...window.Grade7Unit1LifeOnline.grammarAuctionSentences];
  }

  // Filter by Topic if not "all"
  if (gameState.selectedTopic && gameState.selectedTopic !== "all") {
    const topicFiltered = pool.filter(q => q.topic === gameState.selectedTopic);
    if (topicFiltered.length > 0) pool = topicFiltered;
  }

  // Filter by Difficulty if not "mixed"
  if (gameState.selectedDifficulty && gameState.selectedDifficulty !== "mixed") {
    const diffFiltered = pool.filter(q => q.difficulty === gameState.selectedDifficulty);
    if (diffFiltered.length >= 5) pool = diffFiltered;
  }

  return pool;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ==============================================================
// AUCTION GAMEPLAY & BIDDING
// ==============================================================

function showAuctionScreen() {
  gameState.currentBid = 0;
  gameState.highestBidderIdx = null;
  gameState.callStage = "open";
  gameState.biddingHistory = [];

  hideAllScreens();
  dom.auctionScreen.classList.remove("hidden");

  renderBankBar();
  renderBiddingTeamPills();
  updateAuctionStatus();
  updateBidDisplay();
  updateCallStageBadge();
  renderBiddingHistory();

  const curLot = gameState.lots[gameState.currentRoundIdx];
  if (curLot) {
    dom.sentenceText.textContent = curLot.sentence;
    dom.lotTopic.textContent = `Grade ${curLot.grade} • ${curLot.topic}`;
    dom.lotDifficultyBadge.textContent = curLot.difficulty ? curLot.difficulty.toUpperCase() : "STANDARD";
  }
}

function renderBankBar() {
  if (!dom.bankBar) return;
  dom.bankBar.innerHTML = "";

  gameState.teams.forEach((team, idx) => {
    const chip = document.createElement("div");
    const isLeader = (idx === gameState.highestBidderIdx);
    chip.className = `bank-chip ${isLeader ? "active-leader" : ""}`;
    chip.style.borderLeftColor = team.color;
    chip.style.borderLeftWidth = "4px";

    chip.innerHTML = `
      <span class="team-chip-name">${team.name}</span>
      <span class="team-chip-balance">$${team.balance.toLocaleString()}</span>
      <span class="team-chip-score">${team.points} pts</span>
    `;
    dom.bankBar.appendChild(chip);
  });
}

function renderBiddingTeamPills() {
  if (!dom.biddingTeamPills) return;
  dom.biddingTeamPills.innerHTML = "";

  gameState.teams.forEach((team, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    const isSelected = (idx === gameState.selectedTeamIdx);
    const hasNoFunds = (team.balance <= gameState.currentBid);

    btn.className = `team-bid-btn ${isSelected ? "active-bidder" : ""} ${hasNoFunds ? "disabled-bidder" : ""}`;
    btn.innerHTML = `
      <span class="team-color-dot" style="background-color: ${team.color};"></span>
      <span>${team.name} ($${team.balance.toLocaleString()})</span>
    `;

    btn.addEventListener("click", () => {
      gameState.selectedTeamIdx = idx;
      renderBiddingTeamPills();
    });

    dom.biddingTeamPills.appendChild(btn);
  });
}

function handleBidIncrement(increment) {
  const team = gameState.teams[gameState.selectedTeamIdx];
  const newBid = gameState.currentBid + increment;

  // Validation 1: Self-bidding rule
  if (gameState.highestBidderIdx === gameState.selectedTeamIdx && gameState.currentBid > 0) {
    // Team already leading
    showToast(`${team.name} is already the highest bidder ($${gameState.currentBid})! Select another team or increase bid.`, "info");
  }

  // Validation 2: Sufficient Funds
  if (newBid > team.balance) {
    sfx.playBuzzer();
    showToast(`${team.name} does not have enough balance ($${team.balance}) for a $${newBid} bid!`, "error");
    return;
  }

  // Validation 3: Strictly Increasing
  if (newBid <= gameState.currentBid) {
    sfx.playBuzzer();
    showToast(`Bid must be strictly higher than current highest bid ($${gameState.currentBid})!`, "error");
    return;
  }

  placeValidBid(gameState.selectedTeamIdx, newBid);
}

function handleAllInBid() {
  const team = gameState.teams[gameState.selectedTeamIdx];
  if (team.balance <= gameState.currentBid) {
    sfx.playBuzzer();
    showToast(`${team.name}'s balance ($${team.balance}) is not higher than current bid ($${gameState.currentBid})!`, "error");
    return;
  }

  placeValidBid(gameState.selectedTeamIdx, team.balance);
}

function handleCustomBid() {
  const team = gameState.teams[gameState.selectedTeamIdx];
  const customVal = parseInt(dom.customBidInput.value, 10);
  dom.customBidInput.value = "";

  if (!customVal || isNaN(customVal)) {
    showToast("Please enter a valid numeric bid amount.", "error");
    return;
  }

  if (customVal <= gameState.currentBid) {
    sfx.playBuzzer();
    showToast(`Bid of $${customVal} must be strictly higher than current highest bid ($${gameState.currentBid})!`, "error");
    return;
  }

  if (customVal > team.balance) {
    sfx.playBuzzer();
    showToast(`${team.name} does not have sufficient funds ($${team.balance}) for a $${customVal} bid!`, "error");
    return;
  }

  placeValidBid(gameState.selectedTeamIdx, customVal);
}

function placeValidBid(teamIdx, amount) {
  gameState.currentBid = amount;
  gameState.highestBidderIdx = teamIdx;
  
  // If auctioneer call was in 'once' or 'twice', reset to open bidding
  if (gameState.callStage === "once" || gameState.callStage === "twice") {
    gameState.callStage = "open";
    updateCallStageBadge();
  }

  const team = gameState.teams[teamIdx];
  gameState.biddingHistory.unshift({
    teamName: team.name,
    bidAmount: amount
  });

  sfx.playCash();
  updateBidDisplay();
  renderBankBar();
  renderBiddingTeamPills();
  renderBiddingHistory();
  saveGameState();
}

function resetCurrentRoundBids() {
  gameState.currentBid = 0;
  gameState.highestBidderIdx = null;
  gameState.callStage = "open";
  gameState.biddingHistory = [];

  updateBidDisplay();
  renderBankBar();
  renderBiddingTeamPills();
  updateCallStageBadge();
  renderBiddingHistory();
  showToast("Current round bids reset to $0.", "info");
}

function updateBidDisplay() {
  dom.currentBidAmount.textContent = `$${gameState.currentBid.toLocaleString()}`;
  if (gameState.highestBidderIdx !== null) {
    const leader = gameState.teams[gameState.highestBidderIdx];
    dom.currentBidLeader.innerHTML = `Highest Bidder: <strong style="color: ${leader.color}; font-size: 1.1rem;">${leader.name}</strong> with $${gameState.currentBid.toLocaleString()}`;
  } else {
    dom.currentBidLeader.textContent = "No bids placed yet — Ready for team offers!";
  }

  const minNext = gameState.currentBid === 0 ? 10 : gameState.currentBid + 10;
  dom.minBidChip.innerHTML = `Minimum Next Bid: <strong>$${minNext.toLocaleString()}</strong>`;
}

function updateAuctionStatus() {
  dom.lotBadge.textContent = `ROUND ${gameState.currentRoundIdx + 1} / ${gameState.totalRounds}`;
}

function renderBiddingHistory() {
  if (!dom.biddingHistoryList) return;
  dom.biddingHistoryList.innerHTML = "";

  if (gameState.biddingHistory.length === 0) {
    dom.biddingHistoryList.innerHTML = `<span class="empty-history">Auction open. Awaiting opening bid...</span>`;
    return;
  }

  gameState.biddingHistory.slice(0, 10).forEach(item => {
    const chip = document.createElement("span");
    chip.className = "history-chip";
    chip.innerHTML = `${item.teamName}: <strong>$${item.bidAmount.toLocaleString()}</strong>`;
    dom.biddingHistoryList.appendChild(chip);
  });
}

function setAuctioneerCallStage(stage) {
  if (gameState.currentBid === 0) {
    showToast("A bid must be placed before calling Going Once or Going Twice!", "error");
    return;
  }

  gameState.callStage = stage;
  updateCallStageBadge();
  sfx.playCallChime(stage === "twice");
}

function updateCallStageBadge() {
  if (!dom.callStageBadge) return;
  dom.callStageBadge.className = `call-stage-pill stage-${gameState.callStage}`;
  
  if (gameState.callStage === "open") {
    dom.callStageBadge.textContent = "🟢 BIDDING OPEN";
    dom.btnGoingOnce.classList.remove("active");
    dom.btnGoingTwice.classList.remove("active");
  } else if (gameState.callStage === "once") {
    dom.callStageBadge.textContent = "🟡 GOING ONCE!";
    dom.btnGoingOnce.classList.add("active");
    dom.btnGoingTwice.classList.remove("active");
  } else if (gameState.callStage === "twice") {
    dom.callStageBadge.textContent = "🟠 GOING TWICE!";
    dom.btnGoingOnce.classList.remove("active");
    dom.btnGoingTwice.classList.add("active");
  } else if (gameState.callStage === "sold") {
    dom.callStageBadge.textContent = "🔴 SOLD!";
  }
}

// ==============================================================
// GAVEL SLAM & SOLD EXECUTION
// ==============================================================

function executeGavelSlam() {
  // Requirement 7: SOLD cannot be triggered without a valid bid
  if (gameState.highestBidderIdx === null || gameState.currentBid <= 0) {
    sfx.playBuzzer();
    showToast("No team has placed a valid bid yet! Place a bid or select 'Pass Lot'.", "error");
    return;
  }

  // Trigger gavel animation & woody strike SFX
  gameState.callStage = "sold";
  updateCallStageBadge();

  dom.btnHammerSold.classList.remove("gavel-hit");
  void dom.btnHammerSold.offsetWidth;
  dom.btnHammerSold.classList.add("gavel-hit");

  sfx.playGavel();

  setTimeout(() => {
    showEvaluationScreen();
  }, 600);
}

function passAuctionLot() {
  // Pass lot without penalty or scoring
  gameState.roundResult = {
    isPassed: true,
    winnerIdx: null,
    bidAmount: 0,
    isCorrectEvaluation: false
  };

  showVerdictReveal();
}

// ==============================================================
// EVALUATION & VERBAL CORRECTION (SCREEN 3)
// ==============================================================

function showEvaluationScreen() {
  hideAllScreens();
  dom.evaluationScreen.classList.remove("hidden");

  const winner = gameState.teams[gameState.highestBidderIdx];
  const curLot = gameState.lots[gameState.currentRoundIdx];

  dom.evalTitle.textContent = `Sentence Sold to ${winner.name}!`;
  dom.evalWinnerName.textContent = winner.name;
  dom.evalWinnerName.style.color = winner.color;
  dom.evalWinnerBid.textContent = `$${gameState.currentBid.toLocaleString()}`;
  dom.evalSentenceText.textContent = curLot.sentence;

  // Reset Verbal Subpanel
  dom.verbalCorrectionSubpanel.classList.add("hidden");
  document.getElementById("evalDecisionBlock").classList.remove("hidden");
}

function handleTeamEvaluation(teamClaimedCorrect) {
  const curLot = gameState.lots[gameState.currentRoundIdx];

  if (teamClaimedCorrect) {
    // Team claimed the sentence is CORRECT
    if (curLot.isCorrect) {
      // SUCCESSFUL: The sentence was indeed correct!
      processAuctionResult(true);
    } else {
      // UNSUCCESSFUL: The sentence was flawed, but the team bought it as correct!
      processAuctionResult(false);
    }
  } else {
    // Team claimed the sentence is INCORRECT.
    // They must verbally explain/correct it!
    document.getElementById("evalDecisionBlock").classList.add("hidden");
    dom.verbalCorrectionSubpanel.classList.remove("hidden");
  }
}

function finalizeVerbalCorrection(teacherAccepted) {
  const curLot = gameState.lots[gameState.currentRoundIdx];

  if (!curLot.isCorrect) {
    // Original sentence was flawed
    if (teacherAccepted) {
      // SUCCESSFUL: Team correctly identified it as incorrect AND successfully gave the correction!
      processAuctionResult(true);
    } else {
      // UNSUCCESSFUL: Team called it incorrect but failed to provide an accurate correction!
      processAuctionResult(false);
    }
  } else {
    // Original sentence was actually CORRECT!
    // The team falsely called a correct sentence incorrect, so purchase failed!
    processAuctionResult(false);
  }
}

function processAuctionResult(isSuccess) {
  const winner = gameState.teams[gameState.highestBidderIdx];
  const winningBid = gameState.currentBid;

  gameState.roundResult = {
    isPassed: false,
    winnerIdx: gameState.highestBidderIdx,
    bidAmount: winningBid,
    isSuccess: isSuccess
  };

  // Section 4 Rules:
  // Successful Purchase:
  // - Team earns value of winning bid as points: winner.points += winningBid
  // - Team pays winning bid from balance: winner.balance -= winningBid
  // Unsuccessful Purchase:
  // - Team loses winning bid from balance: winner.balance -= winningBid
  // - Team receives no points: winner.points += 0
  winner.balance = Math.max(0, winner.balance - winningBid);
  winner.totalPurchased++;

  if (isSuccess) {
    winner.points += winningBid;
    winner.correctCount++;
  } else {
    winner.failCount++;
  }

  saveGameState();
  showVerdictReveal();
}

// ==============================================================
// VERDICT REVEAL & EXPLANATION (SCREEN 4)
// ==============================================================

function showVerdictReveal() {
  hideAllScreens();
  dom.revealScreen.classList.remove("hidden");

  const curLot = gameState.lots[gameState.currentRoundIdx];
  const res = gameState.roundResult;

  dom.verdictOrigSentence.textContent = curLot.sentence;
  dom.verdictExplanationText.textContent = curLot.explanation || "Grammar standard applied.";

  // Stamp Badge & Corrected Box
  if (curLot.isCorrect) {
    dom.stampBadge.className = "stamp-badge stamp-correct";
    dom.stampBadge.textContent = "CORRECT SENTENCE! ✅";
    dom.correctionBox.classList.add("hidden");
  } else {
    dom.stampBadge.className = "stamp-badge stamp-incorrect";
    dom.stampBadge.textContent = "INCORRECT SENTENCE! ❌";
    dom.correctionBox.classList.remove("hidden");
    dom.verdictCorrectedSentence.textContent = curLot.corrected || "See explanation below.";
  }

  // Payout Summary Card
  if (res.isPassed) {
    dom.payoutIcon.textContent = "⏩";
    dom.payoutHeadline.textContent = "Auction Lot Passed (No Bids)";
    dom.payoutText.textContent = "No teams placed a bid on this sentence. No balances or scores were affected.";
    dom.payoutBalanceChip.textContent = `Round Passed • Sentence was ${curLot.isCorrect ? "Correct" : "Incorrect"}`;
    sfx.playCash();
  } else {
    const winner = gameState.teams[res.winnerIdx];
    if (res.isSuccess) {
      dom.payoutIcon.textContent = "💰";
      dom.payoutHeadline.textContent = `Successful Purchase! (+${res.bidAmount} Points)`;
      dom.payoutText.textContent = `${winner.name} successfully evaluated the grammar lot, winning +${res.bidAmount} points!`;
      dom.payoutBalanceChip.textContent = `${winner.name}'s New Balance: $${winner.balance.toLocaleString()} | Score: ${winner.points} pts`;
      sfx.playFanfare();
    } else {
      dom.payoutIcon.textContent = "📉";
      dom.payoutHeadline.textContent = `Unsuccessful Purchase (0 Points)`;
      dom.payoutText.textContent = `${winner.name} did not successfully evaluate or correct this sentence. The winning bid of $${res.bidAmount} is deducted with 0 points awarded.`;
      dom.payoutBalanceChip.textContent = `${winner.name}'s Remaining Budget: $${winner.balance.toLocaleString()} | Score: ${winner.points} pts`;
      sfx.playBuzzer();
    }
  }

  // Next lot button label
  if (gameState.currentRoundIdx + 1 >= gameState.totalRounds) {
    dom.btnNextLot.textContent = "VIEW FINAL CHAMPIONS PODIUM 🏆";
  } else {
    dom.btnNextLot.textContent = `NEXT AUCTION LOT (${gameState.currentRoundIdx + 2} / ${gameState.totalRounds}) ➔`;
  }
}

function advanceToNextLot() {
  gameState.currentRoundIdx++;
  if (gameState.currentRoundIdx >= gameState.totalRounds) {
    showFinalPodium();
  } else {
    showAuctionScreen();
  }
}

// ==============================================================
// FINAL PODIUM & COMPREHENSIVE SCOREBOARD (SCREEN 5)
// ==============================================================

function showFinalPodium() {
  hideAllScreens();
  dom.podiumScreen.classList.remove("hidden");

  clearSavedGame();
  sfx.playFanfare();
  triggerConfetti();

  // Sort Teams:
  // Primary: points descending
  // Secondary: remaining budget descending (tie-breaker per Section 4)
  const ranked = [...gameState.teams].sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    return b.balance - a.balance;
  });

  // Render Top 3 Podium Cards
  dom.finalPodium.innerHTML = "";
  const podiumRanks = ["🥇 1st Place Champion", "🥈 2nd Place", "🥉 3rd Place"];

  ranked.slice(0, Math.min(3, ranked.length)).forEach((team, idx) => {
    const card = document.createElement("div");
    card.className = `podium-card ${idx === 0 ? "winner" : ""}`;
    card.style.borderTopColor = team.color;
    card.style.borderTopWidth = "5px";

    card.innerHTML = `
      <div class="podium-rank">${podiumRanks[idx] || `${idx + 1}th Place`}</div>
      <div class="podium-team-name">${team.name}</div>
      <div class="podium-points">${team.points} pts</div>
      <div class="podium-budget">Remaining: $${team.balance.toLocaleString()}</div>
      <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.35rem;">
        Purchased: ${team.correctCount} correct / ${team.failCount} failed
      </div>
    `;
    dom.finalPodium.appendChild(card);
  });

  // Render Full Scoreboard Table
  dom.scoreboardTableBody.innerHTML = "";
  const rankIcons = ["🥇 1st", "🥈 2nd", "🥉 3rd"];

  ranked.forEach((team, idx) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="rank-cell">${rankIcons[idx] || `${idx + 1}th`}</td>
      <td><strong style="color: ${team.color};">${team.name}</strong></td>
      <td class="score-cell">${team.points} pts</td>
      <td>$${team.balance.toLocaleString()}</td>
      <td><span style="color: #10b981; font-weight: 700;">${team.correctCount}</span></td>
      <td><span style="color: #ef4444; font-weight: 700;">${team.failCount}</span></td>
      <td>${team.totalPurchased}</td>
    `;
    dom.scoreboardTableBody.appendChild(row);
  });
}

function restartSameSettings() {
  startNewAuction();
}

function returnToSetup() {
  hideAllScreens();
  dom.setupScreen.classList.remove("hidden");
  checkSavedGame();
}

function hideAllScreens() {
  [dom.setupScreen, dom.auctionScreen, dom.evaluationScreen, dom.revealScreen, dom.podiumScreen].forEach(el => {
    if (el) el.classList.add("hidden");
  });
}

// ==============================================================
// LOCAL STORAGE PERSISTENCE & TOASTS
// ==============================================================

function saveGameState() {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameState));
  } catch (e) {
    console.warn("Could not save game to localStorage:", e);
  }
}

function checkSavedGame() {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved && dom.btnResumeGame) {
      dom.btnResumeGame.classList.remove("hidden");
    } else if (dom.btnResumeGame) {
      dom.btnResumeGame.classList.add("hidden");
    }
  } catch (e) {
    console.warn("Could not check saved game:", e);
  }
}

function resumeSavedGame() {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!saved) return;
    gameState = JSON.parse(saved);
    showToast("Active game restored!", "success");
    showAuctionScreen();
  } catch (e) {
    console.error("Failed to restore game:", e);
    clearSavedGame();
  }
}

function clearSavedGame() {
  try {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  } catch (e) {}
  if (dom.btnResumeGame) dom.btnResumeGame.classList.add("hidden");
}

function showToast(message, type = "info") {
  if (!dom.toastContainer) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  dom.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==============================================================
// INTERACTIVE CONFETTI SYSTEM
// ==============================================================

function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#f59e0b", "#10b981", "#3b82f6", "#ec4899", "#8b5cf6", "#fbbf24", "#f43f5e"];

  for (let i = 0; i < 110; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.35,
      w: Math.random() * 12 + 6,
      h: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 4 + 2,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 8
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vRot;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    frame++;
    if (frame < 140) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}
