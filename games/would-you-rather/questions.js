/**
 * WOULD YOU RATHER? - Comprehensive Question Database
 * 
 * Specifically structured for 7th & 8th Grade English language learners.
 * - Stage 1: Easy Ice Breaker (Short, direct vocabulary, fun preferences)
 * - Stage 2: Medium / Getting to Know You (More detail, specific context, real routines)
 * - Stage 3: Longer / Think About It (Tradeoffs, consequences, digital & social life)
 * - Stage 4: Challenge / Deep Reasoning (Hypothetical dilemmas, comparisons, ethics, future goals)
 * 
 * Contains 124 Grade 7 questions and 124 Grade 8 questions (248 total unique questions).
 */

const WOULD_YOU_RATHER_DATA = {
  "grade7": {
    "stage1": [
      {
        "id": "g7_s1_01",
        "category": "Animals",
        "optionA": {
          "text": "Have a loyal pet dog",
          "emoji": "🐶"
        },
        "optionB": {
          "text": "Have an independent pet cat",
          "emoji": "🐱"
        },
        "prompts": [
          "Why did you pick this pet?",
          "Tell us why you prefer this animal."
        ],
        "starter": "I would rather have a ... because ..."
      },
      {
        "id": "g7_s1_02",
        "category": "Food",
        "optionA": {
          "text": "Eat hot cheesy pizza",
          "emoji": "🍕"
        },
        "optionB": {
          "text": "Eat crispy juicy burgers",
          "emoji": "🍔"
        },
        "prompts": [
          "Why is this your favorite food?",
          "What is the tastiest part about it?"
        ],
        "starter": "I would rather eat ... because ..."
      },
      {
        "id": "g7_s1_03",
        "category": "Superpowers",
        "optionA": {
          "text": "Be able to fly anywhere",
          "emoji": "🦅"
        },
        "optionB": {
          "text": "Be completely invisible",
          "emoji": "👻"
        },
        "prompts": [
          "Where would you go first?",
          "Why is this superpower cooler?"
        ],
        "starter": "I would rather be able to ... because ..."
      },
      {
        "id": "g7_s1_04",
        "category": "Weather",
        "optionA": {
          "text": "Live in sunny summer all year",
          "emoji": "☀️"
        },
        "optionB": {
          "text": "Live in snowy winter all year",
          "emoji": "❄️"
        },
        "prompts": [
          "What activities do you like doing in this weather?",
          "Why do you prefer this climate?"
        ],
        "starter": "I would rather live in ... because ..."
      },
      {
        "id": "g7_s1_05",
        "category": "Travel",
        "optionA": {
          "text": "Relax on a tropical beach",
          "emoji": "🏖️"
        },
        "optionB": {
          "text": "Explore high snowy mountains",
          "emoji": "🏔️"
        },
        "prompts": [
          "What would you do there on day one?",
          "Why does this place sound more fun?"
        ],
        "starter": "I would rather go to ... because ..."
      },
      {
        "id": "g7_s1_06",
        "category": "Hobbies",
        "optionA": {
          "text": "Play action video games",
          "emoji": "🎮"
        },
        "optionB": {
          "text": "Play outdoor team sports",
          "emoji": "⚽"
        },
        "prompts": [
          "Why is this activity more exciting for you?",
          "Who do you like playing with?"
        ],
        "starter": "I would rather play ... because ..."
      },
      {
        "id": "g7_s1_07",
        "category": "Snacks",
        "optionA": {
          "text": "Eat sweet chocolate ice cream",
          "emoji": "🍦"
        },
        "optionB": {
          "text": "Eat salty crunchy popcorn",
          "emoji": "🍿"
        },
        "prompts": [
          "When is the best time to eat this?",
          "Why do you like sweet or salty snacks?"
        ],
        "starter": "I would rather eat ... because ..."
      },
      {
        "id": "g7_s1_08",
        "category": "Superpowers",
        "optionA": {
          "text": "Speak and understand all animal languages",
          "emoji": "🐾"
        },
        "optionB": {
          "text": "Speak and understand every human language",
          "emoji": "🗣️"
        },
        "prompts": [
          "Which animal or country would you speak to first?",
          "Why is this more helpful?"
        ],
        "starter": "I would rather speak ... because ..."
      },
      {
        "id": "g7_s1_09",
        "category": "Entertainment",
        "optionA": {
          "text": "Watch funny movie comedies",
          "emoji": "🎬"
        },
        "optionB": {
          "text": "Watch mystery detective cartoons",
          "emoji": "🕵️"
        },
        "prompts": [
          "Why do you enjoy this type of show?",
          "Tell us about a show you like."
        ],
        "starter": "I would rather watch ... because ..."
      },
      {
        "id": "g7_s1_10",
        "category": "Daily Life",
        "optionA": {
          "text": "Wake up early at 6:00 AM",
          "emoji": "🌅"
        },
        "optionB": {
          "text": "Stay awake late until 1:00 AM",
          "emoji": "🌙"
        },
        "prompts": [
          "Are you a morning person or a night owl?",
          "Why is that time better for you?"
        ],
        "starter": "I would rather ... because ..."
      },
      {
        "id": "g7_s1_11",
        "category": "Pets",
        "optionA": {
          "text": "Have a playful pet dolphin",
          "emoji": "🐬"
        },
        "optionB": {
          "text": "Have a friendly pet panda",
          "emoji": "🐼"
        },
        "prompts": [
          "How would you take care of it?",
          "Why is this animal special?"
        ],
        "starter": "I would rather have a pet ... because ..."
      },
      {
        "id": "g7_s1_12",
        "category": "Music",
        "optionA": {
          "text": "Play the loud electric guitar",
          "emoji": "🎸"
        },
        "optionB": {
          "text": "Play the smooth classical piano",
          "emoji": "🎹"
        },
        "prompts": [
          "What kind of songs would you play?",
          "Why do you like this instrument?"
        ],
        "starter": "I would rather play the ... because ..."
      },
      {
        "id": "g7_s1_13",
        "category": "Fantasy",
        "optionA": {
          "text": "Live in a giant treehouse in a jungle",
          "emoji": "🌳"
        },
        "optionB": {
          "text": "Live in a secret underwater glass dome",
          "emoji": "🌊"
        },
        "prompts": [
          "What is the coolest thing about this home?",
          "Why did you choose it?"
        ],
        "starter": "I would rather live in ... because ..."
      },
      {
        "id": "g7_s1_14",
        "category": "School",
        "optionA": {
          "text": "Have Art class every single day",
          "emoji": "🎨"
        },
        "optionB": {
          "text": "Have Physical Education (P.E.) every single day",
          "emoji": "🏀"
        },
        "prompts": [
          "Why is this class more enjoyable for you?",
          "What do you like creating or doing in this lesson?"
        ],
        "starter": "I would rather have ... because ..."
      },
      {
        "id": "g7_s1_15",
        "category": "Funny Situations",
        "optionA": {
          "text": "Always have bright green neon hair",
          "emoji": "🟢"
        },
        "optionB": {
          "text": "Always wear mismatched neon socks",
          "emoji": "🧦"
        },
        "prompts": [
          "What would your friends say?",
          "Why is this choice less embarrassing?"
        ],
        "starter": "I would rather ... because ..."
      },
      {
        "id": "g7_s1_16",
        "category": "Food",
        "optionA": {
          "text": "Drink warm hot chocolate with marshmallows",
          "emoji": "☕"
        },
        "optionB": {
          "text": "Drink an ice-cold fruit smoothie",
          "emoji": "🍓"
        },
        "prompts": [
          "Which season is perfect for this drink?",
          "Why do you prefer this flavor?"
        ],
        "starter": "I would rather drink ... because ..."
      },
      {
        "id": "g7_s1_17",
        "category": "Transport",
        "optionA": {
          "text": "Ride a futuristic hoverboard to school",
          "emoji": "🛹"
        },
        "optionB": {
          "text": "Fly a personal jetpack to school",
          "emoji": "🚀"
        },
        "prompts": [
          "How fast would you arrive?",
          "Why is this way of travel cooler?"
        ],
        "starter": "I would rather ride a ... because ..."
      },
      {
        "id": "g7_s1_18",
        "category": "Reading",
        "optionA": {
          "text": "Read exciting fantasy adventure comic books",
          "emoji": "📚"
        },
        "optionB": {
          "text": "Read funny illustrated joke books",
          "emoji": "📖"
        },
        "prompts": [
          "Why do you like reading this style?",
          "What makes it entertaining?"
        ],
        "starter": "I would rather read ... because ..."
      },
      {
        "id": "g7_s1_19",
        "category": "Theme Parks",
        "optionA": {
          "text": "Ride the tallest looping roller coaster",
          "emoji": "🎢"
        },
        "optionB": {
          "text": "Slide down the longest waterpark slide",
          "emoji": "🌊"
        },
        "prompts": [
          "Do you enjoy thrills and speed?",
          "Why does this ride sound more fun?"
        ],
        "starter": "I would rather ride ... because ..."
      },
      {
        "id": "g7_s1_20",
        "category": "Magic",
        "optionA": {
          "text": "Have a magic carpet that flies anywhere",
          "emoji": "🧞"
        },
        "optionB": {
          "text": "Have a magic backpack with unlimited snacks",
          "emoji": "🎒"
        },
        "prompts": [
          "How often would you use it?",
          "Why is this magic item better?"
        ],
        "starter": "I would rather have ... because ..."
      },
      {
        "id": "g7_s1_21",
        "category": "Games",
        "optionA": {
          "text": "Play Roblox with your best friends",
          "emoji": "🕹️"
        },
        "optionB": {
          "text": "Play Minecraft and build huge worlds",
          "emoji": "🧱"
        },
        "prompts": [
          "What do you love building or doing in this game?",
          "Why do you prefer it?"
        ],
        "starter": "I would rather play ... because ..."
      },
      {
        "id": "g7_s1_22",
        "category": "Animals",
        "optionA": {
          "text": "Swim alongside majestic sea turtles",
          "emoji": "🐢"
        },
        "optionB": {
          "text": "Ride on the back of an African elephant",
          "emoji": "🐘"
        },
        "prompts": [
          "Why is this animal encounter exciting?",
          "How would you feel?"
        ],
        "starter": "I would rather ... because ..."
      },
      {
        "id": "g7_s1_23",
        "category": "Dessert",
        "optionA": {
          "text": "Eat warm fluffy pancakes with syrup",
          "emoji": "🥞"
        },
        "optionB": {
          "text": "Eat crispy golden waffles with berries",
          "emoji": "🧇"
        },
        "prompts": [
          "What toppings would you add?",
          "Why are they tastier?"
        ],
        "starter": "I would rather eat ... because ..."
      },
      {
        "id": "g7_s1_24",
        "category": "Time",
        "optionA": {
          "text": "Travel 100 years into the ancient past",
          "emoji": "⏳"
        },
        "optionB": {
          "text": "Travel 100 years into the high-tech future",
          "emoji": "🛸"
        },
        "prompts": [
          "What would you want to see first?",
          "Why is that era more fascinating?"
        ],
        "starter": "I would rather travel to ... because ..."
      },
      {
        "id": "g7_s1_25",
        "category": "Clothing",
        "optionA": {
          "text": "Always wear comfortable oversized hoodies",
          "emoji": "🧥"
        },
        "optionB": {
          "text": "Always wear super cool stylish sports shoes",
          "emoji": "👟"
        },
        "prompts": [
          "What is more important to you: comfort or style?",
          "Why did you choose it?"
        ],
        "starter": "I would rather wear ... because ..."
      },
      {
        "id": "g7_s1_26",
        "category": "Amusement Parks",
        "optionA": {
          "text": "Ride the giant panoramic Ferris wheel at sunset",
          "emoji": "🎡"
        },
        "optionB": {
          "text": "Drive funny electric bumper cars with your friends",
          "emoji": "🚗"
        },
        "prompts": [
          "Which ride is more exciting for you?",
          "Why do you prefer it?"
        ],
        "starter": "I would rather ride ... because ..."
      },
      {
        "id": "g7_s1_27",
        "category": "Art & Crafts",
        "optionA": {
          "text": "Paint colorful street murals with spray cans",
          "emoji": "🎨"
        },
        "optionB": {
          "text": "Mold cool clay dinosaur sculptures in pottery class",
          "emoji": "🦖"
        },
        "prompts": [
          "What would you create first?",
          "Tell us why."
        ],
        "starter": "I would rather ... because I enjoy ..."
      },
      {
        "id": "g7_s1_28",
        "category": "Sweet Treats",
        "optionA": {
          "text": "Eat warm glazed chocolate donuts",
          "emoji": "🍩"
        },
        "optionB": {
          "text": "Eat crispy cinnamon churros with caramel dip",
          "emoji": "🥖"
        },
        "prompts": [
          "Which sweet treat is tastier?",
          "What makes it delicious?"
        ],
        "starter": "I would rather eat ... because ..."
      },
      {
        "id": "g7_s1_29",
        "category": "Nature",
        "optionA": {
          "text": "Have a secret garden full of colorful butterflies",
          "emoji": "🦋"
        },
        "optionB": {
          "text": "Have a peaceful backyard pond full of swimming koi fish",
          "emoji": "🐟"
        },
        "prompts": [
          "How would you decorate this space?",
          "Why is it more relaxing?"
        ],
        "starter": "I would rather have ... because ..."
      },
      {
        "id": "g7_s1_30",
        "category": "Sports",
        "optionA": {
          "text": "Be a champion skateboarder doing tricks at the skatepark",
          "emoji": "🛹"
        },
        "optionB": {
          "text": "Be a champion BMX biker doing high ramp jumps",
          "emoji": "🚲"
        },
        "prompts": [
          "Which extreme sport looks cooler?",
          "Why did you pick it?"
        ],
        "starter": "I would rather be ... because ..."
      },
      {
        "id": "g7_s1_31",
        "category": "Music & Fame",
        "optionA": {
          "text": "Sing the lead vocals in an energetic pop band",
          "emoji": "🎤"
        },
        "optionB": {
          "text": "Play the loud energetic drums in a rock band",
          "emoji": "🥁"
        },
        "prompts": [
          "What song would you perform first?",
          "Why is that role more fun?"
        ],
        "starter": "I would rather ... because ..."
      }
    ],
    "stage2": [
      {
        "id": "g7_s2_01",
        "category": "Weekend",
        "optionA": {
          "text": "Spend an entire Saturday playing your favorite video game all day",
          "emoji": "🎮"
        },
        "optionB": {
          "text": "Go on a fun all-day camping trip in the woods with your best friends",
          "emoji": "⛺"
        },
        "prompts": [
          "Give two reasons for your choice.",
          "Explain what you would do during the day."
        ],
        "starter": "I would rather ... because first, ... and second, ..."
      },
      {
        "id": "g7_s2_02",
        "category": "School",
        "optionA": {
          "text": "Have zero homework every day but school finishes one hour later",
          "emoji": "⏰"
        },
        "optionB": {
          "text": "Leave school one hour earlier but always have 45 minutes of homework",
          "emoji": "📝"
        },
        "prompts": [
          "Explain why your free time at home matters.",
          "Which schedule makes you less stressed?"
        ],
        "starter": "I would rather ... because I prefer to ..."
      },
      {
        "id": "g7_s2_03",
        "category": "Holidays",
        "optionA": {
          "text": "Visit a world-famous amusement park with crazy fast rides",
          "emoji": "🎢"
        },
        "optionB": {
          "text": "Stay in a luxury resort by the ocean with private pools and water sports",
          "emoji": "🌴"
        },
        "prompts": [
          "What is the main highlight of this vacation?",
          "Tell us why it beats the other option."
        ],
        "starter": "I would rather visit ... because in my opinion, ..."
      },
      {
        "id": "g7_s2_04",
        "category": "Friendship",
        "optionA": {
          "text": "Have one super close best friend who knows all your secrets",
          "emoji": "🤝"
        },
        "optionB": {
          "text": "Have a large group of 15 friendly classmates to hang out with",
          "emoji": "👥"
        },
        "prompts": [
          "What is the biggest advantage of your choice?",
          "Why is this type of friendship better?"
        ],
        "starter": "I would rather have ... because I believe that ..."
      },
      {
        "id": "g7_s2_05",
        "category": "Technology",
        "optionA": {
          "text": "Have a smartphone that never runs out of battery power",
          "emoji": "🔋"
        },
        "optionB": {
          "text": "Have ultra-fast free Wi-Fi everywhere in the world wherever you go",
          "emoji": "📶"
        },
        "prompts": [
          "Explain which problem is more annoying in real life.",
          "How would this make your day easier?"
        ],
        "starter": "I would rather have ... because whenever I am outside, ..."
      },
      {
        "id": "g7_s2_06",
        "category": "Sports",
        "optionA": {
          "text": "Score the winning goal in the final championship match for your school",
          "emoji": "⚽"
        },
        "optionB": {
          "text": "Be the undefeated star player who never misses a shot all season",
          "emoji": "🏆"
        },
        "prompts": [
          "How would you celebrate this moment?",
          "Explain why this achievement feels better."
        ],
        "starter": "I would rather ... because for me, ..."
      },
      {
        "id": "g7_s2_07",
        "category": "Food",
        "optionA": {
          "text": "Be able to eat delicious desserts for dinner without feeling sick",
          "emoji": "🍰"
        },
        "optionB": {
          "text": "Have a magical chef cook your favorite warm meal whenever you are hungry",
          "emoji": "👨‍🍳"
        },
        "prompts": [
          "What meal or dessert would you request first?",
          "Give two reasons for your answer."
        ],
        "starter": "I would rather ... because having ..."
      },
      {
        "id": "g7_s2_08",
        "category": "Pets",
        "optionA": {
          "text": "Adopt a cute puppy that needs daily walks and lots of training",
          "emoji": "🐕"
        },
        "optionB": {
          "text": "Adopt a colorful talking parrot that repeats funny sentences",
          "emoji": "🦜"
        },
        "prompts": [
          "What funny things would happen at home?",
          "Why is this pet more entertaining?"
        ],
        "starter": "I would rather adopt ... because I like ..."
      },
      {
        "id": "g7_s2_09",
        "category": "Creativity",
        "optionA": {
          "text": "Be a famous YouTube creator with millions of cheerful subscribers",
          "emoji": "📹"
        },
        "optionB": {
          "text": "Be a talented movie actor starring in epic fantasy blockbuster films",
          "emoji": "🎬"
        },
        "prompts": [
          "What content or movie role would you create?",
          "Tell us why you picked this path."
        ],
        "starter": "I would rather be a ... because creating ..."
      },
      {
        "id": "g7_s2_10",
        "category": "Talents",
        "optionA": {
          "text": "Instantly master every musical instrument in the entire world",
          "emoji": "🎺"
        },
        "optionB": {
          "text": "Instantly master every style of dance and win international contests",
          "emoji": "💃"
        },
        "prompts": [
          "Where would you perform first?",
          "Why is this talent more rewarding?"
        ],
        "starter": "I would rather master ... because I would love to ..."
      },
      {
        "id": "g7_s2_11",
        "category": "School Life",
        "optionA": {
          "text": "Always sit in the front row right next to the teacher's desk",
          "emoji": "🪑"
        },
        "optionB": {
          "text": "Always sit in the back corner by the window with your friends",
          "emoji": "🪟"
        },
        "prompts": [
          "What happens during class in that seat?",
          "Why do you feel more comfortable there?"
        ],
        "starter": "I would rather sit ... because in class, ..."
      },
      {
        "id": "g7_s2_12",
        "category": "Daily Life",
        "optionA": {
          "text": "Have a clean bedroom that automatically cleans and organizes itself",
          "emoji": "✨"
        },
        "optionB": {
          "text": "Have an automatic wardrobe that always chooses the perfect stylish outfit",
          "emoji": "👕"
        },
        "prompts": [
          "How much time would this save you in the morning?",
          "Explain your choice."
        ],
        "starter": "I would rather have ... because every day, ..."
      },
      {
        "id": "g7_s2_13",
        "category": "Imagination",
        "optionA": {
          "text": "Find a hidden secret room behind a bookshelf in your house",
          "emoji": "🚪"
        },
        "optionB": {
          "text": "Find an underground tunnel that leads directly to your school",
          "emoji": "🚇"
        },
        "prompts": [
          "What would you keep in that hidden place?",
          "Why is that discovery cooler?"
        ],
        "starter": "I would rather find ... because I could ..."
      },
      {
        "id": "g7_s2_14",
        "category": "Weather",
        "optionA": {
          "text": "Have a rainy stormy day and stay indoors reading and playing games",
          "emoji": "🌧️"
        },
        "optionB": {
          "text": "Have a bright sunny breezy day and ride bikes at the park with friends",
          "emoji": "🚴"
        },
        "prompts": [
          "Describe your ideal afternoon.",
          "Why does that mood fit you better?"
        ],
        "starter": "I would rather have a ... because I enjoy ..."
      },
      {
        "id": "g7_s2_15",
        "category": "Shopping",
        "optionA": {
          "text": "Get a 500-dollar shopping spree at a giant electronics store",
          "emoji": "💻"
        },
        "optionB": {
          "text": "Get a 500-dollar shopping spree at your favorite clothing and sneaker shop",
          "emoji": "👟"
        },
        "prompts": [
          "What items would be in your shopping basket?",
          "Explain why those items matter to you."
        ],
        "starter": "I would rather get ... because I want to buy ..."
      },
      {
        "id": "g7_s2_16",
        "category": "Animals",
        "optionA": {
          "text": "Spend a weekend volunteering at an animal shelter helping rescue dogs",
          "emoji": "🦮"
        },
        "optionB": {
          "text": "Spend a weekend as a junior guide at an aquarium feeding sea creatures",
          "emoji": "🐠"
        },
        "prompts": [
          "Which animal care experience teaches you more?",
          "Why does it sound rewarding?"
        ],
        "starter": "I would rather spend my weekend ... because ..."
      },
      {
        "id": "g7_s2_17",
        "category": "Food",
        "optionA": {
          "text": "Only eat homemade traditional family dinners for six months",
          "emoji": "🍲"
        },
        "optionB": {
          "text": "Only eat international street food from different countries for six months",
          "emoji": "🌮"
        },
        "prompts": [
          "What flavors would you enjoy the most?",
          "Tell us the best thing about this option."
        ],
        "starter": "I would rather eat ... because I like tasting ..."
      },
      {
        "id": "g7_s2_18",
        "category": "Adventure",
        "optionA": {
          "text": "Go on a safari tour across Africa to photograph wild lions and zebras",
          "emoji": "🦁"
        },
        "optionB": {
          "text": "Go on an expedition to the Arctic to watch the northern lights and polar bears",
          "emoji": "🌌"
        },
        "prompts": [
          "Which scenery looks more breathtaking?",
          "Explain why you want to see it in person."
        ],
        "starter": "I would rather go on ... because seeing ..."
      },
      {
        "id": "g7_s2_19",
        "category": "School Projects",
        "optionA": {
          "text": "Build a working volcano science project with liquid smoke and lights",
          "emoji": "🌋"
        },
        "optionB": {
          "text": "Write and direct a funny 5-minute comedy video with your classmates",
          "emoji": "🎥"
        },
        "prompts": [
          "What role would you take in the team?",
          "Why is this project more fun to present?"
        ],
        "starter": "I would rather ... because I like ..."
      },
      {
        "id": "g7_s2_20",
        "category": "Superpowers",
        "optionA": {
          "text": "Have super strength so you can lift cars and heavy boulders easily",
          "emoji": "💪"
        },
        "optionB": {
          "text": "Have super speed so you can run anywhere across the city in seconds",
          "emoji": "⚡"
        },
        "prompts": [
          "How would you use this ability to help people?",
          "Why is speed or strength more practical?"
        ],
        "starter": "I would rather have ... because with this power, ..."
      },
      {
        "id": "g7_s2_21",
        "category": "Music & Audio",
        "optionA": {
          "text": "Listen to your favorite music playlist while studying every afternoon",
          "emoji": "🎧"
        },
        "optionB": {
          "text": "Study in total silence in a quiet cozy library room",
          "emoji": "🤫"
        },
        "prompts": [
          "Which atmosphere helps your brain concentrate better?",
          "Explain your study habits."
        ],
        "starter": "I would rather study ... because when I listen to ..."
      },
      {
        "id": "g7_s2_22",
        "category": "Celebrations",
        "optionA": {
          "text": "Celebrate your birthday with a huge party with all your classmates",
          "emoji": "🎉"
        },
        "optionB": {
          "text": "Celebrate your birthday on a private fun trip with just two best friends",
          "emoji": "🎂"
        },
        "prompts": [
          "Why is a big party or a small trip more memorable for you?",
          "Give two reasons."
        ],
        "starter": "I would rather celebrate ... because I prefer ..."
      },
      {
        "id": "g7_s2_23",
        "category": "Living Places",
        "optionA": {
          "text": "Live in a peaceful seaside village where you hear ocean waves every night",
          "emoji": "🌊"
        },
        "optionB": {
          "text": "Live in a lively modern city where shops and cafes are open 24/7",
          "emoji": "🏙️"
        },
        "prompts": [
          "What lifestyle suits your personality better?",
          "Explain why."
        ],
        "starter": "I would rather live in ... because I enjoy ..."
      },
      {
        "id": "g7_s2_24",
        "category": "Hobbies",
        "optionA": {
          "text": "Learn how to bake delicious cakes and decorate fancy cupcakes",
          "emoji": "🧁"
        },
        "optionB": {
          "text": "Learn how to code your own mobile video game from scratch",
          "emoji": "💻"
        },
        "prompts": [
          "Who would you share your creation with?",
          "Why is this skill more exciting?"
        ],
        "starter": "I would rather learn to ... because I want to ..."
      },
      {
        "id": "g7_s2_25",
        "category": "Sports",
        "optionA": {
          "text": "Be the captain who leads the team through every difficult game",
          "emoji": "🎖️"
        },
        "optionB": {
          "text": "Be the funny team supporter who keeps everybody energetic and smiling",
          "emoji": "😄"
        },
        "prompts": [
          "Which role fits your energy more?",
          "Why is that role essential for a team?"
        ],
        "starter": "I would rather be ... because I like to ..."
      },
      {
        "id": "g7_s2_26",
        "category": "Science & Building",
        "optionA": {
          "text": "Build a miniature solar-powered toy car that zooms across the playground",
          "emoji": "☀️"
        },
        "optionB": {
          "text": "Build a water rocket that shoots 50 meters high into the sky",
          "emoji": "🚀"
        },
        "prompts": [
          "What was the most exciting part of building it?",
          "Explain your preference."
        ],
        "starter": "I would rather build ... because seeing it ..."
      },
      {
        "id": "g7_s2_27",
        "category": "Sunday Routine",
        "optionA": {
          "text": "Spend Sunday morning watching exciting cartoon marathons with cereal",
          "emoji": "📺"
        },
        "optionB": {
          "text": "Spend Sunday morning baking fresh cookies and sharing them with neighbors",
          "emoji": "🍪"
        },
        "prompts": [
          "Give two reasons for your choice.",
          "How does this make your Sunday feel special?"
        ],
        "starter": "I would rather ... because on Sundays, I prefer to ..."
      },
      {
        "id": "g7_s2_28",
        "category": "Gaming & Tournaments",
        "optionA": {
          "text": "Win a 4-player board game tournament with your classmates during rainy lunch",
          "emoji": "🎲"
        },
        "optionB": {
          "text": "Win a 100-player Battle Royale online match with your gaming squad",
          "emoji": "🎮"
        },
        "prompts": [
          "Which victory gives you more bragging rights?",
          "Tell us why."
        ],
        "starter": "I would rather win ... because competing against ..."
      },
      {
        "id": "g7_s2_29",
        "category": "Animal Friends",
        "optionA": {
          "text": "Have a loyal golden retriever that brings you your school slippers every day",
          "emoji": "🦮"
        },
        "optionB": {
          "text": "Have an acrobatic cat that does backflips and balances on your shoulder",
          "emoji": "🐈"
        },
        "prompts": [
          "What tricks would you teach it?",
          "Why is this animal habit cooler?"
        ],
        "starter": "I would rather have ... because a pet that ..."
      },
      {
        "id": "g7_s2_30",
        "category": "Travel Experiences",
        "optionA": {
          "text": "Go on a 3-day boat cruise along a calm river with campfire dinners",
          "emoji": "⛵"
        },
        "optionB": {
          "text": "Go on a scenic train ride through snowy pine forests with hot cocoa",
          "emoji": "🚂"
        },
        "prompts": [
          "What scenery would you take photos of?",
          "Explain why."
        ],
        "starter": "I would rather travel by ... because the feeling of ..."
      },
      {
        "id": "g7_s2_31",
        "category": "School Celebrations",
        "optionA": {
          "text": "Design the official art cover for your school yearbook",
          "emoji": "📘"
        },
        "optionB": {
          "text": "Design the giant colorful entrance banner for the school sports festival",
          "emoji": "🚩"
        },
        "prompts": [
          "Which project allows more creative expression?",
          "Explain your choice."
        ],
        "starter": "I would rather design ... because seeing my artwork on ..."
      }
    ],
    "stage3": [
      {
        "id": "g7_s3_01",
        "category": "Digital Life",
        "optionA": {
          "text": "Give up all video games for one whole month, but receive a brand new gaming console at the end",
          "emoji": "🎮"
        },
        "optionB": {
          "text": "Keep playing video games every day as normal, but you can never buy a new console for two years",
          "emoji": "🕹️"
        },
        "prompts": [
          "What is the biggest advantage of waiting?",
          "Would you have the patience to wait for a month?"
        ],
        "starter": "I would rather ... because waiting for one month is worth it because ..."
      },
      {
        "id": "g7_s3_02",
        "category": "School & Free Time",
        "optionA": {
          "text": "Have a 4-day school week with longer school hours each day from 8:00 AM to 4:30 PM",
          "emoji": "📅"
        },
        "optionB": {
          "text": "Have a traditional 5-day school week with regular shorter hours from 8:30 AM to 2:30 PM",
          "emoji": "🏫"
        },
        "prompts": [
          "What would you do with a 3-day weekend every week?",
          "What might be difficult about longer school days?"
        ],
        "starter": "I would rather choose ... because having three days off allows me to ..."
      },
      {
        "id": "g7_s3_03",
        "category": "Travel & Lifestyle",
        "optionA": {
          "text": "Travel to a new foreign country every single summer, but stay in simple budget hostels",
          "emoji": "✈️"
        },
        "optionB": {
          "text": "Travel to the same wonderful holiday beach town every year, but stay in a 5-star luxury hotel",
          "emoji": "🏨"
        },
        "prompts": [
          "Do you prefer new adventures or familiar comfort?",
          "Explain what matters more during travel."
        ],
        "starter": "I would rather ... because exploring new cultures is more exciting than ..."
      },
      {
        "id": "g7_s3_04",
        "category": "Communication",
        "optionA": {
          "text": "Only be able to communicate with your friends through voice calls and face-to-face talks",
          "emoji": "📞"
        },
        "optionB": {
          "text": "Only be able to communicate with your friends through written text messages and emojis",
          "emoji": "💬"
        },
        "prompts": [
          "What is the biggest disadvantage of your choice?",
          "How would your daily friendships change?"
        ],
        "starter": "I would rather communicate by ... because hearing someone's voice is ..."
      },
      {
        "id": "g7_s3_05",
        "category": "Skills & Talents",
        "optionA": {
          "text": "Be the smartest student in your grade who always gets 100% on every difficult exam",
          "emoji": "🧠"
        },
        "optionB": {
          "text": "Be the most creative artist in your school whose artwork is displayed in city galleries",
          "emoji": "🎨"
        },
        "prompts": [
          "Which achievement makes you prouder?",
          "Explain how this talent helps your future."
        ],
        "starter": "I would rather be ... because in my opinion, creativity / intelligence is ..."
      },
      {
        "id": "g7_s3_06",
        "category": "Food & Habits",
        "optionA": {
          "text": "Be able to eat whatever fast food you want without gaining weight, but you can never drink soda",
          "emoji": "🍔"
        },
        "optionB": {
          "text": "Be able to drink all delicious cold beverages you like, but you must eat vegetables every meal",
          "emoji": "🥗"
        },
        "prompts": [
          "Which tradeoff feels easier for you to maintain?",
          "Give two reasons for your decision."
        ],
        "starter": "I would rather ... because giving up soda is much easier than ..."
      },
      {
        "id": "g7_s3_07",
        "category": "Friendship",
        "optionA": {
          "text": "Always have a friend who tells you the honest truth, even when it is difficult to hear",
          "emoji": "🗣️"
        },
        "optionB": {
          "text": "Always have a friend who constantly encourages and cheers you up no matter what happens",
          "emoji": "🤗"
        },
        "prompts": [
          "Why is honesty or encouragement more valuable to you?",
          "What kind of friend do you try to be?"
        ],
        "starter": "I would rather have a friend who ... because true friendship requires ..."
      },
      {
        "id": "g7_s3_08",
        "category": "Technology",
        "optionA": {
          "text": "Have a personal robot assistant that does all your household chores and tidies your room",
          "emoji": "🤖"
        },
        "optionB": {
          "text": "Have a personal AI tutor that explains every school subject so clearly that you learn in minutes",
          "emoji": "💡"
        },
        "prompts": [
          "Which robot would give you more free time and peace of mind?",
          "Explain your choice."
        ],
        "starter": "I would rather have ... because when my homework is easy, ..."
      },
      {
        "id": "g7_s3_09",
        "category": "Living Environment",
        "optionA": {
          "text": "Live in a peaceful countryside farm surrounded by nature, fresh air, horses, and open fields",
          "emoji": "🌾"
        },
        "optionB": {
          "text": "Live in a penthouse apartment in the center of Tokyo with neon lights and subway access",
          "emoji": "🏙️"
        },
        "prompts": [
          "What would be the most exciting part of your daily routine?",
          "What would you miss about the other?"
        ],
        "starter": "I would rather live in ... because waking up to ... feels wonderful."
      },
      {
        "id": "g7_s3_10",
        "category": "School Experience",
        "optionA": {
          "text": "Attend a school where you wear comfortable casual clothes, but have strict tests every Friday",
          "emoji": "👕"
        },
        "optionB": {
          "text": "Attend a school with formal traditional uniforms, but with project-based grading and no tests",
          "emoji": "👔"
        },
        "prompts": [
          "Which grading method reflects your true skills better?",
          "Explain the main advantage."
        ],
        "starter": "I would rather attend a school with ... because I perform better when ..."
      },
      {
        "id": "g7_s3_11",
        "category": "Entertainment",
        "optionA": {
          "text": "Have unlimited VIP concert tickets to see your favorite music artists live whenever they tour",
          "emoji": "🎤"
        },
        "optionB": {
          "text": "Have front-row VIP season tickets to watch your favorite sports team play every home match",
          "emoji": "🏟️"
        },
        "prompts": [
          "Which stadium atmosphere is more thrilling for you?",
          "Who would you take as your guest?"
        ],
        "starter": "I would rather have ... because the energy of a live ... is unforgettable."
      },
      {
        "id": "g7_s3_12",
        "category": "Money & Gifts",
        "optionA": {
          "text": "Receive 10 dollars every single day for the next five years automatically in your pocket",
          "emoji": "💵"
        },
        "optionB": {
          "text": "Receive a one-time cash gift of 10,000 dollars right now today to spend or save",
          "emoji": "💰"
        },
        "prompts": [
          "Do you prefer steady daily income or a large lump sum?",
          "How would you budget the money?"
        ],
        "starter": "I would rather receive ... because having steady money allows me to ..."
      },
      {
        "id": "g7_s3_13",
        "category": "Adventure",
        "optionA": {
          "text": "Spend two weeks surviving on a deserted island with a friendly group of outdoor survivalists",
          "emoji": "🏝️"
        },
        "optionB": {
          "text": "Spend two weeks exploring deep uncharted caves and discovering glowing underground crystals",
          "emoji": "🔦"
        },
        "prompts": [
          "What survival or exploration skill would you rely on?",
          "Why is this adventure more exciting?"
        ],
        "starter": "I would rather explore ... because discovering ..."
      },
      {
        "id": "g7_s3_14",
        "category": "Future Inventions",
        "optionA": {
          "text": "Invent a teleportation doorway that takes you to school or anywhere in town in one second",
          "emoji": "🚪"
        },
        "optionB": {
          "text": "Invent a dream recorder machine that lets you re-watch your coolest dreams like movies",
          "emoji": "💭"
        },
        "prompts": [
          "How would this invention change your everyday routine?",
          "Why is it more fascinating?"
        ],
        "starter": "I would rather invent ... because it would solve the problem of ..."
      },
      {
        "id": "g7_s3_15",
        "category": "Sports & Fitness",
        "optionA": {
          "text": "Be the fastest runner in your whole city, winning gold medals in sprint races",
          "emoji": "🏃"
        },
        "optionB": {
          "text": "Be an amazing swimmer who can hold their breath underwater for five full minutes",
          "emoji": "🏊"
        },
        "prompts": [
          "How would you train your special talent?",
          "Compare the advantages of both skills."
        ],
        "starter": "I would rather be ... because being able to ... is an incredible advantage."
      },
      {
        "id": "g7_s3_16",
        "category": "Social Life",
        "optionA": {
          "text": "Be invited to every fun weekend party, but you are always busy and get tired easily",
          "emoji": "🎈"
        },
        "optionB": {
          "text": "Have a quiet weekend schedule with plenty of personal time for your hobbies and games",
          "emoji": "🧘"
        },
        "prompts": [
          "How do you recharge your energy after school?",
          "Explain why balance is important."
        ],
        "starter": "I would rather have ... because having quiet time helps me ..."
      },
      {
        "id": "g7_s3_17",
        "category": "Animal Friends",
        "optionA": {
          "text": "Have a miniature pet elephant the size of a cat that walks around your living room",
          "emoji": "🐘"
        },
        "optionB": {
          "text": "Have a gentle giant golden retriever the size of a pony that you can ride to the park",
          "emoji": "🐕"
        },
        "prompts": [
          "How would your neighbors react?",
          "Explain why your choice is more fun."
        ],
        "starter": "I would rather have a ... because having a pet that ..."
      },
      {
        "id": "g7_s3_18",
        "category": "Creativity",
        "optionA": {
          "text": "Design your own viral video game that millions of children around the world play",
          "emoji": "🎮"
        },
        "optionB": {
          "text": "Write an exciting fantasy mystery novel series that is made into a Hollywood movie",
          "emoji": "📖"
        },
        "prompts": [
          "What story or game mechanics would you create?",
          "Why does this creative project inspire you?"
        ],
        "starter": "I would rather create ... because storytelling through ... is exciting."
      },
      {
        "id": "g7_s3_19",
        "category": "School Rules",
        "optionA": {
          "text": "Allow students to bring their pets to school every Wednesday afternoon",
          "emoji": "🐶"
        },
        "optionB": {
          "text": "Allow students to choose their own cafeteria lunch menu every single day",
          "emoji": "🍕"
        },
        "prompts": [
          "What would be the biggest benefit of this new rule?",
          "Would it cause any classroom chaos?"
        ],
        "starter": "I would rather have the rule where ... because in my opinion, ..."
      },
      {
        "id": "g7_s3_20",
        "category": "Knowledge",
        "optionA": {
          "text": "Know every single fact about ancient history, dinosaurs, and lost civilizations",
          "emoji": "🦖"
        },
        "optionB": {
          "text": "Know all the scientific secrets of outer space, black holes, and alien planets",
          "emoji": "🪐"
        },
        "prompts": [
          "What historical or space mystery would you solve first?",
          "Explain your curiosity."
        ],
        "starter": "I would rather know about ... because space / history is full of ..."
      },
      {
        "id": "g7_s3_21",
        "category": "Super senses",
        "optionA": {
          "text": "Have eagle-sharp vision that lets you zoom in and see clearly for 2 kilometers",
          "emoji": "🦅"
        },
        "optionB": {
          "text": "Have dolphin-sensitive hearing that lets you hear whispers across a crowded building",
          "emoji": "👂"
        },
        "prompts": [
          "In what real-life situations would this sense be helpful?",
          "Which one is safer to have?"
        ],
        "starter": "I would rather have ... because being able to see / hear everything ..."
      },
      {
        "id": "g7_s3_22",
        "category": "Time Travel",
        "optionA": {
          "text": "Rewind time by 10 minutes whenever you make an embarrassing mistake in class",
          "emoji": "⏪"
        },
        "optionB": {
          "text": "Pause time for 1 hour every day while you walk around and relax freely",
          "emoji": "⏸️"
        },
        "prompts": [
          "How would you use this special time power?",
          "Explain why it prevents stress."
        ],
        "starter": "I would rather be able to ... because whenever I am in an awkward situation, ..."
      },
      {
        "id": "g7_s3_23",
        "category": "Environment",
        "optionA": {
          "text": "Plant 1,000 fruit trees in your town and feed local families fresh organic snacks",
          "emoji": "🌳"
        },
        "optionB": {
          "text": "Clean up all plastic trash from a local river and build a public eco-park",
          "emoji": "🏞️"
        },
        "prompts": [
          "What is the biggest community benefit?",
          "Why is environmental action important for teens?"
        ],
        "starter": "I would rather ... because protecting nature by ... creates a lasting impact."
      },
      {
        "id": "g7_s3_24",
        "category": "Food Mastery",
        "optionA": {
          "text": "Know how to bake the most incredible artisan chocolate pastries in your city",
          "emoji": "🥐"
        },
        "optionB": {
          "text": "Know how to make the crunchiest stone-baked Italian pizzas with secret sauces",
          "emoji": "🍕"
        },
        "prompts": [
          "Who would you invite over to taste your dishes?",
          "Why is that culinary skill cooler?"
        ],
        "starter": "I would rather know how to make ... because sharing food with friends ..."
      },
      {
        "id": "g7_s3_25",
        "category": "Personal Space",
        "optionA": {
          "text": "Have your own private gaming room with huge screens, snacks, and surround sound",
          "emoji": "🕹️"
        },
        "optionB": {
          "text": "Have a private backyard skatepark and swimming pool to share with friends",
          "emoji": "🛹"
        },
        "prompts": [
          "Which space would bring you more happiness during the holidays?",
          "Explain your choice."
        ],
        "starter": "I would rather have ... because spending time outdoors / indoors with friends ..."
      },
      {
        "id": "g7_s3_26",
        "category": "School Facilities",
        "optionA": {
          "text": "Have free access to a heated indoor swimming pool after school every day",
          "emoji": "🏊"
        },
        "optionB": {
          "text": "Have free access to a professional school recording and podcast studio",
          "emoji": "🎙️"
        },
        "prompts": [
          "What would you practice or create there?",
          "What is the biggest advantage?"
        ],
        "starter": "I would rather have access to ... because I would love to ..."
      },
      {
        "id": "g7_s3_27",
        "category": "Morning Energy",
        "optionA": {
          "text": "Wake up 30 minutes earlier to sit down for a delicious warm breakfast every morning",
          "emoji": "🥞"
        },
        "optionB": {
          "text": "Sleep 30 extra minutes, rush out the door, and grab a quick snack on the go",
          "emoji": "🏃"
        },
        "prompts": [
          "How does your morning routine affect your mood at school?",
          "Explain your choice."
        ],
        "starter": "I would rather ... because having extra sleep / a calm breakfast helps me ..."
      },
      {
        "id": "g7_s3_28",
        "category": "Friendship Qualities",
        "optionA": {
          "text": "Have a friend who always shares their newest video games and gadgets with you",
          "emoji": "🎮"
        },
        "optionB": {
          "text": "Have a friend who patiently explains difficult math lessons whenever you are stuck",
          "emoji": "📐"
        },
        "prompts": [
          "Which quality is more valuable in a long-term friendship?",
          "Explain why."
        ],
        "starter": "I would rather have a friend who ... because true support means ..."
      },
      {
        "id": "g7_s3_29",
        "category": "Community Action",
        "optionA": {
          "text": "Volunteer at a community garden planting sunflowers and harvesting fresh vegetables",
          "emoji": "🌻"
        },
        "optionB": {
          "text": "Volunteer at a local children's library organizing fun storytelling clubs",
          "emoji": "📚"
        },
        "prompts": [
          "Which volunteer activity makes you feel more fulfilled?",
          "Give two reasons."
        ],
        "starter": "I would rather volunteer by ... because connecting with ..."
      },
      {
        "id": "g7_s3_30",
        "category": "Magical Gadgets",
        "optionA": {
          "text": "Wear high-tech sneakers that let you jump 3 meters high into the air effortlessly",
          "emoji": "👟"
        },
        "optionB": {
          "text": "Wear a lightweight jacket that automatically keeps you at the perfect temperature in any weather",
          "emoji": "🧥"
        },
        "prompts": [
          "How would this item help you every day?",
          "Explain the main benefit."
        ],
        "starter": "I would rather have ... because never feeling too cold / being able to jump high ..."
      },
      {
        "id": "g7_s3_31",
        "category": "Mastering Skills",
        "optionA": {
          "text": "Learn how to play chess like a grandmaster, predicting every opponent's move",
          "emoji": "♟️"
        },
        "optionB": {
          "text": "Learn 20 incredible magic sleight-of-hand card tricks that baffle everybody",
          "emoji": "🪄"
        },
        "prompts": [
          "Who would you show this skill to first?",
          "Why is it more impressive?"
        ],
        "starter": "I would rather master ... because performing / thinking strategically ..."
      }
    ],
    "stage4": [
      {
        "id": "g7_s4_01",
        "category": "Hypothetical Dilemmas",
        "optionA": {
          "text": "Be the absolute star player on a sports team that frequently loses tough matches",
          "emoji": "🌟"
        },
        "optionB": {
          "text": "Be a regular substitute player on a championship team that wins first place trophies",
          "emoji": "🏆"
        },
        "prompts": [
          "Compare personal glory with team victory.",
          "Which role teaches you more about teamwork and perseverance?"
        ],
        "starter": "I would rather be ... because in my opinion, winning as a team / showing your personal best is more important because ..."
      },
      {
        "id": "g7_s4_02",
        "category": "Future Choices",
        "optionA": {
          "text": "Have a career where you travel around the world constantly but rarely sleep in your own bed",
          "emoji": "🌍"
        },
        "optionB": {
          "text": "Have a career in your hometown with regular predictable hours and daily time with family",
          "emoji": "🏡"
        },
        "prompts": [
          "What are the biggest advantages and disadvantages of each lifestyle?",
          "What kind of life do you picture for yourself?"
        ],
        "starter": "I would rather choose a career that ... because while traveling is thrilling / being close to family provides ..."
      },
      {
        "id": "g7_s4_03",
        "category": "Decision Making",
        "optionA": {
          "text": "Know the answer to every question on all upcoming school exams, but you cannot share with anyone",
          "emoji": "🤫"
        },
        "optionB": {
          "text": "Have the ability to give every friend in your class good luck on tests, but you must study normally",
          "emoji": "🍀"
        },
        "prompts": [
          "Would your classmates appreciate your choice?",
          "Explain the moral reasoning behind your decision."
        ],
        "starter": "I would rather ... because helping others succeed / securing my own future is ..."
      },
      {
        "id": "g7_s4_04",
        "category": "Hypothetical World",
        "optionA": {
          "text": "Live in a world where everyone always speaks their honest thoughts out loud without filters",
          "emoji": "📢"
        },
        "optionB": {
          "text": "Live in a world where nobody can ever disagree with each other and everyone always says yes",
          "emoji": "🤝"
        },
        "prompts": [
          "What problems might arise in each of these worlds?",
          "Compare which society is healthier in the long run."
        ],
        "starter": "I would rather live in a world where ... because even though it might cause conflicts, ..."
      },
      {
        "id": "g7_s4_05",
        "category": "Personal Growth",
        "optionA": {
          "text": "Face a difficult challenge right now that makes you feel nervous but teaches you lifelong courage",
          "emoji": "🧗"
        },
        "optionB": {
          "text": "Stay completely in your comfort zone where everything is safe and easy, but you never learn new skills",
          "emoji": "🛋️"
        },
        "prompts": [
          "Why is stepping outside your comfort zone important for teenagers?",
          "Give an example from your own life."
        ],
        "starter": "I would rather ... because overcoming challenges helps a person ..."
      },
      {
        "id": "g7_s4_06",
        "category": "Technology & Humanity",
        "optionA": {
          "text": "Have an artificial intelligence chip in your brain that stores every encyclopedia fact in history",
          "emoji": "🤖"
        },
        "optionB": {
          "text": "Have an extraordinary photographic memory that naturally remembers every moment you have ever lived",
          "emoji": "🧠"
        },
        "prompts": [
          "Which type of intelligence is more human and meaningful to you?",
          "Explain your perspective."
        ],
        "starter": "I would rather have ... because remembering personal human experiences is ..."
      },
      {
        "id": "g7_s4_07",
        "category": "Ethics & Choices",
        "optionA": {
          "text": "Win a prestigious school contest by doing all the hard research and preparation completely alone",
          "emoji": "👤"
        },
        "optionB": {
          "text": "Win that same contest as part of a four-person team where everyone contributed different ideas",
          "emoji": "👥"
        },
        "prompts": [
          "What makes collaboration more or less rewarding than solo effort?",
          "How does this prepare you for the future?"
        ],
        "starter": "I would rather win ... because sharing the joy of achievement with teammates ..."
      },
      {
        "id": "g7_s4_08",
        "category": "Lifestyle Choices",
        "optionA": {
          "text": "Live in a cozy small house on an island with crystal-clear beaches and fresh ocean air",
          "emoji": "🏝️"
        },
        "optionB": {
          "text": "Live in a modern smart apartment at the top of a skyscraper in a busy international capital",
          "emoji": "🏙️"
        },
        "prompts": [
          "Compare the daily pace of life in both places.",
          "Where would you feel most creative and relaxed?"
        ],
        "starter": "I would rather live in ... because the quiet rhythm of the island / energetic vibe of the city ..."
      },
      {
        "id": "g7_s4_09",
        "category": "Time & Memories",
        "optionA": {
          "text": "Be able to revisit your favorite childhood birthday memories whenever you close your eyes",
          "emoji": "🎈"
        },
        "optionB": {
          "text": "Be able to catch a quick 10-second glimpse of where you will be living 15 years from today",
          "emoji": "🔮"
        },
        "prompts": [
          "Is looking back at warm memories or peeking into the future more comforting?",
          "Explain your choice."
        ],
        "starter": "I would rather ... because seeing my future might spoil the surprise, whereas ..."
      },
      {
        "id": "g7_s4_10",
        "category": "Friendship & Loyalty",
        "optionA": {
          "text": "Stand up for a friend who is being treated unfairly, even if the whole class disagrees with you",
          "emoji": "🛡️"
        },
        "optionB": {
          "text": "Stay quiet to avoid drawing attention to yourself and talk to your friend privately later",
          "emoji": "🤐"
        },
        "prompts": [
          "What requires more courage in a classroom setting?",
          "What would you want a friend to do for you?"
        ],
        "starter": "I would rather ... because standing up for what is right shows ..."
      },
      {
        "id": "g7_s4_11",
        "category": "Talents & Passions",
        "optionA": {
          "text": "Be naturally gifted at mathematics and science so you can invent useful medical equipment",
          "emoji": "🔬"
        },
        "optionB": {
          "text": "Be naturally gifted at music and writing so your songs inspire millions of people around the world",
          "emoji": "🎵"
        },
        "prompts": [
          "Compare how science and art improve our world.",
          "Which contribution speaks to your heart?"
        ],
        "starter": "I would rather be gifted at ... because helping humanity through ... has a profound impact."
      },
      {
        "id": "g7_s4_12",
        "category": "School & Education",
        "optionA": {
          "text": "Attend a school where you spend half the day learning outdoors in nature and gardens",
          "emoji": "🌲"
        },
        "optionB": {
          "text": "Attend a high-tech school equipped with virtual reality pods and robotics laboratories",
          "emoji": "🥽"
        },
        "prompts": [
          "Which learning style prepares students better for real life?",
          "Explain the benefits of your choice."
        ],
        "starter": "I would rather attend a school that ... because learning through practical experience ..."
      },
      {
        "id": "g7_s4_13",
        "category": "Global Impact",
        "optionA": {
          "text": "Discover a clean renewable energy source that powers all homes for free forever",
          "emoji": "⚡"
        },
        "optionB": {
          "text": "Discover a fast agricultural method that provides free nutritious food to all hungry communities",
          "emoji": "🌾"
        },
        "prompts": [
          "Which global problem is more urgent in your opinion?",
          "Explain how your discovery would change history."
        ],
        "starter": "I would rather discover ... because ending hunger / providing clean energy is critical because ..."
      },
      {
        "id": "g7_s4_14",
        "category": "Adventure & Risk",
        "optionA": {
          "text": "Be among the first teenage astronauts selected to explore a newly built research base on Mars",
          "emoji": "🚀"
        },
        "optionB": {
          "text": "Be the leader of a deep-sea submarine expedition exploring the deepest ocean trenches on Earth",
          "emoji": "🌊"
        },
        "prompts": [
          "What are the biggest dangers of each mission?",
          "Why does space or the deep ocean captivate you?"
        ],
        "starter": "I would rather explore ... because the mystery of space / the deep ocean represents ..."
      },
      {
        "id": "g7_s4_15",
        "category": "Communication & Influence",
        "optionA": {
          "text": "Deliver an inspiring speech in front of 5,000 students at an international youth conference",
          "emoji": "🎙️"
        },
        "optionB": {
          "text": "Write an influential article that is published and read by millions of people in newspapers",
          "emoji": "📰"
        },
        "prompts": [
          "Which form of communication creates stronger emotion?",
          "How would you prepare your message?"
        ],
        "starter": "I would rather ... because speaking directly to a live audience / writing thoughtfully allows me to ..."
      },
      {
        "id": "g7_s4_16",
        "category": "Happiness & Balance",
        "optionA": {
          "text": "Spend your teenage years trying ten different hobbies to discover what you truly enjoy",
          "emoji": "🎨"
        },
        "optionB": {
          "text": "Dedicate your teenage years to mastering one specific sport or instrument to become elite",
          "emoji": "🎯"
        },
        "prompts": [
          "Is it better to have broad experiences or deep mastery early in life?",
          "Explain your philosophy."
        ],
        "starter": "I would rather ... because exploring many interests gives you a well-rounded perspective, whereas ..."
      },
      {
        "id": "g7_s4_17",
        "category": "Social Media",
        "optionA": {
          "text": "Live in a community where social media is completely replaced by real-life neighborhood clubs",
          "emoji": "🏘️"
        },
        "optionB": {
          "text": "Live in a futuristic smart city where all communication and entertainment happens online",
          "emoji": "🌐"
        },
        "prompts": [
          "What are the psychological benefits of face-to-face interaction?",
          "Explain your preference."
        ],
        "starter": "I would rather live in ... because real human connection is more authentic than ..."
      },
      {
        "id": "g7_s4_18",
        "category": "Hypothetical Powers",
        "optionA": {
          "text": "Have the power to instantly heal any minor cut, fever, or illness in your family and friends",
          "emoji": "🩹"
        },
        "optionB": {
          "text": "Have the power to create beautiful sunny weather and rainbows whenever someone feels sad",
          "emoji": "🌈"
        },
        "prompts": [
          "Which power brings more comfort to the people you love?",
          "Explain why you chose it."
        ],
        "starter": "I would rather have the power to ... because keeping my loved ones healthy / cheerful is ..."
      },
      {
        "id": "g7_s4_19",
        "category": "Self-Reliance",
        "optionA": {
          "text": "Learn how to build your own wooden cabin and grow your own food from scratch",
          "emoji": "🔨"
        },
        "optionB": {
          "text": "Learn how to build your own computer software and launch a digital startup company",
          "emoji": "💻"
        },
        "prompts": [
          "Which type of independence is more valuable in the 21st century?",
          "Explain your reasoning."
        ],
        "starter": "I would rather learn how to ... because understanding technology / self-reliance gives me ..."
      },
      {
        "id": "g7_s4_20",
        "category": "Wisdom vs Experience",
        "optionA": {
          "text": "Be able to have a one-hour conversation with the wisest person in human history",
          "emoji": "📜"
        },
        "optionB": {
          "text": "Be able to spend one full day living as any person in the world to understand their life",
          "emoji": "👥"
        },
        "prompts": [
          "How does empathy or wisdom shape how we treat others?",
          "Who would you choose to talk to or live as?"
        ],
        "starter": "I would rather ... because experiencing someone else's daily life builds deep empathy because ..."
      },
      {
        "id": "g7_s4_21",
        "category": "Creativity & Expression",
        "optionA": {
          "text": "Create a world-famous animated film that teaches children kindness and friendship",
          "emoji": "🎬"
        },
        "optionB": {
          "text": "Create a revolutionary interactive museum where people learn science by playing games",
          "emoji": "🏛️"
        },
        "prompts": [
          "Which project leaves a stronger educational legacy?",
          "Explain why you chose it."
        ],
        "starter": "I would rather create ... because entertaining and educating young people through ... is powerful."
      },
      {
        "id": "g7_s4_22",
        "category": "Honesty & Consequences",
        "optionA": {
          "text": "Always admit your mistakes immediately, even when you know you will receive a small penalty",
          "emoji": "⚖️"
        },
        "optionB": {
          "text": "Try to fix the mistake quietly on your own before anyone notices what went wrong",
          "emoji": "🤫"
        },
        "prompts": [
          "What is the best way to handle personal errors?",
          "How does this build trust with parents and teachers?"
        ],
        "starter": "I would rather ... because taking immediate responsibility builds character because ..."
      },
      {
        "id": "g7_s4_23",
        "category": "Future Cities",
        "optionA": {
          "text": "Design eco-cities covered in rooftop gardens, solar panels, and bicycle-only streets",
          "emoji": "🌿"
        },
        "optionB": {
          "text": "Design high-speed floating cities on the ocean that travel to avoid storms and bad weather",
          "emoji": "🚢"
        },
        "prompts": [
          "Which urban design is more practical for the environment?",
          "Explain your vision."
        ],
        "starter": "I would rather design ... because green sustainable cities help protect ..."
      },
      {
        "id": "g7_s4_24",
        "category": "Learning Languages",
        "optionA": {
          "text": "Speak five different languages fluently, allowing you to connect with people everywhere",
          "emoji": "🌍"
        },
        "optionB": {
          "text": "Be a master public speaker in your native language who can persuade anyone in seconds",
          "emoji": "🎤"
        },
        "prompts": [
          "Is global reach or deep local eloquence more useful?",
          "Give an example of how you would use it."
        ],
        "starter": "I would rather ... because being able to communicate across different cultures ..."
      },
      {
        "id": "g7_s4_25",
        "category": "Life Legacy",
        "optionA": {
          "text": "Be remembered 100 years from now as someone who was always exceptionally kind and generous",
          "emoji": "❤️"
        },
        "optionB": {
          "text": "Be remembered 100 years from now as a brilliant inventor who revolutionized everyday technology",
          "emoji": "💡"
        },
        "prompts": [
          "What is the true measure of a meaningful life?",
          "Explain the difference between character and achievement."
        ],
        "starter": "I would rather be remembered for ... because at the end of the day, kindness / innovation ..."
      },
      {
        "id": "g7_s4_26",
        "category": "Ethics & Honesty",
        "optionA": {
          "text": "Hand in a lost wallet containing 100 dollars to the principal's office without taking any credit or reward",
          "emoji": "💼"
        },
        "optionB": {
          "text": "Help an elderly neighbor carry heavy groceries and garden work all weekend to earn an honest 50 dollars",
          "emoji": "🤝"
        },
        "prompts": [
          "Compare moral duty with honest hard work.",
          "What makes you feel proudest?"
        ],
        "starter": "I would rather ... because doing the right thing quietly / earning money through helpful labor ..."
      },
      {
        "id": "g7_s4_27",
        "category": "Courage & Stepping Up",
        "optionA": {
          "text": "Audition for the main speaking role in the annual school drama play even though your knees shake",
          "emoji": "🎭"
        },
        "optionB": {
          "text": "Work as the chief stage lighting and audio technician where you feel calm, confident, and unnoticed",
          "emoji": "💡"
        },
        "prompts": [
          "Why is conquering stage fright a valuable milestone for teens?",
          "Explain your choice."
        ],
        "starter": "I would rather ... because stepping onto the stage / managing essential technical work ..."
      },
      {
        "id": "g7_s4_28",
        "category": "Future Career Vision",
        "optionA": {
          "text": "Spend your career designing solar-powered boats that clean up microplastics from the oceans",
          "emoji": "🌊"
        },
        "optionB": {
          "text": "Spend your career designing zero-emission electric cargo airplanes that connect distant towns",
          "emoji": "✈️"
        },
        "prompts": [
          "Which environmental innovation makes a larger impact on Earth?",
          "Explain your reasoning."
        ],
        "starter": "I would rather design ... because saving ocean ecosystems / reducing aviation emissions is ..."
      },
      {
        "id": "g7_s4_29",
        "category": "Knowledge vs Adventure",
        "optionA": {
          "text": "Spend three years reading 500 great books in a peaceful historical library castle",
          "emoji": "🏰"
        },
        "optionB": {
          "text": "Spend three years traveling across 50 countries with only a backpack and a travel journal",
          "emoji": "🎒"
        },
        "prompts": [
          "Compare deep literary knowledge with real-world travel experience.",
          "Which builds stronger wisdom?"
        ],
        "starter": "I would rather ... because experiencing diverse cultures / absorbing centuries of written wisdom ..."
      },
      {
        "id": "g7_s4_30",
        "category": "Collaboration & Credit",
        "optionA": {
          "text": "Work on an innovative robotics team where all 5 members share equal credit and applause",
          "emoji": "👥"
        },
        "optionB": {
          "text": "Conduct an impressive science experiment completely on your own and receive sole recognition",
          "emoji": "👤"
        },
        "prompts": [
          "What are the unique challenges of team collaboration versus solo effort?",
          "Explain your mindset."
        ],
        "starter": "I would rather ... because collaborating with friends / relying solely on my own perseverance ..."
      },
      {
        "id": "g7_s4_31",
        "category": "Resilience & Learning",
        "optionA": {
          "text": "Try a brand new difficult sport and lose your first 5 competitive matches before earning your first win",
          "emoji": "🥊"
        },
        "optionB": {
          "text": "Play a sport you already know very well and easily win every single tournament match",
          "emoji": "🥇"
        },
        "prompts": [
          "Why is losing sometimes the best teacher in sports?",
          "Explain how resilience shapes character."
        ],
        "starter": "I would rather ... because struggling through tough losses teaches you resilience, whereas ..."
      }
    ]
  },
  "grade8": {
    "stage1": [
      {
        "id": "g8_s1_01",
        "category": "Entertainment",
        "optionA": {
          "text": "Stream movies at home on your couch",
          "emoji": "🍿"
        },
        "optionB": {
          "text": "Watch movies on a giant cinema screen",
          "emoji": "🎬"
        },
        "prompts": [
          "Why do you prefer this movie experience?",
          "Tell us why."
        ],
        "starter": "I would rather watch movies ... because ..."
      },
      {
        "id": "g8_s1_02",
        "category": "Music",
        "optionA": {
          "text": "Listen to music through headphones all day",
          "emoji": "🎧"
        },
        "optionB": {
          "text": "Play music out loud on a room speaker",
          "emoji": "🔊"
        },
        "prompts": [
          "Why is this listening style better for you?",
          "Explain your preference."
        ],
        "starter": "I would rather listen ... because ..."
      },
      {
        "id": "g8_s1_03",
        "category": "Study Habits",
        "optionA": {
          "text": "Study alone in a quiet bedroom",
          "emoji": "📖"
        },
        "optionB": {
          "text": "Study in a group with your classmates",
          "emoji": "👥"
        },
        "prompts": [
          "How do you concentrate best?",
          "Why does this work for you?"
        ],
        "starter": "I would rather study ... because ..."
      },
      {
        "id": "g8_s1_04",
        "category": "Lifestyle",
        "optionA": {
          "text": "Live in a bustling energetic metropolis",
          "emoji": "🏙️"
        },
        "optionB": {
          "text": "Live in a peaceful coastal beach town",
          "emoji": "🏖️"
        },
        "prompts": [
          "What kind of lifestyle fits you better?",
          "Tell us why you picked it."
        ],
        "starter": "I would rather live in ... because ..."
      },
      {
        "id": "g8_s1_05",
        "category": "Social Media",
        "optionA": {
          "text": "Scroll through short vertical video feeds",
          "emoji": "📱"
        },
        "optionB": {
          "text": "Watch long high-quality YouTube videos",
          "emoji": "💻"
        },
        "prompts": [
          "Which type of content is more entertaining?",
          "Give a quick reason."
        ],
        "starter": "I would rather watch ... because ..."
      },
      {
        "id": "g8_s1_06",
        "category": "Fitness",
        "optionA": {
          "text": "Go to the gym and lift weights",
          "emoji": "🏋️"
        },
        "optionB": {
          "text": "Play competitive team sports outdoors",
          "emoji": "🏀"
        },
        "prompts": [
          "Why is this workout more motivating for you?",
          "Tell us why."
        ],
        "starter": "I would rather ... because ..."
      },
      {
        "id": "g8_s1_07",
        "category": "Food",
        "optionA": {
          "text": "Cook your own delicious creative dinners",
          "emoji": "🍳"
        },
        "optionB": {
          "text": "Order takeout from your favorite restaurants",
          "emoji": "🥡"
        },
        "prompts": [
          "What is the biggest benefit of your choice?",
          "Why do you prefer it?"
        ],
        "starter": "I would rather ... because ..."
      },
      {
        "id": "g8_s1_08",
        "category": "Vacation",
        "optionA": {
          "text": "Take an exciting fast-paced city sightseeing trip",
          "emoji": "🗽"
        },
        "optionB": {
          "text": "Take a calm relaxing countryside cabin retreat",
          "emoji": "🌲"
        },
        "prompts": [
          "What would you do on the first day?",
          "Why is that vacation more appealing?"
        ],
        "starter": "I would rather take a ... because ..."
      },
      {
        "id": "g8_s1_09",
        "category": "Technology",
        "optionA": {
          "text": "Use an ultra-thin laptop for all schoolwork",
          "emoji": "💻"
        },
        "optionB": {
          "text": "Use a touchscreen tablet with a smart stylus pen",
          "emoji": "🖊️"
        },
        "prompts": [
          "Which device is more productive for a student?",
          "Explain why."
        ],
        "starter": "I would rather use a ... because ..."
      },
      {
        "id": "g8_s1_10",
        "category": "Free Time",
        "optionA": {
          "text": "Go out to a mall or cafe with a group of friends",
          "emoji": "🥤"
        },
        "optionB": {
          "text": "Stay home and binge-watch an exciting new series",
          "emoji": "📺"
        },
        "prompts": [
          "How do you like to recharge on weekends?",
          "Tell us why."
        ],
        "starter": "I would rather ... because on weekends I like to ..."
      },
      {
        "id": "g8_s1_11",
        "category": "Shopping",
        "optionA": {
          "text": "Buy clothes and shoes online with home delivery",
          "emoji": "📦"
        },
        "optionB": {
          "text": "Go shopping in person at shopping centers",
          "emoji": "🛍️"
        },
        "prompts": [
          "Why is convenience or trying things on more important?",
          "Explain your choice."
        ],
        "starter": "I would rather shop ... because ..."
      },
      {
        "id": "g8_s1_12",
        "category": "Morning Routine",
        "optionA": {
          "text": "Wake up early and have a relaxed breakfast",
          "emoji": "🍳"
        },
        "optionB": {
          "text": "Sleep in until the last minute and rush out",
          "emoji": "⏰"
        },
        "prompts": [
          "What does your real morning usually look like?",
          "Why do you choose this?"
        ],
        "starter": "I would rather ... because in the morning ..."
      },
      {
        "id": "g8_s1_13",
        "category": "Gaming",
        "optionA": {
          "text": "Play fast competitive multiplayer online games",
          "emoji": "🎯"
        },
        "optionB": {
          "text": "Play rich story-driven single-player adventure games",
          "emoji": "🗺️"
        },
        "prompts": [
          "Do you prefer competition or deep storylines?",
          "Explain your choice."
        ],
        "starter": "I would rather play ... because ..."
      },
      {
        "id": "g8_s1_14",
        "category": "Travel",
        "optionA": {
          "text": "Travel to ancient historical European cities",
          "emoji": "🏛️"
        },
        "optionB": {
          "text": "Travel to futuristic Asian tech capitals",
          "emoji": "🚅"
        },
        "prompts": [
          "What architecture or culture interests you more?",
          "Tell us why."
        ],
        "starter": "I would rather travel to ... because ..."
      },
      {
        "id": "g8_s1_15",
        "category": "Fashion",
        "optionA": {
          "text": "Dress in comfortable athletic streetwear",
          "emoji": "👟"
        },
        "optionB": {
          "text": "Dress in elegant smart-casual outfits",
          "emoji": "👔"
        },
        "prompts": [
          "How does your outfit affect your confidence?",
          "Explain why you chose it."
        ],
        "starter": "I would rather dress in ... because ..."
      },
      {
        "id": "g8_s1_16",
        "category": "Communication",
        "optionA": {
          "text": "Send quick voice messages back and forth",
          "emoji": "🎙️"
        },
        "optionB": {
          "text": "Type fast text messages with GIFs and memes",
          "emoji": "💬"
        },
        "prompts": [
          "Which communication style feels more natural for you?",
          "Why?"
        ],
        "starter": "I would rather send ... because ..."
      },
      {
        "id": "g8_s1_17",
        "category": "Pets",
        "optionA": {
          "text": "Have an energetic dog you can take on runs",
          "emoji": "🐕"
        },
        "optionB": {
          "text": "Have a chill calm cat that sits on your lap",
          "emoji": "🐈"
        },
        "prompts": [
          "Which pet personality matches your energy?",
          "Tell us why."
        ],
        "starter": "I would rather have a ... because ..."
      },
      {
        "id": "g8_s1_18",
        "category": "Seasons",
        "optionA": {
          "text": "Enjoy warm autumn leaves and cool breezes",
          "emoji": "🍂"
        },
        "optionB": {
          "text": "Enjoy fresh spring flowers and sunny days",
          "emoji": "🌸"
        },
        "prompts": [
          "What is your favorite thing about this season?",
          "Why do you like it?"
        ],
        "starter": "I would rather have ... because ..."
      },
      {
        "id": "g8_s1_19",
        "category": "Reading",
        "optionA": {
          "text": "Read digital e-books on a tablet screen",
          "emoji": "📱"
        },
        "optionB": {
          "text": "Read physical paper books with real pages",
          "emoji": "📖"
        },
        "prompts": [
          "Why is tactile paper or digital convenience better?",
          "Explain your choice."
        ],
        "starter": "I would rather read ... because ..."
      },
      {
        "id": "g8_s1_20",
        "category": "School Projects",
        "optionA": {
          "text": "Give an energetic presentation on a stage",
          "emoji": "🎤"
        },
        "optionB": {
          "text": "Write a detailed creative report with graphics",
          "emoji": "📊"
        },
        "prompts": [
          "Which format shows your strengths better?",
          "Why do you prefer it?"
        ],
        "starter": "I would rather ... because ..."
      },
      {
        "id": "g8_s1_21",
        "category": "Desserts",
        "optionA": {
          "text": "Eat rich dark chocolate lava cake",
          "emoji": "🍫"
        },
        "optionB": {
          "text": "Eat fresh fruit tarts with vanilla custard",
          "emoji": "🥧"
        },
        "prompts": [
          "What flavor profile do you enjoy more?",
          "Tell us why."
        ],
        "starter": "I would rather eat ... because ..."
      },
      {
        "id": "g8_s1_22",
        "category": "Photography",
        "optionA": {
          "text": "Take photos of candid moments with friends",
          "emoji": "📸"
        },
        "optionB": {
          "text": "Take photos of dramatic nature landscapes",
          "emoji": "🌄"
        },
        "prompts": [
          "What makes a great photograph in your opinion?",
          "Explain your answer."
        ],
        "starter": "I would rather take photos of ... because ..."
      },
      {
        "id": "g8_s1_23",
        "category": "Weekend Pace",
        "optionA": {
          "text": "Have a fully packed schedule with events and trips",
          "emoji": "🗓️"
        },
        "optionB": {
          "text": "Have completely free open time with zero plans",
          "emoji": "☕"
        },
        "prompts": [
          "Do you prefer excitement or total freedom?",
          "Why?"
        ],
        "starter": "I would rather have ... because ..."
      },
      {
        "id": "g8_s1_24",
        "category": "Workspace",
        "optionA": {
          "text": "Work in a bright bustling cafe with background buzz",
          "emoji": "☕"
        },
        "optionB": {
          "text": "Work in a silent tidy room with natural light",
          "emoji": "🪴"
        },
        "prompts": [
          "How does your environment help your focus?",
          "Tell us why."
        ],
        "starter": "I would rather work in ... because ..."
      },
      {
        "id": "g8_s1_25",
        "category": "Exploration",
        "optionA": {
          "text": "Explore a modern art and science museum",
          "emoji": "🏛️"
        },
        "optionB": {
          "text": "Explore a sprawling wildlife safari reserve",
          "emoji": "🦁"
        },
        "prompts": [
          "Which exhibition would teach you more fascinating things?",
          "Explain why."
        ],
        "starter": "I would rather explore ... because ..."
      },
      {
        "id": "g8_s1_26",
        "category": "Cinema & Movies",
        "optionA": {
          "text": "Watch high-energy action-packed superhero blockbuster movies",
          "emoji": "💥"
        },
        "optionB": {
          "text": "Watch suspenseful psychological mystery thrillers with twist endings",
          "emoji": "🕵️"
        },
        "prompts": [
          "Which movie style keeps you on the edge of your seat?",
          "Tell us why."
        ],
        "starter": "I would rather watch ... because ..."
      },
      {
        "id": "g8_s1_27",
        "category": "Dining Vibe",
        "optionA": {
          "text": "Eat dinner at a bustling rooftop terrace cafe overlooking the city skyline",
          "emoji": "🌆"
        },
        "optionB": {
          "text": "Eat dinner at a cozy, hidden underground ramen bar with warm lanterns",
          "emoji": "🍜"
        },
        "prompts": [
          "What ambiance do you enjoy more?",
          "Explain why."
        ],
        "starter": "I would rather eat at ... because the atmosphere of ..."
      },
      {
        "id": "g8_s1_28",
        "category": "Audio Tech",
        "optionA": {
          "text": "Use premium noise-cancelling over-ear studio headphones",
          "emoji": "🎧"
        },
        "optionB": {
          "text": "Use compact wireless earbuds that fit right into your pocket",
          "emoji": "👂"
        },
        "prompts": [
          "Is sound quality or portability more important to you?",
          "Tell us why."
        ],
        "starter": "I would rather use ... because ..."
      },
      {
        "id": "g8_s1_29",
        "category": "Afternoon Hangout",
        "optionA": {
          "text": "Go bowling and play arcade games with friends on a Friday afternoon",
          "emoji": "🎳"
        },
        "optionB": {
          "text": "Hang out at an outdoor community skatepark and listen to music",
          "emoji": "🛹"
        },
        "prompts": [
          "Which hangout matches your Friday energy?",
          "Explain your choice."
        ],
        "starter": "I would rather go to ... because ..."
      },
      {
        "id": "g8_s1_30",
        "category": "Digital vs Traditional Art",
        "optionA": {
          "text": "Create 3D digital character models and animations on a PC",
          "emoji": "🖥️"
        },
        "optionB": {
          "text": "Draw realistic pencil and charcoal portraits in a sketchbook",
          "emoji": "✏️"
        },
        "prompts": [
          "Which artistic medium feels more expressive for you?",
          "Tell us why."
        ],
        "starter": "I would rather create ... because ..."
      },
      {
        "id": "g8_s1_31",
        "category": "Refreshing Drinks",
        "optionA": {
          "text": "Drink cold iced lemon peach tea on warm summer days",
          "emoji": "🍹"
        },
        "optionB": {
          "text": "Drink sparkling mineral water with fresh lime and mint",
          "emoji": "🧊"
        },
        "prompts": [
          "Which beverage is more refreshing?",
          "Explain your taste."
        ],
        "starter": "I would rather drink ... because ..."
      }
    ],
    "stage2": [
      {
        "id": "g8_s2_01",
        "category": "Time Management",
        "optionA": {
          "text": "Finish all your school projects three days before the deadline and relax",
          "emoji": "🗓️"
        },
        "optionB": {
          "text": "Work under pressure the night before and produce your most creative work",
          "emoji": "⚡"
        },
        "prompts": [
          "Give two reasons for your working style.",
          "What is the biggest advantage of your method?"
        ],
        "starter": "I would rather ... because first, ... and second, ..."
      },
      {
        "id": "g8_s2_02",
        "category": "Friendship & Social",
        "optionA": {
          "text": "Have a small loyal circle of three best friends who understand everything about you",
          "emoji": "🤝"
        },
        "optionB": {
          "text": "Be widely popular across your entire school with dozens of acquaintances",
          "emoji": "🌟"
        },
        "prompts": [
          "What is the biggest difference between popularity and close friendship?",
          "Explain your choice."
        ],
        "starter": "I would rather have ... because deep trust is more important than ..."
      },
      {
        "id": "g8_s2_03",
        "category": "Future Skills",
        "optionA": {
          "text": "Learn advanced computer programming and build your own digital apps and AI tools",
          "emoji": "💻"
        },
        "optionB": {
          "text": "Learn three foreign languages fluently and be able to work and travel across continents",
          "emoji": "🗣️"
        },
        "prompts": [
          "Which skill opens more opportunities in the modern world?",
          "Explain your reasoning."
        ],
        "starter": "I would rather learn ... because in the future, ..."
      },
      {
        "id": "g8_s2_04",
        "category": "School Life",
        "optionA": {
          "text": "Work on a group project where you divide tasks with friends and share the final grade",
          "emoji": "👥"
        },
        "optionB": {
          "text": "Work on an individual project where you have complete control over every single detail",
          "emoji": "👤"
        },
        "prompts": [
          "What can be difficult about working in groups?",
          "Why do you prefer this approach?"
        ],
        "starter": "I would rather do ... because having full control / sharing the workload allows me to ..."
      },
      {
        "id": "g8_s2_05",
        "category": "Personal Goals",
        "optionA": {
          "text": "Spend a year mastering a brand new complex hobby like digital animation or playing drums",
          "emoji": "🥁"
        },
        "optionB": {
          "text": "Spend a year improving your fitness and athletics to make the top regional school team",
          "emoji": "🏃"
        },
        "prompts": [
          "What would be the most satisfying moment of that year?",
          "Explain your motivation."
        ],
        "starter": "I would rather spend a year ... because achieving ..."
      },
      {
        "id": "g8_s2_06",
        "category": "Travel & Independence",
        "optionA": {
          "text": "Go on a supervised school trip to a famous European city with your whole class",
          "emoji": "🚌"
        },
        "optionB": {
          "text": "Go on an independent road trip with your immediate family discovering hidden nature spots",
          "emoji": "🚗"
        },
        "prompts": [
          "Which trip creates better memories for you?",
          "Give two reasons for your answer."
        ],
        "starter": "I would rather go on ... because traveling with ..."
      },
      {
        "id": "g8_s2_07",
        "category": "Digital Habits",
        "optionA": {
          "text": "Delete all social media accounts for six months and focus entirely on real-life goals",
          "emoji": "📵"
        },
        "optionB": {
          "text": "Keep all your social media accounts, but limit your daily screen time to exactly 30 minutes",
          "emoji": "⏱️"
        },
        "prompts": [
          "Which challenge requires more self-discipline?",
          "Explain how this would change your routine."
        ],
        "starter": "I would rather ... because cutting screen time completely / setting strict limits is ..."
      },
      {
        "id": "g8_s2_08",
        "category": "Success & Recognition",
        "optionA": {
          "text": "Receive top marks from teachers in private without anyone else in class knowing",
          "emoji": "🤫"
        },
        "optionB": {
          "text": "Receive a public achievement award on stage in front of the entire school assembly",
          "emoji": "🏆"
        },
        "prompts": [
          "Do you prefer humble quiet success or public recognition?",
          "Explain why."
        ],
        "starter": "I would rather receive ... because for me, personal satisfaction / public recognition is ..."
      },
      {
        "id": "g8_s2_09",
        "category": "Lifestyle Choices",
        "optionA": {
          "text": "Live in an ultra-modern smart home where every appliance is voice-controlled by AI",
          "emoji": "🤖"
        },
        "optionB": {
          "text": "Live in an eco-friendly solar-powered cottage with a huge organic vegetable garden",
          "emoji": "🏡"
        },
        "prompts": [
          "What lifestyle feels more relaxing and sustainable?",
          "Tell us why you chose it."
        ],
        "starter": "I would rather live in ... because having a smart home / natural garden ..."
      },
      {
        "id": "g8_s2_10",
        "category": "Money & Spending",
        "optionA": {
          "text": "Save half of all your pocket money in a bank account to invest in your future car or college",
          "emoji": "🏦"
        },
        "optionB": {
          "text": "Spend your money on unforgettable experiences with friends like concerts, theme parks, and trips",
          "emoji": "🎟️"
        },
        "prompts": [
          "Compare saving for the future with creating memories now.",
          "Explain your financial outlook."
        ],
        "starter": "I would rather ... because investing in the future / enjoying life experiences with friends is ..."
      },
      {
        "id": "g8_s2_11",
        "category": "Creativity & Art",
        "optionA": {
          "text": "Write and record an original indie music album in a professional recording studio",
          "emoji": "🎙️"
        },
        "optionB": {
          "text": "Design and illustrate an original graphic novel series that gets published worldwide",
          "emoji": "🎨"
        },
        "prompts": [
          "Which creative medium expresses your personality better?",
          "Explain your vision."
        ],
        "starter": "I would rather create ... because expressing thoughts through music / art allows me to ..."
      },
      {
        "id": "g8_s2_12",
        "category": "Problem Solving",
        "optionA": {
          "text": "Solve complex scientific mysteries that help doctors cure illnesses faster",
          "emoji": "🔬"
        },
        "optionB": {
          "text": "Solve engineering challenges that help build cleaner electric transport systems",
          "emoji": "⚡"
        },
        "prompts": [
          "Which breakthrough has a bigger impact on humanity?",
          "Explain your passion."
        ],
        "starter": "I would rather solve ... because improving healthcare / the environment is ..."
      },
      {
        "id": "g8_s2_13",
        "category": "Team Dynamics",
        "optionA": {
          "text": "Be the vocal charismatic leader who speaks for the team in every meeting",
          "emoji": "🗣️"
        },
        "optionB": {
          "text": "Be the reliable strategist behind the scenes who organizes the plan and ensures quality",
          "emoji": "🧠"
        },
        "prompts": [
          "Which role fits your strengths more naturally?",
          "Why is that role crucial for success?"
        ],
        "starter": "I would rather be ... because working behind the scenes / leading publicly lets me ..."
      },
      {
        "id": "g8_s2_14",
        "category": "Daily Routine",
        "optionA": {
          "text": "Have a structured daily schedule where every hour is planned for productivity and study",
          "emoji": "📋"
        },
        "optionB": {
          "text": "Have a spontaneous daily schedule where you decide what to do hour by hour depending on your mood",
          "emoji": "🎲"
        },
        "prompts": [
          "How do you handle unexpected changes?",
          "Explain why structure or spontaneity suits you."
        ],
        "starter": "I would rather have a ... schedule because having structure / flexibility helps me ..."
      },
      {
        "id": "g8_s2_15",
        "category": "Communication",
        "optionA": {
          "text": "Always have deep philosophical late-night conversations with close friends about life",
          "emoji": "🌌"
        },
        "optionB": {
          "text": "Always have fun, energetic, laugh-out-loud conversations that keep everybody smiling",
          "emoji": "😂"
        },
        "prompts": [
          "Which type of conversation makes you feel closer to people?",
          "Explain your choice."
        ],
        "starter": "I would rather have ... conversations because discussing deep topics / sharing laughter ..."
      },
      {
        "id": "g8_s2_16",
        "category": "School Environment",
        "optionA": {
          "text": "Attend a specialized high school focused on science, technology, and engineering",
          "emoji": "🚀"
        },
        "optionB": {
          "text": "Attend a specialized high school focused on arts, humanities, theater, and languages",
          "emoji": "🎭"
        },
        "prompts": [
          "Which academic path inspires your curiosity more?",
          "Give two reasons for your decision."
        ],
        "starter": "I would rather attend a school focused on ... because I want to develop skills in ..."
      },
      {
        "id": "g8_s2_17",
        "category": "Challenge & Growth",
        "optionA": {
          "text": "Learn public speaking and give a 10-minute speech at a youth conference",
          "emoji": "🎙️"
        },
        "optionB": {
          "text": "Train for a half-marathon race and run 21 kilometers across your city",
          "emoji": "🏃"
        },
        "prompts": [
          "Which achievement tests your mental resilience more?",
          "Explain how you would prepare."
        ],
        "starter": "I would rather ... because pushing through mental / physical exhaustion teaches you ..."
      },
      {
        "id": "g8_s2_18",
        "category": "Food Culture",
        "optionA": {
          "text": "Learn how to prepare gourmet dinners from Michelin-star chef masterclasses",
          "emoji": "👨‍🍳"
        },
        "optionB": {
          "text": "Travel to 10 different countries to review street food stalls for a travel blog",
          "emoji": "🌮"
        },
        "prompts": [
          "Which food experience sounds more exciting?",
          "Explain why."
        ],
        "starter": "I would rather ... because tasting street food around the world / mastering cooking techniques ..."
      },
      {
        "id": "g8_s2_19",
        "category": "Living Abroad",
        "optionA": {
          "text": "Spend a full semester studying abroad in an English-speaking country like Canada or the UK",
          "emoji": "🍁"
        },
        "optionB": {
          "text": "Spend a full semester studying abroad in a completely different language environment like Japan or Germany",
          "emoji": "🗾"
        },
        "prompts": [
          "What would be the most exciting and the most challenging part of living there?",
          "Explain your choice."
        ],
        "starter": "I would rather study in ... because immersing yourself in a new language / culture ..."
      },
      {
        "id": "g8_s2_20",
        "category": "Future Technology",
        "optionA": {
          "text": "Test early prototype flying cars in a safe testing facility",
          "emoji": "🚗"
        },
        "optionB": {
          "text": "Test full-immersion virtual reality simulations that feel 100% real",
          "emoji": "🥽"
        },
        "prompts": [
          "Which technological breakthrough seems more revolutionary?",
          "Tell us why."
        ],
        "starter": "I would rather test ... because experiencing ..."
      },
      {
        "id": "g8_s2_21",
        "category": "Conflict Resolution",
        "optionA": {
          "text": "Directly address a disagreement with a classmate immediately to clear the air",
          "emoji": "🗣️"
        },
        "optionB": {
          "text": "Wait 24 hours to calm down and think before having a calm conversation",
          "emoji": "⏳"
        },
        "prompts": [
          "What is the healthiest way to handle social tension?",
          "Explain your strategy."
        ],
        "starter": "I would rather ... because waiting to cool down / solving issues immediately prevents ..."
      },
      {
        "id": "g8_s2_22",
        "category": "Entertainment",
        "optionA": {
          "text": "Attend a massive international outdoor music festival with 50,000 fans",
          "emoji": "🎪"
        },
        "optionB": {
          "text": "Attend an intimate acoustic concert with 100 people in a cozy historic theater",
          "emoji": "🎻"
        },
        "prompts": [
          "Compare the energy of a huge crowd with an intimate performance.",
          "Which gives better chills?"
        ],
        "starter": "I would rather attend ... because the intimate connection / raw energy of the crowd ..."
      },
      {
        "id": "g8_s2_23",
        "category": "Decision Making",
        "optionA": {
          "text": "Make important decisions based strictly on logical facts, data, and statistics",
          "emoji": "📊"
        },
        "optionB": {
          "text": "Make important decisions based on your gut intuition, feelings, and personal values",
          "emoji": "❤️"
        },
        "prompts": [
          "When is logic or intuition more trustworthy?",
          "Explain how you make tough choices."
        ],
        "starter": "I would rather rely on ... because when faced with big choices, ..."
      },
      {
        "id": "g8_s2_24",
        "category": "Personal Space",
        "optionA": {
          "text": "Have a modern studio apartment with high-speed internet in the middle of Downtown",
          "emoji": "🏢"
        },
        "optionB": {
          "text": "Have a spacious house with a garden and workshop located in the quiet suburbs",
          "emoji": "🏡"
        },
        "prompts": [
          "What matters more: city accessibility or quiet spacious living?",
          "Explain your preference."
        ],
        "starter": "I would rather have ... because being close to the action / having space to relax ..."
      },
      {
        "id": "g8_s2_25",
        "category": "Sports & Competition",
        "optionA": {
          "text": "Compete in an intense individual sport like tennis, swimming, or martial arts",
          "emoji": "🥋"
        },
        "optionB": {
          "text": "Compete in an intense team sport like basketball, volleyball, or football",
          "emoji": "🏀"
        },
        "prompts": [
          "How does relying solely on yourself compare with relying on teammates?",
          "Explain your mindset."
        ],
        "starter": "I would rather compete in ... because in an individual / team sport, ..."
      },
      {
        "id": "g8_s2_26",
        "category": "Study Techniques",
        "optionA": {
          "text": "Review for exams by creating detailed handwritten color-coded summary sheets",
          "emoji": "📝"
        },
        "optionB": {
          "text": "Review for exams by creating interactive digital quiz decks and flashcards",
          "emoji": "📱"
        },
        "prompts": [
          "Give two reasons for your revision style.",
          "Which method helps memory retention more?"
        ],
        "starter": "I would rather study by ... because first, ... and second, ..."
      },
      {
        "id": "g8_s2_27",
        "category": "Celebrating Friends",
        "optionA": {
          "text": "Plan a surprise birthday party with 20 classmates with music and games",
          "emoji": "🎈"
        },
        "optionB": {
          "text": "Take your best friend on an unforgettable private day trip to an adventure park",
          "emoji": "🎢"
        },
        "prompts": [
          "What makes a birthday celebration truly memorable?",
          "Explain your choice."
        ],
        "starter": "I would rather ... because spending quality time on a private trip / gathering all friends ..."
      },
      {
        "id": "g8_s2_28",
        "category": "Creative Media",
        "optionA": {
          "text": "Write and direct a 10-minute short film submitted to a youth film festival",
          "emoji": "🎬"
        },
        "optionB": {
          "text": "Write and produce a 10-song acoustic musical album in a home studio",
          "emoji": "🎸"
        },
        "prompts": [
          "What story or emotions would you express?",
          "Tell us why."
        ],
        "starter": "I would rather create ... because storytelling through film / song allows me to ..."
      },
      {
        "id": "g8_s2_29",
        "category": "Tech Gear",
        "optionA": {
          "text": "Build your own custom desktop PC with RGB lighting and liquid cooling",
          "emoji": "🖥️"
        },
        "optionB": {
          "text": "Own the newest premium flagship smartphone with pro camera lenses",
          "emoji": "📱"
        },
        "prompts": [
          "Which device gives you more utility and satisfaction?",
          "Explain your choice."
        ],
        "starter": "I would rather have ... because building a PC / having a top smartphone ..."
      },
      {
        "id": "g8_s2_30",
        "category": "Athletic Training",
        "optionA": {
          "text": "Train intensely with a strict personal fitness coach for three months",
          "emoji": "🏋️"
        },
        "optionB": {
          "text": "Train with an energetic group of close friends who cheer each other on",
          "emoji": "🏃"
        },
        "prompts": [
          "How does social support compare with strict discipline?",
          "Explain your preference."
        ],
        "starter": "I would rather train with ... because having motivating friends / a professional coach ..."
      },
      {
        "id": "g8_s2_31",
        "category": "Travel Style",
        "optionA": {
          "text": "Take a scenic overnight sleeper train across European countryside",
          "emoji": "🚂"
        },
        "optionB": {
          "text": "Take a quick 2-hour budget flight directly to your vacation resort",
          "emoji": "✈️"
        },
        "prompts": [
          "Is the travel journey just as important as the destination?",
          "Explain your view."
        ],
        "starter": "I would rather travel by ... because sleeping on a train / arriving quickly by plane ..."
      }
    ],
    "stage3": [
      {
        "id": "g8_s3_01",
        "category": "Digital Life vs Freedom",
        "optionA": {
          "text": "Completely disconnect from all social media and smartphones for one full month, gaining four hours of free time every day",
          "emoji": "📵"
        },
        "optionB": {
          "text": "Stay connected to your phone and social apps as normal, but you must spend one hour every day writing handwritten letters",
          "emoji": "✉️"
        },
        "prompts": [
          "What is the biggest advantage of disconnecting?",
          "Would your friendships survive one month offline?"
        ],
        "starter": "I would rather ... because regaining four hours of free time every day allows me to ..."
      },
      {
        "id": "g8_s3_02",
        "category": "Future Career & Lifestyle",
        "optionA": {
          "text": "Have an exciting high-paying career that requires 60 hours of intense work every week with very little free time",
          "emoji": "💼"
        },
        "optionB": {
          "text": "Have a comfortable moderate-income job that requires only 30 hours of work per week with plenty of free time for hobbies and family",
          "emoji": "🏖️"
        },
        "prompts": [
          "What is more valuable: wealth and professional status, or personal freedom and time?",
          "Explain your philosophy."
        ],
        "starter": "I would rather choose the ... job because although money is important, having free time to enjoy life is ..."
      },
      {
        "id": "g8_s3_03",
        "category": "Ethics & Integrity",
        "optionA": {
          "text": "Receive 100% on every high school and university exam automatically, but you know you never truly earned the knowledge",
          "emoji": "📜"
        },
        "optionB": {
          "text": "Earn realistic average grades through honest hard study, knowing that every skill you possess is genuinely yours",
          "emoji": "🧠"
        },
        "prompts": [
          "How does genuine competence compare with easy success?",
          "What happens when you enter the real workforce?"
        ],
        "starter": "I would rather ... because genuine knowledge and confidence can never be replaced by ..."
      },
      {
        "id": "g8_s3_04",
        "category": "Environment & Future",
        "optionA": {
          "text": "Ban all single-use plastics worldwide immediately, even if everyday items become temporarily more expensive",
          "emoji": "🌱"
        },
        "optionB": {
          "text": "Gradually phase out plastics over 20 years to avoid economic disruption, even if pollution continues in the meantime",
          "emoji": "⏳"
        },
        "prompts": [
          "What are the economic and ecological consequences of both paths?",
          "Which approach is more responsible?"
        ],
        "starter": "I would rather ... because protecting the planet requires urgent action / smooth economic transition because ..."
      },
      {
        "id": "g8_s3_05",
        "category": "Society & Influence",
        "optionA": {
          "text": "Be a famous internet personality with 10 million followers, where your private life is constantly watched and criticized",
          "emoji": "📸"
        },
        "optionB": {
          "text": "Be a successful private entrepreneur who earns great income while living completely anonymously with zero public attention",
          "emoji": "🕶️"
        },
        "prompts": [
          "What are the psychological costs of fame on modern youth?",
          "Why is privacy valuable in today's digital world?"
        ],
        "starter": "I would rather be ... because having privacy and peace of mind is much more valuable than ..."
      },
      {
        "id": "g8_s3_06",
        "category": "Artificial Intelligence",
        "optionA": {
          "text": "Live in a future where AI robots do all physical labor, manufacturing, and driving, giving humans total leisure time",
          "emoji": "🤖"
        },
        "optionB": {
          "text": "Live in a future where humans continue doing manual crafts, driving, and building to preserve traditional human purpose",
          "emoji": "🔨"
        },
        "prompts": [
          "What gives human life its purpose and meaning?",
          "Explain the advantages and dangers of total automation."
        ],
        "starter": "I would rather live in a future where ... because human dignity and purpose comes from ..."
      },
      {
        "id": "g8_s3_07",
        "category": "Friendship & Honesty",
        "optionA": {
          "text": "Tell a close friend a painful truth about their behavior to help them improve, risking an argument",
          "emoji": "🗣️"
        },
        "optionB": {
          "text": "Keep silent to protect their immediate feelings and maintain harmony, even if they repeat the same mistake",
          "emoji": "🤐"
        },
        "prompts": [
          "What is the difference between being nice and being genuinely kind?",
          "How would you deliver constructive feedback?"
        ],
        "starter": "I would rather ... because true friendship means helping someone grow, even when ..."
      },
      {
        "id": "g8_s3_08",
        "category": "Education & Growth",
        "optionA": {
          "text": "Spend your high school years focusing deeply on one single subject like robotics to become a youth champion",
          "emoji": "🎯"
        },
        "optionB": {
          "text": "Spend your high school years taking courses in languages, arts, sciences, and music to gain broad general knowledge",
          "emoji": "🌍"
        },
        "prompts": [
          "Is specialization or interdisciplinary curiosity more beneficial for modern careers?",
          "Explain your view."
        ],
        "starter": "I would rather choose a ... education because having diverse skills / deep expertise allows you to ..."
      },
      {
        "id": "g8_s3_09",
        "category": "Travel & Culture",
        "optionA": {
          "text": "Spend a gap year backpack traveling through 15 developing nations on a very strict budget to see real communities",
          "emoji": "🎒"
        },
        "optionB": {
          "text": "Spend a gap year doing a paid internship at a prestigious tech company in London or New York",
          "emoji": "💼"
        },
        "prompts": [
          "Which experience teaches you more about life, resilience, and maturity?",
          "Explain your priorities."
        ],
        "starter": "I would rather spend my gap year ... because learning about real human culture / building professional experience ..."
      },
      {
        "id": "g8_s3_10",
        "category": "Financial Philosophy",
        "optionA": {
          "text": "Spend your early 20s taking calculated risks by launching your own creative business startup",
          "emoji": "🚀"
        },
        "optionB": {
          "text": "Spend your early 20s working in a secure government job with guaranteed pension and steady benefits",
          "emoji": "🏛️"
        },
        "prompts": [
          "Compare financial security with entrepreneurial risk and potential.",
          "What is your personal risk tolerance?"
        ],
        "starter": "I would rather ... because in your youth, taking risks to follow your dreams / establishing stability is ..."
      },
      {
        "id": "g8_s3_11",
        "category": "Personal Identity",
        "optionA": {
          "text": "Always fit in seamlessly with any crowd, being liked by everyone you meet, but hiding some of your quirky interests",
          "emoji": "🎭"
        },
        "optionB": {
          "text": "Always stay 100% authentically yourself and express your unusual passions, even if only a few people understand you",
          "emoji": "🦄"
        },
        "prompts": [
          "How important is social conformity versus individual authenticity for teenagers?",
          "Explain your choice."
        ],
        "starter": "I would rather ... because being true to your authentic self is more fulfilling than ..."
      },
      {
        "id": "g8_s3_12",
        "category": "Technological Dependence",
        "optionA": {
          "text": "Have all personal devices, maps, and search engines locked for one week while traveling in a new city",
          "emoji": "🗺️"
        },
        "optionB": {
          "text": "Have full access to technology, but you are not allowed to speak to any human being for one week",
          "emoji": "🔇"
        },
        "prompts": [
          "Which isolation is more challenging: technological or social?",
          "How would you navigate the city?"
        ],
        "starter": "I would rather ... because asking real locals for directions / having technology is much more manageable than ..."
      },
      {
        "id": "g8_s3_13",
        "category": "School System Reform",
        "optionA": {
          "text": "Replace all traditional letter grades and test rankings with detailed teacher feedback and portfolio reviews",
          "emoji": "📝"
        },
        "optionB": {
          "text": "Keep standardized numerical test rankings so students always know their exact academic standing compared to others",
          "emoji": "📊"
        },
        "prompts": [
          "Which assessment system reduces unhealthy stress while encouraging genuine curiosity?",
          "Explain why."
        ],
        "starter": "I would rather have ... because learning should be motivated by curiosity / clear benchmarks rather than ..."
      },
      {
        "id": "g8_s3_14",
        "category": "Global Citizenship",
        "optionA": {
          "text": "Live in a country with high taxes where healthcare, university education, and public transit are completely free for everyone",
          "emoji": "🏥"
        },
        "optionB": {
          "text": "Live in a country with very low taxes where you keep all your earned salary but pay privately for services as needed",
          "emoji": "💵"
        },
        "prompts": [
          "What are the social benefits and economic tradeoffs of both systems?",
          "Which model creates a fairer society?"
        ],
        "starter": "I would rather live in a system with ... because ensuring equal public healthcare / keeping your hard-earned money is ..."
      },
      {
        "id": "g8_s3_15",
        "category": "Memory & Regret",
        "optionA": {
          "text": "Have the ability to erase any single embarrassing or painful memory from your past completely",
          "emoji": "🧹"
        },
        "optionB": {
          "text": "Keep all your painful memories, but gain the wisdom to never repeat any previous mistake ever again",
          "emoji": "💡"
        },
        "prompts": [
          "Do our past mistakes shape who we become as mature people?",
          "Explain your answer."
        ],
        "starter": "I would rather ... because difficult experiences are valuable lessons that teach us ..."
      },
      {
        "id": "g8_s3_16",
        "category": "Social Connection",
        "optionA": {
          "text": "Live in a traditional community where neighbors know everything about each other and share daily meals",
          "emoji": "🍲"
        },
        "optionB": {
          "text": "Live in an ultra-private modern condominium where residents respect total privacy and never interact",
          "emoji": "🏙️"
        },
        "prompts": [
          "Compare community warmth with personal solitude and privacy.",
          "Where would you feel safer?"
        ],
        "starter": "I would rather live in ... because having a supportive community / personal privacy allows me to ..."
      },
      {
        "id": "g8_s3_17",
        "category": "Decision Making",
        "optionA": {
          "text": "Take a gap year before college to work odd jobs, discover your passions, and gain real-world independence",
          "emoji": "🧭"
        },
        "optionB": {
          "text": "Enter university immediately after high school to finish your degree early and start your professional career at age 21",
          "emoji": "🎓"
        },
        "prompts": [
          "What are the pros and cons of taking time off versus moving fast?",
          "Explain your own life strategy."
        ],
        "starter": "I would rather ... because gaining life maturity / entering the workforce early gives you an advantage because ..."
      },
      {
        "id": "g8_s3_18",
        "category": "Workplace Culture",
        "optionA": {
          "text": "Work for a prestigious global corporation where the company name gives you instant status on your resume",
          "emoji": "🏢"
        },
        "optionB": {
          "text": "Work for a passionate 10-person local nonprofit organization where you see the direct human impact of your daily work",
          "emoji": "🤝"
        },
        "prompts": [
          "What motivates you more: personal prestige or direct social contribution?",
          "Explain your values."
        ],
        "starter": "I would rather work for ... because knowing that my daily work helps real people / builds a strong resume ..."
      },
      {
        "id": "g8_s3_19",
        "category": "Health & Longevity",
        "optionA": {
          "text": "Live to be 100 years old with average energy, staying in your hometown surrounded by extended family",
          "emoji": "👵"
        },
        "optionB": {
          "text": "Live to be 70 years old with peak athletic vitality, traveling to all seven continents and exploring every ocean",
          "emoji": "🌍"
        },
        "prompts": [
          "Is the quality and intensity of life more important than its sheer length?",
          "Explain your reasoning."
        ],
        "starter": "I would rather ... because living a vibrant adventurous life / spending maximum years with family is ..."
      },
      {
        "id": "g8_s3_20",
        "category": "Future Inventions",
        "optionA": {
          "text": "Invent a fast commercial space airliner that can fly passengers from London to Sydney in 45 minutes",
          "emoji": "🚀"
        },
        "optionB": {
          "text": "Invent an affordable ocean desalinator that converts seawater into limitless fresh drinking water for drought areas",
          "emoji": "💧"
        },
        "prompts": [
          "Which technology solves a more urgent global crisis?",
          "Explain your humanitarian priority."
        ],
        "starter": "I would rather invent ... because providing clean drinking water / fast travel to the world creates ..."
      },
      {
        "id": "g8_s3_21",
        "category": "Self-Expression",
        "optionA": {
          "text": "Express your opinions publicly on contentious topics, standing firm despite negative online comments",
          "emoji": "🛡️"
        },
        "optionB": {
          "text": "Keep controversial views private to maintain peaceful relationships with all classmates and acquaintances",
          "emoji": "🕊️"
        },
        "prompts": [
          "When is speaking out necessary, and when is diplomacy smarter?",
          "Explain your communication boundaries."
        ],
        "starter": "I would rather ... because standing up for your core principles / maintaining harmony is important because ..."
      },
      {
        "id": "g8_s3_22",
        "category": "Ethics in Sports",
        "optionA": {
          "text": "Win a state championship match because the referee made an incorrect call in your team's favor",
          "emoji": "🏆"
        },
        "optionB": {
          "text": "Point out the referee's mistake honestly and lose the match with your integrity completely intact",
          "emoji": "⚖️"
        },
        "prompts": [
          "What does true sportsmanship mean to you?",
          "How would your teammates react?"
        ],
        "starter": "I would rather ... because true integrity and self-respect are worth far more than ..."
      },
      {
        "id": "g8_s3_23",
        "category": "City Development",
        "optionA": {
          "text": "Invest city tax funds into building world-class public parks, bicycle lanes, and community recreation centers",
          "emoji": "🚴"
        },
        "optionB": {
          "text": "Invest city tax funds into attracting high-tech corporations to build offices and create thousands of local jobs",
          "emoji": "🏢"
        },
        "prompts": [
          "Which investment improves citizens' daily quality of life more?",
          "Explain your urban vision."
        ],
        "starter": "I would rather invest in ... because green public spaces / high-paying jobs create a thriving city because ..."
      },
      {
        "id": "g8_s3_24",
        "category": "Digital Privacy",
        "optionA": {
          "text": "Allow law enforcement to monitor all digital communication to guarantee nearly 100% safety from crime",
          "emoji": "🛡️"
        },
        "optionB": {
          "text": "Protect complete digital privacy and encryption for all citizens, even if crime prevention is more difficult",
          "emoji": "🔒"
        },
        "prompts": [
          "How should free societies balance public security with civil liberties?",
          "Explain your stance."
        ],
        "starter": "I would rather choose ... because preserving fundamental privacy / ensuring maximum public safety is ..."
      },
      {
        "id": "g8_s3_25",
        "category": "Personal Challenge",
        "optionA": {
          "text": "Spend three months living in a remote wilderness research cabin without internet, logging wildlife data",
          "emoji": "🌲"
        },
        "optionB": {
          "text": "Spend three months working as a volunteer aide in an overcrowded city hospital emergency room",
          "emoji": "🏥"
        },
        "prompts": [
          "Which experience teaches you more about human vulnerability and resilience?",
          "Explain your choice."
        ],
        "starter": "I would rather spend three months ... because helping patients / experiencing wilderness solitude teaches us ..."
      },
      {
        "id": "g8_s3_26",
        "category": "Workplace Lifestyle",
        "optionA": {
          "text": "Work remotely from home with flexible hours and the freedom to travel while working",
          "emoji": "💻"
        },
        "optionB": {
          "text": "Work in a vibrant collaborative downtown office with free meals, gym, and daily team energy",
          "emoji": "🏢"
        },
        "prompts": [
          "What are the pros and cons of remote work versus office culture?",
          "Explain your preference."
        ],
        "starter": "I would rather work ... because having flexibility / collaborating face-to-face with colleagues ..."
      },
      {
        "id": "g8_s3_27",
        "category": "Sensory Detox",
        "optionA": {
          "text": "Spend one full week without listening to any recorded music or podcasts",
          "emoji": "🔇"
        },
        "optionB": {
          "text": "Spend one full week without looking at any video screens, TVs, or smartphones",
          "emoji": "📵"
        },
        "prompts": [
          "Which detox would be more difficult for your daily routine?",
          "What would you do instead?"
        ],
        "starter": "I would rather give up ... because living without music / screens is much more difficult because ..."
      },
      {
        "id": "g8_s3_28",
        "category": "City Transit Policy",
        "optionA": {
          "text": "Make all city buses and subways 100% free for everyone, funded by higher highway tolls",
          "emoji": "🚋"
        },
        "optionB": {
          "text": "Keep public transit fares low while investing city funds into wider roads and bridges",
          "emoji": "🛣️"
        },
        "prompts": [
          "Which transport policy reduces urban traffic and carbon emissions better?",
          "Explain your view."
        ],
        "starter": "I would rather support ... because free public transit encourages eco-friendly travel / road investment ..."
      },
      {
        "id": "g8_s3_29",
        "category": "Friendship Dynamic",
        "optionA": {
          "text": "Have friends who constantly challenge your ideas and debate topics to make you sharper",
          "emoji": "🧠"
        },
        "optionB": {
          "text": "Have friends who always support your opinions and offer unconditional comfort and peace",
          "emoji": "🤗"
        },
        "prompts": [
          "What helps personal growth more: intellectual debate or emotional comfort?",
          "Explain your answer."
        ],
        "starter": "I would rather have friends who ... because being challenged intellectually / feeling accepted ..."
      },
      {
        "id": "g8_s3_30",
        "category": "Summer Growth",
        "optionA": {
          "text": "Take a challenging public speaking and leadership internship during summer vacation",
          "emoji": "🎙️"
        },
        "optionB": {
          "text": "Take a relaxed outdoor summer job as a nature camp counselor guiding kids",
          "emoji": "🏕️"
        },
        "prompts": [
          "Which summer experience teaches more valuable life lessons?",
          "Explain your choice."
        ],
        "starter": "I would rather spend summer ... because developing leadership skills / connecting with nature ..."
      },
      {
        "id": "g8_s3_31",
        "category": "Teenage Finance",
        "optionA": {
          "text": "Invest all your teenage savings into high-quality camera gear to launch a freelance business",
          "emoji": "📸"
        },
        "optionB": {
          "text": "Deposit every dollar into a safe long-term savings account for future university expenses",
          "emoji": "🏦"
        },
        "prompts": [
          "Compare early entrepreneurial investment with financial security.",
          "Explain your risk tolerance."
        ],
        "starter": "I would rather ... because investing in your own tools / saving for university tuition is ..."
      }
    ],
    "stage4": [
      {
        "id": "g8_s4_01",
        "category": "Career vs Life Balance",
        "optionA": {
          "text": "Pursue a high-powered career in investment banking or corporate law that provides immense wealth but requires 75 hours of work every week",
          "emoji": "💼"
        },
        "optionB": {
          "text": "Pursue a modest career in teaching or community social work that provides comfortable living with regular vacations and rich family life",
          "emoji": "👨‍👩‍👧‍👦"
        },
        "prompts": [
          "Compare your choice with the other option.",
          "What is the biggest advantage and disadvantage of your decision?"
        ],
        "starter": "I would rather choose the ... path because while money and prestige offer comfort / having time for family and personal passions is ..."
      },
      {
        "id": "g8_s4_02",
        "category": "Technological Ethics",
        "optionA": {
          "text": "Live in a futuristic society where genetic engineering eliminates all hereditary diseases, but creates social inequality between engineered and natural humans",
          "emoji": "🧬"
        },
        "optionB": {
          "text": "Ban all human genetic engineering completely to preserve human equality, even though preventable genetic illnesses continue to affect families",
          "emoji": "⚖️"
        },
        "prompts": [
          "What ethical dilemmas arise from modifying human biology?",
          "Compare the moral responsibility of healing versus equality."
        ],
        "starter": "I would rather support ... because preventing human suffering / maintaining natural human equality is the more fundamental principle because ..."
      },
      {
        "id": "g8_s4_03",
        "category": "Knowledge & Happiness",
        "optionA": {
          "text": "Possess complete, unfiltered knowledge of all scientific, political, and historical truths, even if the reality makes you cynical and sad",
          "emoji": "🧠"
        },
        "optionB": {
          "text": "Live a peaceful, joyful, and optimistic life surrounded by people you love, even if some of your beliefs are simple or naive",
          "emoji": "🌻"
        },
        "prompts": [
          "Is ignorance bliss, or is truth always superior to comfortable illusion?",
          "Explain your philosophical perspective."
        ],
        "starter": "I would rather choose ... because seeking absolute truth / finding genuine daily happiness and peace is the ultimate purpose of life because ..."
      },
      {
        "id": "g8_s4_04",
        "category": "Freedom vs Security",
        "optionA": {
          "text": "Live in a society with total personal freedom to do whatever you choose, but with zero government social safety nets or police protection",
          "emoji": "🦅"
        },
        "optionB": {
          "text": "Live in a society with strict government regulations and constant surveillance, but with guaranteed housing, food, and zero crime",
          "emoji": "🏛️"
        },
        "prompts": [
          "Compare the historical consequences of total liberty versus total security.",
          "Which society would you feel safer building a family in?"
        ],
        "starter": "I would rather live in a society of ... because without fundamental freedom / without security and order, human potential cannot ..."
      },
      {
        "id": "g8_s4_05",
        "category": "Environmental Sacrifice",
        "optionA": {
          "text": "Drastically reduce modern consumer technology and international flights to restore the global biosphere and reverse climate change",
          "emoji": "🌿"
        },
        "optionB": {
          "text": "Rely on developing speculative future technologies and geo-engineering to solve climate change while maintaining current modern lifestyle standards",
          "emoji": "🏭"
        },
        "prompts": [
          "Are humans capable of voluntary collective sacrifice for future generations?",
          "Explain your environmental analysis."
        ],
        "starter": "I would rather choose ... because making direct lifestyle adjustments / innovating technological solutions is more realistic because ..."
      },
      {
        "id": "g8_s4_06",
        "category": "Artificial Consciousness",
        "optionA": {
          "text": "Grant full legal human rights and citizenship to sentient AI beings as soon as they demonstrate emotional self-awareness",
          "emoji": "🤖"
        },
        "optionB": {
          "text": "Strictly classify all artificial intelligence systems as software tools and property, preventing them from ever having human legal status",
          "emoji": "💻"
        },
        "prompts": [
          "What defines personhood and moral rights in the age of thinking machines?",
          "Explain your ethical framework."
        ],
        "starter": "I would rather ... because any conscious entity capable of feeling / maintaining clear boundaries between humans and machines is essential because ..."
      },
      {
        "id": "g8_s4_07",
        "category": "Leadership & Morality",
        "optionA": {
          "text": "Be a national leader who makes painful, unpopular pragmatic decisions that save the economy, but makes the public dislike you",
          "emoji": "📉"
        },
        "optionB": {
          "text": "Be a beloved charismatic leader who unites and comforts the country, but avoids making difficult reforms that the nation truly needs",
          "emoji": "🕊️"
        },
        "prompts": [
          "What is the mark of true courageous leadership?",
          "Give a historical or modern example to support your view."
        ],
        "starter": "I would rather be the leader who ... because real leadership requires sacrificing personal popularity for ..."
      },
      {
        "id": "g8_s4_08",
        "category": "Justice & Redemption",
        "optionA": {
          "text": "Create a justice system focused 100% on rehabilitation, education, and second chances, even for serious criminal offenders",
          "emoji": "🤝"
        },
        "optionB": {
          "text": "Create a justice system focused strictly on deterrence, strict punishment, and absolute accountability for victims' families",
          "emoji": "⚖️"
        },
        "prompts": [
          "Compare restorative justice with punitive justice.",
          "Which philosophy creates a safer and more compassionate society?"
        ],
        "starter": "I would rather support a system of ... because healing and reforming individuals / providing strict accountability and justice creates ..."
      },
      {
        "id": "g8_s4_09",
        "category": "Global Wealth Distribution",
        "optionA": {
          "text": "Set a strict legal maximum ceiling on personal wealth (no billionaires), redistributing excess funds to public schools and hospitals",
          "emoji": "🏥"
        },
        "optionB": {
          "text": "Allow unlimited personal wealth accumulation to reward ambitious innovators, while maintaining a strong minimum wage floor",
          "emoji": "🚀"
        },
        "prompts": [
          "How do wealth caps affect economic motivation and innovation?",
          "Compare fairness with incentive in free markets."
        ],
        "starter": "I would rather support ... because limiting extreme wealth inequality / incentivizing groundbreaking innovation leads to ..."
      },
      {
        "id": "g8_s4_10",
        "category": "Personal Legacy",
        "optionA": {
          "text": "Discover a medical breakthrough that quietly saves 100,000 lives, but your name is never published and no one knows who you are",
          "emoji": "🩺"
        },
        "optionB": {
          "text": "Create an iconic masterpiece of literature or cinema that inspires millions for generations, cementing your name in world history",
          "emoji": "🎬"
        },
        "prompts": [
          "Is anonymous altruism greater than cultural immortality?",
          "Explain what legacy means to you personally."
        ],
        "starter": "I would rather ... because directly saving human lives is its own reward / cultural art moves human souls in a way that ..."
      },
      {
        "id": "g8_s4_11",
        "category": "Education & Standardized Testing",
        "optionA": {
          "text": "Completely eliminate all standardized college entrance examinations, basing admissions on practical interviews and real projects",
          "emoji": "🎯"
        },
        "optionB": {
          "text": "Maintain objective standardized tests as the primary metric to ensure a transparent meritocracy regardless of school background",
          "emoji": "📊"
        },
        "prompts": [
          "What are the biases and advantages of objective testing versus holistic evaluation?",
          "Explain your recommendation."
        ],
        "starter": "I would rather ... because holistic portfolios capture real creativity / objective test scores protect fair competition because ..."
      },
      {
        "id": "g8_s4_12",
        "category": "Free Speech & Safety",
        "optionA": {
          "text": "Protect absolute unrestricted free expression in public and online spaces, allowing all ideas to be openly debated and challenged",
          "emoji": "📢"
        },
        "optionB": {
          "text": "Enforce strict regulations against harmful misinformation, hate speech, and online bullying to protect vulnerable communities",
          "emoji": "🛡️"
        },
        "prompts": [
          "Where should free societies draw the line between open debate and public harm?",
          "Who should be the judge of acceptable speech?"
        ],
        "starter": "I would rather choose ... because defending open public discourse / protecting people from toxic harm is essential because ..."
      },
      {
        "id": "g8_s4_13",
        "category": "Colonizing Mars",
        "optionA": {
          "text": "Invest hundreds of billions of dollars into building human colonies on Mars to ensure the survival of human civilization",
          "emoji": "🚀"
        },
        "optionB": {
          "text": "Direct all space exploration funds exclusively into cleaning and preserving Earth's oceans, rainforests, and atmosphere",
          "emoji": "🌍"
        },
        "prompts": [
          "Is becoming a multi-planetary species more urgent than preserving our home planet?",
          "Compare both long-term goals."
        ],
        "starter": "I would rather invest in ... because Earth is our only home and we must fix it first / expanding to Mars ensures humanity never goes extinct because ..."
      },
      {
        "id": "g8_s4_14",
        "category": "Ethics in Science",
        "optionA": {
          "text": "Pause advanced artificial intelligence research for five years to allow global governments to establish safety guardrails",
          "emoji": "🛑"
        },
        "optionB": {
          "text": "Accelerate AI research as fast as possible to unlock cures for cancer, clean fusion energy, and scientific discoveries",
          "emoji": "⚡"
        },
        "prompts": [
          "Compare the risks of uncontrolled AI development with the potential benefits of rapid breakthroughs.",
          "Explain your stance."
        ],
        "starter": "I would rather ... because the existential risk of unaligned AI is too great / slowing down prevents life-saving medical discoveries because ..."
      },
      {
        "id": "g8_s4_15",
        "category": "Workplace Automation",
        "optionA": {
          "text": "Implement a Universal Basic Income funded by robot automation taxes, allowing all citizens to live comfortably without working",
          "emoji": "💳"
        },
        "optionB": {
          "text": "Create guaranteed government jobs and craft apprenticeships so that every citizen continues to experience the dignity of work",
          "emoji": "🛠️"
        },
        "prompts": [
          "Does human psychological fulfillment require labor and productivity, or can humans find purpose without employment?",
          "Explain."
        ],
        "starter": "I would rather implement ... because financial freedom allows people to pursue their true passions / meaningful work provides structure and dignity because ..."
      },
      {
        "id": "g8_s4_16",
        "category": "Privacy in Health",
        "optionA": {
          "text": "Mandate wearable biometric health trackers for all citizens to detect diseases early and reduce healthcare costs by 70%",
          "emoji": "⌚"
        },
        "optionB": {
          "text": "Keep health data strictly voluntary and private, even if preventable epidemics and chronic diseases are diagnosed much later",
          "emoji": "🔒"
        },
        "prompts": [
          "What are the privacy risks of governments or insurers having real-time biological data?",
          "Explain your health policy view."
        ],
        "starter": "I would rather choose ... because bodily privacy is a fundamental right / saving thousands of lives through early diagnosis is ..."
      },
      {
        "id": "g8_s4_17",
        "category": "Cultural Preservation",
        "optionA": {
          "text": "Embrace a unified global culture with one universal language, standardized laws, and shared international holidays",
          "emoji": "🌐"
        },
        "optionB": {
          "text": "Vigorously protect distinct local languages, traditional customs, and regional dialects from globalization",
          "emoji": "🏛️"
        },
        "prompts": [
          "Compare global unity and seamless trade with the rich heritage of cultural diversity.",
          "What is lost when a culture disappears?"
        ],
        "starter": "I would rather protect ... because cultural heritage and linguistic diversity enrich humanity / global unity reduces conflict because ..."
      },
      {
        "id": "g8_s4_18",
        "category": "Moral Dilemma / The Trolley Variant",
        "optionA": {
          "text": "Make a tough calculated decision that directly harms one person to save the lives of ten other people",
          "emoji": "⚖️"
        },
        "optionB": {
          "text": "Refuse to actively cause harm to anyone, even if your inaction means ten people will suffer through circumstances",
          "emoji": "🕊️"
        },
        "prompts": [
          "Compare utilitarian logic with moral duty and personal responsibility.",
          "How do you justify your ethical choice?"
        ],
        "starter": "I would rather ... because maximizing the number of lives saved / refusing to commit an immoral act directly is the right principle because ..."
      },
      {
        "id": "g8_s4_19",
        "category": "Future Energy Choices",
        "optionA": {
          "text": "Build advanced modern nuclear fission power plants to eliminate carbon emissions immediately within 5 years",
          "emoji": "⚛️"
        },
        "optionB": {
          "text": "Rely exclusively on solar, wind, and battery storage, even if the energy transition takes 20 years to become fully stable",
          "emoji": "☀️"
        },
        "prompts": [
          "Compare the reliability and safety record of modern nuclear power with renewable intermittency.",
          "Explain your energy strategy."
        ],
        "starter": "I would rather invest in ... because achieving zero emissions immediately is critical / renewable energy carries zero radioactive waste risk because ..."
      },
      {
        "id": "g8_s4_20",
        "category": "Self-Actualization",
        "optionA": {
          "text": "Dedicate your entire life to mastering one single great craft (like violin or neurosurgery) to achieve true historic excellence",
          "emoji": "🎻"
        },
        "optionB": {
          "text": "Live a versatile renaissance life, exploring parenting, travel, business, sports, and community to enjoy diverse human experiences",
          "emoji": "🌈"
        },
        "prompts": [
          "What constitutes a life well-lived: laser-focused mastery or broad human connection?",
          "Explain your personal dream."
        ],
        "starter": "I would rather live a ... life because contributing historic mastery to the world / experiencing the full spectrum of life experiences is ..."
      },
      {
        "id": "g8_s4_21",
        "category": "Urban Transportation",
        "optionA": {
          "text": "Completely ban private automobiles in urban city centers, converting all roads to light rail, bikes, and pedestrian plazas",
          "emoji": "🚋"
        },
        "optionB": {
          "text": "Transition all city vehicles to autonomous electric self-driving cars while preserving the existing highway road network",
          "emoji": "🚗"
        },
        "prompts": [
          "How does urban transit design influence public health, noise pollution, and social community?",
          "Explain your vision."
        ],
        "starter": "I would rather ... because car-free walkable cities foster active healthy communities / autonomous electric cars preserve personal freedom because ..."
      },
      {
        "id": "g8_s4_22",
        "category": "Truth in Media",
        "optionA": {
          "text": "Establish an independent nonpartisan council of journalists to verify all online news headlines before they can be shared",
          "emoji": "📰"
        },
        "optionB": {
          "text": "Keep news sharing completely open and rely on teaching media literacy in schools so citizens evaluate sources themselves",
          "emoji": "🎓"
        },
        "prompts": [
          "Can centralized fact-checking become biased or censored?",
          "Compare institutional regulation with citizen media literacy."
        ],
        "starter": "I would rather rely on ... because educating citizens to think critically is safer / preventing dangerous viral lies requires instant verification because ..."
      },
      {
        "id": "g8_s4_23",
        "category": "Personal Finance & Philosophy",
        "optionA": {
          "text": "Retire early at age 40 with a modest frugal lifestyle, spending all your remaining decades in nature and personal reading",
          "emoji": "🏕️"
        },
        "optionB": {
          "text": "Work until age 70 in an active professional career, constantly meeting new colleagues and influencing major projects",
          "emoji": "💼"
        },
        "prompts": [
          "Is retirement the goal of career life, or is meaningful work an essential part of lifelong vitality?",
          "Explain your perspective."
        ],
        "starter": "I would rather ... because having decades of total personal freedom / staying engaged in active society gives life meaning because ..."
      },
      {
        "id": "g8_s4_24",
        "category": "Digital Immortality",
        "optionA": {
          "text": "Upload your personality and memories to an AI avatar after you pass away, allowing your great-grandchildren to talk to you forever",
          "emoji": "💾"
        },
        "optionB": {
          "text": "Let your life end naturally without digital copies, leaving only your real deeds and family memories behind in the physical world",
          "emoji": "🕊️"
        },
        "prompts": [
          "What are the philosophical implications of digital consciousness?",
          "Does mortality give human life its precious value?"
        ],
        "starter": "I would rather ... because letting life have a natural ending gives it meaning / providing future generations with interactive wisdom is ..."
      },
      {
        "id": "g8_s4_25",
        "category": "Courage & History",
        "optionA": {
          "text": "Be remembered as an outspoken pioneer who fought for an unpopular truth 50 years ahead of their time",
          "emoji": "🔥"
        },
        "optionB": {
          "text": "Be remembered as a gentle bridge-builder who healed divisions and brought opposing groups together in peace during a crisis",
          "emoji": "🕊️"
        },
        "prompts": [
          "Does human progress rely more on radical truth-tellers or compassionate reconcilers?",
          "Explain your historical view."
        ],
        "starter": "I would rather be remembered as a ... because challenging dogmas moves society forward / uniting divided people prevents destructive conflict because ..."
      },
      {
        "id": "g8_s4_26",
        "category": "AI & Healthcare Employment",
        "optionA": {
          "text": "Deploy an AI medical diagnostics tool that saves 50,000 lives annually but replaces 20,000 lab jobs",
          "emoji": "🩺"
        },
        "optionB": {
          "text": "Slow down AI deployment to protect healthcare workers' livelihoods while retraining them over 10 years",
          "emoji": "⏱️"
        },
        "prompts": [
          "How should governments balance saving human lives with economic disruption?",
          "Explain your ethics."
        ],
        "starter": "I would rather support ... because saving human lives must always take priority / managing the human transition ..."
      },
      {
        "id": "g8_s4_27",
        "category": "Civic Duty vs Freedom",
        "optionA": {
          "text": "Live in a country where civic participation and voting in national elections is legally mandatory",
          "emoji": "🗳️"
        },
        "optionB": {
          "text": "Live in a country where civic voting is 100% voluntary, allowing citizens to opt out freely",
          "emoji": "🗽"
        },
        "prompts": [
          "Does mandatory voting create a healthier democracy or infringe upon personal liberty?",
          "Explain."
        ],
        "starter": "I would rather live in a system with ... because democratic responsibility requires everyone / individual freedom includes ..."
      },
      {
        "id": "g8_s4_28",
        "category": "Climate Speed vs Cost",
        "optionA": {
          "text": "Transition 100% of national energy to zero-carbon renewables within 7 years, even if household energy bills increase by 25%",
          "emoji": "🌿"
        },
        "optionB": {
          "text": "Transition to renewables over a 25-year timeline to keep energy costs stable and protect low-income families",
          "emoji": "⚡"
        },
        "prompts": [
          "What are the tradeoffs between climate urgency and social equity?",
          "Explain your strategy."
        ],
        "starter": "I would rather support ... because the ecological crisis requires immediate bold action / protecting vulnerable families from price shocks ..."
      },
      {
        "id": "g8_s4_29",
        "category": "Ethical Sponsorship",
        "optionA": {
          "text": "Decline a 20,000-dollar sponsorship deal from a corporation whose environmental practices you disagree with",
          "emoji": "🚫"
        },
        "optionB": {
          "text": "Accept the 20,000 dollars and donate 50% of it directly to environmental preservation charities",
          "emoji": "💵"
        },
        "prompts": [
          "Compare moral purity with pragmatic utilitarian action.",
          "How do you justify your choice?"
        ],
        "starter": "I would rather ... because standing firm on ethical principles / using corporate money to fund real charities ..."
      },
      {
        "id": "g8_s4_30",
        "category": "Future Higher Education",
        "optionA": {
          "text": "Replace traditional 4-year degrees with 2-year hands-on industry apprenticeships with zero student debt",
          "emoji": "🛠️"
        },
        "optionB": {
          "text": "Preserve comprehensive 4-year university education in philosophy, arts, and theoretical sciences",
          "emoji": "🎓"
        },
        "prompts": [
          "What is the primary purpose of higher education: career training or holistic intellectual growth?",
          "Explain."
        ],
        "starter": "I would rather support ... because practical debt-free apprenticeships / broad theoretical inquiry ..."
      },
      {
        "id": "g8_s4_31",
        "category": "Life Philosophy",
        "optionA": {
          "text": "Lead a high-achievement career with intense public pressure, creating major institutional reforms",
          "emoji": "🏛️"
        },
        "optionB": {
          "text": "Lead a quiet, peaceful life with close relationships, personal hobbies, and minimal stress",
          "emoji": "🌻"
        },
        "prompts": [
          "Compare the fulfillment of public service with the contentment of personal tranquility.",
          "What speaks to you?"
        ],
        "starter": "I would rather choose a ... life because having a major impact on society / finding inner peace and family happiness is ..."
      }
    ]
  },
  "prompts": {
    "stage1": [
      "Why did you pick this option?",
      "Tell us why you chose it.",
      "What is the best part about your choice?",
      "Why is this more fun for you?"
    ],
    "stage2": [
      "Give two reasons for your decision.",
      "Explain your choice to the class.",
      "What makes this better than the other option?",
      "What would you do first?"
    ],
    "stage3": [
      "What is the biggest advantage of your choice?",
      "What might be difficult about your choice?",
      "Would your friends agree with you? Why or why not?",
      "Compare your choice with the other option."
    ],
    "stage4": [
      "Compare your choice with the other option in detail.",
      "What is the biggest advantage and disadvantage of your decision?",
      "Would you make the exact same choice in real life 5 years from now?",
      "Give a real-life example to support your reasoning."
    ]
  },
  "reactions": [
    {
      "text": "GOOD CHOICE! 😎",
      "color": "#10b981"
    },
    {
      "text": "INTERESTING! 👀",
      "color": "#6366f1"
    },
    {
      "text": "THAT'S A TOUGH CHOICE! 🤔",
      "color": "#f59e0b"
    },
    {
      "text": "NICE ONE! 🎯",
      "color": "#ec4899"
    },
    {
      "text": "BOLD MOVE! 🚀",
      "color": "#8b5cf6"
    },
    {
      "text": "REALLY? 😂",
      "color": "#06b6d4"
    },
    {
      "text": "GREAT REASONING! 💡",
      "color": "#14b8a6"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WOULD_YOU_RATHER_DATA;
}
