/**
 * SORT IT! — Audio Engine
 * Pure Web Audio API procedural synthesis + Web Speech API
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
    this.speechEnabled = true;
    this.voice = null;

    try {
      const savedSound = localStorage.getItem("sortit_sound_enabled");
      if (savedSound !== null) {
        this.soundEnabled = savedSound === "true";
      }
    } catch (e) {
      console.warn("Could not read sound preferences:", e);
    }

    this.initSpeech();
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  initSpeech() {
    if ("speechSynthesis" in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        this.voice = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("Daniel"))) ||
                     voices.find(v => v.lang.startsWith("en")) || null;
      };
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    try {
      localStorage.setItem("sortit_sound_enabled", this.soundEnabled.toString());
    } catch (e) {}
    if (this.soundEnabled) {
      this.playClick();
    }
    return this.soundEnabled;
  }

  isSoundOn() {
    return this.soundEnabled;
  }

  playPickup() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(320, t);
      osc.frequency.exponentialRampToValueAtTime(540, t + 0.08);

      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.1);
    } catch (e) {}
  }

  playDropSuccess(combo = 1) {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const baseFreq = 523.25 * (1 + Math.min(combo - 1, 8) * 0.08);
      const freqs = [baseFreq, baseFreq * 1.25, baseFreq * 1.5, baseFreq * 2];

      freqs.forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = idx === 3 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(f, t + idx * 0.04);

        gain.gain.setValueAtTime(0.16 / (idx + 1), t + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35 + idx * 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + idx * 0.04);
        osc.stop(t + 0.4 + idx * 0.04);
      });
    } catch (e) {}
  }

  playDropFail() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      [180, 140].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(f, t + idx * 0.09);
        osc.frequency.exponentialRampToValueAtTime(f * 0.7, t + idx * 0.09 + 0.1);

        gain.gain.setValueAtTime(0.18, t + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.09 + 0.12);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + idx * 0.09);
        osc.stop(t + idx * 0.09 + 0.13);
      });
    } catch (e) {}
  }

  playComboAlert(combo) {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const notes = [659.25, 830.61, 987.77, 1318.51];
      notes.forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(f, t + idx * 0.05);

        gain.gain.setValueAtTime(0.2, t + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.05 + 0.28);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + idx * 0.05);
        osc.stop(t + idx * 0.05 + 0.3);
      });
    } catch (e) {}
  }

  playLevelComplete() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const chords = [
        { f: [523.25, 659.25, 783.99], time: 0, dur: 0.2 },
        { f: [587.33, 739.99, 880.00], time: 0.18, dur: 0.2 },
        { f: [659.25, 830.61, 987.77], time: 0.36, dur: 0.25 },
        { f: [783.99, 987.77, 1174.66, 1567.98], time: 0.58, dur: 0.6 }
      ];

      chords.forEach(chord => {
        chord.f.forEach(freq => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, t + chord.time);

          gain.gain.setValueAtTime(0.12, t + chord.time);
          gain.gain.exponentialRampToValueAtTime(0.001, t + chord.time + chord.dur);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(t + chord.time);
          osc.stop(t + chord.time + chord.dur + 0.05);
        });
      });
    } catch (e) {}
  }

  playTick(isUrgent = false) {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(isUrgent ? 880 : 440, t);

      gain.gain.setValueAtTime(isUrgent ? 0.15 : 0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.06);
    } catch (e) {}
  }

  playClick() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.04);

      gain.gain.setValueAtTime(0.1, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.05);
    } catch (e) {}
  }

  speakFeedback(type) {
    if (!this.soundEnabled || !this.speechEnabled || !("speechSynthesis" in window)) return;

    const phrases = {
      correct: ["Correct!", "Nice!", "Great!", "Spot on!", "Awesome!"],
      wrong: ["Try again.", "Not quite.", "Check the category."],
      combo: ["On fire!", "Unstoppable!", "Super combo!", "Incredible!"],
      levelComplete: ["Level Complete! Excellent work!", "Great job! Level cleared!"]
    };

    const list = phrases[type] || phrases.correct;
    const text = list[Math.floor(Math.random() * list.length)];

    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 1.05;
      utter.pitch = 1.05;
      utter.volume = 0.8;
      if (this.voice) {
        utter.voice = this.voice;
      }
      window.speechSynthesis.speak(utter);
    } catch (e) {}
  }
}

export const soundEngine = new SoundEngine();
