/**
 * SPIN & CHOOSE 🎡 — Procedural Web Audio Engine
 * STRICTLY NO HUMAN VOICE / NO SPEECH SYNTHESIS
 * 100% Procedural child-friendly sound effects (Ticks, Chimes, Dings, Whooshes, Pops)
 */

class GameAudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  initAudioContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // --- 1. WHEEL SPINS SOUND (Whoosh / Spin start) ---
  playSpinStart() {
    if (this.muted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(750, t + 0.35);

    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.35, t + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.45);

    this.playNote(523.25, 0.05, 0.2, 'sine', 0.15); // C5
    this.playNote(659.25, 0.12, 0.2, 'sine', 0.15); // E5
    this.playNote(783.99, 0.20, 0.25, 'sine', 0.2); // G5
  }

  // --- 2. WHEEL TICKING (Click per segment boundary) ---
  playTick() {
    if (this.muted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(680 + Math.random() * 60, t);
    osc.frequency.exponentialRampToValueAtTime(160, t + 0.035);

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.035);
  }

  // --- 3. WHEEL STOP CHIME / TA-DA ("The wheel has chosen!") ---
  playWheelStop() {
    if (this.muted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    // Satisfying "Ta-da!" bell arpeggio (C5 -> E5 -> G5 -> C6)
    const notes = [
      { f: 523.25, d: 0.15, del: 0 },
      { f: 659.25, d: 0.15, del: 0.1 },
      { f: 783.99, d: 0.18, del: 0.2 },
      { f: 1046.50, d: 0.65, del: 0.32 }
    ];

    notes.forEach(n => {
      this.playNote(n.f, n.del, n.d, 'triangle', 0.35);
      this.playNote(n.f * 1.002, n.del, n.d, 'sine', 0.25);
    });
  }

  // --- 4. BUTTON CLICK (SPIN, SPIN AGAIN, Cards, Speaker) ---
  playButtonClick() {
    if (this.muted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, t);
    osc.frequency.exponentialRampToValueAtTime(900, t + 0.06);

    gain.gain.setValueAtTime(0.28, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.07);
  }

  // --- 5. POSITIVE REWARD SOUND (Bright Ding! + Sparkle Chime on Option Choice) ---
  playRewardSound() {
    if (this.muted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    // Bright joyful sparkle cascade
    const chord = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    chord.forEach((freq, idx) => {
      const delay = idx * 0.06;
      this.playNote(freq, delay, 0.45, 'sine', 0.3);
      this.playNote(freq * 2, delay + 0.015, 0.25, 'triangle', 0.15);
    });
  }

  // --- 6. GRAND END-OF-ROUND CELEBRATION FANFARE ---
  playVictoryCelebration() {
    if (this.muted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const fanfare = [
      { f: 523.25, d: 0.18, del: 0 },    // C5
      { f: 523.25, d: 0.18, del: 0.18 }, // C5
      { f: 523.25, d: 0.18, del: 0.36 }, // C5
      { f: 659.25, d: 0.35, del: 0.54 }, // E5
      { f: 783.99, d: 0.22, del: 0.90 }, // G5
      { f: 659.25, d: 0.22, del: 1.12 }, // E5
      { f: 1046.50, d: 0.9, del: 1.34 }  // C6 Grand Finale
    ];

    fanfare.forEach(n => {
      this.playNote(n.f, n.del, n.d, 'triangle', 0.4);
      this.playNote(n.f * 1.002, n.del, n.d, 'sine', 0.3);
      this.playNote(n.f * 0.5, n.del, n.d, 'triangle', 0.2);
    });
  }

  playNote(frequency, delay, duration, type = 'sine', volume = 0.25) {
    if (this.muted || !this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, t);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(volume, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + duration);
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }
}

window.gameAudio = new GameAudioEngine();
