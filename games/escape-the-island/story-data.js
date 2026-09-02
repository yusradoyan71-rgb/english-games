/**
 * ESCAPE THE ISLAND - Adventure & Story Engine Data
 * Designed for 7th & 8th Grade ESL/EFL Classroom Engagement
 */

// ============================================================
// 6 STORY MISSIONS PROGRESSION
// ============================================================
const ESCAPE_MISSIONS = [
  {
    id: 1,
    title: "FIND THE JUNGLE PATH",
    icon: "🌴",
    zone: "jungle",
    zoneName: "Emerald Jungle",
    tagline: "Navigate through the dense tropical forest",
    briefing: "You wake up on the stormy beach. Your boat is destroyed, and the coastline is surrounded by steep cliffs. The only way forward is through the thick jungle.",
    objective: "Answer the English challenges to hack through the thick vines and find your way.",
    questionsNeeded: 3,
    rewardItem: {
      id: "compass",
      name: "Brass Compass",
      icon: "🧭",
      description: "Points north and guides your expedition through the mysterious island."
    },
    bonusItem: {
      id: "map",
      name: "Island Map",
      icon: "🗺️",
      description: "An old nautical chart showing temple ruins and coastal docks."
    },
    successMessage: "You cleared the overgrown trail and found a brass compass and ancient map!"
  },
  {
    id: 2,
    title: "UNLOCK THE ANCIENT TEMPLE",
    icon: "🗿",
    zone: "temple",
    zoneName: "Ancient Stone Temple",
    tagline: "Decipher ancient stone runes to find the boat key",
    briefing: "Deep in the jungle stands a moss-covered temple. Inside, an ancient stone pedestal holds the key to the abandoned smuggler boat at the coast!",
    objective: "Solve the English grammar & vocabulary puzzles to unlock the temple gates.",
    questionsNeeded: 3,
    rewardItem: {
      id: "key",
      name: "Boat Ignition Key",
      icon: "🔑",
      description: "The brass key needed to start the rescue boat engine."
    },
    successMessage: "The temple stone gates slide open! You recovered the Boat Ignition Key!"
  },
  {
    id: 3,
    title: "SEARCH THE ABANDONED CAMP",
    icon: "🛖",
    zone: "camp",
    zoneName: "Abandoned Smuggler Camp",
    tagline: "Scavenge survival supplies and transmitter power",
    briefing: "You discover a hidden base camp left by previous explorers. Under a rusted workbench, you spot a heavy generator battery pack!",
    objective: "Complete English sentence challenges to scavenge the camp before the storm arrives.",
    questionsNeeded: 3,
    rewardItem: {
      id: "battery",
      name: "Heavy Duty Battery",
      icon: "🔋",
      description: "Provides electrical power to the mountain radio tower."
    },
    successMessage: "Camp searched successfully! You secured the High-Capacity Battery Pack!"
  },
  {
    id: 4,
    title: "REPAIR THE RADIO TOWER",
    icon: "📻",
    zone: "radio_tower",
    zoneName: "High Ridge Radio Tower",
    tagline: "Connect power and align the emergency antenna",
    briefing: "Perched atop the highest cliff is a rusty communications mast. With your new battery and radio relays, you can broadcast an emergency SOS signal across the Pacific!",
    objective: "Answer English questions accurately to wire the frequencies and transmitter.",
    questionsNeeded: 3,
    rewardItem: {
      id: "radio",
      name: "Long-Range Radio",
      icon: "📻",
      description: "Armed with emergency broadcast frequencies to call for rescue."
    },
    successMessage: "The tower hums to life with blue electric sparks! Emergency frequency tuned!"
  },
  {
    id: 5,
    title: "REACH THE ESCAPE BOAT",
    icon: "🚤",
    zone: "boat_dock",
    zoneName: "Secret Coastal Dock",
    tagline: "Prepare the boat and fuel up for the ocean crossing",
    briefing: "You rush down to the hidden rocky cove where a rugged motorboat is tethered. But the fuel tank is empty! You must scavenge the emergency fuel drum.",
    objective: "Answer challenges to fuel up the boat and start the engine.",
    questionsNeeded: 3,
    rewardItem: {
      id: "fuel",
      name: "Emergency Fuel Canister",
      icon: "⛽",
      description: "Full tank of high-octane nautical fuel."
    },
    successMessage: "Boat fueled and ready! Engine roars to life with a deep rumble!"
  },
  {
    id: 6,
    title: "CALL FOR RESCUE & ESCAPE!",
    icon: "🚁",
    zone: "rescue_zone",
    zoneName: "Open Ocean & Rescue Point",
    tagline: "Transmit Mayday SOS and rendezvous with the rescue chopper",
    briefing: "You launch the boat into open waters. Giant waves crash around you! Transmit your final SOS coordinates so the search helicopter can pinpoint your location!",
    objective: "Master the final English questions to guide the rescue helicopter!",
    questionsNeeded: 3,
    rewardItem: {
      id: "flare",
      name: "Signal Flare",
      icon: "🎆",
      description: "Bright red flare illuminating the ocean for the rescue team."
    },
    successMessage: "Mayday received! The rescue helicopter is descending with emergency winches!"
  }
];

// ============================================================
// ISLAND MAP NODES (Locations with coordinates on map canvas)
// ============================================================
const MAP_LOCATIONS = [
  {
    id: "beach",
    missionId: 0,
    name: "Sandy Beach (Crash Site)",
    shortName: "Beach",
    icon: "🏝️",
    x: 14, // percentage
    y: 72,
    color: "#38bdf8",
    bgGradient: "linear-gradient(135deg, #0284c7, #38bdf8)",
    description: "The stormy beach where you woke up next to the plane wreckage."
  },
  {
    id: "jungle",
    missionId: 1,
    name: "Emerald Jungle",
    shortName: "Jungle",
    icon: "🌴",
    x: 28,
    y: 48,
    color: "#22c55e",
    bgGradient: "linear-gradient(135deg, #15803d, #22c55e)",
    description: "Dense, misty jungle with towering ferns and ancient trails."
  },
  {
    id: "temple",
    missionId: 2,
    name: "Ancient Stone Temple",
    shortName: "Temple",
    icon: "🗿",
    x: 48,
    y: 30,
    color: "#eab308",
    bgGradient: "linear-gradient(135deg, #b45309, #eab308)",
    description: "Mysterious stone ruins holding the boat ignition key."
  },
  {
    id: "camp",
    missionId: 3,
    name: "Abandoned Smuggler Camp",
    shortName: "Camp",
    icon: "🛖",
    x: 64,
    y: 54,
    color: "#f97316",
    bgGradient: "linear-gradient(135deg, #c2410c, #f97316)",
    description: "Old wooden cabins hidden under hanging moss and vines."
  },
  {
    id: "radio_tower",
    missionId: 4,
    name: "High Ridge Radio Tower",
    shortName: "Radio Tower",
    icon: "📻",
    x: 76,
    y: 22,
    color: "#a855f7",
    bgGradient: "linear-gradient(135deg, #7e22ce, #a855f7)",
    description: "Rusted communications mast atop the windy mountain ridge."
  },
  {
    id: "boat_dock",
    missionId: 5,
    name: "Secret Escape Boat Dock",
    shortName: "Boat Dock",
    icon: "🚤",
    x: 86,
    y: 74,
    color: "#06b6d4",
    bgGradient: "linear-gradient(135deg, #0e7490, #06b6d4)",
    description: "A hidden rocky cove where the sturdy escape boat awaits."
  },
  {
    id: "rescue_zone",
    missionId: 6,
    name: "Helicopter Rescue Point",
    shortName: "Rescue Zone",
    icon: "🚁",
    x: 92,
    y: 16,
    color: "#ec4899",
    bgGradient: "linear-gradient(135deg, #be185d, #ec4899)",
    description: "Open sky where the emergency coast guard helicopter approaches!"
  }
];

// ============================================================
// ESCAPE ITEMS INVENTORY DEFINITION
// ============================================================
const ALL_ESCAPE_ITEMS = [
  { id: "map", name: "Island Map", icon: "🗺️", locked: true },
  { id: "compass", name: "Brass Compass", icon: "🧭", locked: true },
  { id: "key", name: "Boat Key", icon: "🔑", locked: true },
  { id: "battery", name: "Battery Pack", icon: "🔋", locked: true },
  { id: "radio", name: "Emergency Radio", icon: "📻", locked: true },
  { id: "fuel", name: "Boat Fuel", icon: "⛽", locked: true }
];

// Intro Story Scenes
const STORY_INTRO_STEPS = [
  { text: "DAY 1 — 06:00 AM", subtext: "Somewhere in the South Pacific Ocean..." },
  { text: "You wake up stranded on a mysterious uncharted island.", subtext: "Waves crash violently against sharp volcanic rocks." },
  { text: "Your ship is destroyed. The radio battery is almost dead.", subtext: "Dark storm clouds are gathering on the horizon." },
  { text: "To escape, you must complete 6 survival missions across the island.", subtext: "Find the key, power the radio, launch the boat, and call for rescue!" }
];
