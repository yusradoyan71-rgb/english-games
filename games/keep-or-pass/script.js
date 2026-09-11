/**
 * Keep or Pass — Game Script
 * Team-based English Grammar Strategy Game with Procedural Web Audio
 * Featuring 100+ Grade 7 Grammar Questions + 100+ Grade 8 Grammar Questions
 * Full KEEP / PASS transfer mechanics, randomized answer choices, and session non-repetition.
 */

// ==========================================
// 1. GRADE 7 GRAMMAR QUESTION BANK (110+ CURATED QUESTIONS)
// ==========================================
const GRADE_7_QUESTIONS = [
  // --- Simple Present & Habits ---
  {
    question: "Sarah usually ___ to school by bicycle, but today she is taking the bus.",
    options: ["goes", "go", "is going", "went"],
    answer: "goes",
    category: "Simple Present",
    grade: 7
  },
  {
    question: "My father ___ coffee in the morning; he prefers drinking hot tea.",
    options: ["doesn't drink", "don't drink", "isn't drinking", "not drink"],
    answer: "doesn't drink",
    category: "Simple Present Negative",
    grade: 7
  },
  {
    question: "___ your brother play the electric guitar in the school band?",
    options: ["Does", "Do", "Is", "Are"],
    answer: "Does",
    category: "Simple Present Questions",
    grade: 7
  },
  {
    question: "Water ___ at 100 degrees Celsius under normal atmospheric pressure.",
    options: ["boils", "boil", "is boiling", "boiled"],
    answer: "boils",
    category: "General Facts",
    grade: 7
  },
  {
    question: "How often ___ they visit their grandparents in the countryside?",
    options: ["do", "does", "are", "have"],
    answer: "do",
    category: "Frequency Questions",
    grade: 7
  },
  {
    question: "Leo is very punctual; he is ___ late for his morning classes.",
    options: ["never", "always", "usually", "often"],
    answer: "never",
    category: "Adverbs of Frequency",
    grade: 7
  },
  {
    question: "Which sentence has the CORRECT adverb of frequency word order?",
    options: [
      "She always eats breakfast before leaving.",
      "She eats always breakfast before leaving.",
      "Always she eats breakfast before leaving.",
      "She eats breakfast always before leaving."
    ],
    answer: "She always eats breakfast before leaving.",
    category: "Adverb Word Order",
    grade: 7
  },

  // --- Present Continuous & At the Moment ---
  {
    question: "Listen! Somebody ___ on the front door.",
    options: ["is knocking", "knocks", "knock", "are knocking"],
    answer: "is knocking",
    category: "Present Continuous",
    grade: 7
  },
  {
    question: "Right now, the students ___ a science experiment in the laboratory.",
    options: ["are conducting", "conduct", "is conducting", "conducted"],
    answer: "are conducting",
    category: "Present Continuous",
    grade: 7
  },
  {
    question: "Why ___ you wearing a heavy coat on such a warm sunny day?",
    options: ["are", "do", "is", "have"],
    answer: "are",
    category: "Present Continuous Questions",
    grade: 7
  },
  {
    question: "Look at the baby! She ___ her very first steps.",
    options: ["is taking", "takes", "take", "are taking"],
    answer: "is taking",
    category: "Present Continuous",
    grade: 7
  },
  {
    question: "Quiet please! The principal ___ an important announcement over the intercom.",
    options: ["is making", "makes", "make", "made"],
    answer: "is making",
    category: "Present Continuous",
    grade: 7
  },

  // --- Simple Past & Irregular Verbs ---
  {
    question: "Yesterday afternoon, we ___ a thrilling basketball tournament match.",
    options: ["watched", "watch", "are watching", "watches"],
    answer: "watched",
    category: "Simple Past Regular",
    grade: 7
  },
  {
    question: "Elena ___ to Paris with her family during the last winter holiday.",
    options: ["went", "goes", "gone", "goed"],
    answer: "went",
    category: "Simple Past Irregular",
    grade: 7
  },
  {
    question: "He ___ his keys on the kitchen table two hours ago.",
    options: ["left", "leaves", "leaved", "is leaving"],
    answer: "left",
    category: "Simple Past Irregular",
    grade: 7
  },
  {
    question: "They ___ not enjoy the horror movie because it was too scary.",
    options: ["did", "do", "were", "are"],
    answer: "did",
    category: "Simple Past Negative",
    grade: 7
  },
  {
    question: "What time ___ you arrive at the airport last night?",
    options: ["did", "do", "were", "have"],
    answer: "did",
    category: "Simple Past Questions",
    grade: 7
  },
  {
    question: "Maya ___ a beautiful handmade birthday card for her best friend.",
    options: ["bought", "buyed", "buys", "is buying"],
    answer: "bought",
    category: "Simple Past Irregular",
    grade: 7
  },
  {
    question: "Kenji ___ his arm while playing soccer in the park last Sunday.",
    options: ["broke", "breaked", "breaks", "broken"],
    answer: "broke",
    category: "Simple Past Irregular",
    grade: 7
  },
  {
    question: "The teacher ___ the grammar rules clearly to the whole class yesterday.",
    options: ["explained", "explains", "explain", "is explaining"],
    answer: "explained",
    category: "Simple Past Regular",
    grade: 7
  },

  // --- To Be: am / is / are / was / were ---
  {
    question: "Where ___ you at eight o'clock yesterday evening?",
    options: ["were", "was", "are", "did"],
    answer: "were",
    category: "Past of To Be",
    grade: 7
  },
  {
    question: "Neither of the boys ___ at school yesterday because they were ill.",
    options: ["was", "were", "are", "did"],
    answer: "was",
    category: "Subject-Verb Agreement",
    grade: 7
  },
  {
    question: "The weather ___ cold and stormy last weekend, so we stayed home.",
    options: ["was", "is", "were", "did"],
    answer: "was",
    category: "Past of To Be",
    grade: 7
  },
  {
    question: "___ there any fresh oranges left in the fruit basket?",
    options: ["Are", "Is", "Do", "Does"],
    answer: "Are",
    category: "There is / There are",
    grade: 7
  },
  {
    question: "There ___ a large historical monument in the center of the town square.",
    options: ["is", "are", "were", "be"],
    answer: "is",
    category: "There is / There are",
    grade: 7
  },
  {
    question: "There ___ no computers in classrooms a hundred years ago.",
    options: ["were", "was", "are", "did"],
    answer: "were",
    category: "There was / There were",
    grade: 7
  },

  // --- Modals: can, can't, could, should, must, have to ---
  {
    question: "You ___ touch the hot stove burner; you will burn your fingers!",
    options: ["mustn't", "must", "can", "should"],
    answer: "mustn't",
    category: "Modals of Prohibition",
    grade: 7
  },
  {
    question: "I have a terrible toothache. — You ___ see a dentist as soon as possible.",
    options: ["should", "mustn't", "can't", "shall"],
    answer: "should",
    category: "Modals of Advice",
    grade: 7
  },
  {
    question: "When Lucas was five years old, he ___ already swim across the pool.",
    options: ["could", "can", "must", "should"],
    answer: "could",
    category: "Past Ability",
    grade: 7
  },
  {
    question: "Tomorrow is Sunday, so we ___ wake up early for school.",
    options: ["don't have to", "mustn't", "can't", "have to not"],
    answer: "don't have to",
    category: "Lack of Obligation",
    grade: 7
  },
  {
    question: "All museum visitors ___ buy a valid ticket before entering the gallery.",
    options: ["have to", "can't", "shouldn't", "may not"],
    answer: "have to",
    category: "Obligation",
    grade: 7
  },
  {
    question: "You ___ speak loudly in the library; it is strictly prohibited.",
    options: ["mustn't", "don't have to", "can", "should"],
    answer: "mustn't",
    category: "Modals of Prohibition",
    grade: 7
  },

  // --- Comparatives & Superlatives ---
  {
    question: "Mount Everest is the ___ mountain peak in the world.",
    options: ["highest", "higher", "most high", "more high"],
    answer: "highest",
    category: "Superlatives",
    grade: 7
  },
  {
    question: "A cheetah runs much ___ than a lion.",
    options: ["faster", "fastest", "more fast", "most fast"],
    answer: "faster",
    category: "Comparatives",
    grade: 7
  },
  {
    question: "Health is ___ than wealth and expensive possessions.",
    options: ["more important", "most important", "importanter", "as important"],
    answer: "more important",
    category: "Comparatives",
    grade: 7
  },
  {
    question: "This was the ___ movie I have ever watched in a cinema.",
    options: ["worst", "baddest", "worse", "badder"],
    answer: "worst",
    category: "Irregular Superlatives",
    grade: 7
  },
  {
    question: "My new laptop is ___ than my old desktop computer.",
    options: ["better", "gooder", "best", "more good"],
    answer: "better",
    category: "Irregular Comparatives",
    grade: 7
  },
  {
    question: "Which planet is the ___ to the sun in our solar system?",
    options: ["closest", "closer", "most close", "more close"],
    answer: "closest",
    category: "Superlatives",
    grade: 7
  },

  // --- Quantifiers: some, any, much, many, a lot of, a few, a little ---
  {
    question: "We do not have ___ milk left in the refrigerator for breakfast.",
    options: ["any", "some", "many", "a few"],
    answer: "any",
    category: "Quantifiers",
    grade: 7
  },
  {
    question: "Would you like ___ warm honey with your herbal tea?",
    options: ["some", "any", "many", "a few"],
    answer: "some",
    category: "Offers with Some",
    grade: 7
  },
  {
    question: "How ___ books did you borrow from the school library this week?",
    options: ["many", "much", "any", "some"],
    answer: "many",
    category: "Countable Quantifiers",
    grade: 7
  },
  {
    question: "How ___ sugar do you usually put in your morning coffee?",
    options: ["much", "many", "few", "a few"],
    answer: "much",
    category: "Uncountable Quantifiers",
    grade: 7
  },
  {
    question: "There are only ___ students present in the art studio today.",
    options: ["a few", "a little", "much", "any"],
    answer: "a few",
    category: "Countable Quantifiers",
    grade: 7
  },
  {
    question: "I only need ___ time to finish solving this geometry problem.",
    options: ["a little", "a few", "many", "any"],
    answer: "a little",
    category: "Uncountable Quantifiers",
    grade: 7
  },

  // --- Pronouns & Possessives ---
  {
    question: "That blue backpack is not mine; it belongs to Tariq. It is ___ .",
    options: ["his", "him", "her", "he"],
    answer: "his",
    category: "Possessive Pronouns",
    grade: 7
  },
  {
    question: "The little cat washed ___ face with its tiny paws.",
    options: ["its", "it's", "it", "their"],
    answer: "its",
    category: "Possessive Adjectives",
    grade: 7
  },
  {
    question: "Sofia and ___ went to the science museum together on Saturday.",
    options: ["I", "me", "myself", "mine"],
    answer: "I",
    category: "Subject Pronouns",
    grade: 7
  },
  {
    question: "The teacher gave the assignment papers directly to ___ .",
    options: ["us", "we", "our", "ours"],
    answer: "us",
    category: "Object Pronouns",
    grade: 7
  },
  {
    question: "The children made these origami birds all by ___ .",
    options: ["themselves", "theirselves", "themself", "theirs"],
    answer: "themselves",
    category: "Reflexive Pronouns",
    grade: 7
  },

  // --- Prepositions & Conjunctions ---
  {
    question: "The mathematics exam starts promptly ___ 9:00 AM on Monday.",
    options: ["at", "on", "in", "by"],
    answer: "at",
    category: "Prepositions of Time",
    grade: 7
  },
  {
    question: "Our family always goes on vacation ___ July every summer.",
    options: ["in", "on", "at", "for"],
    answer: "in",
    category: "Prepositions of Time",
    grade: 7
  },
  {
    question: "The soccer championship final match will take place ___ Saturday evening.",
    options: ["on", "in", "at", "to"],
    answer: "on",
    category: "Prepositions of Time",
    grade: 7
  },
  {
    question: "The public library is located ___ the post office and the bakery.",
    options: ["between", "among", "through", "across"],
    answer: "between",
    category: "Prepositions of Place",
    grade: 7
  },
  {
    question: "He wore his raincoat ___ it was raining heavily outside.",
    options: ["because", "so", "but", "although"],
    answer: "because",
    category: "Conjunctions of Cause",
    grade: 7
  },
  {
    question: "She studied hard for the test, ___ she achieved top marks.",
    options: ["so", "because", "but", "or"],
    answer: "so",
    category: "Conjunctions of Result",
    grade: 7
  },
  {
    question: "He wanted to play tennis, ___ it started to thunder and rain.",
    options: ["but", "so", "because", "and"],
    answer: "but",
    category: "Conjunctions of Contrast",
    grade: 7
  },

  // --- Articles: a / an / the / zero article ---
  {
    question: "My uncle works as ___ architect in a large international firm.",
    options: ["an", "a", "the", "—"],
    answer: "an",
    category: "Indefinite Articles",
    grade: 7
  },
  {
    question: "We saw ___ magnificent European eagle at the wildlife sanctuary.",
    options: ["a", "an", "the", "—"],
    answer: "a",
    category: "Indefinite Articles",
    grade: 7
  },
  {
    question: "___ sun rises in the east and sets in the west.",
    options: ["The", "A", "An", "—"],
    answer: "The",
    category: "Definite Article",
    grade: 7
  },
  {
    question: "I usually play ___ basketball with my classmates after school.",
    options: ["—", "the", "a", "an"],
    answer: "—",
    category: "Zero Article with Sports",
    grade: 7
  },

  // --- Question Words & Formation ---
  {
    question: "___ backpack is this on the floor? — It belongs to Chloe.",
    options: ["Whose", "Who", "Which", "Where"],
    answer: "Whose",
    category: "Question Words",
    grade: 7
  },
  {
    question: "___ of these two jackets do you like better, the red or the blue one?",
    options: ["Which", "What", "Who", "Whose"],
    answer: "Which",
    category: "Question Words",
    grade: 7
  },
  {
    question: "___ long does it take to travel from London to Edinburgh by train?",
    options: ["How", "What", "Where", "Why"],
    answer: "How",
    category: "Question Words",
    grade: 7
  },
  {
    question: "Choose the CORRECT negative sentence:",
    options: [
      "He doesn't have any pets at home.",
      "He doesn't has any pets at home.",
      "He don't have any pets at home.",
      "He not has any pets at home."
    ],
    answer: "He doesn't have any pets at home.",
    category: "Negative Sentence Formation",
    grade: 7
  },
  {
    question: "Choose the sentence with CORRECT subject-verb agreement:",
    options: [
      "Every student in the classroom has a dictionary.",
      "Every student in the classroom have a dictionary.",
      "Every student in the classroom having a dictionary.",
      "Every student in the classroom are having a dictionary."
    ],
    answer: "Every student in the classroom has a dictionary.",
    category: "Subject-Verb Agreement",
    grade: 7
  },
  {
    question: "Which of the following is a CORRECT short answer to 'Did they win the trophy?'",
    options: [
      "Yes, they did.",
      "Yes, they won.",
      "Yes, they do.",
      "Yes, they have."
    ],
    answer: "Yes, they did.",
    category: "Short Answers",
    grade: 7
  },
  {
    question: "Complete the sentence: 'If you heat ice, it ___ into water.'",
    options: ["melts", "melted", "will melt", "is melting"],
    answer: "melts",
    category: "Zero Conditional",
    grade: 7
  },
  {
    question: "Choose the correct spelling for the -ing form of 'SWIM':",
    options: ["swimming", "swiming", "swimering", "swimmmimg"],
    answer: "swimming",
    category: "Spelling Rules",
    grade: 7
  },
  {
    question: "Choose the correct spelling for the -ing form of 'MAKE':",
    options: ["making", "makeing", "makking", "macking"],
    answer: "making",
    category: "Spelling Rules",
    grade: 7
  },
  {
    question: "What is the past tense of 'CATCH'?",
    options: ["caught", "catched", "cot", "cought"],
    answer: "caught",
    category: "Irregular Past",
    grade: 7
  },
  {
    question: "What is the past tense of 'TEACH'?",
    options: ["taught", "teached", "thought", "touched"],
    answer: "taught",
    category: "Irregular Past",
    grade: 7
  },
  {
    question: "What is the past tense of 'FLY'?",
    options: ["flew", "flied", "flowed", "flown"],
    answer: "flew",
    category: "Irregular Past",
    grade: 7
  },
  {
    question: "Fill in the blank: 'She is interested ___ learning ancient Egyptian history.'",
    options: ["in", "at", "on", "about"],
    answer: "in",
    category: "Dependent Prepositions",
    grade: 7
  },
  {
    question: "Fill in the blank: 'Leo is very good ___ playing chess tournaments.'",
    options: ["at", "in", "on", "with"],
    answer: "at",
    category: "Dependent Prepositions",
    grade: 7
  },
  {
    question: "Fill in the blank: 'Are you afraid ___ spiders and dark places?'",
    options: ["of", "from", "with", "about"],
    answer: "of",
    category: "Dependent Prepositions",
    grade: 7
  },
  {
    question: "Listen! The school choir ___ a traditional song in the auditorium.",
    options: ["is singing", "sings", "are singing", "sing"],
    answer: "is singing",
    category: "Present Continuous",
    grade: 7
  },
  {
    question: "How ___ pairs of shoes do you have in your closet?",
    options: ["many", "much", "any", "some"],
    answer: "many",
    category: "Countable Quantifiers",
    grade: 7
  },
  {
    question: "We usually have lunch ___ noon in the cafeteria.",
    options: ["at", "in", "on", "to"],
    answer: "at",
    category: "Prepositions of Time",
    grade: 7
  },
  {
    question: "Look at ___ birds flying high above the lake!",
    options: ["those", "this", "that", "them"],
    answer: "those",
    category: "Demonstratives",
    grade: 7
  },
  {
    question: "The dentist told him to brush his ___ twice every day.",
    options: ["teeth", "tooths", "toothes", "teeths"],
    answer: "teeth",
    category: "Irregular Plurals",
    grade: 7
  },
  {
    question: "Three little ___ were running across the kitchen floor.",
    options: ["mice", "mouses", "mices", "mouse"],
    answer: "mice",
    category: "Irregular Plurals",
    grade: 7
  },
  {
    question: "All the ___ in the drama club performed brilliantly on stage.",
    options: ["children", "childs", "childrens", "childes"],
    answer: "children",
    category: "Irregular Plurals",
    grade: 7
  },
  {
    question: "He speaks English very ___ because he practices every afternoon.",
    options: ["well", "good", "goodly", "best"],
    answer: "well",
    category: "Adverbs of Manner",
    grade: 7
  },
  {
    question: "Drive ___ when the mountain road is covered in thick snow.",
    options: ["carefully", "careful", "care", "more careful"],
    answer: "carefully",
    category: "Adverbs of Manner",
    grade: 7
  },
  {
    question: "Cheetahs run very ___ across the African savanna.",
    options: ["fast", "fastly", "faster", "fastest"],
    answer: "fast",
    category: "Adverbs of Manner",
    grade: 7
  },
  {
    question: "The students worked ___ to finish their science models before the deadline.",
    options: ["hard", "hardly", "harderly", "hardful"],
    answer: "hard",
    category: "Adverbs of Manner",
    grade: 7
  },
  {
    question: "___ you please help me carry this heavy carton of books?",
    options: ["Could", "Must", "Should", "Shall"],
    answer: "Could",
    category: "Polite Requests",
    grade: 7
  },
  {
    question: "___ I borrow your blue fountain pen for a moment, please?",
    options: ["May", "Must", "Should", "Would"],
    answer: "May",
    category: "Polite Requests",
    grade: 7
  },
  {
    question: "The cat jumped ___ the open bedroom window into the garden.",
    options: ["through", "between", "under", "along"],
    answer: "through",
    category: "Prepositions of Movement",
    grade: 7
  },
  {
    question: "The hikers walked ___ the peaceful forest path for two hours.",
    options: ["along", "into", "onto", "underneath"],
    answer: "along",
    category: "Prepositions of Movement",
    grade: 7
  },
  {
    question: "He drove his car ___ the bridge to reach the opposite river bank.",
    options: ["across", "through", "into", "between"],
    answer: "across",
    category: "Prepositions of Movement",
    grade: 7
  },
  {
    question: "The submarine dove deep ___ the dark ocean waters.",
    options: ["into", "onto", "out of", "along"],
    answer: "into",
    category: "Prepositions of Movement",
    grade: 7
  },
  {
    question: "What is the past tense of 'SING'?",
    options: ["sang", "singed", "sung", "song"],
    answer: "sang",
    category: "Irregular Past",
    grade: 7
  },
  {
    question: "What is the past tense of 'DRINK'?",
    options: ["drank", "drinked", "drunk", "dronk"],
    answer: "drank",
    category: "Irregular Past",
    grade: 7
  },
  {
    question: "What is the past tense of 'SWIM'?",
    options: ["swam", "swimmed", "swum", "swom"],
    answer: "swam",
    category: "Irregular Past",
    grade: 7
  },
  {
    question: "What is the past tense of 'DRIVE'?",
    options: ["drove", "drived", "driven", "drave"],
    answer: "drove",
    category: "Irregular Past",
    grade: 7
  },
  {
    question: "What is the past tense of 'RIDE'?",
    options: ["rode", "rided", "ridden", "road"],
    answer: "rode",
    category: "Irregular Past",
    grade: 7
  },
  {
    question: "What is the past tense of 'WEAR'?",
    options: ["wore", "weared", "worn", "ware"],
    answer: "wore",
    category: "Irregular Past",
    grade: 7
  },
  {
    question: "What is the past tense of 'GROW'?",
    options: ["grew", "growed", "grown", "growt"],
    answer: "grew",
    category: "Irregular Past",
    grade: 7
  },
  {
    question: "What is the past tense of 'THROW'?",
    options: ["threw", "throwed", "thrown", "thraw"],
    answer: "threw",
    category: "Irregular Past",
    grade: 7
  },
  {
    question: "What is the past tense of 'BLOW'?",
    options: ["blew", "blowed", "blown", "blaw"],
    answer: "blew",
    category: "Irregular Past",
    grade: 7
  },
  {
    question: "This drawing is ours, and that colorful painting is ___ .",
    options: ["theirs", "their", "them", "they"],
    answer: "theirs",
    category: "Possessive Pronouns",
    grade: 7
  },
  {
    question: "Please ___ your mobile phones during the theater performance.",
    options: ["turn off", "turns off", "turning off", "turned off"],
    answer: "turn off",
    category: "Imperatives",
    grade: 7
  },
  {
    question: "Don't ___ on the grass in the botanical garden.",
    options: ["step", "steps", "stepping", "stepped"],
    answer: "step",
    category: "Negative Imperatives",
    grade: 7
  },
  {
    question: "It is a sunny day today, ___ ?",
    options: ["isn't it", "is it", "doesn't it", "aren't it"],
    answer: "isn't it",
    category: "Question Tags",
    grade: 7
  }
];

// ==========================================
// 2. GRADE 8 GRAMMAR QUESTION BANK (110+ CURATED QUESTIONS)
// ==========================================
const GRADE_8_QUESTIONS = [
  // --- Past Continuous & When / While Clauses ---
  {
    question: "While Maya ___ dinner in the kitchen, the telephone rang loudly.",
    options: ["was cooking", "cooked", "is cooking", "cooks"],
    answer: "was cooking",
    category: "Past Continuous",
    grade: 8
  },
  {
    question: "We ___ along the beach when we suddenly discovered a rare sea turtle.",
    options: ["were walking", "walked", "are walking", "have walked"],
    answer: "were walking",
    category: "Past Continuous with When",
    grade: 8
  },
  {
    question: "What ___ you doing when the earthquake tremors began?",
    options: ["were", "did", "was", "are"],
    answer: "were",
    category: "Past Continuous Questions",
    grade: 8
  },
  {
    question: "While the teacher was writing on the board, the students ___ notes quietly.",
    options: ["were taking", "took", "take", "are taking"],
    answer: "were taking",
    category: "Parallel Past Actions",
    grade: 8
  },

  // --- Present Perfect Tense (already, yet, just, ever, never, since, for) ---
  {
    question: "Have you ___ visited the Natural History Museum in London?",
    options: ["ever", "never", "yet", "already"],
    answer: "ever",
    category: "Present Perfect with Ever",
    grade: 8
  },
  {
    question: "I haven't completed my history research essay ___ .",
    options: ["yet", "already", "just", "ever"],
    answer: "yet",
    category: "Present Perfect with Yet",
    grade: 8
  },
  {
    question: "Lucas has lived in this coastal city ___ 2018.",
    options: ["since", "for", "in", "during"],
    answer: "since",
    category: "Present Perfect with Since",
    grade: 8
  },
  {
    question: "They have been close friends ___ more than ten years.",
    options: ["for", "since", "from", "during"],
    answer: "for",
    category: "Present Perfect with For",
    grade: 8
  },
  {
    question: "Be careful! The technician has ___ painted this park bench.",
    options: ["just", "yet", "ever", "since"],
    answer: "just",
    category: "Present Perfect with Just",
    grade: 8
  },
  {
    question: "She ___ already read all seven books in the fantasy series.",
    options: ["has", "have", "is", "did"],
    answer: "has",
    category: "Present Perfect Auxiliary",
    grade: 8
  },
  {
    question: "How many times ___ you seen that documentary film?",
    options: ["have", "did", "are", "do"],
    answer: "have",
    category: "Present Perfect Questions",
    grade: 8
  },
  {
    question: "I ___ never eaten sushi before in my entire life.",
    options: ["have", "did", "am", "was"],
    answer: "have",
    category: "Present Perfect with Never",
    grade: 8
  },

  // --- Simple Past vs Present Perfect Contrast ---
  {
    question: "Shakespeare ___ many famous plays and sonnets in the 16th century.",
    options: ["wrote", "has written", "writes", "had written"],
    answer: "wrote",
    category: "Past vs Present Perfect",
    grade: 8
  },
  {
    question: "I ___ my house keys yesterday, and I still cannot find them.",
    options: ["lost", "have lost", "am losing", "lose"],
    answer: "lost",
    category: "Simple Past Specific Time",
    grade: 8
  },
  {
    question: "Look! Someone ___ their bicycle outside in the rain.",
    options: ["has left", "left", "leaves", "is leaving"],
    answer: "has left",
    category: "Present Perfect Result",
    grade: 8
  },

  // --- Modal Verbs & Preferences (would rather, prefer, have to, need to) ---
  {
    question: "I would rather ___ at home tonight than attend the noisy concert.",
    options: ["stay", "staying", "to stay", "stayed"],
    answer: "stay",
    category: "Would Rather + Bare Infinitive",
    grade: 8
  },
  {
    question: "Sofia prefers ___ books to watching television in the evening.",
    options: ["reading", "read", "to read", "reads"],
    answer: "reading",
    category: "Prefer + Gerund",
    grade: 8
  },
  {
    question: "You ___ buy tickets in advance; entry to the festival is completely free.",
    options: ["don't need to", "mustn't", "can't", "ought not"],
    answer: "don't need to",
    category: "Lack of Necessity",
    grade: 8
  },
  {
    question: "Students ___ wear their official school uniform during formal examinations.",
    options: ["must", "can", "might", "could"],
    answer: "must",
    category: "Modals of Obligation",
    grade: 8
  },
  {
    question: "The sky is full of dark clouds; it ___ rain within the hour.",
    options: ["might", "must", "should", "ought"],
    answer: "might",
    category: "Modals of Possibility",
    grade: 8
  },

  // --- First Conditional & Future Predictions ---
  {
    question: "If it ___ tomorrow, we will cancel the outdoor hiking trip.",
    options: ["rains", "will rain", "rained", "is raining"],
    answer: "rains",
    category: "First Conditional",
    grade: 8
  },
  {
    question: "If you study consistently every day, you ___ pass the examination easily.",
    options: ["will", "would", "did", "have"],
    answer: "will",
    category: "First Conditional",
    grade: 8
  },
  {
    question: "Unless she ___ now, she will miss the school bus.",
    options: ["leaves", "will leave", "doesn't leave", "left"],
    answer: "leaves",
    category: "Conditionals with Unless",
    grade: 8
  },
  {
    question: "What will you do if you ___ first prize in the national science contest?",
    options: ["win", "will win", "won", "wins"],
    answer: "win",
    category: "First Conditional Questions",
    grade: 8
  },

  // --- Relative Clauses (who, which, that, where, whose) ---
  {
    question: "The scientist ___ developed the solar battery gave a keynote speech.",
    options: ["who", "which", "whose", "where"],
    answer: "who",
    category: "Relative Pronouns for People",
    grade: 8
  },
  {
    question: "This is the fascinating novel ___ won the international literature award.",
    options: ["which", "who", "whom", "where"],
    answer: "which",
    category: "Relative Pronouns for Things",
    grade: 8
  },
  {
    question: "The town ___ my grandparents were born has a rich ancient heritage.",
    options: ["where", "which", "that", "who"],
    answer: "where",
    category: "Relative Adverb for Places",
    grade: 8
  },
  {
    question: "Meet Daniel, the student ___ robotic project won the gold medal.",
    options: ["whose", "who", "which", "that"],
    answer: "whose",
    category: "Relative Pronouns for Possession",
    grade: 8
  },

  // --- Passive Voice Basics (Simple Present & Past Passive) ---
  {
    question: "Millions of smartphone devices ___ worldwide every single month.",
    options: ["are sold", "sold", "is sold", "sell"],
    answer: "are sold",
    category: "Present Passive",
    grade: 8
  },
  {
    question: "The Eiffel Tower ___ designed and constructed by Gustave Eiffel.",
    options: ["was", "is", "were", "has"],
    answer: "was",
    category: "Past Passive",
    grade: 8
  },
  {
    question: "Paper ___ originally invented in ancient China thousands of years ago.",
    options: ["was", "is", "were", "did"],
    answer: "was",
    category: "Past Passive",
    grade: 8
  },
  {
    question: "All classroom rules ___ by the school council at the start of the semester.",
    options: ["are established", "established", "is established", "establish"],
    answer: "are established",
    category: "Present Passive",
    grade: 8
  },

  // --- Gerunds vs Infinitives ---
  {
    question: "We decided ___ our camping trip until the stormy weather cleared.",
    options: ["to postpone", "postponing", "postpone", "postponed"],
    answer: "to postpone",
    category: "Verb + Infinitive",
    grade: 8
  },
  {
    question: "Chloe enjoys ___ acoustic guitar melodies during her free time.",
    options: ["playing", "to play", "play", "played"],
    answer: "playing",
    category: "Verb + Gerund",
    grade: 8
  },
  {
    question: "Don't forget ___ off the laboratory lights before locking the doors.",
    options: ["to turn", "turning", "turn", "turned"],
    answer: "to turn",
    category: "Remember / Forget + Infinitive",
    grade: 8
  },
  {
    question: "He gave up ___ sugary drinks to improve his athletic stamina.",
    options: ["drinking", "to drink", "drink", "drank"],
    answer: "drinking",
    category: "Phrasal Verb + Gerund",
    grade: 8
  },
  {
    question: "We look forward to ___ our pen pals from Toronto next month.",
    options: ["meeting", "meet", "to meet", "met"],
    answer: "meeting",
    category: "Look Forward To + Gerund",
    grade: 8
  },

  // --- Used to (Past Habits) ---
  {
    question: "My grandfather ___ walk five miles to school every single morning.",
    options: ["used to", "use to", "is used to", "was used to"],
    answer: "used to",
    category: "Used to + Verb",
    grade: 8
  },
  {
    question: "Did you ___ play the violin when you were in elementary school?",
    options: ["use to", "used to", "uses to", "using to"],
    answer: "use to",
    category: "Questions with Used to",
    grade: 8
  },
  {
    question: "She ___ not like spicy food, but now she loves Mexican cuisine.",
    options: ["didn't use to", "didn't used to", "used not", "wasn't used to"],
    answer: "didn't use to",
    category: "Negative with Used to",
    grade: 8
  },

  // --- Question Tags & Advanced Question Formation ---
  {
    question: "You are the new exchange student from Vancouver, ___ ?",
    options: ["aren't you", "are you", "isn't you", "don't you"],
    answer: "aren't you",
    category: "Question Tags",
    grade: 8
  },
  {
    question: "Kenji doesn't like waking up early on Saturdays, ___ ?",
    options: ["does he", "doesn't he", "is he", "did he"],
    answer: "does he",
    category: "Question Tags",
    grade: 8
  },
  {
    question: "They achieved first place in the debate competition, ___ ?",
    options: ["didn't they", "did they", "haven't they", "weren't they"],
    answer: "didn't they",
    category: "Question Tags",
    grade: 8
  },
  {
    question: "You haven't finished the chemistry project yet, ___ ?",
    options: ["have you", "haven't you", "did you", "do you"],
    answer: "have you",
    category: "Question Tags",
    grade: 8
  },

  // --- Connectors & Conjunctions (although, however, in spite of, therefore) ---
  {
    question: "___ it was freezing cold outside, the runners completed the marathon.",
    options: ["Although", "Because", "Therefore", "So"],
    answer: "Although",
    category: "Conjunctions of Concession",
    grade: 8
  },
  {
    question: "He trained hard for six months; ___ , he won the gold medal comfortably.",
    options: ["therefore", "although", "but", "however"],
    answer: "therefore",
    category: "Conjunctions of Result",
    grade: 8
  },
  {
    question: "The project was difficult. ___ , our team managed to deliver it on schedule.",
    options: ["However", "Although", "Because", "So"],
    answer: "However",
    category: "Transitions of Contrast",
    grade: 8
  },

  // --- Error Identification & Complex Structures ---
  {
    question: "Identify the INCORRECT sentence:",
    options: [
      "She has arrived two hours ago.",
      "She arrived two hours ago.",
      "She has just arrived.",
      "She is arriving now."
    ],
    answer: "She has arrived two hours ago.",
    category: "Tense Error Identification",
    grade: 8
  },
  {
    question: "Identify the CORRECT sentence:",
    options: [
      "If I find your notebook, I will give it to you.",
      "If I will find your notebook, I give it to you.",
      "If I find your notebook, I gave it to you.",
      "If I would find your notebook, I will give it."
    ],
    answer: "If I find your notebook, I will give it to you.",
    category: "Conditional Accuracy",
    grade: 8
  },
  {
    question: "Choose the correct sentence with 'TOO' and 'ENOUGH':",
    options: [
      "The suitcase was too heavy for him to carry alone.",
      "The suitcase was enough heavy for him to carry alone.",
      "The suitcase was too much heavy for him to carry.",
      "The suitcase was heavy too for him to carry."
    ],
    answer: "The suitcase was too heavy for him to carry alone.",
    category: "Too vs Enough",
    grade: 8
  },
  {
    question: "He is not old ___ to obtain a driver's license in this state.",
    options: ["enough", "too", "so", "as"],
    answer: "enough",
    category: "Too vs Enough",
    grade: 8
  },
  {
    question: "Choose the correct passive transformation: 'The chef prepared a gourmet meal.'",
    options: [
      "A gourmet meal was prepared by the chef.",
      "A gourmet meal is prepared by the chef.",
      "A gourmet meal has prepared by the chef.",
      "A gourmet meal was being prepare by the chef."
    ],
    answer: "A gourmet meal was prepared by the chef.",
    category: "Passive Voice Transformation",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'FORGET'?",
    options: ["forgotten", "forgot", "forgetted", "forgat"],
    answer: "forgotten",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'CHOOSE'?",
    options: ["chosen", "chose", "choosed", "chozen"],
    answer: "chosen",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'FREEZE'?",
    options: ["frozen", "froze", "freezed", "frozed"],
    answer: "frozen",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'HIDE'?",
    options: ["hidden", "hid", "hided", "hiding"],
    answer: "hidden",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "She ___ playing the violin for three hours without taking a break.",
    options: ["has been", "is", "was", "had"],
    answer: "has been",
    category: "Present Perfect Continuous",
    grade: 8
  },
  {
    question: "How long ___ you been studying Spanish at the language academy?",
    options: ["have", "did", "are", "were"],
    answer: "have",
    category: "Present Perfect Continuous Questions",
    grade: 8
  },
  {
    question: "By the time the firefighter squad arrived, the neighbors ___ already extinguished the fire.",
    options: ["had", "have", "were", "did"],
    answer: "had",
    category: "Past Perfect",
    grade: 8
  },
  {
    question: "After we ___ our homework, we went out to ride bicycles in the park.",
    options: ["had finished", "finish", "have finished", "are finishing"],
    answer: "had finished",
    category: "Past Perfect with After",
    grade: 8
  },
  {
    question: "If I won a million dollars, I ___ travel all around the world.",
    options: ["would", "will", "can", "shall"],
    answer: "would",
    category: "Second Conditional",
    grade: 8
  },
  {
    question: "If she had more free time, she ___ learn how to play the cello.",
    options: ["would", "will", "can", "must"],
    answer: "would",
    category: "Second Conditional",
    grade: 8
  },
  {
    question: "If I were in your position, I ___ accept the internship offer immediately.",
    options: ["would", "will", "should to", "am"],
    answer: "would",
    category: "Second Conditional Advice",
    grade: 8
  },
  {
    question: "Could you tell me where the nearest subway entrance ___ ?",
    options: ["is", "is it", "it is located", "did it be"],
    answer: "is",
    category: "Indirect Questions",
    grade: 8
  },
  {
    question: "Do you know what time the next train to Oxford ___ ?",
    options: ["departs", "does depart", "is departing it", "departed it"],
    answer: "departs",
    category: "Indirect Questions",
    grade: 8
  },
  {
    question: "Tariq told me that he ___ moving to Melbourne next summer.",
    options: ["was", "is", "are", "has"],
    answer: "was",
    category: "Reported Speech",
    grade: 8
  },
  {
    question: "The science teacher said that the Earth ___ around the sun.",
    options: ["revolves", "revolved", "is revolving", "has revolved"],
    answer: "revolves",
    category: "Reported Speech Universal Truths",
    grade: 8
  },
  {
    question: "That mysterious package ___ be for Sarah; it has her full name on the label.",
    options: ["must", "can't", "shouldn't", "needn't"],
    answer: "must",
    category: "Modals of Deduction",
    grade: 8
  },
  {
    question: "He ___ be in Madrid today because I saw him in our school cafeteria ten minutes ago.",
    options: ["can't", "must", "might", "should"],
    answer: "can't",
    category: "Modals of Impossibility",
    grade: 8
  },
  {
    question: "If you don't know the definition of the word, ___ in the online dictionary.",
    options: ["look it up", "look up it", "look it into", "look after it"],
    answer: "look it up",
    category: "Separable Phrasal Verbs",
    grade: 8
  },
  {
    question: "Please ___ before you enter the carpeted living room.",
    options: ["take off your shoes", "take your shoes off", "take off them", "take off you shoes"],
    answer: "take off your shoes",
    category: "Phrasal Verbs with Objects",
    grade: 8
  },
  {
    question: "___ Leo and Kenji achieved top honors in the mathematics olympiad.",
    options: ["Both", "Neither", "Either", "Every"],
    answer: "Both",
    category: "Both / Neither / Either",
    grade: 8
  },
  {
    question: "___ of the two keys unlocked the old wooden chest.",
    options: ["Neither", "Both", "Every", "All"],
    answer: "Neither",
    category: "Both / Neither / Either",
    grade: 8
  },
  {
    question: "I really love listening to classical symphonies. — ___ do I.",
    options: ["So", "Neither", "Nor", "Also"],
    answer: "So",
    category: "So / Neither Agreement",
    grade: 8
  },
  {
    question: "Elena didn't watch the football match last night. — ___ did Omar.",
    options: ["Neither", "So", "Either", "Too"],
    answer: "Neither",
    category: "So / Neither Agreement",
    grade: 8
  },
  {
    question: "The new community sports complex ___ next month by the city mayor.",
    options: ["will be opened", "will open", "is opening", "was opened"],
    answer: "will be opened",
    category: "Future Passive",
    grade: 8
  },
  {
    question: "English ___ by millions of people across the globe as a second language.",
    options: ["is spoken", "speaks", "are spoken", "is speaking"],
    answer: "is spoken",
    category: "Present Passive",
    grade: 8
  },
  {
    question: "Penicillin ___ discovered accidentally by Alexander Fleming in 1928.",
    options: ["was", "is", "has", "were"],
    answer: "was",
    category: "Past Passive",
    grade: 8
  },
  {
    question: "Dr. Evans, ___ lives next door to us, is a renowned heart surgeon.",
    options: ["who", "which", "whom", "whose"],
    answer: "who",
    category: "Non-defining Relative Clauses",
    grade: 8
  },
  {
    question: "The Amazon Rainforest, ___ covers millions of square kilometers, produces vital oxygen.",
    options: ["which", "that", "where", "who"],
    answer: "which",
    category: "Non-defining Relative Clauses",
    grade: 8
  },
  {
    question: "I wish I ___ more time to practice playing the piano every day.",
    options: ["had", "have", "am having", "will have"],
    answer: "had",
    category: "Wish Clauses Present",
    grade: 8
  },
  {
    question: "She wishes she ___ speak fluent French and German.",
    options: ["could", "can", "will", "is able"],
    answer: "could",
    category: "Wish Clauses Ability",
    grade: 8
  },
  {
    question: "We had better leave right now, ___ we will get caught in the rush-hour traffic.",
    options: ["otherwise", "therefore", "because", "although"],
    answer: "otherwise",
    category: "Condition Connectors",
    grade: 8
  },
  {
    question: "He wore safety goggles in order ___ protect his eyes from chemical splashes.",
    options: ["to", "for", "that", "so"],
    answer: "to",
    category: "Infinitive of Purpose",
    grade: 8
  },
  {
    question: "She took an umbrella ___ case it started raining on her way home.",
    options: ["in", "on", "at", "for"],
    answer: "in",
    category: "Clauses with In Case",
    grade: 8
  },
  {
    question: "In spite of ___ exhausted after the long hike, they set up the tents cheerfully.",
    options: ["being", "to be", "be", "been"],
    answer: "being",
    category: "In Spite Of + Gerund",
    grade: 8
  },
  {
    question: "Despite the heavy ___, the airplane landed safely on the runway.",
    options: ["rain", "rainy", "raining", "rained"],
    answer: "rain",
    category: "Despite + Noun Phrase",
    grade: 8
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "Neither the teacher nor the students were in the cafeteria.",
      "Neither the teacher nor the students was in the cafeteria.",
      "Neither the teacher or the students was in the cafeteria.",
      "Neither the teacher nor the students are being in the cafeteria."
    ],
    answer: "Neither the teacher nor the students were in the cafeteria.",
    category: "Neither...Nor Agreement",
    grade: 8
  },
  {
    question: "Choose the correct sentence with 'USED TO':",
    options: [
      "Did you use to have long hair when you were ten?",
      "Did you used to have long hair when you were ten?",
      "Did you use to had long hair when you were ten?",
      "Were you used to have long hair when you were ten?"
    ],
    answer: "Did you use to have long hair when you were ten?",
    category: "Used to Interrogative Accuracy",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'DRAW'?",
    options: ["drawn", "drew", "drawed", "drawned"],
    answer: "drawn",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'RISE'?",
    options: ["risen", "rose", "rised", "rozen"],
    answer: "risen",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'SHAKE'?",
    options: ["shaken", "shook", "shaked", "shoken"],
    answer: "shaken",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'BITE'?",
    options: ["bitten", "bit", "bited", "bot"],
    answer: "bitten",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'FORGIVE'?",
    options: ["forgiven", "forgave", "forgived", "forgivenen"],
    answer: "forgiven",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'TEAR'?",
    options: ["torn", "tore", "teared", "tared"],
    answer: "torn",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'WEAR'?",
    options: ["worn", "wore", "weared", "woren"],
    answer: "worn",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'SINK'?",
    options: ["sunk", "sank", "sinked", "sonk"],
    answer: "sunk",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'SHINE'?",
    options: ["shone", "shined", "shoned", "shinen"],
    answer: "shone",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'STEAL'?",
    options: ["stolen", "stole", "stealed", "stollen"],
    answer: "stolen",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'WAKE'?",
    options: ["woken", "woke", "waked", "wook"],
    answer: "woken",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'BLOW'?",
    options: ["blown", "blew", "blowed", "blowen"],
    answer: "blown",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'FLY'?",
    options: ["flown", "flew", "flied", "flowen"],
    answer: "flown",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'BECOME'?",
    options: ["become", "became", "becomed", "becoming"],
    answer: "become",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'BEGIN'?",
    options: ["begun", "began", "beginned", "begon"],
    answer: "begun",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'BRING'?",
    options: ["brought", "brang", "bringed", "bought"],
    answer: "brought",
    category: "Irregular Past Participles",
    grade: 8
  },
  {
    question: "What is the past participle (V3) form of 'BUILD'?",
    options: ["built", "builded", "builden", "bult"],
    answer: "built",
    category: "Irregular Past Participles",
    grade: 8
  }
];

// Combine all questions for 'All Grades' option (220+ total questions)
const KEEP_OR_PASS_QUESTIONS = [...GRADE_7_QUESTIONS, ...GRADE_8_QUESTIONS];

// ==========================================
// 3. HIDDEN RANDOM POINT REWARDS
// ==========================================
const MYSTERY_REWARDS = [
  { points: 10,  icon: "⭐", badge: "POINT GAIN",   text: "+10 POINTS" },
  { points: 20,  icon: "🌟", badge: "POINT GAIN",   text: "+20 POINTS" },
  { points: 30,  icon: "💎", badge: "SUPER REWARD", text: "+30 POINTS" },
  { points: 40,  icon: "🔥", badge: "HOT BONUS",    text: "+40 POINTS" },
  { points: 50,  icon: "🎁", badge: "BIG BONUS",    text: "+50 POINTS" },
  { points: 100, icon: "🏆", badge: "MEGA PRIZE",   text: "+100 POINTS" },
  { points: 20,  icon: "💰", badge: "POINT GAIN",   text: "+20 POINTS" },
  { points: 30,  icon: "✨", badge: "SUPER REWARD", text: "+30 POINTS" },
  { points: 50,  icon: "🍀", badge: "LUCKY GAIN",   text: "+50 POINTS" },
  { points: 200, icon: "👑", badge: "JACKPOT",      text: "+200 POINTS" }
];

// ==========================================
// 4. PERSISTENT QUESTION DECK & SESSION NON-REPETITION
// ==========================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class QuestionDeck {
  constructor(initialPool) {
    this.masterPool = [...initialPool];
    this.availableDeck = [];
    this.usedInSession = new Set();
    this.initDeck();
  }

  initDeck() {
    this.availableDeck = shuffle([...this.masterPool]);
  }

  setPool(newPool) {
    this.masterPool = [...newPool];
    this.availableDeck = [];
    this.usedInSession.clear();
    this.initDeck();
  }

  resetSession() {
    this.usedInSession.clear();
    this.initDeck();
  }

  draw() {
    // Filter available pool to ensure NO duplicates in the current session
    let validPool = this.masterPool.filter(q => !this.usedInSession.has(q.question));

    if (validPool.length === 0) {
      // If entire pool was exhausted during an extremely long game, reset session set
      this.usedInSession.clear();
      validPool = [...this.masterPool];
    }

    // Pick a random question from unused pool
    const randomIndex = Math.floor(Math.random() * validPool.length);
    const chosenRaw = validPool[randomIndex];
    this.usedInSession.add(chosenRaw.question);

    // Deep clone and randomize option order (anti-predictability)
    const shuffledOptions = shuffle([...chosenRaw.options]);
    const correctOptionIndex = shuffledOptions.indexOf(chosenRaw.answer);

    return {
      ...chosenRaw,
      shuffledOptions,
      correctOptionIndex
    };
  }

  drawBatch(count) {
    const batch = [];
    for (let i = 0; i < count; i++) {
      batch.push(this.draw());
    }
    return batch;
  }
}

// Global persistent deck instance
const globalDeck = new QuestionDeck(KEEP_OR_PASS_QUESTIONS);
let currentGrade = "all";

function getQuestionsForGrade(grade) {
  if (grade === "7") return GRADE_7_QUESTIONS;
  if (grade === "8") return GRADE_8_QUESTIONS;
  return KEEP_OR_PASS_QUESTIONS;
}

// ==========================================
// 5. PROCEDURAL SOUND EFFECTS
// ==========================================
class SoundFX {
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
  playFanfare() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    [440, 554.37, 659.25, 880].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.1 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.1);
      osc.stop(this.ctx.currentTime + i * 0.1 + 0.35);
    });
  }
  playBoom() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  }
  playChime() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.setValueAtTime(900, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }
}

const sfx = new SoundFX();

// ==========================================
// 6. GAME STATE & DOM CONTROLLERS
// ==========================================
let gameState = {
  numTeams: 2,
  totalRounds: 12,
  currentQuestionIdx: 0,
  activeTeamIdx: 0,
  teams: [],
  questions: [],
  pendingReward: null,
  answered: false
};

// DOM Elements (Initialized in browser)
let setupScreen, questionScreen, decisionScreen, revealScreen, podiumScreen;
let scoreboardBar, decisionScoreboard, activeTeamTurnEl, questionProgressEl, questionCategoryEl, questionTextEl, optionsGridEl;
let decisionTeamTitle, choiceButtonsGroup, passTargetSelection, passTeamsGrid;
let revealCard, revealBadge, revealActionTag, revealTargetTeam, revealIcon, revealPointsText, revealDescText;

function initDomElements() {
  if (typeof document === "undefined") return;

  setupScreen = document.getElementById("setupScreen");
  questionScreen = document.getElementById("questionScreen");
  decisionScreen = document.getElementById("decisionScreen");
  revealScreen = document.getElementById("revealScreen");
  podiumScreen = document.getElementById("podiumScreen");

  scoreboardBar = document.getElementById("scoreboardBar");
  decisionScoreboard = document.getElementById("decisionScoreboard");
  activeTeamTurnEl = document.getElementById("activeTeamTurn");
  questionProgressEl = document.getElementById("questionProgress");
  questionCategoryEl = document.getElementById("questionCategory");
  questionTextEl = document.getElementById("questionText");
  optionsGridEl = document.getElementById("optionsGrid");

  decisionTeamTitle = document.getElementById("decisionTeamTitle");
  choiceButtonsGroup = document.getElementById("choiceButtonsGroup");
  passTargetSelection = document.getElementById("passTargetSelection");
  passTeamsGrid = document.getElementById("passTeamsGrid");

  revealCard = document.getElementById("revealCard");
  revealBadge = document.getElementById("revealBadge");
  revealActionTag = document.getElementById("revealActionTag");
  revealTargetTeam = document.getElementById("revealTargetTeam");
  revealIcon = document.getElementById("revealIcon");
  revealPointsText = document.getElementById("revealPointsText");
  revealDescText = document.getElementById("revealDescText");
}

function getRandomReward() {
  const reward = MYSTERY_REWARDS[Math.floor(Math.random() * MYSTERY_REWARDS.length)];
  return { ...reward };
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initDomElements();
    setupPills();
    initEvents();
  });
}

function setupPills() {
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
  const btnSound = document.getElementById("btnSoundToggle");
  if (btnSound) {
    btnSound.addEventListener("click", (e) => {
      sfx.muted = !sfx.muted;
      e.currentTarget.textContent = sfx.muted ? "🔇" : "🔊";
    });
  }

  document.getElementById("btnStartGame").addEventListener("click", startMatch);
  document.getElementById("btnAnswerCorrect").addEventListener("click", () => onAnswerJudge(true));
  document.getElementById("btnAnswerWrong").addEventListener("click", () => onAnswerJudge(false));
  document.getElementById("btnChoiceKeep").addEventListener("click", handleKeepChoice);
  document.getElementById("btnChoicePass").addEventListener("click", handlePassChoice);
  document.getElementById("btnNextQuestion").addEventListener("click", nextQuestion);
  document.getElementById("btnPlayAgain").addEventListener("click", resetMatch);
}

function startMatch() {
  sfx.init();
  const teamCount = parseInt(document.querySelector("#teamOptions .pill-btn.active").dataset.teams, 10);
  const roundCount = parseInt(document.querySelector("#roundOptions .pill-btn.active").dataset.rounds, 10);
  const gradeBtn = document.querySelector("#gradeOptions .pill-btn.active");
  const selectedGrade = gradeBtn ? gradeBtn.dataset.grade : "all";

  // If grade pool changed, update the global persistent deck
  const activePool = getQuestionsForGrade(selectedGrade);
  if (currentGrade !== selectedGrade || globalDeck.masterPool.length !== activePool.length) {
    currentGrade = selectedGrade;
    globalDeck.setPool(activePool);
  } else {
    // Reset session tracking when starting a new match
    globalDeck.resetSession();
  }

  gameState.numTeams = teamCount;
  gameState.totalRounds = roundCount;
  gameState.currentQuestionIdx = 0;
  gameState.activeTeamIdx = 0;

  const defaultNames = ["Team 1", "Team 2", "Team 3", "Team 4"];
  gameState.teams = [];
  for (let i = 0; i < teamCount; i++) {
    gameState.teams.push({ name: defaultNames[i] || `Team ${i + 1}`, score: 0 });
  }

  // Draw non-repeating questions sequentially from the global deck
  gameState.questions = globalDeck.drawBatch(roundCount);

  setupScreen.classList.add("hidden");
  podiumScreen.classList.add("hidden");
  showQuestionScreen();
}

function renderScoreboard(container) {
  if (!container) return;
  container.innerHTML = "";
  gameState.teams.forEach((t, idx) => {
    const chip = document.createElement("div");
    chip.className = `score-chip ${idx === gameState.activeTeamIdx ? "active-team" : ""}`;
    chip.innerHTML = `<span class="team-name">${t.name}</span><span class="team-pts">${t.score} pts</span>`;
    container.appendChild(chip);
  });
}

function showQuestionScreen() {
  gameState.answered = false;
  questionScreen.classList.remove("hidden");
  decisionScreen.classList.add("hidden");
  revealScreen.classList.add("hidden");

  renderScoreboard(scoreboardBar);

  const curQ = gameState.questions[gameState.currentQuestionIdx];
  activeTeamTurnEl.textContent = `${gameState.teams[gameState.activeTeamIdx].name}'s Turn`;
  questionProgressEl.textContent = `Question ${gameState.currentQuestionIdx + 1} / ${gameState.totalRounds}`;
  questionCategoryEl.textContent = curQ.category || "English Grammar";
  questionTextEl.textContent = curQ.question;

  // Render multiple-choice options with randomized ordering
  if (optionsGridEl) {
    optionsGridEl.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    curQ.shuffledOptions.forEach((optionText, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-card-btn";
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span class="option-text">${optionText}</span>
      `;

      btn.addEventListener("click", () => {
        if (gameState.answered) return;
        handleOptionSelected(idx, btn, curQ);
      });

      optionsGridEl.appendChild(btn);
    });
  }
}

function handleOptionSelected(selectedIndex, clickedBtn, questionObj) {
  gameState.answered = true;
  const isCorrect = selectedIndex === questionObj.correctOptionIndex;

  const allBtns = optionsGridEl.querySelectorAll(".option-card-btn");
  allBtns.forEach((b, i) => {
    b.disabled = true;
    if (i === questionObj.correctOptionIndex) {
      b.classList.add("is-revealed-correct");
    }
  });

  if (isCorrect) {
    clickedBtn.classList.add("is-correct");
    sfx.playChime();
    setTimeout(() => {
      onAnswerCorrect();
    }, 900);
  } else {
    clickedBtn.classList.add("is-wrong");
    sfx.playBoom();
    setTimeout(() => {
      onAnswerWrong();
    }, 1200);
  }
}

function onAnswerJudge(isCorrect) {
  if (gameState.answered) return;
  gameState.answered = true;

  if (isCorrect) {
    sfx.playChime();
    onAnswerCorrect();
  } else {
    sfx.playBoom();
    onAnswerWrong();
  }
}

function onAnswerCorrect() {
  // Generate random hidden point reward
  gameState.pendingReward = getRandomReward();

  questionScreen.classList.add("hidden");
  decisionScreen.classList.remove("hidden");

  // Reset choice buttons & pass target section
  if (choiceButtonsGroup) choiceButtonsGroup.classList.remove("hidden");
  if (passTargetSelection) passTargetSelection.classList.add("hidden");

  renderScoreboard(decisionScoreboard);
  decisionTeamTitle.textContent = `${gameState.teams[gameState.activeTeamIdx].name}, what will you do?`;
}

function onAnswerWrong() {
  // Wrong answer: Reward = 0, no score change, move directly to next team turn
  advanceTurn();
  if (gameState.currentQuestionIdx >= gameState.totalRounds) {
    showPodium();
  } else {
    showQuestionScreen();
  }
}

// KEEP: The current team keeps the entire reward
function handleKeepChoice() {
  const currentTeam = gameState.teams[gameState.activeTeamIdx];
  const rew = gameState.pendingReward;

  // Add entire reward to current team
  currentTeam.score += rew.points;

  showRevealScreen({
    actionTag: `${currentTeam.name} KEPT THE REWARD!`,
    targetTeamName: currentTeam.name,
    descText: `Awesome decision! +${rew.points} points kept by ${currentTeam.name}.`,
    isGain: true
  });
}

// PASS: Display other teams to pass to
function handlePassChoice() {
  if (!choiceButtonsGroup || !passTargetSelection || !passTeamsGrid) return;

  choiceButtonsGroup.classList.add("hidden");
  passTargetSelection.classList.remove("hidden");

  // Populate OTHER teams only (current team is NOT selectable)
  passTeamsGrid.innerHTML = "";

  gameState.teams.forEach((team, idx) => {
    if (idx === gameState.activeTeamIdx) return; // Skip current active team

    const teamBtn = document.createElement("button");
    teamBtn.type = "button";
    teamBtn.className = "btn-pass-team";
    teamBtn.innerHTML = `
      <span>${team.name}</span>
      <span class="team-score-preview">${team.score} pts</span>
    `;

    teamBtn.addEventListener("click", () => {
      executePassToTeam(idx);
    });

    passTeamsGrid.appendChild(teamBtn);
  });
}

// Execute the full transfer of the reward to the chosen opponent team
function executePassToTeam(targetTeamIdx) {
  const activeTeam = gameState.teams[gameState.activeTeamIdx];
  const recipientTeam = gameState.teams[targetTeamIdx];
  const rew = gameState.pendingReward;

  // Transfer the ENTIRE reward to the recipient team
  recipientTeam.score += rew.points;

  showRevealScreen({
    actionTag: `PASSED TO ${recipientTeam.name.toUpperCase()}!`,
    targetTeamName: recipientTeam.name,
    descText: `${activeTeam.name} passed the box! +${rew.points} points awarded to ${recipientTeam.name}.`,
    isGain: true
  });
}

function showRevealScreen({ actionTag, targetTeamName, descText, isGain }) {
  decisionScreen.classList.add("hidden");
  revealScreen.classList.remove("hidden");

  revealActionTag.textContent = actionTag;
  revealTargetTeam.textContent = `${targetTeamName} receives:`;

  const rew = gameState.pendingReward;

  // Trigger smooth card pop animation
  revealCard.classList.remove("is-gain", "is-loss");
  void revealCard.offsetWidth; // Reflow
  revealCard.classList.add(isGain ? "is-gain" : "is-loss");

  revealIcon.textContent = rew.icon || "⭐";
  revealPointsText.textContent = rew.text || `+${rew.points} POINTS`;
  revealBadge.className = "reveal-badge gain-badge";
  revealBadge.textContent = rew.badge || "GAIN";
  revealDescText.textContent = descText;

  sfx.playFanfare();
}

function nextQuestion() {
  advanceTurn();
  if (gameState.currentQuestionIdx >= gameState.totalRounds) {
    showPodium();
  } else {
    showQuestionScreen();
  }
}

function advanceTurn() {
  gameState.currentQuestionIdx++;
  gameState.activeTeamIdx = (gameState.activeTeamIdx + 1) % gameState.numTeams;
}

function showPodium() {
  revealScreen.classList.add("hidden");
  questionScreen.classList.add("hidden");
  decisionScreen.classList.add("hidden");
  podiumScreen.classList.remove("hidden");

  sfx.playFanfare();
  const podiumEl = document.getElementById("finalPodium");
  if (!podiumEl) return;
  podiumEl.innerHTML = "";

  const sorted = [...gameState.teams].sort((a, b) => b.score - a.score);
  sorted.forEach((team, idx) => {
    const card = document.createElement("div");
    card.className = `podium-card ${idx === 0 ? "winner" : ""}`;
    const medal = idx === 0 ? "🥇 1st Place" : idx === 1 ? "🥈 2nd Place" : idx === 2 ? "🥉 3rd Place" : "4th Place";
    card.innerHTML = `
      <div class="podium-rank">${medal}</div>
      <h3 style="font-family: var(--font-heading); margin-bottom: 0.25rem;">${team.name}</h3>
      <div style="font-size: 1.6rem; font-weight: 700; color: #fbbf24;">${team.score} pts</div>
    `;
    podiumEl.appendChild(card);
  });
}

function resetMatch() {
  podiumScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    GRADE_7_QUESTIONS,
    GRADE_8_QUESTIONS,
    KEEP_OR_PASS_QUESTIONS,
    MYSTERY_REWARDS,
    QuestionDeck
  };
}
