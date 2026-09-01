/**
 * ESCAPE THE ISLAND - Test Runner
 * Validates question bank integrity, location data, and escape blueprints.
 */

const { ENGLISH_QUESTIONS } = require('./questions.js');
const {
  ISLAND_LOCATIONS,
  GAME_ITEMS,
  ESCAPE_BLUEPRINTS,
  BRANCHING_CHOICES,
  ISLAND_EVENTS,
  FINAL_ESCAPE_CHALLENGES
} = require('./story-data.js');

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  if (condition) {
    passedTests++;
    console.log(`  ✅ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

console.log("\n🧪 RUNNING ESCAPE THE ISLAND UNIT & DATA INTEGRITY TESTS...\n");

// 1. Question Bank Integrity
console.log("▶ 1. Validating English Questions Bank (A2-B1 Curriculum)...");
assert(Array.isArray(ENGLISH_QUESTIONS), "ENGLISH_QUESTIONS is an array");
assert(ENGLISH_QUESTIONS.length >= 200, `Question database contains >= 200 questions (Actual: ${ENGLISH_QUESTIONS.length})`);

const questionIds = new Set();
let validOptionsCount = 0;
let validCorrectIndexCount = 0;
let validExplanationCount = 0;
let categoriesFound = new Set();

ENGLISH_QUESTIONS.forEach((q, idx) => {
  if (q.id && !questionIds.has(q.id)) {
    questionIds.add(q.id);
  }
  if (Array.isArray(q.options) && q.options.length === 4 && q.options.every(o => typeof o === 'string' && o.trim().length > 0)) {
    validOptionsCount++;
  }
  if (typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex <= 3) {
    validCorrectIndexCount++;
  }
  if (q.explanation && q.explanation.trim().length > 5) {
    validExplanationCount++;
  }
  if (q.category) {
    categoriesFound.add(q.category);
  }
});

assert(questionIds.size === ENGLISH_QUESTIONS.length, "All question IDs are unique");
assert(validOptionsCount === ENGLISH_QUESTIONS.length, "All questions have exactly 4 non-empty options");
assert(validCorrectIndexCount === ENGLISH_QUESTIONS.length, "All questions have valid correctIndex between 0 and 3");
assert(validExplanationCount === ENGLISH_QUESTIONS.length, "All questions have descriptive educational explanations");
assert(categoriesFound.size >= 8, `Diverse grammatical & vocabulary categories represented (Found: ${categoriesFound.size})`);

// 2. Locations & Island Geography
console.log("\n▶ 2. Validating Island Locations...");
const locationKeys = Object.keys(ISLAND_LOCATIONS);
assert(locationKeys.length >= 8, `At least 8 distinct island locations defined (Actual: ${locationKeys.length})`);
assert(ISLAND_LOCATIONS.beach !== undefined, "Beach starting location exists");
assert(ISLAND_LOCATIONS.escape_dock !== undefined, "Escape departure point exists");

// 3. Mechanical Items & Purposes
console.log("\n▶ 3. Validating Items & Utilities...");
const itemKeys = Object.keys(GAME_ITEMS);
assert(itemKeys.length >= 12, `At least 12 distinct survival items defined (Actual: ${itemKeys.length})`);
const essentialItems = ["wood", "rope", "fuel", "tool", "radio", "battery", "map", "fire"];
essentialItems.forEach(item => {
  assert(GAME_ITEMS[item] !== undefined, `Essential item '${item}' (${GAME_ITEMS[item]?.name}) is defined with utility`);
});

// 4. Escape Blueprints
console.log("\n▶ 4. Validating Escape Blueprints...");
assert(ESCAPE_BLUEPRINTS.boat !== undefined, "Boat escape blueprint exists");
assert(ESCAPE_BLUEPRINTS.radio_rescue !== undefined, "Radio SOS escape blueprint exists");
assert(ESCAPE_BLUEPRINTS.helicopter !== undefined, "Helicopter escape blueprint exists");

assert(ESCAPE_BLUEPRINTS.boat.requiredItems.length <= 4, "Boat recipe is streamlined (≤ 4 items)");
assert(ESCAPE_BLUEPRINTS.radio_rescue.requiredItems.length <= 4, "Radio recipe is streamlined (≤ 4 items)");
assert(ESCAPE_BLUEPRINTS.helicopter.requiredItems.length <= 4, "Helicopter recipe is streamlined (≤ 4 items)");

// 5. Branching Choices & Events
console.log("\n▶ 5. Validating Choices & Island Hazard Events...");
assert(BRANCHING_CHOICES.length >= 10, `At least 10 branching choices available (Actual: ${BRANCHING_CHOICES.length})`);
BRANCHING_CHOICES.forEach(c => {
  assert(c.optionA && c.optionB, `Choice '${c.title}' has two valid options`);
});

assert(ISLAND_EVENTS.length >= 5, `At least 5 island hazard events available (Actual: ${ISLAND_EVENTS.length})`);
assert(FINAL_ESCAPE_CHALLENGES.length >= 3, `At least 3 endgame escape challenges defined (Actual: ${FINAL_ESCAPE_CHALLENGES.length})`);

console.log(`\n========================================`);
console.log(`TEST SUMMARY: ${passedTests} Passed, ${failedTests} Failed`);
console.log(`========================================\n`);

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log("✨ ALL INTEGRITY TESTS PASSED SUCCESSFULLY!\n");
}
