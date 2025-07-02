export interface CulturalArticle {
  id: string;
  title: {
    english: string;
    irish: string;
  };
  category: 'history' | 'music' | 'language' | 'traditions' | 'regions' | 'festivals';
  content: string;
  summary: string;
  readingTime: number; // minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  keywords: string[];
  relatedDances: string[];
  imageUrl?: string;
  audioUrl?: string;
}

export interface IrishRegion {
  id: string;
  name: {
    english: string;
    irish: string;
  };
  description: string;
  culturalSignificance: string;
  traditionalDances: string[];
  famousLandmarks: string[];
  dialect: string;
  music: string[];
}

export const culturalArticles: CulturalArticle[] = [
  {
    id: 'history-ceili-dancing',
    title: {
      english: 'The History of Ceili Dancing',
      irish: 'Stair Rince Céilí'
    },
    category: 'history',
    difficulty: 'beginner',
    readingTime: 8,
    summary: 'Explore the rich history of Irish ceili dancing from ancient Celtic traditions to modern celebrations.',
    keywords: ['ceili', 'history', 'Ireland', 'tradition', 'community'],
    relatedDances: ['walls-of-limerick', 'siege-of-ennis'],
    content: `
# The History of Ceili Dancing

## Ancient Celtic Roots

Ceili dancing has its roots deep in ancient Celtic culture, dating back over 2,000 years. The word "céilí" (pronounced KAY-lee) comes from the Old Irish word "céile," meaning companion or partner. In ancient Ireland, a céilí was a social gathering where people came together to share stories, music, and dance.

## The Gaelic Revival

During the late 19th and early 20th centuries, Ireland experienced a cultural renaissance known as the Gaelic Revival. This movement, led by organizations like the Gaelic League (Conradh na Gaeilge), sought to preserve and promote Irish language, music, and dance traditions that had been suppressed under British rule.

The Gaelic League, founded in 1893 by Douglas Hyde and Eoin MacNeill, played a crucial role in standardizing ceili dances. They collected traditional dances from across Ireland and published them in books, ensuring these treasured traditions would not be lost.

## The Role of the Dancing Master

In 18th and 19th century Ireland, traveling dancing masters played a vital role in preserving and spreading dance traditions. These skilled performers would travel from village to village, teaching local variations of dances and creating new choreographies. They were highly respected members of society and often stayed with local families for weeks or months.

Each dancing master had their own style and repertoire, which led to the rich regional variations we see in Irish dance today. They would teach in barns, kitchens, or at crossroads - wherever space could be found for the community to gather.

## Social Importance

Ceili dancing was never just about the steps - it was about community, courtship, and cultural identity. In rural Ireland, the ceili was one of the few opportunities for young people to socialize across family lines. The dances provided a structured, chaperoned environment where young men and women could interact.

The communal nature of ceili dancing reinforced social bonds and cultural values. Everyone participated regardless of skill level, from young children to grandparents. This inclusivity helped strengthen community ties and ensured cultural traditions were passed down through generations.

## Regional Variations

Different regions of Ireland developed their own distinctive styles and dances:

- **Munster**: Known for flowing, graceful movements
- **Connacht**: Emphasized precision and intricate footwork  
- **Ulster**: Featured lively, energetic styles
- **Leinster**: Combined elements from all regions

## Modern Revival

The 20th century saw renewed interest in ceili dancing, particularly after Irish independence in 1922. The new Irish government promoted traditional culture as part of national identity. Ceili dancing became part of school curricula and was featured at state functions.

The formation of Comhdháil Rinceóirí na hÉireann (The Irish Dancing Commission) in 1930 helped standardize teaching and competition. Today, ceili dancing continues to thrive both in Ireland and in Irish communities worldwide, serving as a living link to Ireland's cultural heritage.

## Cultural Significance Today

Modern ceili dancing maintains its role as a community activity that brings people together. It's performed at weddings, festivals, and cultural celebrations throughout Ireland and the Irish diaspora. The dances continue to evolve while maintaining their traditional essence, proving that Irish culture is not a museum piece but a living, breathing tradition.

For learners today, understanding this rich history adds depth and meaning to every step, every turn, and every moment shared with fellow dancers on the floor.
    `
  },
  {
    id: 'irish-music-instruments',
    title: {
      english: 'Traditional Irish Musical Instruments',
      irish: 'Uirlisí Ceoil Traidisiúnta na hÉireann'
    },
    category: 'music',
    difficulty: 'beginner',
    readingTime: 10,
    summary: 'Discover the instruments that create the magical music for Irish dancing.',
    keywords: ['music', 'instruments', 'fiddle', 'bodhrán', 'accordion'],
    relatedDances: ['fairy-reel', 'haymakers-jig'],
    content: `
# Traditional Irish Musical Instruments

## The Heart of Irish Music

Traditional Irish music is the soul of ceili dancing. Each instrument brings its own character to the music, creating the rhythms and melodies that inspire dancers to move. Understanding these instruments helps dancers connect more deeply with the music.

## String Instruments

### The Fiddle (An Veidhlín)
The fiddle is perhaps the most iconic instrument in Irish traditional music. Identical to a violin but played in a distinctly Irish style, the fiddle produces the soaring melodies that guide dancers through their steps.

**Regional Styles:**
- **Donegal**: Fast, driving rhythms with intricate ornamentation
- **Sligo**: Smooth, flowing style with subtle decorations
- **Clare**: Rhythmic and dance-oriented
- **Kerry**: Distinctive sliding technique

### The Irish Harp (An Chláirseach)
Ireland's national instrument, the harp has a history spanning over 1,000 years. The wire-strung Irish harp produces a bright, metallic sound quite different from modern concert harps.

### The Banjo
Introduced to Ireland in the 19th century, the tenor banjo became popular in traditional music sessions. Its bright, percussive sound adds rhythmic drive to dance tunes.

## Wind Instruments

### The Tin Whistle (An Fheadóg Stáin)
Perhaps the most accessible Irish instrument, the tin whistle produces a pure, penetrating tone. Its simple fingering system makes it perfect for beginners, yet masters can create incredibly expressive music.

### The Irish Flute (An Fheadóg Mhór)
The wooden Irish flute, typically keyless, produces a breathy, haunting tone. It requires significant skill to master but creates some of the most beautiful melodies in Irish music.

### The Uilleann Pipes (Na Píobaí Uilleann)
Often called the "Irish bagpipes," uilleann pipes are bellows-blown and capable of a full chromatic range. They can play harmony, melody, and rhythm simultaneously, making them one of the most complex traditional instruments.

## Percussion and Rhythm

### The Bodhrán (An Bodhrán)
This frame drum, played with a double-headed stick called a tipper, provides the rhythmic foundation for Irish music. A skilled bodhrán player can create intricate rhythmic patterns that enhance the dancing experience.

### The Bones (Na Cnámha)
Pairs of pieces (traditionally made from sheep ribs) held between the fingers and played like castanets. They add percussive accents and rhythmic complexity to the music.

## Free Reed Instruments

### The Button Accordion (An Cairdín Cnaipí)
The button accordion, or melodeon, became popular in Ireland in the 19th century. Its powerful, rhythmic sound makes it ideal for dance music.

### The Concertina (An Consairtín)
Smaller than an accordion, the concertina produces a sweet, clear tone. The Anglo concertina is particularly popular in Irish traditional music.

## Playing Styles and Techniques

### Ornamentation
Irish musicians use various ornaments to embellish melodies:
- **Cuts**: Quick grace notes that "cut" into the main note
- **Rolls**: Rapid sequences of three or more notes
- **Crans**: Grace note patterns specific to traditional music
- **Slides**: Smooth transitions between notes

### Session Playing
Irish traditional music is often played in informal sessions where musicians gather to play together. These sessions have their own etiquette and customs that preserve the communal spirit of the music.

## The Relationship Between Music and Dance

Each type of tune serves a specific purpose in dance:
- **Jigs** (6/8 time): Light, lilting rhythms for graceful movements
- **Reels** (4/4 time): Driving, steady beats for energetic dancing
- **Hornpipes** (4/4 time): More heavily accented than reels
- **Polkas** (2/4 time): Quick, bouncy rhythms
- **Waltzes** (3/4 time): Smooth, flowing triple meter

## Learning to Listen

For dancers, developing an ear for traditional music enhances the dancing experience. Listen for:
- The steady pulse that guides your steps
- Melodic phrases that match dance figures
- Musical accents that highlight dance movements
- The interplay between different instruments

Understanding the music deepens your connection to the dance and helps you become a more expressive, musical dancer.
    `
  },
  {
    id: 'irish-language-dance-terms',
    title: {
      english: 'Irish Language in Dance',
      irish: 'An Ghaeilge sa Rince'
    },
    category: 'language',
    difficulty: 'intermediate',
    readingTime: 12,
    summary: 'Learn the beautiful Irish language terms used in ceili dancing and their cultural significance.',
    keywords: ['Gaeilge', 'Irish language', 'pronunciation', 'dance terms'],
    relatedDances: ['walls-of-limerick', 'high-caul-cap'],
    content: `
# Irish Language in Dance (An Ghaeilge sa Rince)

## The Language of Movement

The Irish language (Gaeilge) is intimately connected with traditional Irish dance. Many dance terms, movements, and concepts are best understood through their Irish names, which often reveal deeper cultural meanings and connections to Irish life and landscape.

## Essential Dance Vocabulary

### Basic Terms
- **Rince** (RIN-keh) - Dance
- **Rinceoir** (RIN-keh-ore) - Dancer (male)
- **Rinceoir mná** (RIN-keh-ore mnaw) - Female dancer
- **Céilí** (KAY-lee) - Social gathering with music and dance
- **Damhsa** (DOW-sa) - Dance (formal term)

### Movements and Steps
- **Coiscéim** (KOSH-kame) - Step
- **Léim** (LAME) - Jump or leap
- **Casadh** (KAS-oo) - Turn
- **Luascadh** (LOO-ask-oo) - Swing
- **Preabadh** (PRAB-oo) - Hop or skip

### Directions and Positions
- **Deiseal** (DESH-al) - Clockwise (literally "sunwise")
- **Tuathal** (TOO-ah-hal) - Counter-clockwise (literally "against the sun")
- **Ar aghaidh** (er AH-ee) - Forward
- **Siar** (SHEE-ar) - Backward
- **Timpeall** (TIM-pal) - Around

## Formation Terms

### Set Dancing Positions
- **Cearnóg** (KYAR-nohg) - Square
- **Lánúin** (LAWN-oo-in) - Couple
- **Líne** (LEE-neh) - Line
- **Ciorcal** (KEER-kal) - Circle

### Partner Relationships
- **Comhpháirtí** (KOH-far-tee) - Partner
- **Bean chéile** (ban KHAY-leh) - Wife/female partner
- **Fear céile** (far KAY-leh) - Husband/male partner
- **Cara** (KAR-ah) - Friend

## Musical Terms in Irish

### Types of Tunes
- **Port** (PORT) - Tune or melody
- **Portaireacht** (PORT-ar-akht) - Mouth music (lilting)
- **Fonn** (FOWN) - Air or melody
- **Rithim** (REE-him) - Rhythm

### Musical Styles
- **Ríl** (REEL) - Reel
- **Cor** (KOR) - Jig
- **Hornphíopa** (HORN-fee-pa) - Hornpipe
- **Válsa** (VAWL-sa) - Waltz

## Regional Dialects and Dance

Ireland has three main dialect regions, each with its own pronunciation and vocabulary:

### Munster (An Mhumhain)
- Southern Ireland (Cork, Kerry, Waterford, Tipperary, Clare, Limerick)
- Known for soft, musical pronunciation
- Dance terms often have softer consonants

### Connacht (Connachta)
- Western Ireland (Galway, Mayo, Roscommon, Sligo, Leitrim)
- Considered the most "pure" form of Irish
- Many traditional dance terms preserved here

### Ulster (Ulaidh)
- Northern Ireland and Donegal
- Distinctive pronunciation with harder consonants
- Unique dance terminology from isolation

## Cultural Context in Language

### Seasonal and Agricultural References
Many Irish dance terms reference the agricultural calendar:
- **Fómhar** (FOH-var) - Harvest (autumn dances)
- **Earrach** (ARR-akh) - Spring (renewal dances)
- **Samhradh** (SOW-roo) - Summer (celebration dances)
- **Geimhreadh** (GAY-vroo) - Winter (indoor gathering dances)

### Nature and Landscape
Irish dance terms often reference the natural world:
- **Sliabh** (SHLEE-av) - Mountain
- **Gleann** (GLAN) - Valley
- **Abhainn** (OW-in) - River
- **Coill** (KWIL) - Wood or forest

## Pronunciation Guide

### Consonants
- **bh** = "v" sound (like "very")
- **mh** = "v" sound (like "very")
- **ch** = guttural "kh" sound (like German "ach")
- **dh** = "y" sound at beginning, "gh" sound elsewhere
- **gh** = silent or light "y" sound
- **th** = "h" sound

### Vowels
- **á** = "aw" sound (like "law")
- **é** = "ay" sound (like "day")
- **í** = "ee" sound (like "see")
- **ó** = "oh" sound (like "go")
- **ú** = "oo" sound (like "moon")

## Traditional Blessings and Sayings

### Before Dancing
- **Sláinte agus sonas ort** (SLAWN-che ah-gus SON-as ort)
  "Health and happiness to you"

- **Go n-éirí an bóthar leat** (guh NIGH-ree an BOH-har lat)
  "May the road rise with you"

### After Dancing
- **Maith thú** (MAH hoo)
  "Well done" or "Good for you"

- **Go raibh míle maith agat** (guh rev MEE-leh MAH ah-gut)
  "A thousand thanks to you"

## Learning Through Irish

Understanding Irish language enhances dance learning by:
- Connecting movements to their cultural origins
- Providing memory aids through meaningful words
- Deepening appreciation for Irish culture
- Creating authentic pronunciation for dance calls

## Modern Usage

While English is commonly used in dance instruction today, incorporating Irish terms:
- Honors the tradition's origins
- Connects dancers to Irish heritage
- Preserves linguistic culture
- Creates a more authentic experience

Learning basic Irish dance vocabulary enriches your understanding and helps you connect more deeply with this beautiful cultural tradition.
    `
  },
  {
    id: 'irish-festivals-celebrations',
    title: {
      english: 'Irish Festivals and Celebrations',
      irish: 'Féilte agus Ceiliúradh na hÉireann'
    },
    category: 'festivals',
    difficulty: 'beginner',
    readingTime: 15,
    summary: 'Explore the traditional Irish festivals where ceili dancing comes alive.',
    keywords: ['festivals', 'celebrations', 'Samhain', 'Bealtaine', 'traditions'],
    relatedDances: ['sweets-of-may', 'fairy-reel'],
    content: `
# Irish Festivals and Celebrations

## The Celtic Calendar

Traditional Irish festivals follow the ancient Celtic calendar, marking the turning of seasons and agricultural cycles. These celebrations have been the heartbeat of Irish communities for thousands of years, and ceili dancing has always been central to the festivities.

## The Four Great Fire Festivals

### Samhain (SOW-in) - October 31st/November 1st
**The Celtic New Year**

Samhain marks the end of the harvest season and the beginning of winter. It's the most mystical of Irish festivals, when the veil between worlds is thinnest.

**Traditional Activities:**
- Lighting bonfires on hilltops
- Dancing around the fire until dawn
- Telling ghost stories and legends
- Apple bobbing and fortune telling

**Ceili Dancing Connection:**
- Circle dances represent the wheel of the year turning
- Couples dances celebrate relationships before winter separation
- Group dances strengthen community bonds for the dark months ahead

**Traditional Foods:** Barmbrack (fruit bread with hidden tokens), roasted nuts, apples

### Imbolc (IM-olk) - February 1st/2nd
**St. Brigid's Day - Festival of Light**

Imbolc celebrates the first stirrings of spring and honors Brigid, goddess of poetry, smithcraft, and healing.

**Traditional Activities:**
- Making Brigid's crosses from rushes
- Blessing animals and seeds for spring
- Lighting candles to welcome returning light
- Dancing to encourage spring's return

**Ceili Dancing Connection:**
- Gentle, flowing dances mirror awakening nature
- Partner dances celebrate renewed courtship possibilities
- Line dances represent the community emerging from winter isolation

**Traditional Foods:** Fresh dairy products, bread, early spring greens

### Bealtaine (BYAL-tin-eh) - April 30th/May 1st
**May Day - Festival of Fertility**

Bealtaine celebrates the peak of spring and the fertility of the land. It's a joyous festival of love, growth, and abundance.

**Traditional Activities:**
- Dancing around the maypole at dawn
- Driving cattle between two bonfires for protection
- Gathering flowers and making May bouquets
- Courtship rituals and matchmaking

**Ceili Dancing Connection:**
- The "Sweets of May" dance originated from this festival
- Intricate weaving dances represent fertility and growth
- Young people traditionally met their future spouses at Bealtaine dances

**Traditional Foods:** Oatcakes, fresh dairy, early summer fruits

### Lughnasadh (LOO-nas-ah) - August 1st
**Harvest Festival - First Fruits**

Lughnasadh honors Lugh, the god of skill and craftsmanship, and celebrates the first harvest.

**Traditional Activities:**
- Athletic competitions and games
- Handfasting ceremonies (trial marriages)
- Craft exhibitions and trade fairs
- Harvest dancing competitions

**Ceili Dancing Connection:**
- Energetic, competitive dances showcase skill
- Harvest dances like "The Haymaker's Jig" 
- Group celebrations strengthen community before harvest work

**Traditional Foods:** Fresh bread from new grain, berries, honey

## Regional Festivals

### Puck Fair (Aonach an Phoic) - County Kerry
One of Ireland's oldest festivals, featuring a goat crowned as king. Three days of music, dancing, and celebration in the streets of Killorglin.

### Rose of Tralee Festival - County Kerry
International festival celebrating Irish culture worldwide, featuring ceili dancing competitions and cultural events.

### Galway Arts Festival - County Galway
Modern celebration combining traditional and contemporary Irish arts, with ceili dancing workshops and performances.

### Fleadh Cheoil na hÉireann
Ireland's premier traditional music festival, rotating between different towns. Features competitions, sessions, and ceili dancing.

## Wedding Traditions

### Traditional Irish Wedding Celebrations
Irish weddings historically lasted three days, with different types of dancing each day:

**Day 1 - Formal Ceili:**
- Processional dances leading the couple to ceremony
- Blessing dances with community participation
- Formal set dances with prescribed partners

**Day 2 - Community Dancing:**
- Open dancing for all ages and skill levels
- Children's dances and learning opportunities
- Storytelling between dance sets

**Day 3 - Farewell Dancing:**
- Emotional farewell dances as families part
- Gift-giving ceremonies with dance presentations
- Final blessings for the new couple

### Wedding Dance Traditions
- **The Bride's Dance:** First dance reserved for bride and her father
- **The Money Dance:** Guests pin money to bride's dress while dancing
- **The Last Waltz:** Final dance of the celebration

## Seasonal Work Celebrations

### Harvest Celebrations
- **Threshing Dances:** Celebrated completion of grain harvest
- **Potato Picking Parties:** Community gatherings after potato harvest
- **Turf Cutting Celebrations:** Marked completion of peat cutting for winter fuel

### Fishing Festival Traditions
In coastal communities:
- **Blessing of the Fleet:** Ceremonies before fishing season
- **Safe Return Celebrations:** Dances when boats returned safely
- **Fish Market Dances:** Impromptu celebrations at successful catches

## Modern Festival Evolution

### Contemporary Irish Festivals
Today's Irish festivals blend ancient traditions with modern celebrations:

- **Electric Picnic:** Modern music festival incorporating traditional elements
- **Dublin Theatre Festival:** Includes traditional dance performances
- **Cork Jazz Festival:** Features fusion of traditional and modern music

### Diaspora Celebrations
Irish communities worldwide maintain festival traditions:
- **St. Patrick's Day:** Global celebration of Irish culture
- **Irish Cultural Centers:** Regular ceili dances and cultural events
- **University Irish Societies:** Student-led cultural celebrations

## The Social Function of Festivals

### Community Building
Irish festivals serve multiple social functions:
- Strengthening community bonds
- Preserving cultural traditions
- Teaching young people their heritage
- Celebrating life transitions
- Providing entertainment and joy

### Cultural Transmission
Festivals are crucial for passing culture to new generations:
- Informal learning through participation
- Elder guidance and storytelling
- Peer learning among young people
- Cultural pride and identity formation

## Planning Your Festival Experience

### What to Expect at a Traditional Ceili
- Welcome and introductions
- Basic instruction for beginners
- Progressive difficulty in dances
- Breaks for refreshments and socializing
- Traditional music and singing
- Community spirit and inclusivity

### Festival Etiquette
- Dress modestly and comfortably
- Participate even if you're a beginner
- Show respect for traditions and elders
- Contribute to the community atmosphere
- Learn and use basic Irish greetings

Irish festivals continue to evolve while maintaining their essential character - bringing people together to celebrate life, community, and cultural heritage through music, dance, and shared joy.
    `
  }
];

export const irishRegions: IrishRegion[] = [
  {
    id: 'munster',
    name: {
      english: 'Munster',
      irish: 'An Mhumhain'
    },
    description: 'The southern province of Ireland, known for its dramatic landscapes, rich musical traditions, and warm hospitality.',
    culturalSignificance: 'Munster is considered the heart of Irish traditional music and dance, with many of the most beloved ceili dances originating here. The region\'s musical style is characterized by flowing, melodic playing that perfectly complements the graceful movements of Munster dancing.',
    traditionalDances: ['walls-of-limerick', 'trip-to-cottage'],
    famousLandmarks: ['Ring of Kerry', 'Cliffs of Moher', 'Dingle Peninsula', 'Rock of Cashel'],
    dialect: 'Munster Irish is known for its musical quality and distinctive pronunciation patterns.',
    music: ['Sliabh na mBan', 'The Blackbird', 'Port na bPúcaí']
  },
  {
    id: 'connacht',
    name: {
      english: 'Connacht',
      irish: 'Connachta'
    },
    description: 'The western province, home to the strongest Irish-speaking communities and most traditional cultural practices.',
    culturalSignificance: 'Connacht, particularly the Gaeltacht regions, preserves the most authentic forms of Irish dance and music. The isolation of many communities helped maintain traditional practices unchanged for centuries.',
    traditionalDances: ['sweets-of-may', 'fairy-reel'],
    famousLandmarks: ['Aran Islands', 'Connemara', 'Croagh Patrick', 'Kylemore Abbey'],
    dialect: 'Connacht Irish is considered the most "standard" form, used in official translations.',
    music: ['Mo Ghile Mear', 'An Raibh Tú ag an gCarraig?', 'Óró Sé do Bheatha \'Bhaile']
  },
  {
    id: 'leinster',
    name: {
      english: 'Leinster',
      irish: 'Laighin'
    },
    description: 'The eastern province containing Dublin, blending traditional culture with modern Irish life.',
    culturalSignificance: 'As the seat of government and home to Dublin, Leinster has been the center of efforts to revive and preserve Irish culture. Many important cultural institutions are based here.',
    traditionalDances: ['siege-of-ennis', 'high-caul-cap'],
    famousLandmarks: ['Dublin Castle', 'Wicklow Mountains', 'Newgrange', 'Kilkenny Castle'],
    dialect: 'Leinster Irish, though less common today, had distinctive features now preserved in historical records.',
    music: ['Molly Malone', 'The Parting Glass', 'Whiskey in the Jar']
  },
  {
    id: 'ulster',
    name: {
      english: 'Ulster',
      irish: 'Ulaidh'
    },
    description: 'The northern province, known for its strong cultural identity and distinctive musical traditions.',
    culturalSignificance: 'Ulster, particularly Donegal, maintained unique dance and music traditions due to its geographic isolation. The province has produced many renowned traditional musicians and dancers.',
    traditionalDances: ['fairy-reel', 'haymakers-jig'],
    famousLandmarks: ['Giant\'s Causeway', 'Glenveagh National Park', 'Dunluce Castle', 'Mourne Mountains'],
    dialect: 'Ulster Irish has distinctive pronunciation and vocabulary, particularly in Donegal.',
    music: ['She Moved Through the Fair', 'The Water is Wide', 'Carrickfergus']
  }
];

export const getArticlesByCategory = (category: CulturalArticle['category']) => {
  return culturalArticles.filter(article => article.category === category);
};

export const getArticleById = (id: string) => {
  return culturalArticles.find(article => article.id === id);
};

export const getRegionById = (id: string) => {
  return irishRegions.find(region => region.id === id);
};

export const getRelatedArticles = (danceId: string) => {
  return culturalArticles.filter(article => 
    article.relatedDances.includes(danceId)
  );
};