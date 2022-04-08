const { Schema, model } = require('mongoose');

const influenceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    influence_level: {
      type: Number,
      required: true
    }, 
    description: {
        type: String,
        minlength: 1,
        maxlength: 500
    }, 
    actions: {
      type: String,
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


const Influence = model('Influence', influenceSchema);

module.exports = Influence;