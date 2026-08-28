/**
 * SORT IT! — Main Application Controller
 */

import { GAME_DATA } from "./data.js";
import { soundEngine } from "./audio.js";
import { FXEngine } from "./animations.js";
import { DragEngine } from "./drag-engine.js";
import { GameEngine } from "./game.js";

class App {
  constructor() {
    this.game = new GameEngine();
    this.fx = new FXEngine(document.getElementById("fxCanvas"));
    this.dragEngine = null;

    this.currentScreen = "startScreen";
    this.activeCardEl = null;

    this.initElements();
    this.initEventListeners();
    this.initGameListeners();
    this.updateSoundUI();
  }

  initElements() {
    this.screens = {
      startScreen: document.getElementById("startScreen"),
      mapScreen: document.getElementById("mapScreen"),
      gameScreen: document.getElementById("gameScreen")
    };

    this.modals = {
      tutorial: document.getElementById("tutorialModal"),
      levelResult: document.getElementById("levelResultModal"),
      gradeComplete: document.getElementById("gradeCompleteModal")
    };

    this.btnSelectGrade7 = document.getElementById("btnSelectGrade7");
    this.btnSelectGrade8 = document.getElementById("btnSelectGrade8");
    this.btnToggleSound = document.getElementById("btnToggleSound");
    this.soundIcon = document.getElementById("soundIcon");
    this.soundLabel = document.getElementById("soundLabel");
    this.btnHowToPlay = document.getElementById("btnHowToPlay");
    this.btnCloseTutorial = document.getElementById("btnCloseTutorial");

    this.btnBackToGrades = document.getElementById("btnBackToGrades");
    this.mapGradeTitle = document.getElementById("mapGradeTitle");
    this.mapGradeSubtitle = document.getElementById("mapGradeSubtitle");
    this.mapStarsCount = document.getElementById("mapStarsCount");
    this.levelsGridContainer = document.getElementById("levelsGridContainer");

    this.btnPauseGame = document.getElementById("btnPauseGame");
    this.btnInGameSound = document.getElementById("btnInGameSound");
    this.hudGradePill = document.getElementById("hudGradePill");
    this.hudLevelTitle = document.getElementById("hudLevelTitle");
    this.hudScore = document.getElementById("hudScore");
    this.hudComboBadge = document.getElementById("hudComboBadge");
    this.hudComboText = document.getElementById("hudComboText");
    this.hudTimerBadge = document.getElementById("hudTimerBadge");
    this.hudTimerVal = document.getElementById("hudTimerVal");
    this.deckProgressText = document.getElementById("deckProgressText");
    this.cardDeckStack = document.getElementById("cardDeckStack");
    this.categoriesDock = document.getElementById("categoriesDock");

    this.resIcon = document.getElementById("resIcon");
    this.resTitle = document.getElementById("resTitle");
    this.resSubtitle = document.getElementById("resSubtitle");
    this.resStarsRow = document.getElementById("resStarsRow");
    this.resScore = document.getElementById("resScore");
    this.resCombo = document.getElementById("resCombo");
    this.resAccuracy = document.getElementById("resAccuracy");
    this.btnRetryLevel = document.getElementById("btnRetryLevel");
    this.btnMapFromModal = document.getElementById("btnMapFromModal");
    this.btnNextLevel = document.getElementById("btnNextLevel");

    this.gradeTotalScore = document.getElementById("gradeTotalScore");
    this.gradeStarsEarned = document.getElementById("gradeStarsEarned");
    this.gradeAvgAccuracy = document.getElementById("gradeAvgAccuracy");
    this.btnReplayGrade = document.getElementById("btnReplayGrade");
    this.btnSwitchGrade = document.getElementById("btnSwitchGrade");
  }

  showScreen(screenId) {
    Object.values(this.screens).forEach(screen => screen.classList.remove("active"));
    if (this.screens[screenId]) {
      this.screens[screenId].classList.add("active");
      this.currentScreen = screenId;
    }
  }

  showModal(modalId) {
    if (this.modals[modalId]) {
      this.modals[modalId].classList.add("active");
    }
  }

  hideModals() {
    Object.values(this.modals).forEach(m => m.classList.remove("active"));
  }

  updateSoundUI() {
    const isMuted = !soundEngine.isSoundOn();
    if (this.soundIcon) this.soundIcon.textContent = isMuted ? "🔇" : "🔊";
    if (this.soundLabel) this.soundLabel.textContent = isMuted ? "Sound OFF" : "Sound ON";
    if (this.btnInGameSound) this.btnInGameSound.textContent = isMuted ? "🔇" : "🔊";
  }

  initEventListeners() {
    this.btnToggleSound.addEventListener("click", () => {
      soundEngine.toggleSound();
      this.updateSoundUI();
    });

    this.btnInGameSound.addEventListener("click", () => {
      soundEngine.toggleSound();
      this.updateSoundUI();
    });

    this.btnHowToPlay.addEventListener("click", () => {
      soundEngine.playClick();
      this.showModal("tutorial");
    });

    this.btnCloseTutorial.addEventListener("click", () => {
      soundEngine.playClick();
      this.hideModals();
    });

    this.btnSelectGrade7.addEventListener("click", () => {
      soundEngine.playClick();
      this.openGradeMap("grade7");
    });

    this.btnSelectGrade8.addEventListener("click", () => {
      soundEngine.playClick();
      this.openGradeMap("grade8");
    });

    this.btnBackToGrades.addEventListener("click", () => {
      soundEngine.playClick();
      this.showScreen("startScreen");
    });

    this.btnPauseGame.addEventListener("click", () => {
      soundEngine.playClick();
      this.game.stopTimer();
      this.openGradeMap(this.game.currentGrade);
    });

    this.btnRetryLevel.addEventListener("click", () => {
      soundEngine.playClick();
      this.hideModals();
      this.game.startLevel(this.game.currentLevelIndex);
    });

    this.btnMapFromModal.addEventListener("click", () => {
      soundEngine.playClick();
      this.hideModals();
      this.openGradeMap(this.game.currentGrade);
    });

    this.btnNextLevel.addEventListener("click", () => {
      soundEngine.playClick();
      this.hideModals();
      if (this.game.currentLevelIndex + 1 < GAME_DATA[this.game.currentGrade].levels.length) {
        this.game.startLevel(this.game.currentLevelIndex + 1);
      } else {
        this.openGradeMap(this.game.currentGrade);
      }
    });

    this.btnReplayGrade.addEventListener("click", () => {
      soundEngine.playClick();
      this.hideModals();
      this.game.startLevel(0);
    });

    this.btnSwitchGrade.addEventListener("click", () => {
      soundEngine.playClick();
      this.hideModals();
      this.showScreen("startScreen");
    });
  }

  openGradeMap(gradeKey) {
    this.game.setGrade(gradeKey);
    const gradeData = GAME_DATA[gradeKey];

    this.mapGradeTitle.textContent = `${gradeData.badge} Levels`;
    this.mapGradeSubtitle.textContent = gradeData.subtitle;

    this.levelsGridContainer.innerHTML = "";
    let totalStars = 0;
    const maxPossibleStars = gradeData.levels.length * 3;

    gradeData.levels.forEach((level, idx) => {
      const prog = this.game.getLevelProgress(gradeKey, idx);
      totalStars += prog.stars;

      const card = document.createElement("div");
      card.className = `level-card glass-card ${prog.unlocked ? "unlocked" : "locked"}`;
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", prog.unlocked ? "0" : "-1");

      const starsHtml = prog.unlocked
        ? (prog.stars > 0 ? "⭐".repeat(prog.stars) + "☆".repeat(3 - prog.stars) : "☆☆☆")
        : "🔒";

      card.innerHTML = `
        <div class="level-card-top">
          <span class="level-badge-num" style="color: ${gradeKey === 'grade7' ? 'var(--grade7-accent)' : 'var(--grade8-accent)'}">
            Stage ${level.number}
          </span>
          <div class="level-stars-row">${starsHtml}</div>
        </div>
        <h3 class="level-title-text">${level.title}</h3>
        <p class="level-desc-text">${level.description}</p>
        <div class="level-card-bottom">
          <span>${level.categories.length} Categories</span>
          <span>${level.timeLimit ? `⏱️ ${level.timeLimit}s` : '🧘 Relaxed'}</span>
        </div>
      `;

      if (prog.unlocked) {
        card.addEventListener("click", () => {
          soundEngine.playClick();
          this.game.startLevel(idx);
        });
      }

      this.levelsGridContainer.appendChild(card);
    });

    this.mapStarsCount.textContent = `${totalStars} / ${maxPossibleStars} Stars`;
    this.showScreen("mapScreen");
  }

  initGameListeners() {
    this.game.on("levelStart", ({ level, gradeKey, totalCards }) => {
      this.setupGameUI(level, gradeKey, totalCards);
      this.showScreen("gameScreen");
    });

    this.game.on("cardServed", ({ card, cardIndex, totalCards }) => {
      this.renderActiveCard(card, cardIndex, totalCards);
    });

    this.game.on("cardSuccess", ({ pointsEarned, isFast, combo, totalScore }) => {
      this.hudScore.textContent = totalScore.toLocaleString();

      if (combo >= 2) {
        this.hudComboBadge.classList.add("active");
        this.hudComboText.textContent = `COMBO x${combo}`;
      } else {
        this.hudComboBadge.classList.remove("active");
      }
    });

    this.game.on("cardFail", ({ lostCombo }) => {
      this.hudComboBadge.classList.remove("active");
    });

    this.game.on("timerTick", ({ timeRemaining }) => {
      if (this.hudTimerBadge) {
        this.hudTimerBadge.style.display = "inline-flex";
        this.hudTimerVal.textContent = `${timeRemaining}s`;
        if (timeRemaining <= 10) {
          this.hudTimerBadge.classList.add("urgent");
        } else {
          this.hudTimerBadge.classList.remove("urgent");
        }
      }
    });

    this.game.on("levelComplete", (summary) => {
      this.handleLevelCompletion(summary);
    });
  }

  setupGameUI(level, gradeKey, totalCards) {
    const isGrade7 = gradeKey === "grade7";
    this.hudGradePill.className = `hud-pill ${isGrade7 ? "pill-grade7" : "pill-grade8"}`;
    this.hudGradePill.textContent = isGrade7 ? "🟢 G7" : "🔵 G8";
    this.hudLevelTitle.textContent = `Stage ${level.number}: ${level.title}`;
    this.hudScore.textContent = "0";
    this.hudComboBadge.classList.remove("active");

    if (level.timeLimit) {
      this.hudTimerBadge.style.display = "inline-flex";
      this.hudTimerBadge.classList.remove("urgent");
      this.hudTimerVal.textContent = `${level.timeLimit}s`;
    } else {
      this.hudTimerBadge.style.display = "none";
    }

    this.categoriesDock.innerHTML = "";
    level.categories.forEach(cat => {
      const bin = document.createElement("div");
      bin.className = "category-bin glass-card";
      bin.dataset.categoryId = cat.id;
      bin.style.borderColor = cat.border || "rgba(255, 255, 255, 0.2)";
      bin.style.background = cat.bg || "rgba(22, 30, 49, 0.75)";

      bin.innerHTML = `
        <span class="bin-icon">${cat.icon}</span>
        <span class="bin-name" style="color: ${cat.color || '#fff'}">${cat.name}</span>
        <span class="bin-drop-hint">Drop here</span>
      `;

      bin.addEventListener("click", () => {
        if (this.dragEngine) {
          this.dragEngine.handleCategoryClick(bin);
        }
      });

      this.categoriesDock.appendChild(bin);
    });

    this.dragEngine = new DragEngine({
      cardContainer: this.cardDeckStack,
      getCategories: () => Array.from(document.querySelectorAll(".category-bin")),
      onCardSelect: () => soundEngine.playPickup(),
      onDropAttempt: (attemptData) => this.handleDropAttempt(attemptData)
    });
  }

  renderActiveCard(card, cardIndex, totalCards) {
    this.deckProgressText.textContent = `${cardIndex + 1} / ${totalCards}`;
    this.cardDeckStack.innerHTML = "";

    const cardEl = document.createElement("div");
    cardEl.className = "sort-card";
    cardEl.setAttribute("tabindex", "0");
    cardEl.setAttribute("aria-label", `Sort item: ${card.item}`);

    cardEl.innerHTML = `
      ${card.icon ? `<span class="card-item-icon">${card.icon}</span>` : ""}
      <div class="card-item-text">${card.item}</div>
      <div class="card-instruction-hint">Drag into matching category</div>
    `;

    this.cardDeckStack.appendChild(cardEl);
    this.activeCardEl = cardEl;

    this.dragEngine.attachCard(cardEl);
  }

  handleDropAttempt({ cardEl, categoryId, categoryEl, targetRect, cardRect }) {
    const result = this.game.processDrop(categoryId);
    const dropCenterX = targetRect.left + targetRect.width / 2;
    const dropCenterY = targetRect.top + targetRect.height / 2;

    if (result.isCorrect) {
      soundEngine.playDropSuccess(result.combo);
      if (result.combo === 3 || result.combo === 5 || result.combo === 10) {
        soundEngine.playComboAlert(result.combo);
        soundEngine.speakFeedback("combo");
      }

      const catColor = categoryEl.style.borderColor || "#00CEC9";
      this.fx.burstCorrect(dropCenterX, dropCenterY, catColor);

      if (result.combo >= 2) {
        this.fx.burstCombo(dropCenterX, dropCenterY, result.combo);
      }

      const toastText = result.isFast ? `+${result.pointsEarned} FAST! ⚡` : `+${result.pointsEarned}`;
      this.fx.spawnFloatingText(toastText, dropCenterX, dropCenterY - 40, "#55EFC4", result.isFast);

      this.dragEngine.animateFlyIntoCategory(cardEl, categoryEl, () => {
        this.game.serveNextCard();
      });

    } else {
      soundEngine.playDropFail();
      this.fx.spawnFloatingText("Try Again ❌", dropCenterX, dropCenterY - 20, "#FF7675");

      this.dragEngine.animateShakeWrong(cardEl, () => {});
    }
  }

  handleLevelCompletion(summary) {
    soundEngine.playLevelComplete();
    this.fx.triggerConfetti();

    if (summary.isGradeCompleted) {
      const gradeStats = this.game.getGradeCompletionStats(summary.gradeKey);
      this.gradeTotalScore.textContent = gradeStats.totalScore.toLocaleString();
      this.gradeStarsEarned.textContent = `${gradeStats.totalStars} / ${gradeStats.maxStars}`;
      this.gradeAvgAccuracy.textContent = `${gradeStats.avgAccuracy}%`;
      this.showModal("gradeComplete");
      return;
    }

    this.resScore.textContent = summary.score.toLocaleString();
    this.resCombo.textContent = `x${summary.maxCombo}`;
    this.resAccuracy.textContent = `${summary.accuracy}%`;

    const starsHtml = "⭐".repeat(summary.stars) + "☆".repeat(3 - summary.stars);
    this.resStarsRow.textContent = starsHtml;

    if (summary.stars === 3) {
      this.resIcon.textContent = "🏆";
      this.resTitle.textContent = "PERFECT SORTING!";
      this.resSubtitle.textContent = "Flawless accuracy and swift sorting!";
    } else if (summary.stars === 2) {
      this.resIcon.textContent = "🎉";
      this.resTitle.textContent = "GREAT WORK!";
      this.resSubtitle.textContent = "Solid vocabulary and context sorting!";
    } else {
      this.resIcon.textContent = "👍";
      this.resTitle.textContent = "LEVEL CLEARED!";
      this.resSubtitle.textContent = "Keep practicing to earn 3 full stars!";
    }

    this.btnNextLevel.style.display = summary.hasNextLevel ? "flex" : "none";
    this.showModal("levelResult");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.sortItApp = new App();
});
