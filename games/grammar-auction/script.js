/**
 * GRAMMAR AUCTION — Interactive Classroom Game
 * Features:
 * - Grade 7 Unit 1: Life Online Curriculum Sentences
 * - 2-4 Team Accounts with Live Cash Balances
 * - Dynamic Bidding (+50, +100, +200, All-In, Reset)
 * - Procedural Web Audio Engine (Woody Gavel Slam, Cash Chimes, Buzzers, Fanfare)
 * - Animated Stamps & Full Pedagogical Grammar Explanations
 * - Interactive Confetti Celebration & Final Podium
 */

// Procedural Sound Effects Engine
class AuctionSFX {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  // Woody Gavel Strike Sound
  playGavel() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Low woody thud
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(35, t + 0.25);
    gain.gain.setValueAtTime(0.7, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.25);

    // High snap click
    const snap = this.ctx.createOscillator();
    const snapGain = this.ctx.createGain();
    snap.type = "triangle";
    snap.frequency.setValueAtTime(900, t);
    snap.frequency.exponentialRampToValueAtTime(200, t + 0.08);
    snapGain.gain.setValueAtTime(0.4, t);
    snapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    snap.connect(snapGain);
    snapGain.connect(this.ctx.destination);
    snap.start(t);
    snap.stop(t + 0.08);
  }

  // Cash Register Coin Chime
  playCash() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    [987.77, 1318.51, 1567.98].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t + idx * 0.08);
      gain.gain.setValueAtTime(0.2, t + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + idx * 0.08);
      osc.stop(t + idx * 0.08 + 0.35);
    });
  }

  // Negative Buzzer
  playBuzzer() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.setValueAtTime(100, t + 0.18);
    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.45);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.45);
  }

  // Victory Fanfare
  playFanfare() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50];
    const t = this.ctx.currentTime;
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.2, t + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.12 + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + i * 0.12);
      osc.stop(t + i * 0.12 + 0.4);
    });
  }
}

const sfx = new AuctionSFX();

// Fallback sentences in case master data file is not loaded yet
const DEFAULT_AUCTION_SENTENCES = [
  {
    sentence: "Sarah usually checks her notifications before she goes to sleep.",
    isCorrect: true,
    category: "Present Simple Routine",
    explanation: "Correct. Present Simple with 'usually' expresses habitual behavior."
  },
  {
    sentence: "Right now, David is understanding how computer algorithms rank posts.",
    isCorrect: false,
    corrected: "Right now, David understands how computer algorithms rank posts.",
    category: "Stative Verbs",
    explanation: "Incorrect. 'Understand' is a stative verb and cannot be used in continuous tenses."
  },
  {
    sentence: "Elena decided to reduce her daily screen time to protect her eyesight.",
    isCorrect: true,
    category: "Verb Patterns (Decide + Infinitive)",
    explanation: "Correct. The verb 'decide' is followed by a to-infinitive ('to reduce')."
  },
  {
    sentence: "The IT teacher warned students against to click on suspicious links.",
    isCorrect: false,
    corrected: "The IT teacher warned students against clicking on suspicious links.",
    category: "Prepositions + Gerunds",
    explanation: "Incorrect. Prepositions like 'against' are followed by a gerund ('clicking')."
  },
  {
    sentence: "Liam enjoys creating digital artwork on his mobile tablet.",
    isCorrect: true,
    category: "Verb Patterns (Enjoy + Gerund)",
    explanation: "Correct. The verb 'enjoy' is always followed by a gerund ('creating')."
  },
  {
    sentence: "Listen! Somebody knocks on the front door.",
    isCorrect: false,
    corrected: "Listen! Somebody is knocking on the front door.",
    category: "Present Continuous",
    explanation: "Incorrect. 'Listen!' draws attention to an action happening right now."
  },
  {
    sentence: "Social media algorithms observe user clicks to recommend relevant content.",
    isCorrect: true,
    category: "Present Simple General Truth",
    explanation: "Correct. General technological facts use simple present."
  },
  {
    sentence: "In conclusion, we need to balance online and offline activities.",
    isCorrect: true,
    category: "Concluding Linker",
    explanation: "Correct. 'In conclusion' introduces a final summarizing argument."
  },
  {
    sentence: "He refused giving his password to the unknown caller.",
    isCorrect: false,
    corrected: "He refused to give his password to the unknown caller.",
    category: "Infinitive after Refuse",
    explanation: "Incorrect. 'Refuse' takes a to-infinitive ('to give')."
  },
  {
    sentence: "She is often spending four hours a day scrolling through short videos.",
    isCorrect: false,
    corrected: "She often spends four hours a day scrolling through short videos.",
    category: "Habitual Action with Often",
    explanation: "Incorrect. Habits with frequency adverbs take the Present Simple."
  }
];

// Game State
let auctionState = {
  teams: [],
  selectedTeamIdx: 0,
  startingBudget: 1000,
  totalLots: 10,
  currentLotIdx: 0,
  lots: [],
  currentBid: 0,
  bidWinnerIdx: null,
  isSold: false
};

// DOM References
let setupScreen, auctionScreen, revealScreen, podiumScreen;
let bankBar, lotBadge, lotCategory, sentenceText, currentBidAmount, currentBidLeader, biddingTeamPills;
let verdictSubtitle, verdictTitle, stampBadge, verdictOrigSentence, correctionBox, verdictCorrectedSentence, verdictExplanationText, payoutSummary, payoutIcon, payoutText;

document.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  initPills();
  initEvents();
});

function cacheDom() {
  setupScreen = document.getElementById("setupScreen");
  auctionScreen = document.getElementById("auctionScreen");
  revealScreen = document.getElementById("revealScreen");
  podiumScreen = document.getElementById("podiumScreen");

  bankBar = document.getElementById("bankBar");
  lotBadge = document.getElementById("lotBadge");
  lotCategory = document.getElementById("lotCategory");
  sentenceText = document.getElementById("sentenceText");
  currentBidAmount = document.getElementById("currentBidAmount");
  currentBidLeader = document.getElementById("currentBidLeader");
  biddingTeamPills = document.getElementById("biddingTeamPills");

  verdictSubtitle = document.getElementById("verdictSubtitle");
  verdictTitle = document.getElementById("verdictTitle");
  stampBadge = document.getElementById("stampBadge");
  verdictOrigSentence = document.getElementById("verdictOrigSentence");
  correctionBox = document.getElementById("correctionBox");
  verdictCorrectedSentence = document.getElementById("verdictCorrectedSentence");
  verdictExplanationText = document.getElementById("verdictExplanationText");
  payoutSummary = document.getElementById("payoutSummary");
  payoutIcon = document.getElementById("payoutIcon");
  payoutText = document.getElementById("payoutText");
}

function initPills() {
  document.querySelectorAll(".option-pills").forEach(group => {
    group.querySelectorAll(".pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        group.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  });
}

function initEvents() {
  const soundBtn = document.getElementById("btnSoundToggle");
  if (soundBtn) {
    soundBtn.addEventListener("click", (e) => {
      sfx.muted = !sfx.muted;
      e.currentTarget.textContent = sfx.muted ? "🔇" : "🔊";
    });
  }

  document.getElementById("btnStartAuction").addEventListener("click", startAuction);
  document.querySelectorAll(".btn-bid[data-inc]").forEach(btn => {
    btn.addEventListener("click", () => {
      const inc = parseInt(btn.dataset.inc, 10);
      placeBidIncrement(inc);
    });
  });

  document.getElementById("btnAllIn").addEventListener("click", placeAllInBid);
  document.getElementById("btnResetLotBid").addEventListener("click", resetCurrentLotBid);
  document.getElementById("btnHammerSold").addEventListener("click", executeGavelSlam);
  document.getElementById("btnPassLot").addEventListener("click", passLot);
  document.getElementById("btnNextLot").addEventListener("click", nextAuctionLot);
  document.getElementById("btnPlayAgain").addEventListener("click", resetGame);
}

function startAuction() {
  sfx.init();

  const teamBtn = document.querySelector("#teamOptions .pill-btn.active");
  const numTeams = teamBtn ? parseInt(teamBtn.dataset.teams, 10) : 2;

  const budgetBtn = document.querySelector("#budgetOptions .pill-btn.active");
  const budget = budgetBtn ? parseInt(budgetBtn.dataset.budget, 10) : 1000;

  const lotBtn = document.querySelector("#lotOptions .pill-btn.active");
  const lotCount = lotBtn ? parseInt(lotBtn.dataset.lots, 10) : 10;

  auctionState.startingBudget = budget;
  auctionState.totalLots = lotCount;
  auctionState.currentLotIdx = 0;
  auctionState.selectedTeamIdx = 0;

  const defaultNames = ["Team Alpha", "Team Bravo", "Team Charlie", "Team Delta"];
  auctionState.teams = [];
  for (let i = 0; i < numTeams; i++) {
    auctionState.teams.push({
      name: defaultNames[i] || `Team ${i + 1}`,
      balance: budget,
      correctLotsCount: 0
    });
  }

  // Load and randomize sentences from master dataset
  let sourceSentences = (typeof window !== "undefined" && window.Grade7Unit1LifeOnline && window.Grade7Unit1LifeOnline.grammarAuctionSentences)
    ? [...window.Grade7Unit1LifeOnline.grammarAuctionSentences]
    : [...DEFAULT_AUCTION_SENTENCES];

  // Shuffle sentences
  for (let i = sourceSentences.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sourceSentences[i], sourceSentences[j]] = [sourceSentences[j], sourceSentences[i]];
  }

  auctionState.lots = sourceSentences.slice(0, lotCount);

  setupScreen.classList.add("hidden");
  podiumScreen.classList.add("hidden");
  showAuctionScreen();
}

function renderBankBar() {
  if (!bankBar) return;
  bankBar.innerHTML = "";

  auctionState.teams.forEach((t, idx) => {
    const chip = document.createElement("div");
    chip.className = `bank-chip ${idx === auctionState.bidWinnerIdx ? "active-leader" : ""}`;
    chip.innerHTML = `
      <span class="team-chip-name">${t.name}</span>
      <span class="team-chip-balance">$${t.balance.toLocaleString()}</span>
    `;
    bankBar.appendChild(chip);
  });
}

function renderBiddingTeamPills() {
  if (!biddingTeamPills) return;
  biddingTeamPills.innerHTML = "";

  auctionState.teams.forEach((t, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `team-bid-btn ${idx === auctionState.selectedTeamIdx ? "active-bidder" : ""}`;
    btn.textContent = `${t.name} ($${t.balance})`;

    btn.addEventListener("click", () => {
      auctionState.selectedTeamIdx = idx;
      renderBiddingTeamPills();
    });

    biddingTeamPills.appendChild(btn);
  });
}

function showAuctionScreen() {
  auctionState.currentBid = 0;
  auctionState.bidWinnerIdx = null;
  auctionState.isSold = false;

  setupScreen.classList.add("hidden");
  revealScreen.classList.add("hidden");
  auctionScreen.classList.remove("hidden");

  renderBankBar();
  renderBiddingTeamPills();

  const curLot = auctionState.lots[auctionState.currentLotIdx];
  lotBadge.textContent = `LOT ${auctionState.currentLotIdx + 1} / ${auctionState.totalLots}`;
  lotCategory.textContent = curLot.category || "Life Online Grammar";
  sentenceText.textContent = curLot.sentence;

  updateBidDisplay();
}

function placeBidIncrement(amount) {
  const currentTeam = auctionState.teams[auctionState.selectedTeamIdx];
  const newBid = auctionState.currentBid + amount;

  if (newBid > currentTeam.balance) {
    sfx.playBuzzer();
    alert(`${currentTeam.name} does not have enough balance for a $${newBid} bid!`);
    return;
  }

  auctionState.currentBid = newBid;
  auctionState.bidWinnerIdx = auctionState.selectedTeamIdx;

  sfx.playCash();
  updateBidDisplay();
  renderBankBar();
}

function placeAllInBid() {
  const currentTeam = auctionState.teams[auctionState.selectedTeamIdx];
  if (currentTeam.balance <= auctionState.currentBid) {
    sfx.playBuzzer();
    alert(`${currentTeam.name}'s balance ($${currentTeam.balance}) is not higher than current bid ($${auctionState.currentBid})!`);
    return;
  }

  auctionState.currentBid = currentTeam.balance;
  auctionState.bidWinnerIdx = auctionState.selectedTeamIdx;

  sfx.playCash();
  updateBidDisplay();
  renderBankBar();
}

function resetCurrentLotBid() {
  auctionState.currentBid = 0;
  auctionState.bidWinnerIdx = null;
  updateBidDisplay();
  renderBankBar();
}

function updateBidDisplay() {
  currentBidAmount.textContent = `$${auctionState.currentBid.toLocaleString()}`;
  if (auctionState.bidWinnerIdx !== null) {
    const leaderTeam = auctionState.teams[auctionState.bidWinnerIdx];
    currentBidLeader.textContent = `Highest bidder: ${leaderTeam.name} with $${auctionState.currentBid}`;
  } else {
    currentBidLeader.textContent = "No bids placed yet — Ready for team offers!";
  }
}

function executeGavelSlam() {
  if (auctionState.bidWinnerIdx === null) {
    alert("No team has placed a bid yet! Select a team and place a bid or choose Pass Lot.");
    return;
  }

  const gavelBtn = document.getElementById("btnHammerSold");
  if (gavelBtn) {
    gavelBtn.classList.remove("gavel-hit");
    void gavelBtn.offsetWidth;
    gavelBtn.classList.add("gavel-hit");
  }

  sfx.playGavel();

  setTimeout(() => {
    showVerdictReveal(false);
  }, 600);
}

function passLot() {
  showVerdictReveal(true);
}

function showVerdictReveal(isPassed) {
  auctionScreen.classList.add("hidden");
  revealScreen.classList.remove("hidden");

  const curLot = auctionState.lots[auctionState.currentLotIdx];
  verdictOrigSentence.textContent = curLot.sentence;
  verdictExplanationText.textContent = curLot.explanation || "Grammar guideline applied.";

  if (curLot.isCorrect) {
    stampBadge.className = "stamp-badge stamp-correct";
    stampBadge.textContent = "CORRECT SENTENCE! ✅";
    correctionBox.classList.add("hidden");

    if (!isPassed && auctionState.bidWinnerIdx !== null) {
      const winner = auctionState.teams[auctionState.bidWinnerIdx];
      // Investment bonus: Team receives 100% bonus profit equal to their bid!
      winner.balance += auctionState.currentBid;
      winner.correctLotsCount++;
      payoutIcon.textContent = "💰";
      payoutText.textContent = `Great investment! ${winner.name} wins the lot and earns +$${auctionState.currentBid} bonus profit!`;
      sfx.playFanfare();
    } else {
      payoutIcon.textContent = "ℹ️";
      payoutText.textContent = "Lot passed without any bids. The sentence was correct!";
      sfx.playCash();
    }
  } else {
    stampBadge.className = "stamp-badge stamp-incorrect";
    stampBadge.textContent = "INCORRECT SENTENCE! ❌";
    correctionBox.classList.remove("hidden");
    verdictCorrectedSentence.textContent = curLot.corrected || "See explanation below.";

    if (!isPassed && auctionState.bidWinnerIdx !== null) {
      const winner = auctionState.teams[auctionState.bidWinnerIdx];
      // Team loses their bid from their bank balance
      winner.balance = Math.max(0, winner.balance - auctionState.currentBid);
      payoutIcon.textContent = "📉";
      payoutText.textContent = `Trap caught! The sentence was flawed. ${winner.name} loses their bid of $${auctionState.currentBid}.`;
      sfx.playBuzzer();
    } else {
      payoutIcon.textContent = "🛡️";
      payoutText.textContent = "Wise choice! Teams wisely avoided bidding on an incorrect sentence.";
      sfx.playCash();
    }
  }
}

function nextAuctionLot() {
  auctionState.currentLotIdx++;
  if (auctionState.currentLotIdx >= auctionState.totalLots) {
    showFinalPodium();
  } else {
    showAuctionScreen();
  }
}

function showFinalPodium() {
  revealScreen.classList.add("hidden");
  auctionScreen.classList.add("hidden");
  podiumScreen.classList.remove("hidden");

  sfx.playFanfare();
  triggerConfetti();

  const podiumEl = document.getElementById("finalPodium");
  if (!podiumEl) return;
  podiumEl.innerHTML = "";

  const sorted = [...auctionState.teams].sort((a, b) => b.balance - a.balance);

  sorted.forEach((team, idx) => {
    const card = document.createElement("div");
    card.className = `podium-card ${idx === 0 ? "winner" : ""}`;
    const rankTitles = ["🥇 1st Place Champion", "🥈 2nd Place", "🥉 3rd Place", "4th Place"];
    card.innerHTML = `
      <div class="podium-rank">${rankTitles[idx] || `${idx + 1}th Place`}</div>
      <h3 style="font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 0.4rem;">${team.name}</h3>
      <div style="font-family: var(--font-display); font-size: 2rem; font-weight: 900; color: #fbbf24;">$${team.balance.toLocaleString()}</div>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.4rem;">Won ${team.correctLotsCount} correct lots</p>
    `;
    podiumEl.appendChild(card);
  });
}

function resetGame() {
  podiumScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
}

// Confetti Particle System
function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#f59e0b", "#10b981", "#3b82f6", "#ec4899", "#8b5cf6", "#fbbf24"];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.4,
      w: Math.random() * 10 + 6,
      h: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 4 + 2,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 8
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vRot;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    frame++;
    if (frame < 120) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}
