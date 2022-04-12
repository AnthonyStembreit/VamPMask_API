const { Influence } = require('../models');

const influenceData = [
    {
        name: 'Police',
        description: "'To protect and serve' is the motto of the police, but these days, Kindred and kine alike may have cause to wonder who is being protected and served. That said, Police Influence can be very handy to assist with the Masquerade, to protect one’s holdings or to raid the assets of another. After all, attitude won’t save the anarchs whose haven is the target of a daylight raid. Police of all ranks, detectives, clerical staff, dispatchers, prison guards, special divisions (such as SWAT or homicide) and local highway patrol make up these ranks.",
        influence_levels: [
            {
                cost: 1,
                actions: "Learn police procedures, hear police information and rumors, avoid traffic tickets"
            },
            {
                cost: 2,
                actions:'Have license plates checked, avoid minor violations (first conviction), get “inside information”'
            },
            {
                cost: 3,
                actions: "Get copies of an investigation report, have police hassle, detain or harass someone, find bureau secrets"
            }
        ],
    },
    {
        name: 'Political',
        description: "Deal-making is second nature to most vampires, so they can get along very well with other bloodsuckers — that is, politicians. Altering party platforms, controlling local elections, changing appointed offices and calling in favors all falls under the purview of Political Influence. Well-timed blackmail, bribery, spin doctoring or any sundry tricks are stock in trade on both sides of this fence. Some of the likely contacts and allies include pollsters, lobbyists, activists, party members, spin doctors and politicians from rural zoning committees to the mayors of major cities or Congressional representatives.",
        influence_levels:[
            {
                cost: 1,
                actions: "Minor lobbying, identify real platforms of politicians and parties, be in the know"
            },
            {
                cost: 2,
                actions:"Meet small-time politicians, garner inside information on processes, laws and the like, use a slush fund or fund-raiser ($1,000)"
            },
            {
                cost: 3,
                actions: "Sway or alter political projects (local parks, renovations, small construction)"
            }
        ]
    },
];

const seedInfluences = () => Influence.collection.insertMany(influenceData);;

module.exports = { seedInfluences };