/**
 * WHO WANTS TO BE A MILLIONAIRE? — ENGLISH GRAMMAR EDITION
 * Comprehensive Question Bank for Grade 7 & Grade 8
 * Categorized by difficulty tiers: 'easy', 'medium', 'hard', 'very_hard'
 * Each question has: id, grade, tier, topic, question, options (4), correctIndex (0-3), explanation
 */

const MILLIONAIRE_QUESTIONS = {
  grade7: [
  {
    "id": "g7-q001",
    "grade": 7,
    "tier": "easy",
    "topic": "Present Simple",
    "question": "My sister ______ to music in her bedroom every evening.",
    "options": [
      "listen",
      "listens",
      "is listening",
      "listened"
    ],
    "correctIndex": 1,
    "explanation": "Third-person singular 'My sister' takes 'listens' with habitual 'every evening'."
  },
  {
    "id": "g7-q002",
    "grade": 7,
    "tier": "easy",
    "topic": "Present Simple",
    "question": "We ______ at seven o'clock on school days.",
    "options": [
      "wake up",
      "wakes up",
      "waking up",
      "waked up"
    ],
    "correctIndex": 0,
    "explanation": "'We' takes the base form 'wake up' in Present Simple."
  },
  {
    "id": "g7-q003",
    "grade": 7,
    "tier": "easy",
    "topic": "Present Continuous",
    "question": "Listen! The baby ______ in the next room.",
    "options": [
      "cries",
      "is crying",
      "cry",
      "cried"
    ],
    "correctIndex": 1,
    "explanation": "'Listen!' indicates an action happening at the moment of speaking."
  },
  {
    "id": "g7-q004",
    "grade": 7,
    "tier": "easy",
    "topic": "Present Continuous",
    "question": "They ______ a new board game right now.",
    "options": [
      "play",
      "plays",
      "are playing",
      "played"
    ],
    "correctIndex": 2,
    "explanation": "'Right now' indicates Present Continuous with 'are playing'."
  },
  {
    "id": "g7-q005",
    "grade": 7,
    "tier": "easy",
    "topic": "Articles",
    "question": "Can you pass me ______ apple from the fruit basket?",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "correctIndex": 1,
    "explanation": "'Apple' starts with a vowel sound, so we use 'an'."
  },
  {
    "id": "g7-q006",
    "grade": 7,
    "tier": "easy",
    "topic": "Articles",
    "question": "She wants to learn how to play ______ guitar.",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "correctIndex": 2,
    "explanation": "Musical instruments take the definite article 'the' (play the guitar)."
  },
  {
    "id": "g7-q007",
    "grade": 7,
    "tier": "easy",
    "topic": "Can / Can't",
    "question": "A cheetah ______ run faster than any other land animal.",
    "options": [
      "can",
      "can't",
      "mustn't",
      "should"
    ],
    "correctIndex": 0,
    "explanation": "'Can' expresses natural ability."
  },
  {
    "id": "g7-q008",
    "grade": 7,
    "tier": "easy",
    "topic": "Must / Mustn't",
    "question": "You ______ run near the swimming pool; it is slippery.",
    "options": [
      "must",
      "mustn't",
      "can",
      "don't have to"
    ],
    "correctIndex": 1,
    "explanation": "'Mustn't' expresses prohibition for safety rules."
  },
  {
    "id": "g7-q009",
    "grade": 7,
    "tier": "easy",
    "topic": "Should / Shouldn't",
    "question": "You look tired. You ______ go to bed earlier tonight.",
    "options": [
      "should",
      "shouldn't",
      "mustn't",
      "can't"
    ],
    "correctIndex": 0,
    "explanation": "'Should' gives helpful advice."
  },
  {
    "id": "g7-q010",
    "grade": 7,
    "tier": "easy",
    "topic": "Prepositions of Time",
    "question": "My birthday is ______ the 14th of March.",
    "options": [
      "in",
      "at",
      "on",
      "by"
    ],
    "correctIndex": 2,
    "explanation": "Specific dates take the preposition 'on'."
  },
  {
    "id": "g7-q011",
    "grade": 7,
    "tier": "easy",
    "topic": "Prepositions of Time",
    "question": "School finishes ______ 3:30 PM every day.",
    "options": [
      "on",
      "at",
      "in",
      "to"
    ],
    "correctIndex": 1,
    "explanation": "Exact clock times take 'at'."
  },
  {
    "id": "g7-q012",
    "grade": 7,
    "tier": "easy",
    "topic": "Prepositions of Place",
    "question": "There is a colorful painting ______ the living room wall.",
    "options": [
      "on",
      "in",
      "at",
      "under"
    ],
    "correctIndex": 0,
    "explanation": "Pictures hang 'on' a wall surface."
  },
  {
    "id": "g7-q013",
    "grade": 7,
    "tier": "easy",
    "topic": "Prepositions of Place",
    "question": "The cat is hiding ______ the comfortable sofa.",
    "options": [
      "under",
      "between",
      "on",
      "into"
    ],
    "correctIndex": 0,
    "explanation": "'Under the sofa' describes position beneath an object."
  },
  {
    "id": "g7-q014",
    "grade": 7,
    "tier": "easy",
    "topic": "Quantifiers",
    "question": "Do we have ______ eggs to make an omelette?",
    "options": [
      "some",
      "any",
      "much",
      "a little"
    ],
    "correctIndex": 1,
    "explanation": "Questions about quantity use 'any'."
  },
  {
    "id": "g7-q015",
    "grade": 7,
    "tier": "easy",
    "topic": "Quantifiers",
    "question": "I would like ______ orange juice, please.",
    "options": [
      "some",
      "any",
      "many",
      "few"
    ],
    "correctIndex": 0,
    "explanation": "Polite requests and offers use 'some'."
  },
  {
    "id": "g7-q016",
    "grade": 7,
    "tier": "easy",
    "topic": "Countable / Uncountable",
    "question": "How ______ water should we drink each day?",
    "options": [
      "many",
      "much",
      "any",
      "few"
    ],
    "correctIndex": 1,
    "explanation": "'Water' is uncountable, so we ask 'How much'."
  },
  {
    "id": "g7-q017",
    "grade": 7,
    "tier": "easy",
    "topic": "Countable / Uncountable",
    "question": "How ______ pencils are in your pencil case?",
    "options": [
      "much",
      "many",
      "a little",
      "any"
    ],
    "correctIndex": 1,
    "explanation": "'Pencils' is plural countable, so we ask 'How many'."
  },
  {
    "id": "g7-q018",
    "grade": 7,
    "tier": "easy",
    "topic": "Adverbs of Frequency",
    "question": "She ______ arrives late. She is always on time!",
    "options": [
      "always",
      "never",
      "often",
      "sometimes"
    ],
    "correctIndex": 1,
    "explanation": "'Never' means zero percent frequency."
  },
  {
    "id": "g7-q019",
    "grade": 7,
    "tier": "easy",
    "topic": "Adverbs of Frequency",
    "question": "We ______ visit our grandparents on Sundays.",
    "options": [
      "usually",
      "never",
      "hardly",
      "always to"
    ],
    "correctIndex": 0,
    "explanation": "'Usually' describes a regular weekly habit."
  },
  {
    "id": "g7-q020",
    "grade": 7,
    "tier": "easy",
    "topic": "Past Simple",
    "question": "Yesterday, we ______ a fantastic science documentary.",
    "options": [
      "watch",
      "watched",
      "watching",
      "watches"
    ],
    "correctIndex": 1,
    "explanation": "Regular verbs in Past Simple take '-ed' (watched)."
  },
  {
    "id": "g7-q021",
    "grade": 7,
    "tier": "easy",
    "topic": "Past Simple",
    "question": "I ______ my keys on the kitchen table this morning.",
    "options": [
      "leave",
      "left",
      "leaving",
      "leaves"
    ],
    "correctIndex": 1,
    "explanation": "The irregular past tense of 'leave' is 'left'."
  },
  {
    "id": "g7-q022",
    "grade": 7,
    "tier": "easy",
    "topic": "Past Simple",
    "question": "He ______ go to school yesterday because he was sick.",
    "options": [
      "didn't",
      "doesn't",
      "don't",
      "wasn't"
    ],
    "correctIndex": 0,
    "explanation": "Past Simple negative uses 'didn't' + base verb."
  },
  {
    "id": "g7-q023",
    "grade": 7,
    "tier": "easy",
    "topic": "Comparatives",
    "question": "An elephant is ______ than a lion.",
    "options": [
      "big",
      "bigger",
      "biggest",
      "more big"
    ],
    "correctIndex": 1,
    "explanation": "One-syllable adjective 'big' doubles the consonant: 'bigger than'."
  },
  {
    "id": "g7-q024",
    "grade": 7,
    "tier": "easy",
    "topic": "Comparatives",
    "question": "This math puzzle is ______ than the previous one.",
    "options": [
      "easy",
      "easier",
      "easiest",
      "more easy"
    ],
    "correctIndex": 1,
    "explanation": "Adjectives ending in consonant + y change y to i: 'easier'."
  },
  {
    "id": "g7-q025",
    "grade": 7,
    "tier": "easy",
    "topic": "Superlatives",
    "question": "The blue whale is the ______ animal on the planet.",
    "options": [
      "large",
      "larger",
      "largest",
      "most large"
    ],
    "correctIndex": 2,
    "explanation": "Superlative form preceded by 'the' is 'largest'."
  },
  {
    "id": "g7-q026",
    "grade": 7,
    "tier": "easy",
    "topic": "Superlatives",
    "question": "Who is the ______ student in your class?",
    "options": [
      "young",
      "younger",
      "youngest",
      "most young"
    ],
    "correctIndex": 2,
    "explanation": "Superlative of one-syllable adjective 'young' is 'youngest'."
  },
  {
    "id": "g7-q027",
    "grade": 7,
    "tier": "easy",
    "topic": "Question Words",
    "question": "______ is your favorite subject? - Science.",
    "options": [
      "What",
      "Where",
      "When",
      "Who"
    ],
    "correctIndex": 0,
    "explanation": "'What' asks for specific information about things/topics."
  },
  {
    "id": "g7-q028",
    "grade": 7,
    "tier": "easy",
    "topic": "Question Words",
    "question": "______ do you walk to school with? - With my cousin.",
    "options": [
      "Who",
      "Where",
      "Why",
      "When"
    ],
    "correctIndex": 0,
    "explanation": "'Who' asks about people."
  },
  {
    "id": "g7-q029",
    "grade": 7,
    "tier": "easy",
    "topic": "Conjunctions",
    "question": "He is clever ______ very kind to everyone.",
    "options": [
      "and",
      "but",
      "so",
      "because"
    ],
    "correctIndex": 0,
    "explanation": "'And' joins two similar positive ideas."
  },
  {
    "id": "g7-q030",
    "grade": 7,
    "tier": "easy",
    "topic": "Conjunctions",
    "question": "I wanted to buy the book, ______ I forgot my wallet.",
    "options": [
      "so",
      "but",
      "because",
      "and"
    ],
    "correctIndex": 1,
    "explanation": "'But' introduces an unexpected contrast."
  },
  {
    "id": "g7-q031",
    "grade": 7,
    "tier": "easy",
    "topic": "Future with Will",
    "question": "I think tomorrow ______ sunny and warm.",
    "options": [
      "will be",
      "is being",
      "was",
      "shall to be"
    ],
    "correctIndex": 0,
    "explanation": "'Will be' expresses a general future prediction."
  },
  {
    "id": "g7-q032",
    "grade": 7,
    "tier": "easy",
    "topic": "Future with Going to",
    "question": "Be careful! You ______ drop those glass bowls!",
    "options": [
      "are going to",
      "will to",
      "shall",
      "go to"
    ],
    "correctIndex": 0,
    "explanation": "Predictions based on immediate physical evidence use 'be going to'."
  },
  {
    "id": "g7-q033",
    "grade": 7,
    "tier": "easy",
    "topic": "There is / There are",
    "question": "______ any fresh milk in the fridge?",
    "options": [
      "Is there",
      "Are there",
      "There is",
      "Have there"
    ],
    "correctIndex": 0,
    "explanation": "'Milk' is uncountable singular, so question form is 'Is there'."
  },
  {
    "id": "g7-q034",
    "grade": 7,
    "tier": "easy",
    "topic": "There is / There are",
    "question": "______ twenty desks in our English room.",
    "options": [
      "There is",
      "There are",
      "They are",
      "It is"
    ],
    "correctIndex": 1,
    "explanation": "'Twenty desks' is plural, so we use 'There are'."
  },
  {
    "id": "g7-q035",
    "grade": 7,
    "tier": "easy",
    "topic": "Possessive Adjectives",
    "question": "This is Anna. ______ favorite sport is volleyball.",
    "options": [
      "Her",
      "His",
      "Their",
      "Hers"
    ],
    "correctIndex": 0,
    "explanation": "'Her' is the possessive adjective for a female singular subject."
  },
  {
    "id": "g7-q036",
    "grade": 7,
    "tier": "easy",
    "topic": "Possessive Pronouns",
    "question": "Is this notebook yours or ______?",
    "options": [
      "mine",
      "my",
      "me",
      "I"
    ],
    "correctIndex": 0,
    "explanation": "Standalone possessive pronoun is 'mine'."
  },
  {
    "id": "g7-q037",
    "grade": 7,
    "tier": "easy",
    "topic": "Demonstratives",
    "question": "Look at ______ birds flying high up in the sky!",
    "options": [
      "those",
      "these",
      "this",
      "that"
    ],
    "correctIndex": 0,
    "explanation": "'Those' refers to plural objects far away."
  },
  {
    "id": "g7-q038",
    "grade": 7,
    "tier": "easy",
    "topic": "Demonstratives",
    "question": "______ apple in my hand is super sweet.",
    "options": [
      "This",
      "These",
      "That",
      "Those"
    ],
    "correctIndex": 0,
    "explanation": "'This' refers to a single object close by."
  },
  {
    "id": "g7-q039",
    "grade": 7,
    "tier": "easy",
    "topic": "Object Pronouns",
    "question": "Our teacher gave ______ some extra homework today.",
    "options": [
      "we",
      "us",
      "our",
      "ours"
    ],
    "correctIndex": 1,
    "explanation": "'Us' is the object pronoun following the verb 'gave'."
  },
  {
    "id": "g7-q040",
    "grade": 7,
    "tier": "easy",
    "topic": "Adjectives: -ed vs -ing",
    "question": "I was so ______ when our team won the cup!",
    "options": [
      "excited",
      "exciting",
      "excite",
      "excitement"
    ],
    "correctIndex": 0,
    "explanation": "'-ed' adjectives describe human emotions and feelings."
  },
  {
    "id": "g7-q041",
    "grade": 7,
    "tier": "easy",
    "topic": "Adjectives: -ed vs -ing",
    "question": "The roller coaster ride was really ______.",
    "options": [
      "frightening",
      "frightened",
      "frighten",
      "fright"
    ],
    "correctIndex": 0,
    "explanation": "'-ing' adjectives describe the characteristic of a thing/activity."
  },
  {
    "id": "g7-q042",
    "grade": 7,
    "tier": "easy",
    "topic": "Have to / Has to",
    "question": "My brother ______ clean his room every Saturday.",
    "options": [
      "has to",
      "have to",
      "must to",
      "having to"
    ],
    "correctIndex": 0,
    "explanation": "Third-person singular 'My brother' takes 'has to'."
  },
  {
    "id": "g7-q043",
    "grade": 7,
    "tier": "easy",
    "topic": "Don't have to / Doesn't have to",
    "question": "We ______ go to school on national holidays.",
    "options": [
      "don't have to",
      "doesn't have to",
      "mustn't to",
      "aren't having to"
    ],
    "correctIndex": 0,
    "explanation": "'We' takes 'don't have to' to express lack of obligation."
  },
  {
    "id": "g7-q044",
    "grade": 7,
    "tier": "easy",
    "topic": "Present Simple Questions",
    "question": "______ your father drive to work every morning?",
    "options": [
      "Does",
      "Do",
      "Is",
      "Has"
    ],
    "correctIndex": 0,
    "explanation": "Third-person singular questions in Present Simple start with 'Does'."
  },
  {
    "id": "g7-q045",
    "grade": 7,
    "tier": "easy",
    "topic": "Present Simple Questions",
    "question": "______ you enjoy playing computer games?",
    "options": [
      "Do",
      "Does",
      "Are",
      "Have"
    ],
    "correctIndex": 0,
    "explanation": "'You' takes auxiliary 'Do' in Present Simple questions."
  },
  {
    "id": "g7-q046",
    "grade": 7,
    "tier": "medium",
    "topic": "Past Continuous",
    "question": "At 7 PM yesterday, I ______ for my English exam.",
    "options": [
      "studied",
      "was studying",
      "am studying",
      "have studied"
    ],
    "correctIndex": 1,
    "explanation": "Past Continuous ('was studying') indicates an action in progress at a specific past moment."
  },
  {
    "id": "g7-q047",
    "grade": 7,
    "tier": "medium",
    "topic": "Past Continuous",
    "question": "The children ______ video games when their father arrived home.",
    "options": [
      "were playing",
      "played",
      "are playing",
      "was playing"
    ],
    "correctIndex": 0,
    "explanation": "Plural subject 'The children' takes 'were playing'."
  },
  {
    "id": "g7-q048",
    "grade": 7,
    "tier": "medium",
    "topic": "Past Simple vs Continuous",
    "question": "While she was cooking dinner, she ______ her thumb.",
    "options": [
      "cut",
      "was cutting",
      "is cutting",
      "cuts"
    ],
    "correctIndex": 0,
    "explanation": "A short interrupting past action takes Past Simple ('cut')."
  },
  {
    "id": "g7-q049",
    "grade": 7,
    "tier": "medium",
    "topic": "Past Simple vs Continuous",
    "question": "I ______ across the park when it suddenly started to snow.",
    "options": [
      "was walking",
      "walked",
      "walk",
      "am walking"
    ],
    "correctIndex": 0,
    "explanation": "Long continuous background action uses Past Continuous ('was walking')."
  },
  {
    "id": "g7-q050",
    "grade": 7,
    "tier": "medium",
    "topic": "Comparatives",
    "question": "Reading books is ______ than playing video games all day.",
    "options": [
      "more useful",
      "usefuller",
      "most useful",
      "as useful"
    ],
    "correctIndex": 0,
    "explanation": "Long adjectives take 'more' in comparative degree."
  },
  {
    "id": "g7-q051",
    "grade": 7,
    "tier": "medium",
    "topic": "Comparatives: As...As",
    "question": "This bicycle is not as ______ as my brother's bike.",
    "options": [
      "fast",
      "faster",
      "fastest",
      "more fast"
    ],
    "correctIndex": 0,
    "explanation": "Between 'as...as', the base form of the adjective is used."
  },
  {
    "id": "g7-q052",
    "grade": 7,
    "tier": "medium",
    "topic": "Superlatives",
    "question": "That was the ______ test we have had this term.",
    "options": [
      "most difficult",
      "more difficult",
      "difficultest",
      "as difficult"
    ],
    "correctIndex": 0,
    "explanation": "Superlative of long adjectives uses 'the most'."
  },
  {
    "id": "g7-q053",
    "grade": 7,
    "tier": "medium",
    "topic": "Irregular Comparatives",
    "question": "Her drawing is good, but your drawing is ______.",
    "options": [
      "better",
      "gooder",
      "best",
      "more good"
    ],
    "correctIndex": 0,
    "explanation": "Comparative of 'good' is 'better'."
  },
  {
    "id": "g7-q054",
    "grade": 7,
    "tier": "medium",
    "topic": "Irregular Superlatives",
    "question": "He is the ______ goalkeeper in the entire school league.",
    "options": [
      "best",
      "better",
      "goodest",
      "most good"
    ],
    "correctIndex": 0,
    "explanation": "Superlative of 'good' is 'best'."
  },
  {
    "id": "g7-q055",
    "grade": 7,
    "tier": "medium",
    "topic": "Quantifiers: A few / A little",
    "question": "I have ______ money left, so I can buy an ice cream.",
    "options": [
      "a little",
      "a few",
      "many",
      "few"
    ],
    "correctIndex": 0,
    "explanation": "'Money' is uncountable, and 'a little' means a small positive amount."
  },
  {
    "id": "g7-q056",
    "grade": 7,
    "tier": "medium",
    "topic": "Quantifiers: A few / A little",
    "question": "There are ______ new students in our classroom today.",
    "options": [
      "a few",
      "a little",
      "much",
      "little"
    ],
    "correctIndex": 0,
    "explanation": "'Students' is plural countable, so we use 'a few'."
  },
  {
    "id": "g7-q057",
    "grade": 7,
    "tier": "medium",
    "topic": "Quantifiers: Much / Many",
    "question": "There isn't ______ traffic on the road this Sunday morning.",
    "options": [
      "much",
      "many",
      "a few",
      "few"
    ],
    "correctIndex": 0,
    "explanation": "'Traffic' is uncountable, so negative sentences use 'much'."
  },
  {
    "id": "g7-q058",
    "grade": 7,
    "tier": "medium",
    "topic": "Quantifiers: Much / Many",
    "question": "Did you take ______ photographs during your school trip?",
    "options": [
      "many",
      "much",
      "a little",
      "little"
    ],
    "correctIndex": 0,
    "explanation": "'Photographs' is plural countable, so questions use 'many'."
  },
  {
    "id": "g7-q059",
    "grade": 7,
    "tier": "medium",
    "topic": "Future: Will vs Going to",
    "question": "A: 'Someone is knocking at the front door.' B: 'I ______ go check.'",
    "options": [
      "will",
      "am going to",
      "was going to",
      "am checking"
    ],
    "correctIndex": 0,
    "explanation": "Immediate on-the-spot decisions use 'will'."
  },
  {
    "id": "g7-q060",
    "grade": 7,
    "tier": "medium",
    "topic": "Future: Intentions",
    "question": "We ______ spend our summer vacation in Antalya this July.",
    "options": [
      "are going to",
      "will to",
      "were going",
      "shall to"
    ],
    "correctIndex": 0,
    "explanation": "Planned future intentions use 'be going to'."
  },
  {
    "id": "g7-q061",
    "grade": 7,
    "tier": "medium",
    "topic": "Prepositions of Direction",
    "question": "The bird flew gracefully ______ the open window into the room.",
    "options": [
      "through",
      "across",
      "along",
      "over"
    ],
    "correctIndex": 0,
    "explanation": "'Through' means entering one side and exiting/moving within a 3D opening."
  },
  {
    "id": "g7-q062",
    "grade": 7,
    "tier": "medium",
    "topic": "Prepositions of Movement",
    "question": "They walked ______ the beach listening to the ocean waves.",
    "options": [
      "along",
      "into",
      "through",
      "under"
    ],
    "correctIndex": 0,
    "explanation": "'Along' indicates movement alongside the line of the beach."
  },
  {
    "id": "g7-q063",
    "grade": 7,
    "tier": "medium",
    "topic": "Prepositions of Movement",
    "question": "The athlete jumped ______ the high hurdle effortlessly.",
    "options": [
      "over",
      "through",
      "under",
      "into"
    ],
    "correctIndex": 0,
    "explanation": "'Over' indicates movement above and crossing from one side to the other."
  },
  {
    "id": "g7-q064",
    "grade": 7,
    "tier": "medium",
    "topic": "Conjunctions: So vs Because",
    "question": "The weather was awful, ______ we stayed indoors all day.",
    "options": [
      "so",
      "because",
      "although",
      "unless"
    ],
    "correctIndex": 0,
    "explanation": "'So' indicates the result of the previous clause."
  },
  {
    "id": "g7-q065",
    "grade": 7,
    "tier": "medium",
    "topic": "Conjunctions: Although",
    "question": "______ it was freezing outside, he did not wear his gloves.",
    "options": [
      "Although",
      "Because",
      "So",
      "However"
    ],
    "correctIndex": 0,
    "explanation": "'Although' introduces a concessive/contrast clause."
  },
  {
    "id": "g7-q066",
    "grade": 7,
    "tier": "medium",
    "topic": "Stative Verbs",
    "question": "I ______ what you mean now.",
    "options": [
      "understand",
      "am understanding",
      "was understanding",
      "have understood"
    ],
    "correctIndex": 0,
    "explanation": "'Understand' is a stative verb and is not used in continuous aspect."
  },
  {
    "id": "g7-q067",
    "grade": 7,
    "tier": "medium",
    "topic": "Stative Verbs",
    "question": "This soup ______ delicious. What herbs did you use?",
    "options": [
      "tastes",
      "is tasting",
      "taste",
      "tasting"
    ],
    "correctIndex": 0,
    "explanation": "Perception verb 'taste' is stative when describing a quality."
  },
  {
    "id": "g7-q068",
    "grade": 7,
    "tier": "medium",
    "topic": "Indefinite Pronouns",
    "question": "Is ______ ready for the spelling bee competition?",
    "options": [
      "everyone",
      "anyone",
      "someone",
      "nothing"
    ],
    "correctIndex": 0,
    "explanation": "'Everyone' takes a singular verb and refers to all participants."
  },
  {
    "id": "g7-q069",
    "grade": 7,
    "tier": "medium",
    "topic": "Indefinite Pronouns",
    "question": "I looked everywhere, but I couldn't find my pen ______.",
    "options": [
      "anywhere",
      "somewhere",
      "nowhere",
      "everywhere"
    ],
    "correctIndex": 0,
    "explanation": "Negative sentences take 'anywhere'."
  },
  {
    "id": "g7-q070",
    "grade": 7,
    "tier": "medium",
    "topic": "Gerunds after Prepositions",
    "question": "She is really interested in ______ robotics and coding.",
    "options": [
      "learning",
      "to learn",
      "learn",
      "learned"
    ],
    "correctIndex": 0,
    "explanation": "Preposition 'in' must be followed by a gerund ('learning')."
  },
  {
    "id": "g7-q071",
    "grade": 7,
    "tier": "medium",
    "topic": "Gerunds after Verbs",
    "question": "He loves ______ fantasy adventure novels before sleeping.",
    "options": [
      "reading",
      "read",
      "to readed",
      "reads"
    ],
    "correctIndex": 0,
    "explanation": "'Love' is followed by a gerund or to-infinitive; 'reading' is standard."
  },
  {
    "id": "g7-q072",
    "grade": 7,
    "tier": "medium",
    "topic": "Infinitives of Purpose",
    "question": "I went to the library ______ some research books.",
    "options": [
      "to borrow",
      "for borrow",
      "borrowing",
      "borrowed"
    ],
    "correctIndex": 0,
    "explanation": "Infinitive of purpose uses 'to + base verb'."
  },
  {
    "id": "g7-q073",
    "grade": 7,
    "tier": "medium",
    "topic": "Too / Enough",
    "question": "The tea is ______ hot to drink right now.",
    "options": [
      "too",
      "enough",
      "very much",
      "so as"
    ],
    "correctIndex": 0,
    "explanation": "'Too + adjective + to-infinitive' shows something is excessive."
  },
  {
    "id": "g7-q074",
    "grade": 7,
    "tier": "medium",
    "topic": "Too / Enough",
    "question": "He is strong ______ to lift that heavy luggage box.",
    "options": [
      "enough",
      "too",
      "so",
      "very"
    ],
    "correctIndex": 0,
    "explanation": "'Adjective + enough' indicates sufficient degree."
  },
  {
    "id": "g7-q075",
    "grade": 7,
    "tier": "medium",
    "topic": "Subject Questions",
    "question": "______ broke the glass window in the hallway?",
    "options": [
      "Who",
      "Who did",
      "Whom",
      "Who was"
    ],
    "correctIndex": 0,
    "explanation": "Subject questions do not use auxiliary 'did'."
  },
  {
    "id": "g7-q076",
    "grade": 7,
    "tier": "medium",
    "topic": "Possessive Nouns",
    "question": "The ______ toys were scattered all over the living room.",
    "options": [
      "children's",
      "childrens'",
      "childs'",
      "children"
    ],
    "correctIndex": 0,
    "explanation": "Irregular plural 'children' forms possessive with ''s' ('children's')."
  },
  {
    "id": "g7-q077",
    "grade": 7,
    "tier": "medium",
    "topic": "Past Simple Irregular",
    "question": "She ______ a beautiful picture of the sunrise.",
    "options": [
      "drew",
      "drawed",
      "drawn",
      "drawing"
    ],
    "correctIndex": 0,
    "explanation": "Past simple of 'draw' is 'drew'."
  },
  {
    "id": "g7-q078",
    "grade": 7,
    "tier": "medium",
    "topic": "Past Simple Irregular",
    "question": "They ______ to London on a big jet plane last Friday.",
    "options": [
      "flew",
      "flied",
      "flown",
      "flying"
    ],
    "correctIndex": 0,
    "explanation": "Past simple of 'fly' is 'flew'."
  },
  {
    "id": "g7-q079",
    "grade": 7,
    "tier": "medium",
    "topic": "Past Simple Irregular",
    "question": "I ______ my best friend at the supermarket yesterday.",
    "options": [
      "met",
      "meeted",
      "meet",
      "meeting"
    ],
    "correctIndex": 0,
    "explanation": "Past simple of 'meet' is 'met'."
  },
  {
    "id": "g7-q080",
    "grade": 7,
    "tier": "medium",
    "topic": "Past Simple Irregular",
    "question": "He ______ his bicycle to school every day last week.",
    "options": [
      "rode",
      "rided",
      "ridden",
      "riding"
    ],
    "correctIndex": 0,
    "explanation": "Past simple of 'ride' is 'rode'."
  },
  {
    "id": "g7-q081",
    "grade": 7,
    "tier": "medium",
    "topic": "Time Clauses (Future)",
    "question": "We will go to the park when the rain ______.",
    "options": [
      "stops",
      "will stop",
      "stopped",
      "is stopping"
    ],
    "correctIndex": 0,
    "explanation": "Time clauses with 'when' take Present Simple for future reference."
  },
  {
    "id": "g7-q082",
    "grade": 7,
    "tier": "medium",
    "topic": "Time Clauses (Future)",
    "question": "I will call you before I ______ the train station.",
    "options": [
      "leave",
      "will leave",
      "left",
      "leaving"
    ],
    "correctIndex": 0,
    "explanation": "Time clauses with 'before' take Present Simple."
  },
  {
    "id": "g7-q083",
    "grade": 7,
    "tier": "medium",
    "topic": "Adverbs of Manner",
    "question": "The musician played the piano ______ during the concert.",
    "options": [
      "skillfully",
      "skillful",
      "skill",
      "more skillful"
    ],
    "correctIndex": 0,
    "explanation": "Adverb 'skillfully' describes the manner of playing."
  },
  {
    "id": "g7-q084",
    "grade": 7,
    "tier": "medium",
    "topic": "Adverbs of Manner",
    "question": "Drive ______! The icy roads are very dangerous.",
    "options": [
      "carefully",
      "careful",
      "caring",
      "care"
    ],
    "correctIndex": 0,
    "explanation": "Adverb 'carefully' modifies the imperative verb 'drive'."
  },
  {
    "id": "g7-q085",
    "grade": 7,
    "tier": "medium",
    "topic": "Reflexive Pronouns",
    "question": "Did you paint this entire room all by ______?",
    "options": [
      "yourself",
      "you",
      "your",
      "yours"
    ],
    "correctIndex": 0,
    "explanation": "'By yourself' means alone without assistance."
  },
  {
    "id": "g7-q086",
    "grade": 7,
    "tier": "medium",
    "topic": "Reflexive Pronouns",
    "question": "We really enjoyed ______ at the theme park yesterday.",
    "options": [
      "ourselves",
      "us",
      "our",
      "ourself"
    ],
    "correctIndex": 0,
    "explanation": "Reflexive pronoun for 'we' is 'ourselves'."
  },
  {
    "id": "g7-q087",
    "grade": 7,
    "tier": "medium",
    "topic": "Whose / Who's",
    "question": "______ backpack is this on the classroom floor?",
    "options": [
      "Whose",
      "Who's",
      "Whom",
      "Which"
    ],
    "correctIndex": 0,
    "explanation": "'Whose' asks about ownership; 'Who's' is 'Who is'."
  },
  {
    "id": "g7-q088",
    "grade": 7,
    "tier": "medium",
    "topic": "Whose / Who's",
    "question": "______ the new student sitting next to Alex?",
    "options": [
      "Who's",
      "Whose",
      "Whom",
      "Which"
    ],
    "correctIndex": 0,
    "explanation": "'Who's' is the contraction for 'Who is'."
  },
  {
    "id": "g7-q089",
    "grade": 7,
    "tier": "medium",
    "topic": "Questions with How",
    "question": "______ is it from your home to the school?",
    "options": [
      "How far",
      "How long",
      "How often",
      "How much"
    ],
    "correctIndex": 0,
    "explanation": "'How far' asks about distance."
  },
  {
    "id": "g7-q090",
    "grade": 7,
    "tier": "medium",
    "topic": "Questions with How",
    "question": "______ do you practice the guitar each week?",
    "options": [
      "How often",
      "How long",
      "How far",
      "How many"
    ],
    "correctIndex": 0,
    "explanation": "'How often' asks about frequency."
  },
  {
    "id": "g7-q091",
    "grade": 7,
    "tier": "medium",
    "topic": "Questions with How",
    "question": "______ does it take to travel to the airport?",
    "options": [
      "How long",
      "How far",
      "How often",
      "How much"
    ],
    "correctIndex": 0,
    "explanation": "'How long' asks about time duration."
  },
  {
    "id": "g7-q092",
    "grade": 7,
    "tier": "medium",
    "topic": "Articles: Fixed Expressions",
    "question": "He usually stays at ______ home on rainy Sundays.",
    "options": [
      "no article",
      "a",
      "an",
      "the"
    ],
    "correctIndex": 0,
    "explanation": "The idiom is 'at home' without an article."
  },
  {
    "id": "g7-q093",
    "grade": 7,
    "tier": "medium",
    "topic": "Articles: Oceans & Seas",
    "question": "______ Pacific Ocean is the largest ocean in the world.",
    "options": [
      "The",
      "A",
      "An",
      "No article"
    ],
    "correctIndex": 0,
    "explanation": "Names of oceans take the definite article 'The'."
  },
  {
    "id": "g7-q094",
    "grade": 7,
    "tier": "medium",
    "topic": "Articles: Continents",
    "question": "Brazil is a large country in ______ South America.",
    "options": [
      "no article",
      "the",
      "a",
      "an"
    ],
    "correctIndex": 0,
    "explanation": "Names of continents take zero article."
  },
  {
    "id": "g7-q095",
    "grade": 7,
    "tier": "medium",
    "topic": "Prepositions: Transport",
    "question": "We travelled to Istanbul ______ train last month.",
    "options": [
      "by",
      "in",
      "on",
      "with"
    ],
    "correctIndex": 0,
    "explanation": "Modes of transport take 'by' (by train, by car, by plane)."
  },
  {
    "id": "g7-q096",
    "grade": 7,
    "tier": "hard",
    "topic": "Past Simple vs Continuous",
    "question": "While the professor was explaining the experiment, the bell ______.",
    "options": [
      "rang",
      "was ringing",
      "rings",
      "had rung"
    ],
    "correctIndex": 0,
    "explanation": "Interruption in the past takes Past Simple 'rang'."
  },
  {
    "id": "g7-q097",
    "grade": 7,
    "tier": "hard",
    "topic": "Past Simple vs Continuous",
    "question": "What ______ you doing when the earthquake occurred?",
    "options": [
      "were",
      "did",
      "was",
      "are"
    ],
    "correctIndex": 0,
    "explanation": "'You' takes 'were' in Past Continuous question."
  },
  {
    "id": "g7-q098",
    "grade": 7,
    "tier": "hard",
    "topic": "Hard vs Hardly",
    "question": "She ______ spoke a word during the entire meeting because she was shy.",
    "options": [
      "hardly",
      "hard",
      "harder",
      "hardest"
    ],
    "correctIndex": 0,
    "explanation": "'Hardly' means almost not at all."
  },
  {
    "id": "g7-q099",
    "grade": 7,
    "tier": "hard",
    "topic": "Late vs Lately",
    "question": "Have you watched any interesting movies ______?",
    "options": [
      "lately",
      "late",
      "later",
      "latest"
    ],
    "correctIndex": 0,
    "explanation": "'Lately' means recently."
  },
  {
    "id": "g7-q100",
    "grade": 7,
    "tier": "hard",
    "topic": "Double Comparatives",
    "question": "As the hurricane approached, the wind blew ______ and harder.",
    "options": [
      "harder",
      "hard",
      "hardest",
      "more hard"
    ],
    "correctIndex": 0,
    "explanation": "'Harder and harder' shows increasing intensity."
  },
  {
    "id": "g7-q101",
    "grade": 7,
    "tier": "hard",
    "topic": "Subject-Verb Agreement",
    "question": "Each of the participants ______ given a commemorative medal.",
    "options": [
      "was",
      "were",
      "are",
      "have been"
    ],
    "correctIndex": 0,
    "explanation": "'Each of + plural noun' takes a singular verb 'was'."
  },
  {
    "id": "g7-q102",
    "grade": 7,
    "tier": "hard",
    "topic": "Subject-Verb Agreement",
    "question": "The news about the space mission ______ very exciting.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "correctIndex": 0,
    "explanation": "'News' is an uncountable noun that takes a singular verb 'is'."
  },
  {
    "id": "g7-q103",
    "grade": 7,
    "tier": "hard",
    "topic": "Quantifiers: Few vs Little",
    "question": "He has very ______ friends because he is quite rude.",
    "options": [
      "few",
      "little",
      "a few",
      "a little"
    ],
    "correctIndex": 0,
    "explanation": "'Few' without 'a' has a negative meaning with countable nouns."
  },
  {
    "id": "g7-q104",
    "grade": 7,
    "tier": "hard",
    "topic": "Quantifiers: Few vs Little",
    "question": "We have very ______ petrol left; we must find a fuel station.",
    "options": [
      "little",
      "few",
      "a little",
      "a few"
    ],
    "correctIndex": 0,
    "explanation": "'Little' without 'a' means almost none with uncountable nouns."
  },
  {
    "id": "g7-q105",
    "grade": 7,
    "tier": "hard",
    "topic": "Modals of Deduction",
    "question": "He has won three international chess tournaments. He ______ be very smart.",
    "options": [
      "must",
      "can't",
      "mustn't",
      "shouldn't"
    ],
    "correctIndex": 0,
    "explanation": "'Must' expresses a strong logical deduction."
  },
  {
    "id": "g7-q106",
    "grade": 7,
    "tier": "hard",
    "topic": "Modals of Deduction",
    "question": "It ______ be snowing outside; it's thirty degrees Celsius!",
    "options": [
      "can't",
      "must",
      "should",
      "mustn't"
    ],
    "correctIndex": 0,
    "explanation": "'Can't' expresses strong logical impossibility."
  },
  {
    "id": "g7-q107",
    "grade": 7,
    "tier": "hard",
    "topic": "Question Tags",
    "question": "You didn't forget to lock the back door, ______ you?",
    "options": [
      "did",
      "didn't",
      "do",
      "were"
    ],
    "correctIndex": 0,
    "explanation": "Negative statement ('didn't forget') takes positive tag 'did you?'."
  },
  {
    "id": "g7-q108",
    "grade": 7,
    "tier": "hard",
    "topic": "Question Tags",
    "question": "Your brother plays the violin well, ______ he?",
    "options": [
      "doesn't",
      "isn't",
      "does",
      "didn't"
    ],
    "correctIndex": 0,
    "explanation": "Positive Present Simple with third-person takes 'doesn't he?'."
  },
  {
    "id": "g7-q109",
    "grade": 7,
    "tier": "hard",
    "topic": "Like vs Look like",
    "question": "What does your sister ______? - She is tall with curly brown hair.",
    "options": [
      "look like",
      "like",
      "look",
      "alike"
    ],
    "correctIndex": 0,
    "explanation": "'What does someone look like?' asks about physical appearance."
  },
  {
    "id": "g7-q110",
    "grade": 7,
    "tier": "hard",
    "topic": "Like vs Look like",
    "question": "What is the new school principal ______? - He is very strict but fair.",
    "options": [
      "like",
      "look like",
      "looks",
      "liking"
    ],
    "correctIndex": 0,
    "explanation": "'What is someone like?' asks about personality/character."
  },
  {
    "id": "g7-q111",
    "grade": 7,
    "tier": "hard",
    "topic": "Indirect Questions",
    "question": "Could you tell me what time the museum ______?",
    "options": [
      "opens",
      "does open",
      "is opening",
      "open"
    ],
    "correctIndex": 0,
    "explanation": "Indirect questions use statement word order (Subject + Verb: opens)."
  },
  {
    "id": "g7-q112",
    "grade": 7,
    "tier": "hard",
    "topic": "Indirect Questions",
    "question": "I wonder where my glasses ______.",
    "options": [
      "are",
      "are they",
      "do they be",
      "is"
    ],
    "correctIndex": 0,
    "explanation": "Indirect question statement order: 'where my glasses are'."
  },
  {
    "id": "g7-q113",
    "grade": 7,
    "tier": "hard",
    "topic": "Prepositions: In time vs On time",
    "question": "The airplane took off ______ time, exactly at 10:15 AM.",
    "options": [
      "on",
      "in",
      "at",
      "by"
    ],
    "correctIndex": 0,
    "explanation": "'On time' means punctual according to the timetable."
  },
  {
    "id": "g7-q114",
    "grade": 7,
    "tier": "hard",
    "topic": "Prepositions: In time vs On time",
    "question": "We reached the train station just ______ time to board the train.",
    "options": [
      "in",
      "on",
      "at",
      "with"
    ],
    "correctIndex": 0,
    "explanation": "'In time' means before it was too late."
  },
  {
    "id": "g7-q115",
    "grade": 7,
    "tier": "hard",
    "topic": "Pronouns: Each other",
    "question": "The twins always support ______ in difficult situations.",
    "options": [
      "each other",
      "themselves",
      "one other",
      "theirselves"
    ],
    "correctIndex": 0,
    "explanation": "'Each other' describes reciprocal mutual action between two."
  },
  {
    "id": "g7-q116",
    "grade": 7,
    "tier": "hard",
    "topic": "Reflexive Pronouns",
    "question": "The computer shut ______ down automatically after the update.",
    "options": [
      "itself",
      "it",
      "its",
      "himself"
    ],
    "correctIndex": 0,
    "explanation": "Neuter singular reflexive pronoun is 'itself'."
  },
  {
    "id": "g7-q117",
    "grade": 7,
    "tier": "hard",
    "topic": "Conjunctions: So that",
    "question": "He set his alarm for 6 AM ______ he wouldn't be late for school.",
    "options": [
      "so that",
      "because",
      "although",
      "unless"
    ],
    "correctIndex": 0,
    "explanation": "'So that' expresses purpose with a modal clause."
  },
  {
    "id": "g7-q118",
    "grade": 7,
    "tier": "hard",
    "topic": "Conjunctions: In order to",
    "question": "She practiced every afternoon ______ win the gymnastics trophy.",
    "options": [
      "in order to",
      "so that",
      "because of",
      "due to"
    ],
    "correctIndex": 0,
    "explanation": "'In order to + base verb' expresses purpose."
  },
  {
    "id": "g7-q119",
    "grade": 7,
    "tier": "hard",
    "topic": "Articles: School/Hospital",
    "question": "He is very sick in ______ hospital right now.",
    "options": [
      "no article",
      "a",
      "an",
      "the"
    ],
    "correctIndex": 0,
    "explanation": "'In hospital' as a patient takes zero article in British English."
  },
  {
    "id": "g7-q120",
    "grade": 7,
    "tier": "hard",
    "topic": "Articles: Musical Instruments vs Sports",
    "question": "He plays ______ football on Saturdays and ______ piano on Sundays.",
    "options": [
      "no article / the",
      "the / no article",
      "a / the",
      "the / the"
    ],
    "correctIndex": 0,
    "explanation": "Sports take no article (plays football); musical instruments take 'the' (plays the piano)."
  },
  {
    "id": "g7-q121",
    "grade": 7,
    "tier": "hard",
    "topic": "Countable / Uncountable Nuances",
    "question": "Can you give me some ______ on how to study effectively?",
    "options": [
      "advice",
      "advices",
      "an advice",
      "advicement"
    ],
    "correctIndex": 0,
    "explanation": "'Advice' is an uncountable noun in English."
  },
  {
    "id": "g7-q122",
    "grade": 7,
    "tier": "hard",
    "topic": "Countable / Uncountable Nuances",
    "question": "All the ______ in our living room was replaced last week.",
    "options": [
      "furniture",
      "furnitures",
      "a furniture",
      "piece of furnitures"
    ],
    "correctIndex": 0,
    "explanation": "'Furniture' is uncountable and takes singular verb 'was'."
  },
  {
    "id": "g7-q123",
    "grade": 7,
    "tier": "hard",
    "topic": "Countable / Uncountable Nuances",
    "question": "We need to pack our ______ for the holiday trip.",
    "options": [
      "luggage",
      "luggages",
      "a luggage",
      "many luggage"
    ],
    "correctIndex": 0,
    "explanation": "'Luggage' is uncountable."
  },
  {
    "id": "g7-q124",
    "grade": 7,
    "tier": "hard",
    "topic": "Prepositions: At the end vs In the end",
    "question": "______ of the movie, the hero finally returned home.",
    "options": [
      "At the end",
      "In the end",
      "By the end",
      "On the end"
    ],
    "correctIndex": 0,
    "explanation": "'At the end of something' refers to the final part of a film, book, or period."
  },
  {
    "id": "g7-q125",
    "grade": 7,
    "tier": "hard",
    "topic": "Prepositions: At the end vs In the end",
    "question": "We argued for hours, but ______ we reached an agreement.",
    "options": [
      "in the end",
      "at the end",
      "on the end",
      "by the end"
    ],
    "correctIndex": 0,
    "explanation": "'In the end' means 'finally / eventually'."
  },
  {
    "id": "g7-q126",
    "grade": 7,
    "tier": "hard",
    "topic": "Comparative Modifiers",
    "question": "A jumbo jet is ______ bigger than a family car.",
    "options": [
      "far",
      "very",
      "more",
      "too"
    ],
    "correctIndex": 0,
    "explanation": "Comparatives can be intensified with 'far' or 'much'."
  },
  {
    "id": "g7-q127",
    "grade": 7,
    "tier": "hard",
    "topic": "Tense Contrast",
    "question": "While Dad was washing the car, Mum ______ flowers in the garden.",
    "options": [
      "was planting",
      "planted",
      "plants",
      "has planted"
    ],
    "correctIndex": 0,
    "explanation": "Two simultaneous ongoing past actions both use Past Continuous."
  },
  {
    "id": "g7-q128",
    "grade": 7,
    "tier": "hard",
    "topic": "Prepositions after Adjectives",
    "question": "Are you afraid ______ spiders and insects?",
    "options": [
      "of",
      "from",
      "with",
      "about"
    ],
    "correctIndex": 0,
    "explanation": "'Afraid' takes the preposition 'of'."
  },
  {
    "id": "g7-q129",
    "grade": 7,
    "tier": "hard",
    "topic": "Prepositions after Adjectives",
    "question": "She is famous ______ her delicious chocolate cakes.",
    "options": [
      "for",
      "with",
      "about",
      "in"
    ],
    "correctIndex": 0,
    "explanation": "'Famous' takes the preposition 'for'."
  },
  {
    "id": "g7-q130",
    "grade": 7,
    "tier": "hard",
    "topic": "Prepositions after Adjectives",
    "question": "The students were excited ______ the upcoming field trip.",
    "options": [
      "about",
      "for",
      "with",
      "at"
    ],
    "correctIndex": 0,
    "explanation": "'Excited' takes the preposition 'about'."
  },
  {
    "id": "g7-q131",
    "grade": 7,
    "tier": "hard",
    "topic": "Verb + Preposition",
    "question": "Don't laugh ______ other people's mistakes.",
    "options": [
      "at",
      "to",
      "for",
      "on"
    ],
    "correctIndex": 0,
    "explanation": "We say 'laugh AT someone/something'."
  },
  {
    "id": "g7-q132",
    "grade": 7,
    "tier": "hard",
    "topic": "Verb + Preposition",
    "question": "I need to apologize ______ my teacher for being late.",
    "options": [
      "to",
      "for",
      "at",
      "with"
    ],
    "correctIndex": 0,
    "explanation": "We say 'apologize TO someone'."
  },
  {
    "id": "g7-q133",
    "grade": 7,
    "tier": "hard",
    "topic": "Verb + Preposition",
    "question": "She succeeded ______ passing the difficult entrance test.",
    "options": [
      "in",
      "on",
      "at",
      "with"
    ],
    "correctIndex": 0,
    "explanation": "'Succeed' takes the preposition 'in + gerund'."
  },
  {
    "id": "g7-q134",
    "grade": 7,
    "tier": "hard",
    "topic": "Pronouns: Someone vs Anyone",
    "question": "I didn't meet ______ interesting at the party.",
    "options": [
      "anyone",
      "someone",
      "no one",
      "everyone"
    ],
    "correctIndex": 0,
    "explanation": "Negative sentences use 'anyone'."
  },
  {
    "id": "g7-q135",
    "grade": 7,
    "tier": "hard",
    "topic": "Pronouns: Somebody vs Anybody",
    "question": "______ called you while you were taking a shower.",
    "options": [
      "Somebody",
      "Anybody",
      "Nobody",
      "Any"
    ],
    "correctIndex": 0,
    "explanation": "Affirmative statements about an unspecified person use 'Somebody'."
  },
  {
    "id": "g7-q136",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Subject-Verb Agreement",
    "question": "Neither the captain nor the players ______ happy with the referee.",
    "options": [
      "were",
      "was",
      "is",
      "has been"
    ],
    "correctIndex": 0,
    "explanation": "In 'Neither...nor', the verb agrees with the closer plural subject 'the players' (were)."
  },
  {
    "id": "g7-q137",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Subject-Verb Agreement",
    "question": "Neither the players nor the coach ______ at the press conference.",
    "options": [
      "was",
      "were",
      "are",
      "have been"
    ],
    "correctIndex": 0,
    "explanation": "Verb agrees with the closer singular subject 'the coach' (was)."
  },
  {
    "id": "g7-q138",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Subject-Verb Agreement",
    "question": "A number of students ______ waiting outside the classroom.",
    "options": [
      "are",
      "is",
      "was",
      "has been"
    ],
    "correctIndex": 0,
    "explanation": "'A number of + plural noun' takes a plural verb ('are')."
  },
  {
    "id": "g7-q139",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Subject-Verb Agreement",
    "question": "The number of rare birds in the reserve ______ increasing steadily.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "correctIndex": 0,
    "explanation": "'The number of...' takes a singular verb ('is')."
  },
  {
    "id": "g7-q140",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Conjunctions: Despite",
    "question": "______ the severe storm warnings, the fishermen sailed out to sea.",
    "options": [
      "Despite",
      "Although",
      "Even though",
      "However"
    ],
    "correctIndex": 0,
    "explanation": "'Despite' is followed by a noun phrase."
  },
  {
    "id": "g7-q141",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Conjunctions: In spite of",
    "question": "They managed to complete the marathon ______ feeling exhausted.",
    "options": [
      "in spite of",
      "although",
      "despite of",
      "even"
    ],
    "correctIndex": 0,
    "explanation": "'In spite of' is followed by a gerund ('feeling')."
  },
  {
    "id": "g7-q142",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Units of Measure Agreement",
    "question": "Fifty dollars ______ too much money to spend on a notebook.",
    "options": [
      "is",
      "are",
      "were",
      "being"
    ],
    "correctIndex": 0,
    "explanation": "Sums of money take singular verbs ('Fifty dollars is')."
  },
  {
    "id": "g7-q143",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Units of Measure Agreement",
    "question": "Five kilometers ______ a short distance for an experienced cyclist.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "correctIndex": 0,
    "explanation": "Distances take singular verbs ('Five kilometers is')."
  },
  {
    "id": "g7-q144",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Used to vs Be used to",
    "question": "My grandfather ______ walk five miles to school every day.",
    "options": [
      "used to",
      "was used to",
      "use to",
      "am used to"
    ],
    "correctIndex": 0,
    "explanation": "'Used to + base verb' describes past habits that are no longer true."
  },
  {
    "id": "g7-q145",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Used to vs Be used to",
    "question": "She lives in London now, so she ______ to driving in heavy traffic.",
    "options": [
      "is used",
      "used",
      "use",
      "was used"
    ],
    "correctIndex": 0,
    "explanation": "'Be used to + gerund' means accustomed to something."
  },
  {
    "id": "g7-q146",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Compound Subjects",
    "question": "Fish and chips ______ the most popular dish in that traditional pub.",
    "options": [
      "is",
      "are",
      "were",
      "being"
    ],
    "correctIndex": 0,
    "explanation": "A compound noun considered a single meal takes a singular verb 'is'."
  },
  {
    "id": "g7-q147",
    "grade": 7,
    "tier": "very_hard",
    "topic": "So / Neither Auxiliaries",
    "question": "A: 'I have never travelled outside Europe.' B: '______.'",
    "options": [
      "Neither have I",
      "So have I",
      "Neither do I",
      "So I haven't"
    ],
    "correctIndex": 0,
    "explanation": "Agreeing with a negative Present Perfect statement: 'Neither have I'."
  },
  {
    "id": "g7-q148",
    "grade": 7,
    "tier": "very_hard",
    "topic": "So / Neither Auxiliaries",
    "question": "A: 'We enjoyed the theatre play immensely.' B: '______.'",
    "options": [
      "So did we",
      "So had we",
      "Neither did we",
      "So we did"
    ],
    "correctIndex": 0,
    "explanation": "Agreeing with an affirmative Past Simple statement: 'So did we'."
  },
  {
    "id": "g7-q149",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Inversion with Seldom",
    "question": "Seldom ______ such a remarkable performance by a young pianist.",
    "options": [
      "have we seen",
      "we have seen",
      "we saw",
      "did we saw"
    ],
    "correctIndex": 0,
    "explanation": "Negative adverb 'Seldom' at the beginning triggers auxiliary inversion ('have we seen')."
  },
  {
    "id": "g7-q150",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Inversion with Rarely",
    "question": "Rarely ______ he make such a careless mistake in mathematics.",
    "options": [
      "does",
      "is",
      "did he made",
      "has"
    ],
    "correctIndex": 0,
    "explanation": "'Rarely does he make...' uses inverted auxiliary."
  },
  {
    "id": "g7-q151",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Collocations with Prepositions",
    "question": "The teacher congratulated the students ______ their great project results.",
    "options": [
      "on",
      "for",
      "with",
      "in"
    ],
    "correctIndex": 0,
    "explanation": "The collocation is 'congratulate someone ON something'."
  },
  {
    "id": "g7-q152",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Collocations with Prepositions",
    "question": "The security guard prevented the crowd ______ entering the stage.",
    "options": [
      "from",
      "to",
      "against",
      "for"
    ],
    "correctIndex": 0,
    "explanation": "Collocation is 'prevent someone FROM doing something'."
  },
  {
    "id": "g7-q153",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Gerund as Subject",
    "question": "______ balanced meals is vital for maintaining good health.",
    "options": [
      "Eating",
      "Eat",
      "Eaten",
      "To eating"
    ],
    "correctIndex": 0,
    "explanation": "Gerund 'Eating' acts as subject and takes singular verb 'is'."
  },
  {
    "id": "g7-q154",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Past Perfect in Context",
    "question": "By the time the firefighter arrived, the neighbors ______ already extinguished the fire.",
    "options": [
      "had",
      "have",
      "were",
      "did"
    ],
    "correctIndex": 0,
    "explanation": "'By the time + past simple' pairs with Past Perfect ('had extinguished') for the earlier event."
  },
  {
    "id": "g7-q155",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Subjunctive / Formulaic",
    "question": "It is high time you ______ studying seriously for the scholarship.",
    "options": [
      "started",
      "start",
      "have started",
      "will start"
    ],
    "correctIndex": 0,
    "explanation": "'It is high time + subject' takes past subjunctive ('started')."
  },
  {
    "id": "g7-q156",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Relative Pronoun as Subject vs Object",
    "question": "The scientist ______ invented this device won the Nobel Prize.",
    "options": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "correctIndex": 0,
    "explanation": "'Who' acts as the subject relative pronoun referring to 'The scientist'."
  },
  {
    "id": "g7-q157",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Relative Pronoun Object",
    "question": "The doctor ______ I consulted yesterday recommended plenty of rest.",
    "options": [
      "whom",
      "whose",
      "which",
      "where"
    ],
    "correctIndex": 0,
    "explanation": "'Whom' (or who) acts as the object relative pronoun for a person."
  },
  {
    "id": "g7-q158",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Noun Clauses",
    "question": "What she said ______ everyone in the room.",
    "options": [
      "surprised",
      "was surprising to",
      "were surprising",
      "have surprised"
    ],
    "correctIndex": 0,
    "explanation": "A wh- noun clause ('What she said') functions as a singular subject."
  },
  {
    "id": "g7-q159",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Modals: Must have",
    "question": "The ground is damp this morning. It ______ rained during the night.",
    "options": [
      "must have",
      "should have",
      "can't have",
      "might to"
    ],
    "correctIndex": 0,
    "explanation": "'Must have + past participle' expresses logical certainty about the past."
  },
  {
    "id": "g7-q160",
    "grade": 7,
    "tier": "very_hard",
    "topic": "Negative Inversion",
    "question": "Never ______ I witnessed such breathtaking natural beauty.",
    "options": [
      "have",
      "did",
      "was",
      "had been"
    ],
    "correctIndex": 0,
    "explanation": "'Never have I witnessed...' is standard literary inversion."
  }
],
  grade8: [
  {
    "id": "g8-q001",
    "grade": 8,
    "tier": "easy",
    "topic": "Present Perfect: Ever",
    "question": "Have you ever ______ sushi at a Japanese restaurant?",
    "options": [
      "eaten",
      "ate",
      "eat",
      "eating"
    ],
    "correctIndex": 0,
    "explanation": "Past participle 'eaten' is used with Present Perfect 'Have you ever...'."
  },
  {
    "id": "g8-q002",
    "grade": 8,
    "tier": "easy",
    "topic": "Present Perfect: Never",
    "question": "She has never ______ to New York before.",
    "options": [
      "been",
      "went",
      "gone to",
      "being"
    ],
    "correctIndex": 0,
    "explanation": "'Has never been' means has never visited in her life."
  },
  {
    "id": "g8-q003",
    "grade": 8,
    "tier": "easy",
    "topic": "Present Perfect: Just",
    "question": "We have just ______ the exciting news about the competition!",
    "options": [
      "heard",
      "hear",
      "heared",
      "hearing"
    ],
    "correctIndex": 0,
    "explanation": "'Just' takes the past participle 'heard' in Present Perfect."
  },
  {
    "id": "g8-q004",
    "grade": 8,
    "tier": "easy",
    "topic": "Present Perfect: Already",
    "question": "He has already ______ his homework, so he can watch TV now.",
    "options": [
      "finished",
      "finish",
      "finishing",
      "finishes"
    ],
    "correctIndex": 0,
    "explanation": "'Already' is used in affirmative Present Perfect sentences."
  },
  {
    "id": "g8-q005",
    "grade": 8,
    "tier": "easy",
    "topic": "Present Perfect: Yet",
    "question": "Have you packed your travel suitcase ______?",
    "options": [
      "yet",
      "already",
      "just",
      "since"
    ],
    "correctIndex": 0,
    "explanation": "'Yet' is placed at the end of questions in Present Perfect."
  },
  {
    "id": "g8-q006",
    "grade": 8,
    "tier": "easy",
    "topic": "Present Perfect: Yet (Negative)",
    "question": "The postman hasn't delivered our mail ______.",
    "options": [
      "yet",
      "already",
      "just",
      "still"
    ],
    "correctIndex": 0,
    "explanation": "'Yet' goes at the end of negative Present Perfect sentences."
  },
  {
    "id": "g8-q007",
    "grade": 8,
    "tier": "easy",
    "topic": "Present Perfect: Since vs For",
    "question": "I have known my best friend ______ five years.",
    "options": [
      "for",
      "since",
      "from",
      "during"
    ],
    "correctIndex": 0,
    "explanation": "'For' is used for a duration/length of time."
  },
  {
    "id": "g8-q008",
    "grade": 8,
    "tier": "easy",
    "topic": "Present Perfect: Since vs For",
    "question": "They have lived in this town ______ 2018.",
    "options": [
      "since",
      "for",
      "in",
      "from"
    ],
    "correctIndex": 0,
    "explanation": "'Since' is used for a specific starting point in time."
  },
  {
    "id": "g8-q009",
    "grade": 8,
    "tier": "easy",
    "topic": "Zero Conditional",
    "question": "If water reaches 100 degrees Celsius, it ______.",
    "options": [
      "boils",
      "boiled",
      "will boil",
      "is boiling"
    ],
    "correctIndex": 0,
    "explanation": "Zero conditional uses Present Simple in both clauses for scientific facts."
  },
  {
    "id": "g8-q010",
    "grade": 8,
    "tier": "easy",
    "topic": "Zero Conditional",
    "question": "If you freeze water, it ______ into solid ice.",
    "options": [
      "turns",
      "will turn",
      "turned",
      "is turning"
    ],
    "correctIndex": 0,
    "explanation": "Zero conditional describes general physical truths."
  },
  {
    "id": "g8-q011",
    "grade": 8,
    "tier": "easy",
    "topic": "First Conditional",
    "question": "If you study hard, you ______ the upcoming grammar test.",
    "options": [
      "will pass",
      "passed",
      "pass",
      "would pass"
    ],
    "correctIndex": 0,
    "explanation": "First conditional: 'If + Present Simple, will + base verb'."
  },
  {
    "id": "g8-q012",
    "grade": 8,
    "tier": "easy",
    "topic": "First Conditional",
    "question": "We will go for a bike ride if the rain ______ soon.",
    "options": [
      "stops",
      "will stop",
      "stopped",
      "is stopping"
    ],
    "correctIndex": 0,
    "explanation": "If-clause in first conditional takes Present Simple ('stops')."
  },
  {
    "id": "g8-q013",
    "grade": 8,
    "tier": "easy",
    "topic": "Relative Pronoun: Who",
    "question": "The boy ______ won the chess tournament is in my class.",
    "options": [
      "who",
      "which",
      "whose",
      "where"
    ],
    "correctIndex": 0,
    "explanation": "'Who' refers to people as the subject of the clause."
  },
  {
    "id": "g8-q014",
    "grade": 8,
    "tier": "easy",
    "topic": "Relative Pronoun: Which",
    "question": "This is the smartphone ______ has the best camera quality.",
    "options": [
      "which",
      "who",
      "whose",
      "where"
    ],
    "correctIndex": 0,
    "explanation": "'Which' (or that) refers to objects and things."
  },
  {
    "id": "g8-q015",
    "grade": 8,
    "tier": "easy",
    "topic": "Relative Pronoun: Where",
    "question": "That is the cozy cafe ______ we first met two years ago.",
    "options": [
      "where",
      "which",
      "who",
      "when"
    ],
    "correctIndex": 0,
    "explanation": "'Where' is used to refer to a place."
  },
  {
    "id": "g8-q016",
    "grade": 8,
    "tier": "easy",
    "topic": "Relative Pronoun: When",
    "question": "Do you remember the day ______ we went to the adventure park?",
    "options": [
      "when",
      "where",
      "which",
      "who"
    ],
    "correctIndex": 0,
    "explanation": "'When' refers to a specific time or day."
  },
  {
    "id": "g8-q017",
    "grade": 8,
    "tier": "easy",
    "topic": "Gerunds vs Infinitives",
    "question": "She enjoys ______ modern pop songs on her acoustic guitar.",
    "options": [
      "playing",
      "to play",
      "play",
      "played"
    ],
    "correctIndex": 0,
    "explanation": "'Enjoy' is always followed by a gerund ('playing')."
  },
  {
    "id": "g8-q018",
    "grade": 8,
    "tier": "easy",
    "topic": "Gerunds vs Infinitives",
    "question": "They decided ______ their grandparents over the weekend.",
    "options": [
      "to visit",
      "visiting",
      "visit",
      "visited"
    ],
    "correctIndex": 0,
    "explanation": "'Decide' is followed by a to-infinitive ('to visit')."
  },
  {
    "id": "g8-q019",
    "grade": 8,
    "tier": "easy",
    "topic": "Gerunds vs Infinitives",
    "question": "He promised ______ me with my science project tomorrow.",
    "options": [
      "to help",
      "helping",
      "help",
      "helped"
    ],
    "correctIndex": 0,
    "explanation": "'Promise' is followed by a to-infinitive ('to help')."
  },
  {
    "id": "g8-q020",
    "grade": 8,
    "tier": "easy",
    "topic": "Gerunds vs Infinitives",
    "question": "Avoid ______ too much sugary soda before going to sleep.",
    "options": [
      "drinking",
      "to drink",
      "drink",
      "drank"
    ],
    "correctIndex": 0,
    "explanation": "'Avoid' is followed by a gerund ('drinking')."
  },
  {
    "id": "g8-q021",
    "grade": 8,
    "tier": "easy",
    "topic": "Passive Voice (Present Simple)",
    "question": "Millions of text messages ______ sent around the world every minute.",
    "options": [
      "are",
      "is",
      "have",
      "were"
    ],
    "correctIndex": 0,
    "explanation": "Plural subject 'Millions of text messages' takes 'are + past participle'."
  },
  {
    "id": "g8-q022",
    "grade": 8,
    "tier": "easy",
    "topic": "Passive Voice (Present Simple)",
    "question": "This newspaper ______ published daily in London.",
    "options": [
      "is",
      "are",
      "was",
      "has"
    ],
    "correctIndex": 0,
    "explanation": "Singular 'This newspaper' takes 'is published' for a regular present fact."
  },
  {
    "id": "g8-q023",
    "grade": 8,
    "tier": "easy",
    "topic": "Passive Voice (Past Simple)",
    "question": "The Mona Lisa ______ painted by Leonardo da Vinci.",
    "options": [
      "was",
      "is",
      "were",
      "has been"
    ],
    "correctIndex": 0,
    "explanation": "Singular subject in past passive takes 'was + past participle'."
  },
  {
    "id": "g8-q024",
    "grade": 8,
    "tier": "easy",
    "topic": "Passive Voice (Past Simple)",
    "question": "These ancient pyramids ______ built thousands of years ago.",
    "options": [
      "were",
      "was",
      "are",
      "have"
    ],
    "correctIndex": 0,
    "explanation": "Plural 'These ancient pyramids' takes 'were built'."
  },
  {
    "id": "g8-q025",
    "grade": 8,
    "tier": "easy",
    "topic": "Question Tags",
    "question": "You haven't seen my keys anywhere, ______ you?",
    "options": [
      "have",
      "haven't",
      "did",
      "do"
    ],
    "correctIndex": 0,
    "explanation": "Negative statement in Present Perfect takes positive tag 'have you?'."
  },
  {
    "id": "g8-q026",
    "grade": 8,
    "tier": "easy",
    "topic": "Question Tags",
    "question": "She speaks French fluently, ______ she?",
    "options": [
      "doesn't",
      "isn't",
      "does",
      "didn't"
    ],
    "correctIndex": 0,
    "explanation": "Affirmative Present Simple takes negative tag 'doesn't she?'."
  },
  {
    "id": "g8-q027",
    "grade": 8,
    "tier": "easy",
    "topic": "Question Tags",
    "question": "They were at the cinema yesterday, ______ they?",
    "options": [
      "weren't",
      "were",
      "didn't",
      "aren't"
    ],
    "correctIndex": 0,
    "explanation": "Affirmative past 'were' takes negative tag 'weren't they?'."
  },
  {
    "id": "g8-q028",
    "grade": 8,
    "tier": "easy",
    "topic": "Modals: Mustn't",
    "question": "You ______ touch that ancient museum exhibit; it is fragile.",
    "options": [
      "mustn't",
      "don't have to",
      "can",
      "should"
    ],
    "correctIndex": 0,
    "explanation": "'Mustn't' expresses strict prohibition."
  },
  {
    "id": "g8-q029",
    "grade": 8,
    "tier": "easy",
    "topic": "Modals: Don't have to",
    "question": "You ______ pay for the museum tickets; admission is free today.",
    "options": [
      "don't have to",
      "mustn't",
      "can't",
      "shouldn't to"
    ],
    "correctIndex": 0,
    "explanation": "'Don't have to' expresses lack of necessity."
  },
  {
    "id": "g8-q030",
    "grade": 8,
    "tier": "easy",
    "topic": "Modals: Might / May",
    "question": "Take an umbrella; the weather forecast says it ______ rain later.",
    "options": [
      "might",
      "must",
      "can't",
      "should to"
    ],
    "correctIndex": 0,
    "explanation": "'Might' expresses possible future outcome."
  },
  {
    "id": "g8-q031",
    "grade": 8,
    "tier": "easy",
    "topic": "Correlative Conjunctions",
    "question": "She is ______ smart and exceptionally kind to everyone.",
    "options": [
      "both",
      "either",
      "neither",
      "not only"
    ],
    "correctIndex": 0,
    "explanation": "'Both...and' pairs together two positive qualities."
  },
  {
    "id": "g8-q032",
    "grade": 8,
    "tier": "easy",
    "topic": "Correlative Conjunctions",
    "question": "You can choose ______ the chocolate cake or the fruit salad.",
    "options": [
      "either",
      "neither",
      "both",
      "whether"
    ],
    "correctIndex": 0,
    "explanation": "'Either...or' offers a choice between two options."
  },
  {
    "id": "g8-q033",
    "grade": 8,
    "tier": "easy",
    "topic": "Correlative Conjunctions",
    "question": "______ the teacher nor the students were aware of the schedule change.",
    "options": [
      "Neither",
      "Either",
      "Both",
      "Not"
    ],
    "correctIndex": 0,
    "explanation": "'Neither...nor' pairs to negate both subjects."
  },
  {
    "id": "g8-q034",
    "grade": 8,
    "tier": "easy",
    "topic": "Used to",
    "question": "Did you ______ have long hair when you were a child?",
    "options": [
      "use to",
      "used to",
      "used",
      "using to"
    ],
    "correctIndex": 0,
    "explanation": "Questions with 'did' use base form 'use to'."
  },
  {
    "id": "g8-q035",
    "grade": 8,
    "tier": "easy",
    "topic": "Used to",
    "question": "I ______ live in a small village, but now I live in a metropolis.",
    "options": [
      "used to",
      "was used to",
      "am used to",
      "use to"
    ],
    "correctIndex": 0,
    "explanation": "'Used to + base verb' describes past habits/states."
  },
  {
    "id": "g8-q036",
    "grade": 8,
    "tier": "easy",
    "topic": "Comparatives: Modifiers",
    "question": "This tablet is ______ cheaper than the brand-new laptop.",
    "options": [
      "much",
      "very",
      "more",
      "too"
    ],
    "correctIndex": 0,
    "explanation": "Comparatives are modified by 'much' or 'far'."
  },
  {
    "id": "g8-q037",
    "grade": 8,
    "tier": "easy",
    "topic": "Comparatives: As...As",
    "question": "My old backpack is just as ______ as your new one.",
    "options": [
      "durable",
      "more durable",
      "most durable",
      "as durable"
    ],
    "correctIndex": 0,
    "explanation": "Between 'as...as', base adjective form 'durable' is used."
  },
  {
    "id": "g8-q038",
    "grade": 8,
    "tier": "easy",
    "topic": "Adjectives + Prepositions",
    "question": "He is very proud ______ his sister's outstanding art exhibition.",
    "options": [
      "of",
      "for",
      "with",
      "about"
    ],
    "correctIndex": 0,
    "explanation": "'Proud' takes the preposition 'of'."
  },
  {
    "id": "g8-q039",
    "grade": 8,
    "tier": "easy",
    "topic": "Adjectives + Prepositions",
    "question": "Are you interested ______ learning how to play chess?",
    "options": [
      "in",
      "on",
      "at",
      "about"
    ],
    "correctIndex": 0,
    "explanation": "'Interested' takes the preposition 'in'."
  },
  {
    "id": "g8-q040",
    "grade": 8,
    "tier": "easy",
    "topic": "Adjectives + Prepositions",
    "question": "She is keen ______ joining the school environmental club.",
    "options": [
      "on",
      "in",
      "at",
      "about"
    ],
    "correctIndex": 0,
    "explanation": "'Keen' takes the preposition 'on'."
  },
  {
    "id": "g8-q041",
    "grade": 8,
    "tier": "easy",
    "topic": "Verb + Preposition",
    "question": "We are waiting ______ the school bus at the corner.",
    "options": [
      "for",
      "to",
      "at",
      "on"
    ],
    "correctIndex": 0,
    "explanation": "We say 'wait FOR someone/something'."
  },
  {
    "id": "g8-q042",
    "grade": 8,
    "tier": "easy",
    "topic": "Verb + Preposition",
    "question": "He is listening attentively ______ his teacher's instructions.",
    "options": [
      "to",
      "at",
      "on",
      "for"
    ],
    "correctIndex": 0,
    "explanation": "We say 'listen TO someone/something'."
  },
  {
    "id": "g8-q043",
    "grade": 8,
    "tier": "easy",
    "topic": "Pronouns: Indefinite",
    "question": "There was ______ in the room; it was totally empty.",
    "options": [
      "nobody",
      "anybody",
      "somebody",
      "everybody"
    ],
    "correctIndex": 0,
    "explanation": "'Nobody' expresses total absence of people."
  },
  {
    "id": "g8-q044",
    "grade": 8,
    "tier": "easy",
    "topic": "Pronouns: Indefinite",
    "question": "Did ______ call while I was out at the grocery store?",
    "options": [
      "anyone",
      "someone",
      "no one",
      "everyone"
    ],
    "correctIndex": 0,
    "explanation": "'Anyone' is used in general questions about people."
  },
  {
    "id": "g8-q045",
    "grade": 8,
    "tier": "easy",
    "topic": "Plural Nouns (Irregular)",
    "question": "A group of ______ were swimming across the quiet lake.",
    "options": [
      "geese",
      "gooses",
      "geeses",
      "goose"
    ],
    "correctIndex": 0,
    "explanation": "Plural of 'goose' is 'geese'."
  },
  {
    "id": "g8-q046",
    "grade": 8,
    "tier": "medium",
    "topic": "Present Perfect vs Past Simple",
    "question": "Mozart ______ more than six hundred musical compositions during his lifetime.",
    "options": [
      "composed",
      "has composed",
      "was composed",
      "is composing"
    ],
    "correctIndex": 0,
    "explanation": "Historical figures who have passed away take Past Simple 'composed'."
  },
  {
    "id": "g8-q047",
    "grade": 8,
    "tier": "medium",
    "topic": "Present Perfect vs Past Simple",
    "question": "I ______ my ankle while playing basketball yesterday.",
    "options": [
      "sprained",
      "have sprained",
      "was spraining",
      "had sprained"
    ],
    "correctIndex": 0,
    "explanation": "Specific finished past time 'yesterday' requires Past Simple 'sprained'."
  },
  {
    "id": "g8-q048",
    "grade": 8,
    "tier": "medium",
    "topic": "Present Perfect vs Past Simple",
    "question": "She ______ in five different countries so far in her career.",
    "options": [
      "has lived",
      "lived",
      "was living",
      "had lived"
    ],
    "correctIndex": 0,
    "explanation": "'So far' indicates life experience continuing into the present (Present Perfect: 'has lived')."
  },
  {
    "id": "g8-q049",
    "grade": 8,
    "tier": "medium",
    "topic": "Second Conditional",
    "question": "If I ______ a spaceship, I would travel to Mars.",
    "options": [
      "had",
      "have",
      "will have",
      "would have"
    ],
    "correctIndex": 0,
    "explanation": "Second conditional if-clause takes Past Simple 'had'."
  },
  {
    "id": "g8-q050",
    "grade": 8,
    "tier": "medium",
    "topic": "Second Conditional",
    "question": "If she studied more consistently, she ______ better grades on her exams.",
    "options": [
      "would get",
      "will get",
      "got",
      "had got"
    ],
    "correctIndex": 0,
    "explanation": "Second conditional result clause uses 'would + base verb'."
  },
  {
    "id": "g8-q051",
    "grade": 8,
    "tier": "medium",
    "topic": "Second Conditional (Were)",
    "question": "If I ______ in your shoes, I would accept the job offer.",
    "options": [
      "were",
      "was",
      "am",
      "would be"
    ],
    "correctIndex": 0,
    "explanation": "Subjunctive 'were' is formal and standard in hypothetical condition clauses."
  },
  {
    "id": "g8-q052",
    "grade": 8,
    "tier": "medium",
    "topic": "Relative Clauses: Whose",
    "question": "That is the author ______ novel became an international bestseller.",
    "options": [
      "whose",
      "who",
      "which",
      "whom"
    ],
    "correctIndex": 0,
    "explanation": "'Whose' indicates possession ('whose novel')."
  },
  {
    "id": "g8-q053",
    "grade": 8,
    "tier": "medium",
    "topic": "Relative Clauses: Non-defining",
    "question": "My uncle David, ______ is a pilot, flies international routes.",
    "options": [
      "who",
      "that",
      "which",
      "whom"
    ],
    "correctIndex": 0,
    "explanation": "Non-defining relative clauses for people use 'who' (never 'that')."
  },
  {
    "id": "g8-q054",
    "grade": 8,
    "tier": "medium",
    "topic": "Relative Clauses: That vs Which",
    "question": "The book ______ is on the top shelf belongs to the school library.",
    "options": [
      "that",
      "who",
      "where",
      "whose"
    ],
    "correctIndex": 0,
    "explanation": "Defining relative clause for things can use 'that' or 'which'."
  },
  {
    "id": "g8-q055",
    "grade": 8,
    "tier": "medium",
    "topic": "Passive Voice: Past Continuous",
    "question": "The new bridge ______ built when we visited the city last year.",
    "options": [
      "was being",
      "is being",
      "was",
      "were being"
    ],
    "correctIndex": 0,
    "explanation": "Singular 'The new bridge' in past continuous passive takes 'was being built'."
  },
  {
    "id": "g8-q056",
    "grade": 8,
    "tier": "medium",
    "topic": "Passive Voice: Modals",
    "question": "All safety helmets must ______ worn inside the construction area.",
    "options": [
      "be",
      "being",
      "to be",
      "been"
    ],
    "correctIndex": 0,
    "explanation": "Modal passive is 'modal + be + past participle' (must be worn)."
  },
  {
    "id": "g8-q057",
    "grade": 8,
    "tier": "medium",
    "topic": "Passive Voice: Present Perfect",
    "question": "The missing museum artifact ______ found by the police.",
    "options": [
      "has been",
      "have been",
      "is being",
      "was being"
    ],
    "correctIndex": 0,
    "explanation": "Singular 'artifact' in Present Perfect passive takes 'has been found'."
  },
  {
    "id": "g8-q058",
    "grade": 8,
    "tier": "medium",
    "topic": "Gerunds vs Infinitives: Remember",
    "question": "Please remember ______ off the lights before leaving the classroom.",
    "options": [
      "to turn",
      "turning",
      "turn",
      "turned"
    ],
    "correctIndex": 0,
    "explanation": "'Remember to do' means not forgetting a duty or task."
  },
  {
    "id": "g8-q059",
    "grade": 8,
    "tier": "medium",
    "topic": "Gerunds vs Infinitives: Remember",
    "question": "I distinctly remember ______ the front door this morning.",
    "options": [
      "locking",
      "to lock",
      "lock",
      "have locked"
    ],
    "correctIndex": 0,
    "explanation": "'Remember doing' means recalling a past memory."
  },
  {
    "id": "g8-q060",
    "grade": 8,
    "tier": "medium",
    "topic": "Gerunds vs Infinitives: Stop",
    "question": "He was very tired from driving, so he stopped ______ a cup of coffee.",
    "options": [
      "to drink",
      "drinking",
      "drink",
      "drank"
    ],
    "correctIndex": 0,
    "explanation": "'Stop to do' means pausing one activity to perform another."
  },
  {
    "id": "g8-q061",
    "grade": 8,
    "tier": "medium",
    "topic": "Gerunds vs Infinitives: Stop",
    "question": "You must stop ______ your fingernails; it is an unhealthy habit.",
    "options": [
      "biting",
      "to bite",
      "bite",
      "bitten"
    ],
    "correctIndex": 0,
    "explanation": "'Stop doing' means quitting a habit."
  },
  {
    "id": "g8-q062",
    "grade": 8,
    "tier": "medium",
    "topic": "Gerunds vs Infinitives: Forget",
    "question": "Don't forget ______ your completed assignment tomorrow morning.",
    "options": [
      "to bring",
      "bringing",
      "bring",
      "brought"
    ],
    "correctIndex": 0,
    "explanation": "'Don't forget to do' reminds someone of a future duty."
  },
  {
    "id": "g8-q063",
    "grade": 8,
    "tier": "medium",
    "topic": "Gerunds vs Infinitives: Try",
    "question": "I tried ______ the heavy lid, but it was stuck tightly.",
    "options": [
      "to open",
      "opening",
      "open",
      "opened"
    ],
    "correctIndex": 0,
    "explanation": "'Try to do' means attempting to achieve something difficult."
  },
  {
    "id": "g8-q064",
    "grade": 8,
    "tier": "medium",
    "topic": "Reported Speech: Statements",
    "question": "Direct: 'I am tired.' -> She said that she ______ tired.",
    "options": [
      "was",
      "is",
      "had been",
      "will be"
    ],
    "correctIndex": 0,
    "explanation": "Present Simple 'am' shifts back to Past Simple 'was' in reported speech."
  },
  {
    "id": "g8-q065",
    "grade": 8,
    "tier": "medium",
    "topic": "Reported Speech: Statements",
    "question": "Direct: 'We will help you tomorrow.' -> They told me that they ______ me the next day.",
    "options": [
      "would help",
      "will help",
      "helped",
      "would have helped"
    ],
    "correctIndex": 0,
    "explanation": "'Will' shifts to 'would' in reported speech."
  },
  {
    "id": "g8-q066",
    "grade": 8,
    "tier": "medium",
    "topic": "Unless",
    "question": "You cannot join the school basketball team ______ you attend all the practice sessions.",
    "options": [
      "unless",
      "if",
      "providing",
      "as long as"
    ],
    "correctIndex": 0,
    "explanation": "'Unless' means 'if...not'."
  },
  {
    "id": "g8-q067",
    "grade": 8,
    "tier": "medium",
    "topic": "Question Tags: Imperatives",
    "question": "Help me carry these heavy boxes, ______ you?",
    "options": [
      "will",
      "do",
      "don't",
      "shall"
    ],
    "correctIndex": 0,
    "explanation": "Imperative requests take the tag 'will you?'."
  },
  {
    "id": "g8-q068",
    "grade": 8,
    "tier": "medium",
    "topic": "Question Tags: Let's",
    "question": "Let's review our English grammar notes together, ______ we?",
    "options": [
      "shall",
      "will",
      "do",
      "aren't"
    ],
    "correctIndex": 0,
    "explanation": "'Let's' suggestions take the question tag 'shall we?'."
  },
  {
    "id": "g8-q069",
    "grade": 8,
    "tier": "medium",
    "topic": "Modals: Had better",
    "question": "You ______ put on a warm jacket; it is freezing outside.",
    "options": [
      "had better",
      "would better",
      "had better to",
      "better to"
    ],
    "correctIndex": 0,
    "explanation": "'Had better + bare infinitive' gives strong urgent advice."
  },
  {
    "id": "g8-q070",
    "grade": 8,
    "tier": "medium",
    "topic": "Connectors: So that",
    "question": "She spoke quietly ______ she wouldn't disturb the sleeping baby.",
    "options": [
      "so that",
      "in order to",
      "because of",
      "due to"
    ],
    "correctIndex": 0,
    "explanation": "'So that' is followed by a subject + modal clause."
  },
  {
    "id": "g8-q071",
    "grade": 8,
    "tier": "medium",
    "topic": "Connectors: In order to",
    "question": "He went to the sports gym ______ build up his physical stamina.",
    "options": [
      "in order to",
      "so that",
      "because",
      "as for"
    ],
    "correctIndex": 0,
    "explanation": "'In order to + base verb' expresses purpose directly."
  },
  {
    "id": "g8-q072",
    "grade": 8,
    "tier": "medium",
    "topic": "Connectors: Because of",
    "question": "The outdoor match was cancelled ______ the heavy rainstorm.",
    "options": [
      "because of",
      "because",
      "since",
      "as"
    ],
    "correctIndex": 0,
    "explanation": "'Because of' is followed by a noun phrase."
  },
  {
    "id": "g8-q073",
    "grade": 8,
    "tier": "medium",
    "topic": "Connectors: Whereas",
    "question": "My sister loves rock music, ______ I prefer classical melodies.",
    "options": [
      "whereas",
      "despite",
      "unless",
      "in spite of"
    ],
    "correctIndex": 0,
    "explanation": "'Whereas' highlights direct contrast between two facts."
  },
  {
    "id": "g8-q074",
    "grade": 8,
    "tier": "medium",
    "topic": "Past Perfect Simple",
    "question": "When we arrived at the cinema, the movie ______ already begun.",
    "options": [
      "had",
      "has",
      "was",
      "did"
    ],
    "correctIndex": 0,
    "explanation": "Past Perfect ('had begun') shows an action completed before another past time."
  },
  {
    "id": "g8-q075",
    "grade": 8,
    "tier": "medium",
    "topic": "Past Perfect Simple",
    "question": "She couldn't board the flight because she ______ her passport at home.",
    "options": [
      "had forgotten",
      "has forgotten",
      "forgot",
      "was forgetting"
    ],
    "correctIndex": 0,
    "explanation": "Action happening before another past action takes Past Perfect."
  },
  {
    "id": "g8-q076",
    "grade": 8,
    "tier": "medium",
    "topic": "Double Comparatives",
    "question": "The ______ you practice speaking, the ______ confident you will become.",
    "options": [
      "more / more",
      "most / most",
      "much / much",
      "better / better"
    ],
    "correctIndex": 0,
    "explanation": "'The + comparative... the + comparative' expresses proportional change."
  },
  {
    "id": "g8-q077",
    "grade": 8,
    "tier": "medium",
    "topic": "Such...That",
    "question": "It was ______ an entertaining game that time flew by quickly.",
    "options": [
      "such",
      "so",
      "too",
      "very"
    ],
    "correctIndex": 0,
    "explanation": "'Such + a/an + adjective + noun + that' shows cause and effect."
  },
  {
    "id": "g8-q078",
    "grade": 8,
    "tier": "medium",
    "topic": "So...That",
    "question": "The puzzle was ______ complicated that nobody could solve it in time.",
    "options": [
      "so",
      "such",
      "too",
      "enough"
    ],
    "correctIndex": 0,
    "explanation": "'So + adjective + that' shows degree and result."
  },
  {
    "id": "g8-q079",
    "grade": 8,
    "tier": "medium",
    "topic": "Indirect Questions",
    "question": "Could you please tell me where the nearest metro station ______?",
    "options": [
      "is",
      "is it",
      "does it be",
      "is located it"
    ],
    "correctIndex": 0,
    "explanation": "Indirect questions use affirmative statement word order (Subject + Verb: is)."
  },
  {
    "id": "g8-q080",
    "grade": 8,
    "tier": "medium",
    "topic": "Indirect Questions",
    "question": "Do you know what time the flight ______?",
    "options": [
      "departs",
      "does depart",
      "is departing it",
      "departed it"
    ],
    "correctIndex": 0,
    "explanation": "Indirect question statement order: 'what time the flight departs'."
  },
  {
    "id": "g8-q081",
    "grade": 8,
    "tier": "medium",
    "topic": "Question Tags: Indefinite Pronouns",
    "question": "Somebody left their umbrella in the hallway, ______ they?",
    "options": [
      "didn't",
      "did",
      "wasn't",
      "weren't"
    ],
    "correctIndex": 0,
    "explanation": "'Somebody' is replaced by 'they' in the question tag with past auxiliary 'didn't'."
  },
  {
    "id": "g8-q082",
    "grade": 8,
    "tier": "medium",
    "topic": "Passive Voice: Questions",
    "question": "When ______ this historical castle built?",
    "options": [
      "was",
      "is",
      "were",
      "has been"
    ],
    "correctIndex": 0,
    "explanation": "Singular past passive question uses 'When was this castle built?'."
  },
  {
    "id": "g8-q083",
    "grade": 8,
    "tier": "medium",
    "topic": "Passive Voice: Questions",
    "question": "Where ______ the Olympic Games held in 2024?",
    "options": [
      "were",
      "was",
      "are",
      "have been"
    ],
    "correctIndex": 0,
    "explanation": "Plural 'Olympic Games' takes 'were held'."
  },
  {
    "id": "g8-q084",
    "grade": 8,
    "tier": "medium",
    "topic": "Future Continuous",
    "question": "At 8 PM tonight, we ______ dinner at our favorite Italian restaurant.",
    "options": [
      "will be having",
      "will have",
      "have had",
      "are had"
    ],
    "correctIndex": 0,
    "explanation": "Future Continuous ('will be having') indicates an action in progress at a specific future moment."
  },
  {
    "id": "g8-q085",
    "grade": 8,
    "tier": "medium",
    "topic": "Future Continuous",
    "question": "Don't phone me between 3 and 5 PM; I ______ taking a crucial exam.",
    "options": [
      "will be",
      "will",
      "am to",
      "would be"
    ],
    "correctIndex": 0,
    "explanation": "'Will be + -ing' describes an activity in progress during a future period."
  },
  {
    "id": "g8-q086",
    "grade": 8,
    "tier": "medium",
    "topic": "Present Perfect Continuous",
    "question": "She is out of breath because she ______ for half an hour.",
    "options": [
      "has been running",
      "has run",
      "ran",
      "is running"
    ],
    "correctIndex": 0,
    "explanation": "Present Perfect Continuous connects an ongoing physical activity with its present visible effect."
  },
  {
    "id": "g8-q087",
    "grade": 8,
    "tier": "medium",
    "topic": "Present Perfect Continuous",
    "question": "How long ______ you ______ English at this school?",
    "options": [
      "have / been learning",
      "has / learned",
      "did / learn",
      "are / learning"
    ],
    "correctIndex": 0,
    "explanation": "'How long have you been learning...?' asks about the duration of an ongoing action."
  },
  {
    "id": "g8-q088",
    "grade": 8,
    "tier": "medium",
    "topic": "Relative Pronouns: Preposition at End",
    "question": "That is the company which she works ______.",
    "options": [
      "for",
      "at to",
      "with in",
      "by"
    ],
    "correctIndex": 0,
    "explanation": "The preposition 'for' connects with 'works for a company'."
  },
  {
    "id": "g8-q089",
    "grade": 8,
    "tier": "medium",
    "topic": "Prepositions: Dependent",
    "question": "Scientists are searching ______ new renewable energy solutions.",
    "options": [
      "for",
      "to",
      "at",
      "about"
    ],
    "correctIndex": 0,
    "explanation": "The verb 'search' takes 'for' ('search for solutions')."
  },
  {
    "id": "g8-q090",
    "grade": 8,
    "tier": "medium",
    "topic": "Prepositions: Dependent",
    "question": "You must concentrate ______ your studies to succeed.",
    "options": [
      "on",
      "in",
      "at",
      "with"
    ],
    "correctIndex": 0,
    "explanation": "The verb 'concentrate' takes 'on'."
  },
  {
    "id": "g8-q091",
    "grade": 8,
    "tier": "medium",
    "topic": "Prepositions: Dependent",
    "question": "This smartphone belongs ______ the student in the first row.",
    "options": [
      "to",
      "for",
      "with",
      "at"
    ],
    "correctIndex": 0,
    "explanation": "The verb 'belong' takes 'to'."
  },
  {
    "id": "g8-q092",
    "grade": 8,
    "tier": "medium",
    "topic": "Gerund after Phrasal Verbs",
    "question": "He gave up ______ junk food to improve his overall fitness.",
    "options": [
      "eating",
      "to eat",
      "eat",
      "eaten"
    ],
    "correctIndex": 0,
    "explanation": "Phrasal verbs ending in prepositions ('give up') take gerunds ('eating')."
  },
  {
    "id": "g8-q093",
    "grade": 8,
    "tier": "medium",
    "topic": "Gerund after Phrasal Verbs",
    "question": "They kept on ______ despite the heavy rain.",
    "options": [
      "running",
      "to run",
      "run",
      "ran"
    ],
    "correctIndex": 0,
    "explanation": "'Keep on' is followed by a gerund ('running')."
  },
  {
    "id": "g8-q094",
    "grade": 8,
    "tier": "medium",
    "topic": "Connectors: Even though",
    "question": "______ he was nervous, he delivered an inspiring speech.",
    "options": [
      "Even though",
      "Despite",
      "In spite of",
      "However"
    ],
    "correctIndex": 0,
    "explanation": "'Even though' introduces a full clause (subject + verb)."
  },
  {
    "id": "g8-q095",
    "grade": 8,
    "tier": "medium",
    "topic": "Connectors: Although vs In spite of",
    "question": "______ having a severe headache, she completed the entire exam.",
    "options": [
      "In spite of",
      "Although",
      "Even though",
      "However"
    ],
    "correctIndex": 0,
    "explanation": "'In spite of' is followed by a gerund phrase ('having a severe headache')."
  },
  {
    "id": "g8-q096",
    "grade": 8,
    "tier": "hard",
    "topic": "Past Modals: Must have",
    "question": "The ground is soaked with puddles. It ______ heavily last night.",
    "options": [
      "must have rained",
      "should have rained",
      "can't have rained",
      "might rain"
    ],
    "correctIndex": 0,
    "explanation": "'Must have + past participle' expresses logical certainty about the past based on evidence."
  },
  {
    "id": "g8-q097",
    "grade": 8,
    "tier": "hard",
    "topic": "Past Modals: Can't have",
    "question": "David was in hospital all day. You ______ seen him at the shopping mall.",
    "options": [
      "can't have",
      "must have",
      "should have",
      "might have"
    ],
    "correctIndex": 0,
    "explanation": "'Can't have + past participle' indicates logical impossibility in the past."
  },
  {
    "id": "g8-q098",
    "grade": 8,
    "tier": "hard",
    "topic": "Past Modals: Should have",
    "question": "I have a terrible stomachache. I ______ eaten so much candy.",
    "options": [
      "shouldn't have",
      "mustn't have",
      "couldn't have",
      "wouldn't"
    ],
    "correctIndex": 0,
    "explanation": "'Shouldn't have + past participle' expresses regret about a past action."
  },
  {
    "id": "g8-q099",
    "grade": 8,
    "tier": "hard",
    "topic": "Past Modals: Could have",
    "question": "You were lucky! You ______ broken your leg when you fell off that wall.",
    "options": [
      "could have",
      "must have",
      "should have",
      "will have"
    ],
    "correctIndex": 0,
    "explanation": "'Could have + past participle' expresses past possibility that didn't actually happen."
  },
  {
    "id": "g8-q100",
    "grade": 8,
    "tier": "hard",
    "topic": "Third Conditional",
    "question": "If we had left ten minutes earlier, we ______ the morning train.",
    "options": [
      "would have caught",
      "would catch",
      "will have caught",
      "had caught"
    ],
    "correctIndex": 0,
    "explanation": "Third conditional uses 'If + Past Perfect, would have + past participle'."
  },
  {
    "id": "g8-q101",
    "grade": 8,
    "tier": "hard",
    "topic": "Third Conditional",
    "question": "She ______ the competition if she hadn't practiced so diligently.",
    "options": [
      "wouldn't have won",
      "won't win",
      "wouldn't win",
      "hadn't won"
    ],
    "correctIndex": 0,
    "explanation": "Third conditional counterfactual result in the past."
  },
  {
    "id": "g8-q102",
    "grade": 8,
    "tier": "hard",
    "topic": "Third Conditional",
    "question": "If you had told me about the schedule change, I ______ you at the airport.",
    "options": [
      "would have met",
      "would meet",
      "will meet",
      "had met"
    ],
    "correctIndex": 0,
    "explanation": "Third conditional for an unreal past situation."
  },
  {
    "id": "g8-q103",
    "grade": 8,
    "tier": "hard",
    "topic": "Causative: Have something done",
    "question": "My bicycle brakes were broken, so I had them ______ at the bike shop.",
    "options": [
      "repaired",
      "repair",
      "repairing",
      "to repair"
    ],
    "correctIndex": 0,
    "explanation": "'Have + object + past participle' indicates arranging for a professional service."
  },
  {
    "id": "g8-q104",
    "grade": 8,
    "tier": "hard",
    "topic": "Causative: Get something done",
    "question": "She got her hair ______ for the graduation party.",
    "options": [
      "styled",
      "style",
      "styling",
      "to style"
    ],
    "correctIndex": 0,
    "explanation": "'Get + object + past participle' is the causative structure."
  },
  {
    "id": "g8-q105",
    "grade": 8,
    "tier": "hard",
    "topic": "Causative: Make someone do",
    "question": "The coach made the athletes ______ five extra laps around the track.",
    "options": [
      "run",
      "to run",
      "running",
      "ran"
    ],
    "correctIndex": 0,
    "explanation": "'Make + object + bare infinitive' expresses obligation."
  },
  {
    "id": "g8-q106",
    "grade": 8,
    "tier": "hard",
    "topic": "Causative: Let someone do",
    "question": "Her parents let her ______ to the cinema with her friends.",
    "options": [
      "go",
      "to go",
      "going",
      "gone"
    ],
    "correctIndex": 0,
    "explanation": "'Let + object + bare infinitive' expresses permission."
  },
  {
    "id": "g8-q107",
    "grade": 8,
    "tier": "hard",
    "topic": "Passive with Reporting Verbs",
    "question": "It ______ that the ancient manuscript was written in the 14th century.",
    "options": [
      "is believed",
      "believes",
      "is believing",
      "has believed"
    ],
    "correctIndex": 0,
    "explanation": "Impersonal passive structure 'It is believed that...'."
  },
  {
    "id": "g8-q108",
    "grade": 8,
    "tier": "hard",
    "topic": "Passive with Reporting Verbs",
    "question": "The new archaeological site is reported ______ thousands of years old.",
    "options": [
      "to be",
      "being",
      "that is",
      "be"
    ],
    "correctIndex": 0,
    "explanation": "Personal passive reporting structure: 'Subject + is reported + to be...'."
  },
  {
    "id": "g8-q109",
    "grade": 8,
    "tier": "hard",
    "topic": "Wishes about Present",
    "question": "I have so many chores to finish today. I wish I ______ free time to play.",
    "options": [
      "had",
      "have",
      "would have",
      "had had"
    ],
    "correctIndex": 0,
    "explanation": "'Wish + Past Simple' expresses desire for a present situation to be different."
  },
  {
    "id": "g8-q110",
    "grade": 8,
    "tier": "hard",
    "topic": "Wishes about Present (Were)",
    "question": "I wish I ______ taller so I could join the varsity basketball team.",
    "options": [
      "were",
      "am",
      "would be",
      "have been"
    ],
    "correctIndex": 0,
    "explanation": "'Wish + were' is formal subjunctive for hypothetical wishes."
  },
  {
    "id": "g8-q111",
    "grade": 8,
    "tier": "hard",
    "topic": "Wishes about Future / Annoyance",
    "question": "I wish the neighbors ______ making so much loud noise late at night.",
    "options": [
      "would stop",
      "will stop",
      "had stopped",
      "stop"
    ],
    "correctIndex": 0,
    "explanation": "'Wish + would + base verb' expresses annoyance or a desire for change."
  },
  {
    "id": "g8-q112",
    "grade": 8,
    "tier": "hard",
    "topic": "Relative Pronoun with Prepositions",
    "question": "The topic about ______ we wrote our essay was renewable energy.",
    "options": [
      "which",
      "that",
      "whom",
      "where"
    ],
    "correctIndex": 0,
    "explanation": "After a preposition ('about'), 'which' must be used for things (never 'that')."
  },
  {
    "id": "g8-q113",
    "grade": 8,
    "tier": "hard",
    "topic": "Relative Pronoun with Prepositions",
    "question": "The instructor to ______ you submitted your project is very experienced.",
    "options": [
      "whom",
      "who",
      "which",
      "whose"
    ],
    "correctIndex": 0,
    "explanation": "After a preposition ('to'), 'whom' is used for people."
  },
  {
    "id": "g8-q114",
    "grade": 8,
    "tier": "hard",
    "topic": "Gerund after 'Look forward to'",
    "question": "We are eagerly looking forward to ______ our exchange friends from France.",
    "options": [
      "meeting",
      "meet",
      "met",
      "having met"
    ],
    "correctIndex": 0,
    "explanation": "In 'look forward to', 'to' is a preposition, requiring a gerund ('meeting')."
  },
  {
    "id": "g8-q115",
    "grade": 8,
    "tier": "hard",
    "topic": "Gerund after 'Be used to'",
    "question": "He is accustomed to ______ up at 5:30 AM every day for swimming practice.",
    "options": [
      "waking",
      "wake",
      "woke",
      "woken"
    ],
    "correctIndex": 0,
    "explanation": "'Accustomed to' is followed by a gerund ('waking')."
  },
  {
    "id": "g8-q116",
    "grade": 8,
    "tier": "hard",
    "topic": "Gerund: Expressions",
    "question": "It is no use ______ over broken glass; let's clean it up safely.",
    "options": [
      "crying",
      "to cry",
      "cry",
      "cried"
    ],
    "correctIndex": 0,
    "explanation": "'It is no use' is followed by a gerund ('crying')."
  },
  {
    "id": "g8-q117",
    "grade": 8,
    "tier": "hard",
    "topic": "Gerund: Expressions",
    "question": "That new historical documentary is definitely worth ______ on a big screen.",
    "options": [
      "watching",
      "to watch",
      "watch",
      "watched"
    ],
    "correctIndex": 0,
    "explanation": "'Be worth' is followed by a gerund ('watching')."
  },
  {
    "id": "g8-q118",
    "grade": 8,
    "tier": "hard",
    "topic": "Future Perfect Simple",
    "question": "By this time next month, we ______ all our final term examinations.",
    "options": [
      "will have finished",
      "will finish",
      "will be finishing",
      "finish"
    ],
    "correctIndex": 0,
    "explanation": "'By + future time' requires Future Perfect ('will have finished')."
  },
  {
    "id": "g8-q119",
    "grade": 8,
    "tier": "hard",
    "topic": "Future Perfect Simple",
    "question": "By 2030, scientists ______ a permanent base on the Moon.",
    "options": [
      "will have established",
      "will establish",
      "will be establishing",
      "established"
    ],
    "correctIndex": 0,
    "explanation": "Future Perfect for an action completed before a future date."
  },
  {
    "id": "g8-q120",
    "grade": 8,
    "tier": "hard",
    "topic": "Passive with Two Objects",
    "question": "Sarah ______ given an outstanding achievement award by the principal.",
    "options": [
      "was",
      "has",
      "is being",
      "were"
    ],
    "correctIndex": 0,
    "explanation": "Passive transformation with indirect object as subject: 'Sarah was given...'."
  },
  {
    "id": "g8-q121",
    "grade": 8,
    "tier": "hard",
    "topic": "Reported Questions",
    "question": "Direct: 'Where do you live?' -> She asked me where I ______.",
    "options": [
      "lived",
      "did live",
      "live",
      "was living"
    ],
    "correctIndex": 0,
    "explanation": "Reported questions use statement word order without auxiliary 'do' ('where I lived')."
  },
  {
    "id": "g8-q122",
    "grade": 8,
    "tier": "hard",
    "topic": "Reported Questions",
    "question": "Direct: 'Are you ready?' -> He asked me if I ______ ready.",
    "options": [
      "was",
      "am",
      "were",
      "had been"
    ],
    "correctIndex": 0,
    "explanation": "Yes/No reported questions use 'if/whether + statement word order' ('if I was ready')."
  },
  {
    "id": "g8-q123",
    "grade": 8,
    "tier": "hard",
    "topic": "Reported Commands",
    "question": "The teacher told the students ______ their books to page 45.",
    "options": [
      "to open",
      "open",
      "opening",
      "opened"
    ],
    "correctIndex": 0,
    "explanation": "Reported imperative commands use 'tell someone + to-infinitive'."
  },
  {
    "id": "g8-q124",
    "grade": 8,
    "tier": "hard",
    "topic": "Mixed Conditionals Intro",
    "question": "If I hadn't missed the morning bus, I ______ at school right now.",
    "options": [
      "would be",
      "would have been",
      "will be",
      "had been"
    ],
    "correctIndex": 0,
    "explanation": "Mixed conditional: Past condition ('hadn't missed') with present result ('would be right now')."
  },
  {
    "id": "g8-q125",
    "grade": 8,
    "tier": "hard",
    "topic": "Inversion with 'No sooner'",
    "question": "No sooner had we stepped outside ______ the thunderstorm erupted violently.",
    "options": [
      "than",
      "when",
      "then",
      "that"
    ],
    "correctIndex": 0,
    "explanation": "The correlative structure is 'No sooner had... THAN...'."
  },
  {
    "id": "g8-q126",
    "grade": 8,
    "tier": "hard",
    "topic": "Inversion with 'Hardly'",
    "question": "Hardly ______ the plane landed when the passengers clapped excitedly.",
    "options": [
      "had",
      "did",
      "has",
      "was"
    ],
    "correctIndex": 0,
    "explanation": "'Hardly had + subject + past participle... when'."
  },
  {
    "id": "g8-q127",
    "grade": 8,
    "tier": "hard",
    "topic": "Correlative: Not only...but also",
    "question": "Not only ______ he write poetry, but he also composes symphonies.",
    "options": [
      "does",
      "is",
      "did",
      "has"
    ],
    "correctIndex": 0,
    "explanation": "Fronted 'Not only' triggers auxiliary inversion ('Not only does he write')."
  },
  {
    "id": "g8-q128",
    "grade": 8,
    "tier": "hard",
    "topic": "Prefer vs Would rather",
    "question": "I prefer drinking green tea ______ drinking black coffee.",
    "options": [
      "to",
      "than",
      "rather than",
      "from"
    ],
    "correctIndex": 0,
    "explanation": "The construction is 'prefer [doing] TO [doing]'."
  },
  {
    "id": "g8-q129",
    "grade": 8,
    "tier": "hard",
    "topic": "Would rather",
    "question": "I would rather ______ at home tonight than go out in the rain.",
    "options": [
      "stay",
      "to stay",
      "staying",
      "stayed"
    ],
    "correctIndex": 0,
    "explanation": "'Would rather + bare infinitive... than + bare infinitive'."
  },
  {
    "id": "g8-q130",
    "grade": 8,
    "tier": "hard",
    "topic": "Had better negation",
    "question": "You ______ not touch that electrical equipment with wet hands.",
    "options": [
      "had better",
      "would better",
      "had better to",
      "better"
    ],
    "correctIndex": 0,
    "explanation": "Negative form is 'had better not + bare infinitive'."
  },
  {
    "id": "g8-q131",
    "grade": 8,
    "tier": "hard",
    "topic": "Dependent Prepositions",
    "question": "The team was blamed ______ losing the final championship match.",
    "options": [
      "for",
      "of",
      "about",
      "with"
    ],
    "correctIndex": 0,
    "explanation": "'Blamed for doing something' is the standard preposition."
  },
  {
    "id": "g8-q132",
    "grade": 8,
    "tier": "hard",
    "topic": "Dependent Prepositions",
    "question": "The student was accused ______ copying during the test.",
    "options": [
      "of",
      "for",
      "with",
      "about"
    ],
    "correctIndex": 0,
    "explanation": "'Accused of doing something' is the standard preposition."
  },
  {
    "id": "g8-q133",
    "grade": 8,
    "tier": "hard",
    "topic": "Subjunctive: Mandative",
    "question": "The headmaster insisted that every pupil ______ on time for assembly.",
    "options": [
      "be",
      "is",
      "was",
      "are"
    ],
    "correctIndex": 0,
    "explanation": "Mandative subjunctive after 'insisted that' uses the base form 'be'."
  },
  {
    "id": "g8-q134",
    "grade": 8,
    "tier": "hard",
    "topic": "Subjunctive: Mandative",
    "question": "It is crucial that she ______ the medication as prescribed by the doctor.",
    "options": [
      "take",
      "takes",
      "took",
      "taking"
    ],
    "correctIndex": 0,
    "explanation": "Subjunctive following 'It is crucial that' uses base verb 'take'."
  },
  {
    "id": "g8-q135",
    "grade": 8,
    "tier": "hard",
    "topic": "Subjunctive: Demand",
    "question": "The committee demanded that the building project ______ immediately.",
    "options": [
      "halt",
      "halts",
      "halted",
      "halting"
    ],
    "correctIndex": 0,
    "explanation": "Subjunctive uses base verb 'halt'."
  },
  {
    "id": "g8-q136",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Wishes about Past",
    "question": "I missed the deadline for the essay. I wish I ______ working on it earlier.",
    "options": [
      "had started",
      "started",
      "would have started",
      "have started"
    ],
    "correctIndex": 0,
    "explanation": "'Wish + Past Perfect' expresses regret about an action in the past."
  },
  {
    "id": "g8-q137",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Wishes about Past",
    "question": "She failed her driving test. She wishes she ______ more practice lessons.",
    "options": [
      "had taken",
      "took",
      "would take",
      "have taken"
    ],
    "correctIndex": 0,
    "explanation": "'Wish + Past Perfect' for past counterfactual regret."
  },
  {
    "id": "g8-q138",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Inversion with Negative Adverbs",
    "question": "Under no circumstances ______ students allowed to enter the laboratory unsupervised.",
    "options": [
      "are",
      "is",
      "do",
      "have"
    ],
    "correctIndex": 0,
    "explanation": "Negative fronted adverbial 'Under no circumstances' triggers inversion ('are students allowed')."
  },
  {
    "id": "g8-q139",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Inversion with Only after",
    "question": "Only after completing all the exercises ______ the teacher allow us to play.",
    "options": [
      "did",
      "was",
      "had",
      "would"
    ],
    "correctIndex": 0,
    "explanation": "'Only after...' at the beginning triggers auxiliary inversion in the main clause ('did the teacher allow')."
  },
  {
    "id": "g8-q140",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Inversion with Little",
    "question": "Little ______ they know that a massive surprise party was awaiting them.",
    "options": [
      "did",
      "do",
      "were",
      "had"
    ],
    "correctIndex": 0,
    "explanation": "'Little did they know' is standard inversion expressing complete unawareness."
  },
  {
    "id": "g8-q141",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Subjunctive with Recommend",
    "question": "The nutritionist recommended that he ______ down on sugary snacks.",
    "options": [
      "cut",
      "cuts",
      "cutted",
      "to cut"
    ],
    "correctIndex": 0,
    "explanation": "Subjunctive following 'recommended that' takes the base verb 'cut'."
  },
  {
    "id": "g8-q142",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Subjunctive with Suggest",
    "question": "She suggested that we ______ the museum before noon to avoid crowds.",
    "options": [
      "visit",
      "visits",
      "visited",
      "visiting"
    ],
    "correctIndex": 0,
    "explanation": "Subjunctive following 'suggested that' takes base verb 'visit'."
  },
  {
    "id": "g8-q143",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Error Identification",
    "question": "Identify the error: 'Despite [A] she had [B] a bad cold, she attended [C] the ceremony [D].'",
    "options": [
      "Despite (A)",
      "she had (B)",
      "attended (C)",
      "the ceremony (D)"
    ],
    "correctIndex": 0,
    "explanation": "'Despite' must be followed by a noun or gerund, not a full clause. It should be 'Although'."
  },
  {
    "id": "g8-q144",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Error Identification",
    "question": "Identify the error: 'He suggested [A] me to apply [B] for the international [C] scholarship [D].'",
    "options": [
      "me to apply (B)",
      "He suggested (A)",
      "for the international (C)",
      "scholarship (D)"
    ],
    "correctIndex": 0,
    "explanation": "'Suggest' cannot be used with an object + to-infinitive. It must be 'suggested that I apply' or 'suggested applying'."
  },
  {
    "id": "g8-q145",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Error Identification",
    "question": "Identify the error: 'I look forward [A] to hear [B] from you in the [C] near future [D].'",
    "options": [
      "to hear (B)",
      "look forward (A)",
      "from you in the (C)",
      "near future (D)"
    ],
    "correctIndex": 0,
    "explanation": "'Look forward to' takes a gerund, so it should be 'to hearing'."
  },
  {
    "id": "g8-q146",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Error Identification",
    "question": "Identify the error: 'Neither of the answers [A] provided by the candidate [B] were [C] completely accurate [D].'",
    "options": [
      "were (C)",
      "Neither of the answers (A)",
      "provided by the candidate (B)",
      "completely accurate (D)"
    ],
    "correctIndex": 0,
    "explanation": "'Neither of + plural noun' takes a singular verb ('was', not 'were') in formal standard grammar."
  },
  {
    "id": "g8-q147",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Reduced Relative Clause (Active)",
    "question": "The students ______ in the front row are taking notes diligently.",
    "options": [
      "sitting",
      "sit",
      "sat",
      "are sitting"
    ],
    "correctIndex": 0,
    "explanation": "Present participle 'sitting' reduces 'who are sitting' into a participial phrase."
  },
  {
    "id": "g8-q148",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Reduced Relative Clause (Passive)",
    "question": "The ancient artifacts ______ in the desert cave date back to 3000 BC.",
    "options": [
      "discovered",
      "discovering",
      "which discovered",
      "were discovered"
    ],
    "correctIndex": 0,
    "explanation": "Past participle 'discovered' reduces 'which were discovered'."
  },
  {
    "id": "g8-q149",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Inverted Conditionals (Type 1)",
    "question": "______ you require any further assistance, please contact customer support.",
    "options": [
      "Should",
      "If should",
      "Had",
      "Were"
    ],
    "correctIndex": 0,
    "explanation": "'Should you require...' is the inverted formal equivalent of 'If you require...'."
  },
  {
    "id": "g8-q150",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Inverted Conditionals (Type 2)",
    "question": "______ he to win the championship, he would become the youngest winner in history.",
    "options": [
      "Were",
      "Was",
      "Had",
      "Should"
    ],
    "correctIndex": 0,
    "explanation": "'Were he to win...' is the inverted second conditional."
  },
  {
    "id": "g8-q151",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Inverted Conditionals (Type 3)",
    "question": "______ I known about the terrible road conditions, I would not have driven.",
    "options": [
      "Had",
      "Have",
      "Did",
      "If had"
    ],
    "correctIndex": 0,
    "explanation": "'Had I known...' is the inverted third conditional."
  },
  {
    "id": "g8-q152",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Complex Passive with Modals",
    "question": "The confidential documents ought ______ kept in a fireproof metal safe.",
    "options": [
      "to have been",
      "to be having",
      "have been",
      "to be have"
    ],
    "correctIndex": 0,
    "explanation": "'Ought to have been kept' expresses past passive expectation."
  },
  {
    "id": "g8-q153",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Cleft Sentences for Emphasis",
    "question": "It was Thomas Edison ______ invented the practical incandescent light bulb.",
    "options": [
      "who",
      "which",
      "whom",
      "whose"
    ],
    "correctIndex": 0,
    "explanation": "It-cleft sentence for a person uses 'who' or 'that'."
  },
  {
    "id": "g8-q154",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Cleft Sentences with What",
    "question": "What we need most during this crisis ______ clear communication and calm leadership.",
    "options": [
      "is",
      "are",
      "were",
      "being"
    ],
    "correctIndex": 0,
    "explanation": "What-cleft clauses acting as a single concept take singular verb 'is'."
  },
  {
    "id": "g8-q155",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Double Comparative Inversion",
    "question": "The higher you climb up the mountain, ______ the air becomes.",
    "options": [
      "the thinner",
      "thinner",
      "the more thin",
      "the thinnest"
    ],
    "correctIndex": 0,
    "explanation": "'The + comparative... the + comparative' ('the thinner')."
  },
  {
    "id": "g8-q156",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Participle Clauses of Time",
    "question": "______ his morning chores, Kevin sat down to read a comic book.",
    "options": [
      "Having finished",
      "Finished",
      "To finish",
      "Have finished"
    ],
    "correctIndex": 0,
    "explanation": "Perfect participle 'Having finished' shows an action completed before the main verb."
  },
  {
    "id": "g8-q157",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Participle Clauses of Reason",
    "question": "______ exhausted from the long trek, they decided to set up camp early.",
    "options": [
      "Feeling",
      "Felt",
      "To feel",
      "Have felt"
    ],
    "correctIndex": 0,
    "explanation": "Present participle 'Feeling' expresses the reason for setting up camp."
  },
  {
    "id": "g8-q158",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Gerunds vs Infinitives: Regret",
    "question": "I regret ______ you that your flight has been delayed by three hours.",
    "options": [
      "to inform",
      "informing",
      "inform",
      "informed"
    ],
    "correctIndex": 0,
    "explanation": "'Regret to inform' is used to announce bad news formally."
  },
  {
    "id": "g8-q159",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Gerunds vs Infinitives: Regret",
    "question": "He now regrets ______ so much money on unnecessary luxury items.",
    "options": [
      "spending",
      "to spend",
      "spend",
      "spent"
    ],
    "correctIndex": 0,
    "explanation": "'Regret doing' means feeling sorrow about a past action."
  },
  {
    "id": "g8-q160",
    "grade": 8,
    "tier": "very_hard",
    "topic": "Gerunds vs Infinitives: Mean",
    "question": "Taking this advanced course means ______ at least twenty hours a week.",
    "options": [
      "studying",
      "to study",
      "study",
      "studied"
    ],
    "correctIndex": 0,
    "explanation": "'Mean doing' signifies 'involving' or 'resulting in'."
  }
]
};

// Expose globally
if (typeof window !== 'undefined') {
  window.MILLIONAIRE_QUESTIONS = MILLIONAIRE_QUESTIONS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MILLIONAIRE_QUESTIONS };
}
