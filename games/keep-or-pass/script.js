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
// 2. GRADE 8 QUESTION BANK (70 UNIQUE QUESTIONS)
// ==========================================
const GRADE_8_QUESTIONS = [
  { question: "Which phrase means a loyal friend who is always by your side through good and bad times?", hint: "Friendship idiom", category: "Friendship", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: A true best friend will always back you ___ when you face troubles.", hint: "Phrasal verb meaning: support someone", category: "Friendship", grade: 8, difficulty: 2 },
  { question: "Which phrasal verb means to have a friendly, harmonious relationship with somebody?", hint: "Get ___ with someone", category: "Friendship", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: A person who stubbornly refuses to change their opinion is ___.", hint: "Stubborn trait", category: "Personality", grade: 8, difficulty: 2 },
  { question: "What is the English word for formally agreeing to an invitation? (Opposite of 'refuse')", hint: "Invitation response", category: "Social Interactions", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: I would love to join your barbecue, but I cannot ___ it because I am busy.", hint: "Make it / Attend", category: "Social Interactions", grade: 8, difficulty: 2 },
  { question: "What do we call a friend you can depend on and trust completely with private secrets?", hint: "Dependable / Trustworthy", category: "Friendship", grade: 8, difficulty: 2 },
  { question: "Which phrasal expression means to spend free leisure time relaxing together with friends?", hint: "Hang ___ with friends", category: "Teen Life", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: To make delicious omelettes, first pour butter into the frying ___.", hint: "Kitchen cookware", category: "In the Kitchen", grade: 8, difficulty: 2 },
  { question: "What culinary verb means to cut food ingredients into small, uniform cubes?", hint: "Cooking preparation", category: "In the Kitchen", grade: 8, difficulty: 2 },
  { question: "Which cooking technique cooks food by immersing it in boiling hot oil?", hint: "Cooking method", category: "In the Kitchen", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: Before baking the cookies, make sure to ___ the oven to 180 degrees.", hint: "Heat before cooking", category: "In the Kitchen", grade: 8, difficulty: 2 },
  { question: "Which kitchen utensil with small holes is used to drain boiled pasta from hot water?", hint: "Kitchen tool", category: "In the Kitchen", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: Add a small pinch of ___ and black pepper to season the salad.", hint: "Common white seasoning", category: "In the Kitchen", grade: 8, difficulty: 2 },
  { question: "What cooking verb means to cook bread, pastry, or cake inside an oven?", hint: "Baking", category: "In the Kitchen", grade: 8, difficulty: 2 },
  { question: "What do we call a written list of ingredients and preparation steps for cooking a meal?", hint: "Culinary guide", category: "In the Kitchen", grade: 8, difficulty: 2 },
  { question: "What polite phone phrase do you say to ask the caller to wait for a brief moment?", hint: "Phone phrase: 'Hold on' / 'Hang on'", category: "On the Phone", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: Could you please speak ___ a bit? The line is breaking up.", hint: "Voice volume", category: "On the Phone", grade: 8, difficulty: 2 },
  { question: "What phrasal verb means to end a telephone conversation by putting the receiver down?", hint: "Hang ___", category: "On the Phone", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: May I leave a brief ___ for Mr. Miller because he is away from his desk?", hint: "Communication note", category: "On the Phone", grade: 8, difficulty: 2 },
  { question: "What polite phrase do you say when answering a business call?", hint: "Formal phone greeting", category: "On the Phone", grade: 8, difficulty: 2 },
  { question: "What is the symbol '@' officially called in an email address like student@school.com?", hint: "Email character", category: "The Internet", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: To keep your social media accounts safe from hackers, choose a strong ___.", hint: "Account security", category: "The Internet", grade: 8, difficulty: 2 },
  { question: "What do we call unwanted, annoying commercial junk emails received in your inbox?", hint: "Junk email", category: "The Internet", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: A web ___ such as Chrome or Edge allows you to browse internet pages.", hint: "Internet software", category: "The Internet", grade: 8, difficulty: 2 },
  { question: "What electronic device transmits wireless internet signals throughout a house?", hint: "Wireless network device", category: "The Internet", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: A person who spends too many hours scrolling online is called an internet ___.", hint: "Addict / Surfer", category: "The Internet", grade: 8, difficulty: 2 },
  { question: "Which extreme sport involves leaping from a high bridge secured by a thick elastic rope?", hint: "Extreme adventure", category: "Adventures", grade: 8, difficulty: 2 },
  { question: "Which water sport involves paddling down fast, rough river rapids in an inflatable raft?", hint: "Whitewater adventure", category: "Adventures", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: Skydiving and rock climbing are thrilling ___ sports for brave athletes.", hint: "Action sports", category: "Adventures", grade: 8, difficulty: 2 },
  { question: "What equipment opens wide in the air to slow down a skydiver's descent to the ground?", hint: "Aviation gear", category: "Adventures", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: An adrenaline ___ is someone who constantly seeks out thrilling sensations.", hint: "Thrill seeker idiom", category: "Adventures", grade: 8, difficulty: 2 },
  { question: "What is the travel term for a holiday package where flights, hotel, and all meals are included?", hint: "Holiday type", category: "Tourism", grade: 8, difficulty: 2 },
  { question: "What tourist activity involves touring around a city to visit famous landmarks and monuments?", hint: "Travel activity", category: "Tourism", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: You must present your valid ___ at passport control when traveling abroad.", hint: "International ID document", category: "Tourism", grade: 8, difficulty: 2 },
  { question: "What is a small item or keepsake you buy during a trip to remind you of that destination?", hint: "Travel memento", category: "Tourism", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: A youth hostel or hotel provides overnight ___ for travelers on holiday.", hint: "Place to stay", category: "Tourism", grade: 8, difficulty: 2 },
  { question: "Which household chore involves using an electric suction machine to clean rugs and carpets?", hint: "Cleaning chore", category: "Chores", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: After dinner, it is my task to load the dirty bowls and spoons into the ___.", hint: "Kitchen appliance", category: "Chores", grade: 8, difficulty: 2 },
  { question: "Which household chore involves smoothing wrinkles from washed shirts with a heated iron?", hint: "Clothing care", category: "Chores", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: In a cooperative family, everyone helps out with daily household ___.", hint: "Daily home tasks", category: "Chores", grade: 8, difficulty: 2 },
  { question: "Which chore involves carrying full garbage bags out to the neighborhood waste bin?", hint: "Waste chore", category: "Chores", grade: 8, difficulty: 2 },
  { question: "What morning routine involves pulling up the sheets and fluffing the pillows neatly?", hint: "Bedroom chore", category: "Chores", grade: 8, difficulty: 2 },
  { question: "Which sudden natural disaster is caused by the violent shaking of the Earth's crust?", hint: "Geological disaster", category: "Natural Forces", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: A long period without any rain that causes severe water shortages is a ___.", hint: "Weather disaster", category: "Natural Forces", grade: 8, difficulty: 2 },
  { question: "What do we call a gigantic, destructive sea wave triggered by an undersea earthquake?", hint: "Marine disaster", category: "Natural Forces", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: A violent spinning funnel of high-speed winds touching the ground is a ___.", hint: "Storm phenomenon", category: "Natural Forces", grade: 8, difficulty: 2 },
  { question: "What natural event happens when overflowing river waters completely submerge dry streets?", hint: "Water disaster", category: "Natural Forces", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: Red hot lava and thick clouds of ash erupt from the crater of a ___.", hint: "Geological feature", category: "Natural Forces", grade: 8, difficulty: 2 },
  { question: "What rapid slide of huge snow masses down a mountain slope poses danger to climbers?", hint: "Mountain hazard", category: "Natural Forces", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: In an earthquake emergency drill, always remember: Drop, Cover, and ___ On!", hint: "Safety drill", category: "Natural Forces", grade: 8, difficulty: 2 },
  { question: "What optical laboratory instrument is used to magnify microscopic bacteria and cells?", hint: "Scientific equipment", category: "Science & Tech", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: In 1928, Sir Alexander Fleming made the historic discovery of ___.", hint: "First antibiotic medicine", category: "Science & Tech", grade: 8, difficulty: 2 },
  { question: "What biological process allows green plants to convert solar light into glucose and oxygen?", hint: "Plant biology", category: "Science & Tech", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: Artificial ___ (AI) enables modern machines to learn and solve complex tasks.", hint: "Tech concept", category: "Science & Tech", grade: 8, difficulty: 2 },
  { question: "What medical injection helps the body build active immunity against infectious viruses?", hint: "Preventative medicine", category: "Science & Tech", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: Freshwater scarcity is an urgent global ___ that requires worldwide action.", hint: "Global challenge", category: "Environment", grade: 8, difficulty: 2 },
  { question: "Which English idiom means to reach a definitive decision after weighing your choices?", hint: "Make up one's ___", category: "Expressions", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: If you come across an unfamiliar term, look it ___ in a reliable dictionary.", hint: "Phrasal verb for search", category: "Expressions", grade: 8, difficulty: 2 },
  { question: "What does the informal English expression 'a piece of cake' signify?", hint: "Idiomatic meaning", category: "Expressions", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: He has been practicing the violin ___ six years. (for / since)", hint: "Time preposition with duration", category: "Grammar", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: We have studied at this school ___ 2021. (for / since)", hint: "Time preposition with starting year", category: "Grammar", grade: 8, difficulty: 2 },
  { question: "What is the past participle (V3) form of the irregular verb 'WRITE'?", hint: "Write -> Wrote -> ___", category: "Grammar", grade: 8, difficulty: 2 },
  { question: "What is the past participle (V3) form of the irregular verb 'TAKE'?", hint: "Take -> Took -> ___", category: "Grammar", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: If you study hard for the final exam, you ___ pass with flying colours.", hint: "First conditional modal", category: "Grammar", grade: 8, difficulty: 2 },
  { question: "Which modal verb indicates mandatory legal obligation or necessity in English?", hint: "Must / Should / May", category: "Grammar", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: Drivers ___ stop their cars when the traffic light turns red.", hint: "Modal verb of obligation", category: "Grammar", grade: 8, difficulty: 2 },
  { question: "What is a close synonym for the adjective 'ENORMOUS'?", hint: "Word with similar meaning", category: "Vocabulary", grade: 8, difficulty: 2 },
  { question: "What is the direct antonym (opposite) of the adjective 'ANCIENT'?", hint: "Opposite meaning", category: "Vocabulary", grade: 8, difficulty: 2 },
  { question: "Fill in the blank: Never give ___ on your ambitions; hard work always pays off eventually.", hint: "Phrasal verb: quit", category: "Expressions", grade: 8, difficulty: 2 }
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
