/**
 * ENGLISH WHEEL - Canvas-based High-Precision Spinning Wheel
 * Provides smooth 60fps rotational physics, pointer wobble, peg click sounds, and clear wedge resolution.
 */

class GameWheel {
  constructor(canvasId, onSpinComplete) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.onSpinComplete = onSpinComplete;

    this.wedges = [
      { type: "points", value: 500, label: "500", bg: "#10b981", text: "#ffffff" },
      { type: "points", value: 200, label: "200", bg: "#3b82f6", text: "#ffffff" },
      { type: "pass", value: 0, label: "PASS", bg: "#475569", text: "#f8fafc" },
      { type: "points", value: 400, label: "400", bg: "#f59e0b", text: "#1e293b" },
      { type: "points", value: 1000, label: "1000", bg: "#ef4444", text: "#ffffff" },
      { type: "points", value: 300, label: "300", bg: "#06b6d4", text: "#ffffff" },
      { type: "bankrupt", value: 0, label: "BANKRUPT", bg: "#0f172a", text: "#f43f5e" },
      { type: "points", value: 600, label: "600", bg: "#8b5cf6", text: "#ffffff" },
      { type: "points", value: 100, label: "100", bg: "#14b8a6", text: "#ffffff" },
      { type: "bonus", value: 500, label: "BONUS", bg: "#ec4899", text: "#ffffff" },
      { type: "points", value: 500, label: "500", bg: "#10b981", text: "#ffffff" },
      { type: "points", value: 750, label: "750", bg: "#f97316", text: "#ffffff" },
      { type: "double", value: 2, label: "DOUBLE", bg: "#eab308", text: "#1e293b" },
      { type: "points", value: 200, label: "200", bg: "#3b82f6", text: "#ffffff" },
      { type: "points", value: 400, label: "400", bg: "#f59e0b", text: "#1e293b" },
      { type: "points", value: 300, label: "300", bg: "#06b6d4", text: "#ffffff" }
    ];

    this.numWedges = this.wedges.length;
    this.arc = (2 * Math.PI) / this.numWedges;
    this.currentRotation = 0; // in radians
    this.isSpinning = false;
    this.pointerAngle = 0; // wobble angle of pointer

    this.lastPegIndex = -1;

    this.setupHiDPI();
    this.draw();

    window.addEventListener("resize", () => {
      this.setupHiDPI();
      this.draw();
    });
  }

  setupHiDPI() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const size = Math.min(rect.width || 380, rect.height || 380);

    this.canvas.width = size * dpr;
    this.canvas.height = size * dpr;
    this.ctx.scale(dpr, dpr);
    this.displaySize = size;
  }

  draw() {
    const size = this.displaySize;
    const center = size / 2;
    const radius = center - 12;

    this.ctx.clearRect(0, 0, size, size);

    this.ctx.save();
    this.ctx.translate(center, center);
    this.ctx.rotate(this.currentRotation);

    // Outer rim shadow and gradient
    this.ctx.beginPath();
    this.ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = "#1e293b";
    this.ctx.fill();

    // Draw wedges
    for (let i = 0; i < this.numWedges; i++) {
      const angle = i * this.arc;
      const wedge = this.wedges[i];

      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.arc(0, 0, radius - 6, angle, angle + this.arc);
      this.ctx.closePath();

      // Base fill
      this.ctx.fillStyle = wedge.bg;
      this.ctx.fill();

      // Border between wedges
      this.ctx.strokeStyle = "#ffffff25";
      this.ctx.lineWidth = 2;
      this.ctx.stroke();

      // Draw text
      this.ctx.save();
      this.ctx.rotate(angle + this.arc / 2);
      this.ctx.textAlign = "right";
      this.ctx.textBaseline = "middle";

      if (wedge.type === "bankrupt") {
        this.ctx.fillStyle = "#f43f5e";
        this.ctx.font = `bold ${Math.max(12, Math.floor(size * 0.038))}px 'Plus Jakarta Sans', sans-serif`;
        this.ctx.shadowColor = "#f43f5e88";
        this.ctx.shadowBlur = 6;
      } else if (wedge.type === "double" || wedge.type === "bonus") {
        this.ctx.fillStyle = wedge.text;
        this.ctx.font = `800 ${Math.max(13, Math.floor(size * 0.04))}px 'Plus Jakarta Sans', sans-serif`;
        this.ctx.shadowColor = "#ffffffaa";
        this.ctx.shadowBlur = 4;
      } else {
        this.ctx.fillStyle = wedge.text;
        this.ctx.font = `700 ${Math.max(14, Math.floor(size * 0.045))}px 'Plus Jakarta Sans', sans-serif`;
        this.ctx.shadowColor = "transparent";
      }

      this.ctx.fillText(wedge.label, radius - 20, 0);
      this.ctx.restore();
    }

    // Outer rim & pegs
    this.ctx.beginPath();
    this.ctx.arc(0, 0, radius - 2, 0, 2 * Math.PI);
    this.ctx.strokeStyle = "#fbbf24";
    this.ctx.lineWidth = 5;
    this.ctx.stroke();

    for (let i = 0; i < this.numWedges; i++) {
      const angle = i * this.arc;
      const px = Math.cos(angle) * (radius - 5);
      const py = Math.sin(angle) * (radius - 5);

      this.ctx.beginPath();
      this.ctx.arc(px, py, 4, 0, 2 * Math.PI);
      this.ctx.fillStyle = "#fffbeb";
      this.ctx.shadowColor = "#f59e0b";
      this.ctx.shadowBlur = 4;
      this.ctx.fill();
    }

    // Center hub
    this.ctx.beginPath();
    this.ctx.arc(0, 0, radius * 0.26, 0, 2 * Math.PI);
    const hubGrad = this.ctx.createRadialGradient(0, 0, 5, 0, 0, radius * 0.26);
    hubGrad.addColorStop(0, "#38bdf8");
    hubGrad.addColorStop(0.5, "#0284c7");
    hubGrad.addColorStop(1, "#0369a1");
    this.ctx.fillStyle = hubGrad;
    this.ctx.shadowColor = "#00000088";
    this.ctx.shadowBlur = 10;
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(0, 0, radius * 0.26, 0, 2 * Math.PI);
    this.ctx.strokeStyle = "#e0f2fe";
    this.ctx.lineWidth = 3;
    this.ctx.stroke();

    // Center star / icon
    this.ctx.fillStyle = "#ffffff";
    this.ctx.font = `bold ${Math.max(14, Math.floor(size * 0.055))}px 'Plus Jakarta Sans', sans-serif`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.shadowColor = "#ffffff";
    this.ctx.shadowBlur = 4;
    this.ctx.fillText("🎡", 0, 0);

    this.ctx.restore();

    // Draw Top Pointer (Fixed at top pointing down into wheel)
    this.drawPointer(center, 4, this.pointerAngle);
  }

  drawPointer(x, y, wobble) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(wobble);

    // Pointer shadow
    this.ctx.shadowColor = "rgba(0,0,0,0.6)";
    this.ctx.shadowBlur = 8;
    this.ctx.shadowOffsetY = 3;

    // Outer needle
    this.ctx.beginPath();
    this.ctx.moveTo(-14, 0);
    this.ctx.lineTo(14, 0);
    this.ctx.lineTo(0, 32);
    this.ctx.closePath();
    this.ctx.fillStyle = "#ef4444";
    this.ctx.fill();

    // Inner highlight
    this.ctx.beginPath();
    this.ctx.moveTo(-7, 2);
    this.ctx.lineTo(7, 2);
    this.ctx.lineTo(0, 26);
    this.ctx.closePath();
    this.ctx.fillStyle = "#f87171";
    this.ctx.fill();

    // Pointer mounting jewel
    this.ctx.beginPath();
    this.ctx.arc(0, 2, 7, 0, 2 * Math.PI);
    this.ctx.fillStyle = "#fbbf24";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(0, 2, 4, 0, 2 * Math.PI);
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fill();

    this.ctx.restore();
  }

  spin() {
    if (this.isSpinning) return null;
    this.isSpinning = true;

    return new Promise((resolve) => {
      // Pick random wedge
      const winningIndex = Math.floor(Math.random() * this.numWedges);
      
      // Calculate target angle so pointer at top (3*PI/2) points at center of winning wedge
      // In canvas coord, top pointer is at angle -PI/2 or 3*PI/2 (270 deg)
      const wedgeCenterAngle = (winningIndex + 0.5) * this.arc;
      const pointerTargetAngle = (3 * Math.PI) / 2; // 270 deg

      // To align winning wedge with pointer: (currentRotation + wedgeCenterAngle) % (2*PI) = pointerTargetAngle
      let targetWedgeRotation = pointerTargetAngle - wedgeCenterAngle;
      while (targetWedgeRotation < 0) targetWedgeRotation += 2 * Math.PI;

      // Add 4 to 7 full rotations for excitement
      const fullSpins = (4 + Math.floor(Math.random() * 3)) * 2 * Math.PI;
      const startRotation = this.currentRotation % (2 * Math.PI);
      const totalDelta = fullSpins + (targetWedgeRotation - startRotation);
      const finalTarget = this.currentRotation + totalDelta;

      const duration = 4000 + Math.random() * 600; // ~4.2 - 4.6 seconds
      const startTime = performance.now();

      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Quintic / cubic ease-out deceleration
        const easeOut = 1 - Math.pow(1 - progress, 4);
        this.currentRotation = startRotation + totalDelta * easeOut;

        // Calculate peg passing for audio ticks and pointer wobble
        // Pointer is at 270 deg. Wheel relative angle = (3*PI/2 - this.currentRotation) % (2*PI)
        let relAngle = ((3 * Math.PI / 2) - this.currentRotation) % (2 * Math.PI);
        if (relAngle < 0) relAngle += 2 * Math.PI;

        const currentPeg = Math.floor(relAngle / this.arc);
        if (currentPeg !== this.lastPegIndex) {
          this.lastPegIndex = currentPeg;
          if (window.soundEngine) {
            const speedFactor = 1 - progress;
            window.soundEngine.playWheelTick(0.8 + speedFactor * 0.6);
          }
          this.pointerAngle = (Math.random() * 0.15 - 0.075) * (1 - progress);
        } else {
          this.pointerAngle *= 0.9;
        }

        this.draw();

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          this.isSpinning = false;
          this.pointerAngle = 0;
          this.draw();

          const result = this.wedges[winningIndex];
          if (window.soundEngine) {
            window.soundEngine.playWheelLand();
          }

          if (this.onSpinComplete) {
            this.onSpinComplete(result);
          }
          resolve(result);
        }
      };

      requestAnimationFrame(animate);
    });
  }
}

window.GameWheel = GameWheel;
