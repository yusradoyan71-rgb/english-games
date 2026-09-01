/**
 * Comprehensive verification of the START button click and screen transitions
 */
const fs = require('fs');
const path = require('path');

console.log("\n🚀 VERIFYING START BUTTON & SCREEN TRANSITIONS FIX...\n");

// Mock browser window and DOM environment
class MockElement {
  constructor(tag, id = '', className = '') {
    this.tagName = (tag || 'div').toUpperCase();
    this.id = id;
    this.className = className;
    this.classList = {
      _classes: new Set(className.split(' ').filter(Boolean)),
      add: (...cls) => cls.forEach(c => this.classList._classes.add(c)),
      remove: (...cls) => cls.forEach(c => this.classList._classes.delete(c)),
      toggle: (c, force) => {
        if (force === undefined) {
          if (this.classList._classes.has(c)) {
            this.classList._classes.delete(c);
            return false;
          } else {
            this.classList._classes.add(c);
            return true;
          }
        } else if (force) {
          this.classList._classes.add(c);
          return true;
        } else {
          this.classList._classes.delete(c);
          return false;
        }
      },
      contains: (c) => this.classList._classes.has(c)
    };
    this.style = {};
    this.dataset = {};
    this.textContent = '';
    this.innerHTML = '';
    this.value = '';
    this.disabled = false;
    this.children = [];
    this.listeners = {};
  }

  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }

  click() {
    if (this.listeners['click']) {
      this.listeners['click'].forEach(fn => fn({ target: this, preventDefault: () => {} }));
    }
  }

  appendChild(child) {
    this.children.push(child);
    return child;
  }

  prepend(child) {
    this.children.unshift(child);
    return child;
  }

  setAttribute(name, val) {
    this[name] = val;
  }
}

// Global DOM registry
const elementRegistry = new Map();

function getOrCreateElement(id, tag = 'div', className = '') {
  if (!elementRegistry.has(id)) {
    elementRegistry.set(id, new MockElement(tag, id, className));
  }
  return elementRegistry.get(id);
}

// Pre-create screens with their exact HTML classes
const setupScreen = getOrCreateElement("setup-screen", "section", "screen-panel setup-screen active");
const introScreen = getOrCreateElement("intro-screen", "section", "screen-panel intro-screen");
const gameScreen = getOrCreateElement("game-screen", "section", "screen-panel game-screen");
const victoryScreen = getOrCreateElement("victory-screen", "section", "screen-panel victory-screen");

// Mock browser globals
global.window = {
  addEventListener: () => {},
  location: { reload: () => {} },
  innerWidth: 1920,
  innerHeight: 1080,
  scrollTo: () => {}
};

global.document = {
  readyState: 'complete',
  getElementById: (id) => {
    if (id === 'setup-screen') return setupScreen;
    if (id === 'intro-screen') return introScreen;
    if (id === 'game-screen') return gameScreen;
    if (id === 'victory-screen') return victoryScreen;
    return getOrCreateElement(id);
  },
  querySelectorAll: (selector) => {
    if (selector === ".screen-panel") {
      return [setupScreen, introScreen, gameScreen, victoryScreen];
    }
    if (selector === ".btn-count") {
      return [2, 3, 4, 5, 6].map(c => {
        const el = new MockElement('button');
        el.dataset.teams = c.toString();
        return el;
      });
    }
    if (selector === ".option-btn") {
      return [0, 1, 2, 3].map(i => getOrCreateElement(`opt-${i}`));
    }
    if (selector.includes(".map-pin")) {
      return ["beach", "jungle", "shipwreck", "hut", "cave", "mountain", "waterfall", "volcano", "radio_tower", "escape_dock"].map(loc => {
        const el = getOrCreateElement(`pin-${loc}`);
        el.dataset.location = loc;
        return el;
      });
    }
    return [];
  },
  createElement: (tag) => new MockElement(tag),
  documentElement: {
    requestFullscreen: async () => {},
    exitFullscreen: async () => {}
  }
};

global.localStorage = {
  _store: {},
  getItem: (k) => global.localStorage._store[k] || null,
  setItem: (k, v) => { global.localStorage._store[k] = v.toString(); },
  removeItem: (k) => { delete global.localStorage._store[k]; }
};

global.AudioContext = class {
  constructor() { this.state = 'running'; this.currentTime = 0; }
  resume() {}
  createOscillator() {
    return {
      type: 'sine',
      frequency: { setValueAtTime: () => {}, linearRampToValueAtTime: () => {} },
      connect: () => {},
      start: () => {},
      stop: () => {}
    };
  }
  createGain() {
    return {
      gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
      connect: () => {}
    };
  }
};

global.requestAnimationFrame = (fn) => setTimeout(fn, 16);

// Load game dependencies
const { ENGLISH_QUESTIONS } = require('./questions.js');
const {
  ISLAND_LOCATIONS,
  GAME_ITEMS,
  ESCAPE_BLUEPRINTS,
  BRANCHING_CHOICES,
  ISLAND_EVENTS,
  FINAL_ESCAPE_CHALLENGES
} = require('./story-data.js');
const { audio } = require('./audio.js');

global.ENGLISH_QUESTIONS = ENGLISH_QUESTIONS;
global.ISLAND_LOCATIONS = ISLAND_LOCATIONS;
global.GAME_ITEMS = GAME_ITEMS;
global.ESCAPE_BLUEPRINTS = ESCAPE_BLUEPRINTS;
global.BRANCHING_CHOICES = BRANCHING_CHOICES;
global.ISLAND_EVENTS = ISLAND_EVENTS;
global.FINAL_ESCAPE_CHALLENGES = FINAL_ESCAPE_CHALLENGES;
global.audio = audio;

const { IslandGame } = require('./app.js');

try {
  const game = new IslandGame();
  console.log("  1. Game instance created successfully");

  // Step 1: Initial state check
  console.log("  2. Checking initial screen state:");
  console.log("     setup-screen active:", setupScreen.classList.contains("active"), "| display:", setupScreen.style.display || "initial (block)");
  console.log("     intro-screen active:", introScreen.classList.contains("active"), "| hidden:", introScreen.classList.contains("hidden"));

  // Step 2: Trigger START ADVENTURE button click
  console.log("\n  3. Simulating click on [ 🚀 START ADVENTURE ] (id: btn-start-adventure)...");
  const startBtn = document.getElementById("btn-start-adventure");
  startBtn.click();

  // Check state after Start click
  const introIsActive = introScreen.classList.contains("active");
  const introIsVisible = introScreen.style.display === "block" && !introScreen.classList.contains("hidden");
  const setupIsHidden = !setupScreen.classList.contains("active") && setupScreen.style.display === "none";

  console.log("     intro-screen active:", introIsActive, "| display:", introScreen.style.display, "| hidden:", introScreen.classList.contains("hidden"));
  console.log("     setup-screen active:", setupScreen.classList.contains("active"), "| display:", setupScreen.style.display);

  if (!introIsActive || !introIsVisible || !setupIsHidden) {
    throw new Error("START ADVENTURE failed to properly show intro-screen and hide setup-screen!");
  }
  console.log("  ✅ SUCCESS: [ 🚀 START ADVENTURE ] successfully transitioned to the Cinematic Intro Screen!");

  // Step 3: Trigger ENTER THE ISLAND button click
  console.log("\n  4. Simulating click on [ 🏝️ ENTER THE ISLAND ] (id: btn-enter-island)...");
  const enterBtn = document.getElementById("btn-enter-island");
  enterBtn.click();

  const gameIsActive = gameScreen.classList.contains("active");
  const gameIsVisible = gameScreen.style.display === "block" && !gameScreen.classList.contains("hidden");
  const introNowHidden = !introScreen.classList.contains("active") && introScreen.style.display === "none";

  console.log("     game-screen active:", gameIsActive, "| display:", gameScreen.style.display, "| hidden:", gameScreen.classList.contains("hidden"));
  console.log("     intro-screen active:", introScreen.classList.contains("active"), "| display:", introScreen.style.display);

  if (!gameIsActive || !gameIsVisible || !introNowHidden) {
    throw new Error("ENTER THE ISLAND failed to transition to game-screen!");
  }
  console.log("  ✅ SUCCESS: [ 🏝️ ENTER THE ISLAND ] successfully launched the Main Adventure Dashboard!");
  console.log("     Active Team:", game.getActiveTeam().name, "| Timer Running:", game.timerRunning, `(${game.timerSeconds}s remaining)`);

  // Step 4: Test Victory Screen Transition
  console.log("\n  5. Simulating Victory Resolution...");
  game.showVictoryScreen();
  const victoryIsActive = victoryScreen.classList.contains("active");
  const victoryIsVisible = victoryScreen.style.display === "block" && !victoryScreen.classList.contains("hidden");

  if (!victoryIsActive || !victoryIsVisible) {
    throw new Error("Victory transition failed to display victory-screen!");
  }
  console.log("  ✅ SUCCESS: Victory screen transition verified!");

  console.log("\n🎉 ALL START BUTTON AND SCREEN TRANSITIONS FULLY VALIDATED AND PASSING!\n");
  process.exit(0);
} catch (err) {
  console.error("❌ Test Failure:", err);
  process.exit(1);
}
