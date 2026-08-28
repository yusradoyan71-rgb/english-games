// ============================================================
// audio.js  -  Monster Dance! Audio & Voice Speech Engine
// ============================================================
'use strict';

const AudioManager = (() => {
  let isMuted = false;
  const synth = window.speechSynthesis;
  let voices = [];
  let audioCtx = null;

  // Background audio nodes
  let danceMusicTimer = null;
  let danceNodes = [];
  let isDancePlaying = false;
  let masterGain = null;

  // Initialize and preload voices
  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices();
  }
  loadVoices();
  if (synth && synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }

  function getBestVoice() {
    if (!voices || voices.length === 0) loadVoices();
    const preferredNames = [
      'Samantha', 'Victoria', 'Karen', 'Moira', 'Tessa',
      'Google US English', 'Microsoft Zira', 'Microsoft Jenny',
      'Alex', 'Fred'
    ];
    for (const name of preferredNames) {
      const match = voices.find(v => v.name.includes(name));
      if (match) return match;
    }
    const enVoice = voices.find(v => v.lang && v.lang.startsWith('en'));
    return enVoice || voices[0] || null;
  }

  // ── Speech Synthesis Core ──
  function speak(text, options = {}) {
    if (isMuted || !synth) return Promise.resolve();

    return new Promise(resolve => {
      try {
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = getBestVoice();
        utterance.rate = options.rate ?? 0.78; // Slow, clear for 4-year-olds
        utterance.pitch = options.pitch ?? 1.25; // Cheerful preschool tone
        utterance.volume = 1.0;
        utterance.lang = 'en-US';

        const maxTime = Math.max(1500, text.length * 160);
        const timeout = setTimeout(() => resolve(), maxTime);

        utterance.onend = () => {
          clearTimeout(timeout);
          resolve();
        };
        utterance.onerror = () => {
          clearTimeout(timeout);
          resolve();
        };

        synth.speak(utterance);
      } catch (err) {
        resolve();
      }
    });
  }

  function speakPart(partName) {
    return speak(`${partName}!`, { rate: 0.76, pitch: 1.25 });
  }

  function speakColor(colorName) {
    return speak(`${colorName}!`, { rate: 0.78, pitch: 1.25 });
  }

  function speakPrompt(promptText) {
    return speak(promptText, { rate: 0.76, pitch: 1.20 });
  }

  function speakCorrect(customPhrase) {
    const praise = customPhrase || 'YES! Great job!';
    return speak(praise, { rate: 0.80, pitch: 1.35 });
  }

  function speakWrong() {
    return speak('Try again!', { rate: 0.80, pitch: 1.10 });
  }

  // ── Web Audio Synth Core ──
  function getCtx() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
        masterGain = audioCtx.createGain();
        masterGain.connect(audioCtx.destination);
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type = 'pop') {
    if (isMuted) return;
    try {
      const ctx = getCtx();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'pop') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(masterGain || ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.12);

        gain.gain.setValueAtTime(0.35, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.12);

        osc.start(now);
        osc.stop(now + 0.14);
      } else if (type === 'correct') {
        const freqs = [523.25, 659.25, 783.99, 1046.5];
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(masterGain || ctx.destination);

          osc.type = 'triangle';
          osc.frequency.value = freq;

          const t = now + idx * 0.1;
          gain.gain.setValueAtTime(0, t);
          gain.gain.linearRampToValueAtTime(0.25, t + 0.03);
          gain.gain.linearRampToValueAtTime(0.001, t + 0.3);

          osc.start(t);
          osc.stop(t + 0.32);
        });
      } else if (type === 'star') {
        const freqs = [880, 1108.7, 1318.5, 1760];
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(masterGain || ctx.destination);

          osc.type = 'sine';
          osc.frequency.value = freq;

          const t = now + idx * 0.08;
          gain.gain.setValueAtTime(0.2, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

          osc.start(t);
          osc.stop(t + 0.26);
        });
      } else if (type === 'wrong') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(masterGain || ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.25);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.3);

        osc.start(now);
        osc.stop(now + 0.32);
      } else if (type === 'celebration') {
        const melody = [
          [523.25, 0.0, 0.18], [659.25, 0.18, 0.18], [783.99, 0.36, 0.22],
          [659.25, 0.60, 0.15], [783.99, 0.78, 0.18], [1046.5, 1.00, 0.6]
        ];
        melody.forEach(([freq, offset, dur]) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(masterGain || ctx.destination);

          osc.type = 'triangle';
          osc.frequency.value = freq;

          const t = now + offset;
          gain.gain.setValueAtTime(0, t);
          gain.gain.linearRampToValueAtTime(0.25, t + 0.04);
          gain.gain.linearRampToValueAtTime(0.001, t + dur);

          osc.start(t);
          osc.stop(t + dur + 0.05);
        });
      } else if (type === 'party-transition') {
        // High energetic swoosh + fanfare chime
        const freqs = [350, 523, 784, 1046, 1318];
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(masterGain || ctx.destination);

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);

          const t = now + idx * 0.06;
          gain.gain.setValueAtTime(0.01, t);
          gain.gain.linearRampToValueAtTime(0.22, t + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

          osc.start(t);
          osc.stop(t + 0.4);
        });
      }
    } catch (e) {}
  }

  // ── High-Energy Preschool Party Dance Music Engine (Web Audio Synth) ──
  const PARTY_DANCE_PATTERN = [
    // [noteFreq, timeOffset, type, volume, duration]
    // 1. Heavy Bouncy Kick Drum + Sub Bass
    [110.0, 0.0,  'sine',     0.28, 0.18],
    [130.8, 0.5,  'sawtooth', 0.18, 0.16],
    [110.0, 1.0,  'sine',     0.28, 0.18],
    [164.8, 1.5,  'sawtooth', 0.18, 0.16],
    // 2. Snare / Clapping Beats
    [400.0, 0.5,  'triangle', 0.14, 0.10],
    [400.0, 1.5,  'triangle', 0.14, 0.10],
    // 3. Catchy Upbeat Disco Arpeggio (C Major / A Minor preschool melody)
    [523.25, 0.0,  'triangle', 0.20, 0.20],
    [659.25, 0.25, 'triangle', 0.20, 0.20],
    [783.99, 0.5,  'triangle', 0.22, 0.20],
    [1046.5, 0.75, 'triangle', 0.24, 0.20],
    [880.00, 1.0,  'triangle', 0.22, 0.20],
    [783.99, 1.25, 'triangle', 0.20, 0.20],
    [987.77, 1.5,  'triangle', 0.22, 0.20],
    [1046.5, 1.75, 'triangle', 0.25, 0.20],
    // 4. Cheerful bubbly hi-hat pops
    [2400.0, 0.25, 'sine', 0.06, 0.05],
    [2400.0, 0.75, 'sine', 0.06, 0.05],
    [2400.0, 1.25, 'sine', 0.06, 0.05],
    [2400.0, 1.75, 'sine', 0.06, 0.05]
  ];

  function startDanceMusic() {
    if (isMuted) return;
    stopDanceMusic();
    isDancePlaying = true;

    try {
      const ctx = getCtx();
      if (!ctx) return;

      const barDuration = 2.0; // 120 BPM energetic bounce

      function scheduleDanceBar(startTime) {
        if (!isDancePlaying) return;

        PARTY_DANCE_PATTERN.forEach(([freq, offset, type, vol, dur]) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(masterGain || ctx.destination);

          osc.type = type;
          osc.frequency.value = freq;

          const noteTime = startTime + offset;
          gain.gain.setValueAtTime(0.001, noteTime);
          gain.gain.linearRampToValueAtTime(vol, noteTime + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, noteTime + dur);

          osc.start(noteTime);
          osc.stop(noteTime + dur + 0.02);
          danceNodes.push(osc);
        });
      }

      let currentBarTime = ctx.currentTime + 0.05;
      for (let i = 0; i < 4; i++) {
        scheduleDanceBar(currentBarTime + i * barDuration);
      }

      danceMusicTimer = setInterval(() => {
        if (!isDancePlaying) return;
        currentBarTime += 4 * barDuration;
        for (let i = 0; i < 4; i++) {
          scheduleDanceBar(currentBarTime + i * barDuration);
        }
      }, barDuration * 4 * 1000 - 400);

    } catch (e) {}
  }

  function fadeOutPreviousAudio(durationMs = 800) {
    return new Promise(resolve => {
      try {
        if (synth) synth.cancel();
        const ctx = getCtx();
        if (ctx && masterGain) {
          const now = ctx.currentTime;
          masterGain.gain.linearRampToValueAtTime(0.01, now + durationMs / 1000);
          setTimeout(() => {
            stopDanceMusic();
            masterGain.gain.setValueAtTime(1.0, ctx.currentTime);
            resolve();
          }, durationMs);
        } else {
          stopDanceMusic();
          resolve();
        }
      } catch (e) {
        stopDanceMusic();
        resolve();
      }
    });
  }

  function stopDanceMusic() {
    isDancePlaying = false;
    if (danceMusicTimer) {
      clearInterval(danceMusicTimer);
      danceMusicTimer = null;
    }
    danceNodes.forEach(node => {
      try { node.stop(); } catch (e) {}
    });
    danceNodes = [];
  }

  function toggleMute() {
    isMuted = !isMuted;
    if (isMuted) {
      if (synth) synth.cancel();
      stopDanceMusic();
    }
    return isMuted;
  }

  function getMuted() {
    return isMuted;
  }

  return {
    speak,
    speakPart,
    speakColor,
    speakPrompt,
    speakCorrect,
    speakWrong,
    playSound,
    startDanceMusic,
    fadeOutPreviousAudio,
    stopDanceMusic,
    toggleMute,
    getMuted
  };
})();
