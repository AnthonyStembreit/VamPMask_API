const { Ability } = require('../models');
function createAbility(disciplines) {
    console.log("hit")
    console.log(disciplines)
function generateDiscipline(disciplineOne){
   for(i=0; i<disciplines.length; i++){
       console.log(i)
        if(disciplines[i].primary_name === disciplineOne){
            console.log(disciplines[i]._id)
            return disciplines[i]._id
        }
   }
 }
const abilityData = [
    {
        name: "Brawl",
        description: "Back-alleys, martial arts schools and rough bars are your stomping ground. You might have military training, or maybe you just grew up with a passel of rough-and-tumble siblings. Whatever the case, you know how to dish out damage with your fists and feet. Use the Brawl Ability for retests in combat when you are using your natural weapons (teeth, claws or fists). This Ability is also the province of the martial arts, although you should specify which art when taking this Ability."
    },
    {
        name: "Melee",
        description: "If you’ve got something in your hands, you’re a deadly fighter. Be it a sword, a stick or a set of nunchaku, you can use it to damaging effect. Expend Melee for retests in hand-to-hand combat when you are using a close combat weapon like a knife or a chair. Certain weapons function best when wielded by a character with Melee."
    },
    {
        name: "Firearms",
        description: "A little time at the gun range goes a long way. You know how to hold, fire and clean a gun. You can unjam one, too, and you can tell different models apart. You know how to stand to get the best aim, how to handle recoil and how to take care of problems in the field. If you possess the Firearms Ability, you may use your Mental Traits for gun combat instead of using Physical Traits, at no cost. You can expend Firearms for a retest in ranged-fire combat."
    },
    {
        name: "Expression",
        description: "Words and feelings flow freely from you. When the muse strikes, you put pen to paper (or fingers to instrument) and pour out a torrent of emotion and stirring imagery. You can convey message and meaning in your art, from sym- phonies to poetry, and whatever you write is both clear and moving. When writing or composing, you can sink true Expression into the work. Works created with Expression x 3 or more have the potential to entrance Tore- ador, as per their clan weakness."
    },
    {
        name: "Empathy",
        description: "You are sensitive to the moods and emotions of people around you. When you listen to someone, you understand her feelings. You can identify with others and tell when people are lying or holding back while talking to you. With a Social Challenge and the expenditure of an Empathy Ability, you can determine if the last thing that someone said was a lie (although Subterfuge can defend against this expenditure). Alternately, you can attempt to determine the subject’s current Demeanor."
    },
    {
        name: "Finance",
        description: "The world of money and business awaits your whim. You understand in- terest, CDs, stock market transactions, currency exchanges and GNPs. A little Finance lets you make quite a bit of money. You can also use your Finance to balance books or run a business of your own. Typically, you can run a business, follow a money trail, perform an audit or clean up an accounting mess with a Mental Challenge (difficulty dependent on the task, as determined by the Storyteller). Alternately, you can expend a level of Finance Ability to raise $250 in cash between games. Not every use of Finance is so benign — money laundering operations have to come from somewhere."
    },
    {
        name: "Leadership",
        associated_discipline: generateDiscipline("Presence"),
        description: "When you speak, people listen. A good speaking voice and self-confidence lend a powerful presence to a leader. The Leadership Ability represents your ability to motivate people and to get them to follow your guidance. Even among those who do not know or respect you, you can demand attention. You can use Leadership with a Social Challenge to try to get a minor favor or task from a character. Leadership is also used with many Presence powers."
    },
    {
        name: "Investigation",
        associated_discipline: generateDiscipline("Auspex"),
        description: "You know how to pick up clues and put together disparate pieces of infor- mation. By habit and training, you can set a jumbled mass of data into order, discovering identities, motives and patterns in an otherwise chaotic scene. You can use Investigation with a Mental Challenge when trying to puzzle out meaning to a random scene, or with most Auspex Discipline powers."
    }
]
Ability.collection.insertMany(abilityData);
}
const seedAbility = createAbility;
module.exports = {seedAbility};