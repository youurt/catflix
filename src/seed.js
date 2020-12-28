export const seedDatabase = (firebase) => {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  // /* Films
  //   ============================================ */
  // Action
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Bridge on the River Kwai',
    description:
      'British POWs are forced to build a railway bridge across the river Kwai for their Japanese captors, not knowing that the allied forces are planning to destroy it.',
    genre: 'action',
    maturity: '12',
    slug: 'the-bridge-on-the-river-kwai',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Per un pugno di dollari',
    description:
      'A wandering gunfighter plays two rival families against each other in a town torn apart by greed, pride, and revenge.',
    genre: 'action',
    maturity: '12',
    slug: 'per-un-pugno-di-dollari',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Forbidden Planet',
    description:
      "A starship crew goes to investigate the silence of a planet's colony only to find two survivors and a deadly secret that one of them has.",
    genre: 'action',
    maturity: '15',
    slug: 'forbidden-planet',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Spartacus',
    description:
      'The slave Spartacus leads a violent revolt against the decadent Roman Republic.',
    genre: 'action',
    maturity: '12',
    slug: 'spartacus',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Strangers on a Train',
    description:
      'A psychopath forces a tennis star to comply with his theory that two strangers can get away with murder.',
    genre: 'action',
    maturity: '12',
    slug: 'strangers-on-a-train',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Knight Rider',
    description:
      'A lone crimefighter battles the forces of evil with the help of a virtually indestructible and artificially intelligent supercar.',
    genre: 'action',
    maturity: '12',
    slug: 'knight-rider',
  });
  // Comedy
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Bringing Up Baby',
    description:
      'While trying to secure a $1 million donation for his museum, a befuddled paleontologist is pursued by a flighty and often irritating heiress and her pet leopard, Baby.',
    genre: 'comedy',
    maturity: '0',
    slug: 'bringin-up-baby',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Some Like It Hot',
    description:
      'After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.',
    genre: 'comedy',
    maturity: '0',
    slug: 'some-like-it-hot',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Duck Soup',
    description:
      'Rufus T. Firefly is named president/dictator of bankrupt Freedonia and declares war on neighboring Sylvania over the love of wealthy Mrs. Teasdale.',
    genre: 'comedy',
    maturity: '0',
    slug: 'duck-soup',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'One Hundred and One Dalmatians',
    description:
      'When a litter of Dalmatian puppies are abducted by the minions of Cruella de Vil, the parents must find them before she uses them for a diabolical fashion statement.',
    genre: 'comedy',
    maturity: '0',
    slug: 'one-hundred-and-one-dalmatians',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Gentlemen Prefer Blondes',
    description:
      "Showgirls Lorelei Lee and Dorothy Shaw travel to Paris, pursued by a private detective hired by the suspicious father of Lorelei's fiancé, as well as a rich, enamored old man and many other doting admirers.",
    genre: 'comedy',
    maturity: '0',
    slug: 'gentlemen-prefer-blondes',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Miracle on 34th Street',
    description:
      'When a nice old man who claims to be Santa Claus is institutionalized as insane, a young lawyer decides to defend him by arguing in court that he is the real thing.',
    genre: 'comedy',
    maturity: '0',
    slug: 'miracle-on-34th-street',
  });
  // Drama
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Double Indemnity',
    description:
      'An insurance representative lets himself be talked by a seductive housewife into a murder/insurance fraud scheme that arouses the suspicion of an insurance investigator.',
    genre: 'drama',
    maturity: '12',
    slug: 'double-indemnity',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'La belle et la bête',
    description:
      "A beautiful young woman takes her father's place as the prisoner of a mysterious beast, who wishes to marry her.",
    genre: 'drama',
    maturity: '0',
    slug: 'la-belle-et-la-bete',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'His Girl Friday',
    description:
      'A newspaper editor uses every trick in the book to keep his ace reporter ex-wife from remarrying.',
    genre: 'drama',
    maturity: '12',
    slug: 'his-girl-friday',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'La règle du jeu',
    description:
      'A bourgeois life in France at the onset of World War II, as the rich and their poor servants meet up at a French chateau.',
    genre: 'drama',
    maturity: '12',
    slug: 'la-regle-du-jeu',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Invasion of the Body Snatchers',
    description:
      'A small-town doctor learns that the population of his community is being replaced by emotionless alien duplicates.',
    genre: 'drama',
    maturity: '0',
    slug: 'invasion-of-the-body-snatchers',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Sweet Smell of Success',
    description:
      "Powerful but unethical Broadway columnist J.J. Hunsecker coerces unscrupulous press agent Sidney Falco into breaking up his sister's romance with a jazz musician.",
    genre: 'drama',
    maturity: '0',
    slug: 'sweet-smell-of-success',
  });
  // Horror
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'King Kong',
    description:
      'A film crew goes to a tropical island for an exotic location shoot and discovers a colossal ape who takes a shine to their female blonde star. He is then captured and brought back to New York City for public exhibition.',
    genre: 'horror',
    maturity: '15',
    slug: 'king-kong',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Birds',
    description:
      'A wealthy San Francisco socialite pursues a potential boyfriend to a small Northern California town that slowly takes a turn for the bizarre when birds of all kinds suddenly begin to attack people.',
    genre: 'horror',
    maturity: '18',
    slug: 'the-birds',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Les yeux sans visage',
    description:
      'A surgeon causes an accident which leaves his daughter disfigured, and goes to extremes to give her a new face.',
    genre: 'horror',
    maturity: '18',
    slug: 'les-yeux-sans-visage',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Frankenstein',
    description:
      'Dr. Frankenstein dares to tamper with life and death by creating a human monster out of lifeless body parts.',
    genre: 'horror',
    maturity: '18',
    slug: 'frankenstein',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Repulsion',
    description:
      "A sex-repulsed woman who disapproves of her sister's boyfriend sinks into depression and has horrific visions of rape and violence.",
    genre: 'horror',
    maturity: '18',
    slug: 'repulsion',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Psycho',
    description:
      "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    genre: 'horror',
    maturity: '18',
    slug: 'psycho',
  });
  // War
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Searchers',
    description:
      'An American Civil War veteran embarks on a journey to rescue his niece from the Comanches.',
    genre: 'war',
    maturity: '15',
    slug: 'the-searchers',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Roma città aperta',
    description:
      'During the Nazi occupation of Rome in 1944, the Resistance leader, Giorgio Manfredi, is chased by the Nazis as he seeks refuge and a way to escape.',
    genre: 'war',
    maturity: '18',
    slug: 'roma-citta-aperta',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Lawrence of Arabia',
    description:
      'The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.',
    genre: 'war',
    maturity: '15',
    slug: 'lawrence-of-arabia',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'La grande illusion',
    description:
      'During WWI, two French soldiers are captured and imprisoned in a German P.O.W. camp. Several escape attempts follow until they are eventually sent to a seemingly inescapable fortress.',
    genre: 'war',
    maturity: '18',
    slug: 'la-grande-illusion',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'La battaglia di Algeri',
    description:
      'In the 1950s, fear and violence escalate as the people of Algiers fight for independence from the French government.',
    genre: 'war',
    maturity: '18',
    slug: 'la-battaglia-di-algeri',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Casablanca',
    description:
      'A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.',
    genre: 'war',
    maturity: '15',
    slug: 'casablanca',
  });
  /* Series
    ============================================ */
  // Crime
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Dragnet',
    description:
      'Sgt. Joe Friday and his partners methodically investigate crimes in Los Angeles.',
    genre: 'crime',
    maturity: '15',
    slug: 'dragnet',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Rockford Files',
    description:
      'The cases of an easy going ex-convict turned private investigator.',
    genre: 'crime',
    maturity: '12',
    slug: 'the-rockford-files',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Hill Street Blues',
    description:
      'The lives and work of the staff of an inner city police precinct.',
    genre: 'crime',
    maturity: '12',
    slug: 'hill-street-blues',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Miami Vice',
    description:
      'Resplendent with authentic 1980\'s music, fashion and vibe, "Miami Vice" follows two undercover detectives and their extended team through the mean streets of Miami, Florida.',
    genre: 'crime',
    maturity: '15',
    slug: 'miami-vice',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Oz',
    description:
      'A series chronicling the daily activities of an unusual prison facility and its criminal inhabitants.',
    genre: 'crime',
    maturity: '18',
    slug: 'oz',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Sopranos',
    description:
      'New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.',
    genre: 'crime',
    maturity: '12',
    slug: 'the-sopranos',
  });
  // Family
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Rocky and His Friends',
    description:
      'Rocky, a plucky flying squirrel and Bullwinkle, a bumbling but lovable moose, have a series of ongoing adventures.',
    genre: 'family',
    maturity: '0',
    slug: 'rocky-and-his-friends',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Andy Griffith Show',
    description:
      "Widower Sheriff Andy Taylor, and his son Opie, live with Andy's Aunt Bee in Mayberry, North Carolina. With virtually no crimes to solve, most of Andy's time is spent philosophizing and calming down his cousin Deputy Barney Fife.",
    genre: 'family',
    maturity: '0',
    slug: 'the-andy-griffith-show',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Jeffersons',
    description:
      'A nouveau riche, African-American family who move into a luxury apartment building develop close, if occasionally fractious, relationships with other tenants.',
    genre: 'family',
    maturity: '0',
    slug: 'the-jeffersons',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Cosby Show',
    description:
      'The goings-on in the life of a successful African-American family.',
    genre: 'family',
    maturity: '0',
    slug: 'the-cosby-show',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Doogie Howser, M.D.',
    description:
      'A teenage genius deals with the usual problems of growing up, on top of being a licensed physician in a difficult residency program.',
    genre: 'family',
    maturity: '0',
    slug: 'doogie-howser',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Munsters',
    description:
      'A family of friendly monsters have misadventures, never quite understanding why people react to them so strangely.',
    genre: 'family',
    maturity: '0',
    slug: 'the-munsters',
  });
  // Comedy
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Seinfeld',
    description:
      'The continuing misadventures of neurotic New York City stand-up comedian Jerry Seinfeld and his equally neurotic New York City friends.',
    genre: 'comedy',
    maturity: '0',
    slug: 'seinfeld',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Fresh Prince of Bel-Air',
    description:
      'A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion.',
    genre: 'comedy',
    maturity: '0',
    slug: 'the-fresh-prince-of-bel-air',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Larry Sanders Show',
    description: 'A comedic behind the scenes look at a late night talk show.',
    genre: 'comedy',
    maturity: '0',
    slug: 'the-larry-sanders-show',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'King of Queens',
    description:
      "Delivery man Doug Heffernan has a good life: He has a pretty wife (Carrie), a big television, and friends with which to watch it. Then Carrie's goofy and annoying father Arthur moves in with them.",
    genre: 'comedy',
    maturity: '0',
    slug: 'the-king-of-queens',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Alfred Hitchcock Presents',
    description:
      'Series of unrelated short stories covering elements of crime, horror, drama, and comedy about people of different backgrounds committing murders, suicides, thefts, and other sorts of crime caused by certain motivations, perceived or not.',
    genre: 'comedy',
    maturity: '0',
    slug: 'alfred-hitchcock-presents',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Saved by the Bell',
    description:
      'A close-knit group of six friends get through their teens together while attending Bayside High School in Palisades, California.',
    genre: 'comedy',
    maturity: '0',
    slug: 'saved-by-the-bell',
  });
  // Drama
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Dallas',
    description:
      'J.R. Ewing, a Texas oil baron, uses manipulation and blackmail to achieve his ambitions, both business and personal. He often comes into conflict with his brother Bobby, his arch-enemy Cliff Barnes and his long-suffering wife Sue Ellen.',
    genre: 'drama',
    maturity: '0',
    slug: 'dallas',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Twin Peaks',
    description:
      'An idiosyncratic FBI agent investigates the murder of a young woman in the even more idiosyncratic town of Twin Peaks.',
    genre: 'drama',
    maturity: '12',
    slug: 'twin-peaks',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: "I'll fly away",
    description:
      'Forrest Bedford is a Southern lawyer in the late 1950s, generally content with his privileged life. But the winds of change are blowing, and he becomes increasingly involved with civil rights cases. Mean- while, Lilly Harper, who cares for his children, is on her own journey of political and personal awareness.',
    genre: 'drama',
    maturity: '12',
    slug: 'ill-fly-away',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'ER',
    description:
      "The lives, loves and losses of the doctors and nurses of Chicago's County General Hospital.",
    genre: 'drama',
    maturity: '15',
    slug: 'er',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Buffy the Vampire Slayer',
    description:
      'A young woman, destined to slay vampires, demons and other infernal creatures, deals with her life fighting evil, with the help of her friends.',
    genre: 'drama',
    maturity: '15',
    slug: 'buffy-the-vampire-slayer',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The West Wing',
    description:
      'Inside the lives of staffers in the West Wing of the White House.',
    genre: 'drama',
    maturity: '15',
    slug: 'the-west-wing',
  });
  // Action
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Adventures of Superman',
    description:
      'The Man of Steel fights crime with help from his friends at the Daily Planet.',
    genre: 'action',
    maturity: '12',
    slug: 'adventures-of-superman',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Batman',
    description:
      'The Caped Crusader and his young ward battle evildoers in Gotham City.',
    genre: 'action',
    maturity: '12',
    slug: 'batman',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Start Trek',
    description:
      'In the 23rd Century, Captain James T. Kirk and the crew of the U.S.S. Enterprise explore the galaxy and defend the United Federation of Planets.',
    genre: 'action',
    maturity: '15',
    slug: 'star-trek',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Green Hornet',
    description:
      'A newspaper publisher and his Asian valet/martial arts expert battle crime as the feared Green Hornet and Kato.',
    genre: 'action',
    maturity: '15',
    slug: 'the-green-hornet',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Six Million Dollar Man',
    description:
      'After a severely injured test pilot is rebuilt with nuclear-powered bionic limbs and implants, he serves as an intelligence agent.',
    genre: 'action',
    maturity: '12',
    slug: 'the-six-million-dollar-man',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Incredible Hulk',
    description:
      'A fugitive scientist has the curse of becoming a powerful green monster under extreme emotional stress.',
    genre: 'action',
    maturity: '12',
    slug: 'the-incredible-hulk',
  });
};
