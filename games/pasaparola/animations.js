/**
 * PASAPAROLA - Animation & Particle Effects
 */

class AnimationController {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animId = null;
  }

  initCanvas() {
    if (!this.canvas) {
      this.canvas = document.createElement("canvas");
      this.canvas.id = "confettiCanvas";
      this.canvas.style.position = "fixed";
      this.canvas.style.top = "0";
      this.canvas.style.left = "0";
      this.canvas.style.width = "100vw";
      this.canvas.style.height = "100vh";
      this.canvas.style.pointerEvents = "none";
      this.canvas.style.zIndex = "9999";
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");
      this.resize();
      window.addEventListener("resize", () => this.resize());
    }
  }

  resize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  startConfetti(durationMs = 4000) {
    this.initCanvas();
    this.particles = [];
    const colors = ["#4ade80", "#38bdf8", "#fbbf24", "#f43f5e", "#a855f7", "#ec4899", "#22d3ee"];
    const count = 120;

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * -this.canvas.height * 0.5,
        w: Math.random() * 10 + 6,
        h: Math.random() * 6 + 4,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 3,
        rot: Math.random() * 360,
        vrot: (Math.random() - 0.5) * 8,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const startTime = Date.now();
    const render = () => {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rot * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        this.ctx.restore();

        if (p.y > this.canvas.height) {
          p.y = -20;
          p.x = Math.random() * this.canvas.width;
        }
      });

      if (Date.now() - startTime < durationMs) {
        this.animId = requestAnimationFrame(render);
      } else {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        cancelAnimationFrame(this.animId);
      }
    };

    render();
  }

  // Floating Score Effect
  triggerScorePopup(targetEl, text = "+10") {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const popup = document.createElement("div");
    popup.className = "floating-score-popup";
    popup.textContent = text;
    popup.style.left = `${rect.left + rect.width / 2}px`;
    popup.style.top = `${rect.top}px`;
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 1000);
  }
}

const animator = new AnimationController();
