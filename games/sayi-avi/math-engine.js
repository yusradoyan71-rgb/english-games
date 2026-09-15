/**
 * SAYI AVI (Number Hunt) — Mathematical Engine
 * 
 * Generates verified mathematical expressions with 100% programmatic accuracy.
 * Evaluates and validates every card's mathematical expression against the round target.
 */

class MathEngine {
  /**
   * Safely evaluate a mathematical expression string containing +, −, ×, ÷, *, /, -, and parentheses.
   * Only allows valid arithmetic expressions and ensures integer division.
   * @param {string} expr 
   * @returns {{ value: number|null, isValid: boolean, isInteger: boolean }}
   */
  static evaluate(expr) {
    if (!expr || typeof expr !== 'string') {
      return { value: null, isValid: false, isInteger: false };
    }

    // Normalize symbols
    let clean = expr
      .replace(/×/g, '*')
      .replace(/x/g, '*')
      .replace(/X/g, '*')
      .replace(/−/g, '-')
      .replace(/–/g, '-')
      .replace(/÷/g, '/')
      .replace(/:/g, '/')
      .replace(/\s+/g, '');

    // Validate allowed characters: digits, +, -, *, /, (, )
    if (!/^[0-9+\-*/()]+$/.test(clean)) {
      return { value: null, isValid: false, isInteger: false };
    }

    try {
      const tokens = this.tokenize(clean);
      if (!tokens) return { value: null, isValid: false, isInteger: false };
      
      const rpn = this.shuntingYard(tokens);
      if (!rpn) return { value: null, isValid: false, isInteger: false };

      const result = this.evalRPN(rpn);
      if (result === null || !Number.isFinite(result)) {
        return { value: null, isValid: false, isInteger: false };
      }

      const isInteger = Number.isInteger(result);
      return { value: result, isValid: true, isInteger };
    } catch (e) {
      return { value: null, isValid: false, isInteger: false };
    }
  }

  /**
   * Tokenize arithmetic expression
   */
  static tokenize(str) {
    const tokens = [];
    let i = 0;
    while (i < str.length) {
      const char = str[i];
      if ('+-*/()'.includes(char)) {
        tokens.push(char);
        i++;
      } else if (/[0-9]/.test(char)) {
        let numStr = '';
        while (i < str.length && /[0-9]/.test(str[i])) {
          numStr += str[i];
          i++;
        }
        tokens.push(Number(numStr));
      } else {
        return null;
      }
    }
    return tokens;
  }

  /**
   * Convert infix tokens to Postfix (RPN) via Shunting-Yard Algorithm
   */
  static shuntingYard(tokens) {
    const output = [];
    const ops = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

    for (let token of tokens) {
      if (typeof token === 'number') {
        output.push(token);
      } else if ('+-*/'.includes(token)) {
        while (
          ops.length > 0 &&
          ops[ops.length - 1] !== '(' &&
          precedence[ops[ops.length - 1]] >= precedence[token]
        ) {
          output.push(ops.pop());
        }
        ops.push(token);
      } else if (token === '(') {
        ops.push(token);
      } else if (token === ')') {
        while (ops.length > 0 && ops[ops.length - 1] !== '(') {
          output.push(ops.pop());
        }
        if (ops.length === 0) return null; // Mismatched parentheses
        ops.pop(); // Pop '('
      }
    }

    while (ops.length > 0) {
      const op = ops.pop();
      if (op === '(' || op === ')') return null;
      output.push(op);
    }

    return output;
  }

  /**
   * Evaluate RPN (Reverse Polish Notation)
   */
  static evalRPN(rpn) {
    const stack = [];
    for (let token of rpn) {
      if (typeof token === 'number') {
        stack.push(token);
      } else {
        if (stack.length < 2) return null;
        const b = stack.pop();
        const a = stack.pop();
        let res;
        switch (token) {
          case '+': res = a + b; break;
          case '-': res = a - b; break;
          case '*': res = a * b; break;
          case '/':
            if (b === 0) return null; // Division by zero
            res = a / b;
            break;
          default: return null;
        }
        stack.push(res);
      }
    }
    return stack.length === 1 ? stack[0] : null;
  }

  /**
   * Random integer helper in range [min, max] inclusive
   */
  static randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Random choice helper from array
   */
  static randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /**
   * Format expression string with standard classroom math symbols:
   * replaces * with × and - with − and / with ÷
   */
  static formatDisplay(expr) {
    return expr
      .replace(/\*/g, ' × ')
      .replace(/\//g, ' ÷ ')
      .replace(/\+/g, ' + ')
      .replace(/-/g, ' − ')
      .replace(/\s+/g, ' ')
      .replace(/\(\s+/g, '(')
      .replace(/\s+\)/g, ')')
      .trim();
  }

  /**
   * Target pools for each difficulty
   */
  static getTargetPool(difficulty) {
    switch (difficulty) {
      case 'kolay':
        return [
          12, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 30, 32, 35, 36, 40,
          42, 45, 48, 50, 54, 56, 60, 63, 64, 70, 72, 75, 80, 81, 84, 90, 96, 100
        ];
      case 'orta':
        return [
          48, 60, 72, 80, 90, 96, 100, 108, 120, 125, 135, 140, 144, 150, 160, 175,
          180, 192, 200, 210, 220, 225, 240, 250, 270, 280, 300, 320, 350, 360, 400, 420, 450, 480, 500
        ];
      case 'zor':
        return [
          48, 64, 72, 84, 96, 100, 120, 144, 150, 168, 180, 192, 200, 216, 240, 250,
          288, 300, 320, 324, 360, 400, 420, 450, 480, 500, 540, 576, 600, 640, 720, 750, 800, 840, 900, 960, 1000
        ];
      default:
        return [24, 36, 48, 60, 72, 84, 96, 100];
    }
  }

  /**
   * Pick target number based on difficulty and avoid recently used targets in session
   */
  static pickTarget(difficulty, usedTargets = new Set()) {
    const fullPool = this.getTargetPool(difficulty);
    const available = fullPool.filter(t => !usedTargets.has(t));
    if (available.length > 0) {
      return this.randChoice(available);
    }
    return this.randChoice(fullPool);
  }

  /**
   * Generate verified correct expressions for target
   */
  static generateCorrectExpressions(target, difficulty, count = 5) {
    const expressions = new Set();
    const results = [];

    const addIfValid = (rawExpr) => {
      const evalRes = this.evaluate(rawExpr);
      if (evalRes.isValid && evalRes.isInteger && evalRes.value === target) {
        const display = this.formatDisplay(rawExpr);
        if (!expressions.has(display)) {
          expressions.add(display);
          results.push({
            expression: display,
            raw: rawExpr,
            value: target,
            isCorrect: true
          });
          return true;
        }
      }
      return false;
    };

    let attempts = 0;
    while (results.length < count && attempts < 400) {
      attempts++;

      // 1. Addition: a + b = target
      if (target > 1) {
        let a = this.randInt(1, target - 1);
        let b = target - a;
        addIfValid(`${a}+${b}`);
      }

      // 2. Subtraction: a - b = target -> a = target + b
      {
        let b = this.randInt(1, difficulty === 'kolay' ? 60 : (difficulty === 'orta' ? 150 : 250));
        let a = target + b;
        addIfValid(`${a}-${b}`);
      }

      // 3. Multiplication: a * b = target
      {
        const factors = [];
        for (let i = 2; i <= Math.sqrt(target); i++) {
          if (target % i === 0) {
            factors.push([i, target / i]);
          }
        }
        if (factors.length > 0) {
          const pair = this.randChoice(factors);
          if (Math.random() < 0.5) {
            addIfValid(`${pair[0]}*${pair[1]}`);
          } else {
            addIfValid(`${pair[1]}*${pair[0]}`);
          }
        }
      }

      // 4. Division: a / b = target -> a = target * b
      {
        let maxDiv = difficulty === 'kolay' ? 5 : (difficulty === 'orta' ? 8 : 12);
        let b = this.randInt(2, maxDiv);
        let a = target * b;
        addIfValid(`${a}/${b}`);
      }

      // 5. Multi-step expressions (Medium & Hard)
      if (difficulty === 'orta' || difficulty === 'zor') {
        // (a * b) + c = target
        let c = this.randInt(1, Math.min(target - 1, 60));
        let rem = target - c;
        for (let i = 2; i <= 20; i++) {
          if (rem % i === 0 && rem / i >= 2 && rem / i <= 50) {
            addIfValid(`(${i}*${rem / i})+${c}`);
            addIfValid(`${c}+(${i}*${rem / i})`);
            break;
          }
        }

        // (a * b) - c = target
        let cSub = this.randInt(2, 50);
        let total = target + cSub;
        for (let i = 2; i <= 25; i++) {
          if (total % i === 0 && total / i >= 2 && total / i <= 50) {
            addIfValid(`(${i}*${total / i})-${cSub}`);
            break;
          }
        }

        // (a + b) * c = target
        for (let cMul = 2; cMul <= 10; cMul++) {
          if (target % cMul === 0) {
            let sum = target / cMul;
            if (sum >= 3) {
              let aAdd = this.randInt(1, sum - 1);
              let bAdd = sum - aAdd;
              addIfValid(`(${aAdd}+${bAdd})*${cMul}`);
              addIfValid(`${cMul}*(${aAdd}+${bAdd})`);
            }
          }
        }

        // Additional patterns for Zor (Hard)
        if (difficulty === 'zor') {
          // (a - b) / c = target -> a - b = target * c
          let cDiv = this.randInt(2, 6);
          let diffVal = target * cDiv;
          let bVal = this.randInt(10, 100);
          let aVal = diffVal + bVal;
          addIfValid(`(${aVal}-${bVal})/${cDiv}`);

          // (a / b) - c = target -> a / b = target + c
          let cM = this.randInt(1, 20);
          let bM = this.randInt(2, 5);
          let aM = (target + cM) * bM;
          addIfValid(`(${aM}/${bM})-${cM}`);

          // a * (b - c) = target
          for (let factor = 2; factor <= 15; factor++) {
            if (target % factor === 0) {
              let diff = target / factor;
              let cVal = this.randInt(1, 10);
              let bVal = diff + cVal;
              addIfValid(`${factor}*(${bVal}-${cVal})`);
              addIfValid(`(${bVal}-${cVal})*${factor}`);
            }
          }

          // a * b + c * d = target
          let part1 = this.randInt(Math.floor(target * 0.2), Math.floor(target * 0.8));
          let part2 = target - part1;
          let p1_f = [];
          for (let k = 2; k <= 15; k++) if (part1 % k === 0) p1_f.push([k, part1 / k]);
          let p2_f = [];
          for (let k = 2; k <= 15; k++) if (part2 % k === 0) p2_f.push([k, part2 / k]);
          if (p1_f.length > 0 && p2_f.length > 0) {
            let f1 = this.randChoice(p1_f);
            let f2 = this.randChoice(p2_f);
            addIfValid(`(${f1[0]}*${f1[1]})+(${f2[0]}*${f2[1]})`);
          }
        }
      }
    }

    // If we need more correct expressions, fill with guaranteed addition/subtraction variations
    let fallbackOffset = 1;
    while (results.length < count && fallbackOffset < 100) {
      let b = fallbackOffset;
      let a = target + b;
      addIfValid(`${a}-${b}`);
      if (target > fallbackOffset) {
        addIfValid(`${target - fallbackOffset}+${fallbackOffset}`);
      }
      fallbackOffset++;
    }

    return results.slice(0, count);
  }

  /**
   * Generate plausible distractor (incorrect) expressions that do NOT equal target
   */
  static generateDistractors(target, difficulty, count = 7, correctSet = new Set()) {
    const expressions = new Set(correctSet);
    const results = [];

    const addDistractor = (rawExpr) => {
      const evalRes = this.evaluate(rawExpr);
      if (evalRes.isValid && evalRes.isInteger && evalRes.value !== target && evalRes.value > 0) {
        const display = this.formatDisplay(rawExpr);
        if (!expressions.has(display)) {
          expressions.add(display);
          results.push({
            expression: display,
            raw: rawExpr,
            value: evalRes.value,
            isCorrect: false
          });
          return true;
        }
      }
      return false;
    };

    let attempts = 0;
    while (results.length < count && attempts < 500) {
      attempts++;

      // Distractor 1: Near miss addition (target ± 1..10)
      let offset = this.randChoice([-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 10, -10]);
      let fakeTarget = target + offset;
      if (fakeTarget > 2) {
        let a = this.randInt(1, fakeTarget - 1);
        let b = fakeTarget - a;
        addDistractor(`${a}+${b}`);
      }

      // Distractor 2: Near miss subtraction
      {
        let b = this.randInt(1, 50);
        let fakeDiff = target + this.randChoice([-5, -3, -2, -1, 1, 2, 3, 5, 8, -8]);
        let a = fakeDiff + b;
        if (a > b && fakeDiff > 0) {
          addDistractor(`${a}-${b}`);
        }
      }

      // Distractor 3: Near miss multiplication
      {
        let a = this.randInt(2, Math.min(20, Math.max(5, Math.floor(Math.sqrt(target) + 4))));
        let b = this.randInt(2, 20);
        if (a * b !== target && a * b > 0) {
          addDistractor(`${a}*${b}`);
        }
      }

      // Distractor 4: Near miss division
      {
        let b = this.randInt(2, 6);
        let wrongAns = target + this.randChoice([-5, -4, -2, -1, 1, 2, 4, 5, 10]);
        if (wrongAns > 0) {
          let a = wrongAns * b;
          addDistractor(`${a}/${b}`);
        }
      }

      // Distractor 5: Multi-step & Parenthesis traps for Orta/Zor
      if (difficulty === 'orta' || difficulty === 'zor') {
        let a = this.randInt(2, 12);
        let b = this.randInt(2, 12);
        let c = this.randInt(1, 25);
        
        if ((a * b) - c > 0) {
          addDistractor(`(${a}*${b})-${c}`);
        }
        addDistractor(`(${a}*${b})+${c}`);
        addDistractor(`(${a}+${b})*${c}`);

        if (difficulty === 'zor') {
          let d = this.randInt(2, 6);
          if ((a * b) > c) {
            let num = (a * b) + c;
            let divExact = num * d;
            addDistractor(`(${divExact}/${d})-${c}`);
          }
        }
      }
    }

    // Safety guarantee: fill remaining distractors with safe simple math
    let safetyN = 1;
    while (results.length < count) {
      let offset = safetyN * 3 + 2;
      let wrongVal = target + (safetyN % 2 === 0 ? offset : -offset);
      if (wrongVal > 5) {
        addDistractor(`${wrongVal - 3}+3`);
      } else {
        addDistractor(`${target + 12}+${safetyN}`);
      }
      safetyN++;
    }

    return results.slice(0, count);
  }

  /**
   * Safe Fallback Round Generator (Guarantees zero blank screen in all failure conditions)
   */
  static getFallbackRound(difficulty = 'kolay', target = 48) {
    const rawCorrect = [
      `${target - 10}+10`,
      `${target + 15}-15`,
      `2*${target / 2}`,
      `${target * 2}/2`,
      `${target - 1}+1`
    ];
    const rawDistractors = [
      `${target + 5}+2`,
      `${target + 10}-3`,
      `${target - 4}+1`,
      `${target + 20}-5`,
      `3*${Math.floor(target / 2)}`,
      `${target + 8}-2`,
      `${target - 7}+2`
    ];

    const cards = [];
    rawCorrect.forEach(expr => {
      const evalRes = this.evaluate(expr);
      cards.push({
        expression: this.formatDisplay(expr),
        raw: expr,
        value: target,
        actualValue: evalRes.value || target,
        isCorrect: true
      });
    });

    rawDistractors.forEach(expr => {
      const evalRes = this.evaluate(expr);
      cards.push({
        expression: this.formatDisplay(expr),
        raw: expr,
        value: evalRes.value || (target + 5),
        actualValue: evalRes.value || (target + 5),
        isCorrect: false
      });
    });

    // Shuffle
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return {
      target,
      difficulty,
      totalCards: 12,
      correctCount: 5,
      cards
    };
  }

  /**
   * Generate a complete round with target, correct cards, and distractors.
   * Total cards: exactly 12 cards (varying 4 to 6 correct, remaining distractors).
   * Shuffled randomly.
   */
  static generateRound(difficulty = 'kolay', totalCards = 12, usedTargets = new Set()) {
    try {
      const target = this.pickTarget(difficulty, usedTargets);
      
      // Randomize number of correct cards (4, 5, or 6)
      const correctCount = this.randChoice([4, 5, 5, 6]);
      const distractorCount = totalCards - correctCount;

      const correctCards = this.generateCorrectExpressions(target, difficulty, correctCount);
      const actualCorrectCount = correctCards.length;
      const actualDistractorCount = totalCards - actualCorrectCount;

      const correctSet = new Set(correctCards.map(c => c.expression));
      const distractorCards = this.generateDistractors(target, difficulty, actualDistractorCount, correctSet);

      const allCards = [...correctCards, ...distractorCards];

      // Verification & strictly assertion pass
      for (let card of allCards) {
        const evalRes = this.evaluate(card.raw);
        if (!evalRes.isValid || !evalRes.isInteger) {
          return this.getFallbackRound(difficulty, target);
        }
        card.actualValue = evalRes.value;
        if (evalRes.value === target) {
          card.isCorrect = true;
        } else {
          card.isCorrect = false;
        }
      }

      // Re-count actual verified correct cards
      const verifiedCorrectCount = allCards.filter(c => c.isCorrect).length;

      // Shuffle cards using Fisher-Yates
      for (let i = allCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
      }

      return {
        target,
        difficulty,
        totalCards: allCards.length,
        correctCount: verifiedCorrectCount,
        cards: allCards
      };
    } catch (err) {
      console.error('generateRound encountered error, using fallback:', err);
      return this.getFallbackRound(difficulty, 48);
    }
  }
}

// Global browser and Node.js export
if (typeof window !== 'undefined') {
  window.MathEngine = MathEngine;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MathEngine;
}
