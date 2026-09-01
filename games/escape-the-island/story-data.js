/**
 * ESCAPE THE ISLAND - Story & Adventure Engine Data
 * Includes:
 *  - 10 Island Locations with requirements & unlock paths
 *  - 16 Mechanical Items & Recipes
 *  - 3 Streamlined Escape Blueprints (Boat, Radio, Helicopter)
 *  - 30+ Snappy Branching Choices (A/B)
 *  - 15 Island Hazard Event Cards
 *  - Final Escape Challenges
 *  - 35-Minute Classroom Pacing Controls
 */

const ISLAND_LOCATIONS = {
  beach: {
    id: "beach",
    name: "Sandy Beach",
    icon: "🏖️",
    description: "The crash site. Crystal waters, scattered plane wreckage, and the sound of waves.",
    initialStatus: "available", // available, locked, explored
    requiredItems: [],
    unlocks: ["jungle", "shipwreck"],
    rewardsPool: ["wood", "rope", "map", "compass"],
    storySnippet: "Waves wash over the wreckage. You scan the shore for supplies."
  },
  jungle: {
    id: "jungle",
    name: "Emerald Jungle",
    icon: "🌴",
    description: "A dense, humid forest filled with exotic birds, thick vines, and ancient trails.",
    initialStatus: "locked",
    requiredItems: [],
    unlocks: ["hut", "waterfall", "cave"],
    rewardsPool: ["rope", "food", "wood", "fire"],
    storySnippet: "Tall palm trees and thick vines block the sunlight. Mysterious sounds echo ahead."
  },
  shipwreck: {
    id: "shipwreck",
    name: "Sunken Galleon",
    icon: "🚢",
    description: "An old wooden cargo ship lodged between sharp coral reefs.",
    initialStatus: "locked",
    requiredItems: [], // Can enter, but deeper exploration benefits from hook or rope
    unlocks: ["escape_dock"],
    rewardsPool: ["fuel", "tool", "wood", "hook"],
    storySnippet: "The creaking wooden hull is filled with rusted nautical machinery and barrels."
  },
  hut: {
    id: "hut",
    name: "Abandoned Hut",
    icon: "🏚️",
    description: "A mysterious smuggler's cabin covered in moss. The heavy front door is locked.",
    initialStatus: "locked",
    requiredItems: ["key"], // requires key to unlock
    unlocks: ["radio_tower"],
    rewardsPool: ["radio", "battery", "map", "toolbox"],
    storySnippet: "Inside the dusty cabin, old radio schematics and gear lie on a wooden table."
  },
  cave: {
    id: "cave",
    name: "Dark Crystal Cave",
    icon: "🪨",
    description: "A deep underground cavern. Without light, you cannot venture past the entrance.",
    initialStatus: "locked",
    requiredItems: ["flashlight"], // or fire
    altRequiredItems: ["fire"],
    unlocks: ["volcano", "mountain"],
    rewardsPool: ["battery", "rope", "water", "key"],
    storySnippet: "Echoing water drops and glittering crystals reveal ancient carvings on the walls."
  },
  mountain: {
    id: "mountain",
    name: "Mist Peak",
    icon: "⛰️",
    description: "A towering rocky mountain overlooking the entire island.",
    initialStatus: "locked",
    requiredItems: ["rope"],
    unlocks: ["radio_tower", "escape_dock"],
    rewardsPool: ["map", "battery", "tool"],
    storySnippet: "From the windy peak, you can see rescue aircraft corridors and the whole archipelago!"
  },
  waterfall: {
    id: "waterfall",
    name: "Hidden Falls",
    icon: "🌊",
    description: "A roaring freshwater waterfall cascading into a crystal clear swimming pool.",
    initialStatus: "locked",
    requiredItems: [],
    unlocks: ["cave", "hut"],
    rewardsPool: ["water", "food", "key", "wood"],
    storySnippet: "Pure, refreshing drinking water pours endlessly. Behind the falls lies a secret path."
  },
  volcano: {
    id: "volcano",
    name: "Obsidian Crater",
    icon: "🌋",
    description: "A smoldering volcanic ridge. Dangerous, but filled with rare minerals and shortcuts.",
    initialStatus: "locked",
    requiredItems: ["compass"],
    altRequiredItems: ["map"],
    unlocks: ["radio_tower", "escape_dock"],
    rewardsPool: ["fire", "fuel", "tool"],
    storySnippet: "Steam hisses from deep fissures. Red-hot pumice lines the narrow trail."
  },
  radio_tower: {
    id: "radio_tower",
    name: "Ancient Radio Tower",
    icon: "📡",
    description: "A tall rusted steel mast perched high on the island's central ridge.",
    initialStatus: "locked",
    requiredItems: ["tool"],
    unlocks: ["escape_dock"],
    rewardsPool: ["radio", "battery"],
    storySnippet: "The antenna is still standing, waiting for a power source and tuning to send an SOS."
  },
  escape_dock: {
    id: "escape_dock",
    name: "Escape Cove",
    icon: "🚁",
    description: "A sheltered lagoon dock with a launch pad and calm waters for final departure.",
    initialStatus: "locked",
    requiredItems: [],
    unlocks: [],
    rewardsPool: ["fuel", "boat_frame"],
    storySnippet: "The ultimate departure point! Build your boat, call the chopper, or send the beacon."
  }
};

const GAME_ITEMS = {
  wood: {
    id: "wood",
    name: "Sturdy Timber",
    icon: "🪵",
    category: "construction",
    description: "Dense cedar logs essential for repairing the escape boat.",
    usedIn: "boat"
  },
  rope: {
    id: "rope",
    name: "Climbing Rope",
    icon: "🪢",
    category: "equipment",
    description: "Strong braided cord. Allows scaling Mist Peak and binding the raft.",
    usedIn: ["mountain", "boat"]
  },
  fuel: {
    id: "fuel",
    name: "Aviation Fuel",
    icon: "⛽",
    category: "energy",
    description: "A sealed red canister of high-octane fuel to power the boat engine.",
    usedIn: "boat"
  },
  tool: {
    id: "tool",
    name: "Wrench & Toolkit",
    icon: "🔧",
    category: "tools",
    description: "Mechanical wrench to fix boat motors and radio antennas.",
    usedIn: ["boat", "radio_rescue"]
  },
  radio: {
    id: "radio",
    name: "SOS Radio Transceiver",
    icon: "📻",
    category: "communications",
    description: "Emergency broadcast radio capable of transmitting on 121.5 MHz.",
    usedIn: "radio_rescue"
  },
  battery: {
    id: "battery",
    name: "Lithium Battery",
    icon: "🔋",
    category: "energy",
    description: "Charged power cell to energize the radio tower and flashlight.",
    usedIn: ["radio_rescue", "helicopter"]
  },
  map: {
    id: "map",
    name: "Island Topo Chart",
    icon: "🗺️",
    category: "navigation",
    description: "Detailed aerial chart of air corridors, reefs, and landing zones.",
    usedIn: ["helicopter", "navigation"]
  },
  fire: {
    id: "fire",
    name: "Signal Flare & Flint",
    icon: "🔥",
    category: "signals",
    description: "Ignition kit to light cave paths and emergency rescue signal fires.",
    usedIn: ["helicopter", "cave"]
  },
  key: {
    id: "key",
    name: "Brass Smuggler Key",
    icon: "🔑",
    category: "keys",
    description: "Heavy antique key that unlocks the Abandoned Hut.",
    usedIn: "hut"
  },
  flashlight: {
    id: "flashlight",
    name: "LED Flashlight",
    icon: "🔦",
    category: "equipment",
    description: "High-beam torch that illuminates the Dark Crystal Cave.",
    usedIn: "cave"
  },
  compass: {
    id: "compass",
    name: "Brass Compass",
    icon: "🧭",
    category: "navigation",
    description: "Magnetic guide that helps avoid getting lost in swamps and jungles.",
    usedIn: "navigation"
  },
  water: {
    id: "water",
    name: "Fresh Spring Water",
    icon: "💧",
    category: "consumable",
    description: "Pure hydration! Instantly restores +1 Team Energy (❤️).",
    usedIn: "energy_restore"
  },
  food: {
    id: "food",
    name: "Tropical Rations",
    icon: "🍎",
    category: "consumable",
    description: "Nutritious wild fruits. Instantly restores +1 Team Energy (❤️).",
    usedIn: "energy_restore"
  },
  hook: {
    id: "hook",
    name: "Grappling Hook",
    icon: "🪝",
    category: "equipment",
    description: "Forged hook on a line for pulling shipwreck items from deep water.",
    usedIn: "salvage"
  },
  toolbox: {
    id: "toolbox",
    name: "Master Toolbox",
    icon: "🧰",
    category: "tools",
    description: "Full mechanic set. Works as an all-in-one repair booster.",
    usedIn: ["boat", "radio_rescue"]
  },
  boat_frame: {
    id: "boat_frame",
    name: "Raft Keel",
    icon: "🛶",
    category: "construction",
    description: "The sturdy base hull of the escape boat.",
    usedIn: "boat"
  }
};

/**
 * STREAMLINED ESCAPE BLUEPRINTS
 * Each requires 3-4 meaningful items.
 */
const ESCAPE_BLUEPRINTS = {
  boat: {
    id: "boat",
    name: "Ocean Escape Boat",
    icon: "🛶",
    requiredItems: ["wood", "rope", "fuel", "tool"],
    locationRequired: "beach", // or shipwreck or escape_dock
    escapeStory: "You assemble the sturdy timbers, lash them with heavy rope, fill the fuel tank, and tune the engine. The craft roars to life and glides safely out toward the open sea!"
  },
  radio_rescue: {
    id: "radio_rescue",
    name: "Radio SOS Beacon",
    icon: "📡",
    requiredItems: ["radio", "battery", "tool"],
    locationRequired: "radio_tower", // or mountain
    escapeStory: "You wire the battery to the high mast and calibrate the frequency. A crackle of static breaks: 'MAYDAY RECEIVED! Coast Guard cutter en route!' A patrol vessel arrives at the cove!"
  },
  helicopter: {
    id: "helicopter",
    name: "Helicopter Signal Extraction",
    icon: "🚁",
    requiredItems: ["map", "battery", "fire"],
    locationRequired: "mountain", // or escape_dock
    escapeStory: "You align the landing coordinates from your map, flash the battery beacon, and light the triangle of signal fires. The rescue helicopter touches down right on Mist Peak!"
  }
};

/**
 * 30+ SNAPPY BRANCHING CHOICES
 * Fast 5-10 second read time.
 * Real, concrete consequences (items, energy, location unlocks, or shortcuts).
 */
const BRANCHING_CHOICES = [
  {
    id: "choice-01",
    title: "Fork in the Jungle Trail",
    text: "The path splits into two distinct routes. Where do you lead your team?",
    optionA: {
      label: "🌴 Overgrown Jungle Route",
      resultText: "You hack through thick vines and find an old brass compass!",
      rewardItem: "compass",
      energyDelta: 0,
      unlockLocation: "jungle"
    },
    optionB: {
      label: "🏖️ Coastline Reef Trail",
      resultText: "You walk along the shore and spot the Sunken Galleon on the reef!",
      rewardItem: null,
      energyDelta: 0,
      unlockLocation: "shipwreck"
    }
  },
  {
    id: "choice-02",
    title: "Steep Waterfall Cliff",
    text: "A 20-meter cliff blocks your path near the waterfall.",
    optionA: {
      label: "🧗 Climb the Slippery Rock Face",
      resultText: "You scramble to the top and find a coil of climbing rope! (-1 ❤️ from exhaustion)",
      rewardItem: "rope",
      energyDelta: -1,
      unlockLocation: "mountain"
    },
    optionB: {
      label: "🌊 Walk Behind the Water Curtain",
      resultText: "Behind the roaring water is a hidden cave! You drink pure water (+1 ❤️).",
      rewardItem: "water",
      energyDelta: 1,
      unlockLocation: "cave"
    }
  },
  {
    id: "choice-03",
    title: "Sunken Galleon Cargo Hold",
    text: "Water is rising in the lower deck of the shipwreck.",
    optionA: {
      label: "🤿 Dive into the Flooded Engine Room",
      resultText: "You retrieve a sealed canister of aviation fuel! Perfect for the boat.",
      rewardItem: "fuel",
      energyDelta: 0,
      unlockLocation: null
    },
    optionB: {
      label: "🧰 Search the Captain's Quarters",
      resultText: "You pry open a metal locker and find a heavy-duty wrench & toolkit!",
      rewardItem: "tool",
      energyDelta: 0,
      unlockLocation: null
    }
  },
  {
    id: "choice-04",
    title: "Nightfall is Approaching",
    text: "The sun is sinking below the ocean horizon. Shadows grow long.",
    optionA: {
      label: "⛺ Set Up Camp & Build a Fire",
      resultText: "You rest safely by the warm fire. The team recovers energy (+1 ❤️)!",
      rewardItem: "fire",
      energyDelta: 1,
      unlockLocation: null
    },
    optionB: {
      label: "🔦 Push Ahead in the Dark",
      resultText: "Your flashlight spots an old smuggler's key near the roots!",
      rewardItem: "key",
      energyDelta: 0,
      unlockLocation: "hut"
    }
  },
  {
    id: "choice-05",
    title: "The Smuggler's Locked Chest",
    text: "In the abandoned hut, you discover an iron-bound footlocker.",
    optionA: {
      label: "🔑 Use the Key to Unlock It",
      resultText: "Click! Inside sits an emergency SOS radio transceiver!",
      rewardItem: "radio",
      energyDelta: 0,
      unlockLocation: "radio_tower"
    },
    optionB: {
      label: "🗺️ Examine the Desk Documents",
      resultText: "You uncover a detailed topographical map of island landing pads!",
      rewardItem: "map",
      energyDelta: 0,
      unlockLocation: "escape_dock"
    }
  },
  {
    id: "choice-06",
    title: "Deep Cave Chasm",
    text: "A dark pit divides the cave. A narrow natural bridge crosses it.",
    optionA: {
      label: "🚶 Cross the Narrow Stone Bridge",
      resultText: "Careful footing! On the other side, you find an intact lithium battery!",
      rewardItem: "battery",
      energyDelta: 0,
      unlockLocation: "volcano"
    },
    optionB: {
      label: "🔍 Search the Entrance Walls",
      resultText: "You gather flint and dry kindling for starting emergency fires.",
      rewardItem: "fire",
      energyDelta: 0,
      unlockLocation: null
    }
  },
  {
    id: "choice-07",
    title: "Volcanic Fissure Shortcut",
    text: "Hot sulfur steam rises from a narrow gorge that leads directly to the mast.",
    optionA: {
      label: "⚠️ Sprint Through the Volcanic Pass",
      resultText: "Fast sprint! You reach the radio tower in record time, but the heat burns (-1 ❤️).",
      rewardItem: "fuel",
      energyDelta: -1,
      unlockLocation: "radio_tower"
    },
    optionB: {
      label: "🛣️ Take the Safer Forest Detour",
      resultText: "Safe and sound. You forage sweet mangoes and papayas along the trail (+1 ❤️).",
      rewardItem: "food",
      energyDelta: 1,
      unlockLocation: null
    }
  },
  {
    id: "choice-08",
    title: "Floating Debris in the Cove",
    text: "A bundle of wooden planks is drifting 30 meters off the beach.",
    optionA: {
      label: "🏊 Swim Out to Retrieve It",
      resultText: "You pull in sturdy cedar timber for building the boat hull!",
      rewardItem: "wood",
      energyDelta: 0,
      unlockLocation: "escape_dock"
    },
    optionB: {
      label: "🪝 Throw a Grappling Line",
      resultText: "Hooked! You reel in a waterproof bag containing a heavy mechanic's toolbox!",
      rewardItem: "toolbox",
      energyDelta: 0,
      unlockLocation: null
    }
  },
  {
    id: "choice-09",
    title: "Radio Mast Static",
    text: "The transmitter at the radio tower is humming, but the signal is faint.",
    optionA: {
      label: "🔧 Realign the High Antenna",
      resultText: "You tighten the antenna clamps. The broadcast range extends across the ocean!",
      rewardItem: "tool",
      energyDelta: 0,
      unlockLocation: "escape_dock"
    },
    optionB: {
      label: "🔋 Double the Battery Voltage",
      resultText: "High power mode activated! A clear transmission channel opens.",
      rewardItem: "battery",
      energyDelta: 0,
      unlockLocation: null
    }
  },
  {
    id: "choice-10",
    title: "Strange Footprints in the Sand",
    text: "Fresh tracks lead toward the abandoned hut.",
    optionA: {
      label: "👣 Follow the Footprints",
      resultText: "The tracks lead to a hidden stash box containing an LED flashlight!",
      rewardItem: "flashlight",
      energyDelta: 0,
      unlockLocation: "cave"
    },
    optionB: {
      label: "🏖️ Return to Fortify the Beach Camp",
      resultText: "You gather driftwood and build a solid shelter for the night (+1 ❤️).",
      rewardItem: "wood",
      energyDelta: 1,
      unlockLocation: null
    }
  }
];

/**
 * 15 ISLAND HAZARD & SURPRISE EVENT CARDS
 * Max 3-4 per 35-minute game to maintain quick pacing.
 */
const ISLAND_EVENTS = [
  {
    id: "event-01",
    title: "🌧️ TROPICAL SQUALL!",
    icon: "🌧️",
    text: "Sudden torrential rain and gale winds hammer the island! Water threatens your supplies.",
    optionA: {
      label: "🛡️ Cover supplies with tarps",
      outcome: "Success! All gear is kept dry, but your team is soaked and tired (-1 ❤️).",
      energyDelta: -1,
      rewardItem: null
    },
    optionB: {
      label: "🪣 Collect rainwater in barrels",
      outcome: "Great thinking! You collect 10 liters of clean drinking water (+1 ❤️)!",
      energyDelta: 1,
      rewardItem: "water"
    }
  },
  {
    id: "event-02",
    title: "🐍 VENOMOUS VIPER!",
    icon: "🐍",
    text: "A bright emerald tree viper is coiled across the only climbing branch.",
    optionA: {
      label: "🥢 Use a long stick to gently move it",
      outcome: "Smart and calm! The snake slithers harmlessly away into the canopy.",
      energyDelta: 0,
      rewardItem: null
    },
    optionB: {
      label: "🏃 Throw a stone and sprint past",
      outcome: "The snake strikes and grazes your boot! You escape in a panic (-1 ❤️).",
      energyDelta: -1,
      rewardItem: null
    }
  },
  {
    id: "event-03",
    title: "🦈 SHARK AT THE REEF!",
    icon: "🦈",
    text: "A large blacktip reef shark circles the supply crate floating near the sandbar.",
    optionA: {
      label: "⏳ Wait patiently for it to swim away",
      outcome: "Patience pays off! The shark departs and you safely grab the crate containing fuel!",
      energyDelta: 0,
      rewardItem: "fuel"
    },
    optionB: {
      label: "🌊 Splash water to scare it off",
      outcome: "The splashing makes it agitated! You scramble back to shore without the item.",
      energyDelta: 0,
      rewardItem: null
    }
  },
  {
    id: "event-04",
    title: "🌋 VOLCANIC TREMOR!",
    icon: "🌋",
    text: "The ground shakes violently! Loose rocks tumble down the slope of Mist Peak.",
    optionA: {
      label: "🛡️ Take cover under a rocky ledge",
      outcome: "You safely dodge the rockslide and discover a dislodged lithium battery!",
      energyDelta: 0,
      rewardItem: "battery"
    },
    optionB: {
      label: "🏃 Run downhill toward the beach",
      outcome: "You trip over exposed tree roots while sprinting (-1 ❤️).",
      energyDelta: -1,
      rewardItem: null
    }
  },
  {
    id: "event-05",
    title: "🐒 MISCHIEVOUS MONKEYS!",
    icon: "🐒",
    text: "A troop of curious macaque monkeys swarms your pack and tries to steal shiny tools!",
    optionA: {
      label: "🍌 Distract them with sweet bananas",
      outcome: "They happily trade a shiny brass key for the fruit!",
      energyDelta: 0,
      rewardItem: "key"
    },
    optionB: {
      label: "🗣️ Shout and wave your arms",
      outcome: "The monkeys scatter into the trees, leaving all your equipment safe.",
      energyDelta: 0,
      rewardItem: null
    }
  },
  {
    id: "event-06",
    title: "📦 WASHED ASHORE CRATE!",
    icon: "📦",
    text: "An emergency airdrop crate marked with international rescue symbols is found in the tide!",
    optionA: {
      label: "🔨 Pry it open immediately",
      outcome: "Jackpot! Inside is an intact emergency SOS radio and dry rations (+1 ❤️)!",
      energyDelta: 1,
      rewardItem: "radio"
    },
    optionB: {
      label: "🧭 Carry it to base camp first",
      outcome: "You secure the crate and find a heavy-duty climbing rope inside!",
      energyDelta: 0,
      rewardItem: "rope"
    }
  },
  {
    id: "event-07",
    title: "🌫️ COASTAL SEA FOG!",
    icon: "🌫️",
    text: "A thick blanket of fog rolls in, reducing visibility to less than 3 meters.",
    optionA: {
      label: "🧭 Use your compass to navigate slowly",
      outcome: "Perfect orientation! You stay on track and find the trail to the radio tower.",
      energyDelta: 0,
      rewardItem: "map"
    },
    optionB: {
      label: "🔥 Light a bright bonfire and wait",
      outcome: "The warm fire provides comfort and safety (+1 ❤️).",
      energyDelta: 1,
      rewardItem: "fire"
    }
  }
];

/**
 * HIGH-STAKES FINAL ESCAPE CHALLENGES
 */
const FINAL_ESCAPE_CHALLENGES = [
  {
    id: "final-01",
    title: "FINAL ESCAPE: LAUNCH THE RESCUE CRAFT",
    prompt: "Choose the sentence that is 100% grammatically CORRECT to signal the final launch:",
    options: [
      "We have successfully repaired the boat and we are ready to leave.",
      "We has successfully repair the boat and ready leaving.",
      "We have repair successfully the boat and was leaving.",
      "We successfully are repaired the boat and leaves."
    ],
    correctIndex: 0,
    explanation: "Present perfect 'have successfully repaired' + 'are ready to leave' is correct.",
    rescueMessage: "The engine roars! Your boat cuts through the ocean surf toward the sunrise! ESCAPE ACHIEVED!"
  },
  {
    id: "final-02",
    title: "FINAL ESCAPE: BROADCAST THE SOS COORDINATES",
    prompt: "Which transmission properly uses modal verbs and conditional structure?",
    options: [
      "If you receive our signal, you must dispatch a rescue team to the north cove immediately.",
      "If you received our signal, you dispatch must a rescue team now.",
      "If you will receive signal, you should dispatching rescue team.",
      "If you receives signal, you can to dispatch team."
    ],
    correctIndex: 0,
    explanation: "First conditional: 'If you receive... you must dispatch...' is grammatically flawless.",
    rescueMessage: "Radio confirms: 'Coordinates locked! Navy cutter arriving in 3 minutes!' ESCAPE ACHIEVED!"
  },
  {
    id: "final-03",
    title: "FINAL ESCAPE: HELICOPTER BEACON SIGNAL",
    prompt: "Choose the correct past and present perfect combination:",
    options: [
      "Although we struggled on the island for days, we have finally found our way home.",
      "Although we struggle on the island yesterday, we has find our way.",
      "Although we were struggle for days, we have finded our way home.",
      "Although we struggled, we have finally find our way home."
    ],
    correctIndex: 0,
    explanation: "Past simple 'struggled' + Present perfect 'have finally found' correctly links the adventure.",
    rescueMessage: "The helicopter lowers the rescue winch and hoists your team to safety! ESCAPE ACHIEVED!"
  }
];

// Export for Node/Tests and browser global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ISLAND_LOCATIONS,
    GAME_ITEMS,
    ESCAPE_BLUEPRINTS,
    BRANCHING_CHOICES,
    ISLAND_EVENTS,
    FINAL_ESCAPE_CHALLENGES
  };
}
