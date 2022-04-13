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
            },
            {
                cost: 4,
                actions: "Access confiscated weapons or contraband, have some serious charges dropped, start an investigation, get money, either from the evidence room or as an appropriation ($1,000)."
            },
            {
                cost: 5,
                actions: "Institute major investigations Arrange setups,instigate bureau investigations, have officers fired."
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
            },
            {
                cost: 4,
                actions: "Enact minor legislation, dash careers of minor politicians."
            },
            {
                cost: 5,
                actions: "Get your candidate in a minor office, enact encompassing legislature."
            }
        ]
    },
    {
        name: "Bureaucracy",
        description: "You can manage various government agencies and bureaus. By dealing with social programs and public servants, you can spin red tape, bypass rules and regulations or twist bureaucratic regimentation to your advantage. Bureaucracy is useful in operating or shutting down businesses, faking or acquiring permits and identification papers and manipulating public utilities and facilities. Government clerks at the city and county level, utility work- ers, road crews, surveyors and other civil servants are potential contacts or allies.",
        influence_levels: [
            {
                cost: 1,
                actions: "Trace utility bills"
            },
            {
                cost: 2,
                actions: "Fake a birth certificate or driver’s license, disconnect a single small residence’s utilities, close a small road or park."
            },
            {
                cost: 3,
                actions: "Fake a death certificate, passport or green card, close a public school for a single day, shut down a minor business on a violation."
            },
            {
                cost: 4,
                actions: "Initiate a phone tap, fake land deeds, initiate a department-wide investigation."
            },
            {
                cost: 5,
                actions: "Start, stop or alter a city-wide program or policy; shut down a big business on a violation, rezone areas, obliterate records of a person on a city or county level"
            },
        ]
    },
    {
        name: "Church",
        description: "Though the modern church has arguably less control over temporal society than it did in the Middle Ages, its policies still exert considerable influence over the direction of politics and communities. Knowing the appropriate people allows insight into many mainstream religions, such as Christianity, Judaism, Islam, Hinduism, Shinto or Buddhism (fringe or alternative groups, such as Scientology, are considered Occult). When you exercise Church Influence, you can change religious policy, affect the assign- ment of clergy and access a variety of lore and resources. Contacts and allies affected by Church Influence would include ministers, priests, bishops, Church-sponsored witch-hunters, holy orders and various attendees and assistants.",
        influence_levels: [
            {
                cost: 1,
                actions: "Identify most secular members of a given faith in the local area, pass as a member of the clergy, peruse general church records (baptism, marriage, burial, etc.)."
            },
            {
                cost: 2,
                actions: "Identify higher church members, track regular church members, suspend lay members."
            },
            {
                cost: 3,
                actions: "Find the average church-associated hunter, dip into the collection plate ($250), access private information and archives of a church."
            },
            {
                cost: 4,
                actions: "Discredit or suspend high-level church members, manipulate regional branches of the church"
            },
            {
                cost: 5,
                actions: "Organize major protests, access ancient church lore and knowledge"
            },
        ]
    },
    {
        name: "Finance",
        description: "Manipulating markets, stock reports and investments is a hobby of many Cain- ites, especially those who use their knowledge to keep hidden wealth. Though your actual available money is a function of your Resources, you can use Finance Influence to start or smother businesses, crush or support banking institutions and alter credit records. Clearly, such power over money is not to be trifled with — fortunes are made and destroyed with this sort of pull. CEOs, bankers, stockbrokers, bank tellers, yes-men, financiers and loan agents are found among such work.",
        influence_levels: [
            {
                cost: 1,
                actions: "Learn about major transactions and financial events Raise capital ($1,000), learn about general economic trends, learn real motivations for many financial actions of others."
            },
            {
                cost: 2,
                actions: "Trace an unsecured small account, raise capital to purchase a small business(single, small store)."
            },
            {
                cost: 3,
                actions: "Purchase a large business (a few small branches or a single large store or service)."
            },
            {
                cost: 4,
                actions: "Manipulate local banking (delay deposits, some credit rating alterations), ruin a small business."
            },
            {
                cost: 5,
                actions: "Control an aspect of city-wide banking(shut off ATMs, arrange a bank “holiday”), ruin a large business, purchase a major company."
            },
        ]
    },
    {
        name: "Health",
        description: "Some vampires rely on connections in the medical community to acquire blood. Necromancers and practitioners of arcane arts may also require body parts or medical data to further their studies. Furthermore, maintaining the Masquerade often calls for alteration of medical records or faking of particular diseases; some Cainites even specialize in the study of blood-borne ailments. All of these sorts of research and development fall under the purview of Health Influence. Coroners, doctors, lab workers, therapists, pharmacists and specialists are just a few of the folks found in this field.",
        influence_levels: [
            {
                cost: 1,
                actions: "Access a person’s health records Fake vaccination records and the like, use public functions of health centers at your leisure, get a single Blood Trait of mortal blood."
            },
            {
                cost: 2,
                actions: "Access some medical research records, have minor lab work done, get a copy of a coroner’s report Instigate minor quarantines."
            },
            {
                cost: 3,
                actions: "Corrupt results of tests or inspections, alter medical records."
            },
            {
                cost: 4,
                actions: "Acquire a body, completely rewrite medical records, abuse grants for personal use ($250), have minor medical research performed on a subject Institute large-scale quarantines, shut down businesses for 'health code violations'."
            },
            {
                cost: 5,
                actions: "Have special research projects performed, have people institutionalized or released."
            },
        ]
    },
    {
        name: "High Society",
        description: "The glitterati at the top of society move in circles of wealth and elegance. Many Kindred find such positions alluring, and they indulge in the passions of the famous and wealthy. Access to famous actors, celebrities and the idle rich grants a certain sway over fashion trends. Combined with Fame, a modicum of High Society Influence turns a vampire into a debonair darling of the most exclusive social circles. Among these circles, one finds dilettantes, artists of almost any stripe, old money families, models, rock stars, sports figures and jetsetters.",
        influence_levels: [
            {
                cost: 1,
                actions: "Learn what is trendy, obtain hard-to-get tickets for shows, learn about concerts, shows or plays well before they are made public."
            },
            {
                cost: 2,
                actions: "Track most celebrities and luminaries, be a local voice in the entertainment field, 'borrow' idle cash from rich friends ($1,000)."
            },
            {
                cost: 3,
                actions: "Crush promising careers, hobnob well above your station."
            },
            {
                cost: 4,
                actions: "Minor celebrity status."
            },
            {
                cost: 5,
                actions: "Get a brief appearance on a talk show that’s not about to be canceled, ruin a new club, gallery, festival or other posh gathering."
            },
        ]
    },
    {
        name: "Industry",
        description: "The grinding wheels of labor fuel the economies and markets of the world. Machines, factories and blue-collar workers line up in endless drudgery, churning out the staples of everyday living. Control over Industry Influence sways the formation of unions, the movements of work projects, locations for factories and the product of manufacturing concerns. Union workers, foremen, engineers, construction workers, manual laborers and all manner of blue-collar workers exist among these ranks.",
        influence_levels: [
            {
                cost: 1,
                actions: "Learn about industrial projects and movements."
            },
            {
                cost: 2,
                actions: "Have minor projects performed, dip into union funds or embezzle petty cash ($500), arrange small accidents or sabotage."
            },
            {
                cost: 3,
                actions: "Organize minor strikes, appropriate machinery for a short time"
            },
            {
                cost: 4,
                actions: "Close down a small plant, revitalize a small plant."
            },
            {
                cost: 5,
                actions: "Manipulate large local industry."
            },
        ]
    },
    {
        name: "Legal",
        description: "Since many of the operations that Cainites undertake are at least marginally illegal, a good amount of sway over judges and lawyers is indispensable. Those Kindred who dabble in law often pull strings in the courts to make sure that the questionable practices of Cainite society go unnoticed and unpunished. Of course, a little Legal Influence is also excellent for harassing an enemy’s assets, too. Such Influence ranges from law schools and firms, to lawyers, judges, DAs, clerks and public defenders.",
        influence_levels: [
            {
                cost: 1,
                actions: "Get free representation for minor cases."
            },
            {
                cost: 2,
                actions: "Avoid bail for some charge, have minor charges dropped."
            },
            {
                cost: 3,
                actions: "Manipulate legal procedures(minor wills and contracts, court dates), access public or court funds ($250), get representation in most court cases."
            },
            {
                cost: 4,
                actions: "Tie up court cases, have most legal charges dropped, cancel or arrange parole."
            },
            {
                cost: 5,
                actions: "Close down all but the most serious investigations, have deportation proceedings held against someone."
            },
        ]
    },
    {
        name: "Media",
        description: "Directing media attention away from vampire activities is a key component of the Masquerade. Putting specific emphasis on certain events can place an enemy in an uncomfortable spotlight or discredit a rival. With Media, you can crush or alter news stories, control the operations of news stations and reporters and sway public opinion, with DJs, editors of all varieties, reporters, cameramen, photographers and broadcasters at your disposal. At Storyteller discretion, Media Influence may also allow access to the more technical areas of television, radio or movies.",
        influence_levels: [
            {
                cost: 1,
                actions: "Learn about breaking stories early, submit small articles (within reason)."
            },
            {
                cost: 2,
                actions: "Suppress (but not stop) small articles or reports, get hold of investigative reporting information."
            },
            {
                cost: 3,
                actions: "Initiate news investigations and reports, get project funding and waste it ($250)."
            },
            {
                cost: 4,
                actions: "Ground stories and projects."
            },
            {
                cost: 5,
                actions: "Broadcast fake stories (local only), kill small local articles or reports completely."
            },
        ]
    },
    {
        name: "Occult",
        description: "The hidden world of the supernatural teems with secrets, conspiracies and unusual factions. Obviously, a vampire is aware that there are strange things out there by dint of his very existence (after all, if vampires exist...), but hard knowledge of such things is a function of Abilities. By using Occult Influence, you can dig up information to improve your knowledge, get inside the occult community and find rare components for magical rituals. Even parts of the elusive Book of Nod are available to those with the right connections. Cult leaders, alternative religious groups, charlatans, occultists, New Agers and a few more dangerous elements can be found here.",
        influence_levels: [
            {
                cost: 1,
                actions: "Contact and make use of common occult groups and their practices, know some of the more visible occult figures"
            },
            {
                cost: 2,
                actions: "Know and contact some of the more obscure occult figures, access resources for most rituals and rites."
            },
            {
                cost: 3,
                actions: "Know the general vicinity of certain supernatural entities and (possibly) contact them, access vital or rare material components, milk impressionable wannabes for bucks ($250) Access occult tomes and writings, research a Basic ritual from your sect."
            },
            {
                cost: 4,
                actions: "Research an Intermediate ritual from your sect."
            },
            {
                cost: 5,
                actions: "Access minor magic items, unearth an Advanced ritual from your sect."
            },
        ]
    },
    {
        name: "Street",
        description: "Ignored and often spat on by their “betters,” those in the dark alleys and slums have created their own culture to deal with life and any outsiders who might come calling. When calling on Street Influence, you use your connections on the underside of the city to find the homeless, gang members of all sorts, street buskers, petty criminals, prostitutes, residents of the slums or barrios, and fringe elements of so-called “deviant” cultures.",
        influence_levels: [
            {
                cost: 1,
                actions: "Open an ear for the word on the street, identify most gangs and know their turfs and habit."
            },
            {
                cost: 2,
                actions: "Live mostly without fear on the underside of society, keep a contact or two in most aspects of street life, access small-time contraband."
            },
            {
                cost: 3,
                actions: "Get insight into other areas of Influence, arrange some services from street people or gangs, get pistols or uncommon melee weapons."
            },
            {
                cost: 4,
                actions: "Mobilize groups of homeless, panhandle or hold a “collection” ($250), get hold of a shotgun, rifle or SMG, have a word in almost all aspects of gang operations."
            },
            {
                cost: 5,
                actions: "Control a single medium-sized gang, arrange impressive protests by street people"
            },
        ]
    },
    {
        name: "Transportation",
        description: "Most Cainites make their havens in defensible parts of cities. Traveling across the wilderness is difficult, with the problems of daylight and marauding Lupines. Without this Influence, the vampiric world shrinks into islands of “civilization” with dangerous wastelands in between. Getting access to special supplies and services can also take a measure of Transportation. All these things can be controlled with a bit of sway over truckers, harbors, railroads, airports, taxis, border guards, pilots and untold hundreds, as well as more mundane aspects like shipping and travel arrangements.",
        influence_levels: [
            {
                cost: 1,
                actions: "Know what goes where, when and why, travel locally quickly and freely."
            },
            {
                cost: 2,
                actions: "Track an unwary target if he uses public transportation, arrange passage safe (or at least concealed) from mundane threats (robbery, terrorism, sunlight, etc.)."
            },
            {
                cost: 3,
                actions: "Seriously hamper an individual’s ability to travel, avoid most supernatural dangers when traveling(such as Lupines)."
            },
            {
                cost: 4,
                actions: "Shut down one form of transportation(bus lines, ships, planes, trains, etc.) temporarily, route money your way ($500)."
            },
            {
                cost: 5,
                actions: "Reroute major modes of travel, smuggle with impunity."
            },
        ]
    },
    {
        name: "Underworld",
        description: "The world of crime offers lucrative possibilities to strong-willed or subtle leaders. Guns, money, drugs and vice — such delicious pastimes can be led by anyone talented or simply vicious enough to take them. Underworld Influence lets you call on such favors for all manner of illegal dealings, and its ranks are filled by the Mafia, La Cosa Nostra, drug dealers, bookies, Yakuza, tongs, hitmen, fences and criminal gangs.",
        influence_levels: [
            {
                cost: 1,
                actions: "Locate minor contraband (knives, small-time drugs, petty gambling, scalped tickets)."
            },
            {
                cost: 2,
                actions: "Obtain pistols, serious drugs, stolen cars Hire muscle to rough someone up, fence stolen loot, prove that crime pays (and score $1,000)."
            },
            {
                cost: 3,
                actions: "Obtain a rifle, shotgun or SMG, arrange a minor 'hit', meet someone in 'the Family'"
            },
            {
                cost: 4,
                actions: "Make white-collar crime connections."
            },
            {
                cost: 5,
                actions: "Arrange gangland assassinations Hire a demolition man or firebug, supply local drug needs."
            },
        ]
    },
    {
        name: "University",
        description: "Institutions of learning and research are the purview of the University Influence. Access to the halls of learning can help you with any number of resources, from ancient languages to research assistance to many impressionable young minds. School boards, students from kindergarten through college, graduate students, professors, teachers, deans, Greek orders and a variety of staff fill the ivy-covered halls.",
        influence_levels: [
            {
                cost: 1,
                actions: "Know layout and policy of local schools, have access to low-level university resources, get records up to the high school level."
            },
            {
                cost: 2,
                actions: "Know a contact or two with useful knowledge or Abilities, have minor access to facilities, fake high school records, obtain college records."
            },
            {
                cost: 3,
                actions: "Call in faculty favors, cancel a class, fix grades, discredit a student."
            },
            {
                cost: 4,
                actions: "Organize student protests and rallies, discredit faculty members."
            },
            {
                cost: 5,
                actions: "Falsify an undergraduate degree."
            },
        ]
    },
];

const seedInfluences = () => Influence.collection.insertMany(influenceData);;

module.exports = { seedInfluences };