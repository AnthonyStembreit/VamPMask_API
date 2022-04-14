const { Dictionary } = require('../models');

const dictionaryData = [
    {
        word: "",
        short_definition: "",
        description: ""
    },
    {
        word: "",
        short_definition: "",
        description: ""
    },
    {
        word: "",
        short_definition: "",
        description: ""
    },
    {
        word: "",
        short_definition: "",
        description: ""
    },
    {
        word: "",
        short_definition: "",
        description: ""
    },
]

const seedDictionary = () => Dictionary.collection.insertMany(dictionaryData);

module.exports = { seedDictionary };