// COMPREHENSIVE DANCE CATALOG - GENERATED FILE
// Integrated from ceili-app extensive historical collection
// Generated on 2025-07-23T16:32:55.525Z
// Contains 18 dances spanning 500+ years of Irish dance history

export interface CeiliDance {
  id: string;
  name: {
    english: string;
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
  stepNumber: number;
  name: string;
  description: string;
  videoSegment: {
    startTime: number;
    endTime: number;
  };
  culturalNote?: string;
}

// Complete integrated dance catalog
export const ceiliDances: CeiliDance[] = [
  {
    "id": "walls-of-limerick",
    "name": {
      "english": "The Walls of Limerick",
      "irish": "Ballaí Luimní"
    },
    "difficulty": "beginner",
    "duration": 3,
    "participants": 4,
    "formation": "Dancers line up in couples, lady on gentleman's right, each set of two couples facing each other",
    "music": {
      "title": "The Walls of Limerick",
      "tempo": "Lively reel time",
      "timeSignature": "2/4"
    },
    "steps": [
      {
        "id": "the-walls-of-limerick-step-1",
        "name": {
          "english": "Advance and Retire",
          "irish": "Dul Chun Cinn agus Cúlú"
        },
        "description": "Gentleman takes partner's left hand in his right, both advance to meet the opposite couple (2 bars), retire to the place (2 bars). Repeat the movement.",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Left hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-walls-of-limerick-step-2",
        "name": {
          "english": "Half Right and Left",
          "irish": "Leath-Dheas agus Clé"
        },
        "description": "Ladies exchange places by side-stepping across the left, passing each other face to face, and finishing with two short threes (4 bars); gentlemen now exchange places, but side-step to the right (4 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-walls-of-limerick-step-3",
        "name": {
          "english": "Dance with Opposite",
          "irish": "Rince le hAghaidh"
        },
        "description": "Each gentleman and opposite lady take right hands, both sidestep to gentleman's left, finishing with two short threes (4 bars); sidestep back, finishing with two short threes (4 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-walls-of-limerick-step-4",
        "name": {
          "english": "Dance Around",
          "irish": "Rince Timpeall"
        },
        "description": "Gentleman takes own partner's hands, both dance a complete circle around opposite couple (8 bars), finishing up to face in the opposite direction.",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "The simplest of all dances from the point of view of execution. From the original Irish Dancing Commission manual \"Ár Rincí Fóirne\" - considered the foundation dance for all ceili dancing.",
    "region": "Traditional Irish"
  },
  {
    "id": "an-rince-mor",
    "name": {
      "english": "An Rince Mór",
      "irish": "An Rince Mór"
    },
    "difficulty": "beginner",
    "duration": 3,
    "participants": 6,
    "formation": "The dancers form a large ring round the room, each gent having his partner at his right hand",
    "music": {
      "title": "An Rince Mór",
      "tempo": "Lively reel time",
      "timeSignature": "2/4"
    },
    "steps": [
      {
        "id": "an-rince-m-r-step-1",
        "name": {
          "english": "Ring to Left and Right",
          "irish": "Ring to Left and Right"
        },
        "description": "All the dancers in ring hold hands, and dance sidestep to left, finishing with two short \"threes\", and return to right, finishing as before.",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "an-rince-m-r-step-2",
        "name": {
          "english": "Swing with Ladies on Left",
          "irish": "Swing with Ladies on Left"
        },
        "description": "Gents take crossed hands of ladies on their left, and couples swing in place, clockwise.",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "an-rince-m-r-step-3",
        "name": {
          "english": "Swing with Partners",
          "irish": "Swing with Partners"
        },
        "description": "Gents take hands of partners and dance as in previous movement.",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "an-rince-m-r-step-4",
        "name": {
          "english": "Link Arms",
          "irish": "Link Arms"
        },
        "description": "Gents link right arm of lady on their left and turn clockwise (2 bars); link left arm in left arm of partner and turn anticlockwise (2 bars); repeat the right arm link and turn with lady on left, and chain back to partners.",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "an-rince-m-r-step-5",
        "name": {
          "english": "Lead Round",
          "irish": "Lead Round"
        },
        "description": "Couples lead around anticlockwise, with Promenade Step for six bars of music, and during the last two bars form a large ring to recommence dance.",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "A Round Dance in Reel time for any number of couples. Popularly used as the Damhsa Deireannach in the North of the country. Traditional closing dance, especially popular in Northern Ireland.",
    "region": "Traditional Irish"
  },
  {
    "id": "siege-of-ennis",
    "name": {
      "english": "Siege of Ennis",
      "irish": "Léigear Inis"
    },
    "difficulty": "intermediate",
    "duration": 3,
    "participants": 8,
    "formation": "Lines of four dancers, two couples in each line, facing another set of four",
    "music": {
      "title": "Siege of Ennis",
      "tempo": "Fast jig time",
      "timeSignature": "6/8"
    },
    "steps": [
      {
        "id": "siege-of-ennis-step-1",
        "name": {
          "english": "Advance and Retire",
          "irish": "Dul Chun Cinn agus Cúlú"
        },
        "description": "Each set of four dancers take hands and advance to opposite four (2 bars); retire (2 bars). Advance and retire again (4 bars)",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "siege-of-ennis-step-2",
        "name": {
          "english": "Sides",
          "irish": "Sides"
        },
        "description": "The couple on the left of each line of four sidestep to the right behind, ending with rise and grind, while couple on right of each line of four sidestep to left, in front (4 bars); all sidestep back to place, ending with Rise and Grind (4 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "siege-of-ennis-step-3",
        "name": {
          "english": "Hands Across",
          "irish": "Lámha Trasna"
        },
        "description": "The two ladies and two gentlemen facing each other in the centre give right hands across and dance round to the right (4 bars); release hands, reverse, give left hand across, and dance to the left back to place (4 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "siege-of-ennis-step-4",
        "name": {
          "english": "Advance, Retire and Pass Through",
          "irish": "Advance, Retire and Pass Through"
        },
        "description": "Advance and retire as explained in first movement (4 bars). All advance again (2 bars); each set facing the music raise hands allowing opposite four to pass under, one dancer under each arch, outer gentlemen passing on the outside.",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "A Long Dance in Jig Time. Dancers line up in fours, two couples in each line; each set of two couples stands facing another set of two couples. A progressive long dance that allows for many couples to participate simultaneously.",
    "region": "Traditional Irish"
  },
  {
    "id": "four-hand-reel",
    "name": {
      "english": "The Four-Hand Reel",
      "irish": "Rinnce Ceithre Lámh"
    },
    "difficulty": "intermediate",
    "duration": 3,
    "participants": 4,
    "formation": "A and B (leading couple) facing C and D (opposite couple), each gentleman lightly holding partner's left hand in his right",
    "music": {
      "title": "The Four-Hand Reel",
      "tempo": "Lively reel time",
      "timeSignature": "2/4"
    },
    "steps": [
      {
        "id": "the-four-hand-reel-step-1",
        "name": {
          "english": "Lead Around",
          "irish": "Treorú Timpeall"
        },
        "description": "Dancers half-right turn and lead around a complete circle (8 bars); release hands, about turn inwards, gentleman takes partner's right hand in his left and both lead back to place (8 bars)",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-four-hand-reel-step-2",
        "name": {
          "english": "The Body - The Square",
          "irish": "The Body - The Square"
        },
        "description": "Gentlemen sidestep a square in anti-clockwise direction, while ladies sidestep a square in clockwise direction, all finishing with two short-threes after each side-step (16 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-four-hand-reel-step-3",
        "name": {
          "english": "The Body - Four Sevens",
          "irish": "The Body - Four Sevens"
        },
        "description": "The gentleman sidesteps to the right behind partner, the lady sidestepping to the left in front (2 bars); gentleman sidestep back to place in front of partner, lady sidestepping back to place behind (2 bars); the movement is repeated (4 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-four-hand-reel-step-4",
        "name": {
          "english": "The Body - Hands Across",
          "irish": "The Body - Hands Across"
        },
        "description": "All four dancers give right hands across in the centre, shoulder high, dance around clockwise (4 bars); release hands, reverse, give left hands across and dance back to place (4 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-four-hand-reel-step-5",
        "name": {
          "english": "The Body - Down the Centre",
          "irish": "The Body - Down the Centre"
        },
        "description": "Leading couple turn to face each other, take right hands and sidestep through the centre to the place occupied by opposite couple, while the latter sidestep separately up the outside to place occupied by leading couple (2 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-four-hand-reel-step-6",
        "name": {
          "english": "The Body - Right and Left Chain",
          "irish": "The Body - Right and Left Chain"
        },
        "description": "Gentleman gives right hand to opposite lady, both move forward in semi-circle, gentlemen clockwise, ladies anti-clockwise, continue to meet partner with left hand, opposite lady again with right hand and on to own partner with left hand to finish in position.",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "A fundamental figure dance that introduces the concept of \"The Body\" - a series of movements that form the core of many ceili dances. The Body of this dance forms the foundation for most other figure dances.",
    "region": "Traditional Irish"
  },
  {
    "id": "bridge-of-athlone",
    "name": {
      "english": "The Bridge of Athlone",
      "irish": "Droichead Bhaile Átha Luain"
    },
    "difficulty": "intermediate",
    "duration": 3,
    "participants": 8,
    "formation": "Any number of couples in two lines, partners facing each other",
    "music": {
      "title": "The Bridge of Athlone",
      "tempo": "Fast jig time",
      "timeSignature": "6/8"
    },
    "steps": [
      {
        "id": "the-bridge-of-athlone-step-1",
        "name": {
          "english": "Rising Step, Advance and Retire",
          "irish": "Rising Step, Advance and Retire"
        },
        "description": "Each line of dancers hold hands and all dance \"Rising Step\" twice, beginning on right foot (4 bars). The lines of dancers now advance and retire once with Promenade Step (4 bars). All again dance \"Rising Step\" twice (4 bars), then release hands, advance and pass through, by partners right, to opposite side, and turn right to face back (4 bars). Repeat all above, crossing back to places.",
        "counts": 32,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-bridge-of-athlone-step-2",
        "name": {
          "english": "Down the Centre",
          "irish": "Down the Centre"
        },
        "description": "First couple (sometimes the first three or five couples if the line is a long one) take right hands and dance Sidestep down the centre between the two lines, finishing with two short \"threes\" (4 bars); sidestep back to places, finishing as before (4 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-bridge-of-athlone-step-3",
        "name": {
          "english": "Cast Off",
          "irish": "Cast Off"
        },
        "description": "Leading couple (or couples) now cast off, followed by all the dancers in the line, the ladies promenading outside their line, and dancing down towards the opposite end of the line, the gents dancing in a similar manner on their side.",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-bridge-of-athlone-step-4",
        "name": {
          "english": "The Bridge",
          "irish": "The Bridge"
        },
        "description": "When the couple (or couples) who have done movement B reach the end of the line, they turn in to meet, dance a little way up, with inside hands joined, and then form an arch by joining both hands and holding them in a raised position. The dancers following them pass underneath the arch.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Both hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "A long Dance in Double Jig time for any numbers of couples. Formation as in \"Rince Fada\". Named after the historic bridge in Athlone, Ireland.",
    "region": "Traditional Irish"
  },
  {
    "id": "humours-of-bandon",
    "name": {
      "english": "Humours of Bandon",
      "irish": "Greann Dhroichead na Bandan"
    },
    "difficulty": "intermediate",
    "duration": 3,
    "participants": 4,
    "formation": "Same as 4-Hand Reel but danced in jig time",
    "music": {
      "title": "Humours of Bandon",
      "tempo": "Fast jig time",
      "timeSignature": "6/8"
    },
    "steps": [
      {
        "id": "humours-of-bandon-step-1",
        "name": {
          "english": "Lead Around",
          "irish": "Treorú Timpeall"
        },
        "description": "As in 4-Hand Reel.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "humours-of-bandon-step-2",
        "name": {
          "english": "Sides",
          "irish": "Sides"
        },
        "description": "Gentlemen side-step to right behind partners while ladies side-step in front (2 bars); all end with rising step (2 bars); sidestep back to place, gentlemen in front (2 bars) ending with rising step (2 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "humours-of-bandon-step-3",
        "name": {
          "english": "Half-Right and Left",
          "irish": "Half-Right and Left"
        },
        "description": "Partners take both hands, turn once in place (4 bars); release hands, gentlemen and ladies cross to opposite position, gentlemen crossing on the outside, ladies passing between opposite gentleman and lady (2 bars). Partners take both hands and turn into place (2 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Both hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "humours-of-bandon-step-4",
        "name": {
          "english": "Advance Through Centre",
          "irish": "Advance Through Centre"
        },
        "description": "Leading gentleman takes his partner's left hand in his right. Both advance towards opposite couple (2 bars); pass between and beyond them; release hands, reverse, return to opposite couple, lady's right hand in gentleman's left (2 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "This dance being a 4-Hand Jig, the dancers are positioned as in the 4-Hand Reel. It is danced to the tune of the same name. Named after the town of Bandon in County Cork.",
    "region": "Traditional Irish"
  },
  {
    "id": "eight-hand-reel",
    "name": {
      "english": "The Eight-Hand Reel",
      "irish": "Rinnce Ocht Lámh"
    },
    "difficulty": "advanced",
    "duration": 3,
    "participants": 8,
    "formation": "Eight dancers arranged in a square formation with couples 1 and 2 as tops, couples 3 and 4 as sides",
    "music": {
      "title": "The Eight-Hand Reel",
      "tempo": "Lively reel time",
      "timeSignature": "2/4"
    },
    "steps": [
      {
        "id": "the-eight-hand-reel-step-1",
        "name": {
          "english": "Lead Around",
          "irish": "Treorú Timpeall"
        },
        "description": "As described in the 4-hand reel. In the lead round care should be taken that an equal distance be maintained between the couples.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-eight-hand-reel-step-2",
        "name": {
          "english": "Extended Sides",
          "irish": "Extended Sides"
        },
        "description": "Gentlemen sidestep to the right behind partners, ladies sidestep to the left, in front (2 bars); finish with two short threes (2 bars); all again sidestep on in the same direction as before, and end with two short threes (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-eight-hand-reel-step-3",
        "name": {
          "english": "Skip Across",
          "irish": "Skip Across"
        },
        "description": "A and C now exchange places to the sidestep (2 bars), ending with two short threes (2 bars); E and G follow suit (4 bars), facing each other, right arm to right, when crossing.",
        "counts": 32,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-eight-hand-reel-step-4",
        "name": {
          "english": "Return Chain",
          "irish": "Return Chain"
        },
        "description": "Gentlemen are now in original position, holding partner's right hand in own right; gentlemen give left hand to lady on right, ladies give left hand to gentlemen on left; all chain around giving right and left hand alternately.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-eight-hand-reel-step-5",
        "name": {
          "english": "Back to Back",
          "irish": "Back to Back"
        },
        "description": "Gentleman, holding partner's right hand, sidesteps towards the left of contrary lady, while partner dances towards the left of contrary gentleman (2 bars); the four dancers thus forming a circle, gentlemen being back to back.",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "An advanced figure dance requiring coordination between eight dancers. Builds upon the Four-Hand Reel with additional complexity. The most popular of the figure dances, requiring eight dancers in perfect coordination.",
    "region": "Traditional Irish"
  },
  {
    "id": "high-cauled-cap",
    "name": {
      "english": "High-Cauled Cap",
      "irish": "Caipín Ard"
    },
    "difficulty": "advanced",
    "duration": 3,
    "participants": 8,
    "formation": "As in 8-Hand Reel - eight dancers in square formation",
    "music": {
      "title": "High-Cauled Cap",
      "tempo": "Lively reel time",
      "timeSignature": "2/4"
    },
    "steps": [
      {
        "id": "high-cauled-cap-step-1",
        "name": {
          "english": "Lead Around",
          "irish": "Treorú Timpeall"
        },
        "description": "As in 4-Hand Reel.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "high-cauled-cap-step-2",
        "name": {
          "english": "Sides",
          "irish": "Sides"
        },
        "description": "Leading and opposite tops sidestep to the right (behind), while leading and opposite sides sidestep to the left, all partners holding hands; all finish with two short threes (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "high-cauled-cap-step-3",
        "name": {
          "english": "Double Quarter Chain",
          "irish": "Double Quarter Chain"
        },
        "description": "Gentleman takes partner's right hand in right and both turn once in place (2 bars); gentleman chains with left hand to lady on left (2 bars), both turn in place (2 bars); chains back to own partner with right hand (2 bars), turning her in place.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "high-cauled-cap-step-4",
        "name": {
          "english": "Ladies Interlace",
          "irish": "Ladies Interlace"
        },
        "description": "Each lady dances in front of own partner towards gentleman on left (2 bars), passes behind and around in front of him (2 bars), dances back towards own partner (2 bars), and behind him to original position (2 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "high-cauled-cap-step-5",
        "name": {
          "english": "Gents Interlace",
          "irish": "Gents Interlace"
        },
        "description": "Each gentleman now dances in front of own partner towards lady on right (2 bars), passes behind and around in front of her (2 bars), dances back towards own partner (2 bars) and behind her to original position (2 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "high-cauled-cap-step-6",
        "name": {
          "english": "Stamp and Clap",
          "irish": "Stampáil agus Bualadh Bos"
        },
        "description": "All stamp right foot twice to one bar, and clap hands three times to second bar (2 bars). Repeat (2 bars). Partners change places to sidestep (2 bars), ending with two short threes (2 bars). Mark time with foot and beat palms as before (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "An advanced figure dance with intricate movements including the famous \"Stamp and Clap\" sequence. One of the most spirited and energetic of all ceili dances.",
    "region": "Traditional Irish"
  },
  {
    "id": "the-hey",
    "name": {
      "english": "The Hey (An Héidhe)",
      "irish": "The Hey (An Héidhe)"
    },
    "difficulty": "intermediate",
    "duration": 3,
    "participants": 6,
    "formation": "6-12 dancers in alternating male/female chain, joined hands in straight line",
    "music": {
      "title": "The Hey (An Héidhe)",
      "tempo": "Lively jig time",
      "timeSignature": "6/8"
    },
    "steps": [
      {
        "id": "the-hey--an-h-idhe--step-1",
        "name": {
          "english": "Basic Chain Movement",
          "irish": "Basic Chain Movement"
        },
        "description": "All move forward in chain with simple walking step (2 bars), begin gentle serpentine movement as chain undulates side to side (4 bars), return to straight line formation (2 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-hey--an-h-idhe--step-2",
        "name": {
          "english": "Female Weaving Pattern",
          "irish": "Female Weaving Pattern"
        },
        "description": "Females begin weaving pattern, moving around their male partners (4 bars), continue circular movement passing behind males (4 bars), complete circle now facing opposite direction (4 bars), return to original positions through reverse weaving (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-hey--an-h-idhe--step-3",
        "name": {
          "english": "Under-Arm Passes",
          "irish": "Under-Arm Passes"
        },
        "description": "Designated couples raise joined hands to form arches (2 bars), other dancers pass under raised arms (2 bars), arch couples lower arms and join the passing movement (2 bars), reform chain in new positions (2 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "A 1500s historical court dance performed for Queen Elizabeth I. Features intricate chain and weaving patterns with minimal upper body movement reflecting historical constraints. Court dance performed for Queen Elizabeth I in the 1500s. Represents ancient Irish dance traditions adapted for formal court entertainment.",
    "region": "Traditional Irish"
  },
  {
    "id": "the-trenchmor",
    "name": {
      "english": "The Trenchmor (Treanchmór)",
      "irish": "The Trenchmor (Treanchmór)"
    },
    "difficulty": "intermediate",
    "duration": 3,
    "participants": 4,
    "formation": "4-8 couples in rectangular formation, males on left of partners, facing center",
    "music": {
      "title": "The Trenchmor (Treanchmór)",
      "tempo": "Moderate jig time",
      "timeSignature": "6/8"
    },
    "steps": [
      {
        "id": "the-trenchmor--treanchm-r--step-1",
        "name": {
          "english": "Peasant Folk Elements",
          "irish": "Peasant Folk Elements"
        },
        "description": "All couples advance to center with walking steps (4 bars), retire to places with simple folk steps (4 bars), partners turn with two hands for full turn (4 bars), all couples promenade around formation (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-trenchmor--treanchm-r--step-2",
        "name": {
          "english": "Court Adaptation Elements",
          "irish": "Court Adaptation Elements"
        },
        "description": "Couples advance with refined posture and steps (4 bars), formal retreat with courtly bearing (4 bars), elegant partner turns with extended arms (4 bars), stately promenade with measured steps (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-trenchmor--treanchm-r--step-3",
        "name": {
          "english": "Integration of Folk and Court",
          "irish": "Integration of Folk and Court"
        },
        "description": "Begin with folk elements - advance, retire, turn (8 bars), transition to court styling with formal movements (8 bars), combine both styles within single movement (8 bars), return to folk conclusion (8 bars).",
        "counts": 32,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "Peasant dance adapted for English court entertainment. Demonstrates the evolution from folk to formal styling while retaining Irish elements. Peasant dance adapted for English court entertainment. Demonstrates cultural significance of adaptation while maintaining Irish identity.",
    "region": "Traditional Irish"
  },
  {
    "id": "every-mans-chance",
    "name": {
      "english": "Every Man's Chance",
      "irish": "Seans Gach Fir"
    },
    "difficulty": "beginner",
    "duration": 3,
    "participants": 6,
    "formation": "Large circle around entire room, men to left of ladies, face center",
    "music": {
      "title": "Every Man's Chance",
      "tempo": "Fast reel time",
      "timeSignature": "2/4"
    },
    "steps": [
      {
        "id": "every-man-s-chance-step-1",
        "name": {
          "english": "Lead-In Pattern",
          "irish": "Lead-In Pattern"
        },
        "description": "All advance toward center with walking steps (4 bars), all retire to places maintaining circle (4 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "every-man-s-chance-step-2",
        "name": {
          "english": "Circle Left and Right",
          "irish": "Circle Left and Right"
        },
        "description": "All sidestep to left (clockwise) around circle (8 bars), all sidestep to right (counter-clockwise) back to places (8 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "every-man-s-chance-step-3",
        "name": {
          "english": "Partner Interaction",
          "irish": "Partner Interaction"
        },
        "description": "Partners face each other, take both hands, turn in place (8 bars), return to circle formation, join hands with neighbors (8 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Both hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "every-man-s-chance-step-4",
        "name": {
          "english": "The Chance Element",
          "irish": "The Chance Element"
        },
        "description": "All men advance to center, join hands, circle left (8 bars), men retire to circle but each moves one position to their right to new partner (8 bars), ladies welcome new partner with both hands turn (8 bars), all rejoin circle with new partnerships (8 bars).",
        "counts": 32,
        "footwork": "Standard céilí footwork",
        "handholds": "Both hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "Social circle dance for large groups. Progressive element creates community interaction where eventually every man dances with every lady. Traditional community dance emphasizing social interaction and inclusion. Perfect for céilí gatherings.",
    "region": "Traditional Irish"
  },
  {
    "id": "waves-of-tory",
    "name": {
      "english": "Tonnaí Thoraí (Waves of Tory)",
      "irish": "Tonnaí Thoraí (Waves of Tory)"
    },
    "difficulty": "advanced",
    "duration": 3,
    "participants": 8,
    "formation": "Partners face each other in two lines, ladies on one side, gentlemen opposite",
    "music": {
      "title": "Tonnaí Thoraí (Waves of Tory)",
      "tempo": "Moderate reel time",
      "timeSignature": "2/4"
    },
    "steps": [
      {
        "id": "tonna--thora---waves-of-tory--step-1",
        "name": {
          "english": "Gentle Wave Pattern",
          "irish": "Gentle Wave Pattern"
        },
        "description": "Lines sway gently side to side representing calm seas (4 bars), gradually increase undulation building wave energy (4 bars), lines advance and retire like tide movement (4 bars), return to gentle swaying (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "tonna--thora---waves-of-tory--step-2",
        "name": {
          "english": "Storm Wave Sequence",
          "irish": "Storm Wave Sequence"
        },
        "description": "Lines cross through each other in turbulent pattern (8 bars), couples separate and rejoin like waves breaking (8 bars), individual dancers weave through formation like whitecaps (8 bars), all reform lines, gradually calming (8 bars).",
        "counts": 32,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "tonna--thora---waves-of-tory--step-3",
        "name": {
          "english": "The Tory Island Crossing",
          "irish": "The Tory Island Crossing"
        },
        "description": "Top couple \"launches\" by advancing between lines (4 bars), navigates through other couples representing rough crossing (4 bars), reaches \"island\" at bottom of formation (4 bars), all couples shift up one position (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "Maritime heritage dance from Donegal coast tradition with Celtic sea-worship elements. Dance movements represent waves and rough seas. From Tory Island off Donegal coast. Represents ancient Celtic sea-worship traditions and maritime challenges of island life.",
    "region": "County Donegal"
  },
  {
    "id": "hooks-and-eyes",
    "name": {
      "english": "Hooks and Eyes",
      "irish": "Cromáin agus Súile"
    },
    "difficulty": "intermediate",
    "duration": 3,
    "participants": 4,
    "formation": "Couples in parallel lines or circle formation, adaptable to group size",
    "music": {
      "title": "Hooks and Eyes",
      "tempo": "Lively reel time",
      "timeSignature": "2/4"
    },
    "steps": [
      {
        "id": "hooks-and-eyes-step-1",
        "name": {
          "english": "Basic Hook and Eye Connection",
          "irish": "Basic Hook and Eye Connection"
        },
        "description": "Partners link arms (the \"hook\"), other dancers provide \"eye\" points for connection, emphasis on community linking.",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "hooks-and-eyes-step-2",
        "name": {
          "english": "Basic Linking",
          "irish": "Basic Linking"
        },
        "description": "Partners link right arms, turn clockwise (4 bars), break apart, each links with neighbor (eye connection) (4 bars), chain linking through multiple dancers (4 bars), return to partner link (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "hooks-and-eyes-step-3",
        "name": {
          "english": "Community Integration",
          "irish": "Community Integration"
        },
        "description": "All couples participate in linking chains, creates community web of connections, emphasis on inclusion and participation.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "Traditional community dance maintained by traditional dance communities. Features interlocking \"hook and eye\" connection patterns between dancers. Maintained by traditional Irish dance communities. Limited detailed documentation available, emphasizes community linking and inclusion.",
    "region": "Traditional Irish"
  },
  {
    "id": "fionnala",
    "name": {
      "english": "Fionnala - Four-Hand Reel",
      "irish": "Fionnuala - Rinnce Ceithre Lámh"
    },
    "difficulty": "advanced",
    "duration": 3,
    "participants": 4,
    "formation": "Two couples face each other, gentlemen on left of partners, approximately 6 feet between couples",
    "music": {
      "title": "Fionnala - Four-Hand Reel",
      "tempo": "Lively reel time",
      "timeSignature": "2/4"
    },
    "steps": [
      {
        "id": "fionnala---four-hand-reel-step-1",
        "name": {
          "english": "Lead Around",
          "irish": "Treorú Timpeall"
        },
        "description": "All couples take inside hands, half-turn right, lead around circle clockwise (8 bars), release hands, turn inward, take inside hands again, lead back to places (8 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "fionnala---four-hand-reel-step-2",
        "name": {
          "english": "The Sides Movement",
          "irish": "The Sides Movement"
        },
        "description": "Gentlemen sidestep right behind partners, ladies sidestep left in front (4 bars), all finish with \"two short threes\" (4 bars), sidestep back to place, gentlemen in front this time (4 bars), finish with two short threes in original positions (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "fionnala---four-hand-reel-step-3",
        "name": {
          "english": "Hands Across",
          "irish": "Lámha Trasna"
        },
        "description": "All four give right hands across in center, dance around clockwise (4 bars), release hands, turn, give left hands across, dance back to places (4 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "fionnala---four-hand-reel-step-4",
        "name": {
          "english": "Down the Center",
          "irish": "Down the Center"
        },
        "description": "Leading couple turn to face each other, take right hands, sidestep toward opposite couple's place (2 bars), opposite couple sidestep separately up outside to leading couple's place (2 bars), leading couple half-turn in place, release hands (2 bars), couples return to original positions taking partner's hands and half-turning (2 bars).",
        "counts": 8,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "Pre-CLRG standardization four-hand dance from Burchenal 1925. More complex than typical beginner ceili dances, requires good spatial awareness. Documented in Elizabeth Burchenal's 1925 collection, represents pre-standardization Irish dance tradition.",
    "region": "Traditional Irish"
  },
  {
    "id": "the-fairy-reel",
    "name": {
      "english": "The Fairy Reel",
      "irish": "Rinnce na Sí"
    },
    "difficulty": "advanced",
    "duration": 3,
    "participants": 6,
    "formation": "Two gentlemen with four ladies total - each gentleman has lady on left and right, trios face each other",
    "music": {
      "title": "The Fairy Reel",
      "tempo": "Lively reel time",
      "timeSignature": "2/4"
    },
    "steps": [
      {
        "id": "the-fairy-reel-step-1",
        "name": {
          "english": "Advance and Retire with Ring Formation",
          "irish": "Advance and Retire with Ring Formation"
        },
        "description": "Gentlemen take partners' inside hands, all three in each trio advance to meet opposite trio (2 bars), retire to place (2 bars), repeat movement (4 bars), on last two threes all six form large ring (2 bars), all dance sidestep anti-clockwise (4 bars), sidestep back clockwise (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-fairy-reel-step-2",
        "name": {
          "english": "Slip Sides - Complex Partner Work",
          "irish": "Slip Sides - Complex Partner Work"
        },
        "description": "Each gentleman faces lady on his right, take right hands, dance sidestep to gent's left, sidestep back (8 bars), on threes gent turns left to face other partner while free partner dances sidestep right and back, repeat with left-hand partner (8 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Right hands joined",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-fairy-reel-step-3",
        "name": {
          "english": "Gents Center and Link Arms",
          "irish": "Gents Center and Link Arms"
        },
        "description": "Gentlemen dance to center with promenade step (4 bars), link right arms, continue round (4 bars), turn, link left arms, dance back (4 bars), face partners on right for chain sequence (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-fairy-reel-step-4",
        "name": {
          "english": "Square Movement",
          "irish": "Square Movement"
        },
        "description": "Four ladies dance square pattern as in Four-Hand Reel, simultaneously gentlemen dance diamond pattern, complex interlocking choreography.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "Advanced six-hand formation dance with unusual gender ratio (2 gentlemen, 4 ladies). Originally square dance, now progressive long dance. Originally performed as square dance, adapted to progressive long dance format. Often performed as showpiece due to difficulty level.",
    "region": "Traditional Irish"
  },
  {
    "id": "pantomimic-dances",
    "name": {
      "english": "Pantomimic Dances - Cultural Heritage",
      "irish": "Rincí Ionadaíochta - Oidhreacht Chultúrtha"
    },
    "difficulty": "intermediate",
    "duration": 3,
    "participants": 4,
    "formation": "Variable based on occupation theme - line, scattered, or processing formations",
    "music": {
      "title": "Pantomimic Dances - Cultural Heritage",
      "tempo": "Moderate reel time",
      "timeSignature": "2/4"
    },
    "steps": [
      {
        "id": "pantomimic-dances---cultural-heritage-step-1",
        "name": {
          "english": "Bata na bPlandálaithe (Planting Stick)",
          "irish": "Bata na bPlandálaithe (Planting Stick)"
        },
        "description": "Mime digging motions with stick (4 bars), plant potato movements (4 bars), cover and pat down soil (4 bars), move to new row (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "pantomimic-dances---cultural-heritage-step-2",
        "name": {
          "english": "Máistrí na mBúistéirí (Butchers' March)",
          "irish": "Máistrí na mBúistéirí (Butchers' March)"
        },
        "description": "Ceremonial march with trade-specific gestures, processing line formation representing butchers' guild celebration.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "pantomimic-dances---cultural-heritage-step-3",
        "name": {
          "english": "Rinnce an Claímh (Stick Dance)",
          "irish": "Rinnce an Claímh (Stick Dance)"
        },
        "description": "Coordinated stick patterns representing combat skills, warrior tradition adapted to sticks, circle or lines with sticks/swords.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "Cultural education dances representing various Irish occupations. Includes Bata na bPlandálaithe (Planting Stick), Máistrí na mBúistéirí (Butchers' March), and Rinnce an Claímh (Stick Dance). Occupational dances performed by various Irish trades and guilds. Links dance to broader Irish social and economic history.",
    "region": "Traditional Irish"
  },
  {
    "id": "three-tunes",
    "name": {
      "english": "The Three Tunes",
      "irish": "Na Trí Fhoinn"
    },
    "difficulty": "advanced",
    "duration": 3,
    "participants": 8,
    "formation": "Eight dancers in ring holding hands",
    "music": {
      "title": "The Three Tunes",
      "tempo": "Lively jig time",
      "timeSignature": "6/8"
    },
    "steps": [
      {
        "id": "the-three-tunes-step-1",
        "name": {
          "english": "Sides (Jig Time)",
          "irish": "Sides (Jig Time)"
        },
        "description": "All dance sidestep to left, finishing with two short \"threes\", and return to right, finishing as before (8 bars); repeat this sidestep movement to right, and back to places (8 bars). While doing the last two \"threes\", all couples fall back to places as taken up at commencement of Eight-Hand Reel.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-three-tunes-step-2",
        "name": {
          "english": "Rings (Jig Time)",
          "irish": "Rings (Jig Time)"
        },
        "description": "The four ladies advance to centre, take hands, and with Promenade Step, dance round clockwise to places (4 bars); all clap hands twice (1 bar); partners dance half sidestep past each other, gents passing behind (count One-Two-Three) (1 bar); sidestep back to places, ladies now passing behind (2 bars). Repeat this movement, the gents dancing round in centre this time instead of the ladies.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-three-tunes-step-3",
        "name": {
          "english": "Lead Around (Hornpipe Time)",
          "irish": "Lead Around (Hornpipe Time)"
        },
        "description": "Partners hold inside hands and lead around anticlockwise, as at beginning of Eight or Sixteen-hand Reel (8 bars); release hands, reverse, and again taking inside hands, lead back to places.",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-three-tunes-step-4",
        "name": {
          "english": "Stamp and Clap (Hornpipe Time)",
          "irish": "Stamp and Clap (Hornpipe Time)"
        },
        "description": "All dancers stamp first the right foot, then the left, and then the right again, to one bar of music, and clap hands together three times on second bar (2 bars); sidestep past each other, the gent passing behind, and back to places, the gent now passing in front (4 bars).",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-three-tunes-step-5",
        "name": {
          "english": "See-Saw (Reel Time)",
          "irish": "See-Saw (Reel Time)"
        },
        "description": "Dancers take partners' hands (uncrossed) and swing around in couples anticlockwise (8 bars). Return clock-wise, swinging in reverse direction (8 bars)",
        "counts": 16,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "the-three-tunes-step-6",
        "name": {
          "english": "Roly-Poly (Reel Time)",
          "irish": "Roly-Poly (Reel Time)"
        },
        "description": "All dancers hold closed hands at chest level and roll them round each other in forward direction (1 bar), and then roll them in the opposite direction (1 bar); pivot once to right on right heel (1 bar); clap hands together once (1 bar); gents shake right fist forward in air once (in threatening manner).",
        "counts": 24,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "This is an eight-hand Figure Dance from Co. Armagh done to three tunes – \"Haste to the Wedding\" (Jig), \"Leslie's Hornpipe\", and \"The German Beau\" (Reel). The Reel is taken at a rather slower pace than the Jig, and the Hornpipe slightly slower still. Collected in the south of Co. Armagh. The music was taken down from the late Henry Savage.",
    "region": "County Armagh"
  },
  {
    "id": "modern-competition-choreography",
    "name": {
      "english": "Modern Competition Choreography (WIDA Style)",
      "irish": "Damhsóireacht Chomórtasach Nua-Aimseartha"
    },
    "difficulty": "advanced",
    "duration": 4,
    "participants": 12,
    "formation": "10-16 dancers minimum in contemporary formations while honoring traditional structures",
    "music": {
      "title": "Modern Competition Choreography (WIDA Style)",
      "tempo": "Lively reel time",
      "timeSignature": "2/4"
    },
    "steps": [
      {
        "id": "modern-competition-choreography--wida-style--step-1",
        "name": {
          "english": "Opening Formation",
          "irish": "Opening Formation"
        },
        "description": "Dramatic entrance using traditional lead-around principle, build to complex multi-level formation, incorporate traditional hands-across in modern arrangement.",
        "counts": 32,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "modern-competition-choreography--wida-style--step-2",
        "name": {
          "english": "Development Section",
          "irish": "Development Section"
        },
        "description": "Traditional figure work (chains, wheels, etc.) in contemporary patterns, use negative space and asymmetrical formations, maintain ceili footwork throughout.",
        "counts": 64,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      },
      {
        "id": "modern-competition-choreography--wida-style--step-3",
        "name": {
          "english": "Climax and Resolution",
          "irish": "Climax and Resolution"
        },
        "description": "Return to traditional formations for powerful finish, ensure all dancers have featured moments, strong musical ending with traditional elements.",
        "counts": 32,
        "footwork": "Standard céilí footwork",
        "handholds": "Various handholds as described",
        "tips": [
          "Focus on timing and coordination",
          "Maintain good posture throughout",
          "Listen carefully to the music"
        ],
        "commonMistakes": [
          "Poor timing with the music",
          "Not maintaining proper formation",
          "Rushing through the movements"
        ]
      }
    ],
    "culturalContext": "Competition figure choreography requiring 10-16 dancers minimum. Bridges traditional ceili dancing with contemporary performance demands. Modern development for WIDA competition standards. Maintains traditional ceili footwork while allowing contemporary formations and musical interpretation.",
    "region": "Traditional Irish"
  }
];

// Dance categories for easy filtering and educational progression
export const danceCategories = {
  // Historical dances (1500s-1800s)
  historical: ["the-hey","the-trenchmor","every-mans-chance","waves-of-tory","hooks-and-eyes","pantomimic-dances"],
  
  // Standard CLRG dances (most common)
  standard: ["walls-of-limerick","an-rince-mor","siege-of-ennis","four-hand-reel","eight-hand-reel","high-cauled-cap"],
  
  // Regional specialties
  regional: ["waves-of-tory","three-tunes"],
  
  // Pre-CLRG documentation (1900-1930)
  preClrg: ["fionnala","the-fairy-reel"],
  
  // Modern developments (2000s+)
  modern: ["modern-competition-choreography"],
  
  // By difficulty level
  beginner: ["walls-of-limerick","an-rince-mor","every-mans-chance"],
  intermediate: ["siege-of-ennis","four-hand-reel","bridge-of-athlone","humours-of-bandon","the-hey","the-trenchmor","hooks-and-eyes","pantomimic-dances"],
  advanced: ["eight-hand-reel","high-cauled-cap","waves-of-tory","fionnala","the-fairy-reel","three-tunes","modern-competition-choreography"]
};

// Historical timeline for educational purposes
export const historicalTimeline = {
  courtDances: { // 1500s-1600s
    period: '1500s-1600s',
    description: 'Court dances performed for English royalty',
    dances: ['the-hey', 'the-trenchmor']
  },
  traditionalFolk: { // 1700s-1800s
    period: '1700s-1800s', 
    description: 'Traditional folk dances from rural communities',
    dances: ['waves-of-tory', 'hooks-and-eyes', 'every-mans-chance', 'pantomimic-dances']
  },
  preClrgDocumentation: { // 1900-1930
    period: '1900-1930',
    description: 'Pre-standardization documentation period',
    dances: ['fionnala', 'the-fairy-reel']
  },
  clrgStandardization: { // 1930s-1960s
    period: '1930s-1960s',
    description: 'Irish Dancing Commission standardized repertoire',
    dances: ['walls-of-limerick', 'siege-of-ennis', 'four-hand-reel', 'eight-hand-reel', 'high-cauled-cap', 'bridge-of-athlone', 'humours-of-bandon', 'an-rince-mor', 'three-tunes']
  },
  modernDevelopments: { // 2000s+
    period: '2000s-Present',
    description: 'Contemporary competition and performance adaptations', 
    dances: ['modern-competition-choreography']
  }
};

// Regional distribution for cultural education
export const regionalDistribution = {
  'Traditional Irish': 16,
  'County Armagh': 1,
  'County Donegal': 1
};

// Statistics for dashboard display
export const catalogStats = {
  totalDances: 18,
  historicalSpan: '500+ years (1500s-Present)',
  difficulties: {
    beginner: 3,
    intermediate: 8, 
    advanced: 7
  },
  formations: {
    long: 7,
    figure: 4,
    round: 5,
    set: 0
  },
  culturalSignificance: {
    courtTraditions: 2,
    maritimeHeritage: 1,
    occupationalDances: 1,
    regionalTraditions: 2
  }
};

export default ceiliDances;
