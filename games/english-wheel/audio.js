/**
 * ENGLISH WHEEL - Audio Engine
 * Uses Web Audio API for rich, responsive, and reliable game-show sound effects.
 */

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = true;
    this.initAudioContext();
  }

  initAudioContext() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn("Web Audio API not supported:", e);
    }
  }

  ensureContext() {
    if (!this.audioCtx) {
      this.initAudioContext();
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  toggleSound(forceState = null) {
    if (forceState !== null) {
      this.soundEnabled = forceState;
    } else {
      this.soundEnabled = !this.soundEnabled;
    }
    return this.soundEnabled;
  }

  // Mechanical click when wheel passes a peg
  playWheelTick(pitchMultiplier = 1.0) {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(480 * pitchMultiplier, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.035);

    filter.type = "highpass";
    filter.frequency.setValueAtTime(300, now);

    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  // Wheel stops on a wedge
  playWheelLand() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.04);
      gain.gain.setValueAtTime(0.2, now + i * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.04 + 0.25);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now + i * 0.04);
      osc.stop(now + i * 0.04 + 0.28);
    });
  }

  // Correct letter guessed
  playCorrectLetter(multiplier = 1) {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.audioCtx) return;

    const baseNotes = [587.33, 880.00, 1174.66]; // D5, A5, D6
    const now = this.audioCtx.currentTime;

    baseNotes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq * (1 + (multiplier - 1) * 0.1), now + idx * 0.07);

      gain.gain.setValueAtTime(0.25, now + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.3);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.32);
    });
  }

  // Wrong letter / No match
  playWrongLetter() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.35);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.38);
  }

  // Bankrupt siren/fall
  playBankrupt() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.linearRampToValueAtTime(110, now + 0.6);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.7);
  }

  // Pass Turn
  playPass() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.3);

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.38);
  }

  // Vowel purchase ding
  playVowelBuy() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    [1046.50, 1318.51, 1567.98].forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0.2, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.25);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.28);
    });
  }

  // Double wedge or bonus active
  playBonus() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.audioCtx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    const now = this.audioCtx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);

      gain.gain.setValueAtTime(0.25, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.35);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.38);
    });
  }

  // Solve fanfare
  playPuzzleSolved() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.audioCtx) return;

    const chords = [
      { notes: [523.25, 659.25, 783.99], time: 0.0, dur: 0.25 }, // C
      { notes: [587.33, 739.99, 880.00], time: 0.22, dur: 0.25 }, // D
      { notes: [659.25, 830.61, 987.77], time: 0.44, dur: 0.3 }, // E
      { notes: [1046.50, 1318.51, 1567.98, 2093.00], time: 0.72, dur: 0.8 } // High C major
    ];

    const now = this.audioCtx.currentTime;

    chords.forEach(chord => {
      chord.notes.forEach(freq => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + chord.time);

        gain.gain.setValueAtTime(0.22, now + chord.time);
        gain.gain.exponentialRampToValueAtTime(0.001, now + chord.time + chord.dur);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + chord.time);
        osc.stop(now + chord.time + chord.dur + 0.05);
      });
    });
  }

  // Countdown tick
  playTimerTick(isUrgent = false) {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(isUrgent ? 880 : 660, now);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  // Button click
  playBtnClick() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.05);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.06);
  }
}

window.soundEngine = new SoundEngine();
