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
        let data = await Influence.find({ name: req.params.name })
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
        let data = await Ability.find().select('-__v').populate('associated_discipline');
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
router.get("/abilities/:name", async (req, res) => {
    try {
        let data = await Ability.findOne({ name: req.params.name }).select('-__v').populate('associated_discipline');
        if (!data) {
            return res.status(404).json({ message: 'Cannot find that Ability, sorry!' });
        }
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
router.get("/abilities/retest", async (req, res) => {
    try {
        let data = await Ability.find({ retest_ability: true }).select('-__v').populate('associated_discipline');   
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
        let data = await Clan.find().select('-__v').populate('disciplines');
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
router.get("/disciplines/:name", async (req, res) => {
    try {
        let data = await Discipline.find({ name: req.params.name })
        if (!data) {
            return res.status(404).json({ message: 'Cannot find that Descipline, sorry!' });
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
//Dictionary
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
