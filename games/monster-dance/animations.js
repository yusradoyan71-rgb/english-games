// ============================================================
// animations.js  -  Monster Dance! Visual FX & Particle Engine
// ============================================================
'use strict';

const FX = (() => {
  let canvas = null;
  let ctx = null;
  let bgParticles = [];
  let confettiInterval = null;
  let balloonInterval = null;
  let notesInterval = null;

  function initCanvas(canvasEl) {
    canvas = canvasEl;
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    createParticles();
    animateBg();
  }

  function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    bgParticles = [];
    const colors = ['#FFD700', '#FF69B4', '#60A5FA', '#4ADE80', '#A78BFA', '#FB923C', '#F472B6'];
    for (let i = 0; i < 35; i++) {
      bgParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 3 + Math.random() * 6,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -0.4 - Math.random() * 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.35 + Math.random() * 0.55,
        twinkleSpeed: 0.02 + Math.random() * 0.03,
        twinklePhase: Math.random() * Math.PI * 2
      });
    }
  }

  function animateBg() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of bgParticles) {
      p.twinklePhase += p.twinkleSpeed;
      const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.twinklePhase));

      ctx.save();
      ctx.globalAlpha = currentAlpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      // Soft glow
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.restore();

      p.x += p.vx;
      p.y += p.vy;

      if (p.y < -20) {
        p.y = window.innerHeight + 20;
        p.x = Math.random() * window.innerWidth;
      }
      if (p.x < -20) p.x = window.innerWidth + 20;
      if (p.x > window.innerWidth + 20) p.x = -20;
    }

    requestAnimationFrame(animateBg);
  }

  // ── Sparkle Burst Effect ──
  function spawnSparkles(x, y, count = 12) {
    const container = document.body;
    const colors = ['#FFD700', '#FFF', '#FF69B4', '#60A5FA', '#4ADE80'];

    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      s.className = 'sparkle-particle';
      s.style.left = `${x}px`;
      s.style.top = `${y}px`;
      s.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      const angle = (i / count) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
      const dist = 50 + Math.random() * 70;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;

      s.style.setProperty('--tx', `${tx}px`);
      s.style.setProperty('--ty', `${ty}px`);
      container.appendChild(s);

      setTimeout(() => s.remove(), 750);
    }
  }

  function spawnSparklesOnElement(el) {
    if (!el) return;
    const r = el.getBoundingClientRect();
    spawnSparkles(r.left + r.width / 2, r.top + r.height / 2, 14);
  }

  // ── Flying Star Reward Effect ──
  function flyStarToCounter(fromEl, targetCounterEl) {
    if (!fromEl || !targetCounterEl) return;
    const fr = fromEl.getBoundingClientRect();
    const tr = targetCounterEl.getBoundingClientRect();

    const star = document.createElement('div');
    star.className = 'flying-star-fx';
    star.textContent = '⭐';
    star.style.left = `${fr.left + fr.width / 2 - 24}px`;
    star.style.top = `${fr.top + fr.height / 2 - 24}px`;

    const tx = tr.left + tr.width / 2 - (fr.left + fr.width / 2);
    const ty = tr.top + tr.height / 2 - (fr.top + fr.height / 2);

    star.style.setProperty('--tx', `${tx}px`);
    star.style.setProperty('--ty', `${ty}px`);
    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
      targetCounterEl.classList.add('star-bump');
      setTimeout(() => targetCounterEl.classList.remove('star-bump'), 300);
    }, 850);
  }

  // ── Confetti Cannon ──
  function startConfetti(containerEl) {
    stopConfetti();
    const container = containerEl || document.body;
    const colors = ['#FF6B6B', '#FFD700', '#60A5FA', '#4ADE80', '#F472B6', '#A78BFA', '#FB923C', '#FFF'];
    const shapes = ['square', 'circle', 'ribbon'];

    confettiInterval = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        const c = document.createElement('div');
        c.className = 'confetti-piece';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        c.style.backgroundColor = color;
        c.style.left = `${Math.random() * 100}%`;
        c.style.animationDuration = `${1.6 + Math.random() * 1.8}s`;
        c.style.animationDelay = `${Math.random() * 0.2}s`;

        if (shape === 'circle') {
          c.style.borderRadius = '50%';
          c.style.width = '12px';
          c.style.height = '12px';
        } else if (shape === 'ribbon') {
          c.style.width = '6px';
          c.style.height = '18px';
          c.style.borderRadius = '3px';
        } else {
          c.style.width = '10px';
          c.style.height = '10px';
          c.style.borderRadius = '2px';
        }

        container.appendChild(c);
        setTimeout(() => c.remove(), 3400);
      }
    }, 110);
  }

  function stopConfetti() {
    if (confettiInterval) {
      clearInterval(confettiInterval);
      confettiInterval = null;
    }
  }

  // ── Party Balloons & Notes ──
  function startPartyElements(containerEl) {
    stopPartyElements();
    const container = containerEl || document.body;
    const balloonEmojis = ['🎈', '🎈', '🎈', '🎉', '🌟', '✨'];
    const noteEmojis = ['🎵', '🎶', '🎷', '🎸', '⭐', '✨'];

    balloonInterval = setInterval(() => {
      const b = document.createElement('div');
      b.className = 'floating-party-balloon';
      b.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
      b.style.left = `${5 + Math.random() * 90}%`;
      b.style.fontSize = `${2 + Math.random() * 1.5}rem`;
      b.style.animationDuration = `${4 + Math.random() * 3}s`;
      container.appendChild(b);
      setTimeout(() => b.remove(), 7000);
    }, 900);

    notesInterval = setInterval(() => {
      const n = document.createElement('div');
      n.className = 'floating-music-note';
      n.textContent = noteEmojis[Math.floor(Math.random() * noteEmojis.length)];
      n.style.left = `${10 + Math.random() * 80}%`;
      n.style.bottom = '20%';
      n.style.fontSize = `${1.8 + Math.random() * 1.2}rem`;
      n.style.animationDuration = `${2.5 + Math.random() * 1.5}s`;
      container.appendChild(n);
      setTimeout(() => n.remove(), 4000);
    }, 550);
  }

  function stopPartyElements() {
    if (balloonInterval) {
      clearInterval(balloonInterval);
      balloonInterval = null;
    }
    if (notesInterval) {
      clearInterval(notesInterval);
      notesInterval = null;
    }
  }

  return {
    initCanvas,
    spawnSparkles,
    spawnSparklesOnElement,
    flyStarToCounter,
    startConfetti,
    stopConfetti,
    startPartyElements,
    stopPartyElements
  };
})();
