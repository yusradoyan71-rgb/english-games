# 🏝️ ESCAPE THE ISLAND (35-Minute Classroom Edition)

> **An Interactive English Learning Adventure Game for 7th & 8th Grade Students (A2–B1 Level)**  
> Engineered specifically for a single **30–35 minute classroom lesson**.

---

## 🌟 Overview & Core Concept

**ESCAPE THE ISLAND** is a story-driven survival adventure game where students work in teams to escape a mysterious uncharted island following an emergency plane crash. Rather than feeling like a plain quiz, the game continuously moves an exciting narrative forward through:

```
STORY ➔ ENGLISH CHALLENGE ➔ REWARD / ITEM ➔ STORY ➔ CHOICE ➔ CONSEQUENCE ➔ ESCAPE
```

- **Classroom Duration:** Strictly designed for a 35-minute lesson (Default Mode: `⚡ QUICK ESCAPE — 35 MINUTES`).
- **Team Size:** 2 to 6 teams (Default: 🐯 Tigers, 🦁 Lions, 🦅 Eagles, 🦈 Sharks, 🐉 Dragons, 🐺 Wolves) with customizable names and emblems.
- **Question Database:** **270+ curriculum-aligned A2–B1 multiple-choice questions** spanning Simple Past (regular/irregular), Past Continuous, Will/Going to, Present Perfect, Modals, Comparatives/Superlatives, Prepositions, Conjunctions, and Survival Vocabulary.
- **Pacing Budget:** Each 35-minute playthrough dynamically uses only **15–25 questions total** across all teams (~45–75 seconds per turn).
- **Escape Blueprints (Streamlined to 3–4 items):**
  1. 🛶 **Ocean Escape Boat:** `🪵 Wood + 🪢 Rope + ⛽ Fuel + 🔧 Tool`
  2. 📡 **Radio SOS Beacon:** `📻 Radio + 🔋 Battery + 🔧 Tool`
  3. 🚁 **Helicopter Signal Extraction:** `🗺️ Map + 🔋 Battery + 🔥 Fire`

---

## ⏱️ 35-Minute Lesson Pacing Structure

| Time | Phase | Classroom Activity |
|---|---|---|
| **00:00 – 03:00** | **Intro & Setup** | Dramatic plane crash cinematic, mission briefing, team name customization. |
| **03:00 – 28:00** | **Main Adventure** | Map exploration, English challenges, tactical choices, random hazards, and item gathering. |
| **28:00 – 33:00** | **Endgame Rush** | ⚠️ *Island Danger Alert* (Volcano rumbles & storm gathers) accelerates item drops and opens escape paths. |
| **33:00 – 35:00** | **Victory & Podium** | 🚨 *Final Escape Window* triggers high-stakes final challenges; 🥇 🥈 🥉 Victory podium & stats. |

---

## 🚀 How to Run Locally

### Prerequisites
Node.js (v16+) or any modern browser.

### Start the Local Server
```bash
# Start local classroom server
npm start
# or: npx serve . -l 8080
```
Then open `http://localhost:8080` on your classroom projector, smartboard, or laptop.

### Run Automated Tests & Simulations
```bash
npm test
```
Runs:
1. `test-runner.js`: 270+ questions database & blueprint data integrity.
2. `verify-dom.js`: 76 critical HTML element and script bindings.
3. `verify-game-logic.js`: Multi-team (2, 4, 6 teams) 35-minute pacing simulations.
4. `e2e-simulation.js`: Full virtual DOM interaction and event dispatch suite.

---

## 🎓 Teacher Controls & Shortcuts

Press **`T`** on your keyboard (or click the **🎓 TEACHER** button in the top navbar) to open the collapsible **Teacher Control Deck**:

- **Grade Current Challenge:** `[ ✅ Mark Correct & Reward ]` or `[ ❌ Mark Incorrect ]`.
- **Reroll Question:** `[ ⏭️ Skip / Reroll Question ]`.
- **Timer Management:** `[ ⏸ Pause / Resume ]`, `[ +1 Min ]`, `[ -1 Min ]`, `[ 🚨 Force Endgame Rush ]`.
- **Team Energy Control:** Add `+1 ❤️`, `-1 ❤️`, or restore full `❤️❤️❤️` energy.
- **Grant Survival Item:** Directly give any missing tool, fuel, radio, or timber to any team.
- **Save / Resume:** Game auto-saves to browser `localStorage` on every turn.

### Keyboard Shortcuts
- **`T`**: Toggle Teacher Drawer
- **`M`**: Mute / Unmute Synthesized Web Audio Sound Effects
- **`F`**: Toggle Fullscreen Mode
- **`Space`**: Pause / Resume Timer or Advance Screen
- **`1`, `2`, `3`, `4`**: Quick select options A, B, C, D

---

## 📁 File Structure

```
├── index.html            # Main semantic HTML structure & SVG island map
├── styles.css            # Tropical adventure UI, glassmorphism, responsive styles
├── app.js                # Core game controller, state machine & timer engine
├── questions.js          # 270+ A2-B1 English questions database
├── story-data.js         # 10 Locations, 16 items, 3 escape recipes, choices & events
├── audio.js              # Web Audio API procedural sound synthesizer
├── test-runner.js        # Data integrity test suite
├── verify-dom.js         # DOM binding validation suite
├── verify-game-logic.js  # Classroom simulation suite (2, 4, 6 teams)
├── e2e-simulation.js     # Virtual DOM interaction test suite
└── package.json          # Node package definition & test scripts
```

---

## 📄 License
MIT License • Created for interactive English classroom teaching.
