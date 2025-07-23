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
    formation: 'Two couples facing each other in lines (2x2)',
    music: {
      title: 'The Walls of Limerick',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'The simplest of all dances from the point of view of execution. Named after the historic walls that surrounded Limerick city, representing community strength and unity. Essential feature of \'long dances\' with advance and retire movements.',
    region: 'County Limerick',
    steps: [
      {
        id: 'advance-retire',
        name: {
          english: 'Advance and Retire',
          irish: 'Dul Chun Cinn agus Cúlú'
        },
        description: 'Gentleman takes partner\'s left hand in his right, both advance to meet the opposite couple (2 bars), retire to place (2 bars). Repeat the movement.',
        counts: 8,
        footwork: 'Promenade step with light springs',
        handholds: 'Gentleman\'s right hand holds partner\'s left',
        tips: [
          'Essential feature of long dances',
          'Advance boldly, retire gracefully',
          'Move as couples, not individuals'
        ],
        commonMistakes: [
          'Not maintaining partner connection',
          'Rushing the timing',
          'Poor posture during movement'
        ]
      },
      {
        id: 'half-right-left',
        name: {
          english: 'Half Right and Left',
          irish: 'Leath-Dheas agus Clé'
        },
        description: 'Ladies exchange places by side-stepping across to the left, passing each other face to face, finishing with two short threes (4 bars); gentlemen now exchange places, side-step to the right (4 bars).',
        counts: 8,
        footwork: 'Sidestep with two short threes to finish',
        handholds: 'No hands during crossing',
        tips: [
          'Ladies pass face to face',
          'Gentlemen follow after ladies complete',
          'Finish with precise two short threes'
        ],
        commonMistakes: [
          'Not passing close enough',
          'Poor timing between ladies and gentlemen', 
          'Sloppy footwork on the threes'
        ]
      },
      {
        id: 'dance-opposite',
        name: {
          english: 'Dance with Opposite',
          irish: 'Rince le hAghaidh'
        },
        description: 'Each gentleman and opposite lady take right hands, both sidestep to gentleman\'s left, finishing with two short threes (4 bars); sidestep back, finishing with two short threes (4 bars).',
        counts: 8,
        footwork: 'Sidestep with two short threes',
        handholds: 'Right hands joined',
        tips: [
          'Maintain clear right hand connection',
          'Sidestep smoothly to left then back',
          'Finish each direction with two short threes'
        ],
        commonMistakes: [
          'Weak hand connection',
          'Uneven sidestep movement',
          'Poor timing on the threes'
        ]
      },
      {
        id: 'dance-around',
        name: {
          english: 'Dance Around',
          irish: 'Rince Timpeall'
        },
        description: 'Gentleman takes own partner\'s hands, both dance a complete circle around opposite couple (8 bars), finishing up to face in the opposite direction.',
        counts: 8,
        footwork: 'Promenade step in circular motion',
        handholds: 'Partners hold both hands',
        tips: [
          'Make a complete circle around the other couple',
          'End facing opposite direction for progression',
          'Keep the circle round and even'
        ],
        commonMistakes: [
          'Not completing full circle',
          'Ending in wrong direction',
          'Making the circle too small or large'
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
    formation: 'Progressive long dance - dancers in fours, two couples in each line facing each other',
    music: {
      title: 'The Siege of Ennis',
      tempo: 'Lively jig time',
      timeSignature: '6/8'
    },
    culturalContext: 'A progressive long dance in jig time commemorating the historic siege of Ennis in 1691. The advancing and retreating movements represent the back-and-forth nature of conflict, with dancers progressing through the set like changing battle lines.',
    region: 'County Clare',
    steps: [
      {
        id: 'advance-retire-lines',
        name: {
          english: 'Lines Advance and Retire',
          irish: 'Línte ag Dul Chun Cinn agus Cúlú'
        },
        description: 'Both lines advance toward each other with seven quick steps (4 bars), then retire to places with seven quick steps (4 bars).',
        counts: 8,
        footwork: 'Seven quick jig steps forward, seven steps back',
        handholds: 'Link arms with dancers beside you in the line',
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
        id: 'sides-siege',
        name: {
          english: 'Sides',
          irish: 'Taobhanna'
        },
        description: 'Lines face their sides: advance and retire sideways (8 bars), maintaining line formation while moving laterally.',
        counts: 8,
        footwork: 'Seven quick steps to the side, seven steps back',
        handholds: 'Maintain line connection',
        tips: [
          'Keep the line formation while moving sideways',
          'Move as one cohesive unit',
          'Return to original facing direction'
        ],
        commonMistakes: [
          'Breaking line formation',
          'Individual rather than line movement',
          'Not returning to proper position'
        ]
      },
      {
        id: 'hands-across-siege',
        name: {
          english: 'Hands Across',
          irish: 'Lámha Trasna'
        },
        description: 'Four dancers from the center of each line give right hands across and dance clockwise (4 bars); reverse and give left hands, dancing back to places (4 bars).',
        counts: 8,
        footwork: 'Quick jig steps around the center',
        handholds: 'Right hands across center, then left hands',
        tips: [
          'Only center dancers participate',
          'Others mark time in their lines',
          'Maintain tight hand formation'
        ],
        commonMistakes: [
          'Wrong dancers participating',
          'Loose hand formation',
          'Poor timing with line dancers'
        ]
      },
      {
        id: 'pass-through-siege',
        name: {
          english: 'Pass Through',
          irish: 'Gabháil Tríd'
        },
        description: 'Top couple from each line pass through to the opposite line, while lines open to let them through, then close ranks (8 bars).',
        counts: 8,
        footwork: 'Confident walking steps through the lines',
        handholds: 'Partners hold inside hands while passing',
        tips: [
          'Lines must open smoothly for passing couples',
          'Passing couples move with authority',
          'Lines close ranks immediately after passing'
        ],
        commonMistakes: [
          'Lines not opening properly',
          'Hesitant passing movement',
          'Not closing ranks after passing'
        ]
      },
      {
        id: 'progression-siege',
        name: {
          english: 'Progression',
          irish: 'Dul Chun Cinn'
        },
        description: 'Couples who passed through become the new bottom couples in their lines, everyone moves up one position, creating the progressive nature of the dance.',
        counts: 8,
        footwork: 'Adjustment steps to new positions',
        handholds: 'Reform line connections in new positions',
        tips: [
          'Everyone moves up smoothly',
          'New top couples prepare for next round',
          'Maintain line integrity during progression'
        ],
        commonMistakes: [
          'Confusion about new positions',
          'Not moving up promptly',
          'Breaking line formation during progression'
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
      english: 'The High-Cauled Cap',
      irish: 'An Chaipín Ard Caol'
    },
    difficulty: 'intermediate',
    duration: 18,
    participants: 8,
    formation: '8-hand reel formation: 4 couples in square (leading tops AB, opposite tops CD, leading sides EF, opposite sides GH)',
    music: {
      title: 'The High-Cauled Cap',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'Named after the traditional Irish women\'s cap with high crown and narrow brim. A fine spirited dance requiring rhythmic vitality in the music. The intricate movements celebrate the detailed craftsmanship of traditional Irish millinery and the grace of Irish women.',
    region: 'County Cork',
    steps: [
      {
        id: 'lead-around-high-caul',
        name: {
          english: 'Lead Around',
          irish: 'Treorú Timpeall'
        },
        description: 'As in 4-Hand Reel - all couples lead around with inside hands, then reverse and return to places',
        counts: 16,
        footwork: 'Promenade step',
        handholds: 'Inside hands, then reverse hand hold',
        tips: [
          'Maintain equal distance between couples',
          'Smooth transitions in hand holds',
          'Keep formation square'
        ],
        commonMistakes: [
          'Uneven spacing',
          'Awkward hand changes',
          'Breaking the square formation'
        ]
      },
      {
        id: 'the-body-advance-retire',
        name: {
          english: 'The Body - Advance and Retire',
          irish: 'An Corp - Dul Chun Cinn agus Cúlú'
        },
        description: 'Leading tops and leading sides advance to center and retire (4 bars); opposite tops and opposite sides advance and retire (4 bars).',
        counts: 8,
        footwork: 'Promenade steps advancing and retiring',
        handholds: 'Partners hold inside hands',
        tips: [
          'Advance boldly, retire gracefully',
          'Maintain partner connection',
          'Clear distinction between the two groups'
        ],
        commonMistakes: [
          'Weak advance or retire',
          'Poor partner connection',
          'Confusion about which couples move when'
        ]
      },
      {
        id: 'figure-1-ladies-chain',
        name: {
          english: 'Figure 1 - Ladies Chain',
          irish: 'Figiúr 1 - Slabhra na mBan'
        },
        description: 'Ladies give right hands in center and turn clockwise halfway around (2 bars); each lady gives left hand to opposite gentleman and turns once around (2 bars); ladies give right hands in center again and return to places (2 bars); turn with own partners (2 bars).',
        counts: 8,
        footwork: 'Light steps for turns and chain movement',
        handholds: 'Right hands in center, left hands with gentlemen',
        tips: [
          'Keep the center chain tight',
          'Complete full turns with gentlemen',
          'Smooth transitions between movements'
        ],
        commonMistakes: [
          'Loose center formation',
          'Incomplete turns',
          'Poor timing between ladies and gentlemen'
        ]
      },
      {
        id: 'figure-2-gentlemen-chain',
        name: {
          english: 'Figure 2 - Gentlemen Chain',
          irish: 'Figiúr 2 - Slabhra na bhFear'
        },
        description: 'Gentlemen give right hands in center and turn clockwise halfway around (2 bars); each gentleman gives left hand to opposite lady and turns once around (2 bars); gentlemen give right hands in center again and return to places (2 bars); turn with own partners (2 bars).',
        counts: 8,
        footwork: 'Strong steps for turns and chain movement',
        handholds: 'Right hands in center, left hands with ladies',
        tips: [
          'Strong, confident center chain',
          'Complete full turns with ladies',
          'Lead the movement clearly'
        ],
        commonMistakes: [
          'Weak center formation',
          'Incomplete turns',
          'Not leading the ladies clearly'
        ]
      },
      {
        id: 'figure-3-all-chain',
        name: {
          english: 'Figure 3 - All Chain',
          irish: 'Figiúr 3 - Slabhra Iomlán'
        },
        description: 'All dancers give right hands across in center and turn clockwise halfway (2 bars); each dancer gives left hand to the person opposite and turns once around (2 bars); all give right hands in center again and return to places (2 bars); turn with own partners (2 bars).',
        counts: 8,
        footwork: 'Coordinated steps for all dancers',
        handholds: 'Right hands across center, left hands with opposites',
        tips: [
          'Eight hands in center - keep formation tight',
          'Everyone must coordinate the timing',
          'Strong finish with partner turns'
        ],
        commonMistakes: [
          'Chaos in the center with eight people',
          'Poor timing coordination',
          'Weak partner finish'
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
    id: 'four-hand-reel',
    name: {
      english: 'The Four-Hand Reel',
      irish: 'Rince Ceithre Lámh'
    },
    difficulty: 'beginner',
    duration: 12,
    participants: 4,
    formation: 'Two couples facing each other (gentleman A and lady B facing gentleman C and lady D)',
    music: {
      title: 'Any suitable reel',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'One of the fundamental Irish ceili dances, forming the basis for understanding more complex group dances. The structured movements of Lead Around, The Body, and Figures teach essential Irish dance principles.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'lead-around',
        name: {
          english: 'Lead Around',
          irish: 'Treorú Timpeall'
        },
        description: 'Dancers half-right turn and lead around a complete circle (8 bars); release hands, about turn inwards, gentleman takes partner\\'s right hand in his left and both lead back to place (8 bars).',
        counts: 16,
        footwork: 'Promenade step in circular formation',
        handholds: 'Inside hands joined, then switch to right-left hold',
        tips: [
          'Keep equal distance between couples',
          'About turn must be inward',
          'Smooth transition between hand holds'
        ],
        commonMistakes: [
          'Turning outward instead of inward',
          'Uneven spacing in the circle',
          'Awkward hand transitions'
        ]
      },
      {
        id: 'the-body-square',
        name: {
          english: 'The Body - The Square',
          irish: 'An Corp - An Cearnóg'
        },
        description: 'Gentlemen sidestep a square in anti-clockwise direction, while ladies sidestep a square in clockwise direction, all finishing with two short-threes after each side-step (16 bars).',
        counts: 16,
        footwork: 'Sidestep with two short threes at each corner',
        handholds: 'No hands during square movement',
        tips: [
          'Each person passes every other dancer twice',
          'Lady passes in front each time',
          'Keep the square shape precise'
        ],
        commonMistakes: [
          'Making the square too small',
          'Not finishing with two short threes',
          'Poor timing with other dancers'
        ]
      },
      {
        id: 'the-body-four-sevens',
        name: {
          english: 'The Body - Four Sevens',
          irish: 'An Corp - Ceithre Seachtar'
        },
        description: 'All four dancers dance seven steps of reel (on the spot), pause on the 8th beat (2 bars). Repeat this movement four times (8 bars total).',
        counts: 8,
        footwork: 'Seven reel steps in place, pause on 8th beat',
        handholds: 'No hands, individual movement',
        tips: [
          'Stay in your position while dancing',
          'Count precisely: seven steps, then pause',
          'Maintain good posture throughout'
        ],
        commonMistakes: [
          'Moving out of position',
          'Not pausing on the 8th beat',
          'Poor timing with other dancers'
        ]
      },
      {
        id: 'hands-across',
        name: {
          english: 'The Body - Hands Across',
          irish: 'An Corp - Lámha Trasna'
        },
        description: 'All four dancers give right hands across in the centre, shoulder high, dance around clockwise (4 bars); release hands, reverse, give left hands across and dance back to place (4 bars).',
        counts: 8,
        footwork: 'Walking steps around the center',
        handholds: 'Right hands across center, then left hands',
        tips: [
          'Keep hands at shoulder height',
          'Maintain tight formation in center',
          'Smooth transition between right and left'
        ],
        commonMistakes: [
          'Hands too low or too high',
          'Loose formation in center',
          'Rushing the turn-around'
        ]
      },
      {
        id: 'the-body-down-centre',
        name: {
          english: 'The Body - Down the Centre',
          irish: 'An Corp - Síos sa Lár'
        },
        description: 'Gentleman A and lady D take right hands and dance down between gentleman C and lady B (4 bars); gentleman C and lady B dance up between gentleman A and lady D to opposite positions (4 bars).',
        counts: 8,
        footwork: 'Promenade steps passing through center',
        handholds: 'Right hands with diagonal opposite',
        tips: [
          'Pass through the center confidently',
          'Other couple moves up as you move down',
          'End in opposite positions'
        ],
        commonMistakes: [
          'Not taking the correct hands',
          'Poor timing between couples',
          'Ending in wrong positions'
        ]
      },
      {
        id: 'the-body-right-left-chain',
        name: {
          english: 'The Body - Right and Left Chain',
          irish: 'An Corp - Slabhra Deas agus Clé'
        },
        description: 'Gentleman A and lady D advance and give right hands, pass each other by the right (1 bar); turn to their left and give left hands to their own partners (1 bar); gentleman A and lady B, and gentleman C and lady D advance giving right hands and pass by the right (1 bar); turn left and give left hands to original partners, finishing in original positions (1 bar). Total: 4 bars, then repeat to complete 8 bars.',
        counts: 8,
        footwork: 'Quick steps for hand changes and passes',
        handholds: 'Alternating right and left hands as described',
        tips: [
          'Quick, precise hand changes',
          'Always turn to your left after right-hand pass',
          'End exactly where you started'
        ],
        commonMistakes: [
          'Turning right instead of left',
          'Slow hand changes',
          'Not returning to original position'
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
  },
  {
    id: 'morris-reel',
    name: {
      english: 'The Morris Reel',
      irish: 'Rince Morris'
    },
    difficulty: 'intermediate',
    duration: 16,
    participants: 8,
    formation: '8-hand reel formation: 4 couples in square, same as High-Cauled Cap',
    music: {
      title: 'Any suitable reel',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'A traditional 8-hand Irish reel with distinctive "Sides" movements where couples exchange positions. The name Morris may derive from ancient ceremonial dances, though this is purely Irish in character.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'lead-around-morris',
        name: {
          english: 'Lead Around',
          irish: 'Treorú Timpeall'
        },
        description: 'As in 4-Hand Reel - all couples lead around with inside hands, then reverse and return to places',
        counts: 16,
        footwork: 'Promenade step',
        handholds: 'Inside hands, then reverse hand hold',
        tips: [
          'Maintain equal distance between couples',
          'Smooth transitions in hand holds',
          'Keep formation square'
        ],
        commonMistakes: [
          'Uneven spacing',
          'Awkward hand changes',
          'Breaking the square formation'
        ]
      },
      {
        id: 'sides-morris',
        name: {
          english: 'Sides',
          irish: 'Taobhanna'
        },
        description: 'Partners take hands (right in right, left in left). Leading and opposite tops sidestep right to positions of contrary couples, while leading and opposite sides sidestep left to contrary positions. All ending with two short threes (4 bars). Sidestep back to places (4 bars).',
        counts: 8,
        footwork: 'Sidestep with two short threes',
        handholds: 'Both hands with partner (right in right, left in left)',
        tips: [
          'When sidestepping right, always keep behind',
          'When sidestepping left, always keep in front',
          'Maintain strong partner connection'
        ],
        commonMistakes: [
          'Wrong positioning (front/behind)',
          'Poor partner connection',
          'Not ending with two short threes'
        ]
      },
      {
        id: 'figure-1-ladies-chain-morris',
        name: {
          english: 'Figure 1 - Ladies Chain',
          irish: 'Figiúr 1 - Slabhra na mBan'
        },
        description: 'Ladies give right hands in center and turn clockwise halfway around (2 bars); each lady gives left hand to opposite gentleman and turns once around (2 bars); ladies give right hands in center again and return to places (2 bars); turn with own partners (2 bars).',
        counts: 8,
        footwork: 'Light steps for turns and chain movement',
        handholds: 'Right hands in center, left hands with gentlemen',
        tips: [
          'Keep the center chain tight',
          'Complete full turns with gentlemen',
          'Smooth transitions between movements'
        ],
        commonMistakes: [
          'Loose center formation',
          'Incomplete turns',
          'Poor timing between ladies and gentlemen'
        ]
      },
      {
        id: 'figure-2-gentlemen-chain-morris',
        name: {
          english: 'Figure 2 - Gentlemen Chain',
          irish: 'Figiúr 2 - Slabhra na bhFear'
        },
        description: 'Gentlemen give right hands in center and turn clockwise halfway around (2 bars); each gentleman gives left hand to opposite lady and turns once around (2 bars); gentlemen give right hands in center again and return to places (2 bars); turn with own partners (2 bars).',
        counts: 8,
        footwork: 'Strong steps for turns and chain movement',
        handholds: 'Right hands in center, left hands with ladies',
        tips: [
          'Strong, confident center chain',
          'Complete full turns with ladies',
          'Lead the movement clearly'
        ],
        commonMistakes: [
          'Weak center formation',
          'Incomplete turns',
          'Not leading the ladies clearly'
        ]
      },
      {
        id: 'figure-3-all-chain-morris',
        name: {
          english: 'Figure 3 - All Chain',
          irish: 'Figiúr 3 - Slabhra Iomlán'
        },
        description: 'All dancers give right hands across in center and turn clockwise halfway (2 bars); each dancer gives left hand to the person opposite and turns once around (2 bars); all give right hands in center again and return to places (2 bars); turn with own partners (2 bars).',
        counts: 8,
        footwork: 'Coordinated steps for all dancers',
        handholds: 'Right hands across center, left hands with opposites',
        tips: [
          'Eight hands in center - keep formation tight',
          'Everyone must coordinate the timing',
          'Strong finish with partner turns'
        ],
        commonMistakes: [
          'Chaos in the center with eight people',
          'Poor timing coordination',
          'Weak partner finish'
        ]
      }
    ]
  },
  {
    id: 'eight-hand-reel',
    name: {
      english: 'The Eight-Hand Reel',
      irish: 'Rince Ocht Lámh'
    },
    difficulty: 'intermediate',
    duration: 20,
    participants: 8,
    formation: '8-hand reel formation: 4 couples in square, same formation as High-Cauled Cap and Morris Reel',
    music: {
      title: 'Any suitable reel',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'A traditional Irish 8-hand reel featuring complex movements including Extended Sides, Skip Across, Return Chain, and Back to Back. This dance showcases the sophisticated choreography of Irish ceili dancing with intricate partner and group interactions.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'lead-around-eight-hand',
        name: {
          english: 'Lead Around',
          irish: 'Treorú Timpeall'
        },
        description: 'As in other 8-hand reels - all couples lead around with inside hands, then reverse and return to places',
        counts: 16,
        footwork: 'Promenade step',
        handholds: 'Inside hands, then reverse hand hold',
        tips: [
          'Maintain equal distance between couples',
          'Smooth transitions in hand holds',
          'Keep formation square'
        ],
        commonMistakes: [
          'Uneven spacing',
          'Awkward hand changes',
          'Breaking the square formation'
        ]
      },
      {
        id: 'extended-sides',
        name: {
          english: 'Extended Sides',
          irish: 'Taobhanna Fadaithe'
        },
        description: 'Partners take hands (right in right, left in left). Leading and opposite tops sidestep right to positions of contrary couples, while leading and opposite sides sidestep left to contrary positions, all finishing with two short threes (4 bars). All turn their partners once around (4 bars). Sidestep back to places with two short threes (4 bars). Turn partners once around (4 bars).',
        counts: 16,
        footwork: 'Sidestep with two short threes, then partner turns',
        handholds: 'Both hands with partner, then partner turn position',
        tips: [
          'Extended version includes partner turns',
          'When sidestepping right, always keep behind',
          'When sidestepping left, always keep in front',
          'Complete full partner turns'
        ],
        commonMistakes: [
          'Wrong positioning during sidestep',
          'Incomplete partner turns',
          'Poor timing between movements'
        ]
      },
      {
        id: 'skip-across',
        name: {
          english: 'Skip Across',
          irish: 'Scipeáil Trasna'
        },
        description: 'Leading tops and leading sides skip across to opposite positions, passing each other in the center (4 bars); opposite tops and opposite sides skip across to leading positions (4 bars).',
        counts: 8,
        footwork: 'Light skipping steps across the set',
        handholds: 'Partners hold inside hands while skipping',
        tips: [
          'Skip lightly and gracefully',
          'Pass close in the center',
          'Keep partner connection throughout'
        ],
        commonMistakes: [
          'Heavy footwork',
          'Passing too wide in center',
          'Losing partner connection'
        ]
      },
      {
        id: 'return-chain',
        name: {
          english: 'Return Chain',
          irish: 'Slabhra Fillte'
        },
        description: 'All dancers give right hands across in center and dance clockwise (2 bars); each gives left hand to the person now opposite and turns once around (2 bars); all give right hands in center again and dance back to places (2 bars); turn with own partners (2 bars).',
        counts: 8,
        footwork: 'Chain movement with coordinated turns',
        handholds: 'Right hands across, then left hands with opposites',
        tips: [
          'Keep the center chain tight with eight people',
          'Coordinate timing with all dancers',
          'Strong partner finish'
        ],
        commonMistakes: [
          'Chaos in the center',
          'Poor timing coordination',
          'Weak partner connection at end'
        ]
      },
      {
        id: 'back-to-back',
        name: {
          english: 'Back to Back',
          irish: 'Droim le Droim'
        },
        description: 'Partners pass each other back to back (dos-à-dos): advance toward each other, pass by the right shoulder without turning, step back passing by the left shoulder, and return to place (8 bars).',
        counts: 8,
        footwork: 'Walking steps in dos-à-dos pattern',
        handholds: 'No hands during back-to-back movement',
        tips: [
          'Maintain eye contact until passing',
          'Pass close without touching',
          'Keep shoulders parallel during the movement'
        ],
        commonMistakes: [
          'Turning while passing',
          'Passing too far apart',
          'Poor posture during movement'
        ]
      }
    ]
  },
  {
    id: 'bridge-of-athlone',
    name: {
      english: 'The Bridge of Athlone',
      irish: 'Droichead Atha Luain'
    },
    difficulty: 'intermediate',
    duration: 12,
    participants: 8,
    formation: 'Long Dance in Double Jig time for any number of couples. Formation as in \'Rince Fada\' - two lines facing each other, partners opposite',
    music: {
      title: 'The Bridge of Athlone',
      tempo: 'Double Jig',
      timeSignature: '6/8'
    },
    culturalContext: 'A progressive Long Dance from the Irish Dance Commission repertoire. The dance moves through several complex figures with couples progressing down the line. Named after the historic bridge crossing the River Shannon at Athlone, representing connection and passage.',
    region: 'County Westmeath',
    steps: [
      {
        id: 'rising-step-advance-retire',
        name: {
          english: 'Rising Step, Advance and Retire',
          irish: 'Céim Ardaithe, Dul Chun Cinn agus Cúlú'
        },
        description: 'Each line of dancers hold hands and all dance \'Rising Step\' twice, beginning on right foot (4 bars). The lines advance and retire once with Promenade Step (4 bars). All again dance \'Rising Step\' twice (4 bars), then release hands, advance and pass through, by partners right, to opposite side, and turn right to face back (4 bars). Repeat all above, crossing back to places.',
        counts: 32,
        footwork: 'Rising step on both feet, then promenade step for advance/retire',
        handholds: 'Hands joined in lines, then released for passing through',
        tips: [
          'Begin Rising Step on right foot, then left',
          'Pass through by right shoulders',
          'Complete turn to face back after crossing'
        ],
        commonMistakes: [
          'Starting Rising Step on wrong foot',
          'Not turning properly after crossing',
          'Poor timing between step patterns'
        ]
      },
      {
        id: 'down-the-centre',
        name: {
          english: 'Down the Centre',
          irish: 'Síos an Lár'
        },
        description: 'First couple (sometimes the first three or five couples if the line is long) take right hands and dance Sidestep down the centre between the two lines, finishing with two short \'threes\' (4 bars); sidestep back to places, finishing as before (4 bars). While they are dancing this, all the other dancers in the line stand in places.',
        counts: 8,
        footwork: 'Sidestep with two short threes finish',
        handholds: 'Right hands joined between partners',
        tips: [
          'Leading couples only dance this figure',
          'Maintain good formation down center',
          'Precise two short threes to finish'
        ],
        commonMistakes: [
          'Other couples moving when they should be still',
          'Poor sidestep technique',
          'Sloppy finish with the threes'
        ]
      },
      {
        id: 'cast-off',
        name: {
          english: 'Cast Off',
          irish: 'Caitheamh Amach'
        },
        description: 'Leading couple (or couples) now cast off, followed by all the dancers in the line, the ladies promenading outside their line, and dancing down towards the opposite end of the line, the gents dancing in a similar manner on their side. (Nowadays at Céilithe, this, and the following movements are generally walked, to march-time music).',
        counts: 8,
        footwork: 'Promenade step or walking to march time',
        handholds: 'No hands - individual movement',
        tips: [
          'Ladies go outside their line',
          'Gentlemen mirror on their side', 
          'Often done to march time music'
        ],
        commonMistakes: [
          'Not following the leading couple',
          'Going the wrong direction',
          'Not maintaining line formation'
        ]
      },
      {
        id: 'the-bridge',
        name: {
          english: 'The Bridge',
          irish: 'An Droichead'
        },
        description: 'When the couple (or couples) who have done movement B reach the end of the line, they turn in to meet, dance a little way up, with inside hands joined, and then form an arch by joining both hands and holding them in a raised position. The dancers following them pass underneath the arch and return to the top of the set, forming into two lines as at the beginning. When they reach their places they form a \'bridge\' by joining both hands with partner (uncrossed) and holding them in a raised position. The leading couple (or couples) now release hands and dance to the top of the set, the lady passing under the \'bridge\', the gent passing outside. When they reach the top they dance back again, the gent this time passing under the \'bridge\', while the lady passes outside it.',
        counts: 32,
        footwork: 'Promenade step for movement, walking under bridges',
        handholds: 'Inside hands for leading couple, both hands raised for bridges',
        tips: [
          'Form clear arch at bottom of set',
          'Take turns passing under and over',
          'Maintain bridge formation until all pass through'
        ],
        commonMistakes: [
          'Weak arch formation',
          'Not alternating who goes under the bridge',
          'Poor coordination between couples'
        ]
      },
      {
        id: 'dance-around-finale',
        name: {
          english: 'Dance Around to Finish',
          irish: 'Rince Timpeall chun Críochnú'
        },
        description: 'On reaching the bottom of the set they form up at the ends of the lines, and the other dancers release partners hands. The Dance is repeated, the couple (or couples) now at the top of the set leading.',
        counts: 8,
        footwork: 'Formation movement to restart',
        handholds: 'Release all hands to reform lines',
        tips: [
          'New leading couple takes over',
          'Everyone reforms for next repetition',
          'Clean transition between rounds'  
        ],
        commonMistakes: [
          'Not reforming properly',
          'Confusion about who leads next',
          'Poor timing for restart'
        ]
      }
    ]
  },
  {
    id: 'waves-of-tory',
    name: {
      english: 'The Waves of Tory',  
      irish: 'Tonnaí Thoraigh'
    },
    difficulty: 'intermediate',
    duration: 15,
    participants: 12,
    formation: 'Long Dance in Reel Time for any even number of couples. The dance is progressive and the couples are in sets of four - two lines facing each other',
    music: {
      title: 'The Waves of Tory',
      tempo: 'Reel Time',
      timeSignature: '2/4'
    },
    culturalContext: 'The \'waves\' in this dance represent the waves frequently seen around the island of Tory off the north coast of Donegal. A complex progressive long dance from the Irish Dance Commission with intricate weaving patterns that mirror the ocean\'s movement.',
    region: 'County Donegal',
    steps: [
      {
        id: 'advance-and-retire',
        name: {
          english: 'Advance and Retire',
          irish: 'Dul Chun Cinn agus Cúlú'
        },
        description: 'The two lines advance towards each other with Promenade Step (2 bars) and retire to place (2 bars). This movement is then repeated (4 bars).',
        counts: 8,
        footwork: 'Promenade step for advance and retire',
        handholds: 'Hands joined in lines',
        tips: [
          'Move as complete lines, not individuals',
          'Maintain good posture during advance',
          'Retire gracefully to starting position'
        ],
        commonMistakes: [
          'Lines not staying straight',
          'Poor timing between advance and retire',
          'Not maintaining line formation'
        ]
      },
      {
        id: 'right-left-hands-across',
        name: {
          english: 'Right and Left Hands Across',
          irish: 'Lámha Trasna Dheis agus Chlé'
        },
        description: 'Each set of four dancers give right hand across in the centre, shoulder high, and dance around clockwise. On the last \'three\' they release hands and turn in (4 bars). They now give left hands across and wheel around anti-clockwise, to finish in lines again (4 bars).',
        counts: 8,
        footwork: 'Strong steps for wheel movements',
        handholds: 'Right hands across center, then left hands across',
        tips: [
          'Keep hands at shoulder height',
          'Release on the last three beat',
          'Complete clockwise then anti-clockwise'
        ],
        commonMistakes: [
          'Hands too low in center formation',
          'Not releasing at proper time',
          'Poor formation returning to lines'
        ]
      },
      {
        id: 'advance-retire-repeat',
        name: {
          english: 'Advance and Retire (Repeat)',
          irish: 'Dul Chun Cinn agus Cúlú (Arís)'
        },
        description: 'The same as the first movement - advance and retire twice.',
        counts: 8,
        footwork: 'Promenade step as before',
        handholds: 'Hands joined in lines',
        tips: [
          'Identical to first movement',
          'Maintain energy and precision',
          'Prepare for march time transition'
        ],
        commonMistakes: [
          'Getting sloppy on repeat',
          'Not maintaining the same quality',
          'Poor preparation for next section'
        ]
      },
      {
        id: 'left-right-hands-across',
        name: {
          english: 'Left and Right Hands Across',
          irish: 'Lámha Trasna Chlé agus Dheis'
        },
        description: 'The same as movement 2 above, but all commence by giving left hands across, and go round anti-clockwise first.',
        counts: 8,
        footwork: 'Strong steps for wheel movements, reversed direction',
        handholds: 'Left hands across center first, then right hands across',
        tips: [
          'Start with left hands this time',
          'Anti-clockwise then clockwise',
          'Mirror the previous hands across'
        ],
        commonMistakes: [
          'Starting with wrong hand',
          'Going wrong direction first',
          'Confusion with the reversal'
        ]
      },
      {
        id: 'lead-off-to-right',
        name: {
          english: 'Lead off to the Right and up the Centre',
          irish: 'Treoir ar Dheis agus suas an Lár'
        },
        description: 'All couples turn to gents\' left and take inside hands. Couple 1 lead off to the right and down to the bottom of the set followed by the other couples. Couple 1 turn right again and lead up the centre to place, the other couples following. (This movement and the following movements are usually done to march time music).',
        counts: 16,
        footwork: 'March time music - walking steps',
        handholds: 'Inside hands joined for couples',
        tips: [
          'Usually done to march time',
          'Follow the leading couple precisely',
          'Maintain couple formation'
        ],
        commonMistakes: [
          'Not following leader properly',
          'Breaking couple holds',
          'Wrong timing with march music'
        ]
      },
      {
        id: 'the-waves',
        name: {
          english: 'The Waves',
          irish: 'Na Tonnaí'
        },
        description: 'Couple 1 release hands, turn in to each other and then face down the hall, take inside hands and raise them to form an arch and promenade towards couple 2 who pass under the arch made by Couple 1 to the top of the set and turn about. Couple 1 now exchange places with Couple 3 in the same manner except that Couple 3 make the arch and Couple 1 pass under. Couple 1 continue in the same manner down to the bottom of the set, making arches and passing under alternately. Each succeeding couple, on reaching the top of the set, turn about, face down the hall, form an arch, and repeat the movement down the set as described for Couple 1.',
        counts: 32,
        footwork: 'Promenade step under arches, walking formation',
        handholds: 'Inside hands raised for arches, released for passing',
        tips: [
          'Alternate making arches and passing under',
          'Each couple follows the wave pattern',
          'Turn about properly at ends'
        ],
        commonMistakes: [
          'Not alternating arch/pass pattern',
          'Poor arch formation',
          'Confusion about when to turn'
        ]
      },
      {
        id: 'cast-off-waves',
        name: {
          english: 'Cast Off',
          irish: 'Caitheamh Amach'
        },
        description: 'Couple 1 release hands. Cast off (lady to the right and gent to the left), and march down the set followed by the other dancers who have marched to Couple 1\'s position and cast off in the same manner. When they reach the bottom, Couples 1 and 2 take both hands uncrossed and raise them to form an arch. Couple 3 take inside hands and pass under the arch and up to the top of the set, followed by the other dancers. When all have passed under, they form again into two lines, partners facing each other, but Couples 1 and 2 remaining at the bottom of the set.',
        counts: 24,
        footwork: 'March time walking, casting movements',
        handholds: 'Release for cast off, then arch formation',
        tips: [
          'Lady goes right, gentleman goes left',
          'Form clear arch at bottom',
          'Reform lines with new positions'
        ],
        commonMistakes: [
          'Going wrong direction on cast off', 
          'Weak arch at bottom',
          'Not reforming lines properly'
        ]
      }
    ]
  },
  {
    id: 'haymakers-jig',
    name: {
      english: 'The Haymakers\' Jig',
      irish: 'Rince na bhFéarmóirí Féir'
    },
    difficulty: 'intermediate',
    duration: 10,
    participants: 10,
    formation: 'Long Dance in Double Jig Time for five couples. Partners face each other in two lines',
    music: {
      title: 'The Haymakers\' Jig',
      tempo: 'Double Jig',
      timeSignature: '6/8'
    },
    culturalContext: 'A traditional harvest dance celebrating the hay-making season in rural Ireland. This dance captures the communal spirit of agricultural work, where neighbors would come together to help with the harvest. The movements reflect the rhythm of scythe swinging and the joy of completed work.',
    region: 'All Ireland - Agricultural communities',
    steps: [
      {
        id: 'advance-and-retire-haymakers',
        name: {
          english: 'Advance and Retire',
          irish: 'Dul Chun Cinn agus Cúlú'
        },
        description: 'The lines of dancers advance towards each other with Promenade Step, and retire to places (4 bars). Repeat (4 bars). All dance Rising Step on right foot (2 bars), then on left foot (2 bars), and lines advance and retire once more (4 bars).',
        counts: 16,
        footwork: 'Promenade step for advance/retire, Rising Step on both feet',
        handholds: 'Hands joined in lines',
        tips: [
          'Strong advance, graceful retire',
          'Rising Step on right foot first, then left',
          'Maintain line formation throughout'
        ],
        commonMistakes: [
          'Poor line formation during advance',
          'Starting Rising Step on wrong foot',
          'Not retiring to exact starting position'
        ]
      },
      {
        id: 'turn-in-centre-haymakers',
        name: {
          english: 'Turn in Centre',
          irish: 'Casadh sa Lár'
        },
        description: 'Gent Number One and lady of last couple advance with Promenade Step to meet in centre, and taking right hands, turn once and dance back to places (4 bars). Gent of last couple and lady of first couple now advance to centre and do the same movement (4 bars). This movement is now repeated by each of these same couples, but this time they take left hands when turning (8 bars).',
        counts: 16,
        footwork: 'Promenade step to center, turning step',
        handholds: 'Right hands for first turn, left hands for second turn',
        tips: [
          'Clear advance to exact center',
          'Complete full turn before returning',
          'Right hands first, then left hands'
        ],
        commonMistakes: [
          'Not meeting in exact center',
          'Incomplete turns',
          'Wrong couples advancing'
        ]
      },
      {
        id: 'swing-in-centre-haymakers',
        name: {
          english: 'Swing in Centre',
          irish: 'Luascadh sa Lár'
        },
        description: 'Gent of first couple and lady of last couple now advance again to centre, but this time they take both hands, crossed, and swing around (6 bars), before retiring to place (2 bars). Gent of last couple and lady of first couple repeat this movement (8 bars).',
        counts: 16,
        footwork: 'Promenade step to center, swinging step',
        handholds: 'Both hands crossed for swinging',
        tips: [
          'Take both hands crossed properly',
          'Six bars of energetic swinging',
          'Clean retire to original places'
        ],
        commonMistakes: [
          'Incorrect hand crossing',
          'Too much or too little swinging time',
          'Poor return to places'
        ]
      },
      {
        id: 'link-arms-haymakers',
        name: {
          english: 'Link Arms',
          irish: 'Nasc Lámha'
        },
        description: 'The lady and gent of the first couple advance to meet, link right arms and turn once (2 bars); then they smoothly dance on to second couple, the gent linking left arms with the second lady, and the lady linking with the second gent; again pass back to partner (2 bars). The leading couple link right arms again and turn once (2 bars) and pass on to the third couple whom they turn – and so on until they have danced with the last couple. The first couple now take hands and swing down centre to original places.',
        counts: 32,
        footwork: 'Linking steps, smooth transitions between couples',
        handholds: 'Right arms linked, then left arms with others',
        tips: [
          'Smooth progression down the line',
          'Complete interaction with each couple',
          'Finish with swing down center'
        ],
        commonMistakes: [
          'Rushed progression through couples',
          'Not completing full interactions',
          'Poor formation returning to place'
        ]
      },
      {
        id: 'arch-haymakers',
        name: {
          english: 'Arch',
          irish: 'Stuaim'
        },
        description: 'The gent and lady of the first couple now turn outwards and march along outside their respective lines, followed by each line of dancers until they come to the end of the set, where they face each other and hold both hands, uncrossed, above, to form an arch. The other couples meet in turn, and taking inside hands, pass under the arch and back along the line of the dance, till couple No. 2, having released hands, occupy the place of couple 1, couple 3 being in the place of couple 2 and so on. The original leading couple now fall into line in the place of the last couple, and all are now in line to recommence dance in the new position.',
        counts: 40,
        footwork: 'Marching steps along outside lines, promenade under arch',
        handholds: 'Both hands uncrossed for arch, inside hands for passing',
        tips: [
          'March clearly along outside of lines',
          'Form strong arch at bottom',
          'Progressive reformation with new positions'
        ],
        commonMistakes: [
          'Not following the leading couple properly',
          'Weak arch formation',
          'Confusion in new position formation'
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
    difficulty: 'intermediate',
    duration: 12,
    participants: 16,
    formation: 'Long Dance in Jig Time. Dancers line up in fours, two couples in each line; each set of two couples stands facing another set of two couples',
    music: {
      title: 'The Siege of Ennis',
      tempo: 'Jig Time',
      timeSignature: '6/8'
    },
    culturalContext: 'Named after the historic Siege of Ennis in County Clare, this dance represents the strategic movements and community solidarity during times of conflict. The interwoven patterns symbolize the unity and tactical cooperation needed during challenging periods in Irish history.',
    region: 'County Clare',
    steps: [
      {
        id: 'advance-and-retire-siege',
        name: {
          english: 'Advance and Retire',
          irish: 'Dul Chun Cinn agus Cúlú'
        },
        description: 'Each set of four dancers take hands and advance to opposite four (2 bars); retire (2 bars). Advance and retire again (4 bars).',
        counts: 8,
        footwork: 'Promenade step for advance and retire',
        handholds: 'Hands joined in sets of four',
        tips: [
          'Move as complete sets of four',
          'Strong advance, controlled retire',
          'Maintain set formation throughout'
        ],
        commonMistakes: [
          'Sets breaking formation',
          'Poor timing between advance and retire',
          'Not maintaining proper spacing'
        ]
      },
      {
        id: 'sides-siege',
        name: {
          english: 'Sides',
          irish: 'Taobhanna'
        },
        description: 'The couple on the left of each line of four sidestep to the right behind, ending with rise and grind, while couple on right of each line of four sidestep to left, in front (4 bars); all sidestep back to place, ending with Rise and Grind (4 bars).',
        counts: 8,
        footwork: 'Sidestep with Rise and Grind finish',
        handholds: 'No hands during sidestep movement',
        tips: [
          'Left couple goes right behind',
          'Right couple goes left in front',
          'Rise and Grind finish is essential'
        ],
        commonMistakes: [
          'Wrong couples moving wrong directions',
          'Poor Rise and Grind technique',
          'Not maintaining couple integrity'
        ]
      },
      {
        id: 'hands-across-siege',
        name: {
          english: 'Hands Across',
          irish: 'Lámha Trasna'
        },
        description: 'The two ladies and two gentlemen facing each other in the centre give right hands across and dance round to the right (4 bars); release hands, reverse, give left hand across, and dance to the left back to place (4 bars). At the same time the gentleman on the left of each line of four takes right hand of the lady opposite him, both dance around to the right, release hands, reverse, take left hands and dance to the left back to place.',
        counts: 8,
        footwork: 'Wheel steps for hands across movement',
        handholds: 'Right hands across center, then left hands across',
        tips: [
          'Center four and outside pairs move simultaneously',
          'Right hands across first, then left',
          'Complete coordination between all dancers'
        ],
        commonMistakes: [
          'Only center four moving',
          'Poor coordination with outside pairs',
          'Wrong direction for hands across'
        ]
      },
      {
        id: 'advance-retire-pass-through',
        name: {
          english: 'Advance, Retire and Pass Through',
          irish: 'Dul Chun Cinn, Cúlú agus Dul Tríd'
        },
        description: 'Advance and retire as explained in first movement (4 bars). All advance again (2 bars); each set of four facing the music raise hands allowing opposite four to pass under, one dancer under each arch, outer gentlemen passing on the outside, all advancing so as to meet oncoming set of four dancers.',
        counts: 8,
        footwork: 'Promenade step for advance, walking under arches',
        handholds: 'Hands raised for arches, released for passing',
        tips: [
          'Form proper arches for passing',
          'Outer gentlemen go around outside',
          'Meet new set after passing through'
        ],
        commonMistakes: [
          'Weak arch formation',
          'Wrong people going under arches',
          'Not meeting new partners properly'
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