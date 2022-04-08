const { Schema, model } = require('mongoose');

const traitSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    type: {
      type: String,
      required: true
    },
    negative_trait: {
      type: Boolean,
      required: true
    },
    trait_level: {
      type: Number
    }, 
    description: {
      type: String,
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


const Trait = model('Trait', traitSchema);

module.exports = Trait;
