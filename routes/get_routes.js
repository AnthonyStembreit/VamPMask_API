const router = require('express').Router();
const path = require('path');
const { Influence, Ability, Archetype, Background, Clan, Discipline, Trait, Dictionary } = require('../models');

router.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})
//Influences
router.get("/influences", async (req, res) => {
    try {
        let data = await Influence.find();
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
router.get("/influences/:name", async (req, res) => {
    try {
        let data = await Influence.findOne({ name: req.params.name })
        if (!data) {
            return res.status(404).json({ message: 'Cannot find that Influence, sorry!' });
        }
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
//Abilities
router.get("/abilities", async (req, res) => {
    try {
        let data = await Ability.find().select('-__v').populate({path:'associated_discipline', select: "primary_name"});
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
router.get("/abilities/:name", async (req, res) => {
    try {
        let data = await Ability.findOne({ name: req.params.name }).select('-__v').populate({path:'associated_discipline', select: "primary_name"});
        if (!data) {
            return res.status(404).json({ message: 'Cannot find that Ability, sorry!' });
        }
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
//Archetypes
router.get("/archetypes", async (req, res) => {
    try {
        let data = await Archetype.find();
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
router.get("/archetypes/:name", async (req, res) => {
    try {
        let data = await Archetype.findOne({ name: req.params.name })
        if (!data) {
            return res.status(404).json({ message: 'Cannot find that Archetype, sorry!' });
        }
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
//Backgrounds
router.get("/backgrounds", async (req, res) => {
    try {
        let data = await Background.find();
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
router.get("/backgrounds/:name", async (req, res) => {
    try {
        let data = await Background.findOne({ name: req.params.name })
        if (!data) {
            return res.status(404).json({ message: 'Cannot find that Background, sorry!' });
        }
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
//Clans
router.get("/clans", async (req, res) => {
    try {
        let data = await Clan.find().select('-__v').populate({ path:'disciplines', select: 'primary_name'});
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
router.get("/clans/:name", async (req, res) => {
    try {
        let data = await Clan.findOne({ name: req.params.name }).select('-__v').populate('disciplines');
        if (!data) {
            return res.status(404).json({ message: 'Cannot find that Clan, sorry!' });
        }
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
//Disciplines
router.get("/disciplines", async (req, res) => {
    try {
        let data = await Discipline.find();
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
// router.get("/disciplines/exclude-powers", async (req, res) => {
//     try {
//         let data = await Discipline.find({select: 'primary_name'});
//         res.json(data)
//     } catch (error) {
//         console.log(error)
//     }
// })
router.get("/disciplines/:name", async (req, res) => {
    try {
        let data = await Discipline.findOne({ primary_name: req.params.name })
        if (!data) {
            return res.status(404).json({ message: 'Cannot find that Discipline, sorry!' });
        }
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
//Traits
router.get("/traits", async (req, res) => {
    try {
        let data = await Trait.find();
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
router.get("/traits/:name", async (req, res) => {
    try {
        let data = await Trait.findOne({ name: req.params.name })
        if (!data) {
            return res.status(404).json({ message: 'Cannot find that Trait, sorry!' });
        }
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
//gets traits by type ie Physical / Social / Mental
router.get("/traits/by-type/:type", async (req, res) => {
    try {
        let data = await Trait.find({ type: req.params.type })
        if (!data) {
            return res.status(404).json({ message: 'Cannot find that Trait, sorry!' });
        }
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
//Dictionary
router.get("/all-words", async (req, res) => {
    try {
        let data = await Dictionary.find()
        if (!data) {
            return res.status(404).json({ message: 'Cannot find that word, sorry!' });
        }
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
router.get("/define/:word", async (req, res) => {
    try {
        let data = await Dictionary.findOne({ word: req.params.word })
        if (!data) {
            return res.status(404).json({ message: 'Cannot find that word, sorry!' });
        }
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
