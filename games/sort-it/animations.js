/**
 * SORT IT! — Visual FX & Animation Engine
 */

export class FXEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas ? canvas.getContext("2d") : null;
    this.particles = [];
    this.isRunning = false;
    this.resize();

    window.addEventListener("resize", () => this.resize());
    this.startLoop();
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  startLoop() {
    if (this.isRunning) return;
    this.isRunning = true;

    const animate = () => {
      if (!this.isRunning) return;
      this.update();
      this.draw();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity || 0;
      p.rotation += p.vRot || 0;
      p.life -= p.decay;

      if (p.life <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
      }
    }
  }

  draw() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const p of this.particles) {
      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.life);
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);

      if (p.type === "star") {
        this.drawStar(this.ctx, 0, 0, 5, p.size, p.size / 2, p.color);
      } else if (p.type === "spark") {
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (p.type === "confetti") {
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else if (p.type === "ring") {
        this.ctx.strokeStyle = p.color;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, (1 - p.life) * p.maxRadius, 0, Math.PI * 2);
        this.ctx.stroke();
      }

      this.ctx.restore();
    }
  }

  drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, color) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  burstCorrect(x, y, color = "#00CEC9") {
    const colors = [color, "#FFD93D", "#FFFFFF", "#6C5CE7", "#55EFC4"];
    for (let i = 0; i < 24; i++) {
      const angle = (Math.PI * 2 * i) / 24 + (Math.random() - 0.5);
      const speed = 4 + Math.random() * 8;
      this.particles.push({
        type: Math.random() > 0.4 ? "star" : "spark",
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 0.15,
        size: 4 + Math.random() * 6,
        rotation: Math.random() * Math.PI,
        vRot: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: 0.02 + Math.random() * 0.02
      });
    }

    this.particles.push({
      type: "ring",
      x,
      y,
      vx: 0,
      vy: 0,
      maxRadius: 70,
      color: color,
      life: 1,
      decay: 0.04
    });
  }

  burstCombo(x, y, comboCount) {
    const colors = ["#FF7675", "#FDCB6E", "#FF4757", "#FFA502", "#FFFFFF"];
    const count = Math.min(15 + comboCount * 4, 40);
    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.8;
      const speed = 6 + Math.random() * 10;
      this.particles.push({
        type: "spark",
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 0.2,
        size: 3 + Math.random() * 5,
        rotation: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: 0.025 + Math.random() * 0.02
      });
    }
  }

  triggerConfetti() {
    const colors = ["#6C5CE7", "#00CEC9", "#FF7675", "#FDCB6E", "#E84393", "#55EFC4", "#0984E3"];
    for (let i = 0; i < 90; i++) {
      this.particles.push({
        type: "confetti",
        x: Math.random() * this.canvas.width,
        y: -20 - Math.random() * 100,
        vx: (Math.random() - 0.5) * 6,
        vy: 3 + Math.random() * 6,
        gravity: 0.05,
        size: 8 + Math.random() * 8,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: 0.007 + Math.random() * 0.005
      });
    }
  }

  spawnFloatingText(text, x, y, color = "#55EFC4", isLarge = false) {
    const el = document.createElement("div");
    el.className = `floating-toast ${isLarge ? "toast-large" : ""}`;
    el.textContent = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.color = color;
    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 1000);
  }
}
