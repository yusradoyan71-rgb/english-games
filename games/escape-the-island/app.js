/**
 * ESCAPE THE ISLAND - Core Game Engine & Application Logic
 * 35-Minute Classroom Edition for 7th & 8th Grade ESL/EFL Students
 */

// ============================================================
// DEFAULT EXPEDITION TEAMS
// ============================================================
const DEFAULT_TEAMS = [
  { id: "tigers", name: "TIGERS", emoji: "🐯", color: "#f59e0b" },
  { id: "lions", name: "LIONS", emoji: "🦁", color: "#ef4444" },
  { id: "eagles", name: "EAGLES", emoji: "🦅", color: "#0ea5e9" },
  { id: "sharks", name: "SHARKS", emoji: "🦈", color: "#14b8a6" },
  { id: "dragons", name: "DRAGONS", emoji: "🐉", color: "#10b981" },
  { id: "wolves", name: "WOLVES", emoji: "🐺", color: "#94a3b8" }
];

const STORAGE_KEY = "escape_island_game_state_v1";

// ============================================================
// GAME STATE SINGLETON
// ============================================================
class IslandGame {
  constructor() {
    // Session State
    this.screen = "setup"; // 'setup', 'intro', 'game', 'victory'
    this.timerSeconds = 35 * 60; // 35 minutes default
    this.timerRunning = false;
    this.timerInterval = null;
    this.round = 1;
    this.currentTeamIndex = 0;
    this.teams = [];
    this.teamCount = 4;

    // Progression & Content
    this.usedQuestionIds = new Set();
    this.currentQuestion = null;
    this.selectedOptionIndex = null;
    this.verdictGiven = false;
    this.currentLocation = "beach";
    this.activeDilemma = null;
    this.activeEvent = null;
    this.activeFinalChallenge = null;
    this.chronicleLog = [];

    // Pacing counters
    this.turnsCount = 0;
    this.dilemmasEncountered = 0;
    this.eventsEncountered = 0;
    this.escapeRankings = []; // Teams in order of escape

    // Audio & UI
    this.soundEngine = typeof audio !== 'undefined' ? audio : null;
    this.teacherModeOpen = false;

    // Confetti
    this.confettiActive = false;
    this.confettiParticles = [];

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderSetupTeams();
    this.checkSavedGame();
    this.initConfettiCanvas();
    this.updateSoundButtonUI();
  }

  // ============================================================
  // STORAGE & PERSISTENCE
  // ============================================================
  saveState() {
    try {
      const state = {
        screen: this.screen,
        timerSeconds: this.timerSeconds,
        round: this.round,
        currentTeamIndex: this.currentTeamIndex,
        teams: this.teams,
        teamCount: this.teamCount,
        usedQuestionIds: Array.from(this.usedQuestionIds),
        currentLocation: this.currentLocation,
        chronicleLog: this.chronicleLog,
        turnsCount: this.turnsCount,
        dilemmasEncountered: this.dilemmasEncountered,
        eventsEncountered: this.eventsEncountered,
        escapeRankings: this.escapeRankings,
        timestamp: Date.now()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Could not save game state to localStorage", e);
    }
  }

  loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      const state = JSON.parse(raw);

      this.screen = state.screen || "game";
      this.timerSeconds = state.timerSeconds ?? 35 * 60;
      this.round = state.round || 1;
      this.currentTeamIndex = state.currentTeamIndex || 0;
      this.teams = state.teams || [];
      this.teamCount = state.teamCount || this.teams.length || 4;
      this.usedQuestionIds = new Set(state.usedQuestionIds || []);
      this.currentLocation = state.currentLocation || "beach";
      this.chronicleLog = state.chronicleLog || [];
      this.turnsCount = state.turnsCount || 0;
      this.dilemmasEncountered = state.dilemmasEncountered || 0;
      this.eventsEncountered = state.eventsEncountered || 0;
      this.escapeRankings = state.escapeRankings || [];

      return true;
    } catch (e) {
      console.warn("Failed to load saved state", e);
      return false;
    }
  }

  checkSavedGame() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const banner = document.getElementById("saved-game-banner");
      if (raw && banner) {
        const state = JSON.parse(raw);
        if (state.teams && state.teams.length > 0 && state.screen !== "victory") {
          const mins = Math.floor(state.timerSeconds / 60);
          const secs = (state.timerSeconds % 60).toString().padStart(2, "0");
          document.getElementById("saved-game-meta").textContent =
            `Round ${state.round} • ${state.teams.length} Teams • ${mins}:${secs} Remaining`;
          banner.classList.remove("hidden");
        } else {
          banner.classList.add("hidden");
        }
      }
    } catch (e) {}
  }

  clearSavedState() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    const banner = document.getElementById("saved-game-banner");
    if (banner) banner.classList.add("hidden");
  }

  // ============================================================
  // TEAM CONFIGURATION & SETUP
  // ============================================================
  renderSetupTeams() {
    const container = document.getElementById("teams-grid-container");
    if (!container) return;
    container.innerHTML = "";

    for (let i = 0; i < this.teamCount; i++) {
      const def = DEFAULT_TEAMS[i] || {
        id: `team-${i+1}`,
        name: `TEAM ${i+1}`,
        emoji: "🧭",
        color: "#10b981"
      };

      const card = document.createElement("div");
      card.className = "team-setup-card";
      card.id = `setup-card-${i}`;
      card.innerHTML = `
        <div class="team-avatar-selector" id="avatar-btn-${i}" title="Team Emblem">${def.emoji}</div>
        <div class="team-inputs">
          <div class="team-order-tag">TEAM ${i+1} (${i===0 ? 'STARTS FIRST' : `TURN ${i+1}`})</div>
          <input type="text" class="team-name-input" id="team-name-input-${i}" value="${def.name}" maxlength="16" placeholder="Enter Team Name" aria-label="Team ${i+1} Name">
        </div>
      `;
      container.appendChild(card);
    }
  }

  setTeamCount(count) {
    this.teamCount = count;
    document.querySelectorAll(".btn-count").forEach(btn => {
      btn.classList.toggle("active", parseInt(btn.dataset.teams, 10) === count);
    });
    this.renderSetupTeams();
  }

  initializeExpedition() {
    this.teams = [];
    for (let i = 0; i < this.teamCount; i++) {
      const nameInput = document.getElementById(`team-name-input-${i}`);
      const def = DEFAULT_TEAMS[i] || { emoji: "🧭", color: "#10b981" };
      const teamName = nameInput && nameInput.value.trim() ? nameInput.value.trim().toUpperCase() : (def.name || `TEAM ${i+1}`);
      const emoji = def.emoji;

      this.teams.push({
        id: `team-${i+1}`,
        name: teamName,
        emoji: emoji,
        color: def.color,
        energy: 3,
        inventory: [],
        exploredLocations: ["beach"],
        correctAnswers: 0,
        escaped: false,
        escapeMethod: null,
        escapeRound: null,
        turnCount: 0
      });
    }

    this.round = 1;
    this.currentTeamIndex = 0;
    this.turnsCount = 0;
    this.dilemmasEncountered = 0;
    this.eventsEncountered = 0;
    this.escapeRankings = [];
    this.usedQuestionIds.clear();
    this.currentLocation = "beach";
    this.timerSeconds = 35 * 60;

    this.addChronicleEntry("Expedition begun! Plane wreckage located on Sandy Beach. Mission: ESCAPE THE ISLAND.");
    this.populateTeacherTeamSelector();
    this.saveState();
  }

  // ============================================================
  // TIMER & PACING MANAGEMENT (35-Minute Classroom Engine)
  // ============================================================
  startTimer() {
    if (this.timerRunning) return;
    this.timerRunning = true;
    this.updateTimerButtonUI();

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.timerSeconds > 0) {
        this.timerSeconds--;
        this.updateTimerDisplay();

        // Pacing Checkpoint Alerts
        this.checkDynamicPacing();

        // Periodic auto-save every 15s
        if (this.timerSeconds % 15 === 0) {
          this.saveState();
        }
      } else {
        this.handleTimerExpired();
      }
    }, 1000);
  }

  pauseTimer() {
    this.timerRunning = false;
    clearInterval(this.timerInterval);
    this.updateTimerButtonUI();
  }

  toggleTimer() {
    if (this.timerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  adjustTimer(deltaSeconds) {
    this.timerSeconds = Math.max(0, this.timerSeconds + deltaSeconds);
    this.updateTimerDisplay();
    this.checkDynamicPacing();
    this.saveState();
  }

  updateTimerDisplay() {
    const mins = Math.floor(this.timerSeconds / 60);
    const secs = (this.timerSeconds % 60).toString().padStart(2, "0");
    const digitsEl = document.getElementById("timer-digits");
    if (digitsEl) digitsEl.textContent = `${mins}:${secs}`;

    const widget = document.getElementById("timer-widget");
    if (widget) {
      widget.classList.toggle("warning", this.timerSeconds <= 7 * 60 && this.timerSeconds > 2 * 60);
      widget.classList.toggle("danger", this.timerSeconds <= 2 * 60);
    }
  }

  updateTimerButtonUI() {
    const pauseBtn = document.getElementById("timer-pause-btn");
    if (pauseBtn) {
      pauseBtn.textContent = this.timerRunning ? "⏸" : "▶";
      pauseBtn.title = this.timerRunning ? "Pause Timer (Space)" : "Resume Timer (Space)";
    }
    const teacherTimerBtn = document.getElementById("td-btn-timer-toggle");
    if (teacherTimerBtn) {
      teacherTimerBtn.textContent = this.timerRunning ? "⏸ Pause Timer" : "▶ Resume Timer";
    }
  }

  checkDynamicPacing() {
    const dangerBanner = document.getElementById("danger-alert-banner");
    const dangerText = document.getElementById("danger-text");
    if (!dangerBanner || !dangerText) return;

    // Minute 28 (≤ 7 mins remaining): Island Danger Alert
    if (this.timerSeconds <= 7 * 60 && this.timerSeconds > 2 * 60) {
      dangerText.textContent = "⚠️ THE ISLAND IS BECOMING DANGEROUS! Dark storm clouds gather & volcano rumbles! Finalize your escape blueprints!";
      dangerBanner.classList.remove("hidden");
    }
    // Minute 33 (≤ 2 mins remaining): Final Escape Window
    else if (this.timerSeconds <= 2 * 60 && this.timerSeconds > 0) {
      dangerText.textContent = "🚨 FINAL ESCAPE WINDOW! All teams must execute their escape challenges before the storm hits!";
      dangerBanner.classList.remove("hidden");
      dangerBanner.style.background = "linear-gradient(90deg, #991b1b, #ef4444)";
    }
  }

  handleTimerExpired() {
    this.pauseTimer();
    this.addChronicleEntry("⏱️ 35-MINUTE TIMER EXPIRED! Rescue emergency beacon automatically activated.");
    if (this.soundEngine) this.soundEngine.playEventAlert();

    // Conclude expedition and show podium
    this.resolveAllEscapesAndEnd();
  }

  resolveAllEscapesAndEnd() {
    // If teams haven't escaped yet, rank them based on items collected & questions answered
    this.teams.forEach(team => {
      if (!team.escaped) {
        team.escaped = true;
        team.escapeMethod = "Coast Guard Emergency Air-Lift";
        team.escapeRound = this.round;
        if (!this.escapeRankings.includes(team.id)) {
          this.escapeRankings.push(team.id);
        }
      }
    });

    this.showVictoryScreen();
  }

  // ============================================================
  // TURN & ROUND MANAGEMENT
  // ============================================================
  getActiveTeam() {
    return this.teams[this.currentTeamIndex] || this.teams[0];
  }

  startTurn() {
    const team = this.getActiveTeam();
    if (!team) return;

    team.turnCount++;
    this.turnsCount++;
    this.selectedOptionIndex = null;
    this.verdictGiven = false;

    // Update active team banner
    this.updateActiveTeamBanner();
    this.updateAllTeamsPanel();
    this.updateInventoryPanel();
    this.updateBlueprintsPanel();
    this.updateMapVisuals();
    this.updateIslandProgress();

    // Check if team is already escaped
    if (team.escaped) {
      this.addChronicleEntry(`${team.emoji} ${team.name} has already escaped and watches from the rescue craft.`);
      this.advanceToNextTeam();
      return;
    }

    // Check if team has 0 energy -> Exhaustion State
    if (team.energy <= 0) {
      this.showExhaustedCard();
      return;
    }

    // Check if team is ready to trigger Final Escape Challenge
    const readyBlueprint = this.getReadyBlueprint(team);
    if (readyBlueprint || this.timerSeconds <= 2 * 60) {
      this.triggerFinalEscapeChallenge(readyBlueprint);
      return;
    }

    // Check for occasional Island Event (every ~5-6 turns across all teams, max 3-4 per game)
    if (this.shouldTriggerEvent()) {
      this.triggerIslandEvent();
      return;
    }

    // Check for occasional Branching Dilemma Choice (every ~4-5 turns, max 4-5 per game)
    if (this.shouldTriggerChoice()) {
      this.triggerBranchingChoice();
      return;
    }

    // Standard English Challenge Turn
    this.prepareEnglishChallenge();
  }

  shouldTriggerEvent() {
    return (
      this.eventsEncountered < 4 &&
      this.turnsCount > 2 &&
      this.turnsCount % 5 === 0 &&
      Math.random() > 0.3
    );
  }

  shouldTriggerChoice() {
    return (
      this.dilemmasEncountered < 5 &&
      this.turnsCount > 1 &&
      this.turnsCount % 4 === 0
    );
  }

  advanceToNextTeam() {
    this.currentTeamIndex = (this.currentTeamIndex + 1) % this.teams.length;
    if (this.currentTeamIndex === 0) {
      this.round++;
      this.addChronicleEntry(`━━━━ ROUND ${this.round} BEGUN ━━━━`);
    }

    // Check if all teams have escaped
    const allEscaped = this.teams.every(t => t.escaped);
    if (allEscaped) {
      this.showVictoryScreen();
      return;
    }

    this.saveState();
    this.startTurn();
  }

  // ============================================================
  // ENGLISH CHALLENGE MECHANICS
  // ============================================================
  prepareEnglishChallenge() {
    this.hideAllInteractiveCards();
    const card = document.getElementById("question-card");
    if (card) card.classList.remove("hidden");

    // Select unused question
    let availableQuestions = ENGLISH_QUESTIONS.filter(q => !this.usedQuestionIds.has(q.id));
    if (availableQuestions.length === 0) {
      this.usedQuestionIds.clear(); // Reset if all used
      availableQuestions = ENGLISH_QUESTIONS;
    }

    // Select random question
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    this.currentQuestion = availableQuestions[randomIndex];
    this.usedQuestionIds.add(this.currentQuestion.id);

    // Update Question UI
    const catPill = document.getElementById("question-category-pill");
    const countPill = document.getElementById("question-counter-pill");
    const promptText = document.getElementById("question-prompt-text");
    const explanationBox = document.getElementById("explanation-box");
    const continueRow = document.getElementById("turn-continue-row");

    if (catPill) catPill.textContent = `${this.currentQuestion.category} • ${this.currentQuestion.level}`;
    if (countPill) countPill.textContent = `Challenge #${this.turnsCount}`;
    if (promptText) promptText.textContent = this.currentQuestion.question;
    if (explanationBox) explanationBox.classList.add("hidden");
    if (continueRow) continueRow.classList.add("hidden");

    // Render Options
    this.currentQuestion.options.forEach((optText, idx) => {
      const btn = document.getElementById(`opt-${idx}`);
      const textEl = document.getElementById(`opt-text-${idx}`);
      if (btn && textEl) {
        textEl.textContent = optText;
        btn.className = "option-btn";
        btn.disabled = false;
      }
    });

    // Update Story Narrative Snippet
    this.updateStoryNarrative();
  }

  selectOption(index) {
    if (this.verdictGiven) return;
    this.selectedOptionIndex = index;

    if (this.soundEngine) this.soundEngine.playChoice();

    document.querySelectorAll(".option-btn").forEach((btn, idx) => {
      btn.classList.toggle("selected", idx === index);
    });
  }

  handleTeacherVerdict(isCorrect) {
    if (this.verdictGiven || !this.currentQuestion) return;
    this.verdictGiven = true;
    const team = this.getActiveTeam();

    const explanationBox = document.getElementById("explanation-box");
    const expBadge = document.getElementById("explanation-badge");
    const expText = document.getElementById("explanation-text");
    const expItem = document.getElementById("explanation-item-preview");
    const continueRow = document.getElementById("turn-continue-row");
    const nextBtnLabel = document.getElementById("btn-next-step-label");

    // Highlight correct & wrong options
    document.querySelectorAll(".option-btn").forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === this.currentQuestion.correctIndex) {
        btn.classList.add("correct-highlight");
      } else if (idx === this.selectedOptionIndex && !isCorrect) {
        btn.classList.add("wrong-highlight");
      }
    });

    if (explanationBox) {
      explanationBox.classList.remove("hidden");
      explanationBox.classList.toggle("wrong", !isCorrect);
    }
    if (expText) expText.textContent = this.currentQuestion.explanation;

    if (isCorrect) {
      // 🎉 CORRECT VERDICT
      if (this.soundEngine) this.soundEngine.playCorrect();
      team.correctAnswers++;
      if (expBadge) expBadge.textContent = "🎉 CORRECT!";

      // Reward an important item
      const rewardItemKey = this.determineRewardItem(team);
      if (rewardItemKey) {
        this.grantItemToTeam(team, rewardItemKey, false);
        const itemInfo = GAME_ITEMS[rewardItemKey] || { name: rewardItemKey, icon: "🎒" };
        if (expItem) expItem.textContent = `🎒 ITEM FOUND: ${itemInfo.icon} ${itemInfo.name}!`;
        this.addChronicleEntry(`🎉 ${team.emoji} ${team.name} answered correctly and found ${itemInfo.icon} ${itemInfo.name}!`);
      } else {
        if (expItem) expItem.textContent = "✨ Area successfully mapped!";
        this.addChronicleEntry(`🎉 ${team.emoji} ${team.name} answered correctly!`);
      }

      // Unlock new location based on exploration
      this.unlockNextLocation(team);

      if (nextBtnLabel) nextBtnLabel.textContent = "COLLECT REWARD & CONTINUE";
    } else {
      // ❌ INCORRECT VERDICT
      if (this.soundEngine) this.soundEngine.playWrong();
      if (expBadge) expBadge.textContent = "❌ INCORRECT";
      if (expItem) expItem.textContent = "⚠️ No supplies found this turn.";

      // Mild Consequence: 40% chance of losing 1 energy if energy > 1, else time lost
      if (team.energy > 1 && Math.random() < 0.4) {
        team.energy--;
        if (this.soundEngine) this.soundEngine.playHeartChange(false);
        this.addChronicleEntry(`❌ ${team.emoji} ${team.name} was incorrect. Searching in the rough terrain cost 1 ❤️!`);
      } else {
        this.addChronicleEntry(`❌ ${team.emoji} ${team.name} was incorrect. Time was lost as dusk approached.`);
      }

      if (nextBtnLabel) nextBtnLabel.textContent = "CONTINUE ADVENTURE";
    }

    if (continueRow) continueRow.classList.remove("hidden");
    this.updateActiveTeamBanner();
    this.updateAllTeamsPanel();
    this.updateBlueprintsPanel();
    this.saveState();
  }

  // ============================================================
  // ITEM & BLUEPRINT SYSTEM
  // ============================================================
  determineRewardItem(team) {
    // Priority: Items needed for incomplete blueprints
    const boatMissing = ["wood", "rope", "fuel", "tool"].filter(i => !team.inventory.includes(i));
    const radioMissing = ["radio", "battery", "tool"].filter(i => !team.inventory.includes(i));
    const heliMissing = ["map", "battery", "fire"].filter(i => !team.inventory.includes(i));

    // Combine missing essential items
    const missingPool = [...new Set([...boatMissing, ...radioMissing, ...heliMissing])];

    if (missingPool.length > 0) {
      // Pick one needed item
      return missingPool[Math.floor(Math.random() * missingPool.length)];
    }

    // Fallback: utility items
    const fallbacks = ["water", "food", "flashlight", "key", "compass", "hook", "toolbox"];
    const uncollected = fallbacks.filter(i => !team.inventory.includes(i));
    if (uncollected.length > 0) {
      return uncollected[Math.floor(Math.random() * uncollected.length)];
    }

    return "food";
  }

  grantItemToTeam(team, itemKey, showModal = true) {
    if (!GAME_ITEMS[itemKey]) return;

    // Avoid redundant duplicates unless consumable
    if (["water", "food"].includes(itemKey)) {
      team.energy = Math.min(3, team.energy + 1);
      if (this.soundEngine) this.soundEngine.playHeartChange(true);
    } else {
      if (!team.inventory.includes(itemKey)) {
        team.inventory.push(itemKey);
      }
    }

    if (showModal) {
      this.showRewardModal(itemKey, team);
    }
  }

  showRewardModal(itemKey, team) {
    const item = GAME_ITEMS[itemKey];
    if (!item) return;

    if (this.soundEngine) this.soundEngine.playItemFound();

    this.hideAllInteractiveCards();
    const card = document.getElementById("reward-card");
    if (!card) return;

    document.getElementById("reward-icon-huge").textContent = item.icon;
    document.getElementById("reward-item-name").textContent = item.name.toUpperCase();
    document.getElementById("reward-item-utility").textContent = `"${item.description}"`;
    document.getElementById("reward-target-team").innerHTML = `Added to ${team.emoji} <strong>${team.name}'S INVENTORY</strong>`;

    card.classList.remove("hidden");
  }

  getReadyBlueprint(team) {
    // Check Boat
    if (ESCAPE_BLUEPRINTS.boat.requiredItems.every(i => team.inventory.includes(i))) {
      return ESCAPE_BLUEPRINTS.boat;
    }
    // Check Radio
    if (ESCAPE_BLUEPRINTS.radio_rescue.requiredItems.every(i => team.inventory.includes(i))) {
      return ESCAPE_BLUEPRINTS.radio_rescue;
    }
    // Check Helicopter
    if (ESCAPE_BLUEPRINTS.helicopter.requiredItems.every(i => team.inventory.includes(i))) {
      return ESCAPE_BLUEPRINTS.helicopter;
    }
    return null;
  }

  // ============================================================
  // BRANCHING CHOICES & ISLAND EVENTS
  // ============================================================
  triggerBranchingChoice() {
    this.dilemmasEncountered++;
    this.hideAllInteractiveCards();

    const choice = BRANCHING_CHOICES[Math.floor(Math.random() * BRANCHING_CHOICES.length)];
    this.activeDilemma = choice;

    const card = document.getElementById("choice-card");
    if (!card) return;

    document.getElementById("choice-title").textContent = choice.title;
    document.getElementById("choice-prompt-text").textContent = choice.text;
    document.getElementById("choice-btn-a-title").textContent = choice.optionA.label;
    document.getElementById("choice-btn-a-desc").textContent = "Tactical decision";
    document.getElementById("choice-btn-b-title").textContent = choice.optionB.label;
    document.getElementById("choice-btn-b-desc").textContent = "Alternative route";

    const resultBox = document.getElementById("choice-result-box");
    if (resultBox) resultBox.classList.add("hidden");
    const optionsRow = document.getElementById("choice-options-row");
    if (optionsRow) optionsRow.classList.remove("hidden");

    card.classList.remove("hidden");
    this.addChronicleEntry(`🔀 Decision moment for ${this.getActiveTeam().emoji} ${this.getActiveTeam().name}: ${choice.title}`);
  }

  resolveChoice(optionLetter) {
    if (!this.activeDilemma) return;
    const team = this.getActiveTeam();
    const opt = optionLetter === "A" ? this.activeDilemma.optionA : this.activeDilemma.optionB;

    if (this.soundEngine) this.soundEngine.playChoice();

    // Apply consequences
    if (opt.rewardItem) {
      this.grantItemToTeam(team, opt.rewardItem, false);
    }
    if (opt.energyDelta) {
      team.energy = Math.max(0, Math.min(3, team.energy + opt.energyDelta));
      if (this.soundEngine) this.soundEngine.playHeartChange(opt.energyDelta > 0);
    }
    if (opt.unlockLocation && !team.exploredLocations.includes(opt.unlockLocation)) {
      team.exploredLocations.push(opt.unlockLocation);
    }

    const optionsRow = document.getElementById("choice-options-row");
    const resultBox = document.getElementById("choice-result-box");
    const resultText = document.getElementById("choice-result-text");

    if (optionsRow) optionsRow.classList.add("hidden");
    if (resultBox) resultBox.classList.remove("hidden");
    if (resultText) resultText.textContent = opt.resultText;

    this.addChronicleEntry(`🔀 ${team.emoji} ${team.name} chose ${opt.label} -> ${opt.resultText}`);
    this.updateActiveTeamBanner();
    this.updateAllTeamsPanel();
    this.updateInventoryPanel();
    this.updateBlueprintsPanel();
    this.saveState();
  }

  triggerIslandEvent() {
    this.eventsEncountered++;
    this.hideAllInteractiveCards();

    const eventObj = ISLAND_EVENTS[Math.floor(Math.random() * ISLAND_EVENTS.length)];
    this.activeEvent = eventObj;

    if (this.soundEngine) this.soundEngine.playEventAlert();

    const card = document.getElementById("event-card");
    if (!card) return;

    document.getElementById("event-visual-icon").textContent = eventObj.icon;
    document.getElementById("event-title").textContent = eventObj.title;
    document.getElementById("event-text").textContent = eventObj.text;
    document.getElementById("btn-event-a-text").textContent = eventObj.optionA.label;
    document.getElementById("btn-event-b-text").textContent = eventObj.optionB.label;

    const outcomeBox = document.getElementById("event-outcome-box");
    if (outcomeBox) outcomeBox.classList.add("hidden");
    const choicesRow = document.getElementById("event-choices-row");
    if (choicesRow) choicesRow.classList.remove("hidden");

    card.classList.remove("hidden");
    this.addChronicleEntry(`⚠️ Hazard strikes! ${eventObj.title}`);
  }

  resolveEvent(optionLetter) {
    if (!this.activeEvent) return;
    const team = this.getActiveTeam();
    const opt = optionLetter === "A" ? this.activeEvent.optionA : this.activeEvent.optionB;

    if (this.soundEngine) this.soundEngine.playChoice();

    if (opt.rewardItem) {
      this.grantItemToTeam(team, opt.rewardItem, false);
    }
    if (opt.energyDelta) {
      team.energy = Math.max(0, Math.min(3, team.energy + opt.energyDelta));
      if (this.soundEngine) this.soundEngine.playHeartChange(opt.energyDelta > 0);
    }

    const choicesRow = document.getElementById("event-choices-row");
    const outcomeBox = document.getElementById("event-outcome-box");
    const outcomeText = document.getElementById("event-outcome-text");

    if (choicesRow) choicesRow.classList.add("hidden");
    if (outcomeBox) outcomeBox.classList.remove("hidden");
    if (outcomeText) outcomeText.textContent = opt.outcome;

    this.addChronicleEntry(`⚠️ ${team.emoji} ${team.name} resolved hazard -> ${opt.outcome}`);
    this.updateActiveTeamBanner();
    this.updateAllTeamsPanel();
    this.saveState();
  }

  // ============================================================
  // EXHAUSTION & RECOVERY
  // ============================================================
  showExhaustedCard() {
    this.hideAllInteractiveCards();
    const card = document.getElementById("exhausted-card");
    if (card) card.classList.remove("hidden");
    if (this.soundEngine) this.soundEngine.playHeartChange(false);
  }

  handleExhaustedRest() {
    const team = this.getActiveTeam();
    team.energy = 1;
    if (this.soundEngine) this.soundEngine.playHeartChange(true);
    this.addChronicleEntry(`⛺ ${team.emoji} ${team.name} rested for a turn and recovered 1 ❤️.`);
    this.advanceToNextTeam();
  }

  handleExhaustedRiddle() {
    const team = this.getActiveTeam();
    team.energy = 1;
    if (this.soundEngine) this.soundEngine.playHeartChange(true);
    this.addChronicleEntry(`🧩 ${team.emoji} ${team.name} solved a survival riddle and recovered 1 ❤️!`);
    this.prepareEnglishChallenge();
  }

  // ============================================================
  // FINAL ESCAPE STAGE & VICTORY
  // ============================================================
  triggerFinalEscapeChallenge(blueprint) {
    this.hideAllInteractiveCards();
    const card = document.getElementById("escape-challenge-card");
    if (!card) return;

    const team = this.getActiveTeam();
    const challenge = FINAL_ESCAPE_CHALLENGES[Math.floor(Math.random() * FINAL_ESCAPE_CHALLENGES.length)];
    this.activeFinalChallenge = challenge;

    if (this.soundEngine) this.soundEngine.playEventAlert();

    document.getElementById("escape-challenge-title").textContent = blueprint ? `ESCAPE VIA ${blueprint.name.toUpperCase()}!` : "EMERGENCY EXTRACTION!";
    document.getElementById("escape-challenge-desc").textContent = `You have assembled the gear! Answer the final English grammar challenge to complete your escape!`;
    document.getElementById("final-prompt-text").textContent = challenge.prompt;

    const grid = document.getElementById("final-options-grid");
    if (grid) {
      grid.innerHTML = "";
      challenge.options.forEach((optText, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn";
        btn.innerHTML = `<span class="opt-key">${String.fromCharCode(65 + idx)}</span><span class="opt-text">${optText}</span>`;
        btn.onclick = () => {
          document.querySelectorAll("#final-options-grid .option-btn").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          if (this.soundEngine) this.soundEngine.playChoice();
        };
        grid.appendChild(btn);
      });
    }

    card.classList.remove("hidden");
    this.addChronicleEntry(`🚨 ${team.emoji} ${team.name} has initiated their FINAL ESCAPE CHALLENGE!`);
  }

  handleFinalEscapeVerdict(isSuccess) {
    const team = this.getActiveTeam();
    if (isSuccess) {
      team.escaped = true;
      team.escapeRound = this.round;
      const bp = this.getReadyBlueprint(team);
      team.escapeMethod = bp ? bp.name : "Rescue Helicopter";

      if (!this.escapeRankings.includes(team.id)) {
        this.escapeRankings.push(team.id);
      }

      if (this.soundEngine) this.soundEngine.playVictory();
      this.triggerConfetti();

      this.addChronicleEntry(`🏆 🎉 ${team.emoji} ${team.name} HAS SUCCESSFULLY ESCAPED THE ISLAND via ${team.escapeMethod}!`);

      // Check if all teams escaped
      const allEscaped = this.teams.every(t => t.escaped);
      if (allEscaped) {
        setTimeout(() => this.showVictoryScreen(), 2000);
      } else {
        setTimeout(() => this.advanceToNextTeam(), 1800);
      }
    } else {
      if (this.soundEngine) this.soundEngine.playWrong();
      this.addChronicleEntry(`❌ ${team.emoji} ${team.name}'s launch failed this round. Regrouping for next turn!`);
      this.advanceToNextTeam();
    }
  }

  showVictoryScreen() {
    this.pauseTimer();
    this.showScreen("victory");

    if (this.soundEngine) this.soundEngine.playVictory();
    this.triggerConfetti();

    this.renderPodium();
    this.renderResultsTable();
    this.saveState();
  }

  renderPodium() {
    const container = document.getElementById("podium-container");
    if (!container) return;
    container.innerHTML = "";

    // Sort teams by: 1) Escaped, 2) Escape order ranking, 3) Correct answers, 4) Items, 5) Energy
    const sorted = [...this.teams].sort((a, b) => {
      if (a.escaped && !b.escaped) return -1;
      if (!a.escaped && b.escaped) return 1;
      const rankA = this.escapeRankings.indexOf(a.id);
      const rankB = this.escapeRankings.indexOf(b.id);
      if (rankA !== -1 && rankB !== -1) return rankA - rankB;
      if (b.correctAnswers !== a.correctAnswers) return b.correctAnswers - a.correctAnswers;
      return (b.inventory.length + b.energy) - (a.inventory.length + a.energy);
    });

    const top3 = sorted.slice(0, 3);
    const medals = ["🥇", "🥈", "🥉"];

    top3.forEach((team, idx) => {
      const step = document.createElement("div");
      step.className = `podium-step rank-${idx + 1}`;
      step.innerHTML = `
        <div class="podium-medal">${medals[idx]}</div>
        <div class="podium-team-name">${team.emoji} ${team.name}</div>
        <div class="podium-stats">${team.escaped ? `Escaped (Rd ${team.escapeRound})` : 'Survivor'}</div>
        <div class="podium-stats">${team.correctAnswers} Correct • ${team.inventory.length} Items</div>
      `;
      container.appendChild(step);
    });
  }

  renderResultsTable() {
    const tbody = document.getElementById("results-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    const sorted = [...this.teams].sort((a, b) => {
      if (a.escaped && !b.escaped) return -1;
      if (!a.escaped && b.escaped) return 1;
      const rankA = this.escapeRankings.indexOf(a.id);
      const rankB = this.escapeRankings.indexOf(b.id);
      if (rankA !== -1 && rankB !== -1) return rankA - rankB;
      return b.correctAnswers - a.correctAnswers;
    });

    sorted.forEach((team, idx) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>#${idx + 1}</strong></td>
        <td>${team.emoji} <strong>${team.name}</strong></td>
        <td><span style="color: ${team.escaped ? 'var(--color-gold)' : 'var(--text-secondary)'}">${team.escaped ? '✅ Escaped' : '⏳ Rescued'}</span></td>
        <td>${team.escapeMethod || 'Helicopter Winch'}</td>
        <td>${team.correctAnswers}</td>
        <td>${team.inventory.map(i => GAME_ITEMS[i] ? GAME_ITEMS[i].icon : i).join(' ') || 'None'}</td>
        <td>${'❤️'.repeat(team.energy)}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // ============================================================
  // MAP VISUALIZATION & PATH UNLOCKS
  // ============================================================
  unlockNextLocation(team) {
    const locData = ISLAND_LOCATIONS[this.currentLocation];
    if (locData && locData.unlocks) {
      locData.unlocks.forEach(nextLoc => {
        if (!team.exploredLocations.includes(nextLoc)) {
          team.exploredLocations.push(nextLoc);
          const nextData = ISLAND_LOCATIONS[nextLoc];
          if (nextData) {
            this.addChronicleEntry(`🟢 Unlocked new destination: ${nextData.icon} ${nextData.name}!`);
          }
        }
      });
    }
  }

  updateMapVisuals() {
    const team = this.getActiveTeam();
    if (!team) return;

    Object.keys(ISLAND_LOCATIONS).forEach(locKey => {
      const pinEl = document.getElementById(`pin-${locKey}`);
      if (!pinEl) return;

      const locData = ISLAND_LOCATIONS[locKey];
      const isExplored = team.exploredLocations.includes(locKey);
      const isCurrent = this.currentLocation === locKey;

      // Check item locks
      let isUnlocked = isExplored || locKey === "beach";
      if (locData.requiredItems && locData.requiredItems.length > 0) {
        const hasReq = locData.requiredItems.some(i => team.inventory.includes(i));
        const hasAlt = locData.altRequiredItems ? locData.altRequiredItems.some(i => team.inventory.includes(i)) : false;
        isUnlocked = isUnlocked && (hasReq || hasAlt);
      }

      pinEl.classList.remove("available", "locked", "explored", "current");
      if (isCurrent) {
        pinEl.classList.add("current");
      } else if (isUnlocked) {
        pinEl.classList.add("available");
      } else {
        pinEl.classList.add("locked");
      }
    });
  }

  selectLocation(locKey) {
    const team = this.getActiveTeam();
    if (!team) return;

    const locData = ISLAND_LOCATIONS[locKey];
    if (!locData) return;

    // Verify item requirements
    if (locData.requiredItems && locData.requiredItems.length > 0) {
      const hasReq = locData.requiredItems.some(i => team.inventory.includes(i));
      const hasAlt = locData.altRequiredItems ? locData.altRequiredItems.some(i => team.inventory.includes(i)) : false;
      if (!hasReq && !hasAlt) {
        const missing = locData.requiredItems.map(i => GAME_ITEMS[i] ? GAME_ITEMS[i].name : i).join(" or ");
        alert(`🔒 Location Locked!\nYou need: ${missing} to explore the ${locData.name}.`);
        return;
      }
    }

    this.currentLocation = locKey;
    if (!team.exploredLocations.includes(locKey)) {
      team.exploredLocations.push(locKey);
    }

    if (this.soundEngine) this.soundEngine.playChoice();
    this.updateMapVisuals();
    this.updateStoryNarrative();
    this.addChronicleEntry(`📍 ${team.emoji} ${team.name} navigated to ${locData.icon} ${locData.name}.`);
  }

  updateStoryNarrative() {
    const locData = ISLAND_LOCATIONS[this.currentLocation] || ISLAND_LOCATIONS.beach;
    const iconEl = document.getElementById("story-loc-icon");
    const nameEl = document.getElementById("story-loc-name");
    const textEl = document.getElementById("story-text");

    if (iconEl) iconEl.textContent = locData.icon;
    if (nameEl) nameEl.textContent = locData.name.toUpperCase();
    if (textEl) textEl.textContent = locData.storySnippet || locData.description;
  }

  // ============================================================
  // SIDEBAR & UI UPDATES
  // ============================================================
  updateActiveTeamBanner() {
    const team = this.getActiveTeam();
    if (!team) return;

    const avatar = document.getElementById("active-team-avatar");
    const roundInd = document.getElementById("turn-round-indicator");
    const nameEl = document.getElementById("active-team-name");
    const heartsRow = document.getElementById("active-team-hearts");
    const quickItems = document.getElementById("quick-items-chips");

    if (avatar) avatar.textContent = team.emoji;
    if (roundInd) roundInd.textContent = `ROUND ${this.round} • TURN ${this.currentTeamIndex + 1} OF ${this.teams.length}`;
    if (nameEl) nameEl.textContent = `${team.emoji} ${team.name}'S TURN`;

    if (heartsRow) {
      heartsRow.innerHTML = "";
      for (let i = 0; i < 3; i++) {
        const span = document.createElement("span");
        span.className = `heart ${i < team.energy ? "full" : "empty"}`;
        span.textContent = "❤️";
        heartsRow.appendChild(span);
      }
    }

    if (quickItems) {
      quickItems.innerHTML = "";
      if (team.inventory.length === 0) {
        quickItems.innerHTML = `<span class="empty-inventory-tag">Empty Backpack</span>`;
      } else {
        team.inventory.forEach(itemKey => {
          const item = GAME_ITEMS[itemKey];
          if (item) {
            const badge = document.createElement("span");
            badge.className = "quick-item-badge";
            badge.innerHTML = `${item.icon} ${item.name}`;
            quickItems.appendChild(badge);
          }
        });
      }
    }
  }

  updateAllTeamsPanel() {
    const container = document.getElementById("teams-status-list");
    if (!container) return;
    container.innerHTML = "";

    this.teams.forEach((team, idx) => {
      const row = document.createElement("div");
      row.className = `team-status-row ${idx === this.currentTeamIndex ? 'active-turn' : ''} ${team.escaped ? 'escaped' : ''}`;
      row.innerHTML = `
        <div class="team-status-left">
          <span class="team-status-avatar">${team.emoji}</span>
          <span class="team-status-name">${team.name}</span>
        </div>
        <div class="team-status-stats">
          <div class="team-hearts-mini">
            ${'❤️'.repeat(team.energy)}${'🖤'.repeat(3 - team.energy)}
          </div>
          <span style="font-weight:700; color:var(--color-gold);">${team.inventory.length} 🎒</span>
        </div>
      `;
      container.appendChild(row);
    });
  }

  updateInventoryPanel() {
    const team = this.getActiveTeam();
    const container = document.getElementById("inventory-grid");
    const titleEl = document.getElementById("vault-panel-title");
    if (!container || !team) return;

    if (titleEl) titleEl.textContent = `${team.name}'S VAULT`;
    container.innerHTML = "";

    const allKeys = Object.keys(GAME_ITEMS);
    allKeys.forEach(key => {
      const item = GAME_ITEMS[key];
      const hasItem = team.inventory.includes(key);

      const slot = document.createElement("div");
      slot.className = `inv-slot ${hasItem ? 'filled' : 'empty'}`;
      slot.innerHTML = `
        <span>${item.icon}</span>
        <div class="inv-slot-tooltip"><strong>${item.name}</strong><br>${item.description}</div>
      `;
      container.appendChild(slot);
    });
  }

  updateBlueprintsPanel() {
    const team = this.getActiveTeam();
    if (!team) return;

    // Boat
    const boatCount = ESCAPE_BLUEPRINTS.boat.requiredItems.filter(i => team.inventory.includes(i)).length;
    const boatCountEl = document.getElementById("bp-boat-count");
    if (boatCountEl) boatCountEl.textContent = `${boatCount}/4`;
    document.querySelectorAll("#bp-boat-icons .bp-item-chip").forEach(chip => {
      const itemKey = chip.dataset.item;
      chip.classList.toggle("acquired", team.inventory.includes(itemKey));
    });
    document.getElementById("bp-boat")?.classList.toggle("ready", boatCount === 4);

    // Radio
    const radioCount = ESCAPE_BLUEPRINTS.radio_rescue.requiredItems.filter(i => team.inventory.includes(i)).length;
    const radioCountEl = document.getElementById("bp-radio-count");
    if (radioCountEl) radioCountEl.textContent = `${radioCount}/3`;
    document.querySelectorAll("#bp-radio-icons .bp-item-chip").forEach(chip => {
      const itemKey = chip.dataset.item;
      chip.classList.toggle("acquired", team.inventory.includes(itemKey));
    });
    document.getElementById("bp-radio")?.classList.toggle("ready", radioCount === 3);

    // Helicopter
    const heliCount = ESCAPE_BLUEPRINTS.helicopter.requiredItems.filter(i => team.inventory.includes(i)).length;
    const heliCountEl = document.getElementById("bp-helicopter-count");
    if (heliCountEl) heliCountEl.textContent = `${heliCount}/3`;
    document.querySelectorAll("#bp-helicopter-icons .bp-item-chip").forEach(chip => {
      const itemKey = chip.dataset.item;
      chip.classList.toggle("acquired", team.inventory.includes(itemKey));
    });
    document.getElementById("bp-helicopter")?.classList.toggle("ready", heliCount === 3);
  }

  updateIslandProgress() {
    // Total progress based on time, items collected across teams, locations explored
    const totalItems = this.teams.reduce((acc, t) => acc + t.inventory.length, 0);
    const totalQuestions = this.teams.reduce((acc, t) => acc + t.correctAnswers, 0);
    const escapedCount = this.teams.filter(t => t.escaped).length;

    const baseProgress = Math.min(100, Math.floor(
      (escapedCount * 30) +
      (totalItems * 4) +
      (totalQuestions * 3) +
      ((2100 - this.timerSeconds) / 2100 * 25)
    ));

    const fillEl = document.getElementById("progress-bar-fill");
    const labelEl = document.getElementById("progress-percent-label");
    if (fillEl) fillEl.style.width = `${baseProgress}%`;
    if (labelEl) labelEl.textContent = `${baseProgress}%`;
  }

  addChronicleEntry(msg) {
    const mins = Math.floor(this.timerSeconds / 60);
    const secs = (this.timerSeconds % 60).toString().padStart(2, "0");
    const timeStr = `${mins}:${secs}`;

    this.chronicleLog.unshift({ time: timeStr, text: msg });
    if (this.chronicleLog.length > 50) this.chronicleLog.pop();

    const feed = document.getElementById("chronicle-feed");
    if (feed) {
      const entry = document.createElement("div");
      entry.className = "chronicle-entry";
      entry.innerHTML = `<span class="chronicle-time">[${timeStr}]</span> <span class="chronicle-msg">${msg}</span>`;
      feed.prepend(entry);
    }
  }

  // ============================================================
  // TEACHER CONTROLS & OVERRIDES
  // ============================================================
  toggleTeacherDrawer() {
    this.teacherModeOpen = !this.teacherModeOpen;
    const drawer = document.getElementById("teacher-drawer");
    if (drawer) drawer.classList.toggle("hidden", !this.teacherModeOpen);
  }

  populateTeacherTeamSelector() {
    const select = document.getElementById("td-team-select");
    if (!select) return;
    select.innerHTML = "";
    this.teams.forEach((t, idx) => {
      const opt = document.createElement("option");
      opt.value = idx;
      opt.textContent = `${t.emoji} ${t.name}`;
      select.appendChild(opt);
    });
  }

  // ============================================================
  // SCREEN TRANSITIONS & HELPERS
  // ============================================================
  showScreen(screenName) {
    this.screen = screenName;
    const screenMap = {
      setup: document.getElementById("setup-screen"),
      intro: document.getElementById("intro-screen"),
      game: document.getElementById("game-screen"),
      victory: document.getElementById("victory-screen")
    };

    Object.keys(screenMap).forEach(key => {
      const el = screenMap[key];
      if (!el) return;
      if (key === screenName) {
        el.classList.remove("hidden");
        el.classList.add("active");
        el.style.display = "block";
      } else {
        el.classList.remove("active");
        el.classList.add("hidden");
        el.style.display = "none";
      }
    });

    try {
      window.scrollTo(0, 0);
    } catch (e) {}
  }

  hideAllScreens() {
    document.querySelectorAll(".screen-panel").forEach(p => {
      p.classList.remove("active");
      p.classList.add("hidden");
      p.style.display = "none";
    });
  }

  hideAllInteractiveCards() {
    const ids = ["question-card", "choice-card", "event-card", "reward-card", "exhausted-card", "escape-challenge-card"];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add("hidden");
    });
  }

  updateSoundButtonUI() {
    const btnIcon = document.getElementById("sound-btn-icon");
    if (btnIcon && this.soundEngine) {
      btnIcon.textContent = this.soundEngine.isSoundEnabled() ? "🔊" : "🔇";
    }
  }

  // ============================================================
  // CONFETTI CELEBRATION ENGINE
  // ============================================================
  initConfettiCanvas() {
    this.confettiCanvas = document.getElementById("confetti-canvas");
    if (!this.confettiCanvas || typeof this.confettiCanvas.getContext !== "function") return;
    this.confettiCtx = this.confettiCanvas.getContext("2d");
    this.resizeConfetti();
    window.addEventListener("resize", () => this.resizeConfetti());
  }

  resizeConfetti() {
    if (this.confettiCanvas) {
      this.confettiCanvas.width = window.innerWidth;
      this.confettiCanvas.height = window.innerHeight;
    }
  }

  triggerConfetti() {
    this.confettiActive = true;
    this.confettiParticles = [];
    const colors = ["#10b981", "#fbbf24", "#0ea5e9", "#ef4444", "#a855f7", "#ffffff"];

    for (let i = 0; i < 150; i++) {
      this.confettiParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight - window.innerHeight,
        w: Math.random() * 10 + 6,
        h: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 4 + 3,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8
      });
    }

    const animate = () => {
      if (!this.confettiActive || !this.confettiCtx) return;
      this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);

      this.confettiParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;

        this.confettiCtx.save();
        this.confettiCtx.translate(p.x, p.y);
        this.confettiCtx.rotate((p.rot * Math.PI) / 180);
        this.confettiCtx.fillStyle = p.color;
        this.confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        this.confettiCtx.restore();

        if (p.y > window.innerHeight) {
          p.y = -10;
          p.x = Math.random() * window.innerWidth;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
    setTimeout(() => { this.confettiActive = false; }, 6000);
  }

  // ============================================================
  // EVENT LISTENERS BINDING
  // ============================================================
  setupEventListeners() {
    // 1. Team count buttons
    document.querySelectorAll(".btn-count").forEach(btn => {
      btn.addEventListener("click", () => {
        const count = parseInt(btn.dataset.teams, 10);
        this.setTeamCount(count);
      });
    });

    // 2. Start Adventure CTA (Setup -> Intro)
    const handleStartAdventure = () => {
      this.initializeExpedition();
      this.showScreen("intro");
      if (this.soundEngine) this.soundEngine.playChoice();
    };
    document.getElementById("btn-start-adventure")?.addEventListener("click", handleStartAdventure);
    document.getElementById("btn-start-game")?.addEventListener("click", handleStartAdventure);

    // 3. Saved game actions
    document.getElementById("btn-resume-game")?.addEventListener("click", () => {
      if (this.loadState()) {
        this.showScreen("game");
        this.startTimer();
        this.startTurn();
      }
    });
    document.getElementById("btn-discard-saved")?.addEventListener("click", () => {
      this.clearSavedState();
    });

    // 4. Intro screen actions (Intro -> Game)
    const handleEnterIsland = () => {
      this.showScreen("game");
      this.startTimer();
      this.startTurn();
      if (this.soundEngine) this.soundEngine.playChoice();
    };
    document.getElementById("btn-enter-island")?.addEventListener("click", handleEnterIsland);
    document.getElementById("btn-skip-intro")?.addEventListener("click", handleEnterIsland);

    // 5. Timer Controls
    document.getElementById("timer-pause-btn")?.addEventListener("click", () => this.toggleTimer());
    document.getElementById("timer-minus-btn")?.addEventListener("click", () => this.adjustTimer(-60));
    document.getElementById("timer-plus-btn")?.addEventListener("click", () => this.adjustTimer(60));
    document.getElementById("timer-skip-btn")?.addEventListener("click", () => {
      this.timerSeconds = Math.min(this.timerSeconds, 3 * 60);
      this.updateTimerDisplay();
      this.checkDynamicPacing();
    });

    // 6. Navigation Buttons
    document.getElementById("sound-toggle-btn")?.addEventListener("click", () => {
      if (this.soundEngine) {
        this.soundEngine.toggleSound();
        this.updateSoundButtonUI();
      }
    });

    document.getElementById("teacher-drawer-toggle-btn")?.addEventListener("click", () => this.toggleTeacherDrawer());
    document.getElementById("teacher-drawer-close-btn")?.addEventListener("click", () => this.toggleTeacherDrawer());

    document.getElementById("rules-modal-btn")?.addEventListener("click", () => {
      document.getElementById("rules-modal")?.classList.remove("hidden");
    });
    document.getElementById("rules-modal-close-btn")?.addEventListener("click", () => {
      document.getElementById("rules-modal")?.classList.add("hidden");
    });
    document.getElementById("rules-modal-backdrop")?.addEventListener("click", () => {
      document.getElementById("rules-modal")?.classList.add("hidden");
    });
    document.getElementById("rules-modal-ok-btn")?.addEventListener("click", () => {
      document.getElementById("rules-modal")?.classList.add("hidden");
    });

    document.getElementById("fullscreen-toggle-btn")?.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    document.getElementById("danger-dismiss-btn")?.addEventListener("click", () => {
      document.getElementById("danger-alert-banner")?.classList.add("hidden");
    });

    // 7. Question Options Clicks
    for (let i = 0; i < 4; i++) {
      document.getElementById(`opt-${i}`)?.addEventListener("click", () => this.selectOption(i));
    }

    // 8. Teacher Verdict Controls on Main Screen
    document.getElementById("btn-verdict-correct")?.addEventListener("click", () => this.handleTeacherVerdict(true));
    document.getElementById("btn-verdict-wrong")?.addEventListener("click", () => this.handleTeacherVerdict(false));
    document.getElementById("btn-verdict-skip")?.addEventListener("click", () => this.prepareEnglishChallenge());
    document.getElementById("btn-next-step")?.addEventListener("click", () => this.advanceToNextTeam());

    // 9. Choice Decision Clicks
    document.getElementById("btn-choice-a")?.addEventListener("click", () => this.resolveChoice("A"));
    document.getElementById("btn-choice-b")?.addEventListener("click", () => this.resolveChoice("B"));
    document.getElementById("btn-choice-continue")?.addEventListener("click", () => this.advanceToNextTeam());

    // 10. Island Event Clicks
    document.getElementById("btn-event-a")?.addEventListener("click", () => this.resolveEvent("A"));
    document.getElementById("btn-event-b")?.addEventListener("click", () => this.resolveEvent("B"));
    document.getElementById("btn-event-continue")?.addEventListener("click", () => this.advanceToNextTeam());

    // 11. Reward Collect Click
    document.getElementById("btn-reward-collect")?.addEventListener("click", () => this.advanceToNextTeam());

    // 12. Exhaustion Clicks
    document.getElementById("btn-exhausted-rest")?.addEventListener("click", () => this.handleExhaustedRest());
    document.getElementById("btn-exhausted-riddle")?.addEventListener("click", () => this.handleExhaustedRiddle());

    // 13. Final Escape Teacher Buttons
    document.getElementById("btn-final-correct")?.addEventListener("click", () => this.handleFinalEscapeVerdict(true));
    document.getElementById("btn-final-wrong")?.addEventListener("click", () => this.handleFinalEscapeVerdict(false));

    // 14. Victory Screen Buttons
    document.getElementById("btn-play-again")?.addEventListener("click", () => {
      this.clearSavedState();
      window.location.reload();
    });
    document.getElementById("btn-view-chronicle")?.addEventListener("click", () => {
      alert("EXPEDITION CHRONICLE LOG:\n\n" + this.chronicleLog.map(e => `[${e.time}] ${e.text}`).join("\n"));
    });

    // 15. Map Pins Click Interaction
    document.querySelectorAll(".map-pin").forEach(pin => {
      pin.addEventListener("click", () => {
        const locKey = pin.dataset.location;
        if (locKey) this.selectLocation(locKey);
      });
    });

    // 16. Teacher Drawer Buttons
    document.getElementById("td-btn-correct")?.addEventListener("click", () => this.handleTeacherVerdict(true));
    document.getElementById("td-btn-wrong")?.addEventListener("click", () => this.handleTeacherVerdict(false));
    document.getElementById("td-btn-skip-q")?.addEventListener("click", () => this.prepareEnglishChallenge());
    document.getElementById("td-btn-timer-toggle")?.addEventListener("click", () => this.toggleTimer());
    document.getElementById("td-btn-plus-2m")?.addEventListener("click", () => this.adjustTimer(120));
    document.getElementById("td-btn-minus-2m")?.addEventListener("click", () => this.adjustTimer(-120));
    document.getElementById("td-btn-trigger-endgame")?.addEventListener("click", () => {
      this.timerSeconds = 90;
      this.updateTimerDisplay();
      this.checkDynamicPacing();
    });

    document.getElementById("td-btn-add-energy")?.addEventListener("click", () => {
      const select = document.getElementById("td-team-select");
      if (select && this.teams[select.value]) {
        this.teams[select.value].energy = Math.min(3, this.teams[select.value].energy + 1);
        this.updateActiveTeamBanner();
        this.updateAllTeamsPanel();
      }
    });

    document.getElementById("td-btn-sub-energy")?.addEventListener("click", () => {
      const select = document.getElementById("td-team-select");
      if (select && this.teams[select.value]) {
        this.teams[select.value].energy = Math.max(0, this.teams[select.value].energy - 1);
        this.updateActiveTeamBanner();
        this.updateAllTeamsPanel();
      }
    });

    document.getElementById("td-btn-full-energy")?.addEventListener("click", () => {
      const select = document.getElementById("td-team-select");
      if (select && this.teams[select.value]) {
        this.teams[select.value].energy = 3;
        this.updateActiveTeamBanner();
        this.updateAllTeamsPanel();
      }
    });

    document.getElementById("td-btn-grant-item")?.addEventListener("click", () => {
      const teamSelect = document.getElementById("td-team-select");
      const itemSelect = document.getElementById("td-item-select");
      if (teamSelect && itemSelect && this.teams[teamSelect.value]) {
        const itemKey = itemSelect.value;
        this.grantItemToTeam(this.teams[teamSelect.value], itemKey, true);
        this.updateInventoryPanel();
        this.updateBlueprintsPanel();
        this.updateMapVisuals();
      }
    });

    document.getElementById("td-btn-skip-turn")?.addEventListener("click", () => this.advanceToNextTeam());
    document.getElementById("td-btn-save-game")?.addEventListener("click", () => {
      this.saveState();
      alert("💾 Game state successfully saved to browser localStorage!");
    });
    document.getElementById("td-btn-reset-game")?.addEventListener("click", () => {
      if (confirm("Reset game and return to Expedition Setup?")) {
        this.clearSavedState();
        window.location.reload();
      }
    });

    // 17. Keyboard Shortcuts (T, M, F, Space, 1-4)
    window.addEventListener("keydown", (e) => {
      // Don't intercept typing in text inputs
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;

      const key = e.key.toLowerCase();
      if (key === "t") {
        e.preventDefault();
        this.toggleTeacherDrawer();
      } else if (key === "m") {
        e.preventDefault();
        if (this.soundEngine) {
          this.soundEngine.toggleSound();
          this.updateSoundButtonUI();
        }
      } else if (key === "f") {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      } else if (e.code === "Space") {
        if (this.screen === "intro") {
          e.preventDefault();
          document.getElementById("btn-enter-island")?.click();
        } else if (this.screen === "game") {
          // If continue button visible, click it
          const continueRow = document.getElementById("turn-continue-row");
          if (continueRow && !continueRow.classList.contains("hidden")) {
            e.preventDefault();
            document.getElementById("btn-next-step")?.click();
          }
        }
      } else if (["1", "2", "3", "4"].includes(e.key) && this.screen === "game") {
        const idx = parseInt(e.key, 10) - 1;
        this.selectOption(idx);
      }
    });
  }
}

// Robust bootloader ensuring immediate instantiation across all document ready states
function bootIslandGame() {
  if (typeof window !== "undefined" && !window.game) {
    try {
      window.game = new IslandGame();
    } catch (err) {
      console.error("Critical IslandGame boot error:", err);
    }
  }
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootIslandGame);
  } else {
    // DOM is already parsed / interactive / complete
    bootIslandGame();
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { IslandGame, DEFAULT_TEAMS, STORAGE_KEY };
}
