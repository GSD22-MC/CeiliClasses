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
        description: 'Dancers half-right turn and lead around a complete circle (8 bars); release hands, about turn inwards, gentleman takes partner\'s right hand in his left and both lead back to place (8 bars).',
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
  },
  {
    id: 'duke-reel',
    name: {
      english: 'The Duke Reel',
      irish: 'Rince an Diúic'
    },
    difficulty: 'beginner',
    duration: 8,
    participants: 6,
    formation: 'Three couples forming a circle',
    music: {
      title: 'Any suitable reel',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'A simple 6-hand reel perfect for beginners learning circle formations. The straightforward movements teach basic ceili dance principles with three couples working together in harmony.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'beat-round',
        name: {
          english: 'Beat Round',
          irish: 'Buail Timpeall'
        },
        description: 'Take hands all round in circle, dance round to left, dance in place, dance back to right, dance in place.',
        counts: 8,
        footwork: 'Promenade step around circle',
        handholds: 'All hands joined in circle',
        tips: [
          'Keep the circle even and round',
          'Move together as one unit',
          'Pause clearly between directions'
        ],
        commonMistakes: [
          'Circle becoming oval or irregular',
          'Not pausing to dance in place',
          'Rushing the direction changes'
        ]
      },
      {
        id: 'turn-ladies',
        name: {
          english: 'Turn Ladies',
          irish: 'Cas na mBan'
        },
        description: 'Gentlemen take both hands of lady on left, turn, return to partner, take both her hands, turn.',
        counts: 8,
        footwork: 'Turning steps with both ladies',
        handholds: 'Both hands for all turns',
        tips: [
          'Complete full turns with both ladies',
          'Return smoothly to own partner',
          'Maintain good frame throughout'
        ],
        commonMistakes: [
          'Incomplete turns',
          'Getting confused about which lady to turn',
          'Poor hand connection during turns'
        ]
      },
      {
        id: 'link-arms-duke',
        name: {
          english: 'Link Arms',
          irish: 'Nasc Lámha'
        },
        description: 'Gentlemen link right arms with lady on left, turn twice, return to partner with left arm, turn her twice.',
        counts: 8,
        footwork: 'Linked arm turning steps',
        handholds: 'Right arms linked, then left arms',
        tips: [
          'Link arms firmly but comfortably',
          'Complete two full turns each time',
          'Smooth transition between ladies'
        ],
        commonMistakes: [
          'Only turning once instead of twice',
          'Weak arm linking',
          'Not returning to partner properly'
        ]
      },
      {
        id: 'full-chain-duke',
        name: {
          english: 'Full Chain',
          irish: 'Slabhra Iomlán'
        },
        description: 'All dancers chain around the circle, giving right hands to partner, then left hands to next person, continuing until back to place.',
        counts: 8,
        footwork: 'Chain steps alternating hands',
        handholds: 'Alternating right and left hands',
        tips: [
          'Unusual to give hands in passing',
          'Keep the chain flowing smoothly',
          'End exactly where you started'
        ],
        commonMistakes: [
          'Giving hands when not required',
          'Losing track of position in chain',
          'Not maintaining smooth flow'
        ]
      }
    ]
  },
  {
    id: 'square-reel',
    name: {
      english: 'The Square Reel',
      irish: 'Rince an Chearnóige'
    },
    difficulty: 'beginner',
    duration: 10,
    participants: 4,
    formation: 'Two couples facing each other in square formation',
    music: {
      title: 'Any suitable reel',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'A fundamental 4-hand reel that teaches the square formation essential to many Irish dances. The side-stepping movements help dancers understand spatial relationships and timing.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'lead-round-square',
        name: {
          english: 'Lead Round',
          irish: 'Treorú Timpeall'
        },
        description: 'Standard lead around - all couples lead around with inside hands, then reverse and return to places.',
        counts: 16,
        footwork: 'Promenade step in circular formation',
        handholds: 'Inside hands, then reverse hand hold',
        tips: [
          'Maintain equal distance between couples',
          'Smooth transitions in hand holds',
          'Keep formation square throughout'
        ],
        commonMistakes: [
          'Uneven spacing between couples',
          'Awkward hand transitions',
          'Losing square formation'
        ]
      },
      {
        id: 'sides-square',
        name: {
          english: 'Sides - The Square',
          irish: 'Taobhanna - An Cearnóg'
        },
        description: 'Gentlemen sidestep to right behind partners, ladies to left, ending with two short threes. All side-step across towards opposite couple, finishing in position vacated by them, gentlemen passing ladies on the outside, finish with two short threes. Continue sidestepping to complete a square pattern.',
        counts: 16,
        footwork: 'Sidestep with two short threes at each corner',
        handholds: 'No hands during square movement',
        tips: [
          'Each dancer passes every other dancer twice',
          'Ladies pass in front each time',
          'Keep the square shape precise'
        ],
        commonMistakes: [
          'Making the square too small',
          'Not finishing with two short threes',
          'Poor timing with other dancers'
        ]
      },
      {
        id: 'four-sevens-square',
        name: {
          english: 'Four Sevens',
          irish: 'Ceithre Seachtar'
        },
        description: 'Gentlemen side step to right behind partners, ladies to left, side-step back to place, gentlemen in front, return again, gentlemen to right behind, ladies to left, back to place as before.',
        counts: 8,
        footwork: 'Sidestep movements with direction changes',
        handholds: 'No hands during movement',
        tips: [
          'Keep track of who should be in front',
          'Complete movements in time with music',
          'Maintain formation throughout'
        ],
        commonMistakes: [
          'Getting confused about front/behind positions',
          'Not completing full movements',
          'Poor coordination with partner'
        ]
      },
      {
        id: 'dance-up-centre-square',
        name: {
          english: 'Dance Up Centre',
          irish: 'Rince suas an Lár'
        },
        description: 'Leading couple join both hands, execute side-step toward opposite couple, conclude with two short threes. Opposite couple simultaneously performs side-step toward leading couple. Both couples side-step return to original positions.',
        counts: 8,
        footwork: 'Side-step with two short threes finish',
        handholds: 'Both hands with partner',
        tips: [
          'Move simultaneously with opposite couple',
          'Maintain good connection with partner',
          'Clear finish with two short threes'
        ],
        commonMistakes: [
          'Not moving at same time as opposite couple',
          'Poor partner connection',
          'Sloppy finish on the threes'
        ]
      }
    ]
  },
  {
    id: 'fionn-ala-reel',
    name: {
      english: 'The Fionn-Ala Reel',
      irish: 'Rince Fionn-Ala'
    },
    difficulty: 'beginner',
    duration: 9,
    participants: 4,
    formation: 'Two couples facing each other',
    music: {
      title: 'Any suitable reel',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'Named after characters from Irish mythology, this 4-hand reel features graceful movements that emphasize partner interaction and simple advance patterns perfect for beginners.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'lead-round-fionn',
        name: {
          english: 'Lead Round',
          irish: 'Treorú Timpeall'
        },
        description: 'As in other 4-hand reels - all couples lead around with inside hands, then reverse and return to places.',
        counts: 16,
        footwork: 'Promenade step',
        handholds: 'Inside hands, then reverse hand hold',
        tips: [
          'Keep equal distance between couples',
          'Smooth hand transitions',
          'Maintain circular flow'
        ],
        commonMistakes: [
          'Uneven spacing',
          'Awkward hand changes',
          'Breaking the circle'
        ]
      },
      {
        id: 'sides-fionn',
        name: {
          english: 'Sides',
          irish: 'Taobhanna'
        },
        description: 'Gentlemen side-step to right behind partners, ladies to left, finish with two short threes. Gentlemen advance, take opposite ladies\' two hands, turn in place. In this position gentlemen side-step to right behind, ladies to left in front, ending with two short threes. Gentlemen advance to own partner, turn in place with both hands.',
        counts: 16,
        footwork: 'Sidestep with partner interaction',
        handholds: 'Both hands for turns with ladies',
        tips: [
          'Clear distinction between own and opposite ladies',
          'Complete full turns with both ladies',
          'Maintain good timing throughout'
        ],
        commonMistakes: [
          'Taking wrong lady\'s hands',
          'Incomplete turns',
          'Poor timing between movements'
        ]
      },
      {
        id: 'dance-up-centre-fionn',
        name: {
          english: 'Dance Up Centre',
          irish: 'Rince suas an Lár'
        },
        description: 'Leading couple release hand hold, individual return to original positions moving on the outside. Opposite couple maintain hand hold, continue dancing up center formation.',
        counts: 8,
        footwork: 'Individual movement for leading couple, together for opposite',
        handholds: 'Released for leading couple, maintained for opposite',
        tips: [
          'Different actions for each couple',
          'Leading couple moves on outside',
          'Opposite couple stays in center'
        ],
        commonMistakes: [
          'Both couples doing same movement',
          'Leading couple not going to outside',
          'Poor coordination between couples'
        ]
      }
    ]
  },
  {
    id: 'half-turn-reel',
    name: {
      english: 'The Half-Turn Reel',
      irish: 'Rince Leath-Chas'
    },
    difficulty: 'beginner',
    duration: 6,
    participants: 4,
    formation: 'Two couples facing each other',
    music: {
      title: 'Any suitable reel',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'A simplified 4-hand reel with shorter sections, perfect for beginners to learn basic movements without becoming overwhelmed. The half-turn concept teaches essential partner work.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'sides-half-turn',
        name: {
          english: 'Sides',
          irish: 'Taobhanna'
        },
        description: 'Gentlemen side-step to right behind partners, ladies to left, both side-step back in same relative positions.',
        counts: 4,
        footwork: 'Basic sidestep movement',
        handholds: 'No hands during sidestep',
        tips: [
          'Keep movements simple and clear',
          'Maintain relative positions',
          'Stay in time with partner'
        ],
        commonMistakes: [
          'Overcomplicating the movement',
          'Not maintaining position with partner',
          'Rushing the timing'
        ]
      },
      {
        id: 'change-sides',
        name: {
          english: 'Change Sides',
          irish: 'Malartú Taobhanna'
        },
        description: 'All dance across towards opposite couple, finishing up in place vacated by them, gentlemen on the outside, dance in place, return to original position, dance in place.',
        counts: 8,
        footwork: 'Cross-over movement with pause',
        handholds: 'No hands during crossing',
        tips: [
          'Gentlemen always pass on outside',
          'Dance clearly in new position',
          'Return smoothly to start'
        ],
        commonMistakes: [
          'Gentlemen not going to outside',
          'Not pausing to dance in place',
          'Poor timing on return'
        ]
      },
      {
        id: 'advance-to-opposite',
        name: {
          english: 'Advance to Opposite Ladies',
          irish: 'Dul i dTreo na mBan Eile'
        },
        description: 'Gentlemen advance to opposite ladies, turn them in place, return to own partners, turn them in place.',
        counts: 8,
        footwork: 'Advance and turn movements',
        handholds: 'Both hands for turning',
        tips: [
          'Clear advance to opposite lady',
          'Complete full turns with both ladies',
          'Smooth return to own partner'
        ],
        commonMistakes: [
          'Not advancing far enough',
          'Incomplete turns',
          'Getting confused about which lady to turn'
        ]
      }
    ]
  },
  {
    id: 'kerry-dance',
    name: {
      english: 'The Kerry Dance',
      irish: 'Rince Chiarraí'
    },
    difficulty: 'beginner',
    duration: 8,
    participants: 8,
    formation: 'Long Dance - partners facing each other in two lines, dance commenced by top two couples',
    music: {
      title: 'The Kerry Dance',
      tempo: 'Single jig time (preferably)',
      timeSignature: '6/8'
    },
    culturalContext: 'A progressive long dance from County Kerry that teaches the fundamentals of line dancing. Couples take turns dancing together while others wait, creating a social and educational experience.',
    region: 'County Kerry',
    steps: [
      {
        id: 'balance-kerry',
        name: {
          english: 'Balance',
          irish: 'Cothromaigh'
        },
        description: 'Gentleman of leading couple and lady of second couple face each other, and similarly the lady of leading couple and gentleman of 2nd couple, balance to time in place.',
        counts: 4,
        footwork: 'Balance step in place',
        handholds: 'No hands, facing opposite dancer',
        tips: [
          'Face your diagonal opposite',
          'Balance clearly to the music',
          'Maintain good posture'
        ],
        commonMistakes: [
          'Facing wrong person',
          'Not balancing in time',
          'Poor eye contact'
        ]
      },
      {
        id: 'right-hands-across-kerry',
        name: {
          english: 'Right Hands Across',
          irish: 'Lámha Deasa Trasna'
        },
        description: 'Gentleman of leading couple gives right hand to right hand of lady of 2nd couple, similarly lady of leading couple and gentleman of 2nd couple, all dance full round to left, release hands.',
        counts: 4,
        footwork: 'Circle steps around center',
        handholds: 'Right hands across in center',
        tips: [
          'Form tight hand formation in center',
          'Dance complete circle to left',
          'Release hands cleanly'
        ],
        commonMistakes: [
          'Loose hand formation',
          'Not completing full circle',
          'Poor timing on release'
        ]
      },
      {
        id: 'left-hands-across-kerry',
        name: {
          english: 'Left Hands Across',
          irish: 'Lámha Clé Trasna'
        },
        description: 'As in second section giving left hands instead of right, dance round to right.',
        counts: 4,
        footwork: 'Circle steps in opposite direction',
        handholds: 'Left hands across in center',
        tips: [
          'Mirror the right hands movement',
          'Dance complete circle to right',
          'Maintain same tight formation'
        ],
        commonMistakes: [
          'Going wrong direction',
          'Weak hand connection',
          'Not mirroring previous movement'
        ]
      },
      {
        id: 'advance-down-centre-kerry',
        name: {
          english: 'Advance Down Centre',
          irish: 'Dul Chun Cinn Síos an Lár'
        },
        description: 'Leading gentleman takes partner\'s right hand in his left, both advance down between lines of dancers, release hands, turn, gentleman takes partner\'s left hand in his right, return to place, release hands.',
        counts: 8,
        footwork: 'Advance and return with hand changes',
        handholds: 'Right hand in left, then left hand in right',
        tips: [
          'Advance confidently down center',
          'Clear hand change on turn',
          'Return smoothly to place'
        ],
        commonMistakes: [
          'Hesitant advance',
          'Confusing hand changes',
          'Not returning to exact place'
        ]
      },
      {
        id: 'dance-round-kerry',
        name: {
          english: 'Dance Round',
          irish: 'Rince Timpeall'
        },
        description: 'Gentleman of leading couple passes round at back of gentleman of 2nd couple, his partner at the same time passing round at back of lady of 2nd couple, each meeting the other below the 2nd couple. Gentlemen of leading and 2nd couples take own partners\' both hands, two couples dance round each other in circle, 2nd couple finishing up at head of line, and leading couple coming to rest in place vacated by 2nd couple.',
        counts: 8,
        footwork: 'Circular passing and partner turns',
        handholds: 'Both hands with own partner for final circle',
        tips: [
          'Pass around the back of opposite gender',
          'Meet below the other couple',
          'Complete circle dance changes positions'
        ],
        commonMistakes: [
          'Not passing around back',
          'Not meeting in right place',
          'Ending in wrong positions'
        ]
      }
    ]
  },
  {
    id: 'divided-dance',
    name: {
      english: 'The Divided Dance',
      irish: 'An Rince Roinnte'
    },
    difficulty: 'beginner',
    duration: 7,
    participants: 8,
    formation: 'Long Dance - partners facing each other in two lines, commenced only by leading couple',
    music: {
      title: 'Any suitable single jig',
      tempo: 'Single jig time (preferably)',
      timeSignature: '6/8'
    },
    culturalContext: 'A progressive long dance where the leading couple performs movements with each successive couple in turn. The name "Divided" refers to the separation of the leading couple\'s movements as they work their way down the line.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'cast-off-return',
        name: {
          english: 'Cast Off and Return',
          irish: 'Caith Amach agus Fill'
        },
        description: 'Gentleman advances down between the two lines of dancers, his partner advancing parallel to him on the outside behind the ladies, turn and return to place.',
        counts: 8,
        footwork: 'Advance down center and outside simultaneously',
        handholds: 'No hands during cast off',
        tips: [
          'Gentleman goes down center between lines',
          'Lady goes down outside behind her line',
          'Turn together and return to place'
        ],
        commonMistakes: [
          'Both going down center',
          'Lady not staying behind her line',
          'Not turning at the same time'
        ]
      },
      {
        id: 'advance-down-centre-divided',
        name: {
          english: 'Advance Down Centre',
          irish: 'Dul Chun Cinn Síos an Lár'
        },
        description: 'Gentleman takes partner\'s right hand in his left, both advance down between lines, return to place.',
        counts: 8,
        footwork: 'Joint advance and return',
        handholds: 'Right hand in left',
        tips: [
          'Both advance together down center',
          'Maintain hand connection throughout',
          'Return smoothly to starting place'
        ],
        commonMistakes: [
          'Not advancing together',
          'Breaking hand connection',
          'Not returning to exact place'
        ]
      },
      {
        id: 'cross-and-circle',
        name: {
          english: 'Cross and Circle',
          irish: 'Trasnaigh agus Ciorcail'
        },
        description: 'Gentleman takes partner\'s right hand, lady crosses to opposite side, release hands, lady passes round back of gentleman of next couple, and follows her partner round back of lady of next couple, both return to place.',
        counts: 8,
        footwork: 'Crossing and circular movements',
        handholds: 'Right hands to start, released for circling',
        tips: [
          'Lady crosses to opposite side first',
          'Pass around back of next couple',
          'Follow partner in circular pattern'
        ],
        commonMistakes: [
          'Not crossing to opposite side',
          'Passing in front instead of behind',
          'Not following partner properly'
        ]
      },
      {
        id: 'dance-round-divided',
        name: {
          english: 'Dance Round',
          irish: 'Rince Timpeall'
        },
        description: 'Partners take both hands, dance round next couple, the lower couple gaining a place each time as in Kerry Dance.',
        counts: 8,
        footwork: 'Partner turning with progression',
        handholds: 'Both hands with own partner',
        tips: [
          'Take both hands with partner',
          'Dance completely around next couple',
          'Lower couple moves up one position'
        ],
        commonMistakes: [
          'Not taking both hands',
          'Not completing full circle around couple',
          'Not understanding the progression'
        ]
      }
    ]
  },
  {
    id: 'limerick-walls',
    name: {
      english: 'The Limerick Walls',
      irish: 'Ballaí Luimní Fada'
    },
    difficulty: 'beginner',
    duration: 6,
    participants: 12,
    formation: 'Long Dance - each set of two couples stands facing each other, all couples start together',
    music: {
      title: 'The Limerick Walls',
      tempo: 'Reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'A longer formation version of the famous Walls of Limerick, this progressive long dance teaches dancers how multiple sets work together. Named after the historic walls of Limerick city, representing community connections across larger groups.',
    region: 'County Limerick',
    steps: [
      {
        id: 'advance-and-retire-limerick',
        name: {
          english: 'Advance and Retire',
          irish: 'Dul Chun Cinn agus Cúlú'
        },
        description: 'Gentlemen take partners\' left hands in their right, advance to other couple and retire.',
        counts: 4,
        footwork: 'Promenade step advance and retire',
        handholds: 'Gentleman\'s right holds partner\'s left',
        tips: [
          'Advance boldly to opposite couple',
          'Retire gracefully to starting position',
          'Maintain partner connection'
        ],
        commonMistakes: [
          'Weak advance or retire',
          'Breaking partner connection',
          'Not meeting opposite couple clearly'
        ]
      },
      {
        id: 'half-right-and-left-limerick',
        name: {
          english: 'Half Right and Left',
          irish: 'Leath Dheas agus Clé'
        },
        description: 'Gentlemen change places with each other, passing left arm to left arm, ladies then follow and change places with each other, passing right arm to right arm.',
        counts: 4,
        footwork: 'Passing steps with arm contact',
        handholds: 'Arms pass as described',
        tips: [
          'Gentlemen move first, then ladies',
          'Clear arm contact during passing',
          'End in opposite couple\'s position'
        ],
        commonMistakes: [
          'Both moving at same time',
          'Wrong arm passing',
          'Not completing the exchange'
        ]
      },
      {
        id: 'dance-with-opposite-limerick',
        name: {
          english: 'Dance with Opposite',
          irish: 'Rince le hAghaidh'
        },
        description: 'Gentlemen advance and take opposite ladies two hands, turn and fall back to place.',
        counts: 4,
        footwork: 'Advance, turn, and return',
        handholds: 'Both hands with opposite lady',
        tips: [
          'Advance clearly to opposite lady',
          'Complete full turn together',
          'Return to original position'
        ],
        commonMistakes: [
          'Not advancing far enough',
          'Incomplete turn',
          'Not returning to correct place'
        ]
      },
      {
        id: 'turn-and-reverse-limerick',
        name: {
          english: 'Turn and Reverse',
          irish: 'Cas agus Aisimp'
        },
        description: 'Take own partner\'s two hands, turn in place finishing up to face in the opposite direction, commence dance again with couple on other side.',
        counts: 4,
        footwork: 'Partner turn with direction change',
        handholds: 'Both hands with own partner',
        tips: [
          'Complete full turn with own partner',
          'End facing opposite direction',
          'Prepare to dance with new couple'
        ],
        commonMistakes: [
          'Not completing full turn',
          'Not changing direction properly',
          'Confusion about new partners'
        ]
      }
    ]
  },
  {
    id: 'sixteen-hand-reel',
    name: {
      english: 'The Sixteen-Hand Reel',
      irish: 'Rince Sé Déag Lámh'
    },
    difficulty: 'intermediate',
    duration: 25,
    participants: 16,
    formation: '16-hand reel formation: 8 couples arranged in square formation with 2 couples on each side',
    music: {
      title: 'Any suitable reel',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'The largest and most complex of the traditional Irish reels, requiring precise coordination between 16 dancers. This dance represents the pinnacle of Irish ceili dancing, showcasing the sophisticated social choreography of traditional Irish communities.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'lead-around-sixteen',
        name: {
          english: 'Lead Around',
          irish: 'Treorú Timpeall'
        },
        description: 'All couples lead around with inside hands, then reverse and return to places',
        counts: 16,
        footwork: 'Promenade step in large circular formation',
        handholds: 'Inside hands, then reverse hand hold',
        tips: [
          'Maintain equal spacing between all 8 couples',
          'Large circle requires careful spacing',
          'Coordinate with couples across the set'
        ],
        commonMistakes: [
          'Uneven spacing creating gaps or bunching',
          'Not maintaining large enough circle',
          'Losing formation with so many dancers'
        ]
      },
      {
        id: 'sides-sixteen',
        name: {
          english: 'Sides',
          irish: 'Taobhanna'
        },
        description: 'Gentlemen side-step to right behind partners, ladies to left in front, side-step back to place. Leading and opposite couples dance with couples on left, other couples arrange accordingly.',
        counts: 8,
        footwork: 'Sidestep with two short threes',
        handholds: 'No hands during sidestep movement',
        tips: [
          'Each dancer passes every other multiple times',
          'Complex coordination with 16 people',
          'Follow leading couples\' pattern'
        ],
        commonMistakes: [
          'Getting lost in the large formation',
          'Not following the leading pattern',
          'Colliding with other dancers'
        ]
      },
      {
        id: 'hands-round-sixteen',
        name: {
          english: 'Hands Round',
          irish: 'Lámha Timpeall'
        },
        description: 'Leading and opposite couples dance with couples on left, then with couples on right. Complex interlocking hand patterns across the entire set.',
        counts: 8,
        footwork: 'Coordinated movement with multiple couples',
        handholds: 'Various holds as couples interact',
        tips: [
          'Follow the leading couples\' direction',
          'Multiple couples interact simultaneously',
          'Maintain awareness of entire set'
        ],
        commonMistakes: [
          'Wrong couples participating at wrong times',
          'Confusion about partner interactions',
          'Breaking the complex formation'
        ]
      },
      {
        id: 'half-chain-sixteen',
        name: {
          english: 'Half Chain',
          irish: 'Leath-Slabhra'
        },
        description: 'Complex chain movement involving all 16 dancers progressing around the entire formation with alternating hand connections.',
        counts: 32,
        footwork: 'Chain steps with alternating hands',
        handholds: 'Alternating right and left hands with progression',
        tips: [
          'Maintain chain connection across 16 people',
          'Keep moving to maintain flow',
          'End in correct position for next movement'
        ],
        commonMistakes: [
          'Chain breaks with so many people',
          'Getting lost in progression',
          'Not maintaining tempo with large group'
        ]
      },
      {
        id: 'link-arms-sixteen',
        name: {
          english: 'Link Arms',
          irish: 'Nasc Lámha'
        },
        description: 'Leading and opposite couples dance with couples on left, complex arm linking patterns across multiple couples.',
        counts: 8,
        footwork: 'Coordinated linking movement',
        handholds: 'Right and left arm links in sequence',
        tips: [
          'Precise timing with multiple couples',
          'Strong arm connections',
          'Follow the pattern set by leaders'
        ],
        commonMistakes: [
          'Weak or broken arm links',
          'Wrong couples participating',
          'Poor timing coordination'
        ]
      },
      {
        id: 'right-and-left-sixteen',
        name: {
          english: 'Right and Left',
          irish: 'Deas agus Clé'
        },
        description: 'Leading and opposite couples dance with couples on right, involving complex passing and hand-change patterns.',
        counts: 8,
        footwork: 'Precise passing steps with hand changes',
        handholds: 'Alternating right and left hands',
        tips: [
          'Complex coordination across large set',
          'Clear hand changes essential',
          'Maintain formation integrity'
        ],
        commonMistakes: [
          'Hand changes not synchronized',
          'Formation breaks down',
          'Confusion about partner sequences'
        ]
      }
    ]
  },
  {
    id: 'twelve-hand-reel',
    name: {
      english: 'The Twelve-Hand Reel',
      irish: 'Rince Dhá Déag Lámh'
    },
    difficulty: 'intermediate',
    duration: 20,
    participants: 12,
    formation: '12-hand reel formation: 6 couples arranged in formation',
    music: {
      title: 'Any suitable reel',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'A traditional reel for six couples, danced exactly like the sixteen-hand reel but with adapted formations. The leading couples coordinate the movements while other couples arrange themselves accordingly.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'lead-around-twelve',
        name: {
          english: 'Lead Around',
          irish: 'Treorú Timpeall'
        },
        description: 'All couples lead around with inside hands, then reverse and return to places',
        counts: 16,
        footwork: 'Promenade step in circular formation',
        handholds: 'Inside hands, then reverse hand hold',
        tips: [
          'Maintain equal spacing between 6 couples',
          'Follow same pattern as 16-hand reel',
          'Adapt spacing for smaller group'
        ],
        commonMistakes: [
          'Making circle too small',
          'Uneven spacing between couples',
          'Not adapting to smaller formation'
        ]
      },
      {
        id: 'coordinated-sides-twelve',
        name: {
          english: 'Coordinated Sides',
          irish: 'Taobhanna Comhordaithe'
        },
        description: 'Leading couples dance hands round with couples on left, other couples arrange themselves accordingly in all succeeding sections.',
        counts: 8,
        footwork: 'Sidestep adapted for 12 dancers',
        handholds: 'Coordinated with leading couples',
        tips: [
          'Follow leading couples\' pattern',
          'Adapt 16-hand movements for 12 people',
          'Maintain formation integrity'
        ],
        commonMistakes: [
          'Not following leading pattern',
          'Wrong couples participating',
          'Breaking formation'
        ]
      }
    ]
  },
  {
    id: 'six-hand-reel-fairy',
    name: {
      english: 'The Six-Hand Reel (Fairy Reel)',
      irish: 'Rince Sé Lámh (Rince na Sí)'
    },
    difficulty: 'intermediate',
    duration: 16,
    participants: 6,
    formation: 'Two gentlemen and four ladies: one gentleman and two ladies on each side facing each other',
    music: {
      title: 'The Fairy Reel',
      tempo: 'Moderate to quick',
      timeSignature: '2/4'
    },
    culturalContext: 'A specialized reel formation for two gentlemen and four ladies, creating an asymmetrical but balanced dance. The formation allows for intricate partner exchanges and demonstrates the flexibility of Irish ceili dancing.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'advance-retire-fairy',
        name: {
          english: 'Advance and Retire',
          irish: 'Dul Chun Cinn agus Cúlú'
        },
        description: 'Both sides advance holding hands, retire, advance again, retire',
        counts: 8,
        footwork: 'Promenade step for advance and retire',
        handholds: 'Hands joined in lines of three',
        tips: [
          'Maintain line formation on each side',
          'Gentleman in center of each line',
          'Equal advance and retire'
        ],
        commonMistakes: [
          'Lines not staying straight',
          'Uneven advance or retire',
          'Gentleman not centered properly'
        ]
      },
      {
        id: 'dance-in-ring-fairy',
        name: {
          english: 'Dance in Ring',
          irish: 'Rince i gCiorcal'
        },
        description: 'The three partners on either side join hands, dance round in a ring to right, dance back to left',
        counts: 16,
        footwork: 'Circular steps maintaining ring formation',
        handholds: 'All three join hands in circle',
        tips: [
          'Each side forms separate ring',
          'Maintain circular formation',
          'Coordinate direction changes'
        ],
        commonMistakes: [
          'Rings not staying circular',
          'Not coordinating direction changes',
          'Breaking hand connections'
        ]
      },
      {
        id: 'advance-two-fairy',
        name: {
          english: 'Advance Two',
          irish: 'Dhá Dhuine Chun Cinn'
        },
        description: 'Gentlemen take left hand of lady on right, turning toward each other, dance side-step toward opposite side. Lady on left dances side-step to right simultaneously. All dance two short threes, then repeat with lady on left.',
        counts: 16,
        footwork: 'Side-step with two short threes finish',
        handholds: 'Left hand of lady on right, then left hand of other lady',
        tips: [
          'Gentleman turns toward center',
          'Clear two short threes finish',
          'Repeat pattern with other lady'
        ],
        commonMistakes: [
          'Not turning toward center properly',
          'Poor timing on two short threes',
          'Confusion about which lady to take'
        ]
      },
      {
        id: 'link-arms-fairy',
        name: {
          english: 'Link Arms',
          irish: 'Nasc Lámha'
        },
        description: 'Gentlemen link left arm with lady on left, turn, pass to lady on right with right arm, turn, return to lady on left, turn, back to lady on right, turn',
        counts: 8,
        footwork: 'Smooth linking and turning steps',
        handholds: 'Left arms linked, then right arms',
        tips: [
          'Smooth progression between ladies',
          'Complete turns with each lady',
          'Maintain good posture'
        ],
        commonMistakes: [
          'Rushed progression',
          'Incomplete turns',
          'Poor arm linking technique'
        ]
      },
      {
        id: 'side-step-centre-fairy',
        name: {
          english: 'Side-step to Centre',
          irish: 'Céim Taoibh go Lár'
        },
        description: 'Complex exchange pattern where ladies on right dance side-step to left in front, ladies on left side-step to right behind, gentlemen dance two short threes, then gentlemen meet in centre while ladies return.',
        counts: 8,
        footwork: 'Coordinated side-step and center meeting',
        handholds: 'Various holds during complex exchange',
        tips: [
          'Ladies exchange positions while gentlemen stay',
          'Gentlemen meet in center after exchange',
          'Complex coordination required'
        ],
        commonMistakes: [
          'Wrong ladies moving at wrong time',
          'Gentlemen not meeting in center properly',
          'Poor timing coordination'
        ]
      }
    ]
  },
  {
    id: 'rince-fada',
    name: {
      english: 'Rince Fada',
      irish: 'Rince Fada'
    },
    difficulty: 'intermediate',
    duration: 15,
    participants: 8,
    formation: 'Long Dance formation: couples in two lines facing each other, partners opposite',
    music: {
      title: 'Traditional long dance music',
      tempo: 'Moderate',
      timeSignature: '2/4'
    },
    culturalContext: 'The traditional "Long Dance" formation fundamental to Irish dancing. Rince Fada represents one of the oldest forms of Irish social dancing, with couples facing each other in lines creating opportunities for community interaction.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'advance-retire-rince-fada',
        name: {
          english: 'Advance and Retire',
          irish: 'Dul Chun Cinn agus Cúlú'
        },
        description: 'Lines advance toward each other and retire to places, creating the fundamental long dance movement',
        counts: 8,
        footwork: 'Promenade step for advance and retire',
        handholds: 'Hands linked in lines',
        tips: [
          'Move as complete lines',
          'Maintain straight line formation',
          'Equal advance and retire distance'
        ],
        commonMistakes: [
          'Lines becoming curved or broken',
          'Uneven advance or retire',
          'Individual movement instead of line movement'
        ]
      },
      {
        id: 'cross-over-rince-fada',
        name: {
          english: 'Cross Over',
          irish: 'Trasnaigh'
        },
        description: 'Couples cross to opposite sides, passing through the center with coordinated movements',
        counts: 8,
        footwork: 'Crossing steps through center',
        handholds: 'Partners hold hands while crossing',
        tips: [
          'Pass through center smoothly',
          'Maintain partner connection',
          'End in opposite line positions'
        ],
        commonMistakes: [
          'Not passing through exact center',
          'Breaking partner connection',
          'Ending in wrong positions'
        ]
      },
      {
        id: 'progressive-movement-rince-fada',
        name: {
          english: 'Progressive Movement',
          irish: 'Gluaiseacht Forásach'
        },
        description: 'Couples progress along the lines, creating the characteristic flowing movement of long dances',
        counts: 8,
        footwork: 'Progressive steps along the lines',
        handholds: 'Various holds as couples progress',
        tips: [
          'Maintain line integrity while progressing',
          'Smooth transitions between positions',
          'Coordinate with all other couples'
        ],
        commonMistakes: [
          'Breaking line formation during progression',
          'Not coordinating with other couples',
          'Jerky or uneven progression'
        ]
      }
    ]
  },
  {
    id: 'donegal-dance',
    name: {
      english: 'The Donegal Dance',
      irish: 'Rince Dhún na nGall'
    },
    difficulty: 'intermediate',
    duration: 16,
    participants: 8,
    formation: 'Country dance: couples stand in a ring, ladies on right of their partners',
    music: {
      title: 'Traditional Donegal airs',
      tempo: 'Reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'A traditional country dance from County Donegal, featuring the characteristic "Beat Round" and progressive partner interactions. The dance reflects the strong community traditions of Donegal\'s coastal and mountain regions.',
    region: 'County Donegal',
    steps: [
      {
        id: 'beat-round-donegal',
        name: {
          english: 'Beat Round',
          irish: 'Buail Timpeall'
        },
        description: 'Take hands all round in ring, dance to left, set, dance back to right, set',
        counts: 8,
        footwork: 'Circular steps with setting',
        handholds: 'All hands joined in ring',
        tips: [
          'Keep the ring perfectly round',
          'Clear setting movements',
          'Coordinate direction changes'
        ],
        commonMistakes: [
          'Ring becoming oval or broken',
          'Poor setting technique',
          'Not coordinating direction changes'
        ]
      },
      {
        id: 'turn-ladies-donegal',
        name: {
          english: 'Turn Ladies',
          irish: 'Cas na mBan'
        },
        description: 'Gentlemen take both hands of ladies on left, turn them, release hands, return to own partners, take both hands, turn in place',
        counts: 8,
        footwork: 'Turning steps with both ladies',
        handholds: 'Both hands for all turns',
        tips: [
          'Complete full turns with both ladies',
          'Smooth return to own partner',
          'Maintain good frame for turns'
        ],
        commonMistakes: [
          'Incomplete turns',
          'Awkward return to partner',
          'Poor hand connections'
        ]
      },
      {
        id: 'link-arms-donegal',
        name: {
          english: 'Link Arms',
          irish: 'Nasc Lámha'
        },
        description: 'Gentlemen link right arm with ladies on left, turn, return to own partners with left arm, turn, return to ladies on left with right arm, turn, back again to own partners with left arm, turn in place',
        counts: 8,
        footwork: 'Complex linking sequence with multiple partners',
        handholds: 'Right and left arm links in sequence',
        tips: [
          'Four distinct linking movements',
          'Complete turns with each person',
          'Maintain momentum throughout'
        ],
        commonMistakes: [
          'Not completing all four links',
          'Incomplete turns',
          'Losing momentum in sequence'
        ]
      },
      {
        id: 'lead-round-donegal',
        name: {
          english: 'Lead Round',
          irish: 'Treorú Timpeall'
        },
        description: 'Gentlemen place right hand on partners\' left shoulder taking her left hand in his left, lead round in circle thus, commence dance again in whatever position you finish',
        counts: 16,
        footwork: 'Promenade steps in shoulder-hand position',
        handholds: 'Right hand on left shoulder, left hands joined',
        tips: [
          'Distinctive Donegal hold position',
          'Lead with authority but gentleness',
          'Restart from new positions'
        ],
        commonMistakes: [
          'Incorrect hand/shoulder positioning',
          'Not leading clearly',
          'Confusion about restart positions'
        ]
      }
    ]
  },
  {
    id: 'glenbeigh-bridge',
    name: {
      english: 'The Glenbeigh Bridge Jig',
      irish: 'Port Dhroichead Ghleann Beithigh'
    },
    difficulty: 'intermediate',
    duration: 14,
    participants: 8,
    formation: '8-hand jig formation: 4 couples in square',
    music: {
      title: 'The Glenbeigh Bridge',
      tempo: 'Double jig',
      timeSignature: '6/8'
    },
    culturalContext: 'Named after the famous bridge in Glenbeigh, County Kerry, this jig captures the rhythmic flow of the River Behy beneath the historic stone bridge. The dance movements mirror the flowing water and the steady crossing of travelers.',
    region: 'County Kerry',
    steps: [
      {
        id: 'sides-glenbeigh',
        name: {
          english: 'Sides',
          irish: 'Taobhanna'
        },
        description: 'Gentlemen side-step to right behind partner ending with "rising step," ladies side-step to left in front, ending with "shuffle," return in reverse position',
        counts: 8,
        footwork: 'Sidestep with jig-specific endings',
        handholds: 'No hands during sidestep movement',
        tips: [
          'Rising step for gentlemen, shuffle for ladies',
          'Jig timing throughout movement',
          'Clear gender-specific footwork'
        ],
        commonMistakes: [
          'Using reel endings instead of jig endings',
          'Not maintaining jig rhythm',
          'Poor rising step or shuffle technique'
        ]
      },
      {
        id: 'skip-across-glenbeigh',
        name: {
          english: 'Skip Across',
          irish: 'Scipeáil Trasna'
        },
        description: 'Complex crossing pattern with light skipping steps characteristic of jig dances',
        counts: 16,
        footwork: 'Light skipping steps in jig time',
        handholds: 'Partners maintain connection while skipping',
        tips: [
          'Light, bouncing jig steps',
          'Maintain partner connection',
          'Complex crossing pattern'
        ],
        commonMistakes: [
          'Heavy footwork instead of light skipping',
          'Losing partner during crossing',
          'Wrong crossing pattern'
        ]
      },
      {
        id: 'swing-into-line-glenbeigh',
        name: {
          english: 'Swing into Line',
          irish: 'Luascadh isteach sa Líne'
        },
        description: 'Leading couple turn in place and face outward, couples swing into line formation behind them',
        counts: 16,
        footwork: 'Swinging and formation steps',
        handholds: 'Both hands for swinging movements',
        tips: [
          'Leading couple initiates the formation',
          'Other couples follow in sequence',
          'Smooth swing into line'
        ],
        commonMistakes: [
          'Not following leading couple properly',
          'Poor swing technique',
          'Breaking line formation'
        ]
      },
      {
        id: 'set-all-round-glenbeigh',
        name: {
          english: 'Set All Round',
          irish: 'Suigh Timpeall'
        },
        description: 'Partners take right hands, turn half round, gentlemen take left hands of ladies on left, set in formation, branch off and return to partners',
        counts: 8,
        footwork: 'Setting steps in jig time',
        handholds: 'Right hands with partners, left hands with others',
        tips: [
          'Clear half turn to start',
          'Set with proper jig footwork',
          'Smooth branch off and return'
        ],
        commonMistakes: [
          'Incomplete half turn',
          'Poor setting technique',
          'Awkward return to partner'
        ]
      }
    ]
  },
  {
    id: 'st-patricks-day-jig',
    name: {
      english: 'St. Patrick\'s Day Jig',
      irish: 'Port Lá Fhéile Pádraig'
    },
    difficulty: 'intermediate',
    duration: 18,
    participants: 8,
    formation: '8-hand jig formation: 4 couples in square',
    music: {
      title: 'St. Patrick\'s Day in the Morning',
      tempo: 'Double jig with irregular structure',
      timeSignature: '6/8'
    },
    culturalContext: 'A special jig for Ireland\'s patron saint\'s feast day, featuring irregular musical structure requiring precise timing. The dance celebrates Irish identity and heritage with complex figures adapted to the unique musical phrasing.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'sides-st-patrick',
        name: {
          english: 'Sides',
          irish: 'Taobhanna'
        },
        description: 'Gentlemen side-step to right behind partners, ladies to left in front, gentlemen end with rising-step, ladies with shuffle, side-step back in same relative positions',
        counts: 8,
        footwork: 'Sidestep with jig endings',
        handholds: 'No hands during movement',
        tips: [
          'Maintain jig character throughout',
          'Rising-step and shuffle endings essential',
          'Same relative positions on return'
        ],
        commonMistakes: [
          'Using reel footwork instead of jig',
          'Poor jig-specific endings',
          'Not maintaining relative positions'
        ]
      },
      {
        id: 'half-right-left-st-patrick',
        name: {
          english: 'Half Right and Left',
          irish: 'Leath Dheas agus Clé'
        },
        description: 'Partners take right hands, turn in place, gentlemen of contrary couples exchange places right arm to right, ladies follow, left arm to left',
        counts: 6,
        footwork: 'Quick jig steps for exchanges',
        handholds: 'Right hands for turns, arms for passing',
        tips: [
          'Note irregular 6-bar timing',
          'Quick, precise exchanges',
          'Coordinate with musical phrasing'
        ],
        commonMistakes: [
          'Not adapting to 6-bar structure',
          'Slow or incomplete exchanges',
          'Wrong arm passing'
        ]
      },
      {
        id: 'double-quarter-chain-st-patrick',
        name: {
          english: 'Double Quarter Chain',
          irish: 'Slabhra Ceathrú Dúbailte'
        },
        description: 'Extended chain sequence adapted for irregular musical phrasing',
        counts: 16,
        footwork: 'Complex chain steps',
        handholds: 'Alternating hands in chain formation',
        tips: [
          'Adapt chain to irregular music',
          'Maintain chain integrity',
          'Coordinate with all dancers'
        ],
        commonMistakes: [
          'Chain breaks with irregular timing',
          'Not adapting to musical structure',
          'Poor coordination between dancers'
        ]
      },
      {
        id: 'sides-extended-st-patrick',
        name: {
          english: 'Sides Extended',
          irish: 'Taobhanna Fadaithe'
        },
        description: 'Extended sides movement: gentlemen side-step to right behind partner, ladies side-step to left in front, ending with jig steps, all continue side-step in same direction, gentlemen take left hands of ladies on left, turn, all chain back to original positions',
        counts: 14,
        footwork: 'Extended sidestep with chain return',
        handholds: 'Left hands for turns, chain formation for return',
        tips: [
          'Extended 14-bar movement',
          'Complex combination of movements',
          'Chain return to original positions'
        ],
        commonMistakes: [
          'Not managing extended timing',
          'Poor transition between movements',
          'Not returning to correct positions'
        ]
      },
      {
        id: 'full-chain-st-patrick',
        name: {
          english: 'Full Chain',
          irish: 'Slabhra Iomlán'
        },
        description: 'Complete chain movement adapted to irregular musical structure',
        counts: 14,
        footwork: 'Full chain progression',
        handholds: 'Alternating right and left hands',
        tips: [
          'Another irregular 14-bar section',
          'Complete chain around the set',
          'Return to original positions'
        ],
        commonMistakes: [
          'Chain timing problems with irregular music',
          'Not completing full progression',
          'Ending in wrong positions'
        ]
      }
    ]
  },
  {
    id: 'hop-time-dance',
    name: {
      english: 'The Hop-Time Dance',
      irish: 'Rince Ama an Léime'
    },
    difficulty: 'intermediate',
    duration: 12,
    participants: 8,
    formation: 'Long Dance: partners facing each other in two lines',
    music: {
      title: 'Traditional hop jig',
      tempo: 'Hop jig (slip jig)',
      timeSignature: '9/8'
    },
    culturalContext: 'A unique long dance performed to the distinctive 9/8 hop jig rhythm. This time signature creates a distinctive lilting quality that requires special stepping technique, making it one of the most challenging rhythm forms in Irish dancing.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'right-hands-across-hop',
        name: {
          english: 'Right Hands Across',
          irish: 'Lámha Deasa Trasna'
        },
        description: 'Leading and second couple give right hands across, dance round in hop jig rhythm',
        counts: 4,
        footwork: 'Hop jig steps around center',
        handholds: 'Right hands across in center',
        tips: [
          'Master the 9/8 hop jig rhythm',
          'Special stepping technique required',
          'Dance around center smoothly'
        ],
        commonMistakes: [
          'Not mastering hop jig rhythm',
          'Using regular jig or reel steps',
          'Poor timing with unusual meter'
        ]
      },
      {
        id: 'left-hands-across-hop',
        name: {
          english: 'Left Hands Across',
          irish: 'Lámha Clé Trasna'
        },
        description: 'Release right hands, turn, give left hands, dance back to place in hop jig time',
        counts: 4,
        footwork: 'Hop jig steps in reverse direction',
        handholds: 'Left hands across in center',
        tips: [
          'Maintain hop jig rhythm in reverse',
          'Smooth transition from right to left',
          'Return to exact starting positions'
        ],
        commonMistakes: [
          'Losing rhythm on direction change',
          'Incomplete turn between hand changes',
          'Not returning to proper places'
        ]
      },
      {
        id: 'circle-right-hop',
        name: {
          english: 'Circle to Right',
          irish: 'Ciorcal ar Dheis'
        },
        description: 'All release hands, continue to dance round in same direction in a circle to own place using hop jig steps',
        counts: 4,
        footwork: 'Hop jig steps in circular formation',
        handholds: 'No hands, individual circular movement',
        tips: [
          'Maintain circular formation',
          'Keep hop jig rhythm while moving',
          'Return to exact starting positions'
        ],
        commonMistakes: [
          'Circle becoming oval or breaking',
          'Losing hop jig rhythm',
          'Not completing full circle to place'
        ]
      },
      {
        id: 'circle-left-hop',
        name: {
          english: 'Circle to Left',
          irish: 'Ciorcal ar Chlé'
        },
        description: 'Turn and repeat same in circle to left and back to place in hop jig time',
        counts: 4,
        footwork: 'Hop jig steps in opposite circular direction',
        handholds: 'No hands, individual movement',
        tips: [
          'Mirror previous circle movement',
          'Maintain hop jig rhythm throughout',
          'Clean return to starting positions'
        ],
        commonMistakes: [
          'Not mirroring previous movement properly',
          'Rhythm problems with direction change',
          'Poor return to place'
        ]
      },
      {
        id: 'dance-in-ring-left-hop',
        name: {
          english: 'Dance in Ring to Left',
          irish: 'Rince i gCiorcal ar Chlé'
        },
        description: 'Partners of two couples join hands round in ring, dance round thus to left in hop jig time',
        counts: 4,
        footwork: 'Hop jig steps in ring formation',
        handholds: 'All four join hands in ring',
        tips: [
          'Form tight four-hand ring',
          'Coordinate hop jig rhythm as group',
          'Maintain ring integrity'
        ],
        commonMistakes: [
          'Ring formation becoming loose',
          'Not coordinating rhythm as group',
          'Breaking hand connections'
        ]
      },
      {
        id: 'dance-in-ring-right-hop',
        name: {
          english: 'Dance in Ring to Right',
          irish: 'Rince i gCiorcal ar Dheis'
        },
        description: 'Repeat same back to place in opposite direction using hop jig rhythm',
        counts: 4,
        footwork: 'Hop jig steps in reverse ring direction',
        handholds: 'Maintain four-hand ring',
        tips: [
          'Mirror previous ring movement',
          'Keep hop jig rhythm in reverse',
          'Return to exact starting formation'
        ],
        commonMistakes: [
          'Not maintaining ring during direction change',
          'Rhythm problems in reverse',
          'Poor return to starting positions'
        ]
      },
      {
        id: 'dance-round-hop',
        name: {
          english: 'Dance Round',
          irish: 'Rince Timpeall'
        },
        description: 'Gentlemen take both hands of own partner, two couples dance round each other in circle in hop jig time, finishing with progression as in Kerry Dance',
        counts: 8,
        footwork: 'Hop jig steps for partner turns and progression',
        handholds: 'Both hands with own partner',
        tips: [
          'Partner turns in hop jig rhythm',
          'Couples dance around each other',
          'Finish with Kerry Dance progression'
        ],
        commonMistakes: [
          'Not maintaining hop jig rhythm in turns',
          'Poor couple-to-couple coordination',
          'Incorrect progression pattern'
        ]
      }
    ]
  },
  {
    id: 'humours-of-bandon',
    name: {
      english: 'The Humours of Bandon',
      irish: 'Áiteas Dhroichead na Bandan'
    },
    difficulty: 'intermediate',
    duration: 16,
    participants: 4,
    formation: 'Two couples facing each other',
    music: {
      title: 'The Humours of Bandon',
      tempo: 'Double jig',
      timeSignature: '6/8'
    },
    culturalContext: 'A traditional 4-hand jig from County Cork, celebrating the market town of Bandon. The dance captures the lively spirit and good humor of this historic town, with playful movements reflecting community celebrations and gatherings.',
    region: 'County Cork',
    steps: [
      {
        id: 'lead-round-bandon',
        name: {
          english: 'Lead Round',
          irish: 'Treorú Timpeall'
        },
        description: 'Standard lead around movement adapted for jig time',
        counts: 16,
        footwork: 'Promenade step in jig rhythm',
        handholds: 'Inside hands, then reverse hand hold',
        tips: [
          'Maintain jig character throughout',
          'Smooth hand transitions',
          'Keep circular formation'
        ],
        commonMistakes: [
          'Using reel timing instead of jig',
          'Awkward hand changes',
          'Breaking circular flow'
        ]
      },
      {
        id: 'sides-bandon',
        name: {
          english: 'Sides',
          irish: 'Taobhanna'
        },
        description: 'Gentlemen dance side-step behind, ending in rising-step; ladies to left in front, ending with shuffle, side-step back to place, gentlemen in front, ending as before',
        counts: 8,
        footwork: 'Sidestep with jig-specific endings',
        handholds: 'No hands during sidestep',
        tips: [
          'Rising-step for gentlemen',
          'Shuffle for ladies',
          'Maintain jig rhythm throughout'
        ],
        commonMistakes: [
          'Wrong footwork endings',
          'Not maintaining jig character',
          'Poor sidestep technique'
        ]
      },
      {
        id: 'half-right-left-bandon',
        name: {
          english: 'Half Right and Left',
          irish: 'Leath Dheas agus Clé'
        },
        description: 'Partners take both hands, turn, gentlemen exchange places, passing left arm to left, ladies immediately follow, passing right arm to right, partners take both hands, turn',
        counts: 8,
        footwork: 'Jig steps for turns and exchanges',
        handholds: 'Both hands for turns, arms for passing',
        tips: [
          'Complete turns before exchanges',
          'Proper arm passing technique',
          'Ladies follow immediately'
        ],
        commonMistakes: [
          'Incomplete turns',
          'Wrong arm passing',
          'Poor timing between partners'
        ]
      }
    ]
  },
  {
    id: 'hook-jig',
    name: {
      english: 'The Hook Jig',
      irish: 'Port an Dúigh'
    },
    difficulty: 'intermediate',
    duration: 14,
    participants: 4,
    formation: 'Two couples facing each other',
    music: {
      title: 'Traditional hook jig',
      tempo: 'Double jig',
      timeSignature: '6/8'
    },
    culturalContext: 'A traditional 4-hand jig featuring distinctive "hook" movements and arm linking patterns. The name may derive from the hooking or linking arm movements that characterize this playful dance.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'set-hook',
        name: {
          english: 'Set',
          irish: 'Suigh'
        },
        description: 'Gentlemen take partners\' right hands in their right, all set to time in place, partners facing each other',
        counts: 8,
        footwork: 'Setting steps in jig time',
        handholds: 'Right hands with partners',
        tips: [
          'Set clearly to jig rhythm',
          'Maintain partner facing position',
          'Strong right hand connection'
        ],
        commonMistakes: [
          'Poor setting technique',
          'Not facing partner properly',
          'Weak hand connection'
        ]
      },
      {
        id: 'ladies-link-arms-hook',
        name: {
          english: 'Ladies Link Arms',
          irish: 'Nasc Lámha na mBan'
        },
        description: 'Ladies link right arms in centre, turn, break off to own partner with left arm, turn, dance in place',
        counts: 8,
        footwork: 'Linking and turning steps',
        handholds: 'Right arms linked in center, then left arms with partners',
        tips: [
          'Ladies link firmly in center',
          'Smooth break off to partners',
          'Clear dance in place finish'
        ],
        commonMistakes: [
          'Weak arm linking',
          'Awkward break off',
          'Not dancing in place properly'
        ]
      },
      {
        id: 'gentlemen-link-arms-hook',
        name: {
          english: 'Gentlemen Link Arms',
          irish: 'Nasc Lámha na bhFear'
        },
        description: 'Gentlemen repeat previous movement - link right arms in center, turn, break off to partners with left arms, turn, dance in place',
        counts: 8,
        footwork: 'Mirror of ladies\' linking movement',
        handholds: 'Right arms linked in center, then left arms with partners',
        tips: [
          'Mirror the ladies\' movement exactly',
          'Strong arm connections',
          'Coordinate with jig rhythm'
        ],
        commonMistakes: [
          'Not mirroring ladies\' pattern',
          'Poor timing coordination',
          'Weak linking technique'
        ]
      },
      {
        id: 'change-sides-hook',
        name: {
          english: 'Change Sides',
          irish: 'Malartú Taobhanna'
        },
        description: 'All dance across towards opposite couple, finishing up in place vacated by them, gentlemen on the outside, dance in place, return to original position, dance in place',
        counts: 8,
        footwork: 'Crossing and return steps',
        handholds: 'No hands during crossing',
        tips: [
          'Gentlemen pass on outside',
          'Dance clearly in new positions',
          'Smooth return to original places'
        ],
        commonMistakes: [
          'Gentlemen not going to outside',
          'Not dancing in new positions',
          'Poor timing on return'
        ]
      },
      {
        id: 'advance-opposite-ladies-hook',
        name: {
          english: 'Advance to Opposite Ladies',
          irish: 'Dul i dTreo na mBan Eile'
        },
        description: 'Gentlemen advance to opposite ladies, turn them in place, return to own partners, turn them in place',
        counts: 8,
        footwork: 'Advance and turn movements',
        handholds: 'Both hands for all turns',
        tips: [
          'Clear advance to opposite lady',
          'Complete turns with both ladies',
          'Smooth return to own partner'
        ],
        commonMistakes: [
          'Not advancing far enough',
          'Incomplete turns',
          'Confusion about which lady to turn'
        ]
      },
      {
        id: 'arch-hook',
        name: {
          english: 'Arch',
          irish: 'Stuaim'
        },
        description: 'Partners take hands, couples advance towards each other, leading couple raising their arms and separating slightly so as to allow opposite couple to pass between them, couples thus changing places',
        counts: 8,
        footwork: 'Advance and arch formation steps',
        handholds: 'Both hands with partner, raised for arch',
        tips: [
          'Clear arch formation',
          'Opposite couple passes through smoothly',
          'Smooth exchange of positions'
        ],
        commonMistakes: [
          'Arch too low or too high',
          'Poor timing for passing through',
          'Not completing position exchange'
        ]
      },
      {
        id: 'right-hands-across-hook',
        name: {
          english: 'Right Hands Across',
          irish: 'Lámha Deasa Trasna'
        },
        description: 'Gentlemen give each other right hands in centre and dance half round to left, ladies following between gentlemen without giving hands, dance in place, gentlemen left hands back, ladies following up as before, dance in place',
        counts: 8,
        footwork: 'Wheel steps for gentlemen, following steps for ladies',
        handholds: 'Right hands for gentlemen, no hands for ladies',
        tips: [
          'Ladies follow without giving hands',
          'Gentlemen maintain center formation',
          'Clear dance in place sections'
        ],
        commonMistakes: [
          'Ladies trying to give hands',
          'Gentlemen not maintaining center',
          'Poor timing on dance in place'
        ]
      }
    ]
  },
  {
    id: 'castlebridge-reel',
    name: {
      english: 'The Castlebridge Reel',
      irish: 'Rince Dhroichead an Chaisleáin'
    },
    difficulty: 'intermediate',
    duration: 20,
    participants: 4,
    formation: 'Two couples facing each other',
    music: {
      title: 'Traditional reel',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'A complex 4-hand reel featuring an elaborate opening sequence and multiple figures. The dance represents the sophisticated development of Irish social dancing, with intricate partner exchanges and formations.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'opening-lead-round-castlebridge',
        name: {
          english: 'Opening - Lead Round',
          irish: 'Tús - Treorú Timpeall'
        },
        description: 'Gentlemen take partner\'s left hand in their right, couples lead round in circle to right to their own place',
        counts: 8,
        footwork: 'Promenade step in circular formation',
        handholds: 'Left hand in right',
        tips: [
          'Simple opening lead round',
          'Return to exact starting place',
          'Prepare for complex sequence'
        ],
        commonMistakes: [
          'Not returning to exact place',
          'Wrong hand hold',
          'Poor circular formation'
        ]
      },
      {
        id: 'change-sides-castlebridge',
        name: {
          english: 'Change Sides',
          irish: 'Malartú Taobhanna'
        },
        description: 'Both couples advance, still retaining hands, to meet in centre, retire, advance as before, opposite couple release hands, leading couple pass between partners of opposite couple, and cross to the other side',
        counts: 16,
        footwork: 'Advance, retire, and complex crossing steps',
        handholds: 'Various holds during crossing sequence',
        tips: [
          'Complex sequence requiring coordination',
          'Opposite couple must release hands',
          'Leading couple passes between them'
        ],
        commonMistakes: [
          'Wrong couple releasing hands',
          'Poor timing on crossing',
          'Not passing between properly'
        ]
      },
      {
        id: 'body-lead-round-castlebridge',
        name: {
          english: 'Body - Lead Round',
          irish: 'Corp - Treorú Timpeall'
        },
        description: 'Same as opening lead round',
        counts: 8,
        footwork: 'Promenade step',
        handholds: 'Left hand in right',
        tips: [
          'Identical to opening',
          'Transition between major sections',
          'Prepare for complex body'
        ],
        commonMistakes: [
          'Changing technique from opening',
          'Poor preparation for next section',
          'Wrong positioning'
        ]
      },
      {
        id: 'sides-castlebridge',
        name: {
          english: 'Sides',
          irish: 'Taobhanna'
        },
        description: 'Same as "Square" 4 hand reel - complex sidestep pattern making square formation',
        counts: 16,
        footwork: 'Sidestep with two short threes at corners',
        handholds: 'No hands during square movement',
        tips: [
          'Each dancer passes every other twice',
          'Lady passes in front each time',
          'Keep square shape precise'
        ],
        commonMistakes: [
          'Square too small or irregular',
          'Not finishing with two short threes',
          'Poor timing with other dancers'
        ]
      }
    ]
  },
  {
    id: 'high-road-reel',
    name: {
      english: 'The High Road Reel',
      irish: 'Rince an Bhóthair Ard'
    },
    difficulty: 'intermediate',
    duration: 16,
    participants: 4,
    formation: 'Two couples facing each other',
    music: {
      title: 'Traditional reel',
      tempo: 'Moderate reel time',
      timeSignature: '2/4'
    },
    culturalContext: 'A streamlined 4-hand reel featuring the standard lead round followed by sides and right and left movements. The "high road" may refer to taking the more direct or elevated path through the dance movements.',
    region: 'Traditional throughout Ireland',
    steps: [
      {
        id: 'lead-round-high-road',
        name: {
          english: 'Lead Round',
          irish: 'Treorú Timpeall'
        },
        description: 'Standard lead around for 4-hand reels',
        counts: 16,
        footwork: 'Promenade step',
        handholds: 'Inside hands, then reverse hand hold',
        tips: [
          'Standard opening movement',
          'Set pattern for 4-hand reels',
          'Smooth hand transitions'
        ],
        commonMistakes: [
          'Non-standard variations',
          'Poor hand transitions',
          'Wrong timing'
        ]
      },
      {
        id: 'sides-high-road',
        name: {
          english: 'Sides',
          irish: 'Taobhanna'
        },
        description: 'Same as "Square" 4 hand reel sides',
        counts: 16,
        footwork: 'Square pattern sidestep',
        handholds: 'No hands during movement',
        tips: [
          'Standard square pattern',
          'Each dancer completes full square',
          'Two short threes at each corner'
        ],
        commonMistakes: [
          'Irregular square shape',
          'Missing two short threes',
          'Poor coordination with others'
        ]
      },
      {
        id: 'scotch-right-left-high-road',
        name: {
          english: 'Scotch Right and Left',
          irish: 'Deas agus Clé Albannach'
        },
        description: 'Quick chain-like movement with precise hand changes',
        counts: 8,
        footwork: 'Quick steps for hand changes',
        handholds: 'Alternating right and left hands',
        tips: [
          'Quick, precise timing',
          'Chain-like progression',
          'Clean hand changes'
        ],
        commonMistakes: [
          'Slow or hesitant hand changes',
          'Wrong progression pattern',
          'Poor timing coordination'
        ]
      },
      {
        id: 'right-and-left-high-road',
        name: {
          english: 'Right and Left',
          irish: 'Deas agus Clé'
        },
        description: 'Standard Right and Left Version A',
        counts: 8,
        footwork: 'Precise passing and turning steps',
        handholds: 'Right and left hands in sequence',
        tips: [
          'Standard 4-hand reel ending',
          'Precise execution required',
          'Return to original positions'
        ],
        commonMistakes: [
          'Wrong version of Right and Left',
          'Poor execution of standard pattern',
          'Not returning to correct places'
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