const { Schema, model } = require('mongoose');

const clanSchema = new Schema(
    {
        clan_name: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        clan_disciplines: [
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
        clan_description: {
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