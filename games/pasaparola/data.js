/**
 * PASAPAROLA - ENGLISH VOCABULARY QUESTION BANK
 * Designed for Turkish 7th Grade (A1+/A2) & 8th Grade (A2/A2+) English learners.
 * 
 * Rules:
 * 1. Simple, natural definitions without answer giveaways.
 * 2. NO separate hint or clue fields - the question is the clue.
 * 3. All 26 letters (A-Z) have multiple accessible questions.
 */

const grade7Questions = [
  // --- A ---
  { letter: "A", question: "This fruit can be red or green and is sweet.", answer: "APPLE", grade: 7, category: "food" },
  { letter: "A", question: "A dog, a cat, or an elephant is an example of this.", answer: "ANIMAL", grade: 7, category: "nature" },
  { letter: "A", question: "This is how you feel when someone takes your toy and you are mad.", answer: "ANGRY", grade: 7, category: "feelings" },
  { letter: "A", question: "You go to this place to catch a plane.", answer: "AIRPORT", grade: 7, category: "places" },
  { letter: "A", question: "This body part is between your shoulder and your hand.", answer: "ARM", grade: 7, category: "body" },
  { letter: "A", question: "The eighth month of the year, in the middle of summer.", answer: "AUGUST", grade: 7, category: "time" },
  { letter: "A", question: "This is the time of day after 12:00 PM and before evening.", answer: "AFTERNOON", grade: 7, category: "time" },
  { letter: "A", question: "You give this when a teacher asks you a question.", answer: "ANSWER", grade: 7, category: "school" },

  // --- B ---
  { letter: "B", question: "You sleep in this every night in your bedroom.", answer: "BED", grade: 7, category: "furniture" },
  { letter: "B", question: "You open this object to read stories or study lessons.", answer: "BOOK", grade: 7, category: "school" },
  { letter: "B", question: "This yellow curved fruit is a favorite food of monkeys.", answer: "BANANA", grade: 7, category: "food" },
  { letter: "B", question: "You play football, basketball, or tennis with this round object.", answer: "BALL", grade: 7, category: "sports" },
  { letter: "B", question: "A male sibling who has the same parents as you.", answer: "BROTHER", grade: 7, category: "family" },
  { letter: "B", question: "A large vehicle that carries many passengers to school or work.", answer: "BUS", grade: 7, category: "transport" },
  { letter: "B", question: "You ride this two-wheeled vehicle by pushing pedals.", answer: "BICYCLE", grade: 7, category: "transport" },
  { letter: "B", question: "The morning meal you eat before going to school.", answer: "BREAKFAST", grade: 7, category: "food" },
  { letter: "B", question: "A small flying animal that lives in caves and sleeps upside down.", answer: "BAT", grade: 7, category: "animals" },

  // --- C ---
  { letter: "C", question: "A popular small pet that makes a meow sound.", answer: "CAT", grade: 7, category: "animals" },
  { letter: "C", question: "A four-wheeled motor vehicle people drive on roads.", answer: "CAR", grade: 7, category: "transport" },
  { letter: "C", question: "You sit on this piece of furniture at your desk.", answer: "CHAIR", grade: 7, category: "furniture" },
  { letter: "C", question: "This is the opposite of hot.", answer: "COLD", grade: 7, category: "adjectives" },
  { letter: "C", question: "You use this electronic device to browse websites and write emails.", answer: "COMPUTER", grade: 7, category: "technology" },
  { letter: "C", question: "You prepare and heat food in the kitchen to do this verb.", answer: "COOK", grade: 7, category: "daily life" },
  { letter: "C", question: "A large, sweet baked food eaten at birthday parties.", answer: "CAKE", grade: 7, category: "food" },
  { letter: "C", question: "A long orange vegetable that rabbits love to eat.", answer: "CARROT", grade: 7, category: "food" },

  // --- D ---
  { letter: "D", question: "A friendly domestic animal known as man's best friend that barks.", answer: "DOG", grade: 7, category: "animals" },
  { letter: "D", question: "A medical professional who treats sick people in a hospital.", answer: "DOCTOR", grade: 7, category: "jobs" },
  { letter: "D", question: "You open this to enter or leave a room or house.", answer: "DOOR", grade: 7, category: "house" },
  { letter: "D", question: "You do this action with water, milk, or tea when you are thirsty.", answer: "DRINK", grade: 7, category: "daily life" },
  { letter: "D", question: "A piece of women's clothing that covers the top and hangs down over the legs.", answer: "DRESS", grade: 7, category: "clothes" },
  { letter: "D", question: "The final month of the year when winter begins.", answer: "DECEMBER", grade: 7, category: "time" },
  { letter: "D", question: "A swimming bird with a flat beak that makes a quack sound.", answer: "DUCK", grade: 7, category: "animals" },
  { letter: "D", question: "The evening meal that you eat with your family.", answer: "DINNER", grade: 7, category: "food" },

  // --- E ---
  { letter: "E", question: "A huge grey animal with large ears and a very long trunk.", answer: "ELEPHANT", grade: 7, category: "animals" },
  { letter: "E", question: "An oval food with a hard shell laid by chickens.", answer: "EGG", grade: 7, category: "food" },
  { letter: "E", question: "The body part on your face that you use to see things.", answer: "EYE", grade: 7, category: "body" },
  { letter: "E", question: "The body part on the side of your head that you use to hear sounds.", answer: "EAR", grade: 7, category: "body" },
  { letter: "E", question: "The language you are practicing right now in this game.", answer: "ENGLISH", grade: 7, category: "school" },
  { letter: "E", question: "This is the opposite of difficult or hard.", answer: "EASY", grade: 7, category: "adjectives" },
  { letter: "E", question: "You do this action when you put food in your mouth and chew it.", answer: "EAT", grade: 7, category: "daily life" },
  { letter: "E", question: "The time of day between afternoon and night when the sun goes down.", answer: "EVENING", grade: 7, category: "time" },

  // --- F ---
  { letter: "F", question: "A group of people related to each other, like parents and children.", answer: "FAMILY", grade: 7, category: "family" },
  { letter: "F", question: "An animal that lives in water, has fins, and can swim.", answer: "FISH", grade: 7, category: "animals" },
  { letter: "F", question: "A person you like, trust, and enjoy spending time with.", answer: "FRIEND", grade: 7, category: "friendship" },
  { letter: "F", question: "The colorful and fragrant part of a plant or rose.", answer: "FLOWER", grade: 7, category: "nature" },
  { letter: "F", question: "Apples, bananas, and oranges all belong to this healthy food group.", answer: "FRUIT", grade: 7, category: "food" },
  { letter: "F", question: "The day of the week that comes right before the weekend.", answer: "FRIDAY", grade: 7, category: "time" },
  { letter: "F", question: "This is the opposite of slow.", answer: "FAST", grade: 7, category: "adjectives" },
  { letter: "F", question: "The body part at the end of your leg that you put inside your shoe.", answer: "FOOT", grade: 7, category: "body" },

  // --- G ---
  { letter: "G", question: "A tall African animal with a very long neck and brown spots.", answer: "GIRAFFE", grade: 7, category: "animals" },
  { letter: "G", question: "The color of fresh grass, leaves, and emeralds.", answer: "GREEN", grade: 7, category: "colors" },
  { letter: "G", question: "A female child or young female person.", answer: "GIRL", grade: 7, category: "people" },
  { letter: "G", question: "An outdoor area next to a house with grass, trees, and flowers.", answer: "GARDEN", grade: 7, category: "house" },
  { letter: "G", question: "The mother of your father or mother.", answer: "GRANDMOTHER", grade: 7, category: "family" },
  { letter: "G", question: "You do this action to offer or hand something to another person.", answer: "GIVE", grade: 7, category: "verbs" },
  { letter: "G", question: "You wear these on your eyes to help you see clearly or protect from the sun.", answer: "GLASSES", grade: 7, category: "clothes" },
  { letter: "G", question: "A musical instrument with six strings that you strum with your fingers.", answer: "GUITAR", grade: 7, category: "music" },

  // --- H ---
  { letter: "H", question: "A building where people live together as a family.", answer: "HOUSE", grade: 7, category: "house" },
  { letter: "H", question: "A large, strong animal with hooves that people ride.", answer: "HORSE", grade: 7, category: "animals" },
  { letter: "H", question: "This is how you feel when you are smiling and full of joy.", answer: "HAPPY", grade: 7, category: "feelings" },
  { letter: "H", question: "A large building where doctors and nurses take care of sick people.", answer: "HOSPITAL", grade: 7, category: "places" },
  { letter: "H", question: "The body part at the top of your neck with eyes, nose, and mouth.", answer: "HEAD", grade: 7, category: "body" },
  { letter: "H", question: "You wear this piece of clothing on your head.", answer: "HAT", grade: 7, category: "clothes" },
  { letter: "H", question: "The body part at the end of your arm that has five fingers.", answer: "HAND", grade: 7, category: "body" },
  { letter: "H", question: "This is how you feel when your stomach is empty and you need food.", answer: "HUNGRY", grade: 7, category: "feelings" },

  // --- I ---
  { letter: "I", question: "Water that has become frozen solid and very cold.", answer: "ICE", grade: 7, category: "nature" },
  { letter: "I", question: "A piece of land completely surrounded by water on all sides.", answer: "ISLAND", grade: 7, category: "geography" },
  { letter: "I", question: "A frozen sweet dairy dessert served in a cone on sunny days.", answer: "ICE CREAM", grade: 7, category: "food" },
  { letter: "I", question: "The global computer network you use to go online and watch videos.", answer: "INTERNET", grade: 7, category: "technology" },
  { letter: "I", question: "This adjective describes a sick person who does not feel healthy.", answer: "ILL", grade: 7, category: "health" },
  { letter: "I", question: "This is the opposite of outside.", answer: "INSIDE", grade: 7, category: "prepositions" },
  { letter: "I", question: "A great thought or plan that comes into your mind.", answer: "IDEA", grade: 7, category: "mind" },

  // --- J ---
  { letter: "J", question: "A refreshing liquid drink made from squeezed fruits like oranges.", answer: "JUICE", grade: 7, category: "food" },
  { letter: "J", question: "A piece of clothing with sleeves worn over shirts to keep warm.", answer: "JACKET", grade: 7, category: "clothes" },
  { letter: "J", question: "You do this action when you push yourself off the ground with both feet into the air.", answer: "JUMP", grade: 7, category: "verbs" },
  { letter: "J", question: "The first month of the calendar year.", answer: "JANUARY", grade: 7, category: "time" },
  { letter: "J", question: "A sweet food made by boiling fruit and sugar, spread on bread.", answer: "JAM", grade: 7, category: "food" },
  { letter: "J", question: "Casual blue trousers made of strong denim cotton cloth.", answer: "JEANS", grade: 7, category: "clothes" },
  { letter: "J", question: "The seventh month of the year, a warm summer month.", answer: "JULY", grade: 7, category: "time" },
  { letter: "J", question: "The work a person does to earn money, like being a teacher or driver.", answer: "JOB", grade: 7, category: "jobs" },

  // --- K ---
  { letter: "K", question: "The room in a house where meals are prepared and cooked.", answer: "KITCHEN", grade: 7, category: "house" },
  { letter: "K", question: "A small metal tool used to unlock a lock on a door.", answer: "KEY", grade: 7, category: "objects" },
  { letter: "K", question: "A male monarch or royal ruler who wears a crown.", answer: "KING", grade: 7, category: "people" },
  { letter: "K", question: "A toy made of light wood and paper that flies in the windy sky on a string.", answer: "KITE", grade: 7, category: "toys" },
  { letter: "K", question: "You do this action when you strike a football with your foot.", answer: "KICK", grade: 7, category: "sports" },
  { letter: "K", question: "An Australian animal that carries its baby in a pouch and hops.", answer: "KANGAROO", grade: 7, category: "animals" },
  { letter: "K", question: "A cutting tool with a handle and a sharp blade used to slice food.", answer: "KNIFE", grade: 7, category: "kitchen" },
  { letter: "K", question: "A friendly and gentle person who is nice to others.", answer: "KIND", grade: 7, category: "personality" },

  // --- L ---
  { letter: "L", question: "A quiet building where you can borrow or read many books.", answer: "LIBRARY", grade: 7, category: "places" },
  { letter: "L", question: "A sour yellow citrus fruit used to make lemonade.", answer: "LEMON", grade: 7, category: "food" },
  { letter: "L", question: "A large wild cat known as the king of the jungle with a mane.", answer: "LION", grade: 7, category: "animals" },
  { letter: "L", question: "The body part you use for standing, walking, and running.", answer: "LEG", grade: 7, category: "body" },
  { letter: "L", question: "The midday meal that you eat in the middle of the day at school.", answer: "LUNCH", grade: 7, category: "food" },
  { letter: "L", question: "A written message sent by mail inside an envelope with a stamp.", answer: "LETTER", grade: 7, category: "communication" },
  { letter: "L", question: "You do this action with your ears when someone is speaking or music is playing.", answer: "LISTEN", grade: 7, category: "verbs" },
  { letter: "L", question: "A piece of green flat part that grows on branches of trees.", answer: "LEAF", grade: 7, category: "nature" },

  // --- M ---
  { letter: "M", question: "A white healthy drink that comes from cows and is rich in calcium.", answer: "MILK", grade: 7, category: "food" },
  { letter: "M", question: "A playful animal with a long tail that climbs trees and likes bananas.", answer: "MONKEY", grade: 7, category: "animals" },
  { letter: "M", question: "A female parent who takes care of her children.", answer: "MOTHER", grade: 7, category: "family" },
  { letter: "M", question: "The first day of the school and work week after Sunday.", answer: "MONDAY", grade: 7, category: "time" },
  { letter: "M", question: "Coins and paper bills used to buy goods and pay for things.", answer: "MONEY", grade: 7, category: "daily life" },
  { letter: "M", question: "A natural glowing sphere that shines in the night sky.", answer: "MOON", grade: 7, category: "nature" },
  { letter: "M", question: "A very high and rocky natural elevation of the earth's surface.", answer: "MOUNTAIN", grade: 7, category: "nature" },
  { letter: "M", question: "The body opening on your face that you use to speak and eat.", answer: "MOUTH", grade: 7, category: "body" },

  // --- N ---
  { letter: "N", question: "The body part on your face above your mouth used for smelling.", answer: "NOSE", grade: 7, category: "body" },
  { letter: "N", question: "A book with blank pages used by students to write notes in class.", answer: "NOTEBOOK", grade: 7, category: "school" },
  { letter: "N", question: "A person who works with doctors to take care of sick patients in a clinic.", answer: "NURSE", grade: 7, category: "jobs" },
  { letter: "N", question: "The dark period of the 24-hour day when the sun is down and people sleep.", answer: "NIGHT", grade: 7, category: "time" },
  { letter: "N", question: "The word you use to call or identify a person, pet, or place.", answer: "NAME", grade: 7, category: "daily life" },
  { letter: "N", question: "This is the opposite of old when talking about things.", answer: "NEW", grade: 7, category: "adjectives" },
  { letter: "N", question: "The compass direction directly opposite to south.", answer: "NORTH", grade: 7, category: "geography" },
  { letter: "N", question: "A home built by a bird out of twigs and leaves to lay eggs.", answer: "NEST", grade: 7, category: "animals" },

  // --- O ---
  { letter: "O", question: "A round, sweet citrus fruit that shares its name with its bright color.", answer: "ORANGE", grade: 7, category: "food" },
  { letter: "O", question: "A vast body of salty water that covers most of the earth.", answer: "OCEAN", grade: 7, category: "nature" },
  { letter: "O", question: "This is the opposite of closed.", answer: "OPEN", grade: 7, category: "adjectives" },
  { letter: "O", question: "The tenth month of the year during autumn.", answer: "OCTOBER", grade: 7, category: "time" },
  { letter: "O", question: "A nocturnal bird of prey with large round eyes that can turn its head far.", answer: "OWL", grade: 7, category: "animals" },
  { letter: "O", question: "A vegetable with many layers that can make your eyes water when chopped.", answer: "ONION", grade: 7, category: "food" },
  { letter: "O", question: "This is the opposite of young.", answer: "OLD", grade: 7, category: "adjectives" },
  { letter: "O", question: "A room or building where people work at desks and computers.", answer: "OFFICE", grade: 7, category: "places" },

  // --- P ---
  { letter: "P", question: "You use this ink-filled writing instrument to write in your notebook.", answer: "PEN", grade: 7, category: "school" },
  { letter: "P", question: "You use this wooden writing tool with graphite that you can erase.", answer: "PENCIL", grade: 7, category: "school" },
  { letter: "P", question: "A device you use to make voice calls, send text messages, and browse apps.", answer: "PHONE", grade: 7, category: "technology" },
  { letter: "P", question: "A popular Italian food with a round dough base, tomato sauce, and melted cheese.", answer: "PIZZA", grade: 7, category: "food" },
  { letter: "P", question: "A public outdoor green area where children go to play on swings and slides.", answer: "PARK", grade: 7, category: "places" },
  { letter: "P", question: "A professional who flies airplanes and transports passengers in the sky.", answer: "PILOT", grade: 7, category: "jobs" },
  { letter: "P", question: "A picture or image created by taking a shot with a camera.", answer: "PHOTO", grade: 7, category: "technology" },
  { letter: "P", question: "You do this fun action with toys, games, or sports with friends.", answer: "PLAY", grade: 7, category: "verbs" },

  // --- Q ---
  { letter: "Q", question: "A royal female ruler of an empire or the wife of a king.", answer: "QUEEN", grade: 7, category: "people" },
  { letter: "Q", question: "You ask this when you want to learn something and find an answer.", answer: "QUESTION", grade: 7, category: "school" },
  { letter: "Q", question: "Making very little or no sound; making no noise.", answer: "QUIET", grade: 7, category: "adjectives" },
  { letter: "Q", question: "A short, fun test or game with several simple questions.", answer: "QUIZ", grade: 7, category: "school" },
  { letter: "Q", question: "Doing something with great speed and very fast.", answer: "QUICK", grade: 7, category: "adjectives" },
  { letter: "Q", question: "One fourth (1/4) of a whole thing, or 15 minutes of an hour.", answer: "QUARTER", grade: 7, category: "math" },
  { letter: "Q", question: "To stop doing something or give up a game.", answer: "QUIT", grade: 7, category: "verbs" },

  // --- R ---
  { letter: "R", question: "Water drops falling from clouds in the sky onto the earth.", answer: "RAIN", grade: 7, category: "weather" },
  { letter: "R", question: "You do this activity when you look at letters and words in a book.", answer: "READ", grade: 7, category: "school" },
  { letter: "R", question: "A primary color of strawberries, fire engines, and ripe tomatoes.", answer: "RED", grade: 7, category: "colors" },
  { letter: "R", question: "A small furry animal with long ears that hops and eats carrots.", answer: "RABBIT", grade: 7, category: "animals" },
  { letter: "R", question: "A natural flowing stream of fresh water that goes toward the sea.", answer: "RIVER", grade: 7, category: "nature" },
  { letter: "R", question: "A place where you pay money to sit down, order meals, and eat.", answer: "RESTAURANT", grade: 7, category: "places" },
  { letter: "R", question: "A colorful arch of seven colors appearing in the sky after rain with sunshine.", answer: "RAINBOW", grade: 7, category: "nature" },
  { letter: "R", question: "You move very fast on your feet, much faster than walking.", answer: "RUN", grade: 7, category: "verbs" },

  // --- S ---
  { letter: "S", question: "The educational building where students go to learn lessons from teachers.", answer: "SCHOOL", grade: 7, category: "school" },
  { letter: "S", question: "You wear these protective items on your feet before walking outside.", answer: "SHOES", grade: 7, category: "clothes" },
  { letter: "S", question: "The bright, hot star in the center of our solar system that gives daylight.", answer: "SUN", grade: 7, category: "nature" },
  { letter: "S", question: "Soft white frozen water flakes that fall from the sky in cold winter.", answer: "SNOW", grade: 7, category: "weather" },
  { letter: "S", question: "A long reptile with no legs that slithers on the ground and hisses.", answer: "SNAKE", grade: 7, category: "animals" },
  { letter: "S", question: "A female sibling who shares the same parents with you.", answer: "SISTER", grade: 7, category: "family" },
  { letter: "S", question: "The warmest season of the year with sunny holidays and beach trips.", answer: "SUMMER", grade: 7, category: "seasons" },
  { letter: "S", question: "A person who is enrolled in school to study and learn new knowledge.", answer: "STUDENT", grade: 7, category: "school" },

  // --- T ---
  { letter: "T", question: "The person whose job is to teach students and explain lessons in class.", answer: "TEACHER", grade: 7, category: "jobs" },
  { letter: "T", question: "A large vehicle with multiple railway wagons that travels on tracks.", answer: "TRAIN", grade: 7, category: "transport" },
  { letter: "T", question: "A tall woody plant in nature with a trunk, green leaves, and branches.", answer: "TREE", grade: 7, category: "nature" },
  { letter: "T", question: "A piece of furniture with a flat top and legs used for eating or writing.", answer: "TABLE", grade: 7, category: "furniture" },
  { letter: "T", question: "A hot brown beverage brewed from dried leaves in hot water.", answer: "TEA", grade: 7, category: "food" },
  { letter: "T", question: "A red, juicy salad fruit often used in sauces and salads.", answer: "TOMATO", grade: 7, category: "food" },
  { letter: "T", question: "The day of the week that comes immediately after Monday.", answer: "TUESDAY", grade: 7, category: "time" },
  { letter: "T", question: "This is how you feel when you need rest or want to sleep.", answer: "TIRED", grade: 7, category: "feelings" },

  // --- U ---
  { letter: "U", question: "You hold this item above your head to stay dry during rain.", answer: "UMBRELLA", grade: 7, category: "objects" },
  { letter: "U", question: "The brother of your mother or father.", answer: "UNCLE", grade: 7, category: "family" },
  { letter: "U", question: "This preposition is the opposite of over or above.", answer: "UNDER", grade: 7, category: "prepositions" },
  { letter: "U", question: "Special matching clothes that students or police officers wear on duty.", answer: "UNIFORM", grade: 7, category: "clothes" },
  { letter: "U", question: "The direction opposite to down, pointing toward the sky.", answer: "UP", grade: 7, category: "directions" },
  { letter: "U", question: "This is the opposite of beautiful or attractive.", answer: "UGLY", grade: 7, category: "adjectives" },
  { letter: "U", question: "This is how you feel when you are sad and not joyful.", answer: "UNHAPPY", grade: 7, category: "feelings" },

  // --- V ---
  { letter: "V", question: "Carrots, potatoes, and cucumbers belong to this healthy food category.", answer: "VEGETABLE", grade: 7, category: "food" },
  { letter: "V", question: "A small community or settlement in the countryside, smaller than a town.", answer: "VILLAGE", grade: 7, category: "places" },
  { letter: "V", question: "You do this action when you travel to see a friend or go to a museum.", answer: "VISIT", grade: 7, category: "verbs" },
  { letter: "V", question: "A musical instrument with four strings played with a bow under the chin.", answer: "VIOLIN", grade: 7, category: "music" },
  { letter: "V", question: "A team sport played by hitting a ball over a high net with your hands.", answer: "VOLLEYBALL", grade: 7, category: "sports" },
  { letter: "V", question: "A decorative container used to hold cut flowers and water.", answer: "VASE", grade: 7, category: "house" },
  { letter: "V", question: "A small truck or large covered motor vehicle used for carrying goods.", answer: "VAN", grade: 7, category: "transport" },

  // --- W ---
  { letter: "W", question: "A clear, odorless liquid you drink to stay alive and healthy.", answer: "WATER", grade: 7, category: "drinks" },
  { letter: "W", question: "An opening in a wall with glass that lets light and fresh air into a room.", answer: "WINDOW", grade: 7, category: "house" },
  { letter: "W", question: "The coldest season of the year when it often snows.", answer: "WINTER", grade: 7, category: "seasons" },
  { letter: "W", question: "A small timepiece device worn on your wrist to tell the time.", answer: "WATCH", grade: 7, category: "objects" },
  { letter: "W", question: "You do this basic action on foot by putting one foot in front of the other.", answer: "WALK", grade: 7, category: "verbs" },
  { letter: "W", question: "You do this action when you use a pen to put words on paper.", answer: "WRITE", grade: 7, category: "verbs" },
  { letter: "W", question: "The state of the atmosphere outside, like sunny, rainy, or windy.", answer: "WEATHER", grade: 7, category: "weather" },
  { letter: "W", question: "The bright color of fresh milk, clouds, and clean paper.", answer: "WHITE", grade: 7, category: "colors" },

  // --- X ---
  { letter: "X", question: "A special photographic scan taken at a hospital to see your bones.", answer: "X-RAY", grade: 7, category: "health" },
  { letter: "X", question: "A musical percussion instrument with wooden bars struck by small mallets.", answer: "XYLOPHONE", grade: 7, category: "music" },
  { letter: "X", question: "A machine in an office or school used to make exact photocopies of paper documents.", answer: "XEROX", grade: 7, category: "technology" },
  { letter: "X", question: "A short, informal name for the Christmas holiday celebrated in winter.", answer: "XMAS", grade: 7, category: "culture" },

  // --- Y ---
  { letter: "Y", question: "The bright color of the sun, lemons, and ripe bananas.", answer: "YELLOW", grade: 7, category: "colors" },
  { letter: "Y", question: "The day that came immediately before today.", answer: "YESTERDAY", grade: 7, category: "time" },
  { letter: "Y", question: "A creamy, healthy dairy food made from fermented milk, often eaten with fruit.", answer: "YOGURT", grade: 7, category: "food" },
  { letter: "Y", question: "This is the opposite of old when talking about a person's age.", answer: "YOUNG", grade: 7, category: "adjectives" },
  { letter: "Y", question: "A time period that contains 12 months or 365 days.", answer: "YEAR", grade: 7, category: "time" },
  { letter: "Y", question: "An open grassy ground area next to or behind a house or school.", answer: "YARD", grade: 7, category: "house" },

  // --- Z ---
  { letter: "Z", question: "A public park or facility where wild animals are kept for people to see.", answer: "ZOO", grade: 7, category: "places" },
  { letter: "Z", question: "A wild African animal that looks like a horse with black and white stripes.", answer: "ZEBRA", grade: 7, category: "animals" },
  { letter: "Z", question: "The number that represents nothing, written as a round circle '0'.", answer: "ZERO", grade: 7, category: "math" },
  { letter: "Z", question: "A fastener with metal or plastic teeth used to close jackets and bags.", answer: "ZIPPER", grade: 7, category: "clothes" },
  { letter: "Z", question: "A specific designated area or section of a place or city.", answer: "ZONE", grade: 7, category: "places" }
];

const grade8Questions = [
  // --- A ---
  { letter: "A", question: "A person you know slightly, but who is not as close as a true friend.", answer: "ACQUAINTANCE", grade: 8, category: "friendship" },
  { letter: "A", question: "A brave, exciting, and sometimes dangerous journey or experience.", answer: "ADVENTURE", grade: 8, category: "travel" },
  { letter: "A", question: "A helpful suggestion or recommendation given to help someone solve a problem.", answer: "ADVICE", grade: 8, category: "communication" },
  { letter: "A", question: "To say you are sorry for a mistake you made.", answer: "APOLOGIZE", grade: 8, category: "communication" },
  { letter: "A", question: "To have the same opinion or say yes to a suggestion.", answer: "AGREE", grade: 8, category: "communication" },
  { letter: "A", question: "A place where people stay on holiday, such as a hotel or guest house.", answer: "ACCOMMODATION", grade: 8, category: "tourism" },
  { letter: "A", question: "A strong desire or goal to achieve something great in life.", answer: "AMBITION", grade: 8, category: "life" },
  { letter: "A", question: "A phone program or computer software you download onto your device.", answer: "APP", grade: 8, category: "technology" },

  // --- B ---
  { letter: "B", question: "A closest companion who is loyal, trustworthy, and always supports you.", answer: "BEST FRIEND", grade: 8, category: "friendship" },
  { letter: "B", question: "You do this action to heat water or soup until bubbles rise to the surface.", answer: "BOIL", grade: 8, category: "cooking" },
  { letter: "B", question: "To cook bread, cakes, or cookies inside a hot oven.", answer: "BAKE", grade: 8, category: "cooking" },
  { letter: "B", question: "A special trip or travel bag you carry on your back while hiking or traveling.", answer: "BACKPACK", grade: 8, category: "travel" },
  { letter: "B", question: "To support, encourage, or defend a pal when they need help.", answer: "BACK UP", grade: 8, category: "friendship" },
  { letter: "B", question: "A person who always gives orders to other people in an annoying way.", answer: "BOSSY", grade: 8, category: "personality" },
  { letter: "B", question: "A piece of software or program like Chrome used to explore internet web pages.", answer: "BROWSER", grade: 8, category: "technology" },
  { letter: "B", question: "Having a lot of things to do and very little free time.", answer: "BUSY", grade: 8, category: "daily life" },

  // --- C ---
  { letter: "C", question: "To talk informally and friendly with someone in person or online.", answer: "CHAT", grade: 8, category: "communication" },
  { letter: "C", question: "To make phone contact with someone or speak loudly to them.", answer: "CALL", grade: 8, category: "communication" },
  { letter: "C", question: "A person who is friendly, helpful, and pays kind attention to other people's needs.", answer: "CARING", grade: 8, category: "personality" },
  { letter: "C", question: "To cut food like onions or meat into small rough pieces with a sharp knife.", answer: "CHOP", grade: 8, category: "cooking" },
  { letter: "C", question: "The link or network bridge between computers, smartphones, and the internet.", answer: "CONNECTION", grade: 8, category: "technology" },
  { letter: "C", question: "A musical performance by singers or a band in front of an audience.", answer: "CONCERT", grade: 8, category: "entertainment" },
  { letter: "C", question: "To depend on a trustworthy pal and know they will always be there for you.", answer: "COUNT ON", grade: 8, category: "friendship" },
  { letter: "C", question: "To have a talk and exchange opinions and thoughts about a specific topic.", answer: "CONVERSATION", grade: 8, category: "communication" },

  // --- D ---
  { letter: "D", question: "A sweet dish or treat served at the end of a dinner meal.", answer: "DESSERT", grade: 8, category: "cooking" },
  { letter: "D", question: "A natural event like an earthquake, flood, or tsunami that causes great damage.", answer: "DISASTER", grade: 8, category: "environment" },
  { letter: "D", question: "To copy files, apps, or music from the internet onto your computer or phone.", answer: "DOWNLOAD", grade: 8, category: "technology" },
  { letter: "D", question: "To cut food into small square cube shapes when cooking.", answer: "DICE", grade: 8, category: "cooking" },
  { letter: "D", question: "A doctor who specializes in caring for and fixing teeth.", answer: "DENTIST", grade: 8, category: "occupations" },
  { letter: "D", question: "A journey or trip to see interesting places, monuments, and sights.", answer: "DESTINATION", grade: 8, category: "travel" },
  { letter: "D", question: "To talk about something with another person to share ideas.", answer: "DISCUSS", grade: 8, category: "communication" },
  { letter: "D", question: "A long period of time with no rain that causes serious water shortage.", answer: "DROUGHT", grade: 8, category: "environment" },

  // --- E ---
  { letter: "E", question: "The natural world around us, including land, air, water, and forests.", answer: "ENVIRONMENT", grade: 8, category: "nature" },
  { letter: "E", question: "A sudden shaking of the ground caused by movement inside the earth.", answer: "EARTHQUAKE", grade: 8, category: "environment" },
  { letter: "E", question: "A message sent electronically from one computer or smartphone to another.", answer: "EMAIL", grade: 8, category: "communication" },
  { letter: "E", question: "Dangerous and exciting adventure activities like skydiving and bungee jumping.", answer: "EXTREME SPORTS", grade: 8, category: "sports" },
  { letter: "E", question: "To travel around a new place or country to discover new things.", answer: "EXPLORE", grade: 8, category: "travel" },
  { letter: "E", question: "Knowledge or skill gained from doing something or seeing places over time.", answer: "EXPERIENCE", grade: 8, category: "life" },
  { letter: "E", question: "A reason or statement given to explain why you cannot attend an event or party.", answer: "EXCUSE", grade: 8, category: "friendship" },
  { letter: "E", question: "Power and electricity used to make lights and home machines work.", answer: "ENERGY", grade: 8, category: "science" },

  // --- F ---
  { letter: "F", question: "A close bond of mutual trust, affection, and support between good friends.", answer: "FRIENDSHIP", grade: 8, category: "friendship" },
  { letter: "F", question: "To cook food in hot oil or melted butter in a pan.", answer: "FRY", grade: 8, category: "cooking" },
  { letter: "F", question: "A digital document or item of data stored on a computer or smartphone.", answer: "FILE", grade: 8, category: "technology" },
  { letter: "F", question: "A person who is known by many people and has a public reputation.", answer: "FAMOUS", grade: 8, category: "people" },
  { letter: "F", question: "A large overflow of water covering land that is usually dry.", answer: "FLOOD", grade: 8, category: "environment" },
  { letter: "F", question: "An airplane journey taken through the sky between cities or countries.", answer: "FLIGHT", grade: 8, category: "travel" },
  { letter: "F", question: "Food that has just been picked, made, or cooked and is not canned or stale.", answer: "FRESH", grade: 8, category: "cooking" },
  { letter: "F", question: "To look for information or discover an answer to a question.", answer: "FIND", grade: 8, category: "verbs" },

  // --- G ---
  { letter: "G", question: "A person who leads tourists around a city and explains historical facts.", answer: "GUIDE", grade: 8, category: "tourism" },
  { letter: "G", question: "To cook meat or vegetables over hot coals or direct flame outdoors.", answer: "GRILL", grade: 8, category: "cooking" },
  { letter: "G", question: "A person who gives time, help, or gifts freely without being selfish.", answer: "GENEROUS", grade: 8, category: "personality" },
  { letter: "G", question: "To have a warm, friendly, and smooth relationship with someone.", answer: "GET ON WELL", grade: 8, category: "friendship" },
  { letter: "G", question: "To rub cheese or carrots into fine shreds using a sharp metal kitchen tool.", answer: "GRATE", grade: 8, category: "cooking" },
  { letter: "G", question: "A target, aim, or purpose you want to reach in your studies or life.", answer: "GOAL", grade: 8, category: "life" },
  { letter: "G", question: "The worldwide increase in the earth's temperatures and climate change.", answer: "GLOBAL WARMING", grade: 8, category: "environment" },
  { letter: "G", question: "A small piece of hardware or clever electronic device like a smart tracker.", answer: "GADGET", grade: 8, category: "technology" },

  // --- H ---
  { letter: "H", question: "An activity you enjoy doing regularly in your free time for fun and relaxation.", answer: "HOBBY", grade: 8, category: "hobbies" },
  { letter: "H", question: "A person who always tells the truth and does not lie, cheat, or steal.", answer: "HONEST", grade: 8, category: "personality" },
  { letter: "H", question: "To spend relaxing free time together with your pals at a cafe or park.", answer: "HANG OUT", grade: 8, category: "friendship" },
  { letter: "H", question: "A building that provides lodging, rooms, and meals for travelers and tourists.", answer: "HOTEL", grade: 8, category: "tourism" },
  { letter: "H", question: "Good physical and mental condition, free from illness or injury.", answer: "HEALTH", grade: 8, category: "health" },
  { letter: "H", question: "A long walk through nature, forests, or up mountains.", answer: "HIKE", grade: 8, category: "sports" },
  { letter: "H", question: "The study of past events, civilizations, and famous people.", answer: "HISTORY", grade: 8, category: "school" },
  { letter: "H", question: "A protective hard hat worn while riding a bicycle or doing extreme sports.", answer: "HELMET", grade: 8, category: "sports" },

  // --- I ---
  { letter: "I", question: "A written or spoken request asking someone to come to a party or wedding.", answer: "INVITATION", grade: 8, category: "friendship" },
  { letter: "I", question: "Raw materials and items needed to cook a specific meal or recipe.", answer: "INGREDIENTS", grade: 8, category: "cooking" },
  { letter: "I", question: "To create, design, or produce something completely new for the first time.", answer: "INVENT", grade: 8, category: "science" },
  { letter: "I", question: "To ask someone politely to join an event, dinner, or gathering.", answer: "INVITE", grade: 8, category: "communication" },
  { letter: "I", question: "Facts and knowledge provided or learned about a specific topic.", answer: "INFORMATION", grade: 8, category: "communication" },
  { letter: "I", question: "Having great value, significance, or consequence.", answer: "IMPORTANT", grade: 8, category: "adjectives" },
  { letter: "I", question: "To make something better or raise its quality.", answer: "IMPROVE", grade: 8, category: "verbs" },

  // --- J ---
  { letter: "J", question: "The work or profession a person does regularly to earn a living.", answer: "JOB", grade: 8, category: "occupations" },
  { letter: "J", question: "An act of traveling from one place to another over a distance.", answer: "JOURNEY", grade: 8, category: "travel" },
  { letter: "J", question: "A dense tropical forest with many wild plants, tall trees, and animals.", answer: "JUNGLE", grade: 8, category: "nature" },
  { letter: "J", question: "Meals and snacks that are high in calories, sugar, and fat, and not healthy.", answer: "JUNK FOOD", grade: 8, category: "health" },
  { letter: "J", question: "To become part of a club, team, group, or conversation.", answer: "JOIN", grade: 8, category: "friendship" },
  { letter: "J", question: "A person whose job is to write news articles for newspapers or TV channels.", answer: "JOURNALIST", grade: 8, category: "occupations" },
  { letter: "J", question: "A short funny story or remark that makes people laugh.", answer: "JOKE", grade: 8, category: "communication" },

  // --- K ---
  { letter: "K", question: "To have information, facts, or understanding in your mind.", answer: "KNOW", grade: 8, category: "verbs" },
  { letter: "K", question: "To maintain a promise and not break a secret told to you by a friend.", answer: "KEEP", grade: 8, category: "friendship" },
  { letter: "K", question: "A helpful, friendly person who treats everyone with care and gentle manners.", answer: "KIND", grade: 8, category: "personality" },
  { letter: "K", question: "An electronic device with keys used for typing letters into a computer.", answer: "KEYBOARD", grade: 8, category: "technology" },
  { letter: "K", question: "To press water or dough repeatedly with your hands when baking bread.", answer: "KNEAD", grade: 8, category: "cooking" },
  { letter: "K", question: "Information, skills, and understanding gained through study or experience.", answer: "KNOWLEDGE", grade: 8, category: "school" },
  { letter: "K", question: "An electric water heater pot used in kitchens to boil water quickly for tea.", answer: "KETTLE", grade: 8, category: "cooking" },

  // --- L ---
  { letter: "L", question: "A portable, battery-powered personal computer you can fold and carry anywhere.", answer: "LAPTOP", grade: 8, category: "technology" },
  { letter: "L", question: "A person who is not willing to work hard or make an effort.", answer: "LAZY", grade: 8, category: "personality" },
  { letter: "L", question: "A true and faithful person who always stands by their friends and country.", answer: "LOYAL", grade: 8, category: "friendship" },
  { letter: "L", question: "To gain knowledge or practical skills through study, practice, or teaching.", answer: "LEARN", grade: 8, category: "school" },
  { letter: "L", question: "The bags, suitcases, and trunks you pack when traveling on holiday.", answer: "LUGGAGE", grade: 8, category: "travel" },
  { letter: "L", question: "A clickable web address on the internet that connects you to a page.", answer: "LINK", grade: 8, category: "technology" },
  { letter: "L", question: "To give attention and hear sounds or spoken words carefully.", answer: "LISTEN", grade: 8, category: "communication" },
  { letter: "L", question: "A place or position where something is situated.", answer: "LOCATION", grade: 8, category: "travel" },

  // --- M ---
  { letter: "M", question: "A written or spoken piece of communication sent to someone.", answer: "MESSAGE", grade: 8, category: "communication" },
  { letter: "M", question: "To combine two or more ingredients together thoroughly in a bowl.", answer: "MIX", grade: 8, category: "cooking" },
  { letter: "M", question: "A list of food and drink options with prices at a restaurant.", answer: "MENU", grade: 8, category: "cooking" },
  { letter: "M", question: "To remember someone or feel sad because an absent friend is not with you.", answer: "MISS", grade: 8, category: "feelings" },
  { letter: "M", question: "A building where historical, scientific, or artistic objects are exhibited.", answer: "MUSEUM", grade: 8, category: "tourism" },
  { letter: "M", question: "A person whose job is to repair and maintain car engines and machines.", answer: "MECHANIC", grade: 8, category: "occupations" },
  { letter: "M", question: "To change from a solid to liquid state by heat, like butter in a warm pan.", answer: "MELT", grade: 8, category: "cooking" },
  { letter: "M", question: "To look after and keep someone or something safe from trouble.", answer: "MIND", grade: 8, category: "verbs" },

  // --- N ---
  { letter: "N", question: "A person who lives in a house or apartment next door to you.", answer: "NEIGHBOR", grade: 8, category: "daily life" },
  { letter: "N", question: "Existing in or produced by the physical world; not made by humans.", answer: "NATURAL", grade: 8, category: "nature" },
  { letter: "N", question: "A printed publication containing current daily news, reports, and articles.", answer: "NEWSPAPER", grade: 8, category: "communication" },
  { letter: "N", question: "Required or essential to be done or obtained; not optional.", answer: "NECESSARY", grade: 8, category: "adjectives" },
  { letter: "N", question: "A large connected group of computers and devices across the world.", answer: "NETWORK", grade: 8, category: "technology" },
  { letter: "N", question: "Pleasant, kind, and agreeable in character.", answer: "NICE", grade: 8, category: "personality" },
  { letter: "N", question: "Loud or unpleasant sounds that disturb quietness.", answer: "NOISE", grade: 8, category: "daily life" },

  // --- O ---
  { letter: "O", question: "Connected to or available through a computer system or the internet.", answer: "ONLINE", grade: 8, category: "technology" },
  { letter: "O", question: "To express a view, idea, or personal belief about something.", answer: "OPINION", grade: 8, category: "communication" },
  { letter: "O", question: "To arrange, plan, or prepare an event or meeting systematically.", answer: "ORGANIZE", grade: 8, category: "daily life" },
  { letter: "O", question: "To propose or present something to someone for them to accept or refuse.", answer: "OFFER", grade: 8, category: "communication" },
  { letter: "O", question: "A job, profession, or career by which a person earns their living.", answer: "OCCUPATION", grade: 8, category: "occupations" },
  { letter: "O", question: "A set of clothes worn together for an occasion or event.", answer: "OUTFIT", grade: 8, category: "clothes" },
  { letter: "O", question: "An enclosed cooking appliance used for baking cakes or roasting meat.", answer: "OVEN", grade: 8, category: "cooking" },

  // --- P ---
  { letter: "P", question: "A secret word or code used to access your email or computer accounts.", answer: "PASSWORD", grade: 8, category: "technology" },
  { letter: "P", question: "A formal travel document issued by a government to verify identity abroad.", answer: "PASSPORT", grade: 8, category: "travel" },
  { letter: "P", question: "To remove the outer skin from a fruit or vegetable like an apple or potato.", answer: "PEEL", grade: 8, category: "cooking" },
  { letter: "P", question: "Harmful substances and chemicals that make air, land, or water dirty.", answer: "POLLUTION", grade: 8, category: "environment" },
  { letter: "P", question: "To save, defend, and keep nature or wild animals safe from harm.", answer: "PROTECT", grade: 8, category: "environment" },
  { letter: "P", question: "A social gathering of guests for celebration, music, and fun.", answer: "PARTY", grade: 8, category: "friendship" },
  { letter: "P", question: "To choose one thing over another because you like it better.", answer: "PREFER", grade: 8, category: "daily life" },
  { letter: "P", question: "To flow or cause a liquid like milk or water to flow from a jug into a glass.", answer: "POUR", grade: 8, category: "cooking" },

  // --- Q ---
  { letter: "Q", question: "A line of people waiting patiently for their turn to buy tickets or enter.", answer: "QUEUE", grade: 8, category: "daily life" },
  { letter: "Q", question: "A sentence or phrase you ask to request information or clarification.", answer: "QUESTION", grade: 8, category: "communication" },
  { letter: "Q", question: "Calm, making very little noise, and peaceful.", answer: "QUIET", grade: 8, category: "personality" },
  { letter: "Q", question: "To repeat or copy words directly spoken or written by someone else.", answer: "QUOTE", grade: 8, category: "communication" },
  { letter: "Q", question: "Fast in speed and done in a very short amount of time.", answer: "QUICK", grade: 8, category: "adjectives" },
  { letter: "Q", question: "A measure of how good, well-made, or valuable something is.", answer: "QUALITY", grade: 8, category: "daily life" },
  { letter: "Q", question: "To stop or resign from an activity or job.", answer: "QUIT", grade: 8, category: "verbs" },

  // --- R ---
  { letter: "R", question: "A set of cooking instructions and ingredients needed to prepare a meal.", answer: "RECIPE", grade: 8, category: "cooking" },
  { letter: "R", question: "To process used materials like plastic, glass, and paper so they can be reused.", answer: "RECYCLE", grade: 8, category: "environment" },
  { letter: "R", question: "To say no or decline an offer, invitation, or suggestion politely.", answer: "REFUSE", grade: 8, category: "communication" },
  { letter: "R", question: "A person you can trust and count on because they always do what they promise.", answer: "RELIABLE", grade: 8, category: "personality" },
  { letter: "R", question: "To cook meat or vegetables in an oven or over an open fire.", answer: "ROAST", grade: 8, category: "cooking" },
  { letter: "R", question: "To book a room or flight ticket in advance for a trip.", answer: "RESERVE", grade: 8, category: "tourism" },
  { letter: "R", question: "To answer or react to a message, question, or email.", answer: "REPLY", grade: 8, category: "communication" },
  { letter: "R", question: "The explanation or cause for why someone did or felt something.", answer: "REASON", grade: 8, category: "communication" },

  // --- S ---
  { letter: "S", question: "A private piece of information that is meant to be kept hidden from others.", answer: "SECRET", grade: 8, category: "friendship" },
  { letter: "S", question: "A mobile phone that connects to the internet and runs apps and games.", answer: "SMARTPHONE", grade: 8, category: "technology" },
  { letter: "S", question: "An object you buy or keep to remember a vacation or special place you visited.", answer: "SOUVENIR", grade: 8, category: "tourism" },
  { letter: "S", question: "Visiting interesting places, historic buildings, and monuments on holiday.", answer: "SIGHTSEEING", grade: 8, category: "tourism" },
  { letter: "S", question: "Websites and apps used to share pictures, messages, and posts with people online.", answer: "SOCIAL MEDIA", grade: 8, category: "technology" },
  { letter: "S", question: "To cut food into thin, flat wide pieces like bread or cheese.", answer: "SLICE", grade: 8, category: "cooking" },
  { letter: "S", question: "A person who cares only about themselves and does not like to share.", answer: "SELFISH", grade: 8, category: "personality" },
  { letter: "S", question: "A person who is unwilling to change their opinion even when wrong.", answer: "STUBBORN", grade: 8, category: "personality" },

  // --- T ---
  { letter: "T", question: "A person who travels and visits places for pleasure, culture, and holiday.", answer: "TOURIST", grade: 8, category: "tourism" },
  { letter: "T", question: "To rely on the honesty, integrity, and loyalty of a true companion.", answer: "TRUST", grade: 8, category: "friendship" },
  { letter: "T", question: "To send a written message from one mobile phone to another.", answer: "TEXT", grade: 8, category: "communication" },
  { letter: "T", question: "A person who is trustworthy and always tells the truth without lying.", answer: "TRUTHFUL", grade: 8, category: "personality" },
  { letter: "T", question: "The application of scientific knowledge and digital devices for practical purposes.", answer: "TECHNOLOGY", grade: 8, category: "technology" },
  { letter: "T", question: "A violent spinning windstorm shaped like a giant dark funnel.", answer: "TORNADO", grade: 8, category: "environment" },
  { letter: "T", question: "A holiday or voyage to explore cities, nature, or foreign lands.", answer: "TRIP", grade: 8, category: "travel" },
  { letter: "T", question: "A portable fabric shelter supported by poles and ropes used when camping.", answer: "TENT", grade: 8, category: "travel" },

  // --- U ---
  { letter: "U", question: "To transfer data, pictures, or videos from your phone up to the internet.", answer: "UPLOAD", grade: 8, category: "technology" },
  { letter: "U", question: "A person who uses a computer, app, network service, or website.", answer: "USER", grade: 8, category: "technology" },
  { letter: "U", question: "To have a clear mental grasp of the meaning of something explained to you.", answer: "UNDERSTAND", grade: 8, category: "communication" },
  { letter: "U", question: "Not common, rare, and different from normal ordinary things.", answer: "UNUSUAL", grade: 8, category: "adjectives" },
  { letter: "U", question: "To make something modern by adding the latest information or improvements.", answer: "UPDATE", grade: 8, category: "technology" },
  { letter: "U", question: "Extremely necessary and demanding immediate attention or action.", answer: "URGENT", grade: 8, category: "adjectives" },
  { letter: "U", question: "To operate or employ an appliance or tool for a purpose.", answer: "USE", grade: 8, category: "verbs" },

  // --- V ---
  { letter: "V", question: "A period of time away from work or school spent traveling or relaxing on holiday.", answer: "VACATION", grade: 8, category: "tourism" },
  { letter: "V", question: "A person who willingly offers their time to help without being paid.", answer: "VOLUNTEER", grade: 8, category: "life" },
  { letter: "V", question: "A mountain with a crater that can erupt with hot red lava and ash.", answer: "VOLCANO", grade: 8, category: "environment" },
  { letter: "V", question: "A short movie clip or digital recording you can watch online.", answer: "VIDEO", grade: 8, category: "technology" },
  { letter: "V", question: "The sound made when a person speaks, sings, or shouts through their vocal cords.", answer: "VOICE", grade: 8, category: "communication" },
  { letter: "V", question: "A machine with wheels used to transport people or goods on roads.", answer: "VEHICLE", grade: 8, category: "transport" },
  { letter: "V", question: "An opinion or perspective about a situation.", answer: "VIEW", grade: 8, category: "communication" },

  // --- W ---
  { letter: "W", question: "A page or collection of related pages published on the internet.", answer: "WEBSITE", grade: 8, category: "technology" },
  { letter: "W", question: "Materials or rubbish that are no longer useful and are thrown away.", answer: "WASTE", grade: 8, category: "environment" },
  { letter: "W", question: "A wireless technology used to connect electronic devices to the internet.", answer: "WIFI", grade: 8, category: "technology" },
  { letter: "W", question: "To feel anxious, troubled, or concerned about a difficult situation.", answer: "WORRY", grade: 8, category: "feelings" },
  { letter: "W", question: "The person or team that finishes first and achieves victory in a game or contest.", answer: "WINNER", grade: 8, category: "sports" },
  { letter: "W", question: "Having a comfortable and moderately high degree of heat, neither too cold nor hot.", answer: "WARM", grade: 8, category: "weather" },
  { letter: "W", question: "The planet Earth together with all of its countries, people, and nature.", answer: "WORLD", grade: 8, category: "nature" },
  { letter: "W", question: "A strong desire or dream for something you hope will happen in the future.", answer: "WISH", grade: 8, category: "feelings" },

  // --- X ---
  { letter: "X", question: "A photographic scan using radiation to inspect broken bones in a clinic.", answer: "X-RAY", grade: 8, category: "health" },
  { letter: "X", question: "A percussion instrument with tuned wooden bars played using mallets.", answer: "XYLOPHONE", grade: 8, category: "music" },
  { letter: "X", question: "A dry environmental ecosystem with very little water, such as a desert landscape.", answer: "XERIC", grade: 8, category: "nature" },
  { letter: "X", question: "To produce a paper photocopy of a document or certificate.", answer: "XEROX", grade: 8, category: "technology" },

  // --- Y ---
  { letter: "Y", question: "The day immediately preceding today in the past.", answer: "YESTERDAY", grade: 8, category: "time" },
  { letter: "Y", question: "A sour dairy product created by fermenting milk with healthy bacteria.", answer: "YOGURT", grade: 8, category: "cooking" },
  { letter: "Y", question: "To shout or speak in a very loud voice across a room or playground.", answer: "YELL", grade: 8, category: "communication" },
  { letter: "Y", question: "A popular modern physical and mental exercise practice focused on stretching and posture.", answer: "YOGA", grade: 8, category: "health" },
  { letter: "Y", question: "A young person who is not yet a fully grown adult.", answer: "YOUTH", grade: 8, category: "people" },
  { letter: "Y", question: "An open area of ground surrounded by walls or fences behind a building.", answer: "YARD", grade: 8, category: "places" },

  // --- Z ---
  { letter: "Z", question: "A park or conservation facility where wild animals are cared for and shown to visitors.", answer: "ZOO", grade: 8, category: "tourism" },
  { letter: "Z", question: "A wild African animal characterized by distinct black and white striped fur.", answer: "ZEBRA", grade: 8, category: "nature" },
  { letter: "Z", question: "The numerical digit representing the value of nothing or nil (0).", answer: "ZERO", grade: 8, category: "math" },
  { letter: "Z", question: "A specific designated region, area, or sector with particular rules or purpose.", answer: "ZONE", grade: 8, category: "geography" },
  { letter: "Z", question: "A sliding mechanical device used to close jackets, bags, or trousers.", answer: "ZIPPER", grade: 8, category: "clothes" }
];

// Ensure accessibility in both browser window and Node.js environments
if (typeof window !== "undefined") {
  window.grade7Questions = grade7Questions;
  window.grade8Questions = grade8Questions;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { grade7Questions, grade8Questions };
}
