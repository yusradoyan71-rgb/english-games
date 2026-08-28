/**
 * SORT IT! — Core Game State & Logic Engine
 */

import { GAME_DATA } from "./data.js";
import { soundEngine } from "./audio.js";

export class GameEngine {
  constructor() {
    this.currentGrade = "grade7";
    this.currentLevelIndex = 0;
    this.activeLevelData = null;
    
    this.deck = [];
    this.currentCardIndex = 0;
    this.activeCard = null;
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.correctCount = 0;
    this.totalAttempts = 0;
    this.cardStartTime = 0;
    this.levelStartTime = 0;
    this.isLevelActive = false;
    this.isPaused = false;

    this.timeLimit = null;
    this.timeRemaining = 0;
    this.timerInterval = null;

    this.progress = this.loadProgress();
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => cb(data));
    }
  }

  loadProgress() {
    try {
      const saved = localStorage.getItem("sortit_game_progress_v1");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not load progress:", e);
    }
    return {
      grade7: { unlockedLevel: 0, levels: {} },
      grade8: { unlockedLevel: 0, levels: {} }
    };
  }

  saveProgress() {
    try {
      localStorage.setItem("sortit_game_progress_v1", JSON.stringify(this.progress));
    } catch (e) {
      console.warn("Could not save progress:", e);
    }
  }

  getLevelProgress(gradeKey, levelIndex) {
    const g = this.progress[gradeKey];
    if (!g) return { unlocked: levelIndex === 0, stars: 0, bestScore: 0, completed: false };
    const levelRecord = g.levels[levelIndex];
    return {
      unlocked: levelIndex <= g.unlockedLevel,
      stars: levelRecord ? levelRecord.stars : 0,
      bestScore: levelRecord ? levelRecord.score : 0,
      completed: !!(levelRecord && levelRecord.completed)
    };
  }

  setGrade(gradeKey) {
    if (!GAME_DATA[gradeKey]) return;
    this.currentGrade = gradeKey;
    this.emit("gradeChange", {
      gradeKey,
      gradeInfo: GAME_DATA[gradeKey]
    });
  }

  getGradeInfo() {
    return GAME_DATA[this.currentGrade];
  }

  startLevel(levelIndex) {
    const gradeData = GAME_DATA[this.currentGrade];
    if (!gradeData || !gradeData.levels[levelIndex]) return;

    this.currentLevelIndex = levelIndex;
    this.activeLevelData = gradeData.levels[levelIndex];

    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.correctCount = 0;
    this.totalAttempts = 0;
    this.currentCardIndex = 0;
    this.isLevelActive = true;
    this.isPaused = false;
    this.levelStartTime = Date.now();

    this.prepareDeck();

    this.stopTimer();
    this.timeLimit = this.activeLevelData.timeLimit;
    if (this.timeLimit) {
      this.timeRemaining = this.timeLimit;
      this.startTimer();
    }

    this.emit("levelStart", {
      level: this.activeLevelData,
      gradeKey: this.currentGrade,
      totalCards: this.deck.length
    });

    this.serveNextCard();
  }

  prepareDeck() {
    const rawDeck = [...this.activeLevelData.deck];
    for (let i = rawDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rawDeck[i], rawDeck[j]] = [rawDeck[j], rawDeck[i]];
    }

    const targetCount = this.activeLevelData.cardsTarget || rawDeck.length;
    this.deck = rawDeck.slice(0, targetCount);
  }

  serveNextCard() {
    if (this.currentCardIndex >= this.deck.length) {
      this.completeLevel();
      return;
    }

    this.activeCard = this.deck[this.currentCardIndex];
    this.cardStartTime = Date.now();

    this.emit("cardServed", {
      card: this.activeCard,
      cardIndex: this.currentCardIndex,
      totalCards: this.deck.length
    });
  }

  processDrop(targetCategoryId) {
    if (!this.isLevelActive || !this.activeCard) return { isCorrect: false };

    this.totalAttempts++;
    const isCorrect = this.activeCard.category === targetCategoryId;
    const timeTaken = (Date.now() - this.cardStartTime) / 1000;

    if (isCorrect) {
      this.correctCount++;
      this.combo++;
      if (this.combo > this.maxCombo) {
        this.maxCombo = this.combo;
      }

      let pointsEarned = 100;
      let isFast = false;

      if (timeTaken < 2.5) {
        pointsEarned += 50;
        isFast = true;
      }

      const comboBonus = Math.min((this.combo - 1) * 25, 200);
      pointsEarned += comboBonus;

      this.score += pointsEarned;

      this.emit("cardSuccess", {
        card: this.activeCard,
        pointsEarned,
        isFast,
        combo: this.combo,
        totalScore: this.score,
        accuracy: Math.round((this.correctCount / this.totalAttempts) * 100)
      });

      this.currentCardIndex++;
      return { isCorrect: true, pointsEarned, combo: this.combo, isFast };
    } else {
      const prevCombo = this.combo;
      this.combo = 0;

      this.emit("cardFail", {
        card: this.activeCard,
        targetCategoryId,
        correctCategory: this.activeCard.category,
        lostCombo: prevCombo > 2
      });

      return { isCorrect: false };
    }
  }

  startTimer() {
    this.stopTimer();
    this.emit("timerTick", {
      timeRemaining: this.timeRemaining,
      timeLimit: this.timeLimit,
      percent: 100
    });

    this.timerInterval = setInterval(() => {
      if (this.isPaused || !this.isLevelActive) return;

      this.timeRemaining--;
      const percent = Math.max(0, (this.timeRemaining / this.timeLimit) * 100);

      this.emit("timerTick", {
        timeRemaining: this.timeRemaining,
        timeLimit: this.timeLimit,
        percent
      });

      if (this.timeRemaining <= 5 && this.timeRemaining > 0) {
        soundEngine.playTick(true);
      } else if (this.timeRemaining <= 10 && this.timeRemaining > 5) {
        soundEngine.playTick(false);
      }

      if (this.timeRemaining <= 0) {
        this.stopTimer();
        this.completeLevel(true);
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  completeLevel(isTimeOut = false) {
    this.isLevelActive = false;
    this.stopTimer();

    const timeSpent = Math.round((Date.now() - this.levelStartTime) / 1000);
    const accuracy = this.totalAttempts > 0 ? Math.round((this.correctCount / this.totalAttempts) * 100) : 0;

    let stars = 1;
    if (accuracy >= 85 && (this.maxCombo >= 4 || this.correctCount >= 8)) {
      stars = 3;
    } else if (accuracy >= 70 || this.correctCount >= 6) {
      stars = 2;
    }

    const gradeProg = this.progress[this.currentGrade];
    const prevRecord = gradeProg.levels[this.currentLevelIndex] || { score: 0, stars: 0 };

    gradeProg.levels[this.currentLevelIndex] = {
      completed: true,
      score: Math.max(prevRecord.score, this.score),
      stars: Math.max(prevRecord.stars, stars),
      accuracy: Math.max(prevRecord.accuracy || 0, accuracy)
    };

    const totalLevelsInGrade = GAME_DATA[this.currentGrade].levels.length;
    const isNextUnlocked = this.currentLevelIndex + 1 < totalLevelsInGrade;
    if (isNextUnlocked && gradeProg.unlockedLevel <= this.currentLevelIndex) {
      gradeProg.unlockedLevel = this.currentLevelIndex + 1;
    }

    this.saveProgress();

    const isGradeCompleted = this.currentLevelIndex === totalLevelsInGrade - 1 && stars >= 1;

    const summary = {
      gradeKey: this.currentGrade,
      levelIndex: this.currentLevelIndex,
      levelData: this.activeLevelData,
      score: this.score,
      maxCombo: this.maxCombo,
      accuracy,
      correctCount: this.correctCount,
      totalAttempts: this.totalAttempts,
      timeSpent,
      stars,
      hasNextLevel: isNextUnlocked,
      isGradeCompleted,
      isTimeOut
    };

    this.emit("levelComplete", summary);
  }

  getGradeCompletionStats(gradeKey) {
    const gradeData = GAME_DATA[gradeKey];
    const prog = this.progress[gradeKey];
    if (!gradeData || !prog) return null;

    let totalScore = 0;
    let totalStars = 0;
    let totalAccuracySum = 0;
    let levelsCount = gradeData.levels.length;
    let completedLevelsCount = 0;

    for (let i = 0; i < levelsCount; i++) {
      const rec = prog.levels[i];
      if (rec && rec.completed) {
        completedLevelsCount++;
        totalScore += rec.score;
        totalStars += rec.stars;
        totalAccuracySum += rec.accuracy || 80;
      }
    }

    return {
      gradeTitle: gradeData.title,
      gradeBadge: gradeData.badge,
      totalScore,
      totalStars,
      maxStars: levelsCount * 3,
      avgAccuracy: completedLevelsCount > 0 ? Math.round(totalAccuracySum / completedLevelsCount) : 0,
      completedLevelsCount,
      totalLevelsCount: levelsCount
    };
  }
}
