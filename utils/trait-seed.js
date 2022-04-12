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
    },
    {
        name: "Alluring",
        type: "Social",
        sub_type: "Appearance-related",
        negative_trait: false,
        description: "An attractive and appealing presence that inspires desire in others.",
        uses: "Uses: Seduction. Convincing others."
    },
    {
        name: "Beguiling",
        type: "Social",
        sub_type: "Manipulation-related",
        negative_trait: false,
        description: "The skill of deception and illusion. You can twist the perceptions of others and lead them to believe what suits you.",
        uses: "Uses: Tricking others. Lying under duress."
    },
    {
        name: "Charismatic",
        type: "Social",
        sub_type: "Charisma-related",
        negative_trait: false,
        description: "The talent of inspiration and motivation, the sign of a strong leader",
        uses: "Uses: In a situation involving leadership or the achievement of leadership. Presence."
    },
    {
        name: "Charming",
        type: "Social",
        sub_type: "Charisma-related",
        negative_trait: false,
        description: "Your speech and actions make you attractive and appealing to others.",
        uses: "Uses: Convincing. Persuading. Presence."
    },
    {
        name: "Commanding",
        type: "Social",
        sub_type: "Manipulation-related",
        negative_trait: false,
        description: "Impressive delivery of orders and suggestions. This Trait implies skill in the control and direction of others.",
        uses: "Uses: When you are seen as a leader."
    },
    {
        name: "Dignified",
        type: "Social",
        sub_type: "Charisma-related",
        negative_trait: false,
        description: "Something about your posture and body carriage appears honor- able and aesthetically pleasing. You carry yourself well.",
        uses: "Uses: Presence. Defending against Social Challenges."
    },
    {
        name: "Diplomatic",
        type: "Social",
        sub_type: "Charisma-related",
        negative_trait: false,
        description: "Tactful, careful and thoughtful in speech and deed. Few are displeased with what you say or do.",
        uses: "Uses: Very important in intrigue. Leadership situations."
    },
    {
        name: "Elegant",
        type: "Social",
        sub_type: "Appearance-related",
        negative_trait: false,
        description: "Refined tastefulness. Even though you don’t need money to be elegant, you exude an air of richness and high society.",
        uses: "Uses: High society or Toreador parties. Might be important in some clans for advancement. Defending against Social Challenges."
    },
    {
        name: "Eloquent",
        type: "Social",
        sub_type: "Charisma-related",
        negative_trait: false,
        description: "The ability to speak in an interesting and convincing manner.",
        uses: "Uses: Convincing others. Swaying emotions. Public speaking. Presence."
    },
    {
        name: "Empathetic",
        type: "Social",
        sub_type: "Miscellaneous Social",
        negative_trait: false,
        description: "Able to identify and understand the emotions and moods of people with whom you come in contact.",
        uses: "Uses: Gauging the feelings of others."
    },
    {
        name: "Expressive",
        type: "Social",
        sub_type: "Charisma-related",
        negative_trait: false,
        description: "Able to articulate your thoughts in interesting, meaningful ways.",
        uses: "Uses: Producing art of any kind. Acting. Performing. Any social situation in which you want someone to understand your meaning."
    },
    {
        name: "Friendly",
        type: "Social",
        sub_type: "Miscellaneous Social",
        negative_trait: false,
        description: "Able to fit in with everyone you meet. Even after a short conversation, most find it difficult to dislike you.",
        uses: "Uses: Convincing others."
    },
    {
        name: "Genial",
        type: "Social",
        sub_type: "Charisma-related",
        negative_trait: false,
        description: "Cordial, kindly, warm and pleasant. You are pleasing to be around",
        uses: "Uses: Mingling at parties. Presence. Generally used in a second or later Social Challenge with someone."
    },
    {
        name: "Gorgeous",
        type: "Social",
        sub_type: "Appearance-related",
        negative_trait: false,
        description: "Beautiful or handsome. You were born with a face and body that is good-looking to most people you meet.",
        uses: "Uses: Modeling, posing."
    },
    {
        name: "Ingratiating",
        type: "Social",
        sub_type: "Manipulation-related",
        negative_trait: false,
        description: "Able to gain the favor of people who know you.",
        uses: "Uses: Dealing with elders in a social situation. Defending against Social Challenges"
    },
    {
        name: "Intimidating",
        type: "Social",
        sub_type: "Miscellaneous Social",
        negative_trait: false,
        description: "A frightening or awesome presence that causes others to feel timid. This Trait is particularly useful when attempting to cow opponents.",
        uses: "Uses: Inspiring common fear. Ordering others."
    },
    {
        name: "Magnetic",
        type: "Social",
        sub_type: "Appearance-related",
        negative_trait: false,
        description: "People feel drawn to you; those around you are interested in your speech and actions.",
        uses: "Uses: Seduction. First impressions."
    },
    {
        name: "Persuasive",
        type: "Social",
        sub_type: "Manipulation-related",
        negative_trait: false,
        description: "Able to propose believable, convincing and correct arguments and requests. Very useful when someone else is undecided on an issue.",
        uses: "Uses: Persuading or convincing others."
    },
    {
        name: "Seductive",
        type: "Social",
        sub_type: "Appearance-related",
        negative_trait: false,
        description: "Able to entice and tempt. You can use your good looks and your body to get what you want from others.",
        uses: "Uses: Subterfuge, seduction."
    },
    {
        name: "Witty",
        type: "Social",
        sub_type: "Miscellaneous Social",
        negative_trait: false,
        description: "Cleverly humorous. Jokes and jests come easily to you, and you are perceived as a funny person when you want to be.",
        uses: "Uses: At parties. Entertaining someone. Goading or insulting someone."
    },
    {
        name: "Bestial",
        type: "Social",
        negative_trait: true,
        description: "You have started to resemble the Beast of your vampiric nature. Maybe you have clawlike fingernails, heavy body hair or a feral glint in your eyes; however your Beast manifests, you definitely seem inhuman.",
    },
    {
        name: "Callous",
        type: "Social",
        negative_trait: true,
        description: "You are unfeeling, uncaring and insensitive to the suffering of others.",
    },
    {
        name: "Condescending",
        type: "Social",
        negative_trait: true,
        description: "You just can’t help it; your contempt for others is impos- sible to hide.",
    },
    {
        name: "Dull",
        type: "Social",
        negative_trait: true,
        description: "Those with whom you speak usually find you boring and uninteresting. Conversing with you is a chore. You do not present yourself well to others.",
    }, 
    {
        name: "Feral",
        type: "Social",
        negative_trait: true,
        description: "The animalistic predator in you is evident in your actions. You scratch yourself, sniff at people or otherwise behave in a primitive fashion.",
    },
    {
        name: "Naive",
        type: "Social",
        negative_trait: true,
        description: "You lack the air of worldliness, sophistication or maturity that most carry.",
    },
    {
        name: "Obnoxious",
        type: "Social",
        negative_trait: true,
        description: "You are annoying or unappealing in speech, action or appearance",
    },
    {
        name: "Repugnant",
        type: "Social",
        negative_trait: true,
        description: "Your appearance disgusts everyone around you. Needless to say, you make a terrible first impression with strangers.",
    },
    {
        name: "Shy",
        type: "Social",
        negative_trait: true,
        description: "You are timid, bashful, reserved and socially hesitant.",
    },
    {
        name: "Tactless",
        type: "Social",
        negative_trait: true,
        description: "You are unable to do or say things that others find appropriate to the social situation.",
    },
    {
        name: "Untrustworthy",
        type: "Social",
        negative_trait: true,
        description: "You are rumored or perceived to be unreliable, whether or not you really are.",
    },

]

const seedTraits = () => Trait.collection.insertMany(traitData);

module.exports = {seedTraits};