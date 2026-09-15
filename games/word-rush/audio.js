/**
 * WORD RUSH — Web Audio Sound Effects Synthesizer
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

  // Click UI button sound
  playClick() {
    if (!this.enabled) return;
    this.playTone(600, 'sine', 0.05, 0.12);
  }

  // Correct word selection chime (crisp, pleasant, energetic rising note)
  playCorrect() {
    if (!this.enabled) return;
    this.playTone(587.33, 'triangle', 0.10, 0.22, 0.00); // D5
    this.playTone(880.00, 'sine', 0.15, 0.25, 0.05);     // A5
    this.playTone(1174.66, 'triangle', 0.18, 0.28, 0.10); // D6
  }

  // Wrong selection buzz (short, polite non-jarring low buzz)
  playWrong() {
    if (!this.enabled) return;
    this.playTone(220.00, 'sawtooth', 0.14, 0.16, 0.00); // A3
    this.playTone(196.00, 'sawtooth', 0.18, 0.16, 0.05); // G3
  }

  // Round completed fanfare (when the team finds the last target word)
  playRoundComplete() {
    if (!this.enabled) return;
    const notes = [
      { f: 523.25, d: 0.12, t: 0.00 }, // C5
      { f: 659.25, d: 0.12, t: 0.08 }, // E5
      { f: 783.99, d: 0.14, t: 0.16 }, // G5
      { f: 1046.50, d: 0.35, t: 0.24 }, // C6
      { f: 1318.51, d: 0.45, t: 0.36 }  // E6
    ];
    notes.forEach(n => {
      this.playTone(n.f, 'triangle', n.d, 0.25, n.t);
    });
  }

  // Match victory fanfare
  playVictory() {
    if (!this.enabled) return;
    const melody = [
      { f: 523.25, d: 0.12, t: 0.00 },
      { f: 523.25, d: 0.12, t: 0.12 },
      { f: 523.25, d: 0.12, t: 0.24 },
      { f: 659.25, d: 0.30, t: 0.36 },
      { f: 783.99, d: 0.20, t: 0.65 },
      { f: 1046.50, d: 0.50, t: 0.85 },
      { f: 1318.51, d: 0.70, t: 1.15 }
    ];
    melody.forEach(n => {
      this.playTone(n.f, 'triangle', n.d, 0.26, n.t);
    });
  }

  // Countdown / Go beep
  playReadyBeep(isHigh = false) {
    if (!this.enabled) return;
    if (isHigh) {
      this.playTone(1046.50, 'sine', 0.25, 0.28);
    } else {
      this.playTone(523.25, 'sine', 0.15, 0.20);
    }
  }
}

if (typeof window !== 'undefined') {
  window.SoundController = SoundController;
  window.soundCtrl = new SoundController();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SoundController;
}
