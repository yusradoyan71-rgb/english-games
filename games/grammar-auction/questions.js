/**
 * GRAMMAR AUCTION — MASTER QUESTION BANK
 * Total: 300 Curated Classroom Sentences (150 Grade 7 + 150 Grade 8)
 * CEFR Level: A2 - B1
 * Format:
 *   id: string (unique)
 *   grade: 7 | 8
 *   topic: string (curriculum category)
 *   difficulty: "easy" | "medium" | "hard"
 *   sentence: string (the auction lot displayed to students)
 *   isCorrect: boolean
 *   corrected: string (clean correction if isCorrect === false, else null)
 *   explanation: string (pedagogical explanation for classroom review)
 */

const GRADE_7_QUESTIONS = [
  // ==========================================
  // TOPIC 1: Present Simple (15 Sentences)
  // Distribution: 8 Correct, 7 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g7_ps_01",
    grade: 7,
    topic: "Present Simple",
    difficulty: "easy",
    sentence: "My brother plays basketball every Saturday morning.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. The third-person singular subject 'My brother' takes the verb with -s ('plays') for a regular routine."
  },
  {
    id: "g7_ps_02",
    grade: 7,
    topic: "Present Simple",
    difficulty: "easy",
    sentence: "She don't like drinking cold milk in the morning.",
    isCorrect: false,
    corrected: "She doesn't like drinking cold milk in the morning.",
    explanation: "Incorrect. With third-person singular subjects ('he', 'she', 'it'), use 'doesn't' instead of 'don't'."
  },
  {
    id: "g7_ps_03",
    grade: 7,
    topic: "Present Simple",
    difficulty: "easy",
    sentence: "Do your parents live in a quiet neighborhood?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Your parents' is plural, so the question correctly starts with 'Do'."
  },
  {
    id: "g7_ps_04",
    grade: 7,
    topic: "Present Simple",
    difficulty: "easy",
    sentence: "He washs his mountain bike after every ride in the forest.",
    isCorrect: false,
    corrected: "He washes his mountain bike after every ride in the forest.",
    explanation: "Incorrect. Verbs ending in -sh add -es in the third person singular: 'washes', not 'washs'."
  },
  {
    id: "g7_ps_05",
    grade: 7,
    topic: "Present Simple",
    difficulty: "easy",
    sentence: "Cats sleep for around twelve to sixteen hours a day.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Cats' is a plural noun, so it takes the base form of the verb ('sleep') to express a general fact."
  },
  {
    id: "g7_ps_06",
    grade: 7,
    topic: "Present Simple",
    difficulty: "medium",
    sentence: "Alex always is late for his first period English class.",
    isCorrect: false,
    corrected: "Alex is always late for his first period English class.",
    explanation: "Incorrect. Adverbs of frequency come AFTER the verb 'to be' ('is always'), but before main verbs."
  },
  {
    id: "g7_ps_07",
    grade: 7,
    topic: "Present Simple",
    difficulty: "medium",
    sentence: "Our science teacher explains difficult concepts very clearly.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Singular subject 'Our science teacher' takes 'explains' with -s in the present simple."
  },
  {
    id: "g7_ps_08",
    grade: 7,
    topic: "Present Simple",
    difficulty: "medium",
    sentence: "Does your sister plays any musical instruments at school?",
    isCorrect: false,
    corrected: "Does your sister play any musical instruments at school?",
    explanation: "Incorrect. When the auxiliary 'does' is used in questions, the main verb stays in the base form ('play', not 'plays')."
  },
  {
    id: "g7_ps_09",
    grade: 7,
    topic: "Present Simple",
    difficulty: "medium",
    sentence: "Water boil at one hundred degrees Celsius under normal atmospheric pressure.",
    isCorrect: false,
    corrected: "Water boils at one hundred degrees Celsius under normal atmospheric pressure.",
    explanation: "Incorrect. Uncountable singular subject 'Water' requires the verb with -s ('boils') for a scientific fact."
  },
  {
    id: "g7_ps_10",
    grade: 7,
    topic: "Present Simple",
    difficulty: "medium",
    sentence: "Liam and his cousin goes fishing near the lake every summer.",
    isCorrect: false,
    corrected: "Liam and his cousin go fishing near the lake every summer.",
    explanation: "Incorrect. 'Liam and his cousin' forms a compound plural subject ('they'), so use the base form 'go'."
  },
  {
    id: "g7_ps_11",
    grade: 7,
    topic: "Present Simple",
    difficulty: "hard",
    sentence: "Neither of my best friends drinks sugary soda on weekdays.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Neither of' takes a singular verb in standard formal English ('drinks')."
  },
  {
    id: "g7_ps_12",
    grade: 7,
    topic: "Present Simple",
    difficulty: "hard",
    sentence: "My uncle rarely doesn't check his emails before breakfast.",
    isCorrect: false,
    corrected: "My uncle rarely checks his emails before breakfast.",
    explanation: "Incorrect. 'Rarely' has a negative meaning, so combining it with 'doesn't' creates an erroneous double negative."
  },
  {
    id: "g7_ps_13",
    grade: 7,
    topic: "Present Simple",
    difficulty: "hard",
    sentence: "How often do the ferry depart from the main terminal?",
    isCorrect: false,
    corrected: "How often does the ferry depart from the main terminal?",
    explanation: "Incorrect. 'The ferry' is singular, so the question requires the auxiliary 'does', not 'do'."
  },
  {
    id: "g7_ps_14",
    grade: 7,
    topic: "Present Simple",
    difficulty: "hard",
    sentence: "The local library closes at six in the evening on weekdays.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Timetables and scheduled opening hours use the present simple ('closes')."
  },
  {
    id: "g7_ps_15",
    grade: 7,
    topic: "Present Simple",
    difficulty: "hard",
    sentence: "Every student in our class has an individual locker.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Every student' is grammatically singular and takes the singular verb 'has'."
  },

  // ==========================================
  // TOPIC 2: Present Continuous (15 Sentences)
  // Distribution: 7 Correct, 8 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g7_pc_01",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "easy",
    sentence: "Look outside! It is raining very heavily.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Look!' indicates an action happening at this exact moment, so present continuous is used."
  },
  {
    id: "g7_pc_02",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "easy",
    sentence: "The students is preparing for their drama festival.",
    isCorrect: false,
    corrected: "The students are preparing for their drama festival.",
    explanation: "Incorrect. 'The students' is plural, so it requires the auxiliary 'are', not 'is'."
  },
  {
    id: "g7_pc_03",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "easy",
    sentence: "I am writing a blog post about my favorite hobbies.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Subject 'I' correctly pairs with 'am' and the -ing verb form."
  },
  {
    id: "g7_pc_04",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "easy",
    sentence: "She is runing towards the school bus right now.",
    isCorrect: false,
    corrected: "She is running towards the school bus right now.",
    explanation: "Incorrect. Short vowel + single consonant verbs like 'run' double the final consonant: 'running'."
  },
  {
    id: "g7_pc_05",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "easy",
    sentence: "Are you listening to the teacher's instructions?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Question word order with present continuous: 'Are' + subject ('you') + verb-ing ('listening')."
  },
  {
    id: "g7_pc_06",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "medium",
    sentence: "David is wanting a large glass of orange juice right now.",
    isCorrect: false,
    corrected: "David wants a large glass of orange juice right now.",
    explanation: "Incorrect. 'Want' is a stative verb describing a desire and is not used in the continuous form."
  },
  {
    id: "g7_pc_07",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "medium",
    sentence: "We are staying with our grandparents this week while our flat is painted.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Present continuous is used for temporary situations happening around the present time."
  },
  {
    id: "g7_pc_08",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "medium",
    sentence: "Why are you make so much noise while the baby is sleeping?",
    isCorrect: false,
    corrected: "Why are you making so much noise while the baby is sleeping?",
    explanation: "Incorrect. Present continuous requires the -ing form: 'making', not 'make'."
  },
  {
    id: "g7_pc_09",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "medium",
    sentence: "Listen! The school choir practices in the auditorium right now.",
    isCorrect: false,
    corrected: "Listen! The school choir is practicing in the auditorium right now.",
    explanation: "Incorrect. 'Listen!' draws attention to an event occurring right now, requiring Present Continuous ('is practicing')."
  },
  {
    id: "g7_pc_10",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "medium",
    sentence: "Right now, I am understanding every rule of the board game.",
    isCorrect: false,
    corrected: "Right now, I understand every rule of the board game.",
    explanation: "Incorrect. 'Understand' is a stative verb of cognition and takes the simple present."
  },
  {
    id: "g7_pc_11",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "hard",
    sentence: "More and more teenagers are reading digital books instead of paper novels.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Present continuous is used for trends and changing situations."
  },
  {
    id: "g7_pc_12",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "hard",
    sentence: "This delicious soup is smelling wonderful across the whole kitchen.",
    isCorrect: false,
    corrected: "This delicious soup smells wonderful across the whole kitchen.",
    explanation: "Incorrect. When 'smell' describes a state or sense perception, it is stative: 'smells'."
  },
  {
    id: "g7_pc_13",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "hard",
    sentence: "Who is knocking persistently on the front door at this hour?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Who' as subject with present continuous: 'is knocking'."
  },
  {
    id: "g7_pc_14",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "hard",
    sentence: "The chef is tasting the sauce to see if it needs more salt.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Here 'tasting' is an intentional physical action performed by the chef, so continuous is correct."
  },
  {
    id: "g7_pc_15",
    grade: 7,
    topic: "Present Continuous",
    difficulty: "hard",
    sentence: "This antique wooden box is containing old family photographs.",
    isCorrect: false,
    corrected: "This antique wooden box contains old family photographs.",
    explanation: "Incorrect. 'Contain' is a stative verb of inclusion and cannot be used in continuous tenses."
  },

  // ==========================================
  // TOPIC 3: Present Simple vs Present Continuous (15 Sentences)
  // Distribution: 8 Correct, 7 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g7_pspc_01",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "easy",
    sentence: "I usually walk to school, but today I am riding my bicycle.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Usually' takes Present Simple (habit) while 'today' takes Present Continuous (temporary deviation)."
  },
  {
    id: "g7_pspc_02",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "easy",
    sentence: "She is drinking tea every afternoon with her grandmother.",
    isCorrect: false,
    corrected: "She drinks tea every afternoon with her grandmother.",
    explanation: "Incorrect. 'Every afternoon' signifies a routine habit, which requires Present Simple ('drinks')."
  },
  {
    id: "g7_pspc_03",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "easy",
    sentence: "Where do you usually spend your winter holidays?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Question about a regular habitual activity uses Present Simple."
  },
  {
    id: "g7_pspc_04",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "easy",
    sentence: "At the moment, our teacher explains the homework assignment.",
    isCorrect: false,
    corrected: "At the moment, our teacher is explaining the homework assignment.",
    explanation: "Incorrect. The time marker 'At the moment' requires Present Continuous ('is explaining')."
  },
  {
    id: "g7_pspc_05",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "easy",
    sentence: "My father works as an engineer in a construction company.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Permanent jobs and long-term occupations use Present Simple."
  },
  {
    id: "g7_pspc_06",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "medium",
    sentence: "Hurry up! Everyone waits for you in the courtyard.",
    isCorrect: false,
    corrected: "Hurry up! Everyone is waiting for you in the courtyard.",
    explanation: "Incorrect. 'Hurry up!' shows that the waiting action is happening right now ('is waiting')."
  },
  {
    id: "g7_pspc_07",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "medium",
    sentence: "Do you know the answer to the fifth question on page ten?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Know' is a stative verb, so it takes Present Simple in questions ('Do you know...')."
  },
  {
    id: "g7_pspc_08",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "medium",
    sentence: "Are you knowing the girl standing next to the cafeteria door?",
    isCorrect: false,
    corrected: "Do you know the girl standing next to the cafeteria door?",
    explanation: "Incorrect. 'Know' is never used in the continuous form; use 'Do you know'."
  },
  {
    id: "g7_pspc_09",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "medium",
    sentence: "Emily speaks three foreign languages fluently.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Permanent skills and abilities are expressed with the Present Simple."
  },
  {
    id: "g7_pspc_10",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "medium",
    sentence: "Why do you wear that thick woolen scarf indoors today?",
    isCorrect: false,
    corrected: "Why are you wearing that thick woolen scarf indoors today?",
    explanation: "Incorrect. An action specific to 'today' (temporary state) requires Present Continuous ('are you wearing')."
  },
  {
    id: "g7_pspc_11",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "hard",
    sentence: "He is having two younger brothers and a pet rabbit.",
    isCorrect: false,
    corrected: "He has two younger brothers and a pet rabbit.",
    explanation: "Incorrect. When 'have' expresses possession or family relationships, it is stative ('has', not 'is having')."
  },
  {
    id: "g7_pspc_12",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "hard",
    sentence: "We are having lunch on the balcony because the weather is lovely.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Here 'having lunch' means 'eating lunch' (an active event in progress), so continuous is appropriate."
  },
  {
    id: "g7_pspc_13",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "hard",
    sentence: "I am thinking that learning foreign languages opens many great career opportunities.",
    isCorrect: false,
    corrected: "I think that learning foreign languages opens many great career opportunities.",
    explanation: "Incorrect. When 'think' expresses an opinion or personal belief, it is a stative verb in Present Simple ('I think')."
  },
  {
    id: "g7_pspc_14",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "hard",
    sentence: "Be quiet, please! I think about a complicated math problem.",
    isCorrect: false,
    corrected: "Be quiet, please! I am thinking about a complicated math problem.",
    explanation: "Incorrect. When 'think' represents active mental concentration in progress, use Present Continuous ('am thinking')."
  },
  {
    id: "g7_pspc_15",
    grade: 7,
    topic: "Present Simple vs Present Continuous",
    difficulty: "hard",
    sentence: "My grandparents live in Izmir, but they are staying with us this month.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Permanent residence takes Present Simple ('live'); temporary stay takes Present Continuous ('are staying')."
  },

  // ==========================================
  // TOPIC 4: Past Simple (15 Sentences)
  // Distribution: 7 Correct, 8 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g7_past_01",
    grade: 7,
    topic: "Past Simple",
    difficulty: "easy",
    sentence: "We visited our cousins in Ankara two weeks ago.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Visited' is the correct past simple form with the time marker 'two weeks ago'."
  },
  {
    id: "g7_past_02",
    grade: 7,
    topic: "Past Simple",
    difficulty: "easy",
    sentence: "She didn't went to school yesterday because she had a sore throat.",
    isCorrect: false,
    corrected: "She didn't go to school yesterday because she had a sore throat.",
    explanation: "Incorrect. After the auxiliary 'didn't', the main verb must be in its base form ('go', not 'went')."
  },
  {
    id: "g7_past_03",
    grade: 7,
    topic: "Past Simple",
    difficulty: "easy",
    sentence: "They bought a new board game for the weekend party.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Bought' is the correct irregular past tense of 'buy'."
  },
  {
    id: "g7_past_04",
    grade: 7,
    topic: "Past Simple",
    difficulty: "easy",
    sentence: "Did you saw the solar eclipse last Wednesday?",
    isCorrect: false,
    corrected: "Did you see the solar eclipse last Wednesday?",
    explanation: "Incorrect. In questions with 'Did', the main verb returns to the base form ('see', not 'saw')."
  },
  {
    id: "g7_past_05",
    grade: 7,
    topic: "Past Simple",
    difficulty: "easy",
    sentence: "The train arrived at the platform ten minutes late.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Regular verb 'arrive' adds -d in the past simple ('arrived')."
  },
  {
    id: "g7_past_06",
    grade: 7,
    topic: "Past Simple",
    difficulty: "medium",
    sentence: "My grandfather founded this small bookstore in 1985.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Founded' (established) is the past tense of 'found', used with a specific past year."
  },
  {
    id: "g7_past_07",
    grade: 7,
    topic: "Past Simple",
    difficulty: "medium",
    sentence: "He catched three large fish during the morning boat trip.",
    isCorrect: false,
    corrected: "He caught three large fish during the morning boat trip.",
    explanation: "Incorrect. 'Catch' is an irregular verb; its past tense is 'caught', not 'catched'."
  },
  {
    id: "g7_past_08",
    grade: 7,
    topic: "Past Simple",
    difficulty: "medium",
    sentence: "Why were you absent from the volleyball practice yesterday?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Past simple of 'be' with subject 'you' is 'were'."
  },
  {
    id: "g7_past_09",
    grade: 7,
    topic: "Past Simple",
    difficulty: "medium",
    sentence: "The teacher writed the instructions clearly on the whiteboard.",
    isCorrect: false,
    corrected: "The teacher wrote the instructions clearly on the whiteboard.",
    explanation: "Incorrect. The past simple form of 'write' is 'wrote', not 'writed'."
  },
  {
    id: "g7_past_10",
    grade: 7,
    topic: "Past Simple",
    difficulty: "medium",
    sentence: "She didn't ate any breakfast before rushing to catch the bus.",
    isCorrect: false,
    corrected: "She didn't eat any breakfast before rushing to catch the bus.",
    explanation: "Incorrect. 'Didn't' must be followed by the base verb 'eat', not 'ate'."
  },
  {
    id: "g7_past_11",
    grade: 7,
    topic: "Past Simple",
    difficulty: "hard",
    sentence: "Last night, I lay on the grass and watched the shooting stars.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Lay' is the correct past tense of the intransitive verb 'lie' (to recline)."
  },
  {
    id: "g7_past_12",
    grade: 7,
    topic: "Past Simple",
    difficulty: "hard",
    sentence: "The price of vegetables rised dramatically after the heavy storm.",
    isCorrect: false,
    corrected: "The price of vegetables rose dramatically after the heavy storm.",
    explanation: "Incorrect. The past tense of the irregular verb 'rise' is 'rose', not 'rised'."
  },
  {
    id: "g7_past_13",
    grade: 7,
    topic: "Past Simple",
    difficulty: "hard",
    sentence: "Did anyone found the missing car keys on the playground bench?",
    isCorrect: false,
    corrected: "Did anyone find the missing car keys on the playground bench?",
    explanation: "Incorrect. The auxiliary 'Did' requires the bare infinitive 'find', not 'found'."
  },
  {
    id: "g7_past_14",
    grade: 7,
    topic: "Past Simple",
    difficulty: "hard",
    sentence: "She blew out all the candles on her birthday cake in one breath.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Blew' is the correct past simple of the irregular verb 'blow'."
  },
  {
    id: "g7_past_15",
    grade: 7,
    topic: "Past Simple",
    difficulty: "hard",
    sentence: "He choosed the blue backpack instead of the red one.",
    isCorrect: false,
    corrected: "He chose the blue backpack instead of the red one.",
    explanation: "Incorrect. The irregular past tense of 'choose' is 'chose', not 'choosed'."
  },

  // ==========================================
  // TOPIC 5: Past Continuous (15 Sentences)
  // Distribution: 8 Correct, 7 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g7_pcnt_01",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "easy",
    sentence: "I was doing my homework when the electricity went out.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Past continuous ('was doing') describes the ongoing background activity interrupted by past simple."
  },
  {
    id: "g7_pcnt_02",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "easy",
    sentence: "They was playing football in the school garden at five o'clock.",
    isCorrect: false,
    corrected: "They were playing football in the school garden at five o'clock.",
    explanation: "Incorrect. Plural subject 'They' takes 'were', not 'was'."
  },
  {
    id: "g7_pcnt_03",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "easy",
    sentence: "What were you doing at eight o'clock yesterday evening?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Standard past continuous question format: 'were' + subject ('you') + verb-ing."
  },
  {
    id: "g7_pcnt_04",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "easy",
    sentence: "She were walking her dog in the park when it started to snow.",
    isCorrect: false,
    corrected: "She was walking her dog in the park when it started to snow.",
    explanation: "Incorrect. Singular subject 'She' requires 'was', not 'were'."
  },
  {
    id: "g7_pcnt_05",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "easy",
    sentence: "The birds was singing cheerfully as the morning sun rose.",
    isCorrect: false,
    corrected: "The birds were singing cheerfully as the morning sun rose.",
    explanation: "Incorrect. Plural subject 'The birds' requires 'were singing', not 'was singing'."
  },
  {
    id: "g7_pcnt_06",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "medium",
    sentence: "While my mother was cooking dinner, my father was setting the table.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Two actions happening simultaneously in the past can both be in the past continuous."
  },
  {
    id: "g7_pcnt_07",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "medium",
    sentence: "At nine o'clock, I was knowing all the answers to the quiz.",
    isCorrect: false,
    corrected: "At nine o'clock, I knew all the answers to the quiz.",
    explanation: "Incorrect. 'Know' is a stative verb and is not used in past continuous; use past simple 'knew'."
  },
  {
    id: "g7_pcnt_08",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "medium",
    sentence: "Tom broke his ankle while he was skateboarding down the hill.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Interrupted action: past simple event ('broke') happened during past continuous ('was skateboarding')."
  },
  {
    id: "g7_pcnt_09",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "medium",
    sentence: "We were not pay attention when the teacher announced the test date.",
    isCorrect: false,
    corrected: "We were not paying attention when the teacher announced the test date.",
    explanation: "Incorrect. Past continuous requires the -ing form: 'paying attention', not 'pay'."
  },
  {
    id: "g7_pcnt_10",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "medium",
    sentence: "The wind was blowing fiercely throughout the entire night.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Was blowing' correctly describes an ongoing natural event in the past."
  },
  {
    id: "g7_pcnt_11",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "hard",
    sentence: "While I was wanting to go to the cinema, my friend preferred the bowling alley.",
    isCorrect: false,
    corrected: "While I wanted to go to the cinema, my friend preferred the bowling alley.",
    explanation: "Incorrect. 'Want' is a stative verb and cannot take the past continuous ('was wanting')."
  },
  {
    id: "g7_pcnt_12",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "hard",
    sentence: "The detective was observing the suspects as they entered the building.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Was observing' is an active physical action carried out in the past."
  },
  {
    id: "g7_pcnt_13",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "hard",
    sentence: "Why were the children crying so loudly when you opened the door?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Plural subject 'the children' takes 'were crying' in question word order."
  },
  {
    id: "g7_pcnt_14",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "hard",
    sentence: "The old radio was making strange noises before it suddenly stopped working.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Was making strange noises' describes an activity leading up to a sudden stopping point."
  },
  {
    id: "g7_pcnt_15",
    grade: 7,
    topic: "Past Continuous",
    difficulty: "hard",
    sentence: "When the phone rang, I were washing the dirty dishes in the kitchen.",
    isCorrect: false,
    corrected: "When the phone rang, I was washing the dirty dishes in the kitchen.",
    explanation: "Incorrect. Subject 'I' takes 'was', not 'were'."
  },

  // ==========================================
  // TOPIC 6: Past Perfect (15 Sentences)
  // Distribution: 7 Correct, 8 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g7_pp_01",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "easy",
    sentence: "When we arrived at the cinema, the movie had already started.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Had started' expresses an action completed before another past event ('arrived')."
  },
  {
    id: "g7_pp_02",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "easy",
    sentence: "She had never saw such a gigantic waterfall before visiting Antalya.",
    isCorrect: false,
    corrected: "She had never seen such a gigantic waterfall before visiting Antalya.",
    explanation: "Incorrect. The past perfect requires the past participle ('seen'), not the simple past ('saw')."
  },
  {
    id: "g7_pp_03",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "easy",
    sentence: "I was very hungry because I had not eaten any lunch.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Had not eaten' explains the past cause of being hungry."
  },
  {
    id: "g7_pp_04",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "easy",
    sentence: "By the time the bell rang, all students have packed their bags.",
    isCorrect: false,
    corrected: "By the time the bell rang, all students had packed their bags.",
    explanation: "Incorrect. In a past narrative context, use the past perfect 'had packed', not present perfect 'have packed'."
  },
  {
    id: "g7_pp_05",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "easy",
    sentence: "He realized he had forgotten his wallet at home.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Forgetting the wallet happened prior to realizing it in the past."
  },
  {
    id: "g7_pp_06",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "medium",
    sentence: "After they had finished their project, they went out for ice cream.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'After' introduces the earlier completed event in the past perfect."
  },
  {
    id: "g7_pp_07",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "medium",
    sentence: "The train had left before we have reached the station platform.",
    isCorrect: false,
    corrected: "The train had left before we reached the station platform.",
    explanation: "Incorrect. In past time clauses with 'before', use the past simple ('reached'), not 'have reached'."
  },
  {
    id: "g7_pp_08",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "medium",
    sentence: "Had you studied English before you moved to London?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Past perfect question: 'Had' + subject + past participle ('studied')."
  },
  {
    id: "g7_pp_09",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "medium",
    sentence: "She didn't pass the exam because she had not revision properly.",
    isCorrect: false,
    corrected: "She didn't pass the exam because she had not revised properly.",
    explanation: "Incorrect. 'Revision' is a noun; past perfect requires the past participle verb 'revised'."
  },
  {
    id: "g7_pp_10",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "medium",
    sentence: "They had lived in Germany for five years before returning to Turkey.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Past perfect describes a state that continued up to a specific past point in time."
  },
  {
    id: "g7_pp_11",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "hard",
    sentence: "Scarcely had she stepped inside the house when the phone rang.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Formal inversion with 'Scarcely had...' followed by 'when' is grammatically correct."
  },
  {
    id: "g7_pp_12",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "hard",
    sentence: "Until last month, Mark had never rode on an airplane.",
    isCorrect: false,
    corrected: "Until last month, Mark had never ridden on an airplane.",
    explanation: "Incorrect. The past participle of 'ride' is 'ridden', not 'rode'."
  },
  {
    id: "g7_pp_13",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "hard",
    sentence: "By sunset, the rescue team had found all three lost hikers.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'By sunset' marks a past deadline, which pairs with past perfect 'had found'."
  },
  {
    id: "g7_pp_14",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "hard",
    sentence: "She told me she had wrote three letters of recommendation for him.",
    isCorrect: false,
    corrected: "She told me she had written three letters of recommendation for him.",
    explanation: "Incorrect. Past participle of 'write' is 'written', not 'wrote'."
  },
  {
    id: "g7_pp_15",
    grade: 7,
    topic: "Past Perfect",
    difficulty: "hard",
    sentence: "Before yesterday's match, our team had never lose a game on home soil.",
    isCorrect: false,
    corrected: "Before yesterday's match, our team had never lost a game on home soil.",
    explanation: "Incorrect. Past perfect requires the past participle 'lost', not base form 'lose'."
  },

  // ==========================================
  // TOPIC 7: Mixed Past Tenses (15 Sentences)
  // Distribution: 8 Correct, 7 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g7_mpt_01",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "easy",
    sentence: "While I was studying in my room, my sister knocked on the door.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Ongoing action ('was studying') correctly interrupted by sudden action ('knocked')."
  },
  {
    id: "g7_mpt_02",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "easy",
    sentence: "When we got to the party, Peter was already went home.",
    isCorrect: false,
    corrected: "When we got to the party, Peter had already gone home.",
    explanation: "Incorrect. An earlier completed action requires past perfect ('had already gone'), not 'was went'."
  },
  {
    id: "g7_mpt_03",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "easy",
    sentence: "It was raining, so we took our umbrellas and walked to the bus station.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Past continuous describes weather background, followed by sequential past simple actions."
  },
  {
    id: "g7_mpt_04",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "easy",
    sentence: "Yesterday at four o'clock, she watched TV when her friend called.",
    isCorrect: false,
    corrected: "Yesterday at four o'clock, she was watching TV when her friend called.",
    explanation: "Incorrect. An action in progress at a specific past time interrupted by a call requires Past Continuous ('was watching')."
  },
  {
    id: "g7_mpt_05",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "easy",
    sentence: "We were seeing a rare owl while we were camping in the national forest.",
    isCorrect: false,
    corrected: "We saw a rare owl while we were camping in the national forest.",
    explanation: "Incorrect. Spotting or seeing something suddenly is an instantaneous perception event that takes Past Simple ('saw'), not continuous."
  },
  {
    id: "g7_mpt_06",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "medium",
    sentence: "Maria felt relieved because she had passed her driving test that morning.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Felt' (past simple) followed by earlier cause in past perfect ('had passed')."
  },
  {
    id: "g7_mpt_07",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "medium",
    sentence: "He was walking along the beach when he had found an antique coin.",
    isCorrect: false,
    corrected: "He was walking along the beach when he found an antique coin.",
    explanation: "Incorrect. The interrupting event after 'when' takes the past simple ('found'), not past perfect."
  },
  {
    id: "g7_mpt_08",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "medium",
    sentence: "As soon as the fire alarm rang, everyone left the building calmly.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Two consecutive past events in immediate sequence both use the past simple."
  },
  {
    id: "g7_mpt_09",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "medium",
    sentence: "When the teacher came in, the boys were fighting and someone broke a window.",
    isCorrect: false,
    corrected: "When the teacher came in, the boys were fighting and someone had broken a window.",
    explanation: "Incorrect. The broken window occurred before the teacher arrived, so it requires past perfect ('had broken')."
  },
  {
    id: "g7_mpt_10",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "medium",
    sentence: "She opened her school bag and suddenly discovered she had lost her student card.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Sequential actions in past simple ('opened', 'discovered') followed by earlier event in past perfect ('had lost')."
  },
  {
    id: "g7_mpt_11",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "hard",
    sentence: "The pilot landed the airplane safely although one of the engines had stopped working.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. The engine failure occurred prior to landing, so past perfect ('had stopped') is accurate."
  },
  {
    id: "g7_mpt_12",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "hard",
    sentence: "While we had had dinner, the doorbell rang twice.",
    isCorrect: false,
    corrected: "While we were having dinner, the doorbell rang twice.",
    explanation: "Incorrect. 'While' introduces the ongoing background activity, which needs past continuous ('were having')."
  },
  {
    id: "g7_mpt_13",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "hard",
    sentence: "By the time the police had arrived, the thieves escaped through the back entrance.",
    isCorrect: false,
    corrected: "By the time the police arrived, the thieves had escaped through the back entrance.",
    explanation: "Incorrect. The clause with 'by the time' takes past simple ('arrived'), and the earlier escape takes past perfect ('had escaped')."
  },
  {
    id: "g7_mpt_14",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "hard",
    sentence: "He apologized because he had accidentally broken my favorite fountain pen.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Apologized' (past simple) refers back to the earlier accidental action ('had broken')."
  },
  {
    id: "g7_mpt_15",
    grade: 7,
    topic: "Mixed Past Tenses",
    difficulty: "hard",
    sentence: "The museum was crowded because a famous exhibition had opened the previous day.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Reason for the past condition was an earlier opening event in the past perfect."
  },

  // ==========================================
  // TOPIC 8: Used to / Would / Be used to (15 Sentences)
  // Distribution: 7 Correct, 8 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g7_ut_01",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "easy",
    sentence: "I used to ride my bike to primary school every single day.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Used to' + base verb ('ride') describes a past habit that no longer happens."
  },
  {
    id: "g7_ut_02",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "easy",
    sentence: "He didn't used to like broccoli, but now he loves it.",
    isCorrect: false,
    corrected: "He didn't use to like broccoli, but now he loves it.",
    explanation: "Incorrect. After 'didn't', the spelling is 'use to' without the final -d."
  },
  {
    id: "g7_ut_03",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "easy",
    sentence: "Did you use to play the violin when you were seven years old?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Question format with 'Did... use to' (without -d) + base verb."
  },
  {
    id: "g7_ut_04",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "easy",
    sentence: "My grandparents used to living in a tiny wooden cottage.",
    isCorrect: false,
    corrected: "My grandparents used to live in a tiny wooden cottage.",
    explanation: "Incorrect. Past habitual 'used to' takes the bare infinitive ('live', not 'living')."
  },
  {
    id: "g7_ut_05",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "easy",
    sentence: "There used to be a grand cinema on this street corner.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'There used to be' correctly refers to a past state that no longer exists."
  },
  {
    id: "g7_ut_06",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "medium",
    sentence: "Every summer, my grandfather would take us swimming in the cool river.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Would' + base verb expresses repeated past actions in a nostalgic context."
  },
  {
    id: "g7_ut_07",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "medium",
    sentence: "When she was little, she would have long blonde curls.",
    isCorrect: false,
    corrected: "When she was little, she used to have long blonde curls.",
    explanation: "Incorrect. 'Would' cannot describe past states (such as having curls); use 'used to' for past states."
  },
  {
    id: "g7_ut_08",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "medium",
    sentence: "Are you used to waking up early for the new semester?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Be used to' (accustomed to) takes a gerund ('waking up') or noun."
  },
  {
    id: "g7_ut_09",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "medium",
    sentence: "He is slowly getting used to live in a noisy crowded city.",
    isCorrect: false,
    corrected: "He is slowly getting used to living in a noisy crowded city.",
    explanation: "Incorrect. 'Get used to' requires a gerund ('living', not 'live')."
  },
  {
    id: "g7_ut_10",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "medium",
    sentence: "We never used to lock our front doors thirty years ago.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Never used to' + base verb ('lock') is natural and grammatically correct."
  },
  {
    id: "g7_ut_11",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "hard",
    sentence: "As an experienced pilot, Captain Harris is used to flying through turbulent weather.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Is used to' (is accustomed to) correctly takes the gerund 'flying'."
  },
  {
    id: "g7_ut_12",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "hard",
    sentence: "My father would be very shy when he was a university student.",
    isCorrect: false,
    corrected: "My father used to be very shy when he was a university student.",
    explanation: "Incorrect. 'Be shy' is a stative condition; 'would' is only used for repeated past actions, not states."
  },
  {
    id: "g7_ut_13",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "hard",
    sentence: "Did they used to spend their summer vacations in Bodrum?",
    isCorrect: false,
    corrected: "Did they use to spend their summer vacations in Bodrum?",
    explanation: "Incorrect. With auxiliary 'Did', drop the -d: 'Did they use to spend'."
  },
  {
    id: "g7_ut_14",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "hard",
    sentence: "Whenever we visited grandma, she would bake warm cinnamon rolls for us.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Would bake' describes a fond repeated past activity."
  },
  {
    id: "g7_ut_15",
    grade: 7,
    topic: "Used to / Would / Be used to",
    difficulty: "hard",
    sentence: "I am not used to wear heavy formal suits in hot weather.",
    isCorrect: false,
    corrected: "I am not used to wearing heavy formal suits in hot weather.",
    explanation: "Incorrect. 'Be used to' requires the -ing form ('wearing')."
  },

  // ==========================================
  // TOPIC 9: Gerunds and Infinitives (15 Sentences)
  // Distribution: 8 Correct, 7 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g7_gi_01",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "easy",
    sentence: "Liam enjoys playing chess during the lunch break.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. The verb 'enjoy' is always followed by a gerund ('playing')."
  },
  {
    id: "g7_gi_02",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "easy",
    sentence: "She decided studying medicine at Istanbul University.",
    isCorrect: false,
    corrected: "She decided to study medicine at Istanbul University.",
    explanation: "Incorrect. 'Decide' must be followed by a to-infinitive ('to study')."
  },
  {
    id: "g7_gi_03",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "easy",
    sentence: "I want to invite all my classmates to my birthday party.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Want' takes a to-infinitive ('to invite')."
  },
  {
    id: "g7_gi_04",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "easy",
    sentence: "He avoided to answer the teacher's direct question.",
    isCorrect: false,
    corrected: "He avoided answering the teacher's direct question.",
    explanation: "Incorrect. The verb 'avoid' is followed by a gerund ('answering')."
  },
  {
    id: "g7_gi_05",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "easy",
    sentence: "Swimming in the morning is great exercise for your heart.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. A gerund ('Swimming') can function as the subject of a sentence."
  },
  {
    id: "g7_gi_06",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "medium",
    sentence: "The doctor advised him to drink at least two liters of water daily.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Advise someone to do something' uses person + to-infinitive."
  },
  {
    id: "g7_gi_07",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "medium",
    sentence: "I look forward to see you at the school graduation ceremony.",
    isCorrect: false,
    corrected: "I look forward to seeing you at the school graduation ceremony.",
    explanation: "Incorrect. In the phrasal verb 'look forward to', 'to' is a preposition and takes a gerund ('seeing')."
  },
  {
    id: "g7_gi_08",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "medium",
    sentence: "He promised to return the borrowed library books on Monday.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Promise' is followed by a to-infinitive ('to return')."
  },
  {
    id: "g7_gi_09",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "medium",
    sentence: "Do you mind to close the window because it's a bit chilly?",
    isCorrect: false,
    corrected: "Do you mind closing the window because it's a bit chilly?",
    explanation: "Incorrect. 'Mind' is followed by a gerund: 'Do you mind closing'."
  },
  {
    id: "g7_gi_10",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "medium",
    sentence: "They finished to paint the classroom walls before noon.",
    isCorrect: false,
    corrected: "They finished painting the classroom walls before noon.",
    explanation: "Incorrect. The verb 'finish' is followed by a gerund ('painting'), not a to-infinitive."
  },
  {
    id: "g7_gi_11",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "hard",
    sentence: "Please remember to lock the laboratory door when you leave.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Remember to do something' means not forgetting to perform a future duty."
  },
  {
    id: "g7_gi_12",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "hard",
    sentence: "I clearly remember to see that movie with my family three years ago.",
    isCorrect: false,
    corrected: "I clearly remember seeing that movie with my family three years ago.",
    explanation: "Incorrect. Remembering a past memory requires the gerund ('remember seeing')."
  },
  {
    id: "g7_gi_13",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "hard",
    sentence: "After walking for two hours in the heat, we stopped to drink some water.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Stop to do something' indicates pausing an action in order to perform another purpose."
  },
  {
    id: "g7_gi_14",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "hard",
    sentence: "She can't help to laugh whenever her kitten chases its own tail.",
    isCorrect: false,
    corrected: "She can't help laughing whenever her kitten chases its own tail.",
    explanation: "Incorrect. The idiom 'can't help' is followed by a gerund ('laughing')."
  },
  {
    id: "g7_gi_15",
    grade: 7,
    topic: "Gerunds and Infinitives",
    difficulty: "hard",
    sentence: "He refused giving the secret password to the unauthorized caller.",
    isCorrect: false,
    corrected: "He refused to give the secret password to the unauthorized caller.",
    explanation: "Incorrect. 'Refuse' must be followed by a to-infinitive ('to give')."
  },

  // ==========================================
  // TOPIC 10: Modals and Mixed Grammar (15 Sentences)
  // Distribution: 7 Correct, 8 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g7_mod_01",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "easy",
    sentence: "You must to wear a safety helmet when riding a bicycle.",
    isCorrect: false,
    corrected: "You must wear a safety helmet when riding a bicycle.",
    explanation: "Incorrect. Modal auxiliary 'must' is followed by a bare infinitive ('wear', not 'to wear')."
  },
  {
    id: "g7_mod_02",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "easy",
    sentence: "Can you speak Spanish fluently?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Can' + subject + base verb ('speak') expresses ability."
  },
  {
    id: "g7_mod_03",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "easy",
    sentence: "Students should listen carefully when the teacher speaks.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Should' + base verb gives advice or recommendations."
  },
  {
    id: "g7_mod_04",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "easy",
    sentence: "She cans swim across the entire lake without resting.",
    isCorrect: false,
    corrected: "She can swim across the entire lake without resting.",
    explanation: "Incorrect. Modal verbs like 'can' do not add -s in the third person singular."
  },
  {
    id: "g7_mod_05",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "easy",
    sentence: "You mustn't touch the electrical equipment with wet hands.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Mustn't' indicates a strong prohibition for safety."
  },
  {
    id: "g7_mod_06",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "medium",
    sentence: "We don't have to wear school uniforms on casual Fridays.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Don't have to' correctly expresses lack of obligation (it is optional)."
  },
  {
    id: "g7_mod_07",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "medium",
    sentence: "Tomorrow is Sunday, so I mustn't wake up early.",
    isCorrect: false,
    corrected: "Tomorrow is Sunday, so I don't have to wake up early.",
    explanation: "Incorrect. For absence of obligation, use 'don't have to'. 'Mustn't' implies it is forbidden."
  },
  {
    id: "g7_mod_08",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "medium",
    sentence: "Could you please pass me the salt and pepper?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Could you please...' is a polite request form followed by bare infinitive."
  },
  {
    id: "g7_mod_09",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "medium",
    sentence: "He shoulds study harder if he wants to pass the science test.",
    isCorrect: false,
    corrected: "He should study harder if he wants to pass the science test.",
    explanation: "Incorrect. Modals do not take -s: 'should', never 'shoulds'."
  },
  {
    id: "g7_mod_10",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "medium",
    sentence: "She hasn't got many friends in her new neighborhood, have she?",
    isCorrect: false,
    corrected: "She hasn't got many friends in her new neighborhood, has she?",
    explanation: "Incorrect. Question tag for 'She hasn't' is 'has she', matching the third-person subject."
  },
  {
    id: "g7_mod_11",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "hard",
    sentence: "You ought to apologize for arriving so late to the meeting.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. The semi-modal 'ought to' is followed by a base verb ('apologize')."
  },
  {
    id: "g7_mod_12",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "hard",
    sentence: "You ought wear a warm coat because it is freezing outside.",
    isCorrect: false,
    corrected: "You ought to wear a warm coat because it is freezing outside.",
    explanation: "Incorrect. Unlike other modals, 'ought' must include 'to' before the verb: 'ought to wear'."
  },
  {
    id: "g7_mod_13",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "hard",
    sentence: "There is little hope of finding the lost keys in the thick snow.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Little' correctly modifies uncountable noun 'hope' to indicate almost none."
  },
  {
    id: "g7_mod_14",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "hard",
    sentence: "There are much reasons why reading daily benefits the brain.",
    isCorrect: false,
    corrected: "There are many reasons why reading daily benefits the brain.",
    explanation: "Incorrect. Plural countable noun 'reasons' requires 'many', not 'much'."
  },
  {
    id: "g7_mod_15",
    grade: 7,
    topic: "Modals and Mixed Grammar",
    difficulty: "hard",
    sentence: "May I borrow your English dictionary for ten minutes?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'May I' is a formal, polite modal request for permission."
  }
];

const GRADE_8_QUESTIONS = [
  // ==========================================
  // TOPIC 1: Present and Past Tenses (15 Sentences)
  // Distribution: 8 Correct, 7 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g8_tenses_01",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "easy",
    sentence: "She has lived in Bursa since she was five years old.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Present perfect ('has lived') with 'since' indicates an action starting in the past and continuing now."
  },
  {
    id: "g8_tenses_02",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "easy",
    sentence: "I have seen that action movie yesterday with my cousins.",
    isCorrect: false,
    corrected: "I saw that action movie yesterday with my cousins.",
    explanation: "Incorrect. Definite past time expressions like 'yesterday' require Past Simple ('saw'), not Present Perfect."
  },
  {
    id: "g8_tenses_03",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "easy",
    sentence: "Have you ever traveled to another country by ship?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Have you ever' + past participle is used to ask about life experiences."
  },
  {
    id: "g8_tenses_04",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "easy",
    sentence: "He has already wrote three chapters of his fantasy novel.",
    isCorrect: false,
    corrected: "He has already written three chapters of his fantasy novel.",
    explanation: "Incorrect. Present perfect requires the past participle 'written', not the past simple 'wrote'."
  },
  {
    id: "g8_tenses_05",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "easy",
    sentence: "We haven't received any reply to our email yet.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Yet' is placed at the end of negative present perfect sentences."
  },
  {
    id: "g8_tenses_06",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "medium",
    sentence: "How long are you knowing your current English teacher?",
    isCorrect: false,
    corrected: "How long have you known your current English teacher?",
    explanation: "Incorrect. For an ongoing state starting in the past, use Present Perfect ('have you known'), not continuous."
  },
  {
    id: "g8_tenses_07",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "medium",
    sentence: "My elder brother graduated from university two years ago.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Two years ago' marks a completed past event, requiring Past Simple 'graduated'."
  },
  {
    id: "g8_tenses_08",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "medium",
    sentence: "She has been working on this science experiment since three hours.",
    isCorrect: false,
    corrected: "She has been working on this science experiment for three hours.",
    explanation: "Incorrect. For a duration of time ('three hours'), use 'for', not 'since'."
  },
  {
    id: "g8_tenses_09",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "medium",
    sentence: "I have known Samuel since we met in the kindergarten sandbox.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Since' introduces the starting point in the past simple ('we met')."
  },
  {
    id: "g8_tenses_10",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "medium",
    sentence: "They have gone to Italy last summer and visited Rome.",
    isCorrect: false,
    corrected: "They went to Italy last summer and visited Rome.",
    explanation: "Incorrect. 'Last summer' specifies a definite finished time period, requiring Past Simple 'went'."
  },
  {
    id: "g8_tenses_11",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "hard",
    sentence: "This is the third time she has lost her locker key this term.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Structures with 'This is the first/second/third time...' take the Present Perfect."
  },
  {
    id: "g8_tenses_12",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "hard",
    sentence: "Shakespeare has written thirty-seven plays during his lifetime.",
    isCorrect: false,
    corrected: "Shakespeare wrote thirty-seven plays during his lifetime.",
    explanation: "Incorrect. Deceased historical figures cannot perform further actions; use Past Simple 'wrote'."
  },
  {
    id: "g8_tenses_13",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "hard",
    sentence: "Scientists have recently discover a new species of deep-sea jellyfish.",
    isCorrect: false,
    corrected: "Scientists have recently discovered a new species of deep-sea jellyfish.",
    explanation: "Incorrect. Present perfect requires the past participle 'discovered', not the base form 'discover'."
  },
  {
    id: "g8_tenses_14",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "hard",
    sentence: "It has been raining continuously for five o'clock this morning.",
    isCorrect: false,
    corrected: "It has been raining continuously since five o'clock this morning.",
    explanation: "Incorrect. A specific starting point in time ('five o'clock') requires 'since', not 'for'."
  },
  {
    id: "g8_tenses_15",
    grade: 8,
    topic: "Present and Past Tenses",
    difficulty: "hard",
    sentence: "We haven't seen each other since we graduated from middle school.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Negative present perfect correctly paired with 'since' clause in the past simple."
  },

  // ==========================================
  // TOPIC 2: Past Simple / Past Continuous (15 Sentences)
  // Distribution: 7 Correct, 8 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g8_pspc_01",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "easy",
    sentence: "While my sister was sleeping, I finished my English project.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'While' introduces the background duration ('was sleeping'), during which an action finished."
  },
  {
    id: "g8_pspc_02",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "easy",
    sentence: "We was walking through the park when the sudden storm broke.",
    isCorrect: false,
    corrected: "We were walking through the park when the sudden storm broke.",
    explanation: "Incorrect. Subject 'We' requires 'were', not 'was'."
  },
  {
    id: "g8_pspc_03",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "easy",
    sentence: "The lights suddenly went out while we were watching a horror film.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Interruption: past simple event ('went out') occurred during past continuous ('were watching')."
  },
  {
    id: "g8_pspc_04",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "easy",
    sentence: "What was you doing when the fire alarm began to ring?",
    isCorrect: false,
    corrected: "What were you doing when the fire alarm began to ring?",
    explanation: "Incorrect. Subject 'you' must take 'were', not 'was'."
  },
  {
    id: "g8_pspc_05",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "easy",
    sentence: "She dropped her glass because her hands were shaking from the cold.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Dropped' (past simple) caused by continuous background physical state ('were shaking')."
  },
  {
    id: "g8_pspc_06",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "medium",
    sentence: "As he was crossing the street, he was dropping his wallet on the asphalt.",
    isCorrect: false,
    corrected: "As he was crossing the street, he dropped his wallet on the asphalt.",
    explanation: "Incorrect. Dropping a wallet is an instantaneous event that takes Past Simple ('dropped'), not continuous."
  },
  {
    id: "g8_pspc_07",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "medium",
    sentence: "While the chef was chopping onions, his assistant was preparing the dessert.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Simultaneous parallel actions in progress in the past both use Past Continuous."
  },
  {
    id: "g8_pspc_08",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "medium",
    sentence: "When you called me, I drove on the highway in heavy traffic.",
    isCorrect: false,
    corrected: "When you called me, I was driving on the highway in heavy traffic.",
    explanation: "Incorrect. The activity in progress at the moment of the call requires Past Continuous ('was driving')."
  },
  {
    id: "g8_pspc_09",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "medium",
    sentence: "The audience was applauding enthusiastic as the final curtain fell.",
    isCorrect: false,
    corrected: "The audience was applauding enthusiastically as the final curtain fell.",
    explanation: "Incorrect. Modifying the action verb 'applauding' requires the adverb 'enthusiastically', not adjective 'enthusiastic'."
  },
  {
    id: "g8_pspc_10",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "medium",
    sentence: "He was understanding the mathematics lesson until the teacher introduced calculus.",
    isCorrect: false,
    corrected: "He understood the mathematics lesson until the teacher introduced calculus.",
    explanation: "Incorrect. 'Understand' is a stative verb and cannot be used in the continuous form; use 'understood'."
  },
  {
    id: "g8_pspc_11",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "hard",
    sentence: "Just as the plane was touching down, a flock of birds flew across the runway.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Was touching down' describes the precise moment of landing as birds flew across."
  },
  {
    id: "g8_pspc_12",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "hard",
    sentence: "The thief sneak into the jewelry shop while the night guard was drinking coffee.",
    isCorrect: false,
    corrected: "The thief sneaked into the jewelry shop while the night guard was drinking coffee.",
    explanation: "Incorrect. Past tense of 'sneak' is 'sneaked' (or 'snuck'), not base form 'sneak'."
  },
  {
    id: "g8_pspc_13",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "hard",
    sentence: "While everyone else was panicking, the teacher remained remarkably calm.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Past continuous ('was panicking') contrasts with a state in past simple ('remained')."
  },
  {
    id: "g8_pspc_14",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "hard",
    sentence: "She were listening to classical music when she heard someone knocking.",
    isCorrect: false,
    corrected: "She was listening to classical music when she heard someone knocking.",
    explanation: "Incorrect. Subject 'She' requires 'was listening', not 'were listening'."
  },
  {
    id: "g8_pspc_15",
    grade: 8,
    topic: "Past Simple / Past Continuous",
    difficulty: "hard",
    sentence: "Who was steering the sailboat when the mast broke during the gale?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Subject question in past continuous: 'Who was steering...'."
  },

  // ==========================================
  // TOPIC 3: Past Perfect and Mixed Tenses (15 Sentences)
  // Distribution: 8 Correct, 7 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g8_ppm_01",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "easy",
    sentence: "By the time we arrived at the concert hall, the band had played two songs.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Earlier past action correctly rendered in Past Perfect ('had played')."
  },
  {
    id: "g8_ppm_02",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "easy",
    sentence: "He couldn't open his front door because he has lost his keys.",
    isCorrect: false,
    corrected: "He couldn't open his front door because he had lost his keys.",
    explanation: "Incorrect. Past narrative context ('couldn't open') requires Past Perfect ('had lost'), not present perfect."
  },
  {
    id: "g8_ppm_03",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "easy",
    sentence: "She had never eaten sushi before she visited Japan last winter.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Past experience prior to a past trip correctly uses Past Perfect."
  },
  {
    id: "g8_ppm_04",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "easy",
    sentence: "After the guests had left, we begun to clean up the living room.",
    isCorrect: false,
    corrected: "After the guests had left, we began to clean up the living room.",
    explanation: "Incorrect. Simple past of 'begin' is 'began', not past participle 'begun'."
  },
  {
    id: "g8_ppm_05",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "easy",
    sentence: "The stadium was completely empty because the match had end an hour earlier.",
    isCorrect: false,
    corrected: "The stadium was completely empty because the match had ended an hour earlier.",
    explanation: "Incorrect. Past perfect requires the past participle 'ended', not the base form 'end'."
  },
  {
    id: "g8_ppm_06",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "medium",
    sentence: "Hardly had the bell rung when the students rushed into the hallway.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Inversion structure with 'Hardly had... when...' is standard and correct."
  },
  {
    id: "g8_ppm_07",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "medium",
    sentence: "When she opened the oven, she saw that the cake has burned completely.",
    isCorrect: false,
    corrected: "When she opened the oven, she saw that the cake had burned completely.",
    explanation: "Incorrect. In past reported perception, use Past Perfect ('had burned') for the earlier event."
  },
  {
    id: "g8_ppm_08",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "medium",
    sentence: "I recognized her immediately because I had seen her photo on the school website.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Had seen' occurred prior to recognizing her in the past."
  },
  {
    id: "g8_ppm_09",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "medium",
    sentence: "Before he entered the room, he had took off his muddy boots.",
    isCorrect: false,
    corrected: "Before he entered the room, he had taken off his muddy boots.",
    explanation: "Incorrect. Past participle of 'take' is 'taken', not 'took'."
  },
  {
    id: "g8_ppm_10",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "medium",
    sentence: "They had been waiting for forty minutes before the bus finally arrived.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Past perfect continuous emphasizes the duration leading up to a past arrival."
  },
  {
    id: "g8_ppm_11",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "hard",
    sentence: "No sooner had he submitted the form than he realized his spelling mistake.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'No sooner had... than...' inversion formula is grammatically flawless."
  },
  {
    id: "g8_ppm_12",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "hard",
    sentence: "No sooner had the match started when heavy rain stopped play.",
    isCorrect: false,
    corrected: "No sooner had the match started than heavy rain stopped play.",
    explanation: "Incorrect. 'No sooner' pairs with 'than', not 'when'. ('Hardly/Scarcely' pairs with 'when')."
  },
  {
    id: "g8_ppm_13",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "hard",
    sentence: "She was exhausted because she had been studying without a break all evening.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Past continuous duration explained through Past Perfect Continuous ('had been studying')."
  },
  {
    id: "g8_ppm_14",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "hard",
    sentence: "By midnight, the detectives had solve the mysterious disappearance.",
    isCorrect: false,
    corrected: "By midnight, the detectives had solved the mysterious disappearance.",
    explanation: "Incorrect. Past perfect requires the past participle 'solved', not the base form 'solve'."
  },
  {
    id: "g8_ppm_15",
    grade: 8,
    topic: "Past Perfect and Mixed Tenses",
    difficulty: "hard",
    sentence: "He had already been warned twice before the referee finally showed him a red card.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Passive past perfect ('had already been warned') before the final referee action."
  },

  // ==========================================
  // TOPIC 4: Comparatives (15 Sentences)
  // Distribution: 8 Correct, 7 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g8_comp_01",
    grade: 8,
    topic: "Comparatives",
    difficulty: "easy",
    sentence: "Mount Everest is higher than Mont Blanc.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. One-syllable adjective 'high' forms comparative with -er ('higher than')."
  },
  {
    id: "g8_comp_02",
    grade: 8,
    topic: "Comparatives",
    difficulty: "easy",
    sentence: "Traveling by airplane is more faster than traveling by coach.",
    isCorrect: false,
    corrected: "Traveling by airplane is faster than traveling by coach.",
    explanation: "Incorrect. Do not use both 'more' and '-er' together (double comparative)."
  },
  {
    id: "g8_comp_03",
    grade: 8,
    topic: "Comparatives",
    difficulty: "easy",
    sentence: "This science quiz is much easier than last week's exam.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Much' correctly modifies comparative 'easier' (easy -> easier)."
  },
  {
    id: "g8_comp_04",
    grade: 8,
    topic: "Comparatives",
    difficulty: "easy",
    sentence: "My new laptop is more light than my old desktop computer.",
    isCorrect: false,
    corrected: "My new laptop is lighter than my old desktop computer.",
    explanation: "Incorrect. One-syllable adjective 'light' takes -er: 'lighter', not 'more light'."
  },
  {
    id: "g8_comp_05",
    grade: 8,
    topic: "Comparatives",
    difficulty: "easy",
    sentence: "Istanbul is much more crowded than Trabzon.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Two-syllable adjective 'crowded' takes 'more crowded'."
  },
  {
    id: "g8_comp_06",
    grade: 8,
    topic: "Comparatives",
    difficulty: "medium",
    sentence: "Her health is getting gooder each day thanks to the treatment.",
    isCorrect: false,
    corrected: "Her health is getting better each day thanks to the treatment.",
    explanation: "Incorrect. The comparative of irregular adjective 'good' is 'better', never 'gooder'."
  },
  {
    id: "g8_comp_07",
    grade: 8,
    topic: "Comparatives",
    difficulty: "medium",
    sentence: "The weather in Antalya is far hotter than in Erzurum during July.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Far' is a natural modifier for comparative 'hotter' (with consonant doubling)."
  },
  {
    id: "g8_comp_08",
    grade: 8,
    topic: "Comparatives",
    difficulty: "medium",
    sentence: "His second presentation was much more bad than his first attempt.",
    isCorrect: false,
    corrected: "His second presentation was much worse than his first attempt.",
    explanation: "Incorrect. The irregular comparative of 'bad' is 'worse', not 'more bad'."
  },
  {
    id: "g8_comp_09",
    grade: 8,
    topic: "Comparatives",
    difficulty: "medium",
    sentence: "The earlier we set off tomorrow, the less traffic we will encounter.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'The [comparative]..., the [comparative]...' proportional comparison structure."
  },
  {
    id: "g8_comp_10",
    grade: 8,
    topic: "Comparatives",
    difficulty: "medium",
    sentence: "This modern electric car is as fast than a conventional sports car.",
    isCorrect: false,
    corrected: "This modern electric car is as fast as a conventional sports car.",
    explanation: "Incorrect. Equality comparisons use 'as... as', not 'as... than'."
  },
  {
    id: "g8_comp_11",
    grade: 8,
    topic: "Comparatives",
    difficulty: "hard",
    sentence: "The documentary was significantly less interesting than the original book.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Significantly less' followed by adjective + 'than' is standard and accurate."
  },
  {
    id: "g8_comp_12",
    grade: 8,
    topic: "Comparatives",
    difficulty: "hard",
    sentence: "His pronunciation is slightly more better than it was last semester.",
    isCorrect: false,
    corrected: "His pronunciation is slightly better than it was last semester.",
    explanation: "Incorrect. 'More better' is an incorrect double comparative; use 'slightly better'."
  },
  {
    id: "g8_comp_13",
    grade: 8,
    topic: "Comparatives",
    difficulty: "hard",
    sentence: "The higher you climb up the mountain, the thinner the air becomes.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Proportional comparison: 'The higher..., the thinner...'."
  },
  {
    id: "g8_comp_14",
    grade: 8,
    topic: "Comparatives",
    difficulty: "hard",
    sentence: "She is two years older to her brother who attends primary school.",
    isCorrect: false,
    corrected: "She is two years older than her brother who attends primary school.",
    explanation: "Incorrect. Comparative adjectives in English take 'than', not 'to': 'older than'."
  },
  {
    id: "g8_comp_15",
    grade: 8,
    topic: "Comparatives",
    difficulty: "hard",
    sentence: "Our current solar panels are considerably more efficient as previous models.",
    isCorrect: false,
    corrected: "Our current solar panels are considerably more efficient than previous models.",
    explanation: "Incorrect. Comparative adjectives require 'than' for comparisons of inequality ('more efficient than'), not 'as'."
  },

  // ==========================================
  // TOPIC 5: Superlatives (15 Sentences)
  // Distribution: 7 Correct, 8 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g8_sup_01",
    grade: 8,
    topic: "Superlatives",
    difficulty: "easy",
    sentence: "Russia is the largest country in the world by land area.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'The largest' correctly uses the definite article with a one-syllable superlative."
  },
  {
    id: "g8_sup_02",
    grade: 8,
    topic: "Superlatives",
    difficulty: "easy",
    sentence: "Yesterday was the most hot day of the entire summer.",
    isCorrect: false,
    corrected: "Yesterday was the hottest day of the entire summer.",
    explanation: "Incorrect. One-syllable adjective 'hot' forms superlative 'the hottest', not 'most hot'."
  },
  {
    id: "g8_sup_03",
    grade: 8,
    topic: "Superlatives",
    difficulty: "easy",
    sentence: "Who is the tallest player on your school basketball squad?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. One-syllable adjective 'tall' adds -est: 'the tallest'."
  },
  {
    id: "g8_sup_04",
    grade: 8,
    topic: "Superlatives",
    difficulty: "easy",
    sentence: "This is the most best pizza I have ever tasted in my life.",
    isCorrect: false,
    corrected: "This is the best pizza I have ever tasted in my life.",
    explanation: "Incorrect. 'Most best' is an erroneous double superlative; use 'the best'."
  },
  {
    id: "g8_sup_05",
    grade: 8,
    topic: "Superlatives",
    difficulty: "easy",
    sentence: "The cheetah is the fastest land animal on our planet.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Fast' -> 'the fastest' land animal."
  },
  {
    id: "g8_sup_06",
    grade: 8,
    topic: "Superlatives",
    difficulty: "medium",
    sentence: "She is one of the most talented violinists in the youth orchestra.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'One of the most talented' + plural noun ('violinists') is grammatically sound."
  },
  {
    id: "g8_sup_07",
    grade: 8,
    topic: "Superlatives",
    difficulty: "medium",
    sentence: "That was the baddest film I have ever seen at the cinema.",
    isCorrect: false,
    corrected: "That was the worst film I have ever seen at the cinema.",
    explanation: "Incorrect. The irregular superlative of 'bad' is 'the worst', never 'the baddest'."
  },
  {
    id: "g8_sup_08",
    grade: 8,
    topic: "Superlatives",
    difficulty: "medium",
    sentence: "This historic castle is the oldest building in our town.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'The oldest' correctly forms the superlative of 'old'."
  },
  {
    id: "g8_sup_09",
    grade: 8,
    topic: "Superlatives",
    difficulty: "medium",
    sentence: "He chose the least expensive smartphone available in the catalog.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'The least expensive' is the correct superlative of inferiority."
  },
  {
    id: "g8_sup_10",
    grade: 8,
    topic: "Superlatives",
    difficulty: "medium",
    sentence: "Which city is the most furthest from Istanbul: Tokyo or Sydney?",
    isCorrect: false,
    corrected: "Which city is the furthest from Istanbul: Tokyo or Sydney?",
    explanation: "Incorrect. Do not combine 'most' with an irregular superlative: 'furthest', not 'most furthest'."
  },
  {
    id: "g8_sup_11",
    grade: 8,
    topic: "Superlatives",
    difficulty: "hard",
    sentence: "By far the most challenging topic in eighth grade grammar is the passive voice.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'By far the most challenging' is a natural superlative intensifier."
  },
  {
    id: "g8_sup_12",
    grade: 8,
    topic: "Superlatives",
    difficulty: "hard",
    sentence: "Of the three brothers, Tim is by far the more athletic.",
    isCorrect: false,
    corrected: "Of the three brothers, Tim is by far the most athletic.",
    explanation: "Incorrect. When comparing three or more entities, use the superlative 'most athletic', not comparative 'more'."
  },
  {
    id: "g8_sup_13",
    grade: 8,
    topic: "Superlatives",
    difficulty: "hard",
    sentence: "This telescope offers the clearest view of Saturn's rings yet recorded.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. One-syllable 'clear' -> 'the clearest'."
  },
  {
    id: "g8_sup_14",
    grade: 8,
    topic: "Superlatives",
    difficulty: "hard",
    sentence: "She is the most unique pianist that our conservatory has ever trained.",
    isCorrect: false,
    corrected: "She is a unique pianist that our conservatory has ever trained.",
    explanation: "Incorrect. In formal English, 'unique' is an absolute adjective meaning one-of-a-kind and does not take 'most'."
  },
  {
    id: "g8_sup_15",
    grade: 8,
    topic: "Superlatives",
    difficulty: "hard",
    sentence: "He was voted the most likely student to become a professional scientist.",
    isCorrect: false,
    corrected: "He was voted the student most likely to become a professional scientist.",
    explanation: "Incorrect. The standard idiom is 'the student most likely to...', or 'the most likely candidate'."
  }
];

const GRADE_8_TOPICS_PART2 = [
  // ==========================================
  // TOPIC 6: Adjectives vs Adverbs (15 Sentences)
  // Distribution: 8 Correct, 7 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g8_adjadv_01",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "easy",
    sentence: "She sings very beautifully in the school youth choir.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. The adverb 'beautifully' modifies the action verb 'sings'."
  },
  {
    id: "g8_adjadv_02",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "easy",
    sentence: "The train traveled very fastly between the two major cities.",
    isCorrect: false,
    corrected: "The train traveled very fast between the two major cities.",
    explanation: "Incorrect. 'Fast' is both an adjective and an adverb; 'fastly' does not exist."
  },
  {
    id: "g8_adjadv_03",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "easy",
    sentence: "He did very well on the regional English vocabulary contest.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Well' is the adverb modifying the verb 'did'."
  },
  {
    id: "g8_adjadv_04",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "easy",
    sentence: "The children played happy in the playground with their new toys.",
    isCorrect: false,
    corrected: "The children played happily in the playground with their new toys.",
    explanation: "Incorrect. Modifying an action verb ('played') requires the adverb 'happily', not the adjective 'happy'."
  },
  {
    id: "g8_adjadv_05",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "easy",
    sentence: "Please listen carefully while the flight attendant speaks.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Carefully' is the adverb modifying the verb 'listen'."
  },
  {
    id: "g8_adjadv_06",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "medium",
    sentence: "This homemade strawberry cake tastes wonderfully sweet.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Linking verb 'tastes' takes the adjective 'sweet', which is modified by the adverb 'wonderfully'."
  },
  {
    id: "g8_adjadv_07",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "medium",
    sentence: "The freshly baked bread in the bakery smells wonderfully.",
    isCorrect: false,
    corrected: "The freshly baked bread in the bakery smells wonderful.",
    explanation: "Incorrect. Sense perception verbs (linking verbs) like 'smell' take an adjective complement ('wonderful'), not an adverb."
  },
  {
    id: "g8_adjadv_08",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "medium",
    sentence: "Our science teacher explained the complicated theory very clearly.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Clearly' is the adverb modifying 'explained'."
  },
  {
    id: "g8_adjadv_09",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "medium",
    sentence: "He worked very hardly all evening to prepare for the robotics tournament.",
    isCorrect: false,
    corrected: "He worked very hard all evening to prepare for the robotics tournament.",
    explanation: "Incorrect. 'Hard' is the adverb meaning with great effort. 'Hardly' means scarcely or almost not at all."
  },
  {
    id: "g8_adjadv_10",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "medium",
    sentence: "After running the marathon, the athletes felt completely exhausted.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Linking verb 'felt' takes the predicate adjective 'exhausted'."
  },
  {
    id: "g8_adjadv_11",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "hard",
    sentence: "The goalkeeper reacted remarkably quickly to block the penalty shot.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. The adverb 'remarkably' modifies the adverb 'quickly', which modifies 'reacted'."
  },
  {
    id: "g8_adjadv_12",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "hard",
    sentence: "He speaks English fluent because he lived in Australia for five years.",
    isCorrect: false,
    corrected: "He speaks English fluently because he lived in Australia for five years.",
    explanation: "Incorrect. The action verb 'speaks' takes the adverb 'fluently', not adjective 'fluent'."
  },
  {
    id: "g8_adjadv_13",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "hard",
    sentence: "His sudden decision to resign seemed strangely to all his colleagues.",
    isCorrect: false,
    corrected: "His sudden decision to resign seemed strange to all his colleagues.",
    explanation: "Incorrect. Linking verbs like 'seemed' take a predicate adjective ('strange'), not an adverb ('strangely')."
  },
  {
    id: "g8_adjadv_14",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "hard",
    sentence: "The orchestra played so good that the entire audience stood up and applauded.",
    isCorrect: false,
    corrected: "The orchestra played so well that the entire audience stood up and applauded.",
    explanation: "Incorrect. 'Played' is an action verb requiring the adverb 'well', not adjective 'good'."
  },
  {
    id: "g8_adjadv_15",
    grade: 8,
    topic: "Adjectives vs Adverbs",
    difficulty: "hard",
    sentence: "Although she felt nervously before the speech, her delivery was confident.",
    isCorrect: false,
    corrected: "Although she felt nervous before the speech, her delivery was confident.",
    explanation: "Incorrect. Linking verb 'felt' takes the adjective 'nervous', not adverb 'nervously'."
  },

  // ==========================================
  // TOPIC 7: Modals (15 Sentences)
  // Distribution: 7 Correct, 8 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g8_mod_01",
    grade: 8,
    topic: "Modals",
    difficulty: "easy",
    sentence: "You should brush your teeth at least twice every day.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Should' + base verb gives constructive personal advice."
  },
  {
    id: "g8_mod_02",
    grade: 8,
    topic: "Modals",
    difficulty: "easy",
    sentence: "Visitors must not to feed the animals inside the zoo enclosure.",
    isCorrect: false,
    corrected: "Visitors must not feed the animals inside the zoo enclosure.",
    explanation: "Incorrect. Modal 'must not' is followed by a bare infinitive ('feed', not 'to feed')."
  },
  {
    id: "g8_mod_03",
    grade: 8,
    topic: "Modals",
    difficulty: "easy",
    sentence: "Could you lend me your pencil sharpener for a moment?",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Polite request with 'Could you' + base verb."
  },
  {
    id: "g8_mod_04",
    grade: 8,
    topic: "Modals",
    difficulty: "easy",
    sentence: "She can to solve complex crossword puzzles in under ten minutes.",
    isCorrect: false,
    corrected: "She can solve complex crossword puzzles in under ten minutes.",
    explanation: "Incorrect. 'Can' takes a bare infinitive: 'can solve', not 'can to solve'."
  },
  {
    id: "g8_mod_05",
    grade: 8,
    topic: "Modals",
    difficulty: "easy",
    sentence: "Students don't have to attend school on national holidays.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Don't have to' shows absence of obligation."
  },
  {
    id: "g8_mod_06",
    grade: 8,
    topic: "Modals",
    difficulty: "medium",
    sentence: "Look at the dark clouds! It might rain heavily this afternoon.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Might' expresses realistic possibility about a future occurrence."
  },
  {
    id: "g8_mod_07",
    grade: 8,
    topic: "Modals",
    difficulty: "medium",
    sentence: "That boy can't be Mark; Mark is currently attending a summer camp in England.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Can't be' expresses logical deduction of impossibility."
  },
  {
    id: "g8_mod_08",
    grade: 8,
    topic: "Modals",
    difficulty: "medium",
    sentence: "The lights are off and their car is gone; they must to be away on vacation.",
    isCorrect: false,
    corrected: "The lights are off and their car is gone; they must be away on vacation.",
    explanation: "Incorrect. Modal deduction with 'must' takes bare infinitive: 'must be', not 'must to be'."
  },
  {
    id: "g8_mod_09",
    grade: 8,
    topic: "Modals",
    difficulty: "medium",
    sentence: "You had better to leave right now if you want to catch the last metro.",
    isCorrect: false,
    corrected: "You had better leave right now if you want to catch the last metro.",
    explanation: "Incorrect. 'Had better' is followed by a bare infinitive: 'had better leave', without 'to'."
  },
  {
    id: "g8_mod_10",
    grade: 8,
    topic: "Modals",
    difficulty: "medium",
    sentence: "You ought not ignore the warning signs posted along the cliff path.",
    isCorrect: false,
    corrected: "You ought not to ignore the warning signs posted along the cliff path.",
    explanation: "Incorrect. Negative 'ought' still requires 'to': 'ought not to ignore'."
  },
  {
    id: "g8_mod_11",
    grade: 8,
    topic: "Modals",
    difficulty: "hard",
    sentence: "You should have told me about the schedule change yesterday.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Should have' + past participle expresses past criticism or regret."
  },
  {
    id: "g8_mod_12",
    grade: 8,
    topic: "Modals",
    difficulty: "hard",
    sentence: "He couldn't have stole the bicycle because he was with us the whole evening.",
    isCorrect: false,
    corrected: "He couldn't have stolen the bicycle because he was with us the whole evening.",
    explanation: "Incorrect. Modal perfect requires past participle 'stolen', not past simple 'stole'."
  },
  {
    id: "g8_mod_13",
    grade: 8,
    topic: "Modals",
    difficulty: "hard",
    sentence: "The package must have arrived while we were out shopping.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Must have arrived' makes a logical deduction about a past completed event."
  },
  {
    id: "g8_mod_14",
    grade: 8,
    topic: "Modals",
    difficulty: "hard",
    sentence: "You needn't to worry about tomorrow's presentation; you are well prepared.",
    isCorrect: false,
    corrected: "You needn't worry about tomorrow's presentation; you are well prepared.",
    explanation: "Incorrect. Modal 'needn't' takes a bare infinitive: 'needn't worry', without 'to'."
  },
  {
    id: "g8_mod_15",
    grade: 8,
    topic: "Modals",
    difficulty: "hard",
    sentence: "She may not have received our invitation since her address recently changed.",
    isCorrect: false,
    corrected: "She might not have received our invitation since her address recently changed.",
    explanation: "Incorrect. For past possibility of something not happening, 'might not have received' is the standard preferred form to avoid ambiguity with permission."
  },

  // ==========================================
  // TOPIC 8: Future Forms (15 Sentences)
  // Distribution: 7 Correct, 8 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g8_fut_01",
    grade: 8,
    topic: "Future Forms",
    difficulty: "easy",
    sentence: "I am going to visit my dentist tomorrow afternoon at three.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Be going to' expresses a prior plan or intention."
  },
  {
    id: "g8_fut_02",
    grade: 8,
    topic: "Future Forms",
    difficulty: "easy",
    sentence: "Look at those dark storm clouds! It will rain any minute.",
    isCorrect: false,
    corrected: "Look at those dark storm clouds! It is going to rain any minute.",
    explanation: "Incorrect. Predictions based on present physical evidence use 'be going to', not 'will'."
  },
  {
    id: "g8_fut_03",
    grade: 8,
    topic: "Future Forms",
    difficulty: "easy",
    sentence: "The phone is ringing. I will answer it!",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Spontaneous decisions made at the moment of speaking take 'will'."
  },
  {
    id: "g8_fut_04",
    grade: 8,
    topic: "Future Forms",
    difficulty: "easy",
    sentence: "Our school bus will leaves the campus at exactly eight tomorrow.",
    isCorrect: false,
    corrected: "Our school bus leaves the campus at exactly eight tomorrow.",
    explanation: "Incorrect. Fixed timetables and schedules take the Present Simple ('leaves'), or 'will leave' without -s."
  },
  {
    id: "g8_fut_05",
    grade: 8,
    topic: "Future Forms",
    difficulty: "easy",
    sentence: "We are meeting the new science club members after school.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Present continuous is used for confirmed future arrangements with other people."
  },
  {
    id: "g8_fut_06",
    grade: 8,
    topic: "Future Forms",
    difficulty: "medium",
    sentence: "As soon as I will arrive at the hotel, I will send you a text.",
    isCorrect: false,
    corrected: "As soon as I arrive at the hotel, I will send you a text.",
    explanation: "Incorrect. In future time clauses with 'as soon as', use Present Simple ('arrive'), not 'will arrive'."
  },
  {
    id: "g8_fut_07",
    grade: 8,
    topic: "Future Forms",
    difficulty: "medium",
    sentence: "I will call you when I finish my soccer practice.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Time clause after 'when' correctly takes the present simple ('finish')."
  },
  {
    id: "g8_fut_08",
    grade: 8,
    topic: "Future Forms",
    difficulty: "medium",
    sentence: "The train to Eskisehir departs from platform four at 09:15 tomorrow.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Public transport timetables use Present Simple for future departures."
  },
  {
    id: "g8_fut_09",
    grade: 8,
    topic: "Future Forms",
    difficulty: "medium",
    sentence: "If it will snow tomorrow, we will build a giant snowman.",
    isCorrect: false,
    corrected: "If it snows tomorrow, we will build a giant snowman.",
    explanation: "Incorrect. The if-clause of a first conditional takes Present Simple ('snows'), not 'will snow'."
  },
  {
    id: "g8_fut_10",
    grade: 8,
    topic: "Future Forms",
    difficulty: "medium",
    sentence: "By this time tomorrow, we will be flying over the Mediterranean Sea.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Future Continuous ('will be flying') describes an action in progress at a specific future moment."
  },
  {
    id: "g8_fut_11",
    grade: 8,
    topic: "Future Forms",
    difficulty: "hard",
    sentence: "By the end of this year, she will have completed her robotics certification.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Future Perfect ('will have completed') describes an action completed before a future deadline."
  },
  {
    id: "g8_fut_12",
    grade: 8,
    topic: "Future Forms",
    difficulty: "hard",
    sentence: "By next June, my parents will have live in this house for twenty years.",
    isCorrect: false,
    corrected: "By next June, my parents will have lived in this house for twenty years.",
    explanation: "Incorrect. Future Perfect requires past participle 'lived', not base form 'live'."
  },
  {
    id: "g8_fut_13",
    grade: 8,
    topic: "Future Forms",
    difficulty: "hard",
    sentence: "Before you will leave the classroom, make sure you hand in your test.",
    isCorrect: false,
    corrected: "Before you leave the classroom, make sure you hand in your test.",
    explanation: "Incorrect. Time clauses with 'before' take Present Simple ('leave'), never 'will'."
  },
  {
    id: "g8_fut_14",
    grade: 8,
    topic: "Future Forms",
    difficulty: "hard",
    sentence: "This time next week, we will be relaxing on the sandy beach of Kas.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Future Continuous ('will be relaxing') for an activity in progress at a future point."
  },
  {
    id: "g8_fut_15",
    grade: 8,
    topic: "Future Forms",
    difficulty: "hard",
    sentence: "I am about to calling my tutor to ask for feedback on the essay.",
    isCorrect: false,
    corrected: "I am about to call my tutor to ask for feedback on the essay.",
    explanation: "Incorrect. 'Be about to' is followed by a base infinitive ('call', not 'calling')."
  },

  // ==========================================
  // TOPIC 9: Conditionals (15 Sentences)
  // Distribution: 7 Correct, 8 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g8_cond_01",
    grade: 8,
    topic: "Conditionals",
    difficulty: "easy",
    sentence: "If you heat ice, it melts into water.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Zero conditional (general scientific truth): If + Present Simple, Present Simple."
  },
  {
    id: "g8_cond_02",
    grade: 8,
    topic: "Conditionals",
    difficulty: "easy",
    sentence: "If it rains tomorrow, we will cancel the picnic in the park.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. First conditional (real possibility): If + Present Simple, will + base verb."
  },
  {
    id: "g8_cond_03",
    grade: 8,
    topic: "Conditionals",
    difficulty: "easy",
    sentence: "If you will study hard, you will pass all your final examinations.",
    isCorrect: false,
    corrected: "If you study hard, you will pass all your final examinations.",
    explanation: "Incorrect. Do not use 'will' in the if-clause of a first conditional; use Present Simple 'study'."
  },
  {
    id: "g8_cond_04",
    grade: 8,
    topic: "Conditionals",
    difficulty: "easy",
    sentence: "If I have enough money, I will buy that new video game.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. First conditional: 'If I have' + 'I will buy'."
  },
  {
    id: "g8_cond_05",
    grade: 8,
    topic: "Conditionals",
    difficulty: "easy",
    sentence: "If she doesn't hurry, she misses the morning bus.",
    isCorrect: false,
    corrected: "If she doesn't hurry, she will miss the morning bus.",
    explanation: "Incorrect. A specific future event in the main clause takes 'will miss', not simple present 'misses'."
  },
  {
    id: "g8_cond_06",
    grade: 8,
    topic: "Conditionals",
    difficulty: "medium",
    sentence: "If I won a million dollars, I would travel around the world.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Second conditional (hypothetical): If + Past Simple ('won'), would + base verb ('would travel')."
  },
  {
    id: "g8_cond_07",
    grade: 8,
    topic: "Conditionals",
    difficulty: "medium",
    sentence: "If I was you, I would apologize to the teacher immediately.",
    isCorrect: false,
    corrected: "If I were you, I would apologize to the teacher immediately.",
    explanation: "Incorrect. In formal English conditional advice, the subjunctive form 'were' is standard: 'If I were you'."
  },
  {
    id: "g8_cond_08",
    grade: 8,
    topic: "Conditionals",
    difficulty: "medium",
    sentence: "Unless you practice every day, you won't improve your guitar skills.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Unless' means 'if not' and takes an affirmative present verb ('practice')."
  },
  {
    id: "g8_cond_09",
    grade: 8,
    topic: "Conditionals",
    difficulty: "medium",
    sentence: "Unless you don't wear a warm coat, you will catch a bad cold.",
    isCorrect: false,
    corrected: "Unless you wear a warm coat, you will catch a bad cold.",
    explanation: "Incorrect. 'Unless' already contains negative meaning ('if not'); do not use 'don't' with it."
  },
  {
    id: "g8_cond_10",
    grade: 8,
    topic: "Conditionals",
    difficulty: "medium",
    sentence: "If he had a laptop, he would finish his homework much faster.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Second conditional: hypothetical present state ('If he had') with 'would finish'."
  },
  {
    id: "g8_cond_11",
    grade: 8,
    topic: "Conditionals",
    difficulty: "hard",
    sentence: "If they practiced more frequently, they will win the regional championship.",
    isCorrect: false,
    corrected: "If they practiced more frequently, they would win the regional championship.",
    explanation: "Incorrect. Second conditional mixes past simple ('practiced') with 'would', not 'will'."
  },
  {
    id: "g8_cond_12",
    grade: 8,
    topic: "Conditionals",
    difficulty: "hard",
    sentence: "If she knew his telephone number, she would invite him to the gathering.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Second conditional: 'If she knew' pairs with 'she would invite'."
  },
  {
    id: "g8_cond_13",
    grade: 8,
    topic: "Conditionals",
    difficulty: "hard",
    sentence: "Provided that you return the camera on Friday, you can borrow it.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Provided that' introduces a valid conditional clause with present simple."
  },
  {
    id: "g8_cond_14",
    grade: 8,
    topic: "Conditionals",
    difficulty: "hard",
    sentence: "If the weather would be warmer, we could swim in the sea today.",
    isCorrect: false,
    corrected: "If the weather were warmer, we could swim in the sea today.",
    explanation: "Incorrect. Never use 'would' in the if-clause of a second conditional; use 'were' or 'was'."
  },
  {
    id: "g8_cond_15",
    grade: 8,
    topic: "Conditionals",
    difficulty: "hard",
    sentence: "I will lend you my bicycle on condition that you take care of it.",
    isCorrect: false,
    corrected: "I will lend you my bicycle on the condition that you take care of it.",
    explanation: "Incorrect. The standard formal idiom takes the definite article: 'on the condition that'."
  },

  // ==========================================
  // TOPIC 10: Passive Voice and Mixed Grammar (15 Sentences)
  // Distribution: 7 Correct, 8 Incorrect | 5 Easy, 5 Medium, 5 Hard
  // ==========================================
  {
    id: "g8_pass_01",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "easy",
    sentence: "The telephone was invented by Alexander Graham Bell.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Past simple passive: 'was' + past participle 'invented' + 'by' agent."
  },
  {
    id: "g8_pass_02",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "easy",
    sentence: "English is spoke by millions of people all around the world.",
    isCorrect: false,
    corrected: "English is spoken by millions of people all around the world.",
    explanation: "Incorrect. Passive voice requires the past participle 'spoken', not past simple 'spoke'."
  },
  {
    id: "g8_pass_03",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "easy",
    sentence: "These delicious chocolate cookies were baked by my grandmother.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Plural subject 'cookies' takes 'were baked by'."
  },
  {
    id: "g8_pass_04",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "easy",
    sentence: "The museum is visit by thousands of tourists every weekend.",
    isCorrect: false,
    corrected: "The museum is visited by thousands of tourists every weekend.",
    explanation: "Incorrect. Passive voice requires the past participle 'visited', not base form 'visit'."
  },
  {
    id: "g8_pass_05",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "easy",
    sentence: "Mobile phones are not allowed inside the examination hall.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Present simple passive negation: 'are not allowed'."
  },
  {
    id: "g8_pass_06",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "medium",
    sentence: "The famous novel was written in 1897 by Bram Stoker.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. 'Was written' correctly pairs the singular subject with past participle."
  },
  {
    id: "g8_pass_07",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "medium",
    sentence: "A new shopping mall is being build near the central train station.",
    isCorrect: false,
    corrected: "A new shopping mall is being built near the central train station.",
    explanation: "Incorrect. Continuous passive takes the past participle 'built', not base form 'build'."
  },
  {
    id: "g8_pass_08",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "medium",
    sentence: "The lost keys were found under the sofa by my younger sister.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Plural 'keys' correctly takes 'were found'."
  },
  {
    id: "g8_pass_09",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "medium",
    sentence: "This ancient castle was builded in the twelfth century.",
    isCorrect: false,
    corrected: "This ancient castle was built in the twelfth century.",
    explanation: "Incorrect. Past participle of irregular verb 'build' is 'built', not 'builded'."
  },
  {
    id: "g8_pass_10",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "medium",
    sentence: "All library books must be returned before the end of the term.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Modal passive: modal ('must') + 'be' + past participle ('returned')."
  },
  {
    id: "g8_pass_11",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "hard",
    sentence: "The stolen jewelry has been recovered by the local police department.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Present perfect passive: 'has been recovered by'."
  },
  {
    id: "g8_pass_12",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "hard",
    sentence: "The problem was so complicated that it could not be solve easily.",
    isCorrect: false,
    corrected: "The problem was so complicated that it could not be solved easily.",
    explanation: "Incorrect. Modal passive takes past participle: 'could not be solved'."
  },
  {
    id: "g8_pass_13",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "hard",
    sentence: "The documents were send to the ministry by courier yesterday morning.",
    isCorrect: false,
    corrected: "The documents were sent to the ministry by courier yesterday morning.",
    explanation: "Incorrect. Past participle of irregular verb 'send' is 'sent', not 'send'."
  },
  {
    id: "g8_pass_14",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "hard",
    sentence: "Neither the headmaster nor the teachers was informed about the schedule change.",
    isCorrect: false,
    corrected: "Neither the headmaster nor the teachers were informed about the schedule change.",
    explanation: "Incorrect. In 'neither... nor...', the verb agrees with the closer subject ('the teachers'), requiring 'were informed'."
  },
  {
    id: "g8_pass_15",
    grade: 8,
    topic: "Passive Voice and Mixed Grammar",
    difficulty: "hard",
    sentence: "Penicillin was discovered by Alexander Fleming in nineteen twenty-eight.",
    isCorrect: true,
    corrected: null,
    explanation: "Correct. Past simple passive with subject 'Penicillin' taking 'was discovered by'."
  }
];

// Combine Grade 8 lists
const ALL_GRADE_8_QUESTIONS = [...GRADE_8_QUESTIONS, ...GRADE_8_TOPICS_PART2];

// Export to Global and CommonJS module for test suites
const GRAMMAR_AUCTION_DATA = {
  grade7: GRADE_7_QUESTIONS,
  grade8: ALL_GRADE_8_QUESTIONS,
  all: [...GRADE_7_QUESTIONS, ...ALL_GRADE_8_QUESTIONS]
};

if (typeof window !== "undefined") {
  window.GRAMMAR_AUCTION_DATA = GRAMMAR_AUCTION_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = GRAMMAR_AUCTION_DATA;
}
