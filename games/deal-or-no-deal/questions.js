/**
 * DEAL OR NO DEAL – SPEAKING SHOWDOWN
 * Accessible, Classroom-Friendly Speaking Challenges for 7th & 8th Grade English
 * Categorized into Early Game (Level 1), Middle Game (Level 2), and Late Game (Level 3)
 */

const DEAL_SPEAKING_BANK = {
  // =========================================================================
  // GRADE 7 QUESTIONS (Everyday topics, familiar vocabulary, simple grammar)
  // =========================================================================
  grade7: {
    // LEVEL 1: EARLY GAME (Very easy questions, 1–2 sentences)
    level1: [
      {
        id: "g7_l1_01",
        category: "Food & Drinks",
        prompt: "What is your favorite food, and why do you like it?",
        target: "1–2 sentences",
        hint: "Start with: 'My favorite food is... because it is delicious/tasty.'"
      },
      {
        id: "g7_l1_02",
        category: "Daily Routine",
        prompt: "What do you usually do right after school finishes?",
        target: "1–2 sentences",
        hint: "Start with: 'After school, I usually go home and...'"
      },
      {
        id: "g7_l1_03",
        category: "Friends",
        prompt: "Describe your best friend using two positive personality words.",
        target: "1–2 sentences",
        hint: "Words like: friendly, funny, kind, helpful, smart."
      },
      {
        id: "g7_l1_04",
        category: "Past Activities",
        prompt: "What did you do yesterday evening?",
        target: "1–2 sentences",
        hint: "Start with: 'Yesterday evening, I watched/studied/played...'"
      },
      {
        id: "g7_l1_05",
        category: "Abilities & Talents",
        prompt: "What is one thing you can do very well?",
        target: "1–2 sentences",
        hint: "Start with: 'I can play football / draw pictures / speak English well.'"
      },
      {
        id: "g7_l1_06",
        category: "School Subjects",
        prompt: "What is your favorite school subject and why?",
        target: "1–2 sentences",
        hint: "Start with: 'My favorite subject is English/Maths/Art because...'"
      },
      {
        id: "g7_l1_07",
        category: "Animals & Pets",
        prompt: "What is your favorite animal, and do you have a pet at home?",
        target: "1–2 sentences",
        hint: "Start with: 'My favorite animal is a dog/cat because...'"
      },
      {
        id: "g7_l1_08",
        category: "Weather & Seasons",
        prompt: "Which season do you like best: summer, winter, spring, or autumn?",
        target: "1–2 sentences",
        hint: "Start with: 'I like summer because the weather is sunny and warm.'"
      },
      {
        id: "g7_l1_09",
        category: "Sports & Games",
        prompt: "What sport or game do you enjoy playing with your friends?",
        target: "1–2 sentences",
        hint: "Start with: 'I enjoy playing basketball / video games with my friends.'"
      },
      {
        id: "g7_l1_10",
        category: "Morning Habits",
        prompt: "What time do you wake up on weekdays, and what do you eat for breakfast?",
        target: "1–2 sentences",
        hint: "Start with: 'I wake up at 7:00 and eat eggs, cheese, and bread.'"
      },
      {
        id: "g7_l1_11",
        category: "Music & Entertainment",
        prompt: "Who is your favorite singer or band, and when do you listen to them?",
        target: "1–2 sentences",
        hint: "Start with: 'My favorite singer is... I listen to them when I relax.'"
      },
      {
        id: "g7_l1_12",
        category: "Clothes & Style",
        prompt: "What do you like wearing on weekends when you go out?",
        target: "1–2 sentences",
        hint: "Start with: 'On weekends, I like wearing jeans, a hoodie, and sneakers.'"
      },
      {
        id: "g7_l1_13",
        category: "Chores at Home",
        prompt: "Which household chore do you help your parents with at home?",
        target: "1–2 sentences",
        hint: "Start with: 'I help by tidying my room / setting the dinner table.'"
      },
      {
        id: "g7_l1_14",
        category: "Colors & Preferences",
        prompt: "What is your favorite color, and what thing in your room has that color?",
        target: "1–2 sentences",
        hint: "Start with: 'My favorite color is blue. My school bag is blue.'"
      },
      {
        id: "g7_l1_15",
        category: "Feelings & Mood",
        prompt: "What makes you laugh or feel happy when you are tired?",
        target: "1–2 sentences",
        hint: "Start with: 'Watching funny videos / talking with friends makes me happy.'"
      }
    ],

    // LEVEL 2: MIDDLE GAME (A little more explanation, 2–3 sentences)
    level2: [
      {
        id: "g7_l2_01",
        category: "Weekends & Fun",
        prompt: "What do you usually do at weekends, and why do you enjoy it?",
        target: "2–3 sentences",
        hint: "Describe your Saturday or Sunday routine and why it is fun for you."
      },
      {
        id: "g7_l2_02",
        category: "Travel & Dream Places",
        prompt: "Describe a city or place you would like to visit in the future and explain why.",
        target: "2–3 sentences",
        hint: "Name the city/country and 2 interesting things you want to see or do there."
      },
      {
        id: "g7_l2_03",
        category: "Hobbies & Frequency",
        prompt: "What is your favorite hobby? How often do you do it, and who do you do it with?",
        target: "2–3 sentences",
        hint: "Use frequency words like: every day, twice a week, on weekends."
      },
      {
        id: "g7_l2_04",
        category: "Healthy Living",
        prompt: "What healthy habits do you have to stay strong and energetic?",
        target: "2–3 sentences",
        hint: "Mention drinking water, eating fruits, sleeping early, or doing sports."
      },
      {
        id: "g7_l2_05",
        category: "Memorable Holidays",
        prompt: "Tell us about a fun holiday or family trip you had in the past.",
        target: "2–3 sentences",
        hint: "Where did you go, who did you go with, and what was the best moment?"
      },
      {
        id: "g7_l2_06",
        category: "City vs Village Life",
        prompt: "Would you rather live in a big crowded city or a quiet green village? Give two reasons.",
        target: "2–3 sentences",
        hint: "Compare fresh air and quiet life with shopping malls and cinemas."
      },
      {
        id: "g7_l2_07",
        category: "Friendship",
        prompt: "Why is it important to have good friends at school? How do you support each other?",
        target: "2–3 sentences",
        hint: "Mention sharing secrets, studying together, and having fun at break times."
      },
      {
        id: "g7_l2_08",
        category: "Movies & Books",
        prompt: "Tell us about a movie, cartoon, or book you really liked recently. What was it about?",
        target: "2–3 sentences",
        hint: "State the name, the main character, and why the ending was great."
      },
      {
        id: "g7_l2_09",
        category: "Helping at Home",
        prompt: "Why should children help their parents with house chores? Which chore is easiest for you?",
        target: "2–3 sentences",
        hint: "Explain sharing work in the family and taking responsibility."
      },
      {
        id: "g7_l2_10",
        category: "Dream Pet",
        prompt: "If you could adopt any pet in the world, what animal would you choose and how would you care for it?",
        target: "2–3 sentences",
        hint: "Name the pet, where it would sleep, and what food you would give it."
      },
      {
        id: "g7_l2_11",
        category: "School Breaks",
        prompt: "What do you and your classmates like doing during 10-minute break times at school?",
        target: "2–3 sentences",
        hint: "Talk about chatting in the hallway, eating snacks, or playing in the yard."
      },
      {
        id: "g7_l2_12",
        category: "Future Dreams",
        prompt: "What job or career would you like to have when you grow up, and why?",
        target: "2–3 sentences",
        hint: "Doctor, teacher, pilot, engineer, gamer, artist... give a simple reason."
      }
    ],

    // LEVEL 3: LATE GAME (Thoughtful but classroom-friendly, 3–4 sentences)
    level3: [
      {
        id: "g7_l3_01",
        category: "School Changes",
        prompt: "If you could change one thing about your school, what would you change and why?",
        target: "3–4 sentences",
        hint: "Think about school hours, canteen food, sports facilities, or homework."
      },
      {
        id: "g7_l3_02",
        category: "Free Weekend",
        prompt: "What would you do if you had a completely free weekend with your best friends and no homework?",
        target: "3–4 sentences",
        hint: "Plan Saturday morning, afternoon, and Sunday fun activities."
      },
      {
        id: "g7_l3_03",
        category: "Good Student Debate",
        prompt: "Which is more important for a good student: studying hard or managing time well? Explain your opinion.",
        target: "3–4 sentences",
        hint: "Explain why time management helps you study without getting tired or stressed."
      },
      {
        id: "g7_l3_04",
        category: "Superpower Imagination",
        prompt: "If you could have one magical superpower (flying, invisibility, or teleportation), which would you choose and how would you use it?",
        target: "3–4 sentences",
        hint: "State the superpower, where you would go, and how you would help people."
      },
      {
        id: "g7_l3_05",
        category: "Saving Nature",
        prompt: "What are two simple things every 7th grade student can do to protect the environment at school?",
        target: "3–4 sentences",
        hint: "Mention throwing trash in recycling bins, turning off lights, and saving water."
      },
      {
        id: "g7_l3_06",
        category: "Smartphones in School",
        prompt: "Do you think students should be allowed to use phones during break times at school? Give your reasons.",
        target: "3–4 sentences",
        hint: "Mention talking with friends face-to-face versus calling parents or playing games."
      },
      {
        id: "g7_l3_07",
        category: "Learning English",
        prompt: "Why is learning English useful for young people today? How do you practice English outside school?",
        target: "3–4 sentences",
        hint: "Mention watching movies with subtitles, listening to music, playing games, and travel."
      },
      {
        id: "g7_l3_08",
        category: "Ideal Birthday Party",
        prompt: "Describe your dream birthday party. Where is it, who is invited, and what fun games do you play?",
        target: "3–4 sentences",
        hint: "Describe the cake, music, decorations, and exciting games with classmates."
      }
    ]
  },

  // =========================================================================
  // GRADE 8 QUESTIONS (Teen life, communication, comparisons, future goals)
  // =========================================================================
  grade8: {
    // LEVEL 1: EARLY GAME (Accessible teen topics, 1–2 sentences)
    level1: [
      {
        id: "g8_l1_01",
        category: "Friendship Qualities",
        prompt: "What is the most important quality you look for in a good friend?",
        target: "1–2 sentences",
        hint: "Start with: 'In a good friend, honesty/loyalty/kindness is most important because...'"
      },
      {
        id: "g8_l1_02",
        category: "Teen Routines",
        prompt: "What is your favorite activity to relax after a stressful test or busy week?",
        target: "1–2 sentences",
        hint: "Start with: 'To relax, I usually listen to music / play games / walk outside.'"
      },
      {
        id: "g8_l1_03",
        category: "Simple Cooking",
        prompt: "What is a simple snack or food you can prepare by yourself in the kitchen?",
        target: "1–2 sentences",
        hint: "Start with: 'I can make a toast / sandwich / fruit salad by...'"
      },
      {
        id: "g8_l1_04",
        category: "Communication",
        prompt: "Do you prefer sending text messages or calling your friends on the phone? Why?",
        target: "1–2 sentences",
        hint: "Start with: 'I prefer texting/calling because it is faster and easier.'"
      },
      {
        id: "g8_l1_05",
        category: "Internet & Apps",
        prompt: "Which smartphone app or website do you find most useful for your schoolwork?",
        target: "1–2 sentences",
        hint: "Start with: 'I use... because it helps me learn new words and study.'"
      },
      {
        id: "g8_l1_06",
        category: "Adventures & Sports",
        prompt: "Which adventure sport would you like to try once: rafting, skateboarding, or climbing?",
        target: "1–2 sentences",
        hint: "Start with: 'I would like to try... because it sounds exciting and fun.'"
      },
      {
        id: "g8_l1_07",
        category: "Music & Taste",
        prompt: "What type of music gives you the most energy when you are studying or exercising?",
        target: "1–2 sentences",
        hint: "Start with: 'I love listening to pop/rock/hip-hop because the rhythm is energetic.'"
      },
      {
        id: "g8_l1_08",
        category: "Chores & Duties",
        prompt: "Which household chore is the most boring for you to do at home?",
        target: "1–2 sentences",
        hint: "Start with: 'Washing dishes / making my bed is boring because...'"
      },
      {
        id: "g8_l1_09",
        category: "Holidays & Travel",
        prompt: "Do you prefer summer beach holidays or historic sightseeing holidays?",
        target: "1–2 sentences",
        hint: "Start with: 'I prefer beach/historic holidays because I love swimming/visiting museums.'"
      },
      {
        id: "g8_l1_10",
        category: "Science & Inventions",
        prompt: "Which invention do you think humans cannot live without today: smartphones, electricity, or cars?",
        target: "1–2 sentences",
        hint: "Start with: 'Electricity is most important because without it nothing works.'"
      },
      {
        id: "g8_l1_11",
        category: "Daily Sleep",
        prompt: "How many hours of sleep do you get each night, and do you feel awake in the morning?",
        target: "1–2 sentences",
        hint: "Start with: 'I usually sleep 8 hours, and I feel refreshed in the morning.'"
      },
      {
        id: "g8_l1_12",
        category: "Weekend Plans",
        prompt: "What are your plans for this coming weekend with your family or friends?",
        target: "1–2 sentences",
        hint: "Start with: 'This weekend, I am going to meet my friends and visit...'"
      },
      {
        id: "g8_l1_13",
        category: "Personal Goals",
        prompt: "What is one personal goal you want to achieve before this school year ends?",
        target: "1–2 sentences",
        hint: "Start with: 'My goal is to improve my English marks / read 5 books.'"
      },
      {
        id: "g8_l1_14",
        category: "Favourite Book or Film",
        prompt: "What is your favorite movie or book genre (comedy, action, sci-fi, horror) and why?",
        target: "1–2 sentences",
        hint: "Start with: 'I love comedy/action because it makes me laugh / is thrilling.'"
      },
      {
        id: "g8_l1_15",
        category: "Social Life",
        prompt: "Do you like spending time alone in your room or being surrounded by friends? Why?",
        target: "1–2 sentences",
        hint: "State whether you recharge alone or enjoy socializing with others."
      }
    ],

    // LEVEL 2: MIDDLE GAME (Explanations, comparisons, recipes, 2–3 sentences)
    level2: [
      {
        id: "g8_l2_01",
        category: "Kitchen & Recipes",
        prompt: "Explain how to make your favorite sandwich, pasta, or snack using linking words (First, Next, Finally).",
        target: "2–3 sentences",
        hint: "Start with: 'First, take the bread... Next, put cheese and tomato... Finally, grill it.'"
      },
      {
        id: "g8_l2_02",
        category: "Phone Etiquette",
        prompt: "What phone habits do you think are rude when people are having dinner together as a family?",
        target: "2–3 sentences",
        hint: "Discuss texting during meals, answering loud calls, and ignoring family members."
      },
      {
        id: "g8_l2_03",
        category: "Friendship Disagreements",
        prompt: "If you have a disagreement with your best friend, what is the best way to solve it peacefully?",
        target: "2–3 sentences",
        hint: "Talk about listening calmly, saying sorry, and talking face-to-face."
      },
      {
        id: "g8_l2_04",
        category: "Sports & Teenage Health",
        prompt: "Why should teenagers do regular sports instead of sitting in front of screens all day?",
        target: "2–3 sentences",
        hint: "Explain physical energy, healthy heart, feeling happy, and better focus."
      },
      {
        id: "g8_l2_05",
        category: "Famous Sights",
        prompt: "What is the most famous historical or natural place in Turkey that every tourist should visit?",
        target: "2–3 sentences",
        hint: "Describe Cappadocia, Pamukkale, Ephesus, or Istanbul's historic landmarks."
      },
      {
        id: "g8_l2_06",
        category: "Family Teamwork",
        prompt: "Why is it fair for everyone in the family to share household duties equally?",
        target: "2–3 sentences",
        hint: "Explain that parents work hard and sharing chores makes everyone happy and relaxed."
      },
      {
        id: "g8_l2_07",
        category: "Internet Safety",
        prompt: "What are two important safety rules teenagers should follow when using the internet or social apps?",
        target: "2–3 sentences",
        hint: "Mention keeping passwords secret and not talking to strangers online."
      },
      {
        id: "g8_l2_08",
        category: "Breakfast & Energy",
        prompt: "Why is breakfast considered the most important meal for a student before taking morning exams?",
        target: "2–3 sentences",
        hint: "Explain how food gives brain energy, stops hunger, and improves concentration."
      },
      {
        id: "g8_l2_09",
        category: "Travel & Broadening Horizons",
        prompt: "How does traveling to a new city or foreign country help a teenager learn new things?",
        target: "2–3 sentences",
        hint: "Mention tasting different foods, hearing new languages, and meeting new people."
      },
      {
        id: "g8_l2_10",
        category: "Eco-Friendly Transport",
        prompt: "Why is riding bicycles or walking to school better for our town than using private cars?",
        target: "2–3 sentences",
        hint: "Explain reducing air pollution, keeping students fit, and saving money on fuel."
      },
      {
        id: "g8_l2_11",
        category: "Team Sports & Cooperation",
        prompt: "What does playing in a team sport like volleyball or football teach you about cooperation?",
        target: "2–3 sentences",
        hint: "Mention trusting teammates, passing the ball, and celebrating together."
      },
      {
        id: "g8_l2_12",
        category: "Science Breakthroughs",
        prompt: "Name one scientific invention from history (like the internet, vaccines, or airplanes) and explain why it helped humanity.",
        target: "2–3 sentences",
        hint: "Explain how it saves lives, connects people across the globe, or makes travel fast."
      }
    ],

    // LEVEL 3: LATE GAME (Opinions, dilemmas, future paths, 3–4 sentences)
    level3: [
      {
        id: "g8_l3_01",
        category: "School Uniforms Debate",
        prompt: "Should school uniforms be mandatory for all students, or should students choose their own clothes? Explain your opinion.",
        target: "3–4 sentences",
        hint: "Discuss equality and feeling part of a team vs comfort and personal style."
      },
      {
        id: "g8_l3_02",
        category: "Future Classrooms & AI",
        prompt: "How will classrooms and teaching be different in the year 2040? Will computers replace teachers?",
        target: "3–4 sentences",
        hint: "Explain that computers can help with exercises, but human teachers provide kindness and guidance."
      },
      {
        id: "g8_l3_03",
        category: "Dream Career Path",
        prompt: "What profession or career are you interested in for your future, and what skills do you need to learn for it?",
        target: "3–4 sentences",
        hint: "Mention your dream job (doctor, programmer, pilot, architect), university goals, and language skills."
      },
      {
        id: "g8_l3_04",
        category: "Saving vs Spending",
        prompt: "If you received 10.000 TL as a birthday gift today, would you save it for the future or spend it immediately? Explain why.",
        target: "3–4 sentences",
        hint: "Explain what items you might buy versus saving for a computer, bike, or future education."
      },
      {
        id: "g8_l3_05",
        category: "Smartphone Addiction",
        prompt: "Many teenagers spend 4–5 hours on their phones every day. What are two negative effects of this, and how can we reduce screen time?",
        target: "3–4 sentences",
        hint: "Mention eye strain, less sleep, missing sports, and setting daily time limits."
      },
      {
        id: "g8_l3_06",
        category: "Success: Talent vs Hard Work",
        prompt: "In sports, music, or school, what is more important: natural talent or daily hard work? Defend your view.",
        target: "3–4 sentences",
        hint: "Explain that talent without practice is not enough, and hard work always leads to success."
      },
      {
        id: "g8_l3_07",
        category: "Ideal Weekend Trip",
        prompt: "If you could plan a 3-day class trip anywhere with your teachers and classmates, where would you go and what would you do?",
        target: "3–4 sentences",
        hint: "Describe the destination, hotel/camping, sightseeing, and fun evening activities."
      },
      {
        id: "g8_l3_08",
        category: "Protecting Our Planet",
        prompt: "What is the biggest environmental problem in your city (traffic, plastic waste, air pollution), and how can citizens solve it?",
        target: "3–4 sentences",
        hint: "Mention using reusable bags, planting trees, using public transport, and recycling."
      }
    ]
  }
};

// Deal / No Deal Spoken Discussion Prompts for Banker Offers
const DEAL_DECISION_PROMPTS = [
  "Explain to your classmates why your team wants to ACCEPT or REJECT this Ziraat Bankası Banker offer!",
  "What is the mathematical risk of saying NO DEAL? Look at the remaining high prizes!",
  "Is this offer generous or stingy compared to the remaining 250.000.000 TL jackpot?",
  "Convince your teammates: Should we secure this guaranteed money or gamble on our Secret Box?",
  "Tell the class: What will your team do if the next box opened is 250.000.000 TL?"
];
