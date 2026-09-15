/**
 * WORD RUSH — Canonical Vocabulary & Category Data Bank
 * Single source of truth for both board generation and answer validation.
 * Explicit category membership for Grade 7 and Grade 8 English learners.
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
  { id: 'school', name: 'School', icon: '🎒', prompt: 'FIND ALL THE SCHOOL WORDS', desc: 'Classroom, subjects, study tools, and people' },
  { id: 'travel', name: 'Travel', icon: '✈️', prompt: 'FIND ALL THE TRAVEL WORDS', desc: 'Journeys, transport, and tourism' },
  { id: 'hobbies', name: 'Hobbies', icon: '⚽', prompt: 'FIND ALL THE HOBBIES & SPORTS', desc: 'Activities, sports, and entertainment' },
  { id: 'feelings', name: 'Feelings', icon: '😊', prompt: 'FIND ALL THE FEELINGS & EMOTIONS', desc: 'Emotions and personality states' },
  { id: 'daily_life', name: 'Daily Life', icon: '🏠', prompt: 'FIND ALL THE DAILY LIFE WORDS', desc: 'Routines, chores, food, and home' }
];

/**
 * Normalize any category string to standard snake_case ID
 */
function normalizeCategory(cat) {
  if (!cat) return '';
  const s = String(cat).toLowerCase().trim().replace(/[- ]+/g, '_');
  if (s === 'modal' || s === 'modals') return 'modal_verbs';
  if (s === 'determiners' || s === 'article') return 'articles';
  if (s === 'feeling' || s === 'emotions') return 'feelings';
  if (s === 'hobby' || s === 'sports') return 'hobbies';
  return s;
}

// Master Canonical Word Database: Single Source of Truth
const CANONICAL_WORDS = [
  // ==========================================
  // SCHOOL (Classroom, people, tools, routines)
  // ==========================================
  { word: 'teacher', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'student', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'classmate', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'classroom', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'school', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'lesson', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'subject', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'homework', categories: ['school', 'nouns', 'daily_life'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'exam', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'test', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'quiz', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'project', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'assignment', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'notebook', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'textbook', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'book', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'pencil', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'pen', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'eraser', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'ruler', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'desk', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'chair', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'board', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'blackboard', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'whiteboard', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'smartboard', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'library', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'principal', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'headmaster', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: "teacher's room", categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'schoolbag', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'backpack', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'uniform', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'break', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'recess', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'playground', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'corridor', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'cafeteria', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'canteen', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'laboratory', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'gymnasium', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'timetable', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'calculator', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'pencil case', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'sharpener', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'scissors', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'attendance', categories: ['school', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'curriculum', categories: ['school', 'nouns'], grades: ['grade8'], difficulty: 'medium' },
  { word: 'scholarship', categories: ['school', 'nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'semester', categories: ['school', 'nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'auditorium', categories: ['school', 'nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'encyclopedia', categories: ['school', 'nouns'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // FEELINGS & EMOTIONS
  // ==========================================
  { word: 'happy', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'sad', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'angry', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'excited', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'bored', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'tired', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'scared', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'afraid', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'worried', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'nervous', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'surprised', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'confused', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'proud', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'embarrassed', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'lonely', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'upset', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'calm', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'relaxed', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'hopeful', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'disappointed', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'jealous', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'shy', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'cheerful', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'exhausted', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'frightened', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'delighted', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'anxious', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'grateful', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'curious', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'confident', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'furious', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'impatient', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'thrilled', categories: ['feelings', 'adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'overwhelmed', categories: ['feelings', 'adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'sympathetic', categories: ['feelings', 'adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'enthusiastic', categories: ['feelings', 'adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'pessimistic', categories: ['feelings', 'adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'optimistic', categories: ['feelings', 'adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'melancholic', categories: ['feelings', 'adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'astonished', categories: ['feelings', 'adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'devastated', categories: ['feelings', 'adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'jubilant', categories: ['feelings', 'adjectives'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // VERBS (Action and state)
  // ==========================================
  { word: 'run', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'swim', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'jump', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'eat', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'drink', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'read', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'write', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'sleep', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'play', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'walk', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'sing', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'dance', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'listen', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'talk', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'watch', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'cook', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'open', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'close', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'wash', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'smile', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'laugh', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'cry', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'drive', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'draw', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'help', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'borrow', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'collect', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'organize', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'protect', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'decide', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'discover', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'improve', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'remember', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'forget', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'explain', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'prepare', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'describe', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'celebrate', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'prefer', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'believe', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'imagine', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'explore', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'invent', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'damage', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'survive', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'support', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'produce', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'receive', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'succeed', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'create', categories: ['verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'overcome', categories: ['verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'accomplish', categories: ['verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'demonstrate', categories: ['verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'participate', categories: ['verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'distinguish', categories: ['verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'contribute', categories: ['verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'collaborate', categories: ['verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'investigate', categories: ['verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'transform', categories: ['verbs'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // NOUNS (Unambiguous objects, places, people)
  // ==========================================
  { word: 'hospital', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'garden', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'kitchen', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'friend', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'family', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'animal', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'village', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'river', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'doctor', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'market', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'bicycle', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'forest', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'mountain', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'island', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'ocean', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'window', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'door', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'street', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'apple', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'pollution', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'environment', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'celebration', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'invention', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'invitation', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'discovery', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'direction', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'advertisement', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'neighborhood', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'furniture', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'temperature', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'wildlife', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'champion', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'generation', categories: ['nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'biodiversity', categories: ['nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'achievement', categories: ['nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'preservation', categories: ['nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'responsibility', categories: ['nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'architecture', categories: ['nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'extinction', categories: ['nouns'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // ADJECTIVES (Descriptive words)
  // ==========================================
  { word: 'big', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'small', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'fast', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'slow', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'cold', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'hot', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'clever', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'funny', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'dirty', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'beautiful', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'hungry', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'thirsty', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'strong', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'young', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'old', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'quiet', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'noisy', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'crowded', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'delicious', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'expensive', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'enormous', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'generous', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'polluted', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'protective', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'traditional', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'energetic', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'convenient', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'peaceful', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'creative', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'adventurous', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'successful', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'dangerous', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'mysterious', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'valuable', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'comfortable', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'healthy', categories: ['adjectives'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'fascinating', categories: ['adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'breathtaking', categories: ['adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'eco-friendly', categories: ['adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'biodegradable', categories: ['adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'unforgettable', categories: ['adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'magnificent', categories: ['adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'sustainable', categories: ['adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'extraordinary', categories: ['adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'influential', categories: ['adjectives'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'remarkable', categories: ['adjectives'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // ADVERBS (Manner, frequency, time)
  // ==========================================
  { word: 'slowly', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'quickly', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'loudly', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'quietly', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'carefully', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'easily', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'always', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'never', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'usually', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'often', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'sometimes', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'today', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'yesterday', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'tomorrow', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'here', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'there', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'badly', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'suddenly', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'politely', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'safely', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'hardly', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'happily', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'bravely', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'regularly', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'patiently', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'heavily', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'brightly', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'silently', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'nervously', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'completely', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'properly', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'certainly', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'rarely', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'correctly', categories: ['adverbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'dramatically', categories: ['adverbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'successfully', categories: ['adverbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'beautifully', categories: ['adverbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'creatively', categories: ['adverbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'unfortunately', categories: ['adverbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'immediately', categories: ['adverbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'accurately', categories: ['adverbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'simultaneously', categories: ['adverbs'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // PREPOSITIONS
  // ==========================================
  { word: 'in', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'on', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'at', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'under', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'behind', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'between', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'in front of', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'next to', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'near', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'over', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'into', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'with', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'from', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'for', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'about', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'through', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'across', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'along', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'around', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'among', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'beside', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'below', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'above', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'opposite', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'toward', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'without', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'during', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'against', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'inside', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'outside', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'beneath', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'beyond', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'throughout', categories: ['prepositions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'in spite of', categories: ['prepositions'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'according to', categories: ['prepositions'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'in addition to', categories: ['prepositions'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'on behalf of', categories: ['prepositions'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'due to', categories: ['prepositions'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'instead of', categories: ['prepositions'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // MODAL VERBS
  // ==========================================
  { word: 'can', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: "can't", categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'must', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: "mustn't", categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'should', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: "shouldn't", categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'have to', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: "don't have to", categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'may', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'might', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'could', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: "couldn't", categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'would', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: "wouldn't", categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'shall', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'ought to', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'had better', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'has to', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: "doesn't have to", categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'need to', categories: ['modal_verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'might not', categories: ['modal_verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'must have', categories: ['modal_verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'should have', categories: ['modal_verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'could have', categories: ['modal_verbs'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // PRONOUNS
  // ==========================================
  { word: 'he', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'she', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'it', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'they', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'we', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'you', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'me', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'him', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'her', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'us', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'them', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'my', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'your', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'his', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'our', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'their', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'mine', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'yours', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'theirs', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'myself', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'yourself', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'himself', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'herself', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'itself', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'ourselves', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'themselves', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'someone', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'everyone', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'anyone', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'no one', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'something', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'everything', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'anything', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'nothing', categories: ['pronouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'whoever', categories: ['pronouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'whatever', categories: ['pronouns'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // CONJUNCTIONS
  // ==========================================
  { word: 'and', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'but', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'or', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'so', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'because', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'if', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'when', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'before', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'after', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'while', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'although', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'even though', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'though', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'unless', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'until', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'since', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'as soon as', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'so that', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'as long as', categories: ['conjunctions'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'neither...nor', categories: ['conjunctions'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'either...or', categories: ['conjunctions'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'not only...but also', categories: ['conjunctions'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'both...and', categories: ['conjunctions'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'whereas', categories: ['conjunctions'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // ARTICLES & DETERMINERS
  // ==========================================
  { word: 'a', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'an', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'the', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'this', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'that', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'these', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'those', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'some', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'any', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'many', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'much', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'a lot of', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'a few', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'a little', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'several', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'every', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'each', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'all', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'both', categories: ['articles'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'plenty of', categories: ['articles'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // TRAVEL & TRANSPORT
  // ==========================================
  { word: 'plane', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'train', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'bus', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'car', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'ticket', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'hotel', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'passport', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'luggage', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'airport', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'station', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'map', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'trip', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'beach', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'camera', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'tourist', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'suitcase', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'flight', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'passenger', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'taxi', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'ship', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'boarding pass', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'reservation', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'sightseeing', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'souvenir', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'destination', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'cruise ship', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'departure', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'arrival', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'journey', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'excursion', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'guidebook', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'itinerary', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'ferry', categories: ['travel', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'accommodation', categories: ['travel', 'nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'customs check', categories: ['travel', 'nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'travel insurance', categories: ['travel', 'nouns'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // HOBBIES & SPORTS
  // ==========================================
  { word: 'football', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'basketball', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'swimming', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'reading', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'painting', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'drawing', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'dancing', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'singing', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'cooking', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'gaming', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'running', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'cycling', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'chess', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'guitar', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'piano', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'tennis', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'skateboarding', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'photography', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'gardening', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'hiking', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'archery', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'rollerblading', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'origami', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'pottery', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'sculpture', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'snorkeling', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'martial arts', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'badminton', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'volleyball', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'table tennis', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'camping', categories: ['hobbies', 'nouns'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'mountaineering', categories: ['hobbies', 'nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'scuba diving', categories: ['hobbies', 'nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'paragliding', categories: ['hobbies', 'nouns'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'astrophotography', categories: ['hobbies', 'nouns'], grades: ['grade8'], difficulty: 'hard' },

  // ==========================================
  // DAILY LIFE & ROUTINES
  // ==========================================
  { word: 'wake up', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'brush teeth', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'have breakfast', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'take a shower', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'go to bed', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'cook dinner', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'wash dishes', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'clean room', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'watch TV', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'walk the dog', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'drink milk', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'make the bed', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'iron clothes', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'sweep floor', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'have lunch', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'easy' },
  { word: 'tidy up', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'set the table', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'feed the pet', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'take out the trash', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'vacuum the carpet', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'do the laundry', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'mop the floor', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'catch the bus', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'check messages', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'water the plants', categories: ['daily_life', 'verbs'], grades: ['grade7', 'grade8'], difficulty: 'medium' },
  { word: 'organize the wardrobe', categories: ['daily_life', 'verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'defrost the fridge', categories: ['daily_life', 'verbs'], grades: ['grade8'], difficulty: 'hard' },
  { word: 'manage weekly budget', categories: ['daily_life', 'verbs'], grades: ['grade8'], difficulty: 'hard' }
];

// Build Canonical Index: Map of lowercase word -> { word, categories: Set, grades: Set, difficulty }
const CANONICAL_INDEX = new Map();

CANONICAL_WORDS.forEach(item => {
  const cleanWord = item.word.toLowerCase().trim();
  if (!CANONICAL_INDEX.has(cleanWord)) {
    CANONICAL_INDEX.set(cleanWord, {
      word: item.word,
      categories: new Set(item.categories.map(c => normalizeCategory(c))),
      grades: new Set(item.grades || ['grade7', 'grade8']),
      difficulty: item.difficulty || 'easy'
    });
  } else {
    // Merge categories & grades
    const existing = CANONICAL_INDEX.get(cleanWord);
    item.categories.forEach(c => existing.categories.add(normalizeCategory(c)));
    (item.grades || ['grade7', 'grade8']).forEach(g => existing.grades.add(g));
  }
});

/**
 * UNIFIED CANONICAL VALIDATOR
 * Returns true if and only if the word belongs to the specified category.
 */
function isWordInCategory(wordText, targetCategory) {
  if (!wordText || !targetCategory) return false;
  const cleanWord = String(wordText).toLowerCase().trim();
  const normTarget = normalizeCategory(targetCategory);
  
  const entry = CANONICAL_INDEX.get(cleanWord);
  if (!entry) return false;
  return entry.categories.has(normTarget);
}

/**
 * Get all category strings associated with a word
 */
function getCategoriesForWord(wordText) {
  if (!wordText) return [];
  const cleanWord = String(wordText).toLowerCase().trim();
  const entry = CANONICAL_INDEX.get(cleanWord);
  return entry ? Array.from(entry.categories) : [];
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
    case 10: return 3;
    case 15: return 5;
    case 20: return 7;
    case 25: return 8;
    case 30: return 10;
    case 40: return 13;
    default: return Math.max(3, Math.round(totalWords * 0.35));
  }
}

/**
 * Core Board Generator Engine
 * Strict guarantee:
 * - All target cards have isWordInCategory(card, target) === true
 * - All distractor cards have isWordInCategory(card, target) === false
 * - Uses the identical canonical database for both generation and validation.
 */
function generateWordRushBoard(params) {
  const {
    grade = 'grade7',
    categoryId = 'verbs',
    difficulty = 'easy',
    totalWords = 20,
    usedTargetWords = new Set(),
    mixedTargetClass = null
  } = params;

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

  // 1. Gather Candidate Targets from Canonical Database
  const allTargetCandidates = [];
  CANONICAL_INDEX.forEach((entry) => {
    if (entry.categories.has(targetClass) && entry.grades.has(grade)) {
      // Difficulty filtering: easy gets easy/medium; medium gets all; hard prefers medium/hard
      if (difficulty === 'easy') {
        allTargetCandidates.push(entry.word);
      } else if (difficulty === 'medium') {
        allTargetCandidates.push(entry.word);
      } else {
        // hard
        allTargetCandidates.push(entry.word);
      }
    }
  });

  // Filter out any target candidate that doesn't strictly validate
  const validTargets = allTargetCandidates.filter(w => isWordInCategory(w, targetClass));
  const freshTargets = validTargets.filter(w => !usedTargetWords.has(w.toLowerCase()));
  const targetSourcePool = freshTargets.length >= targetCount ? freshTargets : validTargets;

  const shuffledTargets = shuffleArray(targetSourcePool);
  const selectedTargets = shuffledTargets.slice(0, targetCount);

  // Mark selected targets in usedTargetWords for this match
  selectedTargets.forEach(w => usedTargetWords.add(w.toLowerCase()));

  // 2. Gather Candidate Distractors from Canonical Database
  // CRITICAL RULE: Candidate MUST NOT belong to targetClass!
  const allDistractorCandidates = [];
  const selectedTargetLookup = new Set(selectedTargets.map(w => w.toLowerCase()));

  CANONICAL_INDEX.forEach((entry) => {
    // Distractor MUST NOT belong to targetClass
    if (!entry.categories.has(targetClass) && entry.grades.has(grade)) {
      if (!selectedTargetLookup.has(entry.word.toLowerCase())) {
        allDistractorCandidates.push(entry.word);
      }
    }
  });

  // Double check distractor validity
  const validDistractors = allDistractorCandidates.filter(w => !isWordInCategory(w, targetClass));
  const shuffledDistractors = shuffleArray(validDistractors);
  const selectedDistractors = shuffledDistractors.slice(0, distractorCount);

  // 3. Assemble and Shuffle Board Cards
  const cards = [
    ...selectedTargets.map(word => ({
      text: word,
      isTarget: true,
      categories: getCategoriesForWord(word),
      id: 'w_' + Math.random().toString(36).substr(2, 9)
    })),
    ...selectedDistractors.map(word => ({
      text: word,
      isTarget: false,
      categories: getCategoriesForWord(word),
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
  window.CANONICAL_WORDS = CANONICAL_WORDS;
  window.CANONICAL_INDEX = CANONICAL_INDEX;
  window.normalizeCategory = normalizeCategory;
  window.getCategoriesForWord = getCategoriesForWord;
  window.isWordInCategory = isWordInCategory;
  window.generateWordRushBoard = generateWordRushBoard;
  window.getTargetWordCount = getTargetWordCount;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CATEGORIES_METADATA,
    CANONICAL_WORDS,
    CANONICAL_INDEX,
    normalizeCategory,
    getCategoriesForWord,
    isWordInCategory,
    generateWordRushBoard,
    getTargetWordCount
  };
}
