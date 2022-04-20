const { Schema, model } = require('mongoose');

const archetypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    archetype_description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false,
  }
);


const Archetype = model('Archetype', archetypeSchema);

module.exports = Archetype;