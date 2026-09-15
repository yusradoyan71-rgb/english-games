/**
 * SAYI AVI (Number Hunt) — Web Audio Sound Effects Synthesizer
 * Zero external dependencies: works completely offline and instantly in any browser.
 */

class SoundController {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.25, startDelay = 0) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime + startDelay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    } catch (e) {
      // AudioContext error suppression
    }
  }

  // Correct answer chime (bright upward chord)
  playCorrect() {
    if (!this.enabled) return;
    this.playTone(523.25, 'triangle', 0.12, 0.2, 0.00); // C5
    this.playTone(659.25, 'triangle', 0.14, 0.22, 0.06); // E5
    this.playTone(783.99, 'triangle', 0.18, 0.25, 0.12); // G5
    this.playTone(1046.50, 'sine', 0.25, 0.28, 0.18);   // C6
  }

  // Wrong answer buzz (low minor discord)
  playWrong() {
    if (!this.enabled) return;
    this.playTone(220.00, 'sawtooth', 0.20, 0.18, 0.00); // A3
    this.playTone(207.65, 'sawtooth', 0.25, 0.18, 0.06); // G#3
  }

  // Bonus fanfare when all correct cards are swept
  playBonus() {
    if (!this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.22, 0.2, idx * 0.07);
    });
  }

  // Timer soft tick
  playTick() {
    if (!this.enabled) return;
    this.playTone(880, 'sine', 0.04, 0.05);
  }

  // Urgent timer tick (<10s)
  playUrgentTick() {
    if (!this.enabled) return;
    this.playTone(1200, 'square', 0.06, 0.12);
  }

  // Time's up buzzer
  playTimeUp() {
    if (!this.enabled) return;
    this.playTone(330, 'sawtooth', 0.35, 0.25, 0.00);
    this.playTone(261.63, 'sawtooth', 0.45, 0.25, 0.18);
    this.playTone(196.00, 'sawtooth', 0.60, 0.30, 0.38);
  }

  // Game Victory Fanfare
  playVictory() {
    if (!this.enabled) return;
    const melody = [
      { f: 523.25, d: 0.15, t: 0.00 },
      { f: 523.25, d: 0.15, t: 0.15 },
      { f: 523.25, d: 0.15, t: 0.30 },
      { f: 659.25, d: 0.35, t: 0.45 },
      { f: 783.99, d: 0.20, t: 0.80 },
      { f: 1046.50, d: 0.60, t: 1.00 }
    ];
    melody.forEach(n => {
      this.playTone(n.f, 'triangle', n.d, 0.25, n.t);
    });
  }
}

if (typeof window !== 'undefined') {
  window.SoundController = SoundController;
  window.soundCtrl = new SoundController();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SoundController;
}
