const { Schema, model } = require('mongoose');

const abilitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    //future dev
    // ability_level: {
    //   type: Number
    // },
    associated_discipline: {
      type: Schema.Types.ObjectId,
      ref: 'Discipline',
    },

    ability_description: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false,
  }
);


const Ability = model('ability', abilitySchema);

module.exports = Ability;