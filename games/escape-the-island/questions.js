/**
 * ESCAPE THE ISLAND - English Questions Database
 * Level: A2 - B1 (7th & 8th Grade Middle School ESL / EFL)
 * Total: 215+ High-Quality, Curriculum-Aligned Multiple Choice Questions
 * Topics:
 *  - Simple Present & Present Continuous
 *  - Simple Past (Regular & Irregular)
 *  - Past Continuous
 *  - Future Forms (Will & Going to)
 *  - Present Perfect
 *  - Modals (Can, Must, Should, May, Have to)
 *  - Comparatives & Superlatives
 *  - Prepositions of Place & Time
 *  - Conjunctions (because, so, although, but, while)
 *  - Island Survival & Adventure Vocabulary
 *  - Daily Life & School Dialogues
 *  - Reading & Island Clues
 */

const ENGLISH_QUESTIONS = [
  // ==========================================
  // 1. SIMPLE PAST & PAST CONTINUOUS (30 questions)
  // ==========================================
  {
    id: "past-001",
    category: "Simple Past",
    level: "A2",
    question: "What is the past form of the verb 'find'?",
    options: ["finded", "found", "finds", "finding"],
    correctIndex: 1,
    explanation: "'Find' is an irregular verb. Its past form is 'found' (find -> found -> found).",
    theme: "survival"
  },
  {
    id: "past-002",
    category: "Simple Past",
    level: "A2",
    question: "Yesterday, the castaways _______ a hidden wooden chest on the beach.",
    options: ["discovers", "discovered", "discovering", "discover"],
    correctIndex: 1,
    explanation: "'Yesterday' indicates the simple past tense. For regular verbs, we add '-ed' -> 'discovered'.",
    theme: "island"
  },
  {
    id: "past-003",
    category: "Simple Past",
    level: "A2",
    question: "What is the past form of 'swim'?",
    options: ["swam", "swimmed", "swum", "swimming"],
    correctIndex: 0,
    explanation: "'Swim' is an irregular verb. Past simple is 'swam'.",
    theme: "ocean"
  },
  {
    id: "past-004",
    category: "Simple Past",
    level: "A2",
    question: "They _______ any fresh water near the old volcano yesterday.",
    options: ["didn't find", "didn't found", "don't found", "weren't find"],
    correctIndex: 0,
    explanation: "In negative simple past sentences, we use 'didn't + base verb' (didn't find).",
    theme: "survival"
  },
  {
    id: "past-005",
    category: "Past Continuous",
    level: "B1",
    question: "While we _______ through the dark jungle, we saw strange footprints.",
    options: ["were walking", "was walking", "walked", "are walking"],
    correctIndex: 0,
    explanation: "'We' takes 'were'. For an action in progress in the past interrupted by another event, use past continuous: 'were walking'.",
    theme: "jungle"
  },
  {
    id: "past-006",
    category: "Past Continuous",
    level: "B1",
    question: "The storm started while the team _______ to build a shelter.",
    options: ["was trying", "were try", "tried", "is trying"],
    correctIndex: 0,
    explanation: "'The team' (singular entity) was trying to build a shelter when the storm started.",
    theme: "weather"
  },
  {
    id: "past-007",
    category: "Simple Past",
    level: "A2",
    question: "What is the past form of 'catch'?",
    options: ["catched", "caught", "cought", "catching"],
    correctIndex: 1,
    explanation: "'Catch' becomes 'caught' in the simple past tense.",
    theme: "nature"
  },
  {
    id: "past-008",
    category: "Simple Past",
    level: "A2",
    question: "Where _______ you go when the plane crashed?",
    options: ["did", "were", "do", "have"],
    correctIndex: 0,
    explanation: "Past simple question with an action verb uses 'did': 'Where did you go?'",
    theme: "adventure"
  },
  {
    id: "past-009",
    category: "Past Continuous",
    level: "B1",
    question: "At 8 PM last night, lightning _______ across the dark sky.",
    options: ["was flashing", "flashed", "is flashing", "flashes"],
    correctIndex: 0,
    explanation: "A specific time in the past ('At 8 PM last night') describes an ongoing action: 'was flashing'.",
    theme: "weather"
  },
  {
    id: "past-010",
    category: "Simple Past",
    level: "A2",
    question: "The captain _______ his old notebook under the rock.",
    options: ["hided", "hid", "hidden", "hiding"],
    correctIndex: 1,
    explanation: "The past form of 'hide' is 'hid'.",
    theme: "mystery"
  },
  {
    id: "past-011",
    category: "Simple Past",
    level: "A2",
    question: "Which sentence is grammatically CORRECT in the past tense?",
    options: [
      "She lighted the fire quickly.",
      "She lit the fire quickly.",
      "She lited the fire quickly.",
      "She lighting the fire quickly."
    ],
    correctIndex: 1,
    explanation: "The standard irregular past tense of 'light' is 'lit'.",
    theme: "survival"
  },
  {
    id: "past-012",
    category: "Past Continuous",
    level: "B1",
    question: "What _______ you doing when you heard the strange animal noise?",
    options: ["were", "was", "did", "are"],
    correctIndex: 0,
    explanation: "Past continuous question with 'you' uses 'were + subject + doing'.",
    theme: "nature"
  },
  {
    id: "past-013",
    category: "Simple Past",
    level: "A2",
    question: "The heavy radio _______ onto the sand and broke.",
    options: ["falled", "fell", "fall", "fallen"],
    correctIndex: 1,
    explanation: "The past form of 'fall' is 'fell'.",
    theme: "island"
  },
  {
    id: "past-014",
    category: "Simple Past",
    level: "A2",
    question: "We _______ very thirsty after climbing the steep mountain.",
    options: ["was", "were", "are", "been"],
    correctIndex: 1,
    explanation: "Subject 'We' in past tense takes 'were'.",
    theme: "mountain"
  },
  {
    id: "past-015",
    category: "Past Continuous",
    level: "B1",
    question: "The monkeys _______ food from our backpacks while we were sleeping.",
    options: ["were stealing", "was stealing", "stole", "stealed"],
    correctIndex: 0,
    explanation: "Plural subject 'monkeys' takes 'were stealing' for continuous past activity.",
    theme: "jungle"
  },
  {
    id: "past-016",
    category: "Simple Past",
    level: "A2",
    question: "What is the past form of 'bring'?",
    options: ["brang", "brought", "bringed", "bought"],
    correctIndex: 1,
    explanation: "The past form of 'bring' is 'brought'. ('Bought' is from 'buy').",
    theme: "tools"
  },
  {
    id: "past-017",
    category: "Simple Past",
    level: "A2",
    question: "They _______ a strong raft using logs and thick vines.",
    options: ["builded", "built", "build", "building"],
    correctIndex: 1,
    explanation: "The past simple of 'build' is 'built'.",
    theme: "escape"
  },
  {
    id: "past-018",
    category: "Past Continuous",
    level: "B1",
    question: "While Leo was repairing the radio, Sara _______ for dry firewood.",
    options: ["was searching", "searched", "is searching", "were searching"],
    correctIndex: 0,
    explanation: "Two continuous actions happening simultaneously in the past: 'was repairing ... was searching'.",
    theme: "camp"
  },
  {
    id: "past-019",
    category: "Simple Past",
    level: "A2",
    question: "We _______ an eagle flying over the high cliffs.",
    options: ["saw", "seed", "seen", "seeing"],
    correctIndex: 0,
    explanation: "The past simple of 'see' is 'saw'.",
    theme: "nature"
  },
  {
    id: "past-020",
    category: "Simple Past",
    level: "A2",
    question: "How _______ you open the locked cabin door?",
    options: ["did", "were", "do", "have"],
    correctIndex: 0,
    explanation: "Past simple question: 'How did you open...?'",
    theme: "hut"
  },
  {
    id: "past-021",
    category: "Simple Past",
    level: "A2",
    question: "The rescue helicopter _______ over the island two days ago.",
    options: ["flied", "flew", "flow", "flying"],
    correctIndex: 1,
    explanation: "The past simple of 'fly' is 'flew'.",
    theme: "rescue"
  },
  {
    id: "past-022",
    category: "Past Continuous",
    level: "B1",
    question: "The sun _______ warmly when the explorers set off on their journey.",
    options: ["was shining", "were shining", "shined", "is shining"],
    correctIndex: 0,
    explanation: "Singular 'The sun' uses 'was shining'.",
    theme: "weather"
  },
  {
    id: "past-023",
    category: "Simple Past",
    level: "A2",
    question: "Who _______ the emergency SOS message in the sand?",
    options: ["writed", "wrote", "written", "writing"],
    correctIndex: 1,
    explanation: "The past simple of 'write' is 'wrote'.",
    theme: "beach"
  },
  {
    id: "past-024",
    category: "Simple Past",
    level: "A2",
    question: "The rope _______ when the heavy crate slipped.",
    options: ["broked", "break", "broke", "broken"],
    correctIndex: 2,
    explanation: "The past simple of 'break' is 'broke'.",
    theme: "tools"
  },
  {
    id: "past-025",
    category: "Past Continuous",
    level: "B1",
    question: "The wolves _______ in the distance as night fell.",
    options: ["were howling", "was howling", "howled", "are howling"],
    correctIndex: 0,
    explanation: "'The wolves' is plural, so we use 'were howling'.",
    theme: "jungle"
  },
  {
    id: "past-026",
    category: "Simple Past",
    level: "A2",
    question: "We _______ any sharks in the shallow reef this morning.",
    options: ["didn't see", "didn't saw", "don't saw", "weren't saw"],
    correctIndex: 0,
    explanation: "Negative past: 'didn't + base verb' (didn't see).",
    theme: "ocean"
  },
  {
    id: "past-027",
    category: "Simple Past",
    level: "A2",
    question: "What is the past form of 'lead'?",
    options: ["leaded", "led", "leader", "leading"],
    correctIndex: 1,
    explanation: "The past form of 'lead' is 'led'.",
    theme: "adventure"
  },
  {
    id: "past-028",
    category: "Past Continuous",
    level: "B1",
    question: "I _______ for the cave entrance when I stumbled over a giant root.",
    options: ["was looking", "were looking", "looked", "am looking"],
    correctIndex: 0,
    explanation: "'I' takes 'was looking' for past continuous interrupted by 'stumbled'.",
    theme: "cave"
  },
  {
    id: "past-029",
    category: "Simple Past",
    level: "A2",
    question: "They _______ all the sweet fruit from the coconut tree.",
    options: ["ate", "eated", "eat", "eaten"],
    correctIndex: 0,
    explanation: "The past simple form of 'eat' is 'ate'.",
    theme: "food"
  },
  {
    id: "past-030",
    category: "Simple Past",
    level: "A2",
    question: "The compass _______ toward the dangerous swamp.",
    options: ["pointed", "point", "pointing", "pointted"],
    correctIndex: 0,
    explanation: "Regular verb 'point' becomes 'pointed' in the past.",
    theme: "tools"
  },

  // ==========================================
  // 2. FUTURE FORMS: WILL & GOING TO (20 questions)
  // ==========================================
  {
    id: "fut-001",
    category: "Future: Will vs Going to",
    level: "A2",
    question: "Look at those dark clouds! It _______ rain heavily soon.",
    options: ["is going to", "will", "is", "was"],
    correctIndex: 0,
    explanation: "We use 'is going to' for predictions based on present evidence (the dark clouds).",
    theme: "weather"
  },
  {
    id: "fut-002",
    category: "Future: Will",
    level: "A2",
    question: "Don't worry! I _______ you carry that heavy log.",
    options: ["will help", "am helping", "helped", "helps"],
    correctIndex: 0,
    explanation: "We use 'will' for spontaneous offers and promises made at the moment of speaking.",
    theme: "teamwork"
  },
  {
    id: "fut-003",
    category: "Future: Going to",
    level: "A2",
    question: "Our team has a plan. We _______ explore the shipwreck tomorrow morning.",
    options: ["are going to", "will", "going to", "is going to"],
    correctIndex: 0,
    explanation: "'Our team' with 'We' takes 'are going to' for predetermined plans and intentions.",
    theme: "shipwreck"
  },
  {
    id: "fut-004",
    category: "Future: Will",
    level: "A2",
    question: "I think the rescue ship _______ arrive before sunset.",
    options: ["will", "is going", "does", "was"],
    correctIndex: 0,
    explanation: "We use 'will' after opinion verbs like 'I think / I believe / probably'.",
    theme: "rescue"
  },
  {
    id: "fut-005",
    category: "Future: Will",
    level: "A2",
    question: "If we don't find drinking water, we _______ survive.",
    options: ["won't", "will", "aren't", "don't"],
    correctIndex: 0,
    explanation: "First conditional result clause: 'won't (will not) survive'.",
    theme: "survival"
  },
  {
    id: "fut-006",
    category: "Future: Going to",
    level: "A2",
    question: "Be careful! You _______ drop the flashlight into the deep pit!",
    options: ["are going to", "will be", "going to", "went to"],
    correctIndex: 0,
    explanation: "Immediate warning with present visual evidence uses 'are going to'.",
    theme: "cave"
  },
  {
    id: "fut-007",
    category: "Future: Will",
    level: "B1",
    question: "As soon as we find the battery, we _______ turn on the radio.",
    options: ["will", "are", "going to", "did"],
    correctIndex: 0,
    explanation: "Time clause 'As soon as + present', main clause 'will + verb'.",
    theme: "radio"
  },
  {
    id: "fut-008",
    category: "Future: Will",
    level: "A2",
    question: "I promise I _______ lose the map again.",
    options: ["won't", "will", "am not", "don't"],
    correctIndex: 0,
    explanation: "Negative promise uses 'won't' (will not).",
    theme: "map"
  },
  {
    id: "fut-009",
    category: "Future: Going to",
    level: "A2",
    question: "Next week, the researchers _______ study the island's rare plants.",
    options: ["are going to", "is going to", "will to", "going to"],
    correctIndex: 0,
    explanation: "Plural subject 'researchers' takes 'are going to'.",
    theme: "nature"
  },
  {
    id: "fut-010",
    category: "Future: Will",
    level: "A2",
    question: "_______ you send a smoke signal from the mountaintop?",
    options: ["Will", "Are", "Do", "Is"],
    correctIndex: 0,
    explanation: "'Will you send...?' is the correct future question form.",
    theme: "mountain"
  },
  {
    id: "fut-011",
    category: "Future: Will",
    level: "B1",
    question: "Maybe the captain _______ know how to fix the broken boat engine.",
    options: ["will", "is going", "going to", "was"],
    correctIndex: 0,
    explanation: "We use 'will' with adverbs of probability like 'maybe' and 'perhaps'.",
    theme: "boat"
  },
  {
    id: "fut-012",
    category: "Future: Going to",
    level: "A2",
    question: "She _______ climb the tall palm tree to look for land.",
    options: ["is going to", "are going to", "going to", "will to"],
    correctIndex: 0,
    explanation: "Singular subject 'She' uses 'is going to'.",
    theme: "beach"
  },
  {
    id: "fut-013",
    category: "Future: Will",
    level: "A2",
    question: "The tide is coming in; our campsite _______ be underwater soon.",
    options: ["will", "is going", "does", "shall to"],
    correctIndex: 0,
    explanation: "'will be underwater soon' expresses a predicted future state.",
    theme: "beach"
  },
  {
    id: "fut-014",
    category: "Future: Going to",
    level: "B1",
    question: "Watch out! That branch _______ break under your weight!",
    options: ["is going to", "will", "going", "goes to"],
    correctIndex: 0,
    explanation: "Visible imminent danger uses 'is going to'.",
    theme: "jungle"
  },
  {
    id: "fut-015",
    category: "Future: Will",
    level: "A2",
    question: "If you give me the key, I _______ open the mystery box.",
    options: ["will", "am", "going", "did"],
    correctIndex: 0,
    explanation: "First conditional: 'If you give... I will open...'",
    theme: "mystery"
  },
  {
    id: "fut-016",
    category: "Future: Going to",
    level: "A2",
    question: "What _______ do if the radio doesn't work?",
    options: ["are you going to", "will you going to", "do you will", "you are going to"],
    correctIndex: 0,
    explanation: "Question form: 'What are you going to do...?'",
    theme: "radio"
  },
  {
    id: "fut-017",
    category: "Future: Will",
    level: "A2",
    question: "We _______ never give up until we escape this island!",
    options: ["will", "are", "do", "have"],
    correctIndex: 0,
    explanation: "Determination and strong pledge use 'will never give up'.",
    theme: "survival"
  },
  {
    id: "fut-018",
    category: "Future: Going to",
    level: "A2",
    question: "They have collected enough fuel. They _______ start the engine now.",
    options: ["are going to", "is going to", "going", "will to"],
    correctIndex: 0,
    explanation: "Planned action ready to happen: 'are going to start'.",
    theme: "boat"
  },
  {
    id: "fut-019",
    category: "Future: Will",
    level: "B1",
    question: "Do you think it _______ be safe to swim across the lagoon?",
    options: ["will", "is going", "does", "can to"],
    correctIndex: 0,
    explanation: "'Do you think it will be safe...?' standard future opinion structure.",
    theme: "water"
  },
  {
    id: "fut-020",
    category: "Future: Will",
    level: "A2",
    question: "Hold on tight! I _______ pull you up with the rope.",
    options: ["will", "am", "going", "did"],
    correctIndex: 0,
    explanation: "Spontaneous decision in the moment: 'I will pull you up'.",
    theme: "mountain"
  },

  // ==========================================
  // 3. PRESENT PERFECT & SIMPLE PRESENT (25 questions)
  // ==========================================
  {
    id: "pres-001",
    category: "Present Perfect",
    level: "B1",
    question: "Have you ever _______ a venomous viper in the jungle?",
    options: ["seen", "saw", "see", "seeing"],
    correctIndex: 0,
    explanation: "Present perfect questions use 'Have + subject + past participle (seen)'.",
    theme: "jungle"
  },
  {
    id: "pres-002",
    category: "Present Perfect",
    level: "B1",
    question: "The team has already _______ three vital escape items.",
    options: ["found", "find", "finded", "finding"],
    correctIndex: 0,
    explanation: "'has already + past participle (found)'.",
    theme: "items"
  },
  {
    id: "pres-003",
    category: "Present Perfect",
    level: "B1",
    question: "We haven't discovered the radio tower _______.",
    options: ["yet", "already", "just", "ever"],
    correctIndex: 0,
    explanation: "'Yet' is used at the end of negative sentences and questions in the present perfect.",
    theme: "tower"
  },
  {
    id: "pres-004",
    category: "Simple Present",
    level: "A2",
    question: "The magnetic compass always _______ towards the North Pole.",
    options: ["points", "point", "pointed", "pointing"],
    correctIndex: 0,
    explanation: "General truth / fact with 3rd person singular subject uses verb + 's' ('points').",
    theme: "compass"
  },
  {
    id: "pres-005",
    category: "Present Perfect",
    level: "B1",
    question: "How long _______ you lived on this mysterious island?",
    options: ["have", "did", "do", "are"],
    correctIndex: 0,
    explanation: "'How long have you lived...?' asks about an action starting in the past continuing to the present.",
    theme: "island"
  },
  {
    id: "pres-006",
    category: "Simple Present",
    level: "A2",
    question: "A true survivalist _______ panics during an emergency.",
    options: ["never", "always", "ever", "not"],
    correctIndex: 0,
    explanation: "'Never' is an adverb of frequency placed before the main verb.",
    theme: "survival"
  },
  {
    id: "pres-007",
    category: "Present Perfect",
    level: "B1",
    question: "She has _______ finished fixing the raft; it is ready to sail!",
    options: ["just", "yet", "ever", "never"],
    correctIndex: 0,
    explanation: "'Just' indicates an action that was completed very recently.",
    theme: "boat"
  },
  {
    id: "pres-008",
    category: "Simple Present",
    level: "A2",
    question: "Water _______ at 100 degrees Celsius over a campfire.",
    options: ["boils", "boil", "boiled", "boiling"],
    correctIndex: 0,
    explanation: "Scientific fact / general truth takes simple present singular: 'boils'.",
    theme: "survival"
  },
  {
    id: "pres-009",
    category: "Present Perfect",
    level: "B1",
    question: "The Tigers team _______ never climbed such a dangerous cliff before.",
    options: ["has", "have", "had", "is"],
    correctIndex: 0,
    explanation: "'The Tigers team' (singular collective noun) takes 'has never climbed'.",
    theme: "mountain"
  },
  {
    id: "pres-010",
    category: "Present Continuous",
    level: "A2",
    question: "Listen! The volcano _______ strange rumbling noises right now.",
    options: ["is making", "makes", "made", "are making"],
    correctIndex: 0,
    explanation: "'Right now' and 'Listen!' signal the present continuous: 'is making'.",
    theme: "volcano"
  },
  {
    id: "pres-011",
    category: "Present Perfect",
    level: "B1",
    question: "They have known the secret escape tunnel _______ two days.",
    options: ["for", "since", "during", "ago"],
    correctIndex: 0,
    explanation: "'For' is used with a duration / period of time ('for two days').",
    theme: "cave"
  },
  {
    id: "pres-012",
    category: "Present Perfect",
    level: "B1",
    question: "We have been stranded here _______ Monday morning.",
    options: ["since", "for", "from", "at"],
    correctIndex: 0,
    explanation: "'Since' is used with a specific starting point in time ('since Monday morning').",
    theme: "island"
  },
  {
    id: "pres-013",
    category: "Simple Present",
    level: "A2",
    question: "How often _______ you check the signal fire for smoke?",
    options: ["do", "does", "did", "are"],
    correctIndex: 0,
    explanation: "Present simple question with 'you' uses auxiliary 'do'.",
    theme: "fire"
  },
  {
    id: "pres-014",
    category: "Present Continuous",
    level: "A2",
    question: "Look! A pod of friendly dolphins _______ near our beach.",
    options: ["is swimming", "are swim", "swimming", "swims"],
    correctIndex: 0,
    explanation: "'A pod' (singular collective) is swimming near the beach right now.",
    theme: "ocean"
  },
  {
    id: "pres-015",
    category: "Present Perfect",
    level: "B1",
    question: "Which sentence is grammatically CORRECT?",
    options: [
      "We have escaped from the island.",
      "We has escaped from the island.",
      "We escaped has the island.",
      "We have escape the island."
    ],
    correctIndex: 0,
    explanation: "'We' takes 'have' + past participle 'escaped': 'We have escaped from the island.'",
    theme: "escape"
  },
  {
    id: "pres-016",
    category: "Simple Present",
    level: "A2",
    question: "Tropical fruits like mangoes and papayas _______ delicious vitamins.",
    options: ["contain", "contains", "containing", "contained"],
    correctIndex: 0,
    explanation: "Plural subject 'fruits' takes the base verb 'contain'.",
    theme: "food"
  },
  {
    id: "pres-017",
    category: "Present Perfect",
    level: "B1",
    question: "Has anyone _______ the missing battery yet?",
    options: ["found", "find", "finded", "finding"],
    correctIndex: 0,
    explanation: "'Has anyone found...?' requires the past participle 'found'.",
    theme: "battery"
  },
  {
    id: "pres-018",
    category: "Present Continuous",
    level: "A2",
    question: "Currently, the castaways _______ a signal beacon on the cliff.",
    options: ["are building", "build", "built", "is building"],
    correctIndex: 0,
    explanation: "'Currently' indicates an action occurring right now: 'are building'.",
    theme: "signal"
  },
  {
    id: "pres-019",
    category: "Simple Present",
    level: "A2",
    question: "Bats _______ inside the cave during daylight hours.",
    options: ["sleep", "sleeps", "sleeping", "slept"],
    correctIndex: 0,
    explanation: "Plural subject 'Bats' takes base verb 'sleep'.",
    theme: "cave"
  },
  {
    id: "pres-020",
    category: "Present Perfect",
    level: "B1",
    question: "I _______ never eaten raw coconut before today.",
    options: ["have", "has", "had", "am"],
    correctIndex: 0,
    explanation: "'I' takes 'have never eaten'.",
    theme: "food"
  },
  {
    id: "pres-021",
    category: "Simple Present",
    level: "A2",
    question: "Does the radio still _______ a signal?",
    options: ["receive", "receives", "received", "receiving"],
    correctIndex: 0,
    explanation: "After auxiliary 'Does', the main verb is in its base form 'receive'.",
    theme: "radio"
  },
  {
    id: "pres-022",
    category: "Present Perfect",
    level: "B1",
    question: "The rescue crew _______ sent two drone scouts over the volcano.",
    options: ["has", "have", "is", "was"],
    correctIndex: 0,
    explanation: "'The rescue crew' (singular noun) takes 'has sent'.",
    theme: "rescue"
  },
  {
    id: "pres-023",
    category: "Present Continuous",
    level: "A2",
    question: "Why _______ you wearing a heavy jacket in the humid jungle?",
    options: ["are", "do", "is", "have"],
    correctIndex: 0,
    explanation: "Present continuous question: 'Why are you wearing...?'",
    theme: "jungle"
  },
  {
    id: "pres-024",
    category: "Simple Present",
    level: "A2",
    question: "Fresh water from the waterfall _______ into the ocean.",
    options: ["flows", "flow", "flowing", "flowed"],
    correctIndex: 0,
    explanation: "Uncountable noun 'water' is singular and takes 'flows'.",
    theme: "water"
  },
  {
    id: "pres-025",
    category: "Present Perfect",
    level: "B1",
    question: "We _______ completed four dangerous quests today!",
    options: ["have", "has", "are", "were"],
    correctIndex: 0,
    explanation: "'We' takes 'have completed'.",
    theme: "adventure"
  },

  // ==========================================
  // 4. MODALS: CAN, MUST, SHOULD, HAVE TO (20 questions)
  // ==========================================
  {
    id: "mod-001",
    category: "Modals: Must / Should",
    level: "A2",
    question: "You _______ drink seawater; it is extremely dangerous and salty.",
    options: ["mustn't", "should", "can", "don't have to"],
    correctIndex: 0,
    explanation: "'Mustn't' expresses strong prohibition because drinking seawater is harmful.",
    theme: "survival"
  },
  {
    id: "mod-002",
    category: "Modals: Should",
    level: "A2",
    question: "It is getting cold. We _______ collect dry wood before dark.",
    options: ["should", "mustn't", "can't", "wouldn't"],
    correctIndex: 0,
    explanation: "'Should' gives good advice / a sensible recommendation.",
    theme: "fire"
  },
  {
    id: "mod-003",
    category: "Modals: Can / Can't",
    level: "A2",
    question: "Without a flashlight, you _______ see anything inside the dark cave.",
    options: ["can't", "can", "must", "should"],
    correctIndex: 0,
    explanation: "'Can't' expresses inability (lack of light prevents seeing).",
    theme: "cave"
  },
  {
    id: "mod-004",
    category: "Modals: Must / Have to",
    level: "A2",
    question: "To open the heavy metal hatch, we _______ find the golden key.",
    options: ["have to", "can", "should to", "must to"],
    correctIndex: 0,
    explanation: "'Have to' expresses necessity. (Note: 'must' is followed by a bare infinitive, never 'must to').",
    theme: "hut"
  },
  {
    id: "mod-005",
    category: "Modals: Can",
    level: "A2",
    question: "_______ you swim across the narrow river to get the coconuts?",
    options: ["Can", "Must", "Should", "Are"],
    correctIndex: 0,
    explanation: "'Can you swim...?' tests physical ability.",
    theme: "water"
  },
  {
    id: "mod-006",
    category: "Modals: Should",
    level: "A2",
    question: "Your energy is low! You _______ rest under the palm trees.",
    options: ["ought to", "mustn't", "can't", "should to"],
    correctIndex: 0,
    explanation: "'Ought to' is synonymous with 'should' for giving advice.",
    theme: "energy"
  },
  {
    id: "mod-007",
    category: "Modals: May / Might",
    level: "B1",
    question: "Take an umbrella or raincoat; it _______ rain later this afternoon.",
    options: ["might", "mustn't", "has to", "can't"],
    correctIndex: 0,
    explanation: "'Might' expresses possibility in the future.",
    theme: "weather"
  },
  {
    id: "mod-008",
    category: "Modals: Must",
    level: "A2",
    question: "All castaways _______ wear life jackets when boarding the boat.",
    options: ["must", "can't", "mustn't", "should to"],
    correctIndex: 0,
    explanation: "'Must' expresses an absolute safety rule or obligation.",
    theme: "boat"
  },
  {
    id: "mod-009",
    category: "Modals: Could",
    level: "B1",
    question: "When I was younger, I _______ climb trees much faster than now.",
    options: ["could", "can", "must", "should"],
    correctIndex: 0,
    explanation: "'Could' expresses general past ability.",
    theme: "jungle"
  },
  {
    id: "mod-010",
    category: "Modals: Don't have to",
    level: "B1",
    question: "There is fresh water from the stream, so we _______ purify the rain.",
    options: ["don't have to", "mustn't", "can't", "shouldn't"],
    correctIndex: 0,
    explanation: "'Don't have to' expresses lack of necessity (it is not needed).",
    theme: "water"
  },
  {
    id: "mod-011",
    category: "Modals: Can't",
    level: "B1",
    question: "That noise _______ be a car; there are no roads on this island!",
    options: ["can't", "must", "can", "should"],
    correctIndex: 0,
    explanation: "'Can't' expresses logical deduction when something is impossible.",
    theme: "mystery"
  },
  {
    id: "mod-012",
    category: "Modals: Must",
    level: "B1",
    question: "Look at the footprints! A huge wild animal _______ live near here.",
    options: ["must", "can't", "shouldn't", "might not"],
    correctIndex: 0,
    explanation: "'Must' is used for positive logical deduction based on strong evidence.",
    theme: "nature"
  },
  {
    id: "mod-013",
    category: "Modals: Should",
    level: "A2",
    question: "If you feel dizzy, you _______ drink some cool water immediately.",
    options: ["should", "mustn't", "can't", "would to"],
    correctIndex: 0,
    explanation: "'Should' gives helpful medical / health advice.",
    theme: "health"
  },
  {
    id: "mod-014",
    category: "Modals: Need to",
    level: "A2",
    question: "We _______ charge the radio battery before we can send an SOS signal.",
    options: ["need to", "must to", "can to", "should to"],
    correctIndex: 0,
    explanation: "'Need to' expresses a requirement. (Modals like must/can do not take 'to').",
    theme: "radio"
  },
  {
    id: "mod-015",
    category: "Modals: Mustn't",
    level: "A2",
    question: "You _______ touch that strange colorful frog; its skin is toxic!",
    options: ["must not", "can", "have to", "don't have to"],
    correctIndex: 0,
    explanation: "'Must not' indicates a vital prohibition to avoid danger.",
    theme: "jungle"
  },
  {
    id: "mod-016",
    category: "Modals: Shall",
    level: "A2",
    question: "_______ we light a signal fire on the highest hill tonight?",
    options: ["Shall", "Must", "Are", "Will we to"],
    correctIndex: 0,
    explanation: "'Shall we...?' is used to make a group suggestion or proposal.",
    theme: "fire"
  },
  {
    id: "mod-017",
    category: "Modals: Could",
    level: "B1",
    question: "Excuse me, _______ you please help me tie this rope?",
    options: ["could", "must", "should", "have to"],
    correctIndex: 0,
    explanation: "'Could you please...?' is a polite request.",
    theme: "rope"
  },
  {
    id: "mod-018",
    category: "Modals: Can",
    level: "A2",
    question: "Fish _______ breathe underwater using their gills.",
    options: ["can", "must", "should", "ought"],
    correctIndex: 0,
    explanation: "'Can' expresses natural biological ability.",
    theme: "ocean"
  },
  {
    id: "mod-019",
    category: "Modals: Shouldn't",
    level: "A2",
    question: "You _______ go into the swamp alone without a flashlight.",
    options: ["shouldn't", "must", "can", "have to"],
    correctIndex: 0,
    explanation: "'Shouldn't' advises against an unwise or risky behavior.",
    theme: "swamp"
  },
  {
    id: "mod-020",
    category: "Modals: May",
    level: "A2",
    question: "_______ I borrow your compass to check our heading?",
    options: ["May", "Must", "Should", "Do"],
    correctIndex: 0,
    explanation: "'May I borrow...?' is formal polite permission.",
    theme: "compass"
  },

  // ==========================================
  // 5. COMPARATIVES & SUPERLATIVES (20 questions)
  // ==========================================
  {
    id: "comp-001",
    category: "Comparatives",
    level: "A2",
    question: "The Pacific Ocean is _______ than the Mediterranean Sea.",
    options: ["deeper", "more deep", "deepest", "as deep"],
    correctIndex: 0,
    explanation: "One-syllable adjective 'deep' takes '-er' + than: 'deeper than'.",
    theme: "ocean"
  },
  {
    id: "comp-002",
    category: "Superlatives",
    level: "A2",
    question: "Mount Everest is the _______ peak in the world.",
    options: ["highest", "higher", "most high", "high"],
    correctIndex: 0,
    explanation: "Superlative of short adjective 'high' is 'the highest'.",
    theme: "mountain"
  },
  {
    id: "comp-003",
    category: "Comparatives",
    level: "A2",
    question: "Exploring the volcanic ridge is _______ than staying on the beach.",
    options: ["more dangerous", "dangerouser", "most dangerous", "as dangerous"],
    correctIndex: 0,
    explanation: "Multi-syllable adjective 'dangerous' takes 'more dangerous than'.",
    theme: "volcano"
  },
  {
    id: "comp-004",
    category: "Superlatives",
    level: "A2",
    question: "What is the _______ way to escape from the island?",
    options: ["fastest", "faster", "more fast", "most fast"],
    correctIndex: 0,
    explanation: "Superlative of 'fast' is 'the fastest'.",
    theme: "escape"
  },
  {
    id: "comp-005",
    category: "Comparatives: Irregular",
    level: "A2",
    question: "Fresh coconut water tastes _______ than salty river water.",
    options: ["better", "gooder", "more good", "best"],
    correctIndex: 0,
    explanation: "Irregular comparative of 'good' is 'better'.",
    theme: "food"
  },
  {
    id: "comp-006",
    category: "Superlatives: Irregular",
    level: "A2",
    question: "Getting caught in a cyclone is the _______ thing that could happen.",
    options: ["worst", "baddest", "worse", "most bad"],
    correctIndex: 0,
    explanation: "Irregular superlative of 'bad' is 'the worst'.",
    theme: "weather"
  },
  {
    id: "comp-007",
    category: "Comparatives",
    level: "A2",
    question: "This titanium rope is _______ than the old cotton cord.",
    options: ["stronger", "more strong", "strongest", "as strong"],
    correctIndex: 0,
    explanation: "Short adjective 'strong' -> 'stronger than'.",
    theme: "tools"
  },
  {
    id: "comp-008",
    category: "Superlatives",
    level: "A2",
    question: "The blue whale is the _______ animal on Earth.",
    options: ["largest", "larger", "most large", "as large"],
    correctIndex: 0,
    explanation: "Superlative of 'large' is 'the largest'.",
    theme: "nature"
  },
  {
    id: "comp-009",
    category: "Comparatives",
    level: "B1",
    question: "The radio signal on the hill is _______ than down in the valley.",
    options: ["much clearer", "more clear", "clearest", "as clear"],
    correctIndex: 0,
    explanation: "We can modify comparatives with 'much': 'much clearer than'.",
    theme: "radio"
  },
  {
    id: "comp-010",
    category: "Superlatives",
    level: "B1",
    question: "The stone idol was the _______ artifact in the ancient temple.",
    options: ["most mysterious", "more mysterious", "mysteriousest", "as mysterious"],
    correctIndex: 0,
    explanation: "Superlative of long adjective 'mysterious' is 'the most mysterious'.",
    theme: "mystery"
  },
  {
    id: "comp-011",
    category: "Comparatives",
    level: "A2",
    question: "During the night, the jungle temperature is _______ than at noon.",
    options: ["cooler", "more cool", "coolest", "as cool"],
    correctIndex: 0,
    explanation: "Comparative of 'cool' is 'cooler'.",
    theme: "weather"
  },
  {
    id: "comp-012",
    category: "Equality: as ... as",
    level: "B1",
    question: "The wooden raft is not _______ stable as the steel rescue boat.",
    options: ["as", "so much", "than", "more"],
    correctIndex: 0,
    explanation: "Equative structure: 'not as [adjective] as'.",
    theme: "boat"
  },
  {
    id: "comp-013",
    category: "Comparatives",
    level: "A2",
    question: "Climbing with heavy boots is _______ than wearing sneakers.",
    options: ["more difficult", "difficulter", "most difficult", "as difficult"],
    correctIndex: 0,
    explanation: "Long adjective 'difficult' takes 'more difficult than'.",
    theme: "mountain"
  },
  {
    id: "comp-014",
    category: "Superlatives",
    level: "A2",
    question: "The cheetah is the _______ land predator in the world.",
    options: ["fastest", "faster", "most fast", "fast"],
    correctIndex: 0,
    explanation: "Superlative: 'the fastest'.",
    theme: "nature"
  },
  {
    id: "comp-015",
    category: "Comparatives: Irregular",
    level: "B1",
    question: "The cave goes _______ inland than we expected.",
    options: ["further", "fartherer", "more far", "as far"],
    correctIndex: 0,
    explanation: "Comparative of 'far' is 'further' or 'farther'.",
    theme: "cave"
  },
  {
    id: "comp-016",
    category: "Superlatives",
    level: "A2",
    question: "This ancient map is the _______ item in our inventory!",
    options: ["most valuable", "valuablest", "more valuable", "valuable"],
    correctIndex: 0,
    explanation: "'The most valuable' is the superlative of 'valuable'.",
    theme: "items"
  },
  {
    id: "comp-017",
    category: "Comparatives",
    level: "A2",
    question: "Today the sea waves are _______ than they were yesterday.",
    options: ["calmer", "more calm", "calmest", "as calm"],
    correctIndex: 0,
    explanation: "Comparative of 'calm' is 'calmer'.",
    theme: "ocean"
  },
  {
    id: "comp-018",
    category: "Superlatives",
    level: "A2",
    question: "Which of the three escape routes requires the _______ items?",
    options: ["fewest", "fewer", "least few", "less"],
    correctIndex: 0,
    explanation: "Countable items in superlative take 'the fewest'.",
    theme: "escape"
  },
  {
    id: "comp-019",
    category: "Comparatives",
    level: "A2",
    question: "A steel axe is _______ for chopping wood than a small pocket knife.",
    options: ["more useful", "usefuler", "most useful", "usefuller"],
    correctIndex: 0,
    explanation: "Two-syllable adjective 'useful' takes 'more useful than'.",
    theme: "tools"
  },
  {
    id: "comp-020",
    category: "Superlatives",
    level: "A2",
    question: "The poison dart frog is one of the _______ creatures on the island.",
    options: ["deadliest", "deadlier", "most deadly", "as deadly"],
    correctIndex: 0,
    explanation: "Adjectives ending in -y change to -iest: 'the deadliest'.",
    theme: "nature"
  },

  // ==========================================
  // 6. PREPOSITIONS OF PLACE, DIRECTION & TIME (25 questions)
  // ==========================================
  {
    id: "prep-001",
    category: "Prepositions of Place",
    level: "A2",
    question: "The golden key was hidden _______ a large flat stone.",
    options: ["under", "between", "during", "across"],
    correctIndex: 0,
    explanation: "'Under' indicates positioned below something.",
    theme: "hut"
  },
  {
    id: "prep-002",
    category: "Prepositions of Direction",
    level: "A2",
    question: "The survivors walked _______ the dense jungle to reach the coast.",
    options: ["through", "over", "at", "on"],
    correctIndex: 0,
    explanation: "'Through' indicates moving in a 3D space with trees and obstacles surrounding you.",
    theme: "jungle"
  },
  {
    id: "prep-003",
    category: "Prepositions of Time",
    level: "A2",
    question: "The rescue helicopter usually flies over the reef _______ noon.",
    options: ["at", "in", "on", "to"],
    correctIndex: 0,
    explanation: "We use 'at' with specific times of day: 'at noon', 'at 3 o'clock', 'at night'.",
    theme: "rescue"
  },
  {
    id: "prep-004",
    category: "Prepositions of Time",
    level: "A2",
    question: "We plan to light the signal fire _______ Friday night.",
    options: ["on", "at", "in", "of"],
    correctIndex: 0,
    explanation: "We use 'on' with days of the week and dates: 'on Friday night'.",
    theme: "fire"
  },
  {
    id: "prep-005",
    category: "Prepositions of Place",
    level: "A2",
    question: "The emergency radio tower stands _______ the top of the volcano.",
    options: ["on", "in", "under", "into"],
    correctIndex: 0,
    explanation: "'On the top of' is the standard preposition of place for peaks and surfaces.",
    theme: "volcano"
  },
  {
    id: "prep-006",
    category: "Prepositions of Place",
    level: "A2",
    question: "There is a secret cave located _______ the roaring waterfall.",
    options: ["behind", "underneath of", "inside of", "across to"],
    correctIndex: 0,
    explanation: "'Behind' means at the back of the curtain of water.",
    theme: "waterfall"
  },
  {
    id: "prep-007",
    category: "Prepositions of Direction",
    level: "A2",
    question: "The shark swam quickly _______ the shallow coral reef.",
    options: ["across", "through to", "at", "during"],
    correctIndex: 0,
    explanation: "'Across' means from one side of the reef to the other.",
    theme: "ocean"
  },
  {
    id: "prep-008",
    category: "Prepositions of Place",
    level: "A2",
    question: "The old compass was trapped _______ two giant boulders.",
    options: ["between", "among", "with", "into"],
    correctIndex: 0,
    explanation: "'Between' is used for two distinct items/objects.",
    theme: "compass"
  },
  {
    id: "prep-009",
    category: "Prepositions of Place",
    level: "B1",
    question: "A flock of seagulls was flying _______ the shipwreck.",
    options: ["above", "on", "at", "into"],
    correctIndex: 0,
    explanation: "'Above' means higher than something without touching it.",
    theme: "shipwreck"
  },
  {
    id: "prep-010",
    category: "Prepositions of Direction",
    level: "A2",
    question: "They jumped _______ the clear lagoon to escape the swarm of bees.",
    options: ["into", "onto", "in to", "inside"],
    correctIndex: 0,
    explanation: "'Into' shows movement entering the water.",
    theme: "water"
  },
  {
    id: "prep-011",
    category: "Prepositions of Time",
    level: "A2",
    question: "It gets pitch black in the cave _______ the sun sets.",
    options: ["after", "during", "while", "since"],
    correctIndex: 0,
    explanation: "'After' is a preposition of time indicating subsequent time.",
    theme: "cave"
  },
  {
    id: "prep-012",
    category: "Prepositions of Place",
    level: "A2",
    question: "The treasure chest was buried _______ the sand near the palm tree.",
    options: ["in", "on", "at", "by"],
    correctIndex: 0,
    explanation: "Buried 'in' the sand.",
    theme: "beach"
  },
  {
    id: "prep-013",
    category: "Prepositions of Time",
    level: "A2",
    question: "We arrived on the island _______ July.",
    options: ["in", "on", "at", "for"],
    correctIndex: 0,
    explanation: "We use 'in' with months and years: 'in July'.",
    theme: "island"
  },
  {
    id: "prep-014",
    category: "Prepositions of Direction",
    level: "A2",
    question: "The adventurous scouts climbed _______ the steep ladder to the treehouse.",
    options: ["up", "into", "through", "across"],
    correctIndex: 0,
    explanation: "Moving upward along a ladder uses 'up'.",
    theme: "jungle"
  },
  {
    id: "prep-015",
    category: "Prepositions of Place",
    level: "B1",
    question: "The survivors stood _______ the bonfire to warm their shivering hands.",
    options: ["around", "between", "through", "onto"],
    correctIndex: 0,
    explanation: "'Around' means surrounding the fire in a circle.",
    theme: "fire"
  },
  {
    id: "prep-016",
    category: "Prepositions of Direction",
    level: "A2",
    question: "A heavy coconut fell _______ the tall tree and hit the log.",
    options: ["from", "off to", "out", "away"],
    correctIndex: 0,
    explanation: "Falling 'from' a source.",
    theme: "nature"
  },
  {
    id: "prep-017",
    category: "Prepositions of Place",
    level: "A2",
    question: "The lookout sat _______ the highest branch to scan the horizon.",
    options: ["on", "at", "in", "under"],
    correctIndex: 0,
    explanation: "Sitting 'on' a branch.",
    theme: "jungle"
  },
  {
    id: "prep-018",
    category: "Prepositions of Place",
    level: "B1",
    question: "The small hut is hidden _______ a grove of giant bamboo stalks.",
    options: ["among", "between", "through", "across"],
    correctIndex: 0,
    explanation: "'Among' is used when surrounded by many items (more than two).",
    theme: "hut"
  },
  {
    id: "prep-019",
    category: "Prepositions of Direction",
    level: "A2",
    question: "The emergency flare shot high _______ the night sky.",
    options: ["into", "under", "along", "at"],
    correctIndex: 0,
    explanation: "Movement into the sky uses 'into'.",
    theme: "signal"
  },
  {
    id: "prep-020",
    category: "Prepositions of Time",
    level: "A2",
    question: "We must finish building the boat _______ nightfall.",
    options: ["before", "behind", "ago", "along"],
    correctIndex: 0,
    explanation: "'Before' indicates prior to a specific event/time.",
    theme: "boat"
  },
  {
    id: "prep-021",
    category: "Prepositions of Direction",
    level: "A2",
    question: "The path winds _______ the rocky coastline.",
    options: ["along", "across to", "throughout", "between"],
    correctIndex: 0,
    explanation: "'Along' means moving parallel to a line or coast.",
    theme: "beach"
  },
  {
    id: "prep-022",
    category: "Prepositions of Place",
    level: "A2",
    question: "There is a warning sign nailed _______ the abandoned hut's front door.",
    options: ["to", "in", "at", "from"],
    correctIndex: 0,
    explanation: "'Nailed to' the door.",
    theme: "hut"
  },
  {
    id: "prep-023",
    category: "Prepositions of Time",
    level: "A2",
    question: "The tropical storm lasted _______ three terrifying hours.",
    options: ["for", "during", "since", "at"],
    correctIndex: 0,
    explanation: "'For' expresses length of duration ('for three hours').",
    theme: "weather"
  },
  {
    id: "prep-024",
    category: "Prepositions of Place",
    level: "A2",
    question: "The battery compartment is _______ the back of the radio.",
    options: ["at", "on", "in", "by"],
    correctIndex: 0,
    explanation: "'At the back of' specifies the location.",
    theme: "radio"
  },
  {
    id: "prep-025",
    category: "Prepositions of Direction",
    level: "B1",
    question: "The brave team crawled _______ the narrow tunnel to reach the temple.",
    options: ["through", "across", "over", "into to"],
    correctIndex: 0,
    explanation: "Moving from one end of a tunnel to the other uses 'through'.",
    theme: "cave"
  },

  // ==========================================
  // 7. CONJUNCTIONS & LINKING WORDS (20 questions)
  // ==========================================
  {
    id: "conj-001",
    category: "Conjunctions",
    level: "A2",
    question: "We wanted to explore the dark cave, _______ we didn't have a flashlight.",
    options: ["but", "so", "because", "although"],
    correctIndex: 0,
    explanation: "'But' connects two contrasting ideas.",
    theme: "cave"
  },
  {
    id: "conj-002",
    category: "Conjunctions",
    level: "A2",
    question: "The team built a sturdy shelter _______ the storm would not soak them.",
    options: ["so that", "because of", "although", "unless"],
    correctIndex: 0,
    explanation: "'So that' expresses purpose (in order that).",
    theme: "survival"
  },
  {
    id: "conj-003",
    category: "Conjunctions",
    level: "B1",
    question: "_______ the climb was exhausting, they finally reached the radio tower.",
    options: ["Although", "Because", "So", "However"],
    correctIndex: 0,
    explanation: "'Although' introduces a concession / unexpected contrast at the start of a clause.",
    theme: "mountain"
  },
  {
    id: "conj-004",
    category: "Conjunctions",
    level: "A2",
    question: "They boiled the stream water _______ it contained harmful bacteria.",
    options: ["because", "so", "but", "while"],
    correctIndex: 0,
    explanation: "'Because' gives the reason for an action.",
    theme: "water"
  },
  {
    id: "conj-005",
    category: "Conjunctions",
    level: "A2",
    question: "The radio battery is dead, _______ we cannot transmit an emergency signal.",
    options: ["so", "because", "although", "but"],
    correctIndex: 0,
    explanation: "'So' introduces the consequence or result of the first clause.",
    theme: "radio"
  },
  {
    id: "conj-006",
    category: "Conjunctions",
    level: "B1",
    question: "You cannot enter the ancient ruins _______ you have the golden key.",
    options: ["unless", "if", "because", "so"],
    correctIndex: 0,
    explanation: "'Unless' means 'if not' (expressing a negative condition).",
    theme: "hut"
  },
  {
    id: "conj-007",
    category: "Conjunctions",
    level: "B1",
    question: "We can either repair the shipwreck boat _______ build a brand new raft.",
    options: ["or", "and", "nor", "but"],
    correctIndex: 0,
    explanation: "'Either' pairs with 'or' for two choices.",
    theme: "boat"
  },
  {
    id: "conj-008",
    category: "Conjunctions",
    level: "B1",
    question: "Neither the captain _______ the radio operator knew our exact coordinates.",
    options: ["nor", "or", "and", "but"],
    correctIndex: 0,
    explanation: "'Neither' pairs with 'nor' for negative alternatives.",
    theme: "mystery"
  },
  {
    id: "conj-009",
    category: "Conjunctions",
    level: "A2",
    question: "Make sure the campfire is extinguished _______ leaving the campsite.",
    options: ["before", "after", "while", "during"],
    correctIndex: 0,
    explanation: "'Before' + gerund (-ing) indicates doing something prior to departing.",
    theme: "fire"
  },
  {
    id: "conj-010",
    category: "Conjunctions",
    level: "B1",
    question: "They kept walking in the rain _______ they were completely drenched.",
    options: ["even though", "because", "so that", "therefore"],
    correctIndex: 0,
    explanation: "'Even though' emphasizes surprising contrast.",
    theme: "weather"
  },
  {
    id: "conj-011",
    category: "Conjunctions",
    level: "A2",
    question: "Eat some fresh fruit _______ you will have energy for the climb.",
    options: ["so", "because", "although", "but"],
    correctIndex: 0,
    explanation: "'So' expresses result: eat fruit -> you have energy.",
    theme: "energy"
  },
  {
    id: "conj-012",
    category: "Conjunctions",
    level: "B1",
    question: "_______ the sun rose over the ocean, the fog cleared away.",
    options: ["As", "Because of", "Despite", "Unless"],
    correctIndex: 0,
    explanation: "'As' can mean 'at the same time as' (temporal conjunction).",
    theme: "beach"
  },
  {
    id: "conj-013",
    category: "Conjunctions",
    level: "B1",
    question: "Stay close together _______ nobody gets lost in the thick jungle.",
    options: ["so that", "because", "however", "although"],
    correctIndex: 0,
    explanation: "'So that' introduces the purpose (to prevent getting lost).",
    theme: "jungle"
  },
  {
    id: "conj-014",
    category: "Conjunctions",
    level: "A2",
    question: "We found both a sharp tool _______ a box of waterproof matches.",
    options: ["and", "or", "but", "nor"],
    correctIndex: 0,
    explanation: "'Both' pairs with 'and'.",
    theme: "tools"
  },
  {
    id: "conj-015",
    category: "Conjunctions",
    level: "B1",
    question: "The helicopter didn't land _______ of the high volcanic winds.",
    options: ["because", "so", "although", "despite"],
    correctIndex: 0,
    explanation: "'Because of' is followed by a noun phrase ('the high volcanic winds').",
    theme: "rescue"
  },
  {
    id: "conj-016",
    category: "Conjunctions",
    level: "B1",
    question: "_______ having no map, the brave team navigated by the stars.",
    options: ["Despite", "Although", "Because", "Even"],
    correctIndex: 0,
    explanation: "'Despite' is followed by a gerund / noun phrase ('having no map').",
    theme: "navigation"
  },
  {
    id: "conj-021",
    category: "Conjunctions",
    level: "A2",
    question: "Quick! Grab the supplies _______ the tide washes them out to sea!",
    options: ["before", "after", "since", "until"],
    correctIndex: 0,
    explanation: "'Before' specifies preventing an unwanted future outcome.",
    theme: "beach"
  },
  {
    id: "conj-018",
    category: "Conjunctions",
    level: "A2",
    question: "He didn't scream _______ he saw the giant snake, to avoid startling it.",
    options: ["when", "so", "but", "while"],
    correctIndex: 0,
    explanation: "'When' links a specific moment in time.",
    theme: "jungle"
  },
  {
    id: "conj-019",
    category: "Conjunctions",
    level: "B1",
    question: "We will wait here _______ the search and rescue plane appears.",
    options: ["until", "while", "during", "since"],
    correctIndex: 0,
    explanation: "'Until' indicates continuing an action up to a specific point.",
    theme: "rescue"
  },
  {
    id: "conj-020",
    category: "Conjunctions",
    level: "B1",
    question: "The team worked together tirelessly; _______, they successfully built the raft.",
    options: ["as a result", "although", "however", "whereas"],
    correctIndex: 0,
    explanation: "'As a result' introduces the logical consequence of their hard teamwork.",
    theme: "boat"
  },

  // ==========================================
  // 8. SURVIVAL & ISLAND VOCABULARY (35 questions)
  // ==========================================
  {
    id: "voc-001",
    category: "Survival Vocabulary",
    level: "A2",
    question: "What is a 'shelter'?",
    options: [
      "A structure that protects you from bad weather",
      "A dangerous wild predatory animal",
      "A type of sweet tropical fruit",
      "A boat engine part"
    ],
    correctIndex: 0,
    explanation: "A shelter is a basic house, tent, or structure that keeps you safe from wind, rain, and heat.",
    theme: "shelter"
  },
  {
    id: "voc-002",
    category: "Survival Vocabulary",
    level: "A2",
    question: "Which item is used to determine geographic direction (North, South, East, West)?",
    options: ["A compass", "A flashlight", "A rope", "A toolbox"],
    correctIndex: 0,
    explanation: "A magnetic compass shows cardinal directions to help navigation.",
    theme: "compass"
  },
  {
    id: "voc-003",
    category: "Island Vocabulary",
    level: "A2",
    question: "What do we call the remains of a destroyed ship found on the shore or underwater?",
    options: ["A shipwreck", "A lighthouse", "A submarine", "A harbor"],
    correctIndex: 0,
    explanation: "A shipwreck is the sunken or broken remains of a destroyed ship.",
    theme: "shipwreck"
  },
  {
    id: "voc-004",
    category: "Survival Vocabulary",
    level: "B1",
    question: "What does 'distress signal' (SOS) mean?",
    options: [
      "An urgent call requesting help in an emergency",
      "A welcoming greeting to tourists",
      "A weather forecast for tomorrow",
      "A map of hidden treasures"
    ],
    correctIndex: 0,
    explanation: "An SOS distress signal communicates that you are in grave danger and need rescue.",
    theme: "radio"
  },
  {
    id: "voc-005",
    category: "Island Vocabulary",
    level: "A2",
    question: "What is a 'lagoon'?",
    options: [
      "A body of shallow water separated from the sea by a reef",
      "A tall erupting mountain with hot lava",
      "A dense forest of tall bamboo trees",
      "A deep hole inside a dark cave"
    ],
    correctIndex: 0,
    explanation: "A lagoon is a calm, shallow pool of seawater enclosed by coral reefs or sandbanks.",
    theme: "ocean"
  },
  {
    id: "voc-006",
    category: "Survival Vocabulary",
    level: "A2",
    question: "Which of the following is essential for starting a campfire without matches?",
    options: ["Flint and steel", "A plastic cup", "A wet towel", "A wooden spoon"],
    correctIndex: 0,
    explanation: "Striking flint against steel creates hot sparks to ignite dry tinder.",
    theme: "fire"
  },
  {
    id: "voc-007",
    category: "Vocabulary: Synonyms",
    level: "B1",
    question: "What is a synonym for 'stranded'?",
    options: ["Marooned / Trapped", "Comfortable", "Rescued", "Prepared"],
    correctIndex: 0,
    explanation: "Being stranded or marooned means being stuck in an isolated place with no means of departure.",
    theme: "island"
  },
  {
    id: "voc-008",
    category: "Survival Vocabulary",
    level: "A2",
    question: "What is a 'raft'?",
    options: [
      "A flat floating craft made of logs or barrels tied together",
      "A sharp knife used to cut vines",
      "A heavy anchor made of solid iron",
      "A radio tower antenna"
    ],
    correctIndex: 0,
    explanation: "A raft is a simple floating platform used to travel across water.",
    theme: "boat"
  },
  {
    id: "voc-009",
    category: "Survival Vocabulary",
    level: "B1",
    question: "What is the medical term for severe lack of body water?",
    options: ["Dehydration", "Exhaustion", "Hypothermia", "Infection"],
    correctIndex: 0,
    explanation: "Dehydration occurs when your body loses more fluids than you take in.",
    theme: "health"
  },
  {
    id: "voc-010",
    category: "Nature Vocabulary",
    level: "A2",
    question: "What comes out of an active volcano during an eruption?",
    options: ["Lava, ash, and smoke", "Fresh drinking water", "Cold snow and ice", "Sand and seashells"],
    correctIndex: 0,
    explanation: "Volcanoes expel molten rock called lava, along with volcanic ash and gases.",
    theme: "volcano"
  },
  {
    id: "voc-011",
    category: "Vocabulary: Antonyms",
    level: "A2",
    question: "What is the opposite of 'poisonous'?",
    options: ["Edible / Harmless", "Dangerous", "Toxic", "Venomous"],
    correctIndex: 0,
    explanation: "Edible means safe to consume, which is the opposite of poisonous.",
    theme: "food"
  },
  {
    id: "voc-012",
    category: "Survival Vocabulary",
    level: "A2",
    question: "What tool is best for cutting thick ropes and jungle vines?",
    options: ["A machete or sharp knife", "A hammer", "A compass", "A flashlight"],
    correctIndex: 0,
    explanation: "A machete or sturdy knife is designed for slicing foliage and ropes.",
    theme: "tools"
  },
  {
    id: "voc-013",
    category: "Vocabulary",
    level: "B1",
    question: "What does 'tide' mean in relation to the ocean?",
    options: [
      "The regular rise and fall of the sea level caused by the moon",
      "A giant sea monster living in caves",
      "A strong underwater earthquake",
      "A type of tropical sea turtle"
    ],
    correctIndex: 0,
    explanation: "Tides are the daily cyclic changes in ocean surface level caused by gravitational forces.",
    theme: "ocean"
  },
  {
    id: "voc-014",
    category: "Survival Vocabulary",
    level: "A2",
    question: "Which of these provides the most immediate energy when stranded?",
    options: ["Ripe bananas and coconuts", "Salt water", "Sand", "Dry tree bark"],
    correctIndex: 0,
    explanation: "Fruits provide easily digestible natural sugars and hydration.",
    theme: "food"
  },
  {
    id: "voc-015",
    category: "Survival Vocabulary",
    level: "B1",
    question: "What is a 'flare'?",
    options: [
      "A bright pyrotechnic signal light used to attract rescuers",
      "A heavy wooden rudder for a ship",
      "A kind of poisonous mushroom",
      "A map coordinate"
    ],
    correctIndex: 0,
    explanation: "An emergency flare shoots a brilliant colored light into the sky to alert rescue teams.",
    theme: "signal"
  },
  {
    id: "voc-016",
    category: "Nature Vocabulary",
    level: "A2",
    question: "What is the term for a high, steep rock face?",
    options: ["A cliff", "A valley", "A plain", "A lagoon"],
    correctIndex: 0,
    explanation: "A cliff is a steep, almost vertical precipice of rock.",
    theme: "mountain"
  },
  {
    id: "voc-017",
    category: "Survival Vocabulary",
    level: "A2",
    question: "Which device is essential to store electrical energy for the radio transmitter?",
    options: ["A battery", "A mirror", "A wooden peg", "A compass"],
    correctIndex: 0,
    explanation: "A battery stores electrochemical energy needed to power devices.",
    theme: "battery"
  },
  {
    id: "voc-018",
    category: "Island Vocabulary",
    level: "B1",
    question: "What does 'dense' mean when describing a rainforest?",
    options: [
      "Thick and crowded with lots of trees and plants",
      "Completely empty of all living things",
      "Very dry and desert-like",
      "Extremely cold and snowy"
    ],
    correctIndex: 0,
    explanation: "Dense means closely compacted foliage with little empty space.",
    theme: "jungle"
  },
  {
    id: "voc-019",
    category: "Survival Vocabulary",
    level: "A2",
    question: "What is 'purification' when speaking about water?",
    options: [
      "Making water clean and safe to drink",
      "Freezing water into ice cubes",
      "Coloring water with tropical juice",
      "Pouring water into the ocean"
    ],
    correctIndex: 0,
    explanation: "Water purification removes harmful microbes, toxins, and contaminants.",
    theme: "water"
  },
  {
    id: "voc-020",
    category: "Vocabulary: Action Verbs",
    level: "A2",
    question: "What verb means to move away from danger to a safe place?",
    options: ["Escape", "Remain", "Trap", "Surrender"],
    correctIndex: 0,
    explanation: "'Escape' means to break free from confinement or get away from danger.",
    theme: "escape"
  },
  {
    id: "voc-021",
    category: "Island Vocabulary",
    level: "B1",
    question: "What is an 'archipelago'?",
    options: [
      "A cluster or group of many islands",
      "A deep underwater volcanic trench",
      "A species of tropical parrot",
      "An ancient navigation tool"
    ],
    correctIndex: 0,
    explanation: "An archipelago is an extensive group or chain of islands.",
    theme: "island"
  },
  {
    id: "voc-022",
    category: "Survival Vocabulary",
    level: "A2",
    question: "What is 'tinder' in survival fire-making?",
    options: [
      "Dry, easily flammable material like dried grass or wood shavings",
      "Heavy wet logs that burn slowly",
      "A bucket of cold sea water",
      "A metal tool used to tighten bolts"
    ],
    correctIndex: 0,
    explanation: "Tinder is fine, dry combustible material that catches sparks easily.",
    theme: "fire"
  },
  {
    id: "voc-023",
    category: "Vocabulary: Phrasal Verbs",
    level: "B1",
    question: "What does the phrasal verb 'look out' mean?",
    options: ["Be careful / Watch out for danger", "Look backwards", "Close your eyes", "Search for food"],
    correctIndex: 0,
    explanation: "'Look out' is an urgent warning to be vigilant against imminent danger.",
    theme: "survival"
  },
  {
    id: "voc-024",
    category: "Island Vocabulary",
    level: "A2",
    question: "What is the edge of land where it meets the sea called?",
    options: ["Coast / Shoreline", "Summit", "Crater", "Glacier"],
    correctIndex: 0,
    explanation: "The coast or shore is where land borders a large body of water.",
    theme: "beach"
  },
  {
    id: "voc-025",
    category: "Survival Vocabulary",
    level: "A2",
    question: "What do you call a person who survives a shipwreck or disaster?",
    options: ["A survivor / castaway", "A tourist", "A pirate captain", "A navigator"],
    correctIndex: 0,
    explanation: "A castaway is someone shipwrecked and stranded in an isolated place.",
    theme: "island"
  },
  {
    id: "voc-026",
    category: "Nature Vocabulary",
    level: "A2",
    question: "What is a violent tropical storm with powerful rotating winds called?",
    options: ["A hurricane / cyclone", "A breeze", "A drought", "A heatwave"],
    correctIndex: 0,
    explanation: "Hurricanes and cyclones are intense tropical storms with destructive winds.",
    theme: "weather"
  },
  {
    id: "voc-027",
    category: "Vocabulary: Phrasal Verbs",
    level: "B1",
    question: "What does 'run out of' mean? (e.g. 'We ran out of drinking water!')",
    options: ["To have none left / Exhaust the supply", "To run very fast outside", "To fill up a container", "To throw away"],
    correctIndex: 0,
    explanation: "'Run out of' means you have finished or exhausted your entire supply.",
    theme: "survival"
  },
  {
    id: "voc-028",
    category: "Tools & Equipment",
    level: "A2",
    question: "What tool has two jaws and is used for gripping, bending, or cutting wire?",
    options: ["Pliers", "Hammer", "Paintbrush", "Compass"],
    correctIndex: 0,
    explanation: "Pliers are hand tools used for holding objects firmly and manipulating wire.",
    theme: "tools"
  },
  {
    id: "voc-029",
    category: "Nature Vocabulary",
    level: "A2",
    question: "What do we call the hard, colorful underwater structures built by tiny marine animals?",
    options: ["Coral reefs", "Seaweed", "Sand dunes", "Icebergs"],
    correctIndex: 0,
    explanation: "Coral reefs are underwater ecosystems formed by calcium carbonate colonies.",
    theme: "ocean"
  },
  {
    id: "voc-030",
    category: "Survival Vocabulary",
    level: "B1",
    question: "What is a 'makeshift' tool or shelter?",
    options: [
      "A temporary replacement made from whatever materials are available",
      "A factory-built luxury item",
      "A broken, unusable toy",
      "An electronic computerized device"
    ],
    correctIndex: 0,
    explanation: "Makeshift means temporary, improvised, or crude but functional.",
    theme: "survival"
  },
  {
    id: "voc-031",
    category: "Nature Vocabulary",
    level: "A2",
    question: "What is a 'predator'?",
    options: [
      "An animal that hunts and eats other animals",
      "A plant that grows in shallow water",
      "A person who studies weather",
      "A type of tropical flower"
    ],
    correctIndex: 0,
    explanation: "A predator naturally preys on other animals for food.",
    theme: "nature"
  },
  {
    id: "voc-032",
    category: "Vocabulary",
    level: "A2",
    question: "What does 'exhausted' mean?",
    options: ["Extremely tired / Having no energy left", "Very happy and excited", "Slightly thirsty", "Full of food"],
    correctIndex: 0,
    explanation: "Exhausted means completely worn out or drained of energy.",
    theme: "energy"
  },
  {
    id: "voc-033",
    category: "Tools & Equipment",
    level: "A2",
    question: "Which item is used to reflect sunlight as an emergency visual beacon?",
    options: ["A signal mirror", "A dark blanket", "A wooden stick", "A piece of rope"],
    correctIndex: 0,
    explanation: "Signal mirrors flash intense reflected beams of sunlight visible for miles.",
    theme: "signal"
  },
  {
    id: "voc-034",
    category: "Island Vocabulary",
    level: "B1",
    question: "What is 'dense fog' called when it forms near the coast?",
    options: ["Sea mist", "Sandstorm", "Hail", "Blizzard"],
    correctIndex: 0,
    explanation: "Sea mist or coastal fog reduces visibility near shorelines.",
    theme: "weather"
  },
  {
    id: "voc-035",
    category: "Vocabulary: Phrasal Verbs",
    level: "B1",
    question: "What does 'give up' mean in a survival situation?",
    options: ["Stop trying / Surrender hope", "Climb to the top", "Look for food", "Share supplies"],
    correctIndex: 0,
    explanation: "'Give up' means to cease making an effort or abandon hope.",
    theme: "survival"
  },

  // ==========================================
  // 9. DAILY DIALOGUES & SCHOOL/COMMUNICATION (25 questions)
  // ==========================================
  {
    id: "dia-001",
    category: "Dialogue: Decision Making",
    level: "A2",
    question: "Sam: 'Should we climb the mountain or follow the beach?'\nAlex: '_______.'",
    options: [
      "Let's follow the beach; it is safer.",
      "Yes, I do.",
      "I am eating an apple.",
      "Yesterday at four o'clock."
    ],
    correctIndex: 0,
    explanation: "Alex answers an alternative question with a clear suggestion ('Let's follow the beach').",
    theme: "dialogue"
  },
  {
    id: "dia-002",
    category: "Dialogue: Giving Directions",
    level: "A2",
    question: "Maya: 'How do we get to the shipwreck?'\nLeo: '_______.'",
    options: [
      "Walk straight along the shore for 500 meters.",
      "I don't like shipwrecks.",
      "Because the boat crashed.",
      "It is three dollars."
    ],
    correctIndex: 0,
    explanation: "Leo provides spatial directions in response to 'How do we get to...'?",
    theme: "dialogue"
  },
  {
    id: "dia-003",
    category: "Dialogue: Suggestions",
    level: "A2",
    question: "Teacher: 'Why don't we test the radio transmitter now?'\nStudents: '_______!'",
    options: ["That sounds like a great idea", "No, we didn't", "It is raining yesterday", "Yes, they are"],
    correctIndex: 0,
    explanation: "'That sounds like a great idea' agrees with a suggestion made with 'Why don't we...?'",
    theme: "dialogue"
  },
  {
    id: "dia-004",
    category: "Dialogue: Asking for Help",
    level: "A2",
    question: "Mia: 'Can you give me a hand with this heavy wooden log?'\nTom: '_______.'",
    options: ["Sure! Let me grab the other side", "My hand is small", "No, I am sleeping", "Yesterday I did"],
    correctIndex: 0,
    explanation: "'Give me a hand' is an idiom meaning 'help me'. 'Sure!' is an enthusiastic agreement.",
    theme: "dialogue"
  },
  {
    id: "dia-005",
    category: "Dialogue: Clarification",
    level: "B1",
    question: "Captain: 'Make sure you keep the battery dry.'\nCadet: '_______?'\nCaptain: 'Because water will short-circuit it.'",
    options: ["Why is that important", "Where did you go", "How much was it", "Who found the boat"],
    correctIndex: 0,
    explanation: "The Captain's answer starts with 'Because...', so the cadet asked a 'Why' question.",
    theme: "dialogue"
  },
  {
    id: "dia-006",
    category: "Dialogue: Expressing Concern",
    level: "A2",
    question: "Emma: 'I hear a wild boar rustling in the bushes!'\nNoah: '_______!'",
    options: ["Be quiet and don't make any sudden movements", "Happy birthday", "You are welcome", "It was sunny"],
    correctIndex: 0,
    explanation: "A calm, safety-focused command fits the danger described.",
    theme: "dialogue"
  },
  {
    id: "dia-007",
    category: "Dialogue: Agreement",
    level: "A2",
    question: "Liam: 'I think we need more rope to secure the raft.'\nChloe: '_______.'",
    options: ["I agree with you completely", "I am fifteen years old", "It is on page 4", "No, I haven't seen it"],
    correctIndex: 0,
    explanation: "'I agree with you' responds directly to an opinion.",
    theme: "dialogue"
  },
  {
    id: "dia-008",
    category: "Dialogue: Apologies",
    level: "A2",
    question: "Ben: 'I am so sorry I dropped the compass into the sand!'\nZoe: '_______.'",
    options: ["Don't worry about it; it's still working", "Yes, please", "Thank you very much", "Nice to meet you"],
    correctIndex: 0,
    explanation: "'Don't worry about it' graciously accepts an apology.",
    theme: "dialogue"
  },
  {
    id: "dia-009",
    category: "Dialogue: Checking Understanding",
    level: "B1",
    question: "Guide: 'Do you know what to do if an earthquake starts?'\nExplorer: '_______.'",
    options: [
      "Yes, we should move to an open area away from falling rocks",
      "No, I didn't eat lunch",
      "Earthquakes are green",
      "Because we climbed yesterday"
    ],
    correctIndex: 0,
    explanation: "The answer directly demonstrates understanding of safety protocol.",
    theme: "dialogue"
  },
  {
    id: "dia-010",
    category: "Dialogue: Time & Plans",
    level: "A2",
    question: "Lily: 'What time are we meeting back at base camp?'\nMax: '_______.'",
    options: ["At 5:30 PM before it gets dark", "Near the big palm tree", "With our backpacks", "Because it is sunny"],
    correctIndex: 0,
    explanation: "'What time...?' requires a temporal response ('At 5:30 PM...').",
    theme: "dialogue"
  },
  {
    id: "dia-011",
    category: "Dialogue: Quantity & Scarcity",
    level: "A2",
    question: "Lucas: 'How much drinking water do we have left?'\nAva: '_______.'",
    options: ["Only about two liters in the canteen", "There are four coconuts", "At 3 o'clock", "Yes, we do"],
    correctIndex: 0,
    explanation: "'How much water' asks about an uncountable volume, correctly answered with liters.",
    theme: "dialogue"
  },
  {
    id: "dia-012",
    category: "Dialogue: Offers",
    level: "A2",
    question: "Oliver: 'Would you like some roasted fish?'\nSophia: '_______.'",
    options: ["Yes, please! I'm starving", "No, I am not a fish", "Yesterday was great", "It is 2 o'clock"],
    correctIndex: 0,
    explanation: "Polite response to a food offer: 'Yes, please! I'm starving.'",
    theme: "dialogue"
  },
  {
    id: "dia-013",
    category: "Dialogue: Encouragement",
    level: "A2",
    question: "Jacob: 'I don't think we can fix this broken propeller.'\nElla: '_______!'",
    options: ["Don't give up! We can do it together", "Good morning", "It's three miles away", "I didn't do my homework"],
    correctIndex: 0,
    explanation: "Teamwork encouragement: 'Don't give up! We can do it together.'",
    theme: "dialogue"
  },
  {
    id: "dia-014",
    category: "Dialogue: Preferences",
    level: "A2",
    question: "Mason: 'Which escape plan do you prefer?'\nIsabella: '_______.'",
    options: [
      "I prefer the helicopter rescue because it's faster",
      "I like blue bicycles",
      "No, thank you",
      "Yes, I preferred"
    ],
    correctIndex: 0,
    explanation: "Expresses a clear preference among the given choices.",
    theme: "dialogue"
  },
  {
    id: "dia-015",
    category: "Dialogue: Instructions",
    level: "B1",
    question: "Leader: 'First, gather dry branches. Next, arrange them into a teepee shape.'\nTeammate: '_______?'\nLeader: 'Then light the tinder with the flint.'",
    options: ["What do we do after that", "Where is the beach", "Why are you here", "Who built the shelter"],
    correctIndex: 0,
    explanation: "'What do we do after that?' asks for the next step in a sequence.",
    theme: "dialogue"
  },
  {
    id: "dia-016",
    category: "Dialogue: Expressing Doubt",
    level: "B1",
    question: "Ethan: 'Are you certain this old bridge can hold our weight?'\nHarper: '_______.'",
    options: [
      "I'm not sure; we should test it with a heavy stone first",
      "Yes, I ate an orange",
      "The bridge was five dollars",
      "Tomorrow at midnight"
    ],
    correctIndex: 0,
    explanation: "Harper sensibly expresses caution and uncertainty.",
    theme: "dialogue"
  },
  {
    id: "dia-017",
    category: "Dialogue: Expressing Relief",
    level: "A2",
    question: "Aiden: 'Look, the storm has passed and the sky is clear!'\nGrace: '_______!'",
    options: ["What a relief", "You are terrible", "I am very angry", "Good night"],
    correctIndex: 0,
    explanation: "'What a relief!' expresses feelings of comfort after a tense danger.",
    theme: "dialogue"
  },
  {
    id: "dia-018",
    category: "Dialogue: Asking for Permission",
    level: "A2",
    question: "Student: 'May I use the magnifying glass to examine the island map?'\nTeacher: '_______.'",
    options: ["Of course you may! Be careful with the lens", "No, I don't know", "Yes, I am", "Yesterday morning"],
    correctIndex: 0,
    explanation: "Polite granting of permission: 'Of course you may!'",
    theme: "dialogue"
  },
  {
    id: "dia-019",
    category: "Dialogue: Confirming Information",
    level: "B1",
    question: "Radio Operator: 'Confirm: do you have sufficient fuel for the trip?'\nTeam: '_______.'",
    options: [
      "Affirmative, we have four full fuel canisters",
      "We don't like fuel",
      "It is raining fuel",
      "No, we did yesterday"
    ],
    correctIndex: 0,
    explanation: "'Affirmative' is the standard radio communication code for 'Yes'.",
    theme: "radio"
  },
  {
    id: "dia-020",
    category: "Dialogue: Expressing Excitement",
    level: "A2",
    question: "Jack: 'Guys! I just found the golden key inside the hollow trunk!'\nTeam: '_______!'",
    options: ["Awesome news! Now we can open the hut", "What a boring day", "I'm sorry to hear that", "Please be quiet"],
    correctIndex: 0,
    explanation: "Celebrates a breakthrough moment with matching enthusiasm.",
    theme: "dialogue"
  },
  {
    id: "dia-021",
    category: "Dialogue: Advice",
    level: "A2",
    question: "Mia: 'My leg hurts after that long hike.'\nDan: '_______.'",
    options: ["You should sit down and rest it for a while", "You must run faster", "I like your shoes", "It was Tuesday"],
    correctIndex: 0,
    explanation: "'You should sit down...' provides appropriate compassionate advice.",
    theme: "dialogue"
  },
  {
    id: "dia-022",
    category: "Dialogue: Checking Status",
    level: "A2",
    question: "Teacher: 'Is everyone ready to move to the next location?'\nTeam: '_______!'",
    options: ["Yes, all packed and ready to go", "We were eating soup", "No, it's 4 o'clock", "Because of the rain"],
    correctIndex: 0,
    explanation: "Confirms group readiness to depart.",
    theme: "dialogue"
  },
  {
    id: "dia-023",
    category: "Dialogue: Warning",
    level: "A2",
    question: "Lookout: 'Watch your step! The rocks near the edge are slippery!'\nClimber: '_______.'",
    options: ["Thanks for the warning! I'll be careful", "The weather is hot", "I don't have a clock", "Yes, they are birds"],
    correctIndex: 0,
    explanation: "Acknowledges the safety tip with gratitude.",
    theme: "dialogue"
  },
  {
    id: "dia-024",
    category: "Dialogue: Making Decisions",
    level: "B1",
    question: "Alex: 'Do you think we should signal now or wait for the fog to lift?'\nSara: '_______.'",
    options: [
      "We should wait; the flare won't be visible in thick fog",
      "Yes, I like flares",
      "The fog is three meters tall",
      "Because we have no matches"
    ],
    correctIndex: 0,
    explanation: "Sara offers reasoned logical advice based on visibility.",
    theme: "signal"
  },
  {
    id: "dia-025",
    category: "Dialogue: Survival Planning",
    level: "A2",
    question: "Leo: 'What is our top priority before sunset?'\nMaya: '_______.'",
    options: [
      "Securing clean water and building a fire",
      "Playing video games",
      "Swimming to another continent",
      "Sleeping on the wet sand"
    ],
    correctIndex: 0,
    explanation: "Highlights standard survival priorities before nightfall.",
    theme: "survival"
  },

  // ==========================================
  // 10. READING & ISLAND CLUES / LOGS (30 questions)
  // ==========================================
  {
    id: "read-001",
    category: "Reading: Old Ship Diary",
    level: "A2",
    question: "Read the diary entry:\n'June 14: The storm broke our mast. We hid the emergency radio in the abandoned hut and locked the door with a brass key.'\nWhere is the emergency radio?",
    options: ["In the abandoned hut", "Under the beach sand", "At the volcano crater", "Inside the cave"],
    correctIndex: 0,
    explanation: "The text directly states: 'We hid the emergency radio in the abandoned hut'.",
    theme: "hut"
  },
  {
    id: "read-002",
    category: "Reading: Signpost",
    level: "A2",
    question: "A wooden sign reads:\n'DANGER: High cliffs ahead. Do not attempt to climb without a strong rope and climbing hooks.'\nWhat equipment is required to climb the cliff safely?",
    options: ["Rope and climbing hooks", "A flashlight and battery", "A boat and paddle", "A compass and map"],
    correctIndex: 0,
    explanation: "The sign explicitly mentions 'a strong rope and climbing hooks'.",
    theme: "mountain"
  },
  {
    id: "read-003",
    category: "Reading: SOS Note",
    level: "B1",
    question: "Read the bottle message:\n'If you find this note, the radio tower on Mist Peak is operational, but it lacks a charged battery.'\nWhat is missing from the radio tower?",
    options: ["A charged battery", "An antenna", "A microphone", "A map"],
    correctIndex: 0,
    explanation: "'It lacks a charged battery' means it does not have a working battery.",
    theme: "tower"
  },
  {
    id: "read-004",
    category: "Reading: Plant Guide",
    level: "A2",
    question: "Island Plant Guide:\n'The yellow star fruit is safe and sweet to eat. However, the purple spotted berry causes intense stomach cramps.'\nWhich fruit should you NEVER eat?",
    options: ["The purple spotted berry", "The yellow star fruit", "The brown coconut", "The red papaya"],
    correctIndex: 0,
    explanation: "The text warns that purple spotted berries cause stomach cramps.",
    theme: "nature"
  },
  {
    id: "read-005",
    category: "Reading: Weather Log",
    level: "B1",
    question: "Logbook:\n'Monsoon winds blow from the north every evening at 6 PM, creating treacherous waves in the northern bay.'\nWhen is the northern bay dangerous?",
    options: ["Every evening at 6 PM", "Every morning at sunrise", "Only in the winter", "Never"],
    correctIndex: 0,
    explanation: "The log states the winds blow 'every evening at 6 PM'.",
    theme: "ocean"
  },
  {
    id: "read-006",
    category: "Reading: Explorer's Note",
    level: "A2",
    question: "Note:\n'The cave is pitch black. Bats sleep on the ceiling. A flashlight will illuminate the path toward the underground spring.'\nWhat will a flashlight help you find?",
    options: ["The underground spring", "A gold coin", "The airplane cockpit", "A hungry bear"],
    correctIndex: 0,
    explanation: "The note states: 'A flashlight will illuminate the path toward the underground spring'.",
    theme: "cave"
  },
  {
    id: "read-007",
    category: "Reading: Survival Manual",
    level: "A2",
    question: "Manual extract:\n'Always build your campfire at least 5 meters away from dry grass and low-hanging tree branches.'\nWhy should you build the fire 5 meters away?",
    options: ["To prevent accidental forest fires", "To make more smoke", "To attract wild animals", "To stay colder"],
    correctIndex: 0,
    explanation: "Keeping distance prevents sparks from igniting surrounding vegetation.",
    theme: "fire"
  },
  {
    id: "read-008",
    category: "Reading: Map Inscription",
    level: "B1",
    question: "Inscription:\n'Three steps east from the twin palms leads to where the old smuggler cached his fuel cans.'\nWhat is hidden near the twin palms?",
    options: ["Fuel cans", "A treasure chest", "A broken radio", "A telescope"],
    correctIndex: 0,
    explanation: "The inscription says the smuggler 'cached his fuel cans' there.",
    theme: "boat"
  },
  {
    id: "read-009",
    category: "Reading: Animal Behavior",
    level: "A2",
    question: "Text:\n'Island macaque monkeys are curious. They will steal shiny metallic objects if left unattended on the sand.'\nWhat objects attract the monkeys?",
    options: ["Shiny metallic objects", "Old wooden sticks", "Sea shells", "Wet seaweed"],
    correctIndex: 0,
    explanation: "The text says monkeys 'steal shiny metallic objects'.",
    theme: "jungle"
  },
  {
    id: "read-010",
    category: "Reading: Helicopter Beacon",
    level: "B1",
    question: "Radio manual:\n'To guide the search helicopter to a safe landing zone, signal fires must be lit in a triangle formation.'\nWhat geometric shape is required for the signal fires?",
    options: ["A triangle", "A straight line", "A circle", "A square"],
    correctIndex: 0,
    explanation: "The manual explicitly states 'in a triangle formation'.",
    theme: "rescue"
  },
  {
    id: "read-011",
    category: "Reading: Waterfall Passage",
    level: "A2",
    question: "Carving on stone:\n'Behind the veil of falling water lies a dry chamber filled with clean, sweet drinking water.'\nWhere is the dry chamber located?",
    options: ["Behind the waterfall", "At the top of the volcano", "Inside the airplane wreck", "Under the ocean sand"],
    correctIndex: 0,
    explanation: "'Behind the veil of falling water' refers to behind the waterfall.",
    theme: "waterfall"
  },
  {
    id: "read-012",
    category: "Reading: Repair Manual",
    level: "B1",
    question: "Boat engine manual:\n'Step 1: Check fuel lines.\nStep 2: Tighten the spark plug using a 10mm wrench.\nStep 3: Pull the starter cord.'\nWhat tool is needed for step 2?",
    options: ["A 10mm wrench / tool", "A hammer", "A pair of scissors", "A flashlight"],
    correctIndex: 0,
    explanation: "Step 2 states: 'Tighten the spark plug using a 10mm wrench'.",
    theme: "boat"
  },
  {
    id: "read-013",
    category: "Reading: Tide Warning",
    level: "A2",
    question: "Warning on driftwood:\n'The beach path becomes completely submerged when the tide rises at 4 PM. Use the ridge trail instead.'\nWhat happens to the beach path at 4 PM?",
    options: ["It goes underwater (submerged)", "It turns into ice", "It becomes very dry", "Trees block it"],
    correctIndex: 0,
    explanation: "'Submerged' means covered by water.",
    theme: "beach"
  },
  {
    id: "read-014",
    category: "Reading: Medical Leaflet",
    level: "B1",
    question: "First Aid Leaflet:\n'If bitten by a non-venomous insect, wash the area with fresh water and apply soothing aloe vera gel.'\nWhat plant gel should be applied?",
    options: ["Aloe vera gel", "Pine resin", "Poison ivy juice", "Coconut milk"],
    correctIndex: 0,
    explanation: "The leaflet advises applying 'soothing aloe vera gel'.",
    theme: "health"
  },
  {
    id: "read-015",
    category: "Reading: Volcano Observatory",
    level: "B1",
    question: "Plaque:\n'Seismic tremors exceeding level 3 indicate magma rising. Evacuate the crater immediately.'\nWhat should you do if tremors exceed level 3?",
    options: ["Evacuate the crater immediately", "Set up a tent", "Start a fire", "Go swimming in the lava"],
    correctIndex: 0,
    explanation: "The plaque explicitly commands: 'Evacuate the crater immediately'.",
    theme: "volcano"
  },
  {
    id: "read-016",
    category: "Reading: Radio Instructions",
    level: "A2",
    question: "Label:\n'Frequency 121.5 MHz is the international aviation distress channel. Transmit your coordinates clearly.'\nWhat is 121.5 MHz used for?",
    options: ["International aviation emergency distress", "Playing pop music", "Weather radar only", "Private phone calls"],
    correctIndex: 0,
    explanation: "The label designates 121.5 MHz as the international emergency distress channel.",
    theme: "radio"
  },
  {
    id: "read-017",
    category: "Reading: Camp Rules",
    level: "A2",
    question: "Camp notice:\n'Rule #1: Store all leftover food in sealed containers off the ground to avoid attracting nocturnal predators.'\nWhy must food be stored in sealed containers off the ground?",
    options: ["To prevent attracting nocturnal predators", "To keep it cold", "To make it taste better", "To hide it from teammates"],
    correctIndex: 0,
    explanation: "The notice states the purpose is 'to avoid attracting nocturnal predators'.",
    theme: "camp"
  },
  {
    id: "read-018",
    category: "Reading: Old Map Legend",
    level: "A2",
    question: "Map Legend:\n'Anchor symbol = Sunken Shipwreck\nLightning bolt = Radio Mast\nFlame symbol = Signal Hill'\nWhat does the lightning bolt represent on the map?",
    options: ["The Radio Mast", "The Sunken Shipwreck", "The Signal Hill", "A dangerous storm"],
    correctIndex: 0,
    explanation: "The legend defines 'Lightning bolt = Radio Mast'.",
    theme: "map"
  },
  {
    id: "read-019",
    category: "Reading: Distress Signal",
    level: "B1",
    question: "Message written on slate:\n'We survived the crash. 4 people. Low on fuel. Moving east toward the high plateau.'\nIn which cardinal direction did the survivors travel?",
    options: ["East", "West", "North", "South"],
    correctIndex: 0,
    explanation: "The text says 'Moving east toward the high plateau'.",
    theme: "adventure"
  },
  {
    id: "read-020",
    category: "Reading: Raft Blueprint",
    level: "A2",
    question: "Blueprint note:\n'Secure 6 cedar logs with heavy rope, then coat the bottom seams with tree resin for waterproofing.'\nWhat is used to waterproof the raft?",
    options: ["Tree resin", "Heavy rope", "Sand", "Sea water"],
    correctIndex: 0,
    explanation: "The blueprint states: 'coat the bottom seams with tree resin for waterproofing'.",
    theme: "boat"
  },
  {
    id: "read-021",
    category: "Reading: Weather Station",
    level: "B1",
    question: "Station readout:\n'Barometric pressure dropping rapidly. Wind velocity increasing to 45 knots. Severe storm imminent.'\nWhat kind of weather is approaching?",
    options: ["A severe storm", "A hot sunny day", "A light snowfall", "A calm gentle breeze"],
    correctIndex: 0,
    explanation: "A falling barometer and 45-knot winds indicate an imminent severe storm.",
    theme: "weather"
  },
  {
    id: "read-022",
    category: "Reading: Animal Track Guide",
    level: "A2",
    question: "Guide:\n'Large claw marks on tree trunks at shoulder height indicate the presence of wild bears.'\nWhat animal makes these claw marks?",
    options: ["Wild bears", "Seagulls", "Rabbits", "Fish"],
    correctIndex: 0,
    explanation: "The guide attributes high claw marks to wild bears.",
    theme: "nature"
  },
  {
    id: "read-023",
    category: "Reading: Rescue Note",
    level: "A2",
    question: "Coast Guard Flyer:\n'If you see a yellow rescue helicopter, stand in a clear space and wave brightly colored fabric.'\nWhat color helicopter should you look for?",
    options: ["Yellow", "Black", "Pink", "Invisible"],
    correctIndex: 0,
    explanation: "The flyer mentions a 'yellow rescue helicopter'.",
    theme: "rescue"
  },
  {
    id: "read-024",
    category: "Reading: Shipwreck Manifest",
    level: "B1",
    question: "Cargo Manifest:\n'Crate 4A: Mechanical toolkits, spare spark plugs, and copper wiring.'\nWhat does Crate 4A contain?",
    options: ["Mechanical toolkits and spare parts", "Food and fresh vegetables", "Clothing and books", "Toys and games"],
    correctIndex: 0,
    explanation: "Crate 4A contains mechanical toolkits, spark plugs, and copper wiring.",
    theme: "tools"
  },
  {
    id: "read-025",
    category: "Reading: Star Navigation",
    level: "B1",
    question: "Handbook:\n'In the northern hemisphere, finding the North Star (Polaris) reveals true north for nighttime navigation.'\nWhat star helps identify north at night?",
    options: ["Polaris (The North Star)", "Sirius", "Mars", "The Sun"],
    correctIndex: 0,
    explanation: "Polaris indicates true north in the northern hemisphere.",
    theme: "navigation"
  },
  {
    id: "read-026",
    category: "Reading: Battery Warning",
    level: "A2",
    question: "Battery casing text:\n'Warning: Keep away from open flames. Do not submerge in salt water.'\nWhat two things must be avoided?",
    options: ["Open flames and salt water", "Fresh air and daylight", "Plastic containers and wood", "Loud noises and singing"],
    correctIndex: 0,
    explanation: "The warning specifies open flames and salt water.",
    theme: "battery"
  },
  {
    id: "read-027",
    category: "Reading: Survival Tip",
    level: "A2",
    question: "Pocket guide:\n'Rule of 3s in survival: Humans can survive 3 minutes without air, 3 days without water, and 3 weeks without food.'\nHow long can a human survive without drinking water?",
    options: ["About 3 days", "3 minutes", "3 weeks", "3 months"],
    correctIndex: 0,
    explanation: "The rule of 3s states approximately 3 days without water.",
    theme: "survival"
  },
  {
    id: "read-028",
    category: "Reading: Signal Mirror Guide",
    level: "B1",
    question: "Signal instructions:\n'Aim the reflected sunbeam between your two outstretched fingers toward the distant ship or aircraft.'\nWhat is the purpose of this technique?",
    options: ["To aim the reflected sunbeam accurately", "To shade your eyes from glare", "To catch small fish", "To tie a knot"],
    correctIndex: 0,
    explanation: "Outstretched fingers act as an aiming sight for the mirror beam.",
    theme: "signal"
  },
  {
    id: "read-029",
    category: "Reading: Fuel Can Label",
    level: "A2",
    question: "Red metal can label:\n'HIGHLY FLAMMABLE: Aviation Fuel (5 Liters). Keep tightly sealed.'\nWhat kind of liquid is inside the can?",
    options: ["Aviation fuel", "Drinking water", "Cooking oil", "Orange juice"],
    correctIndex: 0,
    explanation: "The label identifies the contents as Aviation Fuel.",
    theme: "boat"
  },
  {
    id: "read-030",
    category: "Reading: Final Escape Order",
    level: "B1",
    question: "Final Emergency Directive:\n'When all items are assembled, verify your communications link, prime the engine, and launch immediately.'\nWhat is the final action instructed?",
    options: ["Launch immediately", "Wait another week", "Go back to sleep", "Throw away the items"],
    correctIndex: 0,
    explanation: "The directive orders: 'launch immediately'.",
    theme: "escape"
  },

  // ==========================================
  // 11. PRONOUNS, QUANTIFIERS & ARTICLES (20 questions)
  // ==========================================
  {
    id: "gram-001",
    category: "Articles & Quantifiers",
    level: "A2",
    question: "The survivors discovered _______ old rusted key in the sand.",
    options: ["an", "a", "the", "some"],
    correctIndex: 0,
    explanation: "'Old' begins with a vowel sound, so we use 'an'.",
    theme: "items"
  },
  {
    id: "gram-002",
    category: "Quantifiers: Much / Many",
    level: "A2",
    question: "How _______ coconuts did you collect from the tall tree?",
    options: ["many", "much", "little", "any"],
    correctIndex: 0,
    explanation: "'Coconuts' is a plural countable noun, so we use 'many'.",
    theme: "food"
  },
  {
    id: "gram-003",
    category: "Quantifiers: Much / Many",
    level: "A2",
    question: "We don't have _______ fuel left in the red canister.",
    options: ["much", "many", "few", "a lot"],
    correctIndex: 0,
    explanation: "'Fuel' is an uncountable noun, so we use 'much' in negative sentences.",
    theme: "boat"
  },
  {
    id: "gram-004",
    category: "Pronouns: Reflexive",
    level: "B1",
    question: "The castaways built the wooden shelter by _______.",
    options: ["themselves", "theirselves", "themself", "theirs"],
    correctIndex: 0,
    explanation: "'They' has the reflexive pronoun 'themselves'. ('By themselves' = on their own).",
    theme: "shelter"
  },
  {
    id: "gram-005",
    category: "Quantifiers: Some / Any",
    level: "A2",
    question: "Did you find _______ batteries in the abandoned hut?",
    options: ["any", "some", "a", "much"],
    correctIndex: 0,
    explanation: "We use 'any' in questions and negative statements with plural countable nouns.",
    theme: "hut"
  },
  {
    id: "gram-006",
    category: "Quantifiers: A few / A little",
    level: "A2",
    question: "There is only a _______ fresh water left in the metal flask.",
    options: ["little", "few", "many", "number of"],
    correctIndex: 0,
    explanation: "'Water' is uncountable, so we use 'a little'.",
    theme: "water"
  },
  {
    id: "gram-007",
    category: "Quantifiers: A few / A little",
    level: "A2",
    question: "We need a _______ more logs to complete the raft.",
    options: ["few", "little", "much", "less"],
    correctIndex: 0,
    explanation: "'Logs' is countable plural, so we use 'a few'.",
    theme: "boat"
  },
  {
    id: "gram-008",
    category: "Indefinite Pronouns",
    level: "A2",
    question: "Listen! Is _______ moving in the dark bushes?",
    options: ["someone", "anyone", "no one", "everywhere"],
    correctIndex: 0,
    explanation: "'Someone' or 'something' is moving in the bushes.",
    theme: "jungle"
  },
  {
    id: "gram-009",
    category: "Indefinite Pronouns",
    level: "A2",
    question: "There was _______ inside the mysterious stone chest; it was completely empty.",
    options: ["nothing", "anything", "something", "everything"],
    correctIndex: 0,
    explanation: "'Nothing' expresses the absence of any object.",
    theme: "mystery"
  },
  {
    id: "gram-010",
    category: "Possessive Pronouns",
    level: "A2",
    question: "Is this heavy backpack _______ or Leo's?",
    options: ["yours", "your", "you", "yourself"],
    correctIndex: 0,
    explanation: "'Yours' is the possessive pronoun standing alone without a following noun.",
    theme: "tools"
  },
  {
    id: "gram-011",
    category: "Articles",
    level: "A2",
    question: "Look up! _______ moon is shining brightly over the ocean.",
    options: ["The", "A", "An", "Some"],
    correctIndex: 0,
    explanation: "We use the definite article 'The' for unique celestial bodies ('The moon', 'The sun').",
    theme: "ocean"
  },
  {
    id: "gram-012",
    category: "Relative Pronouns",
    level: "B1",
    question: "The pilot _______ survived the plane crash helped us navigate.",
    options: ["who", "which", "whose", "where"],
    correctIndex: 0,
    explanation: "'Who' is the relative pronoun used for persons ('The pilot who...').",
    theme: "adventure"
  },
  {
    id: "gram-013",
    category: "Relative Pronouns",
    level: "B1",
    question: "This is the radio transmitter _______ will save our lives.",
    options: ["that", "who", "whom", "where"],
    correctIndex: 0,
    explanation: "'That' (or 'which') is the relative pronoun used for objects and things.",
    theme: "radio"
  },
  {
    id: "gram-014",
    category: "Relative Pronouns",
    level: "B1",
    question: "We reached the dark cave _______ the old pirates hid their supplies.",
    options: ["where", "which", "who", "when"],
    correctIndex: 0,
    explanation: "'Where' refers to a location or place.",
    theme: "cave"
  },
  {
    id: "gram-015",
    category: "Quantifiers",
    level: "A2",
    question: "_______ of the six teams must work together to escape the island.",
    options: ["All", "Every", "None", "Any of"],
    correctIndex: 0,
    explanation: "'All of the six teams' refers to the entirety of the group.",
    theme: "teamwork"
  },
  {
    id: "gram-016",
    category: "Pronouns",
    level: "A2",
    question: "He cut _______ while sharpening the wooden spear.",
    options: ["himself", "hisself", "him", "he"],
    correctIndex: 0,
    explanation: "Reflexive pronoun for 'he' is 'himself'.",
    theme: "survival"
  },
  {
    id: "gram-017",
    category: "Quantifiers: Each / Every",
    level: "A2",
    question: "_______ team has three energy hearts at the beginning.",
    options: ["Each", "All", "Both", "Several"],
    correctIndex: 0,
    explanation: "'Each' is followed by a singular countable noun ('team').",
    theme: "energy"
  },
  {
    id: "gram-018",
    category: "Quantifiers",
    level: "B1",
    question: "We searched the whole beach, but found _______ sign of rescue.",
    options: ["no", "none", "not", "any"],
    correctIndex: 0,
    explanation: "'No + noun' (no sign of rescue).",
    theme: "beach"
  },
  {
    id: "gram-019",
    category: "Articles",
    level: "A2",
    question: "They built _______ emergency shelter out of palm fronds.",
    options: ["an", "a", "the", "some"],
    correctIndex: 0,
    explanation: "'Emergency' starts with a vowel sound, so it takes 'an'.",
    theme: "shelter"
  },
  {
    id: "gram-020",
    category: "Indefinite Pronouns",
    level: "B1",
    question: "Is there _______ else on this deserted island with us?",
    options: ["anybody", "nobody", "somebody of", "every"],
    correctIndex: 0,
    explanation: "'Is there anybody else...?' standard question form with indefinite pronoun.",
    theme: "island"
  }
];

// Verify database count
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ENGLISH_QUESTIONS };
}
