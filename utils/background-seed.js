const { Background } = require('../models');

const backgroundData = [
    {
        name: "Fame",
        background_levels: [
            {
                level: 1,
                benefits: "Local scene"
            },
            {
                level: 2,
                benefits: "City"
            },
            {
                level: 3,
                benefits: "State"
            },
            {
                level: 4,
                benefits: "Adjoining states"
            },
            {
                level: 5,
                benefits: "Entire country"
            },
        ],
        description: "Some vampires are Embraced from among the ranks of the wealthy or talented elite. As a result, many Cainites can make a claim to some distinction in their breathing days. Though such notoriety often fades with the years, your Fame lingers on to influence mortal society. Fame allows you to exercise your connections over a longer distance than usual. Certainly, if you’ve got the right Influence, you can push things around on an interstate or even national scale, but with Fame, you can just make a few calls and get your Contacts, Influence or Resources exerted over a greater range without any impediment. This is not to say you must have Fame to get anything done, only that it may help. Your total Fame determines your maximum range for unimpeded use of your Contacts, Influence and Resources. When you make an effort to exert your Contacts, Influence or Resources over a long range, you lean on your popularity and image, thus expending your Fame Traits until the next game session. Fame is most often used in the downtime between sessions to facilitate long-range plans."
    },
    {
        name: "Resources",
        background_levels: [
            {
                level: 1,
                benefits: "Small savings and holdings; income $500. Have apartment, cheap means of transportation."
            },
            {
                level: 2,
                benefits: "Modest savings and holdings; income $1,000. Have condo and motorcycle or modest car."
            },
            {
                level: 3,
                benefits: "Significant savings and holdings; income $3,000. Own house, car."
            },
            {
                level: 4,
                benefits: "Large savings and holdings. Income $10,000. Own large house or some small properties, two vehicles, some luxuries and unusual items."
            },
            {
                level: 5,
                benefits: "Rich. Income $30,000. Own estate and grounds, multiple small properties, several vehicles, arts and treasures, luxury items."
            },
        ],
        description: "You have access to liquid capital and spending money. You also have some solid resources that you can use when times are tight. Unlike the use of Finance, these resources are always readily available, and they come to you automatically due to your investments, jobs and holdings. Your number of Resources Traits determines the amount of money and capital that you can secure. By expending temporary Resources Traits (which return at the next game session), you can draw on your regular income, as shown in the accompa- nying table. If you expend permanent Resources, you can divest yourself of holdings, allowing access to 10 times the amount shown on the table. However, the limits of what you can buy are always adjudicated by the Storyteller. Truly powerful uses of Resources are best left to downtimes and moderation between game sessions."
    },
    {
        name: "Contacts",
        description: "With the right contacts in all walks of life, you can get a line on all sorts of useful information. Although having an “ear to the wall” doesn’t necessarily provide you with good help or loyal servants, it does mean that you know who to ask when looking for the movers and shakers behind the scenes. In game terms, your rating in Contacts allows you to discern rumors and infor- mation. When you call on your contacts, you make a few phone calls, check with likely snitches and grease a few palms. In return, you get rumors and information as if possessed of a certain amount of Influence. Doing so lets you find out exactly what’s going on in the city within a particular area. You can get information of a level equal to however many contacts you use. If you use Contacts x 3 on Industry, for instance, you get information as if digging up dirt with Industry x 3 Influence. The advantage of the Contacts Background is that contacts can be switched from place to place each game, getting information in different areas at your demand. Using Contacts for especially dangerous or secret information may require you to spend some money or perform a few favors, at the discretion of a Storyteller. On occasion, accidents can cause contacts in one area to dry up, such as a strike that af- fects your Industry contacts, or a particularly unlucky astronomical conjunction sends your Occult contacts running for the hills. Your contacts will not generally function as aides or lackeys; that is the purview of the Allies and Retainers Backgrounds."
    },
    {
        name: "Herd",
        description: "Whether surrounding yourself with mortal cultists, or just making sure that you have regular access to a blood bank, your herd gives you a guaranteed volume of blood for feeding. You don’t have to go very far to hunt; your herd, when available to you, offers you a safe and easy way to sustain your powers. You should work with your Storyteller to describe the exact nature of your herd, since these Traits can be lost through hazards or deliberate sabotage. You could have mortals who are conditioned to enjoy the Kiss, access to medical blood supplies outside of the normal channels or a religious cult that gives you blood freely. Each Trait of Herd can be used to gain one extra Blood Trait once per session. You can do this immediately on entering the game to represent that you have previously fed, thus improving your blood from your starting Traits for the evening (based on your Blood Test, as described on p. 106). You can also take 15 minutes out of play to call on a herd and gain a Blood Trait. You can split up Herd Traits if you wish, so you may use some Traits to start with extra blood, then use more later to replace spent vitae. Members of your herd (assuming it is composed of people and not plastic bags) are not necessarily particularly competent or loyal — they simply let you feed from them. You must take Allies or Retainers if you want them to do other tasks for you."
    }
]

const seedBackground = () => Background.collection.insertMany(backgroundData);

module.exports = {seedBackground};