/**
 * ENGLISH WHEEL - Core Game Engine
 * Manages game state, rounds, turns, team scoring, vowel purchase, puzzle board, solve modal, and educational cards.
 */

class EnglishWheelGame {
  constructor() {
    this.expressionManager = new ExpressionManager(grade7Expressions, grade8Expressions);
    this.grade = 7; // 7 or 8
    this.teamCount = 3; // 2, 3, 4, or 5
    this.teamColors = ["#3b82f6", "#ec4899", "#10b981", "#f59e0b", "#8b5cf6"];
    this.teamNames = ["TEAM 1", "TEAM 2", "TEAM 3", "TEAM 4", "TEAM 5"];
    this.teams = [];
    this.activeTeamIndex = 0;
    this.currentRound = 1;
    this.maxRounds = 3; // Rounds 1, 2, 3 + Final Round
    this.currentExpression = null;
    this.revealedLetters = new Set();
    this.usedLetters = new Set();

    // Wheel turn state
    this.turnState = "SETUP"; // SETUP, AWAITING_SPIN, SPINNING, AWAITING_CONSONANT, AWAITING_VOWEL, SOLVING, ROUND_OVER, FINAL_ROUND, GAME_OVER
    this.currentSpinValue = 0;
    this.isDoubleActive = false;
    this.bonusPoints = 0;

    // Final round state
    this.finalTeamIndex = 0;
    this.finalPicksNeeded = 3;
    this.finalPicksChosen = 0;
    this.finalTimer = null;
    this.finalTimeRemaining = 10;

    this.initElements();
    this.initKeyboard();
    this.bindEvents();
  }

  initElements() {
    // Screens
    this.screenWelcome = document.getElementById("screen-welcome");
    this.screenSetup = document.getElementById("screen-setup");
    this.screenGame = document.getElementById("screen-game");
    this.screenFinal = document.getElementById("screen-final");
    this.screenWinner = document.getElementById("screen-winner");

    // Game Elements
    this.roundBadge = document.getElementById("round-badge");
    this.gradeBadge = document.getElementById("grade-badge");
    this.categoryText = document.getElementById("category-text");
    this.puzzleContainer = document.getElementById("puzzle-container");
    this.teamsContainer = document.getElementById("teams-container");
    this.teamCountSelector = document.getElementById("team-count-selector");
    this.teamInputsGroup = document.getElementById("team-inputs-group");
    this.usedLettersList = document.getElementById("used-letters-list");

    // Controls
    this.btnSpin = document.getElementById("btn-spin");
    this.btnBuyVowel = document.getElementById("btn-buy-vowel");
    this.btnSolve = document.getElementById("btn-solve");
    this.turnBanner = document.getElementById("turn-banner");
    this.multiplierBadge = document.getElementById("multiplier-badge");
    this.bonusBadge = document.getElementById("bonus-badge");

    // Modals
    this.modalSolve = document.getElementById("modal-solve");
    this.inputSolve = document.getElementById("input-solve");
    this.btnConfirmSolve = document.getElementById("btn-confirm-solve");
    this.btnCancelSolve = document.getElementById("btn-cancel-solve");
    this.modalEdu = document.getElementById("modal-edu");
    this.modalHowTo = document.getElementById("modal-howto");

    // Wheel
    this.wheel = new GameWheel("wheel-canvas", (result) => this.handleSpinResult(result));
  }

  initKeyboard() {
    const consonants = "BCDFGHJKLMNPQRSTVWXYZ".split("");
    const vowels = "AEIOU".split("");

    const consonantContainer = document.getElementById("consonants-grid");
    const vowelContainer = document.getElementById("vowels-grid");

    if (consonantContainer) consonantContainer.innerHTML = "";
    if (vowelContainer) vowelContainer.innerHTML = "";

    consonants.forEach(letter => {
      const btn = document.createElement("button");
      btn.className = "key-btn key-consonant";
      btn.dataset.letter = letter;
      btn.innerText = letter;
      btn.addEventListener("click", () => this.handleLetterClick(letter, false));
      consonantContainer.appendChild(btn);
    });

    vowels.forEach(letter => {
      const btn = document.createElement("button");
      btn.className = "key-btn key-vowel";
      btn.dataset.letter = letter;
      btn.innerText = letter;
      btn.addEventListener("click", () => this.handleLetterClick(letter, true));
      vowelContainer.appendChild(btn);
    });
  }

  bindEvents() {
    // Welcome Grade Selection
    document.getElementById("btn-grade-7")?.addEventListener("click", () => this.selectGrade(7));
    document.getElementById("btn-grade-8")?.addEventListener("click", () => this.selectGrade(8));
    document.getElementById("btn-howto")?.addEventListener("click", () => this.openHowTo());
    document.getElementById("btn-close-howto")?.addEventListener("click", () => this.closeHowTo());
    document.getElementById("btn-sound-toggle")?.addEventListener("click", () => this.toggleSound());

    // Setup screen team count buttons
    document.querySelectorAll(".btn-team-count").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const count = parseInt(e.currentTarget.dataset.count, 10);
        this.setTeamCount(count);
      });
    });

    // Setup screen actions
    document.getElementById("btn-start-game")?.addEventListener("click", () => this.startGame());
    document.getElementById("btn-back-setup")?.addEventListener("click", () => this.showScreen("screen-welcome"));

    // Action buttons
    this.btnSpin?.addEventListener("click", () => this.triggerSpin());
    this.btnBuyVowel?.addEventListener("click", () => this.triggerBuyVowel());
    this.btnSolve?.addEventListener("click", () => this.openSolveModal());

    // Solve Modal
    this.btnConfirmSolve?.addEventListener("click", () => this.submitSolve());
    this.btnCancelSolve?.addEventListener("click", () => this.closeSolveModal());
    this.inputSolve?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.submitSolve();
    });

    // Edu Card Modal
    document.getElementById("btn-next-round")?.addEventListener("click", () => this.advanceToNextRound());

    // Final Round Controls
    document.getElementById("btn-final-start-solve")?.addEventListener("click", () => this.startFinalSolveCountdown());
    document.getElementById("btn-final-confirm-solve")?.addEventListener("click", () => this.submitFinalSolve());
    document.getElementById("input-final-solve")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.submitFinalSolve();
    });

    // Winner screen restart
    document.getElementById("btn-play-again")?.addEventListener("click", () => this.restartGame());
    document.getElementById("btn-change-grade")?.addEventListener("click", () => this.showScreen("screen-welcome"));
  }

  showScreen(screenId) {
    [this.screenWelcome, this.screenSetup, this.screenGame, this.screenFinal, this.screenWinner].forEach(s => {
      if (s) s.classList.add("hidden");
    });
    const target = document.getElementById(screenId);
    if (target) target.classList.remove("hidden");

    if (screenId === "screen-game") {
      setTimeout(() => this.wheel.setupHiDPI(), 50);
    }
  }

  setTeamCount(count) {
    if (count < 2 || count > 5) return;
    if (window.soundEngine) window.soundEngine.playBtnClick();

    this.saveCurrentSetupNames();
    this.teamCount = count;

    document.querySelectorAll(".btn-team-count").forEach(btn => {
      const btnCount = parseInt(btn.dataset.count, 10);
      if (btnCount === count) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    this.renderTeamSetup();
  }

  saveCurrentSetupNames() {
    for (let i = 1; i <= 5; i++) {
      const input = document.getElementById(`team${i}-name`);
      if (input && input.value.trim()) {
        this.teamNames[i - 1] = input.value.trim().toUpperCase();
      }
    }
  }

  renderTeamSetup() {
    if (!this.teamInputsGroup) return;
    this.teamInputsGroup.innerHTML = "";
    this.teamInputsGroup.className = `team-inputs-group ${this.teamCount >= 4 ? `grid-${this.teamCount}` : ''}`;

    for (let i = 0; i < this.teamCount; i++) {
      const teamNum = i + 1;
      const defaultName = `TEAM ${teamNum}`;
      const currentName = this.teamNames[i] || defaultName;

      const row = document.createElement("div");
      row.className = "team-input-row";
      row.innerHTML = `
        <span class="team-indicator-dot dot-team${teamNum}"></span>
        <label for="team${teamNum}-name" class="team-label">TEAM ${teamNum}</label>
        <input type="text" id="team${teamNum}-name" class="team-text-input" value="${currentName}" maxlength="20" placeholder="Enter Team ${teamNum} Name">
      `;

      const input = row.querySelector("input");
      input?.addEventListener("input", (e) => {
        const val = e.target.value.trim();
        if (val) {
          this.teamNames[i] = val.toUpperCase();
        }
      });

      this.teamInputsGroup.appendChild(row);
    }
  }

  selectGrade(grade) {
    this.grade = grade;
    if (window.soundEngine) window.soundEngine.playBtnClick();
    const gradeTitle = document.getElementById("setup-grade-title");
    if (gradeTitle) gradeTitle.innerText = `GRADE ${grade} SETUP`;
    this.renderTeamSetup();
    this.showScreen("screen-setup");
  }

  openHowTo() {
    if (window.soundEngine) window.soundEngine.playBtnClick();
    if (this.modalHowTo) this.modalHowTo.classList.remove("hidden");
  }

  closeHowTo() {
    if (window.soundEngine) window.soundEngine.playBtnClick();
    if (this.modalHowTo) this.modalHowTo.classList.add("hidden");
  }

  toggleSound() {
    const isMuted = !window.soundEngine.toggleSound();
    const soundIcons = document.querySelectorAll(".sound-icon-text");
    soundIcons.forEach(el => {
      el.innerText = isMuted ? "🔇 SOUND: OFF" : "🔊 SOUND: ON";
    });
  }

  startGame() {
    if (window.soundEngine) window.soundEngine.playBtnClick();
    this.saveCurrentSetupNames();

    this.teams = [];
    for (let i = 0; i < this.teamCount; i++) {
      const teamNum = i + 1;
      const name = this.teamNames[i] || `TEAM ${teamNum}`;
      this.teams.push({
        name: name.toUpperCase(),
        roundScore: 0,
        totalScore: 0,
        color: this.teamColors[i % this.teamColors.length]
      });
    }

    if (this.teamsContainer) {
      this.teamsContainer.style.setProperty("--team-cols", this.teams.length);
    }

    this.currentRound = 1;
    this.activeTeamIndex = 0;
    this.showScreen("screen-game");
    this.startRound(1);
  }

  startRound(roundNumber) {
    this.currentRound = roundNumber;
    this.revealedLetters.clear();
    this.usedLetters.clear();
    this.isDoubleActive = false;
    this.bonusPoints = 0;

    // Reset round scores for each team
    this.teams.forEach(t => t.roundScore = 0);

    // Pick new expression
    this.currentExpression = this.expressionManager.getRandomExpression(this.grade);

    // Update badges & UI
    if (this.roundBadge) this.roundBadge.innerText = `ROUND ${this.currentRound} OF ${this.maxRounds}`;
    if (this.gradeBadge) this.gradeBadge.innerText = `GRADE ${this.grade}`;
    if (this.categoryText) this.categoryText.innerText = this.currentExpression.category;

    this.updateBadges();
    this.renderPuzzle();
    this.renderTeams();
    this.renderUsedLetters();
    this.initKeyboard();

    this.setTurnState("AWAITING_SPIN");
    this.setBanner(`${this.getActiveTeam().name}'s Turn — Spin the wheel or Solve!`, "info");
  }

  getActiveTeam() {
    return this.teams[this.activeTeamIndex];
  }

  renderTeams() {
    if (!this.teamsContainer) return;
    this.teamsContainer.innerHTML = "";

    this.teams.forEach((team, idx) => {
      const isActive = idx === this.activeTeamIndex && this.turnState !== "GAME_OVER";
      const card = document.createElement("div");
      card.className = `team-card ${isActive ? "active-team" : ""}`;
      card.innerHTML = `
        <div class="team-header">
          <span class="team-name" title="${team.name}">${team.name}</span>
          ${isActive ? '<span class="active-badge">ACTIVE TURN</span>' : ''}
        </div>
        <div class="team-scores">
          <div class="score-box round-box">
            <span class="score-label">ROUND</span>
            <span class="score-val">${team.roundScore.toLocaleString()}</span>
          </div>
          <div class="score-box total-box">
            <span class="score-label">TOTAL</span>
            <span class="score-val">${team.totalScore.toLocaleString()}</span>
          </div>
        </div>
      `;
      this.teamsContainer.appendChild(card);
    });

    // Update Buy Vowel button status
    if (this.btnBuyVowel) {
      const canAfford = this.getActiveTeam().roundScore >= 500;
      this.btnBuyVowel.disabled = !canAfford || this.turnState !== "AWAITING_SPIN";
      this.btnBuyVowel.title = canAfford ? "Purchase a vowel for 500 round points" : "Requires at least 500 round points";
    }
  }

  renderPuzzle() {
    if (!this.puzzleContainer || !this.currentExpression) return;
    this.puzzleContainer.innerHTML = "";

    const phrase = this.currentExpression.phrase.toUpperCase();
    const words = phrase.split(" ");

    words.forEach(word => {
      const wordDiv = document.createElement("div");
      wordDiv.className = "puzzle-word";

      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const isAlpha = /^[A-Z]$/.test(char);

        const tile = document.createElement("div");
        tile.className = "puzzle-tile";

        if (!isAlpha) {
          // Punctuation like apostrophe or hyphen
          tile.classList.add("tile-symbol");
          tile.innerText = char;
        } else {
          tile.classList.add("tile-letter");
          if (this.revealedLetters.has(char)) {
            tile.classList.add("revealed");
            tile.innerText = char;
          } else {
            tile.classList.add("hidden-letter");
            tile.innerText = "";
          }
        }
        wordDiv.appendChild(tile);
      }

      this.puzzleContainer.appendChild(wordDiv);
    });
  }

  renderUsedLetters() {
    if (!this.usedLettersList) return;
    this.usedLettersList.innerHTML = "";

    if (this.usedLetters.size === 0) {
      this.usedLettersList.innerHTML = `<span class="empty-used">None yet</span>`;
      return;
    }

    Array.from(this.usedLetters).sort().forEach(letter => {
      const pill = document.createElement("span");
      const inPuzzle = this.currentExpression && this.currentExpression.phrase.toUpperCase().includes(letter);
      pill.className = `used-pill ${inPuzzle ? "used-correct" : "used-wrong"}`;
      pill.innerText = letter;
      this.usedLettersList.appendChild(pill);
    });
  }

  updateBadges() {
    if (this.multiplierBadge) {
      if (this.isDoubleActive) {
        this.multiplierBadge.classList.remove("hidden");
        this.multiplierBadge.innerText = "⚡ 2X MULTIPLIER ACTIVE";
      } else {
        this.multiplierBadge.classList.add("hidden");
      }
    }
    if (this.bonusBadge) {
      if (this.bonusPoints > 0) {
        this.bonusBadge.classList.remove("hidden");
        this.bonusBadge.innerText = `🎁 +${this.bonusPoints} BONUS ACTIVE`;
      } else {
        this.bonusBadge.classList.add("hidden");
      }
    }
  }

  setBanner(text, type = "info") {
    if (!this.turnBanner) return;
    this.turnBanner.className = `turn-banner banner-${type}`;
    this.turnBanner.innerHTML = text;
  }

  setTurnState(state) {
    this.turnState = state;

    const isSpinWaiting = state === "AWAITING_SPIN";
    if (this.btnSpin) this.btnSpin.disabled = !isSpinWaiting;
    if (this.btnSolve) this.btnSolve.disabled = !isSpinWaiting;
    if (this.btnBuyVowel) {
      this.btnBuyVowel.disabled = !isSpinWaiting || this.getActiveTeam().roundScore < 500;
    }

    // Keyboard state
    const consonantBtns = document.querySelectorAll(".key-consonant");
    const vowelBtns = document.querySelectorAll(".key-vowel");

    consonantBtns.forEach(btn => {
      const letter = btn.dataset.letter;
      const isUsed = this.usedLetters.has(letter);
      btn.disabled = isUsed || state !== "AWAITING_CONSONANT";
      if (isUsed) btn.classList.add("key-disabled");
      else btn.classList.remove("key-disabled");
    });

    vowelBtns.forEach(btn => {
      const letter = btn.dataset.letter;
      const isUsed = this.usedLetters.has(letter);
      btn.disabled = isUsed || state !== "AWAITING_VOWEL";
      if (isUsed) btn.classList.add("key-disabled");
      else btn.classList.remove("key-disabled");
    });

    this.renderTeams();
  }

  triggerSpin() {
    if (this.turnState !== "AWAITING_SPIN") return;
    this.setTurnState("SPINNING");
    this.setBanner(`Wheel is spinning... Good luck, ${this.getActiveTeam().name}! 🎡`, "spin");
    this.wheel.spin();
  }

  handleSpinResult(wedge) {
    const activeTeam = this.getActiveTeam();

    if (wedge.type === "bankrupt") {
      if (window.soundEngine) window.soundEngine.playBankrupt();
      activeTeam.roundScore = 0;
      this.isDoubleActive = false;
      this.bonusPoints = 0;
      this.updateBadges();
      this.renderTeams();
      this.setBanner(`💥 BANKRUPT! ${activeTeam.name} lost their round points!`, "danger");

      setTimeout(() => this.passTurnToNextTeam(), 2500);
      return;
    }

    if (wedge.type === "pass") {
      if (window.soundEngine) window.soundEngine.playPass();
      this.isDoubleActive = false;
      this.bonusPoints = 0;
      this.updateBadges();
      this.setBanner(`⏭️ PASS! Turn passes to the next team.`, "warning");

      setTimeout(() => this.passTurnToNextTeam(), 2200);
      return;
    }

    if (wedge.type === "double") {
      if (window.soundEngine) window.soundEngine.playBonus();
      this.isDoubleActive = true;
      this.updateBadges();
      this.setBanner(`⚡ DOUBLE! Next correct consonant score will be DOUBLED! Spin again!`, "success");
      setTimeout(() => {
        this.setTurnState("AWAITING_SPIN");
      }, 1500);
      return;
    }

    if (wedge.type === "bonus") {
      if (window.soundEngine) window.soundEngine.playBonus();
      this.bonusPoints += 500;
      this.updateBadges();
      this.setBanner(`🎁 BONUS +500! Guess a consonant to claim the bonus!`, "success");
      this.currentSpinValue = 500;
      this.setTurnState("AWAITING_CONSONANT");
      return;
    }

    // Standard Point Value
    this.currentSpinValue = wedge.value;
    this.setBanner(`🎉 ${wedge.value} POINTS! Choose a consonant!`, "highlight");
    this.setTurnState("AWAITING_CONSONANT");
  }

  triggerBuyVowel() {
    if (this.turnState !== "AWAITING_SPIN") return;
    const activeTeam = this.getActiveTeam();
    if (activeTeam.roundScore < 500) return;

    if (window.soundEngine) window.soundEngine.playVowelBuy();
    activeTeam.roundScore -= 500;
    this.renderTeams();

    this.setBanner(`💰 Vowel purchased for -500 pts! Select a vowel (A, E, I, O, U).`, "highlight");
    this.setTurnState("AWAITING_VOWEL");
  }

  handleLetterClick(letter, isVowel) {
    if (this.usedLetters.has(letter)) return;
    this.usedLetters.add(letter);
    this.renderUsedLetters();

    const phrase = this.currentExpression.phrase.toUpperCase();
    const count = (phrase.match(new RegExp(letter, "g")) || []).length;
    const activeTeam = this.getActiveTeam();

    if (count > 0) {
      // Correct Guess!
      this.revealedLetters.add(letter);
      this.renderPuzzle();

      let pointsEarned = 0;
      if (!isVowel) {
        let baseVal = this.currentSpinValue * count;
        if (this.isDoubleActive) {
          baseVal *= 2;
          this.isDoubleActive = false;
        }
        if (this.bonusPoints > 0) {
          baseVal += this.bonusPoints;
          this.bonusPoints = 0;
        }
        pointsEarned = baseVal;
        activeTeam.roundScore += pointsEarned;
      }

      this.updateBadges();
      this.renderTeams();

      if (window.soundEngine) window.soundEngine.playCorrectLetter(count);

      // Check if all letters are now revealed
      if (this.checkIfAllLettersRevealed()) {
        this.handlePuzzleSolved(true);
        return;
      }

      this.setBanner(`✨ YES! There ${count === 1 ? 'is 1' : `are ${count}`} '${letter}'! ${pointsEarned > 0 ? `+${pointsEarned.toLocaleString()} pts!` : ''} Keep going, ${activeTeam.name}!`, "success");
      this.setTurnState("AWAITING_SPIN");

    } else {
      // No Match!
      if (window.soundEngine) window.soundEngine.playWrongLetter();
      this.isDoubleActive = false;
      this.bonusPoints = 0;
      this.updateBadges();

      this.setBanner(`❌ NO MATCH! '${letter}' is not in the expression! Turn ends.`, "danger");
      setTimeout(() => this.passTurnToNextTeam(), 2000);
    }
  }

  checkIfAllLettersRevealed() {
    const phrase = this.currentExpression.phrase.toUpperCase();
    for (let i = 0; i < phrase.length; i++) {
      const char = phrase[i];
      if (/^[A-Z]$/.test(char) && !this.revealedLetters.has(char)) {
        return false;
      }
    }
    return true;
  }

  passTurnToNextTeam() {
    this.activeTeamIndex = (this.activeTeamIndex + 1) % this.teams.length;
    this.setTurnState("AWAITING_SPIN");
    this.setBanner(`${this.getActiveTeam().name}'s Turn! Spin the wheel or solve!`, "info");
    this.renderTeams();
  }

  openSolveModal() {
    if (this.turnState !== "AWAITING_SPIN") return;
    if (window.soundEngine) window.soundEngine.playBtnClick();
    if (this.modalSolve && this.inputSolve) {
      this.inputSolve.value = "";
      this.modalSolve.classList.remove("hidden");
      this.inputSolve.focus();
    }
  }

  closeSolveModal() {
    if (window.soundEngine) window.soundEngine.playBtnClick();
    if (this.modalSolve) this.modalSolve.classList.add("hidden");
  }

  submitSolve() {
    const guess = this.inputSolve?.value.trim().toUpperCase() || "";
    if (!guess) return;

    this.closeSolveModal();

    // Clean comparison (ignore punctuation/extra spaces)
    const normalize = (str) => str.replace(/[^A-Z]/g, "");
    const isCorrect = normalize(guess) === normalize(this.currentExpression.phrase);

    if (isCorrect) {
      // Award round solve bonus (+1000)
      this.getActiveTeam().roundScore += 1000;
      this.handlePuzzleSolved(true);
    } else {
      if (window.soundEngine) window.soundEngine.playWrongLetter();
      this.setBanner(`❌ INCORRECT SOLUTION! Turn passes to the next team.`, "danger");
      setTimeout(() => this.passTurnToNextTeam(), 2000);
    }
  }

  handlePuzzleSolved(fromActiveTeam = true) {
    if (window.soundEngine) window.soundEngine.playPuzzleSolved();

    // Reveal all letters
    const phrase = this.currentExpression.phrase.toUpperCase();
    for (let char of phrase) {
      if (/^[A-Z]$/.test(char)) this.revealedLetters.add(char);
    }
    this.renderPuzzle();

    // Only active solving team's current round score is added to their total score
    const solver = this.getActiveTeam();
    solver.totalScore += solver.roundScore;

    // Reset round scores for all teams for the next round
    this.teams.forEach(t => t.roundScore = 0);
    this.renderTeams();

    this.setTurnState("ROUND_OVER");
    this.setBanner(`🎉 PUZZLE SOLVED BY ${solver.name}!`, "success");

    // Show Educational Learning Card Modal after a short delay
    setTimeout(() => {
      this.showEducationalCard();
    }, 1500);
  }

  showEducationalCard() {
    const expr = this.currentExpression;
    const cardTitle = document.getElementById("edu-card-title");
    const cardCategory = document.getElementById("edu-card-category");
    const cardMeaning = document.getElementById("edu-card-meaning");
    const cardSentence = document.getElementById("edu-card-sentence");

    if (cardTitle) cardTitle.innerText = expr.phrase;
    if (cardCategory) cardCategory.innerText = expr.category;
    if (cardMeaning) cardMeaning.innerText = `"${expr.meaning}"`;
    if (cardSentence) cardSentence.innerText = `"${expr.exampleSentence}"`;

    if (this.modalEdu) this.modalEdu.classList.remove("hidden");
  }

  advanceToNextRound() {
    if (window.soundEngine) window.soundEngine.playBtnClick();
    if (this.modalEdu) this.modalEdu.classList.add("hidden");

    if (this.currentRound < this.maxRounds) {
      this.startRound(this.currentRound + 1);
    } else {
      this.startFinalRound();
    }
  }

  startFinalRound() {
    this.turnState = "FINAL_ROUND";
    this.showScreen("screen-final");

    // Determine highest scoring team across all active teams (handling ties gracefully)
    let maxScore = -Infinity;
    this.teams.forEach(t => {
      if (t.totalScore > maxScore) maxScore = t.totalScore;
    });

    const topTeams = this.teams
      .map((team, index) => ({ team, index }))
      .filter(item => item.team.totalScore === maxScore);

    // If there is a tie, pick fairly from the top teams
    const chosenWinner = topTeams[Math.floor(Math.random() * topTeams.length)];
    this.finalTeamIndex = chosenWinner.index;
    const finalTeam = this.teams[this.finalTeamIndex];

    // Pick a challenging expression
    this.currentExpression = this.expressionManager.getFinalRoundExpression(this.grade);
    this.revealedLetters.clear();
    this.usedLetters.clear();

    // Automatically reveal standard R, S, T, L, N, E
    const freeLetters = ["R", "S", "T", "L", "N", "E"];
    freeLetters.forEach(l => {
      this.revealedLetters.add(l);
      this.usedLetters.add(l);
    });

    // Update UI
    const finalTeamBanner = document.getElementById("final-team-banner");
    if (finalTeamBanner) finalTeamBanner.innerText = `🏆 FINALIST: ${finalTeam.name} (${finalTeam.totalScore.toLocaleString()} PTS)`;

    const finalCategory = document.getElementById("final-category-text");
    if (finalCategory) finalCategory.innerText = this.currentExpression.category;

    this.renderFinalPuzzle();
    this.initFinalPickKeyboard();

    const finalStatus = document.getElementById("final-status-text");
    if (finalStatus) finalStatus.innerText = "Step 1: Choose 3 additional consonants to reveal!";

    const solveSection = document.getElementById("final-solve-section");
    if (solveSection) solveSection.classList.add("hidden");
  }

  renderFinalPuzzle() {
    const container = document.getElementById("final-puzzle-container");
    if (!container || !this.currentExpression) return;
    container.innerHTML = "";

    const phrase = this.currentExpression.phrase.toUpperCase();
    const words = phrase.split(" ");

    words.forEach(word => {
      const wordDiv = document.createElement("div");
      wordDiv.className = "puzzle-word";

      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const isAlpha = /^[A-Z]$/.test(char);

        const tile = document.createElement("div");
        tile.className = "puzzle-tile";

        if (!isAlpha) {
          tile.classList.add("tile-symbol");
          tile.innerText = char;
        } else {
          tile.classList.add("tile-letter");
          if (this.revealedLetters.has(char)) {
            tile.classList.add("revealed");
            tile.innerText = char;
          } else {
            tile.classList.add("hidden-letter");
            tile.innerText = "";
          }
        }
        wordDiv.appendChild(tile);
      }

      container.appendChild(wordDiv);
    });
  }

  initFinalPickKeyboard() {
    const container = document.getElementById("final-picks-grid");
    if (!container) return;
    container.innerHTML = "";

    const consonants = "BCDFGHJKMPQVWXYZ".split(""); // Minus R, S, T, L, N
    this.finalPicksChosen = 0;
    this.finalPicksNeeded = 3;

    consonants.forEach(letter => {
      const btn = document.createElement("button");
      btn.className = "key-btn key-consonant";
      btn.innerText = letter;
      btn.addEventListener("click", () => {
        if (this.finalPicksChosen < this.finalPicksNeeded && !this.usedLetters.has(letter)) {
          if (window.soundEngine) window.soundEngine.playBtnClick();
          this.usedLetters.add(letter);
          this.revealedLetters.add(letter);
          btn.disabled = true;
          btn.classList.add("key-disabled");
          this.finalPicksChosen++;

          this.renderFinalPuzzle();

          const finalStatus = document.getElementById("final-status-text");
          if (finalStatus) {
            finalStatus.innerText = `Picks chosen: ${this.finalPicksChosen} / ${this.finalPicksNeeded}`;
          }

          if (this.finalPicksChosen >= this.finalPicksNeeded) {
            // Disable all remaining pick buttons
            container.querySelectorAll("button").forEach(b => b.disabled = true);
            this.prepareFinalSolveStep();
          }
        }
      });
      container.appendChild(btn);
    });
  }

  prepareFinalSolveStep() {
    const solveSection = document.getElementById("final-solve-section");
    if (solveSection) solveSection.classList.remove("hidden");

    const finalStatus = document.getElementById("final-status-text");
    if (finalStatus) finalStatus.innerText = "Step 2: Press 'START 10s TIMER' and type the correct expression to win +3,000 PTS!";
  }

  startFinalSolveCountdown() {
    const btnStart = document.getElementById("btn-final-start-solve");
    const solveInput = document.getElementById("input-final-solve");
    const btnConfirm = document.getElementById("btn-final-confirm-solve");
    const timerDisplay = document.getElementById("final-timer-display");

    if (btnStart) btnStart.classList.add("hidden");
    if (solveInput) {
      solveInput.disabled = false;
      solveInput.focus();
    }
    if (btnConfirm) btnConfirm.disabled = false;

    this.finalTimeRemaining = 10;
    if (timerDisplay) timerDisplay.innerText = `⏱️ ${this.finalTimeRemaining}s`;

    if (this.finalTimer) clearInterval(this.finalTimer);

    this.finalTimer = setInterval(() => {
      this.finalTimeRemaining--;
      if (timerDisplay) timerDisplay.innerText = `⏱️ ${this.finalTimeRemaining}s`;

      if (window.soundEngine) {
        window.soundEngine.playTimerTick(this.finalTimeRemaining <= 3);
      }

      if (this.finalTimeRemaining <= 0) {
        clearInterval(this.finalTimer);
        this.submitFinalSolve(true); // timeout
      }
    }, 1000);
  }

  submitFinalSolve(isTimeout = false) {
    if (this.finalTimer) clearInterval(this.finalTimer);

    const input = document.getElementById("input-final-solve");
    const guess = input?.value.trim().toUpperCase() || "";
    const normalize = (str) => str.replace(/[^A-Z]/g, "");
    const isCorrect = !isTimeout && normalize(guess) === normalize(this.currentExpression.phrase);

    const finalTeam = this.teams[this.finalTeamIndex];

    if (isCorrect) {
      finalTeam.totalScore += 3000;
      if (window.soundEngine) window.soundEngine.playPuzzleSolved();
      alert(`🎉 BRILLIANT! ${finalTeam.name} solved the Final Puzzle and earned +3,000 BONUS POINTS!`);
    } else {
      if (window.soundEngine) window.soundEngine.playWrongLetter();
      alert(`⏰ Time's up or incorrect! The expression was: "${this.currentExpression.phrase}"`);
    }

    // Reveal the whole final puzzle
    const phrase = this.currentExpression.phrase.toUpperCase();
    for (let c of phrase) {
      if (/^[A-Z]$/.test(c)) this.revealedLetters.add(c);
    }
    this.renderFinalPuzzle();

    setTimeout(() => {
      this.showFinalWinnerScreen();
    }, 2000);
  }

  showFinalWinnerScreen() {
    this.turnState = "GAME_OVER";
    this.showScreen("screen-winner");

    if (window.soundEngine) window.soundEngine.playPuzzleSolved();

    // Sort teams by totalScore descending
    const sorted = [...this.teams].sort((a, b) => b.totalScore - a.totalScore);
    const champion = sorted[0];

    const champTitle = document.getElementById("winner-champion-name");
    const champScore = document.getElementById("winner-champion-score");
    if (champTitle) champTitle.innerText = champion.name;
    if (champScore) champScore.innerText = `${champion.totalScore.toLocaleString()} PTS`;

    const scoreboard = document.getElementById("winner-scoreboard");
    if (scoreboard) {
      scoreboard.innerHTML = "";
      const medals = ["🥇", "🥈", "🥉", "🎖️", "🎖️"];
      sorted.forEach((team, idx) => {
        const medal = medals[idx] || "🎖️";
        const row = document.createElement("div");
        row.className = `winner-row rank-${idx + 1}`;
        row.innerHTML = `
          <span class="rank-badge">${medal} #${idx + 1}</span>
          <span class="rank-team">${team.name}</span>
          <span class="rank-score">${team.totalScore.toLocaleString()} PTS</span>
        `;
        scoreboard.appendChild(row);
      });
    }

    this.launchConfetti();
  }

  launchConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#fbbf24", "#38bdf8", "#ec4899", "#10b981", "#a855f7", "#f97316"];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 120,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleInc: (Math.random() * 0.07) + 0.05,
        tiltAngle: 0
      });
    }

    let animationFrame;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.tiltAngle += p.tiltAngleInc;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.x += Math.sin(p.d);
        p.tilt = Math.sin(p.tiltAngle) * 15;

        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();
    setTimeout(() => {
      cancelAnimationFrame(animationFrame);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 6000);
  }

  restartGame() {
    if (window.soundEngine) window.soundEngine.playBtnClick();
    this.startGame();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.game = new EnglishWheelGame();
});
