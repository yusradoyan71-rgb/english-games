/**
 * PASAPAROLA - Core Game Logic Engine
 * Explicit state model with clear completion conditions and deck shuffling.
 */

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

class PasaparolaGame {
  constructor() {
    this.grade = 7; // 7 or 8
    this.teamCount = 2; // 1, 2, or 3
    this.teams = [];
    this.currentTeamIndex = 0;
    this.round = 1;

    // Explicit Alphabet States
    this.board = []; // Array of 26 letter nodes
    this.currentLetter = "A";
    this.activeLetterIndex = 0;
    this.completedLetters = []; // Letters answered (correct or wrong)
    this.passedLetters = []; // Letters currently in passed state
    this.remainingLetters = 26;
    this.gameCompleted = false;
    this.isSecondPass = false;

    // Question Deck Pools: { 7: { 'A': { pool: [], pointer: 0 } }, 8: { ... } }
    this.decks = { 7: {}, 8: {} };
    this.initDecks();

    // Start with a valid initial game state immediately
    this.startNewGame(this.grade, this.teamCount);
  }

  getSourceList(grade) {
    if (grade === 7) {
      if (typeof window !== "undefined" && window.grade7Questions && window.grade7Questions.length > 0) {
        return window.grade7Questions;
      }
      if (typeof grade7Questions !== "undefined" && grade7Questions.length > 0) {
        return grade7Questions;
      }
    } else {
      if (typeof window !== "undefined" && window.grade8Questions && window.grade8Questions.length > 0) {
        return window.grade8Questions;
      }
      if (typeof grade8Questions !== "undefined" && grade8Questions.length > 0) {
        return grade8Questions;
      }
    }
    return [];
  }

  // Initialize and shuffle question pools per letter
  initDecks() {
    [7, 8].forEach(grade => {
      const sourceList = this.getSourceList(grade);
      this.decks[grade] = {};

      ALPHABET.forEach(letter => {
        const questionsForLetter = sourceList.filter(q => q.letter && q.letter.toUpperCase() === letter);
        this.decks[grade][letter] = {
          pool: this.shuffleArray([...questionsForLetter]),
          pointer: 0
        };
      });
    });
  }

  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Draw the next unused question for a letter (reshuffles only when pool exhausted)
  drawQuestion(grade, letter) {
    const deck = this.decks[grade] && this.decks[grade][letter];
    if (!deck || !deck.pool || deck.pool.length === 0) {
      // Safe fallback question matching the letter
      return {
        letter: letter,
        question: `Name an English word starting with the letter ${letter}.`,
        answer: letter,
        grade: grade,
        category: "vocabulary"
      };
    }

    if (deck.pointer >= deck.pool.length) {
      deck.pool = this.shuffleArray(deck.pool);
      deck.pointer = 0;
    }

    const q = deck.pool[deck.pointer];
    deck.pointer++;
    return q;
  }

  // Setup / Reset new game
  startNewGame(grade = 7, teamCount = 2) {
    this.grade = grade;
    this.teamCount = teamCount;
    this.round = 1;
    this.currentTeamIndex = 0;
    this.gameCompleted = false;
    this.initTeams();
    this.initRoundBoard();
  }

  initTeams() {
    this.teams = [];
    if (this.teamCount === 1) {
      this.teams.push({
        id: 1,
        name: "🏫 CLASS TEAM",
        shortName: "CLASS",
        score: 0,
        color: "#38bdf8",
        badgeClass: "team-class"
      });
    } else if (this.teamCount === 2) {
      this.teams.push(
        { id: 1, name: "TEAM 1", shortName: "T1", score: 0, color: "#38bdf8", badgeClass: "team-1" },
        { id: 2, name: "TEAM 2", shortName: "T2", score: 0, color: "#fb923c", badgeClass: "team-2" }
      );
    } else {
      this.teams.push(
        { id: 1, name: "TEAM 1", shortName: "T1", score: 0, color: "#38bdf8", badgeClass: "team-1" },
        { id: 2, name: "TEAM 2", shortName: "T2", score: 0, color: "#fb923c", badgeClass: "team-2" },
        { id: 3, name: "TEAM 3", shortName: "T3", score: 0, color: "#a855f7", badgeClass: "team-3" }
      );
    }
  }

  // Initialize board for a round
  initRoundBoard() {
    this.completedLetters = [];
    this.passedLetters = [];
    this.remainingLetters = 26;
    this.isSecondPass = false;
    this.gameCompleted = false;

    this.board = ALPHABET.map((letter, idx) => {
      return {
        index: idx,
        letter: letter,
        status: "unplayed", // 'unplayed', 'current', 'correct', 'passed', 'wrong'
        question: this.drawQuestion(this.grade, letter),
        solvedByTeam: null
      };
    });

    this.activeLetterIndex = 0;
    this.currentLetter = "A";
    this.board[0].status = "current";
  }

  getCurrentLetter() {
    return this.board[this.activeLetterIndex] || null;
  }

  getCurrentTeam() {
    return this.teams[this.currentTeamIndex];
  }

  // Normalize user input for robust classroom matching
  normalizeAnswer(str) {
    if (!str) return "";
    return str
      .trim()
      .toUpperCase()
      .replace(/^A\s+/, "") // remove leading "A "
      .replace(/^AN\s+/, "") // remove leading "AN "
      .replace(/^THE\s+/, "") // remove leading "THE "
      .replace(/[^A-Z0-9]/g, ""); // strip hyphens, spaces, punctuation
  }

  // Check if input matches answer
  checkAnswer(input) {
    const current = this.getCurrentLetter();
    if (!current) return { correct: false };

    const normInput = this.normalizeAnswer(input);
    const normTarget = this.normalizeAnswer(current.question.answer);

    const isMatch = normInput.length > 0 && normInput === normTarget;
    return {
      correct: isMatch,
      targetAnswer: current.question.answer,
      letter: current.letter,
      team: this.getCurrentTeam()
    };
  }

  // Submit Answer
  submitAnswer(input) {
    const current = this.getCurrentLetter();
    if (!current || this.gameCompleted) return null;

    const result = this.checkAnswer(input);

    if (result.correct) {
      current.status = "correct";
      current.solvedByTeam = this.getCurrentTeam().id;
      this.getCurrentTeam().score += 10;
    } else {
      current.status = "wrong";
      current.solvedByTeam = null;
    }

    // Update state tracking
    if (!this.completedLetters.includes(current.letter)) {
      this.completedLetters.push(current.letter);
    }
    // Remove from passed letters if it was passed before
    this.passedLetters = this.passedLetters.filter(l => l !== current.letter);
    this.remainingLetters = 26 - this.completedLetters.length;

    const nextState = this.moveToNextLetter();
    return {
      ...result,
      nextState
    };
  }

  // Pasaparola (Pass) Action
  passCurrentLetter() {
    const current = this.getCurrentLetter();
    if (!current || this.gameCompleted) return null;

    current.status = "passed";

    if (!this.passedLetters.includes(current.letter)) {
      this.passedLetters.push(current.letter);
    }

    const nextState = this.moveToNextLetter();
    return {
      passed: true,
      letter: current.letter,
      team: this.getCurrentTeam(),
      nextState
    };
  }

  // Advance to next letter (or loop back to passed letters)
  moveToNextLetter() {
    // 1. Check completion: ONLY when all 26 letters are in completedLetters
    if (this.completedLetters.length >= 26) {
      this.gameCompleted = true;
      return { isComplete: true, scoreboard: this.getScoreboard() };
    }

    // 2. Rotate team turn
    this.rotateTeam();

    // 3. Look for next unplayed letter forward
    let nextIdx = -1;
    for (let i = this.activeLetterIndex + 1; i < this.board.length; i++) {
      if (this.board[i].status === "unplayed") {
        nextIdx = i;
        break;
      }
    }

    // 4. Look for unplayed letter from start
    if (nextIdx === -1) {
      for (let i = 0; i <= this.activeLetterIndex; i++) {
        if (this.board[i].status === "unplayed") {
          nextIdx = i;
          break;
        }
      }
    }

    // 5. If no unplayed letters remain, loop through PASSED letters!
    if (nextIdx === -1 && this.passedLetters.length > 0) {
      this.isSecondPass = true;
      // Search passed forward
      for (let i = this.activeLetterIndex + 1; i < this.board.length; i++) {
        if (this.board[i].status === "passed") {
          nextIdx = i;
          break;
        }
      }
      // Wrap around from beginning for passed letters
      if (nextIdx === -1) {
        for (let i = 0; i <= this.activeLetterIndex; i++) {
          if (this.board[i].status === "passed") {
            nextIdx = i;
            break;
          }
        }
      }
    }

    // 6. Safety check for completion
    if (nextIdx === -1) {
      this.gameCompleted = true;
      return { isComplete: true, scoreboard: this.getScoreboard() };
    }

    this.activeLetterIndex = nextIdx;
    this.currentLetter = this.board[nextIdx].letter;
    this.board[nextIdx].status = "current";

    return {
      isComplete: false,
      activeLetter: this.getCurrentLetter(),
      currentTeam: this.getCurrentTeam(),
      isSecondPass: this.isSecondPass,
      completedCount: this.completedLetters.length,
      passedCount: this.passedLetters.length
    };
  }

  rotateTeam() {
    if (this.teamCount > 1) {
      this.currentTeamIndex = (this.currentTeamIndex + 1) % this.teams.length;
    }
  }

  getScoreboard() {
    const sorted = [...this.teams].sort((a, b) => b.score - a.score);
    return {
      round: this.round,
      teams: sorted,
      stats: {
        correct: this.board.filter(l => l.status === "correct").length,
        wrong: this.board.filter(l => l.status === "wrong").length,
        completed: this.completedLetters.length,
        total: 26
      }
    };
  }

  // Start next round with fresh board and unused questions
  startNextRound() {
    this.round++;
    this.initRoundBoard();
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PasaparolaGame, ALPHABET };
}
