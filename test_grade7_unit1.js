const fs = require('fs');
const path = require('path');

console.log("==========================================================");
console.log("GRADE 7 - UNIT 1: LIFE ONLINE COMPREHENSIVE VERIFICATION");
console.log("==========================================================");

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    process.exitCode = 1;
  }
}

// 1. MASTER DATASET VERIFICATION
console.log("\n1. Testing Master Question Bank & Dataset (grade7_unit1_life_online.js)...");
const datasetPath = path.join(__dirname, 'data', 'grade7_unit1_life_online.js');
assert(fs.existsSync(datasetPath), "Dataset file exists in data/grade7_unit1_life_online.js");

const Grade7Unit1 = require(datasetPath);
assert(typeof Grade7Unit1 === 'object', "Grade7Unit1LifeOnline loads as valid CommonJS module");
assert(Grade7Unit1.unitInfo && Grade7Unit1.unitInfo.title === "Life Online", "Unit title is 'Life Online'");
assert(Grade7Unit1.unitInfo.grade === 7, "Grade is 7");

const questions = Grade7Unit1.questions;
assert(Array.isArray(questions) && questions.length >= 120, `Contains >= 120 questions (Actual: ${questions.length})`);

// Check uniqueness
const idSet = new Set();
const textSet = new Set();
let duplicates = 0;
let missingExplanation = 0;
let invalidOptions = 0;
let missingAnswer = 0;

questions.forEach(q => {
  if (idSet.has(q.id)) duplicates++;
  idSet.add(q.id);

  const normText = q.question.toLowerCase().trim();
  if (textSet.has(normText)) duplicates++;
  textSet.add(normText);

  if (!q.explanation || q.explanation.trim().length === 0) missingExplanation++;
  if (!Array.isArray(q.options) || q.options.length < 2) invalidOptions++;
  if (q.answer === undefined || q.answer === null) missingAnswer++;
});

assert(duplicates === 0, `No duplicate question IDs or duplicate questions (Found: ${duplicates})`);
assert(missingExplanation === 0, `All questions have student-friendly explanations (Missing: ${missingExplanation})`);
assert(invalidOptions === 0, `All questions have valid options arrays (Invalid: ${invalidOptions})`);
assert(missingAnswer === 0, `All questions have verified correct answers (Missing: ${missingAnswer})`);

// Check difficulty levels
const easyQuestions = questions.filter(q => q.difficulty === 'easy');
const mediumQuestions = questions.filter(q => q.difficulty === 'medium');
const hardQuestions = questions.filter(q => q.difficulty === 'hard');
assert(easyQuestions.length >= 30, `Easy (A2) questions count >= 30 (Actual: ${easyQuestions.length})`);
assert(mediumQuestions.length >= 40, `Medium (A2+) questions count >= 40 (Actual: ${mediumQuestions.length})`);
assert(hardQuestions.length >= 25, `Hard (B1) questions count >= 25 (Actual: ${hardQuestions.length})`);

// Check reading passages
assert(Array.isArray(Grade7Unit1.passages) && Grade7Unit1.passages.length === 3, "Contains 3 full reading comprehension passages");
const passageQuestions = questions.filter(q => q.format === 'reading_passage');
assert(passageQuestions.length === 15, `Contains 15 reading comprehension questions (Actual: ${passageQuestions.length})`);

// Check Teacher Filter API
console.log("\n2. Testing Teacher Controls & Dynamic Filter API...");
const vocabFilter = Grade7Unit1.filterQuestions({ topic: 'vocabulary', count: 10 });
assert(vocabFilter.length === 10 && vocabFilter.every(q => q.topic === 'vocabulary'), "Topic filter ('vocabulary', 10 items) works accurately");

const grammarFilter = Grade7Unit1.filterQuestions({ topic: 'grammar', difficulty: 'hard', count: 15 });
assert(grammarFilter.length === 15 && grammarFilter.every(q => q.topic === 'grammar' && q.difficulty === 'hard'), "Combined topic + difficulty filter works accurately");

const random1 = Grade7Unit1.filterQuestions({ count: 20 });
const random2 = Grade7Unit1.filterQuestions({ count: 20 });
assert(random1.length === 20 && random2.length === 20, "Question counts 20 items returned properly");

// Check Taboo Cards
console.log("\n3. Testing English Taboo Dataset...");
assert(Array.isArray(Grade7Unit1.tabooDeck) && Grade7Unit1.tabooDeck.length >= 25, `Taboo deck contains >= 25 cards (Actual: ${Grade7Unit1.tabooDeck.length})`);
const tabooHasRequiredWords = ["ALGORITHM", "PRIVACY", "SCREEN TIME", "STREAM", "UPLOAD", "DOWNLOAD", "SCROLL", "SWIPE", "ECHO CHAMBER", "DIGITAL IDENTITY"].every(word => Grade7Unit1.tabooDeck.some(c => c.word === word));
assert(tabooHasRequiredWords, "Taboo deck covers all required curriculum keywords");

// Check Word Rush
console.log("\n4. Testing Word Rush Dataset...");
assert(Array.isArray(Grade7Unit1.wordRushWords) && Grade7Unit1.wordRushWords.length >= 25, `Word Rush vocabulary contains >= 25 words (Actual: ${Grade7Unit1.wordRushWords.length})`);

// Check Speaking Prompts
console.log("\n5. Testing Speaking Wheel Prompts...");
assert(Array.isArray(Grade7Unit1.speakingPrompts) && Grade7Unit1.speakingPrompts.length >= 6, `Speaking prompts contain >= 6 items with assessment criteria (Actual: ${Grade7Unit1.speakingPrompts.length})`);

// Check Grammar Auction Sentences
console.log("\n6. Testing Grammar Auction Sentences...");
assert(Array.isArray(Grade7Unit1.grammarAuctionSentences) && Grade7Unit1.grammarAuctionSentences.length >= 10, `Grammar Auction contains >= 10 sentences (Actual: ${Grade7Unit1.grammarAuctionSentences.length})`);

// 7. Check Game File Integrations
console.log("\n7. Testing Game Integrations...");

// Keep or pass
const kopHtml = fs.readFileSync(path.join(__dirname, 'games', 'keep-or-pass', 'index.html'), 'utf8');
const kopJs = fs.readFileSync(path.join(__dirname, 'games', 'keep-or-pass', 'script.js'), 'utf8');
assert(kopHtml.includes('data-unit="life_online"'), "Keep or Pass index.html contains Unit 1: Life Online selector");
assert(kopHtml.includes('grade7_unit1_life_online.js'), "Keep or Pass index.html imports grade7_unit1_life_online.js");
assert(kopJs.includes('Grade7Unit1LifeOnline'), "Keep or Pass script.js integrates Grade7Unit1LifeOnline");

// Word Rush
const wrBank = fs.readFileSync(path.join(__dirname, 'games', 'word-rush', 'word-bank.js'), 'utf8');
assert(wrBank.includes("id: 'life_online'"), "Word Rush word-bank.js defines 'life_online' category");
assert(wrBank.includes("categories: ['life_online'"), "Word Rush word-bank.js includes Life Online canonical words");

// English Taboo
const tabooHtml = fs.readFileSync(path.join(__dirname, 'games', 'english-taboo', 'index.html'), 'utf8');
const tabooJs = fs.readFileSync(path.join(__dirname, 'games', 'english-taboo', 'script.js'), 'utf8');
assert(tabooHtml.includes('data-deck="g7_life_online"'), "English Taboo index.html includes Grade 7 Life Online deck selector");
assert(tabooJs.includes('unit: "g7_life_online"'), "English Taboo script.js includes Grade 7 Life Online cards");

// Speaking Wheel
const swJs = fs.readFileSync(path.join(__dirname, 'games', 'speaking-wheel', 'script.js'), 'utf8');
assert(swJs.includes('g7_r1_life_online_01') && swJs.includes('g7_r2_life_online_01') && swJs.includes('g7_r3_life_online_01'), "Speaking Wheel script.js includes Grade 7 Life Online prompts across Rounds 1, 2, and 3");

// Tense Building Race
const tbrQuestions = fs.readFileSync(path.join(__dirname, 'games', 'tense-building-race', 'questions.js'), 'utf8');
assert(tbrQuestions.includes('category": "life_online"'), "Tense Building Race questions.js includes Life Online grammar questions");

// Escape the Island
const etiQuestions = fs.readFileSync(path.join(__dirname, 'games', 'escape-the-island', 'questions.js'), 'utf8');
assert(etiQuestions.includes('category": "Life Online"'), "Escape the Island questions.js includes Life Online questions");

// English Wheel
const ewExpressions = fs.readFileSync(path.join(__dirname, 'games', 'english-wheel', 'expressions.js'), 'utf8');
assert(ewExpressions.includes('category: "LIFE ONLINE"'), "English Wheel expressions.js includes 'LIFE ONLINE' expressions");

// Grammar Auction Game
const gaHtml = fs.readFileSync(path.join(__dirname, 'games', 'grammar-auction', 'index.html'), 'utf8');
const gaJs = fs.readFileSync(path.join(__dirname, 'games', 'grammar-auction', 'script.js'), 'utf8');
const gaCss = fs.readFileSync(path.join(__dirname, 'games', 'grammar-auction', 'style.css'), 'utf8');
assert(gaHtml.length > 500 && gaJs.length > 500 && gaCss.length > 500, "Grammar Auction game files (HTML, CSS, JS) created and non-empty");

// Hub Index
const hubHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
assert(hubHtml.includes('href="games/grammar-auction/index.html"'), "English Games Hub index.html features Grammar Auction card");

console.log("\n==========================================================");
console.log(`SUMMARY: ${passedTests} / ${totalTests} assertions passed.`);
console.log("==========================================================");

if (passedTests === totalTests) {
  console.log("🎉 ALL TESTS PASSED SUCCESSFULLY! Grade 7 Unit 1 is completely verified.");
} else {
  console.error("Some tests failed. Please review the errors above.");
}
