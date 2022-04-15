const { Dictionary } = require('../models');

const dictionaryData = [
    {
        word: "Camerilla",
        short_definition: "A sect of vampires concerned primarily with maintaining the Traditions, particularly the Masquerade.",
        description: ""
    },
    {
        word: "Ancilla",
        short_definition: "A vampire 'adolescent', usually at least a century old.",
        description: ""
    },
    {
        word: "Simple-Test",
        short_definition: "Any challenge where Rock-Paper-Scissors is thrown without risking Traits. No retest are allowed for Simple Tests.",
        description: ""
    },
    {
        word: "Static-Test",
        short_definition: "A challenge that requires someone to risk Traits. The type of trait depends on the task or challenge.",
        description: ""
    },
    {
        word: "Sabbat",
        short_definition: "A sect of vampires that believes the Masquerade to be useless and that vampires should revel in their darker natures. They are violent and often bestial, using horror and cruelty as their tools.",
        description: ""
    },
]

const seedDictionary = () => Dictionary.collection.insertMany(dictionaryData);

module.exports = { seedDictionary };