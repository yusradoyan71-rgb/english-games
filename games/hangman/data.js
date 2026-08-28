/**
 * HANGMAN - Educational Vocabulary Database
 * Grade 7 (CEFR A2-A2+) & Grade 8 (CEFR A2+-B1)
 * Text-based clues, definitions, sentence contexts, and spelling challenges.
 * Strictly NO image-based clues.
 */

const GAME_DATA = {
  grade7: {
    title: "Grade 7 English",
    subtitle: "A2 – A2+ Vocabulary, Spelling & Context",
    totalLevels: 5,
    levels: [
      {
        id: 1,
        name: "Level 1: Easy Vocabulary",
        description: "4–6 letter words with category and simple clues",
        wordsToPass: 5,
        timer: null,
        words: [
          {
            word: "EAGLE",
            category: "ANIMALS & NATURE",
            clue: "A large, powerful bird that can fly high and has sharp eyesight.",
            definition: "A large bird of prey with strong claws and keen vision.",
            context: "An ___ can spot a small fish from hundreds of meters in the sky."
          },
          {
            word: "TIGER",
            category: "ANIMALS & NATURE",
            clue: "A big wild cat with bright orange fur and black stripes.",
            definition: "A large carnivorous wild cat native to Asia, known for its striped coat.",
            context: "The wild ___ moved silently through the dense Asian jungle."
          },
          {
            word: "BREAD",
            category: "FOOD & DRINK",
            clue: "A common baked food made from flour, water, and yeast.",
            definition: "A staple baked food made of flour dough.",
            context: "We bought fresh, warm ___ from the local bakery for breakfast."
          },
          {
            word: "TRAIN",
            category: "TRAVEL & TRANSPORT",
            clue: "A vehicle on railway tracks that carries many passengers between cities.",
            definition: "A series of connected railroad cars pulled by an engine.",
            context: "We took an electric ___ to travel quickly across the country."
          },
          {
            word: "PLANET",
            category: "SPACE & SCIENCE",
            clue: "A large celestial body like Earth or Mars that orbits around the sun.",
            definition: "A celestial body moving in an elliptical orbit around a star.",
            context: "Earth is the third ___ from the Sun in our solar system."
          },
          {
            word: "BEACH",
            category: "GEOGRAPHY & NATURE",
            clue: "A sandy or pebbly shore next to the sea or an ocean.",
            definition: "A narrow, gently sloping strip of land along the edge of an ocean, lake, or river.",
            context: "The children built a sandcastle by the waves on the sunny ___."
          },
          {
            word: "GUITAR",
            category: "MUSIC & HOBBIES",
            clue: "A musical instrument with strings that you pluck or strum.",
            definition: "A stringed musical instrument usually with six strings.",
            context: "He learned to play acoustic ___ during the summer holidays."
          },
          {
            word: "DOCTOR",
            category: "JOBS & PROFESSIONS",
            clue: "A qualified healthcare professional who treats sick people.",
            definition: "A person who is licensed to practice medicine and heal patients.",
            context: "The ___ examined the patient and prescribed medicine for the fever."
          },
          {
            word: "BRIDGE",
            category: "CITY & ARCHITECTURE",
            clue: "A structure built over a river or road so people and cars can cross.",
            definition: "A structure carrying a pathway or road across an obstacle or water.",
            context: "A suspension ___ connects the two sides of the historic river."
          },
          {
            word: "SHADOW",
            category: "SCIENCE & LIGHT",
            clue: "A dark shape formed on a surface when an object blocks the light.",
            definition: "A dark area or shape produced by a body coming between rays of light and a surface.",
            context: "As the sun went down, the tree cast a long ___ across the garden."
          },
          {
            word: "CASTLE",
            category: "HISTORY & PLACES",
            clue: "A large stone fortress built in medieval times for kings and queens.",
            definition: "A large fortified building or set of buildings from the medieval period.",
            context: "The ancient stone ___ stood on top of the hill for centuries."
          },
          {
            word: "FOREST",
            category: "ENVIRONMENT & NATURE",
            clue: "A large area of land covered with many trees and wild animals.",
            definition: "A large area dominated by trees and rich biodiversity.",
            context: "Many rare birds live in the deep, green ___."
          }
        ]
      },
      {
        id: 2,
        name: "Level 2: Everyday Words",
        description: "5–7 letter words with category and clear definitions",
        wordsToPass: 5,
        timer: null,
        words: [
          {
            word: "BREAKFAST",
            category: "DAILY ROUTINES & FOOD",
            clue: "The first meal eaten in the morning to start your day.",
            definition: "The first meal of the day, usually eaten in the morning.",
            context: "Having a healthy ___ with eggs and fruit gives you morning energy."
          },
          {
            word: "HOLIDAY",
            category: "TRAVEL & LEISURE",
            clue: "A period of time away from school or work for rest and travel.",
            definition: "A period of leisure and recreation away from regular duties.",
            context: "Our family is planning a two-week summer ___ by the seaside."
          },
          {
            word: "BLANKET",
            category: "HOME & COMFORT",
            clue: "A thick, warm woolen cloth used on a bed to keep warm.",
            definition: "A large piece of woolen or warm material used as a bed covering.",
            context: "She wrapped herself in a soft ___ while reading on the sofa."
          },
          {
            word: "KITCHEN",
            category: "HOME & LIVING",
            clue: "The room in a house where food is prepared and cooked.",
            definition: "A room or part of a room used for cooking and food preparation.",
            context: "Delicious aromas of vegetable soup filled the modern ___."
          },
          {
            word: "LIBRARY",
            category: "SCHOOL & COMMUNITY",
            clue: "A quiet building or room where books and digital resources are kept.",
            definition: "A building or room containing collections of books and periodicals for reading or borrowing.",
            context: "Students go to the city ___ to research science topics and read quietly."
          },
          {
            word: "AIRPORT",
            category: "TRAVEL & TRANSPORT",
            clue: "A place where airplanes take off, land, and passengers board flights.",
            definition: "A complex of runways and buildings for the takeoff, landing, and maintenance of aircraft.",
            context: "We arrived at the international ___ two hours before our flight departed."
          },
          {
            word: "DOLPHIN",
            category: "SEA ANIMALS",
            clue: "An intelligent marine mammal known for playful leaps and clicking sounds.",
            definition: "A highly intelligent aquatic mammal related to whales.",
            context: "A friendly ___ swam alongside our boat in the blue ocean."
          },
          {
            word: "BICYCLE",
            category: "TRANSPORT & SPORTS",
            clue: "A two-wheeled vehicle that you ride by turning pedals with your feet.",
            definition: "A vehicle composed of two wheels held in a frame one behind the other, propelled by pedals.",
            context: "Riding a ___ to school is good for your health and produces zero pollution."
          },
          {
            word: "WEATHER",
            category: "NATURE & CLIMATE",
            clue: "The daily condition of the atmosphere in terms of temperature, wind, and rain.",
            definition: "The state of the atmosphere at a particular place and time as regards heat, cloudiness, dryness, sunshine, wind, rain, etc.",
            context: "Check the forecast to see if the ___ will be sunny or rainy tomorrow."
          },
          {
            word: "UNIFORM",
            category: "SCHOOL & CLOTHING",
            clue: "Special matching clothes worn by members of a school, team, or organization.",
            definition: "The distinctive clothing worn by members of the same organization or school.",
            context: "All 7th grade students wear a navy blue school ___ on weekdays."
          }
        ]
      },
      {
        id: 3,
        name: "Level 3: School & Life",
        description: "5–8 letter academic and lifestyle vocabulary",
        wordsToPass: 5,
        timer: null,
        words: [
          {
            word: "CLASSROOM",
            category: "SCHOOL LIFE",
            clue: "A room in a school where students have lessons with their teacher.",
            definition: "A room in which a class of pupils or students is taught.",
            context: "The teacher welcomed all new students into the bright ___."
          },
          {
            word: "EXPERIMENT",
            category: "SCIENCE & STUDY",
            clue: "A scientific test done to discover something or see if an idea works.",
            definition: "A scientific procedure undertaken to make a discovery, test a hypothesis, or demonstrate a known fact.",
            context: "We mixed vinegar and baking soda in our chemistry ___ today."
          },
          {
            word: "HOMEWORK",
            category: "SCHOOL LIFE",
            clue: "School work that a student is given to do at home after class.",
            definition: "Schoolwork that a pupil is required to do at home.",
            context: "She completed her English ___ before having dinner with her family."
          },
          {
            word: "TIMETABLE",
            category: "ORGANIZATION",
            clue: "A chart showing the exact times at which lessons or buses take place.",
            definition: "A chart showing the schedule of events, classes, or public transport departures.",
            context: "Check the weekly school ___ to see when our next science lab starts."
          },
          {
            word: "CALENDAR",
            category: "ORGANIZATION & DATES",
            clue: "A chart or system showing the days, weeks, and months of a year.",
            definition: "A chart showing the days, weeks, and months of a particular year.",
            context: "I marked the national exam date with a red circle on my wall ___."
          },
          {
            word: "ACTIVITY",
            category: "DAILY LIFE",
            clue: "Something that you do for enjoyment, learning, or physical exercise.",
            definition: "A thing that a person or group does or has done.",
            context: "Playing basketball is my favorite after-school sports ___."
          },
          {
            word: "PROJECT",
            category: "SCHOOL & WORK",
            clue: "A planned piece of work that involves careful study over time.",
            definition: "An individual or collaborative enterprise that is carefully planned to achieve a particular aim.",
            context: "Our group created a solar system model for the term science ___."
          },
          {
            word: "NOTEBOOK",
            category: "STUDY TOOLS",
            clue: "A book with blank or lined pages used for writing notes.",
            definition: "A book of plain paper for writing notes in.",
            context: "Write the new vocabulary words neatly in your English ___."
          },
          {
            word: "PRACTICE",
            category: "SKILLS & SPORTS",
            clue: "Doing an activity repeatedly to become better and more skilled at it.",
            definition: "Repeated exercise in or performance of an activity so as to acquire or maintain proficiency in it.",
            context: "Daily English conversation ___ improves your speaking confidence quickly."
          }
        ]
      },
      {
        id: 4,
        name: "Level 4: Missing Word in Context",
        description: "Deduce the missing word from natural sentence context",
        wordsToPass: 5,
        timer: null,
        words: [
          {
            word: "PLAY",
            category: "CONTEXT SENTENCE",
            clue: "Fill in the blank with the correct verb.",
            definition: "To engage in activity for enjoyment and recreation.",
            context: "I usually ___ football with my friends in the park after school."
          },
          {
            word: "BAKE",
            category: "CONTEXT SENTENCE",
            clue: "Fill in the blank with the kitchen action verb.",
            definition: "To cook food using dry heat in an oven.",
            context: "My mother will ___ a delicious chocolate cake for my birthday party."
          },
          {
            word: "RETURN",
            category: "CONTEXT SENTENCE",
            clue: "Fill in the blank with the appropriate verb.",
            definition: "To give, put, or send something back to a place or owner.",
            context: "Please remember to ___ your borrowed books to the school library on Friday."
          },
          {
            word: "WEAR",
            category: "CONTEXT SENTENCE",
            clue: "Fill in the blank with the clothing verb.",
            definition: "To have something on one's body as clothing or decoration.",
            context: "You should ___ a warm jacket because the winter temperature is dropping."
          },
          {
            word: "TRAVEL",
            category: "CONTEXT SENTENCE",
            clue: "Fill in the blank with the movement verb.",
            definition: "To make a journey, typically of some length.",
            context: "Astronauts ___ into outer space inside an advanced scientific rocket."
          },
          {
            word: "LISTEN",
            category: "CONTEXT SENTENCE",
            clue: "Fill in the blank with the auditory verb.",
            definition: "To give one's attention to a sound or speaker.",
            context: "Students must ___ carefully when the teacher explains the instructions."
          },
          {
            word: "THINK",
            category: "CONTEXT SENTENCE",
            clue: "Fill in the blank with the cognitive verb.",
            definition: "To use one's mind to consider or reason about something.",
            context: "Take your time and ___ carefully before choosing your final answer."
          },
          {
            word: "DRAW",
            category: "CONTEXT SENTENCE",
            clue: "Fill in the blank with the artistic verb.",
            definition: "To produce a picture or diagram by making lines and marks on paper.",
            context: "Students love to ___ colorful landscapes during art lessons."
          },
          {
            word: "STAY",
            category: "CONTEXT SENTENCE",
            clue: "Fill in the blank with the lodging verb.",
            definition: "To live somewhere temporarily as a visitor or guest.",
            context: "Tourists will ___ in a comfortable hotel near the sandy coastline."
          },
          {
            word: "CLEAN",
            category: "CONTEXT SENTENCE",
            clue: "Fill in the blank with the hygiene action verb.",
            definition: "To make something free of dirt, marks, or mess.",
            context: "We must ___ the science laboratory workbenches after finishing our experiment."
          }
        ]
      },
      {
        id: 5,
        name: "Level 5: Timed Challenge",
        description: "Longer words & 60-second timer challenge",
        wordsToPass: 5,
        timer: 60,
        words: [
          {
            word: "DISCOVERY",
            category: "SCIENCE & EXPLORATION",
            clue: "Finding something new or unexpected that was not known before.",
            definition: "The act or process of finding something for the first time.",
            context: "The scientific ___ of penicillin saved millions of lives worldwide."
          },
          {
            word: "CHAMPION",
            category: "SPORTS & SUCCESS",
            clue: "A person or team that wins first place in a competition or tournament.",
            definition: "A person who has defeated all rivals in a competition.",
            context: "The undefeated team received a golden cup as the tournament ___."
          },
          {
            word: "ADVENTURE",
            category: "TRAVEL & EXCITEMENT",
            clue: "An exciting, unusual, and sometimes risky experience or journey.",
            definition: "An unusual and exciting, typically hazardous, experience or activity.",
            context: "Hiking across the misty mountain range was an unforgettable ___."
          },
          {
            word: "BEAUTIFUL",
            category: "DESCRIPTIONS & ADJECTIVES",
            clue: "Pleasing the senses or mind aesthetically; very attractive.",
            definition: "Pleasing the senses or mind aesthetically.",
            context: "We watched a ___ sunset over the calm Mediterranean water."
          },
          {
            word: "DANGEROUS",
            category: "SAFETY & CAUTION",
            clue: "Able or likely to cause harm, injury, or severe problems.",
            definition: "Able or likely to cause harm or injury.",
            context: "Crossing the stormy river without a safety vest is extremely ___."
          },
          {
            word: "VOLCANO",
            category: "EARTH SCIENCE",
            clue: "A mountain with a crater that can erupt hot lava, ash, and gases.",
            definition: "A mountain or hill having a crater through which lava and gas erupt from the earth's crust.",
            context: "Smoke and volcanic ash rose into the sky from the active ___."
          },
          {
            word: "MYSTERIOUS",
            category: "DESCRIPTIONS & PUZZLES",
            clue: "Difficult or impossible to understand, explain, or identify.",
            definition: "Difficult or impossible to understand, explain, or identify.",
            context: "Detectives found a ___ locked wooden box inside the old attic."
          },
          {
            word: "JOURNEY",
            category: "TRAVEL & EXPLORATION",
            clue: "An act of traveling from one destination to another, especially long distance.",
            definition: "An act of traveling from one place to another.",
            context: "Their cross-country train ___ took three full days of travel."
          }
        ]
      }
    ]
  },

  grade8: {
    title: "Grade 8 English",
    subtitle: "A2+ – B1 Advanced Vocabulary, Context & Inference",
    totalLevels: 6,
    levels: [
      {
        id: 1,
        name: "Level 1: Advanced Vocabulary",
        description: "5–8 letter curriculum words with definitions",
        wordsToPass: 5,
        timer: null,
        words: [
          {
            word: "POLLUTION",
            category: "ENVIRONMENT & ECOLOGY",
            clue: "Harmful substances or waste that damage the air, water, or land.",
            definition: "The presence in or introduction into the environment of a substance or thing that has harmful or poisonous effects.",
            context: "Switching to electric buses helps reduce urban air ___."
          },
          {
            word: "RECYCLE",
            category: "ENVIRONMENT & SUSTAINABILITY",
            clue: "To process used materials so they can be manufactured into new products.",
            definition: "Convert waste into reusable material.",
            context: "Citizens should ___ glass, metal, and plastic containers consistently."
          },
          {
            word: "RESOURCE",
            category: "SCIENCE & ECONOMY",
            clue: "A supply of materials, energy, or staff that can be drawn on effectively.",
            definition: "A stock or supply of money, materials, staff, and other assets that can be drawn on by a person or organization in order to function effectively.",
            context: "Clean fresh water is the planet's most precious natural ___."
          },
          {
            word: "ENDANGERED",
            category: "NATURE & CONSERVATION",
            clue: "At serious risk of becoming completely extinct in the wild.",
            definition: "Seriously at risk of extinction.",
            context: "Strict conservation laws protect ___ species such as giant pandas."
          },
          {
            word: "SCIENTIST",
            category: "SCIENCE & PROFESSIONS",
            clue: "An expert who conducts systematic research and studies natural phenomena.",
            definition: "A person who is studying or has expert knowledge of one or more of the natural or physical sciences.",
            context: "The lead ___ analyzed the soil samples gathered from Mars."
          },
          {
            word: "SATELLITE",
            category: "TECHNOLOGY & SPACE",
            clue: "An artificial object sent into orbit around Earth to collect data or relay signals.",
            definition: "An artificial body placed in orbit around the earth or moon or another planet in order to collect information or for communication.",
            context: "Weather forecasts rely on high-resolution ___ imagery from orbit."
          },
          {
            word: "VIRTUAL",
            category: "DIGITAL TECHNOLOGY",
            clue: "Created by computer software to appear real on a digital screen.",
            definition: "Not physically existing as such but made by software to appear to do so.",
            context: "Students wore specialized headsets to visit a ___ history museum."
          },
          {
            word: "INFECTION",
            category: "HEALTH & MEDICINE",
            clue: "The invasion and multiplication of harmful bacteria or viruses in body tissue.",
            definition: "The process of infecting or the state of being infected with a disease.",
            context: "Washing hands regularly prevents the spread of bacterial ___."
          }
        ]
      },
      {
        id: 2,
        name: "Level 2: Pure Definitions",
        description: "Deduce the word from a formal dictionary definition",
        wordsToPass: 5,
        timer: null,
        words: [
          {
            word: "PROTECT",
            category: "DEFINITION CHALLENGE",
            clue: "To keep safe from harm, injury, damage, or loss.",
            definition: "To keep safe from harm, injury, damage, or loss.",
            context: "Helmets are essential safety gear to ___ your head while cycling."
          },
          {
            word: "GENERATE",
            category: "DEFINITION CHALLENGE",
            clue: "To produce, create, or cause something like energy or ideas.",
            definition: "To cause something, especially energy or power, to exist.",
            context: "Modern wind turbines ___ clean electricity for thousands of homes."
          },
          {
            word: "ESSENTIAL",
            category: "DEFINITION CHALLENGE",
            clue: "Absolutely necessary; extremely important for success or survival.",
            definition: "Extremely important and necessary.",
            context: "Drinking enough water daily is ___ for maintaining physical health."
          },
          {
            word: "HABITAT",
            category: "DEFINITION CHALLENGE",
            clue: "The natural home or environment of an animal, plant, or organism.",
            definition: "The natural home or environment of an animal, plant, or other organism.",
            context: "Deforestation destroys the native ___ of countless rainforest animals."
          },
          {
            word: "IMPROVE",
            category: "DEFINITION CHALLENGE",
            clue: "To make something better or achieve a higher standard.",
            definition: "To make or become better.",
            context: "Consistent vocabulary practice will ___ your reading comprehension score."
          },
          {
            word: "EXTINCT",
            category: "DEFINITION CHALLENGE",
            clue: "Having no living members left anywhere in the world.",
            definition: "Having no living members; no longer in existence.",
            context: "The dodo bird became ___ centuries ago due to human activity."
          },
          {
            word: "ENGINEER",
            category: "DEFINITION CHALLENGE",
            clue: "A person who designs, builds, or maintains engines, machines, or structures.",
            definition: "A person who designs, builds, or maintains engines, machines, or public works.",
            context: "A civil ___ was hired to inspect the structural safety of the bridge."
          },
          {
            word: "EMERGENCY",
            category: "DEFINITION CHALLENGE",
            clue: "A serious, unexpected, and often dangerous situation requiring immediate action.",
            definition: "A serious, unexpected, and often dangerous situation requiring immediate action.",
            context: "Dial the local ___ hotline immediately if you detect a gas leak."
          }
        ]
      },
      {
        id: 3,
        name: "Level 3: Context & Inference",
        description: "Deduce advanced words from rich contextual sentences",
        wordsToPass: 5,
        timer: null,
        words: [
          {
            word: "SURVIVAL",
            category: "CONTEXT & INFERENCE",
            clue: "The state or fact of continuing to live or exist despite danger.",
            definition: "The state or fact of continuing to live or exist, typically in spite of an accident, ordeal, or difficult circumstances.",
            context: "Finding fresh water and shelter was vital for the explorers' ___."
          },
          {
            word: "COMMUNICATE",
            category: "CONTEXT & INFERENCE",
            clue: "To share or exchange information, news, or ideas with others.",
            definition: "Share or exchange information, news, or ideas.",
            context: "Good teamwork requires players to ___ clearly with each other."
          },
          {
            word: "REDUCE",
            category: "CONTEXT & INFERENCE",
            clue: "To make something smaller or less in amount, degree, or size.",
            definition: "Make smaller or less in amount, degree, or size.",
            context: "Using solar energy helps us ___ greenhouse gas emissions significantly."
          },
          {
            word: "DISCOVER",
            category: "CONTEXT & INFERENCE",
            clue: "To find something unexpectedly or in the course of a search.",
            definition: "Find unexpectedly or during a search.",
            context: "Marine biologists hope to ___ new aquatic species in the deep ocean trench."
          },
          {
            word: "ANALYZE",
            category: "CONTEXT & INFERENCE",
            clue: "To examine something methodically and in detail for explanation.",
            definition: "Examine methodically and in detail the constitution or structure of something.",
            context: "Students were asked to ___ the statistical data collected during the survey."
          },
          {
            word: "DECISION",
            category: "CONTEXT & INFERENCE",
            clue: "A conclusion or resolution reached after thoughtful consideration.",
            definition: "A conclusion or resolution reached after consideration.",
            context: "She had to make a crucial ___ regarding which foreign university to attend."
          },
          {
            word: "CONNECT",
            category: "CONTEXT & INFERENCE",
            clue: "To bring together or into contact so that a real link is established.",
            definition: "Bring together or into contact so that a link is established.",
            context: "High-speed internet allows teachers to ___ with remote students globally."
          },
          {
            word: "SAFEGUARD",
            category: "CONTEXT & INFERENCE",
            clue: "A measure taken to protect someone or something against injury or danger.",
            definition: "A measure taken to protect someone or something or to prevent something undesirable.",
            context: "Strong biometric passwords help ___ sensitive personal data on mobile devices."
          }
        ]
      },
      {
        id: 4,
        name: "Level 4: Abstract Vocabulary",
        description: "Words describing feelings, character traits, and society",
        wordsToPass: 5,
        timer: null,
        words: [
          {
            word: "TOLERANT",
            category: "PERSONALITY & SOCIETY",
            clue: "Showing willingness to allow different opinions or behaviors.",
            definition: "Showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with.",
            context: "A harmonious society requires citizens who are respectful and ___."
          },
          {
            word: "AMBITIOUS",
            category: "CHARACTER & TRAITS",
            clue: "Having a strong desire and determination to succeed.",
            definition: "Having or showing a strong desire and determination to succeed.",
            context: "The ___ young scientist aimed to develop a clean hydrogen battery."
          },
          {
            word: "GENEROUS",
            category: "CHARACTER & TRAITS",
            clue: "Showing a readiness to give more of something than is strictly necessary.",
            definition: "Showing a readiness to give more of something, especially money or time, than is strictly necessary or expected.",
            context: "The donor made a ___ financial contribution to rebuild the community hospital."
          },
          {
            word: "HONESTY",
            category: "VALUES & ETHICS",
            clue: "The quality of being truthful, sincere, and free of deceit.",
            definition: "The quality of being honest; truthfulness and integrity.",
            context: "Trust between close friends is always built upon complete ___."
          },
          {
            word: "CONFIDENCE",
            category: "EMOTIONS & MINDSET",
            clue: "The feeling or belief that one can rely on someone or something; self-assurance.",
            definition: "A feeling of self-assurance arising from one's appreciation of one's own abilities or qualities.",
            context: "Public speaking training gave the student the ___ to deliver a great speech."
          },
          {
            word: "PATIENCE",
            category: "VIRTUES & HABITS",
            clue: "The capacity to accept delay, trouble, or suffering without getting angry.",
            definition: "The capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset.",
            context: "Solving complicated mathematical equations requires great focus and ___."
          },
          {
            word: "RESPONSIBILITY",
            category: "VALUES & SOCIETY",
            clue: "The state or fact of having a duty to deal with something or of having control.",
            definition: "The state or fact of having a duty to deal with something or having control over someone.",
            context: "Caring for a household pet teaches young teenagers meaningful ___."
          },
          {
            word: "MOTIVATION",
            category: "PSYCHOLOGY & MINDSET",
            clue: "The general desire or willingness of someone to do something.",
            definition: "The reason or reasons one has for acting or behaving in a particular way; enthusiasm.",
            context: "Setting clear weekly learning goals boosts students' academic ___."
          }
        ]
      },
      {
        id: 5,
        name: "Level 5: Mixed Challenge",
        description: "Challenging academic vocabulary with 45-second timer",
        wordsToPass: 5,
        timer: 45,
        words: [
          {
            word: "SUSTAINABLE",
            category: "ENVIRONMENT & FUTURE",
            clue: "Able to be maintained at a certain rate without depleting natural resources.",
            definition: "Able to be maintained at a certain rate or level without depleting natural resources or causing ecological damage.",
            context: "Solar and wind power are key pillars of a ___ global energy future."
          },
          {
            word: "ARTIFICIAL",
            category: "SCIENCE & COMPUTING",
            clue: "Made by humans rather than occurring naturally.",
            definition: "Made or produced by human beings rather than occurring naturally, especially as a copy of something natural.",
            context: "Machine learning algorithms are central to modern ___ intelligence systems."
          },
          {
            word: "ATMOSPHERE",
            category: "EARTH SCIENCE",
            clue: "The envelope of gases surrounding the Earth or another planet.",
            definition: "The envelope of gases surrounding the earth or another planet.",
            context: "The ozone layer within our ___ filters dangerous ultraviolet radiation."
          },
          {
            word: "CONSEQUENCE",
            category: "LOGIC & CAUSE-EFFECT",
            clue: "A result or effect of an action or condition.",
            definition: "A result or effect of an action or condition.",
            context: "Severe coastal flooding was a direct ___ of the tropical hurricane."
          },
          {
            word: "CONTRIBUTE",
            category: "ACTION & SOCIETY",
            clue: "To give something in order to help achieve or provide something.",
            definition: "Give something, especially money or time, in order to help achieve or provide something.",
            context: "Every volunteer can ___ valuable assistance to the community cleanup."
          },
          {
            word: "BIODIVERSITY",
            category: "BIOLOGY & CONSERVATION",
            clue: "The variety of plant and animal life in the world or in a particular habitat.",
            definition: "The variety of life in the world or in a particular habitat or ecosystem.",
            context: "Tropical rainforests contain the richest ___ of animal species on Earth."
          },
          {
            word: "GLOBALIZATION",
            category: "SOCIETY & WORLD",
            clue: "The process by which businesses or organizations develop international influence.",
            definition: "The process by which businesses or other organizations develop international influence or operate on an international scale.",
            context: "Digital communication and fast transport have accelerated economic ___."
          },
          {
            word: "TRANSFORMATION",
            category: "CHANGE & PROGRESS",
            clue: "A thorough or dramatic change in form, appearance, or character.",
            definition: "A thorough or dramatic change in form or appearance.",
            context: "The old industrial waterfront underwent a complete green ___."
          }
        ]
      },
      {
        id: 6,
        name: "Level 6: Master Hangman",
        description: "Complex spelling, prefixes/suffixes & 30-second timer",
        wordsToPass: 5,
        timer: 30,
        words: [
          {
            word: "NECESSARY",
            category: "SPELLING & GRAMMAR",
            clue: "Required to be done, achieved, or present; needed; essential.",
            definition: "Required to be done, achieved, or present; needed; essential.",
            context: "Wearing a protective laboratory coat is ___ before starting any chemical test."
          },
          {
            word: "ENVIRONMENT",
            category: "SPELLING & NATURE",
            clue: "The surroundings or conditions in which a person, animal, or plant lives.",
            definition: "The surroundings or conditions in which a person, animal, or plant lives or operates.",
            context: "Preserving a clean natural ___ is our shared global duty."
          },
          {
            word: "COMMUNICATION",
            category: "SPELLING & SOCIETY",
            clue: "The imparting or exchanging of information by speaking, writing, or other media.",
            definition: "The imparting or exchanging of information by speaking, writing, or using some other medium.",
            context: "Clear intercultural ___ helps people from different nations collaborate."
          },
          {
            word: "SUCCESSFUL",
            category: "SPELLING & ACHIEVEMENT",
            clue: "Accomplishing an aim or purpose; having achieved popularity or victory.",
            definition: "Accomplishing an aim or purpose.",
            context: "Thorough preparation was the secret behind her ___ piano recital."
          },
          {
            word: "COMFORTABLE",
            category: "SPELLING & LIVING",
            clue: "Providing physical ease and relaxation; free from stress or pain.",
            definition: "Providing physical ease and relaxation.",
            context: "Ergonomic study chairs provide a ___ seating position for long hours."
          },
          {
            word: "INDEPENDENCE",
            category: "SPELLING & SOCIETY",
            clue: "The fact or state of being self-governing and not relying on others.",
            definition: "The fact or state of being independent; self-reliance.",
            context: "Learning to cook simple healthy meals is an important step toward ___."
          },
          {
            word: "COLLABORATION",
            category: "SPELLING & TEAMWORK",
            clue: "The action of working with someone to produce or create something.",
            definition: "The action of working with someone to produce or create something.",
            context: "International scientific ___ was critical to decoding the human genome."
          },
          {
            word: "APPRECIATION",
            category: "SPELLING & VALUES",
            clue: "Recognition and enjoyment of the good qualities of someone or something.",
            definition: "Recognition and enjoyment of the good qualities of someone or something.",
            context: "The class expressed heartfelt ___ to their teacher at the graduation ceremony."
          }
        ]
      }
    ]
  }
};
