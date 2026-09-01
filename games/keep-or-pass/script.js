/**
 * Keep or Pass — Game Script
 * Team-based vocabulary and strategy game with procedural Web Audio
 * Featuring a balanced, curriculum-aligned Question Bank (157 Grade 7 + 158 Grade 8 = 315 unique questions)
 * and a persistent Fisher-Yates Shuffled Question Deck system.
 */

// ==========================================
// 1. GRADE 7 QUESTION BANK (157 CURATED QUESTIONS)
// ==========================================
const GRADE_7_QUESTIONS = [
  {
    "question": "Which word describes a person who always shares and buys gifts for friends?",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What is the opposite of 'HONEST'?",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which adjective describes someone who always arrives exactly on time?",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Mark is very ___. He never changes his mind easily.",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which word describes someone who feels nervous when speaking in front of people?",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: A person who drops things and breaks cups by accident is ___.",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What is the opposite of 'GENEROUS'?",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which adjective describes a calm person who is friendly and not easily worried?",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: She has curly blonde hair and bright blue ___.",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What do we call the small natural brown spots on someone's skin?",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: He exercises every day to stay strong and ___.",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What is the comparative form of the adjective 'TALL'?",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: My grandfather has a grey ___ on his chin.",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which adjective describes someone who likes meeting people and making friends?",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Complete: John is more ___ (hardworking) than his brother.",
    "category": "Appearance & Personality",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which sport is played with a racket, a shuttlecock, and a high net?",
    "category": "Sports",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What protective gear must a cyclist wear on their head for safety?",
    "category": "Sports",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which sport takes place inside a swimming pool?",
    "category": "Sports",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: You need a bow and ___ to practice archery.",
    "category": "Sports",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "What do swimmers wear over their eyes to see clearly underwater?",
    "category": "Sports",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which sport is played on snowy mountain slopes with two long boards?",
    "category": "Sports",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: How ___ do you train? — Twice every week.",
    "category": "Sports",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which of these is an outdoor nature sport: chess or hiking?",
    "category": "Sports",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What do we call a match that ends with the same score for both teams (e.g. 1-1)?",
    "category": "Sports",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Professional athletes must eat a ___ diet to stay healthy.",
    "category": "Sports",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What piece of equipment is used to hit the ball in baseball?",
    "category": "Sports",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which team sport has 11 players on each side on a grass pitch?",
    "category": "Sports",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: The champion was awarded a gold ___ at the tournament.",
    "category": "Sports",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which verb do we use with basketball: PLAY, DO, or GO?",
    "category": "Sports",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which verb do we use with gymnastics: PLAY, DO, or GO?",
    "category": "Sports",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Thomas Edison was a famous inventor who was ___ in 1847.",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What do we call a book written about a real person's life history?",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What is the past simple form of the irregular verb 'WRITE'?",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Albert Einstein ___ (win) the Nobel Prize in Physics in 1921.",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What is the past simple form of the regular verb 'DISCOVER'?",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: After high school, she went to university to ___ chemistry.",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What word means to complete school or university and receive a diploma?",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Alexander Graham Bell ___ the first electric telephone.",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What is the past simple of the verb 'GO'?",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What is the past simple of the verb 'BECOME'?",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Aziz Sancar received the Nobel Prize for his scientific ___ in DNA repair.",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "What do we call a historical time period of 100 years?",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Mozart started composing musical pieces when he was a little ___.",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What is the opposite of 'FAIL' when taking a school test?",
    "category": "Biographies",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which wild mammal is the largest living creature in the oceans?",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What do we call wild animals that feed only on meat?",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "What do we call animals that feed only on plants and leaves?",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Animal species that no longer exist anywhere on Earth are ___.",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which flightless bird lives in icy Antarctica and is a fast swimmer?",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which Asian big cat has orange fur with distinctive black stripes?",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What word means the natural living environment of an animal?",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Cold-blooded animals like snakes and lizards are called ___.",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Which African animal has a very long neck to reach high tree branches?",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What illegal human activity involves killing wild animals for fur or horns?",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Giant pandas live in the bamboo forests of ___.",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which large grey animal has tusks and a long flexible trunk?",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Eagles use their wide ___ to soar high in the sky.",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What sharp curved claws on a bird of prey are used to catch food?",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Governments establish national parks to ___ endangered wildlife.",
    "category": "Wild Animals",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which TV programme provides daily reports on current global events?",
    "category": "Television",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which TV show uses drawn animation and is widely watched by kids?",
    "category": "Television",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What type of educational programme shows true facts about nature and history?",
    "category": "Television",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: In a ___ show, players answer trivia questions for prizes.",
    "category": "Television",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What device do you press buttons on to change TV channels from your seat?",
    "category": "Television",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What idiom describes a lazy person who spends hours watching TV on the sofa?",
    "category": "Television",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: I prefer comedies ___ horror movies because they make me laugh.",
    "category": "Television",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What is the opposite of an 'EXCITING' movie?",
    "category": "Television",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What do we call short video clips during TV breaks that advertise products?",
    "category": "Television",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: A ___ opera is a dramatic TV series about family conflicts.",
    "category": "Television",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Which adjective means providing useful knowledge and lessons?",
    "category": "Television",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Please turn ___ the TV sound; the baby is sleeping.",
    "category": "Television",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What TV genre features invited celebrity guests chatting with a host?",
    "category": "Television",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Complete: I enjoyed the movie; the acting was truly ___ (wonderful).",
    "category": "Television",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What paper card do you send to friends to invite them to a celebration?",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What special baked dessert with candles is served at a birthday party?",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: We blew up colourful rubber ___ to decorate the party hall.",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which celebration takes place when students complete their school degrees?",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Write down everyone's name on the ___ list before sending cards.",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What wrapped presents do guests bring to give to the birthday person?",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: We bought two ___ of orange juice for the party. (bottles / slices)",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which quantifier is used with countable items: 'A FEW' or 'A LITTLE'?",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which celebration on December 31st marks the beginning of a fresh calendar year?",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: We should hang ribbons to ___ the classroom for the party.",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What cheerful phrase do people say to someone on their birthday: 'Happy ___'?",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Is there ___ apple juice left in the fridge? (any / some)",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What paper items are hung on walls as party decorations?",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What do guests write their kind wishes inside before giving a present?",
    "category": "Celebrations",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which modal verb do we use for future predictions: WILL, MUST, or CAN?",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: In the future, people might travel in ___ cars through the air.",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What is the negative short form of 'WILL' for future predictions?",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: I hope to have a successful ___ as a software engineer.",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which word expresses complete certainty: 'DEFINITELY' or 'MAYBE'?",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: In the year 2050, intelligent ___ will clean our homes.",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What do we call a dream job that you hope to achieve in the future?",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: In fifty years, tourists might take holidays on the ___ in space.",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which adverb expresses a high chance: 'PROBABLY' or 'NEVER'?",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: She plans to study abroad to learn a second foreign ___.",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What electronic touchscreen device has replaced heavy paper books in many schools?",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: I ___ (believe) our cities will become greener in the future.",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What type of futuristic city might humans build under the ocean surface?",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Work hard and believe in yourself, and your goals will come ___.",
    "category": "Dreams & Future",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Where do people go to borrow and read books quietly for free?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Where do you go to purchase medicine prescribed by a medical doctor?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Where do doctors and nurses care for sick and injured patients?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Where do you go to buy fresh bread and rolls baked every morning?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Where do you go to report a stolen bike or lost bag to police officers?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Where can visitors view famous oil paintings and art sculptures?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Where do you go to send a postal parcel or buy postage stamps?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Where do emergency firefighters park their trucks and wait for callouts?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Where do audiences go to watch newly released movies on a huge screen?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Where do you go to buy fresh meat like minced beef and chicken?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Where can you buy fresh local fruits and vegetables in your neighbourhood?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Where do passengers go in a city to board a commercial flight?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Where do city mayors and local council members manage municipal services?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Where do friends meet to drink tea, coffee, and eat snacks?",
    "category": "Public Buildings",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What process converts used plastic, paper, and glass into new materials?",
    "category": "Environment",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What clean, renewable energy is generated directly from sunlight?",
    "category": "Environment",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What term describes the gradual increase in the overall temperature of the Earth?",
    "category": "Environment",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Destroying forests and cutting down too many trees is called ___.",
    "category": "Environment",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "What should you do to electrical lights when leaving an empty room?",
    "category": "Environment",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What should you turn off while brushing teeth to avoid wasting clean water?",
    "category": "Environment",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Always throw candy wrappers into the rubbish ___.",
    "category": "Environment",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What eco-friendly two-wheeled vehicle can you ride instead of driving a car?",
    "category": "Environment",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Factories should place ___ on smokestacks to reduce air pollution.",
    "category": "Environment",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "What green plants should we plant in gardens to increase clean oxygen?",
    "category": "Environment",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What type of reusable bag should you use when shopping instead of plastic?",
    "category": "Environment",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: We must keep plastic waste out of our seas to ___ marine life.",
    "category": "Environment",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which renewable energy source uses large rotating blades driven by natural breezes?",
    "category": "Environment",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Do not ___ freshwater by leaving garden hoses running unattended.",
    "category": "Environment",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Which planet is famously called the 'Red Planet' in our solar system?",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What is the massive blazing star at the center of our solar system?",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which planet is the largest planet in our solar system?",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What do we call a person trained to travel and conduct experiments in space?",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What optical tool do stargazers use to look at distant craters on planets?",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: The Earth takes one year to ___ completely around the Sun.",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What natural rocky satellite orbits Earth every 27 to 29 days?",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which planet orbits closest to the Sun in our solar system?",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Saturn is famous for its stunning visible system of ___.",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What invisible natural force keeps people and objects grounded on Earth's surface?",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What rocket vehicle is launched to carry space crews and satellites into orbit?",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Jupiter is much ___ (large) in volume than planet Earth.",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What term describes a massive system of billions of stars, such as the Milky Way?",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 3
  },
  {
    "question": "Is Pluto officially classified today as a major planet or a dwarf planet?",
    "category": "Planets & Space",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What is the opposite of the adjective 'CHEAP'?",
    "category": "Vocabulary",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What is the opposite of the adjective 'NOISY'?",
    "category": "Vocabulary",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What is the superlative form of 'GOOD'?",
    "category": "Grammar",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What is the comparative form of 'BAD'?",
    "category": "Grammar",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Yesterday was Tuesday, so tomorrow will be ___.",
    "category": "Time & Calendar",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Which calendar month comes immediately after July?",
    "category": "Time & Calendar",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What polite phrase do English speakers say when someone sneezes: 'Bless ___'?",
    "category": "Everyday English",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: A veterinary doctor (vet) treats and heals sick ___.",
    "category": "Jobs & Occupations",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What is the past simple form of the verb 'BUY'?",
    "category": "Grammar",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: We ___ (watch) an exciting football match yesterday afternoon.",
    "category": "Grammar",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "What is the comparative form of the adjective 'FAST'?",
    "category": "Grammar",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: An elephant is ___ (heavy) than a lion.",
    "category": "Grammar",
    "grade": 7,
    "difficulty": 2
  },
  {
    "question": "What meal do people normally eat in the morning after waking up?",
    "category": "Everyday English",
    "grade": 7,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: She has two cats ___ one dog. (and / but)",
    "category": "Grammar",
    "grade": 7,
    "difficulty": 1
  }
];

// ==========================================
// 2. GRADE 8 QUESTION BANK (158 CURATED QUESTIONS)
// ==========================================
const GRADE_8_QUESTIONS = [
  {
    "question": "Which word describes a loyal friend who is dependable and keeps promises?",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What phrasal verb means to give support and encouragement to a friend in need?",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Best friends usually share many interests in ___.",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What phrasal verb means to maintain a good, harmonious relationship with a classmate?",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: A reliable friend will never reveal your private ___ to others.",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Which adjective describes someone who proudly thinks they are superior to others?",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What polite phrase can you use to warmly accept an invitation to an event?",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What polite phrase can you use to decline an invitation when you have prior plans?",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: You can always ___ on me whenever you need emotional support.",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Which adjective describes a sneaky person who deceives friends secretly?",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: 'Would you like to come over?' — 'Sounds ___! I would love to.'",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What do we call a polite reason given when you are unable to attend an event?",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which adjective describes someone who speaks carefully without hurting other people's feelings?",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: True friends always speak the ___ to one another.",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What is the opposite of a 'GENUINE' and honest friend?",
    "category": "Friendship",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which musical genre is fast, heavy, and features distorted electric guitars?",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: I am very fond ___ listening to upbeat pop songs.",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which adjective means fashionable, modern, and popular among teenagers?",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What expression means that you dislike something so strongly you cannot tolerate it?",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: When teens go camping in the forest, they pitch a ___ for shelter.",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Which phrase means to be very interested in and excited about a hobby?",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: My brother is keen ___ playing computer games every evening.",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What live musical performance do teenagers attend to hear their favourite musicians?",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: She prefers calm melodies because rock music is too ___ for her ears.",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What traditional martial art involves white uniforms, colored belts, and kicks?",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Teens often communicate with classmates on social ___ apps.",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Which action describes balancing and rolling on a four-wheeled wooden board?",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: He prefers comfortable, ___ clothes like hoodies and denim jeans.",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What do we call a person who loves spending time in nature and walking outdoors?",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: How often do you work out? — I exercise ___ day.",
    "category": "Teen Life",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Which cooking method cooks ingredients in water heated to 100 degrees Celsius?",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Which cooking method uses dry heat inside an oven to make bread or pastry?",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What kitchen action means to cut tomatoes or cucumbers into thin slices?",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What kitchen verb means to remove the outer skin from a potato or banana?",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Which metal kitchen tool with sharp holes is used to shred cheese finely?",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Pour the boiled spaghetti into a colander to ___ all the water.",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "What distinct taste does a fresh lemon or vinegar possess?",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Add a small pinch of ___ to enhance the savoury flavor.",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What kitchen action involves pressing and folding flour and water into dough with hands?",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "Which utensil is used to stir soup in a deep saucepan on the stove?",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Next, ___ the eggs vigorously in a mixing bowl with a fork.",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What do we call a written text detailing cooking instructions and required ingredients?",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which cooking method prepares meat on metal grates directly above burning charcoal?",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Adding extra red chili peppers will make the sauce very ___.",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What kitchen action describes applying butter or jam across a slice of toast?",
    "category": "In The Kitchen",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What polite phone phrase means 'Please wait while I connect your call'?",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What phrasal verb means to connect a phone caller to another office extension?",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "What phrasal verb means to disconnect a phone call when conversation finishes?",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: I am busy in class right now. Can I call you ___ later?",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What do you record or write down when someone you called is unavailable?",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: 'May I ___ to Mr. Harris, please?'",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What polite question do you ask to discover the identity of a phone caller?",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: The connection is very weak. Could you speak more ___?",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What phone tone sounds when the person you are dialing is speaking to someone else?",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: She sent a short text ___ to confirm the meeting time.",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What communication feature allows callers to see live video of each other?",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: 'Who is ___?' — 'This is Sarah from the basketball team.'",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What phrase describes a colleague who is temporarily absent from their desk?",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: I will deliver your urgent ___ to the principal right away.",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What sound does a smartphone produce when an incoming call arrives?",
    "category": "On The Phone",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What action means transferring a photo or file from your device onto a website?",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What action means saving a document or music track from the web onto your phone?",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What confidential security code protects your personal email account from hackers?",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: An email ___ is a file attached to an electronic message.",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What application program (such as Chrome or Firefox) is used to browse websites?",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Never reveal your home address or passwords to online ___.",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What website tool (like Google) indexes the web to help you locate information?",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Enter your username and secret code to ___ into your student portal.",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What underlined text or button navigates the user to a different web destination?",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: A secure password should mix letters, digits, and special ___.",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What harmful software code can infect computer operating systems and destroy data?",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Check your router if your web ___ is running very slowly.",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What wireless networking technology allows mobile gadgets to access the internet?",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Always remember to ___ out when finishing work on a shared library computer.",
    "category": "The Internet",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Which extreme adventure involves leaping from a high crane tied to an elastic rope?",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Which sport involves paddling an inflatable raft down fast white-water rapids?",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What buoyant life vest must you wear around your chest in river water sports?",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which aerial sport involves jumping from an aircraft and deploying a parachute?",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: An adrenaline ___ is someone who thrives on extreme thrills.",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What mountain sport requires scaling steep rock cliffs using safety ropes and harness?",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What underwater sport uses pressurized air tanks and regulators to dive deep?",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: A protective hard ___ must be worn to prevent head trauma while caving.",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Which adventure sport involves launching from hills with a wide fabric glider wing?",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: I prefer rafting ___ canoeing because it provides more excitement.",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which adjective describes sports full of severe hazards and intense excitement?",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What neoprene water suit provides thermal insulation for deep-sea divers?",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Performing extreme sports safely requires proper guidance and safety ___.",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What flat-ended oar is held in hands to steer a kayak through river currents?",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which sport is considered more extreme: playing indoor badminton or paragliding?",
    "category": "Adventures",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Where do tourists book rooms and stay overnight when vacationing in another city?",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What mementos do travelers purchase to remind them of destinations they explored?",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What type of holiday booking includes room accommodation, all meals, and entertainment?",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Where can vacationers inspect ancient temple ruins, sculptures, and historical relics?",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Tourists in Cappadocia wake up early to ride in hot air ___.",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What government passport document is mandatory when traveling to foreign nations?",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: We reserved a cozy bed & ___ for our short weekend excursion.",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What term describes the structural design and style of ancient historic buildings?",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Ephesus is a world-renowned ___ archaeological city in Turkey.",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What professional person leads guided tours and explains history to sightseers?",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: We booked a seaside resort because we love relaxing on the sandy ___.",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What term describes authentic food recipes prepared in a specific region for centuries?",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Passengers must present their boarding ___ before entering the flight.",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which adjective means possessing centuries of significant history (e.g. ancient castles)?",
    "category": "Tourism",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which household chore involves cleaning carpet fibers with an electric vacuum?",
    "category": "Chores",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Remember to take ___ the rubbish bag before it begins to smell.",
    "category": "Chores",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What kitchen appliance automatically cleans dirty crockery, glassware, and cutlery?",
    "category": "Chores",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: It is your task to ___ the table with plates and napkins for lunch.",
    "category": "Chores",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Which chore uses a hot electric appliance to remove wrinkles from washed clothes?",
    "category": "Chores",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: In the morning, I always ___ my bed after getting dressed.",
    "category": "Chores",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What chore involves wiping dust particles off wooden furniture with a duster?",
    "category": "Chores",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Family members should divide domestic ___ fairly among themselves.",
    "category": "Chores",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What task involves supplying water to potted plants so their leaves do not dry out?",
    "category": "Chores",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: I need to do the ___ because all my shirts and socks are dirty.",
    "category": "Chores",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which modal verb indicates strict obligation or mandatory house rules: MUST or MAY?",
    "category": "Chores",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: It is my brother's ___ to take the dog for a walk every evening.",
    "category": "Chores",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What long-handled brush is used to sweep dust and crumbs off the floor?",
    "category": "Chores",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Keep your study desk organized and ___ after finishing homework.",
    "category": "Chores",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What chore involves washing pots, bowls, and cutlery in the kitchen sink?",
    "category": "Chores",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Who conducts empirical experiments in a laboratory to discover new knowledge?",
    "category": "Science",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What optical device uses high-power lenses to magnify microscopic microorganisms?",
    "category": "Science",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Alexander Fleming discovered penicillin, the first medical ___.",
    "category": "Science",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What narrow cylindrical glass tube is used by scientists to mix chemical solutions?",
    "category": "Science",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Researchers are carrying out an extensive clinical ___ to test the drug.",
    "category": "Science",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "What medical injection helps human immune systems resist infectious viral diseases?",
    "category": "Science",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: The spiral molecule containing the hereditary genetic code is ___.",
    "category": "Science",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "What specialized room in a research centre is equipped for scientific investigation?",
    "category": "Science",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Sir Isaac Newton established the universal law of ___.",
    "category": "Science",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which verb means finding something that already existed in nature but was unknown?",
    "category": "Science",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which verb means designing and creating a new machine that never existed before?",
    "category": "Science",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Major scientific ___ have transformed medicine and daily technology.",
    "category": "Science",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What electrical technology pioneered by Nikola Tesla powers modern power grids?",
    "category": "Science",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Scientists record detailed data and observation ___ in their journals.",
    "category": "Science",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What natural event causes sudden and violent shaking of the Earth's crust?",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What disaster occurs when torrential rain causes rivers to submerge city streets?",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What prolonged weather emergency occurs when an area receives no rain for months?",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What mountain disaster happens when a huge volume of snow collapses down slopes?",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What colossal ocean wave is triggered by an undersea seismic earthquake?",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: A violent spinning funnel cloud of destructive wind is a ___.",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What emergency disaster kit containing basic supplies should every family keep ready?",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Molten volcanic rock erupting onto the Earth's surface is called ___.",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What scale measurement indicates the total energy magnitude of an earthquake?",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "Fill in the blank: Planting trees on barren hills helps prevent soil ___ and landslides.",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 3
  },
  {
    "question": "What specialized emergency squad works to locate survivors trapped under rubble?",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: Authorities urge citizens to take safety ___ before severe storms hit.",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which disaster occurs when extreme heat ignites unmanageable fires in forests?",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Strong earthquakes can cause catastrophic structural ___ to buildings.",
    "category": "Natural Forces",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Which modal verb is best for giving friendly advice: SHOULD, WOULD, or MUST?",
    "category": "Grammar",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: Students ___ talk or use phones during an exam. (mustn't / should)",
    "category": "Grammar",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What is the past simple form of the irregular verb 'EAT'?",
    "category": "Grammar",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What is the past simple form of the irregular verb 'SEE'?",
    "category": "Grammar",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What is the past simple form of the irregular verb 'BRING'?",
    "category": "Grammar",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: If you do not prepare for the test, you might ___ it. (fail / win)",
    "category": "Everyday English",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Which conjunction introduces a reason: BECAUSE, SO, or BUT?",
    "category": "Grammar",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: I felt exhausted, ___ I went to bed early. (so / although)",
    "category": "Grammar",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "What do you say when you bump into someone by accident: 'Excuse ___'?",
    "category": "Everyday English",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "What is the opposite of the adjective 'BORING'?",
    "category": "Vocabulary",
    "grade": 8,
    "difficulty": 1
  },
  {
    "question": "Fill in the blank: She has lived in this city ___ five years. (for / since)",
    "category": "Grammar",
    "grade": 8,
    "difficulty": 2
  },
  {
    "question": "Fill in the blank: He hasn't finished his homework ___ . (already / yet)",
    "category": "Grammar",
    "grade": 8,
    "difficulty": 2
  }
];

// Combined Question Master Pool (315 Unique Questions)
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
