const { Schema, model } = require('mongoose');

const clanSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        disciplines: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Discipline',
            },
        ],
        //future dev
        // role_play_hints:{
        //     type: String
        // },
        //advantages
        //disadvantages
        //bloodlines
        // clan_freebies: {
        //     type: 
        // }
        description: {
            type: String,
            required: true,
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false,
    }
);


const Clan = model('clan', clanSchema);

module.exports = Clan;