/**
 * HANGMAN - Core Game Logic & State Management
 * Handles round mechanics, scoring, streaks, hints, timer, and progression.
 * Progressive 6-part Hangman Drawing Mechanic (Mistakes: 0 to 6).
 */

class HangmanGame {
  constructor() {
    this.currentGrade = 'grade7'; // 'grade7' or 'grade8'
    this.currentLevelId = 1;
    this.currentWordObj = null;
    this.currentWord = "";
    this.guessedLetters = new Set();
    this.correctLetters = new Set();
    this.incorrectLetters = new Set();
    
    this.maxAttempts = 6;
    this.mistakesCount = 0;
    
    // Scoring & Stats
    this.totalScore = 0;
    this.roundScore = 0;
    this.currentStreak = 0;
    this.bestStreak = 0;
    this.hintsUsedInRound = 0;
    this.totalHintsUsed = 0;
    this.totalLettersGuessed = 0;
    this.correctLettersGuessed = 0;
    this.wordsSolvedInLevel = 0;
    this.wordsFailedInLevel = 0;
    
    // Timer
    this.timerInterval = null;
    this.timeRemaining = null;
    this.maxTime = null;

    // Word Pool Management
    this.availableWords = [];
    this.completedWordsHistory = [];

    // Progression
    this.progress = this.loadProgress();

    // Callbacks for UI updates
    this.onStateChange = null;
    this.onTimerTick = null;
    this.onWordComplete = null;
    this.onWordFail = null;
    this.onLevelComplete = null;
    this.onGradeComplete = null;
  }

  loadProgress() {
    const defaultProg = {
      grade7: { unlockedLevels: [1], completedLevels: [], highScores: {} },
      grade8: { unlockedLevels: [1], completedLevels: [], highScores: {} }
    };
    try {
      const saved = localStorage.getItem('hangman_progress_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not read localStorage", e);
    }
    return defaultProg;
  }

  saveProgress() {
    try {
      localStorage.setItem('hangman_progress_v1', JSON.stringify(this.progress));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  setGrade(gradeKey) {
    if (GAME_DATA[gradeKey]) {
      this.currentGrade = gradeKey;
      this.currentLevelId = 1;
      this.currentStreak = 0;
      this.totalScore = 0;
      this.totalHintsUsed = 0;
      this.totalLettersGuessed = 0;
      this.correctLettersGuessed = 0;
    }
  }

  getCurrentGradeData() {
    return GAME_DATA[this.currentGrade];
  }

  getCurrentLevelData() {
    const gData = this.getCurrentGradeData();
    return gData.levels.find(lvl => lvl.id === this.currentLevelId) || gData.levels[0];
  }

  startLevel(levelId) {
    this.currentLevelId = levelId;
    this.wordsSolvedInLevel = 0;
    this.wordsFailedInLevel = 0;
    
    const levelData = this.getCurrentLevelData();
    this.availableWords = [...levelData.words].sort(() => Math.random() - 0.5);
    this.nextWord();
  }

  nextWord() {
    this.stopTimer();
    
    const levelData = this.getCurrentLevelData();
    if (this.wordsSolvedInLevel >= levelData.wordsToPass) {
      this.handleLevelCompleted();
      return;
    }

    if (this.availableWords.length === 0) {
      this.availableWords = [...levelData.words].sort(() => Math.random() - 0.5);
    }

    this.currentWordObj = this.availableWords.pop();
    this.currentWord = this.currentWordObj.word.toUpperCase();
    this.guessedLetters.clear();
    this.correctLetters.clear();
    this.incorrectLetters.clear();
    this.mistakesCount = 0;
    this.hintsUsedInRound = 0;
    this.roundScore = 0;

    if (levelData.timer) {
      this.maxTime = levelData.timer;
      this.timeRemaining = levelData.timer;
      this.startTimer();
    } else {
      this.maxTime = null;
      this.timeRemaining = null;
    }

    if (this.onStateChange) this.onStateChange(this.getState());
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
        if (this.onTimerTick) this.onTimerTick(this.timeRemaining, this.maxTime);
        if (this.timeRemaining <= 5 && this.timeRemaining > 0) {
          audioEngine.playTimerTick();
        }
      } else {
        this.stopTimer();
        this.handleTimeUp();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  handleTimeUp() {
    this.handleRoundFailure("TIME'S UP!");
  }

  guessLetter(letter) {
    letter = letter.toUpperCase();
    if (!/^[A-Z]$/.test(letter)) return null;
    if (this.guessedLetters.has(letter) || this.isRoundOver()) return null;

    this.guessedLetters.add(letter);
    this.totalLettersGuessed++;

    const isMatch = this.currentWord.includes(letter);

    if (isMatch) {
      this.correctLetters.add(letter);
      this.correctLettersGuessed++;
      audioEngine.playCorrect();

      const isWordSolved = [...this.currentWord].every(char => 
        char === ' ' || char === '-' || this.correctLetters.has(char)
      );

      if (isWordSolved) {
        this.handleRoundSuccess();
      } else {
        if (this.onStateChange) this.onStateChange(this.getState());
      }

      return { letter, correct: true, solved: isWordSolved, mistakesCount: this.mistakesCount };
    } else {
      this.incorrectLetters.add(letter);
      this.mistakesCount = Math.min(this.maxAttempts, this.mistakesCount + 1);
      audioEngine.playIncorrect();

      const isGameOver = this.mistakesCount >= this.maxAttempts;

      if (isGameOver) {
        this.handleRoundFailure("FIGURE COMPLETED");
      } else {
        if (this.onStateChange) this.onStateChange(this.getState());
      }

      return { 
        letter, 
        correct: false, 
        solved: false, 
        mistakesCount: this.mistakesCount, 
        maxMistakes: this.maxAttempts 
      };
    }
  }

  handleRoundSuccess() {
    this.stopTimer();
    this.wordsSolvedInLevel++;
    this.currentStreak++;
    if (this.currentStreak > this.bestStreak) {
      this.bestStreak = this.currentStreak;
    }

    // Score Calculation
    let basePoints = 100;
    let fewerMistakesBonus = (this.maxAttempts - this.mistakesCount) * 10;
    let noHintBonus = (this.hintsUsedInRound === 0) ? 50 : 0;
    
    // Streak multiplier
    let streakBonus = 0;
    if (this.currentStreak >= 10) {
      streakBonus = 80;
    } else if (this.currentStreak >= 5) {
      streakBonus = 40;
    } else if (this.currentStreak >= 3) {
      streakBonus = 20;
    }

    // Speed bonus for timed levels
    let speedBonus = 0;
    if (this.maxTime && this.timeRemaining) {
      speedBonus = Math.floor((this.timeRemaining / this.maxTime) * 40);
    }

    const roundTotal = basePoints + fewerMistakesBonus + noHintBonus + streakBonus + speedBonus;
    this.roundScore = roundTotal;
    this.totalScore += roundTotal;

    audioEngine.playWordComplete();
    if (this.currentStreak === 3 || this.currentStreak === 5 || this.currentStreak === 10) {
      setTimeout(() => audioEngine.playStreak(this.currentStreak), 600);
    }

    if (this.onWordComplete) {
      this.onWordComplete({
        wordObj: this.currentWordObj,
        roundScore: this.roundScore,
        basePoints,
        fewerMistakesBonus,
        noHintBonus,
        streakBonus,
        speedBonus,
        mistakesCount: this.mistakesCount,
        currentStreak: this.currentStreak,
        totalScore: this.totalScore,
        wordsSolvedInLevel: this.wordsSolvedInLevel,
        wordsToPass: this.getCurrentLevelData().wordsToPass
      });
    }
  }

  handleRoundFailure(reason = "FIGURE COMPLETED") {
    this.stopTimer();
    this.wordsFailedInLevel++;
    this.currentStreak = 0;
    audioEngine.playGameOver();

    if (this.onWordFail) {
      this.onWordFail({
        wordObj: this.currentWordObj,
        reason,
        mistakesCount: this.mistakesCount,
        totalScore: this.totalScore,
        wordsSolvedInLevel: this.wordsSolvedInLevel,
        wordsToPass: this.getCurrentLevelData().wordsToPass
      });
    }
  }

  useHint(hintType) {
    if (this.isRoundOver()) return null;

    let deduction = 50;
    let hintResult = null;

    if (this.currentGrade === 'grade7') {
      if (hintType === 'revealFirstLetter') {
        const firstLetter = this.currentWord[0];
        if (!this.guessedLetters.has(firstLetter)) {
          this.guessLetter(firstLetter);
          hintResult = { type: 'letter', value: firstLetter, text: `Revealed first letter: ${firstLetter}` };
          deduction = 35;
        } else {
          return this.useHint('revealRandomLetter');
        }
      } else if (hintType === 'revealRandomLetter') {
        const unrevealed = [...this.currentWord].filter(c => /^[A-Z]$/.test(c) && !this.guessedLetters.has(c));
        if (unrevealed.length > 0) {
          const randLetter = unrevealed[Math.floor(Math.random() * unrevealed.length)];
          this.guessLetter(randLetter);
          hintResult = { type: 'letter', value: randLetter, text: `Revealed letter: ${randLetter}` };
          deduction = 40;
        }
      } else if (hintType === 'showExtraClue') {
        hintResult = { type: 'clue', text: this.currentWordObj.definition };
        deduction = 30;
      }
    } else {
      if (hintType === 'revealRandomLetter') {
        const unrevealed = [...this.currentWord].filter(c => /^[A-Z]$/.test(c) && !this.guessedLetters.has(c));
        if (unrevealed.length > 0) {
          const randLetter = unrevealed[Math.floor(Math.random() * unrevealed.length)];
          this.guessLetter(randLetter);
          hintResult = { type: 'letter', value: randLetter, text: `Revealed letter: ${randLetter}` };
          deduction = 50;
        }
      } else if (hintType === 'removeIncorrect') {
        const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        const incorrectUnused = allLetters.filter(l => 
          !this.currentWord.includes(l) && !this.guessedLetters.has(l)
        );
        if (incorrectUnused.length >= 2) {
          const shuffled = incorrectUnused.sort(() => Math.random() - 0.5);
          const removed = [shuffled[0], shuffled[1]];
          removed.forEach(l => {
            this.guessedLetters.add(l);
            this.incorrectLetters.add(l);
          });
          hintResult = { type: 'removed', value: removed, text: `Removed letters: ${removed.join(', ')}` };
          deduction = 45;
        }
      } else if (hintType === 'showContextOrDef') {
        hintResult = { type: 'clue', text: this.currentWordObj.context || this.currentWordObj.definition };
        deduction = 40;
      }
    }

    if (hintResult) {
      this.hintsUsedInRound++;
      this.totalHintsUsed++;
      this.totalScore = Math.max(0, this.totalScore - deduction);
      audioEngine.playHint();
      if (this.onStateChange) this.onStateChange(this.getState());
    }

    return { hintResult, deduction };
  }

  handleLevelCompleted() {
    this.stopTimer();
    audioEngine.playLevelComplete();

    const gProg = this.progress[this.currentGrade];
    if (!gProg.completedLevels.includes(this.currentLevelId)) {
      gProg.completedLevels.push(this.currentLevelId);
    }

    const gData = this.getCurrentGradeData();
    const nextLevelId = this.currentLevelId + 1;

    if (nextLevelId <= gData.totalLevels && !gProg.unlockedLevels.includes(nextLevelId)) {
      gProg.unlockedLevels.push(nextLevelId);
    }

    this.saveProgress();

    const accuracy = this.totalLettersGuessed > 0 
      ? Math.round((this.correctLettersGuessed / this.totalLettersGuessed) * 100) 
      : 100;

    const levelData = this.getCurrentLevelData();
    const isGradeComplete = this.currentLevelId >= gData.totalLevels;

    if (isGradeComplete) {
      if (this.onGradeComplete) {
        this.onGradeComplete({
          gradeKey: this.currentGrade,
          gradeTitle: gData.title,
          totalScore: this.totalScore,
          bestStreak: this.bestStreak,
          accuracy,
          totalHintsUsed: this.totalHintsUsed,
          levelsCompleted: gProg.completedLevels.length
        });
      }
    } else {
      if (this.onLevelComplete) {
        this.onLevelComplete({
          levelId: this.currentLevelId,
          levelName: levelData.name,
          totalScore: this.totalScore,
          accuracy,
          bestStreak: this.bestStreak,
          hintsUsed: this.hintsUsedInRound,
          nextLevelId: nextLevelId <= gData.totalLevels ? nextLevelId : null
        });
      }
    }
  }

  isRoundOver() {
    if (!this.currentWord) return true;
    const isSolved = [...this.currentWord].every(char => 
      char === ' ' || char === '-' || this.correctLetters.has(char)
    );
    return isSolved || this.mistakesCount >= this.maxAttempts;
  }

  getState() {
    const levelData = this.getCurrentLevelData();
    const gData = this.getCurrentGradeData();

    const displayWord = [...this.currentWord].map(char => {
      if (char === ' ' || char === '-') return char;
      return this.correctLetters.has(char) ? char : '_';
    });

    const accuracy = this.totalLettersGuessed > 0 
      ? Math.round((this.correctLettersGuessed / this.totalLettersGuessed) * 100) 
      : 100;

    return {
      gradeKey: this.currentGrade,
      gradeTitle: gData.title,
      levelId: this.currentLevelId,
      levelName: levelData.name,
      levelDesc: levelData.description,
      wordsSolvedInLevel: this.wordsSolvedInLevel,
      wordsToPass: levelData.wordsToPass,
      displayWord,
      rawWord: this.currentWord,
      category: this.currentWordObj ? this.currentWordObj.category : "",
      clue: this.currentWordObj ? this.currentWordObj.clue : "",
      definition: this.currentWordObj ? this.currentWordObj.definition : "",
      context: this.currentWordObj ? this.currentWordObj.context : "",
      guessedLetters: Array.from(this.guessedLetters),
      correctLetters: Array.from(this.correctLetters),
      incorrectLetters: Array.from(this.incorrectLetters),
      mistakesCount: this.mistakesCount,
      maxMistakes: this.maxAttempts,
      totalScore: this.totalScore,
      currentStreak: this.currentStreak,
      bestStreak: this.bestStreak,
      accuracy,
      timeRemaining: this.timeRemaining,
      maxTime: this.maxTime,
      hasTimer: !!this.maxTime
    };
  }
}

const hangmanEngine = new HangmanGame();
