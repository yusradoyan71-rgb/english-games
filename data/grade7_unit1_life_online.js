/**
 * GRADE 7 — UNIT 1: LIFE ONLINE
 * Comprehensive Master Question Bank & Game Datasets
 * Target: CEFR A2 (Easy), A2+ (Medium), B1 (Hard)
 * Total Curriculum-Aligned Questions: 130+ Items
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.Grade7Unit1LifeOnline = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  // =========================================================================
  // 1. READING PASSAGES
  // =========================================================================
  const READING_PASSAGES = [
    {
      id: "passage_1",
      title: "The Screen Time Dilemma",
      text: "Many teenagers today spend more than four hours a day on their smartphones. They use various applications to stream music, chat with classmates, and scroll through social media feeds. While these digital tools help young people keep in touch with friends and learn new skills, excessive screen time can cause headaches, eye fatigue, and poor sleep habits. Health experts encourage students to set daily time limits, turn off notifications during study hours, and spend more time exercising outdoors. Finding a healthy balance between online activities and real-world hobbies is the key to digital well-being."
    },
    {
      id: "passage_2",
      title: "How Social Media Algorithms Work",
      text: "Have you ever wondered why your social media feed shows specific videos? Computer programs called algorithms observe every click, like, and share. If you spend time watching photography tutorials, the algorithm will automatically recommend similar creative content. However, algorithms can also create 'echo chambers' where users only encounter opinions they already agree with. To become a responsible digital citizen, it is important to understand how these systems work, follow diverse creators, and protect your personal privacy online."
    },
    {
      id: "passage_3",
      title: "A Day Without the Internet",
      text: "Last Saturday, our school organized a 'Digital Detox Day' where students agreed to turn off their mobile devices for twelve hours. At first, many students felt nervous because they are used to checking notifications every few minutes. Instead of scrolling through short videos, students gathered in the park to play basketball, read books, and cook lunch together. In the evening, everyone shared their reflections. Most students decided that disconnecting occasionally helps them focus better and enjoy real conversations with family and friends."
    }
  ];

  // =========================================================================
  // 2. MASTER QUESTION BANK (130+ VERIFIED QUESTIONS)
  // =========================================================================
  const QUESTIONS = [
    // -----------------------------------------------------------------------
    // VOCABULARY: SOCIAL MEDIA (Q001 - Q020)
    // -----------------------------------------------------------------------
    {
      id: "g7_u1_q001",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Which verb means to send a photo or video from your phone to a website so others can see it?",
      options: ["upload", "download", "delete", "scroll"],
      correctIndex: 0,
      answer: "upload",
      explanation: "'Upload' means to transfer files from your personal device to an online server or platform."
    },
    {
      id: "g7_u1_q002",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "easy",
      question: "When you move your finger down the screen to view more content on a social network feed, you...",
      options: ["scroll", "swipe", "stream", "download"],
      correctIndex: 0,
      answer: "scroll",
      explanation: "'Scroll' refers to moving through text or images vertically on a digital screen."
    },
    {
      id: "g7_u1_q003",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "easy",
      question: "To save an image or document from the internet directly onto your tablet, you need to _____ it.",
      options: ["download", "upload", "stream", "browse"],
      correctIndex: 0,
      answer: "download",
      explanation: "'Download' means copying data or files from the internet onto your own device."
    },
    {
      id: "g7_u1_q004",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "easy",
      question: "If you subscribe to someone's profile to see all their new pictures and updates, you _____ them.",
      options: ["follow", "block", "download", "search"],
      correctIndex: 0,
      answer: "follow",
      explanation: "'Following' an account allows you to see their latest content on your main feed."
    },
    {
      id: "g7_u1_q005",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "easy",
      question: "When a song, dance, or topic becomes suddenly popular among thousands of internet users, it is a...",
      options: ["trend", "password", "browser", "notification"],
      correctIndex: 0,
      answer: "trend",
      explanation: "A 'trend' is a topic or activity that quickly becomes widely popular online."
    },
    {
      id: "g7_u1_q006",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Watching a live music concert in real time over the internet without downloading the full video is called...",
      options: ["streaming", "browsing", "posting", "logging on"],
      correctIndex: 0,
      answer: "streaming",
      explanation: "'Streaming' delivers audio or video continuously over the internet in real time."
    },
    {
      id: "g7_u1_q007",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Before you can check your email account, you must enter your username and password to...",
      options: ["log on", "swipe", "scroll", "upload"],
      correctIndex: 0,
      answer: "log on",
      explanation: "'Log on' (or log in) means accessing a secured system by entering your credentials."
    },
    {
      id: "g7_u1_q008",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "fill_in_blank",
      difficulty: "easy",
      question: "Quickly touching an icon on a smartphone touch screen with your fingertip is called a _____.",
      options: ["tap", "scroll", "download", "follow"],
      correctIndex: 0,
      answer: "tap",
      explanation: "A light, quick touch on a capacitive touch screen is referred to as a 'tap'."
    },
    {
      id: "g7_u1_q009",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "easy",
      question: "To move photos from left to right on a smartphone gallery, you _____ the screen horizontally.",
      options: ["swipe", "download", "click", "access"],
      correctIndex: 0,
      answer: "swipe",
      explanation: "'Swipe' involves gliding your finger across a touchscreen horizontally or vertically."
    },
    {
      id: "g7_u1_q010",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "medium",
      question: "David found a great science article and decided to _____ it on his profile so his classmates could read it.",
      options: ["share", "delete", "swipe", "tap"],
      correctIndex: 0,
      answer: "share",
      explanation: "'Share' means publishing or passing on content to other people on a platform."
    },
    {
      id: "g7_u1_q011",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "true_false",
      difficulty: "easy",
      question: "True or False: 'Uploading' means copying a video from the internet down to your own computer.",
      options: ["False", "True"],
      correctIndex: 0,
      answer: "False",
      explanation: "False. That is 'downloading'. 'Uploading' sends files from your device up to the internet."
    },
    {
      id: "g7_u1_q012",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "matching",
      difficulty: "easy",
      question: "Which action matches this description: 'Looking through several websites casually without a specific goal'?",
      options: ["browsing", "logging on", "streaming", "uploading"],
      correctIndex: 0,
      answer: "browsing",
      explanation: "'Browsing' means scanning or exploring websites and content in a relaxed manner."
    },
    {
      id: "g7_u1_q013",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "fill_in_blank",
      difficulty: "medium",
      question: "You need a verified account and passcode to _____ the school's online learning portal.",
      options: ["access", "trend", "scroll", "swipe"],
      correctIndex: 0,
      answer: "access",
      explanation: "'Access' means having the ability, permission, or right to enter an online system."
    },
    {
      id: "g7_u1_q014",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "easy",
      question: "When you press a physical mouse button on a desktop computer, you _____ on a link.",
      options: ["click", "swipe", "scroll", "stream"],
      correctIndex: 0,
      answer: "click",
      explanation: "We 'click' using a computer mouse, while on touchscreens we 'tap'."
    },
    {
      id: "g7_u1_q015",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "sentence_completion",
      difficulty: "medium",
      question: "Elena wrote a short review of her favourite video game and _____ it on her blog yesterday.",
      options: ["posted", "scrolled", "swiped", "followed"],
      correctIndex: 0,
      answer: "posted",
      explanation: "To 'post' means to display an article, message, or image publicly on the web."
    },
    {
      id: "g7_u1_q016",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "medium",
      question: "To find reliable information about British history, students usually _____ online using search engines.",
      options: ["search", "trend", "swipe", "download"],
      correctIndex: 0,
      answer: "search",
      explanation: "'Search' means querying the internet to find answers, websites, or images."
    },
    {
      id: "g7_u1_q017",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "true_false",
      difficulty: "easy",
      question: "True or False: When you 'follow' an artist on social media, you receive updates when they share new work.",
      options: ["True", "False"],
      correctIndex: 0,
      answer: "True",
      explanation: "True. Following connects you to a creator's public profile."
    },
    {
      id: "g7_u1_q018",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Which of the following is an example of a digital 'post'?",
      options: [
        "A photo with a caption published on your profile",
        "A physical textbook in your school locker",
        "A handwritten letter inside an envelope",
        "A phone charger plugged into the wall"
      ],
      correctIndex: 0,
      answer: "A photo with a caption published on your profile",
      explanation: "A digital post is content placed on a digital platform for others to view."
    },
    {
      id: "g7_u1_q019",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "sentence_correction",
      difficulty: "hard",
      question: "Identify the INCORRECT word in the sentence: 'She downloaded her new vacation selfie to Instagram.'",
      options: ["downloaded (should be 'uploaded')", "vacation", "selfie", "to"],
      correctIndex: 0,
      answer: "downloaded (should be 'uploaded')",
      explanation: "Sending an image from your device up to Instagram is 'uploading', not 'downloading'."
    },
    {
      id: "g7_u1_q020",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "social_media",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Why do users include hashtags (#) when they share a post?",
      options: [
        "To help other users find and follow related trends",
        "To lock their phone screen automatically",
        "To delete their old uploaded photos",
        "To charge their device battery faster"
      ],
      correctIndex: 0,
      answer: "To help other users find and follow related trends",
      explanation: "Hashtags categorize posts and connect them to trending discussions."
    },

    // -----------------------------------------------------------------------
    // VOCABULARY: APPS & TECHNOLOGY (Q021 - Q035)
    // -----------------------------------------------------------------------
    {
      id: "g7_u1_q021",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Which category of mobile app provides satellite maps and turn-by-turn road directions?",
      options: ["navigation", "photography", "mobile banking", "music"],
      correctIndex: 0,
      answer: "navigation",
      explanation: "Navigation applications (like Google Maps or GPS) help users find travel routes."
    },
    {
      id: "g7_u1_q022",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Calendar, to-do list, and document editing applications belong to which app category?",
      options: ["productivity", "reference", "art and design", "gaming"],
      correctIndex: 0,
      answer: "productivity",
      explanation: "Productivity apps help people organize work, schedule meetings, and finish tasks."
    },
    {
      id: "g7_u1_q023",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "multiple_choice",
      difficulty: "easy",
      question: "An application that counts your daily steps, monitors sleep, and records heart rate is a _____ app.",
      options: ["health and fitness", "navigation", "photography", "reference"],
      correctIndex: 0,
      answer: "health and fitness",
      explanation: "Health and fitness apps support personal physical exercise and well-being."
    },
    {
      id: "g7_u1_q024",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Online dictionaries, digital encyclopaedias, and language translation tools are examples of _____ apps.",
      options: ["reference", "productivity", "mobile banking", "art and design"],
      correctIndex: 0,
      answer: "reference",
      explanation: "Reference apps provide factual information, definitions, and study resources."
    },
    {
      id: "g7_u1_q025",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "multiple_choice",
      difficulty: "easy",
      question: "An application that allows parents to check bank account balances and pay bills securely is...",
      options: ["mobile banking", "photography", "navigation", "music"],
      correctIndex: 0,
      answer: "mobile banking",
      explanation: "Mobile banking apps enable financial transactions directly from a smartphone."
    },
    {
      id: "g7_u1_q026",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Apps used for drawing digital illustrations, sketching, and graphic typography are categorized as...",
      options: ["art and design", "health and fitness", "navigation", "reference"],
      correctIndex: 0,
      answer: "art and design",
      explanation: "Art and design apps provide creative canvases, brushes, and design tools."
    },
    {
      id: "g7_u1_q027",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Applications like Spotify or Apple Music, where users discover playlists and podcasts, are _____ apps.",
      options: ["music", "navigation", "productivity", "mobile banking"],
      correctIndex: 0,
      answer: "music",
      explanation: "Music apps allow streaming and playback of songs and audio recordings."
    },
    {
      id: "g7_u1_q028",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "fill_in_blank",
      difficulty: "easy",
      question: "Apps with creative lighting filters, cropping tools, and lenses are classified under _____.",
      options: ["photography", "navigation", "reference", "mobile banking"],
      correctIndex: 0,
      answer: "photography",
      explanation: "Photography apps focus on capturing and editing still photographs."
    },
    {
      id: "g7_u1_q029",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "matching",
      difficulty: "medium",
      question: "Match the need: 'You are travelling in a new city and cannot find the train station.' Which app do you open?",
      options: ["A navigation app", "A mobile banking app", "A photography app", "A music app"],
      correctIndex: 0,
      answer: "A navigation app",
      explanation: "Navigation apps provide interactive maps and directions to your destination."
    },
    {
      id: "g7_u1_q030",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "matching",
      difficulty: "medium",
      question: "Match the need: 'You want to check the meaning and pronunciation of an unfamiliar English word.' Which app helps?",
      options: ["A reference app", "A gaming app", "A mobile banking app", "A fitness tracker"],
      correctIndex: 0,
      answer: "A reference app",
      explanation: "Digital dictionaries and encyclopaedias are reference tools."
    },
    {
      id: "g7_u1_q031",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "true_false",
      difficulty: "easy",
      question: "True or False: Productivity apps are specifically designed to waste time and distract students from homework.",
      options: ["False", "True"],
      correctIndex: 0,
      answer: "False",
      explanation: "False. Productivity apps exist to help users manage their time and accomplish goals."
    },
    {
      id: "g7_u1_q032",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Which feature is commonly found in health and fitness apps?",
      options: [
        "A daily water intake tracker and step counter",
        "A tool for editing video soundtracks",
        "A digital currency exchange calculator",
        "A street navigation compass"
      ],
      correctIndex: 0,
      answer: "A daily water intake tracker and step counter",
      explanation: "Tracking hydration and physical movement are core fitness app features."
    },
    {
      id: "g7_u1_q033",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "sentence_completion",
      difficulty: "medium",
      question: "Liam loves sketching comic characters on his tablet using a popular _____ app.",
      options: ["art and design", "mobile banking", "navigation", "reference"],
      correctIndex: 0,
      answer: "art and design",
      explanation: "Sketching and drawing are primary functions of art and design apps."
    },
    {
      id: "g7_u1_q034",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Why do mobile banking applications require two-factor authentication (like a fingerprint or SMS code)?",
      options: [
        "To protect users' financial security and confidential data",
        "To make the application look colourful",
        "To stream high-definition background music",
        "To increase the battery life of the phone"
      ],
      correctIndex: 0,
      answer: "To protect users' financial security and confidential data",
      explanation: "Two-factor authentication prevents unauthorized access to sensitive financial accounts."
    },
    {
      id: "g7_u1_q035",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "apps",
      format: "true_false",
      difficulty: "easy",
      question: "True or False: A GPS navigation app requires satellite or internet location services to pinpoint your position.",
      options: ["True", "False"],
      correctIndex: 0,
      answer: "True",
      explanation: "True. Navigation apps depend on GPS satellite signals and location data."
    },

    // -----------------------------------------------------------------------
    // VOCABULARY: DIGITAL COMMUNICATION & WORD FORMATION (Q036 - Q050)
    // -----------------------------------------------------------------------
    {
      id: "g7_u1_q036",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "digital_communication",
      format: "multiple_choice",
      difficulty: "medium",
      question: "The automated mathematical rules used by social platforms to rank and suggest posts are called...",
      options: ["algorithms", "echo chambers", "passwords", "screens"],
      correctIndex: 0,
      answer: "algorithms",
      explanation: "Algorithms analyze user interactions to predict which content they will find engaging."
    },
    {
      id: "g7_u1_q037",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "digital_communication",
      format: "multiple_choice",
      difficulty: "medium",
      question: "The amount of time a person spends using smartphones, computers, or tablets every day is known as...",
      options: ["screen time", "digital identity", "online connection", "algorithm"],
      correctIndex: 0,
      answer: "screen time",
      explanation: "'Screen time' measures the total hours spent looking at electronic displays."
    },
    {
      id: "g7_u1_q038",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "digital_communication",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Your right to keep your personal information, photos, and location confidential from strangers is your online...",
      options: ["privacy", "algorithm", "screen time", "hashtag"],
      correctIndex: 0,
      answer: "privacy",
      explanation: "Digital 'privacy' refers to protecting personal data from public exposure or misuse."
    },
    {
      id: "g7_u1_q039",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "digital_communication",
      format: "multiple_choice",
      difficulty: "hard",
      question: "An online environment where people only encounter opinions, news, and views that confirm their existing beliefs is an...",
      options: ["echo chamber", "algorithm", "online connection", "open network"],
      correctIndex: 0,
      answer: "echo chamber",
      explanation: "An 'echo chamber' isolates users from opposing views by constantly echoing the same opinions."
    },
    {
      id: "g7_u1_q040",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "digital_communication",
      format: "multiple_choice",
      difficulty: "medium",
      question: "The complete profile, photos, comments, and history that represent a person on the internet is their...",
      options: ["digital identity", "screen time", "echo chamber", "network cable"],
      correctIndex: 0,
      answer: "digital identity",
      explanation: "Your 'digital identity' is the online persona and data footprint associated with you."
    },
    {
      id: "g7_u1_q041",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "word_formation",
      format: "fill_in_blank",
      difficulty: "medium",
      question: "Complete with the correct noun form: 'The teacher praised Lucas for the excellent _____ of his project.' (organize)",
      options: ["organization", "organizing", "organize", "organized"],
      correctIndex: 0,
      answer: "organization",
      explanation: "The noun form of the verb 'organize' is 'organization'."
    },
    {
      id: "g7_u1_q042",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "word_formation",
      format: "fill_in_blank",
      difficulty: "medium",
      question: "Complete with the correct noun: 'Deleting social media apps during exam week was a sensible _____.' (decide)",
      options: ["decision", "deciding", "decisive", "decided"],
      correctIndex: 0,
      answer: "decision",
      explanation: "The noun form of the verb 'decide' is 'decision'."
    },
    {
      id: "g7_u1_q043",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "word_formation",
      format: "fill_in_blank",
      difficulty: "medium",
      question: "Complete with the correct noun: 'With positive _____ from her parents, Maya started her own coding channel.' (encourage)",
      options: ["encouragement", "encourage", "encouraging", "encouraged"],
      correctIndex: 0,
      answer: "encouragement",
      explanation: "The suffix '-ment' turns the verb 'encourage' into the noun 'encouragement'."
    },
    {
      id: "g7_u1_q044",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "word_formation",
      format: "fill_in_blank",
      difficulty: "medium",
      question: "Complete with the noun: 'Clear communication online prevents common _____ between classmates.' (understand)",
      options: ["misunderstandings", "understandable", "understood", "understand"],
      correctIndex: 0,
      answer: "misunderstandings",
      explanation: "'Misunderstanding' is the noun form describing a failure to understand correctly."
    },
    {
      id: "g7_u1_q045",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "digital_communication",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Which of the following is an effective habit to protect your online privacy?",
      options: [
        "Using strong, unique passwords and keeping them private",
        "Sharing your home address in public comment sections",
        "Accepting friend requests from complete strangers",
        "Posting credit card numbers online"
      ],
      correctIndex: 0,
      answer: "Using strong, unique passwords and keeping them private",
      explanation: "Strong passwords prevent unauthorized access to personal accounts."
    },
    {
      id: "g7_u1_q046",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "digital_communication",
      format: "true_false",
      difficulty: "easy",
      question: "True or False: Your digital footprint includes posts you publish and comments you write on social media.",
      options: ["True", "False"],
      correctIndex: 0,
      answer: "True",
      explanation: "True. All online activities and traces contribute to your digital footprint."
    },
    {
      id: "g7_u1_q047",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "digital_communication",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Why can 'echo chambers' on social networks be problematic for young people?",
      options: [
        "They limit exposure to different perspectives and critical thinking",
        "They make smartphones run out of battery faster",
        "They stop users from streaming music",
        "They delete photos from the phone gallery"
      ],
      correctIndex: 0,
      answer: "They limit exposure to different perspectives and critical thinking",
      explanation: "Echo chambers isolate users from balanced viewpoints and alternative facts."
    },
    {
      id: "g7_u1_q048",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "word_formation",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Which suffix is added to 'organize' to form the noun 'organization'?",
      options: ["-ation", "-ment", "-ness", "-ful"],
      correctIndex: 0,
      answer: "-ation",
      explanation: "The suffix '-ation' converts verbs like organize, inform, and imagine into nouns."
    },
    {
      id: "g7_u1_q049",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "digital_communication",
      format: "sentence_completion",
      difficulty: "medium",
      question: "Teenagers can build positive online _____ by joining international study groups and forums.",
      options: ["connections", "algorithms", "passwords", "screens"],
      correctIndex: 0,
      answer: "connections",
      explanation: "'Online connections' refers to relationships and networks built between internet users."
    },
    {
      id: "g7_u1_q050",
      grade: 7,
      unit: "Life Online",
      topic: "vocabulary",
      subtopic: "word_formation",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Which sentence uses the noun form of 'decide' correctly?",
      options: [
        "She made an important decision to reduce her screen time.",
        "She made an important decide to reduce her screen time.",
        "She made an important deciding to reduce her screen time.",
        "She made an important decisively to reduce her screen time."
      ],
      correctIndex: 0,
      answer: "She made an important decision to reduce her screen time.",
      explanation: "'Decision' is the correct countable noun preceded by the article 'an'."
    },

    // -----------------------------------------------------------------------
    // GRAMMAR: PRESENT SIMPLE VS CONTINUOUS & STATIVE VERBS (Q051 - Q075)
    // -----------------------------------------------------------------------
    {
      id: "g7_u1_q051",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Sarah usually _____ her emails in the evening after dinner.",
      options: ["checks", "is checking", "check", "are checking"],
      correctIndex: 0,
      answer: "checks",
      explanation: "We use the Present Simple ('checks') for routine actions and habits with 'usually'."
    },
    {
      id: "g7_u1_q052",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Look! Lucas _____ a live video of the science fair right now.",
      options: ["is streaming", "streams", "stream", "are streaming"],
      correctIndex: 0,
      answer: "is streaming",
      explanation: "'Right now' indicates an action in progress, requiring the Present Continuous ('is streaming')."
    },
    {
      id: "g7_u1_q053",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "stative_verbs",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Which sentence is grammatically CORRECT?",
      options: [
        "I understand how social media algorithms work.",
        "I am understanding how social media algorithms work.",
        "I understanding how social media algorithms work.",
        "I is understanding how social media algorithms work."
      ],
      correctIndex: 0,
      answer: "I understand how social media algorithms work.",
      explanation: "'Understand' is a stative verb expressing a mental state and is not used in the continuous form."
    },
    {
      id: "g7_u1_q054",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "stative_verbs",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Maya _____ a new smartphone because her old one is completely broken.",
      options: ["needs", "is needing", "need", "are needing"],
      correctIndex: 0,
      answer: "needs",
      explanation: "'Need' is a stative verb of necessity and does not take the continuous form."
    },
    {
      id: "g7_u1_q055",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "fill_in_blank",
      difficulty: "medium",
      question: "They _____ (not play) online games at the moment; they are doing their English homework.",
      options: ["are not playing", "do not play", "not play", "is not playing"],
      correctIndex: 0,
      answer: "are not playing",
      explanation: "'At the moment' requires the Present Continuous negative: 'are not playing'."
    },
    {
      id: "g7_u1_q056",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "stative_verbs",
      format: "multiple_choice",
      difficulty: "easy",
      question: "This tablet _____ to my sister; she bought it with her own pocket money.",
      options: ["belongs", "is belonging", "belong", "belonging"],
      correctIndex: 0,
      answer: "belongs",
      explanation: "'Belong' is a stative verb expressing possession and takes the Present Simple."
    },
    {
      id: "g7_u1_q057",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Why _____ you _____ through your phone while the teacher is explaining the lesson?",
      options: ["are / scrolling", "do / scroll", "is / scrolling", "does / scroll"],
      correctIndex: 0,
      answer: "are / scrolling",
      explanation: "Question for an action happening right now uses Present Continuous: 'Why are you scrolling...?'"
    },
    {
      id: "g7_u1_q058",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "stative_verbs",
      format: "multiple_choice",
      difficulty: "medium",
      question: "I _____ that excessive screen time is bad for children's health.",
      options: ["believe", "am believing", "believes", "are believing"],
      correctIndex: 0,
      answer: "believe",
      explanation: "'Believe' expresses an opinion and is a stative verb."
    },
    {
      id: "g7_u1_q059",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "sentence_correction",
      difficulty: "hard",
      question: "Find the grammatical error: 'Right now, Ethan prefers to read his messages on his computer.'",
      options: [
        "No error: 'prefer' is stative and correct in simple present",
        "'prefers' should be 'is preferring'",
        "'read' should be 'reading'",
        "'Right now' cannot be used with simple present"
      ],
      correctIndex: 0,
      answer: "No error: 'prefer' is stative and correct in simple present",
      explanation: "Even with 'right now', stative verbs like 'prefer' remain in the simple present."
    },
    {
      id: "g7_u1_q060",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "multiple_choice",
      difficulty: "easy",
      question: "How often _____ your brother post videos on his YouTube channel?",
      options: ["does", "is", "do", "are"],
      correctIndex: 0,
      answer: "does",
      explanation: "Questions about frequency with third-person singular ('your brother') use the auxiliary 'does'."
    },
    {
      id: "g7_u1_q061",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "stative_verbs",
      format: "true_false",
      difficulty: "medium",
      question: "True or False: The sentence 'She is knowing all the passwords to her social accounts' is grammatically correct.",
      options: ["False", "True"],
      correctIndex: 0,
      answer: "False",
      explanation: "False. 'Know' is a stative verb and cannot be used in continuous tense: 'She knows...' is correct."
    },
    {
      id: "g7_u1_q062",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "fill_in_blank",
      difficulty: "medium",
      question: "Be quiet, please! Dad _____ (talk) to an IT technician on video call.",
      options: ["is talking", "talks", "are talking", "talked"],
      correctIndex: 0,
      answer: "is talking",
      explanation: "An ongoing action signalled by 'Be quiet!' requires the Present Continuous."
    },
    {
      id: "g7_u1_q063",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "stative_verbs",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Do you _____ the name of the app we used in yesterday's photography workshop?",
      options: ["remember", "remembering", "are remembering", "remembers"],
      correctIndex: 0,
      answer: "remember",
      explanation: "'Remember' is a stative verb of cognition used in the base form after 'Do you'."
    },
    {
      id: "g7_u1_q064",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Social media influencers usually _____ new photos every day to keep their followers engaged.",
      options: ["upload", "are uploading", "uploads", "is uploading"],
      correctIndex: 0,
      answer: "upload",
      explanation: "'Influencers' is plural and 'usually' indicates a habit, so we use base verb 'upload'."
    },
    {
      id: "g7_u1_q065",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "stative_verbs",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Which of the following contains a STATIVE verb that describes an emotional preference?",
      options: [
        "I hate receiving spam notifications at night.",
        "I am typing a long comment on the forum.",
        "They are downloading the application now.",
        "We are clicking on the website banner."
      ],
      correctIndex: 0,
      answer: "I hate receiving spam notifications at night.",
      explanation: "'Hate' is a stative verb expressing an emotional state."
    },
    {
      id: "g7_u1_q066",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "sentence_completion",
      difficulty: "easy",
      question: "Currently, our school _____ (create) a new digital magazine for Grade 7 students.",
      options: ["is creating", "creates", "create", "created"],
      correctIndex: 0,
      answer: "is creating",
      explanation: "'Currently' describes a temporary project in progress: 'is creating'."
    },
    {
      id: "g7_u1_q067",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "stative_verbs",
      format: "multiple_choice",
      difficulty: "medium",
      question: "This camera filter _____ really creative and stylish.",
      options: ["looks", "is looking", "look", "are looking"],
      correctIndex: 0,
      answer: "looks",
      explanation: "'Look' when describing an appearance or impression functions as a stative verb ('looks')."
    },
    {
      id: "g7_u1_q068",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Online servers _____ vast amounts of user information every second.",
      options: ["process", "is processing", "processes", "processing"],
      correctIndex: 0,
      answer: "process",
      explanation: "A general technological fact with plural subject ('servers') takes the Present Simple 'process'."
    },
    {
      id: "g7_u1_q069",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "multiple_choice",
      difficulty: "medium",
      question: "A: 'What are you doing?' — B: 'I _____ for reliable sources for my history presentation.'",
      options: ["am searching", "search", "searches", "is searching"],
      correctIndex: 0,
      answer: "am searching",
      explanation: "The response to 'What are you doing?' must use the Present Continuous: 'I am searching'."
    },
    {
      id: "g7_u1_q070",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "stative_verbs",
      format: "true_false",
      difficulty: "hard",
      question: "True or False: Stative verbs such as 'like', 'love', and 'hate' can easily be used in the Present Continuous when describing habits.",
      options: ["False", "True"],
      correctIndex: 0,
      answer: "False",
      explanation: "False. Stative verbs are not used in continuous tenses to describe habits."
    },
    {
      id: "g7_u1_q071",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "sentence_correction",
      difficulty: "hard",
      question: "Correct the mistake: 'My friend is never downloading apps without checking the ratings.'",
      options: [
        "My friend never downloads apps without checking the ratings.",
        "My friend is never download apps.",
        "My friend never is downloading apps.",
        "My friend downloads never apps."
      ],
      correctIndex: 0,
      answer: "My friend never downloads apps without checking the ratings.",
      explanation: "Frequency adverbs like 'never' paired with regular routines require the simple present."
    },
    {
      id: "g7_u1_q072",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "stative_verbs",
      format: "multiple_choice",
      difficulty: "hard",
      question: "I _____ what you mean, but I still think we should turn off our phones during dinner.",
      options: ["see", "am seeing", "seeing", "is seeing"],
      correctIndex: 0,
      answer: "see",
      explanation: "'See' meaning 'understand' is a stative verb: 'I see what you mean'."
    },
    {
      id: "g7_u1_q073",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "multiple_choice",
      difficulty: "easy",
      question: "The website _____ very slowly whenever thousands of people try to log on simultaneously.",
      options: ["runs", "is running", "run", "running"],
      correctIndex: 0,
      answer: "runs",
      explanation: "Conditional general truth about how a system behaves takes the Present Simple."
    },
    {
      id: "g7_u1_q074",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "present_tenses",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Listen! Your mobile phone _____ on the desk. You must have a new notification.",
      options: ["is vibrating", "vibrates", "vibrate", "vibrated"],
      correctIndex: 0,
      answer: "is vibrating",
      explanation: "'Listen!' draws attention to an immediate ongoing event, requiring Present Continuous."
    },
    {
      id: "g7_u1_q075",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "stative_verbs",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Which verb can be BOTH stative and action, depending on the meaning?",
      options: ["think", "belong", "know", "need"],
      correctIndex: 0,
      answer: "think",
      explanation: "'Think' is stative when meaning 'have an opinion' (I think it's good), but action when meaning 'consider mentally' (I am thinking about it)."
    },

    // -----------------------------------------------------------------------
    // GRAMMAR: GERUNDS, INFINITIVES & VERB PATTERNS (Q076 - Q100)
    // -----------------------------------------------------------------------
    {
      id: "g7_u1_q076",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Chloe really enjoys _____ creative videos with her digital photography app.",
      options: ["making", "to make", "make", "made"],
      correctIndex: 0,
      answer: "making",
      explanation: "The verb 'enjoy' is always followed by a gerund (verb + -ing)."
    },
    {
      id: "g7_u1_q077",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "easy",
      question: "We decided _____ our screen time to two hours a day to improve our sleep.",
      options: ["to limit", "limiting", "limit", "limited"],
      correctIndex: 0,
      answer: "to limit",
      explanation: "The verb 'decide' is followed by a to-infinitive: 'decided to limit'."
    },
    {
      id: "g7_u1_q078",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "hard",
      question: "You should avoid _____ personal details like your home address on public forums.",
      options: ["sharing", "to share", "share", "shared"],
      correctIndex: 0,
      answer: "sharing",
      explanation: "'Avoid' is followed by a gerund (verb + -ing): 'avoid sharing'."
    },
    {
      id: "g7_u1_q079",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "hard",
      question: "After trying three times, Kenji managed _____ onto his locked account.",
      options: ["to log", "logging", "log", "logged"],
      correctIndex: 0,
      answer: "to log",
      explanation: "'Manage' takes a to-infinitive: 'managed to log on'."
    },
    {
      id: "g7_u1_q080",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Many teenagers spend too much time _____ through social feeds before going to sleep.",
      options: ["scrolling", "to scroll", "scroll", "scrolled"],
      correctIndex: 0,
      answer: "scrolling",
      explanation: "The expression 'spend time' is followed by a gerund: 'spend time scrolling'."
    },
    {
      id: "g7_u1_q081",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "fill_in_blank",
      difficulty: "hard",
      question: "She promised _____ (turn off) her tablet before nine o'clock tonight.",
      options: ["to turn off", "turning off", "turn off", "turned off"],
      correctIndex: 0,
      answer: "to turn off",
      explanation: "'Promise' is followed by a to-infinitive: 'promised to turn off'."
    },
    {
      id: "g7_u1_q082",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Leo is very good at _____ mobile apps using block coding.",
      options: ["designing", "to design", "design", "designed"],
      correctIndex: 0,
      answer: "designing",
      explanation: "Prepositions like 'at' in 'good at' are always followed by a gerund: 'good at designing'."
    },
    {
      id: "g7_u1_q083",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "easy",
      question: "I hope _____ a professional game designer when I finish university.",
      options: ["to become", "becoming", "become", "became"],
      correctIndex: 0,
      answer: "to become",
      explanation: "'Hope' takes a to-infinitive: 'hope to become'."
    },
    {
      id: "g7_u1_q084",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "hard",
      question: "The student refused _____ his confidential password to his classmates.",
      options: ["to give", "giving", "give", "gave"],
      correctIndex: 0,
      answer: "to give",
      explanation: "'Refuse' is followed by a to-infinitive: 'refused to give'."
    },
    {
      id: "g7_u1_q085",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "hard",
      question: "We are all looking forward to _____ the new digital media studio at school.",
      options: ["visiting", "to visit", "visit", "visited"],
      correctIndex: 0,
      answer: "visiting",
      explanation: "In 'look forward to', 'to' is a preposition, so it is followed by a gerund: 'looking forward to visiting'."
    },
    {
      id: "g7_u1_q086",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "sentence_completion",
      difficulty: "easy",
      question: "Fatima agreed _____ (help) me edit my digital presentation.",
      options: ["to help", "helping", "help", "helped"],
      correctIndex: 0,
      answer: "to help",
      explanation: "'Agree' is followed by a to-infinitive: 'agreed to help'."
    },
    {
      id: "g7_u1_q087",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "true_false",
      difficulty: "medium",
      question: "True or False: Both 'I like to browse photo galleries' and 'I like browsing photo galleries' are grammatically acceptable.",
      options: ["True", "False"],
      correctIndex: 0,
      answer: "True",
      explanation: "True. Verbs like 'like', 'love', and 'hate' can take either a gerund or a to-infinitive with little difference."
    },
    {
      id: "g7_u1_q088",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Don't forget _____ your work to cloud storage before shutting down your computer.",
      options: ["to save", "saving", "save", "saved"],
      correctIndex: 0,
      answer: "to save",
      explanation: "'Forget + to-infinitive' refers to remembering an action you need to do in the future."
    },
    {
      id: "g7_u1_q089",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "sentence_correction",
      difficulty: "hard",
      question: "Identify the error: 'He suggested to download an ad-blocker for safer browsing.'",
      options: [
        "'to download' should be 'downloading'",
        "'ad-blocker' is misspelled",
        "'for' should be 'to'",
        "'browsing' should be 'browse'"
      ],
      correctIndex: 0,
      answer: "'to download' should be 'downloading'",
      explanation: "The verb 'suggest' takes a gerund ('suggested downloading') or a clause, NOT a to-infinitive."
    },
    {
      id: "g7_u1_q090",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "hard",
      question: "I can't imagine _____ without the internet; we use it for study, travel, and communication.",
      options: ["living", "to live", "live", "lived"],
      correctIndex: 0,
      answer: "living",
      explanation: "'Imagine' is followed by a gerund: 'imagine living'."
    },
    {
      id: "g7_u1_q091",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "fill_in_blank",
      difficulty: "medium",
      question: "Are you interested in _____ (learn) how to create mobile games?",
      options: ["learning", "to learn", "learn", "learned"],
      correctIndex: 0,
      answer: "learning",
      explanation: "Prepositions like 'in' in 'interested in' are followed by a gerund: 'learning'."
    },
    {
      id: "g7_u1_q092",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Lucas wants _____ his own podcast about technology and artificial intelligence.",
      options: ["to start", "starting", "start", "started"],
      correctIndex: 0,
      answer: "to start",
      explanation: "'Want' is followed by a to-infinitive: 'wants to start'."
    },
    {
      id: "g7_u1_q093",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "hard",
      question: "She gave up _____ video games late at night because she was always tired at school.",
      options: ["playing", "to play", "play", "played"],
      correctIndex: 0,
      answer: "playing",
      explanation: "Phrasal verbs ending with a preposition like 'give up' take a gerund: 'give up playing'."
    },
    {
      id: "g7_u1_q094",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "true_false",
      difficulty: "medium",
      question: "True or False: In English, a gerund acts as a noun in a sentence.",
      options: ["True", "False"],
      correctIndex: 0,
      answer: "True",
      explanation: "True. A gerund (verb + -ing) functions as a noun (subject or object)."
    },
    {
      id: "g7_u1_q095",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Remember _____ your privacy settings every few months to stay safe online.",
      options: ["to check", "checking", "check", "checked"],
      correctIndex: 0,
      answer: "to check",
      explanation: "'Remember + to-infinitive' is a reminder to perform a necessary future duty."
    },
    {
      id: "g7_u1_q096",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "sentence_completion",
      difficulty: "hard",
      question: "_____ (stream) music online requires a stable Wi-Fi or mobile data connection.",
      options: ["Streaming", "To stream", "Stream", "Streamed"],
      correctIndex: 0,
      answer: "Streaming",
      explanation: "Gerunds commonly serve as the subject of a sentence: 'Streaming music requires...'."
    },
    {
      id: "g7_u1_q097",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "hard",
      question: "He apologized for _____ his friend's embarrassing photo without permission.",
      options: ["posting", "to post", "post", "posted"],
      correctIndex: 0,
      answer: "posting",
      explanation: "Preposition 'for' in 'apologized for' takes a gerund: 'posting'."
    },
    {
      id: "g7_u1_q098",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "easy",
      question: "My parents encouraged me _____ a digital detox over the weekend.",
      options: ["to try", "trying", "try", "tried"],
      correctIndex: 0,
      answer: "to try",
      explanation: "'Encourage + object' takes a to-infinitive: 'encouraged me to try'."
    },
    {
      id: "g7_u1_q099",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Which sentence uses BOTH a gerund and an infinitive correctly?",
      options: [
        "She decided to avoid sharing private information online.",
        "She decided avoiding to share private information online.",
        "She decided to avoid to share private information online.",
        "She decided avoiding sharing to private information online."
      ],
      correctIndex: 0,
      answer: "She decided to avoid sharing private information online.",
      explanation: "'Decided' takes infinitive 'to avoid', and 'avoid' takes gerund 'sharing'."
    },
    {
      id: "g7_u1_q100",
      grade: 7,
      unit: "Life Online",
      topic: "grammar",
      subtopic: "gerunds_infinitives",
      format: "fill_in_blank",
      difficulty: "easy",
      question: "We plan _____ (launch) our school tech club next Monday.",
      options: ["to launch", "launching", "launch", "launched"],
      correctIndex: 0,
      answer: "to launch",
      explanation: "'Plan' is followed by a to-infinitive: 'plan to launch'."
    },

    // -----------------------------------------------------------------------
    // FUNCTIONAL LANGUAGE, OPINIONS & LINKERS (Q101 - Q115)
    // -----------------------------------------------------------------------
    {
      id: "g7_u1_q101",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "natural_response",
      difficulty: "easy",
      question: "Maya: 'In my opinion, students should leave their mobile phones in their lockers during school hours.'\nLucas agrees. What does Lucas say?",
      options: [
        "I couldn't agree more. It helps us focus much better.",
        "I'm afraid I don't know your name.",
        "I upload photos every day.",
        "Can you send me your password?"
      ],
      correctIndex: 0,
      answer: "I couldn't agree more. It helps us focus much better.",
      explanation: "'I couldn't agree more' is a natural, polite expression of strong agreement."
    },
    {
      id: "g7_u1_q102",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "natural_response",
      difficulty: "medium",
      question: "Emma: 'Social media is the best way to spend free time on weekends.'\nDavid politely disagrees. What does David say?",
      options: [
        "I see your point, but spending too much time online is unhealthy.",
        "You are completely foolish.",
        "What time does the bus leave?",
        "I don't have any apps."
      ],
      correctIndex: 0,
      answer: "I see your point, but spending too much time online is unhealthy.",
      explanation: "'I see your point, but...' is a polite way to introduce disagreement without being rude."
    },
    {
      id: "g7_u1_q103",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Which linker is used to add EXTRA supporting information to an argument?",
      options: ["Furthermore", "However", "On the other hand", "Whereas"],
      correctIndex: 0,
      answer: "Furthermore",
      explanation: "'Furthermore' (or 'In addition') adds supplementary supporting points."
    },
    {
      id: "g7_u1_q104",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Which linker introduces a contrasting or opposing idea?",
      options: ["On the other hand", "In addition", "First of all", "Moreover"],
      correctIndex: 0,
      answer: "On the other hand",
      explanation: "'On the other hand' introduces a contrasting viewpoint or opposing fact."
    },
    {
      id: "g7_u1_q105",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "sentence_completion",
      difficulty: "hard",
      question: "Complete the photo comparison: 'In the first photo, the girl is playing games alone, _____ in the second picture, friends are chatting face-to-face.'",
      options: ["whereas", "in addition", "furthermore", "finally"],
      correctIndex: 0,
      answer: "whereas",
      explanation: "'Whereas' (or 'while') directly contrasts two different situations in photograph descriptions."
    },
    {
      id: "g7_u1_q106",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "multiple_choice",
      difficulty: "easy",
      question: "Which linking phrase is most appropriate to begin the final paragraph of an opinion essay?",
      options: ["In conclusion", "First of all", "Secondly", "For instance"],
      correctIndex: 0,
      answer: "In conclusion",
      explanation: "'In conclusion' or 'To sum up' marks the closing summary of an argument."
    },
    {
      id: "g7_u1_q107",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "multiple_choice",
      difficulty: "medium",
      question: "Which sentence provides a clear REASON to support an opinion?",
      options: [
        "We should limit screen time because blue light disrupts our sleep patterns.",
        "We should limit screen time and buy a new phone.",
        "We should limit screen time tomorrow morning.",
        "We should limit screen time quickly."
      ],
      correctIndex: 0,
      answer: "We should limit screen time because blue light disrupts our sleep patterns.",
      explanation: "The connector 'because' introduces the underlying scientific reason."
    },
    {
      id: "g7_u1_q108",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "natural_response",
      difficulty: "easy",
      question: "Friend: 'How much screen time do you have on an average school day?'\nWhat is the most natural reply?",
      options: [
        "I usually spend about two hours on my phone, mainly for school and music.",
        "I downloaded my tablet yesterday.",
        "My password has eight characters.",
        "The screen is twenty centimetres wide."
      ],
      correctIndex: 0,
      answer: "I usually spend about two hours on my phone, mainly for school and music.",
      explanation: "A direct, informative answer explaining daily habits and routines."
    },
    {
      id: "g7_u1_q109",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "multiple_choice",
      difficulty: "medium",
      question: "'Smartphones allow us to access educational tutorials anywhere. _____, they help us stay in touch with relatives.'",
      options: ["In addition", "However", "In contrast", "Whereas"],
      correctIndex: 0,
      answer: "In addition",
      explanation: "'In addition' adds a second positive benefit to the first statement."
    },
    {
      id: "g7_u1_q110",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Which phrase is useful when expressing an opinion with moderate certainty?",
      options: [
        "As far as I'm concerned, technology brings more benefits than risks.",
        "Technology is definitely blue.",
        "I am knowing technology.",
        "Technology took off at five o'clock."
      ],
      correctIndex: 0,
      answer: "As far as I'm concerned, technology brings more benefits than risks.",
      explanation: "'As far as I'm concerned' is a formal, polite way to introduce a personal opinion."
    },
    {
      id: "g7_u1_q111",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "multiple_choice",
      difficulty: "medium",
      question: "When comparing two photographs in an English speaking test, which expression is most useful?",
      options: [
        "Both pictures show people using technology, but in different ways.",
        "I don't like photographs.",
        "Take a photo with your camera.",
        "The camera has twenty megapixels."
      ],
      correctIndex: 0,
      answer: "Both pictures show people using technology, but in different ways.",
      explanation: "Highlighting common themes and key differences is the core skill in photo comparison."
    },
    {
      id: "g7_u1_q112",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "natural_response",
      difficulty: "medium",
      question: "Teacher: 'What do you think is the main disadvantage of social media?'\nStudent:",
      options: [
        "In my opinion, it can lead to cyberbullying and reduced face-to-face communication.",
        "The train leaves from platform three.",
        "I like eating pizza with cheese.",
        "My phone has a dark case."
      ],
      correctIndex: 0,
      answer: "In my opinion, it can lead to cyberbullying and reduced face-to-face communication.",
      explanation: "Directly addresses the question with a thoughtful reason and appropriate vocabulary."
    },
    {
      id: "g7_u1_q113",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "sentence_completion",
      difficulty: "medium",
      question: "Social networks help users find study groups. _____, spending too much time online can lower students' academic grades.",
      options: ["However", "Furthermore", "In addition", "First of all"],
      correctIndex: 0,
      answer: "However",
      explanation: "'However' introduces a drawback that contrasts with the earlier benefit."
    },
    {
      id: "g7_u1_q114",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "multiple_choice",
      difficulty: "hard",
      question: "Which linking phrase is best for providing a concrete example to back up an argument?",
      options: ["For instance", "In conclusion", "On the contrary", "Secondly"],
      correctIndex: 0,
      answer: "For instance",
      explanation: "'For instance' (or 'For example') introduces illustrative evidence."
    },
    {
      id: "g7_u1_q115",
      grade: 7,
      unit: "Life Online",
      topic: "functional",
      subtopic: "opinions_linkers",
      format: "natural_response",
      difficulty: "easy",
      question: "Partner: 'Do you believe algorithms should recommend content to teenagers?'\nWhat is a natural response expressing partial agreement?",
      options: [
        "That's partly true, but platforms must protect young users from harmful content.",
        "I bought a new charger yesterday.",
        "I don't know my email address.",
        "No, it is raining outside."
      ],
      correctIndex: 0,
      answer: "That's partly true, but platforms must protect young users from harmful content.",
      explanation: "'That's partly true, but...' acknowledges the point while introducing an important condition."
    },

    // -----------------------------------------------------------------------
    // READING COMPREHENSION (Q116 - Q130)
    // -----------------------------------------------------------------------
    {
      id: "g7_u1_q116",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_1",
      format: "reading_passage",
      passageId: "passage_1",
      difficulty: "easy",
      question: "According to Passage 1, how much time do many teenagers spend on smartphones daily?",
      options: [
        "More than four hours a day",
        "Less than thirty minutes a day",
        "Exactly twelve hours a week",
        "Only during school lunch breaks"
      ],
      correctIndex: 0,
      answer: "More than four hours a day",
      explanation: "Passage 1 states: 'Many teenagers today spend more than four hours a day on their smartphones.'"
    },
    {
      id: "g7_u1_q117",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_1",
      format: "reading_passage",
      passageId: "passage_1",
      difficulty: "medium",
      question: "What physical problems can excessive screen time cause, according to health experts?",
      options: [
        "Headaches, eye fatigue, and poor sleep habits",
        "Broken bones and toothache",
        "Loss of memory and hearing damage",
        "Stomach flu and allergic reactions"
      ],
      correctIndex: 0,
      answer: "Headaches, eye fatigue, and poor sleep habits",
      explanation: "The text specifies: 'excessive screen time can cause headaches, eye fatigue, and poor sleep habits.'"
    },
    {
      id: "g7_u1_q118",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_1",
      format: "reading_passage",
      passageId: "passage_1",
      difficulty: "medium",
      question: "What do health experts recommend students do during study hours?",
      options: [
        "Turn off phone notifications",
        "Download more video games",
        "Watch live music concerts",
        "Share their passwords with classmates"
      ],
      correctIndex: 0,
      answer: "Turn off phone notifications",
      explanation: "The text recommends students 'turn off notifications during study hours'."
    },
    {
      id: "g7_u1_q119",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_1",
      format: "reading_passage",
      passageId: "passage_1",
      difficulty: "hard",
      question: "What is the main message of Passage 1?",
      options: [
        "Young people should balance online communication with offline health and hobbies.",
        "Smartphones should be permanently banned for all teenagers.",
        "Streaming music is dangerous for high school students.",
        "Exercising outdoors is impossible when you own a phone."
      ],
      correctIndex: 0,
      answer: "Young people should balance online communication with offline health and hobbies.",
      explanation: "The passage emphasizes finding a healthy balance between digital tools and real-world well-being."
    },
    {
      id: "g7_u1_q120",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_1",
      format: "reading_passage",
      passageId: "passage_1",
      difficulty: "medium",
      question: "In Passage 1, the word 'excessive' in 'excessive screen time' means...",
      options: ["too much or more than is healthy", "very quiet and calm", "cheap to purchase", "carefully planned"],
      correctIndex: 0,
      answer: "too much or more than is healthy",
      explanation: "'Excessive' means greater than what is normal, desirable, or healthy."
    },
    {
      id: "g7_u1_q121",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_2",
      format: "reading_passage",
      passageId: "passage_2",
      difficulty: "easy",
      question: "According to Passage 2, what computer programs decide which content to recommend on feeds?",
      options: ["algorithms", "navigation apps", "screen filters", "battery chargers"],
      correctIndex: 0,
      answer: "algorithms",
      explanation: "The text states: 'Computer programs called algorithms observe every click, like, and share.'"
    },
    {
      id: "g7_u1_q122",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_2",
      format: "reading_passage",
      passageId: "passage_2",
      difficulty: "medium",
      question: "What happens if a user spends a lot of time watching photography tutorials?",
      options: [
        "The algorithm recommends more creative and photography content",
        "The platform automatically deletes the user's account",
        "The phone camera stops functioning properly",
        "The user receives a bill from the bank"
      ],
      correctIndex: 0,
      answer: "The algorithm recommends more creative and photography content",
      explanation: "The text notes: 'the algorithm will automatically recommend similar creative content.'"
    },
    {
      id: "g7_u1_q123",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_2",
      format: "reading_passage",
      passageId: "passage_2",
      difficulty: "hard",
      question: "What is a potential negative side effect of algorithms mentioned in Passage 2?",
      options: [
        "They can trap users in 'echo chambers' where they only see agreeable opinions",
        "They cause mobile phone screens to crack",
        "They stop users from sharing photos",
        "They make internet speeds slower for everyone"
      ],
      correctIndex: 0,
      answer: "They can trap users in 'echo chambers' where they only see agreeable opinions",
      explanation: "The text explains algorithms create echo chambers where users only see opinions they already hold."
    },
    {
      id: "g7_u1_q124",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_2",
      format: "reading_passage",
      passageId: "passage_2",
      difficulty: "medium",
      question: "How can a student become a responsible digital citizen according to Passage 2?",
      options: [
        "By understanding algorithms, following diverse creators, and guarding privacy",
        "By spending ten hours a day scrolling through feeds",
        "By refusing to use any technology or school computers",
        "By clicking on every advertisement on the screen"
      ],
      correctIndex: 0,
      answer: "By understanding algorithms, following diverse creators, and guarding privacy",
      explanation: "The final sentence urges students to follow diverse views and protect personal privacy."
    },
    {
      id: "g7_u1_q125",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_2",
      format: "reading_passage",
      passageId: "passage_2",
      difficulty: "medium",
      question: "In Passage 2, the word 'diverse' in 'follow diverse creators' means...",
      options: ["varied and showing different perspectives", "exactly the same", "expensive to access", "completely silent"],
      correctIndex: 0,
      answer: "varied and showing different perspectives",
      explanation: "'Diverse' means including a wide variety of different elements and opinions."
    },
    {
      id: "g7_u1_q126",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_3",
      format: "reading_passage",
      passageId: "passage_3",
      difficulty: "easy",
      question: "What did students agree to do during the 'Digital Detox Day' in Passage 3?",
      options: [
        "Turn off their mobile devices for twelve hours",
        "Build a new computer lab in the school",
        "Post twenty selfies on Instagram",
        "Play video games for twelve hours"
      ],
      correctIndex: 0,
      answer: "Turn off their mobile devices for twelve hours",
      explanation: "Students 'agreed to turn off their mobile devices for twelve hours'."
    },
    {
      id: "g7_u1_q127",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_3",
      format: "reading_passage",
      passageId: "passage_3",
      difficulty: "medium",
      question: "Why did some students feel nervous at the start of the challenge?",
      options: [
        "They were accustomed to checking notifications every few minutes",
        "They had lost their house keys in the park",
        "They did not know how to play basketball",
        "The weather was stormy and cold"
      ],
      correctIndex: 0,
      answer: "They were accustomed to checking notifications every few minutes",
      explanation: "The text explains students were used to checking alerts every few minutes."
    },
    {
      id: "g7_u1_q128",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_3",
      format: "reading_passage",
      passageId: "passage_3",
      difficulty: "easy",
      question: "What activities did students participate in instead of watching videos on their screens?",
      options: [
        "Playing basketball, reading books, and cooking together",
        "Streaming movies on their laptops",
        "Shopping online for computer parts",
        "Taking selfies for social media"
      ],
      correctIndex: 0,
      answer: "Playing basketball, reading books, and cooking together",
      explanation: "Students engaged in outdoor sports, reading, and shared meal preparation."
    },
    {
      id: "g7_u1_q129",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_3",
      format: "reading_passage",
      passageId: "passage_3",
      difficulty: "hard",
      question: "What conclusion did the students reach by the end of the Digital Detox Day?",
      options: [
        "Disconnecting periodically helps focus and fosters genuine family and friend connections.",
        "Digital devices should never be turned off under any circumstances.",
        "Cooking lunch without a smartphone is impossible.",
        "Books are too boring for Grade 7 teenagers."
      ],
      correctIndex: 0,
      answer: "Disconnecting periodically helps focus and fosters genuine family and friend connections.",
      explanation: "The students concluded that taking breaks from screens improves focus and interpersonal bonds."
    },
    {
      id: "g7_u1_q130",
      grade: 7,
      unit: "Life Online",
      topic: "reading",
      subtopic: "reading_passage_3",
      format: "reading_passage",
      passageId: "passage_3",
      difficulty: "medium",
      question: "In Passage 3, the phrase 'digital detox' refers to...",
      options: [
        "A period of time when a person refrains from using tech devices",
        "Cleaning your phone screen with chemical spray",
        "Downloading security software to remove viruses",
        "Replacing an old smartphone with a brand-new model"
      ],
      correctIndex: 0,
      answer: "A period of time when a person refrains from using tech devices",
      explanation: "A 'digital detox' is a conscious break from smartphones and online media."
    }
  ];

  // =========================================================================
  // 3. TABOO CARDS DATASET (For English Taboo)
  // =========================================================================
  const TABOO_DECK = [
    { word: "ALGORITHM", taboo: ["computer", "code", "feed", "recommend"] },
    { word: "PRIVACY", taboo: ["secret", "password", "personal", "safe"] },
    { word: "SCREEN TIME", taboo: ["phone", "hours", "limit", "day"] },
    { word: "FOLLOW", taboo: ["account", "friend", "social", "subscribe"] },
    { word: "STREAM", taboo: ["live", "watch", "video", "internet"] },
    { word: "UPLOAD", taboo: ["photo", "send", "internet", "cloud"] },
    { word: "DOWNLOAD", taboo: ["save", "file", "computer", "get"] },
    { word: "SCROLL", taboo: ["down", "screen", "finger", "feed"] },
    { word: "SWIPE", taboo: ["touch", "screen", "left", "right"] },
    { word: "NAVIGATION", taboo: ["map", "GPS", "direction", "route"] },
    { word: "PRODUCTIVITY", taboo: ["work", "calendar", "task", "organize"] },
    { word: "ECHO CHAMBER", taboo: ["same", "opinion", "agree", "bubble"] },
    { word: "DIGITAL IDENTITY", taboo: ["profile", "online", "person", "real"] },
    { word: "NOTIFICATION", taboo: ["sound", "message", "alert", "phone"] },
    { word: "HASHTAG", taboo: ["symbol", "trend", "search", "post"] },
    { word: "STATIVE VERB", taboo: ["action", "ing", "like", "know"] },
    { word: "GERUND", taboo: ["verb", "ing", "noun", "enjoy"] },
    { word: "INFINITIVE", taboo: ["to", "verb", "base", "decide"] },
    { word: "FITNESS APP", taboo: ["health", "steps", "exercise", "walk"] },
    { word: "MOBILE BANKING", taboo: ["money", "account", "pay", "card"] },
    { word: "PHOTOGRAPHY", taboo: ["picture", "camera", "filter", "photo"] },
    { word: "BROWSE", taboo: ["web", "look", "search", "page"] },
    { word: "LOG ON", taboo: ["enter", "password", "username", "account"] },
    { word: "TREND", taboo: ["popular", "viral", "now", "everyone"] },
    { word: "DIGITAL DETOX", taboo: ["break", "no phone", "off", "healthy"] }
  ];

  // =========================================================================
  // 4. WORD RUSH WORDS (For Word Rush Categorization)
  // =========================================================================
  const WORD_RUSH_WORDS = [
    { word: "upload", categories: ["life_online", "verbs"], grades: ["grade7"], difficulty: "easy" },
    { word: "download", categories: ["life_online", "verbs"], grades: ["grade7"], difficulty: "easy" },
    { word: "scroll", categories: ["life_online", "verbs"], grades: ["grade7"], difficulty: "easy" },
    { word: "swipe", categories: ["life_online", "verbs"], grades: ["grade7"], difficulty: "easy" },
    { word: "follow", categories: ["life_online", "verbs"], grades: ["grade7"], difficulty: "easy" },
    { word: "stream", categories: ["life_online", "verbs"], grades: ["grade7"], difficulty: "easy" },
    { word: "browse", categories: ["life_online", "verbs"], grades: ["grade7"], difficulty: "easy" },
    { word: "search", categories: ["life_online", "verbs"], grades: ["grade7"], difficulty: "easy" },
    { word: "access", categories: ["life_online", "verbs", "nouns"], grades: ["grade7"], difficulty: "medium" },
    { word: "log on", categories: ["life_online", "verbs"], grades: ["grade7"], difficulty: "easy" },
    { word: "click", categories: ["life_online", "verbs", "nouns"], grades: ["grade7"], difficulty: "easy" },
    { word: "tap", categories: ["life_online", "verbs", "nouns"], grades: ["grade7"], difficulty: "easy" },
    { word: "trend", categories: ["life_online", "nouns", "verbs"], grades: ["grade7"], difficulty: "easy" },
    { word: "algorithm", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "medium" },
    { word: "privacy", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "easy" },
    { word: "screen time", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "easy" },
    { word: "echo chamber", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "hard" },
    { word: "digital identity", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "medium" },
    { word: "navigation", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "easy" },
    { word: "productivity", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "medium" },
    { word: "photography", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "easy" },
    { word: "reference", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "medium" },
    { word: "fitness", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "easy" },
    { word: "banking", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "easy" },
    { word: "decision", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "easy" },
    { word: "organization", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "easy" },
    { word: "encouragement", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "medium" },
    { word: "understanding", categories: ["life_online", "nouns"], grades: ["grade7"], difficulty: "medium" }
  ];

  // =========================================================================
  // 5. SPEAKING WHEEL PROMPTS (For Speaking Games)
  // =========================================================================
  const SPEAKING_PROMPTS = [
    {
      id: "spk_g7_u1_01",
      grade: 7,
      unit: "Life Online",
      topic: "Online Habits & Screen Time",
      question: "How many hours of screen time do you have each day, and what are your favorite apps to use?",
      target: "Speak for 1–2 minutes.",
      usefulLanguage: ["On an average day, I spend...", "I mostly use apps for...", "My favorite application is...", "It helps me to..."],
      criteria: "Clear present simple routines, specific app names, and logical reasons."
    },
    {
      id: "spk_g7_u1_02",
      grade: 7,
      unit: "Life Online",
      topic: "Advantages & Disadvantages",
      question: "What are the main advantages and disadvantages of using social media for teenagers?",
      target: "Speak for 1–2 minutes.",
      usefulLanguage: ["On the one hand, social media allows us to...", "However, on the other hand...", "In addition, excessive screen time can...", "In conclusion, we need to balance..."],
      criteria: "Use of contrast linkers (however, on the other hand) and balanced argumentation."
    },
    {
      id: "spk_g7_u1_03",
      grade: 7,
      unit: "Life Online",
      topic: "Digital Privacy",
      question: "Why is personal privacy important on the internet, and how can students protect their personal information?",
      target: "Speak for 1–2 minutes.",
      usefulLanguage: ["Protecting our privacy is crucial because...", "Students should avoid sharing...", "It is important to use strong passwords...", "Never give your location to..."],
      criteria: "Giving advice with modals (should, must, avoid) and clear privacy awareness."
    },
    {
      id: "spk_g7_u1_04",
      grade: 7,
      unit: "Life Online",
      topic: "Photo Comparison: Online vs. Offline Life",
      question: "Compare studying with a computer versus studying with physical paper books. Which do you prefer and why?",
      target: "Speak for 1–2 minutes.",
      usefulLanguage: ["While digital study tools are convenient...", "Whereas paper books help me concentrate...", "I personally prefer... because...", "Both methods have distinct benefits..."],
      criteria: "Use of comparative structures (while, whereas, prefer) and personal reasons."
    },
    {
      id: "spk_g7_u1_05",
      grade: 7,
      unit: "Life Online",
      topic: "Algorithms & Echo Chambers",
      question: "Do you think social media algorithms show you the whole world or only things you already agree with? Explain your view.",
      target: "Speak for 1–2 minutes.",
      usefulLanguage: ["In my opinion, algorithms observe...", "They often create echo chambers where...", "Therefore, it is important to...", "As far as I'm concerned..."],
      criteria: "Expressing an informed opinion, referencing algorithms and diverse perspectives."
    },
    {
      id: "spk_g7_u1_06",
      grade: 7,
      unit: "Life Online",
      topic: "A Day Without Screens",
      question: "Could you spend an entire weekend without touching your smartphone or computer? What would you do instead?",
      target: "Speak for 1–2 minutes.",
      usefulLanguage: ["If I had to disconnect for a weekend, I would...", "First of all, I'd probably...", "Instead of scrolling, I could...", "In the end, I think it would be..."],
      criteria: "Hypothetical reflection, sequencing linkers, and creative offline activities."
    }
  ];

  // =========================================================================
  // 6. GRAMMAR AUCTION SENTENCES
  // =========================================================================
  const GRAMMAR_AUCTION_SENTENCES = [
    {
      id: "auc_01",
      sentence: "Sarah usually checks her notifications before she goes to sleep.",
      isCorrect: true,
      category: "Present Simple Routine",
      explanation: "Correct. Present Simple with 'usually' expresses habitual behavior."
    },
    {
      id: "auc_02",
      sentence: "Right now, David is understanding how computer algorithms rank posts.",
      isCorrect: false,
      corrected: "Right now, David understands how computer algorithms rank posts.",
      category: "Stative Verbs",
      explanation: "Incorrect. 'Understand' is a stative verb and cannot be used in the continuous form."
    },
    {
      id: "auc_03",
      sentence: "We decided to limit our screen time to two hours every evening.",
      isCorrect: true,
      category: "Infinitive after Decide",
      explanation: "Correct. 'Decide' is followed by a to-infinitive ('to limit')."
    },
    {
      id: "auc_04",
      sentence: "She suggested to download a new photography application.",
      isCorrect: false,
      corrected: "She suggested downloading a new photography application.",
      category: "Gerund after Suggest",
      explanation: "Incorrect. 'Suggest' takes a gerund ('suggested downloading'), not a to-infinitive."
    },
    {
      id: "auc_05",
      sentence: "Lucas enjoys creating digital art with his graphic tablet.",
      isCorrect: true,
      category: "Gerund after Enjoy",
      explanation: "Correct. 'Enjoy' is followed by a gerund ('creating')."
    },
    {
      id: "auc_06",
      sentence: "This tablet is belonging to my older brother, so please be careful.",
      isCorrect: false,
      corrected: "This tablet belongs to my older brother, so please be careful.",
      category: "Stative Verbs",
      explanation: "Incorrect. 'Belong' is a stative verb of possession; use Simple Present 'belongs'."
    },
    {
      id: "auc_07",
      sentence: "You should avoid sharing personal information on public websites.",
      isCorrect: true,
      category: "Gerund after Avoid",
      explanation: "Correct. 'Avoid' is followed by a gerund ('sharing')."
    },
    {
      id: "auc_08",
      sentence: "Listen! Somebody knocks on the computer room door right now.",
      isCorrect: false,
      corrected: "Listen! Somebody is knocking on the computer room door right now.",
      category: "Present Continuous",
      explanation: "Incorrect. An action happening at the moment of speaking requires Present Continuous ('is knocking')."
    },
    {
      id: "auc_09",
      sentence: "Kenji promised to turn off his phone during the movie.",
      isCorrect: true,
      category: "Infinitive after Promise",
      explanation: "Correct. 'Promise' is followed by a to-infinitive ('to turn off')."
    },
    {
      id: "auc_10",
      sentence: "They are looking forward to visit the new digital science museum.",
      isCorrect: false,
      corrected: "They are looking forward to visiting the new digital science museum.",
      category: "Gerund after Prepositional Phrase",
      explanation: "Incorrect. 'Look forward to' contains the preposition 'to', requiring the gerund ('visiting')."
    },
    {
      id: "auc_11",
      sentence: "Do you know what time the live gaming stream begins?",
      isCorrect: true,
      category: "Stative Verb Know",
      explanation: "Correct. 'Know' is stative and correctly used in simple present question."
    },
    {
      id: "auc_12",
      sentence: "I am needing a new phone case because mine is cracked.",
      isCorrect: false,
      corrected: "I need a new phone case because mine is cracked.",
      category: "Stative Verb Need",
      explanation: "Incorrect. 'Need' is a stative verb; use 'I need'."
    },
    {
      id: "auc_13",
      sentence: "Elena spent three hours scrolling through short video tutorials.",
      isCorrect: true,
      category: "Spend Time + Gerund",
      explanation: "Correct. 'Spend time' is followed by a gerund ('scrolling')."
    },
    {
      id: "auc_14",
      sentence: "He refused giving his password to the unknown caller.",
      isCorrect: false,
      corrected: "He refused to give his password to the unknown caller.",
      category: "Infinitive after Refuse",
      explanation: "Incorrect. 'Refuse' is followed by a to-infinitive ('to give')."
    },
    {
      id: "auc_15",
      sentence: "Social media algorithms observe user clicks to recommend relevant content.",
      isCorrect: true,
      category: "Present Simple General Truth",
      explanation: "Correct. General technological fact with plural subject uses simple present."
    }
  ];

  // =========================================================================
  // 7. PUBLIC API & FILTER ENGINE
  // =========================================================================
  return {
    unitInfo: {
      grade: 7,
      unitNumber: 1,
      title: "Life Online",
      theme: "cyan",
      totalQuestions: QUESTIONS.length
    },
    passages: READING_PASSAGES,
    questions: QUESTIONS,
    tabooDeck: TABOO_DECK,
    wordRushWords: WORD_RUSH_WORDS,
    speakingPrompts: SPEAKING_PROMPTS,
    grammarAuctionSentences: GRAMMAR_AUCTION_SENTENCES,

    /**
     * Filter questions dynamically for teacher controls
     * @param {Object} options - { topic, difficulty, count, randomize }
     */
    filterQuestions: function (options) {
      options = options || {};
      let pool = [...QUESTIONS];

      // Topic filter
      if (options.topic && options.topic !== 'all' && options.topic !== 'mixed') {
        const t = options.topic.toLowerCase();
        pool = pool.filter(q => q.topic.toLowerCase() === t || q.subtopic.toLowerCase() === t);
      }

      // Difficulty filter
      if (options.difficulty && options.difficulty !== 'all' && options.difficulty !== 'mixed') {
        const d = options.difficulty.toLowerCase();
        pool = pool.filter(q => q.difficulty.toLowerCase() === d);
      }

      // Randomize if requested
      if (options.randomize !== false) {
        for (let i = pool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pool[i], pool[j]] = [pool[j], pool[i]];
        }
      }

      // Slice count
      if (options.count && typeof options.count === 'number' && options.count > 0) {
        pool = pool.slice(0, options.count);
      }

      return pool;
    }
  };
});
