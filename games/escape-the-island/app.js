/**
 * ESCAPE THE ISLAND - Core Game Engine & Application Logic
 * Immersive Classroom Adventure for 7th & 8th Grade ESL/EFL Students
 */

class EscapeIslandGame {
  constructor() {
    // Game Settings & State
    this.currentScreen = "setup"; // 'setup', 'intro', 'game', 'victory'
    this.gradeFilter = "all"; // 'all', '7', '8'
    this.diffFilter = "all"; // 'all', 'A2', 'B1'
    this.questionsPerMission = 3;
    this.teamCount = 1; // 1 (whole class) or 2-4
    this.teams = [];
    this.currentTeamIndex = 0;

    // Mission & Challenge State
    this.currentMissionIndex = 0; // 0 to 5 (Missions 1 to 6)
    this.missionQuestionIndex = 0; // 0 to questionsPerMission - 1
    this.totalCorrectAnswers = 0;
    this.totalQuestionsAttempted = 0;
    this.lives = 3; // ❤️❤️❤️
    this.inventory = new Set(); // collected item IDs

    // Question Pool & Active Question
    this.usedQuestionIds = new Set();
    this.currentQuestion = null;
    this.selectedOptionIndex = null;
    this.verdictGiven = false;

    // Story Intro
    this.introStepIndex = 0;

    // Audio & Confetti
    this.soundEngine = typeof audio !== "undefined" ? audio : null;
    this.confettiActive = false;
    this.confettiParticles = [];

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderSetupTeams();
    this.initConfetti();
    this.renderMapNodes();
  }

  // ============================================================
  // EVENT LISTENERS SETUP
  // ============================================================
  setupEventListeners() {
    // Hub Navigation & Audio
    const soundBtn = document.getElementById("sound-toggle-btn");
    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        const enabled = this.soundEngine ? this.soundEngine.toggleSound() : true;
        const icon = document.getElementById("sound-btn-icon");
        if (icon) icon.textContent = enabled ? "🔊" : "🔇";
      });
    }

    // Fullscreen Toggle
    const fullBtn = document.getElementById("fullscreen-btn");
    if (fullBtn) {
      fullBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    // Teacher Panel Modal
    const teacherBtn = document.getElementById("teacher-btn");
    const teacherModal = document.getElementById("teacher-modal");
    const teacherClose = document.getElementById("btn-teacher-close");
    if (teacherBtn && teacherModal) {
      teacherBtn.addEventListener("click", () => {
        teacherModal.classList.remove("hidden");
        if (this.soundEngine) this.soundEngine.playClick();
      });
    }
    if (teacherClose && teacherModal) {
      teacherClose.addEventListener("click", () => {
        teacherModal.classList.add("hidden");
      });
    }

    // Rules Modal
    const rulesBtn = document.getElementById("rules-btn");
    const rulesModal = document.getElementById("rules-modal");
    const rulesClose = document.getElementById("btn-rules-close");
    if (rulesBtn && rulesModal) {
      rulesBtn.addEventListener("click", () => {
        rulesModal.classList.remove("hidden");
        if (this.soundEngine) this.soundEngine.playClick();
      });
    }
    if (rulesClose && rulesModal) {
      rulesClose.addEventListener("click", () => {
        rulesModal.classList.add("hidden");
      });
    }

    // Setup: Team Count buttons
    document.querySelectorAll("#team-count-buttons .btn-count").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#team-count-buttons .btn-count").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.teamCount = parseInt(btn.dataset.teams, 10) || 1;
        this.renderSetupTeams();
        if (this.soundEngine) this.soundEngine.playClick();
      });
    });

    // Setup: Grade toggle buttons
    document.querySelectorAll(".grade-toggle-group .btn-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".grade-toggle-group .btn-toggle").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.gradeFilter = btn.dataset.grade || "all";
        if (this.soundEngine) this.soundEngine.playClick();
      });
    });

    // Setup: Mission length toggle buttons
    document.querySelectorAll(".mission-len-group .btn-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".mission-len-group .btn-toggle").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.questionsPerMission = parseInt(btn.dataset.len, 10) || 3;
        if (this.soundEngine) this.soundEngine.playClick();
      });
    });

    // Setup: Start Expedition Button
    const startExpBtn = document.getElementById("btn-start-expedition");
    if (startExpBtn) {
      startExpBtn.addEventListener("click", () => {
        this.startStoryIntro();
      });
    }

    // Story Intro: Next & Skip Buttons
    const introNextBtn = document.getElementById("btn-intro-next");
    if (introNextBtn) {
      introNextBtn.addEventListener("click", () => {
        this.advanceStoryIntro();
      });
    }
    const introSkipBtn = document.getElementById("btn-skip-intro");
    if (introSkipBtn) {
      introSkipBtn.addEventListener("click", () => {
        this.finishStoryIntroAndStartGame();
      });
    }

    // Mission Briefing: Start Mission Button
    const startMissionBtn = document.getElementById("btn-start-mission");
    if (startMissionBtn) {
      startMissionBtn.addEventListener("click", () => {
        this.beginCurrentMission();
      });
    }

    // Multiple Choice Option Buttons (A, B, C, D)
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`opt-btn-${i}`);
      if (btn) {
        btn.addEventListener("click", () => {
          this.handleOptionClick(i);
        });
      }
    }

    // Question Explanation: Continue Step Button
    const nextStepBtn = document.getElementById("btn-next-step");
    if (nextStepBtn) {
      nextStepBtn.addEventListener("click", () => {
        this.advanceAfterQuestion();
      });
    }

    // Mission Complete: Proceed to Next Mission Button
    const nextMissionBtn = document.getElementById("btn-next-mission");
    if (nextMissionBtn) {
      nextMissionBtn.addEventListener("click", () => {
        this.advanceToNextMission();
      });
    }

    // Game Over / Exhausted: Retry Button
    const retryBtn = document.getElementById("btn-retry-mission");
    if (retryBtn) {
      retryBtn.addEventListener("click", () => {
        this.retryCurrentMission();
      });
    }

    // Victory: Play Again Button
    const playAgainBtn = document.getElementById("btn-play-again");
    if (playAgainBtn) {
      playAgainBtn.addEventListener("click", () => {
        this.resetGameToSetup();
      });
    }

    // Teacher Panel Controls
    document.querySelectorAll("#teacher-grade-toggles .btn-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#teacher-grade-toggles .btn-toggle").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.gradeFilter = btn.dataset.grade || "all";
      });
    });

    document.querySelectorAll("#teacher-diff-toggles .btn-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#teacher-diff-toggles .btn-toggle").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.diffFilter = btn.dataset.diff || "all";
      });
    });

    document.querySelectorAll("#teacher-len-toggles .btn-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#teacher-len-toggles .btn-toggle").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.questionsPerMission = parseInt(btn.dataset.len, 10) || 3;
      });
    });

    // Jump to Mission buttons
    document.querySelectorAll("#jump-missions-grid .btn-jump").forEach(btn => {
      btn.addEventListener("click", () => {
        const m = btn.dataset.mission;
        if (m === "escape") {
          this.currentMissionIndex = 5;
          this.inventory = new Set(["map", "compass", "key", "battery", "radio", "fuel"]);
          this.updateInventoryUI();
          this.switchScreen("victory");
          this.startCinematicEscapeSequence();
        } else {
          const missionNum = parseInt(m, 10) || 1;
          this.currentMissionIndex = missionNum - 1;
          this.missionQuestionIndex = 0;
          this.switchScreen("game");
          this.showMissionBriefing(this.currentMissionIndex);
        }
        if (teacherModal) teacherModal.classList.add("hidden");
      });
    });

    const resetGameBtn = document.getElementById("btn-reset-game");
    if (resetGameBtn) {
      resetGameBtn.addEventListener("click", () => {
        if (teacherModal) teacherModal.classList.add("hidden");
        this.resetGameToSetup();
      });
    }
  }

  // ============================================================
  // SCREEN TRANSITIONS
  // ============================================================
  switchScreen(screenName) {
    this.currentScreen = screenName;
    const screens = ["setup-screen", "intro-screen", "game-screen", "victory-screen"];
    screens.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        if (id === `${screenName}-screen`) {
          el.classList.remove("hidden");
          el.classList.add("active");
        } else {
          el.classList.add("hidden");
          el.classList.remove("active");
        }
      }
    });
  }

  // ============================================================
  // SETUP SCREEN LOGIC
  // ============================================================
  renderSetupTeams() {
    const previewContainer = document.getElementById("teams-list-preview");
    if (!previewContainer) return;
    previewContainer.innerHTML = "";

    const defaultNames = ["TIGERS", "LIONS", "EAGLES", "SHARKS"];
    const emojis = ["🐯", "🦁", "🦅", "🦈"];

    if (this.teamCount === 1) {
      const item = document.createElement("div");
      item.className = "team-preview-item";
      item.innerHTML = `
        <span class="team-preview-emoji">🧭</span>
        <input type="text" class="team-preview-name-input" id="input-team-0" value="CLASS EXPEDITION" maxlength="20" placeholder="Enter Team Name">
      `;
      previewContainer.appendChild(item);
    } else {
      for (let i = 0; i < this.teamCount; i++) {
        const item = document.createElement("div");
        item.className = "team-preview-item";
        item.innerHTML = `
          <span class="team-preview-emoji">${emojis[i] || "🚩"}</span>
          <input type="text" class="team-preview-name-input" id="input-team-${i}" value="${defaultNames[i] || `TEAM ${i+1}`}" maxlength="16" placeholder="Team ${i+1}">
        `;
        previewContainer.appendChild(item);
      }
    }
  }

  // ============================================================
  // STORY INTRO SEQUENCE
  // ============================================================
  startStoryIntro() {
    // Build teams
    this.teams = [];
    const emojis = ["🐯", "🦁", "🦅", "🦈"];
    for (let i = 0; i < this.teamCount; i++) {
      const input = document.getElementById(`input-team-${i}`);
      const name = input && input.value && typeof input.value === "string" && input.value.trim()
        ? input.value.trim().toUpperCase()
        : (this.teamCount === 1 ? "CLASS EXPEDITION" : `TEAM ${i+1}`);
      this.teams.push({
        id: `team-${i+1}`,
        name: name,
        emoji: this.teamCount === 1 ? "🧭" : (emojis[i] || "🚩")
      });
    }

    this.introStepIndex = 0;
    this.switchScreen("intro");
    if (this.soundEngine) {
      this.soundEngine.playOceanWaves();
    }
    this.renderStoryIntroStep();
  }

  renderStoryIntroStep() {
    const step = STORY_INTRO_STEPS[this.introStepIndex] || STORY_INTRO_STEPS[0];
    const dayTag = document.getElementById("intro-day-tag");
    const storyText = document.getElementById("intro-story-text");
    const subText = document.getElementById("intro-subtext");
    const nextBtn = document.getElementById("btn-intro-next");

    if (dayTag) dayTag.textContent = step.text.startsWith("DAY") ? step.text : "ISLAND BRIEFING";
    if (storyText) storyText.textContent = step.text;
    if (subText) subText.textContent = step.subtext;

    if (nextBtn) {
      if (this.introStepIndex === STORY_INTRO_STEPS.length - 1) {
        nextBtn.innerHTML = `<span>START ADVENTURE 🚀</span>`;
      } else {
        nextBtn.innerHTML = `<span>CONTINUE ➔</span>`;
      }
    }
  }

  advanceStoryIntro() {
    this.introStepIndex++;
    if (this.introStepIndex >= STORY_INTRO_STEPS.length) {
      this.finishStoryIntroAndStartGame();
    } else {
      if (this.soundEngine) this.soundEngine.playClick();
      this.renderStoryIntroStep();
    }
  }

  finishStoryIntroAndStartGame() {
    this.currentMissionIndex = 0;
    this.missionQuestionIndex = 0;
    this.lives = 3;
    this.inventory.clear();
    this.totalCorrectAnswers = 0;
    this.totalQuestionsAttempted = 0;
    this.usedQuestionIds.clear();

    this.switchScreen("game");
    this.updateLivesUI();
    this.updateInventoryUI();
    this.updateActiveTeamUI();
    this.showMissionBriefing(0);
  }

  // ============================================================
  // MAP CONTROLLER & NODE RENDERING
  // ============================================================
  renderMapNodes() {
    const container = document.getElementById("map-nodes-layer");
    if (!container) return;
    container.innerHTML = "";

    MAP_LOCATIONS.forEach((loc, idx) => {
      const marker = document.createElement("div");
      marker.className = "map-node-marker locked";
      marker.id = `map-node-${loc.id}`;
      marker.style.left = `${loc.x}%`;
      marker.style.top = `${loc.y}%`;
      marker.title = loc.name;

      marker.innerHTML = `
        <div class="node-icon-circle" style="background: ${loc.bgGradient};">
          <span>${loc.icon}</span>
        </div>
        <div class="node-label-pill">${loc.shortName}</div>
      `;

      marker.addEventListener("click", () => {
        if (this.soundEngine) this.soundEngine.playClick();
      });

      container.appendChild(marker);
    });

    this.updateMapVisuals();
  }

  updateMapVisuals() {
    MAP_LOCATIONS.forEach((loc, idx) => {
      const marker = document.getElementById(`map-node-${loc.id}`);
      if (!marker) return;

      marker.classList.remove("completed", "current", "locked");

      if (idx < this.currentMissionIndex) {
        marker.classList.add("completed");
      } else if (idx === this.currentMissionIndex) {
        marker.classList.add("current");
      } else {
        marker.classList.add("locked");
      }
    });

    // Update character token position
    const currentLoc = MAP_LOCATIONS[this.currentMissionIndex] || MAP_LOCATIONS[0];
    const token = document.getElementById("character-token");
    if (token && currentLoc) {
      token.style.left = `${currentLoc.x}%`;
      token.style.top = `${currentLoc.y}%`;
    }

    // Update Top Milestones Header
    for (let i = 0; i <= 6; i++) {
      const stepEl = document.getElementById(`step-${i}`);
      const lineEl = document.getElementById(`line-${i}`);
      if (stepEl) {
        stepEl.classList.remove("active", "completed");
        if (i < this.currentMissionIndex) {
          stepEl.classList.add("completed");
        } else if (i === this.currentMissionIndex) {
          stepEl.classList.add("active");
        }
      }
      if (lineEl) {
        lineEl.classList.toggle("completed", i <= this.currentMissionIndex);
      }
    }
  }

  animateCharacterMovementTo(targetIndex, onComplete) {
    const targetLoc = MAP_LOCATIONS[targetIndex];
    const token = document.getElementById("character-token");
    if (!token || !targetLoc) {
      if (onComplete) onComplete();
      return;
    }

    token.classList.add("walking");
    if (this.soundEngine) this.soundEngine.playWalk();

    token.style.left = `${targetLoc.x}%`;
    token.style.top = `${targetLoc.y}%`;

    setTimeout(() => {
      token.classList.remove("walking");
      this.updateMapVisuals();
      if (onComplete) onComplete();
    }, 1200);
  }

  // ============================================================
  // MISSION MANAGEMENT
  // ============================================================
  showMissionBriefing(missionIdx) {
    const mission = ESCAPE_MISSIONS[missionIdx];
    if (!mission) {
      this.startCinematicEscapeSequence();
      return;
    }

    this.hideAllConsoleCards();
    const briefingCard = document.getElementById("mission-briefing-card");
    if (briefingCard) briefingCard.classList.remove("hidden");

    // Populate briefing text
    const badge = document.getElementById("briefing-mission-badge");
    const title = document.getElementById("briefing-title");
    const tagline = document.getElementById("briefing-tagline");
    const story = document.getElementById("briefing-story");
    const obj = document.getElementById("briefing-objective");
    const reward = document.getElementById("briefing-reward");

    if (badge) badge.textContent = `MISSION ${mission.id} OF 6`;
    if (title) title.textContent = `${mission.icon} ${mission.title}`;
    if (tagline) tagline.textContent = mission.tagline;
    if (story) story.textContent = mission.briefing;
    if (obj) obj.textContent = `Answer ${this.questionsPerMission} English questions correctly`;
    if (reward) reward.textContent = `${mission.rewardItem.icon} ${mission.rewardItem.name}`;

    this.updateMapVisuals();
  }

  beginCurrentMission() {
    this.missionQuestionIndex = 0;
    if (this.soundEngine) this.soundEngine.playClick();
    this.serveNextQuestion();
  }

  hideAllConsoleCards() {
    const cardIds = [
      "mission-briefing-card",
      "question-card",
      "mission-complete-card",
      "exhausted-card"
    ];
    cardIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add("hidden");
    });
  }

  // ============================================================
  // QUESTION GENERATION & CRITICAL RANDOMIZATION FIX
  // ============================================================
  /**
   * Prepares a question with GUARANTEED ~25% A/B/C/D option randomization.
   * Shuffles options using Fisher-Yates and remaps the live `correctIndex`.
   */
  prepareQuestionWithRandomizedOptions(rawQuestion) {
    const originalCorrectText = rawQuestion.options[rawQuestion.correctIndex];

    // Create array of option items
    const optionEntries = rawQuestion.options.map((text, idx) => ({
      text: text,
      isCorrect: idx === rawQuestion.correctIndex
    }));

    // Fisher-Yates shuffle
    for (let i = optionEntries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionEntries[i], optionEntries[j]] = [optionEntries[j], optionEntries[i]];
    }

    const newOptions = optionEntries.map(e => e.text);
    const newCorrectIndex = optionEntries.findIndex(e => e.isCorrect);

    return {
      id: rawQuestion.id,
      category: rawQuestion.category,
      level: rawQuestion.level,
      question: rawQuestion.question,
      options: newOptions,
      correctIndex: newCorrectIndex,
      correctAnswerText: originalCorrectText,
      explanation: rawQuestion.explanation,
      theme: rawQuestion.theme
    };
  }

  fetchNextQuestion() {
    if (typeof ENGLISH_QUESTIONS === "undefined" || !ENGLISH_QUESTIONS.length) {
      console.warn("ENGLISH_QUESTIONS is not loaded!");
      return null;
    }

    // Filter by difficulty/grade if selected
    let pool = ENGLISH_QUESTIONS.filter(q => {
      if (this.usedQuestionIds.has(q.id)) return false;
      if (this.diffFilter !== "all" && q.level !== this.diffFilter) return false;
      return true;
    });

    // If pool exhausted for current filter, reset used IDs
    if (pool.length === 0) {
      this.usedQuestionIds.clear();
      pool = ENGLISH_QUESTIONS.filter(q => {
        if (this.diffFilter !== "all" && q.level !== this.diffFilter) return false;
        return true;
      });
    }

    // Pick random question from pool
    const randomIndex = Math.floor(Math.random() * pool.length);
    const rawQuestion = pool[randomIndex] || ENGLISH_QUESTIONS[0];
    this.usedQuestionIds.add(rawQuestion.id);

    // Shuffle options dynamically!
    return this.prepareQuestionWithRandomizedOptions(rawQuestion);
  }

  serveNextQuestion() {
    this.currentQuestion = this.fetchNextQuestion();
    if (!this.currentQuestion) return;

    this.selectedOptionIndex = null;
    this.verdictGiven = false;

    this.hideAllConsoleCards();
    const qCard = document.getElementById("question-card");
    if (qCard) qCard.classList.remove("hidden");

    // Update Header Pill & Meta
    const mission = ESCAPE_MISSIONS[this.currentMissionIndex] || ESCAPE_MISSIONS[0];
    const missionPill = document.getElementById("q-mission-pill");
    const catPill = document.getElementById("q-category-pill");
    const promptText = document.getElementById("question-prompt-text");
    const explanationCard = document.getElementById("explanation-card");

    if (missionPill) missionPill.textContent = `MISSION ${mission.id} • CHALLENGE ${this.missionQuestionIndex + 1}/${this.questionsPerMission}`;
    if (catPill) catPill.textContent = `${this.currentQuestion.category} • ${this.currentQuestion.level}`;
    if (promptText) promptText.textContent = this.currentQuestion.question;
    if (explanationCard) explanationCard.classList.add("hidden");

    // Render 4 Option Buttons (A, B, C, D)
    const letters = ["A", "B", "C", "D"];
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`opt-btn-${i}`);
      const textEl = document.getElementById(`opt-text-${i}`);
      if (btn && textEl) {
        btn.className = "option-btn";
        btn.disabled = false;
        textEl.textContent = this.currentQuestion.options[i] || "";
      }
    }

    this.updateActiveTeamUI();
  }

  handleOptionClick(selectedIndex) {
    if (this.verdictGiven || !this.currentQuestion) return;
    this.verdictGiven = true;
    this.selectedOptionIndex = selectedIndex;
    this.totalQuestionsAttempted++;

    const isCorrect = selectedIndex === this.currentQuestion.correctIndex;
    const correctIdx = this.currentQuestion.correctIndex;

    // Highlight Buttons
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`opt-btn-${i}`);
      if (btn) {
        btn.disabled = true;
        if (i === correctIdx) {
          btn.classList.add("correct-highlight");
        } else if (i === selectedIndex && !isCorrect) {
          btn.classList.add("wrong-highlight");
        }
      }
    }

    // Explanation Card UI
    const expCard = document.getElementById("explanation-card");
    const expBadge = document.getElementById("exp-badge");
    const expRewardNote = document.getElementById("exp-reward-note");
    const expText = document.getElementById("exp-text");
    const nextBtn = document.getElementById("btn-next-step");

    if (isCorrect) {
      // Correct!
      this.totalCorrectAnswers++;
      if (this.soundEngine) this.soundEngine.playCorrect();
      this.spawnConfettiBurst();

      if (expCard) {
        expCard.classList.remove("hidden", "wrong");
      }
      if (expBadge) expBadge.textContent = "🎉 CORRECT! PATH UNLOCKED!";
      if (expRewardNote) expRewardNote.textContent = `Progress +1 (${this.missionQuestionIndex + 1}/${this.questionsPerMission})`;
      if (expText) expText.textContent = this.currentQuestion.explanation || "Great job! Your answer matches the grammar rule.";
      if (nextBtn) nextBtn.innerHTML = `<span>CONTINUE ➔</span>`;
    } else {
      // Wrong!
      if (this.soundEngine) this.soundEngine.playWrong();
      this.lives--;
      this.updateLivesUI();

      if (expCard) {
        expCard.classList.remove("hidden");
        expCard.classList.add("wrong");
      }
      if (expBadge) expBadge.textContent = "❌ NOT QUITE!";
      if (expRewardNote) expRewardNote.textContent = "Lost 1 Energy Heart (❤️)";
      if (expText) expText.textContent = `${this.currentQuestion.explanation || "Review the rule above."} Correct answer was: "${this.currentQuestion.correctAnswerText}"`;
      if (nextBtn) nextBtn.innerHTML = `<span>CONTINUE ➔</span>`;
    }
  }

  advanceAfterQuestion() {
    const isCorrect = this.selectedOptionIndex === this.currentQuestion.correctIndex;

    if (isCorrect) {
      this.missionQuestionIndex++;
      // Check if current mission is fulfilled
      if (this.missionQuestionIndex >= this.questionsPerMission) {
        this.triggerMissionComplete();
      } else {
        // Rotate team if multiple teams
        if (this.teamCount > 1) {
          this.currentTeamIndex = (this.currentTeamIndex + 1) % this.teamCount;
        }
        this.serveNextQuestion();
      }
    } else {
      // If wrong, check if lives depleted
      if (this.lives <= 0) {
        this.showExhaustedScreen();
      } else {
        // Rotate team if multiple teams and retry question
        if (this.teamCount > 1) {
          this.currentTeamIndex = (this.currentTeamIndex + 1) % this.teamCount;
        }
        this.serveNextQuestion();
      }
    }
  }

  // ============================================================
  // MISSION COMPLETION & REWARD SHOWCASE
  // ============================================================
  triggerMissionComplete() {
    const mission = ESCAPE_MISSIONS[this.currentMissionIndex];
    if (!mission) return;

    // Grant reward items
    if (mission.rewardItem) {
      this.inventory.add(mission.rewardItem.id);
    }
    if (mission.bonusItem) {
      this.inventory.add(mission.bonusItem.id);
    }
    this.updateInventoryUI();

    if (this.soundEngine) {
      this.soundEngine.playItemUnlock();
    }
    this.spawnConfettiBurst();

    this.hideAllConsoleCards();
    const completeCard = document.getElementById("mission-complete-card");
    if (completeCard) completeCard.classList.remove("hidden");

    const title = document.getElementById("complete-mission-title");
    const itemIcon = document.getElementById("unlocked-item-icon");
    const itemName = document.getElementById("unlocked-item-name");
    const itemDesc = document.getElementById("unlocked-item-desc");

    if (title) title.textContent = `${mission.icon} ${mission.title} COMPLETE!`;
    if (itemIcon) itemIcon.textContent = mission.rewardItem.icon;
    if (itemName) itemName.textContent = mission.rewardItem.name;
    if (itemDesc) itemDesc.textContent = mission.rewardItem.description;

    // Animate character on map to next node
    const nextLocIndex = Math.min(this.currentMissionIndex + 1, MAP_LOCATIONS.length - 1);
    this.animateCharacterMovementTo(nextLocIndex);
  }

  advanceToNextMission() {
    this.currentMissionIndex++;
    if (this.currentMissionIndex >= ESCAPE_MISSIONS.length) {
      // ALL 6 MISSIONS COMPLETED! Trigger cinematic final escape!
      this.switchScreen("victory");
      this.startCinematicEscapeSequence();
    } else {
      this.showMissionBriefing(this.currentMissionIndex);
    }
  }

  // ============================================================
  // LIVES & EXHAUSTION (TRY AGAIN)
  // ============================================================
  updateLivesUI() {
    const mini = document.getElementById("q-energy-mini");
    const hearts = [
      document.getElementById("heart-1"),
      document.getElementById("heart-2"),
      document.getElementById("heart-3")
    ];

    let heartText = "";
    for (let i = 0; i < 3; i++) {
      if (i < this.lives) {
        heartText += "❤️";
        if (hearts[i]) hearts[i].className = "heart-icon full";
      } else {
        heartText += "🖤";
        if (hearts[i]) hearts[i].className = "heart-icon lost";
      }
    }
    if (mini) mini.textContent = heartText;
  }

  showExhaustedScreen() {
    this.hideAllConsoleCards();
    const exCard = document.getElementById("exhausted-card");
    if (exCard) exCard.classList.remove("hidden");
    if (this.soundEngine) this.soundEngine.playHeartLost();
  }

  retryCurrentMission() {
    this.lives = 3;
    this.missionQuestionIndex = 0;
    this.updateLivesUI();
    this.showMissionBriefing(this.currentMissionIndex);
  }

  // ============================================================
  // INVENTORY & TEAM UI
  // ============================================================
  updateInventoryUI() {
    const itemIds = ["map", "compass", "key", "battery", "radio", "fuel"];
    itemIds.forEach(id => {
      const slot = document.getElementById(`slot-${id}`);
      if (!slot) return;
      if (this.inventory.has(id)) {
        slot.className = "inv-slot unlocked";
        const lock = slot.querySelector(".lock-tag");
        if (lock) lock.textContent = "✨";
      } else {
        slot.className = "inv-slot locked";
        const lock = slot.querySelector(".lock-tag");
        if (lock) lock.textContent = "🔒";
      }
    });
  }

  updateActiveTeamUI() {
    const team = this.teams[this.currentTeamIndex] || { name: "CLASS EXPEDITION", emoji: "🧭" };
    const indicator = document.getElementById("active-team-indicator");
    const nametag = document.getElementById("token-nametag");
    const avatar = document.getElementById("token-avatar");

    if (indicator) indicator.textContent = `${team.emoji} ${team.name}'S TURN`;
    if (nametag) nametag.textContent = team.name;
    if (avatar) avatar.textContent = team.emoji;
  }

  // ============================================================
  // CINEMATIC FINAL ESCAPE SEQUENCE
  // ============================================================
  startCinematicEscapeSequence() {
    this.switchScreen("victory");

    const stageBoat = document.getElementById("stage-boat");
    const stageRadio = document.getElementById("stage-radio");
    const stageHeli = document.getElementById("stage-heli");
    const stageVictory = document.getElementById("stage-victory");

    if (stageBoat) stageBoat.classList.remove("hidden");
    if (stageRadio) stageRadio.classList.add("hidden");
    if (stageHeli) stageHeli.classList.add("hidden");
    if (stageVictory) stageVictory.classList.add("hidden");

    // Phase 1: Boat launch
    if (this.soundEngine) this.soundEngine.playBoatEngine();

    // Phase 2: Radio transmission (after 2.5s)
    setTimeout(() => {
      if (stageBoat) stageBoat.classList.add("hidden");
      if (stageRadio) stageRadio.classList.remove("hidden");
      if (this.soundEngine) this.soundEngine.playRadioTransmission();
    }, 2500);

    // Phase 3: Helicopter rescue inbound (after 5.0s)
    setTimeout(() => {
      if (stageRadio) stageRadio.classList.add("hidden");
      if (stageHeli) stageHeli.classList.remove("hidden");
      if (this.soundEngine) this.soundEngine.playHelicopter();
    }, 5000);

    // Phase 4: Final Victory Showcase (after 7.5s)
    setTimeout(() => {
      if (stageHeli) stageHeli.classList.add("hidden");
      if (stageVictory) stageVictory.classList.remove("hidden");

      if (this.soundEngine) this.soundEngine.playVictory();
      this.startContinuousConfetti();

      // Populate Stats
      const statMissions = document.getElementById("vstat-missions");
      const statAccuracy = document.getElementById("vstat-accuracy");
      const statItems = document.getElementById("vstat-items");

      const acc = this.totalQuestionsAttempted > 0
        ? Math.round((this.totalCorrectAnswers / this.totalQuestionsAttempted) * 100)
        : 100;

      if (statMissions) statMissions.textContent = "6 / 6";
      if (statAccuracy) statAccuracy.textContent = `${acc}%`;
      if (statItems) statItems.textContent = `${this.inventory.size} Items`;
    }, 7500);
  }

  resetGameToSetup() {
    this.stopContinuousConfetti();
    this.switchScreen("setup");
    this.renderSetupTeams();
  }

  // ============================================================
  // CONFETTI CANVAS ENGINE
  // ============================================================
  initConfetti() {
    this.confettiCanvas = document.getElementById("confetti-canvas");
    if (!this.confettiCanvas) return;
    this.confettiCtx = this.confettiCanvas.getContext("2d");
    this.resizeConfettiCanvas();
    window.addEventListener("resize", () => this.resizeConfettiCanvas());
  }

  resizeConfettiCanvas() {
    if (this.confettiCanvas) {
      this.confettiCanvas.width = window.innerWidth;
      this.confettiCanvas.height = window.innerHeight;
    }
  }

  spawnConfettiBurst() {
    if (!this.confettiCanvas || !this.confettiCtx) return;
    const colors = ["#f59e0b", "#38bdf8", "#22c55e", "#ec4899", "#a855f7", "#ffffff"];
    for (let i = 0; i < 60; i++) {
      this.confettiParticles.push({
        x: window.innerWidth * 0.7,
        y: window.innerHeight * 0.4,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 16,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 12,
        opacity: 1
      });
    }
    if (!this.confettiActive) {
      this.confettiActive = true;
      this.renderConfettiFrame();
    }
  }

  startContinuousConfetti() {
    this.continuousConfetti = true;
    const colors = ["#f59e0b", "#38bdf8", "#22c55e", "#ec4899", "#a855f7", "#ffffff"];
    const interval = setInterval(() => {
      if (!this.continuousConfetti) {
        clearInterval(interval);
        return;
      }
      for (let i = 0; i < 15; i++) {
        this.confettiParticles.push({
          x: Math.random() * window.innerWidth,
          y: -10,
          vx: (Math.random() - 0.5) * 4,
          vy: Math.random() * 5 + 3,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rSpeed: (Math.random() - 0.5) * 8,
          opacity: 1
        });
      }
    }, 200);

    if (!this.confettiActive) {
      this.confettiActive = true;
      this.renderConfettiFrame();
    }
  }

  stopContinuousConfetti() {
    this.continuousConfetti = false;
    this.confettiParticles = [];
  }

  renderConfettiFrame() {
    if (!this.confettiCtx || !this.confettiCanvas) return;
    this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);

    for (let i = this.confettiParticles.length - 1; i >= 0; i--) {
      const p = this.confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25; // gravity
      p.rotation += p.rSpeed;
      p.opacity -= 0.008;

      if (p.opacity <= 0 || p.y > window.innerHeight + 50) {
        this.confettiParticles.splice(i, 1);
        continue;
      }

      this.confettiCtx.save();
      this.confettiCtx.translate(p.x, p.y);
      this.confettiCtx.rotate((p.rotation * Math.PI) / 180);
      this.confettiCtx.fillStyle = p.color;
      this.confettiCtx.globalAlpha = Math.max(0, p.opacity);
      this.confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.confettiCtx.restore();
    }

    if (this.confettiParticles.length > 0 || this.continuousConfetti) {
      if (typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(() => this.renderConfettiFrame());
      }
    } else {
      this.confettiActive = false;
    }
  }
}

// Initialize game on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.gameInstance = new EscapeIslandGame();
});
