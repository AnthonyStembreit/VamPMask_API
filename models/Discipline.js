const { Schema, model, Types } = require('mongoose');

const powerSchema = new Schema(
  {
    powerId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    level: {
      type: String,
      required: true,
    },
    exp_cost: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 2000
    }
  })

const disciplineSchema = new Schema(
  {
    primary_name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    powers: [powerSchema],
   description: {
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

const Discipline = model('Discipline', disciplineSchema);

module.exports = Discipline;