const { Background } = require('../models');

const backgroundData = [
    {
        name: "",
        background_levels: [
            level:,
            benefits: ""
        ],
        description: ""
    },
    {
        name: "",
        background_levels: [
            level:,
            benefits: ""
        ],
        description: ""
    },
    {
        name: "",
        background_levels: [
            level:,
            benefits: ""
        ],
        description: ""
    }
]

const seedBackground = () => Background.collection.insertMany(backgroundData);

module.exports = {seedBackground};