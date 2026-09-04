/**
 * WHO WANTS TO BE A MILLIONAIRE? — AUDIO CONTROLLER
 * High-quality procedural sound synthesizer using Web Audio API
 * 100% offline, zero external audio dependencies
 */

class SoundController {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = true;
    this.ambientOsc = null;
    this.ambientGain = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    if (!this.soundEnabled) {
      this.stopAmbient();
    }
    return this.soundEnabled;
  }

  setSound(enabled) {
    this.soundEnabled = enabled;
    if (!this.soundEnabled) {
      this.stopAmbient();
    }
  }

  // --- UI Click Sound ---
  playClick() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    const now = this.audioCtx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(850, now + 0.05);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  // --- Option Selected (Selecting A, B, C, D) ---
  playOptionSelect() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(660, now + 0.08);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.13);
  }

  // --- Question Revealed / Tension Sting ---
  playQuestionSting() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const freqs = [220, 277.18, 329.63, 440]; // A major / dramatic chord

    freqs.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);

      // Low pass filter for warm cinematic TV vibe
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(900, now);

      gain.gain.setValueAtTime(0.12, now + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + idx * 0.04);
      osc.stop(now + 0.85);
    });
  }

  // --- Lock In / Final Answer Suspense Sequence ---
  playLockIn() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    
    // Low dramatic thud
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.4);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.5);

    // Suspense pulse
    const pulseOsc = this.audioCtx.createOscillator();
    const pulseGain = this.audioCtx.createGain();
    pulseOsc.type = 'triangle';
    pulseOsc.frequency.setValueAtTime(523.25, now + 0.1); // C5
    pulseOsc.frequency.linearRampToValueAtTime(587.33, now + 0.35); // D5

    pulseGain.gain.setValueAtTime(0.18, now + 0.1);
    pulseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    pulseOsc.connect(pulseGain);
    pulseGain.connect(this.audioCtx.destination);
    pulseOsc.start(now + 0.1);
    pulseOsc.stop(now + 0.42);
  }

  // --- Correct Answer Fanfare ---
  playCorrect() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    // Bright ascending arpeggio (C5 - E5 - G5 - C6)
    const notes = [523.25, 659.25, 783.99, 1046.50];

    notes.forEach((freq, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.1);

      gain.gain.setValueAtTime(0.25, now + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.6);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + i * 0.1);
      osc.stop(now + i * 0.1 + 0.65);
    });

    // Warm shimmer bass
    const bass = this.audioCtx.createOscillator();
    const bassGain = this.audioCtx.createGain();
    bass.type = 'sine';
    bass.frequency.setValueAtTime(261.63, now);
    bassGain.gain.setValueAtTime(0.3, now);
    bassGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
    bass.connect(bassGain);
    bassGain.connect(this.audioCtx.destination);
    bass.start(now);
    bass.stop(now + 1.25);
  }

  // --- Wrong Answer Buzzer & Descending Fall (Reset to 0) ---
  playWrong() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;

    // Harsh low buzzer chord
    const freqs = [185, 175, 130];
    freqs.forEach(freq => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.linearRampToValueAtTime(freq * 0.6, now + 0.7);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.8);
    });

    // Slide down drop sound
    const slideOsc = this.audioCtx.createOscillator();
    const slideGain = this.audioCtx.createGain();
    slideOsc.type = 'sine';
    slideOsc.frequency.setValueAtTime(350, now + 0.3);
    slideOsc.frequency.exponentialRampToValueAtTime(60, now + 1.1);

    slideGain.gain.setValueAtTime(0.3, now + 0.3);
    slideGain.gain.exponentialRampToValueAtTime(0.001, now + 1.15);

    slideOsc.connect(slideGain);
    slideGain.connect(this.audioCtx.destination);
    slideOsc.start(now + 0.3);
    slideOsc.stop(now + 1.2);
  }

  // --- Ladder Climb Chime ---
  playLadderClimb() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.32);
  }

  // --- 50:50 Joker Elimination Sweep ---
  playJoker5050() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;

    // Laser swoosh
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.35);

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, now);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.4);
  }

  // --- Ask the Teacher Joker Bell ---
  playAskTeacher() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const bellTones = [659.25, 880, 1174.66]; // E5, A5, D6 gentle bell chime

    bellTones.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.12);

      gain.gain.setValueAtTime(0.25, now + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.8);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + idx * 0.12);
      osc.stop(now + idx * 0.12 + 0.85);
    });
  }

  // --- Double Answer Joker Charge ---
  playDoubleAnswer() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;

    // Futuristic charge up
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.4);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.48);
  }

  // --- Victory Fanfare for Top Score / Winner ---
  playVictory() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    // Grand celebratory fanfare: C - E - G - C - E - G (High)
    const melody = [
      { f: 523.25, t: 0.0, d: 0.18 },
      { f: 659.25, t: 0.18, d: 0.18 },
      { f: 783.99, t: 0.36, d: 0.18 },
      { f: 1046.50, t: 0.54, d: 0.4 },
      { f: 880.00, t: 0.96, d: 0.2 },
      { f: 1046.50, t: 1.18, d: 0.8 }
    ];

    melody.forEach(note => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, now + note.t);

      gain.gain.setValueAtTime(0.28, now + note.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + note.t);
      osc.stop(now + note.t + note.d + 0.05);
    });
  }

  // Stop any lingering audio
  stopAmbient() {
    // Clean up
  }
}

// Global sound manager instance
window.soundController = new SoundController();
