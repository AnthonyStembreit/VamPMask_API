const connection = require('../config/connection');
const { Influence, Ability, Archetype, Background, Clan, Discipline, Trait, Dictionary } = require('../models');
const { seedInfluences } = require('./influence-seed');
const { seedTraits } = require('./trait-seed');
const { seedArchetypes } = require('./archetype-seed');
const { disciplinesData, seedDisciplines } = require('./discipline-seed');
const { seedClans } = require('./clan-seed');
const { seedAbility } = require('./ability-seed');
const { seedBackground } = require('./background-seed');
const { seedDictionary } = require('./dictionary-seed');
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
  console.log("done")
  await seedDisciplines();
  console.log("next")
  await seedClans(disciplinesData);
  await seedAbility(disciplinesData)
  await seedInfluences();
  await seedArchetypes();
  await seedBackground();
  await seedDictionary();
  await seedTraits();


  console.info('Seeding complete! 🌱');
  process.exit(0);
});
