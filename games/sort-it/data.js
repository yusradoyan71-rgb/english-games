/**
 * SORT IT! — Educational Game Dataset
 * Tailored for 7th and 8th Grade English Learners (CEFR A2 / A2+ / B1)
 * Meticulously curated, 100% unambiguous categories and pedagogical alignment.
 */

export const GAME_DATA = {
  grade7: {
    title: "Grade 7",
    subtitle: "Vocabulary, Categorization & Everyday Context",
    badge: "🟢 GRADE 7",
    targetCefr: "A2 – A2+",
    levels: [
      {
        id: "g7-l1",
        number: 1,
        title: "Basic Categories",
        description: "Learn the sorting station mechanic with familiar everyday words.",
        type: "relaxed",
        timeLimit: null,
        cardsTarget: 9,
        categories: [
          { id: "food", name: "FOOD", icon: "🍎", color: "#FF6B6B", bg: "rgba(255, 107, 107, 0.15)", border: "#ff6b6b" },
          { id: "animals", name: "ANIMALS", icon: "🐾", color: "#4ECDC4", bg: "rgba(78, 205, 196, 0.15)", border: "#4ecdc4" },
          { id: "places", name: "PLACES", icon: "🏛️", color: "#FFD93D", bg: "rgba(255, 217, 61, 0.15)", border: "#ffd93d" }
        ],
        deck: [
          { item: "Apple", category: "food", icon: "🍎", tip: "Something healthy you can eat" },
          { item: "Elephant", category: "animals", icon: "🐘", tip: "A huge wild mammal" },
          { item: "Hospital", category: "places", icon: "🏥", tip: "Where doctors help sick people" },
          { item: "Banana", category: "food", icon: "🍌", tip: "A long yellow fruit" },
          { item: "Dolphin", category: "animals", icon: "🐬", tip: "An intelligent sea creature" },
          { item: "School", category: "places", icon: "🏫", tip: "A place where students learn" },
          { item: "Pizza", category: "food", icon: "🍕", tip: "Delicious baked Italian food" },
          { item: "Kangaroo", category: "animals", icon: "🦘", tip: "An Australian jumping animal" },
          { item: "Library", category: "places", icon: "📚", tip: "A quiet place with books" },
          { item: "Sandwich", category: "food", icon: "🥪", tip: "Bread with cheese and meat" },
          { item: "Penguin", category: "animals", icon: "🐧", tip: "A black-and-white bird that swims" },
          { item: "Airport", category: "places", icon: "✈️", tip: "Where airplanes land and take off" }
        ]
      },
      {
        id: "g7-l2",
        number: 2,
        title: "Everyday Life",
        description: "Sort items from school, wardrobe, meals, and city travel.",
        type: "relaxed",
        timeLimit: null,
        cardsTarget: 12,
        categories: [
          { id: "school", name: "SCHOOL", icon: "✏️", color: "#6C5CE7", bg: "rgba(108, 92, 231, 0.15)", border: "#6C5CE7" },
          { id: "food", name: "FOOD", icon: "🥪", color: "#FF7675", bg: "rgba(255, 118, 117, 0.15)", border: "#FF7675" },
          { id: "clothes", name: "CLOTHES", icon: "🧥", color: "#00CEC9", bg: "rgba(0, 206, 201, 0.15)", border: "#00CEC9" },
          { id: "transport", name: "TRANSPORT", icon: "🚌", color: "#FDCB6E", bg: "rgba(253, 203, 110, 0.15)", border: "#FDCB6E" }
        ],
        deck: [
          { item: "Notebook", category: "school", icon: "📓" },
          { item: "Teacher", category: "school", icon: "👩‍🏫" },
          { item: "Whiteboard", category: "school", icon: "📋" },
          { item: "Hamburger", category: "food", icon: "🍔" },
          { item: "Omelet", category: "food", icon: "🍳" },
          { item: "Spaghetti", category: "food", icon: "🍝" },
          { item: "Jacket", category: "clothes", icon: "🧥" },
          { item: "Sneakers", category: "clothes", icon: "👟" },
          { item: "T-shirt", category: "clothes", icon: "👕" },
          { item: "Subway Train", category: "transport", icon: "🚇" },
          { item: "Bicycle", category: "transport", icon: "🚲" },
          { item: "School Bus", category: "transport", icon: "🚌" },
          { item: "Backpack", category: "school", icon: "🎒" },
          { item: "Scarf", category: "clothes", icon: "🧣" },
          { item: "Helicopter", category: "transport", icon: "🚁" }
        ]
      },
      {
        id: "g7-l3",
        number: 3,
        title: "Specific Categories",
        description: "Pay close attention to subtle differences between similar categories!",
        type: "focused",
        timeLimit: null,
        cardsTarget: 12,
        categories: [
          { id: "fruit", name: "FRUIT", icon: "🍓", color: "#E84393", bg: "rgba(232, 67, 147, 0.15)", border: "#E84393" },
          { id: "vegetables", name: "VEGETABLES", icon: "🥦", color: "#00B894", bg: "rgba(0, 184, 148, 0.15)", border: "#00B894" },
          { id: "drinks", name: "DRINKS", icon: "🥤", color: "#0984E3", bg: "rgba(9, 132, 227, 0.15)", border: "#0984E3" }
        ],
        deck: [
          { item: "Strawberry", category: "fruit", icon: "🍓" },
          { item: "Watermelon", category: "fruit", icon: "🍉" },
          { item: "Pineapple", category: "fruit", icon: "🍍" },
          { item: "Grapes", category: "fruit", icon: "🍇" },
          { item: "Broccoli", category: "vegetables", icon: "🥦" },
          { item: "Carrot", category: "vegetables", icon: "🥕" },
          { item: "Cucumber", category: "vegetables", icon: "🥒" },
          { item: "Spinach", category: "vegetables", icon: "🥬" },
          { item: "Fresh Lemonade", category: "drinks", icon: "🍋" },
          { item: "Orange Juice", category: "drinks", icon: "🍊" },
          { item: "Mineral Water", category: "drinks", icon: "💧" },
          { item: "Hot Chocolate", category: "drinks", icon: "☕" },
          { item: "Peach", category: "fruit", icon: "🍑" },
          { item: "Tomato", category: "vegetables", icon: "🍅" },
          { item: "Iced Tea", category: "drinks", icon: "🧋" }
        ]
      },
      {
        id: "g7-l4",
        number: 4,
        title: "Context & Sentences",
        description: "Read short 7th grade sentences and identify their core context.",
        type: "context",
        timeLimit: null,
        cardsTarget: 10,
        categories: [
          { id: "food", name: "FOOD & DIET", icon: "🍽️", color: "#E17055", bg: "rgba(225, 112, 85, 0.15)", border: "#E17055" },
          { id: "routines", name: "DAILY ROUTINES", icon: "⏰", color: "#6C5CE7", bg: "rgba(108, 92, 231, 0.15)", border: "#6C5CE7" },
          { id: "school", name: "SCHOOL & STUDY", icon: "🎒", color: "#00CEC9", bg: "rgba(0, 206, 201, 0.15)", border: "#00CEC9" }
        ],
        deck: [
          { item: "I eat a banana for breakfast every morning.", category: "food", icon: "🍌" },
          { item: "She brushes her teeth before going to sleep.", category: "routines", icon: "🪥" },
          { item: "We have an English quiz in the third period.", category: "school", icon: "📝" },
          { item: "My father cooks delicious chicken pasta on Sundays.", category: "food", icon: "🍗" },
          { item: "He wakes up at 7:00 AM on weekdays.", category: "routines", icon: "⏰" },
          { item: "The students are doing a science experiment in the lab.", category: "school", icon: "🔬" },
          { item: "Drinking warm milk helps me sleep well.", category: "food", icon: "🥛" },
          { item: "She packs her schoolbag every evening.", category: "routines", icon: "🎒" },
          { item: "Our history teacher gave us a project about ancient Rome.", category: "school", icon: "📜" },
          { item: "We ordered grilled vegetables and fish for dinner.", category: "food", icon: "🐟" },
          { item: "He takes a shower after exercising.", category: "routines", icon: "🚿" },
          { item: "I borrowed two novels from the school library.", category: "school", icon: "📖" }
        ]
      },
      {
        id: "g7-l5",
        number: 5,
        title: "Speed Sort Arena",
        description: "Sort as many cards as you can within 60 seconds! Build massive combos!",
        type: "speed",
        timeLimit: 60,
        cardsTarget: 16,
        categories: [
          { id: "food", name: "FOOD", icon: "🍕", color: "#FF7675", bg: "rgba(255, 118, 117, 0.15)", border: "#FF7675" },
          { id: "places", name: "PLACES", icon: "🏟️", color: "#74B9FF", bg: "rgba(116, 185, 255, 0.15)", border: "#74B9FF" },
          { id: "activities", name: "ACTIVITIES", icon: "⚽", color: "#55EFC4", bg: "rgba(85, 239, 196, 0.15)", border: "#55EFC4" },
          { id: "people", name: "PEOPLE & JOBS", icon: "🧑‍🚀", color: "#FDCB6E", bg: "rgba(253, 203, 110, 0.15)", border: "#FDCB6E" }
        ],
        deck: [
          { item: "Cheeseburger", category: "food", icon: "🍔" },
          { item: "Shopping Mall", category: "places", icon: "🏬" },
          { item: "Playing Basketball", category: "activities", icon: "🏀" },
          { item: "Dentist", category: "people", icon: "🦷" },
          { item: "Crispy Tacos", category: "food", icon: "🌮" },
          { item: "Football Stadium", category: "places", icon: "🏟️" },
          { item: "Riding a Skateboard", category: "activities", icon: "🛹" },
          { item: "Firefighter", category: "people", icon: "🧑‍🚒" },
          { item: "Pancakes with Honey", category: "food", icon: "🥞" },
          { item: "Art Museum", category: "places", icon: "🖼️" },
          { item: "Playing the Guitar", category: "activities", icon: "🎸" },
          { item: "Flight Attendant", category: "people", icon: "✈️" },
          { item: "Chocolate Ice Cream", category: "food", icon: "🍦" },
          { item: "Amusement Park", category: "places", icon: "🎡" },
          { item: "Swimming in the Pool", category: "activities", icon: "🏊" },
          { item: "Police Officer", category: "people", icon: "👮" },
          { item: "Fruit Salad", category: "food", icon: "🥗" },
          { item: "Cinema", category: "places", icon: "🍿" },
          { item: "Drawing a Comic", category: "activities", icon: "🎨" },
          { item: "Astronaut", category: "people", icon: "🚀" }
        ]
      }
    ]
  },

  grade8: {
    title: "Grade 8",
    subtitle: "Grammar Functions, Semantic Meanings & Master Challenges",
    badge: "🔵 GRADE 8",
    targetCefr: "A2+ – B1",
    levels: [
      {
        id: "g8-l1",
        number: 1,
        title: "Advanced Academic Vocabulary",
        description: "Sort modern high-level thematic vocabulary across 4 contemporary domains.",
        type: "focused",
        timeLimit: null,
        cardsTarget: 12,
        categories: [
          { id: "environment", name: "ENVIRONMENT", icon: "🌱", color: "#00B894", bg: "rgba(0, 184, 148, 0.15)", border: "#00B894" },
          { id: "technology", name: "TECHNOLOGY", icon: "🤖", color: "#0984E3", bg: "rgba(9, 132, 227, 0.15)", border: "#0984E3" },
          { id: "health", name: "HEALTH & BODY", icon: "🩺", color: "#FF7675", bg: "rgba(255, 118, 117, 0.15)", border: "#FF7675" },
          { id: "personality", name: "PERSONALITY", icon: "🎭", color: "#A29BFE", bg: "rgba(162, 155, 254, 0.15)", border: "#A29BFE" }
        ],
        deck: [
          { item: "Renewable Solar Energy", category: "environment", icon: "☀️" },
          { item: "Deforestation Crisis", category: "environment", icon: "🌲" },
          { item: "Pollution Prevention", category: "environment", icon: "♻️" },
          { item: "Artificial Intelligence", category: "technology", icon: "🧠" },
          { item: "Cloud Storage Server", category: "technology", icon: "☁️" },
          { item: "Cybersecurity Protection", category: "technology", icon: "🔒" },
          { item: "Physical Endurance", category: "health", icon: "🏃" },
          { item: "Nutritious Diet", category: "health", icon: "🥗" },
          { item: "Immune System", category: "health", icon: "🛡️" },
          { item: "Empathetic & Caring", category: "personality", icon: "🤝" },
          { item: "Determined & Ambitious", category: "personality", icon: "🎯" },
          { item: "Creative & Imaginative", category: "personality", icon: "💡" },
          { item: "Global Warming", category: "environment", icon: "🌡️" },
          { item: "Wireless Algorithm", category: "technology", icon: "📶" },
          { item: "Generous & Honest", category: "personality", icon: "🌟" }
        ]
      },
      {
        id: "g8-l2",
        number: 2,
        title: "Semantic & Word Meaning",
        description: "Analyze the tone and functional role of concepts and statements.",
        type: "focused",
        timeLimit: null,
        cardsTarget: 12,
        categories: [
          { id: "positive", name: "POSITIVE TONE", icon: "✨", color: "#55EFC4", bg: "rgba(85, 239, 196, 0.15)", border: "#55EFC4" },
          { id: "negative", name: "NEGATIVE TONE", icon: "⚠️", color: "#FF7675", bg: "rgba(255, 118, 117, 0.15)", border: "#FF7675" },
          { id: "problem", name: "PROBLEM", icon: "❓", color: "#FDCB6E", bg: "rgba(253, 203, 110, 0.15)", border: "#FDCB6E" },
          { id: "solution", name: "SOLUTION", icon: "💡", color: "#74B9FF", bg: "rgba(116, 185, 255, 0.15)", border: "#74B9FF" }
        ],
        deck: [
          { item: "Inspiring and uplifting speech", category: "positive", icon: "🌟" },
          { item: "Tremendous accomplishment", category: "positive", icon: "🏆" },
          { item: "Welcoming and supportive atmosphere", category: "positive", icon: "🤗" },
          { item: "Disastrous consequences", category: "negative", icon: "💥" },
          { item: "Disappointing feedback", category: "negative", icon: "📉" },
          { item: "Harsh criticism", category: "negative", icon: "🛑" },
          { item: "Traffic congestion downtown", category: "problem", icon: "🚗" },
          { item: "Severe water shortage", category: "problem", icon: "🚰" },
          { item: "Battery draining too quickly", category: "problem", icon: "🪫" },
          { item: "Install solar panels to save energy", category: "solution", icon: "☀️" },
          { item: "Create a study schedule", category: "solution", icon: "📅" },
          { item: "Recycle plastic bottles properly", category: "solution", icon: "♻️" },
          { item: "Wonderful teamwork spirit", category: "positive", icon: "🎉" },
          { item: "Heavy air pollution in the city", category: "problem", icon: "🏭" },
          { item: "Plant more trees along roads", category: "solution", icon: "🌳" }
        ]
      },
      {
        id: "g8-l3",
        number: 3,
        title: "Grammar Tense Master",
        description: "Identify verb tenses accurately from complete sentence structures.",
        type: "grammar",
        timeLimit: null,
        cardsTarget: 12,
        categories: [
          { id: "past", name: "SIMPLE PAST", icon: "⏮️", color: "#E17055", bg: "rgba(225, 112, 85, 0.15)", border: "#E17055" },
          { id: "present_cont", name: "PRES. CONTINUOUS", icon: "⏳", color: "#00CEC9", bg: "rgba(0, 206, 201, 0.15)", border: "#00CEC9" },
          { id: "present_perf", name: "PRES. PERFECT", icon: "🏅", color: "#6C5CE7", bg: "rgba(108, 92, 231, 0.15)", border: "#6C5CE7" },
          { id: "future", name: "FUTURE (WILL/GOING TO)", icon: "🚀", color: "#FDCB6E", bg: "rgba(253, 203, 110, 0.15)", border: "#FDCB6E" }
        ],
        deck: [
          { item: "We visited the British Museum last summer.", category: "past", icon: "🏛️" },
          { item: "She discovered an ancient coin in her garden.", category: "past", icon: "🪙" },
          { item: "They watched a fascinating documentary yesterday.", category: "past", icon: "📺" },
          { item: "Look! The students are conducting an experiment right now.", category: "present_cont", icon: "🧪" },
          { item: "I am preparing my English presentation at the moment.", category: "present_cont", icon: "💻" },
          { item: "The cat is sleeping peacefully on the sofa.", category: "present_cont", icon: "🐱" },
          { item: "They have already finished their science project.", category: "present_perf", icon: "✅" },
          { item: "Have you ever traveled to Japan?", category: "present_perf", icon: "✈️" },
          { item: "She has lived in this city for five years.", category: "present_perf", icon: "🏙️" },
          { item: "Scientists will launch a new space telescope next month.", category: "future", icon: "🔭" },
          { item: "We are going to visit our grandparents this weekend.", category: "future", icon: "👵" },
          { item: "I promise I will help you with your homework tonight.", category: "future", icon: "🤝" },
          { item: "He bought a new bicycle two days ago.", category: "past", icon: "🚲" },
          { item: "We haven't seen that new movie yet.", category: "present_perf", icon: "🎬" }
        ]
      },
      {
        id: "g8-l4",
        number: 4,
        title: "Language Functions & Modals",
        description: "Recognize communicative intentions: advice, obligation, permission, and predictions.",
        type: "function",
        timeLimit: null,
        cardsTarget: 12,
        categories: [
          { id: "advice", name: "ADVICE", icon: "💡", color: "#55EFC4", bg: "rgba(85, 239, 196, 0.15)", border: "#55EFC4" },
          { id: "obligation", name: "OBLIGATION", icon: "⚠️", color: "#FF7675", bg: "rgba(255, 118, 117, 0.15)", border: "#FF7675" },
          { id: "permission", name: "PERMISSION", icon: "🔑", color: "#74B9FF", bg: "rgba(116, 185, 255, 0.15)", border: "#74B9FF" },
          { id: "prediction", name: "PREDICTION", icon: "🔮", color: "#A29BFE", bg: "rgba(162, 155, 254, 0.15)", border: "#A29BFE" }
        ],
        deck: [
          { item: "You should drink at least two liters of water a day.", category: "advice", icon: "💧" },
          { item: "If you feel exhausted, you ought to take a break.", category: "advice", icon: "🛌" },
          { item: "You shouldn't spend too much time on screen games.", category: "advice", icon: "📱" },
          { item: "Drivers must stop when the traffic light turns red.", category: "obligation", icon: "🚦" },
          { item: "You have to wear a safety helmet on the construction site.", category: "obligation", icon: "⛑️" },
          { item: "Students must submit their exam papers on time.", category: "obligation", icon: "📄" },
          { item: "May I ask a question about the final project?", category: "permission", icon: "🙋" },
          { item: "You can borrow my colored pencils if you need them.", category: "permission", icon: "✏️" },
          { item: "Could we leave five minutes early today, teacher?", category: "permission", icon: "🚪" },
          { item: "I believe electric cars will replace petrol vehicles soon.", category: "prediction", icon: "⚡" },
          { item: "Look at those dark clouds; it might rain heavily tonight.", category: "prediction", icon: "🌧️" },
          { item: "Space tourism will become much cheaper in the future.", category: "prediction", icon: "🚀" },
          { item: "You should stretch before starting your workout.", category: "advice", icon: "🤸" },
          { item: "Passengers must fasten their seatbelts during takeoff.", category: "obligation", icon: "🛫" }
        ]
      },
      {
        id: "g8-l5",
        number: 5,
        title: "Discourse & Logic Sort",
        description: "Differentiate between Cause, Result, Opinions, and Verified Facts.",
        type: "logic",
        timeLimit: 50,
        cardsTarget: 12,
        categories: [
          { id: "cause", name: "CAUSE", icon: "🎯", color: "#E17055", bg: "rgba(225, 112, 85, 0.15)", border: "#E17055" },
          { id: "result", name: "RESULT", icon: "➡️", color: "#00CEC9", bg: "rgba(0, 206, 201, 0.15)", border: "#00CEC9" },
          { id: "fact", name: "FACT", icon: "🔬", color: "#6C5CE7", bg: "rgba(108, 92, 231, 0.15)", border: "#6C5CE7" },
          { id: "opinion", name: "OPINION", icon: "💭", color: "#FDCB6E", bg: "rgba(253, 203, 110, 0.15)", border: "#FDCB6E" }
        ],
        deck: [
          { item: "Because of the heavy snowstorm, flights were delayed.", category: "cause", icon: "❄️" },
          { item: "Since he didn't set an alarm, he woke up late.", category: "cause", icon: "⏰" },
          { item: "Owing to regular exercise, her stamina improved.", category: "cause", icon: "🏃" },
          { item: "He studied diligently; therefore, he passed with an A+.", category: "result", icon: "🎓" },
          { item: "The river flooded; as a result, the bridge was closed.", category: "result", icon: "🌊" },
          { item: "She practiced every day, so she won the piano contest.", category: "result", icon: "🎹" },
          { item: "Water boils at 100 degrees Celsius at sea level.", category: "fact", icon: "🌡️" },
          { item: "The Earth orbits around the Sun once every 365 days.", category: "fact", icon: "🌍" },
          { item: "The human heart pumps oxygenated blood through the body.", category: "fact", icon: "❤️" },
          { item: "In my view, mystery novels are more thrilling than action films.", category: "opinion", icon: "📚" },
          { item: "I think basketball is the most exciting sport to watch.", category: "opinion", icon: "🏀" },
          { item: "From my perspective, learning languages is easier when traveling.", category: "opinion", icon: "🗣️" },
          { item: "The Pacific Ocean is the largest ocean on Earth.", category: "fact", icon: "🌊" },
          { item: "The match was canceled due to sudden thunderstorms.", category: "cause", icon: "⚡" }
        ]
      },
      {
        id: "g8-l6",
        number: 6,
        title: "Grand Master Challenge",
        description: "The ultimate 5-category cognitive speed test! Sort with precision under pressure!",
        type: "speed",
        timeLimit: 45,
        cardsTarget: 15,
        categories: [
          { id: "advice", name: "ADVICE", icon: "💡", color: "#55EFC4", bg: "rgba(85, 239, 196, 0.15)", border: "#55EFC4" },
          { id: "obligation", name: "OBLIGATION", icon: "⚠️", color: "#FF7675", bg: "rgba(255, 118, 117, 0.15)", border: "#FF7675" },
          { id: "past", name: "SIMPLE PAST", icon: "⏮️", color: "#E17055", bg: "rgba(225, 112, 85, 0.15)", border: "#E17055" },
          { id: "present_perf", name: "PRES. PERFECT", icon: "🏅", color: "#6C5CE7", bg: "rgba(108, 92, 231, 0.15)", border: "#6C5CE7" },
          { id: "future", name: "FUTURE", icon: "🚀", color: "#0984E3", bg: "rgba(9, 132, 227, 0.15)", border: "#0984E3" }
        ],
        deck: [
          { item: "You should review your notes before the exam.", category: "advice", icon: "📝" },
          { item: "You ought to apologize for your rude remark.", category: "advice", icon: "💬" },
          { item: "Drivers must obey the speed limit in residential areas.", category: "obligation", icon: "🚗" },
          { item: "You have to bring your passport to the boarding gate.", category: "obligation", icon: "🛂" },
          { item: "We traveled across Europe by train last summer.", category: "past", icon: "🚆" },
          { item: "Alexander Graham Bell invented the telephone in 1876.", category: "past", icon: "📞" },
          { item: "She has already read three chapters of that novel.", category: "present_perf", icon: "📖" },
          { item: "Have they ever climbed Mount Everest?", category: "present_perf", icon: "🏔️" },
          { item: "We will plant twenty new trees in the school garden.", category: "future", icon: "🌱" },
          { item: "Autonomous drones will deliver packages very soon.", category: "future", icon: "🚁" },
          { item: "You should eat more fresh fruit instead of sweets.", category: "advice", icon: "🍎" },
          { item: "All candidates must wear identity badges in the building.", category: "obligation", icon: "🪪" },
          { item: "They watched the lunar eclipse from the rooftop yesterday.", category: "past", icon: "🌕" },
          { item: "He has lived in Istanbul since 2018.", category: "present_perf", icon: "🕌" },
          { item: "I am going to learn coding this summer holiday.", category: "future", icon: "💻" }
        ]
      }
    ]
  }
};
