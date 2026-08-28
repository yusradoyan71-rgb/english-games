/**
 * HANGMAN - Animation and Visual FX Engine
 * Confetti bursts, floating score tags, particle bursts, rescue effects.
 */

class AnimationEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animating = false;
    this.initCanvas();
  }

  initCanvas() {
    let c = document.getElementById('fxCanvas');
    if (!c) {
      c = document.createElement('canvas');
      c.id = 'fxCanvas';
      c.style.position = 'fixed';
      c.style.top = '0';
      c.style.left = '0';
      c.style.width = '100vw';
      c.style.height = '100vh';
      c.style.pointerEvents = 'none';
      c.style.zIndex = '9999';
      document.body.appendChild(c);
    }
    this.canvas = c;
    this.ctx = c.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createConfetti(count = 70) {
    const colors = ['#6366f1', '#38bdf8', '#34d399', '#fbbf24', '#f43f5e', '#a855f7', '#ec4899'];
    const w = this.canvas.width;
    const h = this.canvas.height;

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * w,
        y: -20 - Math.random() * 50,
        vx: (Math.random() - 0.5) * 6,
        vy: Math.random() * 4 + 3,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        life: 1,
        decay: Math.random() * 0.008 + 0.005,
        type: Math.random() > 0.5 ? 'rect' : 'circle'
      });
    }

    if (!this.animating) {
      this.animating = true;
      this.render();
    }
  }

  burstFromElement(el, count = 25, isPositive = true) {
    if (!el || !this.canvas) return;
    const rect = el.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    const colors = isPositive 
      ? ['#34d399', '#10b981', '#6ee7b7', '#38bdf8', '#fbbf24'] 
      : ['#fb7185', '#f43f5e', '#e11d48', '#fda4af'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 2;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (isPositive ? 1.5 : 0),
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        opacity: 1,
        life: 1,
        decay: Math.random() * 0.02 + 0.015,
        type: 'circle'
      });
    }

    if (!this.animating) {
      this.animating = true;
      this.render();
    }
  }

  spawnFloatingBadge(text, targetEl, badgeType = 'success') {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const badge = document.createElement('div');
    badge.className = `floating-fx-badge badge-${badgeType}`;
    badge.textContent = text;

    badge.style.left = `${rect.left + rect.width / 2}px`;
    badge.style.top = `${rect.top}px`;

    document.body.appendChild(badge);

    setTimeout(() => {
      badge.remove();
    }, 1400);
  }

  render() {
    if (!this.ctx || !this.canvas) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.life -= p.decay;

      if (p.life <= 0 || p.y > this.canvas.height + 40) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = Math.max(0, p.life);
      this.ctx.fillStyle = p.color;

      if (p.type === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      }

      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.render());
    } else {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

const animEngine = new AnimationEngine();
