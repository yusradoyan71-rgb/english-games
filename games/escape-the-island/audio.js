/**
 * ESCAPE THE ISLAND - Web Audio API Sound Synthesizer
 * Zero-dependency, pure procedural audio engine for classroom engagement.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.initFromStorage();
  }

  initFromStorage() {
    try {
      const saved = localStorage.getItem('island_sound_enabled');
      if (saved !== null) {
        this.enabled = saved === 'true';
      }
    } catch (e) {
      this.enabled = true;
    }
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem('island_sound_enabled', this.enabled.toString());
    } catch (e) {}
    if (this.enabled) {
      this.playBeep(523.25, 0.1, 'sine');
    }
    return this.enabled;
  }

  isSoundEnabled() {
    return this.enabled;
  }

  // Basic synthesized tone generator
  playBeep(freq = 440, duration = 0.15, type = 'sine', gainVal = 0.15) {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  // 🎵 SUCCESS CHIME (Bright Major Arpeggio: C5 -> E5 -> G5 -> C6)
  playCorrect() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.25, 'triangle', 0.2);
      }, idx * 75);
    });
  }

  // 🔊 SHORT ERROR SOUND (Low subtle buzzer)
  playWrong() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(90, this.ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch (e) {}
  }

  // ✨ ITEM DISCOVERED (Sparkling shimmer fanfare)
  playItemFound() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const freqs = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
    freqs.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.3, 'sine', 0.18);
      }, idx * 60);
    });
  }

  // 🔀 CHOICE TRANSITION CLICK (Wood block / tactile click)
  playChoice() {
    if (!this.enabled) return;
    this.playBeep(440, 0.08, 'sine', 0.12);
    setTimeout(() => {
      this.playBeep(660, 0.08, 'triangle', 0.12);
    }, 60);
  }

  // ⚠️ DRAMATIC EVENT PULSE (Low ominous brass / alert)
  playEventAlert() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc2.type = 'sine';
      osc.frequency.setValueAtTime(110, this.ctx.currentTime);
      osc2.frequency.setValueAtTime(116, this.ctx.currentTime); // Beat frequency

      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);

      osc.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc2.start();
      osc.stop(this.ctx.currentTime + 0.8);
      osc2.stop(this.ctx.currentTime + 0.8);
    } catch (e) {}
  }

  // ❤️ HEART LOST / GAIN
  playHeartChange(isGain = true) {
    if (!this.enabled) return;
    if (isGain) {
      this.playBeep(440, 0.15, 'sine', 0.15);
      setTimeout(() => this.playBeep(880, 0.25, 'sine', 0.18), 120);
    } else {
      this.playBeep(330, 0.15, 'square', 0.15);
      setTimeout(() => this.playBeep(220, 0.3, 'sawtooth', 0.18), 120);
    }
  }

  // 🎉 VICTORY ESCAPE FANFARE
  playVictory() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const melody = [
      { f: 523.25, d: 150 }, // C5
      { f: 523.25, d: 150 }, // C5
      { f: 523.25, d: 150 }, // C5
      { f: 659.25, d: 400 }, // E5
      { f: 587.33, d: 150 }, // D5
      { f: 659.25, d: 150 }, // E5
      { f: 783.99, d: 600 }, // G5
      { f: 1046.50, d: 800 } // C6
    ];

    let delay = 0;
    melody.forEach((note) => {
      setTimeout(() => {
        this.playBeep(note.f, note.d / 1000 + 0.1, 'triangle', 0.25);
      }, delay);
      delay += note.d + 30;
    });
  }
}

// Global instance
const audio = new SoundEngine();
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SoundEngine, audio };
}
