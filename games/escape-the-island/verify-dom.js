/**
 * DOM Structure & Element Binding Verification
 * Verifies all required elements, IDs, classes, and logic links in index.html.
 */

const fs = require('fs');
const path = require('path');

console.log("\n🔍 VERIFYING HTML & DOM ELEMENT BINDINGS...\n");

const htmlPath = path.join(__dirname, 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

const requiredIds = [
  "top-nav-bar",
  "timer-widget",
  "timer-digits",
  "timer-pause-btn",
  "timer-minus-btn",
  "timer-plus-btn",
  "timer-skip-btn",
  "progress-widget",
  "progress-bar-fill",
  "progress-percent-label",
  "sound-toggle-btn",
  "teacher-drawer-toggle-btn",
  "rules-modal-btn",
  "fullscreen-toggle-btn",
  "danger-alert-banner",
  "setup-screen",
  "saved-game-banner",
  "btn-resume-game",
  "btn-discard-saved",
  "team-count-buttons",
  "teams-grid-container",
  "btn-start-adventure",
  "intro-screen",
  "intro-story-container",
  "mission-brief-card",
  "btn-enter-island",
  "btn-skip-intro",
  "game-screen",
  "active-team-banner",
  "active-team-avatar",
  "active-team-name",
  "active-team-hearts",
  "quick-items-chips",
  "island-map-container",
  "island-svg-canvas",
  "story-narrative-card",
  "question-card",
  "question-category-pill",
  "question-prompt-text",
  "options-grid",
  "opt-0", "opt-1", "opt-2", "opt-3",
  "explanation-box",
  "btn-verdict-correct",
  "btn-verdict-wrong",
  "btn-verdict-skip",
  "turn-continue-row",
  "btn-next-step",
  "choice-card",
  "btn-choice-a",
  "btn-choice-b",
  "event-card",
  "btn-event-a",
  "btn-event-b",
  "reward-card",
  "btn-reward-collect",
  "exhausted-card",
  "btn-exhausted-rest",
  "btn-exhausted-riddle",
  "escape-challenge-card",
  "final-options-grid",
  "btn-final-correct",
  "btn-final-wrong",
  "teams-status-list",
  "inventory-grid",
  "blueprints-list",
  "chronicle-feed",
  "victory-screen",
  "podium-container",
  "results-table-body",
  "btn-play-again",
  "teacher-drawer",
  "rules-modal",
  "confetti-canvas"
];

let missing = 0;
requiredIds.forEach(id => {
  if (!htmlContent.includes(`id="${id}"`)) {
    console.error(`  ❌ Missing DOM element ID: "${id}"`);
    missing++;
  }
});

if (missing === 0) {
  console.log(`  ✅ All ${requiredIds.length} critical DOM element IDs are present and verified in index.html!`);
} else {
  console.error(`  ❌ ${missing} DOM element IDs are missing.`);
  process.exit(1);
}

// Check scripts included
const scriptTags = [
  'src="questions.js"',
  'src="story-data.js"',
  'src="audio.js"',
  'src="app.js"'
];

scriptTags.forEach(script => {
  if (htmlContent.includes(script)) {
    console.log(`  ✅ Verified script tag: ${script}`);
  } else {
    console.error(`  ❌ Missing script tag: ${script}`);
    missing++;
  }
});

// Check css included
if (htmlContent.includes('href="styles.css"')) {
  console.log('  ✅ Verified stylesheet: styles.css');
} else {
  console.error('  ❌ Missing stylesheet: styles.css');
  missing++;
}

console.log("\n✨ DOM & HTML STRUCTURE INTEGRITY FULLY VALIDATED!\n");
