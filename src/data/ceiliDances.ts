export interface CeiliDance {
  id: string;
  name: {
    english: string;
    irish: string;
  };
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // minutes
  participants: number;
  formation: string;
  music: {
    title: string;
    tempo: string;
    timeSignature: string;
  };
  steps: CeiliStep[];
  culturalContext: string;
  region: string;
  videoUrl?: string;
  audioUrl?: string;
}

export interface CeiliStep {
  id: string;
  name: {
    english: string;
    irish: string;
  };
  description: string;
  counts: number;
  footwork: string;
  handholds: string;
  tips: string[];
  commonMistakes: string[];
}

export const ceiliDances: CeiliDance[] = [
  {
    id: 'walls-of-limerick',
    name: {
      english: 'The Walls of Limerick',
      irish: 'Ballaí Luimní'
    },
    difficulty: 'beginner',
    duration: 8,
    participants: 4,
    formation: 'Square set (4 couples)',
    music: {
      title: 'The Walls of Limerick',
      tempo: 'Moderate',
      timeSignature: '6/8'
    },
    culturalContext: 'Named after the historic walls that surrounded Limerick city, this dance represents the strength and unity of the community. It\'s traditionally the first ceili dance taught to beginners.',
    region: 'County Limerick',
    steps: [
      {
        id: 'advance-retire',
        name: {
          english: 'Advance and Retire',
          irish: 'Dul Chun Cinn agus Cúlú'
        },
        description: 'All dancers advance to center and retire back to place',
        counts: 8,
        footwork: 'Light springs on balls of feet',
        handholds: 'Join hands in circle',
        tips: [
          'Keep shoulders back and head high',
          'Step lightly on balls of feet',
          'Maintain eye contact with other dancers'
        ],
        commonMistakes: [
          'Heavy footed stepping',
          'Looking down at feet',
          'Not moving as a group'
        ]
      },
      {
        id: 'body-step',
        name: {
          english: 'Body Step',
          irish: 'Coiscéim Choirp'
        },
        description: 'Basic ceili dancing step in place',
        counts: 8,
        footwork: 'Hop on right, step left behind, hop right, step left to side',
        handholds: 'Hands on hips',
        tips: [
          'Keep knees soft and springy',
          'Land quietly on balls of feet',
          'Maintain upright posture'
        ],
        commonMistakes: [
          'Stiff knees',
          'Heavy landings',
          'Leaning forward'
        ]
      },
      {
        id: 'swing-partner',
        name: {
          english: 'Swing with Partner',
          irish: 'Luascadh le Comhpháirtí'
        },
        description: 'Partners swing in waltz hold',
        counts: 8,
        footwork: 'Light promenade steps in circle',
        handholds: 'Waltz hold - right hand on partner\'s back, left hands joined',
        tips: [
          'Keep frame strong but relaxed',
          'Look at partner\'s face, not feet',
          'Move as one unit'
        ],
        commonMistakes: [
          'Collapsed frame',
          'Looking down',
          'Moving too fast'
        ]
      }
    ]
  },
  {
    id: 'siege-of-ennis',
    name: {
      english: 'The Siege of Ennis',
      irish: 'Léigear Inis'
    },
    difficulty: 'beginner',
    duration: 10,
    participants: 8,
    formation: 'Long set (2 lines facing)',
    music: {
      title: 'The Siege of Ennis',
      tempo: 'Lively',
      timeSignature: '6/8'
    },
    culturalContext: 'Commemorates the historic siege of Ennis in 1691. This progressive dance represents the back-and-forth nature of the conflict, with dancers advancing and retreating like armies.',
    region: 'County Clare',
    steps: [
      {
        id: 'advance-retire-lines',
        name: {
          english: 'Lines Advance and Retire',
          irish: 'Línte ag Dul Chun Cinn agus Cúlú'
        },
        description: 'Both lines advance toward each other and retire',
        counts: 8,
        footwork: 'Seven quick steps forward, pause, seven steps back',
        handholds: 'Link arms with dancers beside you',
        tips: [
          'Keep lines straight and even',
          'Advance boldly, retire gracefully',
          'Maintain connection with line partners'
        ],
        commonMistakes: [
          'Uneven lines',
          'Rushing the movements',
          'Breaking the line connection'
        ]
      },
      {
        id: 'top-couple-down',
        name: {
          english: 'Top Couple Down the Middle',
          irish: 'An Lánúin Bharr Síos sa Lár'
        },
        description: 'First couple dances down between the lines',
        counts: 16,
        footwork: 'Promenade steps down and back up',
        handholds: 'Partners join inside hands',
        tips: [
          'Dance with confidence down the center',
          'Acknowledge other dancers as you pass',
          'Keep in time with the music'
        ],
        commonMistakes: [
          'Moving too slowly',
          'Not acknowledging other dancers',
          'Poor timing'
        ]
      }
    ]
  },
  {
    id: 'haymakers-jig',
    name: {
      english: 'The Haymaker\'s Jig',
      irish: 'Port an Fhéaraigh'
    },
    difficulty: 'intermediate',
    duration: 12,
    participants: 8,
    formation: 'Square set (4 couples)',
    music: {
      title: 'The Haymaker\'s Jig',
      tempo: 'Moderate to Quick',
      timeSignature: '6/8'
    },
    culturalContext: 'Celebrates the harvest season and the community spirit of helping neighbors bring in the hay. The circular movements represent the cyclical nature of farming seasons.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'house-around',
        name: {
          english: 'House Around',
          irish: 'Timpeall an Tí'
        },
        description: 'All couples promenade around the set',
        counts: 16,
        footwork: 'Promenade step in circular formation',
        handholds: 'Promenade position - lady on gentleman\'s right',
        tips: [
          'Maintain even spacing between couples',
          'Keep the circle round, not square',
          'Flow smoothly with the music'
        ],
        commonMistakes: [
          'Bunching up couples',
          'Making the circle too small',
          'Jerky movements'
        ]
      },
      {
        id: 'lead-around',
        name: {
          english: 'Lead Around',
          irish: 'Treorú Timpeall'
        },
        description: 'Top couple leads around inside the set',
        counts: 16,
        footwork: 'Light running steps around inside',
        handholds: 'Join inside hands',
        tips: [
          'Lead with authority but grace',
          'Make eye contact with other couples',
          'Keep the movement flowing'
        ],
        commonMistakes: [
          'Moving too fast',
          'Ignoring other dancers',
          'Stopping and starting'
        ]
      }
    ]
  },
  {
    id: 'high-caul-cap',
    name: {
      english: 'The High Caul Cap',
      irish: 'An Chaipín Ard Caol'
    },
    difficulty: 'intermediate',
    duration: 15,
    participants: 8,
    formation: 'Square set (4 couples)',
    music: {
      title: 'The High Caul Cap',
      tempo: 'Moderate',
      timeSignature: '4/4'
    },
    culturalContext: 'Named after the traditional Irish women\'s cap, this dance celebrates feminine grace and strength. The intricate patterns represent the detailed needlework of traditional Irish clothing.',
    region: 'County Cork',
    steps: [
      {
        id: 'chain-ladies',
        name: {
          english: 'Chain of Ladies',
          irish: 'Slabhra na mBan'
        },
        description: 'Ladies weave in and out in a chain pattern',
        counts: 16,
        footwork: 'Light step-together-step pattern',
        handholds: 'Right hand to next lady, pass by right shoulder',
        tips: [
          'Keep the chain flowing smoothly',
          'Pass close to each other',
          'Maintain eye contact and smile'
        ],
        commonMistakes: [
          'Stopping between passes',
          'Passing too far apart',
          'Looking serious'
        ]
      },
      {
        id: 'gentlemen-star',
        name: {
          english: 'Gentlemen\'s Star',
          irish: 'Réalta na bhFear'
        },
        description: 'Gentlemen form a right-hand star in center',
        counts: 16,
        footwork: 'Walking steps around the star',
        handholds: 'Right hands in center, form a star',
        tips: [
          'Keep the star tight and even',
          'Look at the ladies while turning',
          'Maintain good posture'
        ],
        commonMistakes: [
          'Loose, floppy star',
          'Only looking inward',
          'Slouching'
        ]
      }
    ]
  },
  {
    id: 'fairy-reel',
    name: {
      english: 'The Fairy Reel',
      irish: 'Rince na Sí'
    },
    difficulty: 'advanced',
    duration: 18,
    participants: 8,
    formation: 'Square set (4 couples)',
    music: {
      title: 'The Fairy Reel',
      tempo: 'Quick and Lively',
      timeSignature: '4/4'
    },
    culturalContext: 'Connected to ancient Irish folklore about the Sídhe (fairy folk). The quick, intricate movements represent the otherworldly grace of the fairies dancing in fairy rings.',
    region: 'County Donegal',
    steps: [
      {
        id: 'double-figure-eight',
        name: {
          english: 'Double Figure of Eight',
          irish: 'Figiúr Ocht Dúbailte'
        },
        description: 'Complex weaving pattern for all dancers',
        counts: 32,
        footwork: 'Quick light steps in figure-eight pattern',
        handholds: 'No hands, individual movement',
        tips: [
          'Plan your path before moving',
          'Stay light on your feet',
          'Be aware of all other dancers'
        ],
        commonMistakes: [
          'Colliding with other dancers',
          'Heavy footwork',
          'Getting lost in the pattern'
        ]
      },
      {
        id: 'celtic-knot',
        name: {
          english: 'Celtic Knot',
          irish: 'Snaidhm Ceilteach'
        },
        description: 'Intricate interlacing pattern of all couples',
        counts: 24,
        footwork: 'Precise stepping with turns and pivots',
        handholds: 'Various holds as couples weave',
        tips: [
          'Trust your partner completely',
          'Make clean, sharp turns',
          'Keep the pattern symmetric'
        ],
        commonMistakes: [
          'Hesitating during turns',
          'Uneven pattern formation',
          'Not trusting partner'
        ]
      }
    ]
  },
  {
    id: 'trip-to-cottage',
    name: {
      english: 'The Trip to the Cottage',
      irish: 'An Turas go dtí an Teachín'
    },
    difficulty: 'beginner',
    duration: 6,
    participants: 4,
    formation: 'Square set (2 couples)',
    music: {
      title: 'The Trip to the Cottage',
      tempo: 'Moderate',
      timeSignature: '6/8'
    },
    culturalContext: 'Represents the journey to visit neighbors in rural Ireland. The dance movements mirror the paths taken across fields and over stone walls to reach a friend\'s cottage.',
    region: 'County Kerry',
    steps: [
      {
        id: 'right-left-through',
        name: {
          english: 'Right and Left Through',
          irish: 'Deas agus Clé Tríd'
        },
        description: 'Couples pass through each other',
        counts: 8,
        footwork: 'Walking steps passing right shoulders',
        handholds: 'Join hands with partner',
        tips: [
          'Pass close to the other couple',
          'Keep hold of partner\'s hand',
          'Make eye contact with other couple'
        ],
        commonMistakes: [
          'Passing too wide',
          'Dropping partner\'s hand',
          'Not acknowledging other couple'
        ]
      }
    ]
  },
  {
    id: 'sweets-of-may',
    name: {
      english: 'The Sweets of May',
      irish: 'Milseacht na Bealtaine'
    },
    difficulty: 'intermediate',
    duration: 14,
    participants: 6,
    formation: 'Two lines of three',
    music: {
      title: 'The Sweets of May',
      tempo: 'Gentle and Flowing',
      timeSignature: '3/4'
    },
    culturalContext: 'Celebrates the festival of Bealtaine (May Day) and the renewal of spring. The flowing movements represent the awakening of nature and young love.',
    region: 'County Galway',
    steps: [
      {
        id: 'may-pole-weave',
        name: {
          english: 'May Pole Weaving',
          irish: 'Fígheadh Chrann na Bealtaine'
        },
        description: 'Dancers weave in and out like ribbons around a may pole',
        counts: 24,
        footwork: 'Gentle waltz steps in weaving pattern',
        handholds: 'Alternate hands as you weave',
        tips: [
          'Flow like ribbons in the wind',
          'Keep movements soft and graceful',
          'Coordinate with music\'s 3/4 time'
        ],
        commonMistakes: [
          'Too rigid in movement',
          'Fighting the 3/4 rhythm',
          'Rushing the weaving'
        ]
      }
    ]
  }
];

export const getDancesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced') => {
  return ceiliDances.filter(dance => dance.difficulty === difficulty);
};

export const getDanceById = (id: string) => {
  return ceiliDances.find(dance => dance.id === id);
};

export const getAllDanceNames = () => {
  return ceiliDances.map(dance => ({
    id: dance.id,
    english: dance.name.english,
    irish: dance.name.irish
  }));
};