/**
 * PASAPAROLA - Core Game Logic Engine
 */

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

class PasaparolaGame {
  constructor() {
    this.grade = 7; // 7 or 8
    this.teamCount = 2; // 1, 2, or 3
    this.teams = [];
    this.currentTeamIndex = 0;
    this.currentRound = 1;

    // Letter states: { letter: 'A', status: 'unplayed' | 'current' | 'correct' | 'passed' | 'wrong', questionObj: null }
    this.board = [];
    this.activeLetterIndex = 0; // Index in this.board (0..25)
    this.isSecondPass = false; // When looping through passed letters

    // Question Deck Pools: { 7: { 'A': { pool: [], index: 0 } }, 8: { ... } }
    this.decks = { 7: {}, 8: {} };
    this.initDecks();
  }

  // Initialize and shuffle question pools per letter
  initDecks() {
    [7, 8].forEach(grade => {
      const sourceList = grade === 7 ? grade7Questions : grade8Questions;
      this.decks[grade] = {};

      ALPHABET.forEach(letter => {
        const questionsForLetter = sourceList.filter(q => q.letter.toUpperCase() === letter);
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
    const deck = this.decks[grade][letter];
    if (!deck || deck.pool.length === 0) {
      // Fallback
      return { letter, question: `Find a word starting with ${letter}.`, answer: letter, grade };
    }

    if (deck.pointer >= deck.pool.length) {
      // Reshuffle pool
      deck.pool = this.shuffleArray(deck.pool);
      deck.pointer = 0;
    }

    const q = deck.pool[deck.pointer];
    deck.pointer++;
    return q;
  }

  // Setup game with selected grade & team mode
  startNewGame(grade = 7, teamCount = 2) {
    this.grade = grade;
    this.teamCount = teamCount;
    this.currentRound = 1;
    this.currentTeamIndex = 0;
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

  // Prepare a round's alphabet board
  initRoundBoard() {
    this.isSecondPass = false;
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
    if (!current) return null;

    const result = this.checkAnswer(input);

    if (result.correct) {
      current.status = "correct";
      current.solvedByTeam = this.getCurrentTeam().id;
      this.getCurrentTeam().score += 10;
    } else {
      current.status = "wrong";
      current.solvedByTeam = null;
    }

    const nextState = this.moveToNextLetter();
    return {
      ...result,
      nextState
    };
  }

  // Pasaparola (Pass) Action
  passCurrentLetter() {
    const current = this.getCurrentLetter();
    if (!current) return null;

    current.status = "passed";

    const nextState = this.moveToNextLetter();
    return {
      passed: true,
      letter: current.letter,
      team: this.getCurrentTeam(),
      nextState
    };
  }

  // Advance to next eligible letter (or loop to passed letters)
  moveToNextLetter() {
    // Rotate team turn
    this.rotateTeam();

    // 1. Search for next 'unplayed' letter after current index
    let nextIdx = -1;
    for (let i = this.activeLetterIndex + 1; i < this.board.length; i++) {
      if (this.board[i].status === "unplayed") {
        nextIdx = i;
        break;
      }
    }

    // 2. If no subsequent unplayed letters, check if any unplayed letters remain from the start (rare)
    if (nextIdx === -1) {
      for (let i = 0; i <= this.activeLetterIndex; i++) {
        if (this.board[i].status === "unplayed") {
          nextIdx = i;
          break;
        }
      }
    }

    // 3. If no unplayed letters exist at all, loop through PASSED letters!
    if (nextIdx === -1) {
      this.isSecondPass = true;
      // Search for next 'passed' letter after active index
      for (let i = this.activeLetterIndex + 1; i < this.board.length; i++) {
        if (this.board[i].status === "passed") {
          nextIdx = i;
          break;
        }
      }
      // If none ahead, wrap around from beginning
      if (nextIdx === -1) {
        for (let i = 0; i <= this.activeLetterIndex; i++) {
          if (this.board[i].status === "passed") {
            nextIdx = i;
            break;
          }
        }
      }
    }

    // 4. If still no eligible letter, then the whole board is COMPLETED!
    if (nextIdx === -1) {
      return { isComplete: true, scoreboard: this.getScoreboard() };
    }

    this.activeLetterIndex = nextIdx;
    this.board[nextIdx].status = "current";

    return {
      isComplete: false,
      activeLetter: this.getCurrentLetter(),
      currentTeam: this.getCurrentTeam(),
      isSecondPass: this.isSecondPass
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
      round: this.currentRound,
      teams: sorted,
      stats: {
        correct: this.board.filter(l => l.status === "correct").length,
        wrong: this.board.filter(l => l.status === "wrong").length,
        total: 26
      }
    };
  }

  // Start next round with fresh board and unused questions
  startNextRound() {
    this.currentRound++;
    this.initRoundBoard();
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PasaparolaGame, ALPHABET };
}
