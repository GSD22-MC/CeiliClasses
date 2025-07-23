// GENERATED FILE - DO NOT EDIT MANUALLY
// Integrated dance catalog from ceili-app
// Generated on 2025-07-23T16:27:55.728Z

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
          "irish": "Advance and Retire"
        },
        "description": "Gentleman takes partner's left hand in his right, both advance to meet the opposite couple (2 bars), retire to the place (2 bars). Repeat the movement.",
        "counts": 8,
        "footwork": "Keep steady rhythm and maintain eye contact with opposite couple",
        "handholds": "Left hands joined",
        "tips": [
          "This is an essential movement in most long dances",
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
          "irish": "Half Right and Left"
        },
        "description": "Ladies exchange places by side-stepping across the left, passing each other face to face, and finishing with two short threes (4 bars); gentlemen now exchange places, but side-step to the right (4 bars).",
        "counts": 8,
        "footwork": "Ladies cross first, then gentlemen - timing is crucial",
        "handholds": "Various handholds as described",
        "tips": [
          "Pass face to face, maintain good posture throughout",
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
          "irish": "Dance with Opposite"
        },
        "description": "Each gentleman and opposite lady take right hands, both sidestep to gentleman's left, finishing with two short threes (4 bars); sidestep back, finishing with two short threes (4 bars).",
        "counts": 8,
        "footwork": "Right hands firmly but not tightly, move as a unit",
        "handholds": "Right hands joined",
        "tips": [
          "This introduces partner interaction with someone other than your own partner",
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
          "irish": "Dance Around"
        },
        "description": "Gentleman takes own partner's hands, both dance a complete circle around opposite couple (8 bars), finishing up to face in the opposite direction.",
        "counts": 8,
        "footwork": "Circle anticlockwise around the opposite couple",
        "handholds": "Various handholds as described",
        "tips": [
          "Finish facing the next couple to continue the progressive dance",
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
    "culturalContext": "The simplest of all dances from the point of view of execution. At starting, the dancers line-up in couples, lady on gentleman's right, each set of two couples facing each other. From the original Irish Dancing Commission manual \"Ár Rincí Fóirne\" - considered the foundation dance for all ceili dancing. This is and essential feature in the majority of \"long dances\". Focus on mastering the sidestep technique and understanding the basic formations before progressing to more complex dances.",
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
    "culturalContext": "A Round Dance in Reel time for any number of couples. Popularly used as the Damhsa Deireannach in the North of the country. Traditional closing dance, especially popular in Northern Ireland. Simple round dance suitable for beginners. Often used as the final dance of the evening.",
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
          "irish": "Advance and Retire"
        },
        "description": "Each set of four dancers take hands and advance to opposite four (2 bars); retire (2 bars). Advance and retire again (4 bars)",
        "counts": 8,
        "footwork": "All four join hands in line, move together as one unit",
        "handholds": "Various handholds as described",
        "tips": [
          "All four join hands in line, move together as one unit",
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
        "footwork": "Master the rising step - this is essential for jig time dances",
        "handholds": "Various handholds as described",
        "tips": [
          "Master the rising step - this is essential for jig time dances",
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
          "irish": "Hands Across"
        },
        "description": "The two ladies and two gentlemen facing each other in the centre give right hands across and dance round to the right (4 bars); release hands, reverse, give left hand across, and dance to the left back to place (4 bars).",
        "counts": 8,
        "footwork": "Hands across at shoulder height, dance around maintaining the cross formation",
        "handholds": "Right hands joined",
        "tips": [
          "Hands across at shoulder height, dance around maintaining the cross formation",
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
        "footwork": "Timing is crucial - raise hands just as opposite set approaches",
        "handholds": "Various handholds as described",
        "tips": [
          "Timing is crucial - raise hands just as opposite set approaches",
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
    "culturalContext": "A Long Dance in Jig Time. Dancers line up in fours, two couples in each line; each set of two couples stands facing another set of two couples. A progressive long dance that allows for many couples to participate simultaneously. Focus on the rising step technique specific to jig time. The pass-through movement requires good timing and coordination.",
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
          "irish": "Lead Around"
        },
        "description": "Dancers half-right turn and lead around a complete circle (8 bars); release hands, about turn inwards, gentleman takes partner's right hand in his left and both lead back to place (8 bars)",
        "counts": 16,
        "footwork": "Keep equal distance between couples throughout",
        "handholds": "Right hands joined",
        "tips": [
          "Keep equal distance between couples throughout",
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
        "footwork": "Each gentleman passes each lady twice - the lady passes in front on each occasion",
        "handholds": "Various handholds as described",
        "tips": [
          "Each gentleman passes each lady twice - the lady passes in front on each occasion",
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
        "footwork": "Note that the two short threes are not performed at the end of each sidestep in this movement",
        "handholds": "Various handholds as described",
        "tips": [
          "Note that the two short threes are not performed at the end of each sidestep in this movement",
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
        "footwork": "Hands at shoulder height, A and C take hands, as do B and D",
        "handholds": "Right hands joined",
        "tips": [
          "Hands at shoulder height, A and C take hands, as do B and D",
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
        "footwork": "Complex movement requiring coordination between couples",
        "handholds": "Right hands joined",
        "tips": [
          "Complex movement requiring coordination between couples",
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
        "footwork": "This completes The Body - the core of the Four-Hand Reel",
        "handholds": "Right hands joined",
        "tips": [
          "This completes The Body - the core of the Four-Hand Reel",
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
    "culturalContext": "A fundamental figure dance that introduces the concept of \"The Body\" - a series of movements that form the core of many ceili dances. The Body of this dance forms the foundation for most other figure dances. Master the basic sidestep and understand partner positioning before attempting this dance. The Body movements are essential building blocks for more advanced dances.",
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
          "irish": "Lead Around"
        },
        "description": "As described in the 4-hand reel. In the lead round care should be taken that an equal distance be maintained between the couples.",
        "counts": 16,
        "footwork": "Critical that all eight dancers maintain proper spacing",
        "handholds": "Various handholds as described",
        "tips": [
          "Critical that all eight dancers maintain proper spacing",
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
        "footwork": "Each gentleman takes right hand of lady next to him on his right",
        "handholds": "Various handholds as described",
        "tips": [
          "Each gentleman takes right hand of lady next to him on his right",
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
        "footwork": "Complex crossing pattern - practice slowly first",
        "handholds": "Various handholds as described",
        "tips": [
          "Complex crossing pattern - practice slowly first",
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
        "footwork": "Chain until meeting own partner again at opposite side",
        "handholds": "Right hands joined",
        "tips": [
          "Chain until meeting own partner again at opposite side",
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
        "footwork": "Forms temporary circles with gentlemen back to back",
        "handholds": "Right hands joined",
        "tips": [
          "Forms temporary circles with gentlemen back to back",
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
    "culturalContext": "An advanced figure dance requiring coordination between eight dancers. Builds upon the Four-Hand Reel with additional complexity. The most popular of the figure dances, requiring eight dancers in perfect coordination. Ensure all dancers are comfortable with the Four-Hand Reel before attempting. Requires good spatial awareness and timing coordination.",
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
          "irish": "Lead Around"
        },
        "description": "As in 4-Hand Reel.",
        "counts": 16,
        "footwork": "Standard lead around for eight dancers",
        "handholds": "Various handholds as described",
        "tips": [
          "Standard lead around for eight dancers",
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
        "footwork": "All couples exchange positions with couple on right",
        "handholds": "Various handholds as described",
        "tips": [
          "All couples exchange positions with couple on right",
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
        "footwork": "Complex chaining pattern with multiple turns",
        "handholds": "Right hands joined",
        "tips": [
          "Complex chaining pattern with multiple turns",
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
        "footwork": "Ladies create interlacing pattern while gentlemen remain in position",
        "handholds": "Various handholds as described",
        "tips": [
          "Ladies create interlacing pattern while gentlemen remain in position",
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
        "footwork": "Gentlemen repeat the interlacing pattern",
        "handholds": "Various handholds as described",
        "tips": [
          "Gentlemen repeat the interlacing pattern",
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
          "irish": "Stamp and Clap"
        },
        "description": "All stamp right foot twice to one bar, and clap hands three times to second bar (2 bars). Repeat (2 bars). Partners change places to sidestep (2 bars), ending with two short threes (2 bars). Mark time with foot and beat palms as before (4 bars).",
        "counts": 16,
        "footwork": "The signature movement - stamp twice, clap three times!",
        "handholds": "Various handholds as described",
        "tips": [
          "The signature movement - stamp twice, clap three times!",
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
    "culturalContext": "An advanced figure dance with intricate movements including the famous \"Stamp and Clap\" sequence. One of the most spirited and energetic of all ceili dances. Master the Eight-Hand Reel before attempting. The stamp and clap movement is unique to this dance.",
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
        "footwork": "Use simple walking steps initially, progress to skip-change steps for advanced dancers",
        "handholds": "Various handholds as described",
        "tips": [
          "Use simple walking steps initially, progress to skip-change steps for advanced dancers",
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
        "footwork": "Males maintain steady position during female weaving, providing stable anchor points",
        "handholds": "Various handholds as described",
        "tips": [
          "Males maintain steady position during female weaving, providing stable anchor points",
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
        "footwork": "Emphasize smooth transitions with \"Up-through-down-reform\" timing cues",
        "handholds": "Various handholds as described",
        "tips": [
          "Emphasize smooth transitions with \"Up-through-down-reform\" timing cues",
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
    "culturalContext": "A 1500s historical court dance performed for Queen Elizabeth I. Features intricate chain and weaving patterns with minimal upper body movement reflecting historical constraints. Court dance performed for Queen Elizabeth I in the 1500s. Represents ancient Irish dance traditions adapted for formal court entertainment. Focus on smooth, flowing movements rather than sharp transitions. Emphasize historical context and court dance origins. Use slower tempo for learning.",
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
        "footwork": "Use earthy, grounded movements emphasizing community participation over individual display",
        "handholds": "Various handholds as described",
        "tips": [
          "Use earthy, grounded movements emphasizing community participation over individual display",
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
        "footwork": "Lift posture, extend arms gracefully, maintain dignity appropriate for formal setting",
        "handholds": "Various handholds as described",
        "tips": [
          "Lift posture, extend arms gracefully, maintain dignity appropriate for formal setting",
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
        "footwork": "Practice smooth transitions between styles, emphasize contrast while maintaining flow",
        "handholds": "Various handholds as described",
        "tips": [
          "Practice smooth transitions between styles, emphasize contrast while maintaining flow",
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
    "culturalContext": "Peasant dance adapted for English court entertainment. Demonstrates the evolution from folk to formal styling while retaining Irish elements. Peasant dance adapted for English court entertainment. Demonstrates cultural significance of adaptation while maintaining Irish identity. Emphasize contrast between folk and court styling. Show how Irish elements persisted despite formal requirements.",
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
        "footwork": "Continuous flowing movement, no sharp stops or starts, body moves as connected to water",
        "handholds": "Various handholds as described",
        "tips": [
          "Continuous flowing movement, no sharp stops or starts, body moves as connected to water",
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
        "footwork": "Couples rise and fall to show wave height, quick direction changes represent wind shifts",
        "handholds": "Various handholds as described",
        "tips": [
          "Couples rise and fall to show wave height, quick direction changes represent wind shifts",
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
        "footwork": "Each couple takes turn making the \"crossing\" from mainland to Tory Island while others provide \"waves\" and \"currents\"",
        "handholds": "Various handholds as described",
        "tips": [
          "Each couple takes turn making the \"crossing\" from mainland to Tory Island while others provide \"waves\" and \"currents\"",
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
    "culturalContext": "Maritime heritage dance from Donegal coast tradition with Celtic sea-worship elements. Dance movements represent waves and rough seas. From Tory Island off Donegal coast. Represents ancient Celtic sea-worship traditions and maritime challenges of island life. Emphasize connection to maritime heritage and Celtic spirituality. Encourage dancers to feel the ocean's rhythm and power.",
    "region": "County Donegal"
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
        "footwork": "Danced to \"Haste to the Wedding\" jig",
        "handholds": "Various handholds as described",
        "tips": [
          "Danced to \"Haste to the Wedding\" jig",
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
        "footwork": "Still in jig time - ladies first, then gents",
        "handholds": "Various handholds as described",
        "tips": [
          "Still in jig time - ladies first, then gents",
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
        "footwork": "Now switching to hornpipe time - \"Leslie's Hornpipe\"",
        "handholds": "Various handholds as described",
        "tips": [
          "Now switching to hornpipe time - \"Leslie's Hornpipe\"",
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
        "footwork": "Complex stamping and clapping sequence",
        "handholds": "Various handholds as described",
        "tips": [
          "Complex stamping and clapping sequence",
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
        "footwork": "Now in reel time - \"The German Beau\"",
        "handholds": "Various handholds as described",
        "tips": [
          "Now in reel time - \"The German Beau\"",
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
        "footwork": "The famous \"threatening gesture\" movement!",
        "handholds": "Various handholds as described",
        "tips": [
          "The famous \"threatening gesture\" movement!",
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
    "culturalContext": "This is an eight-hand Figure Dance from Co. Armagh done to three tunes – \"Haste to the Wedding\" (Jig), \"Leslie's Hornpipe\", and \"The German Beau\" (Reel). The Reel is taken at a rather slower pace than the Jig, and the Hornpipe slightly slower still. Collected in the south of Co. Armagh. The music was taken down from the late Henry Savage. Unique dance using three different time signatures. Practice transitioning between jig, hornpipe, and reel timing.",
    "region": "County Armagh"
  }
];

// Dance categories for easy filtering
export const danceCategories = {
  historical: ["the-hey","the-trenchmor","waves-of-tory"],
  standard: ["walls-of-limerick","siege-of-ennis","four-hand-reel","eight-hand-reel"],
  regional: ["waves-of-tory","three-tunes"],
  beginner: ["walls-of-limerick","an-rince-mor"],
  intermediate: ["siege-of-ennis","four-hand-reel","the-hey","the-trenchmor"],
  advanced: ["eight-hand-reel","high-cauled-cap","waves-of-tory","three-tunes"]
};

export default ceiliDances;
