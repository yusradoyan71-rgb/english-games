/**
 * HANGMAN - App Controller & UI Renderer
 * Handles screen transitions, keyboard inputs, modal dialogs, and SVG Hangman Drawing.
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const screenMenu = document.getElementById('screenMenu');
  const screenLevels = document.getElementById('screenLevels');
  const screenGame = document.getElementById('screenGame');

  // Header Elements
  const headerLogoBtn = document.getElementById('headerLogoBtn');
  const btnSoundToggle = document.getElementById('btnSoundToggle');
  const soundIcon = document.getElementById('soundIcon');
  const soundText = document.getElementById('soundText');
  const btnRulesModal = document.getElementById('btnRulesModal');

  // Menu Elements
  const cardGrade7 = document.getElementById('cardGrade7');
  const cardGrade8 = document.getElementById('cardGrade8');
  const btnPlayGrade7 = document.getElementById('btnPlayGrade7');
  const btnPlayGrade8 = document.getElementById('btnPlayGrade8');

  // Level Selection Elements
  const levelGradeTitle = document.getElementById('levelGradeTitle');
  const levelGradeSub = document.getElementById('levelGradeSub');
  const levelsGridContainer = document.getElementById('levelsGridContainer');
  const btnBackToMenu = document.getElementById('btnBackToMenu');

  // Gameplay HUD
  const hudGradeBadge = document.getElementById('hudGradeBadge');
  const hudWordCount = document.getElementById('hudWordCount');
  const hudWordsToPass = document.getElementById('hudWordsToPass');
  const hudMistakesCount = document.getElementById('hudMistakesCount');
  const hudMistakesPill = document.getElementById('hudMistakesPill');
  const hudScore = document.getElementById('hudScore');
  const hudStreak = document.getElementById('hudStreak');
  const hudStreakPill = document.getElementById('hudStreakPill');
  const hudTimerContainer = document.getElementById('hudTimerContainer');
  const hudTimerText = document.getElementById('hudTimerText');
  const btnExitToLevels = document.getElementById('btnExitToLevels');

  // SVG Hangman Body Parts Array (ordered 1 to 6)
  const bodyParts = [
    document.getElementById('partHead'),
    document.getElementById('partTorso'),
    document.getElementById('partArmLeft'),
    document.getElementById('partArmRight'),
    document.getElementById('partLegLeft'),
    document.getElementById('partLegRight')
  ];

  // Word & Clues
  const categoryText = document.getElementById('categoryText');
  const clueMainText = document.getElementById('clueMainText');
  const clueContextSentence = document.getElementById('clueContextSentence');
  const wordSlotsContainer = document.getElementById('wordSlotsContainer');
  const feedbackMsgBar = document.getElementById('feedbackMsgBar');

  // Keyboard Rows
  const kbRow1 = document.getElementById('kbRow1');
  const kbRow2 = document.getElementById('kbRow2');
  const kbRow3 = document.getElementById('kbRow3');
  const btnOpenHint = document.getElementById('btnOpenHint');

  // Modals
  const modalWordComplete = document.getElementById('modalWordComplete');
  const winWordText = document.getElementById('winWordText');
  const winDefinitionText = document.getElementById('winDefinitionText');
  const winContextText = document.getElementById('winContextText');
  const winBasePts = document.getElementById('winBasePts');
  const winMistakesBonusPts = document.getElementById('winMistakesBonusPts');
  const winNoHintRow = document.getElementById('winNoHintRow');
  const winNoHintPts = document.getElementById('winNoHintPts');
  const winStreakRow = document.getElementById('winStreakRow');
  const winStreakPts = document.getElementById('winStreakPts');
  const winSpeedRow = document.getElementById('winSpeedRow');
  const winSpeedPts = document.getElementById('winSpeedPts');
  const winRoundTotalPts = document.getElementById('winRoundTotalPts');
  const btnNextWordWin = document.getElementById('btnNextWordWin');

  // Word Failed Modal
  const modalWordFailed = document.getElementById('modalWordFailed');
  const failWordText = document.getElementById('failWordText');
  const failDefinitionText = document.getElementById('failDefinitionText');
  const failContextText = document.getElementById('failContextText');
  const btnRetryWord = document.getElementById('btnRetryWord');
  const btnNextWordFail = document.getElementById('btnNextWordFail');

  // Level Complete Modal
  const modalLevelComplete = document.getElementById('modalLevelComplete');
  const lvlStatScore = document.getElementById('lvlStatScore');
  const lvlStatAccuracy = document.getElementById('lvlStatAccuracy');
  const lvlStatStreak = document.getElementById('lvlStatStreak');
  const lvlStatHints = document.getElementById('lvlStatHints');
  const btnLvlReplay = document.getElementById('btnLvlReplay');
  const btnNextLevel = document.getElementById('btnNextLevel');

  // Grade Complete Modal
  const modalGradeComplete = document.getElementById('modalGradeComplete');
  const gradeFinalScore = document.getElementById('gradeFinalScore');
  const gradeFinalAccuracy = document.getElementById('gradeFinalAccuracy');
  const gradeFinalStreak = document.getElementById('gradeFinalStreak');
  const gradeFinalHints = document.getElementById('gradeFinalHints');
  const btnReplayGrade = document.getElementById('btnReplayGrade');
  const btnSwitchGrade = document.getElementById('btnSwitchGrade');

  // Hint Picker Modal
  const modalHintPicker = document.getElementById('modalHintPicker');
  const hintOptionsContainer = document.getElementById('hintOptionsContainer');
  const btnCloseHintModal = document.getElementById('btnCloseHintModal');

  // Rules Modal
  const modalRules = document.getElementById('modalRules');
  const btnCloseRulesModal = document.getElementById('btnCloseRulesModal');

  // Keyboard Layout (QWERTY)
  const KB_LAYOUT = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  // Screen Switcher
  function showScreen(screen) {
    [screenMenu, screenLevels, screenGame].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
    window.scrollTo(0, 0);
  }

  // Sound Toggle
  btnSoundToggle.addEventListener('click', () => {
    const isMuted = !audioEngine.toggleSound();
    soundIcon.textContent = isMuted ? '🔇' : '🔊';
    soundText.textContent = isMuted ? 'Sound OFF' : 'Sound ON';
  });

  // How to Play / Rules Modal
  btnRulesModal.addEventListener('click', () => {
    modalRules.classList.remove('hidden');
  });

  btnCloseRulesModal.addEventListener('click', () => {
    modalRules.classList.add('hidden');
  });

  // Return to Menu from Logo
  headerLogoBtn.addEventListener('click', () => {
    hangmanEngine.stopTimer();
    closeAllModals();
    showScreen(screenMenu);
  });

  // Grade Selection Actions
  function selectGrade(gradeKey) {
    hangmanEngine.setGrade(gradeKey);
    renderLevelsGrid();
    showScreen(screenLevels);
  }

  cardGrade7.addEventListener('click', () => selectGrade('grade7'));
  btnPlayGrade7.addEventListener('click', (e) => {
    e.stopPropagation();
    selectGrade('grade7');
  });

  cardGrade8.addEventListener('click', () => selectGrade('grade8'));
  btnPlayGrade8.addEventListener('click', (e) => {
    e.stopPropagation();
    selectGrade('grade8');
  });

  btnBackToMenu.addEventListener('click', () => {
    showScreen(screenMenu);
  });

  btnExitToLevels.addEventListener('click', () => {
    hangmanEngine.stopTimer();
    renderLevelsGrid();
    showScreen(screenLevels);
  });

  // Render Level Map Screen
  function renderLevelsGrid() {
    const gData = hangmanEngine.getCurrentGradeData();
    const gProg = hangmanEngine.progress[hangmanEngine.currentGrade];

    levelGradeTitle.textContent = gData.title;
    levelGradeSub.textContent = gData.subtitle;
    levelsGridContainer.innerHTML = '';

    gData.levels.forEach(lvl => {
      const isUnlocked = gProg.unlockedLevels.includes(lvl.id);
      const isCompleted = gProg.completedLevels.includes(lvl.id);

      const card = document.createElement('div');
      card.className = `lvl-card ${isUnlocked ? 'unlocked' : 'locked'}`;

      let statusPillHtml = '';
      if (isCompleted) {
        statusPillHtml = '<span class="lvl-status-pill lvl-status-completed">✓ COMPLETED</span>';
      } else if (isUnlocked) {
        statusPillHtml = '<span class="lvl-status-pill lvl-status-active">▶ READY</span>';
      } else {
        statusPillHtml = '<span class="lvl-status-pill lvl-status-locked">🔒 LOCKED</span>';
      }

      card.innerHTML = `
        <div>
          <div class="lvl-card-top">
            <div class="lvl-number-badge">${lvl.id}</div>
            ${statusPillHtml}
          </div>
          <h3 class="lvl-card-title">${lvl.name}</h3>
          <p class="lvl-card-desc">${lvl.description}</p>
        </div>
        <div>
          <div class="lvl-meta-row">
            <span>🎯 ${lvl.wordsToPass} Words to Pass</span>
            <span>${lvl.timer ? `⏱️ ${lvl.timer}s Timer` : '✨ Relaxed'}</span>
          </div>
          <button type="button" class="btn-play-lvl" style="margin-top: 10px;" ${!isUnlocked ? 'disabled' : ''}>
            ${isCompleted ? 'REPLAY LEVEL' : isUnlocked ? 'PLAY LEVEL' : 'LOCKED'}
          </button>
        </div>
      `;

      if (isUnlocked) {
        card.addEventListener('click', () => {
          startLevelPlay(lvl.id);
        });
      }

      levelsGridContainer.appendChild(card);
    });
  }

  // Start Playing a Level
  function startLevelPlay(levelId) {
    hangmanEngine.startLevel(levelId);
    showScreen(screenGame);
    renderKeyboard();
  }

  // Build On-Screen Keyboard
  function renderKeyboard() {
    [kbRow1, kbRow2, kbRow3].forEach((rowEl, rowIdx) => {
      rowEl.innerHTML = '';
      KB_LAYOUT[rowIdx].forEach(letter => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'key-btn';
        btn.id = `key-${letter}`;
        btn.textContent = letter;
        btn.setAttribute('data-letter', letter);

        btn.addEventListener('click', () => {
          handleLetterInput(letter, btn);
        });

        rowEl.appendChild(btn);
      });
    });
  }

  // Update Keyboard Button States
  function updateKeyboardStates(guessedLetters, correctLetters, incorrectLetters) {
    document.querySelectorAll('.key-btn').forEach(btn => {
      const letter = btn.getAttribute('data-letter');
      btn.className = 'key-btn';
      btn.disabled = false;

      if (correctLetters.includes(letter)) {
        btn.classList.add('correct');
        btn.disabled = true;
      } else if (incorrectLetters.includes(letter)) {
        btn.classList.add('incorrect');
        btn.disabled = true;
      } else if (guessedLetters.includes(letter)) {
        btn.disabled = true;
      }
    });
  }

  // Handle Letter Guess
  function handleLetterInput(letter, buttonEl) {
    if (hangmanEngine.isRoundOver()) return;
    audioEngine.playKeyPress();

    const res = hangmanEngine.guessLetter(letter);
    if (!res) return;

    const targetEl = buttonEl || document.getElementById(`key-${letter}`);

    if (res.correct) {
      feedbackMsgBar.className = 'feedback-msg-bar msg-positive';
      feedbackMsgBar.textContent = `Great! Letter "${letter}" is in the word!`;
      if (targetEl) {
        animEngine.burstFromElement(targetEl, 16, true);
        animEngine.spawnFloatingBadge('✓ FOUND', targetEl, 'success');
      }
    } else {
      feedbackMsgBar.className = 'feedback-msg-bar msg-negative';
      const partNames = ["Head", "Torso", "Left Arm", "Right Arm", "Left Leg", "Right Leg"];
      const currentPartName = partNames[res.mistakesCount - 1] || "Body Part";
      feedbackMsgBar.textContent = `Incorrect ("${letter}") → Added ${currentPartName}! (${res.mistakesCount}/6 Mistakes)`;
      if (targetEl) {
        animEngine.burstFromElement(targetEl, 12, false);
        animEngine.spawnFloatingBadge('+1 MISTAKE', targetEl, 'danger');
      }
    }
  }

  // Physical Keyboard Listener
  window.addEventListener('keydown', (e) => {
    if (!modalWordComplete.classList.contains('hidden')) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btnNextWordWin.click();
      }
      return;
    }
    if (!modalWordFailed.classList.contains('hidden')) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btnNextWordFail.click();
      }
      return;
    }

    if (screenGame.classList.contains('hidden')) return;

    const key = e.key.toUpperCase();
    if (/^[A-Z]$/.test(key) && e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
      handleLetterInput(key);
    }
  });

  // Render Progressive Hangman Figure (Body Parts 1 to 6)
  function renderHangmanFigure(mistakesCount) {
    bodyParts.forEach((partEl, idx) => {
      if (!partEl) return;
      if (idx < mistakesCount) {
        partEl.classList.add('revealed');
        if (mistakesCount >= 6) {
          partEl.classList.add('game-over-part');
        } else {
          partEl.classList.remove('game-over-part');
        }
      } else {
        partEl.classList.remove('revealed');
        partEl.classList.remove('game-over-part');
      }
    });
  }

  // Render Game State
  function renderGameState(state) {
    // HUD Stats
    hudGradeBadge.textContent = `${state.gradeKey.toUpperCase()} • LVL ${state.levelId}`;
    hudWordCount.textContent = state.wordsSolvedInLevel + 1;
    hudWordsToPass.textContent = state.wordsToPass;
    hudScore.textContent = state.totalScore;
    hudStreak.textContent = state.currentStreak;
    hudMistakesCount.textContent = state.mistakesCount;

    if (state.currentStreak >= 3) {
      hudStreakPill.classList.add('streak-active');
    } else {
      hudStreakPill.classList.remove('streak-active');
    }

    // Timer
    if (state.hasTimer) {
      hudTimerContainer.classList.remove('hidden');
      hudTimerText.textContent = `${state.timeRemaining}s`;
      if (state.timeRemaining <= 10) {
        hudTimerContainer.classList.add('timer-warning');
      } else {
        hudTimerContainer.classList.remove('timer-warning');
      }
    } else {
      hudTimerContainer.classList.add('hidden');
    }

    // Render Hangman Figure Body Parts (1 to 6)
    renderHangmanFigure(state.mistakesCount);

    // Category & Clue (Strictly Text)
    categoryText.textContent = `CATEGORY: ${state.category}`;
    clueMainText.textContent = state.clue ? `"${state.clue}"` : `"${state.definition}"`;

    if (state.context && state.context.trim() !== '') {
      clueContextSentence.classList.remove('hidden');
      clueContextSentence.textContent = `Context: "${state.context}"`;
    } else {
      clueContextSentence.classList.add('hidden');
    }

    // Render Word Slot Boxes
    wordSlotsContainer.innerHTML = '';
    state.displayWord.forEach(char => {
      const slot = document.createElement('div');
      slot.className = 'letter-slot';

      if (char === ' ') {
        slot.classList.add('space-slot');
        slot.textContent = '';
      } else if (char === '-') {
        slot.textContent = '-';
        slot.classList.add('revealed');
      } else if (char !== '_') {
        slot.textContent = char;
        slot.classList.add('revealed');
      } else {
        slot.textContent = '';
      }

      wordSlotsContainer.appendChild(slot);
    });

    // Update Keyboard Button States
    updateKeyboardStates(state.guessedLetters, state.correctLetters, state.incorrectLetters);
  }

  // Timer Tick Event
  hangmanEngine.onTimerTick = (timeRemaining, maxTime) => {
    hudTimerText.textContent = `${timeRemaining}s`;
    if (timeRemaining <= 10) {
      hudTimerContainer.classList.add('timer-warning');
    }
  };

  // State Change Listener
  hangmanEngine.onStateChange = (state) => {
    renderGameState(state);
  };

  // Word Solved Callback
  hangmanEngine.onWordComplete = (data) => {
    winWordText.textContent = data.wordObj.word;
    winDefinitionText.textContent = data.wordObj.definition;
    winContextText.textContent = data.wordObj.context ? `"${data.wordObj.context}"` : '';

    winBasePts.textContent = `+${data.basePoints}`;
    winMistakesBonusPts.textContent = `+${data.fewerMistakesBonus} (${data.mistakesCount} Mistakes)`;

    if (data.noHintBonus > 0) {
      winNoHintRow.classList.remove('hidden');
      winNoHintPts.textContent = `+${data.noHintBonus}`;
    } else {
      winNoHintRow.classList.add('hidden');
    }

    if (data.streakBonus > 0) {
      winStreakRow.classList.remove('hidden');
      winStreakPts.textContent = `+${data.streakBonus} (Streak x${data.currentStreak}!)`;
    } else {
      winStreakRow.classList.add('hidden');
    }

    if (data.speedBonus > 0) {
      winSpeedRow.classList.remove('hidden');
      winSpeedPts.textContent = `+${data.speedBonus}`;
    } else {
      winSpeedRow.classList.add('hidden');
    }

    winRoundTotalPts.textContent = `+${data.roundScore} PTS`;

    modalWordComplete.classList.remove('hidden');
    animEngine.createConfetti(65);
  };

  btnNextWordWin.addEventListener('click', () => {
    modalWordComplete.classList.add('hidden');
    hangmanEngine.nextWord();
  });

  // Word Failed Callback ("Almost! / Figure Completed")
  hangmanEngine.onWordFail = (data) => {
    failWordText.textContent = data.wordObj.word;
    failDefinitionText.textContent = data.wordObj.definition;
    failContextText.textContent = data.wordObj.context ? `"${data.wordObj.context}"` : '';

    modalWordFailed.classList.remove('hidden');
  };

  btnRetryWord.addEventListener('click', () => {
    modalWordFailed.classList.add('hidden');
    hangmanEngine.availableWords.push(hangmanEngine.currentWordObj);
    hangmanEngine.nextWord();
  });

  btnNextWordFail.addEventListener('click', () => {
    modalWordFailed.classList.add('hidden');
    hangmanEngine.nextWord();
  });

  // Level Complete Callback
  hangmanEngine.onLevelComplete = (data) => {
    modalWordComplete.classList.add('hidden');
    modalWordFailed.classList.add('hidden');

    lvlStatScore.textContent = `${data.totalScore} PTS`;
    lvlStatAccuracy.textContent = `${data.accuracy}%`;
    lvlStatStreak.textContent = `${data.bestStreak} in a row`;
    lvlStatHints.textContent = `${data.hintsUsed}`;

    modalLevelComplete.classList.remove('hidden');
    animEngine.createConfetti(100);
  };

  btnLvlReplay.addEventListener('click', () => {
    modalLevelComplete.classList.add('hidden');
    startLevelPlay(hangmanEngine.currentLevelId);
  });

  btnNextLevel.addEventListener('click', () => {
    modalLevelComplete.classList.add('hidden');
    const nextLvl = hangmanEngine.currentLevelId + 1;
    startLevelPlay(nextLvl);
  });

  // Grade Complete Callback
  hangmanEngine.onGradeComplete = (data) => {
    modalWordComplete.classList.add('hidden');
    modalLevelComplete.classList.add('hidden');

    gradeFinalScore.textContent = `${data.totalScore} PTS`;
    gradeFinalAccuracy.textContent = `${data.accuracy}%`;
    gradeFinalStreak.textContent = `${data.bestStreak}`;
    gradeFinalHints.textContent = `${data.totalHintsUsed}`;

    modalGradeComplete.classList.remove('hidden');
    animEngine.createConfetti(150);
  };

  btnReplayGrade.addEventListener('click', () => {
    modalGradeComplete.classList.add('hidden');
    selectGrade(hangmanEngine.currentGrade);
  });

  btnSwitchGrade.addEventListener('click', () => {
    modalGradeComplete.classList.add('hidden');
    const nextGrade = hangmanEngine.currentGrade === 'grade7' ? 'grade8' : 'grade7';
    selectGrade(nextGrade);
  });

  // Hint Modal & Actions
  btnOpenHint.addEventListener('click', () => {
    if (hangmanEngine.isRoundOver()) return;
    openHintDrawer();
  });

  function openHintDrawer() {
    hintOptionsContainer.innerHTML = '';
    const isG7 = hangmanEngine.currentGrade === 'grade7';

    if (isG7) {
      const opts = [
        { id: 'revealFirstLetter', label: 'Reveal First Letter', cost: 35 },
        { id: 'revealRandomLetter', label: 'Reveal One Secret Letter', cost: 40 },
        { id: 'showExtraClue', label: 'Show Full Dictionary Definition', cost: 30 }
      ];
      opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'hint-opt-btn';
        btn.innerHTML = `
          <span>💡 ${opt.label}</span>
          <span class="hint-opt-cost">-${opt.cost} PTS</span>
        `;
        btn.addEventListener('click', () => {
          modalHintPicker.classList.add('hidden');
          const res = hangmanEngine.useHint(opt.id);
          if (res && res.hintResult) {
            animEngine.spawnFloatingBadge(`-${res.deduction} HINT`, btnOpenHint, 'warning');
            feedbackMsgBar.className = 'feedback-msg-bar msg-info';
            feedbackMsgBar.textContent = `Hint: ${res.hintResult.text}`;
          }
        });
        hintOptionsContainer.appendChild(btn);
      });
    } else {
      const opts = [
        { id: 'revealRandomLetter', label: 'Reveal One Random Letter', cost: 50 },
        { id: 'removeIncorrect', label: 'Remove 2 Incorrect Keyboard Letters', cost: 45 },
        { id: 'showContextOrDef', label: 'Show Sentence Context / Full Definition', cost: 40 }
      ];
      opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'hint-opt-btn';
        btn.innerHTML = `
          <span>💡 ${opt.label}</span>
          <span class="hint-opt-cost">-${opt.cost} PTS</span>
        `;
        btn.addEventListener('click', () => {
          modalHintPicker.classList.add('hidden');
          const res = hangmanEngine.useHint(opt.id);
          if (res && res.hintResult) {
            animEngine.spawnFloatingBadge(`-${res.deduction} HINT`, btnOpenHint, 'warning');
            feedbackMsgBar.className = 'feedback-msg-bar msg-info';
            feedbackMsgBar.textContent = `Hint: ${res.hintResult.text}`;
          }
        });
        hintOptionsContainer.appendChild(btn);
      });
    }

    modalHintPicker.classList.remove('hidden');
  }

  btnCloseHintModal.addEventListener('click', () => {
    modalHintPicker.classList.add('hidden');
  });

  function closeAllModals() {
    [modalWordComplete, modalWordFailed, modalLevelComplete, modalGradeComplete, modalHintPicker, modalRules].forEach(m => {
      m.classList.add('hidden');
    });
  }
});
