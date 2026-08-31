/**
 * Keep or Pass — Game Script
 * Team-based vocabulary and strategy game with procedural Web Audio
 * Featuring a comprehensive Question Bank (70 Grade 7 + 70 Grade 8 = 140 unique questions)
 * and a persistent Fisher-Yates Shuffled Question Deck system.
 */

// ==========================================
// 1. GRADE 7 QUESTION BANK (70 UNIQUE QUESTIONS)
// ==========================================
const GRADE_7_QUESTIONS = [
  { question: "Which word describes someone who is always happy to give and share?", hint: "Adjectives of personality", category: "Personality", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: An honest person never tells ___.", hint: "Opposite of the truth", category: "Personality", grade: 7, difficulty: 1 },
  { question: "What is the opposite of 'PUNCTUAL'?", hint: "Someone who always arrives late", category: "Personality", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: She has curly blonde hair and ___ blue eyes.", hint: "Adjectives of appearance", category: "Appearance", grade: 7, difficulty: 1 },
  { question: "Which adjective means someone who only thinks about himself or herself?", hint: "Personality trait", category: "Personality", grade: 7, difficulty: 1 },
  { question: "What do we call a person who makes other people laugh?", hint: "Funny / Humorous", category: "Personality", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: My sister is very ___. She doesn't like speaking in front of people.", hint: "Opposite of outgoing", category: "Personality", grade: 7, difficulty: 1 },
  { question: "Which sport is played with a racket, a small yellow-green ball, and a net?", hint: "Racket sports", category: "Sports", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: You need a helmet and warm goggles to go ___ in the snowy mountains.", hint: "Winter sport on snow", category: "Sports", grade: 7, difficulty: 1 },
  { question: "How often do you brush your teeth? Complete with a frequency adverb: I ___ brush them twice a day.", hint: "Always / Usually / Often", category: "Daily Routines", grade: 7, difficulty: 1 },
  { question: "What safety equipment protects a cyclist's head during a ride?", hint: "Safety gear", category: "Sports", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: Messi and Ronaldo are world-famous ___ players.", hint: "Team sport played on grass", category: "Sports", grade: 7, difficulty: 1 },
  { question: "Which animal is the largest living mammal in the world's oceans?", hint: "Marine life", category: "Wild Animals", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: Carnivores are wild animals that eat only ___.", hint: "Food type for predators", category: "Wild Animals", grade: 7, difficulty: 1 },
  { question: "Which big cat has black stripes on orange fur and lives in Asia?", hint: "Striped predator", category: "Wild Animals", grade: 7, difficulty: 1 },
  { question: "Where do camels typically live in the wild?", hint: "Hot and sandy biome", category: "Wild Animals", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: Animal species that no longer exist on Earth are called ___.", hint: "Like dinosaurs and dodos", category: "Environment", grade: 7, difficulty: 1 },
  { question: "Which bird can swim very well and lives in icy Antarctica but cannot fly?", hint: "Flightless seabird", category: "Wild Animals", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: We must ___ endangered animals from illegal hunting.", hint: "Keep safe / Save", category: "Environment", grade: 7, difficulty: 1 },
  { question: "What kind of TV programme gives you the latest daily news from around the globe?", hint: "TV genres", category: "Television", grade: 7, difficulty: 1 },
  { question: "Which TV show consists of animated drawings brought to life, popular with kids?", hint: "Animated series", category: "Television", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: A ___ show is a competition where contestants answer trivia questions to win prizes.", hint: "TV formats", category: "Television", grade: 7, difficulty: 1 },
  { question: "What do we call a person who watches too much television while sitting lazily on the sofa?", hint: "Idiom: Couch ___", category: "Expressions", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: I prefer watching nature ___ because I learn true facts about wild animals.", hint: "Educational TV programme", category: "Television", grade: 7, difficulty: 1 },
  { question: "What should you send to your classmates before hosting a birthday party?", hint: "Party preparation", category: "Celebrations", grade: 7, difficulty: 1 },
  { question: "What sweet dessert with candles is traditionally served at birthday parties?", hint: "Birthday food", category: "Celebrations", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: We blew up colorful ___ to decorate the living room for the party.", hint: "Inflatable party decorations", category: "Celebrations", grade: 7, difficulty: 1 },
  { question: "Which special celebration happens on the night of December 31st leading into January 1st?", hint: "Global holiday", category: "Celebrations", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: Thomas Edison ___ the incandescent electric light bulb.", hint: "Past tense of create/discover", category: "Biographies", grade: 7, difficulty: 1 },
  { question: "Where was the renowned physicist Albert Einstein born?", hint: "European country famous for Berlin", category: "Biographies", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: Marie Curie won two Nobel ___ for her breakthrough scientific discoveries.", hint: "Awards / Honors", category: "Biographies", grade: 7, difficulty: 1 },
  { question: "What is a book written about a real person's life history called?", hint: "Literary genre", category: "Biographies", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: In the distant future, I believe people will travel in ___ cars through the sky.", hint: "Future transport", category: "Dreams & Future", grade: 7, difficulty: 1 },
  { question: "Which planet is known as the 'Red Planet' in our solar system?", hint: "Space & Planets", category: "Space", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: The Earth revolves around the ___ once every 365 days.", hint: "Center star of our solar system", category: "Space", grade: 7, difficulty: 1 },
  { question: "Which planet is the largest planet in our solar system?", hint: "Gas giant with giant red spot", category: "Space", grade: 7, difficulty: 1 },
  { question: "What do we call a person who is trained to travel and work in outer space?", hint: "Space profession", category: "Space", grade: 7, difficulty: 1 },
  { question: "Where do you go in a city to borrow and read books for free?", hint: "Public buildings", category: "Public Buildings", grade: 7, difficulty: 1 },
  { question: "Where would you go to send a parcel or buy postage stamps?", hint: "Public service building", category: "Public Buildings", grade: 7, difficulty: 1 },
  { question: "Where do doctors and nurses treat sick and injured patients?", hint: "Medical center", category: "Public Buildings", grade: 7, difficulty: 1 },
  { question: "Where do people go to report a crime or ask for help in an emergency?", hint: "Law enforcement building", category: "Public Buildings", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: To buy freshly baked croissants and bread, you should visit the local ___.", hint: "Food shop", category: "Public Buildings", grade: 7, difficulty: 1 },
  { question: "Where can you go to see historical artefacts, ancient sculptures, and dinosaur fossils?", hint: "Cultural building", category: "Public Buildings", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: We must ___ glass bottles, paper, and plastic to protect natural resources.", hint: "Waste management verb", category: "Environment", grade: 7, difficulty: 1 },
  { question: "What clean, renewable energy comes directly from sunlight using solar panels?", hint: "Renewable energy", category: "Environment", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: Cutting down too many trees causes ___ and destroys animal habitats.", hint: "Destruction of forests", category: "Environment", grade: 7, difficulty: 1 },
  { question: "What do we call the gradual increase in the overall temperature of the Earth's atmosphere?", hint: "Climate issue", category: "Environment", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: Never throw plastic wrappers on the ground! Throw them into the ___ bin.", hint: "Waste container", category: "Environment", grade: 7, difficulty: 1 },
  { question: "Which season comes before winter and is known for colourful falling leaves?", hint: "Autumn / Fall", category: "Seasons & Weather", grade: 7, difficulty: 1 },
  { question: "What is the freezing temperature of pure water in degrees Celsius?", hint: "Temperature", category: "Science & Nature", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: Yesterday was Sunday, so tomorrow will be ___.", hint: "Days of the week", category: "Time & Calendar", grade: 7, difficulty: 1 },
  { question: "What polite phrase do you say to someone in English when they sneeze?", hint: "Social expression", category: "Expressions", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: She has two friendly cats ___ three playful dogs. (conjunction)", hint: "Adding information", category: "Grammar", grade: 7, difficulty: 1 },
  { question: "What is the comparative form of the irregular adjective 'GOOD'?", hint: "Good -> ___ -> Best", category: "Grammar", grade: 7, difficulty: 1 },
  { question: "What is the superlative form of the adjective 'FAST'?", hint: "Fast -> Faster -> The ___", category: "Grammar", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: An adult elephant is ___ (heavy) than a tiger.", hint: "Comparative adjective", category: "Grammar", grade: 7, difficulty: 1 },
  { question: "What is the past simple form of the irregular verb 'GO'?", hint: "Irregular past tense", category: "Grammar", grade: 7, difficulty: 1 },
  { question: "What is the past simple form of the irregular verb 'BUY'?", hint: "Irregular past tense", category: "Grammar", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: We ___ (play) football in the school yard yesterday afternoon.", hint: "Past tense of regular verb", category: "Grammar", grade: 7, difficulty: 1 },
  { question: "Which word means the opposite of 'NOISY'?", hint: "Adjective for quiet tranquility", category: "Vocabulary", grade: 7, difficulty: 1 },
  { question: "Which calendar month has 28 days normally, and 29 days in a leap year?", hint: "Calendar months", category: "Time & Calendar", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: A veterinarian (vet) is a doctor who cares for sick and injured ___.", hint: "Animal doctor", category: "Jobs", grade: 7, difficulty: 1 },
  { question: "What is the opposite of the adjective 'CHEAP'?", hint: "Costing a large amount of money", category: "Vocabulary", grade: 7, difficulty: 1 },
  { question: "What scientific instrument is used to measure ambient temperature?", hint: "Scientific tool", category: "Science & Nature", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: I am looking ___ to our summer holiday at the seaside!", hint: "Phrasal expression: look ___ to", category: "Expressions", grade: 7, difficulty: 1 },
  { question: "Which geometric polygon has three straight sides and three internal angles?", hint: "Shapes & Geometry", category: "School & Math", grade: 7, difficulty: 1 },
  { question: "What do you call the daughter of your brother or sister?", hint: "Family members", category: "Family", grade: 7, difficulty: 1 },
  { question: "What do you call the son of your brother or sister?", hint: "Family members", category: "Family", grade: 7, difficulty: 1 },
  { question: "Fill in the blank: Remember to switch ___ the lights when leaving a room to save electricity.", hint: "Energy conservation", category: "Environment", grade: 7, difficulty: 1 },
  { question: "What meal do people usually eat around midday between 12:00 PM and 1:30 PM?", hint: "Daily meals", category: "Food & Meals", grade: 7, difficulty: 1 }
];

// ==========================================
// 2. GRADE 8 QUESTION BANK (75 ACCESSIBLE A2/A2+ QUESTIONS)
// ==========================================
const GRADE_8_QUESTIONS = [
  { question: "What is the opposite of 'HONEST'?", hint: "Someone who tells lies", category: "Friendship", grade: 8, difficulty: 1 },
  { question: "Which word means a friend you can always trust and count on?", hint: "Reliable / True friend", category: "Friendship", grade: 8, difficulty: 1 },
  { question: "What do you say to accept a party invitation?", hint: "Yes, I'd love to! / Sure!", category: "Everyday English", grade: 8, difficulty: 1 },
  { question: "What do you say to politely refuse an invitation?", hint: "I'm sorry, but I can't.", category: "Everyday English", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: Good friends never tell your ___ to other people.", hint: "Private information", category: "Friendship", grade: 8, difficulty: 1 },
  { question: "Which music type is fast, loud, and uses electric guitars?", hint: "Music genre", category: "Teen Life", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: I always ___ my bed before going to school in the morning.", hint: "Bedroom routine (make / do)", category: "Daily Life", grade: 8, difficulty: 1 },
  { question: "What do you wear on your hands when it is very cold outside?", hint: "Winter clothes (gloves)", category: "Clothes", grade: 8, difficulty: 1 },
  { question: "What is the past tense of the verb 'SEE'?", hint: "See -> ___", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "What is the past tense of the verb 'EAT'?", hint: "Eat -> ___", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "What is the past tense of the verb 'COME'?", hint: "Come -> ___", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "Which sentence is correct?\nA) She doesn't like tea.\nB) She don't like tea.", hint: "Subject-verb agreement (she)", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "Which cooking verb means to cut onions or tomatoes into thin pieces?", hint: "Slice / Cut", category: "In the Kitchen", grade: 8, difficulty: 1 },
  { question: "What cooking method uses hot boiling water?", hint: "Boil / Boiling", category: "In the Kitchen", grade: 8, difficulty: 1 },
  { question: "What do you use to eat soup: a spoon or a fork?", hint: "Kitchen utensil", category: "In the Kitchen", grade: 8, difficulty: 1 },
  { question: "What taste does lemon have: sweet or sour?", hint: "Flavors", category: "In the Kitchen", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: Sugar is sweet, but black pepper is ___.", hint: "Spicy / Hot", category: "In the Kitchen", grade: 8, difficulty: 1 },
  { question: "What do you say on the phone when you want to speak with John?", hint: "\"May I speak to John, please?\"", category: "On the Phone", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: Hold ___ a minute, please. I will call him.", hint: "Phone phrase: hold ___ (on / in)", category: "On the Phone", grade: 8, difficulty: 1 },
  { question: "What do you leave on the phone when someone is not at home?", hint: "A note or message", category: "On the Phone", grade: 8, difficulty: 1 },
  { question: "What do you need to log in to your email account safely?", hint: "Secret code / Password", category: "Technology", grade: 8, difficulty: 1 },
  { question: "Which button do you click to save a file from the internet to your phone?", hint: "Download / Upload", category: "Technology", grade: 8, difficulty: 1 },
  { question: "What device do you use to search the web and send text messages?", hint: "Smartphone / Computer", category: "Technology", grade: 8, difficulty: 1 },
  { question: "Which sport is more dangerous: walking in a park or skydiving?", hint: "Comparing sports", category: "Adventures", grade: 8, difficulty: 1 },
  { question: "What should you wear on your head when you go rafting or cycling?", hint: "Safety helmet", category: "Adventures", grade: 8, difficulty: 1 },
  { question: "Which sport takes place on a boat in a fast, wild river?", hint: "Water sport (rafting / tennis)", category: "Adventures", grade: 8, difficulty: 1 },
  { question: "Where do tourists stay overnight when they visit another city?", hint: "Hotel / Hostel", category: "Tourism", grade: 8, difficulty: 1 },
  { question: "What do tourists buy to remember a city they visited?", hint: "Souvenir / Gift", category: "Tourism", grade: 8, difficulty: 1 },
  { question: "Where can you go to see historical statues, fossils, and old art?", hint: "Museum / Cinema", category: "Places", grade: 8, difficulty: 1 },
  { question: "Which household chore cleans the carpet with an electric machine?", hint: "Vacuuming the floor", category: "Chores", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: Don't forget to take ___ the rubbish before going to bed.", hint: "Phrasal verb: take ___ (out / in)", category: "Chores", grade: 8, difficulty: 1 },
  { question: "What kitchen appliance do you use to wash dirty plates and cups?", hint: "Dishwasher", category: "Chores", grade: 8, difficulty: 1 },
  { question: "What natural disaster is a sudden, violent shaking of the ground?", hint: "Earthquake", category: "Natural Forces", grade: 8, difficulty: 1 },
  { question: "What disaster happens when there is too much rain and water covers the streets?", hint: "Flood", category: "Natural Forces", grade: 8, difficulty: 1 },
  { question: "What do you call a long period of weather with no rain at all?", hint: "Drought", category: "Natural Forces", grade: 8, difficulty: 1 },
  { question: "Who works in a laboratory and performs scientific experiments?", hint: "Scientist", category: "Science", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: Alexander Graham Bell ___ the telephone.", hint: "Created / Invented", category: "Science", grade: 8, difficulty: 1 },
  { question: "What is the opposite of 'EASY'?", hint: "Hard / Difficult", category: "Vocabulary", grade: 8, difficulty: 1 },
  { question: "What is the opposite of 'BORING'?", hint: "Exciting / Interesting / Fun", category: "Vocabulary", grade: 8, difficulty: 1 },
  { question: "Where do you go to buy fresh bread in the morning?", hint: "Bakery", category: "Places", grade: 8, difficulty: 1 },
  { question: "Where do you go when you need to buy medicine for a cold?", hint: "Pharmacy / Chemist", category: "Places", grade: 8, difficulty: 1 },
  { question: "What should you say when someone gives you a nice birthday gift?", hint: "\"Thank you!\"", category: "Everyday English", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: Would you ___ some orange juice? (like / want)", hint: "Polite offer: Would you ___", category: "Everyday English", grade: 8, difficulty: 1 },
  { question: "Which sentence is correct?\nA) He can plays tennis.\nB) He can play tennis.", hint: "Modal verb rule (can + V1)", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: You ___ study hard if you want to pass the exam.", hint: "Giving advice: should / shouldn't", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: Students ___ talk loudly during an exam.", hint: "Rule: must / mustn't", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "What is the past tense of 'HAVE'?", hint: "Have -> ___", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "What is the past tense of 'MAKE'?", hint: "Make -> ___", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "What is the past tense of 'WRITE'?", hint: "Write -> ___", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: Tomorrow, it ___ be sunny and warm. (will / did)", hint: "Future tense", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: I am ___ to visit my grandparents this weekend.", hint: "Future plan: going / gone", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "Which one is a vegetable: an apple or a carrot?", hint: "Food categories", category: "Food & Meals", grade: 8, difficulty: 1 },
  { question: "Which animal is faster: a cheetah or a turtle?", hint: "Comparatives", category: "Animals", grade: 8, difficulty: 1 },
  { question: "What do you use to take pictures on vacation?", hint: "Camera / Smartphone", category: "Technology", grade: 8, difficulty: 1 },
  { question: "What time do you usually have breakfast in the morning?", hint: "Morning meal time", category: "Daily Life", grade: 8, difficulty: 1 },
  { question: "Which place do you visit to catch an airplane?", hint: "Airport", category: "Places", grade: 8, difficulty: 1 },
  { question: "What do you call a person who flies an airplane as a job?", hint: "Pilot", category: "Jobs", grade: 8, difficulty: 1 },
  { question: "What do you call a person who designs houses and buildings?", hint: "Architect / Engineer", category: "Jobs", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: A true friend never ___ lies to you.", hint: "Tells / Speaks", category: "Friendship", grade: 8, difficulty: 1 },
  { question: "Which one is an outdoor activity: playing video games or camping in a tent?", hint: "Activities", category: "Teen Life", grade: 8, difficulty: 1 },
  { question: "What do you need to connect to the internet without cables?", hint: "Wi-Fi / Wireless", category: "Technology", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: How ___ do you read books? — Every evening.", hint: "Frequency question word (often / many)", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: How ___ water do you drink every day?", hint: "Uncountable question: much / many", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: How ___ students are there in your classroom?", hint: "Countable question: much / many", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "Which phrase means 'very easy' in English?\nA) A piece of cake\nB) A cup of tea", hint: "Common idiom", category: "Everyday English", grade: 8, difficulty: 1 },
  { question: "What do you say when you meet someone for the first time?", hint: "\"Nice to meet you!\"", category: "Everyday English", grade: 8, difficulty: 1 },
  { question: "What should you say when you sneeze or bump into someone by accident?", hint: "\"Excuse me!\" / \"Sorry!\"", category: "Everyday English", grade: 8, difficulty: 1 },
  { question: "Which season is the hottest season of the year?", hint: "Summer / Winter", category: "Weather", grade: 8, difficulty: 1 },
  { question: "What do you wear to protect your eyes from the bright sun?", hint: "Sunglasses", category: "Clothes", grade: 8, difficulty: 1 },
  { question: "What is the past tense of 'READ'?", hint: "Spelled the same, pronounced /red/", category: "Grammar", grade: 8, difficulty: 1 },
  { question: "Which one is healthy: eating fresh fruit or eating fast food every day?", hint: "Health & Nutrition", category: "Daily Life", grade: 8, difficulty: 1 },
  { question: "Where do you go to watch a new movie on a big screen?", hint: "Cinema / Movie theater", category: "Places", grade: 8, difficulty: 1 },
  { question: "Fill in the blank: If you have a toothache, you should go to the ___.", hint: "Dentist", category: "Jobs & Health", grade: 8, difficulty: 1 },
  { question: "What do you use to write an email: a keyboard or a spoon?", hint: "Computer parts", category: "Technology", grade: 8, difficulty: 1 },
  { question: "What is the opposite of 'WIN' in a game or match?", hint: "Lose / Defeat", category: "Vocabulary", grade: 8, difficulty: 1 }
];

// Combined Question Master Pool (140 Unique Questions)
const KEEP_OR_PASS_QUESTIONS = [...GRADE_7_QUESTIONS, ...GRADE_8_QUESTIONS];

// Balanced Mystery Rewards (Positive Gains & Negative Risks - Zero Empty/Blank Boxes)
const MYSTERY_REWARDS = [
  // Positive Outcomes (~63%)
  { points: 100, type: "gain", icon: "⭐", badge: "GAIN", text: "+100 POINTS" },
  { points: 200, type: "gain", icon: "🌟", badge: "GAIN", text: "+200 POINTS" },
  { points: 300, type: "gain", icon: "💎", badge: "REWARD", text: "+300 POINTS" },
  { points: 500, type: "gain", icon: "🎁", badge: "BIG GAIN", text: "+500 POINTS" },
  { points: 750, type: "gain", icon: "🏆", badge: "MEGA REWARD", text: "+750 POINTS" },
  { points: 1000, type: "gain", icon: "👑", badge: "JACKPOT", text: "+1000 POINTS" },
  { points: 200, type: "gain", icon: "💰", badge: "GAIN", text: "+200 POINTS" },
  { points: 500, type: "gain", icon: "🔥", badge: "BIG GAIN", text: "+500 POINTS" },
  { points: 100, type: "gain", icon: "✨", badge: "GAIN", text: "+100 POINTS" },
  { points: 300, type: "gain", icon: "🍀", badge: "REWARD", text: "+300 POINTS" },

  // Negative Outcomes (~37%)
  { points: -100, type: "loss", icon: "⚠️", badge: "RISK", text: "-100 POINTS" },
  { points: -200, type: "loss", icon: "💣", badge: "RISK", text: "-200 POINTS" },
  { points: -300, type: "loss", icon: "⚡", badge: "LOSS", text: "-300 POINTS" },
  { points: -500, type: "loss", icon: "💥", badge: "BIG LOSS", text: "-500 POINTS" },
  { points: -750, type: "loss", icon: "☠️", badge: "HEAVY LOSS", text: "-750 POINTS" },
  { points: -1000, type: "loss", icon: "🚨", badge: "CRITICAL RISK", text: "-1000 POINTS" }
];

// ==========================================
// 3. PERSISTENT QUESTION DECK SYSTEM
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
    this.usedQuestions = [];
    this.cycleCount = 0;
    this.initDeck();
  }

  initDeck() {
    this.availableDeck = shuffle([...this.masterPool]);
    this.cycleCount++;
    console.log(`[Keep or Pass] Deck cycle #${this.cycleCount} initialized with ${this.availableDeck.length} shuffled questions.`);
  }

  setPool(newPool) {
    this.masterPool = [...newPool];
    this.availableDeck = [];
    this.usedQuestions = [];
    this.cycleCount = 0;
    this.initDeck();
  }

  draw() {
    if (this.availableDeck.length === 0) {
      console.log(`[Keep or Pass] Question deck exhausted! Reshuffling all ${this.masterPool.length} questions for Cycle #${this.cycleCount + 1}.`);
      this.initDeck();
    }
    const q = this.availableDeck.shift();
    this.usedQuestions.push(q);
    return q;
  }

  drawBatch(count) {
    const batch = [];
    for (let i = 0; i < count; i++) {
      batch.push(this.draw());
    }
    return batch;
  }

  getStats() {
    return {
      masterTotal: this.masterPool.length,
      remainingInDeck: this.availableDeck.length,
      usedInCycle: this.usedQuestions.length,
      currentCycle: this.cycleCount
    };
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

// Programmatic Question Bank Verification
function verifyQuestionBank() {
  const g7 = GRADE_7_QUESTIONS.length;
  const g8 = GRADE_8_QUESTIONS.length;
  const total = KEEP_OR_PASS_QUESTIONS.length;
  const uniqueSet = new Set(KEEP_OR_PASS_QUESTIONS.map(q => q.question.trim().toLowerCase()));
  const uniqueTotal = uniqueSet.size;

  console.log(`%c[Keep or Pass Question Bank Verified]`, "color: #10b981; font-weight: bold; font-size: 1.1em;");
  console.log(`📘 Grade 7 Questions : ${g7}`);
  console.log(`📗 Grade 8 Questions : ${g8}`);
  console.log(`📚 Total Questions   : ${total}`);
  console.log(`✨ Unique Questions  : ${uniqueTotal}`);

  if (uniqueTotal !== total) {
    console.warn(`[Keep or Pass] Warning: Found ${total - uniqueTotal} duplicate question(s)!`);
  }
}

// Procedural Sound Effects
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

let gameState = {
  numTeams: 2,
  totalRounds: 12,
  currentQuestionIdx: 0,
  activeTeamIdx: 0,
  teams: [],
  questions: [],
  pendingReward: null
};

// Elements
const setupScreen = document.getElementById("setupScreen");
const questionScreen = document.getElementById("questionScreen");
const decisionScreen = document.getElementById("decisionScreen");
const revealScreen = document.getElementById("revealScreen");
const podiumScreen = document.getElementById("podiumScreen");

const scoreboardBar = document.getElementById("scoreboardBar");
const decisionScoreboard = document.getElementById("decisionScoreboard");
const activeTeamTurnEl = document.getElementById("activeTeamTurn");
const questionProgressEl = document.getElementById("questionProgress");
const questionCategoryEl = document.getElementById("questionCategory");
const questionTextEl = document.getElementById("questionText");
const hintBoxEl = document.getElementById("hintBox");

const decisionTeamTitle = document.getElementById("decisionTeamTitle");
const revealCard = document.getElementById("revealCard");
const revealBadge = document.getElementById("revealBadge");
const revealActionTag = document.getElementById("revealActionTag");
const revealTargetTeam = document.getElementById("revealTargetTeam");
const revealIcon = document.getElementById("revealIcon");
const revealPointsText = document.getElementById("revealPointsText");
const revealDescText = document.getElementById("revealDescText");

let consecutiveLossCount = 0;

function getRandomReward() {
  let pool = MYSTERY_REWARDS;
  // If we already had 2 negative outcomes in a row, guarantee a positive reward to avoid long negative streaks
  if (consecutiveLossCount >= 2) {
    pool = MYSTERY_REWARDS.filter(r => r.type === "gain");
  }
  const reward = pool[Math.floor(Math.random() * pool.length)];
  if (reward.type === "loss") {
    consecutiveLossCount++;
  } else {
    consecutiveLossCount = 0;
  }
  return reward;
}

document.addEventListener("DOMContentLoaded", () => {
  verifyQuestionBank();
  setupPills();
  initEvents();
});

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
  document.getElementById("btnSoundToggle").addEventListener("click", (e) => {
    sfx.muted = !sfx.muted;
    e.currentTarget.textContent = sfx.muted ? "🔇" : "🔊";
  });

  document.getElementById("btnStartGame").addEventListener("click", startMatch);
  document.getElementById("btnAnswerCorrect").addEventListener("click", onAnswerCorrect);
  document.getElementById("btnAnswerWrong").addEventListener("click", onAnswerWrong);
  document.getElementById("btnChoiceKeep").addEventListener("click", () => handleDecision("keep"));
  document.getElementById("btnChoicePass").addEventListener("click", () => handleDecision("pass"));
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
  }

  gameState.numTeams = teamCount;
  gameState.totalRounds = roundCount;
  gameState.currentQuestionIdx = 0;
  gameState.activeTeamIdx = 0;
  consecutiveLossCount = 0;

  gameState.teams = [];
  for (let i = 1; i <= teamCount; i++) {
    gameState.teams.push({ name: `Team ${i}`, score: 0 });
  }

  // Draw non-repeating questions sequentially from the global deck
  gameState.questions = globalDeck.drawBatch(roundCount);

  setupScreen.classList.add("hidden");
  podiumScreen.classList.add("hidden");
  showQuestionScreen();
}

function renderScoreboard(container) {
  container.innerHTML = "";
  gameState.teams.forEach((t, idx) => {
    const chip = document.createElement("div");
    chip.className = `score-chip ${idx === gameState.activeTeamIdx ? "active-team" : ""}`;
    chip.innerHTML = `<span class="team-name">${t.name}</span><span class="team-pts">${t.score}</span>`;
    container.appendChild(chip);
  });
}

function showQuestionScreen() {
  questionScreen.classList.remove("hidden");
  decisionScreen.classList.add("hidden");
  revealScreen.classList.add("hidden");

  renderScoreboard(scoreboardBar);

  const curQ = gameState.questions[gameState.currentQuestionIdx];
  activeTeamTurnEl.textContent = `${gameState.teams[gameState.activeTeamIdx].name}'s Turn`;
  questionProgressEl.textContent = `Question ${gameState.currentQuestionIdx + 1} / ${gameState.totalRounds}`;
  questionCategoryEl.textContent = curQ.category || "Vocabulary & Grammar";
  questionTextEl.textContent = curQ.question;
  hintBoxEl.textContent = `💡 Hint: ${curQ.hint || "Think carefully!"}`;
}

function onAnswerCorrect() {
  sfx.playChime();
  // Pick random reward from valid point pool (positive & negative balanced, no empty boxes)
  gameState.pendingReward = getRandomReward();

  questionScreen.classList.add("hidden");
  decisionScreen.classList.remove("hidden");

  renderScoreboard(decisionScoreboard);
  decisionTeamTitle.textContent = `${gameState.teams[gameState.activeTeamIdx].name}, what will you do?`;
}

function onAnswerWrong() {
  sfx.playBoom();
  // Pass turn directly to next question/team
  advanceTurn();
  if (gameState.currentQuestionIdx >= gameState.totalRounds) {
    showPodium();
  } else {
    showQuestionScreen();
  }
}

function handleDecision(choice) {
  decisionScreen.classList.add("hidden");
  revealScreen.classList.remove("hidden");

  let targetTeamIdx;
  if (choice === "keep") {
    targetTeamIdx = gameState.activeTeamIdx;
    revealActionTag.textContent = `${gameState.teams[targetTeamIdx].name} KEPT THE BOX!`;
    revealTargetTeam.textContent = `${gameState.teams[targetTeamIdx].name} receives:`;
  } else {
    // Pass to next opponent team
    targetTeamIdx = (gameState.activeTeamIdx + 1) % gameState.numTeams;
    revealActionTag.textContent = `PASSED TO ${gameState.teams[targetTeamIdx].name.toUpperCase()}!`;
    revealTargetTeam.textContent = `${gameState.teams[targetTeamIdx].name} must take:`;
  }

  const rew = gameState.pendingReward;

  // Restart card animations smoothly
  revealCard.classList.remove("is-gain", "is-loss");
  void revealCard.offsetWidth; // trigger reflow

  revealIcon.textContent = rew.icon;
  revealPointsText.textContent = rew.text;

  if (rew.type === "gain") {
    revealCard.classList.add("is-gain");
    revealBadge.className = "reveal-badge gain-badge";
    revealBadge.textContent = rew.badge || "GAIN";
    sfx.playFanfare();
    revealDescText.textContent = `Awesome! +${rew.points} points awarded to ${gameState.teams[targetTeamIdx].name}.`;
  } else {
    revealCard.classList.add("is-loss");
    revealBadge.className = "reveal-badge loss-badge";
    revealBadge.textContent = rew.badge || "RISK";
    sfx.playBoom();
    revealDescText.textContent = `Uh oh! ${gameState.teams[targetTeamIdx].name} loses ${Math.abs(rew.points)} points!`;
  }

  // Update target team score (floor at 0)
  gameState.teams[targetTeamIdx].score = Math.max(0, gameState.teams[targetTeamIdx].score + rew.points);
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
  podiumScreen.classList.remove("hidden");

  sfx.playFanfare();
  const podiumEl = document.getElementById("finalPodium");
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
