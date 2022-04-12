const { Schema, model } = require('mongoose');

const dictionarySchema = new Schema(
  {
    word: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    definition: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 2000
    }
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