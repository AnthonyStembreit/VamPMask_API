const { Archetype } = require('../models');

const archetypesData = [
    {
        name: "Architect",
        description: "You hope to leave a lasting legacy, to build something for the future."
    },
    {
        name: "Autocrat",
        description: "You want to take charge, since nobody else can do the job right."
    },
    {
        name: "Bon Vivant",
        description: "Only a good time can assuage your otherwise empty existence."
    },
    {
        name: "Bravo",
        description: "Other people only get in your way of doing things, and you do not hesitate to bully them into line."
    },
    {
        name: "Caregiver",
        description: "You protect and comfort others."
    },
    {
        name: "Celebrant",
        description: "You find that joy springs from your overriding passion."
    },
    {
        name: "Child",
        description: "You need others to nurture and help you."
    },
    {
        name: "Competitor",
        description: "Everything is a contest, and you plan to win."
    },
    {
        name: "Conformist",
        description: "You take the lead and the cues from someone else, letting others handle the responsibility."
    },
    {
        name: "Conniver",
        description: "There’s no point to doing it yourself when you can get someone else to put in the effort."
    },
    {
        name: "Curmudgeon",
        description: "Nothing’s perfect, everything sucks and you’re going to make sure that everybody knows it."
    },
    {
        name: "Deviant",
        description: "Normal? What’s that? You have no use for social norms and mores."
    },
    {
        name: "Director",
        description: "You feel an overriding need to impose order."
    },
    {
        name: "Fanatic",
        description: "One cause, one truth, one purpose — you serve and proselytize with absolute conviction."
    },
    {
        name: "Gallant",
        description: "Everything you do is geared toward flamboyance and excess, since you need the attentions of those around you."
    },
    {
        name: "Judge",
        description: "You have a deep sense of right and wrong, and you seek justice measured by your principles."
    },
    {
        name: "Loner",
        description: "You just don’t belong, either by choice or by nature."
    },
    {
        name: "Martyr",
        description: "Everyone benefits when you shoulder the burdens of your ideals."
    },
    {
        name: "Masochist",
        description: "You test yourself through suffering, and find meaning in enduring pain."
    },
    {
        name: "Monster",
        description: "Build your purpose from a malignant drive to showcase evil through your actions."
    },
    {
        name: "Pedagogue",
        description: "Everyone can learn from your example and experiences; you were born to teach others."
    },
    {
        name: "Penitent",
        description: "You have sinned, and you cannot rest until you atone for it."
    },
    {
        name: "Perfectionist",
        description: "You do everything with wholehearted zeal aimed at im-maculate completion. There’s no excuse for flawed efforts."
    },
    {
        name: "Rebel",
        description: "Whether from habit or drive, you lash out at the system and try to break it down."
    },
    {
        name: "Rogue",
        description: "First and foremost, you look out for number one."
    },
    {
        name: "Survivor",
        description: "Nothing stops you, for your drive to pull through is indomitable."
    },
    {
        name: "Thrill-Seeker",
        description: "You’re always after the next high, by pushing danger to the edge."
    },
    {
        name: "Traditionalist",
        description: "The old ways are the best ways, so you preserve and protect them."
    },
    {
        name: "Trickster",
        description: "Existence is absurd, so you fill it with humor and irreverence to avoid looking too deeply at the pain."
    },
    {
        name: "Visionary",
        description: "A goal fills your mind, and your dreams bring faith to others."
    },


]

const seedArchetypes = () => Archetype.collection.insertMany(archetypesData);

module.exports = {seedArchetypes};