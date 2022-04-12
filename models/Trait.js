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
    sub_type: {
      type: String,
    },
    negative_trait: {
      type: Boolean,
      required: true
    },
    trait_level: {
      type: Number
    },
    discipline: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Discipline',
      },
  ],
    description: {
      type: String,
      minlength: 1,
      maxlength: 500
    },
    uses: {
      type: String,
    },
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
