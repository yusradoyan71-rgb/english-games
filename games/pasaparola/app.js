/**
 * PASAPAROLA - UI Application Controller
 */

document.addEventListener("DOMContentLoaded", () => {
  // DOM Screen Elements
  const setupScreen = document.getElementById("setupScreen");
  const gameScreen = document.getElementById("gameScreen");
  const victoryScreen = document.getElementById("victoryScreen");

  // Setup Elements
  const gradeCards = document.querySelectorAll(".grade-card");
  const teamButtons = document.querySelectorAll(".team-opt-btn");
  const btnStartGame = document.getElementById("btnStartGame");

  // Game Top Bar Elements
  const btnExitToMenu = document.getElementById("btnExitToMenu");
  const btnSoundToggle = document.getElementById("btnSoundToggle");
  const soundIcon = document.getElementById("soundIcon");
  const currentGradeBadge = document.getElementById("currentGradeBadge");
  const roundBadge = document.getElementById("roundBadge");
  const teamScoresContainer = document.getElementById("teamScoresContainer");

  // Playfield Elements
  const alphabetBoard = document.getElementById("alphabetBoard");
  const turnBanner = document.getElementById("turnBanner");
  const turnLabel = document.getElementById("turnLabel");
  const activeLetterHero = document.getElementById("activeLetterHero");
  const letterName = document.getElementById("letterName");
  const passNotice = document.getElementById("passNotice");
  const questionText = document.getElementById("questionText");
  const answerForm = document.getElementById("answerForm");
  const answerInput = document.getElementById("answerInput");
  const btnSubmitAnswer = document.getElementById("btnSubmitAnswer");
  const btnPassLetter = document.getElementById("btnPassLetter");
  const feedbackBanner = document.getElementById("feedbackBanner");
  const feedbackIcon = document.getElementById("feedbackIcon");
  const feedbackText = document.getElementById("feedbackText");

  // Victory Elements
  const victoryScoreboard = document.getElementById("victoryScoreboard");
  const statCorrect = document.getElementById("statCorrect");
  const statWrong = document.getElementById("statWrong");
  const btnPlayAnotherRound = document.getElementById("btnPlayAnotherRound");
  const btnVictoryToMenu = document.getElementById("btnVictoryToMenu");

  // State
  let selectedGrade = 7;
  let selectedTeamCount = 2;
  const game = new PasaparolaGame();
  let isSubmitting = false;

  // --------------------------------------------------------------------------
  // SOUND INITIALIZATION
  // --------------------------------------------------------------------------
  function updateSoundIcon() {
    soundIcon.textContent = sound.isMuted() ? "🔇" : "🔊";
  }
  updateSoundIcon();

  btnSoundToggle.addEventListener("click", () => {
    sound.toggleMute();
    updateSoundIcon();
    sound.playTap();
  });

  // --------------------------------------------------------------------------
  // SETUP SCREEN LISTENERS
  // --------------------------------------------------------------------------
  gradeCards.forEach(card => {
    card.addEventListener("click", () => {
      sound.playTap();
      gradeCards.forEach(c => {
        c.classList.remove("selected");
        const ind = c.querySelector(".select-indicator");
        if (ind) ind.textContent = "SELECT";
      });
      card.classList.add("selected");
      const indicator = card.querySelector(".select-indicator");
      if (indicator) indicator.textContent = "✓ SELECTED";
      selectedGrade = parseInt(card.dataset.grade, 10);
    });
  });

  teamButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sound.playTap();
      teamButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedTeamCount = parseInt(btn.dataset.teams, 10);
    });
  });

  btnStartGame.addEventListener("click", () => {
    sound.playTap();
    startGameplay();
  });

  btnExitToMenu.addEventListener("click", () => {
    sound.playTap();
    switchScreen(setupScreen);
  });

  btnVictoryToMenu.addEventListener("click", () => {
    sound.playTap();
    switchScreen(setupScreen);
  });

  btnPlayAnotherRound.addEventListener("click", () => {
    sound.playTap();
    game.startNextRound();
    renderGameplayScreen();
    switchScreen(gameScreen);
  });

  // --------------------------------------------------------------------------
  // GAME INITIALIZATION & SCREEN MANAGEMENT
  // --------------------------------------------------------------------------
  function switchScreen(targetScreen) {
    [setupScreen, gameScreen, victoryScreen].forEach(s => s.classList.remove("active"));
    targetScreen.classList.add("active");
  }

  function startGameplay() {
    game.startNewGame(selectedGrade, selectedTeamCount);
    renderGameplayScreen();
    switchScreen(gameScreen);
  }

  function renderGameplayScreen() {
    // Badges
    currentGradeBadge.textContent = `Grade ${game.grade}`;
    roundBadge.textContent = `Round ${game.currentRound}`;

    // Render Alphabet Board Nodes
    alphabetBoard.innerHTML = "";
    game.board.forEach((letterObj, idx) => {
      const node = document.createElement("div");
      node.className = `letter-node ${letterObj.status}`;
      node.id = `letter-node-${letterObj.letter}`;
      node.textContent = letterObj.letter;
      alphabetBoard.appendChild(node);
    });

    renderTeamScores();
    updateQuestionCard();
  }

  function renderTeamScores() {
    teamScoresContainer.innerHTML = "";
    const activeTeam = game.getCurrentTeam();

    game.teams.forEach(team => {
      const card = document.createElement("div");
      const isTurn = activeTeam && activeTeam.id === team.id;
      card.className = `team-score-card ${team.badgeClass} ${isTurn ? "active-turn" : ""}`;
      card.id = `team-card-${team.id}`;
      card.innerHTML = `
        <span class="team-name-tag" style="color: ${team.color}">${team.name}</span>
        <span class="team-points" id="score-val-${team.id}">${team.score}</span>
      `;
      teamScoresContainer.appendChild(card);
    });
  }

  function updateQuestionCard() {
    const activeLetter = game.getCurrentLetter();
    const activeTeam = game.getCurrentTeam();

    if (!activeLetter) return;

    // Turn indicator
    turnLabel.textContent = `${activeTeam.name}'S TURN`;
    turnBanner.style.borderColor = activeTeam.color;

    // Active letter & hero
    activeLetterHero.textContent = activeLetter.letter;
    letterName.textContent = activeLetter.letter;

    // Pass second chance notice
    if (game.isSecondPass) {
      passNotice.style.display = "inline-block";
    } else {
      passNotice.style.display = "none";
    }

    // Question text (NO separate clue or hint labels!)
    questionText.textContent = activeLetter.question.question;

    // Board Node Highlight
    ALPHABET.forEach(l => {
      const el = document.getElementById(`letter-node-${l}`);
      if (el) {
        const item = game.board.find(b => b.letter === l);
        el.className = `letter-node ${item ? item.status : "unplayed"}`;
      }
    });

    // Reset input
    answerInput.value = "";
    answerInput.placeholder = `Word starting with ${activeLetter.letter}...`;
    answerInput.focus();
    isSubmitting = false;
  }

  // --------------------------------------------------------------------------
  // GAMEPLAY ACTIONS (ANSWER & PASAPAROLA)
  // --------------------------------------------------------------------------
  answerForm.addEventListener("submit", e => {
    e.preventDefault();
    handleAnswerSubmit();
  });

  btnPassLetter.addEventListener("click", () => {
    handlePasaparola();
  });

  function showFeedback(type, text, duration = 900, callback) {
    feedbackBanner.className = `feedback-banner show-${type}`;
    feedbackIcon.textContent = type === "correct" ? "✓" : type === "wrong" ? "✗" : "⏭";
    feedbackText.textContent = text;

    setTimeout(() => {
      feedbackBanner.className = "feedback-banner";
      if (callback) callback();
    }, duration);
  }

  function handleAnswerSubmit() {
    if (isSubmitting) return;
    const inputVal = answerInput.value.trim();
    if (!inputVal) return;

    isSubmitting = true;
    const result = game.submitAnswer(inputVal);
    if (!result) {
      isSubmitting = false;
      return;
    }

    const currentLetterEl = document.getElementById(`letter-node-${result.letter}`);

    if (result.correct) {
      sound.playCorrect();
      if (currentLetterEl) {
        currentLetterEl.className = "letter-node correct";
        animator.triggerScorePopup(currentLetterEl, "+10");
      }
      renderTeamScores();
      showFeedback("correct", "✓ CORRECT! +10 POINTS", 850, () => {
        processNextState(result.nextState);
      });
    } else {
      sound.playWrong();
      if (currentLetterEl) {
        currentLetterEl.className = "letter-node wrong";
      }
      showFeedback("wrong", `✗ TRY AGAIN (Answer: ${result.targetAnswer})`, 1300, () => {
        processNextState(result.nextState);
      });
    }
  }

  function handlePasaparola() {
    if (isSubmitting) return;
    isSubmitting = true;
    sound.playPass();

    const result = game.passCurrentLetter();
    if (!result) {
      isSubmitting = false;
      return;
    }

    const currentLetterEl = document.getElementById(`letter-node-${result.letter}`);
    if (currentLetterEl) {
      currentLetterEl.className = "letter-node passed";
    }

    showFeedback("passed", "⏭ PASAPAROLA!", 650, () => {
      processNextState(result.nextState);
    });
  }

  function processNextState(nextState) {
    if (nextState.isComplete) {
      showVictoryScreen(nextState.scoreboard);
    } else {
      renderTeamScores();
      updateQuestionCard();
    }
    isSubmitting = false;
  }

  // --------------------------------------------------------------------------
  // VICTORY SCREEN
  // --------------------------------------------------------------------------
  function showVictoryScreen(scoreboard) {
    sound.playVictory();
    animator.startConfetti(4500);

    // Populate Leaderboard
    victoryScoreboard.innerHTML = "";
    const rankEmojis = ["🥇", "🥈", "🥉"];

    scoreboard.teams.forEach((team, idx) => {
      const row = document.createElement("div");
      row.className = `victory-team-row ${idx === 0 ? "rank-1" : ""}`;
      row.innerHTML = `
        <div style="display: flex; align-items: center;">
          <span class="rank-badge">${rankEmojis[idx] || "⭐"}</span>
          <span class="v-team-name" style="color: ${team.color}">${team.name}</span>
        </div>
        <span class="v-team-score">${team.score} PTS</span>
      `;
      victoryScoreboard.appendChild(row);
    });

    // Stats
    statCorrect.textContent = scoreboard.stats.correct;
    statWrong.textContent = scoreboard.stats.wrong;

    switchScreen(victoryScreen);
  }

  // Keyboard Shortcuts (Space/Tab for Pasaparola, autofocus input)
  document.addEventListener("keydown", e => {
    if (gameScreen.classList.contains("active") && !isSubmitting) {
      // Focus input if any normal letter key pressed
      if (document.activeElement !== answerInput && e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        answerInput.focus();
      }
    }
  });
});
