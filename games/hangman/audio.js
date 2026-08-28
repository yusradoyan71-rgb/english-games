/**
 * HANGMAN - Web Audio API Sound Engine
 * Clean, modern sound design with no scary noises.
 */

class SoundEngine {
  constructor() {
    this.enabled = true;
    this.ctx = null;
    this.initContext = this.initContext.bind(this);

    // Initialize audio context on first user interaction
    ['click', 'keydown', 'touchstart'].forEach(event => {
      window.addEventListener(event, this.initContext, { once: true });
    });
  }

  initContext() {
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
    if (this.enabled) {
      this.initContext();
      this.playCorrect();
    }
    return this.enabled;
  }

  setSound(state) {
    this.enabled = !!state;
    if (this.enabled) this.initContext();
  }

  // Helper to create oscillators with envelope
  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.2, detune = 0) {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.detune.setValueAtTime(detune, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(gainVal, this.ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playKeyPress() {
    if (!this.enabled) return;
    this.playTone(520, 'triangle', 0.05, 0.1);
  }

  playCorrect() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5

    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);

      gain.gain.setValueAtTime(0.001, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.18, now + i * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.25);
    });
  }

  playIncorrect() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Gentle low double pulse (friendly, non-frightening)
    [260, 220].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + i * 0.1);

      gain.gain.setValueAtTime(0.001, now + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.12, now + i * 0.1 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.1 + 0.16);

      // Low pass filter for warm, non-harsh tone
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 800;

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.1);
      osc.stop(now + i * 0.1 + 0.18);
    });
  }

  playWordComplete() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.001, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.22, now + idx * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.5);
    });
  }

  playStreak(streakCount = 3) {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const baseFreq = 440 + Math.min(streakCount * 50, 400);
    const now = this.ctx.currentTime;

    [baseFreq, baseFreq * 1.25, baseFreq * 1.5].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.07);

      gain.gain.setValueAtTime(0.001, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.2, now + i * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.07 + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.35);
    });
  }

  playLevelComplete() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const chords = [
      [523.25, 659.25, 783.99], // C major
      [587.33, 739.99, 880.00], // D major
      [659.25, 830.61, 987.77], // E major
      [783.99, 987.77, 1174.66, 1567.98] // G major triumphant
    ];

    let timeOffset = this.ctx.currentTime;
    chords.forEach((chord, chordIdx) => {
      const chordTime = timeOffset + chordIdx * 0.16;
      chord.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, chordTime);

        gain.gain.setValueAtTime(0.001, chordTime);
        gain.gain.exponentialRampToValueAtTime(0.18, chordTime + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, chordTime + (chordIdx === 3 ? 0.8 : 0.28));

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(chordTime);
        osc.stop(chordTime + (chordIdx === 3 ? 0.85 : 0.3));
      });
    });
  }

  playHint() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    [880, 1174.66, 1318.51, 1760].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0.001, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.15, now + idx * 0.05 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.3);
    });
  }

  playGameOver() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Friendly, encouraging descending sequence
    const notes = [587.33, 523.25, 440, 392]; // D5, C5, A4, G4

    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.18);

      gain.gain.setValueAtTime(0.001, now + i * 0.18);
      gain.gain.exponentialRampToValueAtTime(0.12, now + i * 0.18 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.18 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.18);
      osc.stop(now + i * 0.18 + 0.4);
    });
  }

  playTimerTick() {
    if (!this.enabled) return;
    this.playTone(800, 'sine', 0.04, 0.08);
  }
}

const audioEngine = new SoundEngine();
