/**
 * WORD PATH - Curriculum & Question Database
 * Grade 7 (A2-A2+) & Grade 8 (A2+-B1)
 * Topic: ADJECTIVES vs ADVERBS ONLY
 * Every question requires choosing between an Adjective and an Adverb form.
 */

const STAGE_CONFIG = {
  "7": [
    {
      "id": 1,
      "name": "Stage 1: Basic Adjectives & Adverbs",
      "description": "Choose between basic adjectives (describing nouns) and -ly adverbs (describing verbs).",
      "icon": "⚡",
      "tilesCount": 6,
      "hasTimer": false
    },
    {
      "id": 2,
      "name": "Stage 2: Classroom & Daily Actions",
      "description": "Identify whether the sentence needs an adjective for a noun or an adverb for an action.",
      "icon": "🏫",
      "tilesCount": 6,
      "hasTimer": false
    },
    {
      "id": 3,
      "name": "Stage 3: Feelings, Manners & Descriptions",
      "description": "Distinguish feelings and qualities from manners of action.",
      "icon": "😊",
      "tilesCount": 6,
      "hasTimer": false
    },
    {
      "id": 4,
      "name": "Stage 4: Rapid Pace Challenge",
      "description": "Fast-paced adjective and adverb identification under time pressure.",
      "icon": "⏱️",
      "tilesCount": 6,
      "hasTimer": true,
      "timerSeconds": 20
    },
    {
      "id": 5,
      "name": "Stage 5: Context Master Path",
      "description": "Master adjective vs adverb context clues in full sentences.",
      "icon": "🎯",
      "tilesCount": 6,
      "hasTimer": true,
      "timerSeconds": 18
    }
  ],
  "8": [
    {
      "id": 1,
      "name": "Stage 1: Action Verbs vs Sense Verbs",
      "description": "Sense and linking verbs (look, sound, taste, smell, feel) vs dynamic action verbs.",
      "icon": "👁️",
      "tilesCount": 6,
      "hasTimer": false
    },
    {
      "id": 2,
      "name": "Stage 2: Irregular & Tricky Forms",
      "description": "Master tricky pairs: fast/fast, hard/hardly, late/lately, good/well, high/highly.",
      "icon": "⚡",
      "tilesCount": 6,
      "hasTimer": false
    },
    {
      "id": 3,
      "name": "Stage 3: Adverbs of Degree & Emphasis",
      "description": "Identify adverbs modifying adjectives vs adjectives modifying nouns.",
      "icon": "📊",
      "tilesCount": 6,
      "hasTimer": true,
      "timerSeconds": 20
    },
    {
      "id": 4,
      "name": "Stage 4: Suffix Nuances & Tricky Pairs",
      "description": "Distinguish tricky adjectives ending in -ly from action adverbs.",
      "icon": "🧩",
      "tilesCount": 6,
      "hasTimer": true,
      "timerSeconds": 18
    },
    {
      "id": 5,
      "name": "Stage 5: Advanced Sentence Contexts",
      "description": "Choose the precise word form in complex academic and descriptive sentences.",
      "icon": "🔍",
      "tilesCount": 6,
      "hasTimer": true,
      "timerSeconds": 16
    },
    {
      "id": 6,
      "name": "Stage 6: Grand Championship Gauntlet",
      "description": "The ultimate adjective vs adverb mastery journey across all patterns.",
      "icon": "👑",
      "tilesCount": 7,
      "hasTimer": true,
      "timerSeconds": 15
    }
  ]
};

const GRADE_7_QUESTIONS = [
  {
    "id": "g7_s1_01",
    "stage": 1,
    "question": "She sings ______ in the school choir.",
    "options": [
      "beautifully",
      "beautiful"
    ],
    "correctAnswer": "beautifully",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how she sings (the verb).",
    "explanation": "'Beautifully' is an adverb describing the action verb 'sings'.",
    "rootWord": "BEAUTY",
    "wordFamily": [
      {
        "word": "beautiful",
        "pos": "Adjective"
      },
      {
        "word": "beautifully",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s1_02",
    "stage": 1,
    "question": "He is a very ______ driver who always obeys the speed limit.",
    "options": [
      "carefully",
      "careful"
    ],
    "correctAnswer": "careful",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'driver'.",
    "explanation": "'Careful' is an adjective that modifies the noun 'driver'.",
    "rootWord": "CARE",
    "wordFamily": [
      {
        "word": "careful",
        "pos": "Adjective"
      },
      {
        "word": "carefully",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s1_03",
    "stage": 1,
    "question": "The little boy ran ______ across the playground.",
    "options": [
      "quickly",
      "quick"
    ],
    "correctAnswer": "quickly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how he ran (the verb).",
    "explanation": "'Quickly' is an adverb telling us the manner in which the boy ran.",
    "rootWord": "QUICK",
    "wordFamily": [
      {
        "word": "quick",
        "pos": "Adjective"
      },
      {
        "word": "quickly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s1_04",
    "stage": 1,
    "question": "The classroom was completely ______ during the final exam.",
    "options": [
      "silently",
      "silent"
    ],
    "correctAnswer": "silent",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → follows the linking verb 'was' to describe the classroom.",
    "explanation": "'Silent' is an adjective describing the condition of the classroom.",
    "rootWord": "SILENCE",
    "wordFamily": [
      {
        "word": "silent",
        "pos": "Adjective"
      },
      {
        "word": "silently",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s1_05",
    "stage": 1,
    "question": "The music was playing too ______ in the living room.",
    "options": [
      "loudly",
      "loud"
    ],
    "correctAnswer": "loudly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes the verb phrase 'was playing'.",
    "explanation": "'Loudly' describes how the music was playing.",
    "rootWord": "LOUD",
    "wordFamily": [
      {
        "word": "loud",
        "pos": "Adjective"
      },
      {
        "word": "loudly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s1_06",
    "stage": 1,
    "question": "We solved the math puzzle ______ in just five minutes.",
    "options": [
      "easy",
      "easily"
    ],
    "correctAnswer": "easily",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how we solved the puzzle.",
    "explanation": "'Easily' is an adverb modifying the action verb 'solved'.",
    "rootWord": "EASY",
    "wordFamily": [
      {
        "word": "easy",
        "pos": "Adjective"
      },
      {
        "word": "easily",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s1_07",
    "stage": 1,
    "question": "They live in a very ______ cottage near the mountain lake.",
    "options": [
      "peaceful",
      "peacefully"
    ],
    "correctAnswer": "peaceful",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes what kind of cottage it is (noun).",
    "explanation": "'Peaceful' is an adjective describing the noun 'cottage'.",
    "rootWord": "PEACE",
    "wordFamily": [
      {
        "word": "peaceful",
        "pos": "Adjective"
      },
      {
        "word": "peacefully",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s1_08",
    "stage": 1,
    "question": "The teacher waited ______ for the students to settle down.",
    "options": [
      "patient",
      "patiently"
    ],
    "correctAnswer": "patiently",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the teacher waited.",
    "explanation": "'Patiently' describes the manner of waiting (verb).",
    "rootWord": "PATIENT",
    "wordFamily": [
      {
        "word": "patient",
        "pos": "Adjective"
      },
      {
        "word": "patiently",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s1_09",
    "stage": 1,
    "question": "It was a ______ day with stormy rain and heavy winds.",
    "options": [
      "terrible",
      "terribly"
    ],
    "correctAnswer": "terrible",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → modifies the noun 'day'.",
    "explanation": "'Terrible' is an adjective describing the noun 'day'.",
    "rootWord": "TERROR",
    "wordFamily": [
      {
        "word": "terrible",
        "pos": "Adjective"
      },
      {
        "word": "terribly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s1_10",
    "stage": 1,
    "question": "She speaks English ______ after living abroad for three years.",
    "options": [
      "fluent",
      "fluently"
    ],
    "correctAnswer": "fluently",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how she speaks (the verb).",
    "explanation": "'Fluently' is an adverb modifying the action verb 'speaks'.",
    "rootWord": "FLUENT",
    "wordFamily": [
      {
        "word": "fluent",
        "pos": "Adjective"
      },
      {
        "word": "fluently",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s1_11",
    "stage": 1,
    "question": "He gave a ______ smile when he met his grandparents.",
    "options": [
      "warm",
      "warmly"
    ],
    "correctAnswer": "warm",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'smile'.",
    "explanation": "'Warm' is an adjective describing what kind of smile it was.",
    "rootWord": "WARM",
    "wordFamily": [
      {
        "word": "warm",
        "pos": "Adjective"
      },
      {
        "word": "warmly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s1_12",
    "stage": 1,
    "question": "The children played ______ in the sandbox all morning.",
    "options": [
      "happy",
      "happily"
    ],
    "correctAnswer": "happily",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the children played (verb).",
    "explanation": "'Happily' is an adverb telling how the action was performed.",
    "rootWord": "HAPPY",
    "wordFamily": [
      {
        "word": "happy",
        "pos": "Adjective"
      },
      {
        "word": "happily",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s2_01",
    "stage": 2,
    "question": "Please listen ______ while the teacher explains the science experiment.",
    "options": [
      "carefully",
      "careful"
    ],
    "correctAnswer": "carefully",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → modifies the imperative verb 'listen'.",
    "explanation": "'Carefully' describes how you should listen.",
    "rootWord": "CARE",
    "wordFamily": [
      {
        "word": "careful",
        "pos": "Adjective"
      },
      {
        "word": "carefully",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s2_02",
    "stage": 2,
    "question": "She is a ______ student who always finishes her homework on time.",
    "options": [
      "seriously",
      "serious"
    ],
    "correctAnswer": "serious",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'student'.",
    "explanation": "'Serious' is an adjective describing the student's personality.",
    "rootWord": "SERIOUS",
    "wordFamily": [
      {
        "word": "serious",
        "pos": "Adjective"
      },
      {
        "word": "seriously",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s2_03",
    "stage": 2,
    "question": "He answered every question ______ on the English quiz.",
    "options": [
      "correctly",
      "correct"
    ],
    "correctAnswer": "correctly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how he answered the questions (verb).",
    "explanation": "'Correctly' is an adverb modifying the verb 'answered'.",
    "rootWord": "CORRECT",
    "wordFamily": [
      {
        "word": "correct",
        "pos": "Adjective"
      },
      {
        "word": "correctly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s2_04",
    "stage": 2,
    "question": "The grandfather clock ticked ______ in the quiet hallway.",
    "options": [
      "slow",
      "slowly"
    ],
    "correctAnswer": "slowly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the clock ticked.",
    "explanation": "'Slowly' tells us the manner of ticking.",
    "rootWord": "SLOW",
    "wordFamily": [
      {
        "word": "slow",
        "pos": "Adjective"
      },
      {
        "word": "slowly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s2_05",
    "stage": 2,
    "question": "They bought a very ______ sofa for their new living room.",
    "options": [
      "comfortable",
      "comfortably"
    ],
    "correctAnswer": "comfortable",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'sofa'.",
    "explanation": "'Comfortable' is an adjective describing the quality of the sofa.",
    "rootWord": "COMFORT",
    "wordFamily": [
      {
        "word": "comfortable",
        "pos": "Adjective"
      },
      {
        "word": "comfortably",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s2_06",
    "stage": 2,
    "question": "She whispered ______ so she would not wake the sleeping baby.",
    "options": [
      "soft",
      "softly"
    ],
    "correctAnswer": "softly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how she whispered (verb).",
    "explanation": "'Softly' modifies the action verb 'whispered'.",
    "rootWord": "SOFT",
    "wordFamily": [
      {
        "word": "soft",
        "pos": "Adjective"
      },
      {
        "word": "softly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s2_07",
    "stage": 2,
    "question": "The midday sun was exceptionally ______ in the summer sky.",
    "options": [
      "bright",
      "brightly"
    ],
    "correctAnswer": "bright",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → follows linking verb 'was' to describe the sun.",
    "explanation": "'Bright' describes the noun 'sun'.",
    "rootWord": "BRIGHT",
    "wordFamily": [
      {
        "word": "bright",
        "pos": "Adjective"
      },
      {
        "word": "brightly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s2_08",
    "stage": 2,
    "question": "He closed the library door ______ so as not to disturb readers.",
    "options": [
      "quiet",
      "quietly"
    ],
    "correctAnswer": "quietly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how he closed the door (verb).",
    "explanation": "'Quietly' is an adverb modifying 'closed'.",
    "rootWord": "QUIET",
    "wordFamily": [
      {
        "word": "quiet",
        "pos": "Adjective"
      },
      {
        "word": "quietly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s2_09",
    "stage": 2,
    "question": "My mother prepared a ______ dinner for our family guests.",
    "options": [
      "delicious",
      "deliciously"
    ],
    "correctAnswer": "delicious",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'dinner'.",
    "explanation": "'Delicious' is an adjective describing what kind of dinner was made.",
    "rootWord": "DELIGHT",
    "wordFamily": [
      {
        "word": "delicious",
        "pos": "Adjective"
      },
      {
        "word": "deliciously",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s2_10",
    "stage": 2,
    "question": "The gymnast moved ______ across the balance beam.",
    "options": [
      "graceful",
      "gracefully"
    ],
    "correctAnswer": "gracefully",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the gymnast moved (verb).",
    "explanation": "'Gracefully' tells how the movement was performed.",
    "rootWord": "GRACE",
    "wordFamily": [
      {
        "word": "graceful",
        "pos": "Adjective"
      },
      {
        "word": "gracefully",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s2_11",
    "stage": 2,
    "question": "The captain made a ______ decision during the storm.",
    "options": [
      "wise",
      "wisely"
    ],
    "correctAnswer": "wise",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'decision'.",
    "explanation": "'Wise' is an adjective describing the decision.",
    "rootWord": "WISDOM",
    "wordFamily": [
      {
        "word": "wise",
        "pos": "Adjective"
      },
      {
        "word": "wisely",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s2_12",
    "stage": 2,
    "question": "The professor explained the math concept ______ on the board.",
    "options": [
      "clear",
      "clearly"
    ],
    "correctAnswer": "clearly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the professor explained (verb).",
    "explanation": "'Clearly' is an adverb modifying the action verb 'explained'.",
    "rootWord": "CLEAR",
    "wordFamily": [
      {
        "word": "clear",
        "pos": "Adjective"
      },
      {
        "word": "clearly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s3_01",
    "stage": 3,
    "question": "The nurse held the newborn baby ______.",
    "options": [
      "gently",
      "gentle"
    ],
    "correctAnswer": "gently",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the nurse held the baby (verb).",
    "explanation": "'Gently' modifies the action verb 'held'.",
    "rootWord": "GENTLE",
    "wordFamily": [
      {
        "word": "gentle",
        "pos": "Adjective"
      },
      {
        "word": "gently",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s3_02",
    "stage": 3,
    "question": "We were very ______ to receive an invitation to the festival.",
    "options": [
      "gladly",
      "glad"
    ],
    "correctAnswer": "glad",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → follows linking verb 'were' to describe our feeling.",
    "explanation": "'Glad' is a predicate adjective describing the subject 'We'.",
    "rootWord": "GLAD",
    "wordFamily": [
      {
        "word": "glad",
        "pos": "Adjective"
      },
      {
        "word": "gladly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s3_03",
    "stage": 3,
    "question": "He smiled ______ when he showed his parents the gold medal.",
    "options": [
      "proudly",
      "proud"
    ],
    "correctAnswer": "proudly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how he smiled (verb).",
    "explanation": "'Proudly' is an adverb telling the manner of smiling.",
    "rootWord": "PRIDE",
    "wordFamily": [
      {
        "word": "proud",
        "pos": "Adjective"
      },
      {
        "word": "proudly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s3_04",
    "stage": 3,
    "question": "The firefighter was exceptionally ______ during the rescue.",
    "options": [
      "bravely",
      "brave"
    ],
    "correctAnswer": "brave",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'firefighter'.",
    "explanation": "'Brave' is an adjective describing the firefighter's character.",
    "rootWord": "BRAVERY",
    "wordFamily": [
      {
        "word": "brave",
        "pos": "Adjective"
      },
      {
        "word": "bravely",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s3_05",
    "stage": 3,
    "question": "The young boy spoke ______ to the bus driver.",
    "options": [
      "politely",
      "polite"
    ],
    "correctAnswer": "politely",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how he spoke (verb).",
    "explanation": "'Politely' describes the manner of speaking.",
    "rootWord": "POLITE",
    "wordFamily": [
      {
        "word": "polite",
        "pos": "Adjective"
      },
      {
        "word": "politely",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s3_06",
    "stage": 3,
    "question": "Those fluffy kittens are really ______.",
    "options": [
      "cutely",
      "cute"
    ],
    "correctAnswer": "cute",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → follows linking verb 'are' to describe the kittens.",
    "explanation": "'Cute' is an adjective describing the kittens.",
    "rootWord": "CUTE",
    "wordFamily": [
      {
        "word": "cute",
        "pos": "Adjective"
      },
      {
        "word": "cutely",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s3_07",
    "stage": 3,
    "question": "She solved the mystery ______ by following the hidden clues.",
    "options": [
      "cleverly",
      "clever"
    ],
    "correctAnswer": "cleverly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how she solved the mystery (verb).",
    "explanation": "'Cleverly' is an adverb modifying 'solved'.",
    "rootWord": "CLEVER",
    "wordFamily": [
      {
        "word": "clever",
        "pos": "Adjective"
      },
      {
        "word": "cleverly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s3_08",
    "stage": 3,
    "question": "The mountain trail was very ______ and rocky.",
    "options": [
      "steeply",
      "steep"
    ],
    "correctAnswer": "steep",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'trail'.",
    "explanation": "'Steep' is an adjective modifying the noun 'trail'.",
    "rootWord": "STEEP",
    "wordFamily": [
      {
        "word": "steep",
        "pos": "Adjective"
      },
      {
        "word": "steeply",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s3_09",
    "stage": 3,
    "question": "The soldiers fought ______ to defend the ancient castle.",
    "options": [
      "bravely",
      "brave"
    ],
    "correctAnswer": "bravely",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the soldiers fought (verb).",
    "explanation": "'Bravely' modifies the action verb 'fought'.",
    "rootWord": "BRAVERY",
    "wordFamily": [
      {
        "word": "brave",
        "pos": "Adjective"
      },
      {
        "word": "bravely",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s3_10",
    "stage": 3,
    "question": "She tied a ______ knot around the package.",
    "options": [
      "tightly",
      "tight"
    ],
    "correctAnswer": "tight",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'knot'.",
    "explanation": "'Tight' is an adjective modifying the noun 'knot'.",
    "rootWord": "TIGHT",
    "wordFamily": [
      {
        "word": "tight",
        "pos": "Adjective"
      },
      {
        "word": "tightly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s3_11",
    "stage": 3,
    "question": "He sighed ______ after hearing the disappointing news.",
    "options": [
      "sadly",
      "sad"
    ],
    "correctAnswer": "sadly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how he sighed (verb).",
    "explanation": "'Sadly' is an adverb telling how the action occurred.",
    "rootWord": "SAD",
    "wordFamily": [
      {
        "word": "sad",
        "pos": "Adjective"
      },
      {
        "word": "sadly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s3_12",
    "stage": 3,
    "question": "The fresh strawberries taste wonderfully ______.",
    "options": [
      "sweetly",
      "sweet"
    ],
    "correctAnswer": "sweet",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → sense verb 'taste' takes a predicate adjective.",
    "explanation": "'Sweet' is an adjective describing the taste of strawberries.",
    "rootWord": "SWEET",
    "wordFamily": [
      {
        "word": "sweet",
        "pos": "Adjective"
      },
      {
        "word": "sweetly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s4_01",
    "stage": 4,
    "question": "The birds chirped ______ in the tall oak tree.",
    "options": [
      "cheerfully",
      "cheerful"
    ],
    "correctAnswer": "cheerfully",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the birds chirped (verb).",
    "explanation": "'Cheerfully' is an adverb modifying 'chirped'.",
    "rootWord": "CHEER",
    "wordFamily": [
      {
        "word": "cheerful",
        "pos": "Adjective"
      },
      {
        "word": "cheerfully",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s4_02",
    "stage": 4,
    "question": "It was a ______ morning in the mountains with frost on the grass.",
    "options": [
      "chillily",
      "chilly"
    ],
    "correctAnswer": "chilly",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'morning'.",
    "explanation": "'Chilly' is an adjective describing the cold temperature of the morning.",
    "rootWord": "CHILL",
    "wordFamily": [
      {
        "word": "chilly",
        "pos": "Adjective"
      }
    ]
  },
  {
    "id": "g7_s4_03",
    "stage": 4,
    "question": "Our school team completed the race ______ despite bad weather.",
    "options": [
      "successfully",
      "successful"
    ],
    "correctAnswer": "successfully",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the team completed the race (verb).",
    "explanation": "'Successfully' is an adverb modifying 'completed'.",
    "rootWord": "SUCCESS",
    "wordFamily": [
      {
        "word": "successful",
        "pos": "Adjective"
      },
      {
        "word": "successfully",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s4_04",
    "stage": 4,
    "question": "The guard gave the visitors a ______ look at the gate.",
    "options": [
      "suspiciously",
      "suspicious"
    ],
    "correctAnswer": "suspicious",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'look'.",
    "explanation": "'Suspicious' describes the type of look given.",
    "rootWord": "SUSPICION",
    "wordFamily": [
      {
        "word": "suspicious",
        "pos": "Adjective"
      },
      {
        "word": "suspiciously",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s4_05",
    "stage": 4,
    "question": "He laughed ______ at the comedian's clever joke.",
    "options": [
      "heartily",
      "hearty"
    ],
    "correctAnswer": "heartily",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how he laughed (verb).",
    "explanation": "'Heartily' is an adverb modifying the action verb 'laughed'.",
    "rootWord": "HEART",
    "wordFamily": [
      {
        "word": "hearty",
        "pos": "Adjective"
      },
      {
        "word": "heartily",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s4_06",
    "stage": 4,
    "question": "We watched a ______ documentary about deep ocean creatures.",
    "options": [
      "fascinatingly",
      "fascinating"
    ],
    "correctAnswer": "fascinating",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'documentary'.",
    "explanation": "'Fascinating' is an adjective describing the film.",
    "rootWord": "FASCINATE",
    "wordFamily": [
      {
        "word": "fascinating",
        "pos": "Adjective"
      },
      {
        "word": "fascinatingly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s4_07",
    "stage": 4,
    "question": "The calm river flowed ______ through the quiet valley.",
    "options": [
      "calmly",
      "calm"
    ],
    "correctAnswer": "calmly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the river flowed (verb).",
    "explanation": "'Calmly' describes the peaceful manner of flowing.",
    "rootWord": "CALM",
    "wordFamily": [
      {
        "word": "calm",
        "pos": "Adjective"
      },
      {
        "word": "calmly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s4_08",
    "stage": 4,
    "question": "The magician gave an ______ performance at the school assembly.",
    "options": [
      "impressively",
      "impressive"
    ],
    "correctAnswer": "impressive",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'performance'.",
    "explanation": "'Impressive' is an adjective modifying 'performance'.",
    "rootWord": "IMPRESS",
    "wordFamily": [
      {
        "word": "impressive",
        "pos": "Adjective"
      },
      {
        "word": "impressively",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s4_09",
    "stage": 4,
    "question": "The winter storm blew ______ across the frozen lake.",
    "options": [
      "fiercely",
      "fierce"
    ],
    "correctAnswer": "fiercely",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the storm blew (verb).",
    "explanation": "'Fiercely' is an adverb modifying the action verb 'blew'.",
    "rootWord": "FIERCE",
    "wordFamily": [
      {
        "word": "fierce",
        "pos": "Adjective"
      },
      {
        "word": "fiercely",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s4_10",
    "stage": 4,
    "question": "The marathon runners felt completely ______ after the finish line.",
    "options": [
      "tiredly",
      "tired"
    ],
    "correctAnswer": "tired",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → follows linking verb 'felt' to describe the runners.",
    "explanation": "'Tired' is a predicate adjective describing the runners' state.",
    "rootWord": "TIRE",
    "wordFamily": [
      {
        "word": "tired",
        "pos": "Adjective"
      },
      {
        "word": "tirelessly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s4_11",
    "stage": 4,
    "question": "The host greeted each guest ______ at the entrance door.",
    "options": [
      "warmly",
      "warm"
    ],
    "correctAnswer": "warmly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the host greeted the guests (verb).",
    "explanation": "'Warmly' modifies the action verb 'greeted'.",
    "rootWord": "WARM",
    "wordFamily": [
      {
        "word": "warm",
        "pos": "Adjective"
      },
      {
        "word": "warmly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s4_12",
    "stage": 4,
    "question": "The math instructions were very ______ and easy to follow.",
    "options": [
      "simply",
      "simple"
    ],
    "correctAnswer": "simple",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → follows linking verb 'were' to describe instructions.",
    "explanation": "'Simple' is an adjective describing the instructions.",
    "rootWord": "SIMPLE",
    "wordFamily": [
      {
        "word": "simple",
        "pos": "Adjective"
      },
      {
        "word": "simply",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s5_01",
    "stage": 5,
    "question": "The skilled artist painted the mountain view ______.",
    "options": [
      "skillfully",
      "skillful"
    ],
    "correctAnswer": "skillfully",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the artist painted (verb).",
    "explanation": "'Skillfully' is an adverb telling how the painting was done.",
    "rootWord": "SKILL",
    "wordFamily": [
      {
        "word": "skillful",
        "pos": "Adjective"
      },
      {
        "word": "skillfully",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s5_02",
    "stage": 5,
    "question": "He is a ______ tennis player who won three junior tournaments.",
    "options": [
      "skillfully",
      "skillful"
    ],
    "correctAnswer": "skillful",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'player'.",
    "explanation": "'Skillful' is an adjective describing the tennis player.",
    "rootWord": "SKILL",
    "wordFamily": [
      {
        "word": "skillful",
        "pos": "Adjective"
      },
      {
        "word": "skillfully",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s5_03",
    "stage": 5,
    "question": "The ballerina danced ______ across the wooden stage floor.",
    "options": [
      "elegantly",
      "elegant"
    ],
    "correctAnswer": "elegantly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the ballerina danced (verb).",
    "explanation": "'Elegantly' modifies the action verb 'danced'.",
    "rootWord": "ELEGANCE",
    "wordFamily": [
      {
        "word": "elegant",
        "pos": "Adjective"
      },
      {
        "word": "elegantly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s5_04",
    "stage": 5,
    "question": "The museum displayed ______ golden statues from ancient Rome.",
    "options": [
      "splendidly",
      "splendid"
    ],
    "correctAnswer": "splendid",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'statues'.",
    "explanation": "'Splendid' is an adjective describing the magnificent statues.",
    "rootWord": "SPLENDOR",
    "wordFamily": [
      {
        "word": "splendid",
        "pos": "Adjective"
      },
      {
        "word": "splendidly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s5_05",
    "stage": 5,
    "question": "The secretary typed the urgent letter ______ on her computer.",
    "options": [
      "swiftly",
      "swift"
    ],
    "correctAnswer": "swiftly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how she typed the letter (verb).",
    "explanation": "'Swiftly' is an adverb modifying 'typed'.",
    "rootWord": "SWIFT",
    "wordFamily": [
      {
        "word": "swift",
        "pos": "Adjective"
      },
      {
        "word": "swiftly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s5_06",
    "stage": 5,
    "question": "The science museum tour was both fun and ______ for all students.",
    "options": [
      "educationally",
      "educational"
    ],
    "correctAnswer": "educational",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'tour'.",
    "explanation": "'Educational' is an adjective describing the tour.",
    "rootWord": "EDUCATE",
    "wordFamily": [
      {
        "word": "educational",
        "pos": "Adjective"
      },
      {
        "word": "educationally",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s5_07",
    "stage": 5,
    "question": "The black cat crept ______ towards the bird on the fence.",
    "options": [
      "stealthily",
      "stealthy"
    ],
    "correctAnswer": "stealthily",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the cat crept (verb).",
    "explanation": "'Stealthily' is an adverb telling how the cat moved.",
    "rootWord": "STEALTH",
    "wordFamily": [
      {
        "word": "stealthy",
        "pos": "Adjective"
      },
      {
        "word": "stealthily",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s5_08",
    "stage": 5,
    "question": "It was an ______ mistake that anyone could have made in that rush.",
    "options": [
      "honestly",
      "honest"
    ],
    "correctAnswer": "honest",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'mistake'.",
    "explanation": "'Honest' is an adjective describing the mistake.",
    "rootWord": "HONEST",
    "wordFamily": [
      {
        "word": "honest",
        "pos": "Adjective"
      },
      {
        "word": "honestly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s5_09",
    "stage": 5,
    "question": "The customer service agent answered the phone ______.",
    "options": [
      "promptly",
      "prompt"
    ],
    "correctAnswer": "promptly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the agent answered (verb).",
    "explanation": "'Promptly' is an adverb modifying 'answered'.",
    "rootWord": "PROMPT",
    "wordFamily": [
      {
        "word": "prompt",
        "pos": "Adjective"
      },
      {
        "word": "promptly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s5_10",
    "stage": 5,
    "question": "The winter night outside was ______ freezing and pitch black.",
    "options": [
      "terrible",
      "terribly"
    ],
    "correctAnswer": "terribly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → modifies the adjective 'freezing'.",
    "explanation": "'Terribly' is an adverb of degree modifying the adjective 'freezing'.",
    "rootWord": "TERROR",
    "wordFamily": [
      {
        "word": "terrible",
        "pos": "Adjective"
      },
      {
        "word": "terribly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s5_11",
    "stage": 5,
    "question": "The speaker gave a ______ summary of the entire novel.",
    "options": [
      "brief",
      "briefly"
    ],
    "correctAnswer": "brief",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE → describes the noun 'summary'.",
    "explanation": "'Brief' is an adjective describing the short summary.",
    "rootWord": "BRIEF",
    "wordFamily": [
      {
        "word": "brief",
        "pos": "Adjective"
      },
      {
        "word": "briefly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g7_s5_12",
    "stage": 5,
    "question": "The astronaut stepped ______ down the ladder onto the lunar dirt.",
    "options": [
      "cautious",
      "cautiously"
    ],
    "correctAnswer": "cautiously",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB → describes how the astronaut stepped (verb).",
    "explanation": "'Cautiously' is an adverb describing the careful manner of movement.",
    "rootWord": "CAUTION",
    "wordFamily": [
      {
        "word": "cautious",
        "pos": "Adjective"
      },
      {
        "word": "cautiously",
        "pos": "Adverb"
      }
    ]
  }
];

const GRADE_8_QUESTIONS = [
  {
    "id": "g8_s1_01",
    "stage": 1,
    "question": "The hot tomato soup smells ______ with fresh basil.",
    "options": [
      "delicious",
      "deliciously"
    ],
    "correctAnswer": "delicious",
    "partOfSpeech": "Adjective",
    "rule": "SENSE VERB 'smells' takes a predicate ADJECTIVE.",
    "explanation": "'Delicious' describes the quality of the soup, not an action.",
    "rootWord": "DELIGHT",
    "wordFamily": [
      {
        "word": "delicious",
        "pos": "Adjective"
      },
      {
        "word": "deliciously",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s1_02",
    "stage": 1,
    "question": "The starving puppy ate the food ______ from its bowl.",
    "options": [
      "greedy",
      "greedily"
    ],
    "correctAnswer": "greedily",
    "partOfSpeech": "Adverb",
    "rule": "ACTION VERB 'ate' requires an ADVERB of manner.",
    "explanation": "'Greedily' describes how the puppy performed the action of eating.",
    "rootWord": "GREED",
    "wordFamily": [
      {
        "word": "greedy",
        "pos": "Adjective"
      },
      {
        "word": "greedily",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s1_03",
    "stage": 1,
    "question": "Your floral perfume smells very ______ and fresh.",
    "options": [
      "sweet",
      "sweetly"
    ],
    "correctAnswer": "sweet",
    "partOfSpeech": "Adjective",
    "rule": "LINKING / SENSE VERB 'smells' takes an ADJECTIVE.",
    "explanation": "'Sweet' is a predicate adjective modifying the subject 'perfume'.",
    "rootWord": "SWEET",
    "wordFamily": [
      {
        "word": "sweet",
        "pos": "Adjective"
      },
      {
        "word": "sweetly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s1_04",
    "stage": 1,
    "question": "The soprano sang ______ at the opera house.",
    "options": [
      "sweet",
      "sweetly"
    ],
    "correctAnswer": "sweetly",
    "partOfSpeech": "Adverb",
    "rule": "ACTION VERB 'sang' takes an ADVERB to describe the singing.",
    "explanation": "'Sweetly' describes the manner in which the soprano sang.",
    "rootWord": "SWEET",
    "wordFamily": [
      {
        "word": "sweet",
        "pos": "Adjective"
      },
      {
        "word": "sweetly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s1_05",
    "stage": 1,
    "question": "Her explanation sounded completely ______ to the whole committee.",
    "options": [
      "convincing",
      "convincingly"
    ],
    "correctAnswer": "convincing",
    "partOfSpeech": "Adjective",
    "rule": "LINKING VERB 'sounded' connects to a predicate ADJECTIVE.",
    "explanation": "'Convincing' is an adjective describing 'explanation'.",
    "rootWord": "CONVINCE",
    "wordFamily": [
      {
        "word": "convincing",
        "pos": "Adjective"
      },
      {
        "word": "convincingly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s1_06",
    "stage": 1,
    "question": "The attorney argued ______ before the judge and jury.",
    "options": [
      "convincing",
      "convincingly"
    ],
    "correctAnswer": "convincingly",
    "partOfSpeech": "Adverb",
    "rule": "ACTION VERB 'argued' is modified by an ADVERB.",
    "explanation": "'Convincingly' describes how the lawyer presented the case.",
    "rootWord": "CONVINCE",
    "wordFamily": [
      {
        "word": "convincing",
        "pos": "Adjective"
      },
      {
        "word": "convincingly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s1_07",
    "stage": 1,
    "question": "The new school blazer looks very ______ on you.",
    "options": [
      "smart",
      "smartly"
    ],
    "correctAnswer": "smart",
    "partOfSpeech": "Adjective",
    "rule": "SENSE VERB 'looks' takes a predicate ADJECTIVE.",
    "explanation": "'Smart' describes your appearance in the blazer.",
    "rootWord": "SMART",
    "wordFamily": [
      {
        "word": "smart",
        "pos": "Adjective"
      },
      {
        "word": "smartly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s1_08",
    "stage": 1,
    "question": "He dressed ______ in a dark suit for his job interview.",
    "options": [
      "smart",
      "smartly"
    ],
    "correctAnswer": "smartly",
    "partOfSpeech": "Adverb",
    "rule": "ACTION VERB 'dressed' is modified by an ADVERB.",
    "explanation": "'Smartly' tells us how he dressed for the occasion.",
    "rootWord": "SMART",
    "wordFamily": [
      {
        "word": "smart",
        "pos": "Adjective"
      },
      {
        "word": "smartly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s1_09",
    "stage": 1,
    "question": "The smooth velvet curtain feels remarkably ______ to the touch.",
    "options": [
      "smooth",
      "smoothly"
    ],
    "correctAnswer": "smooth",
    "partOfSpeech": "Adjective",
    "rule": "SENSE VERB 'feels' takes a predicate ADJECTIVE.",
    "explanation": "'Smooth' describes the physical texture of the velvet.",
    "rootWord": "SMOOTH",
    "wordFamily": [
      {
        "word": "smooth",
        "pos": "Adjective"
      },
      {
        "word": "smoothly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s1_10",
    "stage": 1,
    "question": "The airplane landed ______ despite the sudden gust of wind.",
    "options": [
      "smooth",
      "smoothly"
    ],
    "correctAnswer": "smoothly",
    "partOfSpeech": "Adverb",
    "rule": "ACTION VERB 'landed' is modified by an ADVERB.",
    "explanation": "'Smoothly' describes how the landing action occurred.",
    "rootWord": "SMOOTH",
    "wordFamily": [
      {
        "word": "smooth",
        "pos": "Adjective"
      },
      {
        "word": "smoothly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s1_11",
    "stage": 1,
    "question": "The patients looked ______ while waiting for the doctor.",
    "options": [
      "anxious",
      "anxiously"
    ],
    "correctAnswer": "anxious",
    "partOfSpeech": "Adjective",
    "rule": "LINKING VERB 'looked' connects to the predicate ADJECTIVE.",
    "explanation": "'Anxious' describes the emotional state of the patients.",
    "rootWord": "ANXIETY",
    "wordFamily": [
      {
        "word": "anxious",
        "pos": "Adjective"
      },
      {
        "word": "anxiously",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s1_12",
    "stage": 1,
    "question": "She glanced ______ at the ticking wall clock during the test.",
    "options": [
      "anxious",
      "anxiously"
    ],
    "correctAnswer": "anxiously",
    "partOfSpeech": "Adverb",
    "rule": "ACTION VERB 'glanced' requires an ADVERB of manner.",
    "explanation": "'Anxiously' describes the way she glanced at the clock.",
    "rootWord": "ANXIETY",
    "wordFamily": [
      {
        "word": "anxious",
        "pos": "Adjective"
      },
      {
        "word": "anxiously",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s2_01",
    "stage": 2,
    "question": "He studies very ______ every evening to pass his exams.",
    "options": [
      "hard",
      "hardly"
    ],
    "correctAnswer": "hard",
    "partOfSpeech": "Adverb",
    "rule": "HARD (adverb) = with great effort. ('Hardly' means almost not).",
    "explanation": "'Hard' is the correct adverb meaning with energetic effort.",
    "rootWord": "HARD",
    "wordFamily": [
      {
        "word": "hard",
        "pos": "Adjective / Adverb"
      },
      {
        "word": "hardly",
        "pos": "Adverb (Almost not)"
      }
    ]
  },
  {
    "id": "g8_s2_02",
    "stage": 2,
    "question": "There was so much noise that I could ______ hear the speaker.",
    "options": [
      "hard",
      "hardly"
    ],
    "correctAnswer": "hardly",
    "partOfSpeech": "Adverb",
    "rule": "HARDLY (adverb) = barely or almost not at all.",
    "explanation": "'Hardly' means with great difficulty or almost not.",
    "rootWord": "HARD",
    "wordFamily": [
      {
        "word": "hard",
        "pos": "Adjective / Adverb"
      },
      {
        "word": "hardly",
        "pos": "Adverb (Almost not)"
      }
    ]
  },
  {
    "id": "g8_s2_03",
    "stage": 2,
    "question": "She is a ______ runner who holds the district record.",
    "options": [
      "fast",
      "fastly"
    ],
    "correctAnswer": "fast",
    "partOfSpeech": "Adjective",
    "rule": "FAST is both adjective and adverb (the word 'fastly' does not exist in English).",
    "explanation": "'Fast' is an adjective modifying the noun 'runner'.",
    "rootWord": "FAST",
    "wordFamily": [
      {
        "word": "fast",
        "pos": "Adjective / Adverb"
      }
    ]
  },
  {
    "id": "g8_s2_04",
    "stage": 2,
    "question": "The cheetah can sprint remarkably ______ across the grassland.",
    "options": [
      "fastly",
      "fast"
    ],
    "correctAnswer": "fast",
    "partOfSpeech": "Adverb",
    "rule": "FAST is the adverb form describing speed ('fastly' is incorrect).",
    "explanation": "'Fast' modifies the verb 'sprint'.",
    "rootWord": "FAST",
    "wordFamily": [
      {
        "word": "fast",
        "pos": "Adjective / Adverb"
      }
    ]
  },
  {
    "id": "g8_s2_05",
    "stage": 2,
    "question": "She speaks Spanish very ______ because her mother is from Madrid.",
    "options": [
      "well",
      "good"
    ],
    "correctAnswer": "well",
    "partOfSpeech": "Adverb",
    "rule": "WELL is the adverb of manner modifying the verb 'speaks'.",
    "explanation": "'Well' describes how she speaks (good is an adjective).",
    "rootWord": "GOOD",
    "wordFamily": [
      {
        "word": "good",
        "pos": "Adjective"
      },
      {
        "word": "well",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s2_06",
    "stage": 2,
    "question": "He is a ______ tennis player with excellent technique.",
    "options": [
      "well",
      "good"
    ],
    "correctAnswer": "good",
    "partOfSpeech": "Adjective",
    "rule": "GOOD is an adjective describing the noun 'player'.",
    "explanation": "'Good' modifies the noun 'player'.",
    "rootWord": "GOOD",
    "wordFamily": [
      {
        "word": "good",
        "pos": "Adjective"
      },
      {
        "word": "well",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s2_07",
    "stage": 2,
    "question": "The evening train arrived ______ due to heavy track maintenance.",
    "options": [
      "late",
      "lately"
    ],
    "correctAnswer": "late",
    "partOfSpeech": "Adverb",
    "rule": "LATE (adverb) = after the scheduled time. ('Lately' means recently).",
    "explanation": "'Late' indicates arriving past the scheduled arrival time.",
    "rootWord": "LATE",
    "wordFamily": [
      {
        "word": "late",
        "pos": "Adjective / Adverb"
      },
      {
        "word": "lately",
        "pos": "Adverb (Recently)"
      }
    ]
  },
  {
    "id": "g8_s2_08",
    "stage": 2,
    "question": "Have you read any thrilling mystery novels ______?",
    "options": [
      "late",
      "lately"
    ],
    "correctAnswer": "lately",
    "partOfSpeech": "Adverb",
    "rule": "LATELY (adverb) = in recent times / recently.",
    "explanation": "'Lately' means recently in time.",
    "rootWord": "LATE",
    "wordFamily": [
      {
        "word": "late",
        "pos": "Adjective / Adverb"
      },
      {
        "word": "lately",
        "pos": "Adverb (Recently)"
      }
    ]
  },
  {
    "id": "g8_s2_09",
    "stage": 2,
    "question": "The mountain hawk soared ______ above the rocky peaks.",
    "options": [
      "high",
      "highly"
    ],
    "correctAnswer": "high",
    "partOfSpeech": "Adverb",
    "rule": "HIGH (adverb) = at a great altitude in physical space.",
    "explanation": "'High' describes physical altitude above the ground.",
    "rootWord": "HIGH",
    "wordFamily": [
      {
        "word": "high",
        "pos": "Adjective / Adverb"
      },
      {
        "word": "highly",
        "pos": "Adverb (To a high degree)"
      }
    ]
  },
  {
    "id": "g8_s2_10",
    "stage": 2,
    "question": "The head scientist is ______ respected by her colleagues worldwide.",
    "options": [
      "high",
      "highly"
    ],
    "correctAnswer": "highly",
    "partOfSpeech": "Adverb",
    "rule": "HIGHLY (adverb) = to a high degree / very much.",
    "explanation": "'Highly' modifies the adjective/participle 'respected'.",
    "rootWord": "HIGH",
    "wordFamily": [
      {
        "word": "high",
        "pos": "Adjective / Adverb"
      },
      {
        "word": "highly",
        "pos": "Adverb (To a high degree)"
      }
    ]
  },
  {
    "id": "g8_s2_11",
    "stage": 2,
    "question": "The submarine dived ______ into the dark oceanic trench.",
    "options": [
      "deep",
      "deeply"
    ],
    "correctAnswer": "deep",
    "partOfSpeech": "Adverb",
    "rule": "DEEP (adverb) = to a great physical distance down.",
    "explanation": "'Deep' refers to physical depth beneath the surface.",
    "rootWord": "DEEP",
    "wordFamily": [
      {
        "word": "deep",
        "pos": "Adjective / Adverb"
      },
      {
        "word": "deeply",
        "pos": "Adverb (Emotionally / profoundly)"
      }
    ]
  },
  {
    "id": "g8_s2_12",
    "stage": 2,
    "question": "We were ______ moved by the violinist's emotional concert.",
    "options": [
      "deep",
      "deeply"
    ],
    "correctAnswer": "deeply",
    "partOfSpeech": "Adverb",
    "rule": "DEEPLY (adverb) = profoundly or intensely on an emotional level.",
    "explanation": "'Deeply' modifies the participle 'moved'.",
    "rootWord": "DEEP",
    "wordFamily": [
      {
        "word": "deep",
        "pos": "Adjective / Adverb"
      },
      {
        "word": "deeply",
        "pos": "Adverb (Profoundly)"
      }
    ]
  },
  {
    "id": "g8_s3_01",
    "stage": 3,
    "question": "The physics competition was ______ challenging for all contestants.",
    "options": [
      "extremely",
      "extreme"
    ],
    "correctAnswer": "extremely",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB OF DEGREE modifies the adjective 'challenging'.",
    "explanation": "'Extremely' intensifies the adjective 'challenging'.",
    "rootWord": "EXTREME",
    "wordFamily": [
      {
        "word": "extreme",
        "pos": "Adjective"
      },
      {
        "word": "extremely",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s3_02",
    "stage": 3,
    "question": "They had to endure ______ cold weather at the South Pole.",
    "options": [
      "extremely",
      "extreme"
    ],
    "correctAnswer": "extreme",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun phrase 'cold weather'.",
    "explanation": "'Extreme' is an adjective modifying 'cold weather'.",
    "rootWord": "EXTREME",
    "wordFamily": [
      {
        "word": "extreme",
        "pos": "Adjective"
      },
      {
        "word": "extremely",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s3_03",
    "stage": 3,
    "question": "Her mathematical calculation was ______ correct.",
    "options": [
      "absolutely",
      "absolute"
    ],
    "correctAnswer": "absolutely",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB OF DEGREE modifies the adjective 'correct'.",
    "explanation": "'Absolutely' tells to what degree the answer was correct.",
    "rootWord": "ABSOLUTE",
    "wordFamily": [
      {
        "word": "absolute",
        "pos": "Adjective"
      },
      {
        "word": "absolutely",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s3_04",
    "stage": 3,
    "question": "The king held ______ power throughout his realm.",
    "options": [
      "absolutely",
      "absolute"
    ],
    "correctAnswer": "absolute",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'power'.",
    "explanation": "'Absolute' is an adjective modifying the noun 'power'.",
    "rootWord": "ABSOLUTE",
    "wordFamily": [
      {
        "word": "absolute",
        "pos": "Adjective"
      },
      {
        "word": "absolutely",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s3_05",
    "stage": 3,
    "question": "The weather in December was ______ mild this season.",
    "options": [
      "unusually",
      "unusual"
    ],
    "correctAnswer": "unusually",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the adjective 'mild'.",
    "explanation": "'Unusually' modifies the adjective 'mild' to show degree.",
    "rootWord": "USUAL",
    "wordFamily": [
      {
        "word": "unusual",
        "pos": "Adjective"
      },
      {
        "word": "unusually",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s3_06",
    "stage": 3,
    "question": "The archaeologists found an ______ artifact buried under the sand.",
    "options": [
      "unusually",
      "unusual"
    ],
    "correctAnswer": "unusual",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'artifact'.",
    "explanation": "'Unusual' is an adjective describing what kind of artifact was found.",
    "rootWord": "USUAL",
    "wordFamily": [
      {
        "word": "unusual",
        "pos": "Adjective"
      },
      {
        "word": "unusually",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s3_07",
    "stage": 3,
    "question": "Her test score was ______ higher than last semester.",
    "options": [
      "significantly",
      "significant"
    ],
    "correctAnswer": "significantly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the comparative adjective 'higher'.",
    "explanation": "'Significantly' is an adverb of degree modifying 'higher'.",
    "rootWord": "SIGNIFICANCE",
    "wordFamily": [
      {
        "word": "significant",
        "pos": "Adjective"
      },
      {
        "word": "significantly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s3_08",
    "stage": 3,
    "question": "The school announced a ______ change in the daily timetable.",
    "options": [
      "significantly",
      "significant"
    ],
    "correctAnswer": "significant",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'change'.",
    "explanation": "'Significant' describes the importance of the change.",
    "rootWord": "SIGNIFICANCE",
    "wordFamily": [
      {
        "word": "significant",
        "pos": "Adjective"
      },
      {
        "word": "significantly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s3_09",
    "stage": 3,
    "question": "The hikers were ______ exhausted after climbing for eight hours.",
    "options": [
      "completely",
      "complete"
    ],
    "correctAnswer": "completely",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the adjective 'exhausted'.",
    "explanation": "'Completely' is an adverb of degree modifying 'exhausted'.",
    "rootWord": "COMPLETE",
    "wordFamily": [
      {
        "word": "complete",
        "pos": "Adjective"
      },
      {
        "word": "completely",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s3_10",
    "stage": 3,
    "question": "She provided a ______ list of all historical dates required.",
    "options": [
      "completely",
      "complete"
    ],
    "correctAnswer": "complete",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'list'.",
    "explanation": "'Complete' is an adjective modifying the noun 'list'.",
    "rootWord": "COMPLETE",
    "wordFamily": [
      {
        "word": "complete",
        "pos": "Adjective"
      },
      {
        "word": "completely",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s3_11",
    "stage": 3,
    "question": "The solar car is ______ energy efficient on sunny days.",
    "options": [
      "remarkably",
      "remarkable"
    ],
    "correctAnswer": "remarkably",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the compound adjective 'energy efficient'.",
    "explanation": "'Remarkably' describes the degree of efficiency.",
    "rootWord": "REMARK",
    "wordFamily": [
      {
        "word": "remarkable",
        "pos": "Adjective"
      },
      {
        "word": "remarkably",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s3_12",
    "stage": 3,
    "question": "The young pianist demonstrated ______ talent in the competition.",
    "options": [
      "remarkably",
      "remarkable"
    ],
    "correctAnswer": "remarkable",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'talent'.",
    "explanation": "'Remarkable' is an adjective modifying the noun 'talent'.",
    "rootWord": "REMARK",
    "wordFamily": [
      {
        "word": "remarkable",
        "pos": "Adjective"
      },
      {
        "word": "remarkably",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s4_01",
    "stage": 4,
    "question": "The local villagers welcomed the tourists in a very ______ way.",
    "options": [
      "friendly",
      "friendlily"
    ],
    "correctAnswer": "friendly",
    "partOfSpeech": "Adjective",
    "rule": "FRIENDLY is an ADJECTIVE ending in -ly describing the noun 'way'.",
    "explanation": "'Friendly' is an adjective (English rarely uses 'friendlily').",
    "rootWord": "FRIEND",
    "wordFamily": [
      {
        "word": "friendly",
        "pos": "Adjective"
      }
    ]
  },
  {
    "id": "g8_s4_02",
    "stage": 4,
    "question": "The garden looks exceptionally ______ in the morning light.",
    "options": [
      "lovelily",
      "lovely"
    ],
    "correctAnswer": "lovely",
    "partOfSpeech": "Adjective",
    "rule": "LOVELY is an ADJECTIVE ending in -ly after linking verb 'looks'.",
    "explanation": "'Lovely' is an adjective describing the appearance of the garden.",
    "rootWord": "LOVE",
    "wordFamily": [
      {
        "word": "lovely",
        "pos": "Adjective"
      }
    ]
  },
  {
    "id": "g8_s4_03",
    "stage": 4,
    "question": "The detective organized the clues ______ to find the culprit.",
    "options": [
      "logically",
      "logical"
    ],
    "correctAnswer": "logically",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'organized'.",
    "explanation": "'Logically' describes how the detective organized the clues.",
    "rootWord": "LOGIC",
    "wordFamily": [
      {
        "word": "logical",
        "pos": "Adjective"
      },
      {
        "word": "logically",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s4_04",
    "stage": 4,
    "question": "He presented a ______ argument that convinced everyone.",
    "options": [
      "logically",
      "logical"
    ],
    "correctAnswer": "logical",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'argument'.",
    "explanation": "'Logical' is an adjective modifying 'argument'.",
    "rootWord": "LOGIC",
    "wordFamily": [
      {
        "word": "logical",
        "pos": "Adjective"
      },
      {
        "word": "logically",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s4_05",
    "stage": 4,
    "question": "The guard dog growled ______ when the intruder approached.",
    "options": [
      "menacingly",
      "menacing"
    ],
    "correctAnswer": "menacingly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'growled'.",
    "explanation": "'Menacingly' describes the threatening manner of growling.",
    "rootWord": "MENACE",
    "wordFamily": [
      {
        "word": "menacing",
        "pos": "Adjective"
      },
      {
        "word": "menacingly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s4_06",
    "stage": 4,
    "question": "The dark storm clouds presented a ______ sight over the bay.",
    "options": [
      "menacingly",
      "menacing"
    ],
    "correctAnswer": "menacing",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'sight'.",
    "explanation": "'Menacing' is an adjective describing the clouds.",
    "rootWord": "MENACE",
    "wordFamily": [
      {
        "word": "menacing",
        "pos": "Adjective"
      },
      {
        "word": "menacingly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s4_07",
    "stage": 4,
    "question": "The gymnast performed a ______ routine with zero errors.",
    "options": [
      "flawless",
      "flawlessly"
    ],
    "correctAnswer": "flawless",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'routine'.",
    "explanation": "'Flawless' is an adjective describing the perfect routine.",
    "rootWord": "FLAW",
    "wordFamily": [
      {
        "word": "flawless",
        "pos": "Adjective"
      },
      {
        "word": "flawlessly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s4_08",
    "stage": 4,
    "question": "The orchestra executed the complex piece ______.",
    "options": [
      "flawless",
      "flawlessly"
    ],
    "correctAnswer": "flawlessly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'executed'.",
    "explanation": "'Flawlessly' tells how the piece was played.",
    "rootWord": "FLAW",
    "wordFamily": [
      {
        "word": "flawless",
        "pos": "Adjective"
      },
      {
        "word": "flawlessly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s4_09",
    "stage": 4,
    "question": "The factory fumes created a ______ polluted atmosphere.",
    "options": [
      "heavily",
      "heavy"
    ],
    "correctAnswer": "heavily",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the participial adjective 'polluted'.",
    "explanation": "'Heavily' is an adverb of degree modifying 'polluted'.",
    "rootWord": "HEAVY",
    "wordFamily": [
      {
        "word": "heavy",
        "pos": "Adjective"
      },
      {
        "word": "heavily",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s4_10",
    "stage": 4,
    "question": "The delivery truck was carrying a ______ iron load.",
    "options": [
      "heavily",
      "heavy"
    ],
    "correctAnswer": "heavy",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'load'.",
    "explanation": "'Heavy' is an adjective modifying the noun 'load'.",
    "rootWord": "HEAVY",
    "wordFamily": [
      {
        "word": "heavy",
        "pos": "Adjective"
      },
      {
        "word": "heavily",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s4_11",
    "stage": 4,
    "question": "The teenager drove ______ on the slippery mountain pass.",
    "options": [
      "recklessly",
      "reckless"
    ],
    "correctAnswer": "recklessly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'drove'.",
    "explanation": "'Recklessly' describes the dangerous manner of driving.",
    "rootWord": "RECKLESS",
    "wordFamily": [
      {
        "word": "reckless",
        "pos": "Adjective"
      },
      {
        "word": "recklessly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s4_12",
    "stage": 4,
    "question": "His ______ behavior put everyone in the vehicle in danger.",
    "options": [
      "recklessly",
      "reckless"
    ],
    "correctAnswer": "reckless",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'behavior'.",
    "explanation": "'Reckless' is an adjective modifying 'behavior'.",
    "rootWord": "RECKLESS",
    "wordFamily": [
      {
        "word": "reckless",
        "pos": "Adjective"
      },
      {
        "word": "recklessly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s5_01",
    "stage": 5,
    "question": "The brain surgeon operated ______ to remove the tumor.",
    "options": [
      "delicately",
      "delicate"
    ],
    "correctAnswer": "delicately",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'operated'.",
    "explanation": "'Delicately' describes the precise and careful manner of surgery.",
    "rootWord": "DELICATE",
    "wordFamily": [
      {
        "word": "delicate",
        "pos": "Adjective"
      },
      {
        "word": "delicately",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s5_02",
    "stage": 5,
    "question": "The antique glass vase is extremely ______ and breakable.",
    "options": [
      "delicately",
      "delicate"
    ],
    "correctAnswer": "delicate",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE follows linking verb 'is' to describe the vase.",
    "explanation": "'Delicate' is an adjective describing the fragility of the vase.",
    "rootWord": "DELICATE",
    "wordFamily": [
      {
        "word": "delicate",
        "pos": "Adjective"
      },
      {
        "word": "delicately",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s5_03",
    "stage": 5,
    "question": "The company responded ______ to the customer's complaint.",
    "options": [
      "professionally",
      "professional"
    ],
    "correctAnswer": "professionally",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'responded'.",
    "explanation": "'Professionally' describes how the response was conducted.",
    "rootWord": "PROFESSION",
    "wordFamily": [
      {
        "word": "professional",
        "pos": "Adjective"
      },
      {
        "word": "professionally",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s4_04",
    "stage": 5,
    "question": "She is a highly ______ architect with twenty years of experience.",
    "options": [
      "professionally",
      "professional"
    ],
    "correctAnswer": "professional",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'architect'.",
    "explanation": "'Professional' describes the competence of the architect.",
    "rootWord": "PROFESSION",
    "wordFamily": [
      {
        "word": "professional",
        "pos": "Adjective"
      },
      {
        "word": "professionally",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s5_05",
    "stage": 5,
    "question": "The robotics team solved the obstacle challenge ______.",
    "options": [
      "innovatively",
      "innovative"
    ],
    "correctAnswer": "innovatively",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'solved'.",
    "explanation": "'Innovatively' describes the creative manner of problem solving.",
    "rootWord": "INNOVATE",
    "wordFamily": [
      {
        "word": "innovative",
        "pos": "Adjective"
      },
      {
        "word": "innovatively",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s5_06",
    "stage": 5,
    "question": "The engineers created an ______ solar desalination device.",
    "options": [
      "innovatively",
      "innovative"
    ],
    "correctAnswer": "innovative",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'device'.",
    "explanation": "'Innovative' is an adjective modifying 'device'.",
    "rootWord": "INNOVATE",
    "wordFamily": [
      {
        "word": "innovative",
        "pos": "Adjective"
      },
      {
        "word": "innovatively",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s5_07",
    "stage": 5,
    "question": "The company's renewable energy production increased ______ this year.",
    "options": [
      "dramatically",
      "dramatic"
    ],
    "correctAnswer": "dramatically",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the verb 'increased'.",
    "explanation": "'Dramatically' tells how rapid and large the increase was.",
    "rootWord": "DRAMA",
    "wordFamily": [
      {
        "word": "dramatic",
        "pos": "Adjective"
      },
      {
        "word": "dramatically",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s5_08",
    "stage": 5,
    "question": "There was a ______ sunset over the coastal mountains.",
    "options": [
      "dramatically",
      "dramatic"
    ],
    "correctAnswer": "dramatic",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'sunset'.",
    "explanation": "'Dramatic' is an adjective describing the vivid sunset.",
    "rootWord": "DRAMA",
    "wordFamily": [
      {
        "word": "dramatic",
        "pos": "Adjective"
      },
      {
        "word": "dramatically",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s5_09",
    "stage": 5,
    "question": "The environmentalist spoke ______ about ocean conservation.",
    "options": [
      "passionately",
      "passionate"
    ],
    "correctAnswer": "passionately",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'spoke'.",
    "explanation": "'Passionately' describes the heartfelt manner of speaking.",
    "rootWord": "PASSION",
    "wordFamily": [
      {
        "word": "passionate",
        "pos": "Adjective"
      },
      {
        "word": "passionately",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s5_10",
    "stage": 5,
    "question": "She has a ______ interest in wildlife photography.",
    "options": [
      "passionately",
      "passionate"
    ],
    "correctAnswer": "passionate",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'interest'.",
    "explanation": "'Passionate' is an adjective describing the intensity of interest.",
    "rootWord": "PASSION",
    "wordFamily": [
      {
        "word": "passionate",
        "pos": "Adjective"
      },
      {
        "word": "passionately",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s5_11",
    "stage": 5,
    "question": "The excited children waited ______ for the festival parade to start.",
    "options": [
      "eagerly",
      "eager"
    ],
    "correctAnswer": "eagerly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'waited'.",
    "explanation": "'Eagerly' tells how the children waited.",
    "rootWord": "EAGER",
    "wordFamily": [
      {
        "word": "eager",
        "pos": "Adjective"
      },
      {
        "word": "eagerly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s5_12",
    "stage": 5,
    "question": "The students were ______ to begin their science experiment.",
    "options": [
      "eagerly",
      "eager"
    ],
    "correctAnswer": "eager",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE follows linking verb 'were' to describe the students.",
    "explanation": "'Eager' is a predicate adjective modifying 'students'.",
    "rootWord": "EAGER",
    "wordFamily": [
      {
        "word": "eager",
        "pos": "Adjective"
      },
      {
        "word": "eagerly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s6_01",
    "stage": 6,
    "question": "The philharmonic orchestra played Beethoven's fifth symphony ______.",
    "options": [
      "magnificently",
      "magnificent"
    ],
    "correctAnswer": "magnificently",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'played'.",
    "explanation": "'Magnificently' describes the splendid execution of the music.",
    "rootWord": "MAGNIFICENCE",
    "wordFamily": [
      {
        "word": "magnificent",
        "pos": "Adjective"
      },
      {
        "word": "magnificently",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s6_02",
    "stage": 6,
    "question": "The ancient stone palace is a ______ architectural achievement.",
    "options": [
      "magnificently",
      "magnificent"
    ],
    "correctAnswer": "magnificent",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'achievement'.",
    "explanation": "'Magnificent' is an adjective modifying 'achievement'.",
    "rootWord": "MAGNIFICENCE",
    "wordFamily": [
      {
        "word": "magnificent",
        "pos": "Adjective"
      },
      {
        "word": "magnificently",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s6_03",
    "stage": 6,
    "question": "The forensic investigator examined every detail ______.",
    "options": [
      "thoroughly",
      "thorough"
    ],
    "correctAnswer": "thoroughly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'examined'.",
    "explanation": "'Thoroughly' tells the complete and careful way the exam was done.",
    "rootWord": "THOROUGH",
    "wordFamily": [
      {
        "word": "thorough",
        "pos": "Adjective"
      },
      {
        "word": "thoroughly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s6_04",
    "stage": 6,
    "question": "She conducted a ______ review of all financial records.",
    "options": [
      "thoroughly",
      "thorough"
    ],
    "correctAnswer": "thorough",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'review'.",
    "explanation": "'Thorough' describes the detailed quality of the review.",
    "rootWord": "THOROUGH",
    "wordFamily": [
      {
        "word": "thorough",
        "pos": "Adjective"
      },
      {
        "word": "thoroughly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s6_05",
    "stage": 6,
    "question": "The automated robotic arm performs its tasks ______ without errors.",
    "options": [
      "consistently",
      "consistent"
    ],
    "correctAnswer": "consistently",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'performs'.",
    "explanation": "'Consistently' describes the regular, steady performance.",
    "rootWord": "CONSISTENCY",
    "wordFamily": [
      {
        "word": "consistent",
        "pos": "Adjective"
      },
      {
        "word": "consistently",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s6_06",
    "stage": 6,
    "question": "His academic scores have been ______ throughout the academic year.",
    "options": [
      "consistently",
      "consistent"
    ],
    "correctAnswer": "consistent",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE follows linking verb 'have been' to describe scores.",
    "explanation": "'Consistent' is a predicate adjective describing 'scores'.",
    "rootWord": "CONSISTENCY",
    "wordFamily": [
      {
        "word": "consistent",
        "pos": "Adjective"
      },
      {
        "word": "consistently",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s6_07",
    "stage": 6,
    "question": "The mountaineer held ______ onto the icy rope during the descent.",
    "options": [
      "firmly",
      "firm"
    ],
    "correctAnswer": "firmly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'held'.",
    "explanation": "'Firmly' describes the tight, secure manner of holding.",
    "rootWord": "FIRM",
    "wordFamily": [
      {
        "word": "firm",
        "pos": "Adjective"
      },
      {
        "word": "firmly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s6_08",
    "stage": 6,
    "question": "The partners formed a ______ agreement before starting the project.",
    "options": [
      "firmly",
      "firm"
    ],
    "correctAnswer": "firm",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'agreement'.",
    "explanation": "'Firm' describes the solid quality of the agreement.",
    "rootWord": "FIRM",
    "wordFamily": [
      {
        "word": "firm",
        "pos": "Adjective"
      },
      {
        "word": "firmly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s6_09",
    "stage": 6,
    "question": "The medical volunteers worked ______ to help the injured victims.",
    "options": [
      "tirelessly",
      "tireless"
    ],
    "correctAnswer": "tirelessly",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'worked'.",
    "explanation": "'Tirelessly' describes working with unyielding energy.",
    "rootWord": "TIRE",
    "wordFamily": [
      {
        "word": "tireless",
        "pos": "Adjective"
      },
      {
        "word": "tirelessly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s6_10",
    "stage": 6,
    "question": "Her ______ dedication transformed the community library.",
    "options": [
      "tirelessly",
      "tireless"
    ],
    "correctAnswer": "tireless",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'dedication'.",
    "explanation": "'Tireless' is an adjective modifying the noun 'dedication'.",
    "rootWord": "TIRE",
    "wordFamily": [
      {
        "word": "tireless",
        "pos": "Adjective"
      },
      {
        "word": "tirelessly",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s6_11",
    "stage": 6,
    "question": "Modern electric motors run ______ with minimal battery drain.",
    "options": [
      "efficiently",
      "efficient"
    ],
    "correctAnswer": "efficiently",
    "partOfSpeech": "Adverb",
    "rule": "ADVERB modifies the action verb 'run'.",
    "explanation": "'Efficiently' describes how the motors operate.",
    "rootWord": "EFFICIENCY",
    "wordFamily": [
      {
        "word": "efficient",
        "pos": "Adjective"
      },
      {
        "word": "efficiently",
        "pos": "Adverb"
      }
    ]
  },
  {
    "id": "g8_s6_12",
    "stage": 6,
    "question": "The school installed an ______ solar heating system on the roof.",
    "options": [
      "efficiently",
      "efficient"
    ],
    "correctAnswer": "efficient",
    "partOfSpeech": "Adjective",
    "rule": "ADJECTIVE describes the noun 'system'.",
    "explanation": "'Efficient' is an adjective describing the solar system.",
    "rootWord": "EFFICIENCY",
    "wordFamily": [
      {
        "word": "efficient",
        "pos": "Adjective"
      },
      {
        "word": "efficiently",
        "pos": "Adverb"
      }
    ]
  }
];

function getQuestionsForGradeAndStage(grade, stage) {
  const pool = grade === 7 ? GRADE_7_QUESTIONS : GRADE_8_QUESTIONS;
  return pool.filter(q => q.stage === stage);
}

function getStagesForGrade(grade) {
  return STAGE_CONFIG[grade] || STAGE_CONFIG[7];
}
