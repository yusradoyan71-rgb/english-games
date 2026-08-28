// ============================================================
// monster.js  -  Monster Dance! Layered Character Engine
// Super Lovable, Cute, Expressive Character Manager
// ============================================================
'use strict';

class Monster {
  constructor(svgElement) {
    this.svg = svgElement;
    this.state = {
      eyes: 'round',
      ears: 'round',
      nose: 'tiny-round',
      mouth: 'big-smile',
      hair: 'spiky',
      hands: 'small',
      feet: 'small',
      accessories: 'none',
      color: MONSTER_COLORS[0] // Green default
    };

    this._blinkTimer = null;
    this._isLocked = false;
    this._init();
  }

  _init() {
    this._ensureLayerGroups();
    this._renderBaseBody();
    this._renderAllParts();
    this.applyColor(this.state.color);
    this.startIdleAnimations();
  }

  _ensureLayerGroups() {
    // Exact SVG layering order (from back to front):
    // 1. ears (behind head)
    // 2. legs (behind body)
    // 3. arms (behind body)
    // 4. body
    // 5. head
    // 6. hair
    // 7. eyes
    // 8. nose
    // 9. mouth
    // 10. hands (in front of body)
    // 11. feet (in front of legs)
    // 12. accessories (on top of head/face/body)
    const layerOrder = [
      'g-ears', 'g-legs', 'g-arms', 'g-body', 'g-head',
      'g-hair', 'g-eyes', 'g-nose', 'g-mouth', 'g-hands', 'g-feet', 'g-accessories'
    ];

    layerOrder.forEach(layerId => {
      let g = this.svg.querySelector(`#${layerId}`);
      if (!g) {
        g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.id = layerId;
        g.setAttribute('data-part', layerId.replace('g-', ''));
        this.svg.appendChild(g);
      }
    });
  }

  _setGroupHtml(layerId, innerSvg) {
    const g = this.svg.querySelector(`#${layerId}`);
    if (g) {
      g.innerHTML = innerSvg;
    }
  }

  _renderBaseBody() {
    // Ultra Cute, Soft, Round Torso / Body
    this._setGroupHtml('g-body', `
      <!-- Soft drop shadow -->
      <ellipse cx="204" cy="364" rx="88" ry="78" fill="rgba(0,0,0,0.07)"/>
      <ellipse class="monster-torso" cx="200" cy="356" rx="88" ry="78"
        fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
      <!-- Soft cute pastel belly patch -->
      <ellipse cx="196" cy="348" rx="52" ry="46" fill="var(--mcl)" opacity="0.45"/>
      <!-- Friendly belly sparkle / freckles -->
      <circle cx="180" cy="368" r="7" fill="var(--mcl)" opacity="0.35"/>
      <circle cx="200" cy="378" r="6" fill="var(--mcl)" opacity="0.3"/>
      <circle cx="218" cy="364" r="8" fill="var(--mcl)" opacity="0.35"/>
    `);

    // Super Lovable Head with Rosy Blush Cheeks
    this._setGroupHtml('g-head', `
      <!-- Head shadow -->
      <circle cx="204" cy="198" r="88" fill="rgba(0,0,0,0.07)"/>
      <!-- Head base -->
      <circle class="monster-head-base" cx="200" cy="194" r="88"
        fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
      <!-- Big Soft Rosy Blush Cheeks -->
      <ellipse class="monster-blush blush-left" cx="140" cy="224" rx="22" ry="14" fill="#FDA4AF" opacity="0.65"/>
      <ellipse class="monster-blush blush-right" cx="260" cy="224" rx="22" ry="14" fill="#FDA4AF" opacity="0.65"/>
      <!-- Forehead gentle glint -->
      <ellipse cx="174" cy="148" rx="28" ry="18" fill="#FFFFFF" opacity="0.22"/>
    `);

    // Short Cute Arms
    this._setGroupHtml('g-arms', `
      <g class="monster-arm-left" transform-origin="114 316">
        <ellipse cx="114" cy="316" rx="22" ry="44" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"
          transform="rotate(-20, 114, 316)"/>
      </g>
      <g class="monster-arm-right" transform-origin="286 316">
        <ellipse cx="286" cy="316" rx="22" ry="44" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"
          transform="rotate(20, 286, 316)"/>
      </g>
    `);

    // Short Cute Legs
    this._setGroupHtml('g-legs', `
      <rect class="monster-leg-left" x="152" y="416" width="38" height="70" rx="19"
        fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
      <rect class="monster-leg-right" x="210" y="416" width="38" height="70" rx="19"
        fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
    `);
  }

  _renderAllParts() {
    ['eyes', 'ears', 'nose', 'mouth', 'hair', 'hands', 'feet', 'accessories'].forEach(category => {
      this.setPart(category, this.state[category], false);
    });
  }

  setPart(category, partId, animate = true) {
    const partCategoryList = MONSTER_PARTS[category];
    if (!partCategoryList) return;

    const partObj = partCategoryList.find(p => p.id === partId);
    if (!partObj) return;

    this.state[category] = partId;
    const layerId = `g-${category}`;

    if (animate) {
      this._flyInPart(layerId, partObj.svg);
    } else {
      this._setGroupHtml(layerId, partObj.svg);
    }
  }

  _flyInPart(layerId, svgContent) {
    const groupEl = this.svg.querySelector(`#${layerId}`);
    if (!groupEl) return;

    this._isLocked = true;
    groupEl.innerHTML = svgContent;

    groupEl.classList.remove('part-pop-in', 'part-wiggle');
    void groupEl.getBoundingClientRect(); // force reflow
    groupEl.classList.add('part-pop-in');

    setTimeout(() => {
      groupEl.classList.remove('part-pop-in');
      this._isLocked = false;
    }, 450);
  }

  applyColor(colorObj) {
    if (!colorObj) return;
    this.state.color = colorObj;
    this.svg.style.setProperty('--mc', colorObj.hex);
    this.svg.style.setProperty('--mcd', colorObj.dark);
    this.svg.style.setProperty('--mcl', colorObj.light);

    // Color feedback pulse
    this.svg.classList.add('color-glow-pulse');
    setTimeout(() => this.svg.classList.remove('color-glow-pulse'), 500);
  }

  // ── Idle Animations (Breathing, Blinking) ──
  startIdleAnimations() {
    this.svg.classList.add('monster-breathe');
    this._scheduleNextBlink();
  }

  stopIdleAnimations() {
    this.svg.classList.remove('monster-breathe');
    if (this._blinkTimer) {
      clearTimeout(this._blinkTimer);
      this._blinkTimer = null;
    }
  }

  _scheduleNextBlink() {
    const interval = 2200 + Math.random() * 2200;
    this._blinkTimer = setTimeout(() => {
      this.blink();
      this._scheduleNextBlink();
    }, interval);
  }

  blink() {
    const eyesGroup = this.svg.querySelector('#g-eyes');
    if (!eyesGroup) return;
    eyesGroup.classList.remove('monster-blink-anim');
    void eyesGroup.getBoundingClientRect();
    eyesGroup.classList.add('monster-blink-anim');
    setTimeout(() => eyesGroup.classList.remove('monster-blink-anim'), 350);
  }

  wigglePart(groupId) {
    const g = this.svg.querySelector(groupId.startsWith('#') ? groupId : `#${groupId}`);
    if (!g) return;
    g.classList.remove('part-wiggle');
    void g.getBoundingClientRect();
    g.classList.add('part-wiggle');
    setTimeout(() => g.classList.remove('part-wiggle'), 650);
  }

  highlightPart(groupId) {
    this.clearHighlight();
    const g = this.svg.querySelector(groupId.startsWith('#') ? groupId : `#${groupId}`);
    if (g) {
      g.classList.add('part-target-glow');
    }
  }

  clearHighlight() {
    const allGlowing = this.svg.querySelectorAll('.part-target-glow');
    allGlowing.forEach(el => el.classList.remove('part-target-glow'));
  }

  // ── Specific Customization Reaction Animations ──
  shakeHead() {
    const headGroup = this.svg.querySelector('#g-head');
    const hairGroup = this.svg.querySelector('#g-hair');
    [headGroup, hairGroup].forEach(g => {
      if (g) {
        g.classList.remove('part-head-shake');
        void g.getBoundingClientRect();
        g.classList.add('part-head-shake');
        setTimeout(() => g.classList.remove('part-head-shake'), 700);
      }
    });
  }

  openMouth(duration = 1000) {
    const mouthGroup = this.svg.querySelector('#g-mouth');
    if (!mouthGroup) return;
    mouthGroup.classList.add('mouth-talking');
    setTimeout(() => mouthGroup.classList.remove('mouth-talking'), duration);
  }

  waveHands() {
    const hands = this.svg.querySelector('#g-hands');
    const arms = this.svg.querySelector('#g-arms');
    [hands, arms].forEach(g => {
      if (g) {
        g.classList.add('hands-waving');
        setTimeout(() => g.classList.remove('hands-waving'), 900);
      }
    });
  }

  jumpFeet() {
    this.svg.classList.remove('monster-jump-single');
    void this.svg.getBoundingClientRect();
    this.svg.classList.add('monster-jump-single');
    setTimeout(() => this.svg.classList.remove('monster-jump-single'), 600);
  }

  happyPose() {
    this.svg.classList.remove('monster-happy-pose');
    void this.svg.getBoundingClientRect();
    this.svg.classList.add('monster-happy-pose');
    setTimeout(() => this.svg.classList.remove('monster-happy-pose'), 800);
  }

  spinHappy() {
    this.svg.classList.remove('monster-spin-happy');
    void this.svg.getBoundingClientRect();
    this.svg.classList.add('monster-spin-happy');
    setTimeout(() => this.svg.classList.remove('monster-spin-happy'), 700);
  }

  isLocked() {
    return this._isLocked;
  }
}
