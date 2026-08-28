// ============================================================
// app.js  -  Monster Dance! Game Controller & State Machine
// ============================================================
'use strict';

const $ = id => document.getElementById(id);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

/* ── Game State ── */
let monsterInstance = null;
let currentPhase = 'start';
let totalStars = 0;
let discoveryIndex = 0;
let comboIndex = 0;
let challengeIndex = 0;
let activeCategory = 'eyes';

/* ── DOM References ── */
const screens = {
  start: $('screen-start'),
  game: $('screen-game'),
  dance: $('screen-dance'),
  celeb: $('screen-celeb')
};

const panels = {
  intro: $('panel-intro'),
  discovery: $('panel-discovery'),
  customize: $('panel-customize'),
  combo: $('panel-combo'),
  challenge: $('panel-challenge')
};

/* ── Screen & Panel Switching ── */
function showScreen(name) {
  Object.values(screens).forEach(scr => {
    if (scr) scr.classList.remove('active');
  });
  if (screens[name]) {
    screens[name].classList.add('active');
  }
}

function showPanel(name) {
  Object.values(panels).forEach(p => {
    if (p) {
      p.classList.add('hidden');
      p.classList.remove('panel-slide-in');
    }
  });
  if (panels[name]) {
    panels[name].classList.remove('hidden');
    void panels[name].offsetWidth; // force reflow
    panels[name].classList.add('panel-slide-in');
  }
}

function updateProgressIndicator(activeStep) {
  const steps = ['progress-disc', 'progress-cust', 'progress-combo', 'progress-chal', 'progress-dance'];
  steps.forEach(stepId => {
    const el = $(stepId);
    if (el) el.classList.remove('progress-active', 'progress-completed');
  });

  const activeIdx = steps.indexOf(activeStep);
  steps.forEach((stepId, idx) => {
    const el = $(stepId);
    if (!el) return;
    if (idx < activeIdx) el.classList.add('progress-completed');
    else if (idx === activeIdx) el.classList.add('progress-active');
  });
}

/* ── Star System ── */
function addStarReward() {
  totalStars++;
  updateStarCounterUI();

  const monsterSvg = $('monsterSVG');
  const starCounter = $('starCounter');
  if (monsterSvg && starCounter) {
    FX.flyStarToCounter(monsterSvg, starCounter);
  }
  AudioManager.playSound('star');
}

function updateStarCounterUI() {
  const counterEl = $('starCounter');
  if (counterEl) {
    counterEl.innerHTML = `<span class="star-icon">⭐</span> <span class="star-num">${totalStars}</span>`;
  }
}

/* ── Spoken Speech Bubble ── */
let bubbleTimeout = null;
function displaySpeech(text, duration = 2400) {
  const bubble = $('speechBubble');
  const bubbleText = $('speechText');
  if (!bubble || !bubbleText) return;

  if (bubbleTimeout) clearTimeout(bubbleTimeout);

  bubbleText.textContent = text;
  bubble.classList.remove('hidden', 'bubble-fade-out');
  bubble.classList.add('bubble-fade-in');

  if (duration > 0) {
    bubbleTimeout = setTimeout(() => {
      bubble.classList.remove('bubble-fade-in');
      bubble.classList.add('bubble-fade-out');
      setTimeout(() => bubble.classList.add('hidden'), 350);
    }, duration);
  }
}

/* ══════════════════════════════════════════════════════════
   PHASE 1: START SCREEN
   ══════════════════════════════════════════════════════════ */
function initStartScreen() {
  showScreen('start');
  currentPhase = 'start';
  FX.stopConfetti();
  FX.stopPartyElements();
  AudioManager.stopDanceMusic();

  const startMonster = $('startMonsterSVG');
  if (startMonster) {
    startMonster.classList.add('monster-breathe');
  }
}

/* ══════════════════════════════════════════════════════════
   PHASE 2: INTRODUCTION
   ══════════════════════════════════════════════════════════ */
async function startIntroPhase() {
  showScreen('game');
  showPanel('intro');
  currentPhase = 'intro';
  updateProgressIndicator('progress-disc');

  await delay(500);
  displaySpeech('Hello!', 2000);
  monsterInstance.openMouth(1600);
  await AudioManager.speak('Hello!', { rate: 0.80, pitch: 1.35 });
  await delay(1200);

  displaySpeech("I'm a monster!", 2200);
  monsterInstance.blink();
  monsterInstance.openMouth(1800);
  await AudioManager.speak("I am a monster!", { rate: 0.78, pitch: 1.25 });
  await delay(1400);

  displaySpeech("Let's make a monster!", 2400);
  monsterInstance.waveHands();
  await AudioManager.speak("Let's make a monster!", { rate: 0.78, pitch: 1.25 });
  await delay(1600);

  startDiscoveryPhase();
}

/* ══════════════════════════════════════════════════════════
   PHASE 3: BODY PART DISCOVERY
   ══════════════════════════════════════════════════════════ */
function startDiscoveryPhase() {
  showPanel('discovery');
  currentPhase = 'discovery';
  discoveryIndex = 0;
  updateProgressIndicator('progress-disc');
  runNextDiscoveryStep();
}

async function runNextDiscoveryStep() {
  if (discoveryIndex >= DISCOVERY_STEPS.length) {
    await delay(600);
    displaySpeech('Great job!', 1800);
    await AudioManager.speakCorrect('Great job! You know the body parts!');
    await delay(1200);
    startCustomizationPhase();
    return;
  }

  const step = DISCOVERY_STEPS[discoveryIndex];
  const stepLabel = $('discoveryWordLabel');
  if (stepLabel) {
    stepLabel.textContent = step.speak;
    stepLabel.classList.remove('word-pop-anim');
    void stepLabel.offsetWidth;
    stepLabel.classList.add('word-pop-anim');
  }

  // Highlight part on monster
  monsterInstance.highlightPart(step.groupId);
  displaySpeech(step.speak, 1600);
  await AudioManager.speakPart(step.part);

  enableDiscoveryTouch(step);
}

function enableDiscoveryTouch(step) {
  const svg = $('monsterSVG');
  if (!svg) return;
  svg.style.cursor = 'pointer';

  const hintEl = $('discoveryTouchHint');
  if (hintEl) {
    hintEl.textContent = step.prompt;
    hintEl.classList.remove('hidden');
  }

  const touchHandler = (e) => {
    const targetGroup = e.target.closest('g[data-part]');
    const clickedPart = targetGroup ? targetGroup.dataset.part : null;

    if (clickedPart === step.part || clickedPart === step.groupId.replace('g-', '')) {
      // Correct body part touched
      svg.removeEventListener('click', touchHandler);
      svg.style.cursor = '';
      if (hintEl) hintEl.classList.add('hidden');

      monsterInstance.clearHighlight();
      monsterInstance.wigglePart(step.groupId);
      FX.spawnSparklesOnElement(targetGroup);
      AudioManager.playSound('correct');
      AudioManager.speakPart(step.part);
      displaySpeech(step.speak, 1200);
      addStarReward();

      discoveryIndex++;
      setTimeout(() => runNextDiscoveryStep(), 1500);
    } else {
      // Wrong part touched - gentle, non-punishing feedback
      if (targetGroup) {
        monsterInstance.wigglePart(targetGroup.id);
      }
      AudioManager.playSound('wrong');
      AudioManager.speakWrong();
      displaySpeech('Try again!', 1200);
    }
  };

  svg.addEventListener('click', touchHandler);
}

/* ══════════════════════════════════════════════════════════
   PHASE 4: CREATE YOUR OWN MONSTER (CUSTOMIZATION)
   ══════════════════════════════════════════════════════════ */
function startCustomizationPhase() {
  showPanel('customize');
  currentPhase = 'customize';
  monsterInstance.clearHighlight();
  updateProgressIndicator('progress-cust');

  activeCategory = 'eyes';
  buildCategoryTabBar();
  renderCustomizationOptions(activeCategory);

  displaySpeech("Let's make your monster!", 2200);
  AudioManager.speak("Let's make your monster!", { rate: 0.78, pitch: 1.25 });
}

function buildCategoryTabBar() {
  const tabBar = $('categoryTabBar');
  if (!tabBar) return;

  const categories = [
    { id: 'eyes',        icon: '👀', name: 'EYES' },
    { id: 'ears',        icon: '👂', name: 'EARS' },
    { id: 'nose',        icon: '👃', name: 'NOSE' },
    { id: 'mouth',       icon: '👄', name: 'MOUTH' },
    { id: 'hair',        icon: '💇', name: 'HAIR' },
    { id: 'hands',       icon: '🖐️', name: 'HANDS' },
    { id: 'feet',        icon: '🦶', name: 'FEET' },
    { id: 'accessories', icon: '🎀', name: 'ACCESSORIES' },
    { id: 'color',       icon: '🎨', name: 'COLOR' }
  ];

  tabBar.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `category-tab-btn ${cat.id === activeCategory ? 'active' : ''}`;
    btn.id = `tab-cat-${cat.id}`;
    btn.innerHTML = `
      <span class="tab-icon">${cat.icon}</span>
      <span class="tab-label">${cat.name}</span>
    `;

    btn.addEventListener('click', () => {
      AudioManager.playSound('pop');
      activeCategory = cat.id;
      document.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCustomizationOptions(cat.id);
    });

    tabBar.appendChild(btn);
  });
}

function renderCustomizationOptions(category) {
  const grid = $('optionsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  if (category === 'color') {
    // Render color swatches
    MONSTER_COLORS.forEach(colorItem => {
      const colorBtn = document.createElement('button');
      const isSelected = monsterInstance.state.color.id === colorItem.id;
      colorBtn.className = `color-bubble-btn ${isSelected ? 'selected' : ''}`;
      colorBtn.style.background = `radial-gradient(circle at 35% 35%, ${colorItem.light}, ${colorItem.hex} 60%, ${colorItem.dark})`;
      colorBtn.setAttribute('aria-label', colorItem.label);
      colorBtn.innerHTML = `<span class="color-label-tag">${colorItem.label}</span>`;

      colorBtn.addEventListener('click', () => {
        document.querySelectorAll('.color-bubble-btn').forEach(b => b.classList.remove('selected'));
        colorBtn.classList.add('selected');

        monsterInstance.applyColor(colorItem);
        monsterInstance.spinHappy();
        AudioManager.playSound('pop');
        AudioManager.speakColor(colorItem.label);
        displaySpeech(`${colorItem.label}!`, 1200);
        addStarReward();
      });

      grid.appendChild(colorBtn);
    });
  } else {
    // Render body part & accessory cards
    const partList = MONSTER_PARTS[category];
    if (!partList) return;

    partList.forEach(partItem => {
      const isSelected = monsterInstance.state[category] === partItem.id;
      const card = document.createElement('button');
      card.className = `part-choice-card ${isSelected ? 'selected' : ''}`;
      card.id = `card-${category}-${partItem.id}`;

      card.innerHTML = `
        <div class="card-svg-preview">
          <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg"
            style="--mc:${monsterInstance.state.color.hex};--mcd:${monsterInstance.state.color.dark};--mcl:${monsterInstance.state.color.light}">
            ${partItem.svg}
          </svg>
        </div>
        <div class="card-part-title">${partItem.name}</div>
      `;

      card.addEventListener('click', () => {
        if (monsterInstance.isLocked()) return;

        document.querySelectorAll('.part-choice-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        monsterInstance.setPart(category, partItem.id, true);
        AudioManager.playSound('pop');
        AudioManager.speakPart(category);
        displaySpeech(`${category.toUpperCase()}!`, 1200);
        addStarReward();

        // Specific Customization Character Reactions
        if (category === 'eyes') monsterInstance.blink();
        else if (category === 'ears') monsterInstance.wigglePart('g-ears');
        else if (category === 'nose') monsterInstance.wigglePart('g-nose');
        else if (category === 'mouth') {
          monsterInstance.openMouth(1200);
          AudioManager.speak('Hello!', { rate: 0.82, pitch: 1.3 });
        }
        else if (category === 'hair') monsterInstance.shakeHead();
        else if (category === 'hands') monsterInstance.waveHands();
        else if (category === 'feet') monsterInstance.jumpFeet();
        else if (category === 'accessories') monsterInstance.happyPose();
      });

      grid.appendChild(card);
    });
  }
}

/* ══════════════════════════════════════════════════════════
   PHASE 5: BODY PART + COLOR COMBINATION
   ══════════════════════════════════════════════════════════ */
function startComboPhase() {
  showPanel('combo');
  currentPhase = 'combo';
  comboIndex = 0;
  updateProgressIndicator('progress-combo');
  runNextComboStep();
}

async function runNextComboStep() {
  if (comboIndex >= COLOR_COMBO_STEPS.length) {
    await delay(500);
    displaySpeech('Awesome colors!', 1800);
    await AudioManager.speakCorrect('Awesome! Beautiful colors!');
    await delay(1200);
    startChallengePhase();
    return;
  }

  const task = COLOR_COMBO_STEPS[comboIndex];
  const promptEl = $('comboPromptText');
  if (promptEl) {
    promptEl.textContent = task.spokenPrompt;
    promptEl.classList.remove('word-pop-anim');
    void promptEl.offsetWidth;
    promptEl.classList.add('word-pop-anim');
  }

  displaySpeech(task.spokenPrompt, 2400);
  await AudioManager.speakPrompt(task.spokenPrompt);

  const container = $('comboOptionsContainer');
  if (!container) return;
  container.innerHTML = '';

  task.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'combo-option-card';
    btn.innerHTML = `
      <div class="combo-card-swatch" style="background-color: ${opt.colorHex}">
        <span class="combo-swatch-emoji">${task.targetPart === 'eyes' ? '👀' : (task.targetPart === 'feet' ? '🦶' : '💇')}</span>
      </div>
      <span class="combo-card-label">${opt.label}</span>
    `;

    btn.addEventListener('click', async () => {
      if (opt.isCorrect) {
        btn.classList.add('correct-glow');
        FX.spawnSparklesOnElement(btn);
        AudioManager.playSound('correct');
        AudioManager.speakCorrect(task.spokenSuccess);
        displaySpeech(task.spokenSuccess, 1600);
        addStarReward();

        if (task.targetPart === 'eyes') monsterInstance.setPart('eyes', 'sparkle');
        else if (task.targetPart === 'feet') monsterInstance.setPart('feet', 'shoes');
        else if (task.targetPart === 'hair') monsterInstance.setPart('hair', 'messy');

        comboIndex++;
        setTimeout(() => runNextComboStep(), 1800);
      } else {
        btn.classList.add('wrong-shake');
        setTimeout(() => btn.classList.remove('wrong-shake'), 500);
        AudioManager.playSound('wrong');
        AudioManager.speakWrong();
        displaySpeech('Try again!', 1200);
      }
    });

    container.appendChild(btn);
  });
}

/* ══════════════════════════════════════════════════════════
   PHASE 6: MINI CHALLENGE
   ══════════════════════════════════════════════════════════ */
async function startChallengePhase() {
  showPanel('challenge');
  currentPhase = 'challenge';
  challengeIndex = 0;
  monsterInstance.clearHighlight();
  updateProgressIndicator('progress-chal');

  displaySpeech("Can you find my body parts?", 2400);
  await AudioManager.speak("Can you find my body parts?", { rate: 0.78, pitch: 1.25 });
  await delay(1200);
  runNextChallengeStep();
}

async function runNextChallengeStep() {
  if (challengeIndex >= CHALLENGE_QUESTIONS.length) {
    await delay(600);
    displaySpeech('YOU DID IT! ⭐', 2000);
    await AudioManager.speakCorrect('You did it! Now, are you ready to dance?');
    await delay(1500);
    startMonsterDancePhase();
    return;
  }

  const q = CHALLENGE_QUESTIONS[challengeIndex];
  const chalLabel = $('challengeQuestionText');
  if (chalLabel) {
    chalLabel.textContent = q.ask;
    chalLabel.classList.remove('word-pop-anim');
    void chalLabel.offsetWidth;
    chalLabel.classList.add('word-pop-anim');
  }

  displaySpeech(q.ask, 2400);
  await AudioManager.speakPrompt(q.ask);

  const svg = $('monsterSVG');
  if (!svg) return;
  svg.style.cursor = 'pointer';

  const chalHandler = (e) => {
    const targetGroup = e.target.closest('g[data-part]');
    const clickedPart = targetGroup ? targetGroup.dataset.part : null;

    if (clickedPart === q.part) {
      svg.removeEventListener('click', chalHandler);
      svg.style.cursor = '';

      monsterInstance.wigglePart(q.groupId);
      FX.spawnSparklesOnElement(targetGroup);
      AudioManager.playSound('correct');
      AudioManager.speakCorrect(q.correct);
      displaySpeech(q.correct, 1600);
      addStarReward();

      challengeIndex++;
      setTimeout(() => runNextChallengeStep(), 2000);
    } else {
      if (targetGroup) monsterInstance.wigglePart(targetGroup.id);
      AudioManager.playSound('wrong');
      AudioManager.speakWrong();
      displaySpeech(q.wrong, 1200);
    }
  };

  svg.addEventListener('click', chalHandler);
  svg._chalHandler = chalHandler;
}

/* ══════════════════════════════════════════════════════════
   PHASE 7: MONSTER DANCE (MAIN EVENT)
   Slow instructional commands -> 20-30s rich choreography
   ══════════════════════════════════════════════════════════ */

/**
 * Bulletproof Promise-based animation player for choreography steps
 * Guarantees resolution with timeout fallback so sequence never freezes.
 */
function playChoreographyStep(danceSvg, move) {
  return new Promise(resolve => {
    if (!danceSvg) {
      resolve();
      return;
    }

    // Safely reset class and re-apply target movement class
    danceSvg.setAttribute('class', '');
    void danceSvg.getBoundingClientRect(); // force DOM reflow
    danceSvg.setAttribute('class', move.css);

    // Dynamic facial & body reactions
    const mouth = danceSvg.querySelector('#g-mouth');
    const eyes = danceSvg.querySelector('#g-eyes');
    if (mouth && (move.id === 'high-bounce' || move.id === 'double-jump' || move.id === 'final-freeze')) {
      mouth.classList.add('mouth-talking');
      setTimeout(() => mouth.classList.remove('mouth-talking'), move.dur);
    }
    if (eyes && Math.random() > 0.3) {
      eyes.classList.add('monster-blink-anim');
      setTimeout(() => eyes.classList.remove('monster-blink-anim'), 350);
    }

    // Sparkle burst on energetic beats
    if (move.id === 'groove-left' || move.id === 'groove-right' || move.id === 'high-bounce' || move.id === 'final-freeze') {
      FX.spawnSparklesOnElement(danceSvg);
    }

    // Guaranteed completion fallback timer
    setTimeout(() => {
      danceSvg.setAttribute('class', '');
      resolve();
    }, move.dur);
  });
}

async function grooveLeft(danceSvg) {
  setDanceCommandText("GROOVE LEFT! ⬅️");
  return playChoreographyStep(danceSvg, {
    id: 'groove-left',
    banner: "GROOVE LEFT! ⬅️",
    css: "dance-groove-left",
    dur: 1400
  });
}

async function grooveRight(danceSvg) {
  setDanceCommandText("GROOVE RIGHT! ➡️");
  return playChoreographyStep(danceSvg, {
    id: 'groove-right',
    banner: "GROOVE RIGHT! ➡️",
    css: "dance-groove-right",
    dur: 1400
  });
}

async function startMonsterDancePhase() {
  // Smoothly fade out previous audio and start party transition
  await AudioManager.fadeOutPreviousAudio(600);
  AudioManager.playSound('party-transition');

  // Transfer exact monster customizations to the Dance SVG
  const danceSvg = $('danceMonsterSVG');
  const sourceSvg = $('monsterSVG');
  if (danceSvg && sourceSvg) {
    danceSvg.innerHTML = sourceSvg.innerHTML;
    const col = monsterInstance.state.color;
    danceSvg.style.setProperty('--mc', col.hex);
    danceSvg.style.setProperty('--mcd', col.dark);
    danceSvg.style.setProperty('--mcl', col.light);
  }

  showScreen('dance');
  currentPhase = 'dance';
  updateProgressIndicator('progress-dance');

  FX.startConfetti($('screen-dance'));
  FX.startPartyElements($('screen-dance'));

  // Start new, energetic, separate children's dance beat
  AudioManager.startDanceMusic();

  displaySpeech('', 0);
  setDanceCommandText("Are you ready?");
  await AudioManager.speak("Are you ready?", { rate: 0.78, pitch: 1.25 });
  await delay(1600);

  setDanceCommandText("LET'S DANCE! 🕺");
  await AudioManager.speak("Let's dance!", { rate: 0.82, pitch: 1.35 });
  await delay(1200);

  // ── Step 1: Slowed Down Instructional Dance Commands (~3s each) ──
  // Sequence: HIGHLIGHT -> SPEAK -> ANIMATE MOVEMENT -> PAUSE
  for (const cmd of INSTRUCTIONAL_DANCE_COMMANDS) {
    setDanceCommandText(cmd.speak);

    // 1. Highlight target body part
    let targetEl = null;
    if (cmd.target === 'whole') {
      targetEl = danceSvg;
    } else {
      targetEl = danceSvg.querySelector(`#${cmd.groupId}`);
    }

    if (targetEl) {
      targetEl.classList.add('part-target-glow');
      FX.spawnSparklesOnElement(targetEl);
    }

    // 2. Speak command
    await delay(300);
    await AudioManager.speak(cmd.speak, { rate: 0.76, pitch: 1.25 });

    // 3. Perform movement
    if (targetEl) {
      targetEl.classList.remove('part-target-glow');
      targetEl.classList.add(cmd.css);
      setTimeout(() => targetEl.classList.remove(cmd.css), cmd.dur - 300);
    }

    // 4. Paced wait before next command
    await delay(cmd.dur);
  }

  // ── Step 2: 20-30 Second High-Energy Free Dance Choreography ──
  // First, dedicated Groove Left & Groove Right side-to-side dance moves
  await grooveLeft(danceSvg);
  await delay(200);
  await grooveRight(danceSvg);
  await delay(200);

  // Then execute the remaining choreography routine sequentially
  for (const phaseItem of FREE_DANCE_ROUTINE) {
    if (phaseItem.id === 'groove-left' || phaseItem.id === 'groove-right') {
      continue; // already performed as the opening groove
    }

    setDanceCommandText(phaseItem.banner);
    await playChoreographyStep(danceSvg, phaseItem);
    await delay(150);
  }

  // Final Pose & Freeze moment
  setDanceCommandText("🎉 AMAZING DANCER! ⭐");
  FX.spawnSparklesOnElement(danceSvg);
  FX.startConfetti($('screen-dance'));
  await AudioManager.speak("Amazing! You are the best dancer in the world!", { rate: 0.78, pitch: 1.30 });
  await delay(3000);

  AudioManager.stopDanceMusic();
  FX.stopConfetti();
  FX.stopPartyElements();
  startCelebrationPhase();
}

function setDanceCommandText(text) {
  const el = $('danceCommandBanner');
  if (!el) return;
  el.textContent = text;
  el.classList.remove('banner-pop-anim');
  void el.offsetWidth;
  el.classList.add('banner-pop-anim');
}

/* ══════════════════════════════════════════════════════════
   PHASE 8: FINAL CELEBRATION
   ══════════════════════════════════════════════════════════ */
async function startCelebrationPhase() {
  const celebSvg = $('celebMonsterSVG');
  const sourceSvg = $('monsterSVG');
  if (celebSvg && sourceSvg) {
    celebSvg.innerHTML = sourceSvg.innerHTML;
    const col = monsterInstance.state.color;
    celebSvg.style.setProperty('--mc', col.hex);
    celebSvg.style.setProperty('--mcd', col.dark);
    celebSvg.style.setProperty('--mcl', col.light);
  }

  showScreen('celeb');
  currentPhase = 'celeb';

  FX.startConfetti($('screen-celeb'));
  AudioManager.playSound('celebration');

  const starBadge = $('celebStarsBanner');
  if (starBadge) {
    starBadge.textContent = '⭐'.repeat(Math.min(Math.max(totalStars, 5), 8));
  }

  await delay(600);
  await AudioManager.speak("AMAZING! Look at MY MONSTER! You did a fantastic job!", { rate: 0.78, pitch: 1.25 });

  if (celebSvg) {
    celebSvg.classList.add('monster-party-happy');
  }
}

/* ══════════════════════════════════════════════════════════
   RESET & RESTART
   ══════════════════════════════════════════════════════════ */
function restartGame(isNewMonster = false) {
  FX.stopConfetti();
  FX.stopPartyElements();
  AudioManager.stopDanceMusic();

  totalStars = 0;
  discoveryIndex = 0;
  comboIndex = 0;
  challengeIndex = 0;
  updateStarCounterUI();

  if (isNewMonster) {
    const svg = $('monsterSVG');
    if (svg) {
      svg.innerHTML = '';
      monsterInstance = new Monster(svg);
    }
  }

  initStartScreen();
}

/* ══════════════════════════════════════════════════════════
   EVENT LISTENERS & APP BOOTSTRAP
   ══════════════════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  // Initialize visual FX canvas
  const canvas = $('bgFxCanvas');
  if (canvas) FX.initCanvas(canvas);

  // Initialize Layered Monster
  const svg = $('monsterSVG');
  if (svg) {
    monsterInstance = new Monster(svg);
  }

  initStartScreen();

  // Sound toggle handler
  const soundToggleBtns = [$('btnSoundToggleStart'), $('btnSoundToggleGame')];
  function handleSoundToggle() {
    const muted = AudioManager.toggleMute();
    soundToggleBtns.forEach(btn => {
      if (btn) btn.textContent = muted ? '🔇' : '🔊';
    });
  }
  soundToggleBtns.forEach(btn => btn?.addEventListener('click', handleSoundToggle));

  // Play button
  $('btnPlayGame')?.addEventListener('click', () => {
    AudioManager.playSound('pop');
    startIntroPhase();
  });

  // Skip discovery button
  $('btnSkipDiscovery')?.addEventListener('click', () => {
    AudioManager.playSound('pop');
    startCustomizationPhase();
  });

  // Finish customization button
  $('btnFinishCustomization')?.addEventListener('click', () => {
    AudioManager.playSound('correct');
    startComboPhase();
  });

  // Skip combo button
  $('btnSkipCombo')?.addEventListener('click', () => {
    AudioManager.playSound('pop');
    startChallengePhase();
  });

  // Skip challenge button
  $('btnSkipChallenge')?.addEventListener('click', () => {
    AudioManager.playSound('pop');
    const svg = $('monsterSVG');
    if (svg && svg._chalHandler) {
      svg.removeEventListener('click', svg._chalHandler);
    }
    startMonsterDancePhase();
  });

  // Restart buttons
  $('btnPlayAgain')?.addEventListener('click', () => {
    AudioManager.playSound('pop');
    restartGame(false);
  });

  $('btnNewMonster')?.addEventListener('click', () => {
    AudioManager.playSound('pop');
    restartGame(true);
  });
});
