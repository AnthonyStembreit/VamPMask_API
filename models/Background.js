const { Schema, model, Types } = require('mongoose');

const levelSchema = new Schema({
  levelId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  level: {
    type: Number,
    required: true,
  },
  benefits: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1000
  }
})

const backgroundSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    background_levels: [levelSchema],
    description: {
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


const Background = model('background', backgroundSchema);

module.exports = Background;