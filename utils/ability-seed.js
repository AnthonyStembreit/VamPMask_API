const { Ability } = require('../models');

const abilityData = [
    {
        name: "",
        retest_ability: ,
        associated_discipline: 
        description: ""
    },
    {
        name: "",
        retest_ability: ,
        associated_discipline: 
        description: ""
    },
    {
        name: "",
        retest_ability: ,
        associated_discipline: 
        description: ""
    },
    {
        name: "",
        retest_ability: ,
        associated_discipline: 
        description: ""
    },
    {
        name: "",
        retest_ability: ,
        associated_discipline: 
        description: ""
    },
    {
        name: "",
        retest_ability: ,
        associated_discipline: 
        description: ""
    },
    {
        name: "",
        retest_ability: ,
        associated_discipline: 
        description: ""
    }
]

const seedAbility = () => Ability.collection.insertMany(abilityData);

module.exports = {seedAbility};