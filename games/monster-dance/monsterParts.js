// ============================================================
// monsterParts.js  -  Monster Dance! Layered SVG Part Definitions
// Super Cute, Soft, Lovable Cartoon Monster Aesthetics
// ============================================================
'use strict';

const MONSTER_COLORS = [
  { id: 'green',      name: 'Green',      label: 'GREEN',      hex: '#4ADE80', dark: '#16A34A', light: '#BBF7D0' },
  { id: 'blue',       name: 'Blue',       label: 'BLUE',       hex: '#60A5FA', dark: '#2563EB', light: '#BFDBFE' },
  { id: 'light-blue', name: 'Light Blue', label: 'LIGHT BLUE', hex: '#38BDF8', dark: '#0284C7', light: '#E0F2FE' },
  { id: 'purple',     name: 'Purple',     label: 'PURPLE',     hex: '#A78BFA', dark: '#7C3AED', light: '#DDD6FE' },
  { id: 'lavender',   name: 'Lavender',   label: 'LAVENDER',   hex: '#C084FC', dark: '#9333EA', light: '#F3E8FF' },
  { id: 'pink',       name: 'Pink',       label: 'PINK',       hex: '#F472B6', dark: '#DB2777', light: '#FCE7F3' },
  { id: 'red',        name: 'Red',        label: 'RED',        hex: '#FB7185', dark: '#E11D48', light: '#FFE4E6' },
  { id: 'orange',     name: 'Orange',     label: 'ORANGE',     hex: '#FB923C', dark: '#EA580C', light: '#FFEDD5' },
  { id: 'yellow',     name: 'Yellow',     label: 'YELLOW',     hex: '#FBBF24', dark: '#D97706', light: '#FEF3C7' },
  { id: 'mint',       name: 'Mint',       label: 'MINT',       hex: '#34D399', dark: '#059669', light: '#D1FAE5' },
];

/* SVG viewBox is "0 0 400 520"
   Head center  : (200, 196) r=88
   Body center  : (200, 356) rx=88, ry=78
   Eyes center  : (158, 186) and (242, 186)
   Ears center  : (112, 148) and (288, 148) / top (150, 80) and (250, 80)
   Nose center  : (200, 218)
   Mouth center : (200, 246)
   Hair top     : (200, 95)
   Hands center : (84, 370) and (316, 370)
   Feet center  : (160, 498) and (240, 498)
   Accessories  : top head / eyes / neck
*/

const MONSTER_PARTS = {
  // ── 1. EYES (8 Cute Options) ──
  eyes: [
    {
      id: 'round',
      name: 'Big Round Eyes',
      svg: `
        <g class="part-eyes-round">
          <ellipse cx="158" cy="186" rx="25" ry="27" fill="#FFFFFF" stroke="#2D3748" stroke-width="3.5"/>
          <circle class="eye-pupil-l" cx="160" cy="187" r="15" fill="#1A202C"/>
          <circle cx="167" cy="179" r="7" fill="#FFFFFF"/>
          <circle cx="153" cy="189" r="3.5" fill="#FFFFFF" opacity="0.9"/>
          <ellipse cx="242" cy="186" rx="25" ry="27" fill="#FFFFFF" stroke="#2D3748" stroke-width="3.5"/>
          <circle class="eye-pupil-r" cx="244" cy="187" r="15" fill="#1A202C"/>
          <circle cx="251" cy="179" r="7" fill="#FFFFFF"/>
          <circle cx="237" cy="189" r="3.5" fill="#FFFFFF" opacity="0.9"/>
        </g>
      `
    },
    {
      id: 'sparkle',
      name: 'Sparkle Eyes',
      svg: `
        <g class="part-eyes-sparkle">
          <ellipse cx="158" cy="185" rx="26" ry="28" fill="#FFFFFF" stroke="#2D3748" stroke-width="3.5"/>
          <ellipse cx="160" cy="187" rx="18" ry="20" fill="#3B82F6"/>
          <circle cx="161" cy="188" r="13" fill="#0F172A"/>
          <polygon points="168,174 171,180 177,180 172,184 174,190 168,186 162,190 164,184 159,180 165,180" fill="#FFFFFF"/>
          <circle cx="154" cy="191" r="4" fill="#FFFFFF"/>
          <circle cx="169" cy="193" r="2.5" fill="#FFFFFF"/>
          <ellipse cx="242" cy="185" rx="26" ry="28" fill="#FFFFFF" stroke="#2D3748" stroke-width="3.5"/>
          <ellipse cx="244" cy="187" rx="18" ry="20" fill="#3B82F6"/>
          <circle cx="245" cy="188" r="13" fill="#0F172A"/>
          <polygon points="252,174 255,180 261,180 256,184 258,190 252,186 246,190 248,184 243,180 249,180" fill="#FFFFFF"/>
          <circle cx="238" cy="191" r="4" fill="#FFFFFF"/>
          <circle cx="253" cy="193" r="2.5" fill="#FFFFFF"/>
        </g>
      `
    },
    {
      id: 'star',
      name: 'Star Eyes',
      svg: `
        <g class="part-eyes-star">
          <polygon points="158,158 165,175 182,175 168,186 173,203 158,193 143,203 148,186 134,175 151,175"
            fill="#FBBF24" stroke="#D97706" stroke-width="3"/>
          <circle cx="158" cy="184" r="6" fill="#FFFFFF" opacity="0.95"/>
          <circle cx="152" cy="188" r="2.5" fill="#FFFFFF" opacity="0.9"/>
          <polygon points="242,158 249,175 266,175 252,186 257,203 242,193 227,203 232,186 218,175 235,175"
            fill="#FBBF24" stroke="#D97706" stroke-width="3"/>
          <circle cx="242" cy="184" r="6" fill="#FFFFFF" opacity="0.95"/>
          <circle cx="236" cy="188" r="2.5" fill="#FFFFFF" opacity="0.9"/>
        </g>
      `
    },
    {
      id: 'happy',
      name: 'Happy Curved Eyes',
      svg: `
        <g class="part-eyes-happy">
          <path d="M136,196 Q158,166 180,196" fill="none" stroke="#2D3748" stroke-width="9" stroke-linecap="round"/>
          <path d="M220,196 Q242,166 264,196" fill="none" stroke="#2D3748" stroke-width="9" stroke-linecap="round"/>
          <!-- Sweet lashes -->
          <path d="M140,188 L132,178" stroke="#2D3748" stroke-width="4" stroke-linecap="round"/>
          <path d="M176,188 L184,178" stroke="#2D3748" stroke-width="4" stroke-linecap="round"/>
          <path d="M224,188 L216,178" stroke="#2D3748" stroke-width="4" stroke-linecap="round"/>
          <path d="M260,188 L268,178" stroke="#2D3748" stroke-width="4" stroke-linecap="round"/>
        </g>
      `
    },
    {
      id: 'sleepy',
      name: 'Sleepy Sweet Eyes',
      svg: `
        <g class="part-eyes-sleepy">
          <path d="M138,184 Q158,206 178,184" fill="none" stroke="#2D3748" stroke-width="8" stroke-linecap="round"/>
          <circle cx="158" cy="188" r="4" fill="#2D3748"/>
          <path d="M222,184 Q242,206 262,184" fill="none" stroke="#2D3748" stroke-width="8" stroke-linecap="round"/>
          <circle cx="242" cy="188" r="4" fill="#2D3748"/>
        </g>
      `
    },
    {
      id: 'oval',
      name: 'Big Oval Eyes',
      svg: `
        <g class="part-eyes-oval">
          <ellipse cx="158" cy="184" rx="20" ry="30" fill="#FFFFFF" stroke="#2D3748" stroke-width="3.5"/>
          <ellipse cx="159" cy="186" rx="12" ry="18" fill="#10B981"/>
          <ellipse cx="160" cy="187" rx="8" ry="12" fill="#064E3B"/>
          <circle cx="164" cy="177" r="5" fill="#FFFFFF"/>
          <ellipse cx="242" cy="184" rx="20" ry="30" fill="#FFFFFF" stroke="#2D3748" stroke-width="3.5"/>
          <ellipse cx="243" cy="186" rx="12" ry="18" fill="#10B981"/>
          <ellipse cx="244" cy="187" rx="8" ry="12" fill="#064E3B"/>
          <circle cx="248" cy="177" r="5" fill="#FFFFFF"/>
        </g>
      `
    },
    {
      id: 'mismatched',
      name: 'Funny Googly Eyes',
      svg: `
        <g class="part-eyes-mismatched">
          <circle cx="154" cy="184" r="30" fill="#FFFFFF" stroke="#2D3748" stroke-width="3.5"/>
          <circle cx="158" cy="180" r="12" fill="#1A202C"/>
          <circle cx="162" cy="176" r="4" fill="#FFFFFF"/>
          <circle cx="246" cy="188" r="18" fill="#FFFFFF" stroke="#2D3748" stroke-width="3"/>
          <circle cx="244" cy="192" r="8" fill="#1A202C"/>
          <circle cx="246" cy="190" r="2.5" fill="#FFFFFF"/>
        </g>
      `
    },
    {
      id: 'button',
      name: 'Cute Button Eyes',
      svg: `
        <g class="part-eyes-button">
          <circle cx="158" cy="186" r="22" fill="#4B5563" stroke="#1F2937" stroke-width="3.5"/>
          <circle cx="158" cy="186" r="14" fill="#374151"/>
          <circle cx="153" cy="182" r="2.5" fill="#FFFFFF"/>
          <circle cx="163" cy="182" r="2.5" fill="#FFFFFF"/>
          <circle cx="153" cy="190" r="2.5" fill="#FFFFFF"/>
          <circle cx="163" cy="190" r="2.5" fill="#FFFFFF"/>
          <line x1="153" y1="182" x2="163" y2="190" stroke="#9CA3AF" stroke-width="1.8"/>
          <line x1="163" y1="182" x2="153" y2="190" stroke="#9CA3AF" stroke-width="1.8"/>
          <circle cx="242" cy="186" r="22" fill="#4B5563" stroke="#1F2937" stroke-width="3.5"/>
          <circle cx="242" cy="186" r="14" fill="#374151"/>
          <circle cx="237" cy="182" r="2.5" fill="#FFFFFF"/>
          <circle cx="247" cy="182" r="2.5" fill="#FFFFFF"/>
          <circle cx="237" cy="190" r="2.5" fill="#FFFFFF"/>
          <circle cx="247" cy="190" r="2.5" fill="#FFFFFF"/>
          <line x1="237" y1="182" x2="247" y2="190" stroke="#9CA3AF" stroke-width="1.8"/>
          <line x1="247" y1="182" x2="237" y2="190" stroke="#9CA3AF" stroke-width="1.8"/>
        </g>
      `
    }
  ],

  // ── 2. EARS (6 Cute Options) ──
  ears: [
    {
      id: 'round',
      name: 'Round Bear Ears',
      svg: `
        <g class="part-ears-round">
          <circle cx="110" cy="146" r="35" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
          <circle cx="110" cy="146" r="22" fill="var(--mcl)" opacity="0.75"/>
          <circle cx="290" cy="146" r="35" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
          <circle cx="290" cy="146" r="22" fill="var(--mcl)" opacity="0.75"/>
        </g>
      `
    },
    {
      id: 'bunny',
      name: 'Long Bunny Ears',
      svg: `
        <g class="part-ears-bunny">
          <ellipse cx="148" cy="78" rx="24" ry="68" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
          <ellipse cx="148" cy="80" rx="14" ry="52" fill="#FBCFE8" opacity="0.95"/>
          <ellipse cx="252" cy="78" rx="24" ry="68" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
          <ellipse cx="252" cy="80" rx="14" ry="52" fill="#FBCFE8" opacity="0.95"/>
        </g>
      `
    },
    {
      id: 'floppy',
      name: 'Floppy Puppy Ears',
      svg: `
        <g class="part-ears-floppy">
          <ellipse cx="106" cy="214" rx="34" ry="70" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"
            transform="rotate(28, 106, 214)"/>
          <ellipse cx="106" cy="214" rx="22" ry="54" fill="var(--mcl)" opacity="0.65"
            transform="rotate(28, 106, 214)"/>
          <ellipse cx="294" cy="214" rx="34" ry="70" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"
            transform="rotate(-28, 294, 214)"/>
          <ellipse cx="294" cy="214" rx="22" ry="54" fill="var(--mcl)" opacity="0.65"
            transform="rotate(-28, 294, 214)"/>
        </g>
      `
    },
    {
      id: 'pointy',
      name: 'Cute Pointy Ears',
      svg: `
        <g class="part-ears-pointy">
          <polygon points="112,168 138,72 174,162" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5" stroke-linejoin="round"/>
          <polygon points="126,160 138,94 162,154" fill="var(--mcl)" opacity="0.8"/>
          <polygon points="226,162 262,72 288,168" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5" stroke-linejoin="round"/>
          <polygon points="238,154 262,94 274,160" fill="var(--mcl)" opacity="0.8"/>
        </g>
      `
    },
    {
      id: 'cat',
      name: 'Sweet Cat Ears',
      svg: `
        <g class="part-ears-cat">
          <polygon points="125,145 145,85 180,135" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5" stroke-linejoin="round"/>
          <polygon points="135,138 147,98 170,132" fill="#FDA4AF" opacity="0.9"/>
          <polygon points="220,135 255,85 275,145" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5" stroke-linejoin="round"/>
          <polygon points="230,132 253,98 265,138" fill="#FDA4AF" opacity="0.9"/>
        </g>
      `
    },
    {
      id: 'soft-large',
      name: 'Large Soft Ears',
      svg: `
        <g class="part-ears-softlarge">
          <ellipse cx="98" cy="170" rx="42" ry="50" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
          <ellipse cx="102" cy="170" rx="26" ry="34" fill="#FCE7F3" opacity="0.85"/>
          <ellipse cx="302" cy="170" rx="42" ry="50" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
          <ellipse cx="298" cy="170" rx="26" ry="34" fill="#FCE7F3" opacity="0.85"/>
        </g>
      `
    }
  ],

  // ── 3. NOSE (6 Cute Options) ──
  nose: [
    {
      id: 'tiny-round',
      name: 'Tiny Round Nose',
      svg: `
        <g class="part-nose-tiny">
          <circle cx="200" cy="216" r="11" fill="#FB7185" stroke="#E11D48" stroke-width="2"/>
          <circle cx="204" cy="213" r="4" fill="#FFFFFF" opacity="0.8"/>
        </g>
      `
    },
    {
      id: 'button',
      name: 'Cute Button Nose',
      svg: `
        <g class="part-nose-button">
          <ellipse cx="200" cy="216" rx="14" ry="10" fill="#374151" stroke="#1F2937" stroke-width="2"/>
          <circle cx="197" cy="213" r="3.5" fill="#FFFFFF" opacity="0.85"/>
        </g>
      `
    },
    {
      id: 'big-round',
      name: 'Big Clowning Nose',
      svg: `
        <g class="part-nose-bigred">
          <circle cx="200" cy="220" r="23" fill="#EF4444" stroke="#B91C1C" stroke-width="3"/>
          <circle cx="208" cy="212" r="8" fill="#FFFFFF" opacity="0.7"/>
          <circle cx="196" cy="212" r="4.5" fill="#FFFFFF" opacity="0.45"/>
        </g>
      `
    },
    {
      id: 'heart',
      name: 'Heart-Shaped Nose',
      svg: `
        <g class="part-nose-heart">
          <path d="M200,225 C190,214 184,208 191,202 C198,197 200,205 200,205 C200,205 202,197 209,202 C216,208 210,214 200,225 Z"
            fill="#EC4899" stroke="#BE185D" stroke-width="2.5"/>
          <circle cx="196" cy="204" r="2.5" fill="#FFFFFF" opacity="0.8"/>
        </g>
      `
    },
    {
      id: 'triangle',
      name: 'Soft Triangle Nose',
      svg: `
        <g class="part-nose-triangle">
          <polygon points="186,210 214,210 200,226" fill="#F59E0B" stroke="#D97706" stroke-width="2.5" stroke-linejoin="round"/>
          <circle cx="196" cy="213" r="3" fill="#FFFFFF" opacity="0.75"/>
        </g>
      `
    },
    {
      id: 'funny-oversized',
      name: 'Funny Soft Snoot',
      svg: `
        <g class="part-nose-funny">
          <ellipse cx="200" cy="218" rx="26" ry="16" fill="#FB923C" stroke="#EA580C" stroke-width="3"/>
          <ellipse cx="190" cy="220" rx="6.5" ry="5.5" fill="#C2410C" opacity="0.7"/>
          <ellipse cx="210" cy="220" rx="6.5" ry="5.5" fill="#C2410C" opacity="0.7"/>
          <circle cx="203" cy="212" r="5" fill="#FFFFFF" opacity="0.75"/>
        </g>
      `
    }
  ],

  // ── 4. MOUTH (6 Cute Options) ──
  mouth: [
    {
      id: 'big-smile',
      name: 'Big Happy Smile',
      svg: `
        <g class="part-mouth-bigsmile">
          <path d="M162,242 Q200,282 238,242" fill="none" stroke="#1F2937" stroke-width="6" stroke-linecap="round"/>
          <path d="M170,248 Q200,272 230,248" fill="#FDA4AF" opacity="0.45"/>
        </g>
      `
    },
    {
      id: 'small-smile',
      name: 'Sweet Gentle Smile',
      svg: `
        <g class="part-mouth-smallsmile">
          <path d="M180,244 Q200,260 220,244" fill="none" stroke="#1F2937" stroke-width="5" stroke-linecap="round"/>
        </g>
      `
    },
    {
      id: 'open-happy',
      name: 'Open Cheerful Mouth',
      svg: `
        <g class="part-mouth-open">
          <path d="M164,242 Q200,280 236,242 Q218,272 200,276 Q182,272 164,242 Z"
            fill="#DC2626" stroke="#1F2937" stroke-width="3.5"/>
          <path d="M170,247 Q200,264 230,247" fill="#FFFFFF"/>
          <ellipse cx="200" cy="265" rx="16" ry="9" fill="#FCA5A5" opacity="0.8"/>
        </g>
      `
    },
    {
      id: 'laughing',
      name: 'Big Laughing Mouth',
      svg: `
        <g class="part-mouth-laugh">
          <path d="M158,238 Q200,292 242,238 Q200,250 158,238 Z"
            fill="#B91C1C" stroke="#1F2937" stroke-width="3.5"/>
          <path d="M166,244 Q200,260 234,244" fill="#FFFFFF"/>
          <ellipse cx="200" cy="268" rx="20" ry="12" fill="#FB7185"/>
        </g>
      `
    },
    {
      id: 'tongue',
      name: 'Funny Playful Tongue',
      svg: `
        <g class="part-mouth-tongue">
          <path d="M166,241 Q200,276 234,241 Q218,266 200,270 Q182,266 166,241 Z"
            fill="#B91C1C" stroke="#1F2937" stroke-width="3.5"/>
          <path d="M172,246 Q200,262 228,246" fill="#FFFFFF"/>
          <ellipse cx="200" cy="280" rx="18" ry="15" fill="#FB7185" stroke="#BE123C" stroke-width="2.5"/>
          <line x1="200" y1="266" x2="200" y2="293" stroke="#BE123C" stroke-width="2.5"/>
        </g>
      `
    },
    {
      id: 'surprised',
      name: 'Cute Surprised O-Mouth',
      svg: `
        <g class="part-mouth-surprised">
          <ellipse cx="200" cy="254" rx="16" ry="20" fill="#B91C1C" stroke="#1F2937" stroke-width="3.5"/>
          <ellipse cx="200" cy="263" rx="10" ry="6" fill="#FDA4AF"/>
        </g>
      `
    }
  ],

  // ── 5. HAIR (10 Playful, Gender-Neutral Hairstyles) ──
  hair: [
    {
      id: 'spiky',
      name: 'Playful Spikes',
      svg: `
        <g class="part-hair-spiky">
          <path d="M112,170 L128,102 L148,152 L166,82 L184,148 L200,74 L216,148 L234,82 L252,152 L272,102 L288,170 Q200,140 112,170 Z"
            fill="#854D0E" stroke="#533009" stroke-width="3.5" stroke-linejoin="round"/>
        </g>
      `
    },
    {
      id: 'curly',
      name: 'Curly Puffs',
      svg: `
        <g class="part-hair-curly">
          <circle cx="138" cy="126" r="32" fill="#D97706"/>
          <circle cx="166" cy="104" r="34" fill="#D97706"/>
          <circle cx="200" cy="96"  r="36" fill="#D97706"/>
          <circle cx="234" cy="104" r="34" fill="#D97706"/>
          <circle cx="262" cy="126" r="32" fill="#D97706"/>
          <ellipse cx="200" cy="126" rx="80" ry="26" fill="#D97706"/>
          <circle cx="166" cy="98"  r="12" fill="#FDE68A" opacity="0.55"/>
          <circle cx="200" cy="90"  r="14" fill="#FDE68A" opacity="0.55"/>
          <circle cx="234" cy="98"  r="12" fill="#FDE68A" opacity="0.55"/>
        </g>
      `
    },
    {
      id: 'fluffy',
      name: 'Fluffy Cloud Hair',
      svg: `
        <g class="part-hair-fluffy">
          <circle cx="146" cy="134" r="38" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2"/>
          <circle cx="174" cy="108" r="42" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2"/>
          <circle cx="200" cy="100" r="44" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2"/>
          <circle cx="226" cy="108" r="42" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2"/>
          <circle cx="254" cy="134" r="38" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2"/>
          <ellipse cx="200" cy="130" rx="80" ry="28" fill="#F1F5F9"/>
          <circle cx="174" cy="102" r="16" fill="#FFFFFF"/>
          <circle cx="200" cy="94"  r="18" fill="#FFFFFF"/>
          <circle cx="226" cy="102" r="16" fill="#FFFFFF"/>
        </g>
      `
    },
    {
      id: 'messy',
      name: 'Messy Tuft Hair',
      svg: `
        <g class="part-hair-messy">
          <path d="M120,165 Q140,80 170,130 Q190,65 215,125 Q245,75 265,135 Q285,100 280,165 Q200,135 120,165 Z"
            fill="#EA580C" stroke="#9A3412" stroke-width="3.5" stroke-linejoin="round"/>
        </g>
      `
    },
    {
      id: 'big-fluffy',
      name: 'Giant Cotton Hair',
      svg: `
        <g class="part-hair-bigfluffy">
          <circle cx="130" cy="115" r="46" fill="#F472B6"/>
          <circle cx="170" cy="85"  r="50" fill="#F472B6"/>
          <circle cx="200" cy="75"  r="54" fill="#F472B6"/>
          <circle cx="230" cy="85"  r="50" fill="#F472B6"/>
          <circle cx="270" cy="115" r="46" fill="#F472B6"/>
          <ellipse cx="200" cy="120" rx="90" ry="34" fill="#F472B6"/>
          <circle cx="165" cy="75"  r="18" fill="#FBCFE8" opacity="0.6"/>
          <circle cx="200" cy="65"  r="22" fill="#FBCFE8" opacity="0.6"/>
          <circle cx="235" cy="75"  r="18" fill="#FBCFE8" opacity="0.6"/>
        </g>
      `
    },
    {
      id: 'mohawk',
      name: 'Bouncy Mohawk',
      svg: `
        <g class="part-hair-mohawk">
          <rect x="185" y="48" width="30" height="88" rx="15" fill="#EF4444" stroke="#991B1B" stroke-width="3.5"/>
          <rect x="183" y="55" width="14" height="78" rx="7" fill="#F87171" opacity="0.75"/>
          <ellipse cx="200" cy="120" rx="26" ry="15" fill="#EF4444" stroke="#991B1B" stroke-width="2.5"/>
          <ellipse cx="200" cy="65"  rx="13" ry="24" fill="#F97316"/>
          <ellipse cx="200" cy="45"  rx="10" ry="18" fill="#FBBF24"/>
        </g>
      `
    },
    {
      id: 'two-tufts',
      name: 'Two Soft Tufts',
      svg: `
        <g class="part-hair-twotufts">
          <ellipse cx="140" cy="100" rx="28" ry="38" fill="#8B5CF6" stroke="#5B21B6" stroke-width="3.5" transform="rotate(-20, 140, 100)"/>
          <circle cx="135" cy="95" r="14" fill="#DDD6FE" opacity="0.7"/>
          <ellipse cx="260" cy="100" rx="28" ry="38" fill="#8B5CF6" stroke="#5B21B6" stroke-width="3.5" transform="rotate(20, 260, 100)"/>
          <circle cx="265" cy="95" r="14" fill="#DDD6FE" opacity="0.7"/>
          <ellipse cx="200" cy="130" rx="60" ry="18" fill="#8B5CF6"/>
        </g>
      `
    },
    {
      id: 'wavy',
      name: 'Gentle Wavy Hair',
      svg: `
        <g class="part-hair-wavy">
          <path d="M115,160 C125,100 150,110 165,85 C180,110 200,90 220,95 C235,80 255,105 270,95 C280,120 290,140 285,165 Q200,135 115,160 Z"
            fill="#3B82F6" stroke="#1D4ED8" stroke-width="3.5"/>
          <circle cx="165" cy="95" r="10" fill="#93C5FD" opacity="0.65"/>
          <circle cx="230" cy="95" r="10" fill="#93C5FD" opacity="0.65"/>
        </g>
      `
    },
    {
      id: 'star-hair',
      name: 'Star Sprout Hair',
      svg: `
        <g class="part-hair-star">
          <path d="M195,130 Q190,80 175,60 Q200,95 200,130" fill="#F59E0B" stroke="#B45309" stroke-width="3"/>
          <polygon points="175,42 179,52 190,52 181,59 184,70 175,63 166,70 169,59 160,52 171,52"
            fill="#FBBF24" stroke="#D97706" stroke-width="2"/>
          <ellipse cx="200" cy="125" rx="65" ry="20" fill="#F59E0B" stroke="#B45309" stroke-width="3"/>
        </g>
      `
    },
    {
      id: 'rainbow-hair',
      name: 'Rainbow Tuft Hair',
      svg: `
        <g class="part-hair-rainbow">
          <path d="M140,145 Q160,65 175,120" stroke="#EF4444" stroke-width="14" stroke-linecap="round" fill="none"/>
          <path d="M165,135 Q185,55 200,115" stroke="#F59E0B" stroke-width="14" stroke-linecap="round" fill="none"/>
          <path d="M190,130 Q210,50 225,115" stroke="#10B981" stroke-width="14" stroke-linecap="round" fill="none"/>
          <path d="M215,135 Q235,55 248,125" stroke="#3B82F6" stroke-width="14" stroke-linecap="round" fill="none"/>
          <path d="M238,145 Q255,70 265,140" stroke="#8B5CF6" stroke-width="14" stroke-linecap="round" fill="none"/>
        </g>
      `
    }
  ],

  // ── 6. HANDS (6 Cute Options) ──
  hands: [
    {
      id: 'small',
      name: 'Cute Small Hands',
      svg: `
        <g class="part-hands-small">
          <circle cx="82" cy="370" r="22" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3"/>
          <circle cx="68" cy="360" r="9"  fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
          <circle cx="78" cy="354" r="9"  fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
          <circle cx="89" cy="356" r="9"  fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
          <circle cx="318" cy="370" r="22" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3"/>
          <circle cx="332" cy="360" r="9"  fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
          <circle cx="322" cy="354" r="9"  fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
          <circle cx="311" cy="356" r="9"  fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
        </g>
      `
    },
    {
      id: 'big',
      name: 'Big Cartoon Hands',
      svg: `
        <g class="part-hands-big">
          <ellipse cx="76" cy="374" rx="38" ry="32" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
          <ellipse cx="48" cy="358" rx="16" ry="13" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3" transform="rotate(-38, 48, 358)"/>
          <ellipse cx="69" cy="374" rx="20" ry="10" fill="var(--mcl)" opacity="0.4"/>
          <ellipse cx="324" cy="374" rx="38" ry="32" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
          <ellipse cx="352" cy="358" rx="16" ry="13" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3" transform="rotate(38, 352, 358)"/>
          <ellipse cx="331" cy="374" rx="20" ry="10" fill="var(--mcl)" opacity="0.4"/>
        </g>
      `
    },
    {
      id: 'paws',
      name: 'Cute Animal Paws',
      svg: `
        <g class="part-hands-paws">
          <circle cx="82" cy="370" r="30" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3"/>
          <ellipse cx="82" cy="380" rx="18" ry="12" fill="#FDA4AF" opacity="0.85"/>
          <circle cx="64" cy="362" r="7.5" fill="#FDA4AF" opacity="0.85"/>
          <circle cx="76" cy="355" r="7.5" fill="#FDA4AF" opacity="0.85"/>
          <circle cx="88" cy="355" r="7.5" fill="#FDA4AF" opacity="0.85"/>
          <circle cx="100" cy="362" r="7.5" fill="#FDA4AF" opacity="0.85"/>
          <circle cx="318" cy="370" r="30" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3"/>
          <ellipse cx="318" cy="380" rx="18" ry="12" fill="#FDA4AF" opacity="0.85"/>
          <circle cx="300" cy="362" r="7.5" fill="#FDA4AF" opacity="0.85"/>
          <circle cx="312" cy="355" r="7.5" fill="#FDA4AF" opacity="0.85"/>
          <circle cx="324" cy="355" r="7.5" fill="#FDA4AF" opacity="0.85"/>
          <circle cx="336" cy="362" r="7.5" fill="#FDA4AF" opacity="0.85"/>
        </g>
      `
    },
    {
      id: 'fluffy',
      name: 'Fluffy Poff Hands',
      svg: `
        <g class="part-hands-fluffy">
          <circle cx="68" cy="368" r="16" fill="var(--mcl)"/>
          <circle cx="84" cy="356" r="18" fill="var(--mcl)"/>
          <circle cx="98" cy="368" r="16" fill="var(--mcl)"/>
          <circle cx="84" cy="374" r="26" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3"/>
          <circle cx="302" cy="368" r="16" fill="var(--mcl)"/>
          <circle cx="316" cy="356" r="18" fill="var(--mcl)"/>
          <circle cx="332" cy="368" r="16" fill="var(--mcl)"/>
          <circle cx="316" cy="374" r="26" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3"/>
        </g>
      `
    },
    {
      id: 'mitten',
      name: 'Cozy Mitten Hands',
      svg: `
        <g class="part-hands-mitten">
          <ellipse cx="80" cy="374" rx="26" ry="30" fill="#EF4444" stroke="#991B1B" stroke-width="3"/>
          <ellipse cx="60" cy="362" rx="11" ry="14" fill="#EF4444" stroke="#991B1B" stroke-width="2.5" transform="rotate(-30, 60, 362)"/>
          <rect x="62" y="394" width="36" height="12" rx="6" fill="#FFFFFF"/>
          <ellipse cx="320" cy="374" rx="26" ry="30" fill="#EF4444" stroke="#991B1B" stroke-width="3"/>
          <ellipse cx="340" cy="362" rx="11" ry="14" fill="#EF4444" stroke="#991B1B" stroke-width="2.5" transform="rotate(30, 340, 362)"/>
          <rect x="302" y="394" width="36" height="12" rx="6" fill="#FFFFFF"/>
        </g>
      `
    },
    {
      id: 'claws',
      name: 'Cute Soft Claws',
      svg: `
        <g class="part-hands-claws">
          <ellipse cx="82" cy="374" rx="26" ry="22" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3"/>
          <path d="M64,362 L54,338" stroke="#4B5563" stroke-width="6.5" stroke-linecap="round"/>
          <path d="M74,356 L68,330" stroke="#4B5563" stroke-width="6.5" stroke-linecap="round"/>
          <path d="M86,354 L86,328" stroke="#4B5563" stroke-width="6.5" stroke-linecap="round"/>
          <path d="M98,358 L104,332" stroke="#4B5563" stroke-width="6.5" stroke-linecap="round"/>
          <ellipse cx="318" cy="374" rx="26" ry="22" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3"/>
          <path d="M336,362 L346,338" stroke="#4B5563" stroke-width="6.5" stroke-linecap="round"/>
          <path d="M326,356 L332,330" stroke="#4B5563" stroke-width="6.5" stroke-linecap="round"/>
          <path d="M314,354 L314,328" stroke="#4B5563" stroke-width="6.5" stroke-linecap="round"/>
          <path d="M302,358 L296,332" stroke="#4B5563" stroke-width="6.5" stroke-linecap="round"/>
        </g>
      `
    }
  ],

  // ── 7. FEET (6 Cute Options) ──
  feet: [
    {
      id: 'small',
      name: 'Small Cute Feet',
      svg: `
        <g class="part-feet-small">
          <ellipse cx="165" cy="498" rx="34" ry="20" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3"/>
          <ellipse cx="158" cy="495" rx="22" ry="11" fill="var(--mcl)" opacity="0.45"/>
          <ellipse cx="235" cy="498" rx="34" ry="20" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3"/>
          <ellipse cx="228" cy="495" rx="22" ry="11" fill="var(--mcl)" opacity="0.45"/>
        </g>
      `
    },
    {
      id: 'big',
      name: 'Big Stompy Feet',
      svg: `
        <g class="part-feet-big">
          <ellipse cx="156" cy="498" rx="50" ry="26" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
          <circle cx="114" cy="488" r="12" fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
          <circle cx="130" cy="480" r="12" fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
          <circle cx="147" cy="477" r="12" fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
          <circle cx="163" cy="477" r="12" fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
          <ellipse cx="244" cy="498" rx="50" ry="26" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
          <circle cx="286" cy="488" r="12" fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
          <circle cx="270" cy="480" r="12" fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
          <circle cx="253" cy="477" r="12" fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
          <circle cx="237" cy="477" r="12" fill="var(--mc)" stroke="var(--mcd)" stroke-width="2"/>
        </g>
      `
    },
    {
      id: 'round',
      name: 'Puffy Round Feet',
      svg: `
        <g class="part-feet-round">
          <circle cx="165" cy="494" r="28" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
          <circle cx="165" cy="492" r="16" fill="var(--mcl)" opacity="0.6"/>
          <circle cx="235" cy="494" r="28" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3.5"/>
          <circle cx="235" cy="492" r="16" fill="var(--mcl)" opacity="0.6"/>
        </g>
      `
    },
    {
      id: 'fluffy',
      name: 'Fluffy Poff Feet',
      svg: `
        <g class="part-feet-fluffy">
          <circle cx="145" cy="495" r="18" fill="var(--mcl)"/>
          <circle cx="165" cy="490" r="20" fill="var(--mcl)"/>
          <circle cx="185" cy="495" r="18" fill="var(--mcl)"/>
          <circle cx="215" cy="495" r="18" fill="var(--mcl)"/>
          <circle cx="235" cy="490" r="20" fill="var(--mcl)"/>
          <circle cx="255" cy="495" r="18" fill="var(--mcl)"/>
        </g>
      `
    },
    {
      id: 'monster',
      name: 'Cute Monster Claws',
      svg: `
        <g class="part-feet-monster">
          <ellipse cx="162" cy="496" rx="44" ry="24" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3"/>
          <path d="M124,490 L112,468" stroke="var(--mcd)" stroke-width="7.5" stroke-linecap="round"/>
          <path d="M140,484 L130,462" stroke="var(--mcd)" stroke-width="7.5" stroke-linecap="round"/>
          <path d="M156,481 L152,459" stroke="var(--mcd)" stroke-width="7.5" stroke-linecap="round"/>
          <ellipse cx="238" cy="496" rx="44" ry="24" fill="var(--mc)" stroke="var(--mcd)" stroke-width="3"/>
          <path d="M276,490 L288,468" stroke="var(--mcd)" stroke-width="7.5" stroke-linecap="round"/>
          <path d="M260,484 L270,462" stroke="var(--mcd)" stroke-width="7.5" stroke-linecap="round"/>
          <path d="M244,481 L248,459" stroke="var(--mcd)" stroke-width="7.5" stroke-linecap="round"/>
        </g>
      `
    },
    {
      id: 'shoes',
      name: 'Bright Cartoon Shoes',
      svg: `
        <g class="part-feet-shoes">
          <path d="M116,478 Q108,502 118,510 Q142,520 178,512 Q196,507 194,497 L177,486 L157,484 L128,482 Z"
            fill="#EF4444" stroke="#B91C1C" stroke-width="3" stroke-linejoin="round"/>
          <ellipse cx="156" cy="488" rx="25" ry="11" fill="#FCA5A5" opacity="0.6"/>
          <path d="M128,482 L177,486" stroke="#B91C1C" stroke-width="2.5"/>
          <path d="M284,478 Q292,502 282,510 Q258,520 222,512 Q204,507 206,497 L223,486 L243,484 L272,482 Z"
            fill="#EF4444" stroke="#B91C1C" stroke-width="3" stroke-linejoin="round"/>
          <ellipse cx="244" cy="488" rx="25" ry="11" fill="#FCA5A5" opacity="0.6"/>
          <path d="M272,482 L223,486" stroke="#B91C1C" stroke-width="2.5"/>
        </g>
      `
    }
  ],

  // ── 8. ACCESSORIES (8 Cute Gender-Neutral Options) ──
  accessories: [
    {
      id: 'none',
      name: 'No Accessory',
      svg: `<g class="part-acc-none"></g>`
    },
    {
      id: 'glasses',
      name: 'Funny Round Glasses',
      svg: `
        <g class="part-acc-glasses">
          <circle cx="158" cy="186" r="32" fill="none" stroke="#F59E0B" stroke-width="5"/>
          <circle cx="242" cy="186" r="32" fill="none" stroke="#F59E0B" stroke-width="5"/>
          <line x1="190" y1="186" x2="210" y2="186" stroke="#F59E0B" stroke-width="5"/>
          <!-- Lens glint -->
          <line x1="145" y1="172" x2="155" y2="162" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="229" y1="172" x2="239" y2="162" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
        </g>
      `
    },
    {
      id: 'headphones',
      name: 'Cool DJ Headphones',
      svg: `
        <g class="part-acc-headphones">
          <path d="M102,190 C102,90 298,90 298,190" fill="none" stroke="#3B82F6" stroke-width="8" stroke-linecap="round"/>
          <!-- Ear cups -->
          <rect x="88" y="160" width="22" height="48" rx="10" fill="#EF4444" stroke="#991B1B" stroke-width="3"/>
          <rect x="94" y="168" width="10" height="32" rx="4" fill="#FCA5A5"/>
          <rect x="290" y="160" width="22" height="48" rx="10" fill="#EF4444" stroke="#991B1B" stroke-width="3"/>
          <rect x="296" y="168" width="10" height="32" rx="4" fill="#FCA5A5"/>
        </g>
      `
    },
    {
      id: 'hat',
      name: 'Tiny Party Hat',
      svg: `
        <g class="part-acc-partyhat">
          <polygon points="200,30 170,115 230,115" fill="#EC4899" stroke="#9D174D" stroke-width="3"/>
          <!-- Colorful polka dots & stripes -->
          <path d="M176,98 L224,98" stroke="#FBBF24" stroke-width="6"/>
          <path d="M184,78 L216,78" stroke="#3B82F6" stroke-width="6"/>
          <path d="M192,56 L208,56" stroke="#10B981" stroke-width="6"/>
          <!-- Pom-pom -->
          <circle cx="200" cy="26" r="10" fill="#FBBF24" stroke="#D97706" stroke-width="2"/>
        </g>
      `
    },
    {
      id: 'crown',
      name: 'Cute Star Crown',
      svg: `
        <g class="part-acc-crown">
          <polygon points="152,118 160,82 178,102 200,72 222,102 240,82 248,118"
            fill="#FBBF24" stroke="#B45309" stroke-width="3" stroke-linejoin="round"/>
          <circle cx="200" cy="80" r="5" fill="#EF4444"/>
          <circle cx="160" cy="90" r="4" fill="#3B82F6"/>
          <circle cx="240" cy="90" r="4" fill="#10B981"/>
        </g>
      `
    },
    {
      id: 'star-clip',
      name: 'Glitter Star Clip',
      svg: `
        <g class="part-acc-starclip">
          <polygon points="140,110 144,122 156,122 147,129 150,141 140,134 130,141 133,129 124,122 136,122"
            fill="#FBBF24" stroke="#D97706" stroke-width="2.5"/>
          <circle cx="140" cy="126" r="3" fill="#FFFFFF"/>
        </g>
      `
    },
    {
      id: 'rainbow-badge',
      name: 'Rainbow Badge',
      svg: `
        <g class="part-acc-rainbowbadge">
          <ellipse cx="200" cy="326" rx="26" ry="16" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
          <path d="M185,330 A15,15 0 0,1 215,330" fill="none" stroke="#EF4444" stroke-width="3"/>
          <path d="M188,330 A12,12 0 0,1 212,330" fill="none" stroke="#F59E0B" stroke-width="3"/>
          <path d="M191,330 A9,9 0 0,1 209,330" fill="none" stroke="#10B981" stroke-width="3"/>
          <path d="M194,330 A6,6 0 0,1 206,330" fill="none" stroke="#3B82F6" stroke-width="3"/>
        </g>
      `
    },
    {
      id: 'bow',
      name: 'Cute Sweet Bow',
      svg: `
        <g class="part-acc-bow">
          <polygon points="200,120 172,104 172,136" fill="#F43F5E" stroke="#9F1239" stroke-width="3"/>
          <polygon points="200,120 228,104 228,136" fill="#F43F5E" stroke="#9F1239" stroke-width="3"/>
          <circle cx="200" cy="120" r="9" fill="#FB7185" stroke="#9F1239" stroke-width="2.5"/>
        </g>
      `
    },
    {
      id: 'balloon',
      name: 'Floating Balloon',
      svg: `
        <g class="part-acc-balloon">
          <path d="M316,360 Q340,300 348,260" fill="none" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="4,4"/>
          <ellipse cx="348" cy="220" rx="26" ry="32" fill="#EC4899" stroke="#9D174D" stroke-width="3"/>
          <polygon points="348,252 344,258 352,258" fill="#EC4899"/>
          <!-- Balloon shine -->
          <ellipse cx="338" cy="208" rx="6" ry="12" fill="#FFFFFF" opacity="0.6" transform="rotate(-20, 338, 208)"/>
        </g>
      `
    }
  ]
};
