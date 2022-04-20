const { Schema, model, Types } = require('mongoose');
const levelSchema = new Schema({
  levelId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  action_cost: {
    type: Number,
    required: true,
  },
  actions: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1000
  }
})
const influenceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    influence_levels: [levelSchema],
    influence_description: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 500
    },

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