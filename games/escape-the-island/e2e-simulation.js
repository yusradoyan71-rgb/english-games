/**
 * End-to-End Game State & DOM Simulation for Escape the Island
 */
const fs = require('fs');
const path = require('path');

// Read files
const questionsJs = fs.readFileSync(path.join(__dirname, 'questions.js'), 'utf8');
const storyJs = fs.readFileSync(path.join(__dirname, 'story-data.js'), 'utf8');
const appJs = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');

console.log('--- E2E SIMULATION: START ---');

class MockElement {
  constructor(id = '', tag = 'div') {
    this.id = id;
    this.tagName = tag.toUpperCase();
    this.children = [];
    const classSet = new Set();
    this.classList = {
      add: (...cls) => cls.forEach(c => classSet.add(c)),
      remove: (...cls) => cls.forEach(c => classSet.delete(c)),
      toggle: (c, force) => {
        if (force === true) classSet.add(c);
        else if (force === false) classSet.delete(c);
        else if (classSet.has(c)) classSet.delete(c);
        else classSet.add(c);
      },
      contains: (c) => classSet.has(c)
    };
    this.style = {};
    this.textContent = '';
    this.innerHTML = '';
    this.disabled = false;
    this.dataset = {};
    this.eventListeners = {};
  }

  addEventListener(event, handler) {
    if (!this.eventListeners[event]) this.eventListeners[event] = [];
    this.eventListeners[event].push(handler);
  }

  click() {
    if (this.disabled) return;
    if (this.eventListeners['click']) {
      this.eventListeners['click'].forEach(fn => fn({ target: this }));
    }
  }

  getContext(type) {
    return {
      clearRect: () => {},
      save: () => {},
      restore: () => {},
      translate: () => {},
      rotate: () => {},
      fillRect: () => {}
    };
  }

  appendChild(el) {
    this.children.push(el);
    return el;
  }

  querySelector(selector) {
    return new MockElement();
  }

  querySelectorAll(selector) {
    return [];
  }
}

const elementsMap = new Map();
function getOrCreateElement(id) {
  if (!elementsMap.has(id)) {
    elementsMap.set(id, new MockElement(id));
  }
  return elementsMap.get(id);
}

const mockDoc = {
  getElementById: (id) => getOrCreateElement(id),
  querySelectorAll: (selector) => [],
  createElement: (tag) => new MockElement('', tag),
  addEventListener: () => {},
  fullscreenElement: null,
  documentElement: { requestFullscreen: async () => {} }
};

const mockWindow = {
  innerWidth: 1920,
  innerHeight: 1080,
  addEventListener: () => {},
  requestAnimationFrame: (fn) => setTimeout(fn, 16)
};

const mockAudio = {
  toggleSound: () => true,
  playOceanWaves: () => {},
  playCorrect: () => {},
  playWrong: () => {},
  playClick: () => {},
  playWalk: () => {},
  playItemUnlock: () => {},
  playBoatEngine: () => {},
  playRadioTransmission: () => {},
  playHelicopter: () => {},
  playVictory: () => {},
  playHeartLost: () => {}
};

// Global context setup
global.document = mockDoc;
global.window = mockWindow;
global.audio = mockAudio;
global.requestAnimationFrame = (fn) => setTimeout(fn, 16);

const vm = require('vm');
vm.runInThisContext(questionsJs);
vm.runInThisContext(storyJs);
vm.runInThisContext(appJs.replace(/document\.addEventListener\("DOMContentLoaded"[\s\S]*$/, ''));

const game = new EscapeIslandGame();

console.log('1. Game initialized successfully. Screen:', game.currentScreen);
if (game.currentScreen !== 'setup') throw new Error('Setup screen expected');

console.log('2. Testing Story Intro Start...');
game.startStoryIntro();
console.log('   Screen after startStoryIntro:', game.currentScreen);
if (game.currentScreen !== 'intro') throw new Error('Intro screen expected');

console.log('3. Advancing through Story Intro...');
while (game.currentScreen === 'intro') {
  game.advanceStoryIntro();
}
console.log('   Screen after intro completion:', game.currentScreen);
if (game.currentScreen !== 'game') throw new Error('Game screen expected');

console.log('4. Testing 6-Mission Playthrough Simulation...');
for (let m = 0; m < 6; m++) {
  console.log(`   --> Simulating Mission ${m + 1}: ${ESCAPE_MISSIONS[m].title}`);
  game.beginCurrentMission();

  for (let q = 0; q < game.questionsPerMission; q++) {
    const qObj = game.currentQuestion;
    if (!qObj) throw new Error(`Missing question object at mission ${m + 1}, question ${q + 1}`);
    
    // Simulate correct answer
    const correctIdx = qObj.correctIndex;
    game.handleOptionClick(correctIdx);
    
    if (game.lives < 3) throw new Error('Lives should not decrease on correct answer');
    game.advanceAfterQuestion();
  }

  // Advance to next mission
  if (m < 5) {
    game.advanceToNextMission();
  }
}

console.log('5. Testing Final Escape Victory Trigger...');
game.advanceToNextMission(); // Completed mission 6 -> triggers victory
console.log('   Screen after completing Mission 6:', game.currentScreen);
if (game.currentScreen !== 'victory') throw new Error('Victory screen expected');

console.log('6. Testing Lives Decrement & Game Over retry...');
game.switchScreen('game');
game.showMissionBriefing(0);
game.beginCurrentMission();
const qObj = game.currentQuestion;
const wrongIdx = (qObj.correctIndex + 1) % 4;

game.handleOptionClick(wrongIdx);
console.log('   Lives after 1 wrong answer:', game.lives);
if (game.lives !== 2) throw new Error('Expected 2 lives');

game.advanceAfterQuestion();
game.handleOptionClick((game.currentQuestion.correctIndex + 1) % 4);
console.log('   Lives after 2 wrong answers:', game.lives);
if (game.lives !== 1) throw new Error('Expected 1 life');

game.advanceAfterQuestion();
game.handleOptionClick((game.currentQuestion.correctIndex + 1) % 4);
console.log('   Lives after 3 wrong answers:', game.lives);
if (game.lives !== 0) throw new Error('Expected 0 lives');

game.advanceAfterQuestion();
console.log('   Retrying mission with full recovery...');
game.retryCurrentMission();
console.log('   Lives restored:', game.lives);
if (game.lives !== 3) throw new Error('Expected 3 lives after retry');

console.log('\n🌟 ALL E2E SIMULATION TESTS COMPLETED SUCCESSFULLY! 🌟');
