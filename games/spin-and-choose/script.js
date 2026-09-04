/**
 * SPIN & CHOOSE 🎡 — Kindergarten & Preschool English Speaking Game Engine
 * 
 * Key Pillars:
 * 1. Mathematical Wheel Synchronization (Pointer result == Opened Category 100% of the time).
 * 2. Sound Effects ONLY — Strictly ZERO Human Voice / No Speech Narration.
 * 3. Exact 3D Visual Reference Implementation (Wheel on left, 2x3 cards on right, bottom token chain).
 * 4. Single Category Use per Round + Grand Celebration on 6th completed category.
 */

(function() {
  'use strict';

  // --- GAME STATE ---
  const STATE = {
    IDLE: 'IDLE',
    SPINNING: 'SPINNING',
    CATEGORY_LANDED: 'CATEGORY_LANDED',
    CHOICE_SELECTED: 'CHOICE_SELECTED',
    ROUND_VICTORY: 'ROUND_VICTORY'
  };

  let currentState = STATE.IDLE;
  const allCategories = window.GAME_CATEGORIES; // Fixed 6 categories in order
  let availableCategories = [...allCategories];
  let usedCategoryIds = new Set();
  let currentCategory = allCategories[1]; // Start with Animals displayed as reference
  let selectedChoice = null;

  // --- DOM ELEMENTS ---
  const canvas = document.getElementById('wheelCanvas');
  const ctx = canvas.getContext('2d');
  const pointerEl = document.getElementById('wheelPointer');
  const spinBtn = document.getElementById('btnSpin');
  const spinAgainBtn = document.getElementById('btnSpinAgain');
  const signTitle = document.getElementById('categorySignTitle');
  const cardsGrid = document.getElementById('choiceCardsGrid');
  const showcaseBox = document.getElementById('selectedShowcaseBox');
  const showcaseAvatar = document.getElementById('showcaseAvatar');
  const showcaseWord = document.getElementById('showcaseWord');
  const mascotEl = document.getElementById('mascotContainer');
  const trackerTokensRow = document.getElementById('trackerTokensContainer');
  const victoryModal = document.getElementById('roundVictoryModal');
  const btnPlayAgain = document.getElementById('btnPlayAgain');
  const btnAudioToggle = document.getElementById('btnAudioToggle');

  // Wheel physics & angles
  let currentAngle = 0;
  let isSpinning = false;
  let lastPassedSector = -1;
  const numSlices = 6;
  const sliceAngle = (2 * Math.PI) / numSlices; // 60 degrees (π/3)

  // Confetti FX Canvas
  const fxCanvas = document.getElementById('fxCanvas');
  const fxCtx = fxCanvas.getContext('2d');
  let particles = [];
  let fxAnimationId = null;

  // --- INITIALIZATION ---
  function init() {
    setupCanvasResolution();
    renderTrackerTokens();
    drawWheel(0);
    renderMascot('idle');
    displayCategoryCards(currentCategory);
    setupEventListeners();
    setupConfettiCanvas();
  }

  function setupCanvasResolution() {
    const size = Math.min(canvas.clientWidth || 440, canvas.clientHeight || 440);
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);
  }

  function setupConfettiCanvas() {
    fxCanvas.width = window.innerWidth;
    fxCanvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      fxCanvas.width = window.innerWidth;
      fxCanvas.height = window.innerHeight;
      setupCanvasResolution();
      drawWheel(currentAngle);
    });
  }

  // --- BOTTOM CATEGORY PROGRESS TRACKER RIBBON ---
  function renderTrackerTokens() {
    if (!trackerTokensRow) return;
    trackerTokensRow.innerHTML = '';

    allCategories.forEach(cat => {
      const isUsed = usedCategoryIds.has(cat.id);
      const isCurrent = currentCategory && currentCategory.id === cat.id;

      const token = document.createElement('div');
      token.className = `category-token-circle ${isUsed ? 'completed' : ''} ${isCurrent && !isUsed ? 'active-halo' : ''}`;
      token.setAttribute('title', cat.name);

      token.innerHTML = `
        <span>${cat.icon}</span>
        ${isUsed ? '<span class="token-check-stamp">✓</span>' : ''}
      `;
      trackerTokensRow.appendChild(token);
    });
  }

  // --- DRAWING THE 6-SEGMENT CARNIVAL WHEEL ---
  function drawWheel(angle) {
    const size = Math.min(canvas.clientWidth || 440, canvas.clientHeight || 440);
    const center = size / 2;
    const radius = center - 4;

    ctx.clearRect(0, 0, size, size);

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(angle);

    for (let i = 0; i < numSlices; i++) {
      const cat = allCategories[i];
      const startA = i * sliceAngle;
      const endA = startA + sliceAngle;
      const isUsed = usedCategoryIds.has(cat.id);

      // Draw Sector
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startA, endA);
      ctx.closePath();

      ctx.fillStyle = isUsed ? '#CFD8DC' : cat.sliceColor;
      ctx.fill();

      // Clean White Divider Lines
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#FFFFFF';
      ctx.stroke();

      // Outer Decorative Dots on Slice Border
      const midA = startA + sliceAngle / 2;
      const dotX = Math.cos(midA) * (radius - 12);
      const dotY = Math.sin(midA) * (radius - 12);
      ctx.beginPath();
      ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      // Draw Category Visual + English Name on Slice
      ctx.save();
      ctx.rotate(midA);

      if (isUsed) {
        ctx.globalAlpha = 0.45;
      }

      // 1. Large Visual Category Icon
      const iconStr = cat.wheelIconText || cat.icon;
      const isMultiIcon = iconStr.length > 2;
      const iconFontSize = isMultiIcon ? Math.round(size * 0.08) : Math.round(size * 0.12);

      ctx.font = `${iconFontSize}px 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 6;
      ctx.fillText(iconStr, radius * 0.64, 0);

      // 2. English Category Name (Always Visible)
      ctx.font = `bold ${Math.round(size * 0.038)}px 'Fredoka', 'Quicksand', sans-serif`;
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 5;
      ctx.fillText(cat.name, radius * 0.30, 0);

      ctx.restore();
    }

    ctx.restore();
  }

  // ==========================================================================
  // MATHEMATICAL WHEEL SYNCHRONIZATION & SPIN PHYSICS
  // ==========================================================================
  function startSpin() {
    if (isSpinning || availableCategories.length === 0) return;

    window.gameAudio.initAudioContext();
    window.gameAudio.playButtonClick();
    window.gameAudio.playSpinStart();

    isSpinning = true;
    currentState = STATE.SPINNING;
    spinBtn.disabled = true;
    spinAgainBtn.disabled = true;
    renderMascot('cheering');

    // 1. Pick winner STRICTLY from availableCategories
    const randIndex = Math.floor(Math.random() * availableCategories.length);
    const chosenCategory = availableCategories[randIndex];
    const targetSliceIndex = chosenCategory.index; // Exact fixed slice index (0 to 5)

    // 2. Exact mathematical landing calculation
    const targetSliceCenter = (targetSliceIndex + 0.5) * sliceAngle;
    const pointerAngle = (3 * Math.PI) / 2; // 12 o'clock (270 deg)

    let targetBaseAngle = (pointerAngle - targetSliceCenter) % (Math.PI * 2);
    if (targetBaseAngle < 0) targetBaseAngle += Math.PI * 2;

    const currentNormalized = ((currentAngle % (Math.PI * 2)) + (Math.PI * 2)) % (Math.PI * 2);
    let deltaAngle = (targetBaseAngle - currentNormalized) % (Math.PI * 2);
    if (deltaAngle < 0) deltaAngle += Math.PI * 2;

    // Add 5 full rotations (10*PI) for satisfying 3.6s duration
    const fullSpins = 5;
    const totalRotation = (fullSpins * Math.PI * 2) + deltaAngle;
    const startAngle = currentAngle;
    const finalAngle = startAngle + totalRotation;

    const duration = 3600;
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Custom smooth cubic-quintic deceleration curve
      const ease = 1 - Math.pow(1 - progress, 3.8);
      currentAngle = startAngle + (finalAngle - startAngle) * ease;

      drawWheel(currentAngle);
      checkPegTick(currentAngle);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Stop exactly on the mathematically calculated angle
        currentAngle = finalAngle;
        drawWheel(currentAngle);
        onSpinComplete(chosenCategory);
      }
    }

    requestAnimationFrame(animate);
  }

  // Ticking sound when wheel passes sector boundaries
  function checkPegTick(angle) {
    const normalized = ((angle % (Math.PI * 2)) + (Math.PI * 2)) % (Math.PI * 2);
    const currentSector = Math.floor(normalized / sliceAngle);

    if (currentSector !== lastPassedSector) {
      lastPassedSector = currentSector;
      window.gameAudio.playTick();

      if (pointerEl) {
        pointerEl.classList.add('hit-tick');
        setTimeout(() => pointerEl.classList.remove('hit-tick'), 70);
      }
    }
  }

  // --- SPIN COMPLETE & CATEGORY OPENING ---
  function onSpinComplete(category) {
    isSpinning = false;
    currentState = STATE.CATEGORY_LANDED;
    currentCategory = category;

    // Play satisfying "Ta-da!" chime ("The wheel has chosen!")
    window.gameAudio.playWheelStop();

    // Small burst of sparkles
    triggerConfettiBurst(window.innerWidth * 0.35, window.innerHeight * 0.45, 30);

    // Update bottom tracker halo
    renderTrackerTokens();

    // Brief 0.8s pause to let child see the pointer pointing to category
    setTimeout(() => {
      displayCategoryCards(category);
      spinBtn.disabled = false;
      spinAgainBtn.disabled = false;
      renderMascot('idle');
    }, 700);
  }

  // --- DISPLAY CATEGORY ON RIGHT BOARD ---
  function displayCategoryCards(category) {
    if (!category) return;

    // Update Wooden Signboard Title
    signTitle.textContent = `${category.name}`;

    // Update Question Subtitle
    const qSub = document.getElementById('categoryQuestionText');
    if (qSub) {
      qSub.textContent = category.question;
    }

    // Reset selection showcase
    selectedChoice = null;
    showcaseAvatar.innerHTML = category.items[0].svg;
    showcaseWord.textContent = category.items[0].name;

    // Populate 6 large cartoon choice cards with ALWAYS-VISIBLE English words
    cardsGrid.innerHTML = '';
    category.items.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = `choice-item-card ${index === 0 ? 'selected' : ''}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', item.name);

      card.innerHTML = `
        <div class="choice-svg-box">
          ${item.svg}
        </div>
        <div class="choice-card-word">${item.name}</div>
      `;

      card.addEventListener('click', () => {
        onChoiceSelected(item, card);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onChoiceSelected(item, card);
        }
      });

      cardsGrid.appendChild(card);
    });
  }

  // --- ON OPTION SELECTED (Positive Reward Sound & Visual Feedback) ---
  function onChoiceSelected(item, cardElement) {
    selectedChoice = item;
    currentState = STATE.CHOICE_SELECTED;

    // Positive Reward Sound (Ding! + Sparkle Chime)
    window.gameAudio.playRewardSound();

    // Highlight card
    const allCards = cardsGrid.querySelectorAll('.choice-item-card');
    allCards.forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');

    // Update bottom showcase
    showcaseAvatar.innerHTML = item.svg;
    showcaseWord.textContent = item.name;

    // Small Confetti & Sparkles
    const rect = cardElement.getBoundingClientRect();
    triggerConfettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);

    // Star Mascot jumps with excitement
    renderMascot('cheering');
    setTimeout(() => {
      if (currentState !== STATE.SPINNING && currentState !== STATE.ROUND_VICTORY) {
        renderMascot('idle');
      }
    }, 1500);

    // Mark category as used & update tracker
    if (currentCategory && !usedCategoryIds.has(currentCategory.id)) {
      usedCategoryIds.add(currentCategory.id);
      availableCategories = availableCategories.filter(c => c.id !== currentCategory.id);
      renderTrackerTokens();
      drawWheel(currentAngle); // Redraws used slice as greyed out
    }
  }

  // --- SPIN AGAIN HANDLER ---
  function handleSpinAgain() {
    window.gameAudio.playButtonClick();

    // If all 6 categories are completed -> Trigger Grand End-of-Round Celebration!
    if (availableCategories.length === 0) {
      triggerRoundVictory();
    } else {
      startSpin();
    }
  }

  // --- GRAND END OF ROUND VICTORY ---
  function triggerRoundVictory() {
    currentState = STATE.ROUND_VICTORY;

    window.gameAudio.playVictoryCelebration();

    triggerConfettiBurst(window.innerWidth * 0.3, window.innerHeight * 0.4, 60);
    triggerConfettiBurst(window.innerWidth * 0.7, window.innerHeight * 0.4, 60);
    setTimeout(() => {
      triggerConfettiBurst(window.innerWidth * 0.5, window.innerHeight * 0.3, 80);
    }, 400);

    renderMascot('cheering');

    victoryModal.classList.add('active');
  }

  // --- RESET FOR A FRESH NEW ROUND ---
  function resetGameRound() {
    window.gameAudio.playButtonClick();

    victoryModal.classList.remove('active');

    availableCategories = [...allCategories];
    usedCategoryIds.clear();
    currentCategory = allCategories[0];

    renderTrackerTokens();
    drawWheel(0);
    displayCategoryCards(currentCategory);
    renderMascot('idle');

    triggerConfettiBurst(window.innerWidth / 2, window.innerHeight / 2, 35);
  }

  // --- MASCOT RENDERER ---
  function renderMascot(state) {
    if (mascotEl && window.MASCOT_SVGS) {
      mascotEl.innerHTML = window.MASCOT_SVGS[state] || window.MASCOT_SVGS.idle;
    }
  }

  // --- CONFETTI PARTICLE BURST ---
  function triggerConfettiBurst(x, y, count = 40) {
    const colors = ['#FF4757', '#2ED573', '#1E90FF', '#FFA502', '#9B59B6', '#FFD200', '#FF6B81'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3.5 + Math.random() * 8;
      particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: 5 + Math.random() * 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        alpha: 1,
        decay: 0.014 + Math.random() * 0.016,
        shape: Math.random() > 0.4 ? 'circle' : 'rect'
      });
    }

    if (!fxAnimationId) {
      renderParticles();
    }
  }

  function renderParticles() {
    fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22;
      p.rotation += p.rotSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      fxCtx.save();
      fxCtx.translate(p.x, p.y);
      fxCtx.rotate((p.rotation * Math.PI) / 180);
      fxCtx.globalAlpha = p.alpha;
      fxCtx.fillStyle = p.color;

      if (p.shape === 'circle') {
        fxCtx.beginPath();
        fxCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        fxCtx.fill();
      } else {
        fxCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      }

      fxCtx.restore();
    }

    if (particles.length > 0) {
      fxAnimationId = requestAnimationFrame(renderParticles);
    } else {
      fxAnimationId = null;
    }
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    spinBtn.addEventListener('click', startSpin);
    spinAgainBtn.addEventListener('click', handleSpinAgain);

    canvas.addEventListener('click', () => {
      if (currentState !== STATE.SPINNING && availableCategories.length > 0) {
        startSpin();
      }
    });

    if (btnPlayAgain) {
      btnPlayAgain.addEventListener('click', resetGameRound);
    }

    if (mascotEl) {
      mascotEl.addEventListener('click', () => {
        window.gameAudio.playRewardSound();
        triggerConfettiBurst(mascotEl.getBoundingClientRect().left + 35, mascotEl.getBoundingClientRect().top + 35, 20);
        renderMascot('cheering');
        setTimeout(() => renderMascot('idle'), 1500);
      });
    }

    if (btnAudioToggle) {
      btnAudioToggle.addEventListener('click', () => {
        const isMuted = window.gameAudio.toggleMute();
        btnAudioToggle.textContent = isMuted ? '🔇' : '🔊';
        btnAudioToggle.classList.toggle('muted', isMuted);
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (currentState === STATE.ROUND_VICTORY) {
          resetGameRound();
        } else if (!isSpinning) {
          startSpin();
        }
      } else if (e.code === 'Enter' || e.code === 'Escape') {
        if (currentState === STATE.ROUND_VICTORY) {
          resetGameRound();
        }
      } else if (e.key === 'm' || e.key === 'M') {
        if (btnAudioToggle) btnAudioToggle.click();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
