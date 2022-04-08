const connection = require('../config/connection');
const { Influence, Ability, Archetype, Background, Clan, Discipline, Trait, Dictionary } = require('../models');
const { seedInfluences } = require('./influence-seed');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  
  await Influence.deleteMany({});
  await Ability.deleteMany({});
  await Archetype.deleteMany({});
  await Background.deleteMany({});
  await Clan.deleteMany({});
  await Discipline.deleteMany({});
  await Trait.deleteMany({});
  await Dictionary.deleteMany({});

  await seedInfluences();

  console.info('Seeding complete! 🌱');
  process.exit(0);
});