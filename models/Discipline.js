const { Schema, model } = require('mongoose');

const disciplineSchema = new Schema(
  {
    primary_name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    sub_type: {
      type: String,
      required: true
    },
    discipline_level: {
      type: Number,
      required: true
    }, 
    description: {
        type: String,
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

const Discipline = model('Discipline', disciplineSchema);

module.exports = Discipline;