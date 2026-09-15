/**
 * WORD RUSH — Comprehensive Vocabulary & Category Data Bank
 * Supports Grade 7 and Grade 8 with Easy, Medium, and Hard difficulty tiers.
 * Complete multi-category word registry with strict category normalization and validation.
 */

const CATEGORIES_METADATA = [
  { id: 'verbs', name: 'Verbs', icon: '⚡', prompt: 'FIND ALL THE VERBS', desc: 'Action and state words' },
  { id: 'nouns', name: 'Nouns', icon: '📦', prompt: 'FIND ALL THE NOUNS', desc: 'People, places, and things' },
  { id: 'adjectives', name: 'Adjectives', icon: '🎨', prompt: 'FIND ALL THE ADJECTIVES', desc: 'Descriptive words' },
  { id: 'adverbs', name: 'Adverbs', icon: '💨', prompt: 'FIND ALL THE ADVERBS', desc: 'Words modifying verbs or adjectives' },
  { id: 'prepositions', name: 'Prepositions', icon: '📍', prompt: 'FIND ALL THE PREPOSITIONS', desc: 'Position, time, and direction' },
  { id: 'modal_verbs', name: 'Modal Verbs', icon: '🔑', prompt: 'FIND ALL THE MODAL VERBS', desc: 'Ability, permission, and necessity' },
  { id: 'pronouns', name: 'Pronouns', icon: '👤', prompt: 'FIND ALL THE PRONOUNS', desc: 'Subject, object, and possessive pronouns' },
  { id: 'conjunctions', name: 'Conjunctions', icon: '🔗', prompt: 'FIND ALL THE CONJUNCTIONS', desc: 'Connecting words and clauses' },
  { id: 'articles', name: 'Articles & Determiners', icon: '🏷️', prompt: 'FIND ALL THE ARTICLES & DETERMINERS', desc: 'Articles and specifying determiners' },
  { id: 'mixed_grammar', name: 'Mixed Grammar', icon: '🧩', prompt: 'FIND ALL THE {TARGET}', desc: 'Grammar classification with word families' },
  { id: 'school', name: 'School', icon: '🎒', prompt: 'FIND ALL THE SCHOOL WORDS', desc: 'Classroom, subjects, and study tools' },
  { id: 'travel', name: 'Travel', icon: '✈️', prompt: 'FIND ALL THE TRAVEL WORDS', desc: 'Journeys, transport, and tourism' },
  { id: 'hobbies', name: 'Hobbies', icon: '⚽', prompt: 'FIND ALL THE HOBBIES & SPORTS', desc: 'Activities, sports, and entertainment' },
  { id: 'feelings', name: 'Feelings', icon: '😊', prompt: 'FIND ALL THE FEELINGS & EMOTIONS', desc: 'Emotions and personality states' },
  { id: 'daily_life', name: 'Daily Life', icon: '🏠', prompt: 'FIND ALL THE DAILY LIFE WORDS', desc: 'Routines, chores, food, and home' }
];

// Grade 7 Vocabulary Bank
const GRADE_7_BANK = {
  verbs: {
    easy: ['run', 'jump', 'swim', 'eat', 'drink', 'read', 'write', 'sleep', 'play', 'walk', 'sing', 'dance', 'listen', 'talk', 'watch', 'cook', 'open', 'close', 'wash', 'smile', 'laugh', 'cry', 'drive', 'draw', 'help'],
    medium: ['borrow', 'collect', 'organize', 'protect', 'decide', 'discover', 'improve', 'remember', 'forget', 'explain', 'prepare', 'describe', 'celebrate', 'prefer', 'believe', 'imagine', 'explore', 'invent', 'damage', 'survive', 'support', 'produce', 'receive', 'succeed', 'reduce'],
    hard: ['overcome', 'accomplish', 'demonstrate', 'participate', 'distinguish', 'substitute', 'contribute', 'recommend', 'strengthen', 'emphasize', 'illustrate', 'persuade', 'reorganize', 'collaborate', 'accelerate', 'investigate', 'transform', 'undergo', 'accompany', 'cultivate']
  },
  nouns: {
    easy: ['apple', 'water', 'hospital', 'garden', 'kitchen', 'friend', 'family', 'animal', 'village', 'river', 'doctor', 'market', 'bicycle', 'forest', 'mountain', 'island', 'ocean', 'window', 'door', 'street'],
    medium: ['pollution', 'environment', 'celebration', 'invention', 'invitation', 'discovery', 'direction', 'advertisement', 'neighborhood', 'furniture', 'temperature', 'wildlife', 'attraction', 'instruction', 'champion', 'generation', 'citizen', 'population'],
    hard: ['biodiversity', 'achievement', 'preservation', 'significance', 'requirement', 'civilization', 'contribution', 'development', 'responsibility', 'architecture', 'enthusiasm', 'consequence', 'extinction', 'alternative']
  },
  adjectives: {
    easy: ['happy', 'sad', 'big', 'small', 'fast', 'slow', 'cold', 'hot', 'clever', 'funny', 'clean', 'dirty', 'beautiful', 'hungry', 'thirsty', 'strong', 'young', 'old', 'quiet', 'noisy'],
    medium: ['crowded', 'delicious', 'expensive', 'enormous', 'generous', 'polluted', 'protective', 'traditional', 'energetic', 'convenient', 'peaceful', 'creative', 'adventurous', 'successful', 'dangerous', 'mysterious', 'attractive', 'valuable', 'comfortable', 'healthy'],
    hard: ['fascinating', 'breathtaking', 'eco-friendly', 'biodegradable', 'unforgettable', 'irresponsible', 'enthusiastic', 'magnificent', 'sustainable', 'challenging', 'extraordinary', 'influential', 'unbelievable', 'remarkable', 'exceptional', 'essential']
  },
  adverbs: {
    easy: ['slowly', 'quickly', 'loudly', 'quietly', 'carefully', 'easily', 'always', 'never', 'usually', 'often', 'sometimes', 'today', 'yesterday', 'tomorrow', 'here', 'there', 'early', 'late', 'well', 'badly'],
    medium: ['suddenly', 'politely', 'safely', 'hardly', 'happily', 'bravely', 'regularly', 'patiently', 'heavily', 'brightly', 'silently', 'nervously', 'completely', 'properly', 'certainly', 'mostly', 'nearly', 'rarely', 'especially', 'correctly'],
    hard: ['dramatically', 'successfully', 'beautifully', 'creatively', 'unfortunately', 'immediately', 'conveniently', 'traditionally', 'carelessly', 'accurately', 'environmentally', 'enthusiastically', 'naturally', 'permanently', 'simultaneously']
  },
  prepositions: {
    easy: ['in', 'on', 'at', 'under', 'behind', 'between', 'in front of', 'next to', 'near', 'over', 'into', 'with', 'from', 'to', 'for', 'about', 'by', 'of', 'off', 'through'],
    medium: ['across', 'along', 'around', 'among', 'beside', 'below', 'above', 'opposite', 'toward', 'without', 'during', 'against', 'inside', 'outside', 'past', 'beneath', 'beyond', 'throughout', 'upon', 'within'],
    hard: ['in spite of', 'according to', 'in addition to', 'on behalf of', 'prior to', 'due to', 'apart from', 'instead of', 'regardless of', 'by means of', 'with regard to', 'ahead of', 'alongside']
  },
  modal_verbs: {
    easy: ['can', "can't", 'must', "mustn't", 'should', "shouldn't", 'have to', "don't have to", 'may', 'might'],
    medium: ['could', "couldn't", 'would', "wouldn't", 'shall', 'ought to', 'had better', 'has to', "doesn't have to", 'need to'],
    hard: ['might not', 'shall not', 'ought not to', "had better not", "must have", "should have", "could have", "used to", "is able to", "are able to"]
  },
  pronouns: {
    easy: ['he', 'she', 'it', 'they', 'we', 'you', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'her', 'our', 'their', 'mine', 'yours', 'theirs'],
    medium: ['myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'themselves', 'someone', 'everyone', 'anyone', 'no one', 'something', 'everything', 'anything', 'nothing', 'somebody', 'everybody', 'anybody', 'nobody', 'who'],
    hard: ['whom', 'whose', 'which', 'that', 'where', 'whoever', 'whomever', 'whatever', 'each other', 'one another', 'neither', 'either', 'both', 'none', 'oneself']
  },
  conjunctions: {
    easy: ['and', 'but', 'or', 'so', 'because', 'if', 'when', 'before', 'after', 'while'],
    medium: ['although', 'even though', 'though', 'unless', 'until', 'since', 'as soon as', 'so that', 'as long as', 'whether'],
    hard: ['neither...nor', 'either...or', 'not only...but also', 'both...and', 'whereas', 'wherever', 'in order that', 'provided that', 'even if', 'as if']
  },
  articles: {
    easy: ['a', 'an', 'the', 'this', 'that', 'these', 'those', 'some', 'any', 'many'],
    medium: ['much', 'a lot of', 'a few', 'a little', 'several', 'every', 'each', 'all', 'both', 'enough'],
    hard: ['neither', 'either', 'another', 'other', 'no', 'few', 'little', 'plenty of', 'a great deal of', 'such a']
  },
  school: {
    easy: ['school', 'teacher', 'student', 'classroom', 'homework', 'lesson', 'subject', 'exam', 'notebook', 'textbook', 'pencil', 'desk', 'board', 'blackboard', 'library', 'ruler', 'eraser', 'pencil case', 'sharpener', 'scissors', 'backpack', 'book'],
    medium: ['timetable', 'laboratory', 'canteen', 'gymnasium', 'headmaster', 'principal', 'classmate', 'assignment', 'presentation', 'dictionary', 'project', 'calculator', 'experiment', 'whiteboard', 'attendance', 'curriculum', 'grade'],
    hard: ['scholarship', 'qualification', 'extracurricular', 'investigation', 'auditorium', 'encyclopedia', 'dissertation', 'certificate', 'assessment', 'academic', 'semester', 'laboratory report', 'teacher\'s room']
  },
  travel: {
    easy: ['plane', 'train', 'bus', 'car', 'ticket', 'hotel', 'passport', 'luggage', 'airport', 'station', 'map', 'trip', 'beach', 'camera', 'tourist', 'suitcase', 'flight', 'passenger', 'taxi', 'ship'],
    medium: ['boarding pass', 'reservation', 'sightseeing', 'souvenir', 'platform', 'destination', 'cruise ship', 'backpacking', 'departure', 'arrival', 'journey', 'excursion', 'guidebook', 'itinerary', 'ferry'],
    hard: ['accommodation', 'customs check', 'travel insurance', 'sightseeing tour', 'monument', 'archaeological site', 'breathtaking view', 'expedition', 'foreign exchange', 'commuter', 'terminal gate']
  },
  hobbies: {
    easy: ['football', 'basketball', 'swimming', 'reading', 'painting', 'drawing', 'dancing', 'singing', 'cooking', 'gaming', 'running', 'cycling', 'chess', 'guitar', 'piano', 'tennis', 'music', 'fishing'],
    medium: ['skateboarding', 'photography', 'gardening', 'hiking', 'archery', 'rollerblading', 'origami', 'pottery', 'sculpture', 'snorkeling', 'martial arts', 'badminton', 'volleyball', 'table tennis', 'camping'],
    hard: ['mountaineering', 'scuba diving', 'paragliding', 'windsurfing', 'astrophotography', 'woodworking', 'calligraphy', 'bungee jumping', 'rock climbing', 'orienteering', 'horseback riding']
  },
  feelings: {
    easy: ['happy', 'sad', 'angry', 'tired', 'scared', 'excited', 'bored', 'nervous', 'calm', 'surprised', 'proud', 'lonely', 'sleepy', 'cheerful', 'worried', 'afraid', 'glad', 'shy'],
    medium: ['exhausted', 'frightened', 'embarrassed', 'confused', 'delighted', 'disappointed', 'jealous', 'anxious', 'grateful', 'curious', 'confident', 'furious', 'relaxed', 'impatient', 'thrilled'],
    hard: ['overwhelmed', 'sympathetic', 'enthusiastic', 'pessimistic', 'optimistic', 'melancholic', 'astonished', 'frustrated', 'heartbroken', 'fascinated', 'devastated', 'jubilant', 'indifferent']
  },
  daily_life: {
    easy: ['wake up', 'brush teeth', 'have breakfast', 'take a shower', 'go to bed', 'cook dinner', 'wash dishes', 'clean room', 'watch TV', 'walk the dog', 'do homework', 'drink milk', 'make the bed', 'iron clothes', 'sweep floor', 'have lunch'],
    medium: ['tidy up', 'set the table', 'feed the pet', 'take out the trash', 'vacuum the carpet', 'do the laundry', 'mop the floor', 'prepare a snack', 'catch the bus', 'check messages', 'water the plants', 'hang out clothes', 'fold the laundry'],
    hard: ['organize the wardrobe', 'defrost the fridge', 'recycle plastic waste', 'manage weekly budget', 'assemble flatpack furniture', 'commute by subway', 'schedule appointments', 'sanitize kitchen surfaces', 'refill grocery pantry']
  }
};

// Grade 8 Vocabulary Bank (Higher level, advanced word families, A2+/B1 vocabulary)
const GRADE_8_BANK = {
  verbs: {
    easy: ['accept', 'refuse', 'invite', 'explain', 'prefer', 'protect', 'destroy', 'survive', 'create', 'damage', 'prepare', 'attend', 'support', 'trust', 'argue', 'express', 'contact', 'search', 'warn', 'save'],
    medium: ['collaborate', 'accompany', 'influence', 'communicate', 'encourage', 'participate', 'exaggerate', 'concentrate', 'distribute', 'recommend', 'accommodate', 'appreciate', 'demonstrate', 'strengthen', 'emphasize', 'hesitate', 'investigate', 'interrupt', 'negotiate', 'transform'],
    hard: ['revolutionize', 'underestimate', 'overestimate', 'counteract', 'differentiate', 'substantiate', 'conceptualize', 'deteriorate', 'facilitate', 'exemplify', 'rehabilitate', 'predetermine', 'characterize', 'disseminate', 'reconstitute']
  },
  nouns: {
    easy: ['friendship', 'appearance', 'personality', 'teenager', 'internet', 'chores', 'adventure', 'tradition', 'success', 'nature', 'danger', 'preference', 'opinion', 'reason', 'habit', 'safety', 'celebration', 'skill', 'goal', 'society'],
    medium: ['responsibility', 'relationship', 'achievement', 'opportunity', 'consequence', 'disadvantage', 'architecture', 'environment', 'organization', 'destination', 'enthusiasm', 'communication', 'appreciation', 'conservation', 'biodiversity', 'generation', 'phenomenon', 'ingredient', 'exhibition'],
    hard: ['sustainability', 'unpredictability', 'sophistication', 'interdependence', 'vulnerability', 'transformation', 'self-discipline', 'infrastructure', 'perseverance', 'biodegradability', 'incompatibility', 'comprehensiveness', 'differentiation', 'generalization']
  },
  adjectives: {
    easy: ['honest', 'generous', 'stubborn', 'punctual', 'outgoing', 'tactful', 'sensitive', 'reliable', 'amusing', 'fashionable', 'adventurous', 'traditional', 'creative', 'dangerous', 'successful', 'harmful', 'helpful', 'careful', 'peaceful', 'useful'],
    medium: ['unbelievable', 'extraordinary', 'sustainable', 'irresponsible', 'breathtaking', 'enthusiastic', 'fascinating', 'magnificent', 'challenging', 'influential', 'unforgettable', 'eco-friendly', 'mysterious', 'affordable', 'indispensable', 'cooperative', 'considerate', 'impressive', 'convenient', 'spontaneous'],
    hard: ['groundbreaking', 'unprecedented', 'environmentally-conscious', 'counterproductive', 'multidisciplinary', 'indistinguishable', 'self-explanatory', 'incomprehensible', 'characteristically', 'disproportionate', 'irreplaceable', 'overwhelmingly']
  },
  adverbs: {
    easy: ['honestly', 'politely', 'regularly', 'patiently', 'safely', 'happily', 'heavily', 'bravely', 'certainly', 'properly', 'clearly', 'rarely', 'mostly', 'nearly', 'completely', 'usually', 'always', 'hardly', 'suddenly', 'silently'],
    medium: ['enthusiastically', 'successfully', 'traditionally', 'creatively', 'immediately', 'dramatically', 'conveniently', 'accurately', 'naturally', 'permanently', 'responsibly', 'effectively', 'constantly', 'frequently', 'gradually', 'eventually', 'deliberately', 'generously', 'reluctantly', 'cautiously'],
    hard: ['unquestionably', 'simultaneously', 'characteristically', 'proportionately', 'exceptionally', 'comprehensively', 'fundamentally', 'substantially', 'invariably', 'predominantly', 'consequently', 'hypothetically']
  },
  prepositions: {
    easy: ['across', 'along', 'around', 'among', 'beside', 'below', 'above', 'opposite', 'toward', 'without', 'during', 'against', 'inside', 'outside', 'through', 'behind', 'between', 'under', 'near', 'into'],
    medium: ['in front of', 'next to', 'due to', 'because of', 'in spite of', 'instead of', 'according to', 'apart from', 'ahead of', 'prior to', 'on behalf of', 'in addition to', 'regardless of', 'alongside', 'throughout', 'within', 'beyond', 'beneath', 'upon', 'concerning'],
    hard: ['with reference to', 'in comparison with', 'in accordance with', 'for the purpose of', 'at the expense of', 'by virtue of', 'in terms of', 'in the light of', 'with the exception of', 'under the auspices of', 'notwithstanding']
  },
  modal_verbs: {
    easy: ['can', "can't", 'must', "mustn't", 'should', "shouldn't", 'could', "couldn't", 'have to', "don't have to", 'may', 'might', 'would', 'shall'],
    medium: ['ought to', "ought not to", 'had better', "had better not", "doesn't have to", "didn't have to", "will be able to", "won't be able to", 'used to', "needn't"],
    hard: ['should have', "shouldn't have", 'could have', "couldn't have", 'must have', "can't have", 'might have', "may have", 'would rather', "would prefer to", "is supposed to", "are supposed to"]
  },
  pronouns: {
    easy: ['myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'themselves', 'someone', 'everyone', 'anyone', 'no one', 'something', 'everything', 'anything', 'nothing', 'mine', 'yours', 'hers', 'ours', 'theirs'],
    medium: ['somebody', 'everybody', 'anybody', 'nobody', 'each other', 'one another', 'who', 'whom', 'whose', 'which', 'that', 'neither', 'either', 'both', 'none', 'each', 'all', 'such', 'few', 'several'],
    hard: ['whoever', 'whomever', 'whatever', 'whichever', 'whenever', 'wherever', 'oneself', 'one', 'the former', 'the latter', 'another', 'others', 'the other', 'whatsoever']
  },
  conjunctions: {
    easy: ['and', 'but', 'or', 'so', 'because', 'although', 'even though', 'though', 'unless', 'until', 'since', 'if', 'when', 'while', 'before', 'after'],
    medium: ['as soon as', 'so that', 'as long as', 'in order to', 'as well as', 'neither...nor', 'either...or', 'not only...but also', 'both...and', 'whereas', 'wherever', 'provided that', 'even if', 'as if', 'whether...or'],
    hard: ['inasmuch as', 'on condition that', 'in the event that', 'notwithstanding that', 'lest', 'assuming that', 'so much as', 'seeing that', 'for fear that', 'insofar as']
  },
  articles: {
    easy: ['a', 'an', 'the', 'this', 'that', 'these', 'those', 'some', 'any', 'every', 'each', 'all', 'both', 'many', 'much', 'a few', 'a little', 'several', 'enough', 'no'],
    medium: ['neither', 'either', 'another', 'other', 'few', 'little', 'plenty of', 'a great deal of', 'such a', 'quite a', 'half', 'double', 'all the', 'both the', 'most of the', 'each of the'],
    hard: ['a multitude of', 'an abundance of', 'scarcely any', 'hardly any', 'a substantial amount of', 'a proportion of', 'the majority of', 'the entirety of', 'an excess of']
  },
  school: {
    easy: ['assignment', 'presentation', 'dictionary', 'experiment', 'whiteboard', 'blackboard', 'attendance', 'curriculum', 'grade', 'timetable', 'laboratory', 'canteen', 'gymnasium', 'headmaster', 'project', 'calculator', 'student', 'teacher', 'classroom', 'exam', 'lesson'],
    medium: ['scholarship', 'qualification', 'extracurricular', 'investigation', 'auditorium', 'encyclopedia', 'certificate', 'assessment', 'academic', 'semester', 'laboratory report', 'peer review', 'tuition fee', 'graduation ceremony', 'thesis'],
    hard: ['interdisciplinary study', 'dissertation defense', 'scholastic aptitude', 'dean of faculty', 'syllabus requirement', 'plagiarism check', 'valedictorian speech', 'accreditation standard', 'vocational training', 'alumni association']
  },
  travel: {
    easy: ['destination', 'boarding pass', 'reservation', 'sightseeing', 'souvenir', 'cruise ship', 'backpacking', 'departure', 'arrival', 'journey', 'excursion', 'guidebook', 'itinerary', 'ferry', 'monument', 'flight', 'passport', 'luggage'],
    medium: ['accommodation', 'customs check', 'travel insurance', 'archaeological site', 'breathtaking view', 'expedition', 'foreign exchange', 'commuter', 'terminal gate', 'jet lag', 'layover flight', 'travel agency', 'passport control', 'youth hostel', 'guided tour'],
    hard: ['ecotourism destination', 'charter flight', 'round-the-world cruise', 'embassy clearance', 'transit visa', 'all-inclusive resort', 'scenic railway', 'high-speed locomotive', 'excess baggage fee', 'geographical landmark', 'UNESCO heritage site']
  },
  hobbies: {
    easy: ['skateboarding', 'photography', 'gardening', 'hiking', 'archery', 'rollerblading', 'origami', 'pottery', 'sculpture', 'snorkeling', 'martial arts', 'badminton', 'volleyball', 'table tennis', 'camping', 'chess', 'guitar', 'painting'],
    medium: ['mountaineering', 'scuba diving', 'paragliding', 'windsurfing', 'astrophotography', 'woodworking', 'calligraphy', 'bungee jumping', 'rock climbing', 'orienteering', 'horseback riding', 'kayaking', 'fencing', 'marathon running', 'chess tournament'],
    hard: ['spelunking expedition', 'triathlon championship', 'hang gliding', 'kitesurfing', 'geocaching hunt', 'amateur radio operating', 'sculpting marble', 'orchestral conducting', 'whitewater rafting', 'cross-country skiing']
  },
  feelings: {
    easy: ['exhausted', 'frightened', 'embarrassed', 'confused', 'delighted', 'disappointed', 'jealous', 'anxious', 'grateful', 'curious', 'confident', 'furious', 'relaxed', 'impatient', 'thrilled', 'happy', 'sad', 'angry'],
    medium: ['overwhelmed', 'sympathetic', 'enthusiastic', 'pessimistic', 'optimistic', 'melancholic', 'astonished', 'frustrated', 'heartbroken', 'fascinated', 'devastated', 'jubilant', 'indifferent', 'apprehensive', 'compassionate', 'humiliated', 'determined', 'ecstatic', 'insecure'],
    hard: ['disillusioned', 'unflappable', 'exuberant', 'resentful', 'contented', 'petrified', 'disgruntled', 'nonchalant', 'inconsolable', 'crestfallen', 'invigorated']
  },
  daily_life: {
    easy: ['tidy up', 'set the table', 'feed the pet', 'take out the trash', 'vacuum the carpet', 'do the laundry', 'mop the floor', 'prepare a snack', 'catch the bus', 'check messages', 'water the plants', 'hang out clothes', 'fold the laundry', 'do the grocery shopping', 'make an appointment'],
    medium: ['organize the wardrobe', 'defrost the fridge', 'recycle plastic waste', 'manage weekly budget', 'assemble flatpack furniture', 'commute by subway', 'schedule appointments', 'sanitize kitchen surfaces', 'refill grocery pantry', 'pay utility bills', 'change bedsheets', 'wash the windows', 'plan weekly menu'],
    hard: ['perform routine vehicle maintenance', 'conduct seasonal deep-cleaning', 'audit monthly household expenditures', 'maintain domestic compost bin', 'insulate window frames', 'reorganize kitchen ergonomics', 'automate smart home appliances', 'prepare emergency pantry kit']
  }
};

// Word Family Challenges specifically for Hard difficulty & Mixed Grammar
const WORD_FAMILIES = [
  { root: 'success', noun: 'success', verb: 'succeed', adjective: 'successful', adverb: 'successfully' },
  { root: 'create', noun: 'creation', verb: 'create', adjective: 'creative', adverb: 'creatively' },
  { root: 'beauty', noun: 'beauty', verb: 'beautify', adjective: 'beautiful', adverb: 'beautifully' },
  { root: 'decide', noun: 'decision', verb: 'decide', adjective: 'decisive', adverb: 'decisively' },
  { root: 'differ', noun: 'difference', verb: 'differ', adjective: 'different', adverb: 'differently' },
  { root: 'help', noun: 'help', verb: 'help', adjective: 'helpful', adverb: 'helpfully' },
  { root: 'care', noun: 'care', verb: 'care', adjective: 'careful', adverb: 'carefully' },
  { root: 'danger', noun: 'danger', verb: 'endanger', adjective: 'dangerous', adverb: 'dangerously' },
  { root: 'excite', noun: 'excitement', verb: 'excite', adjective: 'exciting', adverb: 'excitedly' },
  { root: 'peace', noun: 'peace', verb: 'pacify', adjective: 'peaceful', adverb: 'peacefully' },
  { root: 'protect', noun: 'protection', verb: 'protect', adjective: 'protective', adverb: 'protectively' },
  { root: 'imagine', noun: 'imagination', verb: 'imagine', adjective: 'imaginative', adverb: 'imaginatively' },
  { root: 'comfort', noun: 'comfort', verb: 'comfort', adjective: 'comfortable', adverb: 'comfortably' },
  { root: 'educate', noun: 'education', verb: 'educate', adjective: 'educational', adverb: 'educationally' },
  { root: 'courage', noun: 'courage', verb: 'encourage', adjective: 'courageous', adverb: 'courageously' },
  { root: 'energy', noun: 'energy', verb: 'energize', adjective: 'energetic', adverb: 'energetically' },
  { root: 'patience', noun: 'patience', verb: 'wait', adjective: 'patient', adverb: 'patiently' },
  { root: 'nature', noun: 'nature', verb: 'naturalize', adjective: 'natural', adverb: 'naturally' },
  { root: 'organize', noun: 'organization', verb: 'organize', adjective: 'organized', adverb: 'organically' },
  { root: 'connect', noun: 'connection', verb: 'connect', adjective: 'connected', adverb: 'collectively' }
];

/**
 * Normalizes category IDs for robust comparisons
 */
function normalizeCategory(cat) {
  if (!cat) return '';
  return String(cat).toLowerCase().trim().replace(/[-_ ]+/g, '_');
}

/**
 * Builds a comprehensive lookup map: word -> Set of normalized categories
 */
function buildMasterCategoryRegistry(bank) {
  const registry = new Map();

  function registerWord(word, categoryId) {
    if (!word) return;
    const cleanWord = String(word).toLowerCase().trim();
    const normCat = normalizeCategory(categoryId);
    if (!registry.has(cleanWord)) {
      registry.set(cleanWord, new Set());
    }
    registry.get(cleanWord).add(normCat);
  }

  // Traverse all categories and tiers in the bank
  Object.keys(bank).forEach(catId => {
    const catObj = bank[catId];
    if (catObj) {
      ['easy', 'medium', 'hard'].forEach(tier => {
        if (Array.isArray(catObj[tier])) {
          catObj[tier].forEach(w => registerWord(w, catId));
        }
      });
    }
  });

  // Also index Word Families
  WORD_FAMILIES.forEach(wf => {
    if (wf.noun) registerWord(wf.noun, 'nouns');
    if (wf.verb) registerWord(wf.verb, 'verbs');
    if (wf.adjective) registerWord(wf.adjective, 'adjectives');
    if (wf.adverb) registerWord(wf.adverb, 'adverbs');
  });

  return registry;
}

const REGISTRY_GRADE_7 = buildMasterCategoryRegistry(GRADE_7_BANK);
const REGISTRY_GRADE_8 = buildMasterCategoryRegistry(GRADE_8_BANK);

/**
 * Returns all categories associated with a word
 */
function getCategoriesForWord(wordText, grade = 'grade7') {
  const registry = grade === 'grade8' ? REGISTRY_GRADE_8 : REGISTRY_GRADE_7;
  const cleanWord = String(wordText).toLowerCase().trim();
  const set = registry.get(cleanWord);
  return set ? Array.from(set) : [];
}

/**
 * Validates if a word belongs to the given target category
 */
function isWordInCategory(wordText, targetCategory, grade = 'grade7') {
  const normTarget = normalizeCategory(targetCategory);
  const cats = getCategoriesForWord(wordText, grade);
  return cats.includes(normTarget);
}

/**
 * Helper to shuffle array using Fisher-Yates
 */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Determines target word count for a given total board word count
 */
function getTargetWordCount(totalWords) {
  switch (Number(totalWords)) {
    case 10: return 3; // 3 targets, 7 distractors
    case 15: return 5; // 5 targets, 10 distractors
    case 20: return 7; // 7 targets, 13 distractors
    case 25: return 8; // 8 targets, 17 distractors
    case 30: return 10; // 10 targets, 20 distractors
    case 40: return 13; // 13 targets, 27 distractors
    default: return Math.max(3, Math.round(totalWords * 0.35));
  }
}

/**
 * Extracts pool of target words for a specific category, grade, and difficulty
 */
function getCategoryWordPool(bank, categoryId, difficulty) {
  const normCat = normalizeCategory(categoryId);
  const cat = bank[normCat];
  if (!cat) return [];
  
  if (difficulty === 'easy') {
    return [...(cat.easy || []), ...(cat.medium ? cat.medium.slice(0, 10) : [])];
  } else if (difficulty === 'medium') {
    return [...(cat.medium || []), ...(cat.easy ? cat.easy.slice(0, 10) : []), ...(cat.hard ? cat.hard.slice(0, 8) : [])];
  } else {
    // hard
    return [...(cat.hard || []), ...(cat.medium || []), ...(cat.easy ? cat.easy.slice(0, 5) : [])];
  }
}

/**
 * Core Board Generator Engine
 * Guarantees that:
 * 1. All target cards strictly match the target category.
 * 2. NO distractor card ever belongs to the target category (eliminating false error bugs).
 * 3. Non-repeating randomized sets across teams.
 */
function generateWordRushBoard(params) {
  const {
    grade = 'grade7',
    categoryId = 'verbs',
    difficulty = 'easy',
    totalWords = 20,
    usedTargetWords = new Set(), // Words already used in prior turns of this match
    mixedTargetClass = null // for mixed_grammar
  } = params;

  const bank = grade === 'grade8' ? GRADE_8_BANK : GRADE_7_BANK;
  const normCategoryId = normalizeCategory(categoryId);
  const meta = CATEGORIES_METADATA.find(c => normalizeCategory(c.id) === normCategoryId) || CATEGORIES_METADATA[0];

  let targetClass = normCategoryId;
  let bannerPrompt = meta.prompt;

  // Handle Mixed Grammar special mode
  if (normCategoryId === 'mixed_grammar') {
    const grammaticalClasses = ['verbs', 'nouns', 'adjectives', 'adverbs'];
    targetClass = mixedTargetClass || grammaticalClasses[Math.floor(Math.random() * grammaticalClasses.length)];
    const classNames = {
      verbs: 'VERBS',
      nouns: 'NOUNS',
      adjectives: 'ADJECTIVES',
      adverbs: 'ADVERBS'
    };
    bannerPrompt = `FIND ALL THE ${classNames[targetClass]}`;
  }

  const targetCount = getTargetWordCount(totalWords);
  const distractorCount = totalWords - targetCount;

  // 1. Gather Candidate Targets
  let rawTargets = getCategoryWordPool(bank, targetClass, difficulty);
  
  // Hard difficulty with word families injects targeted grammatical forms
  if (difficulty === 'hard' && (targetClass === 'verbs' || targetClass === 'nouns' || targetClass === 'adjectives' || targetClass === 'adverbs')) {
    const singleClassKey = targetClass === 'verbs' ? 'verb' : (targetClass === 'nouns' ? 'noun' : (targetClass === 'adjectives' ? 'adjective' : 'adverb'));
    const familyTargets = WORD_FAMILIES.map(wf => wf[singleClassKey]).filter(Boolean);
    rawTargets = Array.from(new Set([...familyTargets, ...rawTargets]));
  }

  // Ensure all raw targets strictly validate as belonging to targetClass
  rawTargets = Array.from(new Set(rawTargets)).filter(w => isWordInCategory(w, targetClass, grade));

  // Prioritize words that haven't been used yet in this match
  const freshTargets = rawTargets.filter(w => !usedTargetWords.has(w.toLowerCase()));
  const targetSourcePool = freshTargets.length >= targetCount ? freshTargets : rawTargets;
  
  const shuffledTargets = shuffleArray(targetSourcePool);
  const selectedTargets = shuffledTargets.slice(0, targetCount);

  // Mark selected targets in usedTargetWords for this match
  selectedTargets.forEach(w => usedTargetWords.add(w.toLowerCase()));

  // 2. Gather Distractors
  // CRITICAL RULE: Distractors MUST NOT belong to targetClass!
  let allDistractorCandidates = [];
  
  Object.keys(bank).forEach(catKey => {
    if (catKey !== targetClass) {
      const catObj = bank[catKey];
      if (catObj) {
        ['easy', 'medium', 'hard'].forEach(tier => {
          if (Array.isArray(catObj[tier])) {
            allDistractorCandidates.push(...catObj[tier]);
          }
        });
      }
    }
  });

  // Also include Word Family distractors (e.g. noun form when target is verb)
  if (difficulty === 'hard' && (targetClass === 'verbs' || targetClass === 'nouns' || targetClass === 'adjectives' || targetClass === 'adverbs')) {
    WORD_FAMILIES.forEach(wf => {
      ['noun', 'verb', 'adjective', 'adverb'].forEach(k => {
        const word = wf[k];
        if (word && !isWordInCategory(word, targetClass, grade)) {
          allDistractorCandidates.push(word);
        }
      });
    });
  }

  // Filter out any word that belongs to targetClass or is already selected as a target
  const targetLookup = new Set(selectedTargets.map(w => w.toLowerCase()));
  allDistractorCandidates = allDistractorCandidates.filter(w => {
    const clean = w.toLowerCase().trim();
    if (targetLookup.has(clean)) return false;
    // Strict semantic check: Must NOT belong to targetClass!
    return !isWordInCategory(clean, targetClass, grade);
  });

  // Deduplicate distractors
  allDistractorCandidates = Array.from(new Set(allDistractorCandidates));

  const shuffledDistractors = shuffleArray(allDistractorCandidates);
  const selectedDistractors = shuffledDistractors.slice(0, distractorCount);

  // 3. Assemble and Shuffle Board Cards with Explicit Category Metadata
  const cards = [
    ...selectedTargets.map(word => ({
      text: word,
      isTarget: true,
      category: targetClass,
      categories: getCategoriesForWord(word, grade),
      id: 'w_' + Math.random().toString(36).substr(2, 9)
    })),
    ...selectedDistractors.map(word => ({
      text: word,
      isTarget: false,
      category: 'distractor',
      categories: getCategoriesForWord(word, grade),
      id: 'w_' + Math.random().toString(36).substr(2, 9)
    }))
  ];

  const finalBoard = shuffleArray(cards);

  return {
    grade,
    categoryId: normCategoryId,
    targetClass,
    difficulty,
    totalWords: finalBoard.length,
    targetCount: selectedTargets.length,
    bannerPrompt,
    cards: finalBoard,
    targetWordsList: selectedTargets
  };
}

if (typeof window !== 'undefined') {
  window.WORD_RUSH_CATEGORIES = CATEGORIES_METADATA;
  window.WORD_RUSH_GRADE_7 = GRADE_7_BANK;
  window.WORD_RUSH_GRADE_8 = GRADE_8_BANK;
  window.WORD_FAMILIES = WORD_FAMILIES;
  window.normalizeCategory = normalizeCategory;
  window.getCategoriesForWord = getCategoriesForWord;
  window.isWordInCategory = isWordInCategory;
  window.generateWordRushBoard = generateWordRushBoard;
  window.getTargetWordCount = getTargetWordCount;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CATEGORIES_METADATA,
    GRADE_7_BANK,
    GRADE_8_BANK,
    WORD_FAMILIES,
    normalizeCategory,
    getCategoriesForWord,
    isWordInCategory,
    generateWordRushBoard,
    getTargetWordCount
  };
}
