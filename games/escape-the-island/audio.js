/**
 * ESCAPE THE ISLAND - Web Audio API Sound Synthesizer
 * Zero-dependency, pure procedural procedural audio engine for classroom engagement.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.ambientPlaying = false;
    this.ambientNodes = [];
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
    } else {
      this.stopAmbient();
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
        this.playBeep(freq, 0.22, 'triangle', 0.2);
      }, idx * 65);
    });
  }

  // 🔊 SHORT ERROR SOUND (Low buzzer)
  playWrong() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(110, this.ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch (e) {
      console.warn('Audio error', e);
    }
  }

  // 💔 HEART LOST SOUND
  playHeartLost() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [330, 247, 196];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.18, 'sine', 0.18);
      }, idx * 90);
    });
  }

  // 🎒 ITEM UNLOCK FANFARE
  playItemUnlock() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [440, 554.37, 659.25, 880, 1108.73];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.35, 'triangle', 0.22);
      }, idx * 80);
    });
  }

  // 🚶 FOOTSTEPS / MAP WALK SOUND
  playWalk() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const steps = 4;
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        this.playBeep(180 + (i % 2) * 40, 0.08, 'triangle', 0.12);
      }, i * 140);
    }
  }

  // 📻 RADIO STATIC & BEEP
  playRadioTransmission() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    // Beeps
    const beeps = [880, 880, 880, 700, 880, 700];
    beeps.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.1, 'sine', 0.15);
      }, idx * 120);
    });
  }

  // 🚁 HELICOPTER ROTOR SYNTH
  playHelicopter() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const rotorBeats = 16;
    for (let i = 0; i < rotorBeats; i++) {
      setTimeout(() => {
        this.playBeep(75, 0.06, 'sawtooth', 0.15);
      }, i * 110);
    }
  }

  // 🛥️ BOAT MOTOR ENGINE
  playBoatEngine() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const beats = 12;
    for (let i = 0; i < beats; i++) {
      setTimeout(() => {
        this.playBeep(90 + (i % 3) * 10, 0.09, 'sawtooth', 0.1);
      }, i * 130);
    }
  }

  // 🌊 PROCEDURAL OCEAN WAVES (Ambient sound)
  playOceanWaves() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      // Create gentle wave swell with filtered white noise or sine oscillation
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(65, this.ctx.currentTime);
      osc1.frequency.linearRampToValueAtTime(95, this.ctx.currentTime + 1.5);
      osc1.frequency.linearRampToValueAtTime(55, this.ctx.currentTime + 3.0);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(110, this.ctx.currentTime);
      osc2.frequency.linearRampToValueAtTime(140, this.ctx.currentTime + 1.5);
      osc2.frequency.linearRampToValueAtTime(100, this.ctx.currentTime + 3.0);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 1.5);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 3.0);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(this.ctx.currentTime + 3.0);
      osc2.stop(this.ctx.currentTime + 3.0);
    } catch (e) {
      console.warn('Waves error', e);
    }
  }

  stopAmbient() {
    this.ambientNodes.forEach(node => {
      try { node.stop(); } catch(e){}
    });
    this.ambientNodes = [];
    this.ambientPlaying = false;
  }

  // 🏆 VICTORY ESCAPE FANFARE
  playVictory() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const melody = [
      { f: 523.25, d: 0.2 }, // C5
      { f: 659.25, d: 0.2 }, // E5
      { f: 783.99, d: 0.2 }, // G5
      { f: 1046.50, d: 0.4 }, // C6
      { f: 880.00, d: 0.2 }, // A5
      { f: 1046.50, d: 0.6 }  // C6 long
    ];

    let delay = 0;
    melody.forEach(note => {
      setTimeout(() => {
        this.playBeep(note.f, note.d, 'triangle', 0.25);
      }, delay);
      delay += note.d * 1000 + 40;
    });
  }

  playChoice() {
    this.playBeep(600, 0.05, 'sine', 0.08);
  }

  playClick() {
    this.playBeep(450, 0.04, 'sine', 0.06);
  }
}

// Global sound singleton
const audio = new SoundEngine();
