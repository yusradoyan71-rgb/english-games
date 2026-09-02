const fs = require('fs');
const codeQ = fs.readFileSync(__dirname + '/questions.js', 'utf8');
const codeS = fs.readFileSync(__dirname + '/story-data.js', 'utf8');

const ctx = new Function(codeQ + ';' + codeS + '; return { ENGLISH_QUESTIONS, ESCAPE_MISSIONS, MAP_LOCATIONS, ALL_ESCAPE_ITEMS };')();
const { ENGLISH_QUESTIONS, ESCAPE_MISSIONS, MAP_LOCATIONS, ALL_ESCAPE_ITEMS } = ctx;

console.log('--- TEST 1: Question Pool Quality ---');
console.log('Total Questions in Database:', ENGLISH_QUESTIONS.length);
if (ENGLISH_QUESTIONS.length < 50) {
  console.error('Too few questions');
  process.exit(1);
}

console.log('\n--- TEST 2: Option Randomization Distribution (2,000 trials) ---');
const counts = [0, 0, 0, 0];
const totalTests = 2000;
let errors = 0;

function prepareQuestionWithRandomizedOptions(rawQuestion) {
  const originalCorrectText = rawQuestion.options[rawQuestion.correctIndex];
  const optionEntries = rawQuestion.options.map((text, idx) => ({
    text: text,
    isCorrect: idx === rawQuestion.correctIndex
  }));
  for (let i = optionEntries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionEntries[i], optionEntries[j]] = [optionEntries[j], optionEntries[i]];
  }
  const newOptions = optionEntries.map(e => e.text);
  const newCorrectIndex = optionEntries.findIndex(e => e.isCorrect);
  return {
    ...rawQuestion,
    options: newOptions,
    correctIndex: newCorrectIndex,
    correctAnswerText: originalCorrectText
  };
}

for (let i = 0; i < totalTests; i++) {
  const rawQ = ENGLISH_QUESTIONS[Math.floor(Math.random() * ENGLISH_QUESTIONS.length)];
  const prepared = prepareQuestionWithRandomizedOptions(rawQ);
  counts[prepared.correctIndex]++;
  if (prepared.options[prepared.correctIndex] !== prepared.correctAnswerText) {
    errors++;
  }
}

console.log('Distribution counts (A, B, C, D):', counts);
const percentages = counts.map(c => ((c / totalTests) * 100).toFixed(2) + '%');
console.log('Percentages (A, B, C, D):', percentages);
console.log('Integrity Errors (mismatched answer):', errors);

if (errors > 0) {
  console.error('Answer integrity failed!');
  process.exit(1);
}

counts.forEach((c, idx) => {
  const pct = (c / totalTests) * 100;
  if (pct < 20 || pct > 30) {
    console.error('Option ' + ['A','B','C','D'][idx] + ' is out of expected 25% bounds: ' + pct + '%');
    process.exit(1);
  }
});

console.log('\n--- TEST 3: Story Missions & Map Nodes Integrity ---');
console.log('Escape Missions count:', ESCAPE_MISSIONS.length);
if (ESCAPE_MISSIONS.length !== 6) {
  console.error('Expected 6 missions');
  process.exit(1);
}
ESCAPE_MISSIONS.forEach((m) => {
  console.log(' Mission ' + m.id + ': ' + m.icon + ' ' + m.title + ' -> Reward: ' + m.rewardItem.icon + ' ' + m.rewardItem.name);
});

console.log('Map Locations count:', MAP_LOCATIONS.length);
if (MAP_LOCATIONS.length !== 7) {
  console.error('Expected 7 map locations');
  process.exit(1);
}

console.log('\n✅ ALL TESTS PASSED WITH 100% SUCCESS!');
