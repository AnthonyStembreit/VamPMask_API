const { Trait } = require('../models');

const traitData = [
    {
        name: "Agile",
        type: "Physical",
        sub_type: "Miscellaneous Physical",
        negative_trait: false,
        description: "You have a well-honed and flexible body. You can bend, twist, run and jump with ease.",
        uses: "Uses: Acrobatics. Athletics. Competitive events. Dodging."
    },
    {
        name: "Brawny",
        type: "Physical",
        sub_type: "Strength-related",
        negative_trait: false,
        description: "Bulky muscular strength.",
        uses: "Uses: Punching, kicking or grappling in combat when your goal is to inflict damage. Power-lifting. All feats of strength. Potence."
    },
    {
        name: "Brutal",
        type: "Physical",
        negative_trait: false,
        description: "You are capable of taking nearly any action in order to survive.",
        uses: "Uses: Fighting an obviously superior enemy."
    },
    {
        name: "Dexterous",
        type: "Physical",
        sub_type: "Dexterity-related",
        negative_trait: false,
        description: "General adroitness and skill involving the use of one’s hands",
        uses: "Uses: Weapon-oriented combat (Melee or Firearms). Pickpocketing. Punch-ing. Celerity."
    },
    {
        name: "Enduring",
        type: "Physical",
        sub_type: "Stamina-related",
        negative_trait: false,
        description: "A persistent sturdiness against physical opposition.",
        uses: "Uses: When your survival is at stake, this Trait is a good one to risk as a second, or successive, bid. Fortitude."
    },
    {
        name: "Energetic",
        type: "Physical",
        sub_type: "Miscellaneous Physical",
        negative_trait: false,
        description: "A powerful force of spirit. A strong internal drive propels you and, in physical situations, you can draw on a deep reservoir of enthusiasm and zeal.",
        uses: "Uses: Combat."
    },
    {
        name: "Ferocious",
        type: "Physical",
        sub_type: "Strength-related",
        negative_trait: false,
        description: "Possession of brutal intensity and extreme physical determination.",
        uses: "Uses: Any time that you intend to do serious harm. When in frenzy. Potence."
    },
    {
        name: "Graceful",
        type: "Physical",
        sub_type: "Dexterity-related",
        negative_trait: false,
        description: "Control and balance in the motion and use of the entire body.",
        uses: "Uses: Combat defense. Whenever you might lose your balance. Celerity."
    },
    {
        name: "Lithe",
        type: "Physical",
        sub_type: "Dexterity-related",
        negative_trait: false,
        description: "Characterized by flexibility and suppleness.",
        uses: "Uses: Acrobatics, gymnastics, dodging, dancing and Celerity."
    },
    {
        name: "Nimble",
        type: "Physical",
        sub_type: "Dexterity-related",
        negative_trait: false,
        description: "Light and skillful; able to make agile movements.",
        uses: "Uses: Dodging, jumping, rolling, acrobatics. Hand-to-hand combat. Celerity."
    },
    {
        name: "Quick",
        type: "Physical",
        sub_type: "Dexterity-related",
        negative_trait: false,
        description: "Speedy, with a fast reaction time.",
        uses: "Uses: Defending against a surprise attack. Running, dodging, attacking. Celerity"
    },
    {
        name: "Resilient",
        type: "Physical",
        sub_type: "Stamina-related",
        negative_trait: false,
        description: "Characterized by strength of health; able to recover quickly from bodily harm. Fortitude.",
        uses: "Uses: Resisting adverse environments. Defending against damage in an attack."
    },
    {
        name: "Robust",
        type: "Physical",
        sub_type: "Stamina-related",
        negative_trait: false,
        description: "Resistant to physical harm and damage.",
        uses: "Uses: Defending against damage in an attack. Endurance-related actions that could take place over a period of time. Fortitude."
    },
    {
        name: "Rugged",
        type: "Physical",
        sub_type: "Stamina-related",
        negative_trait: false,
        description: "Hardy, rough and brutally healthy. Able to shrug off wounds and pain to continue struggling",
        uses: "Uses: When resisting damage, any challenge that you enter while injured. Earth Melding. Fortitude."
    },
    {
        name: "Stalwart",
        type: "Physical",
        sub_type: "Strength-related",
        negative_trait: false,
        description: "Physically strong and uncompromising against opposition.",
        uses: "Uses: Resisting damage, or when standing your ground against overwhelm-ing odds or a superior foe. Potence."
    },
    {
        name: "Steady",
        type: "Physical",
        sub_type:  "Miscellaneous Physical",
        negative_trait: false,
        description: "More than simply physically dependable — controlled, unfaltering and balanced. You have firm mastery over your efforts.",
        uses: "Uses: Weapon attacks. Fighting in exotic locations."
    },
    {
        name: "Tenacious",
        type: "Physical",
        sub_type: "Miscellaneous Physical",
        negative_trait: false,
        description: "hysically determined through force of will.",
        uses: "Uses: Second or subsequent Physical Challenge."
    },
    {
        name: "Tireless",
        type: "Physical",
        sub_type: "Stamina-related",
        negative_trait: false,
        description: "You have a runner’s stamina — you are less taxed by physical efforts than ordinary people.",
        uses: "Uses: Any endurance-related challenge, second or subsequent Physical Challenge with the same foe or foes. Fortitude."
    },
    {
        name: "Tough",
        type: "Physical",
        sub_type: "Strength-related",
        negative_trait: false,
        description: "A harsh, aggressive attitude and a reluctance to submit.",
        uses: "Uses: Whenever you’re wounded. Potence."
    },
    {
        name: "Vigorous",
        type: "Physical",
        sub_type: "Miscellaneous Physical",
        negative_trait: false,
        description: "A combination of energy, power, intensity and resistance to harm.",
        uses: "Uses: Combat and athletic challenges when you’re on the defensive."
    },
    {
        name: "Wiry",
        type: "Physical",
        sub_type: "Strength-related",
        negative_trait: false,
        description: "Tight, streamlined, muscular strength.",
        uses: "Uses: Punching, kicking or grappling on combat. Acrobatic movements. Endurance lifting. Potence."
    },
    {
        name: "Clumsy",
        type: "Physical",
        negative_trait: true,
        description: "Lacking physical coordination, balance and grace. You are prone to stumbling and dropping objects.",
    },
    {
        name: "Cowardly",
        type: "Physical",
        negative_trait: true,
        description: "In threatening situations, saving your own neck is all that is impor- tant. You might even flee when you have the upper hand, just out of habit.",
    },
    {
        name: "Decrepit",
        type: "Physical",
        negative_trait: true,
        description: "You move and act as if you are old and infirm. You recover from physical damage slowly, you are unable to apply full muscular strength and you tire easily.",
    },
    {
        name: "Delicate",
        type: "Physical",
        negative_trait: true,
        description: "Frail and weak in structure; you are damaged easily by physical harm.",
    },
    {
        name: "Docile",
        type: "Physical",
        negative_trait: true,
        description: "The opposite of the Ferocious and Tenacious Traits. You lack physical persistence, and you tend to submit rather than fighting long battles.",
    },
    {
        name: "Flabby",
        type: "Physical",
        negative_trait: true,
        description: "Your muscles are underdeveloped. You cannot apply your strength well against resistance.",
    },
    {
        name: "Lame",
        type: "Physical",
        negative_trait: true,
        description: "You are disabled in one or more limbs. The handicap can be as obvious as a missing leg or as subtle as a dysfunctional arm.",
    },
    {
        name: "Lethargic",
        type: "Physical",
        negative_trait: true,
        description: "Slow and drowsy. You suffer from a serious lack of energy or motivation.",
    },
    {
        name: "Puny",
        type: "Physical",
        negative_trait: true,
        description: "You are weak and inferior in strength. This Trait could refer to diminutive size.",
    },
    {
        name: "Sickly",
        type: "Physical",
        negative_trait: true,
        description: "Weak and feeble. Your body responds to physical stress as if it were in the throes of a debilitating illness.",
    }

]

const seedTraits = () => Trait.collection.insertMany(traitData);

module.exports = {seedTraits};