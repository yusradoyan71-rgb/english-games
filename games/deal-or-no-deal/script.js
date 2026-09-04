/**
 * DEAL OR NO DEAL – SPEAKING SHOWDOWN
 * Complete TV Game Show State Machine, Banker Engine & Multi-Team Coordinator
 */

// =========================================================================
// 1. CONSTANTS & PRIZE BOARD DEFINITIONS (MILLIONAIRE TL VALUES)
// =========================================================================
const ALL_PRIZES = [
  1000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 750000, 1000000,
  1500000, 2000000, 3000000, 5000000, 10000000, 25000000, 50000000, 75000000, 100000000, 250000000
];

const LOW_PRIZES = [
  1000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 750000, 1000000
];

const HIGH_PRIZES = [
  1500000, 2000000, 3000000, 5000000, 10000000, 25000000, 50000000, 75000000, 100000000, 250000000
];

const TEAM_COLORS = [
  { name: "Blue", bg: "linear-gradient(135deg, #3b82f6, #1d4ed8)", hex: "#3b82f6" },
  { name: "Red", bg: "linear-gradient(135deg, #ef4444, #b91c1c)", hex: "#ef4444" },
  { name: "Green", bg: "linear-gradient(135deg, #10b981, #047857)", hex: "#10b981" },
  { name: "Purple", bg: "linear-gradient(135deg, #8b5cf6, #6d28d9)", hex: "#8b5cf6" }
];

// Helper to format values as Turkish Lira
function formatTL(val) {
  if (val === null || val === undefined) return "0 TL";
  return val.toLocaleString("tr-TR") + " TL";
}

// =========================================================================
// 2. GAME STATE
// =========================================================================
const state = {
  grade: "grade7", // "grade7" | "grade8" | "mixed"
  teamCount: 3,
  teams: [], // Array of teamState objects: { id, name, color, colorBg, secretBoxNum, secretValue, hasDeal, dealAmount, finalScore, secretBoxRevealed }
  currentPickingTeamIdx: 0,
  
  // Boxes: Array of 20 items: { id: 1..20, value: number, isSecretOf: teamId | null, isOpened: boolean }
  boxes: [],
  openedValues: new Set(),
  
  // Game Play Turns
  activeTeamIdx: 0,
  stage: 1,
  totalNormalBoxesOpened: 0,
  boxesOpenedInCurrentRound: 0,
  roundBoxMilestones: [3, 3, 3, 3, 2, 2, 1, 1], // Boxes per round progression
  currentRoundMilestoneIdx: 0,
  
  speakingPassedForTurn: false,
  currentQuestion: null,
  usedQuestionIds: new Set(),
  
  // Banker state
  currentBankerOffer: 0,
  bankerPendingTeamIdx: 0,
  
  // Flow flags
  isRevealing: false,
  isFinalRevealPhase: false
};

// =========================================================================
// 3. DOM ELEMENTS
// =========================================================================
const screens = {
  setup: document.getElementById("screenSetup"),
  secretPick: document.getElementById("screenSecretPick"),
  arena: document.getElementById("screenGameArena"),
  winner: document.getElementById("screenWinner")
};

const modals = {
  reveal: document.getElementById("modalBoxReveal"),
  bankerPhone: document.getElementById("modalBankerPhone"),
  bankerOffer: document.getElementById("modalBankerOffer"),
  dealOutcome: document.getElementById("modalDealOutcome"),
  finalReveal: document.getElementById("modalFinalReveal")
};

// UI Components
const el = {
  // Nav
  roundPill: document.getElementById("navRoundPill"),
  boxesLeftPill: document.getElementById("navBoxesLeftPill"),
  soundIcon: document.getElementById("soundIcon"),
  btnSound: document.getElementById("btnToggleSound"),
  btnFullscreen: document.getElementById("btnToggleFullscreen"),
  btnRestart: document.getElementById("btnRestartGame"),
  
  // Setup
  gradeSelector: document.getElementById("gradeSelector"),
  teamCountSelector: document.getElementById("teamCountSelector"),
  teamInputsGrid: document.getElementById("teamInputsGrid"),
  btnStartGame: document.getElementById("btnStartGame"),
  
  // Secret Pick
  currentPickingTeamName: document.getElementById("currentPickingTeamName"),
  secretBoxesGrid: document.getElementById("secretBoxesGrid"),
  secretStatusBar: document.getElementById("secretStatusBar"),
  
  // Arena Prize Lists
  prizeListLeft: document.getElementById("prizeListLeft"),
  prizeListRight: document.getElementById("prizeListRight"),
  
  // Arena Turn & Speaking Challenge
  activeTeamPill: document.getElementById("activeTeamPill"),
  activeTeamLabel: document.getElementById("activeTeamLabel"),
  challengeCategoryPill: document.getElementById("challengeCategoryPill"),
  challengeDifficultyPill: document.getElementById("challengeDifficultyPill"),
  challengePromptText: document.getElementById("challengePromptText"),
  challengeTargetText: document.getElementById("challengeTargetText"),
  btnToggleHint: document.getElementById("btnToggleHint"),
  hintContainer: document.getElementById("hintContainer"),
  hintContentText: document.getElementById("hintContentText"),
  btnAnswerCorrect: document.getElementById("btnAnswerCorrect"),
  btnAnswerTryAgain: document.getElementById("btnAnswerTryAgain"),
  boxPromptBanner: document.getElementById("boxPromptBanner"),
  mainBoxesGrid: document.getElementById("mainBoxesGrid"),
  teamHudBar: document.getElementById("teamHudBar"),
  
  // Reveal Modal
  revealTeamBadge: document.getElementById("revealTeamBadge"),
  revealBoxNumber: document.getElementById("revealBoxNumber"),
  dramaticBoxElement: document.getElementById("dramaticBoxElement"),
  dramaticBoxNum: document.getElementById("dramaticBoxNum"),
  revealCountdown: document.getElementById("revealCountdown"),
  revealPrizeArea: document.getElementById("revealPrizeArea"),
  revealPrizeValue: document.getElementById("revealPrizeValue"),
  revealPrizeVerdict: document.getElementById("revealPrizeVerdict"),
  btnContinueAfterReveal: document.getElementById("btnContinueAfterReveal"),
  
  // Banker Modals
  btnAnswerPhone: document.getElementById("btnAnswerPhone"),
  bankerTargetTeamName: document.getElementById("bankerTargetTeamName"),
  bankerOfferAmount: document.getElementById("bankerOfferAmount"),
  bankerRiskComment: document.getElementById("bankerRiskComment"),
  dealSpeakingPromptText: document.getElementById("dealSpeakingPromptText"),
  btnDecisionSpeakingDone: document.getElementById("btnDecisionSpeakingDone"),
  btnChooseDeal: document.getElementById("btnChooseDeal"),
  btnChooseNoDeal: document.getElementById("btnChooseNoDeal"),
  
  // Deal Outcome
  outcomeIcon: document.getElementById("outcomeIcon"),
  outcomeHeadline: document.getElementById("outcomeHeadline"),
  outcomeDetails: document.getElementById("outcomeDetails"),
  btnContinueOutcome: document.getElementById("btnContinueOutcome"),
  
  // Final Reveal & Winner
  finalSecretCardsContainer: document.getElementById("finalSecretCardsContainer"),
  btnShowFinalScores: document.getElementById("btnShowFinalScores"),
  winnerTeamName: document.getElementById("winnerTeamName"),
  winnerScorePill: document.getElementById("winnerScorePill"),
  podiumGrid: document.getElementById("podiumGrid"),
  btnPlayAgain: document.getElementById("btnPlayAgain"),
  stageFlash: document.getElementById("stageFlash")
};

// =========================================================================
// 4. INITIALIZATION & SETUP
// =========================================================================
function initGame() {
  setupEventListeners();
  renderTeamInputs();
  initCanvasFx();
}

function setupEventListeners() {
  // Sound & Nav
  el.btnSound.addEventListener("click", () => {
    const isMuted = gameAudio.toggleMute();
    el.soundIcon.textContent = isMuted ? "🔇" : "🔊";
  });

  el.btnFullscreen.addEventListener("click", () => {
    gameAudio.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  el.btnRestart.addEventListener("click", () => {
    if (confirm("Are you sure you want to restart the game?")) {
      gameAudio.playClick();
      location.reload();
    }
  });

  // Grade Selector
  el.gradeSelector.querySelectorAll(".btn-choice").forEach(btn => {
    btn.addEventListener("click", () => {
      gameAudio.playClick();
      el.gradeSelector.querySelectorAll(".btn-choice").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.grade = btn.dataset.grade;
    });
  });

  // Team Count Selector
  el.teamCountSelector.querySelectorAll(".btn-choice").forEach(btn => {
    btn.addEventListener("click", () => {
      gameAudio.playClick();
      el.teamCountSelector.querySelectorAll(".btn-choice").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.teamCount = parseInt(btn.dataset.teams, 10);
      renderTeamInputs();
    });
  });

  // Start Game
  el.btnStartGame.addEventListener("click", () => {
    gameAudio.playClick();
    startGameSetup();
  });

  // Hint Toggle
  el.btnToggleHint.addEventListener("click", () => {
    gameAudio.playClick();
    el.hintContainer.classList.toggle("hidden");
  });

  // Teacher Judgement Buttons
  el.btnAnswerCorrect.addEventListener("click", handleTeacherCorrect);
  el.btnAnswerTryAgain.addEventListener("click", handleTeacherTryAgain);

  // Modal Actions
  el.btnContinueAfterReveal.addEventListener("click", handleContinueAfterReveal);
  el.btnAnswerPhone.addEventListener("click", handleAnswerBankerPhone);
  
  el.btnDecisionSpeakingDone.addEventListener("click", () => {
    gameAudio.playCorrectSpeaking();
    el.btnChooseDeal.disabled = false;
    el.btnChooseNoDeal.disabled = false;
  });

  el.btnChooseDeal.addEventListener("click", handleChooseDeal);
  el.btnChooseNoDeal.addEventListener("click", handleChooseNoDeal);
  el.btnContinueOutcome.addEventListener("click", handleContinueAfterOutcome);
  el.btnShowFinalScores.addEventListener("click", showWinnerScreen);
  el.btnPlayAgain.addEventListener("click", () => location.reload());
}

function renderTeamInputs() {
  el.teamInputsGrid.innerHTML = "";
  for (let i = 0; i < state.teamCount; i++) {
    const color = TEAM_COLORS[i % TEAM_COLORS.length];
    const card = document.createElement("div");
    card.className = "team-input-card";
    card.style.borderLeftColor = color.hex;

    card.innerHTML = `
      <span class="team-color-dot" style="background: ${color.hex}"></span>
      <input type="text" id="teamInput_${i}" value="TEAM ${i + 1}" maxlength="18" placeholder="Team Name">
    `;
    el.teamInputsGrid.appendChild(card);
  }
}

function startGameSetup() {
  // Read team names and initialize per-team state
  state.teams = [];
  for (let i = 0; i < state.teamCount; i++) {
    const inputEl = document.getElementById(`teamInput_${i}`);
    const name = (inputEl && inputEl.value.trim()) ? inputEl.value.trim() : `TEAM ${i + 1}`;
    const color = TEAM_COLORS[i % TEAM_COLORS.length];
    state.teams.push({
      id: i + 1,
      name: name,
      color: color.hex,
      colorBg: color.bg,
      secretBoxNum: null,
      secretValue: null,
      hasDeal: false,
      dealAmount: null,
      finalScore: null,
      secretBoxRevealed: false
    });
  }

  // Shuffle the 20 values into 20 boxes
  const shuffledValues = [...ALL_PRIZES].sort(() => Math.random() - 0.5);
  state.boxes = [];
  for (let i = 1; i <= 20; i++) {
    state.boxes.push({
      id: i,
      value: shuffledValues[i - 1],
      isSecretOf: null,
      isOpened: false
    });
  }

  state.openedValues.clear();
  state.currentPickingTeamIdx = 0;
  state.usedQuestionIds.clear();

  // Transition to Secret Pick screen
  showScreen("secretPick");
  renderSecretPickScreen();
}

// =========================================================================
// 5. PHASE 1: SECRET BOX PICKING
// =========================================================================
function renderSecretPickScreen() {
  const currentTeam = state.teams[state.currentPickingTeamIdx];
  el.currentPickingTeamName.textContent = currentTeam.name;
  el.currentPickingTeamName.style.color = currentTeam.color;

  // Render 20 boxes for picking
  el.secretBoxesGrid.innerHTML = "";
  state.boxes.forEach(box => {
    const boxEl = document.createElement("div");
    boxEl.className = "tv-box";
    boxEl.id = `secretBox_${box.id}`;

    if (box.isSecretOf !== null) {
      boxEl.classList.add("locked");
      const assignedTeam = state.teams.find(t => t.id === box.isSecretOf);
      boxEl.style.borderColor = assignedTeam.color;
      boxEl.innerHTML = `
        <div class="tv-box-handle"></div>
        <div class="tv-box-num">${box.id}</div>
        <div class="secret-ribbon" style="background: ${assignedTeam.color}; color: #fff;">
          ${assignedTeam.name}
        </div>
      `;
    } else {
      boxEl.innerHTML = `
        <div class="tv-box-handle"></div>
        <div class="tv-box-num">${box.id}</div>
      `;
      boxEl.addEventListener("click", () => handleSecretBoxSelection(box.id));
    }

    el.secretBoxesGrid.appendChild(boxEl);
  });

  // Render status bar below
  renderSecretStatusBar();
}

function renderSecretStatusBar() {
  el.secretStatusBar.innerHTML = "";
  state.teams.forEach((team, idx) => {
    const card = document.createElement("div");
    card.className = "secret-team-card";
    card.style.borderLeft = `4px solid ${team.color}`;

    const isCurrent = idx === state.currentPickingTeamIdx;
    const isAssigned = team.secretBoxNum !== null;

    card.innerHTML = `
      <div class="secret-team-info">
        <span class="team-color-dot" style="background: ${team.color}"></span>
        <span class="secret-team-name">${team.name}</span>
      </div>
      <span class="secret-box-badge ${isAssigned ? 'assigned' : ''}">
        ${isAssigned ? `BOX #${team.secretBoxNum}` : (isCurrent ? 'SELECTING NOW...' : 'WAITING')}
      </span>
    `;
    el.secretStatusBar.appendChild(card);
  });
}

function handleSecretBoxSelection(boxId) {
  const currentTeam = state.teams[state.currentPickingTeamIdx];
  const box = state.boxes.find(b => b.id === boxId);
  if (!box || box.isSecretOf !== null) return;

  gameAudio.playBoxSelect();

  // Assign secret box to team
  box.isSecretOf = currentTeam.id;
  currentTeam.secretBoxNum = box.id;
  currentTeam.secretValue = box.value;

  // Next team or proceed to Main Arena
  state.currentPickingTeamIdx++;
  if (state.currentPickingTeamIdx < state.teams.length) {
    renderSecretPickScreen();
  } else {
    // All teams picked their secret boxes!
    triggerStageFlash();
    setTimeout(() => {
      startMainGameArena();
    }, 600);
  }
}

// =========================================================================
// 6. PHASE 2: MAIN GAME ARENA
// =========================================================================
function startMainGameArena() {
  showScreen("arena");
  state.activeTeamIdx = 0;
  state.stage = 1;
  state.totalNormalBoxesOpened = 0;
  state.boxesOpenedInCurrentRound = 0;
  state.currentRoundMilestoneIdx = 0;

  // Set balanced banker round milestones per team count
  if (state.teamCount === 2) {
    state.roundBoxMilestones = [3, 3, 3, 3, 2, 2, 1, 1];
  } else if (state.teamCount === 3) {
    state.roundBoxMilestones = [4, 4, 4, 2, 2, 1];
  } else {
    state.roundBoxMilestones = [3, 3, 3, 3, 2, 1, 1];
  }

  renderPrizeBoards();
  renderMainArenaBoxes();
  renderTeamHud();
  startNextTurn();
}

function renderPrizeBoards() {
  // Low values left (1.000 TL to 1.000.000 TL)
  el.prizeListLeft.innerHTML = "";
  LOW_PRIZES.forEach(val => {
    const isOpened = state.openedValues.has(val);
    const pill = document.createElement("div");
    pill.className = `prize-pill ${isOpened ? 'opened' : ''}`;
    pill.id = `prizePill_${val}`;
    pill.textContent = formatTL(val);
    el.prizeListLeft.appendChild(pill);
  });

  // High values right (1.500.000 TL to 250.000.000 TL)
  el.prizeListRight.innerHTML = "";
  HIGH_PRIZES.forEach(val => {
    const isOpened = state.openedValues.has(val);
    const isJackpot = val === 250000000;
    const pill = document.createElement("div");
    pill.className = `prize-pill ${isJackpot ? 'jackpot' : ''} ${isOpened ? 'opened' : ''}`;
    pill.id = `prizePill_${val}`;
    pill.textContent = formatTL(val);
    el.prizeListRight.appendChild(pill);
  });

  // Update Nav status
  const remainingCount = 20 - state.openedValues.size;
  el.boxesLeftPill.textContent = `${remainingCount} PRIZES IN PLAY`;
  el.roundPill.textContent = `STAGE ${state.stage}`;
}

function renderMainArenaBoxes() {
  el.mainBoxesGrid.innerHTML = "";
  state.boxes.forEach(box => {
    const boxEl = document.createElement("div");
    boxEl.className = "tv-box";
    boxEl.id = `arenaBox_${box.id}`;

    if (box.isOpened) {
      boxEl.classList.add("opened");
      boxEl.innerHTML = `
        <div class="tv-box-handle"></div>
        <div class="tv-box-num">${box.id}</div>
        <div class="opened-val-stamp">${formatTL(box.value)}</div>
      `;
    } else if (box.isSecretOf !== null) {
      boxEl.classList.add("locked");
      const assignedTeam = state.teams.find(t => t.id === box.isSecretOf);
      boxEl.style.borderColor = assignedTeam.color;
      boxEl.innerHTML = `
        <div class="tv-box-handle"></div>
        <div class="tv-box-num">${box.id}</div>
        <div class="secret-ribbon" style="background: ${assignedTeam.color}; color: #fff;">
          ${assignedTeam.name}'S BOX
        </div>
      `;
    } else {
      // Unopened normal box
      boxEl.innerHTML = `
        <div class="tv-box-handle"></div>
        <div class="tv-box-num">${box.id}</div>
      `;
      boxEl.addEventListener("click", () => handleArenaBoxClick(box.id));
    }

    el.mainBoxesGrid.appendChild(boxEl);
  });
}

function renderTeamHud() {
  el.teamHudBar.innerHTML = "";
  state.teams.forEach((team, idx) => {
    const card = document.createElement("div");
    const isTurn = idx === state.activeTeamIdx;
    card.className = `team-hud-card ${isTurn ? 'active-turn' : ''}`;
    card.style.borderLeftColor = team.color;

    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span class="team-color-dot" style="background: ${team.color}"></span>
        <span class="hud-team-name">${team.name}</span>
      </div>
      <div style="display: flex; gap: 0.4rem; align-items: center;">
        <span class="hud-status-badge">SECRET: BOX #${team.secretBoxNum}</span>
        <span class="hud-status-badge ${team.hasDeal ? 'deal-locked' : ''}">
          ${team.hasDeal ? `DEAL: ${formatTL(team.dealAmount)}` : 'IN PLAY'}
        </span>
      </div>
    `;
    el.teamHudBar.appendChild(card);
  });
}

// =========================================================================
// 7. SPEAKING CHALLENGE & TEACHER JUDGEMENT
// =========================================================================
function startNextTurn() {
  state.speakingPassedForTurn = false;
  el.boxPromptBanner.classList.add("hidden");
  el.hintContainer.classList.add("hidden");

  const currentTeam = state.teams[state.activeTeamIdx];
  el.activeTeamLabel.textContent = `${currentTeam.name.toUpperCase()}'S TURN`;
  el.activeTeamPill.style.background = currentTeam.colorBg;

  // Pick question based on progressive difficulty stages
  let level = "level1";
  if (state.totalNormalBoxesOpened >= 9) {
    level = "level3";
  } else if (state.totalNormalBoxesOpened >= 4) {
    level = "level2";
  }

  const q = getNextQuestion(level);
  state.currentQuestion = q;

  // Populate challenge card
  el.challengeCategoryPill.textContent = q.category;
  el.challengeDifficultyPill.textContent = `${level.toUpperCase()} • ${q.target}`;
  el.challengePromptText.textContent = `"${q.prompt}"`;
  el.challengeTargetText.textContent = `🎯 Target: ${q.target}`;
  el.hintContentText.textContent = q.hint || "Answer clearly using full English sentences.";

  renderTeamHud();
}

function getNextQuestion(level) {
  let gradePool = [];
  if (state.grade === "grade7") {
    gradePool = DEAL_SPEAKING_BANK.grade7[level] || [];
  } else if (state.grade === "grade8") {
    gradePool = DEAL_SPEAKING_BANK.grade8[level] || [];
  } else {
    // Mixed
    const g7 = DEAL_SPEAKING_BANK.grade7[level] || [];
    const g8 = DEAL_SPEAKING_BANK.grade8[level] || [];
    gradePool = [...g7, ...g8];
  }

  // Filter unused
  let available = gradePool.filter(q => !state.usedQuestionIds.has(q.id));
  if (available.length === 0) {
    // Reset if exhausted
    state.usedQuestionIds.clear();
    available = gradePool;
  }

  const selected = available[Math.floor(Math.random() * available.length)];
  state.usedQuestionIds.add(selected.id);
  return selected;
}

function handleTeacherCorrect() {
  if (state.speakingPassedForTurn) return;
  gameAudio.playCorrectSpeaking();
  state.speakingPassedForTurn = true;
  el.boxPromptBanner.classList.remove("hidden");
  triggerStageFlash();
}

function handleTeacherTryAgain() {
  gameAudio.playTryAgain();
  const box = document.getElementById("speakingChallengeBox");
  box.classList.add("shaking");
  setTimeout(() => box.classList.remove("shaking"), 500);
}

// =========================================================================
// 8. DRAMATIC BOX OPENING SEQUENCE
// =========================================================================
function handleArenaBoxClick(boxId) {
  if (!state.speakingPassedForTurn) {
    alert("Please complete the speaking challenge and have the teacher verify before opening a box!");
    return;
  }

  const box = state.boxes.find(b => b.id === boxId);
  if (!box || box.isOpened || box.isSecretOf !== null || state.isRevealing) return;

  state.isRevealing = true;
  const currentTeam = state.teams[state.activeTeamIdx];

  // Setup Reveal Modal
  el.revealTeamBadge.textContent = `${currentTeam.name.toUpperCase()} IS OPENING`;
  el.revealBoxNumber.textContent = `BOX #${box.id}`;
  el.dramaticBoxNum.textContent = box.id;

  el.revealCountdown.classList.remove("hidden");
  el.revealCountdown.textContent = "3...";
  el.revealPrizeArea.classList.add("hidden");
  el.dramaticBoxElement.className = "dramatic-box shaking";

  showModal("reveal");
  gameAudio.startSuspenseDrone();
  gameAudio.playCountdownTick(3);

  // 3-2-1 Suspense Sequence
  setTimeout(() => {
    el.revealCountdown.textContent = "2...";
    gameAudio.playCountdownTick(2);
  }, 1000);

  setTimeout(() => {
    el.revealCountdown.textContent = "1...";
    gameAudio.playCountdownTick(1);
  }, 2000);

  setTimeout(() => {
    // OPEN BOX DRAMATICALLY!
    el.revealCountdown.classList.add("hidden");
    el.dramaticBoxElement.className = "dramatic-box opening";
    el.revealPrizeValue.textContent = formatTL(box.value);

    // Set verdict text based on million-scale values
    if (box.value <= 100000) {
      el.revealPrizeVerdict.textContent = "🌟 FANTASTIC! LOW VALUE ELIMINATED FROM THE BOARD!";
      el.revealPrizeVerdict.style.color = "#38bdf8";
    } else if (box.value <= 1000000) {
      el.revealPrizeVerdict.textContent = "👍 GOOD RESULT! SAFE MIDDLE PRIZE REMOVED.";
      el.revealPrizeVerdict.style.color = "#4ade80";
    } else if (box.value <= 10000000) {
      el.revealPrizeVerdict.textContent = "⚠️ CAUTION! A MULTI-MILLION PRIZE WAS IN THIS BOX!";
      el.revealPrizeVerdict.style.color = "#f59e0b";
    } else if (box.value <= 100000000) {
      el.revealPrizeVerdict.textContent = "💥 OUCH! HUGE VALUE REMOVED FROM PLAY!";
      el.revealPrizeVerdict.style.color = "#ef4444";
      spawnConfetti(window.innerWidth / 2, window.innerHeight / 2, 60);
    } else {
      // 250.000.000 TL JACKPOT!
      el.revealPrizeVerdict.textContent = "💰 250.000.000 TL 💰 JACKPOT ELIMINATED FROM THE BOARD!";
      el.revealPrizeVerdict.style.color = "#ffd700";
      triggerJackpotShake();
      spawnConfetti(window.innerWidth / 2, window.innerHeight / 2, 100);
    }

    el.revealPrizeArea.classList.remove("hidden");
    gameAudio.playReveal(box.value);

    // Update state
    box.isOpened = true;
    state.openedValues.add(box.value);
    state.totalNormalBoxesOpened++;
    state.boxesOpenedInCurrentRound++;

  }, 3000);
}

function triggerJackpotShake() {
  document.body.classList.add("jackpot-shake");
  setTimeout(() => document.body.classList.remove("jackpot-shake"), 1200);
}

function handleContinueAfterReveal() {
  hideModal("reveal");
  state.isRevealing = false;
  state.speakingPassedForTurn = false;

  renderPrizeBoards();
  renderMainArenaBoxes();

  // Check if all normal boxes are opened -> Grand Finale!
  const normalBoxesRemaining = state.boxes.filter(b => !b.isOpened && b.isSecretOf === null).length;
  if (normalBoxesRemaining === 0) {
    startFinalSecretBoxReveal();
    return;
  }

  // Determine current round target
  const currentTarget = state.roundBoxMilestones[Math.min(state.currentRoundMilestoneIdx, state.roundBoxMilestones.length - 1)];

  // Check if Banker Call is triggered
  if (state.boxesOpenedInCurrentRound >= currentTarget || normalBoxesRemaining <= 1) {
    state.boxesOpenedInCurrentRound = 0;
    state.currentRoundMilestoneIdx++;
    state.stage++;
    triggerBankerSequence();
  } else {
    // Move to next team's turn
    state.activeTeamIdx = (state.activeTeamIdx + 1) % state.teams.length;
    startNextTurn();
  }
}

// =========================================================================
// 9. THE BANKER TELEPHONE & NEGOTIATION ENGINE (ZİRAAT BANKASI BANKER)
// =========================================================================
function triggerBankerSequence() {
  // Determine which team receives the offer:
  // Starts with the active team whose turn just finished.
  // If the active team already accepted a deal, look for the next team in rotation that has not yet accepted a deal.
  let targetIdx = state.activeTeamIdx;
  if (state.teams[targetIdx].hasDeal) {
    for (let i = 0; i < state.teams.length; i++) {
      const idx = (state.activeTeamIdx + i) % state.teams.length;
      if (!state.teams[idx].hasDeal) {
        targetIdx = idx;
        break;
      }
    }
  }

  state.bankerPendingTeamIdx = targetIdx;
  const targetTeam = state.teams[state.bankerPendingTeamIdx];

  // Calculate Mathematical Banker Offer
  state.currentBankerOffer = calculateBankerOffer();

  // Show telephone ringing modal
  showModal("bankerPhone");
  gameAudio.startTelephone();
}

function calculateBankerOffer() {
  // Get all remaining unopened values
  const remainingValues = ALL_PRIZES.filter(v => !state.openedValues.has(v));
  if (remainingValues.length === 0) return 10000;

  // Expected Value (EV)
  const sum = remainingValues.reduce((a, b) => a + b, 0);
  const ev = sum / remainingValues.length;
  const remainingCount = remainingValues.length;
  const maxVal = Math.max(...remainingValues);

  // Stage factor rises from early (~40%) to late (~85%)
  let stageFactor = 0.40;
  if (remainingCount <= 2) {
    stageFactor = 0.88;
  } else if (remainingCount <= 4) {
    stageFactor = 0.82;
  } else if (remainingCount <= 7) {
    stageFactor = 0.72;
  } else if (remainingCount <= 11) {
    stageFactor = 0.58;
  } else if (remainingCount <= 15) {
    stageFactor = 0.48;
  }

  // Risk adjustments based on jackpot presence
  if (remainingValues.includes(250000000)) {
    stageFactor += 0.05;
  } else if (maxVal <= 5000000) {
    stageFactor -= 0.05;
  }

  let offer = ev * stageFactor;

  // Clean rounding for million-scale TL values
  if (offer >= 10000000) {
    offer = Math.round(offer / 1000000) * 1000000;
  } else if (offer >= 1000000) {
    offer = Math.round(offer / 250000) * 250000;
  } else if (offer >= 100000) {
    offer = Math.round(offer / 25000) * 25000;
  } else {
    offer = Math.round(offer / 5000) * 5000;
  }

  return Math.max(5000, offer);
}

function handleAnswerBankerPhone() {
  gameAudio.playAnswerCall();
  hideModal("bankerPhone");

  const targetTeam = state.teams[state.bankerPendingTeamIdx];
  el.bankerTargetTeamName.textContent = targetTeam.name;
  el.bankerTargetTeamName.style.color = targetTeam.color;
  el.bankerOfferAmount.textContent = formatTL(state.currentBankerOffer);

  // Banker reaction comment based on high values remaining
  const remainingValues = ALL_PRIZES.filter(v => !state.openedValues.has(v));
  if (el.bankerRiskComment) {
    if (remainingValues.includes(250000000)) {
      el.bankerRiskComment.textContent = "⚡ 250.000.000 TL JACKPOT IS STILL ON THE BOARD! THE BANKER IS NERVOUS!";
      el.bankerRiskComment.style.color = "#fbbf24";
    } else if (remainingValues.some(v => v >= 50000000)) {
      el.bankerRiskComment.textContent = "🔥 MULTI-MILLION VALUES ARE STILL ALIVE! THIS IS A BIG DECISION!";
      el.bankerRiskComment.style.color = "#f87171";
    } else {
      el.bankerRiskComment.textContent = "📉 BIG JACKPOTS ARE GONE. THE BANKER OFFERS A CAUTIOUS DEAL.";
      el.bankerRiskComment.style.color = "#94a3b8";
    }
  }

  // Random decision speaking prompt
  const randPrompt = DEAL_DECISION_PROMPTS[Math.floor(Math.random() * DEAL_DECISION_PROMPTS.length)];
  el.dealSpeakingPromptText.textContent = `"${randPrompt}"`;

  // Disable buttons until speaking accepted
  el.btnChooseDeal.disabled = true;
  el.btnChooseNoDeal.disabled = true;

  showModal("bankerOffer");
}

function handleChooseDeal() {
  hideModal("bankerOffer");
  const targetTeam = state.teams[state.bankerPendingTeamIdx];
  targetTeam.hasDeal = true;
  targetTeam.dealAmount = state.currentBankerOffer;
  targetTeam.finalScore = state.currentBankerOffer;

  gameAudio.playDealGavel();
  spawnConfetti(window.innerWidth / 2, window.innerHeight / 2, 80);

  // Show outcome
  el.outcomeIcon.textContent = "💰";
  el.outcomeHeadline.textContent = "DEAL!";
  el.outcomeHeadline.style.color = "#10b981";
  el.outcomeDetails.innerHTML = `<strong>${targetTeam.name}</strong> accepted the Ziraat Bankası Banker's offer of <strong>${formatTL(state.currentBankerOffer)}</strong>! Their score is permanently secured!`;
  showModal("dealOutcome");
}

function handleChooseNoDeal() {
  hideModal("bankerOffer");
  const targetTeam = state.teams[state.bankerPendingTeamIdx];

  gameAudio.playNoDealBuzzer();

  // Show outcome
  el.outcomeIcon.textContent = "🔥";
  el.outcomeHeadline.textContent = "NO DEAL!";
  el.outcomeHeadline.style.color = "#ef4444";
  el.outcomeDetails.innerHTML = `<strong>${targetTeam.name}</strong> rejected the Ziraat Bankası Banker's offer of <strong>${formatTL(state.currentBankerOffer)}</strong> and chose to keep playing!`;
  showModal("dealOutcome");
}

function handleContinueAfterOutcome() {
  hideModal("dealOutcome");
  renderTeamHud();

  // Move to next team's turn
  state.activeTeamIdx = (state.activeTeamIdx + 1) % state.teams.length;
  startNextTurn();
}

// =========================================================================
// 10. FINAL SECRET BOX REVEAL & PODIUM SCREEN
// =========================================================================
function startFinalSecretBoxReveal() {
  state.isFinalRevealPhase = true;
  showModal("finalReveal");
  renderFinalSecretCards();
}

function renderFinalSecretCards() {
  el.finalSecretCardsContainer.innerHTML = "";
  let allRevealed = true;

  state.teams.forEach(team => {
    const card = document.createElement("div");
    card.className = "final-team-secret-card";
    card.style.borderLeftColor = team.color;

    const isRevealed = team.secretBoxRevealed;
    if (!isRevealed) allRevealed = false;

    card.innerHTML = `
      <div class="card-team-header" style="color: ${team.color}">${team.name}</div>
      <div class="card-box-holder">
        <span style="font-size: 2.5rem;">💼</span>
        <div style="font-family: var(--font-display); font-weight: 800; font-size: 1.2rem;">SECRET BOX #${team.secretBoxNum}</div>
      </div>
      <div class="card-final-value">
        ${team.secretBoxRevealed ? formatTL(team.secretValue) : '???'}
      </div>
      <div class="card-deal-status">
        ${team.hasDeal ? `🔒 Accepted Banker Deal: ${formatTL(team.dealAmount)}` : 'Playing for Secret Box'}
      </div>
      ${!team.secretBoxRevealed ? `
        <button type="button" class="btn-open-secret" onclick="revealTeamSecretBox(${team.id})">
          ✨ REVEAL BOX #${team.secretBoxNum}
        </button>
      ` : ''}
    `;

    el.finalSecretCardsContainer.appendChild(card);
  });

  if (allRevealed) {
    el.btnShowFinalScores.classList.remove("hidden");
  } else {
    el.btnShowFinalScores.classList.add("hidden");
  }
}

// Exposed globally for onclick handler
window.revealTeamSecretBox = function(teamId) {
  const team = state.teams.find(t => t.id === teamId);
  if (!team || team.secretBoxRevealed) return;

  gameAudio.playCountdownTick(1);
  team.secretBoxRevealed = true;

  if (!team.hasDeal) {
    team.finalScore = team.secretValue;
  }

  gameAudio.playReveal(team.secretValue);
  
  if (team.secretValue === 250000000) {
    triggerJackpotShake();
    spawnConfetti(window.innerWidth / 2, window.innerHeight / 2, 100);
  } else {
    spawnConfetti(window.innerWidth / 2, window.innerHeight / 2, 50);
  }
  
  renderFinalSecretCards();
};

function showWinnerScreen() {
  hideModal("finalReveal");
  showScreen("winner");

  // Determine scores and rankings
  const rankedTeams = [...state.teams].sort((a, b) => (b.finalScore || 0) - (a.finalScore || 0));
  const winner = rankedTeams[0];

  el.winnerTeamName.textContent = winner.name;
  el.winnerTeamName.style.color = winner.color;
  el.winnerScorePill.textContent = `${formatTL(winner.finalScore || 0)} WON!`;

  // Render Podium cards
  el.podiumGrid.innerHTML = "";
  rankedTeams.forEach((team, idx) => {
    const card = document.createElement("div");
    card.className = `podium-card rank-${idx + 1}`;
    card.style.borderLeftColor = team.color;

    const rankMedals = ["🥇", "🥈", "🥉", "🎖️"];
    card.innerHTML = `
      <div class="podium-rank">${rankMedals[idx] || "🎖️"}</div>
      <div class="podium-team-name" style="color: ${team.color}">${team.name}</div>
      <div class="podium-score">${formatTL(team.finalScore || 0)}</div>
      <div style="font-size: 0.85rem; color: #94a3b8; margin-top: 4px;">
        ${team.hasDeal ? `Secured Banker Deal (${formatTL(team.dealAmount)})` : `Box #${team.secretBoxNum} (${formatTL(team.secretValue)})`}
      </div>
    `;
    el.podiumGrid.appendChild(card);
  });

  gameAudio.playVictory();
  startGrandConfettiLoop();
}

// =========================================================================
// 11. UI SCREEN & MODAL HELPERS
// =========================================================================
function showScreen(screenKey) {
  Object.values(screens).forEach(s => s.classList.add("hidden"));
  if (screens[screenKey]) {
    screens[screenKey].classList.remove("hidden");
    screens[screenKey].classList.add("active");
  }
}

function showModal(modalKey) {
  if (modals[modalKey]) {
    modals[modalKey].classList.remove("hidden");
  }
}

function hideModal(modalKey) {
  if (modals[modalKey]) {
    modals[modalKey].classList.add("hidden");
  }
}

function triggerStageFlash() {
  el.stageFlash.classList.add("active");
  setTimeout(() => el.stageFlash.classList.remove("active"), 350);
}

// =========================================================================
// 12. CONFETTI & PARTICLES SYSTEM
// =========================================================================
let fxCtx = null;
let particles = [];
let confettiRunning = false;

function initCanvasFx() {
  const canvas = document.getElementById("fxCanvas");
  if (!canvas) return;
  fxCtx = canvas.getContext("2d");

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener("resize", resize);
  resize();

  function loop() {
    if (particles.length > 0) {
      fxCtx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotSpeed;
        p.alpha -= p.fade;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        fxCtx.save();
        fxCtx.globalAlpha = p.alpha;
        fxCtx.translate(p.x, p.y);
        fxCtx.rotate(p.rotation);
        fxCtx.fillStyle = p.color;
        fxCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        fxCtx.restore();
      }
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

function spawnConfetti(originX, originY, count = 50) {
  const colors = ["#ffd700", "#f59e0b", "#ef4444", "#3b82f6", "#10b981", "#a855f7", "#ffffff"];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 8;
    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      gravity: 0.15,
      size: 6 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.2,
      alpha: 1,
      fade: 0.008 + Math.random() * 0.008
    });
  }
}

function startGrandConfettiLoop() {
  if (confettiRunning) return;
  confettiRunning = true;
  let burstCount = 0;
  const interval = setInterval(() => {
    spawnConfetti(Math.random() * window.innerWidth, window.innerHeight * 0.3, 40);
    burstCount++;
    if (burstCount > 8) {
      clearInterval(interval);
      confettiRunning = false;
    }
  }, 400);
}

// Launch Game on Load
document.addEventListener("DOMContentLoaded", initGame);
