// ============================================================
// data.js  -  Monster Dance! Educational Game Content
// ============================================================
'use strict';

// 1. Vocabulary terms taught in the game
const VOCABULARY_LIST = [
  { id: 'head',        word: 'HEAD',        icon: '🗣️' },
  { id: 'eyes',        word: 'EYES',        icon: '👀' },
  { id: 'ears',        word: 'EARS',        icon: '👂' },
  { id: 'nose',        word: 'NOSE',        icon: '👃' },
  { id: 'mouth',       word: 'MOUTH',       icon: '👄' },
  { id: 'hair',        word: 'HAIR',        icon: '💇' },
  { id: 'hands',       word: 'HANDS',       icon: '🖐️' },
  { id: 'feet',        word: 'FEET',        icon: '🦶' },
  { id: 'accessories', word: 'ACCESSORIES', icon: '🎀' }
];

// 2. Discovery Sequence (Step by step audio & highlight)
const DISCOVERY_STEPS = [
  { part: 'head',  speak: 'HEAD!',  prompt: 'Touch the head!',  groupId: 'g-head',  reaction: 'wiggle' },
  { part: 'eyes',  speak: 'EYES!',  prompt: 'Touch the eyes!',  groupId: 'g-eyes',  reaction: 'blink'  },
  { part: 'ears',  speak: 'EARS!',  prompt: 'Touch the ears!',  groupId: 'g-ears',  reaction: 'wiggle' },
  { part: 'nose',  speak: 'NOSE!',  prompt: 'Touch the nose!',  groupId: 'g-nose',  reaction: 'wiggle' },
  { part: 'mouth', speak: 'MOUTH!', prompt: 'Touch the mouth!', groupId: 'g-mouth', reaction: 'talk'   },
  { part: 'hands', speak: 'HANDS!', prompt: 'Touch the hands!', groupId: 'g-hands', reaction: 'wave'   },
  { part: 'feet',  speak: 'FEET!',  prompt: 'Touch the feet!',  groupId: 'g-feet',  reaction: 'jump'   }
];

// 3. Body Part + Color Combination challenges
const COLOR_COMBO_STEPS = [
  {
    targetPart: 'eyes',
    targetColor: 'blue',
    spokenPrompt: 'Choose BLUE eyes!',
    spokenSuccess: 'Blue eyes!',
    partLabel: 'EYES',
    colorLabel: 'BLUE',
    options: [
      { part: 'eyes', partId: 'sparkle', colorHex: '#60A5FA', label: 'Blue Eyes', isCorrect: true },
      { part: 'eyes', partId: 'star',    colorHex: '#FBBF24', label: 'Yellow Eyes', isCorrect: false },
      { part: 'eyes', partId: 'happy',   colorHex: '#FB7185', label: 'Pink Eyes', isCorrect: false }
    ]
  },
  {
    targetPart: 'feet',
    targetColor: 'red',
    spokenPrompt: 'Choose RED feet!',
    spokenSuccess: 'Red feet!',
    partLabel: 'FEET',
    colorLabel: 'RED',
    options: [
      { part: 'feet', partId: 'small',  colorHex: '#4ADE80', label: 'Green Feet', isCorrect: false },
      { part: 'feet', partId: 'shoes',  colorHex: '#EF4444', label: 'Red Shoes', isCorrect: true },
      { part: 'feet', partId: 'big',    colorHex: '#A78BFA', label: 'Purple Feet', isCorrect: false }
    ]
  },
  {
    targetPart: 'hair',
    targetColor: 'orange',
    spokenPrompt: 'Choose ORANGE hair!',
    spokenSuccess: 'Orange hair!',
    partLabel: 'HAIR',
    colorLabel: 'ORANGE',
    options: [
      { part: 'hair', partId: 'spiky',  colorHex: '#854D0E', label: 'Brown Hair', isCorrect: false },
      { part: 'hair', partId: 'messy',  colorHex: '#FB923C', label: 'Orange Hair', isCorrect: true },
      { part: 'hair', partId: 'fluffy', colorHex: '#F1F5F9', label: 'White Hair', isCorrect: false }
    ]
  }
];

// 4. Mini Body-Part Challenge Questions
const CHALLENGE_QUESTIONS = [
  {
    part: 'nose',
    ask: 'Can you find my NOSE?',
    groupId: 'g-nose',
    correct: 'YES! Nose!',
    wrong: 'Try again!'
  },
  {
    part: 'eyes',
    ask: 'Can you find my EYES?',
    groupId: 'g-eyes',
    correct: 'YES! Eyes!',
    wrong: 'Try again!'
  },
  {
    part: 'ears',
    ask: 'Can you find my EARS?',
    groupId: 'g-ears',
    correct: 'YES! Ears!',
    wrong: 'Try again!'
  },
  {
    part: 'mouth',
    ask: 'Can you find my MOUTH?',
    groupId: 'g-mouth',
    correct: 'YES! Mouth!',
    wrong: 'Try again!'
  },
  {
    part: 'hands',
    ask: 'Can you find my HANDS?',
    groupId: 'g-hands',
    correct: 'YES! Hands!',
    wrong: 'Try again!'
  },
  {
    part: 'feet',
    ask: 'Can you find my FEET?',
    groupId: 'g-feet',
    correct: 'YES! Feet!',
    wrong: 'Try again!'
  }
];

// 5. Instructional Dance Commands (Slow, paced for 4-year-olds: ~3 seconds each)
// Structure: Highlight Part -> Speak -> Perform Animated Movement -> Pause
const INSTRUCTIONAL_DANCE_COMMANDS = [
  {
    speak: 'Move your head!',
    target: 'head',
    groupId: 'g-head',
    css: 'dance-head-bob',
    dur: 3000,
    actionDesc: 'Head sways left and right'
  },
  {
    speak: 'Blink your eyes!',
    target: 'eyes',
    groupId: 'g-eyes',
    css: 'dance-eyes-blink',
    dur: 2800,
    actionDesc: 'Eyes blink 3 times cutely'
  },
  {
    speak: 'Move your ears!',
    target: 'ears',
    groupId: 'g-ears',
    css: 'dance-ears-wiggle',
    dur: 3000,
    actionDesc: 'Ears wiggle left and right'
  },
  {
    speak: 'Wave your hands!',
    target: 'hands',
    groupId: 'g-hands',
    css: 'dance-hands-wave',
    dur: 3000,
    actionDesc: 'Hands wave up and down'
  },
  {
    speak: 'Stomp your feet!',
    target: 'feet',
    groupId: 'g-feet',
    css: 'dance-feet-stomp',
    dur: 3000,
    actionDesc: 'Left and right foot stomping'
  },
  {
    speak: 'Jump!',
    target: 'whole',
    groupId: 'monster-all',
    css: 'dance-jump-high',
    dur: 2800,
    actionDesc: 'Squash, jump high, and land'
  }
];

// 6. Free Dance Choreography Phases (20-30 seconds high-energy varied routine)
// Dedicated Groove Left -> Groove Right -> Hands Up -> Head Shake -> Foot Stomp -> Big Jump -> 360 Spin -> Body Wiggle -> Double Jump -> Final Pose
const FREE_DANCE_ROUTINE = [
  { id: 'groove-left',  banner: "GROOVE LEFT! ⬅️",        css: "dance-groove-left",        dur: 1400 },
  { id: 'groove-right', banner: "GROOVE RIGHT! ➡️",       css: "dance-groove-right",       dur: 1400 },
  { id: 'hands-high',   banner: "HANDS UP & WAVE! 🙌",     css: "choreography-hands-high",   dur: 2800 },
  { id: 'head-shake',   banner: "HEAD BOUNCE & SHAKE! 🤩", css: "choreography-head-ear-mix", dur: 2800 },
  { id: 'fast-stomp',   banner: "FEET STOMP! 🦶",          css: "choreography-fast-stomp",   dur: 2800 },
  { id: 'high-bounce',  banner: "BIG JUMP! 🚀",            css: "choreography-high-bounce",  dur: 2600 },
  { id: 'spin-disco',   banner: "360° SPIN! 💫",           css: "choreography-spin-disco",   dur: 2600 },
  { id: 'body-wiggle',  banner: "BODY WIGGLE! 💃",         css: "choreography-body-wiggle",  dur: 2800 },
  { id: 'double-jump',  banner: "DOUBLE JUMP! 🌟",         css: "choreography-double-jump",  dur: 2600 },
  { id: 'final-freeze', banner: "FINAL POSE! ⭐",          css: "choreography-final-freeze", dur: 2400 }
];
