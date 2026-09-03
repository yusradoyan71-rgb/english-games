/**
 * DEAL OR NO DEAL – SPEAKING SHOWDOWN
 * Standalone Procedural Web Audio API Sound Engine
 * Zero external dependencies. High fidelity classroom game show audio.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.volume = 0.7;
    this.isMuted = false;
    this.phoneOscillators = [];
    this.suspenseDrone = null;
  }

  init() {
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

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopTelephone();
      this.stopSuspenseDrone();
    }
    return this.isMuted;
  }

  getMasterGain() {
    if (!this.ctx || this.isMuted) return null;
    const gain = this.ctx.createGain();
    gain.gain.value = this.volume;
    gain.connect(this.ctx.destination);
    return gain;
  }

  // --- UI Sounds ---

  playClick() {
    this.init();
    const master = this.getMasterGain();
    if (!master) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(master);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }

  playBoxSelect() {
    this.init();
    const master = this.getMasterGain();
    if (!master) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, this.ctx.currentTime + 0.12); // E5

    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

    osc.connect(gain);
    gain.connect(master);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  // --- Suspense Countdown & Box Shaking ---

  playCountdownTick(step) {
    this.init();
    const master = this.getMasterGain();
    if (!master) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Pitch increases with 3 (low), 2 (mid), 1 (high)
    const baseFreq = step === 1 ? 880 : (step === 2 ? 660 : 440);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(master);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.22);
  }

  startSuspenseDrone() {
    this.init();
    if (this.isMuted || !this.ctx) return;
    this.stopSuspenseDrone();

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(65.41, this.ctx.currentTime); // C2
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(98.0, this.ctx.currentTime); // G2

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(250, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.25 * this.volume, this.ctx.currentTime + 1.0);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start();
    osc2.start();

    this.suspenseDrone = { osc1, osc2, gain };
  }

  stopSuspenseDrone() {
    if (this.suspenseDrone && this.ctx) {
      try {
        this.suspenseDrone.gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
        const { osc1, osc2 } = this.suspenseDrone;
        setTimeout(() => {
          try {
            osc1.stop();
            osc2.stop();
          } catch(e) {}
        }, 350);
      } catch (e) {}
      this.suspenseDrone = null;
    }
  }

  // --- Box Reveal Sounds (Low, High, Jackpot) ---

  playReveal(value) {
    this.init();
    this.stopSuspenseDrone();
    const master = this.getMasterGain();
    if (!master) return;

    if (value >= 15000) {
      this.playJackpotReveal(value);
    } else if (value >= 5000) {
      this.playHighReveal(value);
    } else if (value <= 1000) {
      this.playLowReveal(value);
    } else {
      this.playMidReveal(value);
    }
  }

  playLowReveal(value) {
    // Soft, relieved harp/bell sound (Low value opened is great news for the team!)
    const master = this.getMasterGain();
    if (!master) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.35, this.ctx.currentTime + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.6);

      osc.connect(gain);
      gain.connect(master);

      osc.start(this.ctx.currentTime + idx * 0.08);
      osc.stop(this.ctx.currentTime + idx * 0.08 + 0.65);
    });
  }

  playMidReveal(value) {
    const master = this.getMasterGain();
    if (!master) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(392.00, this.ctx.currentTime); // G4
    osc.frequency.exponentialRampToValueAtTime(587.33, this.ctx.currentTime + 0.2); // D5

    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);

    osc.connect(gain);
    gain.connect(master);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.55);
  }

  playHighReveal(value) {
    // Dramatic sting / brass fanfare for losing a big number (e.g. 5,000 - 12,500)
    const master = this.getMasterGain();
    if (!master) return;

    const chords = [
      [349.23, 440.00, 523.25], // F major
      [440.00, 554.37, 659.25]  // A major brass hit
    ];

    chords.forEach((chord, step) => {
      chord.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + step * 0.15);

        gain.gain.setValueAtTime(0.001, this.ctx.currentTime + step * 0.15);
        gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + step * 0.15 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + step * 0.15 + 0.8);

        osc.connect(gain);
        gain.connect(master);

        osc.start(this.ctx.currentTime + step * 0.15);
        osc.stop(this.ctx.currentTime + step * 0.15 + 0.85);
      });
    });
  }

  playJackpotReveal(value) {
    // Grand orchestral explosion & triumphant fanfare for 15,000 - 20,000
    const master = this.getMasterGain();
    if (!master) return;

    const fanfare = [
      { freq: 523.25, time: 0.0, dur: 0.15 },
      { freq: 659.25, time: 0.15, dur: 0.15 },
      { freq: 783.99, time: 0.30, dur: 0.20 },
      { freq: 1046.50, time: 0.50, dur: 0.80 },
      { freq: 1318.51, time: 0.50, dur: 0.80 }
    ];

    fanfare.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(note.freq, this.ctx.currentTime + note.time);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime + note.time);
      gain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + note.time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + note.time + note.dur);

      osc.connect(gain);
      gain.connect(master);

      osc.start(this.ctx.currentTime + note.time);
      osc.stop(this.ctx.currentTime + note.time + note.dur + 0.05);
    });
  }

  // --- Banker Telephone Sequence ---

  startTelephone() {
    this.init();
    if (this.isMuted || !this.ctx) return;
    this.stopTelephone();

    this.phoneInterval = setInterval(() => {
      if (this.isMuted || !this.ctx) return;
      this.playPhoneRingBurst();
    }, 2800);

    this.playPhoneRingBurst();
  }

  playPhoneRingBurst() {
    if (!this.ctx || this.isMuted) return;
    const master = this.getMasterGain();
    if (!master) return;

    // Classic TV Show double-bell ring: 400Hz + 450Hz modulation
    const ringSub = (offset) => {
      const t = this.ctx.currentTime + offset;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(440, t);
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(480, t);

      // Tremolo pulse (20Hz warble)
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.35, t + 0.05);
      gain.gain.setValueAtTime(0.35, t + 0.45);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(master);

      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 0.65);
      osc2.stop(t + 0.65);
    };

    ringSub(0.0);
    ringSub(0.8);
  }

  stopTelephone() {
    if (this.phoneInterval) {
      clearInterval(this.phoneInterval);
      this.phoneInterval = null;
    }
  }

  playAnswerCall() {
    this.stopTelephone();
    this.init();
    const master = this.getMasterGain();
    if (!master) return;

    // Vintage phone receiver click & dramatic mystery hum
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(master);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  }

  // --- Deal / No Deal Responses ---

  playDealGavel() {
    this.init();
    const master = this.getMasterGain();
    if (!master) return;

    // Gavel strike impact + triumphant chord
    const oscImpact = this.ctx.createOscillator();
    const gainImpact = this.ctx.createGain();

    oscImpact.type = 'triangle';
    oscImpact.frequency.setValueAtTime(150, this.ctx.currentTime);
    oscImpact.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.25);

    gainImpact.gain.setValueAtTime(0.8, this.ctx.currentTime);
    gainImpact.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);

    oscImpact.connect(gainImpact);
    gainImpact.connect(master);

    oscImpact.start();
    oscImpact.stop(this.ctx.currentTime + 0.35);

    // Chime chords
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + 0.1 + idx * 0.05);

      gain.gain.setValueAtTime(0.3, this.ctx.currentTime + 0.1 + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1 + idx * 0.05 + 0.8);

      osc.connect(gain);
      gain.connect(master);

      osc.start(this.ctx.currentTime + 0.1 + idx * 0.05);
      osc.stop(this.ctx.currentTime + 0.1 + idx * 0.05 + 0.85);
    });
  }

  playNoDealBuzzer() {
    this.init();
    const master = this.getMasterGain();
    if (!master) return;

    // Low dramatic game show impact sting
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(110, this.ctx.currentTime); // A2
    osc1.frequency.exponentialRampToValueAtTime(82.4, this.ctx.currentTime + 0.4); // E2

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(164.8, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.6, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(master);

    osc1.start();
    osc2.start();
    osc1.stop(this.ctx.currentTime + 0.65);
    osc2.stop(this.ctx.currentTime + 0.65);
  }

  playCorrectSpeaking() {
    this.init();
    const master = this.getMasterGain();
    if (!master) return;

    // Upbeat success ding-dong
    [659.25, 880.00].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.12);

      gain.gain.setValueAtTime(0.4, this.ctx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.12 + 0.4);

      osc.connect(gain);
      gain.connect(master);

      osc.start(this.ctx.currentTime + idx * 0.12);
      osc.stop(this.ctx.currentTime + idx * 0.12 + 0.45);
    });
  }

  playTryAgain() {
    this.init();
    const master = this.getMasterGain();
    if (!master) return;

    // Gentle encouraging bonk
    [330.00, 293.66].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.14);

      gain.gain.setValueAtTime(0.3, this.ctx.currentTime + idx * 0.14);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.14 + 0.3);

      osc.connect(gain);
      gain.connect(master);

      osc.start(this.ctx.currentTime + idx * 0.14);
      osc.stop(this.ctx.currentTime + idx * 0.14 + 0.35);
    });
  }

  playVictory() {
    this.init();
    const master = this.getMasterGain();
    if (!master) return;

    // Grand championship fanfare
    const melody = [
      { f: 523.25, d: 0.15, t: 0.0 },
      { f: 523.25, d: 0.15, t: 0.15 },
      { f: 523.25, d: 0.15, t: 0.30 },
      { f: 659.25, d: 0.40, t: 0.45 },
      { f: 587.33, d: 0.20, t: 0.90 },
      { f: 659.25, d: 0.20, t: 1.10 },
      { f: 783.99, d: 0.80, t: 1.30 },
      { f: 1046.50, d: 1.20, t: 2.10 }
    ];

    melody.forEach(n => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(n.f, this.ctx.currentTime + n.t);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime + n.t);
      gain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + n.t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + n.t + n.d);

      osc.connect(gain);
      gain.connect(master);

      osc.start(this.ctx.currentTime + n.t);
      osc.stop(this.ctx.currentTime + n.t + n.d + 0.05);
    });
  }
}

// Global audio singleton
const gameAudio = new SoundEngine();
