/**
 * WORD PATH - Curriculum & Question Database
 * Grade 7 (A2-A2+) & Grade 8 (A2+-B1)
 * Focus: Word Formation, Suffixes, Prefixes, Parts of Speech, Word Families, Contextual Choice
 */

const STAGE_CONFIG = {
  7: [
    { id: 1, name: "Stage 1: Adjective or Adverb", description: "Choose between adjective (describing nouns) and adverb (describing verbs/actions).", icon: "⚡", tilesCount: 6, hasTimer: false },
    { id: 2, name: "Stage 2: Word Families", description: "Identify the correct form belonging to root word families.", icon: "🌳", tilesCount: 6, hasTimer: false },
    { id: 3, name: "Stage 3: Common Suffixes", description: "Master suffixes like -ly, -ful, -less, -ness, -er, and -ment.", icon: "🧩", tilesCount: 6, hasTimer: false },
    { id: 4, name: "Stage 4: Mixed Word Forms", description: "Distinguish nouns, verbs, adjectives, and adverbs in context.", icon: "🔄", tilesCount: 6, hasTimer: true, timerSeconds: 20 },
    { id: 5, name: "Stage 5: Context Challenge", description: "Analyze longer sentence structures to determine the precise word form.", icon: "🎯", tilesCount: 6, hasTimer: true, timerSeconds: 18 }
  ],
  8: [
    { id: 1, name: "Stage 1: Parts of Speech Mastery", description: "Identify advanced grammatical roles and syntactic positions in sentences.", icon: "🏛️", tilesCount: 6, hasTimer: false },
    { id: 2, name: "Stage 2: Advanced Word Formation", description: "Form abstract nouns, descriptive adjectives, and specialized verbs.", icon: "🔬", tilesCount: 6, hasTimer: true, timerSeconds: 20 },
    { id: 3, name: "Stage 3: Prefixes & Opposites", description: "Use negative and directional prefixes (un-, im-, in-, dis-, re-).", icon: "🧲", tilesCount: 6, hasTimer: true, timerSeconds: 18 },
    { id: 4, name: "Stage 4: Complex Suffixes", description: "Apply advanced suffixes (-tion, -ity, -ive, -ous, -able, -ment).", icon: "⚙️", tilesCount: 6, hasTimer: true, timerSeconds: 16 },
    { id: 5, name: "Stage 5: Context & Nuance", description: "Select the grammatically and contextually correct word form in complex sentences.", icon: "🔍", tilesCount: 6, hasTimer: true, timerSeconds: 15 },
    { id: 6, name: "Stage 6: Master Word Path", description: "The ultimate word formation gauntlet combining all prefixes, suffixes, and word families.", icon: "👑", tilesCount: 7, hasTimer: true, timerSeconds: 14 }
  ]
};

const GRADE_7_QUESTIONS = [
  // ==================== STAGE 1: ADJECTIVE OR ADVERB ====================
  {
    id: "g7_s1_01",
    stage: 1,
    question: "She speaks English ______.",
    options: ["fluent", "fluently", "fluency", "influence"],
    correctAnswer: "fluently",
    partOfSpeech: "Adverb",
    rule: "ADVERB → describes how someone speaks (a verb).",
    explanation: "Fluently is an adverb describing the verb 'speaks'.",
    rootWord: "FLUENT",
    wordFamily: [
      { word: "fluent", pos: "Adjective" },
      { word: "fluently", pos: "Adverb" },
      { word: "fluency", pos: "Noun" }
    ]
  },
  {
    id: "g7_s1_02",
    stage: 1,
    question: "He is a very ______ driver.",
    options: ["careful", "carefully", "carefulness", "caringly"],
    correctAnswer: "careful",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → describes the noun 'driver'.",
    explanation: "Careful is an adjective modifying the noun 'driver'.",
    rootWord: "CARE",
    wordFamily: [
      { word: "care", pos: "Verb / Noun" },
      { word: "careful", pos: "Adjective" },
      { word: "carefully", pos: "Adverb" },
      { word: "careless", pos: "Adjective" }
    ]
  },
  {
    id: "g7_s1_03",
    stage: 1,
    question: "The little boy ran ______ across the playground.",
    options: ["quick", "quickly", "quickness", "quicker"],
    correctAnswer: "quickly",
    partOfSpeech: "Adverb",
    rule: "ADVERB → describes how he ran (a verb).",
    explanation: "Quickly tells us how the boy ran.",
    rootWord: "QUICK",
    wordFamily: [
      { word: "quick", pos: "Adjective" },
      { word: "quickly", pos: "Adverb" },
      { word: "quickness", pos: "Noun" }
    ]
  },
  {
    id: "g7_s1_04",
    stage: 1,
    question: "The classroom was completely ______ during the exam.",
    options: ["silent", "silently", "silence", "silencer"],
    correctAnswer: "silent",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → follows the linking verb 'was' to describe the classroom.",
    explanation: "Silent is an adjective describing the condition of the classroom.",
    rootWord: "SILENT",
    wordFamily: [
      { word: "silent", pos: "Adjective" },
      { word: "silently", pos: "Adverb" },
      { word: "silence", pos: "Noun" }
    ]
  },
  {
    id: "g7_s1_05",
    stage: 1,
    question: "The music was playing too ______ in the room.",
    options: ["loud", "loudly", "loudness", "louder"],
    correctAnswer: "loudly",
    partOfSpeech: "Adverb",
    rule: "ADVERB → describes the verb 'was playing'.",
    explanation: "Loudly describes how the music was playing.",
    rootWord: "LOUD",
    wordFamily: [
      { word: "loud", pos: "Adjective" },
      { word: "loudly", pos: "Adverb" },
      { word: "loudness", pos: "Noun" }
    ]
  },
  {
    id: "g7_s1_06",
    stage: 1,
    question: "We solved the math puzzle ______.",
    options: ["easy", "easily", "easiness", "ease"],
    correctAnswer: "easily",
    partOfSpeech: "Adverb",
    rule: "ADVERB → describes how we solved the puzzle.",
    explanation: "Easily modifies the action verb 'solved'.",
    rootWord: "EASY",
    wordFamily: [
      { word: "easy", pos: "Adjective" },
      { word: "easily", pos: "Adverb" },
      { word: "easiness", pos: "Noun" }
    ]
  },
  {
    id: "g7_s1_07",
    stage: 1,
    question: "They have a very ______ house near the lake.",
    options: ["peaceful", "peacefully", "peace", "peacefulness"],
    correctAnswer: "peaceful",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → describes the noun 'house'.",
    explanation: "Peaceful is an adjective describing what kind of house it is.",
    rootWord: "PEACE",
    wordFamily: [
      { word: "peace", pos: "Noun" },
      { word: "peaceful", pos: "Adjective" },
      { word: "peacefully", pos: "Adverb" }
    ]
  },
  {
    id: "g7_s1_08",
    stage: 1,
    question: "The teacher waited ______ for the students to settle down.",
    options: ["patient", "patiently", "patience", "impatient"],
    correctAnswer: "patiently",
    partOfSpeech: "Adverb",
    rule: "ADVERB → describes how the teacher waited.",
    explanation: "Patiently tells the manner in which the teacher waited.",
    rootWord: "PATIENT",
    wordFamily: [
      { word: "patient", pos: "Adjective / Noun" },
      { word: "patiently", pos: "Adverb" },
      { word: "patience", pos: "Noun" }
    ]
  },
  {
    id: "g7_s1_09",
    stage: 1,
    question: "It was a ______ morning with no clouds in the sky.",
    options: ["clear", "clearly", "clearness", "clarify"],
    correctAnswer: "clear",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → modifies the noun 'morning'.",
    explanation: "Clear is an adjective describing the morning.",
    rootWord: "CLEAR",
    wordFamily: [
      { word: "clear", pos: "Adjective" },
      { word: "clearly", pos: "Adverb" },
      { word: "clarity", pos: "Noun" }
    ]
  },
  {
    id: "g7_s1_10",
    stage: 1,
    question: "The firefighter entered the burning building ______.",
    options: ["brave", "bravely", "bravery", "braver"],
    correctAnswer: "bravely",
    partOfSpeech: "Adverb",
    rule: "ADVERB → describes the action verb 'entered'.",
    explanation: "Bravely describes the manner of entering.",
    rootWord: "BRAVE",
    wordFamily: [
      { word: "brave", pos: "Adjective" },
      { word: "bravely", pos: "Adverb" },
      { word: "bravery", pos: "Noun" }
    ]
  },
  {
    id: "g7_s1_11",
    stage: 1,
    question: "The polite student answered every question ______.",
    options: ["polite", "politely", "politeness", "impolite"],
    correctAnswer: "politely",
    partOfSpeech: "Adverb",
    rule: "ADVERB → describes how the student answered.",
    explanation: "Politely describes the action of answering.",
    rootWord: "POLITE",
    wordFamily: [
      { word: "polite", pos: "Adjective" },
      { word: "politely", pos: "Adverb" },
      { word: "politeness", pos: "Noun" }
    ]
  },
  {
    id: "g7_s1_12",
    stage: 1,
    question: "We had a ______ time at the science fair.",
    options: ["wonderful", "wonderfully", "wonder", "wondering"],
    correctAnswer: "wonderful",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → describes the noun 'time'.",
    explanation: "Wonderful describes the experience (noun).",
    rootWord: "WONDER",
    wordFamily: [
      { word: "wonder", pos: "Noun / Verb" },
      { word: "wonderful", pos: "Adjective" },
      { word: "wonderfully", pos: "Adverb" }
    ]
  },

  // ==================== STAGE 2: WORD FAMILIES ====================
  {
    id: "g7_s2_01",
    stage: 2,
    question: "Her act of ______ touched everyone's heart.",
    options: ["kind", "kindly", "kindness", "kinder"],
    correctAnswer: "kindness",
    partOfSpeech: "Noun",
    rule: "NOUN → needed after preposition 'of' as the object.",
    explanation: "Kindness is the noun form indicating the quality of being kind.",
    rootWord: "KIND",
    wordFamily: [
      { word: "kind", pos: "Adjective" },
      { word: "kindly", pos: "Adverb" },
      { word: "kindness", pos: "Noun" }
    ]
  },
  {
    id: "g7_s2_02",
    stage: 2,
    question: "Our English ______ gave us an exciting assignment.",
    options: ["teach", "teacher", "teachable", "taught"],
    correctAnswer: "teacher",
    partOfSpeech: "Noun",
    rule: "NOUN → person who performs the action (suffix -er).",
    explanation: "Teacher is the person noun for one who teaches.",
    rootWord: "TEACH",
    wordFamily: [
      { word: "teach", pos: "Verb" },
      { word: "teacher", pos: "Noun (Person)" },
      { word: "teaching", pos: "Noun / Gerund" }
    ]
  },
  {
    id: "g7_s2_03",
    stage: 2,
    question: "The ______ of the new computer game took two years.",
    options: ["develop", "development", "developing", "developed"],
    correctAnswer: "development",
    partOfSpeech: "Noun",
    rule: "NOUN → needed after the article 'The' as sentence subject.",
    explanation: "Development is the noun form with suffix -ment.",
    rootWord: "DEVELOP",
    wordFamily: [
      { word: "develop", pos: "Verb" },
      { word: "development", pos: "Noun" },
      { word: "developer", pos: "Noun (Person)" }
    ]
  },
  {
    id: "g7_s2_04",
    stage: 2,
    question: "Thank you for the ______ advice you gave me.",
    options: ["help", "helpful", "helpfully", "helpless"],
    correctAnswer: "helpful",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → describes the noun 'advice'.",
    explanation: "Helpful means full of help, describing the advice.",
    rootWord: "HELP",
    wordFamily: [
      { word: "help", pos: "Verb / Noun" },
      { word: "helpful", pos: "Adjective" },
      { word: "helpfully", pos: "Adverb" },
      { word: "helpless", pos: "Adjective (Opposite)" }
    ]
  },
  {
    id: "g7_s2_05",
    stage: 2,
    question: "True ______ brings peace and satisfaction in life.",
    options: ["happy", "happily", "happiness", "happier"],
    correctAnswer: "happiness",
    partOfSpeech: "Noun",
    rule: "NOUN → needed after adjective 'True' as subject.",
    explanation: "Happiness is the state noun created with suffix -ness.",
    rootWord: "HAPPY",
    wordFamily: [
      { word: "happy", pos: "Adjective" },
      { word: "happily", pos: "Adverb" },
      { word: "happiness", pos: "Noun" }
    ]
  },
  {
    id: "g7_s2_06",
    stage: 2,
    question: "Thomas Edison was a brilliant ______.",
    options: ["invent", "inventor", "invention", "inventive"],
    correctAnswer: "inventor",
    partOfSpeech: "Noun",
    rule: "NOUN (Person) → describes the person who creates inventions.",
    explanation: "Inventor is the person noun for someone who invents.",
    rootWord: "INVENT",
    wordFamily: [
      { word: "invent", pos: "Verb" },
      { word: "inventor", pos: "Noun (Person)" },
      { word: "invention", pos: "Noun (Thing)" },
      { word: "inventive", pos: "Adjective" }
    ]
  },
  {
    id: "g7_s2_07",
    stage: 2,
    question: "They have a long-lasting ______ that started in primary school.",
    options: ["friend", "friendly", "friendship", "friendless"],
    correctAnswer: "friendship",
    partOfSpeech: "Noun",
    rule: "NOUN → describes the relationship between friends.",
    explanation: "Friendship is the abstract noun for the bond between friends.",
    rootWord: "FRIEND",
    wordFamily: [
      { word: "friend", pos: "Noun (Person)" },
      { word: "friendly", pos: "Adjective" },
      { word: "friendship", pos: "Noun (Relationship)" }
    ]
  },
  {
    id: "g7_s2_08",
    stage: 2,
    question: "Walking on thin ice is extremely ______.",
    options: ["danger", "dangerous", "dangerously", "endanger"],
    correctAnswer: "dangerous",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → describes the subject after linking verb 'is'.",
    explanation: "Dangerous is the adjective with suffix -ous.",
    rootWord: "DANGER",
    wordFamily: [
      { word: "danger", pos: "Noun" },
      { word: "dangerous", pos: "Adjective" },
      { word: "dangerously", pos: "Adverb" }
    ]
  },
  {
    id: "g7_s2_09",
    stage: 2,
    question: "The artist admired the natural ______ of the mountain view.",
    options: ["beauty", "beautiful", "beautifully", "beautify"],
    correctAnswer: "beauty",
    partOfSpeech: "Noun",
    rule: "NOUN → direct object after the adjective 'natural'.",
    explanation: "Beauty is the noun naming the quality.",
    rootWord: "BEAUTY",
    wordFamily: [
      { word: "beauty", pos: "Noun" },
      { word: "beautiful", pos: "Adjective" },
      { word: "beautifully", pos: "Adverb" }
    ]
  },
  {
    id: "g7_s2_10",
    stage: 2,
    question: "Higher ______ opens doors to many great opportunities.",
    options: ["educate", "education", "educational", "educator"],
    correctAnswer: "education",
    partOfSpeech: "Noun",
    rule: "NOUN → head noun modified by adjective 'Higher'.",
    explanation: "Education is the noun with suffix -tion.",
    rootWord: "EDUCATE",
    wordFamily: [
      { word: "educate", pos: "Verb" },
      { word: "education", pos: "Noun" },
      { word: "educational", pos: "Adjective" },
      { word: "educator", pos: "Noun (Person)" }
    ]
  },
  {
    id: "g7_s2_11",
    stage: 2,
    question: "She showed great ______ when solving the complex puzzle.",
    options: ["create", "creative", "creatively", "creativity"],
    correctAnswer: "creativity",
    partOfSpeech: "Noun",
    rule: "NOUN → object of the verb 'showed' after adjective 'great'.",
    explanation: "Creativity is the noun describing inventive ability.",
    rootWord: "CREATE",
    wordFamily: [
      { word: "create", pos: "Verb" },
      { word: "creative", pos: "Adjective" },
      { word: "creatively", pos: "Adverb" },
      { word: "creativity", pos: "Noun" }
    ]
  },
  {
    id: "g7_s2_12",
    stage: 2,
    question: "The students cheered with great ______ when they won the trophy.",
    options: ["excite", "excited", "excitement", "excitingly"],
    correctAnswer: "excitement",
    partOfSpeech: "Noun",
    rule: "NOUN → object following preposition 'with' and adjective 'great'.",
    explanation: "Excitement is the noun form denoting enthusiasm and joy.",
    rootWord: "EXCITE",
    wordFamily: [
      { word: "excite", pos: "Verb" },
      { word: "excited", pos: "Adjective" },
      { word: "exciting", pos: "Adjective" },
      { word: "excitement", pos: "Noun" }
    ]
  },

  // ==================== STAGE 3: COMMON SUFFIXES ====================
  {
    id: "g7_s3_01",
    stage: 3,
    question: "The stars shone brightly in the total ______.",
    options: ["dark", "darkly", "darkness", "darken"],
    correctAnswer: "darkness",
    partOfSpeech: "Noun",
    rule: "SUFFIX -ness → turns adjective 'dark' into noun 'darkness'.",
    explanation: "Darkness is a noun meaning the state of being dark.",
    rootWord: "DARK",
    wordFamily: [
      { word: "dark", pos: "Adjective" },
      { word: "darkly", pos: "Adverb" },
      { word: "darkness", pos: "Noun" }
    ]
  },
  {
    id: "g7_s3_02",
    stage: 3,
    question: "Without his glasses, he felt completely ______.",
    options: ["help", "helpful", "helpless", "helpfully"],
    correctAnswer: "helpless",
    partOfSpeech: "Adjective",
    rule: "SUFFIX -less → means 'without' (unable to help oneself).",
    explanation: "Helpless means without power or ability to help oneself.",
    rootWord: "HELP",
    wordFamily: [
      { word: "help", pos: "Verb / Noun" },
      { word: "helpful", pos: "Adjective (+)" },
      { word: "helpless", pos: "Adjective (-)" }
    ]
  },
  {
    id: "g7_s3_03",
    stage: 3,
    question: "The bus ______ safely drove us to the museum.",
    options: ["drive", "driver", "driving", "driven"],
    correctAnswer: "driver",
    partOfSpeech: "Noun",
    rule: "SUFFIX -er → creates person noun who performs the action.",
    explanation: "Driver is the person who drives the bus.",
    rootWord: "DRIVE",
    wordFamily: [
      { word: "drive", pos: "Verb" },
      { word: "driver", pos: "Noun (Person)" },
      { word: "driving", pos: "Noun / Gerund" }
    ]
  },
  {
    id: "g7_s3_04",
    stage: 3,
    question: "Winning the national championship was a huge ______.",
    options: ["achieve", "achievement", "achieving", "achiever"],
    correctAnswer: "achievement",
    partOfSpeech: "Noun",
    rule: "SUFFIX -ment → creates noun expressing an accomplishment.",
    explanation: "Achievement is the noun naming the accomplished goal.",
    rootWord: "ACHIEVE",
    wordFamily: [
      { word: "achieve", pos: "Verb" },
      { word: "achievement", pos: "Noun" },
      { word: "achiever", pos: "Noun (Person)" }
    ]
  },
  {
    id: "g7_s3_05",
    stage: 3,
    question: "We are deeply ______ for all your support.",
    options: ["thank", "thankful", "thankfully", "thankfulness"],
    correctAnswer: "thankful",
    partOfSpeech: "Adjective",
    rule: "SUFFIX -ful → means 'full of' (full of thanks).",
    explanation: "Thankful is an adjective describing our feeling.",
    rootWord: "THANK",
    wordFamily: [
      { word: "thank", pos: "Verb" },
      { word: "thankful", pos: "Adjective" },
      { word: "thankfully", pos: "Adverb" }
    ]
  },
  {
    id: "g7_s3_06",
    stage: 3,
    question: "The injection was fast and completely ______.",
    options: ["pain", "painful", "painless", "painfully"],
    correctAnswer: "painless",
    partOfSpeech: "Adjective",
    rule: "SUFFIX -less → means 'free from pain'.",
    explanation: "Painless means causing no pain whatsoever.",
    rootWord: "PAIN",
    wordFamily: [
      { word: "pain", pos: "Noun" },
      { word: "painful", pos: "Adjective" },
      { word: "painless", pos: "Adjective" }
    ]
  },
  {
    id: "g7_s3_07",
    stage: 3,
    question: "Reading books brings a lot of ______ to my grandmother.",
    options: ["enjoy", "enjoyment", "enjoyable", "enjoyably"],
    correctAnswer: "enjoyment",
    partOfSpeech: "Noun",
    rule: "SUFFIX -ment → forms noun of state/feeling from verb 'enjoy'.",
    explanation: "Enjoyment is the noun describing the feeling of pleasure.",
    rootWord: "ENJOY",
    wordFamily: [
      { word: "enjoy", pos: "Verb" },
      { word: "enjoyment", pos: "Noun" },
      { word: "enjoyable", pos: "Adjective" }
    ]
  },
  {
    id: "g7_s3_08",
    stage: 3,
    question: "A fast ______ won the 100-meter freestyle race.",
    options: ["swim", "swimmer", "swimming", "swam"],
    correctAnswer: "swimmer",
    partOfSpeech: "Noun",
    rule: "SUFFIX -er → indicates person performing the swimming.",
    explanation: "Swimmer is the noun for a person who swims.",
    rootWord: "SWIM",
    wordFamily: [
      { word: "swim", pos: "Verb" },
      { word: "swimmer", pos: "Noun (Person)" },
      { word: "swimming", pos: "Noun / Gerund" }
    ]
  },
  {
    id: "g7_s3_09",
    stage: 3,
    question: "The dessert had the perfect level of ______.",
    options: ["sweet", "sweetly", "sweetness", "sweeten"],
    correctAnswer: "sweetness",
    partOfSpeech: "Noun",
    rule: "SUFFIX -ness → transforms adjective 'sweet' into noun 'sweetness'.",
    explanation: "Sweetness is the noun measuring how sweet something tastes.",
    rootWord: "SWEET",
    wordFamily: [
      { word: "sweet", pos: "Adjective" },
      { word: "sweetly", pos: "Adverb" },
      { word: "sweetness", pos: "Noun" }
    ]
  },
  {
    id: "g7_s3_10",
    stage: 3,
    question: "The famous ______ displayed her new landscape paintings in the gallery.",
    options: ["paint", "painter", "painting", "painted"],
    correctAnswer: "painter",
    partOfSpeech: "Noun",
    rule: "SUFFIX -er → creates noun for the artist who paints.",
    explanation: "Painter is the person noun for an artist creating paintings.",
    rootWord: "PAINT",
    wordFamily: [
      { word: "paint", pos: "Verb / Noun" },
      { word: "painter", pos: "Noun (Person)" },
      { word: "painting", pos: "Noun (Artwork)" }
    ]
  },

  // ==================== STAGE 4: MIXED WORD FORMS ====================
  {
    id: "g7_s4_01",
    stage: 4,
    question: "The children played ______ in the green meadow.",
    options: ["happy", "happiness", "happily", "happier"],
    correctAnswer: "happily",
    partOfSpeech: "Adverb",
    rule: "ADVERB → describes how they played (action verb).",
    explanation: "Happily tells the manner of playing.",
    rootWord: "HAPPY",
    wordFamily: [
      { word: "happy", pos: "Adjective" },
      { word: "happily", pos: "Adverb" },
      { word: "happiness", pos: "Noun" }
    ]
  },
  {
    id: "g7_s4_02",
    stage: 4,
    question: "Good nutrition is necessary for healthy ______.",
    options: ["grow", "growth", "growing", "grown"],
    correctAnswer: "growth",
    partOfSpeech: "Noun",
    rule: "NOUN → needed after adjective 'healthy'.",
    explanation: "Growth is the noun form of the verb grow.",
    rootWord: "GROW",
    wordFamily: [
      { word: "grow", pos: "Verb" },
      { word: "growth", pos: "Noun" },
      { word: "growing", pos: "Adjective / Participle" }
    ]
  },
  {
    id: "g7_s4_03",
    stage: 4,
    question: "The scientist made an important ______ yesterday.",
    options: ["discover", "discovery", "discoverer", "discovering"],
    correctAnswer: "discovery",
    partOfSpeech: "Noun",
    rule: "NOUN → object of the action 'made'.",
    explanation: "Discovery is the noun for the thing found or uncovered.",
    rootWord: "DISCOVER",
    wordFamily: [
      { word: "discover", pos: "Verb" },
      { word: "discovery", pos: "Noun" },
      { word: "discoverer", pos: "Noun (Person)" }
    ]
  },
  {
    id: "g7_s4_04",
    stage: 4,
    question: "She is a very ______ student who always finishes her homework.",
    options: ["responsible", "responsibly", "responsibility", "response"],
    correctAnswer: "responsible",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → modifies the noun 'student'.",
    explanation: "Responsible is the adjective describing the student's character.",
    rootWord: "RESPOND",
    wordFamily: [
      { word: "respond", pos: "Verb" },
      { word: "responsible", pos: "Adjective" },
      { word: "responsibly", pos: "Adverb" },
      { word: "responsibility", pos: "Noun" }
    ]
  },
  {
    id: "g7_s4_05",
    stage: 4,
    question: "The choir sang ______ during the school festival.",
    options: ["beautiful", "beautifully", "beauty", "beauties"],
    correctAnswer: "beautifully",
    partOfSpeech: "Adverb",
    rule: "ADVERB → modifies the past tense verb 'sang'.",
    explanation: "Beautifully describes how the singing sounded.",
    rootWord: "BEAUTY",
    wordFamily: [
      { word: "beauty", pos: "Noun" },
      { word: "beautiful", pos: "Adjective" },
      { word: "beautifully", pos: "Adverb" }
    ]
  },
  {
    id: "g7_s4_06",
    stage: 4,
    question: "We need your ______ on this official document.",
    options: ["sign", "signature", "signed", "signing"],
    correctAnswer: "signature",
    partOfSpeech: "Noun",
    rule: "NOUN → follows possessive 'your' as direct object.",
    explanation: "Signature is the noun for a person's written name.",
    rootWord: "SIGN",
    wordFamily: [
      { word: "sign", pos: "Verb / Noun" },
      { word: "signature", pos: "Noun" }
    ]
  },
  {
    id: "g7_s4_07",
    stage: 4,
    question: "The magician performed an incredible trick ______.",
    options: ["skill", "skillful", "skillfully", "skilled"],
    correctAnswer: "skillfully",
    partOfSpeech: "Adverb",
    rule: "ADVERB → describes how the trick was performed.",
    explanation: "Skillfully tells the manner of performing the trick.",
    rootWord: "SKILL",
    wordFamily: [
      { word: "skill", pos: "Noun" },
      { word: "skillful", pos: "Adjective" },
      { word: "skillfully", pos: "Adverb" }
    ]
  },
  {
    id: "g7_s4_08",
    stage: 4,
    question: "The doctor gave me a clear ______ of what caused the fever.",
    options: ["explain", "explanation", "explanatory", "explaining"],
    correctAnswer: "explanation",
    partOfSpeech: "Noun",
    rule: "NOUN → head noun modified by adjective 'clear'.",
    explanation: "Explanation is the noun form for the clarification given.",
    rootWord: "EXPLAIN",
    wordFamily: [
      { word: "explain", pos: "Verb" },
      { word: "explanation", pos: "Noun" },
      { word: "explanatory", pos: "Adjective" }
    ]
  },

  // ==================== STAGE 5: CONTEXT CHALLENGE ====================
  {
    id: "g7_s5_01",
    stage: 5,
    question: "Although the storm was severe, the crew landed the plane ______.",
    options: ["safe", "safely", "safety", "safeness"],
    correctAnswer: "safely",
    partOfSpeech: "Adverb",
    rule: "ADVERB → describes how the plane was landed.",
    explanation: "Safely modifies the verb 'landed'.",
    rootWord: "SAFE",
    wordFamily: [
      { word: "safe", pos: "Adjective" },
      { word: "safely", pos: "Adverb" },
      { word: "safety", pos: "Noun" }
    ]
  },
  {
    id: "g7_s5_02",
    stage: 5,
    question: "Regular exercise and fresh fruit are ______ for your health.",
    options: ["benefit", "beneficial", "beneficially", "benefactor"],
    correctAnswer: "beneficial",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → predicate adjective describing the subject.",
    explanation: "Beneficial means producing good or helpful results.",
    rootWord: "BENEFIT",
    wordFamily: [
      { word: "benefit", pos: "Noun / Verb" },
      { word: "beneficial", pos: "Adjective" },
      { word: "beneficially", pos: "Adverb" }
    ]
  },
  {
    id: "g7_s5_03",
    stage: 5,
    question: "The new library offers free internet ______ to all students.",
    options: ["connect", "connection", "connecting", "connected"],
    correctAnswer: "connection",
    partOfSpeech: "Noun",
    rule: "NOUN → acts as compound noun with 'internet connection'.",
    explanation: "Connection is the noun formed from the verb connect.",
    rootWord: "CONNECT",
    wordFamily: [
      { word: "connect", pos: "Verb" },
      { word: "connection", pos: "Noun" },
      { word: "connected", pos: "Adjective" }
    ]
  },
  {
    id: "g7_s5_04",
    stage: 5,
    question: "He solved the riddle so ______ that the teacher was impressed.",
    options: ["clever", "cleverly", "cleverness", "cleverest"],
    correctAnswer: "cleverly",
    partOfSpeech: "Adverb",
    rule: "ADVERB → modified by 'so' to describe the action 'solved'.",
    explanation: "Cleverly describes the manner of solving.",
    rootWord: "CLEVER",
    wordFamily: [
      { word: "clever", pos: "Adjective" },
      { word: "cleverly", pos: "Adverb" },
      { word: "cleverness", pos: "Noun" }
    ]
  },
  {
    id: "g7_s5_05",
    stage: 5,
    question: "Wearing a helmet ensures your personal ______ while riding.",
    options: ["safe", "safely", "safety", "safekeeping"],
    correctAnswer: "safety",
    partOfSpeech: "Noun",
    rule: "NOUN → direct object modified by adjective 'personal'.",
    explanation: "Safety is the noun naming the condition of being protected.",
    rootWord: "SAFE",
    wordFamily: [
      { word: "safe", pos: "Adjective" },
      { word: "safely", pos: "Adverb" },
      { word: "safety", pos: "Noun" }
    ]
  },
  {
    id: "g7_s5_06",
    stage: 5,
    question: "The young athlete trained ______ every day before the competition.",
    options: ["hard", "hardly", "hardness", "harder"],
    correctAnswer: "hard",
    partOfSpeech: "Adverb",
    rule: "ADVERB (Irregular) → 'hard' means with great effort; 'hardly' means almost not.",
    explanation: "Hard is the adverb meaning intensely. (Note: hardly means barely).",
    rootWord: "HARD",
    wordFamily: [
      { word: "hard", pos: "Adjective / Adverb" },
      { word: "hardness", pos: "Noun" },
      { word: "harden", pos: "Verb" }
    ]
  },
  {
    id: "g7_s5_07",
    stage: 5,
    question: "Due to foggy weather, the airplane had to land with extreme ______.",
    options: ["caution", "cautious", "cautiously", "cautionary"],
    correctAnswer: "caution",
    partOfSpeech: "Noun",
    rule: "NOUN → object of preposition 'with' modified by adjective 'extreme'.",
    explanation: "Caution is the noun meaning carefulness in the face of danger.",
    rootWord: "CAUTION",
    wordFamily: [
      { word: "caution", pos: "Noun / Verb" },
      { word: "cautious", pos: "Adjective" },
      { word: "cautiously", pos: "Adverb" }
    ]
  },
  {
    id: "g7_s5_08",
    stage: 5,
    question: "The team celebrated their ______ victory at the banquet.",
    options: ["glory", "glorious", "gloriously", "glorify"],
    correctAnswer: "glorious",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → modifies the noun 'victory'.",
    explanation: "Glorious describes a wonderful, triumphant victory.",
    rootWord: "GLORY",
    wordFamily: [
      { word: "glory", pos: "Noun" },
      { word: "glorious", pos: "Adjective" },
      { word: "gloriously", pos: "Adverb" }
    ]
  }
];

const GRADE_8_QUESTIONS = [
  // ==================== STAGE 1: PARTS OF SPEECH MASTERY ====================
  {
    id: "g8_s1_01",
    stage: 1,
    question: "The company announced a significant ______ in annual profits.",
    options: ["grow", "growth", "growing", "grown"],
    correctAnswer: "growth",
    partOfSpeech: "Noun",
    rule: "NOUN → needed after adjective 'significant' as object of verb 'announced'.",
    explanation: "Growth is the noun referring to an increase in size or amount.",
    rootWord: "GROW",
    wordFamily: [
      { word: "grow", pos: "Verb" },
      { word: "growth", pos: "Noun" },
      { word: "growing", pos: "Adjective" }
    ]
  },
  {
    id: "g8_s1_02",
    stage: 1,
    question: "She completed the challenging assignment ______.",
    options: ["success", "successful", "successfully", "succeed"],
    correctAnswer: "successfully",
    partOfSpeech: "Adverb",
    rule: "ADVERB → modifies the complete predicate 'completed the assignment'.",
    explanation: "Successfully is an adverb with suffix -ly modifying completed.",
    rootWord: "SUCCESS",
    wordFamily: [
      { word: "succeed", pos: "Verb" },
      { word: "success", pos: "Noun" },
      { word: "successful", pos: "Adjective" },
      { word: "successfully", pos: "Adverb" }
    ]
  },
  {
    id: "g8_s1_03",
    stage: 1,
    question: "Solar panels are an ______ way to generate clean energy.",
    options: ["effect", "effective", "effectively", "effectiveness"],
    correctAnswer: "effective",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → describes the noun 'way' with suffix -ive.",
    explanation: "Effective is an adjective meaning producing the intended result.",
    rootWord: "EFFECT",
    wordFamily: [
      { word: "effect", pos: "Noun" },
      { word: "effective", pos: "Adjective" },
      { word: "effectively", pos: "Adverb" },
      { word: "effectiveness", pos: "Noun" }
    ]
  },
  {
    id: "g8_s1_04",
    stage: 1,
    question: "The manager praised his staff for their high ______.",
    options: ["produce", "productive", "productively", "productivity"],
    correctAnswer: "productivity",
    partOfSpeech: "Noun",
    rule: "NOUN → abstract noun ending in -ity following adjective 'high'.",
    explanation: "Productivity is the noun measuring rate of production.",
    rootWord: "PRODUCE",
    wordFamily: [
      { word: "produce", pos: "Verb" },
      { word: "product", pos: "Noun" },
      { word: "productive", pos: "Adjective" },
      { word: "productivity", pos: "Noun" }
    ]
  },
  {
    id: "g8_s1_05",
    stage: 1,
    question: "He gave a very ______ speech that inspired the whole audience.",
    options: ["power", "powerful", "powerfully", "powerless"],
    correctAnswer: "powerful",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → modifies the noun 'speech'.",
    explanation: "Powerful is the adjective describing the strength of the speech.",
    rootWord: "POWER",
    wordFamily: [
      { word: "power", pos: "Noun" },
      { word: "powerful", pos: "Adjective" },
      { word: "powerfully", pos: "Adverb" }
    ]
  },
  {
    id: "g8_s1_06",
    stage: 1,
    question: "Please check your calculations ______ before submitting the test.",
    options: ["careful", "carefully", "carefulness", "care"],
    correctAnswer: "carefully",
    partOfSpeech: "Adverb",
    rule: "ADVERB → modifies the imperative verb phrase 'check your calculations'.",
    explanation: "Carefully tells how the calculations should be checked.",
    rootWord: "CARE",
    wordFamily: [
      { word: "care", pos: "Verb / Noun" },
      { word: "careful", pos: "Adjective" },
      { word: "carefully", pos: "Adverb" }
    ]
  },
  {
    id: "g8_s1_07",
    stage: 1,
    question: "The government took immediate ______ to improve road safety.",
    options: ["act", "action", "active", "actively"],
    correctAnswer: "action",
    partOfSpeech: "Noun",
    rule: "NOUN → object of the transitive verb 'took'.",
    explanation: "Action is the noun meaning steps taken to accomplish a purpose.",
    rootWord: "ACT",
    wordFamily: [
      { word: "act", pos: "Verb / Noun" },
      { word: "action", pos: "Noun" },
      { word: "active", pos: "Adjective" },
      { word: "actively", pos: "Adverb" }
    ]
  },
  {
    id: "g8_s1_08",
    stage: 1,
    question: "The scientist examined the ancient fossils ______.",
    options: ["thorough", "thoroughly", "thoroughness", "through"],
    correctAnswer: "thoroughly",
    partOfSpeech: "Adverb",
    rule: "ADVERB → describes the verb 'examined' with great care.",
    explanation: "Thoroughly means in a complete and detailed manner.",
    rootWord: "THOROUGH",
    wordFamily: [
      { word: "thorough", pos: "Adjective" },
      { word: "thoroughly", pos: "Adverb" },
      { word: "thoroughness", pos: "Noun" }
    ]
  },
  {
    id: "g8_s1_09",
    stage: 1,
    question: "She made a valuable ______ to the research project.",
    options: ["contribute", "contribution", "contributor", "contributing"],
    correctAnswer: "contribution",
    partOfSpeech: "Noun",
    rule: "NOUN → head noun modified by adjective 'valuable'.",
    explanation: "Contribution is the noun meaning something given or provided.",
    rootWord: "CONTRIBUTE",
    wordFamily: [
      { word: "contribute", pos: "Verb" },
      { word: "contribution", pos: "Noun" },
      { word: "contributor", pos: "Noun (Person)" }
    ]
  },
  {
    id: "g8_s1_10",
    stage: 1,
    question: "The orchestra delivered an ______ performance last night.",
    options: ["impress", "impressive", "impressively", "impression"],
    correctAnswer: "impressive",
    partOfSpeech: "Adjective",
    rule: "ADJECTIVE → modifies the noun 'performance'.",
    explanation: "Impressive is the adjective denoting great excellence.",
    rootWord: "IMPRESS",
    wordFamily: [
      { word: "impress", pos: "Verb" },
      { word: "impressive", pos: "Adjective" },
      { word: "impressively", pos: "Adverb" },
      { word: "impression", pos: "Noun" }
    ]
  },

  // ==================== STAGE 2: ADVANCED WORD FORMATION ====================
  {
    id: "g8_s2_01",
    stage: 2,
    question: "The architect presented an innovative ______ for the new bridge.",
    options: ["create", "creative", "creativity", "creation"],
    correctAnswer: "creation",
    partOfSpeech: "Noun",
    rule: "NOUN → direct object denoting the finished concrete work.",
    explanation: "Creation refers to the resulting work/design created.",
    rootWord: "CREATE",
    wordFamily: [
      { word: "create", pos: "Verb" },
      { word: "creative", pos: "Adjective" },
      { word: "creation", pos: "Noun (Object)" },
      { word: "creativity", pos: "Noun (Quality)" }
    ]
  },
  {
    id: "g8_s2_02",
    stage: 2,
    question: "Air pollution is an urgent ______ problem in big cities.",
    options: ["environment", "environmental", "environmentally", "environmentalist"],
    correctAnswer: "environmental",
    partOfSpeech: "Adjective",
    rule: "SUFFIX -al → transforms noun 'environment' into adjective.",
    explanation: "Environmental is the adjective modifying 'problem'.",
    rootWord: "ENVIRONMENT",
    wordFamily: [
      { word: "environment", pos: "Noun" },
      { word: "environmental", pos: "Adjective" },
      { word: "environmentally", pos: "Adverb" }
    ]
  },
  {
    id: "g8_s2_03",
    stage: 2,
    question: "The delegates had a heated ______ regarding climate policy.",
    options: ["discuss", "discussion", "discussing", "discussable"],
    correctAnswer: "discussion",
    partOfSpeech: "Noun",
    rule: "SUFFIX -ion → creates noun from verb 'discuss'.",
    explanation: "Discussion is the noun meaning a conversation about a topic.",
    rootWord: "DISCUSS",
    wordFamily: [
      { word: "discuss", pos: "Verb" },
      { word: "discussion", pos: "Noun" }
    ]
  },
  {
    id: "g8_s2_04",
    stage: 2,
    question: "Her remarkable ______ allowed her to master five languages.",
    options: ["able", "ability", "ably", "enable"],
    correctAnswer: "ability",
    partOfSpeech: "Noun",
    rule: "SUFFIX -ity → creates noun from adjective 'able'.",
    explanation: "Ability is the noun expressing the power or skill to do something.",
    rootWord: "ABLE",
    wordFamily: [
      { word: "able", pos: "Adjective" },
      { word: "ability", pos: "Noun" },
      { word: "enable", pos: "Verb" },
      { word: "disabled", pos: "Adjective" }
    ]
  },
  {
    id: "g8_s2_05",
    stage: 2,
    question: "This lightweight plastic bottle is completely ______.",
    options: ["recycle", "recyclable", "recycling", "recycled"],
    correctAnswer: "recyclable",
    partOfSpeech: "Adjective",
    rule: "SUFFIX -able → means capable of being recycled.",
    explanation: "Recyclable is an adjective meaning fit for recycling.",
    rootWord: "RECYCLE",
    wordFamily: [
      { word: "recycle", pos: "Verb" },
      { word: "recyclable", pos: "Adjective" },
      { word: "recycling", pos: "Noun" }
    ]
  },
  {
    id: "g8_s2_06",
    stage: 2,
    question: "The scientist published her ______ findings in a journal.",
    options: ["science", "scientific", "scientifically", "scientist"],
    correctAnswer: "scientific",
    partOfSpeech: "Adjective",
    rule: "SUFFIX -ic → forms adjective modifying 'findings'.",
    explanation: "Scientific is the adjective relating to science.",
    rootWord: "SCIENCE",
    wordFamily: [
      { word: "science", pos: "Noun" },
      { word: "scientific", pos: "Adjective" },
      { word: "scientifically", pos: "Adverb" },
      { word: "scientist", pos: "Noun (Person)" }
    ]
  },
  {
    id: "g8_s2_07",
    stage: 2,
    question: "The museum guide gave us a fascinating ______ of ancient Rome.",
    options: ["describe", "description", "descriptive", "describing"],
    correctAnswer: "description",
    partOfSpeech: "Noun",
    rule: "SUFFIX -tion → creates abstract noun from verb 'describe'.",
    explanation: "Description is the noun meaning a detailed account.",
    rootWord: "DESCRIBE",
    wordFamily: [
      { word: "describe", pos: "Verb" },
      { word: "description", pos: "Noun" },
      { word: "descriptive", pos: "Adjective" }
    ]
  },

  // ==================== STAGE 3: PREFIXES & OPPOSITES ====================
  {
    id: "g8_s3_01",
    stage: 3,
    question: "It is ______ to finish all this homework in just five minutes.",
    options: ["possible", "impossible", "possibility", "possibly"],
    correctAnswer: "impossible",
    partOfSpeech: "Adjective",
    rule: "PREFIX im- → means 'not' before root 'possible'.",
    explanation: "Impossible means not possible; five minutes is not enough time.",
    rootWord: "POSSIBLE",
    wordFamily: [
      { word: "possible", pos: "Adjective" },
      { word: "impossible", pos: "Adjective (Opposite)" },
      { word: "possibility", pos: "Noun" }
    ]
  },
  {
    id: "g8_s3_02",
    stage: 3,
    question: "They strongly ______ with the new club regulations.",
    options: ["agree", "disagree", "agreement", "agreeable"],
    correctAnswer: "disagree",
    partOfSpeech: "Verb",
    rule: "PREFIX dis- → makes the verb opposite (to not agree).",
    explanation: "Disagree means to have a different opinion.",
    rootWord: "AGREE",
    wordFamily: [
      { word: "agree", pos: "Verb" },
      { word: "disagree", pos: "Verb (Opposite)" },
      { word: "agreement", pos: "Noun" }
    ]
  },
  {
    id: "g8_s3_03",
    stage: 3,
    question: "The referee's decision was unfair and totally ______.",
    options: ["justice", "just", "unjust", "justly"],
    correctAnswer: "unjust",
    partOfSpeech: "Adjective",
    rule: "PREFIX un- → creates negative adjective meaning not fair.",
    explanation: "Unjust is a synonym for unfair (prefix un- + just).",
    rootWord: "JUST",
    wordFamily: [
      { word: "just", pos: "Adjective" },
      { word: "unjust", pos: "Adjective (Opposite)" },
      { word: "justice", pos: "Noun" }
    ]
  },
  {
    id: "g8_s3_04",
    stage: 3,
    question: "Microorganisms are ______ to the naked human eye.",
    options: ["visible", "invisible", "visibility", "visibly"],
    correctAnswer: "invisible",
    partOfSpeech: "Adjective",
    rule: "PREFIX in- → means 'not visible'.",
    explanation: "Invisible means unable to be seen without a microscope.",
    rootWord: "VISIBLE",
    wordFamily: [
      { word: "visible", pos: "Adjective" },
      { word: "invisible", pos: "Adjective (Opposite)" },
      { word: "visibility", pos: "Noun" }
    ]
  },
  {
    id: "g8_s3_05",
    stage: 3,
    question: "The author decided to ______ the final chapter of his novel.",
    options: ["write", "rewrite", "writer", "written"],
    correctAnswer: "rewrite",
    partOfSpeech: "Verb",
    rule: "PREFIX re- → means 'to do again'.",
    explanation: "Rewrite means to write something again to improve it.",
    rootWord: "WRITE",
    wordFamily: [
      { word: "write", pos: "Verb" },
      { word: "rewrite", pos: "Verb (Again)" },
      { word: "writer", pos: "Noun (Person)" }
    ]
  },
  {
    id: "g8_s3_06",
    stage: 3,
    question: "Cheating on an exam is fundamentally ______ and wrong.",
    options: ["honest", "dishonest", "honestly", "honesty"],
    correctAnswer: "dishonest",
    partOfSpeech: "Adjective",
    rule: "PREFIX dis- → forms opposite adjective of honest.",
    explanation: "Dishonest means not truthful or fair.",
    rootWord: "HONEST",
    wordFamily: [
      { word: "honest", pos: "Adjective" },
      { word: "dishonest", pos: "Adjective (Opposite)" },
      { word: "honesty", pos: "Noun" }
    ]
  },
  {
    id: "g8_s3_07",
    stage: 3,
    question: "After years of dispute, the neighboring countries began to ______.",
    options: ["connect", "reconnect", "connection", "disconnected"],
    correctAnswer: "reconnect",
    partOfSpeech: "Verb",
    rule: "PREFIX re- → means to connect again after being separated.",
    explanation: "Reconnect means to establish ties again.",
    rootWord: "CONNECT",
    wordFamily: [
      { word: "connect", pos: "Verb" },
      { word: "reconnect", pos: "Verb (Again)" },
      { word: "connection", pos: "Noun" }
    ]
  },

  // ==================== STAGE 4: COMPLEX SUFFIXES ====================
  {
    id: "g8_s4_01",
    stage: 4,
    question: "The teacher asked for a clear ______ of the grammar rule.",
    options: ["explain", "explanation", "explanatory", "explaining"],
    correctAnswer: "explanation",
    partOfSpeech: "Noun",
    rule: "SUFFIX -ation → forms abstract noun from verb 'explain'.",
    explanation: "Explanation is the noun for a statement that makes things clear.",
    rootWord: "EXPLAIN",
    wordFamily: [
      { word: "explain", pos: "Verb" },
      { word: "explanation", pos: "Noun" },
      { word: "explanatory", pos: "Adjective" }
    ]
  },
  {
    id: "g8_s4_02",
    stage: 4,
    question: "The Grand Canyon is known for its ______ rock formations.",
    options: ["glory", "glorious", "glorify", "gloriously"],
    correctAnswer: "glorious",
    partOfSpeech: "Adjective",
    rule: "SUFFIX -ous → forms adjective meaning full of glory / magnificent.",
    explanation: "Glorious describes the impressive natural beauty.",
    rootWord: "GLORY",
    wordFamily: [
      { word: "glory", pos: "Noun" },
      { word: "glorious", pos: "Adjective" },
      { word: "gloriously", pos: "Adverb" }
    ]
  },
  {
    id: "g8_s4_03",
    stage: 4,
    question: "The city council made a major ______ to reduce road traffic.",
    options: ["decide", "decision", "decisive", "decisively"],
    correctAnswer: "decision",
    partOfSpeech: "Noun",
    rule: "SUFFIX -sion → forms noun from root 'decide'.",
    explanation: "Decision is the noun for a choice made after thinking.",
    rootWord: "DECIDE",
    wordFamily: [
      { word: "decide", pos: "Verb" },
      { word: "decision", pos: "Noun" },
      { word: "decisive", pos: "Adjective" }
    ]
  },
  {
    id: "g8_s4_04",
    stage: 4,
    question: "It is ______ to wear sunscreen when the UV index is high.",
    options: ["advise", "advisable", "advice", "advisedly"],
    correctAnswer: "advisable",
    partOfSpeech: "Adjective",
    rule: "SUFFIX -able → forms adjective meaning 'recommended / sensible'.",
    explanation: "Advisable is the adjective meaning wise or sensible to do.",
    rootWord: "ADVISE",
    wordFamily: [
      { word: "advise", pos: "Verb" },
      { word: "advice", pos: "Noun" },
      { word: "advisable", pos: "Adjective" }
    ]
  },
  {
    id: "g8_s4_05",
    stage: 4,
    question: "Good communication helps resolve ______ between friends.",
    options: ["differ", "different", "difference", "differently"],
    correctAnswer: "difference",
    partOfSpeech: "Noun",
    rule: "SUFFIX -ence → creates abstract noun from root 'differ'.",
    explanation: "Difference is the noun representing disagreement or distinction.",
    rootWord: "DIFFER",
    wordFamily: [
      { word: "differ", pos: "Verb" },
      { word: "different", pos: "Adjective" },
      { word: "differently", pos: "Adverb" },
      { word: "difference", pos: "Noun" }
    ]
  },
  {
    id: "g8_s4_06",
    stage: 4,
    question: "The detective conducted an ______ search of the crime scene.",
    options: ["exhaust", "exhaustive", "exhaustingly", "exhaustion"],
    correctAnswer: "exhaustive",
    partOfSpeech: "Adjective",
    rule: "SUFFIX -ive → forms adjective meaning thorough / comprehensive.",
    explanation: "Exhaustive means complete and including everything possible.",
    rootWord: "EXHAUST",
    wordFamily: [
      { word: "exhaust", pos: "Verb" },
      { word: "exhausted", pos: "Adjective (Tired)" },
      { word: "exhaustive", pos: "Adjective (Thorough)" },
      { word: "exhaustion", pos: "Noun" }
    ]
  },
  {
    id: "g8_s4_07",
    stage: 4,
    question: "The manager's ______ leadership inspired the entire engineering department.",
    options: ["create", "creative", "creatively", "creator"],
    correctAnswer: "creative",
    partOfSpeech: "Adjective",
    rule: "SUFFIX -ive → transforms root 'create' into descriptive adjective.",
    explanation: "Creative is the adjective describing imaginative leadership.",
    rootWord: "CREATE",
    wordFamily: [
      { word: "create", pos: "Verb" },
      { word: "creative", pos: "Adjective" },
      { word: "creativity", pos: "Noun" }
    ]
  },

  // ==================== STAGE 5: CONTEXT & NUANCE ====================
  {
    id: "g8_s5_01",
    stage: 5,
    question: "Due to heavy traffic, it was ______ that we would arrive on time.",
    options: ["likely", "unlikely", "likelihood", "like"],
    correctAnswer: "unlikely",
    partOfSpeech: "Adjective",
    rule: "CONTEXT → heavy traffic makes arriving on time not probable.",
    explanation: "Unlikely means not probable, matching the context of heavy traffic.",
    rootWord: "LIKE",
    wordFamily: [
      { word: "likely", pos: "Adjective" },
      { word: "unlikely", pos: "Adjective (Opposite)" },
      { word: "likelihood", pos: "Noun" }
    ]
  },
  {
    id: "g8_s5_02",
    stage: 5,
    question: "The software update greatly improved the computer's ______.",
    options: ["perform", "performance", "performer", "performing"],
    correctAnswer: "performance",
    partOfSpeech: "Noun",
    rule: "SUFFIX -ance → forms noun denoting functioning/efficiency.",
    explanation: "Performance refers to how efficiently the computer operates.",
    rootWord: "PERFORM",
    wordFamily: [
      { word: "perform", pos: "Verb" },
      { word: "performer", pos: "Noun (Person)" },
      { word: "performance", pos: "Noun (Operation)" }
    ]
  },
  {
    id: "g8_s5_03",
    stage: 5,
    question: "Leaving your front door unlocked is completely ______.",
    options: ["responsible", "irresponsible", "responsibility", "responsibly"],
    correctAnswer: "irresponsible",
    partOfSpeech: "Adjective",
    rule: "PREFIX ir- → forms negative adjective meaning careless/unsafe.",
    explanation: "Irresponsible means showing lack of care or good judgment.",
    rootWord: "RESPONSIBLE",
    wordFamily: [
      { word: "responsible", pos: "Adjective" },
      { word: "irresponsible", pos: "Adjective (Opposite)" },
      { word: "responsibility", pos: "Noun" }
    ]
  },
  {
    id: "g8_s5_04",
    stage: 5,
    question: "The young pianist played the complex sonata ______.",
    options: ["flaw", "flawless", "flawlessly", "flawed"],
    correctAnswer: "flawlessly",
    partOfSpeech: "Adverb",
    rule: "SUFFIX -lessly → creates adverb meaning without any mistakes.",
    explanation: "Flawlessly describes the perfect manner of playing.",
    rootWord: "FLAW",
    wordFamily: [
      { word: "flaw", pos: "Noun" },
      { word: "flawless", pos: "Adjective" },
      { word: "flawlessly", pos: "Adverb" }
    ]
  },
  {
    id: "g8_s5_05",
    stage: 5,
    question: "His ______ to admit mistakes made resolving the conflict hard.",
    options: ["refuse", "refusal", "refusing", "refused"],
    correctAnswer: "refusal",
    partOfSpeech: "Noun",
    rule: "SUFFIX -al → transforms verb 'refuse' into noun 'refusal'.",
    explanation: "Refusal is the noun meaning the act of refusing.",
    rootWord: "REFUSE",
    wordFamily: [
      { word: "refuse", pos: "Verb" },
      { word: "refusal", pos: "Noun" }
    ]
  },
  {
    id: "g8_s5_06",
    stage: 5,
    question: "Volunteering at the shelter gave him a deep sense of ______.",
    options: ["satisfy", "satisfaction", "satisfactory", "satisfyingly"],
    correctAnswer: "satisfaction",
    partOfSpeech: "Noun",
    rule: "NOUN → object of preposition 'of' indicating emotional fulfillment.",
    explanation: "Satisfaction is the noun denoting a feeling of fulfillment.",
    rootWord: "SATISFY",
    wordFamily: [
      { word: "satisfy", pos: "Verb" },
      { word: "satisfaction", pos: "Noun" },
      { word: "satisfactory", pos: "Adjective" }
    ]
  },
  {
    id: "g8_s5_07",
    stage: 5,
    question: "Because of incomplete data, the scientist's conclusions were ______.",
    options: ["accurate", "inaccurate", "accurately", "accuracy"],
    correctAnswer: "inaccurate",
    partOfSpeech: "Adjective",
    rule: "PREFIX in- → forms opposite adjective meaning containing mistakes.",
    explanation: "Inaccurate means not correct due to flawed or missing data.",
    rootWord: "ACCURATE",
    wordFamily: [
      { word: "accurate", pos: "Adjective" },
      { word: "inaccurate", pos: "Adjective (Opposite)" },
      { word: "accuracy", pos: "Noun" }
    ]
  },

  // ==================== STAGE 6: MASTER WORD PATH ====================
  {
    id: "g8_s6_01",
    stage: 6,
    question: "The scientist's breakthrough gained ______ recognition.",
    options: ["nation", "national", "international", "internationally"],
    correctAnswer: "international",
    partOfSpeech: "Adjective",
    rule: "PREFIX inter- + SUFFIX -al → creates adjective 'across nations'.",
    explanation: "International is the adjective describing worldwide recognition.",
    rootWord: "NATION",
    wordFamily: [
      { word: "nation", pos: "Noun" },
      { word: "national", pos: "Adjective" },
      { word: "international", pos: "Adjective" },
      { word: "internationally", pos: "Adverb" }
    ]
  },
  {
    id: "g8_s6_02",
    stage: 6,
    question: "Without proper training, operating heavy machinery is ______.",
    options: ["hazard", "hazardous", "hazardously", "hazardless"],
    correctAnswer: "hazardous",
    partOfSpeech: "Adjective",
    rule: "SUFFIX -ous → creates adjective meaning dangerous/risky.",
    explanation: "Hazardous means involving risk or danger.",
    rootWord: "HAZARD",
    wordFamily: [
      { word: "hazard", pos: "Noun" },
      { word: "hazardous", pos: "Adjective" },
      { word: "hazardously", pos: "Adverb" }
    ]
  },
  {
    id: "g8_s6_03",
    stage: 6,
    question: "Her ______ response helped calm down the anxious crowd.",
    options: ["sympathy", "sympathize", "sympathetic", "sympathetically"],
    correctAnswer: "sympathetic",
    partOfSpeech: "Adjective",
    rule: "SUFFIX -etic → forms adjective modifying 'response'.",
    explanation: "Sympathetic describes a compassionate, caring response.",
    rootWord: "SYMPATHY",
    wordFamily: [
      { word: "sympathy", pos: "Noun" },
      { word: "sympathize", pos: "Verb" },
      { word: "sympathetic", pos: "Adjective" },
      { word: "sympathetically", pos: "Adverb" }
    ]
  },
  {
    id: "g8_s6_04",
    stage: 6,
    question: "The medicine provided instant ______ from the sharp headache.",
    options: ["relieve", "relief", "relieving", "relieved"],
    correctAnswer: "relief",
    partOfSpeech: "Noun",
    rule: "NOUN → direct object naming the feeling of freedom from pain.",
    explanation: "Relief is the noun form of the verb relieve.",
    rootWord: "RELIEVE",
    wordFamily: [
      { word: "relieve", pos: "Verb" },
      { word: "relief", pos: "Noun" },
      { word: "relieved", pos: "Adjective" }
    ]
  },
  {
    id: "g8_s6_05",
    stage: 6,
    question: "The detective searched ______ for any clues left in the room.",
    options: ["tireless", "tirelessly", "tired", "tirelessness"],
    correctAnswer: "tirelessly",
    partOfSpeech: "Adverb",
    rule: "SUFFIX -ly on 'tireless' → describes manner of persistent searching.",
    explanation: "Tirelessly means working with endless energy without giving up.",
    rootWord: "TIRE",
    wordFamily: [
      { word: "tire", pos: "Verb" },
      { word: "tired", pos: "Adjective" },
      { word: "tireless", pos: "Adjective" },
      { word: "tirelessly", pos: "Adverb" }
    ]
  },
  {
    id: "g8_s6_06",
    stage: 6,
    question: "Modern aerospace engineers develop engines of incredible ______.",
    options: ["efficient", "efficiently", "efficiency", "inefficient"],
    correctAnswer: "efficiency",
    partOfSpeech: "Noun",
    rule: "SUFFIX -cy → forms abstract noun after preposition 'of'.",
    explanation: "Efficiency is the noun denoting optimal performance with zero waste.",
    rootWord: "EFFICIENT",
    wordFamily: [
      { word: "efficient", pos: "Adjective" },
      { word: "efficiently", pos: "Adverb" },
      { word: "efficiency", pos: "Noun" },
      { word: "inefficient", pos: "Adjective (Opposite)" }
    ]
  },
  {
    id: "g8_s6_07",
    stage: 6,
    question: "The student council president spoke with great ______ and poise.",
    options: ["confident", "confidently", "confidence", "confidential"],
    correctAnswer: "confidence",
    partOfSpeech: "Noun",
    rule: "SUFFIX -ence → forms noun denoting the feeling of trust/assurance.",
    explanation: "Confidence is the noun describing self-assurance.",
    rootWord: "CONFIDE",
    wordFamily: [
      { word: "confide", pos: "Verb" },
      { word: "confident", pos: "Adjective" },
      { word: "confidently", pos: "Adverb" },
      { word: "confidence", pos: "Noun" }
    ]
  },
  {
    id: "g8_s6_08",
    stage: 6,
    question: "The environmental group fought to ______ the ancient forest.",
    options: ["protect", "protection", "protective", "protectively"],
    correctAnswer: "protect",
    partOfSpeech: "Verb",
    rule: "VERB (Infinitive) → needed after infinitive marker 'to'.",
    explanation: "Protect is the base verb form required after 'to'.",
    rootWord: "PROTECT",
    wordFamily: [
      { word: "protect", pos: "Verb" },
      { word: "protection", pos: "Noun" },
      { word: "protective", pos: "Adjective" }
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
