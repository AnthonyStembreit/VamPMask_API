const { Schema, model } = require('mongoose');

const backgroundSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    background_level: {
      type: Number
    }, 
    description: {
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


const Background = model('background', backgroundSchema);

module.exports = Background;