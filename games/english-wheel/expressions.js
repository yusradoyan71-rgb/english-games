/**
 * ENGLISH WHEEL - Educational Content Dataset & Intelligent Selection Engine
 * Comprehensive dataset for Grade 7 (CEFR A2-A2+) and Grade 8 (CEFR A2+-B1)
 *
 * Covers 20+ Real-World Communication Categories:
 * - GREETINGS & INTRODUCTIONS
 * - SAYING GOODBYE
 * - APOLOGIZING & EXCUSING
 * - THANKING & GRATITUDE
 * - ASKING PERMISSION
 * - MAKING REQUESTS & ASKING FOR HELP
 * - OFFERING HELP & RESPONSES
 * - ASKING FOR CLARIFICATION
 * - GIVING ADVICE & RECOMMENDATIONS
 * - AGREEING & DISAGREEING
 * - EXPRESSING OPINIONS & PREFERENCES
 * - INVITATIONS & PLANS
 * - ACCEPTING & DECLINING INVITATIONS
 * - MAKING SUGGESTIONS
 * - ASKING FOR DIRECTIONS & TRAVEL
 * - SHOPPING & ORDERING FOOD
 * - SCHOOL & CLASSROOM ENGLISH
 * - DAILY ROUTINES & HABITS
 * - PHONE & DIGITAL CONVERSATIONS
 * - FEELINGS, PROBLEMS & COMPLAINTS
 * - NATURAL IDIOMS, COLLOCATIONS & PROVERBS
 *
 * Includes diverse question/learning formats:
 * - Situation responses ("Situation: ... Response: ...")
 * - Dialogue completions ("A: ... / B: ...")
 * - Natural question prompts ("What would you say?", "Which expression fits?")
 * - Diverse names (Zara, Leo, Maya, Kenji, Fatima, Lucas, Chloe, Omar, Ethan, Mei, Elena, Tariq, etc.)
 * - Diverse settings (café, airport, library, classroom, hospital, bus stop, shopping mall, etc.)
 */

const grade7Expressions = [
  // --- GREETINGS & INTRODUCTIONS ---
  {
    phrase: "HOW HAVE YOU BEEN",
    category: "GREETINGS",
    meaning: "A friendly way to ask how someone has been since you last saw them.",
    exampleSentence: "Dialogue — Maya: Hey Kenji! How have you been? / Kenji: Pretty good, thanks for asking!",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "PLEASED TO MEET YOU",
    category: "INTRODUCTIONS",
    meaning: "A polite and courteous expression used when being introduced to someone.",
    exampleSentence: "Situation — Mr. Davis introduces the new transfer student to Leo. Leo smiles: 'Pleased to meet you!'",
    difficulty: 1,
    baseWeight: 0.8
  },
  {
    phrase: "NICE TO MEET YOU",
    category: "INTRODUCTIONS",
    meaning: "A very common greeting when meeting someone for the first time.",
    exampleSentence: "Dialogue — Fatima: Hi, I am Fatima from 7B. / Lucas: Nice to meet you, Fatima!",
    difficulty: 1,
    baseWeight: 0.3 // Calibrated low base weight to prevent over-dominance
  },
  {
    phrase: "ALLOW ME TO INTRODUCE MYSELF",
    category: "INTRODUCTIONS",
    meaning: "A formal and polite phrase to introduce yourself to a group or individual.",
    exampleSentence: "Classroom — Before giving his presentation, Omar says: 'Good morning, allow me to introduce myself.'",
    difficulty: 2,
    baseWeight: 0.9
  },
  {
    phrase: "LONG TIME NO SEE",
    category: "GREETINGS",
    meaning: "Said with warmth when meeting someone you have not seen for an extended period.",
    exampleSentence: "Dialogue — Zara: Chloe! Long time no see! How was your summer holiday?",
    difficulty: 1,
    baseWeight: 0.8
  },
  {
    phrase: "HOW IS EVERYTHING GOING",
    category: "GREETINGS",
    meaning: "Asking someone casually about their life, studies, or daily activities.",
    exampleSentence: "Dialogue — Ethan: Hey Leo, how is everything going with the science fair project?",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- SAYING GOODBYE ---
  {
    phrase: "CATCH YOU LATER",
    category: "SAYING GOODBYE",
    meaning: "An informal, friendly way of saying goodbye until next time.",
    exampleSentence: "Situation — At the school gate, Tariq waves to his basketball teammates: 'Catch you later, guys!'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "HAVE A SAFE TRIP",
    category: "SAYING GOODBYE",
    meaning: "Wishing someone safe travels before a journey or commute.",
    exampleSentence: "Dialogue — Mei: We are boarding the train now. / Elena: Have a safe trip and text me when you arrive!",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "KEEP IN TOUCH",
    category: "SAYING GOODBYE",
    meaning: "Reminding someone to continue communicating via message or call.",
    exampleSentence: "Situation — Before moving to a new city, Lucas tells his best friend: 'Don't forget to keep in touch!'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "TALK TO YOU SOON",
    category: "SAYING GOODBYE",
    meaning: "A warm way to end a phone call or conversation when you expect to speak again.",
    exampleSentence: "Phone Call — 'I have to run to soccer practice now, talk to you soon!'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "HAVE A WONDERFUL WEEKEND",
    category: "SAYING GOODBYE",
    meaning: "Polite Friday farewell wishing someone a pleasant rest of the week.",
    exampleSentence: "Classroom — Mrs. Jenkins says to the students on Friday afternoon: 'Have a wonderful weekend!'",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- APOLOGIZING & EXCUSING ---
  {
    phrase: "I SINCERELY APOLOGIZE",
    category: "APOLOGIZING",
    meaning: "Expressing genuine and serious regret for an error or mistake.",
    exampleSentence: "Situation — Kenji accidentally spilled water on Fatima's notebook: 'I sincerely apologize, let me dry it for you.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "MY MISTAKE FORGET IT",
    category: "APOLOGIZING",
    meaning: "Acknowledging that an error was yours and suggesting it is not a big problem.",
    exampleSentence: "Dialogue — Liam: Did I take your textbook? Oh, my mistake forget it, mine was under my desk!",
    difficulty: 1,
    baseWeight: 0.9
  },
  {
    phrase: "PLEASE EXCUSE THE DELAY",
    category: "APOLOGIZING",
    meaning: "Politely apologizing for arriving late or taking long to reply.",
    exampleSentence: "Situation — Arriving at the library study group 10 minutes late, Maya says: 'Please excuse the delay, the bus was slow.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I DID NOT MEAN TO OFFEND YOU",
    category: "APOLOGIZING",
    meaning: "Clarifying that your remark was not intended to hurt anyone's feelings.",
    exampleSentence: "Dialogue — 'I am truly sorry, I did not mean to offend you with my joke.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "IT WILL NOT HAPPEN AGAIN",
    category: "APOLOGIZING",
    meaning: "A promise that a mistake or careless action will not be repeated.",
    exampleSentence: "Classroom — 'I forgot my art supplies today, teacher, but it will not happen again.'",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- THANKING & GRATITUDE ---
  {
    phrase: "I REALLY APPRECIATE IT",
    category: "THANKING",
    meaning: "Expressing sincere thanks for someone's effort or assistance.",
    exampleSentence: "Situation — Sofia helps Leo understand a tough algebra equation. Leo smiles: 'I really appreciate it!'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "YOU HAVE BEEN A GREAT HELP",
    category: "THANKING",
    meaning: "Expressing deep gratitude when someone provided valuable support.",
    exampleSentence: "Dialogue — Customer: Thank you for finding the right size jacket! Shop Assistant: You have been a great help!",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I OWE YOU ONE",
    category: "THANKING",
    meaning: "An informal phrase indicating you are grateful and will return the favor in the future.",
    exampleSentence: "Dialogue — Omar: I printed your homework sheet for you. / Tariq: Thanks a lot brother, I owe you one!",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "THANKS A BUNCH",
    category: "THANKING",
    meaning: "A casual and cheerful way to say thank you very much.",
    exampleSentence: "Dialogue — Chloe: Here is the spare pencil you needed. / Zara: Thanks a bunch!",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- ASKING FOR PERMISSION ---
  {
    phrase: "MAY I BORROW YOUR PENCIL",
    category: "ASKING PERMISSION",
    meaning: "A polite, standard classroom request to use someone's writing tool.",
    exampleSentence: "Classroom — Ethan's pencil broke during the test. He whispers to Kenji: 'May I borrow your pencil?'",
    difficulty: 1,
    baseWeight: 0.9
  },
  {
    phrase: "DO YOU MIND IF I SIT HERE",
    category: "ASKING PERMISSION",
    meaning: "Politely checking if a chair or seat in a public place is available.",
    exampleSentence: "Café — The cafeteria is crowded. Elena asks a student at a table: 'Do you mind if I sit here?'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "WOULD IT BE OKAY IF I LEFT EARLY",
    category: "ASKING PERMISSION",
    meaning: "Politely requesting authorization to depart before regular time.",
    exampleSentence: "Situation — Lucas has a dentist appointment at 3 PM: 'Teacher, would it be okay if I left early?'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "IS IT ALRIGHT TO OPEN THE WINDOW",
    category: "ASKING PERMISSION",
    meaning: "Asking if people around you are comfortable with letting fresh air into the room.",
    exampleSentence: "Classroom — The room feels very warm. Fatima asks: 'Is it alright to open the window?'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- MAKING REQUESTS & ASKING FOR HELP ---
  {
    phrase: "COULD YOU DO ME A FAVOR",
    category: "MAKING REQUESTS",
    meaning: "Politely asking someone if they would be willing to assist you with a task.",
    exampleSentence: "Dialogue — Leo: Maya, could you do me a favor and hold this ladder for a second?",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "WOULD YOU MIND EXPLAINING THIS",
    category: "MAKING REQUESTS",
    meaning: "A courteous way to ask a teacher or classmate to clarify a difficult concept.",
    exampleSentence: "Classroom — Tariq raises his hand: 'Mr. Brown, would you mind explaining this chart again?'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "CAN YOU GIVE ME A HAND",
    category: "MAKING REQUESTS",
    meaning: "An informal expression asking someone to help you carry or do something.",
    exampleSentence: "Situation — Zara is carrying a heavy box of sports equipment: 'Can you give me a hand with this?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "COULD YOU SPEAK A BIT SLOWER",
    category: "MAKING REQUESTS",
    meaning: "Politely asking someone to reduce their speaking speed so you can understand them.",
    exampleSentence: "Travel — Elena talking to a London tour guide: 'Excuse me, could you speak a bit slower, please?'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- OFFERING HELP & RESPONSES ---
  {
    phrase: "LET ME HELP YOU WITH THAT",
    category: "OFFERING HELP",
    meaning: "Volunteering actively to assist someone who has a difficult or heavy task.",
    exampleSentence: "Situation — Kenji sees an elderly woman carrying heavy grocery bags: 'Let me help you with that, ma'am.'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "THAT WOULD BE WONDERFUL",
    category: "ACCEPTING OFFERS",
    meaning: "Delighted and polite acceptance of an offer of assistance.",
    exampleSentence: "Dialogue — Omar: Shall I carry those dictionaries to the library? / Librarian: That would be wonderful!",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "I CAN MANAGE IT THANKS",
    category: "REFUSING POLITELY",
    meaning: "Politely declining an offer of help because you are able to handle it alone.",
    exampleSentence: "Dialogue — Chloe: Do you want me to pack your backpack? / Liam: I can manage it thanks!",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "SHALL I CARRY YOUR BAG",
    category: "OFFERING HELP",
    meaning: "A polite offer to hold or transport luggage or school supplies for someone.",
    exampleSentence: "Airport — 'Your suitcase looks very heavy, shall I carry your bag up the stairs?'",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- ASKING FOR CLARIFICATION ---
  {
    phrase: "WHAT DO YOU MEAN BY THAT",
    category: "CLARIFICATION",
    meaning: "Asking for a more detailed explanation of what someone just expressed.",
    exampleSentence: "Dialogue — Maya: Our plan needs a complete overhaul. / Ethan: What do you mean by that?",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "COULD YOU REPEAT THAT PLEASE",
    category: "CLARIFICATION",
    meaning: "A standard polite request asking the speaker to say their words once more.",
    exampleSentence: "Classroom — The loudspeaker announcement was muffled: 'Teacher, could you repeat that please?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "PARDON ME I MISSED THAT",
    category: "CLARIFICATION",
    meaning: "Polite phrase acknowledging that you did not catch or hear what was said.",
    exampleSentence: "Dialogue — 'Pardon me I missed that, there was loud construction outside the window.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "HOW DO YOU SPELL THAT WORD",
    category: "CLARIFICATION",
    meaning: "Asking someone for the exact letter-by-letter spelling of a term.",
    exampleSentence: "Classroom — 'I want to write down your surname in my notebook; how do you spell that word?'",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- GIVING ADVICE & RECOMMENDATIONS ---
  {
    phrase: "YOU HAD BETTER REST",
    category: "GIVING ADVICE",
    meaning: "Giving strong, caring advice for someone to stop working and regain energy.",
    exampleSentence: "Health — Sofia has a bad headache after practice: 'You look exhausted, you had better rest.'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "IF I WERE YOU I WOULD PRACTICE",
    category: "GIVING ADVICE",
    meaning: "Hypothetical advice suggesting that regular practice is the best course of action.",
    exampleSentence: "Music Room — 'The violin recital is next Tuesday; if I were you I would practice daily.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "YOU SHOULD GIVE IT A TRY",
    category: "GIVING ADVICE",
    meaning: "Encouraging someone who is hesitant to experience something new.",
    exampleSentence: "Dialogue — Lucas: I have never tried rock climbing. / Tariq: It is amazing, you should give it a try!",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "MAKE SURE TO DOUBLE CHECK",
    category: "GIVING ADVICE",
    meaning: "Advising someone to review their work carefully before submitting.",
    exampleSentence: "Classroom — Before handing in your math exam: 'Make sure to double check your calculations!'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- AGREEING & DISAGREEING ---
  {
    phrase: "I COULD NOT AGREE MORE",
    category: "AGREEING",
    meaning: "Expressing 100% total and enthusiastic agreement with an opinion.",
    exampleSentence: "Dialogue — Elena: That was the most exciting basketball final ever! / Kenji: I could not agree more!",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I SEE YOUR POINT BUT",
    category: "DISAGREEING",
    meaning: "Politely acknowledging someone's view while introducing a counter-argument.",
    exampleSentence: "Debate — 'I see your point but we also have to consider the environmental impact.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "THAT IS EXACTLY WHAT I THOUGHT",
    category: "AGREEING",
    meaning: "Showing that you had arrived at the exact same conclusion independently.",
    exampleSentence: "Dialogue — Zara: We should start studying two weeks early. / Fatima: That is exactly what I thought!",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "I AM AFRAID I DISAGREE",
    category: "DISAGREEING",
    meaning: "A very courteous, respectful way to state that you hold a different view.",
    exampleSentence: "Class Discussion — 'I am afraid I disagree; in my experience, group work is more effective.'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- EXPRESSING OPINIONS & PREFERENCES ---
  {
    phrase: "IN MY HUMBLE OPINION",
    category: "OPINIONS",
    meaning: "A modest way to introduce a personal viewpoint or evaluation.",
    exampleSentence: "Dialogue — 'In my humble opinion, the original book is much deeper than the film adaptation.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I WOULD RATHER STAY HOME",
    category: "PREFERENCES",
    meaning: "Expressing a clear preference for remaining indoors rather than going out.",
    exampleSentence: "Dialogue — Ethan: Shall we go to the noisy carnival? / Maya: It is stormy outside; I would rather stay home.",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "AS FAR AS I AM CONCERNED",
    category: "OPINIONS",
    meaning: "Clarifying that what you are stating is strictly from your individual standpoint.",
    exampleSentence: "Situation — 'As far as I am concerned, honesty is essential in every true friendship.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "PERSONALLY I PREFER TEA",
    category: "PREFERENCES",
    meaning: "Stating your individual taste in beverages in a social setting.",
    exampleSentence: "Café — Waiter: Coffee or hot tea? / Customer: Personally I prefer tea with lemon.",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- INVITATIONS & PLANS ---
  {
    phrase: "WOULD YOU LIKE TO COME OVER",
    category: "INVITATIONS",
    meaning: "Inviting a friend to visit your house for fun or study.",
    exampleSentence: "Dialogue — Lucas: We are baking cookies this Saturday. Would you like to come over?",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "ARE YOU FREE THIS WEEKEND",
    category: "INVITATIONS",
    meaning: "Inquiring about someone's schedule to propose meeting up.",
    exampleSentence: "Phone Call — 'Hey Omar, are you free this weekend to bike along the river trail?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "I WOULD LOVE TO JOIN",
    category: "ACCEPTING INVITATIONS",
    meaning: "An enthusiastic and positive acceptance of an invitation.",
    exampleSentence: "Dialogue — Chloe: We are having a picnic at sunset. / Zara: I would love to join, count me in!",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "I AM AFRAID I CANNOT MAKE IT",
    category: "DECLINING INVITATIONS",
    meaning: "A polite and regretful refusal when you are unable to attend an event.",
    exampleSentence: "Message — 'Thank you for the party invite, but I am afraid I cannot make it due to family plans.'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- MAKING SUGGESTIONS ---
  {
    phrase: "WHY DO WE NOT TAKE A BREAK",
    category: "SUGGESTIONS",
    meaning: "Suggesting that the group pause their hard work to rest.",
    exampleSentence: "Study Group — 'We have been solving math equations for two hours; why do we not take a break?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "WE COULD TRY A DIFFERENT WAY",
    category: "SUGGESTIONS",
    meaning: "Proposing an alternative method when the current one is stuck.",
    exampleSentence: "Science Lab — 'This circuit is not powering the bulb; we could try a different way.'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "WHAT ABOUT ORDERING PIZZA",
    category: "SUGGESTIONS",
    meaning: "Suggesting food delivery for dinner or a party.",
    exampleSentence: "Friday Night — 'Nobody feels like cooking tonight, so what about ordering pizza?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "LET US WORK TOGETHER",
    category: "SUGGESTIONS",
    meaning: "Inviting others to collaborate as a unified team.",
    exampleSentence: "Classroom Project — 'If we combine our skills and let us work together, we will finish faster.'",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- ASKING FOR DIRECTIONS & TRAVEL ---
  {
    phrase: "HOW DO I GET TO THE STATION",
    category: "DIRECTIONS & TRAVEL",
    meaning: "A crucial travel phrase asking for navigational guidance to the train or subway station.",
    exampleSentence: "Street — Tourist with a map: 'Excuse me sir, how do I get to the station from here?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "IS THERE A PHARMACY NEARBY",
    category: "DIRECTIONS & TRAVEL",
    meaning: "Asking locals where the closest medical store or chemist is located.",
    exampleSentence: "Town Square — 'I need some bandages for my knee; is there a pharmacy nearby?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "TURN LEFT AT THE TRAFFIC LIGHTS",
    category: "DIRECTIONS & TRAVEL",
    meaning: "Giving step-by-step navigation instructions at an intersection.",
    exampleSentence: "Navigation — 'Go straight for one kilometer, then turn left at the traffic lights.'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "GO STRAIGHT AHEAD FOR TWO BLOCKS",
    category: "DIRECTIONS & TRAVEL",
    meaning: "Guiding someone to walk directly forward past two street crossings.",
    exampleSentence: "City Map — 'The public library is easy to spot: go straight ahead for two blocks.'",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- SHOPPING & ORDERING FOOD ---
  {
    phrase: "HOW MUCH DOES THIS COST",
    category: "SHOPPING",
    meaning: "Asking a salesperson for the price of an item in a store.",
    exampleSentence: "Souvenir Shop — 'Excuse me, how much does this handmade ceramic mug cost?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "CAN I HAVE THE BILL PLEASE",
    category: "RESTAURANTS",
    meaning: "Standard polite request to pay for your meal after dining at a restaurant.",
    exampleSentence: "Diner — After dessert: 'Waiter, we are ready to leave; can I have the bill please?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "DO YOU HAVE THIS IN MEDIUM",
    category: "SHOPPING",
    meaning: "Inquiring if a clothing item is available in medium size.",
    exampleSentence: "Clothing Store — 'I really love this green hoodie; do you have this in medium?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "ARE YOU READY TO ORDER",
    category: "RESTAURANTS",
    meaning: "The waiter asking diners if they have selected their food and drinks.",
    exampleSentence: "Bistro — The waiter approaches table 4: 'Good evening folks, are you ready to order?'",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- SCHOOL & CLASSROOM ENGLISH ---
  {
    phrase: "OPEN YOUR BOOKS TO PAGE TEN",
    category: "CLASSROOM ENGLISH",
    meaning: "A standard teacher instruction at the start of a lesson.",
    exampleSentence: "English Class — Mr. Vance steps to the whiteboard: 'Good morning, open your books to page ten.'",
    difficulty: 1,
    baseWeight: 0.9
  },
  {
    phrase: "RAISE YOUR HAND TO SPEAK",
    category: "CLASSROOM ENGLISH",
    meaning: "Reminding students of classroom etiquette before voicing an answer.",
    exampleSentence: "School Rule — 'Please remember to raise your hand to speak instead of shouting out.'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "WHEN IS THE HOMEWORK DUE",
    category: "SCHOOL SITUATIONS",
    meaning: "Asking the teacher for the deadline date or time for an assignment.",
    exampleSentence: "End of Class — Sofia asks her history teacher: 'When is the homework due, Friday or Monday?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "CAN I GO TO THE RESTROOM",
    category: "CLASSROOM ENGLISH",
    meaning: "A polite request by a student to step out briefly for the bathroom.",
    exampleSentence: "Classroom — Tariq politely raises his hand: 'Excuse me teacher, can I go to the restroom?'",
    difficulty: 1,
    baseWeight: 0.9
  },

  // --- DAILY ROUTINES & HABITS ---
  {
    phrase: "I ALWAYS BRUSH MY TEETH FIRST",
    category: "DAILY ROUTINES",
    meaning: "Describing morning hygiene routine.",
    exampleSentence: "Daily Life — 'When I wake up at 7 AM, I always brush my teeth first before breakfast.'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "SHE CATCHES THE MORNING BUS",
    category: "DAILY ROUTINES",
    meaning: "Describing a daily commuting habit to school or work.",
    exampleSentence: "Schedule — 'Every weekday at 7:30 AM, she catches the morning bus on Elm Street.'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "WE PRACTICE GUITAR EVERY DAY",
    category: "DAILY ROUTINES",
    meaning: "Describing regular music practice habits.",
    exampleSentence: "Hobby — 'My brother and I are in a band, so we practice guitar every day after school.'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "HE USUALLY WAKES UP AT SEVEN",
    category: "DAILY ROUTINES",
    meaning: "Expressing someone's customary rising time.",
    exampleSentence: "Routine — 'Kenji sets his alarm clock because he usually wakes up at seven.'",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- PHONE & DIGITAL CONVERSATIONS ---
  {
    phrase: "WHO IS CALLING PLEASE",
    category: "PHONE CONVERSATIONS",
    meaning: "Politely asking the caller to identify themselves.",
    exampleSentence: "Office Phone — 'Hello, thank you for calling Oakwood School. Who is calling please?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "HOLD ON A SECOND PLEASE",
    category: "PHONE CONVERSATIONS",
    meaning: "Asking the person on the other end to wait briefly while you check something.",
    exampleSentence: "Phone Call — 'Let me grab my diary to check the date; hold on a second please.'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "I WILL CALL YOU RIGHT BACK",
    category: "PHONE CONVERSATIONS",
    meaning: "Promising to return a phone call in just a few moments.",
    exampleSentence: "Quick Reply — 'I am just stepping onto the bus right now, I will call you right back!'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "CAN YOU HEAR ME CLEARLY",
    category: "PHONE CONVERSATIONS",
    meaning: "Checking audio connection during a voice or video call.",
    exampleSentence: "Online Class — 'My internet signal is fluctuating; can you hear me clearly?'",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- FEELINGS, PROBLEMS & COMPLAINTS ---
  {
    phrase: "I AM EXTREMELY PROUD OF YOU",
    category: "FEELINGS",
    meaning: "Expressing deep joy and admiration for someone's achievement.",
    exampleSentence: "Celebration — Mom hugs Leo after his science trophy: 'I am extremely proud of you!'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "THIS SOUP IS TOO COLD",
    category: "COMPLAINTS",
    meaning: "Politely pointing out a food temperature issue to restaurant staff.",
    exampleSentence: "Restaurant — Diner to the waiter: 'Excuse me, this soup is too cold, could you warm it up?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "I FEEL ANXIOUS ABOUT THE TEST",
    category: "FEELINGS",
    meaning: "Sharing feelings of nervousness before an evaluation.",
    exampleSentence: "Hallway — Fatima confides in Maya: 'I studied hard, but I feel anxious about the test.'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "THERE SEEMS TO BE A MISTAKE",
    category: "COMPLAINTS",
    meaning: "A polite and professional way to signal an error on a bill or document.",
    exampleSentence: "Checkout — 'Excuse me, there seems to be a mistake; I was charged for two drinks instead of one.'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- NATURAL IDIOMS & PROVERBS (Grade 7 - Balanced, fresh selection) ---
  {
    phrase: "ON CLOUD NINE",
    category: "IDIOM",
    meaning: "Feeling ecstatic, overjoyed, and wonderfully happy.",
    exampleSentence: "Sports — When our volleyball team won the city championship, we were on cloud nine!",
    difficulty: 1,
    baseWeight: 0.9
  },
  {
    phrase: "FEEL UNDER THE WEATHER",
    category: "IDIOM",
    meaning: "Feeling slightly unwell, tired, or sick.",
    exampleSentence: "Health — 'Lucas cannot participate in PE class today because he feels under the weather.'",
    difficulty: 1,
    baseWeight: 0.9
  },
  {
    phrase: "A BLESSING IN DISGUISE",
    category: "IDIOM",
    meaning: "A positive outcome that originally appeared to be bad luck or unfortunate.",
    exampleSentence: "Life — 'Missing the early train was a blessing in disguise because I avoided the heavy rain.'",
    difficulty: 2,
    baseWeight: 0.9
  },
  {
    phrase: "HIT THE BOOKS",
    category: "IDIOM",
    meaning: "To begin studying diligently and focusing on schoolwork.",
    exampleSentence: "Exam Week — 'The final tests begin Monday morning, so I must hit the books all weekend.'",
    difficulty: 1,
    baseWeight: 0.9
  },
  {
    phrase: "TIME FLIES",
    category: "IDIOM",
    meaning: "Time seems to pass at an astonishingly fast speed when having fun.",
    exampleSentence: "Fun — 'We spent the whole afternoon playing board games; time flies when you are laughing!'",
    difficulty: 1,
    baseWeight: 0.8
  },
  {
    phrase: "ONCE IN A BLUE MOON",
    category: "IDIOM",
    meaning: "Happening exceptionally rarely or almost never.",
    exampleSentence: "Weather — 'It only snows in this coastal town once in a blue moon during severe winters.'",
    difficulty: 2,
    baseWeight: 0.9
  },
  {
    phrase: "CALL IT A DAY",
    category: "IDIOM",
    meaning: "To finish working or practicing for the rest of the day.",
    exampleSentence: "Project — 'We painted all four stage backgrounds for the play; let us call it a day.'",
    difficulty: 1,
    baseWeight: 0.9
  },
  {
    phrase: "SPILL THE BEANS",
    category: "IDIOM",
    meaning: "To reveal confidential or secret information prematurely.",
    exampleSentence: "Surprise — 'It is a secret birthday celebration for Leo, so please do not spill the beans!'",
    difficulty: 1,
    baseWeight: 0.9
  },
  {
    phrase: "PIECE OF CAKE",
    category: "IDIOM",
    meaning: "A task that is extremely simple and effortless to accomplish.",
    exampleSentence: "Quiz — 'Don't worry about the vocabulary crossword puzzle; it's a piece of cake!'",
    difficulty: 1,
    baseWeight: 0.35 // Reduced base weight to avoid over-appearance
  },
  {
    phrase: "BREAK A LEG",
    category: "IDIOM",
    meaning: "Traditional theatrical wish for good luck before a stage performance.",
    exampleSentence: "Drama Club — Backstage before the play begins: 'You know your lines perfectly, break a leg!'",
    difficulty: 1,
    baseWeight: 0.4
  },
  {
    phrase: "PRACTICE MAKES PERFECT",
    category: "PROVERB",
    meaning: "Regular repetition and training lead to mastery and excellent skills.",
    exampleSentence: "Music — 'Don't be discouraged by difficult piano chords; practice makes perfect!'",
    difficulty: 1,
    baseWeight: 0.8
  },
  {
    phrase: "HONESTY IS THE BEST POLICY",
    category: "PROVERB",
    meaning: "Being truthful and genuine is always the most admirable and wise course of action.",
    exampleSentence: "Moral — 'Admitting you broke the vase is scary, but honesty is the best policy.'",
    difficulty: 2,
    baseWeight: 0.25 // Controlled low weight
  },
  {
    phrase: "ACTIONS SPEAK LOUDER THAN WORDS",
    category: "PROVERB",
    meaning: "What a person actually does has far more impact than what they merely promise.",
    exampleSentence: "Teamwork — 'Promising to help is fine, but actions speak louder than words.'",
    difficulty: 2,
    baseWeight: 0.9
  },
  {
    phrase: "BETTER LATE THAN NEVER",
    category: "PROVERB",
    meaning: "It is better to complete an assignment or arrive late than not do it at all.",
    exampleSentence: "Submission — Tariq handed in his history essay on Thursday: 'Better late than never!'",
    difficulty: 1,
    baseWeight: 0.8
  }
];

const grade8Expressions = [
  // --- GREETINGS & FORMAL INTRODUCTIONS ---
  {
    phrase: "IT IS A PLEASURE TO MEET YOU",
    category: "INTRODUCTIONS",
    meaning: "A refined and polite greeting for formal introductions and guest speakers.",
    exampleSentence: "School Assembly — Principal introducing the guest scientist: 'It is a pleasure to meet you, Dr. Harris.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I HAVE HEARD SO MUCH ABOUT YOU",
    category: "INTRODUCTIONS",
    meaning: "Said when meeting someone whose reputation or achievements you already know.",
    exampleSentence: "Dialogue — Elena meets the debate champion: 'Congratulations on your win, I have heard so much about you!'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "HOW ARE THINGS COMING ALONG",
    category: "GREETINGS",
    meaning: "Inquiring in detail about the progress of a project, study, or plan.",
    exampleSentence: "Classroom — Teacher checking group tables: 'How are things coming along with your robotics prototype?'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- SAYING GOODBYE & FORMAL DEPARTURE ---
  {
    phrase: "LOOKING FORWARD TO SEEING YOU",
    category: "SAYING GOODBYE",
    meaning: "Expressing positive anticipation of meeting someone in the near future.",
    exampleSentence: "Email Farewell — 'Thank you for organizing the youth summit. Looking forward to seeing you on Saturday!'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I MUST BE GOING NOW",
    category: "SAYING GOODBYE",
    meaning: "Politely excusing yourself from a social gathering or meeting.",
    exampleSentence: "Dinner Party — 'Thank you for the delicious dinner, but I must be going now as I have an early train.'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "HAVE A PRODUCTIVE DAY AHEAD",
    category: "SAYING GOODBYE",
    meaning: "Wishing colleagues or classmates an effective and successful day.",
    exampleSentence: "Morning Meeting — 'Good luck with the science laboratory experiments, have a productive day ahead!'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- APOLOGIZING & EXCUSING (Grade 8) ---
  {
    phrase: "PLEASE ACCEPT MY APOLOGIES",
    category: "APOLOGIZING",
    meaning: "A formal, polite request for someone to forgive your mistake.",
    exampleSentence: "Formal Letter — 'I missed the club committee meeting due to sickness; please accept my apologies.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I TAKE FULL RESPONSIBILITY",
    category: "APOLOGIZING",
    meaning: "Courageously admitting complete accountability for an error or failure.",
    exampleSentence: "Project Lead — Omar admits: 'The deadline was missed because of my scheduling; I take full responsibility.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I HOPE YOU CAN FORGIVE ME",
    category: "APOLOGIZING",
    meaning: "Asking for personal forgiveness after an unintentional hurt or misunderstanding.",
    exampleSentence: "Dialogue — 'I spoke out of frustration yesterday; I hope you can forgive me.'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- THANKING & GRATITUDE (Grade 8) ---
  {
    phrase: "I CANNOT THANK YOU ENOUGH",
    category: "THANKING",
    meaning: "Expressing that words alone cannot match the deep gratitude you feel.",
    exampleSentence: "Community — Volunteer to the mentor: 'You guided me throughout the entire competition; I cannot thank you enough.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "YOUR SUPPORT MEANS A LOT TO ME",
    category: "THANKING",
    meaning: "Telling someone that their encouragement made a significant positive difference.",
    exampleSentence: "Graduation — Chloe to her art teacher: 'Thank you for believing in my talent, your support means a lot to me.'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- ASKING FOR PERMISSION & FORMAL REQUESTS ---
  {
    phrase: "WOULD YOU MIND IF I BORROWED THIS",
    category: "ASKING PERMISSION",
    meaning: "A very polite hypothetical structure requesting the loan of an item.",
    exampleSentence: "Library — 'Excuse me, are you using this encyclopedia, or would you mind if I borrowed this?'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "COULD YOU POSSIBLY ASSIST ME",
    category: "MAKING REQUESTS",
    meaning: "A highly polite and respectful way to seek someone's help.",
    exampleSentence: "Information Desk — Traveler at Heathrow: 'Excuse me officer, could you possibly assist me with my gate?'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I WAS WONDERING IF YOU COULD HELP",
    category: "MAKING REQUESTS",
    meaning: "A gentle and tactful way to open a request without sounding demanding.",
    exampleSentence: "Classroom — Maya approaches the physics tutor: 'I was wondering if you could help clarify Newton's third law.'",
    difficulty: 3,
    baseWeight: 1.0
  },

  // --- OFFERING HELP & POLITE RESPONSES ---
  {
    phrase: "WOULD YOU LIKE ME TO STEP IN",
    category: "OFFERING HELP",
    meaning: "Offering to take over or assist when someone is struggling with a workload.",
    exampleSentence: "Teamwork — 'You have been organizing the event tickets for hours; would you like me to step in?'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "IT IS KIND OF YOU TO OFFER",
    category: "REFUSING POLITELY",
    meaning: "Politely acknowledging generosity while deciding to proceed on your own.",
    exampleSentence: "Dialogue — 'It is kind of you to offer, but our design committee has nearly finished the poster.'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- ASKING FOR CLARIFICATION & ELABORATION ---
  {
    phrase: "COULD YOU ELABORATE ON THAT POINT",
    category: "CLARIFICATION",
    meaning: "Asking the speaker to provide more details or explanation regarding a specific topic.",
    exampleSentence: "Debate Session — Kenji asks the opposing speaker: 'Could you elaborate on that point with real evidence?'",
    difficulty: 3,
    baseWeight: 1.0
  },
  {
    phrase: "WHAT EXACTLY DO YOU MEAN",
    category: "CLARIFICATION",
    meaning: "Seeking precision when a statement is vague or open to multiple interpretations.",
    exampleSentence: "Classroom — 'When you say the schedule will change, what exactly do you mean?'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "IF I UNDERSTAND YOU CORRECTLY",
    category: "CLARIFICATION",
    meaning: "Rephrasing someone's statement to confirm you understood their intended meaning.",
    exampleSentence: "Meeting — 'If I understand you correctly, the project deadline has been extended to next Friday?'",
    difficulty: 3,
    baseWeight: 1.0
  },

  // --- GIVING ADVICE & RECOMMENDATIONS (Grade 8) ---
  {
    phrase: "IT WOULD BE WISE TO PLAN AHEAD",
    category: "GIVING ADVICE",
    meaning: "Advising someone that preparing in advance will prevent future difficulties.",
    exampleSentence: "Travel Planning — 'Airfare prices rise during holiday seasons; it would be wise to plan ahead.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "YOU OUGHT TO TAKE A BREAK",
    category: "GIVING ADVICE",
    meaning: "Strong moral or friendly advice to pause intense exertion.",
    exampleSentence: "Study Hall — 'You have been staring at that computer screen for four hours; you ought to take a break.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I STRONGLY RECOMMEND READING THIS",
    category: "GIVING ADVICE",
    meaning: "Giving an emphatic endorsement for a helpful book or article.",
    exampleSentence: "Literature — 'If you want to understand Shakespeare better, I strongly recommend reading this study guide.'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- AGREEING & DISAGREEING (Grade 8) ---
  {
    phrase: "YOU TOOK THE WORDS OUT OF MY MOUTH",
    category: "AGREEING",
    meaning: "Said when someone expresses the exact thought you were just about to articulate.",
    exampleSentence: "Dialogue — Zara: We should start with the hardest chemistry chapter. / Leo: You took the words out of my mouth!",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I BEG TO DIFFER ON THAT ISSUE",
    category: "DISAGREEING",
    meaning: "A formal, diplomatic phrase used to express a differing perspective.",
    exampleSentence: "Debate — 'While renewable energy requires initial investment, I beg to differ on that issue regarding long-term cost.'",
    difficulty: 3,
    baseWeight: 1.0
  },
  {
    phrase: "THAT MAKES A LOT OF SENSE",
    category: "AGREEING",
    meaning: "Acknowledging that an explanation or suggestion is logical and sound.",
    exampleSentence: "Discussion — 'Dividing the research into three separate sections makes a lot of sense.'",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- EXPRESSING OPINIONS & PREFERENCES (Grade 8) ---
  {
    phrase: "FROM MY PERSPECTIVE",
    category: "OPINIONS",
    meaning: "Introducing how a situation appears based on your personal angle or experience.",
    exampleSentence: "Essay Writing — 'From my perspective, modern technology has vastly improved educational access worldwide.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I HAVE MIXED FEELINGS ABOUT IT",
    category: "OPINIONS",
    meaning: "Holding both positive and negative thoughts simultaneously about a situation.",
    exampleSentence: "Dialogue — 'Moving to a high school in a new city excites me, but I have mixed feelings about it.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "I WOULD MUCH PREFER OUTDOOR SPORTS",
    category: "PREFERENCES",
    meaning: "Expressing a strong inclination toward athletic activities in the open air.",
    exampleSentence: "PE Survey — 'Gym workouts are fine, but I would much prefer outdoor sports like kayaking.'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- INVITATIONS, PLANS & SOCIAL SITUATIONS ---
  {
    phrase: "WE WOULD BE DELIGHTED TO ATTEND",
    category: "ACCEPTING INVITATIONS",
    meaning: "A courteous and enthusiastic confirmation of attending an event or celebration.",
    exampleSentence: "Invitation RSVP — 'Thank you for the gala invite; we would be delighted to attend.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "UNFORTUNATELY I HAVE PRIOR PLANS",
    category: "DECLINING INVITATIONS",
    meaning: "A dignified and polite explanation that an earlier commitment prevents you from joining.",
    exampleSentence: "Weekend Invite — 'I would love to join your barbecue, but unfortunately I have prior plans with my family.'",
    difficulty: 3,
    baseWeight: 1.0
  },
  {
    phrase: "LET US ARRANGE A MEETING NEXT WEEK",
    category: "INVITATIONS & PLANS",
    meaning: "Proposing a structured time to convene and discuss matters.",
    exampleSentence: "Club Organizing — 'To finalize our yearbook budget, let us arrange a meeting next week.'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- MAKING SUGGESTIONS (Grade 8) ---
  {
    phrase: "PERHAPS WE COULD BRAINSTORM IDEAS",
    category: "SUGGESTIONS",
    meaning: "Gently suggesting a group creative session to generate solutions.",
    exampleSentence: "Workshop — 'Instead of rushing into design, perhaps we could brainstorm ideas together on the whiteboard.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "HOW ABOUT WE DIVIDE THE TASKS",
    category: "SUGGESTIONS",
    meaning: "Proposing an equitable division of labor for group efficiency.",
    exampleSentence: "Science Project — 'Sofia can handle the data tables; how about we divide the tasks so everyone contributes?'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- ASKING FOR DIRECTIONS & TRAVEL (Grade 8) ---
  {
    phrase: "COULD YOU POINT ME IN THE RIGHT DIRECTION",
    category: "DIRECTIONS & TRAVEL",
    meaning: "A natural idiom asking someone to guide you toward your destination.",
    exampleSentence: "University Campus — Freshman looking for Hall C: 'Could you point me in the right direction, please?'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "IS IT WITHIN WALKING DISTANCE",
    category: "DIRECTIONS & TRAVEL",
    meaning: "Asking whether a location can be easily reached on foot without taking a bus or taxi.",
    exampleSentence: "Hotel Concierge — 'We want to visit the national museum; is it within walking distance?'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "WHERE CAN I PURCHASE A SUBWAY TICKET",
    category: "DIRECTIONS & TRAVEL",
    meaning: "Inquiring about ticket vending machines or booths for public metro transit.",
    exampleSentence: "Metro Station — Tourist: 'Excuse me, where can I purchase a subway ticket for Zone 1?'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- SHOPPING & RESTAURANTS (Grade 8) ---
  {
    phrase: "DO YOU ACCEPT CREDIT CARDS",
    category: "SHOPPING",
    meaning: "Inquiring about cashless electronic payment options at checkout.",
    exampleSentence: "Boutique — 'I do not have enough cash on me; do you accept credit cards?'",
    difficulty: 1,
    baseWeight: 1.0
  },
  {
    phrase: "WHAT DO YOU RECOMMEND AS A SPECIALTY",
    category: "RESTAURANTS",
    meaning: "Asking a restaurant server for their premier or signature dish.",
    exampleSentence: "Fine Dining — 'Everything on the menu looks delicious; what do you recommend as a specialty?'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "COULD WE HAVE WATER FOR THE TABLE",
    category: "RESTAURANTS",
    meaning: "Politely requesting carafes or glasses of water for everyone seated.",
    exampleSentence: "Family Dinner — 'Before ordering our main courses, could we have water for the table, please?'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- SCHOOL & CLASSROOM ENGLISH (Grade 8) ---
  {
    phrase: "PLEASE SUBMIT YOUR ASSIGNMENTS ON TIME",
    category: "CLASSROOM ENGLISH",
    meaning: "Teacher reminding students of punctuality in handing in coursework.",
    exampleSentence: "Noticeboard — 'Late submissions will incur a grade deduction, so please submit your assignments on time.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "COULD YOU PROVIDE AN EXAMPLE",
    category: "SCHOOL SITUATIONS",
    meaning: "Asking for a concrete illustration to make an abstract theory clearer.",
    exampleSentence: "Chemistry — Student raises hand: 'Could you provide an example of an exothermic reaction?'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- DAILY ROUTINES & HABITS (Grade 8) ---
  {
    phrase: "HE BALANCES STUDYING AND SPORTS",
    category: "DAILY ROUTINES",
    meaning: "Describing how someone effectively manages time between academics and athletics.",
    exampleSentence: "Profile — 'Lucas trains with the swimming team every morning and balances studying and sports seamlessly.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "SHE NEVER MISSES HER EVENING RUN",
    category: "DAILY ROUTINES",
    meaning: "Highlighting consistent commitment to physical exercise.",
    exampleSentence: "Fitness — 'Regardless of the weather, she never misses her evening run in the park.'",
    difficulty: 1,
    baseWeight: 1.0
  },

  // --- PHONE & DIGITAL CONVERSATIONS (Grade 8) ---
  {
    phrase: "I AM AFRAID THE CONNECTION IS POOR",
    category: "PHONE CONVERSATIONS",
    meaning: "Explaining that audio or cellular interference is disrupting conversation.",
    exampleSentence: "Video Call — 'Your voice is breaking up slightly; I am afraid the connection is poor.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "LEAVE A MESSAGE AFTER THE TONE",
    category: "PHONE CONVERSATIONS",
    meaning: "Standard voicemail instruction for callers.",
    exampleSentence: "Voicemail — 'Mr. Henderson is currently in a conference. Please leave a message after the tone.'",
    difficulty: 2,
    baseWeight: 1.0
  },

  // --- FEELINGS, PROBLEMS & COMPLAINTS (Grade 8) ---
  {
    phrase: "I AM THOROUGHLY DISAPPOINTED WITH THE SERVICE",
    category: "COMPLAINTS",
    meaning: "Formal, assertive expression of dissatisfaction with poor customer care.",
    exampleSentence: "Hotel Feedback — 'Our room was not ready after three hours; I am thoroughly disappointed with the service.'",
    difficulty: 3,
    baseWeight: 1.0
  },
  {
    phrase: "WORDS CANNOT EXPRESS MY GRATITUDE",
    category: "FEELINGS",
    meaning: "Conveying immense appreciation for heroic or life-changing kindness.",
    exampleSentence: "Rescue Award — 'To all the firefighters who protected our community, words cannot express my gratitude.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "WE ARE FACING AN UNEXPECTED OBSTACLE",
    category: "PROBLEMS & SOLUTIONS",
    meaning: "Identifying a sudden challenge that needs team problem solving.",
    exampleSentence: "Robotics Contest — 'The motor controller burned out, so we are facing an unexpected obstacle.'",
    difficulty: 3,
    baseWeight: 1.0
  },

  // --- NATURAL IDIOMS & PROVERBS (Grade 8 - Sophisticated, balanced) ---
  {
    phrase: "BURN THE MIDNIGHT OIL",
    category: "IDIOM",
    meaning: "To study or work late into the night.",
    exampleSentence: "Exams — 'Kenji had to burn the midnight oil to prepare for his history presentation.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "A PENNY FOR YOUR THOUGHTS",
    category: "IDIOM",
    meaning: "A gentle way of asking someone what they are thinking about when they look lost in thought.",
    exampleSentence: "Quiet Moment — 'You have been staring out the window silently, Leo; a penny for your thoughts!'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "BARKING UP THE WRONG TREE",
    category: "IDIOM",
    meaning: "Pursuing a mistaken course of action or accusing the wrong person.",
    exampleSentence: "Investigation — 'If you think Maya misplaced the keys, you are barking up the wrong tree.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "EVERY CLOUD HAS A SILVER LINING",
    category: "PROVERB",
    meaning: "Every difficult or negative situation contains some hopeful or positive aspect.",
    exampleSentence: "Encouragement — 'Losing the match taught our team where to improve; every cloud has a silver lining.'",
    difficulty: 2,
    baseWeight: 0.9
  },
  {
    phrase: "LOOK BEFORE YOU LEAP",
    category: "PROVERB",
    meaning: "Consider all possible consequences and risks carefully before taking an important action.",
    exampleSentence: "Wisdom — 'Signing up for four extracurricular clubs at once is risky; look before you leap.'",
    difficulty: 2,
    baseWeight: 0.9
  },
  {
    phrase: "REAP WHAT YOU SOW",
    category: "PROVERB",
    meaning: "You will eventually experience the consequences of your past efforts and decisions.",
    exampleSentence: "Life Lesson — 'If you invest disciplined effort into your studies now, you will reap what you sow.'",
    difficulty: 2,
    baseWeight: 0.9
  },
  {
    phrase: "A DROP IN THE OCEAN",
    category: "IDIOM",
    meaning: "A very small amount compared with what is needed or expected.",
    exampleSentence: "Fundraising — 'Our ten-dollar donation is just a drop in the ocean, but every bit helps.'",
    difficulty: 2,
    baseWeight: 1.0
  },
  {
    phrase: "FACE THE MUSIC",
    category: "IDIOM",
    meaning: "To accept the unpleasant consequences of one's actions.",
    exampleSentence: "Responsibility — 'He broke the classroom computer monitor and now has to face the music.'",
    difficulty: 2,
    baseWeight: 1.0
  }
];

// Helper to manage usage tracking, recency buffers, category balancing & weighted question selection
class ExpressionManager {
  constructor(grade7List, grade8List) {
    this.grade7 = [...grade7List];
    this.grade8 = [...grade8List];

    // Session tracking (Strict non-repetition during a single game session)
    this.sessionUsedSet7 = new Set();
    this.sessionUsedSet8 = new Set();

    // Recency buffer (Sliding window of recent phrases across turns)
    this.recencyBuffer = [];
    this.maxRecencyBufferSize = 10;

    // Category history (Tracking recent categories for diversity)
    this.categoryHistory = [];
    this.maxCategoryHistorySize = 5;

    // Persistent usage statistics from localStorage
    this.storageKey = "english_wheel_usage_stats_v2";
    this.usageStats = this.loadUsageStats();
  }

  loadUsageStats() {
    try {
      if (typeof localStorage !== "undefined") {
        const raw = localStorage.getItem(this.storageKey);
        if (raw) return JSON.parse(raw);
      }
    } catch (e) {
      console.warn("Storage not available:", e);
    }
    return {};
  }

  saveUsageStats() {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(this.storageKey, JSON.stringify(this.usageStats));
      }
    } catch (e) {
      console.warn("Could not save stats:", e);
    }
  }

  resetSession() {
    this.sessionUsedSet7.clear();
    this.sessionUsedSet8.clear();
    // Keep a slight category diversity memory but clear hard session locks
  }

  /**
   * Calculates the dynamic selection weight for an expression.
   * Multi-factor scoring:
   * 1. Base Weight (calibrated lower for overused items like "Nice to meet you")
   * 2. Usage Penalty (inversely proportional to times shown)
   * 3. Recency Penalty (heavily penalized if shown in recent buffer)
   * 4. Category Balancing (penalized if this category appeared recently)
   */
  calculateWeight(item) {
    const base = item.baseWeight !== undefined ? item.baseWeight : 1.0;
    const usage = this.usageStats[item.phrase]?.count || 0;

    // 1. Usage factor: higher usage reduces probability dynamically
    const usageFactor = 1.0 / (1.0 + (usage * 1.6));

    // 2. Recency buffer factor
    let recencyFactor = 1.0;
    const recencyIndex = this.recencyBuffer.indexOf(item.phrase);
    if (recencyIndex !== -1) {
      // 0 = most recent
      recencyFactor = Math.max(0.05, recencyIndex * 0.15);
    }

    // 3. Category diversity factor
    let categoryFactor = 1.0;
    if (this.categoryHistory.length > 0) {
      const lastCat = this.categoryHistory[0];
      const secondLastCat = this.categoryHistory[1];
      const thirdLastCat = this.categoryHistory[2];

      if (item.category === lastCat) {
        categoryFactor = 0.12; // Strongly avoid immediate category repeat
      } else if (item.category === secondLastCat) {
        categoryFactor = 0.35;
      } else if (item.category === thirdLastCat) {
        categoryFactor = 0.65;
      }
    }

    const finalWeight = base * usageFactor * recencyFactor * categoryFactor;
    return Math.max(0.01, finalWeight);
  }

  /**
   * Main question selection method with weighted random selection,
   * category rotation, and strict in-session non-repetition.
   */
  getRandomExpression(grade = 7, categoryFilter = null) {
    const list = grade === 8 ? this.grade8 : this.grade7;
    const sessionSet = grade === 8 ? this.sessionUsedSet8 : this.sessionUsedSet7;

    // Filter out items already used in this game session
    let available = list.filter(item => !sessionSet.has(item.phrase));

    // If all items in this grade were used (rare in standard play), reset session pool
    if (available.length === 0) {
      sessionSet.clear();
      available = [...list];
    }

    // Apply optional category filter if requested
    if (categoryFilter) {
      const catFiltered = available.filter(item => item.category === categoryFilter);
      if (catFiltered.length > 0) available = catFiltered;
    }

    // Calculate dynamic weights for all candidate expressions
    const weightedPool = available.map(item => ({
      item,
      weight: this.calculateWeight(item)
    }));

    const totalWeight = weightedPool.reduce((sum, entry) => sum + entry.weight, 0);

    // Weighted random selection
    let randomThreshold = Math.random() * totalWeight;
    let chosenItem = weightedPool[0].item;

    for (const entry of weightedPool) {
      randomThreshold -= entry.weight;
      if (randomThreshold <= 0) {
        chosenItem = entry.item;
        break;
      }
    }

    // Record session usage
    sessionSet.add(chosenItem.phrase);

    // Record recency buffer
    this.recencyBuffer.unshift(chosenItem.phrase);
    if (this.recencyBuffer.length > this.maxRecencyBufferSize) {
      this.recencyBuffer.pop();
    }

    // Record category history
    this.categoryHistory.unshift(chosenItem.category);
    if (this.categoryHistory.length > this.maxCategoryHistorySize) {
      this.categoryHistory.pop();
    }

    // Record and persist usage statistics
    if (!this.usageStats[chosenItem.phrase]) {
      this.usageStats[chosenItem.phrase] = { count: 0, lastSeen: Date.now() };
    }
    this.usageStats[chosenItem.phrase].count += 1;
    this.usageStats[chosenItem.phrase].lastSeen = Date.now();
    this.saveUsageStats();

    return { ...chosenItem };
  }

  /**
   * Final Round Expression Selection:
   * Selects longer/higher difficulty expressions with full weighted variety
   */
  getFinalRoundExpression(grade = 7) {
    const list = grade === 8 ? this.grade8 : this.grade7;
    const sessionSet = grade === 8 ? this.sessionUsedSet8 : this.sessionUsedSet7;

    // Prefer difficulty >= 2 or longer phrases
    let candidates = list.filter(item => !sessionSet.has(item.phrase) && (item.difficulty >= 2 || item.phrase.length >= 15));
    if (candidates.length === 0) {
      candidates = list.filter(item => !sessionSet.has(item.phrase));
      if (candidates.length === 0) {
        sessionSet.clear();
        candidates = list;
      }
    }

    const weightedPool = candidates.map(item => ({
      item,
      weight: this.calculateWeight(item)
    }));

    const totalWeight = weightedPool.reduce((sum, entry) => sum + entry.weight, 0);
    let randomThreshold = Math.random() * totalWeight;
    let chosenItem = weightedPool[0].item;

    for (const entry of weightedPool) {
      randomThreshold -= entry.weight;
      if (randomThreshold <= 0) {
        chosenItem = entry.item;
        break;
      }
    }

    sessionSet.add(chosenItem.phrase);
    this.recencyBuffer.unshift(chosenItem.phrase);
    if (this.recencyBuffer.length > this.maxRecencyBufferSize) this.recencyBuffer.pop();

    this.categoryHistory.unshift(chosenItem.category);
    if (this.categoryHistory.length > this.maxCategoryHistorySize) this.categoryHistory.pop();

    if (!this.usageStats[chosenItem.phrase]) {
      this.usageStats[chosenItem.phrase] = { count: 0, lastSeen: Date.now() };
    }
    this.usageStats[chosenItem.phrase].count += 1;
    this.usageStats[chosenItem.phrase].lastSeen = Date.now();
    this.saveUsageStats();

    return { ...chosenItem };
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { grade7Expressions, grade8Expressions, ExpressionManager };
}
