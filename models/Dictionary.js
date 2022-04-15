const { Schema, model } = require('mongoose');

const dictionarySchema = new Schema(
  {
    word: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    short_definition: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 200
    },
    description: {
      type: String,
      minlength: 1,
      maxlength: 2000
    },
    
  },
  {
    toJSON: {
      getters: true
    },
    id: false,
  }
);


const Dictionary = model('Dictionary', dictionarySchema);

module.exports = Dictionary;