/**
 * SAYI AVI (Number Hunt) — Mathematical Engine
 * 
 * Generates verified mathematical expressions with 100% programmatic accuracy.
 * Never relies on hardcoded claims: every card's mathematical value is computed and checked.
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

    // Normalize symbols:
    // Replace visual multiplication '×' or 'x' or 'X' with '*'
    // Replace visual subtraction '−' (minus sign \u2212) or '–' (en dash \u2013) with '-'
    // Replace visual division '÷' or ':' with '/'
    let clean = expr
      .replace(/×/g, '*')
      .replace(/x/g, '*')
      .replace(/X/g, '*')
      .replace(/−/g, '-')
      .replace(/–/g, '-')
      .replace(/÷/g, '/')
      .replace(/:/g, '/')
      .replace(/\s+/g, '');

    // Validate characters allowed: only digits, +, -, *, /, (, )
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
   * Format expression string with classroom math symbols:
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
   * Pick target number based on difficulty
   */
  static pickTarget(difficulty) {
    switch (difficulty) {
      case 'kolay': {
        const easyTargets = [
          12, 16, 18, 20, 24, 25, 28, 30, 32, 36, 40, 42, 45, 48, 50,
          54, 56, 60, 64, 70, 72, 75, 80, 84, 90, 96, 100
        ];
        return this.randChoice(easyTargets);
      }
      case 'orta': {
        const mediumTargets = [
          48, 60, 72, 80, 90, 96, 100, 120, 125, 140, 144, 150, 160, 175, 180,
          200, 210, 220, 240, 250, 280, 300, 320, 350, 360, 400, 420, 450, 480, 500
        ];
        return this.randChoice(mediumTargets);
      }
      case 'zor': {
        const hardTargets = [
          48, 64, 72, 84, 96, 100, 120, 144, 150, 168, 180, 200, 216, 240, 250,
          288, 300, 324, 360, 400, 450, 480, 500, 540, 600, 640, 720, 750, 800, 900, 1000
        ];
        return this.randChoice(hardTargets);
      }
      default:
        return 48;
    }
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
    while (results.length < count && attempts < 300) {
      attempts++;

      // 1. Addition: a + b = target
      if (target > 1) {
        let a = this.randInt(1, target - 1);
        let b = target - a;
        addIfValid(`${a}+${b}`);
      }

      // 2. Subtraction: a - b = target -> a = target + b
      {
        let b = this.randInt(1, difficulty === 'kolay' ? 60 : 200);
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
        let b = this.randInt(2, difficulty === 'kolay' ? 5 : (difficulty === 'orta' ? 8 : 12));
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
    while (results.length < count && attempts < 450) {
      attempts++;

      // Distractor 1: Near miss addition (target ± 1..10)
      let offset = this.randChoice([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 10, -10]);
      let fakeTarget = target + offset;
      if (fakeTarget > 2) {
        let a = this.randInt(1, fakeTarget - 1);
        let b = fakeTarget - a;
        addDistractor(`${a}+${b}`);
      }

      // Distractor 2: Near miss subtraction
      {
        let b = this.randInt(1, 50);
        let fakeDiff = target + this.randChoice([-3, -2, -1, 1, 2, 3, 5, -5]);
        let a = fakeDiff + b;
        if (a > b && fakeDiff > 0) {
          addDistractor(`${a}-${b}`);
        }
      }

      // Distractor 3: Near miss multiplication
      {
        let a = this.randInt(2, Math.min(20, Math.max(5, Math.floor(Math.sqrt(target) + 3))));
        let b = this.randInt(2, 20);
        if (a * b !== target && a * b > 0) {
          addDistractor(`${a}*${b}`);
        }
      }

      // Distractor 4: Near miss division
      {
        let b = this.randInt(2, 6);
        let wrongAns = target + this.randChoice([-4, -2, -1, 1, 2, 4, 10]);
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

    return results.slice(0, count);
  }

  /**
   * Generate a complete round with target, correct cards, and distractors.
   * Total cards: exactly 12 cards (typically 4 to 6 correct, 6 to 8 distractors).
   * Shuffled randomly.
   */
  static generateRound(difficulty = 'kolay', totalCards = 12) {
    const target = this.pickTarget(difficulty);
    
    // Choose number of correct cards (4, 5, or 6)
    const correctCount = this.randChoice([4, 5, 5, 6]);
    const distractorCount = totalCards - correctCount;

    const correctCards = this.generateCorrectExpressions(target, difficulty, correctCount);
    const actualCorrectCount = correctCards.length;
    const actualDistractorCount = totalCards - actualCorrectCount;

    const correctSet = new Set(correctCards.map(c => c.expression));
    const distractorCards = this.generateDistractors(target, difficulty, actualDistractorCount, correctSet);

    const allCards = [...correctCards, ...distractorCards];

    // Final verification pass: STRICT ASSERTION
    for (let card of allCards) {
      const evalRes = this.evaluate(card.raw);
      if (!evalRes.isValid || !evalRes.isInteger) {
        throw new Error(`Invalid math card generated: ${card.expression} (${card.raw})`);
      }
      if (card.isCorrect && evalRes.value !== target) {
        throw new Error(`Correct card did not match target: ${card.expression} = ${evalRes.value} != ${target}`);
      }
      if (!card.isCorrect && evalRes.value === target) {
        throw new Error(`Distractor card accidentally matched target: ${card.expression} = ${evalRes.value} == ${target}`);
      }
      card.actualValue = evalRes.value;
    }

    // Shuffle cards using Fisher-Yates
    for (let i = allCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
    }

    return {
      target,
      difficulty,
      totalCards: allCards.length,
      correctCount: correctCards.length,
      cards: allCards
    };
  }
}

// Export for Node.js / Browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MathEngine;
}
