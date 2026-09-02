/**
 * SPEAKING WHEEL — Classroom Speaking Game
 * 7th & 8th Grade English (A2 - B1)
 * 120 Unique Speaking Questions (20 per Grade & Round)
 */

// ==========================================
// 1. COMPLETE 120 QUESTION BANK
// ==========================================
const QUESTION_BANK = [
  // ----------------------------------------------------
  // GRADE 7 — ROUND 1 (EASY: ~1-2 Sentences)
  // ----------------------------------------------------
  {
    id: "g7_r1_01",
    grade: 7,
    round: 1,
    topic: "Daily Routines",
    question: "What time do you usually wake up on weekdays and what is the first thing you do?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I usually wake up at...", "The first thing I do is...", "Every morning, I..."]
  },
  {
    id: "g7_r1_02",
    grade: 7,
    round: 1,
    topic: "Hobbies & Free Time",
    question: "What is your favorite hobby to do after school?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["My favorite hobby is...", "After school, I really like to...", "It helps me relax because..."]
  },
  {
    id: "g7_r1_03",
    grade: 7,
    round: 1,
    topic: "Food & Drinks",
    question: "What is your favorite breakfast food and what do you like to drink with it?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["For breakfast, I love eating...", "I usually drink...", "My favorite meal is..."]
  },
  {
    id: "g7_r1_04",
    grade: 7,
    round: 1,
    topic: "Animals & Pets",
    question: "Do you have a pet or what is your favorite animal in the world?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I have a pet...", "My favorite animal is...", "I love them because they are..."]
  },
  {
    id: "g7_r1_05",
    grade: 7,
    round: 1,
    topic: "Weather & Seasons",
    question: "What kind of weather do you like most: sunny, rainy, or snowy?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I prefer... weather because...", "My favorite season is...", "When it's sunny/rainy, I..."]
  },
  {
    id: "g7_r1_06",
    grade: 7,
    round: 1,
    topic: "Sports & Games",
    question: "What is your favorite sport to play or watch with your friends?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I really enjoy playing...", "My favorite sport is...", "I usually play it on..."]
  },
  {
    id: "g7_r1_07",
    grade: 7,
    round: 1,
    topic: "Family & Home",
    question: "How many people are in your family and who is the funniest person?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["There are... people in my family.", "The funniest person is my...", "He/She always makes us laugh."]
  },
  {
    id: "g7_r1_08",
    grade: 7,
    round: 1,
    topic: "Weekend Fun",
    question: "What do you usually do on Saturday afternoons?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["On Saturdays, I usually...", "Sometimes I hang out with...", "It is my favorite time to..."]
  },
  {
    id: "g7_r1_09",
    grade: 7,
    round: 1,
    topic: "School Life",
    question: "What is your favorite school subject and why do you like it?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["My favorite school subject is...", "I like it because...", "Our teacher is very..."]
  },
  {
    id: "g7_r1_10",
    grade: 7,
    round: 1,
    topic: "Movies & Cartoons",
    question: "What is your favorite movie or cartoon to watch at home?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["My favorite movie is...", "It is an exciting...", "I love watching it with..."]
  },
  {
    id: "g7_r1_11",
    grade: 7,
    round: 1,
    topic: "Music & Songs",
    question: "What kind of music do you like listening to when you relax?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I enjoy listening to...", "My favorite singer/band is...", "It makes me feel happy/energetic."]
  },
  {
    id: "g7_r1_12",
    grade: 7,
    round: 1,
    topic: "Clothes & Style",
    question: "What is your favorite comfortable outfit to wear at the weekend?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["At weekends, I prefer wearing...", "My favorite clothes are...", "Because they are so comfortable."]
  },
  {
    id: "g7_r1_13",
    grade: 7,
    round: 1,
    topic: "Holidays & Travel",
    question: "Where do you like to go during the summer holidays?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["In summer, I usually go to...", "I like swimming in...", "We visit our grandparents in..."]
  },
  {
    id: "g7_r1_14",
    grade: 7,
    round: 1,
    topic: "My Room",
    question: "What is your favorite thing or spot in your bedroom?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["In my bedroom, I love my...", "My favorite spot is...", "I spend time there reading/gaming."]
  },
  {
    id: "g7_r1_15",
    grade: 7,
    round: 1,
    topic: "Best Friends",
    question: "What is your best friend's name and what is one activity you do together?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["My best friend is...", "Together, we always...", "We have fun playing/talking about..."]
  },
  {
    id: "g7_r1_16",
    grade: 7,
    round: 1,
    topic: "Books & Comics",
    question: "Do you like reading adventure books or comic strips?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I really like reading...", "My favorite book/character is...", "I usually read before..."]
  },
  {
    id: "g7_r1_17",
    grade: 7,
    round: 1,
    topic: "Board Games & Video Games",
    question: "What is your favorite game to play with friends or family?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I love playing...", "It is a fun game where you...", "I usually play it on weekends."]
  },
  {
    id: "g7_r1_18",
    grade: 7,
    round: 1,
    topic: "Transport & Commute",
    question: "How do you usually travel to school every morning?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I come to school by...", "I walk with my...", "It takes about 10 minutes."]
  },
  {
    id: "g7_r1_19",
    grade: 7,
    round: 1,
    topic: "Seasons of the Year",
    question: "Which season do you enjoy most: spring, summer, autumn, or winter?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["My favorite season is...", "I like it because the weather is...", "In this season, I can..."]
  },
  {
    id: "g7_r1_20",
    grade: 7,
    round: 1,
    topic: "Sunday Evenings",
    question: "What do you like to do on Sunday evening before school starts?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["On Sunday evenings, I prepare my...", "I like relaxing by...", "I usually go to bed at..."]
  },

  // ----------------------------------------------------
  // GRADE 7 — ROUND 2 (MEDIUM: ~3-4 Sentences)
  // ----------------------------------------------------
  {
    id: "g7_r2_01",
    grade: 7,
    round: 2,
    topic: "Morning Routine",
    question: "Describe your typical morning routine on a school day. What steps do you take before leaving home?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["First, I wake up and...", "Then, I wash my face and eat...", "After that, I pack my backpack...", "Finally, I leave the house at..."]
  },
  {
    id: "g7_r2_02",
    grade: 7,
    round: 2,
    topic: "Favorite Hobby",
    question: "How long have you had your favorite hobby? Why do you enjoy it and who do you practice it with?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["I started this hobby... years ago.", "I really enjoy it because...", "For example, when I practice with...", "It helps me improve my..."]
  },
  {
    id: "g7_r2_03",
    grade: 7,
    round: 2,
    topic: "Delicious Dishes",
    question: "What is a traditional dish you love eating with your family? Describe what is inside it and how it tastes.",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["One of my favorite traditional dishes is...", "It contains ingredients like...", "It tastes very delicious and...", "My grandmother/mother cooks it when..."]
  },
  {
    id: "g7_r2_04",
    grade: 7,
    round: 2,
    topic: "Unique Animals",
    question: "If you could keep any wild animal as a safe and friendly pet, which would you choose and how would you care for it?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["If I could choose any animal, I would pick a...", "I would build a special place for it to...", "I would feed it with...", "Because they are intelligent and..."]
  },
  {
    id: "g7_r2_05",
    grade: 7,
    round: 2,
    topic: "Rainy Days",
    question: "What activities do you enjoy when it rains heavily outside? How does rainy weather make you feel?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["When it rains heavily, I prefer staying indoors.", "I usually drink hot tea and...", "The sound of rain makes me feel peaceful because...", "Sometimes, my family and I play..."]
  },
  {
    id: "g7_r2_06",
    grade: 7,
    round: 2,
    topic: "Sports & Health",
    question: "Why is doing regular physical exercise important for students? Which sport do you think is the healthiest?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["In my opinion, sports keep our bodies...", "It also helps students concentrate better at...", "I believe swimming/basketball is the healthiest because...", "It exercises all our muscles."]
  },
  {
    id: "g7_r2_07",
    grade: 7,
    round: 2,
    topic: "Family Memories",
    question: "Tell us about a fun memory you shared with your family recently. Where were you and what happened?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Last month, my family and I went to...", "We decided to spend the day...", "The funniest moment was when...", "We took lots of photos and had a great time."]
  },
  {
    id: "g7_r2_08",
    grade: 7,
    round: 2,
    topic: "Saturday vs Sunday",
    question: "How is your Saturday different from your Sunday? Describe what makes each day special for you.",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Saturday is my most energetic day because...", "I often go outside and meet my...", "On the other hand, Sunday is more quiet because...", "I finish my homework and rest."]
  },
  {
    id: "g7_r2_09",
    grade: 7,
    round: 2,
    topic: "Dream School Room",
    question: "If you could add one new classroom or activity room to your school, what would it be and why?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["I would love to add a modern game/art room.", "Students could use it during break times to...", "It would have equipment like...", "This would make school much more enjoyable."]
  },
  {
    id: "g7_r2_10",
    grade: 7,
    round: 2,
    topic: "Movie Characters",
    question: "Describe the main character of your favorite movie or series. What qualities do you admire about them?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["My favorite character is... from...", "He/She is very brave and...", "What I admire most about them is...", "For example, in one scene they..."]
  },
  {
    id: "g7_r2_11",
    grade: 7,
    round: 2,
    topic: "Music Habits",
    question: "Do you prefer listening to music alone with headphones or at a party with friends? Explain your reasons.",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["I definitely prefer listening with headphones / with friends.", "When I listen alone, I can focus on...", "However, at a party, music creates...", "It always changes my mood because..."]
  },
  {
    id: "g7_r2_12",
    grade: 7,
    round: 2,
    topic: "Shopping Fun",
    question: "What do you like shopping for most (clothes, snacks, books, or gadgets)? Who do you usually go with?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["I enjoy shopping for... most of all.", "I usually go with my best friend / parents.", "We spend time looking at different...", "It is exciting when I find something..."]
  },
  {
    id: "g7_r2_13",
    grade: 7,
    round: 2,
    topic: "Dream Vacation",
    question: "Describe your dream summer vacation. Which city or country would you visit and what would you explore?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["My dream vacation destination is...", "I would love to explore historical places and...", "I would also try the local food like...", "It would be an unforgettable journey."]
  },
  {
    id: "g7_r2_14",
    grade: 7,
    round: 2,
    topic: "Healthy Habits",
    question: "What are two healthy habits you practice every week? How do they help your body and mind feel good?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["The first healthy habit I have is...", "Secondly, I make sure to...", "These habits give me energy to...", "As a result, I feel active and focused."]
  },
  {
    id: "g7_r2_15",
    grade: 7,
    round: 2,
    topic: "True Friendship",
    question: "What makes someone a truly great friend? Mention two important qualities a good friend should have.",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["In my opinion, a true friend should be honest and...", "Firstly, they should always listen when...", "Secondly, they need to support you in...", "That is why trust is so important."]
  },
  {
    id: "g7_r2_16",
    grade: 7,
    round: 2,
    topic: "House Chores",
    question: "Which household chore do you not mind helping with, and which one do you dislike? Explain why.",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["I don't mind helping with... because it is quick.", "For example, setting the table is easy.", "On the other hand, I dislike...", "Because it takes too much time and..."]
  },
  {
    id: "g7_r2_17",
    grade: 7,
    round: 2,
    topic: "Birthday Celebrations",
    question: "How do you usually celebrate your birthday with your loved ones? What is the best part of the day?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["On my birthday, we usually gather at...", "We eat delicious cake and...", "The best part of the day is...", "Because I feel special surrounded by..."]
  },
  {
    id: "g7_r2_18",
    grade: 7,
    round: 2,
    topic: "City vs Nature",
    question: "Do you prefer spending an afternoon in a crowded shopping mall or in a quiet green park? Give your reasons.",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["I definitely prefer spending time in a...", "In a park/mall, there is...", "I enjoy breathing fresh air / seeing shops because...", "It makes my afternoon very relaxing."]
  },
  {
    id: "g7_r2_19",
    grade: 7,
    round: 2,
    topic: "New Skills",
    question: "What is one new skill, language, or instrument you want to learn this year? Why does it interest you?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["This year, I really want to learn how to...", "It interests me because...", "If I practice every week, I can...", "It will also help me in my future."]
  },
  {
    id: "g7_r2_20",
    grade: 7,
    round: 2,
    topic: "Tech at Home",
    question: "How do you use your smartphone or computer for both schoolwork and entertainment during the week?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["For school, I use my computer to research...", "I also watch educational videos on...", "For entertainment, I play games or chat with...", "I try not to spend too many hours on screens."]
  },

  // ----------------------------------------------------
  // GRADE 7 — ROUND 3 (CHALLENGE: ~5-7 Sentences)
  // ----------------------------------------------------
  {
    id: "g7_r3_01",
    grade: 7,
    round: 3,
    topic: "Principal for a Week",
    question: "If you were the school principal for one full week, what three rules would you change? Explain how these changes would improve student life and learning.",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["If I were the principal, I would introduce new exciting rules.", "First of all, I would make breaks 10 minutes longer so students can rest.", "Secondly, I would organize more outdoor sports and clubs.", "Thirdly, I would create a modern cafeteria with healthy fruit snacks.", "These changes would make students happier and more motivated in class.", "In conclusion, school would become a much more inspiring place."]
  },
  {
    id: "g7_r3_02",
    grade: 7,
    round: 3,
    topic: "Dream Cafe for Teens",
    question: "If you could open your own dream cafe for teenagers, what theme would it have, what food would you serve, and how would you make it popular?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["My dream cafe would have a cool futuristic gaming and book theme.", "The walls would be decorated with neon art and comfortable beanbags.", "On the menu, we would serve fresh smoothies, mini pancakes, and homemade cookies.", "There would be free board games and music zones for students.", "We could also host weekly trivia tournaments on Friday evenings.", "I believe it would be the most popular hangout spot in our neighborhood."]
  },
  {
    id: "g7_r3_03",
    grade: 7,
    round: 3,
    topic: "Around the World Ticket",
    question: "Imagine you have a free round-trip ticket to anywhere in the world. Where would you travel, who would you take, and what famous places would you explore?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["If I received a free plane ticket, I would fly directly to Tokyo, Japan.", "I would take my best friend or family member with me.", "First, we would visit the ancient temples and modern tech districts.", "We would taste authentic ramen and Japanese sweets.", "I would also love to ride the high-speed bullet train across Mount Fuji.", "It would be an incredible cultural adventure that we would remember forever."]
  },
  {
    id: "g7_r3_04",
    grade: 7,
    round: 3,
    topic: "Protecting Wildlife",
    question: "Why is protecting endangered animals important for our planet? What simple actions can young people take in their daily lives to protect nature?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Protecting wild animals is vital because every species keeps our ecosystem balanced.", "If one animal disappears, the entire food chain suffers.", "Young people can help by reducing plastic waste that pollutes oceans and forests.", "We can also plant trees and build bird houses in our school gardens.", "Furthermore, learning about wildlife helps us spread awareness to our friends.", "Together, small actions can make a huge positive difference for our planet."]
  },
  {
    id: "g7_r3_05",
    grade: 7,
    round: 3,
    topic: "A Weekend Without Screens",
    question: "Imagine living for an entire weekend without any smartphones, internet, or television. What activities would you do instead, and would it be difficult or relaxing?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["A weekend without screens would definitely feel challenging at first.", "However, it would give me a wonderful opportunity to try other things.", "On Saturday, I would ride my bicycle in the park and read an exciting adventure book.", "I would also bake cookies with my family and play board games.", "On Sunday, my friends and I could have an outdoor picnic and play football.", "In the end, I think it would be very refreshing for our minds."]
  },
  {
    id: "g7_r3_06",
    grade: 7,
    round: 3,
    topic: "Super Athlete or Musician",
    question: "If you could suddenly become a world champion in any sport or master of any musical instrument overnight, which would you pick and how would you use your talent?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["If I had the magical choice, I would become an Olympic swimming champion.", "Swimming requires immense discipline, endurance, and mental strength.", "I would represent my country in international competitions and win medals.", "I would also open free swimming training camps for children who want to learn.", "Inspiring young people to stay active would be my greatest goal.", "It would be an honor to share my passion with the world."]
  },
  {
    id: "g7_r3_07",
    grade: 7,
    round: 3,
    topic: "Solving Misunderstandings",
    question: "Think about a situation where two friends have a misunderstanding. How should they solve the problem calmly, and what advice would you give them?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["When friends argue, the most important step is to stay calm and not shout.", "They should find a quiet place and talk honestly about how they feel.", "Listening carefully to the other person's perspective is essential.", "Saying 'I am sorry' when you make a mistake shows true maturity.", "Good friends should forgive each other and focus on their shared memories.", "Open communication is the key to building lifelong friendships."]
  },
  {
    id: "g7_r3_08",
    grade: 7,
    round: 3,
    topic: "Dream Student Gadget",
    question: "Invent a new gadget or smart robot to help students with their daily school life. What is its name, what special features does it have, and how does it save time?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["I would invent a helpful gadget called 'StudyBot 3000'.", "It would look like a small floating spherical companion with a digital screen.", "It could organize all your homework schedules and remind you of exam dates.", "Additionally, it could explain difficult English and science concepts with visual animations.", "It would also carry heavy books so students don't hurt their backs.", "This robot would make studying efficient, fun, and stress-free."]
  },
  {
    id: "g7_r3_09",
    grade: 7,
    round: 3,
    topic: "Beating Screen Laziness",
    question: "Many teenagers spend too much time sitting and looking at screens. What advice would you give them to live a more active and energetic lifestyle?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Spending excessive time on screens can make students feel tired and unproductive.", "My first recommendation is to set a daily screen time limit of two hours.", "Secondly, teenagers should join an after-school sports team or dance club.", "Going for a twenty-minute walk in fresh air after school boosts mood and energy.", "Eating fresh fruit and drinking plenty of water also keeps our minds sharp.", "Creating a balanced daily routine helps us stay fit, healthy, and happy."]
  },
  {
    id: "g7_r3_10",
    grade: 7,
    round: 3,
    topic: "Future Dream Career",
    question: "What career or profession do you think you will enjoy in the future? What skills do you need to develop now, and how will your work help people?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["In the future, I aspire to become a software engineer and game designer.", "I want to create educational video games that help children learn languages.", "To achieve this goal, I need to improve my math, English, and coding skills.", "I also need to practice working collaboratively in teams and solving problems creatively.", "My work will make learning fun and accessible to millions of students worldwide.", "Having a clear dream motivates me to study hard every single day."]
  },
  {
    id: "g7_r3_11",
    grade: 7,
    round: 3,
    topic: "City of the Year 2075",
    question: "Describe what your hometown might look like 50 years in the future. How will transportation, houses, parks, and schools change with technology?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Fifty years from now, our city will be futuristic, clean, and completely green.", "Electric flying cars and magnetic trains will replace noisy traffic.", "Skyscrapers will have rooftop gardens and solar panels generating clean energy.", "Schools will use holographic 3D classrooms where students explore history virtually.", "Robots will assist with recycling waste and cleaning streets automatically.", "It will be an eco-friendly and exciting city for everyone to live in."]
  },
  {
    id: "g7_r3_12",
    grade: 7,
    round: 3,
    topic: "Stepping Into a Fantasy World",
    question: "If you could step inside your favorite movie, book, or video game world for one day, what adventure would you experience and who would you meet?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["If I had the chance, I would step into the magical world of Hogwarts.", "I would visit the grand dining hall and choose a magical wand in Diagon Alley.", "I would love to meet Harry, Hermione, and learn how to fly on a broomstick.", "We would explore secret passages in the castle and attend potion-making classes.", "Before the day ended, I would play an exciting match of Quidditch.", "It would be the most thrilling and magical adventure of my life."]
  },
  {
    id: "g7_r3_13",
    grade: 7,
    round: 3,
    topic: "Classroom Kindness",
    question: "How can small acts of kindness change the atmosphere in a classroom? Share an example of something nice someone did for you or you did for others.",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Kindness is very powerful because it makes everyone feel valued and safe.", "Even simple gestures, like sharing stationery or smiling, can brighten someone's day.", "Once, when I was absent, my classmate took detailed notes for me so I didn't fall behind.", "I felt very grateful and later helped them with English homework in return.", "When students encourage rather than criticize each other, everyone learns better.", "Creating a friendly environment starts with our own daily attitude."]
  },
  {
    id: "g7_r3_14",
    grade: 7,
    round: 3,
    topic: "Board Games vs Video Games",
    question: "Do you think traditional board games and outdoor games are better or worse than modern video games? Compare them and share your opinion.",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Both board games and video games offer unique advantages for young people.", "Video games have stunning visual graphics, storylines, and fast-paced action.", "However, board games bring family and friends around the same table face-to-face.", "Playing outdoor games also gives us physical exercise and fresh air.", "In my opinion, playing video games in moderation is fun, but real-world games build stronger bonds.", "The best choice is to find a healthy balance between both types of play."]
  },
  {
    id: "g7_r3_15",
    grade: 7,
    round: 3,
    topic: "One Superpower",
    question: "If you were granted one superhero power (flying, invisibility, or time travel), which would you choose and how would you use it responsibly?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["If I could choose any superpower, I would pick the ability to fly.", "Flying would allow me to travel above the clouds and see the world from above.", "I would never have to worry about traffic jams or missing school buses.", "More importantly, I could quickly reach people in emergency situations to help them.", "I would use my power to assist firefighters or rescue lost hikers in mountains.", "Using a great superpower responsibly means always putting others first."]
  },
  {
    id: "g7_r3_16",
    grade: 7,
    round: 3,
    topic: "Mission to the Moon Base",
    question: "If astronauts invited you to spend one month on a research station on the Moon, would you accept? What would you pack and what would you discover?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["I would gladly accept an invitation to travel to the Moon station.", "It would be incredible to experience zero gravity and bounce across the lunar surface.", "In my suitcase, I would pack a high-resolution camera, a warm space jacket, and my favorite books.", "During my month there, I would assist scientists in studying lunar rocks and stars.", "I would also look back at Earth and marvel at our beautiful blue planet.", "This expedition would be an unforgettable milestone in space exploration."]
  },
  {
    id: "g7_r3_17",
    grade: 7,
    round: 3,
    topic: "The Ultimate Weekend Plan",
    question: "Plan an unforgettable weekend from Friday evening to Sunday night with no budget limits. Who is with you, where do you go, and what do you do?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["My ultimate weekend would begin on Friday evening with a private helicopter ride to the seaside.", "My closest friends and family would join me for this exciting getaway.", "On Saturday, we would rent a yacht, go scuba diving with dolphins, and ride jet skis.", "In the evening, we would enjoy a barbecue on a private beach under the stars.", "On Sunday, we would visit a world-famous amusement park and try every roller coaster.", "It would be a magical weekend filled with laughter, adventure, and joy."]
  },
  {
    id: "g7_r3_18",
    grade: 7,
    round: 3,
    topic: "Why English Matters",
    question: "Why is learning English useful for your future education, travel, and international friendships? What is your favorite way to practice speaking?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["English is the global language of science, technology, aviation, and international culture.", "Mastering English allows us to communicate with people from any country effortlessly.", "It opens doors to top universities and exciting career opportunities worldwide.", "When traveling, speaking English makes navigating airports and cities simple.", "My favorite way to practice is by playing classroom games and chatting with classmates.", "With consistent daily practice, our confidence and fluency grow quickly."]
  },
  {
    id: "g7_r3_19",
    grade: 7,
    round: 3,
    topic: "Power of Teamwork",
    question: "Describe a project, sport, or activity where you worked in a team. What made your teamwork successful, and how did you overcome difficulties?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Last term, my classmates and I worked together on a science exhibition project.", "We decided to divide our tasks based on each person's individual strengths.", "One student drew the posters, another built the model, and I prepared the speech.", "When we had a disagreement about the color scheme, we voted democratically.", "Because we listened respectfully to one another, our project received first prize.", "This experience taught me that great collaboration produces outstanding results."]
  },
  {
    id: "g7_r3_20",
    grade: 7,
    round: 3,
    topic: "An Inspiring Role Model",
    question: "Who is a person in real life (a family member, teacher, or public figure) that you look up to? What qualities make them inspiring to you?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["The person I admire most in my life is my older brother / mother.", "They have always shown great determination, patience, and kindness in everything they do.", "Whenever they face a difficult challenge, they never give up or complain.", "They also take time to help others and offer wise guidance whenever I need it.", "Their positive attitude inspires me to work harder and treat people with respect.", "I hope to grow up and become as dependable and caring as they are."]
  },

  // ----------------------------------------------------
  // GRADE 8 — ROUND 1 (EASY: ~1-2 Sentences)
  // ----------------------------------------------------
  {
    id: "g8_r1_01",
    grade: 8,
    round: 1,
    topic: "Social Media Apps",
    question: "Which social media app or website do you check most frequently every day?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I use... the most because...", "I usually check it to see...", "My favorite platform is..."]
  },
  {
    id: "g8_r1_02",
    grade: 8,
    round: 1,
    topic: "8th Grade Life",
    question: "What is your favorite thing about being a student in the 8th grade?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["My favorite thing is being with my friends and...", "In the 8th grade, we are more mature and...", "I enjoy learning new topics like..."]
  },
  {
    id: "g8_r1_03",
    grade: 8,
    round: 1,
    topic: "Music & Artists",
    question: "Who is your favorite musical artist or band right now?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["My favorite musical artist is...", "I love their songs because...", "Their rhythm and lyrics are..."]
  },
  {
    id: "g8_r1_04",
    grade: 8,
    round: 1,
    topic: "Must-Have Tech",
    question: "What piece of electronic device could you not live without for a single day?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I definitely could not live without my...", "I need it for studying and...", "It connects me with my..."]
  },
  {
    id: "g8_r1_05",
    grade: 8,
    round: 1,
    topic: "Healthy Snacks",
    question: "What is one healthy snack or fruit you enjoy eating between study sessions?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I like eating fresh apples / almonds because...", "It gives me quick energy when...", "It is both delicious and nutritious."]
  },
  {
    id: "g8_r1_06",
    grade: 8,
    round: 1,
    topic: "Memorable Travel",
    question: "What is the most interesting city or place you have ever visited in Turkey or abroad?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["The most interesting place I visited is...", "I was impressed by its...", "The scenery and culture were amazing."]
  },
  {
    id: "g8_r1_07",
    grade: 8,
    round: 1,
    topic: "Making Friends",
    question: "What is the most important quality you look for when making a new friend?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["For me, honesty / kindness is the most important.", "A good friend should always be...", "I value someone who..."]
  },
  {
    id: "g8_r1_08",
    grade: 8,
    round: 1,
    topic: "Stress Relief",
    question: "How do you usually relax after a long day of school and exam preparation?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["After studying, I relax by listening to...", "I often take a walk or play...", "It helps clear my mind."]
  },
  {
    id: "g8_r1_09",
    grade: 8,
    round: 1,
    topic: "High School Dreams",
    question: "What type of high school or study area are you aiming for after 8th grade?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I am aiming to attend a science / social sciences high school.", "I want to focus on...", "Because my dream is to study..."]
  },
  {
    id: "g8_r1_10",
    grade: 8,
    round: 1,
    topic: "Eco Actions",
    question: "What is one simple way you help protect the environment at school or home?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I always turn off unnecessary lights and...", "I separate recyclable paper and plastic...", "It helps save natural resources."]
  },
  {
    id: "g8_r1_11",
    grade: 8,
    round: 1,
    topic: "Recent Reading",
    question: "What is the title of an interesting book or article you read recently?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I recently read a book called...", "It was about...", "I found it fascinating because..."]
  },
  {
    id: "g8_r1_12",
    grade: 8,
    round: 1,
    topic: "Team vs Solo Sports",
    question: "Do you prefer individual sports like running or team sports like volleyball?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I prefer team / individual sports because...", "Playing in a team gives me...", "I like relying on..."]
  },
  {
    id: "g8_r1_13",
    grade: 8,
    round: 1,
    topic: "Sensible Rules",
    question: "What is one school rule that you think is very fair and necessary for everyone?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I think the rule about being respectful in class is essential.", "It keeps the classroom peaceful so...", "Everyone gets an equal chance to learn."]
  },
  {
    id: "g8_r1_14",
    grade: 8,
    round: 1,
    topic: "World Cuisines",
    question: "If you could try a famous cuisine from another country (Italian, Japanese, Mexican), which would you pick?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I would love to try authentic Italian / Japanese food.", "I am curious to taste...", "Their traditional spices sound delicious."]
  },
  {
    id: "g8_r1_15",
    grade: 8,
    round: 1,
    topic: "Shopping Habits",
    question: "Do you prefer shopping online or going to physical shops with friends?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I prefer shopping online because it is convenient.", "However, going to shops with friends is fun because...", "We can try things on together."]
  },
  {
    id: "g8_r1_16",
    grade: 8,
    round: 1,
    topic: "Exciting Plans",
    question: "What is one exciting activity you have planned for this upcoming weekend?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["This weekend, I am going to...", "I will meet my friends to...", "I am really looking forward to it."]
  },
  {
    id: "g8_r1_17",
    grade: 8,
    round: 1,
    topic: "Cinema Experience",
    question: "Do you enjoy watching new movies in a cinema or streaming them at home?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I prefer watching movies at the cinema / at home.", "The giant screen and sound system are...", "At home, it is more comfortable."]
  },
  {
    id: "g8_r1_18",
    grade: 8,
    round: 1,
    topic: "Problem Solving",
    question: "Who is the first person you talk to when you face a challenging problem?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I usually talk to my parents / best friend first.", "They always give me wise advice and...", "I trust them completely."]
  },
  {
    id: "g8_r1_19",
    grade: 8,
    round: 1,
    topic: "Communication Channels",
    question: "Do you prefer sending text messages or having phone calls with your friends?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["I prefer texting / calling because it is...", "Calling is much faster when...", "Texting lets me send photos and stickers."]
  },
  {
    id: "g8_r1_20",
    grade: 8,
    round: 1,
    topic: "Creative Talents",
    question: "What is a creative hobby (drawing, coding, cooking, gaming) that you enjoy doing?",
    target: "Speak for 1–2 sentences.",
    usefulLanguage: ["My creative hobby is...", "I enjoy it because I can express...", "It gives me a sense of accomplishment."]
  },

  // ----------------------------------------------------
  // GRADE 8 — ROUND 2 (MEDIUM: ~3-4 Sentences)
  // ----------------------------------------------------
  {
    id: "g8_r2_01",
    grade: 8,
    round: 2,
    topic: "Social Media Impact",
    question: "How does social media affect communication between teenagers? Do you think it brings friends closer or makes them more distracted?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["In my opinion, social media has both benefits and drawbacks.", "On one hand, it helps friends stay connected instantly.", "On the other hand, people spend too much time staring at screens instead of talking in person.", "Therefore, we should use it responsibly without getting addicted."]
  },
  {
    id: "g8_r2_02",
    grade: 8,
    round: 2,
    topic: "Balancing Study & Sleep",
    question: "Why is getting enough sleep and regular exercise crucial for 8th-grade students preparing for exams? How do you balance your time?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Proper rest and physical activity are vital for academic success.", "When students sleep at least eight hours, their memory and concentration improve.", "I make sure to take breaks and go for walks every afternoon.", "This routine keeps my energy high and reduces stress before exams."]
  },
  {
    id: "g8_r2_03",
    grade: 8,
    round: 2,
    topic: "Loyal Friends",
    question: "Describe a time when a friend supported you or cheered you up. Why was their support meaningful to you?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["A few weeks ago, I was feeling anxious about an exam.", "My friend noticed my mood and brought me a nice note and snack.", "We studied together and practiced the difficult questions until I felt confident.", "Their loyalty showed me the true meaning of supportive friendship."]
  },
  {
    id: "g8_r2_04",
    grade: 8,
    round: 2,
    topic: "Using AI Wisely",
    question: "Artificial Intelligence and smart tools are becoming common. How can students use technology wisely without becoming overly dependent on it?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Artificial Intelligence can be a fantastic learning assistant for students.", "We can use it to brainstorm ideas and understand difficult grammar rules.", "However, we shouldn't ask AI to do all our homework for us.", "Developing our own critical thinking is much more valuable."]
  },
  {
    id: "g8_r2_05",
    grade: 8,
    round: 2,
    topic: "Living Abroad for a Year",
    question: "If you could live in another country for one full year to experience its culture, which country would you choose and what would you hope to learn?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["If I had the chance, I would live in Canada or England for a year.", "I would love to practice speaking English fluently with native speakers every day.", "I would also experience their school life, winter festivals, and diverse cuisine.", "It would broaden my worldview and teach me independence."]
  },
  {
    id: "g8_r2_06",
    grade: 8,
    round: 2,
    topic: "Positive Classrooms",
    question: "How do classroom rules and respectful behavior between students contribute to a better learning environment? Mention two key factors.",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Respectful behavior makes every student feel safe and valued.", "Firstly, when classmates listen without interrupting, discussions become productive.", "Secondly, keeping the classroom quiet helps everyone focus on the teacher's lessons.", "As a result, our whole class achieves better results together."]
  },
  {
    id: "g8_r2_07",
    grade: 8,
    round: 2,
    topic: "Plastic Waste Reduction",
    question: "Plastic pollution is a growing global issue. What practical steps can students take in their school canteen to reduce single-use plastic?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Plastic waste causes immense damage to our oceans and wildlife.", "In our school canteen, students should bring reusable water bottles and lunch boxes.", "The school could also stop selling single-use plastic cups and straws.", "By creating small recycling stations, we can make our campus greener."]
  },
  {
    id: "g8_r2_08",
    grade: 8,
    round: 2,
    topic: "Future Career Spark",
    question: "Which school subject or topic inspires you most when thinking about future university majors or careers? What attracts you to that field?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["The subject that inspires me most is science and technology.", "I have always been curious about how machines and biology work.", "I would love to work in medical research or software engineering one day.", "Being able to solve real-world problems motivates me to study harder."]
  },
  {
    id: "g8_r2_09",
    grade: 8,
    round: 2,
    topic: "Fashion Trends vs Originality",
    question: "Why do fashion trends matter to many teenagers? Do you prefer following current trends or wearing your own unique style?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Fashion is a popular way for teens to express their identity and fit in.", "While some people like following viral styles, I prefer wearing what is comfortable for me.", "Having your own unique style shows self-confidence.", "In the end, personality matters much more than brand labels."]
  },
  {
    id: "g8_r2_10",
    grade: 8,
    round: 2,
    topic: "Resolving Disagreements",
    question: "When you have a disagreement with a classmate during group work, what is the best way to resolve it without arguing?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Disagreements are natural when people share different perspectives.", "The best solution is to stay polite and listen to everyone's arguments patiently.", "We can find a compromise by combining the strongest ideas from each person.", "Teamwork works best when mutual respect is maintained."]
  },
  {
    id: "g8_r2_11",
    grade: 8,
    round: 2,
    topic: "Online Gaming vs Outdoor Sports",
    question: "Compare playing video games online with playing sports outside with friends. Which activity benefits your health and mood more?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Video games improve quick reflexes and strategic problem solving.", "However, outdoor sports provide cardiovascular exercise and boost vitamin D levels.", "Playing outside with friends also builds stronger teamwork and lasting memories.", "Therefore, spending time outdoors is far better for our overall health."]
  },
  {
    id: "g8_r2_12",
    grade: 8,
    round: 2,
    topic: "Budgeting Pocket Money",
    question: "Why is it valuable for teenagers to learn how to budget their pocket money and save for things they want? Share your saving habit.",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Learning financial discipline at an early age is an essential life skill.", "When teenagers save their money, they appreciate the value of what they buy.", "For example, I put aside a portion of my allowance each week for books and hobbies.", "This habit prevents impulsive spending and prepares us for the future."]
  },
  {
    id: "g8_r2_13",
    grade: 8,
    round: 2,
    topic: "Music & Mental State",
    question: "How does listening to different types of music influence your mood while studying or relaxing? Give an example of songs you listen to when stressed.",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Music has a direct effect on our emotions and brainwaves.", "When I need to focus on homework, I listen to calm instrumental or classical tracks.", "When I feel stressed, energetic acoustic tunes help lift my spirits.", "It acts like a therapy session that rejuvenates my mind."]
  },
  {
    id: "g8_r2_14",
    grade: 8,
    round: 2,
    topic: "Semester Goals",
    question: "What is one personal goal you have set for yourself this semester? What specific steps are you taking each week to achieve it?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["My main goal this semester is to achieve higher fluency in spoken English.", "To reach this, I read English articles and speak aloud for 15 minutes daily.", "I also participate actively in classroom speaking games.", "Tracking my weekly progress keeps me accountable and confident."]
  },
  {
    id: "g8_r2_15",
    grade: 8,
    round: 2,
    topic: "Books vs Movie Adaptations",
    question: "When a popular novel is turned into a movie, do you usually prefer reading the book or watching the film? Explain your reasons.",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["I usually prefer reading the original book before watching the movie.", "Books allow you to explore the characters' inner thoughts and emotions in detail.", "While movies have impressive visual effects, they often cut out important scenes.", "Your own imagination is usually more vivid than the screen."]
  },
  {
    id: "g8_r2_16",
    grade: 8,
    round: 2,
    topic: "Community Volunteering",
    question: "If your class organized a volunteer project, would you choose helping animal shelters, cleaning parks, or visiting elderly homes? Why?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["I would love to participate in visiting an elderly care home or animal shelter.", "Spending time listening to elderly people's stories brings them warmth and joy.", "It also teaches us empathy, respect, and gratitude for our elders.", "Giving back to our community makes society much kinder."]
  },
  {
    id: "g8_r2_17",
    grade: 8,
    round: 2,
    topic: "Modern City vs Countryside",
    question: "Would you rather live in a bustling modern metropolis or a peaceful countryside town when you grow up? Describe the lifestyle you prefer.",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["I would prefer living in a bustling modern city / a quiet countryside town.", "Cities offer endless cultural events, museums, and career opportunities.", "However, the countryside offers fresh air, organic food, and no traffic noise.", "For my future lifestyle, having a balance between nature and convenience is ideal."]
  },
  {
    id: "g8_r2_18",
    grade: 8,
    round: 2,
    topic: "Smarter Food Choices",
    question: "Fast food is very popular among teenagers, but home-cooked meals are healthier. How can teenagers make healthier food choices when hanging out?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Teenagers often eat fast food because it is cheap and convenient.", "However, eating too much junk food leads to low energy and health issues.", "When hanging out, we can choose grilled options, fresh salads, or fruit smoothies.", "Making small conscious choices helps us stay active and fit."]
  },
  {
    id: "g8_r2_19",
    grade: 8,
    round: 2,
    topic: "Mastering Time",
    question: "With school, homework, hobbies, and social life, how do you organize your daily schedule so you don't feel overwhelmed?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["Time management is crucial for maintaining balance in the 8th grade.", "I write down my daily priorities in a planner every morning.", "I tackle the most challenging assignments first before doing leisure activities.", "Having a clear schedule prevents procrastination and late-night cramming."]
  },
  {
    id: "g8_r2_20",
    grade: 8,
    round: 2,
    topic: "Overcoming a Challenge",
    question: "Talk about a skill (like speaking English, swimming, or solving math) that was difficult for you at first. How did you improve with practice?",
    target: "Speak for 3–4 sentences.",
    usefulLanguage: ["When I first began speaking English in public, I felt very nervous.", "I was afraid of making grammatical mistakes in front of my classmates.", "However, by practicing simple sentences daily and asking teachers for feedback, I improved.", "This experience taught me that persistence always defeats fear."]
  },

  // ----------------------------------------------------
  // GRADE 8 — ROUND 3 (CHALLENGE: ~5-7 Sentences)
  // ----------------------------------------------------
  {
    id: "g8_r3_01",
    grade: 8,
    round: 3,
    topic: "AI & The Future of Jobs",
    question: "Artificial intelligence and automation are changing many traditional jobs. What skills should today's teenagers develop to succeed in the future job market, and how can schools prepare students?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["The rapid rise of artificial intelligence is transforming industries worldwide.", "While routine tasks will be automated, human skills like critical thinking, empathy, and creativity will be indispensable.", "Teenagers should focus on developing digital literacy, problem solving, and effective communication.", "Schools should update their curricula to include coding, data analysis, and collaborative projects.", "Encouraging students to question ideas rather than just memorize facts is essential.", "Those who adapt flexibly to technological progress will lead the careers of tomorrow."]
  },
  {
    id: "g8_r3_02",
    grade: 8,
    round: 3,
    topic: "Social Media & Mental Health",
    question: "Many experts argue that social media causes unnecessary comparison, anxiety, and screen addiction among teens. Do you agree or disagree? What healthy boundaries should teenagers set?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["I strongly agree that unfiltered social media consumption can harm adolescent mental health.", "Constantly viewing curated, idealized photos leads teenagers to compare themselves unfavorably.", "This often results in unnecessary anxiety, lower self-esteem, and sleep deprivation.", "To counter these negative effects, teenagers should turn off non-essential notifications.", "We should also establish screen-free zones during dinner and before bedtime.", "Remembering that social media highlights are rarely the full reality helps protect our peace of mind."]
  },
  {
    id: "g8_r3_03",
    grade: 8,
    round: 3,
    topic: "Global Climate Summit Speech",
    question: "Climate change and pollution threaten ecosystems worldwide. If you were invited to give a speech at a youth summit, what three urgent actions would you urge schools and governments to take?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["If I had the privilege of addressing the Youth Climate Summit, I would emphasize urgent collective action.", "First, I would urge governments to transition aggressively from fossil fuels to renewable solar and wind energy.", "Second, cities must implement strict regulations against single-use plastics and penalize industrial polluters.", "Third, schools should integrate environmental sustainability into weekly science courses and plant urban micro-forests.", "Young people are the inheritors of this planet, and our voices must drive real policy changes.", "Together, we have the power and innovation to safeguard our planet's future."]
  },
  {
    id: "g8_r3_04",
    grade: 8,
    round: 3,
    topic: "The Ultimate 21st-Century School",
    question: "If you could design the ultimate modern middle school curriculum, what new subjects would you introduce (e.g. coding, financial literacy, psychology), and how would students be evaluated?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["If I redesigned the middle school curriculum, I would prioritize practical life skills alongside academic knowledge.", "I would introduce mandatory courses in financial literacy, emotional intelligence, and computer programming.", "Students would also learn debate, public speaking, and environmental ethics from early grades.", "Instead of relying solely on stressful written exams, assessment would be based on real-world projects and teamwork.", "Teachers would act as mentors who guide students to discover their unique passions.", "This modern approach would prepare young people not just for exams, but for life."]
  },
  {
    id: "g8_r3_05",
    grade: 8,
    round: 3,
    topic: "Redefining Success",
    question: "What does true success mean to you? Is it achieving immense wealth and fame, or living a happy, balanced life helping others? Explain your philosophy and values.",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["In modern society, many people equate success with wealth, luxury, and social media popularity.", "However, in my opinion, true success is defined by personal fulfillment and positive impact on others.", "Having the freedom to pursue work you love while maintaining loving relationships is priceless.", "Success also means having the integrity to stand up for justice and help those in need.", "Inner peace, continuous learning, and kindness are far more enduring than material trophies.", "If you go to sleep knowing you made someone's day better, you are truly successful."]
  },
  {
    id: "g8_r3_06",
    grade: 8,
    round: 3,
    topic: "Overcoming 8th Grade Exam Stress",
    question: "8th grade students often face high stress from exams, family expectations, and high school decisions. What effective strategies can students, teachers, and parents use together to reduce anxiety?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Preparing for high school entrance exams places immense psychological pressure on 8th graders.", "To manage this stress, students should avoid endless all-night study sessions and maintain regular sleep schedules.", "Parents should offer unconditional encouragement rather than focusing exclusively on test scores.", "Teachers can organize interactive review games and mindfulness sessions to ease classroom tension.", "Students should also remember that their worth as individuals is not measured by a single test score.", "A supportive community transforms intimidating challenges into rewarding learning journeys."]
  },
  {
    id: "g8_r3_07",
    grade: 8,
    round: 3,
    topic: "Exploring Space vs Ocean Depths",
    question: "Governments spend billions exploring outer space and the deep ocean. If you had to allocate funding to only one of these scientific frontiers, which would you prioritize and why?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["While both frontiers hold remarkable secrets, I would prioritize funding deep-ocean exploration.", "More than eighty percent of Earth's oceans remain completely unmapped and unexplored.", "Discovering deep-sea organisms could lead to groundbreaking medical treatments and clean energy technologies.", "Furthermore, understanding oceanic ecosystems is critical for combating global warming and preserving marine life.", "While space exploration is undeniably fascinating, fixing and understanding our home planet must come first.", "Investing in our oceans directly protects the future of all humanity."]
  },
  {
    id: "g8_r3_08",
    grade: 8,
    round: 3,
    topic: "Influencer Responsibility",
    question: "Celebrities and online influencers hold tremendous sway over young people's opinions and spending habits. Should influencers have a moral responsibility for what they promote? Discuss.",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["With millions of impressionable teenagers watching their content daily, influencers wield immense cultural power.", "Because of this reach, they carry a clear moral responsibility to promote honesty and positive values.", "When influencers promote harmful diet products or misleading trends for quick profits, they damage young followers.", "Instead, they should use their platforms to champion education, environmental awareness, and mental health.", "As consumers, teenagers must also develop critical thinking to recognize sponsored content and unrealistic illusions.", "Authenticity and ethical accountability are what separate role models from mere entertainers."]
  },
  {
    id: "g8_r3_09",
    grade: 8,
    round: 3,
    topic: "Global Citizenship & Empathy",
    question: "Living in a connected global world means interacting with people from diverse cultural backgrounds. Why is learning foreign languages and cultural empathy essential for global harmony?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Globalization has turned our planet into an interconnected international community.", "Learning foreign languages allows us to understand how different societies think and perceive the world.", "Cultural empathy breaks down stereotypes, xenophobia, and historical prejudices between nations.", "When we respect traditions different from our own, we foster international collaboration and lasting peace.", "Global challenges like climate change and pandemics require cooperation across all borders.", "Becoming a compassionate global citizen begins in our daily interactions and classroom discussions."]
  },
  {
    id: "g8_r3_10",
    grade: 8,
    round: 3,
    topic: "AI in Education: Friend or Foe?",
    question: "Some educators want to ban AI tools in schools, while others want to embrace them as personal tutors. Present arguments for both sides, and explain what balanced approach you recommend.",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["The debate surrounding artificial intelligence in modern education is both urgent and complex.", "Opponents argue that AI encourages academic dishonesty and weakens students' writing and analytical skills.", "Conversely, proponents highlight how AI can provide personalized tutoring and explain difficult concepts around the clock.", "In my view, an outright ban is unrealistic in our digital era.", "Instead, schools should teach students ethical prompt engineering and use AI for brainstorming rather than copying.", "When used as a supplementary tool, AI enhances human potential rather than replacing it."]
  },
  {
    id: "g8_r3_11",
    grade: 8,
    round: 3,
    topic: "Responsible Ecotourism",
    question: "Mass tourism can damage natural landscapes and historical monuments. How can tourists travel responsibly to appreciate cultures without harming local communities and environments?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Traveling allows people to discover breathtaking landscapes and rich historical heritages.", "However, unregulated mass tourism often causes litter, overcrowding, and cultural erosion.", "To practice responsible ecotourism, travelers should patronize local small businesses and eco-friendly accommodations.", "We must always follow the golden rule: 'Take only memories, leave only footprints.'", "Respecting local customs, dress codes, and wildlife habitats preserves these treasures for future generations.", "Sustainable travel transforms tourism from exploitation into mutual cultural celebration."]
  },
  {
    id: "g8_r3_12",
    grade: 8,
    round: 3,
    topic: "Transforming Neglected Spaces",
    question: "Imagine your neighborhood has an empty, neglected plot of land. Propose a project to transform this space into a community center, green park, or youth sports arena that benefits everyone.",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["I would propose transforming the abandoned plot into a multifunctional community eco-park.", "One section would feature a solar-lit basketball and volleyball court for local youth.", "Another area would be dedicated to an organic community garden where families can grow vegetables together.", "We would also construct a wooden amphitheater for open-air concerts, book fairs, and movie nights.", "This project would reduce crime, foster neighborhood solidarity, and promote healthy outdoor living.", "Turning waste spaces into vibrant green hubs revitalizes entire communities."]
  },
  {
    id: "g8_r3_13",
    grade: 8,
    round: 3,
    topic: "Learning From Mistakes",
    question: "People often say that making mistakes is the best way to learn and grow. Share a time when something didn't go as planned for you, what lesson you learned, and how it made you stronger.",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Mistakes are not signs of defeat, but valuable milestones on the road to mastery.", "Last year, I underestimated the preparation needed for a school debate tournament and performed poorly.", "Initially, I felt embarrassed and disappointed in my lack of organization.", "However, I decided to analyze my weaknesses, seek advice from my teacher, and practice speaking daily.", "In the next tournament, my improved arguments and calm delivery earned our team high praise.", "Experiencing failure taught me resilience, humility, and the importance of thorough preparation."]
  },
  {
    id: "g8_r3_14",
    grade: 8,
    round: 3,
    topic: "Digital Privacy in the Modern Age",
    question: "Many modern apps collect personal data, location, and search habits. How concerned are you about digital privacy, and what measures should teenagers take to protect their personal information online?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["In today's digital economy, personal data has become the most valuable currency on the internet.", "Many users unknowingly grant invasive permissions that compromise their private information.", "Teenagers should be cautious about sharing their real-time location and personal contact details online.", "Using strong, unique passwords and enabling two-factor authentication is an essential first step.", "We should also review app privacy settings regularly and think twice before clicking suspicious links.", "Protecting our digital footprint today safeguards our security and privacy tomorrow."]
  },
  {
    id: "g8_r3_15",
    grade: 8,
    round: 3,
    topic: "Team Collaboration vs Independent Mastery",
    question: "Some people prefer working alone to have complete control, while others thrive in collaborative team environments. Compare the benefits of both styles and explain which brings out the best in you.",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Both independent work and teamwork offer distinctive advantages depending on the objective.", "Working independently allows for deep concentration, autonomy, and swift decision-making without compromises.", "On the other hand, teamwork combines diverse perspectives, sparks innovative synergy, and distributes heavy workloads.", "For creative brainstorming and complex problem solving, I find collaborative teams far more rewarding.", "Hearing unexpected viewpoints pushes me to think beyond my personal biases and assumptions.", "A successful individual knows when to lead, when to collaborate, and when to work independently."]
  },
  {
    id: "g8_r3_16",
    grade: 8,
    round: 3,
    topic: "Regulating Fast-Food Marketing",
    question: "Should governments restrict fast-food advertisements targeted at children and teenagers to combat childhood obesity? Discuss the responsibilities of companies, families, and individuals.",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Childhood obesity and related health complications have become critical global health crises.", "Fast-food corporations often design flashy commercials with cartoon mascots to attract young consumers.", "I believe governments should prohibit deceptive junk food advertisements during children's television hours.", "At the same time, families hold the primary responsibility to prepare wholesome home-cooked meals.", "Schools should also replace sugary snacks in vending machines with fresh nuts and fruits.", "A healthier generation requires joint effort from regulators, food producers, and conscious families."]
  },
  {
    id: "g8_r3_17",
    grade: 8,
    round: 3,
    topic: "A Futuristic Invention for Humanity",
    question: "What is one futuristic technology that does not exist yet (such as teleportation, ocean-cleaning nanobots, or clean fusion power) that you hope is invented in your lifetime? Describe its impact.",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["I hope scientists successfully invent autonomous, solar-powered ocean-cleaning nanobot swarms.", "Millions of tons of microplastics currently poison marine ecosystems and enter the human food supply.", "These microscopic robots would filter pollutants from ocean currents without harming aquatic life.", "They would convert harvested plastic waste into safe, renewable biodegradable energy modules.", "This breakthrough would restore coral reefs, revive fish populations, and purify our planet's waterways.", "Technological innovation holds the greatest promise for healing our global environment."]
  },
  {
    id: "g8_r3_18",
    grade: 8,
    round: 3,
    topic: "Standing Up Against Injustice",
    question: "If you saw a classmate being unfairly blamed, teased, or excluded by others in school, what steps would you take to stand up for them and create a supportive, inclusive classroom community?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["Remaining silent in the face of bullying or unfair exclusion makes someone a passive bystander.", "If I witnessed a classmate being mistreated, I would immediately step in and speak up calmly.", "I would invite the excluded student to join our table and make sure they felt welcome.", "If the harassment continued, I would privately report the situation to a trusted school counselor.", "Creating a supportive atmosphere requires everyday courage from every single student.", "When we stand united against cruelty, we build a school where everyone belongs and thrives."]
  },
  {
    id: "g8_r3_19",
    grade: 8,
    round: 3,
    topic: "Passion vs Financial Security in Careers",
    question: "When choosing a career path, should teenagers follow their absolute passion, or should they prioritize job security and financial stability? Defend your viewpoint with clear arguments.",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["The tension between following one's passion and pursuing economic stability is a universal dilemma.", "Choosing a job purely for money often leads to chronic burnout, dissatisfaction, and regret.", "Conversely, ignoring financial realities can create severe stress and economic instability.", "I argue that the ideal path lies in finding the intersection where passion meets practical market demand.", "Developing versatile skills like communication, technology, and adaptability allows you to monetize what you love.", "When you are genuinely passionate about your craft, excellence and success naturally follow."]
  },
  {
    id: "g8_r3_20",
    grade: 8,
    round: 3,
    topic: "A Letter to My 24-Year-Old Self",
    question: "Imagine opening a letter from yourself 10 years in the future. What goals, personal values, and advice do you hope to remind your future 24-year-old self about who you are today?",
    target: "Speak for 5–7 sentences.",
    usefulLanguage: ["In my letter to my future self, I would first ask if they have remained kind, humble, and curious.", "I would remind them of the big dreams, excitement, and friendships they had as an 8th grader.", "I would advise them never to sacrifice their health and core values for superficial prestige.", "I hope they have traveled to new continents, learned multiple languages, and made a positive difference.", "I would urge them to embrace challenges fearlessly and never lose their sense of humor.", "Most importantly, I would write: 'Never forget where you started, and always stay true to yourself.'"]
  }
];

// ==========================================
// 2. WEB AUDIO API SYNTHESIZER (NO EXTERNAL AUDIO FILES)
// ==========================================
class SoundSynth {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTick(speedFactor = 1) {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      const now = this.ctx.currentTime;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600 + Math.random() * 200, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.04);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {
      // audio context error handled gracefully
    }
  }

  playSpinStart() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.3);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.36);
    } catch (e) {}
  }

  playLandFanfare() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + idx * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.25, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.36);
      });
    } catch (e) {}
  }

  playTimerBeep(isFinal = false) {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = isFinal ? 'sawtooth' : 'sine';
      const freq = isFinal ? 880 : 520;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(isFinal ? 0.35 : 0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + (isFinal ? 0.45 : 0.1));

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + (isFinal ? 0.5 : 0.12));
    } catch (e) {}
  }

  playRoundCompleteFanfare() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const melody = [
        { f: 523.25, d: 0.15 },
        { f: 659.25, d: 0.15 },
        { f: 783.99, d: 0.15 },
        { f: 1046.50, d: 0.4 },
        { f: 880.00, d: 0.2 },
        { f: 1046.50, d: 0.6 }
      ];
      let t = this.ctx.currentTime;
      melody.forEach((note) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, t);

        gain.gain.setValueAtTime(0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + note.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + note.d + 0.02);
        t += note.d * 0.9;
      });
    } catch (e) {}
  }
}

const sounds = new SoundSynth();

// ==========================================
// 3. COLOR PALETTES FOR 20 WHEEL SECTORS
// ==========================================
const WHEEL_COLORS = [
  "#4F46E5", "#06B6D4", "#10B981", "#F59E0B", "#EF4444",
  "#8B5CF6", "#EC4899", "#3B82F6", "#14B8A6", "#F97316",
  "#6366F1", "#0284C7", "#059669", "#D97706", "#DC2626",
  "#7C3AED", "#DB2777", "#2563EB", "#0D9488", "#EA580C"
];

// ==========================================
// 4. GAME STATE MANAGEMENT
// ==========================================
class SpeakingWheelGame {
  constructor() {
    this.currentGrade = 7;
    this.currentRound = 1;
    this.usedQuestionIds = new Set();
    this.activeQuestion = null;
    
    // Wheel Animation State
    this.canvas = null;
    this.ctx = null;
    this.currentRotation = 0; // in radians
    this.isSpinning = false;
    this.spinAnimId = null;
    this.lastTickIndex = -1;

    // Timer State
    this.timerDuration = 45; // default seconds
    this.timerRemaining = 45;
    this.timerInterval = null;
    this.isTimerRunning = false;

    // TTS state
    this.ttsSupported = 'speechSynthesis' in window;
    this.isSpeaking = false;
  }

  init() {
    this.setupDOMReferences();
    this.setupEventListeners();
    this.initCanvas();
    this.updateStatsBar();
    this.drawWheel();
  }

  setupDOMReferences() {
    // Screens
    this.screenWelcome = document.getElementById("screenWelcome");
    this.screenGame = document.getElementById("screenGame");

    // Welcome setup elements
    this.btnGrade7 = document.getElementById("btnGrade7");
    this.btnGrade8 = document.getElementById("btnGrade8");
    this.stepRoundSelection = document.getElementById("stepRoundSelection");
    this.selectedGradeLabel = document.getElementById("selectedGradeLabel");
    this.btnRound1 = document.getElementById("btnRound1");
    this.btnRound2 = document.getElementById("btnRound2");
    this.btnRound3 = document.getElementById("btnRound3");

    // Canvas
    this.canvas = document.getElementById("wheelCanvas");
    if (this.canvas) {
      this.ctx = this.canvas.getContext("2d");
    }

    // Controls
    this.btnSpin = document.getElementById("btnSpin");
    this.btnResetRound = document.getElementById("btnResetRound");
    this.btnChangeGrade = document.getElementById("btnChangeGrade");
    this.btnChangeRound = document.getElementById("btnChangeRound");
    this.btnOpenTimer = document.getElementById("btnOpenTimer");
    this.btnToggleSound = document.getElementById("btnToggleSound");
    this.btnFullscreen = document.getElementById("btnFullscreen");
    this.btnTeacherSettings = document.getElementById("btnTeacherSettings");

    // Indicators
    this.badgeGrade = document.getElementById("badgeGrade");
    this.badgeRound = document.getElementById("badgeRound");
    this.progressCounter = document.getElementById("progressCounter");
    this.progressFill = document.getElementById("progressFill");

    // Question Modal
    this.modalQuestion = document.getElementById("modalQuestion");
    this.cardQuestionText = document.getElementById("cardQuestionText");
    this.cardTopicBadge = document.getElementById("cardTopicBadge");
    this.cardTargetBadge = document.getElementById("cardTargetBadge");
    this.cardUsefulLanguageList = document.getElementById("cardUsefulLanguageList");
    this.btnCardTts = document.getElementById("btnCardTts");
    this.btnCardNextSpin = document.getElementById("btnCardNextSpin");
    this.btnCardClose = document.getElementById("btnCardClose");
    this.btnCardTimerStart = document.getElementById("btnCardTimerStart");

    // Timer Overlay / Floating Box
    this.timerPanel = document.getElementById("timerPanel");
    this.timerDisplay = document.getElementById("timerDisplay");
    this.timerCircle = document.getElementById("timerProgressCircle");
    this.btnTimerStart = document.getElementById("btnTimerStart");
    this.btnTimerReset = document.getElementById("btnTimerReset");
    this.btnTimerClose = document.getElementById("btnTimerClose");
    this.timerPresetBtns = document.querySelectorAll(".timer-preset-btn");
    this.timerAlertBanner = document.getElementById("timerAlertBanner");

    // Round Complete Modal
    this.modalComplete = document.getElementById("modalComplete");
    this.completeSummaryText = document.getElementById("completeSummaryText");
    this.btnNextRound = document.getElementById("btnNextRound");
    this.btnReplayRound = document.getElementById("btnReplayRound");

    // Teacher Settings Modal
    this.modalSettings = document.getElementById("modalSettings");
    this.btnSettingsClose = document.getElementById("btnSettingsClose");
    this.selectSettingGrade = document.getElementById("selectSettingGrade");
    this.selectSettingRound = document.getElementById("selectSettingRound");
    this.selectSettingTimer = document.getElementById("selectSettingTimer");
    this.btnSettingsApply = document.getElementById("btnSettingsApply");
  }

  setupEventListeners() {
    // Welcome Grade Choice
    if (this.btnGrade7) {
      this.btnGrade7.addEventListener("click", () => this.selectWelcomeGrade(7));
    }
    if (this.btnGrade8) {
      this.btnGrade8.addEventListener("click", () => this.selectWelcomeGrade(8));
    }

    // Welcome Round Choice
    if (this.btnRound1) {
      this.btnRound1.addEventListener("click", () => this.startSelectedGame(1));
    }
    if (this.btnRound2) {
      this.btnRound2.addEventListener("click", () => this.startSelectedGame(2));
    }
    if (this.btnRound3) {
      this.btnRound3.addEventListener("click", () => this.startSelectedGame(3));
    }

    // Arena Spin
    if (this.btnSpin) {
      this.btnSpin.addEventListener("click", () => this.spinWheel());
    }

    // Top Bar Quick Actions
    if (this.btnChangeGrade) {
      this.btnChangeGrade.addEventListener("click", () => this.returnToWelcome());
    }
    if (this.btnChangeRound) {
      this.btnChangeRound.addEventListener("click", () => this.openRoundSelector());
    }
    if (this.btnResetRound) {
      this.btnResetRound.addEventListener("click", () => this.confirmResetRound());
    }

    // Sound toggle
    if (this.btnToggleSound) {
      this.btnToggleSound.addEventListener("click", () => this.toggleSound());
    }

    // Fullscreen toggle
    if (this.btnFullscreen) {
      this.btnFullscreen.addEventListener("click", () => this.toggleFullscreen());
    }

    // Teacher Settings
    if (this.btnTeacherSettings) {
      this.btnTeacherSettings.addEventListener("click", () => this.openSettingsModal());
    }
    if (this.btnSettingsClose) {
      this.btnSettingsClose.addEventListener("click", () => this.closeSettingsModal());
    }
    if (this.btnSettingsApply) {
      this.btnSettingsApply.addEventListener("click", () => this.applySettings());
    }

    // Question Modal Buttons
    if (this.btnCardClose) {
      this.btnCardClose.addEventListener("click", () => this.closeQuestionModal());
    }
    if (this.btnCardNextSpin) {
      this.btnCardNextSpin.addEventListener("click", () => {
        this.closeQuestionModal();
        setTimeout(() => this.spinWheel(), 350);
      });
    }
    if (this.btnCardTts) {
      this.btnCardTts.addEventListener("click", () => this.speakActiveQuestion());
    }
    if (this.btnCardTimerStart) {
      this.btnCardTimerStart.addEventListener("click", () => {
        this.openTimer();
        this.startTimer();
      });
    }

    // Timer Panel Actions
    if (this.btnOpenTimer) {
      this.btnOpenTimer.addEventListener("click", () => this.toggleTimer());
    }
    if (this.btnTimerClose) {
      this.btnTimerClose.addEventListener("click", () => this.closeTimer());
    }
    if (this.btnTimerStart) {
      this.btnTimerStart.addEventListener("click", () => this.toggleTimerRunState());
    }
    if (this.btnTimerReset) {
      this.btnTimerReset.addEventListener("click", () => this.resetTimer());
    }
    if (this.timerPresetBtns) {
      this.timerPresetBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
          const secs = parseInt(e.target.dataset.seconds, 10);
          this.setTimerDuration(secs);
        });
      });
    }

    // Round Complete Modal Actions
    if (this.btnNextRound) {
      this.btnNextRound.addEventListener("click", () => this.advanceToNextRound());
    }
    if (this.btnReplayRound) {
      this.btnReplayRound.addEventListener("click", () => {
        this.modalComplete.classList.add("hidden");
        this.resetRound();
      });
    }

    // Window resize handler for crisp canvas
    window.addEventListener("resize", () => {
      this.initCanvas();
      this.drawWheel();
    });

    // Keyboard navigation (Space to spin, T for timer, Esc to close modals)
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space" && !this.isSpinning && !this.isAnyModalOpen()) {
        e.preventDefault();
        this.spinWheel();
      } else if (e.code === "KeyT" && !this.isSpinning) {
        this.toggleTimer();
      } else if (e.code === "Escape") {
        if (this.modalQuestion && !this.modalQuestion.classList.contains("hidden")) {
          this.closeQuestionModal();
        }
        if (this.modalSettings && !this.modalSettings.classList.contains("hidden")) {
          this.closeSettingsModal();
        }
        if (this.modalComplete && !this.modalComplete.classList.contains("hidden")) {
          this.modalComplete.classList.add("hidden");
        }
      }
    });
  }

  isAnyModalOpen() {
    return (
      (this.modalQuestion && !this.modalQuestion.classList.contains("hidden")) ||
      (this.modalComplete && !this.modalComplete.classList.contains("hidden")) ||
      (this.modalSettings && !this.modalSettings.classList.contains("hidden"))
    );
  }

  // ==========================================
  // 5. NAVIGATION & SELECTION FLOW
  // ==========================================
  selectWelcomeGrade(grade) {
    this.currentGrade = grade;
    if (this.btnGrade7 && this.btnGrade8) {
      this.btnGrade7.classList.toggle("active", grade === 7);
      this.btnGrade8.classList.toggle("active", grade === 8);
    }
    if (this.selectedGradeLabel) {
      this.selectedGradeLabel.textContent = `${grade}th Grade`;
    }
    if (this.stepRoundSelection) {
      this.stepRoundSelection.classList.remove("hidden");
      this.stepRoundSelection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  startSelectedGame(round) {
    this.currentRound = round;
    this.usedQuestionIds.clear();
    this.activeQuestion = null;

    if (this.screenWelcome) this.screenWelcome.classList.add("hidden");
    if (this.screenGame) this.screenGame.classList.remove("hidden");

    this.updateStatsBar();
    this.initCanvas();
    this.drawWheel();
  }

  returnToWelcome() {
    if (this.isSpinning) return;
    this.stopTimer();
    if (this.screenGame) this.screenGame.classList.add("hidden");
    if (this.screenWelcome) this.screenWelcome.classList.remove("hidden");
  }

  openRoundSelector() {
    if (this.isSpinning) return;
    this.returnToWelcome();
    if (this.stepRoundSelection) {
      this.stepRoundSelection.classList.remove("hidden");
    }
  }

  confirmResetRound() {
    if (this.isSpinning) return;
    if (confirm("Reset this round? All 20 questions will become available again.")) {
      this.resetRound();
    }
  }

  resetRound() {
    this.usedQuestionIds.clear();
    this.activeQuestion = null;
    this.updateStatsBar();
    this.drawWheel();
  }

  advanceToNextRound() {
    if (this.modalComplete) this.modalComplete.classList.add("hidden");
    if (this.currentRound < 3) {
      this.currentRound += 1;
    } else {
      // If at round 3, switch grade or loop back to round 1
      this.currentGrade = this.currentGrade === 7 ? 8 : 7;
      this.currentRound = 1;
    }
    this.resetRound();
  }

  // ==========================================
  // 6. QUESTION FILTERING & POOL
  // ==========================================
  getCurrentRoundQuestions() {
    return QUESTION_BANK.filter(
      q => q.grade === this.currentGrade && q.round === this.currentRound
    );
  }

  getUnusedQuestions() {
    const roundQs = this.getCurrentRoundQuestions();
    return roundQs.filter(q => !this.usedQuestionIds.has(q.id));
  }

  updateStatsBar() {
    const roundNames = { 1: "ROUND 1 — EASY", 2: "ROUND 2 — MEDIUM", 3: "ROUND 3 — CHALLENGE" };
    if (this.badgeGrade) {
      this.badgeGrade.textContent = `Grade ${this.currentGrade}`;
    }
    if (this.badgeRound) {
      this.badgeRound.textContent = roundNames[this.currentRound] || `Round ${this.currentRound}`;
      this.badgeRound.className = `round-badge round-${this.currentRound}`;
    }

    const usedCount = this.usedQuestionIds.size;
    const totalCount = 20;

    if (this.progressCounter) {
      this.progressCounter.textContent = `${usedCount} / ${totalCount}`;
    }
    if (this.progressFill) {
      const percentage = (usedCount / totalCount) * 100;
      this.progressFill.style.width = `${percentage}%`;
    }

    if (this.btnSpin) {
      if (usedCount >= totalCount) {
        this.btnSpin.disabled = true;
        this.btnSpin.innerHTML = `<span>🎉 ROUND FINISHED</span>`;
      } else {
        this.btnSpin.disabled = this.isSpinning;
        this.btnSpin.innerHTML = `<span class="spin-icon">🎡</span> <span>SPIN WHEEL</span>`;
      }
    }
  }

  // ==========================================
  // 7. CANVAS & WHEEL RENDERING ENGINE
  // ==========================================
  initCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const size = Math.min(rect.width || 560, window.innerHeight * 0.58, 620);

    this.canvas.width = size * dpr;
    this.canvas.height = size * dpr;
    this.canvas.style.width = `${size}px`;
    this.canvas.style.height = `${size}px`;

    this.ctx.scale(dpr, dpr);
    this.canvasSize = size;
  }

  drawWheel() {
    if (!this.ctx || !this.canvasSize) return;
    const ctx = this.ctx;
    const size = this.canvasSize;
    const cx = size / 2;
    const cy = size / 2;
    const radius = size / 2 - 16;
    const numSegments = 20;
    const arc = (Math.PI * 2) / numSegments;
    const roundQs = this.getCurrentRoundQuestions();

    ctx.clearRect(0, 0, size, size);

    // Save rotation context
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(this.currentRotation);

    // Outer Glow Ring
    ctx.beginPath();
    ctx.arc(0, 0, radius + 8, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(99, 102, 241, 0.4)";
    ctx.lineWidth = 10;
    ctx.stroke();

    // Draw 20 Sectors
    for (let i = 0; i < numSegments; i++) {
      const angle = i * arc;
      const question = roundQs[i] || null;
      const isUsed = question ? this.usedQuestionIds.has(question.id) : false;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, angle, angle + arc);
      ctx.closePath();

      // Sector Color
      if (isUsed) {
        ctx.fillStyle = i % 2 === 0 ? "#1E293B" : "#0F172A";
      } else {
        ctx.fillStyle = WHEEL_COLORS[i % WHEEL_COLORS.length];
      }
      ctx.fill();

      // Sector Border Line
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Sector Content (Number / Topic snippet)
      ctx.save();
      ctx.rotate(angle + arc / 2);
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";

      if (isUsed) {
        // Checked / Disabled state
        ctx.fillStyle = "rgba(148, 163, 184, 0.5)";
        ctx.font = "bold 15px 'Outfit', sans-serif";
        ctx.fillText(`✓ Q${i + 1}`, radius - 24, 0);
      } else {
        // Bright active text
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "800 18px 'Outfit', sans-serif";
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.shadowBlur = 4;
        ctx.fillText(`Q${i + 1}`, radius - 28, 0);

        // Topic icon / short label
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.font = "500 10px 'Inter', sans-serif";
        const topicSnippet = question ? question.topic.substring(0, 10) : "";
        ctx.fillText(topicSnippet, radius - 70, 0);
      }

      ctx.restore();
    }

    // Center Outer Hub Ring
    ctx.beginPath();
    ctx.arc(0, 0, 48, 0, Math.PI * 2);
    ctx.fillStyle = "#0F172A";
    ctx.fill();
    ctx.strokeStyle = "#6366F1";
    ctx.lineWidth = 4;
    ctx.stroke();

    // Center Inner Hub Circle
    ctx.beginPath();
    ctx.arc(0, 0, 36, 0, Math.PI * 2);
    const grad = ctx.createLinearGradient(-30, -30, 30, 30);
    grad.addColorStop(0, "#4F46E5");
    grad.addColorStop(1, "#9333EA");
    ctx.fillStyle = grad;
    ctx.fill();

    // Hub Icon / Text
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 20px 'Outfit', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("🎡", 0, 0);

    ctx.restore();
  }

  // ==========================================
  // 8. WHEEL SPIN PHYSICS & SELECTION
  // ==========================================
  spinWheel() {
    if (this.isSpinning) return;
    const unused = this.getUnusedQuestions();
    if (unused.length === 0) {
      this.showRoundComplete();
      return;
    }

    // Pick a random unused question
    const randomIndex = Math.floor(Math.random() * unused.length);
    const targetQuestion = unused[randomIndex];

    // Find target question index (0-19) in current round
    const roundQs = this.getCurrentRoundQuestions();
    const targetIndex = roundQs.findIndex(q => q.id === targetQuestion.id);

    if (targetIndex === -1) return;

    this.isSpinning = true;
    this.btnSpin.disabled = true;
    sounds.playSpinStart();

    // The pointer is fixed at top (which corresponds to -PI/2 or 3PI/2)
    // Segment i occupies angles [i * arc, (i + 1) * arc]
    // When wheel is rotated by R, the segment under top pointer satisfies:
    // (targetIndex + 0.5) * arc + R = 3PI/2 (mod 2PI)
    const numSegments = 20;
    const arc = (Math.PI * 2) / numSegments;
    const pointerAngle = (3 * Math.PI) / 2;
    
    // Add 4-7 full extra rotations + precise landing offset within segment
    const extraFullSpins = 5 + Math.floor(Math.random() * 3);
    const randomSubOffset = (Math.random() * 0.6 + 0.2) * arc; // landing inside sector
    const targetSegmentAngle = targetIndex * arc + randomSubOffset;

    // Calculate final rotation
    const currentRotNorm = this.currentRotation % (Math.PI * 2);
    let targetRotationDelta = pointerAngle - targetSegmentAngle - currentRotNorm;
    while (targetRotationDelta < 0) {
      targetRotationDelta += Math.PI * 2;
    }
    const finalRotation = this.currentRotation + targetRotationDelta + (extraFullSpins * Math.PI * 2);

    const spinDuration = 4500; // 4.5 seconds
    const startRotation = this.currentRotation;
    const startTime = performance.now();

    // Cubic-bezier like easing out
    const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

    const animateSpin = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / spinDuration, 1);
      const easedProgress = easeOutQuart(progress);

      this.currentRotation = startRotation + (finalRotation - startRotation) * easedProgress;

      // Calculate current pointer sector for ticking sound
      const currentNorm = (pointerAngle - (this.currentRotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      const currentSector = Math.floor(currentNorm / arc);
      if (currentSector !== this.lastTickIndex) {
        sounds.playTick(1 - progress);
        this.lastTickIndex = currentSector;
      }

      this.drawWheel();

      if (progress < 1) {
        this.spinAnimId = requestAnimationFrame(animateSpin);
      } else {
        // Wheel stopped
        this.isSpinning = false;
        this.onWheelStopped(targetQuestion);
      }
    };

    this.spinAnimId = requestAnimationFrame(animateSpin);
  }

  onWheelStopped(question) {
    this.activeQuestion = question;
    this.usedQuestionIds.add(question.id);
    
    sounds.playLandFanfare();
    this.updateStatsBar();
    this.drawWheel();

    // Trigger visual confetti
    this.launchConfetti();

    // Show Question Modal with slight delay for dramatic effect
    setTimeout(() => {
      this.displayQuestionModal(question);
    }, 450);
  }

  // ==========================================
  // 9. QUESTION MODAL DISPLAY & TTS
  // ==========================================
  displayQuestionModal(q) {
    if (!this.modalQuestion) return;

    if (this.cardTopicBadge) {
      this.cardTopicBadge.textContent = `${q.topic} • Grade ${q.grade}`;
    }
    if (this.cardQuestionText) {
      this.cardQuestionText.textContent = q.question;
    }
    if (this.cardTargetBadge) {
      this.cardTargetBadge.textContent = `🎯 ${q.target}`;
    }

    // Build Useful Language pills
    if (this.cardUsefulLanguageList) {
      this.cardUsefulLanguageList.innerHTML = "";
      if (q.usefulLanguage && q.usefulLanguage.length > 0) {
        q.usefulLanguage.forEach(phrase => {
          const li = document.createElement("li");
          li.className = "lang-chip";
          li.textContent = phrase;
          this.cardUsefulLanguageList.appendChild(li);
        });
      }
    }

    this.modalQuestion.classList.remove("hidden");

    // Auto-reset timer to default duration for this question
    this.resetTimer();
  }

  closeQuestionModal() {
    if (this.modalQuestion) {
      this.modalQuestion.classList.add("hidden");
    }
    if (this.usedQuestionIds.size >= 20) {
      setTimeout(() => this.showRoundComplete(), 300);
    }
  }

  speakActiveQuestion() {
    if (!this.ttsSupported || !this.activeQuestion) {
      alert("Text-to-Speech is not available in your browser.");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(this.activeQuestion.question);
    utterance.lang = "en-US";
    utterance.rate = 0.9; // Slightly slower and clearer for English learners

    // Try to find natural English voice
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha")));
    if (enVoice) {
      utterance.voice = enVoice;
    }

    if (this.btnCardTts) {
      this.btnCardTts.classList.add("speaking");
    }

    utterance.onend = () => {
      if (this.btnCardTts) this.btnCardTts.classList.remove("speaking");
    };
    utterance.onerror = () => {
      if (this.btnCardTts) this.btnCardTts.classList.remove("speaking");
    };

    window.speechSynthesis.speak(utterance);
  }

  // ==========================================
  // 10. TIMER ENGINE (WITH AUDIO & CIRCLE)
  // ==========================================
  openTimer() {
    if (this.timerPanel) {
      this.timerPanel.classList.remove("hidden");
    }
  }

  closeTimer() {
    if (this.timerPanel) {
      this.timerPanel.classList.add("hidden");
    }
    this.stopTimer();
  }

  toggleTimer() {
    if (!this.timerPanel) return;
    if (this.timerPanel.classList.contains("hidden")) {
      this.openTimer();
    } else {
      this.closeTimer();
    }
  }

  setTimerDuration(seconds) {
    this.timerDuration = seconds;
    this.timerRemaining = seconds;
    this.stopTimer();
    this.updateTimerDisplay();

    if (this.timerPresetBtns) {
      this.timerPresetBtns.forEach(btn => {
        btn.classList.toggle("active", parseInt(btn.dataset.seconds, 10) === seconds);
      });
    }
  }

  toggleTimerRunState() {
    if (this.isTimerRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.timerRemaining <= 0) {
      this.timerRemaining = this.timerDuration;
    }
    this.isTimerRunning = true;
    if (this.btnTimerStart) {
      this.btnTimerStart.innerHTML = `<span>⏸ PAUSE</span>`;
      this.btnTimerStart.classList.add("btn-pause");
    }
    if (this.timerAlertBanner) {
      this.timerAlertBanner.classList.add("hidden");
    }

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timerRemaining--;
      this.updateTimerDisplay();

      // Countdown audio ticks for last 5 seconds
      if (this.timerRemaining > 0 && this.timerRemaining <= 5) {
        sounds.playTimerBeep(false);
      }

      if (this.timerRemaining <= 0) {
        this.onTimerComplete();
      }
    }, 1000);
  }

  stopTimer() {
    this.isTimerRunning = false;
    clearInterval(this.timerInterval);
    if (this.btnTimerStart) {
      this.btnTimerStart.innerHTML = `<span>▶ START</span>`;
      this.btnTimerStart.classList.remove("btn-pause");
    }
  }

  resetTimer() {
    this.stopTimer();
    this.timerRemaining = this.timerDuration;
    this.updateTimerDisplay();
    if (this.timerAlertBanner) {
      this.timerAlertBanner.classList.add("hidden");
    }
  }

  updateTimerDisplay() {
    if (this.timerDisplay) {
      const mins = Math.floor(this.timerRemaining / 60);
      const secs = this.timerRemaining % 60;
      this.timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Update circular progress SVG
    if (this.timerCircle) {
      const circumference = 2 * Math.PI * 54; // r = 54
      const progress = this.timerRemaining / this.timerDuration;
      const offset = circumference * (1 - progress);
      this.timerCircle.style.strokeDasharray = `${circumference}`;
      this.timerCircle.style.strokeDashoffset = `${offset}`;

      // Color shifts when low time
      if (this.timerRemaining <= 10) {
        this.timerCircle.style.stroke = "#EF4444";
      } else if (this.timerRemaining <= 20) {
        this.timerCircle.style.stroke = "#F59E0B";
      } else {
        this.timerCircle.style.stroke = "#10B981";
      }
    }
  }

  onTimerComplete() {
    this.stopTimer();
    sounds.playTimerBeep(true);

    if (this.timerAlertBanner) {
      this.timerAlertBanner.textContent = "⏰ TIME'S UP!";
      this.timerAlertBanner.classList.remove("hidden");
    }
  }

  // ==========================================
  // 11. ROUND COMPLETE CELEBRATION
  // ==========================================
  showRoundComplete() {
    if (!this.modalComplete) return;

    sounds.playRoundCompleteFanfare();
    this.launchConfetti();

    if (this.completeSummaryText) {
      const nextRoundLabel = this.currentRound < 3 
        ? `Ready for Round ${this.currentRound + 1}?` 
        : `All 3 rounds complete for Grade ${this.currentGrade}!`;
      this.completeSummaryText.textContent = `Outstanding effort! All 20 questions completed for Grade ${this.currentGrade} (Round ${this.currentRound}). ${nextRoundLabel}`;
    }

    this.modalComplete.classList.remove("hidden");
  }

  // ==========================================
  // 12. TEACHER SETTINGS MODAL
  // ==========================================
  openSettingsModal() {
    if (this.selectSettingGrade) this.selectSettingGrade.value = this.currentGrade;
    if (this.selectSettingRound) this.selectSettingRound.value = this.currentRound;
    if (this.selectSettingTimer) this.selectSettingTimer.value = this.timerDuration;
    if (this.modalSettings) this.modalSettings.classList.remove("hidden");
  }

  closeSettingsModal() {
    if (this.modalSettings) this.modalSettings.classList.add("hidden");
  }

  applySettings() {
    if (this.selectSettingGrade) {
      this.currentGrade = parseInt(this.selectSettingGrade.value, 10);
    }
    if (this.selectSettingRound) {
      this.currentRound = parseInt(this.selectSettingRound.value, 10);
    }
    if (this.selectSettingTimer) {
      this.setTimerDuration(parseInt(this.selectSettingTimer.value, 10));
    }
    this.resetRound();
    this.closeSettingsModal();
  }

  // ==========================================
  // 13. SOUND & FULLSCREEN UTILITIES
  // ==========================================
  toggleSound() {
    sounds.isMuted = !sounds.isMuted;
    if (this.btnToggleSound) {
      this.btnToggleSound.innerHTML = sounds.isMuted 
        ? `<span>🔇 Sound: OFF</span>` 
        : `<span>🔊 Sound: ON</span>`;
      this.btnToggleSound.classList.toggle("btn-muted", sounds.isMuted);
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      if (this.btnFullscreen) this.btnFullscreen.innerHTML = `<span>⤢ Exit Fullscreen</span>`;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      if (this.btnFullscreen) this.btnFullscreen.innerHTML = `<span>⤢ Fullscreen</span>`;
    }
  }

  // ==========================================
  // 14. CANVAS CONFETTI FX
  // ==========================================
  launchConfetti() {
    const canvasFx = document.getElementById("fxCanvas");
    if (!canvasFx) return;
    const ctx = canvasFx.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    canvasFx.width = window.innerWidth * dpr;
    canvasFx.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    const particles = [];
    const colors = ["#4F46E5", "#06B6D4", "#10B981", "#F59E0B", "#EF4444", "#EC4899", "#8B5CF6", "#FBBF24"];
    const count = 75;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 12 - 4,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        alpha: 1,
        gravity: 0.35
      });
    }

    let start = performance.now();
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotSpeed;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    requestAnimationFrame(render);
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  window.speakingWheelApp = new SpeakingWheelGame();
  window.speakingWheelApp.init();
});
