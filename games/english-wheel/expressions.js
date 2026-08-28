/**
 * ENGLISH WHEEL - Educational Content Dataset
 * Comprehensive dataset for Grade 7 (A2-A2+) and Grade 8 (A2+-B1)
 * Expressions categorized into: IDIOM, COMMON PHRASE, DAILY EXPRESSION, PHRASAL VERB, PROVERB, FUNCTIONAL LANGUAGE, COLLOCATION
 */

const grade7Expressions = [
  // IDIOMS (Grade 7 - Accessible, Common)
  {
    phrase: "PIECE OF CAKE",
    category: "IDIOM",
    meaning: "Something that is very easy to do.",
    exampleSentence: "Don't worry about the English quiz, it's a piece of cake!",
    difficulty: 1
  },
  {
    phrase: "BREAK A LEG",
    category: "IDIOM",
    meaning: "Good luck (especially before a performance or test).",
    exampleSentence: "You have your drama presentation today—break a leg!",
    difficulty: 1
  },
  {
    phrase: "ON CLOUD NINE",
    category: "IDIOM",
    meaning: "Extremely happy and excited.",
    exampleSentence: "When she won first prize, she was on cloud nine.",
    difficulty: 1
  },
  {
    phrase: "FEEL UNDER THE WEATHER",
    category: "IDIOM",
    meaning: "Feeling slightly sick or unwell.",
    exampleSentence: "I cannot come to school today because I feel under the weather.",
    difficulty: 1
  },
  {
    phrase: "A BLESSING IN DISGUISE",
    category: "IDIOM",
    meaning: "A good thing that seemed bad at first.",
    exampleSentence: "Missing the bus was a blessing in disguise because I met my best friend.",
    difficulty: 2
  },
  {
    phrase: "HIT THE BOOKS",
    category: "IDIOM",
    meaning: "To start studying seriously.",
    exampleSentence: "The exams start tomorrow, so I need to hit the books tonight.",
    difficulty: 1
  },
  {
    phrase: "TIME FLIES",
    category: "IDIOM",
    meaning: "Time seems to pass very quickly.",
    exampleSentence: "Time flies when you are having fun playing games with friends.",
    difficulty: 1
  },
  {
    phrase: "ONCE IN A BLUE MOON",
    category: "IDIOM",
    meaning: "Very rarely; almost never.",
    exampleSentence: "We only go camping once in a blue moon during the summer.",
    difficulty: 2
  },
  {
    phrase: "CALL IT A DAY",
    category: "IDIOM",
    meaning: "To stop working on something for the rest of the day.",
    exampleSentence: "We worked for four hours on the project, let's call it a day.",
    difficulty: 1
  },
  {
    phrase: "SPILL THE BEANS",
    category: "IDIOM",
    meaning: "To reveal a secret by mistake.",
    exampleSentence: "Don't spill the beans about the surprise birthday party!",
    difficulty: 1
  },
  {
    phrase: "BITE YOUR TONGUE",
    category: "IDIOM",
    meaning: "To stop yourself from saying something rude or hurtful.",
    exampleSentence: "I wanted to argue with the referee, but I had to bite my tongue.",
    difficulty: 2
  },
  {
    phrase: "COST AN ARM AND A LEG",
    category: "IDIOM",
    meaning: "To be extremely expensive.",
    exampleSentence: "The latest smartphone costs an arm and a leg.",
    difficulty: 2
  },
  {
    phrase: "OUT OF THE BLUE",
    category: "IDIOM",
    meaning: "Happening suddenly and unexpectedly.",
    exampleSentence: "She called me out of the blue after three years.",
    difficulty: 1
  },
  {
    phrase: "KEEP AN EYE ON",
    category: "IDIOM",
    meaning: "To watch or look after someone or something carefully.",
    exampleSentence: "Could you please keep an eye on my backpack while I get water?",
    difficulty: 1
  },
  {
    phrase: "UNDER PRESSURE",
    category: "IDIOM",
    meaning: "In a stressful situation where quick action is required.",
    exampleSentence: "He plays his best basketball when he is under pressure.",
    difficulty: 1
  },

  // DAILY EXPRESSIONS (Grade 7)
  {
    phrase: "SEE YOU LATER",
    category: "DAILY EXPRESSION",
    meaning: "A friendly way to say goodbye to someone.",
    exampleSentence: "Have a great weekend, see you later!",
    difficulty: 1
  },
  {
    phrase: "TAKE CARE OF YOURSELF",
    category: "DAILY EXPRESSION",
    meaning: "A warm goodbye wishing someone good health.",
    exampleSentence: "It was nice seeing you, take care of yourself!",
    difficulty: 1
  },
  {
    phrase: "NICE TO MEET YOU",
    category: "DAILY EXPRESSION",
    meaning: "A polite greeting when meeting someone for the first time.",
    exampleSentence: "Welcome to our class, nice to meet you!",
    difficulty: 1
  },
  {
    phrase: "HAVE A GOOD TIME",
    category: "DAILY EXPRESSION",
    meaning: "Wishing someone an enjoyable experience.",
    exampleSentence: "Enjoy the concert tonight and have a good time!",
    difficulty: 1
  },
  {
    phrase: "MAKE YOURSELF AT HOME",
    category: "DAILY EXPRESSION",
    meaning: "Feel comfortable as if you were in your own house.",
    exampleSentence: "Come in, take off your shoes and make yourself at home.",
    difficulty: 1
  },
  {
    phrase: "LONG TIME NO SEE",
    category: "DAILY EXPRESSION",
    meaning: "Said when you meet someone you haven't seen for a while.",
    exampleSentence: "Hey Mark! Long time no see, how have you been?",
    difficulty: 1
  },
  {
    phrase: "GOOD LUCK WITH YOUR TEST",
    category: "DAILY EXPRESSION",
    meaning: "Expressing best wishes before an exam.",
    exampleSentence: "You studied hard, good luck with your test!",
    difficulty: 1
  },
  {
    phrase: "WHAT ARE YOU UP TO",
    category: "DAILY EXPRESSION",
    meaning: "Asking what someone is doing currently.",
    exampleSentence: "Hey Sarah, what are you up to this afternoon?",
    difficulty: 1
  },
  {
    phrase: "THANKS A MILLION",
    category: "DAILY EXPRESSION",
    meaning: "Thank you very much.",
    exampleSentence: "Thanks a million for helping me carry these heavy books.",
    difficulty: 1
  },
  {
    phrase: "HOW IS IT GOING",
    category: "DAILY EXPRESSION",
    meaning: "A casual way to ask someone how they are.",
    exampleSentence: "Hi Tom, how is it going with your new puppy?",
    difficulty: 1
  },
  {
    phrase: "NEVER MIND",
    category: "DAILY EXPRESSION",
    meaning: "It doesn't matter; forget what I said.",
    exampleSentence: "I found my pencil, so never mind my question.",
    difficulty: 1
  },
  {
    phrase: "YOU ARE WELCOME",
    category: "DAILY EXPRESSION",
    meaning: "Polite response after someone thanks you.",
    exampleSentence: "Thank you for the marker! — You are welcome.",
    difficulty: 1
  },

  // PHRASAL VERBS (Grade 7 - Accessible)
  {
    phrase: "GIVE UP",
    category: "PHRASAL VERB",
    meaning: "To stop trying to do something.",
    exampleSentence: "The puzzle is difficult, but don't give up!",
    difficulty: 1
  },
  {
    phrase: "LOOK AFTER",
    category: "PHRASAL VERB",
    meaning: "To take care of someone or something.",
    exampleSentence: "I have to look after my little brother this evening.",
    difficulty: 1
  },
  {
    phrase: "TURN OFF THE LIGHTS",
    category: "PHRASAL VERB",
    meaning: "To stop the flow of electricity to lamps.",
    exampleSentence: "Please turn off the lights when you leave the classroom.",
    difficulty: 1
  },
  {
    phrase: "FIND OUT",
    category: "PHRASAL VERB",
    meaning: "To discover or learn information.",
    exampleSentence: "Let's check the schedule to find out what time the match starts.",
    difficulty: 1
  },
  {
    phrase: "GET ALONG WITH",
    category: "PHRASAL VERB",
    meaning: "To have a friendly relationship with someone.",
    exampleSentence: "I get along with all of my classmates very well.",
    difficulty: 1
  },
  {
    phrase: "WAKE UP EARLY",
    category: "PHRASAL VERB",
    meaning: "To stop sleeping at an early hour.",
    exampleSentence: "We have to wake up early tomorrow for the school trip.",
    difficulty: 1
  },
  {
    phrase: "PUT ON YOUR COAT",
    category: "PHRASAL VERB",
    meaning: "To dress yourself in a coat.",
    exampleSentence: "It is freezing outside, put on your coat.",
    difficulty: 1
  },
  {
    phrase: "HANG OUT WITH FRIENDS",
    category: "PHRASAL VERB",
    meaning: "To spend time relaxing together.",
    exampleSentence: "On Saturdays, I like to hang out with friends at the park.",
    difficulty: 1
  },
  {
    phrase: "LOOK UP A WORD",
    category: "PHRASAL VERB",
    meaning: "To search for information in a dictionary or book.",
    exampleSentence: "If you don't know the meaning, look up the word in the dictionary.",
    difficulty: 1
  },
  {
    phrase: "RUN OUT OF TIME",
    category: "PHRASAL VERB",
    meaning: "To have no more time left to complete a task.",
    exampleSentence: "Hurry up, we are going to run out of time!",
    difficulty: 1
  },
  {
    phrase: "PICK UP THE TRASH",
    category: "PHRASAL VERB",
    meaning: "To lift and collect rubbish from the ground.",
    exampleSentence: "Everyone helped pick up the trash after the picnic.",
    difficulty: 1
  },

  // SAYINGS & PROVERBS (Grade 7)
  {
    phrase: "BETTER LATE THAN NEVER",
    category: "SAYING",
    meaning: "It is better to do something late than not do it at all.",
    exampleSentence: "You finally submitted your assignment—better late than never!",
    difficulty: 1
  },
  {
    phrase: "PRACTICE MAKES PERFECT",
    category: "SAYING",
    meaning: "Regular training leads to mastery and success.",
    exampleSentence: "Keep playing the guitar every day, practice makes perfect.",
    difficulty: 1
  },
  {
    phrase: "EASY COME EASY GO",
    category: "SAYING",
    meaning: "Things easily gained are easily lost.",
    exampleSentence: "I won ten dollars and spent it immediately, easy come easy go.",
    difficulty: 1
  },
  {
    phrase: "NO PAIN NO GAIN",
    category: "SAYING",
    meaning: "You must work hard and face challenges to succeed.",
    exampleSentence: "Running up the hill is tough, but no pain no gain!",
    difficulty: 1
  },
  {
    phrase: "HONESTY IS THE BEST POLICY",
    category: "SAYING",
    meaning: "It is always best to tell the truth.",
    exampleSentence: "Admit your mistake because honesty is the best policy.",
    difficulty: 1
  },
  {
    phrase: "TWO HEADS ARE BETTER THAN ONE",
    category: "SAYING",
    meaning: "Two people working together solve problems better than one alone.",
    exampleSentence: "Let's work together on this puzzle; two heads are better than one.",
    difficulty: 2
  },
  {
    phrase: "LOOK BEFORE YOU LEAP",
    category: "SAYING",
    meaning: "Think carefully about possible consequences before acting.",
    exampleSentence: "Check all the rules before signing up; look before you leap.",
    difficulty: 2
  },
  {
    phrase: "THE EARLY BIRD CATCHES THE WORM",
    category: "SAYING",
    meaning: "The person who arrives first or acts early has the best chance.",
    exampleSentence: "Get to the library early because the early bird catches the worm.",
    difficulty: 2
  },

  // COMMON PHRASES & COLLOCATIONS (Grade 7)
  {
    phrase: "MAKE A DIFFERENCE",
    category: "COMMON PHRASE",
    meaning: "To have a positive effect on someone or something.",
    exampleSentence: "Recycling plastic bottles can make a difference for the planet.",
    difficulty: 1
  },
  {
    phrase: "TAKE A DEEP BREATH",
    category: "COMMON PHRASE",
    meaning: "To inhale deeply to calm down and relax.",
    exampleSentence: "If you feel nervous before speaking, take a deep breath.",
    difficulty: 1
  },
  {
    phrase: "PAY CLOSE ATTENTION",
    category: "COMMON PHRASE",
    meaning: "To listen or watch very carefully.",
    exampleSentence: "Please pay close attention to the science experiment.",
    difficulty: 1
  },
  {
    phrase: "DO YOUR BEST",
    category: "COMMON PHRASE",
    meaning: "To try as hard as you can.",
    exampleSentence: "Don't worry about winning; just do your best.",
    difficulty: 1
  },
  {
    phrase: "MAKE A MISTAKE",
    category: "COMMON PHRASE",
    meaning: "To do something wrong or incorrectly.",
    exampleSentence: "It is okay to make a mistake as long as you learn from it.",
    difficulty: 1
  },
  {
    phrase: "KEEP IN TOUCH",
    category: "COMMON PHRASE",
    meaning: "To continue communicating with someone over time.",
    exampleSentence: "Send me an email so we can keep in touch during vacation.",
    difficulty: 1
  },
  {
    phrase: "HAVE A GREAT DAY",
    category: "COMMON PHRASE",
    meaning: "A cheerful wish for someone's day.",
    exampleSentence: "Goodbye class, have a great day!",
    difficulty: 1
  }
];

const grade8Expressions = [
  // IDIOMS (Grade 8 - Advanced, Figurative)
  {
    phrase: "HIT THE NAIL ON THE HEAD",
    category: "IDIOM",
    meaning: "To state something with exact precision or accuracy.",
    exampleSentence: "Your explanation of climate change hit the nail on the head.",
    difficulty: 2
  },
  {
    phrase: "LET THE CAT OUT OF THE BAG",
    category: "IDIOM",
    meaning: "To disclose a secret, often accidentally.",
    exampleSentence: "We wanted to surprise him, but Leo let the cat out of the bag.",
    difficulty: 2
  },
  {
    phrase: "BITE THE BULLET",
    category: "IDIOM",
    meaning: "To face a difficult or unpleasant situation with courage.",
    exampleSentence: "I dislike going to the dentist, but I just have to bite the bullet.",
    difficulty: 2
  },
  {
    phrase: "BURN THE MIDNIGHT OIL",
    category: "IDIOM",
    meaning: "To study or work very late into the night.",
    exampleSentence: "He burned the midnight oil to prepare for his final science project.",
    difficulty: 2
  },
  {
    phrase: "JUMP ON THE BANDWAGON",
    category: "IDIOM",
    meaning: "To join a popular trend or activity that everyone else is doing.",
    exampleSentence: "When coding clubs became popular, many students jumped on the bandwagon.",
    difficulty: 3
  },
  {
    phrase: "SEE EYE TO EYE",
    category: "IDIOM",
    meaning: "To agree fully with someone on a topic.",
    exampleSentence: "My brother and I rarely see eye to eye about music choices.",
    difficulty: 2
  },
  {
    phrase: "THE BALL IS IN YOUR COURT",
    category: "IDIOM",
    meaning: "It is now your turn to take action or make a decision.",
    exampleSentence: "I have made my offer; now the ball is in your court.",
    difficulty: 2
  },
  {
    phrase: "BARK UP THE WRONG TREE",
    category: "IDIOM",
    meaning: "To follow the wrong course of action or accuse the wrong person.",
    exampleSentence: "If you think I took your notebook, you are barking up the wrong tree.",
    difficulty: 2
  },
  {
    phrase: "BEAT AROUND THE BUSH",
    category: "IDIOM",
    meaning: "To avoid talking directly about what is important.",
    exampleSentence: "Stop beating around the bush and tell me what really happened.",
    difficulty: 2
  },
  {
    phrase: "THROUGH THICK AND THIN",
    category: "IDIOM",
    meaning: "Under all conditions, no matter how difficult or challenging.",
    exampleSentence: "True friends stay together through thick and thin.",
    difficulty: 2
  },
  {
    phrase: "CRY OVER SPILT MILK",
    category: "IDIOM",
    meaning: "To waste time worrying about past mistakes that cannot be changed.",
    exampleSentence: "We lost the match, but there is no use crying over spilt milk.",
    difficulty: 2
  },
  {
    phrase: "EVERY CLOUD HAS A SILVER LINING",
    category: "IDIOM",
    meaning: "Every difficult situation has a positive or hopeful aspect.",
    exampleSentence: "I broke my leg, but every cloud has a silver lining—I learned chess!",
    difficulty: 2
  },
  {
    phrase: "KILL TWO BIRDS WITH ONE STONE",
    category: "IDIOM",
    meaning: "To achieve two different goals with a single action.",
    exampleSentence: "Walking to school kills two birds with one stone: exercise and fresh air.",
    difficulty: 2
  },
  {
    phrase: "READ BETWEEN THE LINES",
    category: "IDIOM",
    meaning: "To understand hidden meaning that is not stated directly.",
    exampleSentence: "If you read between the lines, you can tell she is very proud.",
    difficulty: 2
  },
  {
    phrase: "TAKE WITH A GRAIN OF SALT",
    category: "IDIOM",
    meaning: "To view information with skepticism and not believe it completely.",
    exampleSentence: "You should take internet rumors with a grain of salt.",
    difficulty: 3
  },

  // PHRASAL VERBS (Grade 8 - Multi-word & Abstract)
  {
    phrase: "PUT OFF UNTIL TOMORROW",
    category: "PHRASAL VERB",
    meaning: "To postpone or delay doing something.",
    exampleSentence: "Never put off until tomorrow what you can accomplish today.",
    difficulty: 2
  },
  {
    phrase: "COME UP WITH A SOLUTION",
    category: "PHRASAL VERB",
    meaning: "To think of or produce a creative idea or answer.",
    exampleSentence: "Our group came up with a great solution for the science fair.",
    difficulty: 2
  },
  {
    phrase: "LOOK FORWARD TO THE HOLIDAY",
    category: "PHRASAL VERB",
    meaning: "To feel excited and eager about a future event.",
    exampleSentence: "All the students are looking forward to the winter holiday.",
    difficulty: 2
  },
  {
    phrase: "CARRY OUT AN EXPERIMENT",
    category: "PHRASAL VERB",
    meaning: "To perform or conduct a planned activity or test.",
    exampleSentence: "The biology teacher carried out an exciting lab experiment.",
    difficulty: 2
  },
  {
    phrase: "BRING UP AN IMPORTANT TOPIC",
    category: "PHRASAL VERB",
    meaning: "To mention or introduce a subject for discussion.",
    exampleSentence: "During the meeting, she brought up an important safety topic.",
    difficulty: 2
  },
  {
    phrase: "FIGURE OUT THE MYSTERY",
    category: "PHRASAL VERB",
    meaning: "To solve or understand something after thinking carefully.",
    exampleSentence: "The detective worked all night to figure out the mystery.",
    difficulty: 2
  },
  {
    phrase: "STAND UP FOR YOUR RIGHTS",
    category: "PHRASAL VERB",
    meaning: "To defend or support yourself or others against unfairness.",
    exampleSentence: "It takes courage to stand up for your rights and beliefs.",
    difficulty: 2
  },
  {
    phrase: "CALL OFF THE MATCH",
    category: "PHRASAL VERB",
    meaning: "To cancel an event or scheduled activity.",
    exampleSentence: "Because of the thunderstorm, the referee called off the match.",
    difficulty: 2
  },
  {
    phrase: "KEEP UP WITH THE LESSON",
    category: "PHRASAL VERB",
    meaning: "To stay at the same pace or level as others.",
    exampleSentence: "Take notes regularly to keep up with the fast-paced lesson.",
    difficulty: 2
  },
  {
    phrase: "TURN DOWN AN OFFER",
    category: "PHRASAL VERB",
    meaning: "To reject or decline an invitation or proposal.",
    exampleSentence: "He had to turn down the invitation due to family commitments.",
    difficulty: 2
  },

  // PROVERBS (Grade 8)
  {
    phrase: "ACTIONS SPEAK LOUDER THAN WORDS",
    category: "PROVERB",
    meaning: "What you do is much more important and meaningful than what you say.",
    exampleSentence: "Do not just promise to help; actions speak louder than words.",
    difficulty: 2
  },
  {
    phrase: "DONT JUDGE A BOOK BY ITS COVER",
    category: "PROVERB",
    meaning: "Do not form an opinion about something based purely on appearance.",
    exampleSentence: "The old computer looks slow, but do not judge a book by its cover.",
    difficulty: 2
  },
  {
    phrase: "WHERE THERE IS A WILL THERE IS A WAY",
    category: "PROVERB",
    meaning: "If you are determined enough, you will find a way to achieve your goal.",
    exampleSentence: "It seems impossible, but where there is a will there is a way.",
    difficulty: 3
  },
  {
    phrase: "WHEN IN ROME DO AS THE ROMANS DO",
    category: "PROVERB",
    meaning: "Follow the customs and behavior of the people around you.",
    exampleSentence: "When traveling abroad, remember: when in Rome, do as the Romans do.",
    difficulty: 3
  },
  {
    phrase: "THE PEN IS MIGHTIER THAN THE SWORD",
    category: "PROVERB",
    meaning: "Thinking and writing have more influence than physical force.",
    exampleSentence: "Writers inspire revolutions because the pen is mightier than the sword.",
    difficulty: 3
  },
  {
    phrase: "BIRDS OF A FEATHER FLOCK TOGETHER",
    category: "PROVERB",
    meaning: "People with similar interests or personalities naturally group together.",
    exampleSentence: "All the chess players sit together; birds of a feather flock together.",
    difficulty: 3
  },
  {
    phrase: "A PICTURE IS WORTH A THOUSAND WORDS",
    category: "PROVERB",
    meaning: "A visual image can convey a complex message more clearly than text.",
    exampleSentence: "Show the infographic on the slide; a picture is worth a thousand words.",
    difficulty: 2
  },
  {
    phrase: "FORTUNE FAVORS THE BOLD",
    category: "PROVERB",
    meaning: "Courageous people are more likely to achieve success.",
    exampleSentence: "Take the calculated risk in your competition; fortune favors the bold.",
    difficulty: 3
  },

  // FUNCTIONAL LANGUAGE (Grade 8 - Academic & Discourse Markers)
  {
    phrase: "AS FAR AS I AM CONCERNED",
    category: "FUNCTIONAL LANGUAGE",
    meaning: "Used to state your personal opinion or perspective.",
    exampleSentence: "As far as I am concerned, teamwork is key to winning.",
    difficulty: 2
  },
  {
    phrase: "ON THE OTHER HAND",
    category: "FUNCTIONAL LANGUAGE",
    meaning: "Used to introduce an opposing point or alternative perspective.",
    exampleSentence: "Studying online is convenient; on the other hand, classroom interaction is vital.",
    difficulty: 2
  },
  {
    phrase: "IN MY HUMBLE OPINION",
    category: "FUNCTIONAL LANGUAGE",
    meaning: "A polite phrase used when offering personal views.",
    exampleSentence: "In my humble opinion, this author wrote the most captivating story.",
    difficulty: 2
  },
  {
    phrase: "TO MAKE A LONG STORY SHORT",
    category: "FUNCTIONAL LANGUAGE",
    meaning: "To summarize something briefly without unnecessary details.",
    exampleSentence: "To make a long story short, we missed the train and took a taxi.",
    difficulty: 2
  },
  {
    phrase: "AS A MATTER OF FACT",
    category: "FUNCTIONAL LANGUAGE",
    meaning: "Actually; in reality; used to emphasize a truth.",
    exampleSentence: "I know the answer; as a matter of fact, I solved it yesterday.",
    difficulty: 2
  },
  {
    phrase: "FROM MY PERSPECTIVE",
    category: "FUNCTIONAL LANGUAGE",
    meaning: "From my viewpoint or way of seeing the situation.",
    exampleSentence: "From my perspective, renewable energy is essential for our future.",
    difficulty: 2
  },
  {
    phrase: "IN SPITE OF THE DIFFICULTY",
    category: "FUNCTIONAL LANGUAGE",
    meaning: "Regardless of the obstacles or challenges encountered.",
    exampleSentence: "In spite of the difficulty, they completed the mountain trek.",
    difficulty: 2
  },
  {
    phrase: "TAKING EVERYTHING INTO ACCOUNT",
    category: "FUNCTIONAL LANGUAGE",
    meaning: "Considering all relevant facts, details, and factors.",
    exampleSentence: "Taking everything into account, this plan is our safest choice.",
    difficulty: 3
  },

  // COLLOCATIONS & ADVANCED PHRASES (Grade 8)
  {
    phrase: "DRAW A CONCLUSION",
    category: "COLLOCATION",
    meaning: "To make a judgment or decision based on evidence.",
    exampleSentence: "After reviewing the experiment results, scientists drew a conclusion.",
    difficulty: 2
  },
  {
    phrase: "PLAY A CRUCIAL ROLE",
    category: "COLLOCATION",
    meaning: "To be extremely significant or influential in an outcome.",
    exampleSentence: "Teachers play a crucial role in inspiring young minds.",
    difficulty: 2
  },
  {
    phrase: "REACH A COMPROMISE",
    category: "COLLOCATION",
    meaning: "To come to an agreement where both sides give up something.",
    exampleSentence: "After debating for an hour, the debate teams reached a compromise.",
    difficulty: 2
  },
  {
    phrase: "TAKE RESPONSIBILITY FOR YOUR ACTIONS",
    category: "COLLOCATION",
    meaning: "To accept ownership and consequences of what you do.",
    exampleSentence: "A mature person learns to take responsibility for their actions.",
    difficulty: 2
  },
  {
    phrase: "SHED LIGHT ON THE ISSUE",
    category: "COLLOCATION",
    meaning: "To provide clarity or new information that explains a problem.",
    exampleSentence: "The recent documentary shed light on ocean pollution issues.",
    difficulty: 3
  },
  {
    phrase: "MAKE A LASTING IMPRESSION",
    category: "COLLOCATION",
    meaning: "To create a strong, memorable impact on someone.",
    exampleSentence: "Her brilliant presentation made a lasting impression on the judges.",
    difficulty: 2
  },
  {
    phrase: "GAIN VALUABLE EXPERIENCE",
    category: "COLLOCATION",
    meaning: "To acquire useful skills and knowledge through practice.",
    exampleSentence: "Volunteering at the animal shelter helped me gain valuable experience.",
    difficulty: 2
  }
];

// Helper to get random non-repeating items
class ExpressionManager {
  constructor(grade7List, grade8List) {
    this.grade7 = [...grade7List];
    this.grade8 = [...grade8List];
    this.usedGrade7 = [];
    this.usedGrade8 = [];
  }

  getRandomExpression(grade = 7, categoryFilter = null) {
    const list = grade === 8 ? this.grade8 : this.grade7;
    const usedList = grade === 8 ? this.usedGrade8 : this.usedGrade7;

    let available = list.filter(item => !usedList.includes(item.phrase));
    if (categoryFilter) {
      const filtered = available.filter(item => item.category === categoryFilter);
      if (filtered.length > 0) available = filtered;
    }

    if (available.length === 0) {
      // Reset history if exhausted
      if (grade === 8) this.usedGrade8 = [];
      else this.usedGrade7 = [];
      available = [...list];
    }

    const randomIndex = Math.floor(Math.random() * available.length);
    const chosen = available[randomIndex];

    if (grade === 8) this.usedGrade8.push(chosen.phrase);
    else this.usedGrade7.push(chosen.phrase);

    return { ...chosen };
  }

  getFinalRoundExpression(grade = 7) {
    const list = grade === 8 ? this.grade8 : this.grade7;
    // Prefer higher difficulty expressions with good letter variety
    const candidates = list.filter(item => (item.difficulty >= 2 || item.phrase.length >= 14));
    const pool = candidates.length > 0 ? candidates : list;
    const randomIndex = Math.floor(Math.random() * pool.length);
    return { ...pool[randomIndex] };
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { grade7Expressions, grade8Expressions, ExpressionManager };
}
