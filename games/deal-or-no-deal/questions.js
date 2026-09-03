/**
 * DEAL OR NO DEAL – SPEAKING SHOWDOWN
 * 160+ Curriculum-Aligned Speaking Challenges for 7th & 8th Grade English
 * Categorized into Early Game (Level 1), Middle Game (Level 2), and Late Game (Level 3)
 */

const DEAL_SPEAKING_BANK = {
  // =========================================================================
  // GRADE 7 QUESTIONS
  // =========================================================================
  grade7: {
    // LEVEL 1: EARLY GAME (Short personal questions, routines, 1-2 sentence answers)
    level1: [
      {
        id: "g7_l1_01",
        category: "Daily Life & Routines",
        prompt: "What time do you usually wake up on school days, and what is the very first thing you do?",
        target: "1–2 sentences",
        hint: "Start with: 'I usually wake up at... and I...'"
      },
      {
        id: "g7_l1_02",
        category: "Food & Drinks",
        prompt: "What is your absolute favorite meal, and who usually cooks it for you?",
        target: "1–2 sentences",
        hint: "Start with: 'My favorite meal is... because...'"
      },
      {
        id: "g7_l1_03",
        category: "Free Time & Hobbies",
        prompt: "What do you enjoy doing most after you finish your homework in the evening?",
        target: "1–2 sentences",
        hint: "Mention your favorite hobby or entertainment."
      },
      {
        id: "g7_l1_04",
        category: "School Life",
        prompt: "Which school subject do you find most interesting this year, and why?",
        target: "1–2 sentences",
        hint: "Name the subject and give one simple reason."
      },
      {
        id: "g7_l1_05",
        category: "Sports & Activities",
        prompt: "Do you prefer playing sports or watching sports on television? Explain why.",
        target: "1–2 sentences",
        hint: "State your preference and one reason."
      },
      {
        id: "g7_l1_06",
        category: "Animals & Nature",
        prompt: "What is your favorite animal, and where does it live in the world?",
        target: "1–2 sentences",
        hint: "Name the animal and its habitat (e.g., forest, ocean, home)."
      },
      {
        id: "g7_l1_07",
        category: "Weather & Seasons",
        prompt: "Which season of the year is your favorite, and what weather do you like best?",
        target: "1–2 sentences",
        hint: "Say the season (summer/winter/spring/autumn) and why you enjoy it."
      },
      {
        id: "g7_l1_08",
        category: "Friends & Family",
        prompt: "Describe your best friend using two positive personality adjectives.",
        target: "1–2 sentences",
        hint: "E.g., friendly, helpful, funny, honest, kind, energetic."
      },
      {
        id: "g7_l1_09",
        category: "Shopping & Clothes",
        prompt: "What type of clothes do you feel most comfortable wearing on weekends?",
        target: "1–2 sentences",
        hint: "Describe casual clothes (e.g., hoodie, sneakers, jeans, t-shirt)."
      },
      {
        id: "g7_l1_10",
        category: "Music & Movies",
        prompt: "What kind of music or movies do you like listening to or watching when you relax?",
        target: "1–2 sentences",
        hint: "Name the genre (pop, rock, comedy, animation) and your favorite artist/film."
      },
      {
        id: "g7_l1_11",
        category: "Holidays & Travel",
        prompt: "What is the most beautiful city or place you have ever visited?",
        target: "1–2 sentences",
        hint: "Tell the place and one thing you saw there."
      },
      {
        id: "g7_l1_12",
        category: "Technology",
        prompt: "Which electronic device or app do you use the most every day?",
        target: "1–2 sentences",
        hint: "Smartphone, tablet, computer, or a specific learning/game app."
      },
      {
        id: "g7_l1_13",
        category: "Personal Feelings",
        prompt: "What makes you feel extremely happy when you have a bad day?",
        target: "1–2 sentences",
        hint: "Listening to music, talking to friends, playing games, eating chocolate."
      },
      {
        id: "g7_l1_14",
        category: "House & Chores",
        prompt: "Which household chore do you help with at home (e.g., washing dishes, tidying room)?",
        target: "1–2 sentences",
        hint: "Say what chore you do and how often."
      },
      {
        id: "g7_l1_15",
        category: "Future Dreams",
        prompt: "What is one country in the world you really want to travel to in the future?",
        target: "1–2 sentences",
        hint: "Name the country and one thing you want to do there."
      }
    ],

    // LEVEL 2: MIDDLE GAME (Explain, compare, describe, 2-3 connected sentences)
    level2: [
      {
        id: "g7_l2_01",
        category: "Biographies & Role Models",
        prompt: "Talk about someone you admire (a scientist, athlete, historical figure, or parent) and explain two reasons why they inspire you.",
        target: "2–3 sentences",
        hint: "Use phrases like: 'I admire... because he/she is...' and 'Moreover, he/she achieved...'"
      },
      {
        id: "g7_l2_02",
        category: "Wild Animals & Protection",
        prompt: "Why are many wild animals in danger of extinction today, and what can humans do to protect them?",
        target: "2–3 sentences",
        hint: "Mention habitat loss, pollution, or hunting, and creating national parks."
      },
      {
        id: "g7_l2_03",
        category: "Healthy Living vs Fast Food",
        prompt: "Compare eating home-cooked fresh food with eating fast food. Which is better for teenagers and why?",
        target: "2–3 sentences",
        hint: "Use comparative adjectives: 'Home-cooked food is healthier and fresher than fast food, but...'"
      },
      {
        id: "g7_l2_04",
        category: "Life in the City vs Village",
        prompt: "Would you rather live in a crowded big city or a peaceful village? Give two clear reasons.",
        target: "2–3 sentences",
        hint: "Explain advantages of transportation/facilities vs fresh air/silence."
      },
      {
        id: "g7_l2_05",
        category: "Past Memories",
        prompt: "Describe an unforgettable birthday party or family celebration you had in the past.",
        target: "2–3 sentences",
        hint: "Use past tense verbs: 'Last year, we celebrated... My friends came and we ate... It was unforgettable because...'"
      },
      {
        id: "g7_l2_06",
        category: "Inventions & Science",
        prompt: "Which modern invention has changed human life the most: the internet, airplanes, or electricity? Explain your choice.",
        target: "2–3 sentences",
        hint: "State the invention and describe how daily life would be impossible without it."
      },
      {
        id: "g7_l2_07",
        category: "Social Life & Friendship",
        prompt: "What are the three most important qualities of a true friend? Explain why honesty matters.",
        target: "2–3 sentences",
        hint: "Mention loyalty, honesty, sharing secrets, and supporting each other."
      },
      {
        id: "g7_l2_08",
        category: "Television & Media",
        prompt: "Do you think watching television documentaries is better than watching cartoons or series? Why or why not?",
        target: "2–3 sentences",
        hint: "Compare educational value with relaxation and entertainment."
      },
      {
        id: "g7_l2_09",
        category: "Environment & Recycling",
        prompt: "Explain why recycling plastic, glass, and paper is essential for our planet's future.",
        target: "2–3 sentences",
        hint: "Explain waste reduction, saving natural resources, and preventing ocean pollution."
      },
      {
        id: "g7_l2_10",
        category: "Celebrations & Parties",
        prompt: "Imagine you are organizing a surprise farewell party for a classmate. What preparations must you make?",
        target: "2–3 sentences",
        hint: "Mention invitations, decorating the room, ordering a cake, and buying a gift."
      },
      {
        id: "g7_l2_11",
        category: "Sports & Fitness",
        prompt: "Why should teenagers do regular physical exercise instead of sitting in front of computer screens all day?",
        target: "2–3 sentences",
        hint: "Mention physical health, building muscles, boosting mood, and better sleep."
      },
      {
        id: "g7_l2_12",
        category: "Superstitions & Beliefs",
        prompt: "Do you believe in good luck charms (like horseshoes, four-leaf clovers, or evil eye beads)? Why or why not?",
        target: "2–3 sentences",
        hint: "State whether you think luck depends on superstition or hard work and preparation."
      },
      {
        id: "g7_l2_13",
        category: "Space & Planets",
        prompt: "If astronauts discovered life on Mars, how would the world change? What would you like to ask them?",
        target: "2–3 sentences",
        hint: "Express curiosity about alien life, space travel, and scientific discovery."
      },
      {
        id: "g7_l2_14",
        category: "Reading Books vs Playing Games",
        prompt: "Compare reading a thrilling fantasy book with playing a video game. Which stimulates the imagination more?",
        target: "2–3 sentences",
        hint: "Discuss creating images in your mind vs interactive graphics and gameplay."
      },
      {
        id: "g7_l2_15",
        category: "Weekend Plans",
        prompt: "Describe your ideal weekend plan if you had unlimited time and could go anywhere with your best friends.",
        target: "2–3 sentences",
        hint: "Detail activities for Saturday morning, afternoon, and Sunday evening."
      }
    ],

    // LEVEL 3: LATE GAME (Opinions, hypotheses, pros/cons, extended reasoning)
    level3: [
      {
        id: "g7_l3_01",
        category: "Future Predictions & AI",
        prompt: "How do you think schools and classrooms will change in the year 2050? Will robot teachers replace human teachers?",
        target: "3–4 sentences",
        hint: "Express your prediction: 'In 2050, I believe... However, robot teachers cannot understand feelings because...'"
      },
      {
        id: "g7_l3_02",
        category: "Environment & Climate",
        prompt: "If you were appointed Minister of Environment for one month, what two strict rules would you enforce immediately?",
        target: "3–4 sentences",
        hint: "Use conditional: 'If I were the minister, I would ban... In addition, I would require all factories to...'"
      },
      {
        id: "g7_l3_03",
        category: "Social Media & Teen Life",
        prompt: "Discuss one major advantage and one dangerous disadvantage of teenagers using social media apps daily.",
        target: "3–4 sentences",
        hint: "Balance communication/learning with screen addiction, cyberbullying, or lack of sleep."
      },
      {
        id: "g7_l3_04",
        category: "Time Travel Dilemma",
        prompt: "If you had a time machine and could travel either 500 years into the past or 500 years into the future, which would you choose and why?",
        target: "3–4 sentences",
        hint: "Explain your curiosity about ancient history or futuristic flying cities and technology."
      },
      {
        id: "g7_l3_05",
        category: "School Rules Debate",
        prompt: "Should school uniforms be mandatory for all students, or should students wear whatever they like? Give strong arguments.",
        target: "3–4 sentences",
        hint: "Discuss equality and discipline versus personal freedom and self-expression."
      },
      {
        id: "g7_l3_06",
        category: "Space Exploration",
        prompt: "Governments spend billions of dollars exploring outer space. Should we spend this money on space or solving poverty on Earth?",
        target: "3–4 sentences",
        hint: "Weigh scientific discovery and future resources against current human needs on Earth."
      },
      {
        id: "g7_l3_07",
        category: "Global Language",
        prompt: "Why is English considered the most important global language today, and how will speaking fluent English help your future career?",
        target: "3–4 sentences",
        hint: "Mention international business, science, travel, universities, and communicating globally."
      },
      {
        id: "g7_l3_08",
        category: "Artificial Intelligence vs Human Art",
        prompt: "Can AI-generated music and paintings ever replace real human artists? Why or why not?",
        target: "3–4 sentences",
        hint: "Argue whether AI has real human emotion, soul, suffering, and creativity."
      },
      {
        id: "g7_l3_09",
        category: "Ideal Society",
        prompt: "What is the single biggest problem facing young people in society today, and how can schools help solve it?",
        target: "3–4 sentences",
        hint: "Discuss exam stress, digital distraction, peer pressure, or healthy habits."
      },
      {
        id: "g7_l3_10",
        category: "Extreme Adventure",
        prompt: "Would you agree to spend one whole month alone on an uninhabited tropical island with only basic supplies? Why or why not?",
        target: "3–4 sentences",
        hint: "Explain survival skills, dealing with loneliness, and facing nature without technology."
      }
    ]
  },

  // =========================================================================
  // GRADE 8 QUESTIONS
  // =========================================================================
  grade8: {
    // LEVEL 1: EARLY GAME (Short personal questions, preferences, 1-2 sentence answers)
    level1: [
      {
        id: "g8_l1_01",
        category: "Friendship & Qualities",
        prompt: "What is the most important personality trait you look for in a true buddy, and why?",
        target: "1–2 sentences",
        hint: "Trustworthiness, loyalty, honesty, sense of humor, supportive nature."
      },
      {
        id: "g8_l1_02",
        category: "Teen Life & Hobbies",
        prompt: "What is your favorite weekend activity to blow off steam and de-stress after a busy school week?",
        target: "1–2 sentences",
        hint: "Listening to music, riding a bike, gaming, hanging out with friends."
      },
      {
        id: "g8_l1_03",
        category: "Cooking & Kitchen",
        prompt: "What simple snack or dish can you prepare by yourself in the kitchen?",
        target: "1–2 sentences",
        hint: "Mention the ingredients and basic cooking method (e.g., omelette, sandwich, pasta)."
      },
      {
        id: "g8_l1_04",
        category: "Communication Methods",
        prompt: "Do you prefer calling people on the phone, texting instant messages, or talking face-to-face?",
        target: "1–2 sentences",
        hint: "State your preferred communication channel and one main reason."
      },
      {
        id: "g8_l1_05",
        category: "The Internet",
        prompt: "What is the most useful website or educational platform you use to study English or school topics?",
        target: "1–2 sentences",
        hint: "Name the website/platform and explain what you learn there."
      },
      {
        id: "g8_l1_06",
        category: "Adventures & Extreme Sports",
        prompt: "Which extreme sport would you be willing to try once in your life: skydiving, scuba diving, or bungee jumping?",
        target: "1–2 sentences",
        hint: "Choose one sport and describe the feeling of excitement/adrenaline."
      },
      {
        id: "g8_l1_07",
        category: "Tourism & Destinations",
        prompt: "Do you prefer historic cultural holidays with museums or seaside beach resort holidays? Why?",
        target: "1–2 sentences",
        hint: "Contrast sightseeing ancient ruins with relaxing under the sun."
      },
      {
        id: "g8_l1_08",
        category: "Chores & Responsibilities",
        prompt: "Which chore do you find the most annoying or boring to do at home?",
        target: "1–2 sentences",
        hint: "Ironing, taking out trash, vacuuming, dusting shelves, washing dishes."
      },
      {
        id: "g8_l1_09",
        category: "Science & Inventions",
        prompt: "Who is a famous scientist from history that you find remarkable (e.g., Einstein, Tesla, Newton, Marie Curie)?",
        target: "1–2 sentences",
        hint: "Name the scientist and their key contribution or discovery."
      },
      {
        id: "g8_l1_10",
        category: "Natural Forces & Disasters",
        prompt: "What natural disaster do you think is the most frightening, and why?",
        target: "1–2 sentences",
        hint: "Earthquake, tsunami, hurricane, volcanic eruption, flood, avalanche."
      },
      {
        id: "g8_l1_11",
        category: "Music & Concerts",
        prompt: "Have you ever attended a live concert or musical show? If not, whose concert do you want to see?",
        target: "1–2 sentences",
        hint: "Share the artist, band, or atmosphere of live musical performances."
      },
      {
        id: "g8_l1_12",
        category: "Book & Movie Genres",
        prompt: "Which movie genre keeps you on the edge of your seat: sci-fi, detective mystery, or action thriller?",
        target: "1–2 sentences",
        hint: "Express your genre preference and what makes it thrilling."
      },
      {
        id: "g8_l1_13",
        category: "Healthy Habits",
        prompt: "How many hours of sleep do you get each night, and do you feel energized in the morning?",
        target: "1–2 sentences",
        hint: "State your average sleep duration and morning alertness."
      },
      {
        id: "g8_l1_14",
        category: "Future Career",
        prompt: "What profession or career path are you currently dreaming of pursuing after university?",
        target: "1–2 sentences",
        hint: "Software engineering, medicine, aviation, architecture, teaching, design."
      },
      {
        id: "g8_l1_15",
        category: "Inventions We Need",
        prompt: "What fantasy invention do you wish scientists would invent right now to make school life easier?",
        target: "1–2 sentences",
        hint: "Instant memory chip, homework machine, teleporter to avoid morning traffic."
      }
    ],

    // LEVEL 2: MIDDLE GAME (Explain steps, compare, give reasons, 2-3 connected sentences)
    level2: [
      {
        id: "g8_l2_01",
        category: "In the Kitchen & Recipes",
        prompt: "Explain how to prepare a traditional dish or your favorite breakfast step-by-step using linking words (First, Second, Next, Finally).",
        target: "2–3 sentences",
        hint: "Use transition words: 'First, chop... Next, heat the pan with olive oil... Finally, serve it hot.'"
      },
      {
        id: "g8_l2_02",
        category: "On the Phone & Etiquette",
        prompt: "How has smartphone etiquette changed in modern times? What phone habits do you consider rude during family dinners?",
        target: "2–3 sentences",
        hint: "Discuss texting during conversations, answering calls with loud speaker, and ignoring people."
      },
      {
        id: "g8_l2_03",
        category: "Internet Safety & Privacy",
        prompt: "What crucial rules should teenagers follow to protect their personal privacy and stay safe from cyber threats online?",
        target: "2–3 sentences",
        hint: "Mention strong passwords, not sharing personal addresses, and avoiding suspicious download links."
      },
      {
        id: "g8_l2_04",
        category: "Adventures & Extreme Sports",
        prompt: "Why do adrenaline seekers risk their lives doing extreme sports like BASE jumping or mountaineering? Explain the psychological thrill.",
        target: "2–3 sentences",
        hint: "Discuss overcoming fear, pushing personal limits, escaping daily boredom, and feeling alive."
      },
      {
        id: "g8_l2_05",
        category: "Tourism & Cultural Heritage",
        prompt: "Why is Turkey such a world-famous tourist destination? Describe two unique historical or natural attractions.",
        target: "2–3 sentences",
        hint: "Mention Cappadocia's fairy chimneys, Pamukkale travertines, Ephesus, or Istanbul's historic Bosphorus."
      },
      {
        id: "g8_l2_06",
        category: "Chores & Family Cooperation",
        prompt: "Why is sharing household chores equally among all family members vital for a happy and peaceful home?",
        target: "2–3 sentences",
        hint: "Explain fairness, relieving parents' exhaustion, teaching responsibility, and teamwork."
      },
      {
        id: "g8_l2_07",
        category: "Scientific Breakthroughs",
        prompt: "Describe how the invention of antibiotics and vaccines revolutionized global public health over the last century.",
        target: "2–3 sentences",
        hint: "Mention curing deadly bacterial diseases, extending life expectancy, and saving millions of lives."
      },
      {
        id: "g8_l2_08",
        category: "Natural Disasters Preparedness",
        prompt: "What emergency items should every household keep packed in an earthquake emergency bag (survival kit)?",
        target: "2–3 sentences",
        hint: "Water bottles, canned food, flashlight with spare batteries, first-aid kit, whistle, and warm blanket."
      },
      {
        id: "g8_l2_09",
        category: "Teen Friendship Conflict",
        prompt: "If your best friend broke a promise or shared your secret with others, how would you resolve the conflict maturely?",
        target: "2–3 sentences",
        hint: "Describe having an honest private conversation, explaining your hurt feelings, and setting boundaries."
      },
      {
        id: "g8_l2_10",
        category: "Online Learning vs Traditional Classroom",
        prompt: "Compare attending classes in a real physical school with online distance learning. Which provides better social interaction?",
        target: "2–3 sentences",
        hint: "Discuss face-to-face peer conversations, group projects, and teacher guidance vs sitting alone at a computer."
      },
      {
        id: "g8_l2_11",
        category: "Healthy Eating & Energy",
        prompt: "Why do many teenagers skip breakfast, and how does skipping breakfast negatively impact school concentration?",
        target: "2–3 sentences",
        hint: "Mention morning rush, low blood sugar, lack of focus in morning classes, and midday fatigue."
      },
      {
        id: "g8_l2_12",
        category: "Travel & Broadening Horizons",
        prompt: "How does traveling to a foreign country with a completely different language and culture expand a person's mindset?",
        target: "2–3 sentences",
        hint: "Mention learning tolerance, experiencing new cuisines, speaking languages, and breaking prejudices."
      },
      {
        id: "g8_l2_13",
        category: "Eco-Friendly Transportation",
        prompt: "Why should major metropolitan cities invest in electric bicycles and subway networks instead of building wider highways?",
        target: "2–3 sentences",
        hint: "Explain reducing carbon emissions, eliminating gridlock traffic, and promoting active health."
      },
      {
        id: "g8_l2_14",
        category: "Smart Homes & IoT",
        prompt: "How do smart home technologies (voice assistants, automated lighting, robotic vacuums) make daily life convenient?",
        target: "2–3 sentences",
        hint: "Discuss saving time, energy efficiency, remote security control, and effortless cleaning."
      },
      {
        id: "g8_l2_15",
        category: "Role of Sports in Character",
        prompt: "How does participating in team sports like basketball or volleyball develop leadership and cooperation skills in teenagers?",
        target: "2–3 sentences",
        hint: "Mention communication on the court, handling defeat gracefully, and trusting your teammates."
      }
    ],

    // LEVEL 3: LATE GAME (High-stakes reasoning, opinions, ethical dilemmas, mini-discussions)
    level3: [
      {
        id: "g8_l3_01",
        category: "Artificial Intelligence & Ethics",
        prompt: "As artificial intelligence advances rapidly, do you think autonomous AI machines should make decisions in medicine and law? Defend your position.",
        target: "3–4 sentences",
        hint: "Balance high computational speed and zero human fatigue with the absence of empathy, morals, and accountability."
      },
      {
        id: "g8_l3_02",
        category: "Climate Crisis & Global Responsibility",
        prompt: "Global warming is causing extreme heatwaves and wild storms. Is the responsibility on individual citizens or large multinational corporations?",
        target: "3–4 sentences",
        hint: "Argue how corporate pollution drives emissions while individual consumer habits and green voting create demand for change."
      },
      {
        id: "g8_l3_03",
        category: "Digital Overload & Mental Health",
        prompt: "Many experts propose banning smartphones in middle schools worldwide. Do you support this ban? Provide reasoned arguments.",
        target: "3–4 sentences",
        hint: "Discuss improved classroom attention, reduced cyberbullying, and real playground friendships vs emergency safety and digital learning tools."
      },
      {
        id: "g8_l3_04",
        category: "Space Colonization vs Earth",
        prompt: "Should humanity invest trillions of dollars into establishing permanent human colonies on Mars, or focus all resources on saving Earth's ecosystems?",
        target: "3–4 sentences",
        hint: "Discuss backup plan for human extinction and technological innovation vs the urgency of saving our only living biosphere."
      },
      {
        id: "g8_l3_05",
        category: "Success & Hard Work vs Talent",
        prompt: "In achieving greatness in sports, arts, or academics, what matters more: natural born talent or relentless daily discipline? Explain.",
        target: "3–4 sentences",
        hint: "Quote or reference how talent without hard work fails when hard work beats talent."
      },
      {
        id: "g8_l3_06",
        category: "Social Media Algorithms",
        prompt: "Social media platforms use algorithms designed to keep users scrolling for hours. How does this affect teenagers' attention spans and real-life goals?",
        target: "3–4 sentences",
        hint: "Discuss dopamine loops, reduced reading stamina, procrastination on homework, and distorted body images."
      },
      {
        id: "g8_l3_07",
        category: "Cashless Society",
        prompt: "Will physical paper money completely disappear in the next 20 years? What are the advantages and security risks of a 100% digital economy?",
        target: "3–4 sentences",
        hint: "Discuss speed and frictionless digital payments vs cyber hacking, power outages, and lack of financial privacy."
      },
      {
        id: "g8_l3_08",
        category: "Future of Transportation",
        prompt: "Imagine self-driving electric cars become universal. How will city infrastructure, parking lots, and traffic accidents transform?",
        target: "3–4 sentences",
        hint: "Describe zero human driving errors, turning parking garages into green parks, and smooth automated traffic flow."
      },
      {
        id: "g8_l3_09",
        category: "Biodiversity & Ocean Conservation",
        prompt: "Over 8 million tons of plastic waste enter oceans annually. What aggressive international measures should countries enact to restore marine life?",
        target: "3–4 sentences",
        hint: "Discuss biodegradable packaging laws, ocean cleanup vessels, and imposing heavy taxes on single-use plastics."
      },
      {
        id: "g8_l3_10",
        category: "Lifelong Learning & Skills",
        prompt: "In a fast-changing world where jobs transform constantly, what is the most valuable skill a teenager can learn today?",
        target: "3–4 sentences",
        hint: "Mention adaptability, critical thinking, creative problem solving, and effective foreign language communication."
      }
    ]
  }
};

// Deal / No Deal Discussion Prompts (Short spoken justifications before making the big decision)
const DEAL_DECISION_PROMPTS = [
  "Explain to the class why your team wants to ACCEPT or REJECT this Banker's offer.",
  "What is the mathematical risk of rejecting this offer? Tell your classmates.",
  "Which high prize remaining on the board makes you want to keep playing (or take the deal)?",
  "How will your team feel if you reject this deal and open the 20,000 point box next?",
  "Convince your teammates: Is this Banker offer generous or stingy?"
];
