const { Schema, model } = require('mongoose');

const flawSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    trait_cost: {
        type: Number,
        required: true
    },
    description: {
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


const Flaw = model('Flaw', flawSchema);

module.exports = Flaw;