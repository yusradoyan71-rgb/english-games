/**
 * ============================================================================
 * HOT POTATO 💣 TEAM EDITION — JAVASCRIPT ENGINE
 * Classroom English Speaking Game for 7th & 8th Grade (A1–A2 & Low B1)
 * ============================================================================
 */

'use strict';

/* ============================================================================
   1. QUESTION BANK & CHAOS CHALLENGES (210+ Questions + 35 Chaos Challenges)
   ============================================================================ */

const QUESTION_BANK = [
  // 1. QUICK QUESTIONS (20)
  { cat: "⚡ QUICK QUESTIONS", text: "What is your favorite food, and why do you love it?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is your favorite animal, and where does it live?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is your favorite color? Name 3 things that have this color!" },
  { cat: "⚡ QUICK QUESTIONS", text: "Do you have a pet? If not, what pet would you love to have?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What sport do you like to play or watch on TV?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is your favorite movie or cartoon of all time?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is your favorite season: Spring, Summer, Autumn, or Winter?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is your favorite school subject, and who is the teacher?" },
  { cat: "⚡ QUICK QUESTIONS", text: "Who is your favorite superhero or cartoon character?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is your favorite video game or mobile game?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What flavor of ice cream is the absolute best?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is your favorite day of the week, and why?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is your favorite type of music or favorite band?" },
  { cat: "⚡ QUICK QUESTIONS", text: "If you could have one superpower, what would you choose?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What app on your phone or tablet do you use the most?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is your favorite breakfast meal in the morning?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is a country you really want to visit in the future?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is your favorite snack to eat while watching a movie?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is your favorite book or story that you read in class?" },
  { cat: "⚡ QUICK QUESTIONS", text: "What is the best board game or card game you like playing?" },

  // 2. DAILY LIFE & ROUTINES (15)
  { cat: "⏰ DAILY LIFE", text: "What is the first thing you do when you wake up in the morning?" },
  { cat: "⏰ DAILY LIFE", text: "What do you usually do right after you come home from school?" },
  { cat: "⏰ DAILY LIFE", text: "What do you like to do before going to sleep at night?" },
  { cat: "⏰ DAILY LIFE", text: "What time do you usually wake up on school days vs weekends?" },
  { cat: "⏰ DAILY LIFE", text: "How do you usually get to school: bus, walking, car, or bike?" },
  { cat: "⏰ DAILY LIFE", text: "What do you usually eat for lunch on school days?" },
  { cat: "⏰ DAILY LIFE", text: "How long does it take you to get ready in the morning?" },
  { cat: "⏰ DAILY LIFE", text: "Do you clean your bedroom? When was the last time you tidied it up?" },
  { cat: "⏰ DAILY LIFE", text: "What chore do you dislike doing the most at home?" },
  { cat: "⏰ DAILY LIFE", text: "What do you usually do when you have 1 hour of free time at home?" },
  { cat: "⏰ DAILY LIFE", text: "Do you prefer studying in the morning or in the evening? Why?" },
  { cat: "⏰ DAILY LIFE", text: "What is your typical Sunday evening routine before school Monday?" },
  { cat: "⏰ DAILY LIFE", text: "What is your favorite meal of the day: breakfast, lunch, or dinner?" },
  { cat: "⏰ DAILY LIFE", text: "Do you ever cook or help prepare food in the kitchen? What do you make?" },
  { cat: "⏰ DAILY LIFE", text: "What is something you do every single day without forgetting?" },

  // 3. SCHOOL & LEARNING (15)
  { cat: "🏫 SCHOOL LIFE", text: "What is the best thing about your school or classroom?" },
  { cat: "🏫 SCHOOL LIFE", text: "What is the worst thing about getting homework?" },
  { cat: "🏫 SCHOOL LIFE", text: "Which school subject is the most challenging for you, and why?" },
  { cat: "🏫 SCHOOL LIFE", text: "If you were the school principal for one day, what rule would you change?" },
  { cat: "🏫 SCHOOL LIFE", text: "What would you do if you were the English teacher for today?" },
  { cat: "🏫 SCHOOL LIFE", text: "What is your favorite memory from a school trip or excursion?" },
  { cat: "🏫 SCHOOL LIFE", text: "What do you and your classmates do during recess or break time?" },
  { cat: "🏫 SCHOOL LIFE", text: "Do you prefer working on group projects or studying alone? Why?" },
  { cat: "🏫 SCHOOL LIFE", text: "What is one thing every classroom should have to make learning fun?" },
  { cat: "🏫 SCHOOL LIFE", text: "What is your favorite classroom game or activity?" },
  { cat: "🏫 SCHOOL LIFE", text: "Should students wear school uniforms or regular clothes? Why?" },
  { cat: "🏫 SCHOOL LIFE", text: "What sports or clubs would you like your school to add?" },
  { cat: "🏫 SCHOOL LIFE", text: "If you could design your dream school, what would it look like?" },
  { cat: "🏫 SCHOOL LIFE", text: "What is the most interesting fact you learned recently in science or history?" },
  { cat: "🏫 SCHOOL LIFE", text: "How do you prepare for an important exam or quiz?" },

  // 4. FOOD & DRINKS (15)
  { cat: "🍕 FOOD & DRINKS", text: "If you could only eat one food for the rest of your life, what is it?" },
  { cat: "🍕 FOOD & DRINKS", text: "What is a food or vegetable that you really dislike eating?" },
  { cat: "🍕 FOOD & DRINKS", text: "What are your top 3 favorite toppings to put on a pizza?" },
  { cat: "🍕 FOOD & DRINKS", text: "What is the strangest or most unusual food you have ever tasted?" },
  { cat: "🍕 FOOD & DRINKS", text: "Do you prefer eating at home or eating at a restaurant? Why?" },
  { cat: "🍕 FOOD & DRINKS", text: "What is your favorite dessert or sweet treat on your birthday?" },
  { cat: "🍕 FOOD & DRINKS", text: "Can you handle spicy food? What is the spiciest thing you ate?" },
  { cat: "🍕 FOOD & DRINKS", text: "What is your favorite fruit to eat in the summer?" },
  { cat: "🍕 FOOD & DRINKS", text: "If you opened a restaurant, what kind of food would you serve?" },
  { cat: "🍕 FOOD & DRINKS", text: "What do you like to drink on a hot sunny afternoon?" },
  { cat: "🍕 FOOD & DRINKS", text: "What is the best street food or fast food in your opinion?" },
  { cat: "🍕 FOOD & DRINKS", text: "If you had to bake a cake for your class, what flavor would it be?" },
  { cat: "🍕 FOOD & DRINKS", text: "Do you like chocolate or gummy candy more? Why?" },
  { cat: "🍕 FOOD & DRINKS", text: "What is a traditional dish from your country that you love?" },
  { cat: "🍕 FOOD & DRINKS", text: "Describe the ultimate giant burger you would create!" },

  // 5. FRIENDS & SOCIAL (12)
  { cat: "👥 FRIENDS", text: "What qualities make someone a truly great friend?" },
  { cat: "👥 FRIENDS", text: "What is your favorite thing to do when you hang out with friends?" },
  { cat: "👥 FRIENDS", text: "Describe your best friend in 3 words and explain why!" },
  { cat: "👥 FRIENDS", text: "What is something funny a friend did that made everyone laugh?" },
  { cat: "👥 FRIENDS", text: "How do you cheer up a friend who is having a bad day?" },
  { cat: "👥 FRIENDS", text: "Do you prefer having a large group of friends or a few close friends?" },
  { cat: "👥 FRIENDS", text: "What multiplayer game do you love playing with your friends?" },
  { cat: "👥 FRIENDS", text: "If you and your friends planned a party, what would the theme be?" },
  { cat: "👥 FRIENDS", text: "How did you meet your best friend?" },
  { cat: "👥 FRIENDS", text: "What is the best gift you ever gave or received from a friend?" },
  { cat: "👥 FRIENDS", text: "If you went on a camping trip with your friends, what would you bring?" },
  { cat: "👥 FRIENDS", text: "What is an inside joke you have with your friend group?" },

  // 6. FAMILY & PETS (12)
  { cat: "🏡 FAMILY & HOME", text: "Who is the funniest or loudest person in your family?" },
  { cat: "🏡 FAMILY & HOME", text: "What is a fun tradition or holiday celebration your family does?" },
  { cat: "🏡 FAMILY & HOME", text: "Do you have any pets? Tell us a funny story about them!" },
  { cat: "🏡 FAMILY & HOME", text: "If you could adopt any exotic animal as a pet, what would it be?" },
  { cat: "🏡 FAMILY & HOME", text: "How do you help your parents or family around the house?" },
  { cat: "🏡 FAMILY & HOME", text: "What is your favorite board game or card game to play with family?" },
  { cat: "🏡 FAMILY & HOME", text: "Do you have brothers or sisters? What is the best and worst part?" },
  { cat: "🏡 FAMILY & HOME", text: "What is the best piece of advice your parents or grandparents gave you?" },
  { cat: "🏡 FAMILY & HOME", text: "What is a delicious meal that someone in your family cooks best?" },
  { cat: "🏡 FAMILY & HOME", text: "Describe your pet or a pet you wish you had in 3 sentences." },
  { cat: "🏡 FAMILY & HOME", text: "What do you and your family like to do on weekend mornings?" },
  { cat: "🏡 FAMILY & HOME", text: "If your family won a big holiday trip, where should you all go?" },

  // 7. HOBBIES & FREE TIME (15)
  { cat: "🎨 HOBBIES", text: "What is a hobby or activity that you can do for hours without getting bored?" },
  { cat: "🎨 HOBBIES", text: "Do you play any musical instruments? Which one would you love to learn?" },
  { cat: "🎨 HOBBIES", text: "Do you like drawing, painting, or making crafts? What do you create?" },
  { cat: "🎨 HOBBIES", text: "What is your favorite sport to play outside with classmates?" },
  { cat: "🎨 HOBBIES", text: "Do you collect anything like cards, stickers, figures, or coins?" },
  { cat: "🎨 HOBBIES", text: "What video game world would you love to live in for one week?" },
  { cat: "🎨 HOBBIES", text: "Do you like dancing or singing? When do you do it?" },
  { cat: "🎨 HOBBIES", text: "What is a new skill you want to learn this year (cooking, skateboarding, coding)?" },
  { cat: "🎨 HOBBIES", text: "Do you like reading books or comic books? What is your favorite?" },
  { cat: "🎨 HOBBIES", text: "What YouTube channel or streamer do you find the most entertaining?" },
  { cat: "🎨 HOBBIES", text: "Do you prefer spending free time indoors or outdoors? Why?" },
  { cat: "🎨 HOBBIES", text: "If you could become a world champion at any sport, which sport?" },
  { cat: "🎨 HOBBIES", text: "What is the most creative thing you have ever built or made?" },
  { cat: "🎨 HOBBIES", text: "What outdoor activity do you love doing in the summer sun?" },
  { cat: "🎨 HOBBIES", text: "If you started a club after school, what would the club be about?" },

  // 8. WEEKENDS & RELAXING (12)
  { cat: "🌴 WEEKENDS", text: "Describe your perfect, dream Saturday from morning to night!" },
  { cat: "🌴 WEEKENDS", text: "Do you usually wake up early or sleep in late on Saturdays?" },
  { cat: "🌴 WEEKENDS", text: "What movie or TV series did you watch recently on the weekend?" },
  { cat: "🌴 WEEKENDS", text: "When do you usually finish your weekend homework: Friday, Saturday, or Sunday night?" },
  { cat: "🌴 WEEKENDS", text: "Do you prefer going out shopping or staying home playing games on weekends?" },
  { cat: "🌴 WEEKENDS", text: "What is your favorite weekend breakfast treat?" },
  { cat: "🌴 WEEKENDS", text: "What is the best weekend trip you have ever taken with friends or family?" },
  { cat: "🌴 WEEKENDS", text: "If you had $50 to spend this weekend, what would you buy or do?" },
  { cat: "🌴 WEEKENDS", text: "What outdoor park or place do you love visiting on weekends?" },
  { cat: "🌴 WEEKENDS", text: "How do you feel on Sunday night when school starts the next day?" },
  { cat: "🌴 WEEKENDS", text: "What is your favorite video game to play on weekend afternoons?" },
  { cat: "🌴 WEEKENDS", text: "Do you like rainy weekends at home or sunny weekends outside? Why?" },

  // 9. TRAVEL & ADVENTURE (12)
  { cat: "✈️ TRAVEL", text: "What is the most amazing city or place you have ever visited?" },
  { cat: "✈️ TRAVEL", text: "Do you prefer a vacation at a sunny beach or in snowy mountains? Why?" },
  { cat: "✈️ TRAVEL", text: "If you could travel anywhere in the world right now, where would you go?" },
  { cat: "✈️ TRAVEL", text: "Do you prefer traveling by airplane, train, car, or boat? Why?" },
  { cat: "✈️ TRAVEL", text: "What 3 essential items do you always pack in your travel backpack?" },
  { cat: "✈️ TRAVEL", text: "What famous landmark would you love to see in person (Eiffel Tower, Pyramids, etc.)?" },
  { cat: "✈️ TRAVEL", text: "Would you rather visit a huge busy city or a peaceful quiet village?" },
  { cat: "✈️ TRAVEL", text: "What is the best theme park or water park you have ever visited?" },
  { cat: "✈️ TRAVEL", text: "Have you ever gone camping in a tent? What was it like?" },
  { cat: "✈️ TRAVEL", text: "What cool souvenir did you bring home from a past trip?" },
  { cat: "✈️ TRAVEL", text: "If you could take a road trip with 3 friends, where would you drive?" },
  { cat: "✈️ TRAVEL", text: "What language would you like to learn before traveling to a new country?" },

  // 10. OPINIONS & FUN DEBATES (15)
  { cat: "⚖️ OPINIONS", text: "Cats or Dogs: Which pet is better, and why?" },
  { cat: "⚖️ OPINIONS", text: "Summer or Winter: Which season is the greatest?" },
  { cat: "⚖️ OPINIONS", text: "Books or Movies: Which tells a better story?" },
  { cat: "⚖️ OPINIONS", text: "Is homework really useful for students, or should it be banned?" },
  { cat: "⚖️ OPINIONS", text: "Are video games good or bad for teenagers? Give 2 reasons!" },
  { cat: "⚖️ OPINIONS", text: "Early bird (wake up early) or Night owl (stay up late)? Which are you?" },
  { cat: "⚖️ OPINIONS", text: "Sneakers or boots: Which shoes are more comfortable and stylish?" },
  { cat: "⚖️ OPINIONS", text: "Sweet snacks or salty snacks: Which do you crave more?" },
  { cat: "⚖️ OPINIONS", text: "Pizza or Burgers: Which is the king of fast food?" },
  { cat: "⚖️ OPINIONS", text: "Hot chocolate or Cold iced tea: Which drink is superior?" },
  { cat: "⚖️ OPINIONS", text: "Math or English: Which subject do you find more interesting?" },
  { cat: "⚖️ OPINIONS", text: "Is it better to be super smart or super funny? Why?" },
  { cat: "⚖️ OPINIONS", text: "Should students be allowed to use mobile phones during lunch break?" },
  { cat: "⚖️ OPINIONS", text: "Would you rather watch movies in a cinema or at home on the couch?" },
  { cat: "⚖️ OPINIONS", text: "Is winning or having fun more important in sports games?" },

  // 11. WOULD YOU RATHER (15)
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather be able to fly or be invisible whenever you want?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather have NO homework for a year or NO exams for a year?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather be super rich or world famous?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather travel 100 years into the past or 100 years into the future?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather have a pet robot or a friendly mini dinosaur?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather live underwater in an ocean dome or in space on Mars?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather never have to sleep again or never have to brush your teeth?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather run as fast as a cheetah or have super strength like Hulk?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather be able to speak all human languages or talk to animals?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather always feel slightly too hot or always feel slightly too cold?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather teleport anywhere instantly or be able to read minds?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather have a dog the size of an elephant or an elephant the size of a dog?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather live in a medieval castle or in a high-tech modern treehouse?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather eat pizza every day for lunch or ice cream every day for dessert?" },
  { cat: "🤔 WOULD YOU RATHER", text: "Would you rather have 10 loyal best friends or $1,000,000 in your bank account?" },

  // 12. IMAGINATION & DREAMS (15)
  { cat: "✨ IMAGINATION", text: "If you had a magic door in your room that leads anywhere, where does it open?" },
  { cat: "✨ IMAGINATION", text: "If you woke up tomorrow with $1,000 in cash, what are the first 2 things you buy?" },
  { cat: "✨ IMAGINATION", text: "If you could meet any fictional movie or anime character in real life, who is it?" },
  { cat: "✨ IMAGINATION", text: "If you could invent a brand new machine to help students, what does it do?" },
  { cat: "✨ IMAGINATION", text: "If animals could talk, which animal would have the most sarcastic personality?" },
  { cat: "✨ IMAGINATION", text: "If you could design your dream house, what crazy room would you include (e.g. ball pit, arcade)?" },
  { cat: "✨ IMAGINATION", text: "If a genie gave you 3 wishes (no wishing for more wishes), what do you wish for?" },
  { cat: "✨ IMAGINATION", text: "If you could switch lives with any celebrity or athlete for 24 hours, who would it be?" },
  { cat: "✨ IMAGINATION", text: "If you discovered a new planet, what would you name it and what lives there?" },
  { cat: "✨ IMAGINATION", text: "If you could stop time for 1 hour every day, what would you do during that hour?" },
  { cat: "✨ IMAGINATION", text: "If you could make one new national holiday, what would people celebrate on that day?" },
  { cat: "✨ IMAGINATION", text: "If you could bring any historical figure to your school for show-and-tell, who?" },
  { cat: "✨ IMAGINATION", text: "If your toys or video game characters came alive at night, what would they do?" },
  { cat: "✨ IMAGINATION", text: "If you found a magic lamp on the beach, what would you say to the genie?" },
  { cat: "✨ IMAGINATION", text: "If you could control one element (fire, water, earth, air), which one and why?" },

  // 13. FUNNY & SILLY (15)
  { cat: "😂 FUNNY & SILLY", text: "If your school backpack could talk, what would it complain about the most?" },
  { cat: "😂 FUNNY & SILLY", text: "If your teacher suddenly turned into a student today, how would they behave?" },
  { cat: "😂 FUNNY & SILLY", text: "If you had a pet T-Rex dinosaur, what funny name would you give it?" },
  { cat: "😂 FUNNY & SILLY", text: "If your shoes could talk, what would they say after a long day of walking?" },
  { cat: "😂 FUNNY & SILLY", text: "If you woke up tomorrow as a fluffy cat, what is your plan for the day?" },
  { cat: "😂 FUNNY & SILLY", text: "If your refrigerator opened and started speaking, what would it tell you?" },
  { cat: "😂 FUNNY & SILLY", text: "What is the silliest or weirdest dream you remember having?" },
  { cat: "😂 FUNNY & SILLY", text: "If you had to wear one funny costume to school every day for a week, what would it be?" },
  { cat: "😂 FUNNY & SILLY", text: "If birds started speaking human words, what would they shout from the trees?" },
  { cat: "😂 FUNNY & SILLY", text: "Tell the class the worst or funniest joke you know!" },
  { cat: "😂 FUNNY & SILLY", text: "If you had a robot that made funny mistakes, what ridiculous thing would it do?" },
  { cat: "😂 FUNNY & SILLY", text: "If chocolate rain started falling from the sky, how would you collect it?" },
  { cat: "😂 FUNNY & SILLY", text: "If aliens landed in your backyard and asked for food, what snack would you give them?" },
  { cat: "😂 FUNNY & SILLY", text: "What is the funniest face or impression you can make right now?" },
  { cat: "😂 FUNNY & SILLY", text: "If you were invisible for 30 minutes in your school, what harmless prank would you do?" },

  // 14. FUTURE & ASPIRATIONS (12)
  { cat: "🚀 FUTURE", text: "What dream job or career do you want to have when you grow up?" },
  { cat: "🚀 FUTURE", text: "What do you think schools will look like in the year 2050?" },
  { cat: "🚀 FUTURE", text: "Would you like to have a personal robot assistant at home? What tasks will it do?" },
  { cat: "🚀 FUTURE", text: "Do you think flying cars will be common in our lifetime? Why or why not?" },
  { cat: "🚀 FUTURE", text: "Would you volunteer to travel on a spaceship to Mars? Why or why not?" },
  { cat: "🚀 FUTURE", text: "What is one big personal goal you want to achieve before you finish school?" },
  { cat: "🚀 FUTURE", text: "What technology from sci-fi movies do you hope is invented soon?" },
  { cat: "🚀 FUTURE", text: "Where do you see yourself living when you are 25 years old?" },
  { cat: "🚀 FUTURE", text: "What is one thing you hope never changes in the future?" },
  { cat: "🚀 FUTURE", text: "What advice would you give to your 5-year-old self?" },
  { cat: "🚀 FUTURE", text: "If you wrote a book in the future, what would the story be about?" },
  { cat: "🚀 FUTURE", text: "What exciting thing are you looking forward to doing next summer?" },

  // 15. DESCRIPTIONS & OBSERVATION (12)
  { cat: "🔍 DESCRIPTIONS", text: "Describe your bedroom to the class in 3 clear sentences!" },
  { cat: "🔍 DESCRIPTIONS", text: "Describe your favorite piece of clothing or jacket you love wearing." },
  { cat: "🔍 DESCRIPTIONS", text: "Describe what your hometown or city looks like to someone who never visited." },
  { cat: "🔍 DESCRIPTIONS", text: "Describe your dream sports car or spaceship in detail!" },
  { cat: "🔍 DESCRIPTIONS", text: "Describe what you see right now in your classroom using 3 colors!" },
  { cat: "🔍 DESCRIPTIONS", text: "Describe what a peaceful beach at sunset feels and smells like." },
  { cat: "🔍 DESCRIPTIONS", text: "Describe the most delicious dessert you have ever seen or tasted." },
  { cat: "🔍 DESCRIPTIONS", text: "Describe a scary monster for a movie: what does it look and sound like?" },
  { cat: "🔍 DESCRIPTIONS", text: "Describe your ideal gaming setup or study desk!" },
  { cat: "🔍 DESCRIPTIONS", text: "Describe what winter snow feels and looks like to someone from a tropical island." },
  { cat: "🔍 DESCRIPTIONS", text: "Describe the funniest person you know without saying their name!" },
  { cat: "🔍 DESCRIPTIONS", text: "Describe your morning routine using step-by-step transition words (First, Next, Then)!" },

  // 16. STORY & SITUATIONS (12)
  { cat: "📖 STORY TIME", text: "You are 15 minutes late for school. What crazy story happened on your way?" },
  { cat: "📖 STORY TIME", text: "You find a mysterious glowing locked wooden box in your attic. What do you do?" },
  { cat: "📖 STORY TIME", text: "You wake up stranded on a strange tropical island. What is your survival plan?" },
  { cat: "📖 STORY TIME", text: "Your smartphone suddenly gains superpowers. What magic can it perform?" },
  { cat: "📖 STORY TIME", text: "A mysterious friendly stranger hands you an envelope with $500. What happens next?" },
  { cat: "📖 STORY TIME", text: "You find a dinosaur egg in your garden and it starts hatching! What do you do?" },
  { cat: "📖 STORY TIME", text: "Spider-Man appears at your window and asks for your help with a mission. What do you do?" },
  { cat: "📖 STORY TIME", text: "The power goes out in your entire town during a thunderstorm. What do you do?" },
  { cat: "📖 STORY TIME", text: "You are accidentally locked inside your school library overnight. What happens?" },
  { cat: "📖 STORY TIME", text: "You look into the bathroom mirror and your reflection winks at you! What do you do?" },
  { cat: "📖 STORY TIME", text: "You discover a secret staircase behind the bookcase in your school. Where does it lead?" },
  { cat: "📖 STORY TIME", text: "A dog comes up to you and speaks in clear English: 'I need your help!' What do you say?" }
];

/* ============================================================================
   CHAOS CHALLENGES (35 Unique Challenges)
   ============================================================================ */

const CHAOS_CHALLENGES = [
  { text: "🤖 SPEAK LIKE A ROBOT!", prompt: "Answer this question with a monotone, mechanical robot voice (beep boop)!" },
  { text: "🐭 SPEAK IN A TINY MOUSE VOICE!", prompt: "Answer this question in a super high-pitched, squeaky mouse voice!" },
  { text: "👑 SPEAK LIKE A ROYAL KING OR QUEEN!", prompt: "Answer like you are a majestic royal monarch addressing your kingdom!" },
  { text: "🧟 SPEAK LIKE A HUNGRY ZOMBIE!", prompt: "Answer this question while groaning like a spooky zombie (braaiiins)!" },
  { text: "🎤 SING YOUR ANSWER LIKE A POP STAR!", prompt: "Sing your answer to any melody like you are performing on a concert stage!" },
  { text: "😂 MAKE YOUR ANSWER AS FUNNY AS POSSIBLE!", prompt: "Tell the most ridiculous, hilarious answer you can think of!" },
  { text: "😡 ANSWER LIKE YOU ARE SUPER ANGRY!", prompt: "Answer like you are outrageously furious about everything!" },
  { text: "🦸 ANSWER LIKE A HEROIC SUPERHERO!", prompt: "Answer proudly like a superhero about to save the entire universe!" },
  { text: "🚀 PRETEND YOU ARE AN ASTRONAUT IN SPACE!", prompt: "Answer like you are floating in zero gravity sending a radio message to Earth!" },
  { text: "🎬 DRAMATIC MOVIE TRAILER VOICE!", prompt: "Speak with a deep, epic voice like a Hollywood movie trailer narrator!" },
  { text: "🙈 ANSWER WITHOUT SAYING 'I' OR 'MY'!", prompt: "Explain your answer without ever using the forbidden words 'I' or 'my'!" },
  { text: "🏃 STAND UP & DO 3 JUMPING JACKS BEFORE ANSWERING!", prompt: "Quickly stand up, do 3 quick jumping jacks, and then speak your answer!" },
  { text: "👽 EXPLAIN IT TO AN ALIEN VISITOR!", prompt: "Pretend your classmates are aliens who know nothing about Earth: explain it simply!" },
  { text: "🏴‍☠️ SPEAK LIKE A FIERCE PIRATE!", prompt: "Use your best pirate voice and start with 'Arrrr, matey!'!" },
  { text: "🤫 ANSWER IN A TOP-SECRET WHISPER!", prompt: "Whisper your answer like it is the world's most confidential secret!" },
  { text: "👴 SPEAK LIKE A 90-YEAR-OLD GRANDMA/PA!", prompt: "Use an old, shaky, wise grandparent voice to deliver your answer!" },
  { text: "⚽ EXCITED SPORTS COMMENTATOR!", prompt: "Answer as fast and loud as a soccer commentator during a world cup final goal!" },
  { text: "🐢 ANSWER IN EXTREME SLOW MOTION!", prompt: "Speak your words in dramatic, hilarious super-slow motion!" },
  { text: "⚡ LIGHTNING FAST IN ONE BREATH!", prompt: "Take a huge breath and speak your complete answer as fast as a racing car!" },
  { text: "🕺 DANCE WITH YOUR HANDS WHILE TALKING!", prompt: "Wave your hands in a silly dance rhythm while giving your full answer!" },
  { text: "🐱 END EVERY SENTENCE WITH 'MEOW!'!", prompt: "Answer normally, but you MUST finish every sentence with a loud 'MEOW!'!" },
  { text: "🧙 SPEAK LIKE A MAGICAL WIZARD!", prompt: "Cast a dramatic spell with your imaginary wand before and after your answer!" },
  { text: "🦖 ROAR LIKE A T-REX BEFORE YOUR ANSWER!", prompt: "Give a ferocious dinosaur roar, then answer the question!" },
  { text: "📻 PRETEND YOU ARE A RADIO ROCK DJ!", prompt: "Speak with huge radio energy like you are introducing the number 1 hit song!" },
  { text: "🧊 YOU ARE FREEZING IN ANTARCTICA (BRRR)!", prompt: "Answer while shivering uncontrollably and chattering your teeth (b-b-brrr)!" },
  { text: "🍕 SAY THE WORD 'PIZZA' 3 TIMES!", prompt: "You must naturally (or unnaturally) sneak the word 'PIZZA' into your answer 3 times!" },
  { text: "👶 SPEAK LIKE A PLAYFUL TODDLER!", prompt: "Answer in a cute, childish toddler voice!" },
  { text: "🤠 SPEAK LIKE A WILD WEST COWBOY!", prompt: "Use your best cowboy accent and end your answer with a loud 'Yee-Haw!'!" },
  { text: "🧐 SPEAK LIKE A SERIOUS DETECTIVE!", prompt: "Answer like you are Sherlock Holmes examining clues at a crime scene!" },
  { text: "🥁 CLAP YOUR HANDS ON EVERY SYLLABLE!", prompt: "Clap your hands together in rhythm as you speak your answer!" },
  { text: "🚗 MAKE CAR REV SOUNDS (VROOM VROOM)!", prompt: "Insert racecar engine noises between your words (Vroom vroom)!" },
  { text: "🌊 TALK LIKE YOU ARE UNDERWATER!", prompt: "Tap your finger over your lips to make funny underwater bubbling sounds while speaking!" },
  { text: "🦹 SPEAK LIKE A CARTOON VILLAIN (MWAHAHA)!", prompt: "Answer like an evil mastermind and finish with a sinister laugh 'Mwahaha!'!" },
  { text: "🌟 FINISH WITH A DRAMATIC SUPERHERO POSE!", prompt: "Deliver your answer and freeze in an epic superhero victory statue pose!" },
  { text: "🤹 BALANCE A PEN ON YOUR FINGER!", prompt: "Balance a pen or pencil flat on your finger while giving your answer!" }
];

/* ============================================================================
   SPECIAL TEAM EVENTS (Occurs randomly on non-chaos rounds)
   ============================================================================ */

const SPECIAL_EVENTS = [
  {
    id: "double_points",
    title: "⭐ DOUBLE POINTS ROUND!",
    desc: "A correct answer earns +2 POINTS for your team!",
    points: 2,
    timerSeconds: 15,
    icon: "⭐"
  },
  {
    id: "speed_round",
    title: "⚡ SPEED ROUND!",
    desc: "Super fast round! The timer is only 10 SECONDS!",
    points: 1,
    timerSeconds: 10,
    icon: "⚡"
  },
  {
    id: "easy_round",
    title: "🟢 EASY ROUND!",
    desc: "Gentle speaking prompt! A breeze for your team!",
    points: 1,
    timerSeconds: 15,
    icon: "🟢"
  },
  {
    id: "hard_round",
    title: "🔥 B1 CHALLENGE ROUND!",
    desc: "Low B1 level prompt! Give 2 or more complete reasons!",
    points: 1,
    timerSeconds: 15,
    icon: "🔥"
  },
  {
    id: "team_help",
    title: "🤝 TEAM HELP ALLOWED!",
    desc: "One teammate may whisper or say ONE word of help to the speaker!",
    points: 1,
    timerSeconds: 15,
    icon: "🤝"
  },
  {
    id: "no_help",
    title: "🛡️ SOLO WARRIOR — NO HELP!",
    desc: "The chosen student must speak completely independently with no hints!",
    points: 1,
    timerSeconds: 15,
    icon: "🛡️"
  },
  {
    id: "mystery_round",
    title: "❓ MYSTERY QUESTION!",
    desc: "The question remains hidden until the speaker is picked and timer starts!",
    points: 1,
    timerSeconds: 15,
    icon: "❓"
  }
];

/* Preset Team Configurations for Fun Defaults */
const TEAM_PRESETS = [
  { name: "The Tigers", color: "blue", icon: "🔵", defaultPlayers: ["Alex", "Emma", "Jack", "Sarah"] },
  { name: "The Dragons", color: "red", icon: "🔴", defaultPlayers: ["Leo", "Maya", "Noah", "Chloe"] },
  { name: "The Wolves", color: "green", icon: "🟢", defaultPlayers: ["Liam", "Sophia", "Ethan", "Olivia"] },
  { name: "The Falcons", color: "purple", icon: "🟣", defaultPlayers: ["Lucas", "Zoe", "Mason", "Ava"] }
];

/* Sample Player Name Bank for Quick Auto-Fill */
const SAMPLE_NAMES = [
  ["Alex", "Emma", "Jack", "Sarah", "Sam", "Ruby"],
  ["Leo", "Maya", "Noah", "Chloe", "Finn", "Mia"],
  ["Liam", "Sophia", "Ethan", "Olivia", "Oliver", "Grace"],
  ["Lucas", "Zoe", "Mason", "Ava", "Henry", "Lily"]
];

/* ============================================================================
   2. WEB AUDIO API SYNTHESIZER ENGINE (Procedural Audio, Zero Dependencies)
   ============================================================================ */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        this.isInitialized = true;
      }
    } catch (e) {
      console.warn("Web Audio API not supported or blocked", e);
    }
  }

  ensureContext() {
    if (!this.ctx) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      try {
        this.ctx.resume();
      } catch (e) {}
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  // UI Tap / Click Sound
  playClick() {
    if (this.isMuted) return;
    try {
      this.ensureContext();
      if (!this.ctx || typeof this.ctx.createOscillator !== 'function') return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime || 0;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {}
  }

  // Normal Timer Tick (15s to 6s)
  playTickNormal() {
    if (this.isMuted) return;
    try {
      this.ensureContext();
      if (!this.ctx || typeof this.ctx.createOscillator !== 'function') return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime || 0;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.04);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }

  // Urgent Fast Tick (5s to 1s)
  playTickUrgent() {
    if (this.isMuted) return;
    try {
      this.ensureContext();
      if (!this.ctx || typeof this.ctx.createOscillator !== 'function') return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime || 0;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.05);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {}
  }

  // Correct Answer (+1 / +2 Points Chime)
  playSuccess() {
    if (this.isMuted) return;
    try {
      this.ensureContext();
      if (!this.ctx || typeof this.ctx.createOscillator !== 'function') return;

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const now = this.ctx.currentTime || 0;

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + idx * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.22, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.36);
      });
    } catch (e) {}
  }

  // BOOM Explosion Sound (Bass drop + Noise Burst)
  playBoom() {
    if (this.isMuted) return;
    try {
      this.ensureContext();
      if (!this.ctx || typeof this.ctx.createOscillator !== 'function') return;

      const now = this.ctx.currentTime || 0;

      // 1. Deep Bass Thump
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();

      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(140, now);
      subOsc.frequency.exponentialRampToValueAtTime(25, now + 0.7);

      subGain.gain.setValueAtTime(0.5, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);

      subOsc.start(now);
      subOsc.stop(now + 0.85);

      // 2. White Noise Burst (if buffer API available)
      if (typeof this.ctx.createBuffer === 'function') {
        const bufferSize = Math.floor((this.ctx.sampleRate || 44100) * 0.8);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate || 44100);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, now);
        filter.frequency.exponentialRampToValueAtTime(100, now + 0.75);

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.45, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.ctx.destination);

        noise.start(now);
        noise.stop(now + 0.8);
      }
    } catch (e) {}
  }

  // Chaos Mode Horn / Alert Sound
  playChaosSound() {
    if (this.isMuted) return;
    try {
      this.ensureContext();
      if (!this.ctx || typeof this.ctx.createOscillator !== 'function') return;

      const now = this.ctx.currentTime || 0;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.25);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.45);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.52);
    } catch (e) {}
  }

  // Grand Victory Fanfare
  playVictory() {
    if (this.isMuted) return;
    try {
      this.ensureContext();
      if (!this.ctx || typeof this.ctx.createOscillator !== 'function') return;

      const notes = [
        { f: 523.25, d: 0.15, t: 0 },    // C5
        { f: 523.25, d: 0.15, t: 0.15 }, // C5
        { f: 523.25, d: 0.15, t: 0.3 },  // C5
        { f: 659.25, d: 0.4,  t: 0.45 }, // E5
        { f: 587.33, d: 0.15, t: 0.9 },  // D5
        { f: 659.25, d: 0.15, t: 1.05 }, // E5
        { f: 783.99, d: 0.6,  t: 1.2 }   // G5
      ];

      const now = this.ctx.currentTime || 0;
      notes.forEach(note => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + note.t;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, startTime);

        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.3, startTime + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + note.d + 0.05);
      });
    } catch (e) {}
  }
}

/* ============================================================================
   3. CONFETTI & PARTICLES ENGINE (Canvas-Based, Offline-Ready)
   ============================================================================ */

class ParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas && typeof this.canvas.getContext === 'function' ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animationId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth || 1024;
    this.canvas.height = window.innerHeight || 768;
  }

  startConfetti(durationMs = 4000) {
    if (!this.ctx || typeof this.ctx.clearRect !== 'function') return;
    this.resize();
    const colors = ['#f43f5e', '#3b82f6', '#10b981', '#fbbf24', '#a855f7', '#f97316', '#38bdf8'];
    const width = window.innerWidth || 1024;
    const height = window.innerHeight || 768;

    for (let i = 0; i < 120; i++) {
      this.particles.push({
        x: width * 0.5 + (Math.random() - 0.5) * 400,
        y: height * 0.4,
        vx: (Math.random() - 0.5) * 14,
        vy: Math.random() * -12 - 4,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        opacity: 1,
        gravity: 0.35,
        decay: 0.004 + Math.random() * 0.004
      });
    }

    if (!this.animationId) {
      this.animate();
    }
  }

  startExplosionSparks(x, y) {
    if (!this.ctx || typeof this.ctx.clearRect !== 'function') return;
    this.resize();
    const colors = ['#ff4444', '#ff7700', '#ffdd00', '#ffffff'];
    const width = window.innerWidth || 1024;
    const height = window.innerHeight || 768;

    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 3;
      this.particles.push({
        x: x || width * 0.5,
        y: y || height * 0.5,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 5 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1,
        gravity: 0.15,
        decay: 0.02 + Math.random() * 0.02
      });
    }

    if (!this.animationId) {
      this.animate();
    }
  }

  animate() {
    if (!this.ctx || typeof this.ctx.clearRect !== 'function') return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.opacity -= p.decay;
      if (p.rotation !== undefined) {
        p.rotation += p.rotSpeed;
      }

      if (p.opacity <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      try {
        this.ctx.save();
        this.ctx.globalAlpha = Math.max(0, p.opacity);
        this.ctx.fillStyle = p.color;
        this.ctx.translate(p.x, p.y);
        if (p.rotation !== undefined) {
          this.ctx.rotate((p.rotation * Math.PI) / 180);
        }
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * (p.rotation !== undefined ? 0.6 : 1));
        this.ctx.restore();
      } catch (e) {}
    }

    if (this.particles.length > 0) {
      const raf = (typeof window !== 'undefined' && window.requestAnimationFrame) 
        ? window.requestAnimationFrame.bind(window) 
        : (cb) => setTimeout(cb, 16);
      this.animationId = raf(() => this.animate());
    } else {
      this.animationId = null;
      if (typeof this.ctx.clearRect === 'function') {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  clear() {
    this.particles = [];
    if (this.animationId) {
      const caf = (typeof window !== 'undefined' && window.cancelAnimationFrame) 
        ? window.cancelAnimationFrame.bind(window) 
        : clearTimeout;
      caf(this.animationId);
      this.animationId = null;
    }
    if (this.ctx && typeof this.ctx.clearRect === 'function') {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

/* ============================================================================
   4. GAME STATE & ANTI-REPETITION DECKS
   ============================================================================ */

const sound = new SoundEngine();
let particles = null;

const gameState = {
  numTeams: 3,
  playersPerTeam: 3,
  totalRounds: 20,
  teams: [],
  currentRound: 1,
  activeTeamIndex: 0,
  currentSpeakerIndex: 0,
  currentSpeakerName: "",
  currentQuestion: null,
  currentEvent: null,
  isChaosRound: false,
  pointsForCurrentTurn: 1,
  timerDuration: 15,
  timeRemaining: 15,
  timerInterval: null,
  isTimerRunning: false,
  isPaused: false,
  isProcessingTurn: false,
  questionPool: [],
  usedQuestions: [],
  chaosPool: [],
  usedChaos: []
};

/* ============================================================================
   5. DECK MANAGEMENT & ANTI-REPETITION
   ============================================================================ */

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function initQuestionDecks() {
  gameState.questionPool = shuffleArray(QUESTION_BANK);
  gameState.usedQuestions = [];
  gameState.chaosPool = shuffleArray(CHAOS_CHALLENGES);
  gameState.usedChaos = [];
}

function getRandomQuestion() {
  if (gameState.questionPool.length === 0) {
    gameState.questionPool = shuffleArray(QUESTION_BANK);
    gameState.usedQuestions = [];
  }
  const q = gameState.questionPool.pop();
  gameState.usedQuestions.push(q);
  return q;
}

function getRandomChaosChallenge() {
  if (gameState.chaosPool.length === 0) {
    gameState.chaosPool = shuffleArray(CHAOS_CHALLENGES);
    gameState.usedChaos = [];
  }
  const c = gameState.chaosPool.pop();
  gameState.usedChaos.push(c);
  return c;
}

/* ============================================================================
   6. SETUP SCREEN INITIALIZATION & DYNAMIC INPUTS
   ============================================================================ */

function initGame() {
  particles = new ParticleEngine('fxCanvas');
  initQuestionDecks();
  bindSetupEventListeners();
  renderSetupTeamInputs();
  bindGlobalShortcuts();
  updateSoundButtonUI();
}

function bindSetupEventListeners() {
  const teamButtons = document.querySelectorAll('#teamCountGroup .btn-select');
  teamButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playClick();
      teamButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      gameState.numTeams = parseInt(btn.dataset.teams, 10);
      renderSetupTeamInputs();
    });
  });

  const playerButtons = document.querySelectorAll('#playerCountGroup .btn-select');
  playerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playClick();
      playerButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      gameState.playersPerTeam = parseInt(btn.dataset.players, 10);
      renderSetupTeamInputs();
    });
  });

  const roundButtons = document.querySelectorAll('#roundsGroup .btn-select');
  roundButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playClick();
      roundButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      gameState.totalRounds = parseInt(btn.dataset.rounds, 10);
    });
  });

  document.getElementById('btnAutofill')?.addEventListener('click', () => {
    sound.playClick();
    autoFillNames();
  });

  document.getElementById('btnStartGame')?.addEventListener('click', () => {
    sound.playClick();
    validateAndStartGame();
  });

  document.getElementById('btnSoundToggle')?.addEventListener('click', toggleSound);
  document.getElementById('btnHelpModal')?.addEventListener('click', openRulesModal);
  document.getElementById('btnCloseRules')?.addEventListener('click', closeRulesModal);
  document.getElementById('btnResetGame')?.addEventListener('click', promptResetGame);

  document.getElementById('btnAnswered')?.addEventListener('click', handleAnswered);
  document.getElementById('btnBoom')?.addEventListener('click', handleBoom);
  document.getElementById('btnSkipQuestion')?.addEventListener('click', handleSkip);
  document.getElementById('btnPauseGame')?.addEventListener('click', togglePause);
  document.getElementById('btnResumeModal')?.addEventListener('click', togglePause);

  document.getElementById('btnPlayAgain')?.addEventListener('click', playAgain);
  document.getElementById('btnNewGame')?.addEventListener('click', newGame);
}

function renderSetupTeamInputs() {
  const container = document.getElementById('teamsConfigContainer');
  if (!container) return;
  container.innerHTML = '';

  for (let t = 0; t < gameState.numTeams; t++) {
    const preset = TEAM_PRESETS[t] || { name: `Team ${t + 1}`, color: 'blue', icon: '🔵', defaultPlayers: [] };
    
    const card = document.createElement('div');
    card.className = `team-config-card team-color-${t}`;
    
    let playerInputsHtml = '';
    for (let p = 0; p < gameState.playersPerTeam; p++) {
      const defaultName = (SAMPLE_NAMES[t] && SAMPLE_NAMES[t][p]) ? SAMPLE_NAMES[t][p] : `Player ${p + 1}`;
      playerInputsHtml += `
        <div class="player-input-row">
          <label class="player-num-label">Player ${p + 1}:</label>
          <input type="text" 
                 class="player-name-input team-${t}-player" 
                 data-team="${t}" 
                 data-player="${p}" 
                 value="${defaultName}" 
                 placeholder="Enter student name"
                 maxlength="20">
        </div>
      `;
    }

    card.innerHTML = `
      <div class="team-card-header">
        <span class="team-icon-badge">${preset.icon}</span>
        <div class="team-name-input-wrap">
          <input type="text" 
                 class="team-name-input" 
                 id="teamNameInput_${t}" 
                 value="${preset.name}" 
                 placeholder="Team Name" 
                 maxlength="24">
        </div>
      </div>
      <div class="players-input-list">
        ${playerInputsHtml}
      </div>
    `;

    container.appendChild(card);
  }
}

function autoFillNames() {
  for (let t = 0; t < gameState.numTeams; t++) {
    const teamNameInput = document.getElementById(`teamNameInput_${t}`);
    if (teamNameInput) {
      teamNameInput.value = TEAM_PRESETS[t] ? TEAM_PRESETS[t].name : `Team ${t + 1}`;
    }

    const playerInputs = document.querySelectorAll(`.team-${t}-player`);
    playerInputs.forEach((input, p) => {
      const sample = (SAMPLE_NAMES[t] && SAMPLE_NAMES[t][p]) ? SAMPLE_NAMES[t][p] : `Student ${p + 1}`;
      input.value = sample;
      input.classList.remove('input-error');
    });
  }

  const errorMsg = document.getElementById('setupErrorMsg');
  if (errorMsg) errorMsg.classList.add('hidden');
}

function validateAndStartGame() {
  const errorMsg = document.getElementById('setupErrorMsg');
  if (errorMsg) {
    errorMsg.classList.add('hidden');
    errorMsg.textContent = '';
  }

  const constructedTeams = [];

  for (let t = 0; t < gameState.numTeams; t++) {
    const teamNameInput = document.getElementById(`teamNameInput_${t}`);
    const teamName = teamNameInput ? teamNameInput.value.trim() : `Team ${t + 1}`;

    if (!teamName) {
      if (errorMsg) {
        errorMsg.textContent = `⚠️ Please enter a valid name for Team ${t + 1}!`;
        errorMsg.classList.remove('hidden');
      }
      teamNameInput?.focus();
      return;
    }

    const playerInputs = document.querySelectorAll(`.team-${t}-player`);
    const players = [];

    for (let p = 0; p < playerInputs.length; p++) {
      const pInput = playerInputs[p];
      const pName = pInput.value.trim();
      if (!pName) {
        pInput.classList.add('input-error');
        if (errorMsg) {
          errorMsg.textContent = `⚠️ Please enter a name for Player ${p + 1} in ${teamName}!`;
          errorMsg.classList.remove('hidden');
        }
        pInput.focus();
        return;
      }
      pInput.classList.remove('input-error');

      players.push({
        id: p,
        name: pName,
        turns: 0,
        successes: 0,
        booms: 0
      });
    }

    const preset = TEAM_PRESETS[t] || { color: 'blue', icon: '🔵' };

    constructedTeams.push({
      id: t,
      name: teamName,
      color: preset.color,
      icon: preset.icon,
      score: 0,
      players: players,
      lastSpeakerIndex: -1
    });
  }

  gameState.teams = constructedTeams;
  gameState.currentRound = 1;
  gameState.activeTeamIndex = 0;
  gameState.isPaused = false;
  gameState.isProcessingTurn = false;

  startGame();
}

/* ============================================================================
   7. GAME START & ROUND LIFECYCLE
   ============================================================================ */

function startGame() {
  document.getElementById('setupScreen').classList.remove('active');
  document.getElementById('setupScreen').classList.add('hidden');
  
  document.getElementById('winnerScreen').classList.remove('active');
  document.getElementById('winnerScreen').classList.add('hidden');

  document.getElementById('gameScreen').classList.remove('hidden');
  document.getElementById('gameScreen').classList.add('active');

  document.getElementById('totalRoundsNum').textContent = gameState.totalRounds;

  updateScoreboard();
  startRound();
}

function startRound() {
  if (gameState.currentRound > gameState.totalRounds) {
    showWinner();
    return;
  }

  document.getElementById('currentRoundNum').textContent = gameState.currentRound;

  // Chaos Round every 5 rounds (5, 10, 15, 20, 25, 30...)
  gameState.isChaosRound = (gameState.currentRound % 5 === 0);

  const appContainer = document.getElementById('app');
  const specialBadge = document.getElementById('specialModeBadge');
  const eventPill = document.getElementById('eventNotificationPill');

  if (gameState.isChaosRound) {
    appContainer.classList.add('chaos-mode');
    specialBadge.classList.remove('hidden');
    specialBadge.textContent = '🔥🔥 CHAOS ROUND! 🔥🔥';
    eventPill.classList.add('hidden');
    gameState.currentEvent = null;
    gameState.pointsForCurrentTurn = 2;
    sound.playChaosSound();
  } else {
    appContainer.classList.remove('chaos-mode');
    specialBadge.classList.add('hidden');
    
    if (gameState.currentRound > 1 && Math.random() < 0.28) {
      triggerSpecialEvent();
    } else {
      gameState.currentEvent = null;
      gameState.pointsForCurrentTurn = 1;
      eventPill.classList.add('hidden');
    }
  }

  prepareTeamTurn();
}

function triggerSpecialEvent() {
  const eventPill = document.getElementById('eventNotificationPill');
  const eventIcon = document.getElementById('eventIcon');
  const eventTitle = document.getElementById('eventTitle');
  const eventDesc = document.getElementById('eventDesc');

  const randomEv = SPECIAL_EVENTS[Math.floor(Math.random() * SPECIAL_EVENTS.length)];
  gameState.currentEvent = randomEv;
  gameState.pointsForCurrentTurn = randomEv.points || 1;

  eventIcon.textContent = randomEv.icon;
  eventTitle.textContent = randomEv.title;
  eventDesc.textContent = randomEv.desc;
  eventPill.classList.remove('hidden');
}

function prepareTeamTurn() {
  const activeTeam = gameState.teams[gameState.activeTeamIndex];
  if (!activeTeam) return;

  stopTimer();
  gameState.isProcessingTurn = false;

  const teamBannerName = document.getElementById('activeTeamNameText');
  teamBannerName.textContent = `${activeTeam.icon} ${activeTeam.name}`;
  teamBannerName.style.color = getTeamHexColor(activeTeam.color);

  updateScoreboard();
  showSpeakerSelectionView(activeTeam);
}

/* ============================================================================
   8. SPEAKER SELECTION (Team Chooses Who Answers)
   ============================================================================ */

function showSpeakerSelectionView(team) {
  const selectionView = document.getElementById('speakerSelectionView');
  const questionView = document.getElementById('activeQuestionView');
  const buttonsGrid = document.getElementById('speakerButtonsGrid');

  selectionView.classList.remove('hidden');
  selectionView.classList.add('active');
  questionView.classList.remove('active');
  questionView.classList.add('hidden');

  buttonsGrid.innerHTML = '';

  team.players.forEach((player, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn-speaker';
    btn.setAttribute('data-player-index', idx);
    
    const turnWord = player.turns === 1 ? 'turn' : 'turns';
    const isNextUp = (idx === (team.lastSpeakerIndex + 1) % team.players.length);

    btn.innerHTML = `
      <span class="speaker-key-badge">[Key: ${idx + 1}]</span>
      <span class="speaker-icon">👤</span>
      <span class="speaker-name">${escapeHtml(player.name)}</span>
      <span class="speaker-stats">${player.turns} ${turnWord} answered ${isNextUp ? '⭐' : ''}</span>
    `;

    btn.addEventListener('click', () => {
      sound.playClick();
      selectSpeaker(idx);
    });

    buttonsGrid.appendChild(btn);
  });
}

function selectSpeaker(playerIndex) {
  if (gameState.isProcessingTurn) return;

  const activeTeam = gameState.teams[gameState.activeTeamIndex];
  if (!activeTeam || !activeTeam.players || !activeTeam.players[playerIndex]) return;

  const speaker = activeTeam.players[playerIndex];
  gameState.currentSpeakerIndex = playerIndex;
  gameState.currentSpeakerName = speaker.name;
  activeTeam.lastSpeakerIndex = playerIndex;

  startTurn();
}

/* ============================================================================
   9. START TURN & COUNTDOWN
   ============================================================================ */

function startTurn() {
  const selectionView = document.getElementById('speakerSelectionView');
  const questionView = document.getElementById('activeQuestionView');

  selectionView.classList.remove('active');
  selectionView.classList.add('hidden');
  questionView.classList.remove('hidden');
  questionView.classList.add('active');

  document.getElementById('currentSpeakerName').textContent = gameState.currentSpeakerName;

  let promptText = "";
  let categoryText = "";
  let chaosSubtext = "";

  if (gameState.isChaosRound) {
    const chaosChallenge = getRandomChaosChallenge();
    const regularQ = getRandomQuestion();
    gameState.currentQuestion = { isChaos: true, challenge: chaosChallenge, baseQ: regularQ };
    
    categoryText = "🔥🔥 CHAOS CHALLENGE 🔥🔥";
    promptText = regularQ.text;
    chaosSubtext = `${chaosChallenge.text} — ${chaosChallenge.prompt}`;
    
    document.getElementById('questionChaosInstruction').textContent = chaosSubtext;
    document.getElementById('questionChaosInstruction').classList.remove('hidden');
  } else {
    const regularQ = getRandomQuestion();
    gameState.currentQuestion = regularQ;
    categoryText = regularQ.cat;
    promptText = regularQ.text;
    
    document.getElementById('questionChaosInstruction').classList.add('hidden');
  }

  if (gameState.currentEvent && gameState.currentEvent.id === 'mystery_round') {
    categoryText = "❓ MYSTERY QUESTION REVEALED!";
  }

  document.getElementById('questionCategory').textContent = categoryText;
  document.getElementById('questionText').textContent = promptText;

  const pointsTag = document.getElementById('pointsAwardTag');
  const btnAnsweredText = document.getElementById('btnAnsweredText');
  
  if (gameState.pointsForCurrentTurn === 2) {
    pointsTag.textContent = "+2 POINTS";
    pointsTag.style.borderColor = "#fbbf24";
    pointsTag.style.color = "#fbbf24";
    btnAnsweredText.textContent = "ANSWERED! +2 POINTS";
  } else {
    pointsTag.textContent = "+1 POINT";
    pointsTag.style.borderColor = "#10b981";
    pointsTag.style.color = "#34d399";
    btnAnsweredText.textContent = "ANSWERED! +1 POINT";
  }

  if (gameState.currentEvent && gameState.currentEvent.id === 'speed_round') {
    gameState.timerDuration = 10;
  } else {
    gameState.timerDuration = 15;
  }

  gameState.timeRemaining = gameState.timerDuration;
  updateTimerUI();
  startTimer();
}

/* ============================================================================
   10. TIMER ENGINE (15s Countdown, Warning & Critical States)
   ============================================================================ */

function startTimer() {
  stopTimer();
  gameState.isTimerRunning = true;
  gameState.isPaused = false;
  updatePauseButtonUI();

  gameState.timerInterval = setInterval(() => {
    if (gameState.isPaused) return;

    gameState.timeRemaining--;
    updateTimerUI();

    if (gameState.timeRemaining > 5) {
      sound.playTickNormal();
    } else if (gameState.timeRemaining > 0) {
      sound.playTickUrgent();
    } else if (gameState.timeRemaining <= 0) {
      stopTimer();
      handleBoom();
    }
  }, 1000);
}

function stopTimer() {
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }
  gameState.isTimerRunning = false;
}

function updateTimerUI() {
  const timerNum = document.getElementById('timerNumber');
  const statusLabel = document.getElementById('timerStatusLabel');
  const bombVisual = document.getElementById('bombVisual');
  const fusePath = document.getElementById('fusePath');

  if (!timerNum || !bombVisual) return;

  const t = Math.max(0, gameState.timeRemaining);
  timerNum.textContent = t;

  const total = gameState.timerDuration || 15;
  const fraction = (total - t) / total;
  if (fusePath) {
    fusePath.style.strokeDashoffset = `${fraction * 110}`;
  }

  bombVisual.classList.remove('state-normal', 'state-warning', 'state-critical');

  if (t > 5) {
    bombVisual.classList.add('state-normal');
    statusLabel.textContent = "SECONDS";
  } else if (t >= 3) {
    bombVisual.classList.add('state-warning');
    statusLabel.textContent = "WARNING!";
  } else {
    bombVisual.classList.add('state-critical');
    statusLabel.textContent = "CRITICAL!";
  }
}

function togglePause() {
  if (!gameState.isTimerRunning && !gameState.isPaused) return;
  if (gameState.isProcessingTurn) return;

  sound.playClick();
  gameState.isPaused = !gameState.isPaused;

  const pauseModal = document.getElementById('pauseModal');
  if (gameState.isPaused) {
    pauseModal.classList.remove('hidden');
  } else {
    pauseModal.classList.add('hidden');
  }

  updatePauseButtonUI();
}

function updatePauseButtonUI() {
  const pauseBtnText = document.getElementById('pauseBtnText');
  const pauseBtnIcon = document.getElementById('pauseBtnIcon');

  if (pauseBtnText && pauseBtnIcon) {
    if (gameState.isPaused) {
      pauseBtnText.textContent = "RESUME";
      pauseBtnIcon.textContent = "▶️";
    } else {
      pauseBtnText.textContent = "PAUSE";
      pauseBtnIcon.textContent = "⏸️";
    }
  }
}

/* ============================================================================
   11. TURN OUTCOMES (ANSWERED vs BOOM vs SKIP)
   ============================================================================ */

function handleAnswered() {
  if (gameState.isProcessingTurn) return;
  const questionView = document.getElementById('activeQuestionView');
  if (!questionView || questionView.classList.contains('hidden')) return;

  gameState.isProcessingTurn = true;
  stopTimer();
  sound.playSuccess();

  const activeTeam = gameState.teams[gameState.activeTeamIndex];
  const points = gameState.pointsForCurrentTurn || 1;

  if (activeTeam) {
    activeTeam.score += points;

    const currentSpeaker = activeTeam.players ? activeTeam.players[gameState.currentSpeakerIndex] : null;
    if (currentSpeaker) {
      currentSpeaker.turns += 1;
      currentSpeaker.successes += 1;
    }

    const activeScoreCard = document.getElementById(`scoreCard_${activeTeam.id}`);
    const scoreBadge = activeScoreCard?.querySelector('.score-points-badge');
    if (scoreBadge) {
      scoreBadge.classList.add('score-bump');
      setTimeout(() => scoreBadge.classList.remove('score-bump'), 700);
    }
  }

  updateScoreboard();

  const overlay = document.getElementById('successOverlay');
  const successPointsText = document.getElementById('successPointsText');
  const successTeamScoreText = document.getElementById('successTeamScoreText');

  if (activeTeam) {
    successPointsText.textContent = `+${points} ${points === 1 ? 'POINT' : 'POINTS'}`;
    successTeamScoreText.textContent = `${activeTeam.name.toUpperCase()}: ${activeTeam.score}`;
  }
  overlay.classList.remove('hidden');

  particles.startExplosionSparks(window.innerWidth * 0.5, window.innerHeight * 0.4);

  setTimeout(() => {
    overlay.classList.add('hidden');
    nextTeam();
  }, 1200);
}

function handleBoom() {
  if (gameState.isProcessingTurn) return;
  const questionView = document.getElementById('activeQuestionView');
  if (!questionView || questionView.classList.contains('hidden')) return;

  gameState.isProcessingTurn = true;
  stopTimer();
  sound.playBoom();

  const activeTeam = gameState.teams[gameState.activeTeamIndex];

  if (activeTeam && activeTeam.players) {
    const currentSpeaker = activeTeam.players[gameState.currentSpeakerIndex];
    if (currentSpeaker) {
      currentSpeaker.turns += 1;
      currentSpeaker.booms += 1;
    }
  }

  showExplosion();

  const boomOverlay = document.getElementById('boomOverlay');
  const boomTeamMsg = document.getElementById('boomTeamMsg');

  if (activeTeam) {
    boomTeamMsg.textContent = `${activeTeam.name.toUpperCase()} DIDN'T MAKE IT!`;
  }
  boomOverlay.classList.remove('hidden');

  setTimeout(() => {
    boomOverlay.classList.add('hidden');
    nextTeam();
  }, 2000);
}

function handleSkip() {
  if (gameState.isProcessingTurn) return;
  const questionView = document.getElementById('activeQuestionView');
  if (!questionView || questionView.classList.contains('hidden')) return;

  sound.playClick();

  gameState.timeRemaining = gameState.timerDuration;
  updateTimerUI();

  if (gameState.isChaosRound) {
    const chaosChallenge = getRandomChaosChallenge();
    const regularQ = getRandomQuestion();
    gameState.currentQuestion = { isChaos: true, challenge: chaosChallenge, baseQ: regularQ };
    
    document.getElementById('questionCategory').textContent = "🔥🔥 CHAOS CHALLENGE 🔥🔥";
    document.getElementById('questionText').textContent = regularQ.text;
    document.getElementById('questionChaosInstruction').textContent = `${chaosChallenge.text} — ${chaosChallenge.prompt}`;
  } else {
    const regularQ = getRandomQuestion();
    gameState.currentQuestion = regularQ;
    document.getElementById('questionCategory').textContent = regularQ.cat;
    document.getElementById('questionText').textContent = regularQ.text;
  }

  const qCard = document.getElementById('questionCard');
  qCard.classList.remove('animate-pop');
  void qCard.offsetWidth;
  qCard.classList.add('animate-pop');
}

function showExplosion() {
  const appContainer = document.getElementById('app');
  appContainer.classList.add('screen-shake');
  setTimeout(() => appContainer.classList.remove('screen-shake'), 600);

  const flash = document.createElement('div');
  flash.className = 'screen-flash';
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 450);

  particles.startExplosionSparks(window.innerWidth * 0.5, window.innerHeight * 0.5);
}

/* ============================================================================
   12. ROTATION & NEXT TEAM
   ============================================================================ */

function nextTeam() {
  gameState.activeTeamIndex = (gameState.activeTeamIndex + 1) % gameState.teams.length;

  if (gameState.activeTeamIndex === 0) {
    gameState.currentRound++;
  }

  startRound();
}

/* ============================================================================
   13. SCOREBOARD & UI UPDATES
   ============================================================================ */

function updateScoreboard() {
  const listContainer = document.getElementById('scoreboardList');
  if (!listContainer) return;

  listContainer.innerHTML = '';

  gameState.teams.forEach((team, idx) => {
    const isCurrent = (idx === gameState.activeTeamIndex);
    const card = document.createElement('div');
    card.id = `scoreCard_${team.id}`;
    card.className = `score-card team-${team.id} ${isCurrent ? 'active-turn' : ''}`;
    
    card.innerHTML = `
      <div class="score-team-info">
        <span class="score-team-icon">${team.icon}</span>
        <div>
          <div class="score-team-name">${escapeHtml(team.name)}</div>
          ${isCurrent ? '<div class="score-turn-indicator">🔥 HAS BOMB</div>' : ''}
        </div>
      </div>
      <div class="score-points-badge">${team.score}</div>
    `;

    listContainer.appendChild(card);
  });
}

function getTeamHexColor(colorName) {
  switch (colorName) {
    case 'blue': return '#3b82f6';
    case 'red': return '#ef4444';
    case 'green': return '#10b981';
    case 'purple': return '#a855f7';
    default: return '#3b82f6';
  }
}

/* ============================================================================
   14. GAME OVER & WINNER SCREEN
   ============================================================================ */

function showWinner() {
  stopTimer();
  sound.playVictory();
  particles.startConfetti(8000);

  document.getElementById('gameScreen').classList.remove('active');
  document.getElementById('gameScreen').classList.add('hidden');

  const winnerScreen = document.getElementById('winnerScreen');
  winnerScreen.classList.remove('hidden');
  winnerScreen.classList.add('active');

  const rankedTeams = [...gameState.teams].sort((a, b) => b.score - a.score);
  const winningTeam = rankedTeams[0] || { name: "Champion", color: "blue", score: 0 };

  const winningTeamName = document.getElementById('winningTeamName');
  winningTeamName.textContent = winningTeam.name.toUpperCase();
  winningTeamName.style.color = getTeamHexColor(winningTeam.color);

  const podiumContainer = document.getElementById('finalPodium');
  podiumContainer.innerHTML = '';

  const medals = ['🥇 1ST', '🥈 2ND', '🥉 3RD', '4TH'];

  rankedTeams.forEach((team, idx) => {
    const card = document.createElement('div');
    card.className = `podium-card ${idx === 0 ? 'rank-1' : ''}`;
    card.innerHTML = `
      <div class="podium-medal">${medals[idx] || `${idx + 1}TH`}</div>
      <div class="podium-team-name">${team.icon} ${escapeHtml(team.name)}</div>
      <div class="podium-score">${team.score} PTS</div>
    `;
    podiumContainer.appendChild(card);
  });

  calculatePlayerAwards();
  renderFullStatsTable();
}

function calculatePlayerAwards() {
  let allPlayers = [];
  gameState.teams.forEach(team => {
    if (team.players) {
      team.players.forEach(p => {
        allPlayers.push({ ...p, teamName: team.name, teamIcon: team.icon });
      });
    }
  });

  allPlayers.sort((a, b) => b.successes - a.successes);

  const topSpeaker = allPlayers[0] || { name: "N/A", teamName: "All Teams", successes: 0 };
  const bestTeamPlayer = allPlayers[1] || allPlayers[0] || { name: "N/A", teamName: "All Teams", successes: 0 };

  document.getElementById('topSpeakerName').textContent = `${topSpeaker.name} (${topSpeaker.teamName})`;
  document.getElementById('topSpeakerDesc').textContent = `${topSpeaker.successes} successful answers`;

  document.getElementById('bestPlayerName').textContent = `${bestTeamPlayer.name} (${bestTeamPlayer.teamName})`;
  document.getElementById('bestPlayerDesc').textContent = `${bestTeamPlayer.successes} successful answers`;
}

function renderFullStatsTable() {
  const container = document.getElementById('fullStatsContainer');
  if (!container) return;

  let tableHtml = `
    <table class="stats-table">
      <thead>
        <tr>
          <th>Team</th>
          <th>Student</th>
          <th>Total Turns</th>
          <th>Answered</th>
          <th>Booms</th>
          <th>Success Rate</th>
        </tr>
      </thead>
      <tbody>
  `;

  gameState.teams.forEach(team => {
    if (team.players) {
      team.players.forEach(player => {
        const rate = player.turns > 0 ? Math.round((player.successes / player.turns) * 100) : 0;
        tableHtml += `
          <tr>
            <td><strong>${team.icon} ${escapeHtml(team.name)}</strong></td>
            <td>${escapeHtml(player.name)}</td>
            <td>${player.turns}</td>
            <td><span style="color:#34d399; font-weight:bold;">${player.successes}</span></td>
            <td><span style="color:#f87171;">${player.booms}</span></td>
            <td>${rate}%</td>
          </tr>
        `;
      });
    }
  });

  tableHtml += `
      </tbody>
    </table>
  `;

  container.innerHTML = tableHtml;
}

/* ============================================================================
   15. RESTART & RESET FLOWS
   ============================================================================ */

function playAgain() {
  sound.playClick();
  particles.clear();

  gameState.teams.forEach(team => {
    team.score = 0;
    team.lastSpeakerIndex = -1;
    if (team.players) {
      team.players.forEach(p => {
        p.turns = 0;
        p.successes = 0;
        p.booms = 0;
      });
    }
  });

  gameState.currentRound = 1;
  gameState.activeTeamIndex = 0;
  gameState.isPaused = false;
  gameState.isProcessingTurn = false;

  initQuestionDecks();
  startGame();
}

function newGame() {
  sound.playClick();
  particles.clear();
  stopTimer();

  document.getElementById('winnerScreen').classList.remove('active');
  document.getElementById('winnerScreen').classList.add('hidden');
  
  document.getElementById('gameScreen').classList.remove('active');
  document.getElementById('gameScreen').classList.add('hidden');

  document.getElementById('setupScreen').classList.remove('hidden');
  document.getElementById('setupScreen').classList.add('active');

  initQuestionDecks();
}

function promptResetGame() {
  if (confirm("Are you sure you want to reset this game? Current progress will be lost.")) {
    sound.playClick();
    stopTimer();
    newGame();
  }
}

/* ============================================================================
   16. SOUND & MODAL CONTROLS
   ============================================================================ */

function toggleSound() {
  const isMuted = sound.toggleMute();
  updateSoundButtonUI();
}

function updateSoundButtonUI() {
  const icon = document.getElementById('soundIcon');
  const text = document.getElementById('soundText');
  if (icon && text) {
    if (sound.isMuted) {
      icon.textContent = "🔇";
      text.textContent = "Sound OFF";
    } else {
      icon.textContent = "🔊";
      text.textContent = "Sound ON";
    }
  }
}

function openRulesModal() {
  sound.playClick();
  document.getElementById('rulesModal').classList.remove('hidden');
}

function closeRulesModal() {
  sound.playClick();
  document.getElementById('rulesModal').classList.add('hidden');
}

/* ============================================================================
   17. TEACHER KEYBOARD SHORTCUTS
   ============================================================================ */

function bindGlobalShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    const key = e.key;
    const code = e.code;

    const gameScreen = document.getElementById('gameScreen');
    if (!gameScreen || !gameScreen.classList.contains('active')) return;

    const speakerStage = document.getElementById('speakerSelectionView');
    const questionStage = document.getElementById('activeQuestionView');

    if (speakerStage && speakerStage.classList.contains('active')) {
      if (key >= '1' && key <= '6') {
        const playerIdx = parseInt(key, 10) - 1;
        const activeTeam = gameState.teams[gameState.activeTeamIndex];
        if (activeTeam && activeTeam.players && activeTeam.players[playerIdx]) {
          sound.playClick();
          selectSpeaker(playerIdx);
        }
      }
      return;
    }

    if (questionStage && questionStage.classList.contains('active')) {
      if (code === 'Space' || code === 'KeyA') {
        e.preventDefault();
        handleAnswered();
        return;
      }

      if (code === 'KeyB' || code === 'KeyX') {
        e.preventDefault();
        handleBoom();
        return;
      }

      if (code === 'KeyS') {
        e.preventDefault();
        handleSkip();
        return;
      }

      if (code === 'KeyP') {
        e.preventDefault();
        togglePause();
        return;
      }
    }

    if (code === 'KeyM') {
      toggleSound();
    }
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Initialize game directly (script is loaded at bottom of body)
initGame();

window.gameState = gameState;
window.initGame = initGame;
window.startRound = startRound;
window.showWinner = showWinner;
window.selectSpeaker = selectSpeaker;
window.handleAnswered = handleAnswered;
window.handleBoom = handleBoom;
window.handleSkip = handleSkip;
window.togglePause = togglePause;
window.playAgain = playAgain;
window.newGame = newGame;
