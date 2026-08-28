# 👾 MONSTER DANCE! — Preschool English Learning Game

An interactive, browser-based preschool English learning game designed from scratch for 4-year-old kindergarten children. 

Children create their own customizable cartoon monster, learn core English body parts and colors through visual cues, speech synthesis, and animations, and then dance along with their monster!

---

## 🎯 Educational Goals & Pedagogy

* **Target Age**: 4-year-old kindergarten children.
* **Non-Reader First**: No reading required; all instructions and vocabulary words are spoken aloud with friendly pitch and pacing.
* **Core Vocabulary**:
  * **Body Parts**: HEAD, EYES, EARS, NOSE, MOUTH, HAIR, ARMS, HANDS, LEGS, FEET.
  * **Colors**: RED, BLUE, GREEN, YELLOW, PURPLE, PINK, ORANGE.
  * **Action Verbs**: Move, Wave, Blink, Wiggle, Jump, Spin, Dance.
* **Positive Reinforcement**: Unlimited attempts, friendly wiggles and encouraging audio ("Try again!") on mistakes, star reward counters ⭐, and positive praise ("YES! Nose!").

---

## 🎮 Game Experience & Stages

1. **Magical Start Screen**:
   * Animated playground with floating clouds, rainbow, twinkling stars, fluttering butterflies, and blooming flowers.
   * Central cute monster with breathing, blinking, and ear wiggles.
   * Large pulsating **▶ PLAY!** button and accessible sound toggle (🔊 / 🔇).

2. **Monster Intro**:
   * Monster introduces itself with animated mouth sync: *"Hello!"* ➔ *"I'm a monster!"* ➔ *"Let's make a monster!"*

3. **Body Part Discovery**:
   * Highlighted glowing body parts with clear spoken pronunciation.
   * Child taps the glowing part to trigger sparkle bursts, chimes, wiggles, and star rewards.

4. **Create Your Own Monster (Customization)**:
   * 8 visual categories: 👀 EYES, 👂 EARS, 👃 NOSE, 👄 MOUTH, 💇 HAIR, 🖐 HANDS, 🦶 FEET, 🎨 COLOR.
   * Layered SVG architecture with 4+ unique styles per category.
   * Smooth CSS variable color transitions across all SVG layers.
   * Customization persistence ensures all selected features stay on the monster simultaneously.

5. **Body Part + Color Combination**:
   * Spoken challenges (e.g. *"Choose BLUE eyes!"*, *"Choose RED feet!"*).
   * Spoken confirmation (*"Blue eyes!"*, *"Red feet!"*) and sparkle feedback.

6. **Mini Body-Part Challenge**:
   * Monster asks: *"Can you find my nose?"*, *"Can you find my ears?"*, etc.
   * Unlimited attempts with gentle retry feedback.

7. **Monster Dance (Main Event)**:
   * Cheerful synthesized dance beat with disco lights, floating party balloons, musical notes, and confetti.
   * Spoken dance commands executed by the child's exact custom monster:
     * *"Move your head!"* (Head bob & sway)
     * *"Wave your hands!"* (Hands waving)
     * *"Move your feet!"* (Feet stomping left/right)
     * *"Blink your eyes!"* (Rapid cute blinks)
     * *"Move your ears!"* (Ears wiggle)
     * *"Jump!"* (Squash & stretch jump)
     * *"Spin!"* (360° spin)
     * *"Everybody dance!"* (Full disco choreography)

8. **Final Celebration**:
   * Confetti shower, *"🎉 AMAZING!"*, *"✨ MY MONSTER! ✨"*, glowing 5-star banner, and **🔄 PLAY AGAIN** / **🎨 NEW MONSTER** options.

---

## 🏗️ Technical Architecture

* **Modular File Structure**:
  * `index.html`: Semantic layout, SVG stages, HUD progress breadcrumbs, and speech bubbles.
  * `style.css`: Preschool cartoon aesthetics, custom Google Fonts (`Baloo 2`, `Fredoka`, `Nunito`), and CSS keyframe animations.
  * `monsterParts.js`: Vector SVG layer definitions for body parts and color presets.
  * `data.js`: Educational vocabulary lists, discovery steps, combo challenges, and dance commands.
  * `animations.js`: Visual FX engine (background particles, sparkles, flying stars, confetti cannon, floating balloons & notes).
  * `audio.js`: Speech Synthesis engine + Web Audio API synthesizer for SFX and dance rhythm loops.
  * `monster.js`: Layered SVG character manager supporting part fly-in, color variables, idle breathing, and body part reactions.
  * `app.js`: State controller orchestrating the full game flow.

---

## 🚀 Running the Game Locally

Serve the directory with any local static HTTP server:

```bash
# Using serve
npx -y serve . -l 4321

# Or using python
python -m http.server 4321
```

Open `http://localhost:4321/index.html` in any modern web browser (Chrome, Edge, Safari, Firefox).
