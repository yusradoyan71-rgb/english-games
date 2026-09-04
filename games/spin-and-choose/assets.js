/**
 * SPIN & CHOOSE 🎡 — Kindergarten & Preschool English Speaking Game
 * Bespoke 3D-Style Cartoon Assets & Visuals
 * Every item and category is unmistakable, colorful, and paired with always-visible English words.
 */

window.GAME_CATEGORIES = [
  {
    id: "colors",
    index: 0,
    name: "COLORS",
    icon: "🎨",
    wheelIconText: "🎨",
    themeColor: "#FFA726",
    sliceColor: "#FFA726",
    title: "COLORS",
    question: "What's your favorite color?",
    items: [
      {
        id: "red",
        name: "RED",
        color: "#FF3366",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="54" fill="url(#g-c-red)" filter="drop-shadow(0 8px 12px rgba(216,27,96,0.35))"/>
          <ellipse cx="50" cy="46" rx="16" ry="9" transform="rotate(-30 50 46)" fill="white" fill-opacity="0.6"/>
          <circle cx="70" cy="70" r="30" fill="#FF1744"/>
          <path d="M58 76 Q70 88 82 76" stroke="white" stroke-width="4" stroke-linecap="round"/>
          <circle cx="56" cy="64" r="5" fill="white"/>
          <circle cx="84" cy="64" r="5" fill="white"/>
          <defs>
            <radialGradient id="g-c-red" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stop-color="#FF6B8B"/>
              <stop offset="60%" stop-color="#FF1744"/>
              <stop offset="100%" stop-color="#C2185B"/>
            </radialGradient>
          </defs>
        </svg>`
      },
      {
        id: "blue",
        name: "BLUE",
        color: "#2979FF",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="54" fill="url(#g-c-blue)" filter="drop-shadow(0 8px 12px rgba(21,101,192,0.35))"/>
          <ellipse cx="50" cy="46" rx="16" ry="9" transform="rotate(-30 50 46)" fill="white" fill-opacity="0.6"/>
          <circle cx="70" cy="70" r="30" fill="#2979FF"/>
          <path d="M58 76 Q70 88 82 76" stroke="white" stroke-width="4" stroke-linecap="round"/>
          <circle cx="56" cy="64" r="5" fill="white"/>
          <circle cx="84" cy="64" r="5" fill="white"/>
          <defs>
            <radialGradient id="g-c-blue" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stop-color="#64B5F6"/>
              <stop offset="60%" stop-color="#2979FF"/>
              <stop offset="100%" stop-color="#1565C0"/>
            </radialGradient>
          </defs>
        </svg>`
      },
      {
        id: "yellow",
        name: "YELLOW",
        color: "#FFD600",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="54" fill="url(#g-c-yellow)" filter="drop-shadow(0 8px 12px rgba(245,127,23,0.35))"/>
          <ellipse cx="50" cy="46" rx="16" ry="9" transform="rotate(-30 50 46)" fill="white" fill-opacity="0.6"/>
          <circle cx="70" cy="70" r="30" fill="#FFD600"/>
          <path d="M58 76 Q70 88 82 76" stroke="#E65100" stroke-width="4" stroke-linecap="round"/>
          <circle cx="56" cy="64" r="5" fill="#E65100"/>
          <circle cx="84" cy="64" r="5" fill="#E65100"/>
          <defs>
            <radialGradient id="g-c-yellow" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stop-color="#FFF59D"/>
              <stop offset="60%" stop-color="#FFD600"/>
              <stop offset="100%" stop-color="#FF8F00"/>
            </radialGradient>
          </defs>
        </svg>`
      },
      {
        id: "green",
        name: "GREEN",
        color: "#00E676",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="54" fill="url(#g-c-green)" filter="drop-shadow(0 8px 12px rgba(46,125,50,0.35))"/>
          <ellipse cx="50" cy="46" rx="16" ry="9" transform="rotate(-30 50 46)" fill="white" fill-opacity="0.6"/>
          <circle cx="70" cy="70" r="30" fill="#00E676"/>
          <path d="M58 76 Q70 88 82 76" stroke="white" stroke-width="4" stroke-linecap="round"/>
          <circle cx="56" cy="64" r="5" fill="white"/>
          <circle cx="84" cy="64" r="5" fill="white"/>
          <defs>
            <radialGradient id="g-c-green" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stop-color="#B9F6CA"/>
              <stop offset="60%" stop-color="#00E676"/>
              <stop offset="100%" stop-color="#2E7D32"/>
            </radialGradient>
          </defs>
        </svg>`
      },
      {
        id: "purple",
        name: "PURPLE",
        color: "#AA00FF",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="54" fill="url(#g-c-purple)" filter="drop-shadow(0 8px 12px rgba(106,27,154,0.35))"/>
          <ellipse cx="50" cy="46" rx="16" ry="9" transform="rotate(-30 50 46)" fill="white" fill-opacity="0.6"/>
          <circle cx="70" cy="70" r="30" fill="#AA00FF"/>
          <path d="M58 76 Q70 88 82 76" stroke="white" stroke-width="4" stroke-linecap="round"/>
          <circle cx="56" cy="64" r="5" fill="white"/>
          <circle cx="84" cy="64" r="5" fill="white"/>
          <defs>
            <radialGradient id="g-c-purple" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stop-color="#EA80FC"/>
              <stop offset="60%" stop-color="#AA00FF"/>
              <stop offset="100%" stop-color="#6A1B9A"/>
            </radialGradient>
          </defs>
        </svg>`
      },
      {
        id: "orange",
        name: "ORANGE",
        color: "#FF9100",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="54" fill="url(#g-c-orange)" filter="drop-shadow(0 8px 12px rgba(230,81,0,0.35))"/>
          <ellipse cx="50" cy="46" rx="16" ry="9" transform="rotate(-30 50 46)" fill="white" fill-opacity="0.6"/>
          <circle cx="70" cy="70" r="30" fill="#FF9100"/>
          <path d="M58 76 Q70 88 82 76" stroke="white" stroke-width="4" stroke-linecap="round"/>
          <circle cx="56" cy="64" r="5" fill="white"/>
          <circle cx="84" cy="64" r="5" fill="white"/>
          <defs>
            <radialGradient id="g-c-orange" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stop-color="#FFE082"/>
              <stop offset="60%" stop-color="#FF9100"/>
              <stop offset="100%" stop-color="#E65100"/>
            </radialGradient>
          </defs>
        </svg>`
      }
    ]
  },

  {
    id: "animals",
    index: 1,
    name: "ANIMALS",
    icon: "🐶",
    wheelIconText: "🐶",
    themeColor: "#29B6F6",
    sliceColor: "#29B6F6",
    title: "ANIMALS",
    question: "What's your favorite animal?",
    items: [
      {
        id: "dog",
        name: "DOG",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="36" cy="54" rx="16" ry="28" fill="#C67D32" transform="rotate(-20 36 54)"/>
          <ellipse cx="104" cy="54" rx="16" ry="28" fill="#C67D32" transform="rotate(20 104 54)"/>
          <ellipse cx="36" cy="56" rx="10" ry="18" fill="#8D4F1E" transform="rotate(-20 36 56)"/>
          <ellipse cx="104" cy="56" rx="10" ry="18" fill="#8D4F1E" transform="rotate(20 104 56)"/>
          <ellipse cx="70" cy="72" rx="44" ry="40" fill="#E59850"/>
          <ellipse cx="70" cy="85" rx="24" ry="18" fill="#FFE0B2"/>
          <path d="M63 78 Q70 73 77 78 Q70 85 63 78 Z" fill="#3E2723"/>
          <path d="M70 83 L70 90 Q63 96 56 90 M70 90 Q77 96 84 90" stroke="#3E2723" stroke-width="3.5" stroke-linecap="round"/>
          <ellipse cx="70" cy="94" rx="6" ry="5" fill="#FF5252"/>
          <ellipse cx="51" cy="64" rx="7" ry="9" fill="#3E2723"/>
          <ellipse cx="89" cy="64" rx="7" ry="9" fill="#3E2723"/>
          <circle cx="48" cy="61" r="3" fill="white"/>
          <circle cx="86" cy="61" r="3" fill="white"/>
          <circle cx="38" cy="76" r="7" fill="#FF8A80" fill-opacity="0.6"/>
          <circle cx="102" cy="76" r="7" fill="#FF8A80" fill-opacity="0.6"/>
        </svg>`
      },
      {
        id: "cat",
        name: "CAT",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="30,52 48,18 60,48" fill="#FFB74D"/>
          <polygon points="35,49 48,25 55,46" fill="#FF8A80"/>
          <polygon points="110,52 92,18 80,48" fill="#FFB74D"/>
          <polygon points="105,49 92,25 85,46" fill="#FF8A80"/>
          <ellipse cx="70" cy="74" rx="44" ry="38" fill="#FFA726"/>
          <ellipse cx="58" cy="84" rx="14" ry="11" fill="#FFF3E0"/>
          <ellipse cx="82" cy="84" rx="14" ry="11" fill="#FFF3E0"/>
          <polygon points="65,78 75,78 70,84" fill="#FF5252"/>
          <path d="M70 84 Q62 91 55 85 M70 84 Q78 91 85 85" stroke="#3E2723" stroke-width="3" stroke-linecap="round"/>
          <path d="M26 78 L50 82 M24 87 L48 87 M26 96 L50 92" stroke="#3E2723" stroke-width="3" stroke-linecap="round"/>
          <path d="M114 78 L90 82 M116 87 L92 87 M114 96 L90 92" stroke="#3E2723" stroke-width="3" stroke-linecap="round"/>
          <ellipse cx="52" cy="64" rx="7" ry="9" fill="#2E7D32"/>
          <ellipse cx="88" cy="64" rx="7" ry="9" fill="#2E7D32"/>
          <circle cx="50" cy="61" r="3" fill="white"/>
          <circle cx="86" cy="61" r="3" fill="white"/>
        </svg>`
      },
      {
        id: "lion",
        name: "LION",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="56" fill="#E65100"/>
          <circle cx="70" cy="20" r="16" fill="#EF6C00"/>
          <circle cx="106" cy="36" r="16" fill="#EF6C00"/>
          <circle cx="118" cy="70" r="16" fill="#EF6C00"/>
          <circle cx="106" cy="104" r="16" fill="#EF6C00"/>
          <circle cx="70" cy="120" r="16" fill="#EF6C00"/>
          <circle cx="34" cy="104" r="16" fill="#EF6C00"/>
          <circle cx="22" cy="70" r="16" fill="#EF6C00"/>
          <circle cx="34" cy="36" r="16" fill="#EF6C00"/>
          <circle cx="42" cy="42" r="12" fill="#FFB74D"/>
          <circle cx="98" cy="42" r="12" fill="#FFB74D"/>
          <circle cx="70" cy="74" r="38" fill="#FFA726"/>
          <ellipse cx="70" cy="86" rx="19" ry="14" fill="#FFE082"/>
          <polygon points="63,79 77,79 70,86" fill="#4E342E"/>
          <path d="M70 86 L70 93 Q61 98 54 93 M70 93 Q79 98 86 93" stroke="#4E342E" stroke-width="3" stroke-linecap="round"/>
          <circle cx="54" cy="65" r="6" fill="#3E2723"/>
          <circle cx="86" cy="65" r="6" fill="#3E2723"/>
          <circle cx="51" cy="63" r="2.5" fill="white"/>
          <circle cx="83" cy="63" r="2.5" fill="white"/>
        </svg>`
      },
      {
        id: "elephant",
        name: "ELEPHANT",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="32" cy="64" rx="26" ry="30" fill="#90A4AE"/>
          <ellipse cx="32" cy="64" rx="16" ry="20" fill="#CFD8DC"/>
          <ellipse cx="108" cy="64" rx="26" ry="30" fill="#90A4AE"/>
          <ellipse cx="108" cy="64" rx="16" ry="20" fill="#CFD8DC"/>
          <ellipse cx="70" cy="68" rx="38" ry="36" fill="#78909C"/>
          <path d="M63 72 C63 91 58 108 74 112 C83 114 88 105 86 98 C84 91 79 93 77 98" stroke="#78909C" stroke-width="14" stroke-linecap="round" fill="none"/>
          <circle cx="51" cy="61" r="6" fill="#263238"/>
          <circle cx="89" cy="61" r="6" fill="#263238"/>
          <circle cx="49" cy="59" r="2.5" fill="white"/>
          <circle cx="87" cy="59" r="2.5" fill="white"/>
          <circle cx="42" cy="75" r="6" fill="#FF8A80" fill-opacity="0.6"/>
          <circle cx="98" cy="75" r="6" fill="#FF8A80" fill-opacity="0.6"/>
        </svg>`
      },
      {
        id: "monkey",
        name: "MONKEY",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="68" r="19" fill="#795548"/>
          <circle cx="30" cy="68" r="12" fill="#FFCCBC"/>
          <circle cx="110" cy="68" r="19" fill="#795548"/>
          <circle cx="110" cy="68" r="12" fill="#FFCCBC"/>
          <circle cx="70" cy="68" r="40" fill="#6D4C41"/>
          <path d="M47 61 C47 49 59 44 70 56 C81 44 93 49 93 61 C93 73 88 87 70 89 C52 87 47 73 47 61 Z" fill="#FFE0B2"/>
          <ellipse cx="70" cy="80" rx="21" ry="14" fill="#FFE0B2"/>
          <ellipse cx="65" cy="75" rx="2.5" ry="2" fill="#4E342E"/>
          <ellipse cx="75" cy="75" rx="2.5" ry="2" fill="#4E342E"/>
          <path d="M56 82 Q70 94 84 82" stroke="#4E342E" stroke-width="3.5" stroke-linecap="round"/>
          <circle cx="56" cy="59" r="5.5" fill="#3E2723"/>
          <circle cx="84" cy="59" r="5.5" fill="#3E2723"/>
          <circle cx="54" cy="57" r="2.5" fill="white"/>
          <circle cx="82" cy="57" r="2.5" fill="white"/>
        </svg>`
      },
      {
        id: "rabbit",
        name: "RABBIT",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="51" cy="38" rx="12" ry="30" fill="#ECEFF1" transform="rotate(-10 51 38)"/>
          <ellipse cx="51" cy="38" rx="7" ry="21" fill="#FF80AB" transform="rotate(-10 51 38)"/>
          <ellipse cx="89" cy="38" rx="12" ry="30" fill="#ECEFF1" transform="rotate(10 89 38)"/>
          <ellipse cx="89" cy="38" rx="7" ry="21" fill="#FF80AB" transform="rotate(10 89 38)"/>
          <circle cx="70" cy="80" r="38" fill="#FFFFFF" stroke="#CFD8DC" stroke-width="2.5"/>
          <polygon points="65,80 75,80 70,86" fill="#FF4081"/>
          <path d="M70 86 Q62 92 56 87 M70 86 Q78 92 84 87" stroke="#455A64" stroke-width="3" stroke-linecap="round"/>
          <ellipse cx="53" cy="70" rx="6" ry="8" fill="#37474F"/>
          <ellipse cx="87" cy="70" rx="6" ry="8" fill="#37474F"/>
          <circle cx="51" cy="68" r="2.5" fill="white"/>
          <circle cx="85" cy="68" r="2.5" fill="white"/>
          <circle cx="42" cy="82" r="6" fill="#FF80AB" fill-opacity="0.5"/>
          <circle cx="98" cy="82" r="6" fill="#FF80AB" fill-opacity="0.5"/>
        </svg>`
      }
    ]
  },

  {
    id: "fruits",
    index: 2,
    name: "FRUITS",
    icon: "🍎🍌🍓",
    wheelIconText: "🍎🍌🍓",
    themeColor: "#8E24AA",
    sliceColor: "#8E24AA",
    title: "FRUITS",
    question: "What's your favorite fruit?",
    items: [
      {
        id: "apple",
        name: "APPLE",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 40 C70 24 77 17 82 14" stroke="#5D4037" stroke-width="4.5" stroke-linecap="round"/>
          <ellipse cx="86" cy="26" rx="14" ry="8" transform="rotate(-30 86 26)" fill="#4CAF50"/>
          <path d="M70 47 C47 33 23 47 26 82 C28 110 56 124 70 119 C84 124 112 110 114 82 C117 47 93 33 70 47 Z" fill="url(#g-apple)"/>
          <ellipse cx="47" cy="63" rx="12" ry="7" transform="rotate(-40 47 63)" fill="white" fill-opacity="0.5"/>
          <circle cx="56" cy="80" r="4.5" fill="#3E2723"/>
          <circle cx="84" cy="80" r="4.5" fill="#3E2723"/>
          <path d="M62 89 Q70 98 78 89" stroke="#3E2723" stroke-width="3.5" stroke-linecap="round"/>
          <defs>
            <radialGradient id="g-apple" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#FF5252"/>
              <stop offset="100%" stop-color="#B71C1C"/>
            </radialGradient>
          </defs>
        </svg>`
      },
      {
        id: "banana",
        name: "BANANA",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g-banana-skin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFF59D"/>
              <stop offset="25%" stop-color="#FFEB3B"/>
              <stop offset="70%" stop-color="#FFD600"/>
              <stop offset="100%" stop-color="#FF9100"/>
            </linearGradient>
            <linearGradient id="g-banana-ridge" x1="10%" y1="10%" x2="90%" y2="90%">
              <stop offset="0%" stop-color="#FFEE58"/>
              <stop offset="60%" stop-color="#FFC107"/>
              <stop offset="100%" stop-color="#FFA000"/>
            </linearGradient>
            <filter id="banana-glow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#E65100" flood-opacity="0.25"/>
            </filter>
          </defs>
          <g filter="url(#banana-glow)">
            <path d="M 28 38 C 52 26 95 38 116 76 C 124 92 118 108 108 114 C 98 104 76 74 48 52 C 38 44 32 40 28 38 Z" fill="#FFA000" opacity="0.35"/>
            <path d="M 32 36 C 60 22 102 36 120 74 C 128 92 120 108 108 114 C 100 110 82 82 54 58 C 40 46 34 40 32 36 Z" fill="url(#g-banana-skin)"/>
            <path d="M 34 38 C 60 30 96 46 112 78 C 118 92 112 104 104 110 C 96 102 78 78 52 56 C 42 46 36 40 34 38 Z" fill="url(#g-banana-ridge)"/>
            <path d="M 44 33 C 68 28 96 40 110 64" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" stroke-opacity="0.75" fill="none"/>
            <path d="M 32 36 C 28 32 22 28 18 27 C 16 26 15 28 17 30 L 25 38 C 28 41 31 39 32 36 Z" fill="#7CB342"/>
            <path d="M 18 27 C 16 26 15 28 17 30 L 19 32 L 21 28 Z" fill="#4E342E"/>
            <path d="M 108 114 C 112 116 114 118 112 121 C 110 122 106 120 104 116 Z" fill="#3E2723"/>
            <circle cx="64" cy="44" r="1.5" fill="#6D4C41" opacity="0.6"/>
            <circle cx="86" cy="62" r="1.8" fill="#6D4C41" opacity="0.6"/>
            <circle cx="102" cy="86" r="1.5" fill="#6D4C41" opacity="0.6"/>
          </g>
        </svg>`
      },
      {
        id: "strawberry",
        name: "STRAWBERRY",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 124 C49 112 28 89 30 59 C32 37 54 37 70 44 C86 37 108 37 110 59 C112 89 91 112 70 124 Z" fill="url(#g-straw)"/>
          <polygon points="70,40 58,21 65,33 47,28 58,40" fill="#43A047"/>
          <polygon points="70,40 82,21 75,33 93,28 82,40" fill="#4CAF50"/>
          <circle cx="56" cy="75" r="4" fill="#212121"/>
          <circle cx="84" cy="75" r="4" fill="#212121"/>
          <path d="M62 84 Q70 91 78 84" stroke="#212121" stroke-width="3" stroke-linecap="round"/>
          <defs>
            <radialGradient id="g-straw" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#FF5252"/>
              <stop offset="100%" stop-color="#C2185B"/>
            </radialGradient>
          </defs>
        </svg>`
      },
      {
        id: "watermelon",
        name: "WATERMELON",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 51 Q70 133 124 51 Z" fill="#2E7D32"/>
          <path d="M23 54 Q70 124 117 54 Z" fill="#E8F5E9"/>
          <path d="M30 56 Q70 114 110 56 Z" fill="url(#g-melon)"/>
          <ellipse cx="47" cy="70" rx="2.5" ry="4" transform="rotate(-15 47 70)" fill="#212121"/>
          <ellipse cx="70" cy="86" rx="2.5" ry="4" fill="#212121"/>
          <ellipse cx="93" cy="70" rx="2.5" ry="4" transform="rotate(15 93 70)" fill="#212121"/>
          <circle cx="56" cy="63" r="3.5" fill="#212121"/>
          <circle cx="84" cy="63" r="3.5" fill="#212121"/>
          <path d="M63 72 Q70 79 77 72" stroke="#212121" stroke-width="3" stroke-linecap="round"/>
          <defs>
            <radialGradient id="g-melon" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#FF5252"/>
              <stop offset="100%" stop-color="#D50000"/>
            </radialGradient>
          </defs>
        </svg>`
      },
      {
        id: "grapes",
        name: "GRAPES",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 30 C70 16 77 12 82 9" stroke="#5D4037" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M70 30 C58 21 49 26 47 33 C56 35 65 33 70 30 Z" fill="#4CAF50"/>
          <circle cx="54" cy="44" r="14" fill="#9C27B0"/>
          <circle cx="80" cy="44" r="14" fill="#7B1FA2"/>
          <circle cx="42" cy="65" r="14" fill="#8E24AA"/>
          <circle cx="68" cy="65" r="14" fill="#AB47BC"/>
          <circle cx="94" cy="65" r="14" fill="#6A1B9A"/>
          <circle cx="54" cy="86" r="14" fill="#7B1FA2"/>
          <circle cx="80" cy="86" r="14" fill="#8E24AA"/>
          <circle cx="68" cy="107" r="14" fill="#9C27B0"/>
          <circle cx="63" cy="61" r="3.5" fill="white"/>
          <circle cx="49" cy="82" r="3.5" fill="white"/>
        </svg>`
      },
      {
        id: "orange-fruit",
        name: "ORANGE",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 33 C70 21 75 14 80 12" stroke="#5D4037" stroke-width="4" stroke-linecap="round"/>
          <ellipse cx="86" cy="21" rx="12" ry="7" transform="rotate(-20 86 21)" fill="#4CAF50"/>
          <circle cx="70" cy="76" r="49" fill="url(#g-orange-f)"/>
          <circle cx="56" cy="72" r="4.5" fill="#3E2723"/>
          <circle cx="84" cy="72" r="4.5" fill="#3E2723"/>
          <circle cx="54" cy="70" r="2" fill="white"/>
          <circle cx="82" cy="70" r="2" fill="white"/>
          <path d="M61 84 Q70 93 79 84" stroke="#3E2723" stroke-width="3.5" stroke-linecap="round"/>
          <defs>
            <radialGradient id="g-orange-f" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#FFA726"/>
              <stop offset="100%" stop-color="#E65100"/>
            </radialGradient>
          </defs>
        </svg>`
      }
    ]
  },

  {
    id: "vegetables",
    index: 3,
    name: "VEGETABLES",
    icon: "🥕🥦🌽",
    wheelIconText: "🥕🥦🌽",
    themeColor: "#E91E63",
    sliceColor: "#E91E63",
    title: "VEGETABLES",
    question: "What's your favorite vegetable?",
    items: [
      {
        id: "carrot",
        name: "CARROT",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 47 C61 23 47 19 44 14 C54 26 65 37 70 47 Z" fill="#4CAF50"/>
          <path d="M70 47 C70 19 72 12 75 7 C77 19 75 33 70 47 Z" fill="#66BB6A"/>
          <path d="M70 47 C79 23 93 19 96 14 C86 26 75 37 70 47 Z" fill="#43A047"/>
          <path d="M49 49 C49 42 91 42 91 49 C91 70 77 117 70 126 C63 117 49 70 49 49 Z" fill="url(#g-carrot)"/>
          <circle cx="62" cy="65" r="3.5" fill="#3E2723"/>
          <circle cx="78" cy="65" r="3.5" fill="#3E2723"/>
          <path d="M67 72 Q70 77 73 72" stroke="#3E2723" stroke-width="2.5" stroke-linecap="round"/>
          <defs>
            <linearGradient id="g-carrot" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFA726"/>
              <stop offset="100%" stop-color="#F57C00"/>
            </linearGradient>
          </defs>
        </svg>`
      },
      {
        id: "broccoli",
        name: "BROCCOLI",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M58 82 L54 117 C54 121 86 121 86 117 L82 82 Z" fill="#A5D6A7" stroke="#4CAF50" stroke-width="2.5"/>
          <circle cx="47" cy="63" r="23" fill="#388E3C"/>
          <circle cx="93" cy="63" r="23" fill="#388E3C"/>
          <circle cx="70" cy="47" r="28" fill="#43A047"/>
          <circle cx="51" cy="40" r="19" fill="#4CAF50"/>
          <circle cx="89" cy="40" r="19" fill="#4CAF50"/>
          <circle cx="63" cy="98" r="3.5" fill="#1B5E20"/>
          <circle cx="77" cy="98" r="3.5" fill="#1B5E20"/>
          <path d="M66 105 Q70 110 74 105" stroke="#1B5E20" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`
      },
      {
        id: "corn",
        name: "CORN",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="70" cy="63" rx="23" ry="44" fill="url(#g-corn)"/>
          <path d="M44 112 C35 93 40 58 56 47 C49 70 54 98 65 110 Z" fill="#66BB6A"/>
          <path d="M96 112 C105 93 100 58 84 47 C91 70 86 98 75 110 Z" fill="#4CAF50"/>
          <circle cx="63" cy="58" r="3.5" fill="#3E2723"/>
          <circle cx="77" cy="58" r="3.5" fill="#3E2723"/>
          <path d="M66 68 Q70 73 74 68" stroke="#3E2723" stroke-width="2.5" stroke-linecap="round"/>
          <defs>
            <radialGradient id="g-corn" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#FFF59D"/>
              <stop offset="50%" stop-color="#FFEE58"/>
              <stop offset="100%" stop-color="#FBC02D"/>
            </radialGradient>
          </defs>
        </svg>`
      },
      {
        id: "cucumber",
        name: "CUCUMBER",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g-cuc-whole" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4CAF50"/>
              <stop offset="40%" stop-color="#2E7D32"/>
              <stop offset="100%" stop-color="#1B5E20"/>
            </linearGradient>
            <linearGradient id="g-cuc-inside" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFFFFF"/>
              <stop offset="40%" stop-color="#E8F5E9"/>
              <stop offset="100%" stop-color="#C8E6C9"/>
            </linearGradient>
            <filter id="cuc-shadow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#1B5E20" flood-opacity="0.3"/>
            </filter>
          </defs>
          <g filter="url(#cuc-shadow)">
            <path d="M 24 38 L 16 32 C 14 30 16 28 18 29 L 26 35 Z" fill="#33691E"/>
            <path d="M 24 38 C 30 30 42 34 56 42 L 108 78 C 122 88 126 102 118 112 C 110 120 96 118 84 108 L 32 70 C 20 60 18 46 24 38 Z" fill="url(#g-cuc-whole)" stroke="#1B5E20" stroke-width="2.5"/>
            <path d="M 38 42 Q 68 62 100 86" stroke="#81C784" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 12" fill="none" opacity="0.65"/>
            <path d="M 30 52 Q 60 74 90 98" stroke="#81C784" stroke-width="3" stroke-linecap="round" stroke-dasharray="10 14" fill="none" opacity="0.5"/>
            <circle cx="48" cy="46" r="2" fill="#A5D6A7"/>
            <circle cx="72" cy="64" r="2" fill="#A5D6A7"/>
            <circle cx="94" cy="82" r="2" fill="#A5D6A7"/>
            <circle cx="40" cy="58" r="1.8" fill="#A5D6A7"/>
            <circle cx="64" cy="76" r="1.8" fill="#A5D6A7"/>
            <circle cx="86" cy="94" r="1.8" fill="#A5D6A7"/>
            <g transform="translate(10, 30)">
              <circle cx="36" cy="64" r="26" fill="#1B5E20"/>
              <circle cx="36" cy="64" r="23" fill="#43A047"/>
              <circle cx="36" cy="64" r="20" fill="url(#g-cuc-inside)"/>
              <circle cx="36" cy="64" r="12" fill="#E0F2F1" opacity="0.7"/>
              <ellipse cx="36" cy="56" rx="2" ry="4.5" fill="#81C784"/>
              <ellipse cx="36" cy="72" rx="2" ry="4.5" fill="#81C784"/>
              <ellipse cx="28" cy="64" rx="4.5" ry="2" fill="#81C784"/>
              <ellipse cx="44" cy="64" rx="4.5" ry="2" fill="#81C784"/>
              <ellipse cx="30" cy="58" rx="2" ry="4" transform="rotate(-45 30 58)" fill="#81C784"/>
              <ellipse cx="42" cy="70" rx="2" ry="4" transform="rotate(-45 42 70)" fill="#81C784"/>
              <ellipse cx="42" cy="58" rx="2" ry="4" transform="rotate(45 42 58)" fill="#81C784"/>
              <ellipse cx="30" cy="70" rx="2" ry="4" transform="rotate(45 30 70)" fill="#81C784"/>
              <circle cx="36" cy="64" r="2" fill="#A5D6A7"/>
            </g>
          </g>
        </svg>`
      },
      {
        id: "tomato",
        name: "TOMATO",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="76" r="49" fill="url(#g-tomato)"/>
          <polygon points="70,35 61,23 70,30 79,23" fill="#43A047"/>
          <polygon points="70,35 49,33 58,40 44,42" fill="#388E3C"/>
          <polygon points="70,35 91,33 82,40 96,42" fill="#4CAF50"/>
          <path d="M70 30 C70 19 75 14 79 12" stroke="#2E7D32" stroke-width="4" stroke-linecap="round"/>
          <circle cx="56" cy="72" r="4.5" fill="#3E2723"/>
          <circle cx="84" cy="72" r="4.5" fill="#3E2723"/>
          <path d="M61 84 Q70 93 79 84" stroke="#3E2723" stroke-width="3.5" stroke-linecap="round"/>
          <defs>
            <radialGradient id="g-tomato" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#FF5252"/>
              <stop offset="100%" stop-color="#D50000"/>
            </radialGradient>
          </defs>
        </svg>`
      },
      {
        id: "potato",
        name: "POTATO",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g-pot-back" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#BCAAA4"/>
              <stop offset="60%" stop-color="#8D6E63"/>
              <stop offset="100%" stop-color="#5D4037"/>
            </radialGradient>
            <radialGradient id="g-pot-main" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#D7CCC8"/>
              <stop offset="50%" stop-color="#A1887F"/>
              <stop offset="100%" stop-color="#6D4C41"/>
            </radialGradient>
            <radialGradient id="g-pot-inside" cx="45%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#FFFDE7"/>
              <stop offset="50%" stop-color="#FFF59D"/>
              <stop offset="100%" stop-color="#FFE082"/>
            </radialGradient>
            <filter id="pot-shadow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="5" stdDeviation="3.5" flood-color="#3E2723" flood-opacity="0.3"/>
            </filter>
          </defs>
          <g filter="url(#pot-shadow)">
            <path d="M 68 24 C 92 20 118 32 122 52 C 126 70 108 86 86 84 C 66 82 50 68 52 48 C 54 32 58 26 68 24 Z" fill="url(#g-pot-back)"/>
            <path d="M 86 36 Q 92 38 96 35" stroke="#4E342E" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="90" cy="38" r="1.5" fill="#3E2723"/>
            <path d="M 106 54 Q 110 57 114 55" stroke="#4E342E" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M 28 62 C 24 44 48 36 70 42 C 92 48 98 68 94 88 C 90 108 68 116 46 112 C 26 108 32 80 28 62 Z" fill="url(#g-pot-main)"/>
            <path d="M 44 56 Q 50 58 54 55" stroke="#4E342E" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="48" cy="58" r="1.5" fill="#3E2723"/>
            <path d="M 66 72 Q 72 75 78 72" stroke="#4E342E" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="71" cy="75" r="1.5" fill="#3E2723"/>
            <path d="M 42 88 Q 48 90 52 87" stroke="#4E342E" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="60" cy="94" r="1.2" fill="#4E342E"/>
            <circle cx="82" cy="62" r="1.2" fill="#4E342E"/>
            <path d="M 76 74 C 98 62 124 74 126 94 C 128 114 106 126 84 122 C 72 118 68 100 70 88 Z" fill="#6D4C41"/>
            <ellipse cx="98" cy="98" rx="22" ry="17" transform="rotate(-15 98 98)" fill="url(#g-pot-inside)" stroke="#8D6E63" stroke-width="2"/>
            <ellipse cx="98" cy="98" rx="15" ry="11" transform="rotate(-15 98 98)" stroke="#FFE082" stroke-width="1.8" stroke-dasharray="4 4" fill="none" opacity="0.8"/>
            <ellipse cx="94" cy="92" rx="7" ry="3" transform="rotate(-20 94 92)" fill="#FFFFFF" opacity="0.6"/>
          </g>
        </svg>`
      }
    ]
  },

  {
    id: "sports",
    index: 4,
    name: "SPORTS",
    icon: "⚽",
    wheelIconText: "⚽",
    themeColor: "#00BCD4",
    sliceColor: "#00BCD4",
    title: "SPORTS",
    question: "What's your favorite sport?",
    items: [
      {
        id: "football",
        name: "FOOTBALL",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g-fb-ball" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stop-color="#FFFFFF"/>
              <stop offset="60%" stop-color="#F5F5F5"/>
              <stop offset="100%" stop-color="#CFD8DC"/>
            </radialGradient>
            <linearGradient id="g-fb-grass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#66BB6A"/>
              <stop offset="100%" stop-color="#2E7D32"/>
            </linearGradient>
            <filter id="fb-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#1B5E20" flood-opacity="0.35"/>
            </filter>
          </defs>
          <ellipse cx="70" cy="116" rx="52" ry="14" fill="url(#g-fb-grass)"/>
          <ellipse cx="70" cy="114" rx="34" ry="8" fill="#1B5E20" opacity="0.5"/>
          <path d="M 22 118 Q 28 98 34 118" fill="#43A047"/>
          <path d="M 30 120 Q 36 104 42 120" fill="#66BB6A"/>
          <path d="M 98 120 Q 104 102 110 120" fill="#43A047"/>
          <path d="M 108 118 Q 114 100 120 118" fill="#66BB6A"/>
          <path d="M 64 122 Q 70 108 76 122" fill="#81C784"/>
          <g filter="url(#fb-shadow)">
            <circle cx="70" cy="66" r="46" fill="url(#g-fb-ball)" stroke="#263238" stroke-width="3"/>
            <polygon points="70,50 84,60 79,77 61,77 56,60" fill="#212121"/>
            <line x1="70" y1="50" x2="70" y2="24" stroke="#263238" stroke-width="3"/>
            <line x1="84" y1="60" x2="108" y2="48" stroke="#263238" stroke-width="3"/>
            <line x1="79" y1="77" x2="98" y2="101" stroke="#263238" stroke-width="3"/>
            <line x1="61" y1="77" x2="42" y2="101" stroke="#263238" stroke-width="3"/>
            <line x1="56" y1="60" x2="32" y2="48" stroke="#263238" stroke-width="3"/>
            <path d="M 58 23 C 64 21 76 21 82 23 L 78 34 L 62 34 Z" fill="#212121"/>
            <line x1="62" y1="34" x2="70" y2="24" stroke="#263238" stroke-width="2.5"/>
            <line x1="78" y1="34" x2="70" y2="24" stroke="#263238" stroke-width="2.5"/>
            <path d="M 102 38 C 110 46 114 54 116 62 L 105 65 L 96 52 Z" fill="#212121"/>
            <path d="M 112 80 C 108 90 100 98 92 104 L 88 94 L 98 81 Z" fill="#212121"/>
            <path d="M 28 80 C 32 90 40 98 48 104 L 52 94 L 42 81 Z" fill="#212121"/>
            <path d="M 38 38 C 30 46 26 54 24 62 L 35 65 L 44 52 Z" fill="#212121"/>
            <line x1="96" y1="52" x2="78" y2="34" stroke="#263238" stroke-width="2.5"/>
            <line x1="105" y1="65" x2="98" y2="81" stroke="#263238" stroke-width="2.5"/>
            <line x1="88" y1="94" x2="52" y2="94" stroke="#263238" stroke-width="2.5"/>
            <line x1="42" y1="81" x2="35" y2="65" stroke="#263238" stroke-width="2.5"/>
            <line x1="44" y1="52" x2="62" y2="34" stroke="#263238" stroke-width="2.5"/>
            <ellipse cx="50" cy="44" rx="14" ry="8" transform="rotate(-35 50 44)" fill="#FFFFFF" opacity="0.6"/>
          </g>
        </svg>`
      },
      {
        id: "basketball",
        name: "BASKETBALL",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="54" fill="url(#g-bb)" stroke="#D35400" stroke-width="4.5"/>
          <line x1="16" y1="70" x2="124" y2="70" stroke="#2C3E50" stroke-width="4"/>
          <line x1="70" y1="16" x2="70" y2="124" stroke="#2C3E50" stroke-width="4"/>
          <path d="M33 30 Q64 70 33 110" stroke="#2C3E50" stroke-width="4" fill="none"/>
          <path d="M107 30 Q76 70 107 110" stroke="#2C3E50" stroke-width="4" fill="none"/>
          <defs>
            <radialGradient id="g-bb" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stop-color="#FF9F43"/>
              <stop offset="100%" stop-color="#E67E22"/>
            </radialGradient>
          </defs>
        </svg>`
      },
      {
        id: "tennis",
        name: "TENNIS",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="82" cy="58" rx="40" ry="49" fill="#E8F5E9" stroke="#E91E63" stroke-width="6" transform="rotate(35 82 58)"/>
          <line x1="103" y1="91" x2="128" y2="128" stroke="#C2185B" stroke-width="9" stroke-linecap="round"/>
          <circle cx="49" cy="82" r="30" fill="#CCFF00" stroke="#7CB342" stroke-width="3.5"/>
          <path d="M33 63 Q49 79 33 100" stroke="#FFFFFF" stroke-width="3.5" fill="none"/>
          <path d="M65 63 Q49 79 65 100" stroke="#FFFFFF" stroke-width="3.5" fill="none"/>
        </svg>`
      },
      {
        id: "swimming",
        name: "SWIMMING",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 88 Q41 76 70 88 T128 88 L128 128 L12 128 Z" fill="#29B6F6"/>
          <path d="M12 103 Q41 91 70 103 T128 103 L128 128 L12 128 Z" fill="#0288D1"/>
          <circle cx="70" cy="54" r="23" fill="#FFCC80"/>
          <path d="M47 54 C47 35 59 28 70 28 C81 28 93 35 93 54 Z" fill="#FF4081"/>
          <rect x="51" y="47" width="16" height="12" rx="5" fill="#00E5FF" stroke="#333" stroke-width="2.5"/>
          <rect x="73" y="47" width="16" height="12" rx="5" fill="#00E5FF" stroke="#333" stroke-width="2.5"/>
          <path d="M63 65 Q70 72 77 65" stroke="#D84315" stroke-width="3" stroke-linecap="round"/>
        </svg>`
      },
      {
        id: "running",
        name: "RUNNING",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g-run-shirt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FF5252"/>
              <stop offset="100%" stop-color="#D50000"/>
            </linearGradient>
            <linearGradient id="g-run-shorts" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#2979FF"/>
              <stop offset="100%" stop-color="#1565C0"/>
            </linearGradient>
          </defs>
          <path d="M 18 62 L 34 62" stroke="#90CAF9" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M 14 74 L 32 74" stroke="#90CAF9" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M 22 86 L 36 86" stroke="#90CAF9" stroke-width="3" stroke-linecap="round"/>
          <path d="M 62 48 L 44 60 L 34 52" stroke="#FFCC80" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <circle cx="33" cy="50" r="5.5" fill="#FFCC80"/>
          <path d="M 64 78 L 42 90 L 26 94" stroke="#FFCC80" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <g transform="translate(14, 86) rotate(-15)">
            <rect x="0" y="4" width="18" height="9" rx="4" fill="#00E676"/>
            <rect x="0" y="10" width="20" height="5" rx="2.5" fill="#FFFFFF"/>
          </g>
          <path d="M 58 44 C 64 42 82 44 88 48 L 78 78 L 56 74 Z" fill="url(#g-run-shirt)"/>
          <path d="M 56 72 L 80 76 L 76 86 L 54 82 Z" fill="url(#g-run-shorts)"/>
          <path d="M 74 80 L 92 92 L 84 116" stroke="#FFCC80" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <g transform="translate(76, 112)">
            <rect x="0" y="4" width="20" height="9" rx="4" fill="#00E676"/>
            <rect x="0" y="10" width="23" height="5" rx="2.5" fill="#FFFFFF"/>
            <circle cx="16" cy="7" r="2" fill="#FFFFFF"/>
          </g>
          <path d="M 80 48 L 98 56 L 94 72" stroke="#FFCC80" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <circle cx="94" cy="74" r="5.5" fill="#FFCC80"/>
          <circle cx="78" cy="28" r="16" fill="#FFCC80"/>
          <path d="M 64 28 C 64 16 74 12 86 12 C 96 12 96 22 96 26 C 90 22 84 22 78 24 Z" fill="#5D4037"/>
          <ellipse cx="64" cy="26" rx="4" ry="7" fill="#5D4037"/>
          <path d="M 64 26 Q 78 21 94 25" stroke="#FFD600" stroke-width="4.5" stroke-linecap="round" fill="none"/>
          <circle cx="86" cy="27" r="3" fill="#3E2723"/>
          <circle cx="85" cy="25" r="1" fill="#FFFFFF"/>
          <circle cx="88" cy="33" r="3.5" fill="#FF8A80" opacity="0.7"/>
          <path d="M 80 34 Q 85 41 90 35" stroke="#3E2723" stroke-width="2.5" stroke-linecap="round" fill="#D50000"/>
          <path d="M 66 18 Q 63 22 66 24 Q 69 22 66 18 Z" fill="#40C4FF"/>
        </svg>`
      },
      {
        id: "cycling",
        name: "CYCLING",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="86" r="26" fill="#ECEFF1" stroke="#37474F" stroke-width="4.5"/>
          <circle cx="100" cy="86" r="26" fill="#ECEFF1" stroke="#37474F" stroke-width="4.5"/>
          <polyline points="40,86 63,86 84,56 56,56 40,86" stroke="#E91E63" stroke-width="6" stroke-linecap="round" fill="none"/>
          <polyline points="63,86 84,56 100,86" stroke="#E91E63" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M82 42 L96 42" stroke="#FF9800" stroke-width="6" stroke-linecap="round"/>
        </svg>`
      }
    ]
  },

  {
    id: "toys",
    index: 5,
    name: "TOYS",
    icon: "🧸",
    wheelIconText: "🧸",
    themeColor: "#4CAF50",
    sliceColor: "#4CAF50",
    title: "TOYS",
    question: "What's your favorite toy?",
    items: [
      {
        id: "ball",
        name: "BALL",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="54" fill="#FFFFFF" stroke="#333" stroke-width="3.5"/>
          <path d="M70 16 C47 35 47 105 70 124 C70 70 70 70 70 16 Z" fill="#FF5252"/>
          <path d="M70 16 C93 35 93 105 70 124 C70 70 70 70 70 16 Z" fill="#2979FF"/>
          <path d="M16 70 C35 47 105 47 124 70 C70 70 70 70 16 70 Z" fill="#FFD600"/>
          <circle cx="70" cy="70" r="16" fill="#FFFFFF" stroke="#333" stroke-width="2.5"/>
        </svg>`
      },
      {
        id: "teddy",
        name: "TEDDY BEAR",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="44" r="16" fill="#8D6E63"/>
          <circle cx="40" cy="44" r="9" fill="#D7CCC8"/>
          <circle cx="100" cy="44" r="16" fill="#8D6E63"/>
          <circle cx="100" cy="44" r="9" fill="#D7CCC8"/>
          <circle cx="70" cy="68" r="40" fill="#A1887F"/>
          <ellipse cx="70" cy="77" rx="19" ry="14" fill="#D7CCC8"/>
          <polygon points="63,72 77,72 70,78" fill="#3E2723"/>
          <path d="M70 78 L70 84 Q63 89 58 84 M70 84 Q77 89 82 84" stroke="#3E2723" stroke-width="3" stroke-linecap="round"/>
          <circle cx="56" cy="61" r="5" fill="#3E2723"/>
          <circle cx="84" cy="61" r="5" fill="#3E2723"/>
          <circle cx="54" cy="59" r="2" fill="white"/>
          <circle cx="82" cy="59" r="2" fill="white"/>
          <polygon points="54,107 70,100 54,93" fill="#E91E63"/>
          <polygon points="86,107 70,100 86,93" fill="#E91E63"/>
          <circle cx="70" cy="100" r="4.5" fill="#C2185B"/>
        </svg>`
      },
      {
        id: "doll",
        name: "DOLL",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="30" cy="61" rx="14" ry="21" fill="#FFA000"/>
          <ellipse cx="110" cy="61" rx="14" ry="21" fill="#FFA000"/>
          <circle cx="70" cy="61" r="37" fill="#FFA000"/>
          <circle cx="70" cy="68" r="30" fill="#FFE0B2"/>
          <path d="M40 61 Q70 47 100 61 Q70 56 40 61 Z" fill="#FFA000"/>
          <circle cx="56" cy="65" r="4.5" fill="#1565C0"/>
          <circle cx="84" cy="65" r="4.5" fill="#1565C0"/>
          <path d="M61 77 Q70 84 79 77" stroke="#D81B60" stroke-width="3" stroke-linecap="round"/>
        </svg>`
      },
      {
        id: "car",
        name: "CAR",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 79 C19 70 28 68 42 68 L54 49 C58 42 70 42 91 42 L110 68 C119 68 126 75 126 84 L126 98 L28 98 C23 98 19 96 19 93 Z" fill="#E53935"/>
          <path d="M56 51 L70 51 L70 65 L44 65 Z" fill="#B3E5FC"/>
          <path d="M75 51 L91 51 L105 65 L75 65 Z" fill="#B3E5FC"/>
          <circle cx="42" cy="103" r="16" fill="#37474F" stroke="#263238" stroke-width="2.5"/>
          <circle cx="42" cy="103" r="7" fill="#ECEFF1"/>
          <circle cx="103" cy="103" r="16" fill="#37474F" stroke="#263238" stroke-width="2.5"/>
          <circle cx="103" cy="103" r="7" fill="#ECEFF1"/>
        </svg>`
      },
      {
        id: "train",
        name: "TRAIN",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="68" y="44" width="47" height="54" rx="5" fill="#1E88E5"/>
          <rect x="77" y="51" width="28" height="21" rx="2.5" fill="#E1F5FE"/>
          <path d="M26 70 C26 61 35 56 68 56 L68 98 L26 98 Z" fill="#43A047"/>
          <polygon points="47,56 56,56 61,42 42,42" fill="#F4511E"/>
          <circle cx="40" cy="105" r="12" fill="#37474F"/>
          <circle cx="65" cy="105" r="12" fill="#37474F"/>
          <circle cx="96" cy="103" r="14" fill="#D81B60"/>
        </svg>`
      },
      {
        id: "robot",
        name: "ROBOT",
        svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="70" y1="33" x2="70" y2="19" stroke="#78909C" stroke-width="4.5"/>
          <circle cx="70" cy="16" r="7" fill="#FF1744"/>
          <rect x="40" y="33" width="60" height="47" rx="9" fill="#90CAF9" stroke="#1976D2" stroke-width="3.5"/>
          <circle cx="56" cy="51" r="7" fill="#00E676" stroke="#333" stroke-width="2.5"/>
          <circle cx="84" cy="51" r="7" fill="#00E676" stroke="#333" stroke-width="2.5"/>
          <rect x="54" y="65" width="32" height="7" rx="3.5" fill="#37474F"/>
          <rect x="44" y="84" width="52" height="40" rx="7" fill="#64B5F6" stroke="#1976D2" stroke-width="3.5"/>
        </svg>`
      }
    ]
  }
];

// 3D Cheerful Star Mascot
window.MASCOT_SVGS = {
  idle: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" class="mascot-star-svg">
    <circle cx="70" cy="70" r="58" fill="#FFE082" fill-opacity="0.35"/>
    <path d="M70 14 L84 46 L118 50 L92 76 L100 110 L70 93 L40 110 L48 76 L22 50 L56 46 Z" fill="url(#g-star-m)" stroke="#FF8F00" stroke-width="4.5" stroke-linejoin="round"/>
    <circle cx="48" cy="68" r="7" fill="#FF5252" fill-opacity="0.8"/>
    <circle cx="92" cy="68" r="7" fill="#FF5252" fill-opacity="0.8"/>
    <ellipse cx="54" cy="58" rx="6.5" ry="9" fill="#3E2723"/>
    <ellipse cx="86" cy="58" rx="6.5" ry="9" fill="#3E2723"/>
    <circle cx="52" cy="54" r="3.5" fill="white"/>
    <circle cx="84" cy="54" r="3.5" fill="white"/>
    <path d="M60 70 Q70 84 80 70" stroke="#3E2723" stroke-width="4.5" stroke-linecap="round"/>
    <ellipse cx="52" cy="116" rx="8" ry="5" fill="#37474F"/>
    <ellipse cx="88" cy="116" rx="8" ry="5" fill="#37474F"/>
    <defs>
      <radialGradient id="g-star-m" cx="45%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#FFF9C4"/>
        <stop offset="50%" stop-color="#FFEB3B"/>
        <stop offset="100%" stop-color="#FFA000"/>
      </radialGradient>
    </defs>
  </svg>`,

  cheering: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" class="mascot-star-svg mascot-hop">
    <circle cx="70" cy="70" r="64" fill="#FFD54F" fill-opacity="0.55"/>
    <path d="M70 10 L86 44 L122 46 L94 74 L102 112 L70 93 L38 112 L46 74 L18 46 L54 44 Z" fill="url(#g-star-ch)" stroke="#FF8F00" stroke-width="5" stroke-linejoin="round"/>
    <circle cx="46" cy="66" r="8" fill="#FF1744" fill-opacity="0.85"/>
    <circle cx="94" cy="66" r="8" fill="#FF1744" fill-opacity="0.85"/>
    <path d="M46 56 Q54 44 62 56" stroke="#3E2723" stroke-width="5" stroke-linecap="round"/>
    <path d="M78 56 Q86 44 94 56" stroke="#3E2723" stroke-width="5" stroke-linecap="round"/>
    <path d="M56 68 Q70 92 84 68 Z" fill="#D32F2F" stroke="#3E2723" stroke-width="3.5"/>
    <ellipse cx="70" cy="81" rx="8" ry="4" fill="#FF8A80"/>
    <ellipse cx="50" cy="118" rx="9" ry="6" fill="#37474F"/>
    <ellipse cx="90" cy="118" rx="9" ry="6" fill="#37474F"/>
    <defs>
      <radialGradient id="g-star-ch" cx="45%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#FFFF8D"/>
        <stop offset="45%" stop-color="#FFEA00"/>
        <stop offset="100%" stop-color="#FF6D00"/>
      </radialGradient>
    </defs>
  </svg>`
};
