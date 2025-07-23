#!/usr/bin/env node

/**
 * Dance Catalog Integration Script
 * Converts ceili-app SQL dance data to CeiliClasses TypeScript format
 * 
 * This script integrates the comprehensive dance catalog from ceili-app
 * into the CeiliClasses project structure
 */

const fs = require('fs');
const path = require('path');

// Source data from ceili-app all_dances.sql
const ceiliAppDances = [
  // Beginner Dances
  {
    id: 'walls-of-limerick',
    title: 'The Walls of Limerick',
    category: 'long',
    difficulty: 'beginner',
    time_signature: 'reel',
    formation: {
      type: 'two_couples_facing',
      description: 'Dancers line up in couples, lady on gentleman\'s right, each set of two couples facing each other'
    },
    movements: [
      {
        name: 'Advance and Retire',
        bars: 8,
        description: 'Gentleman takes partner\'s left hand in his right, both advance to meet the opposite couple (2 bars), retire to the place (2 bars). Repeat the movement.',
        instructions: 'Keep steady rhythm and maintain eye contact with opposite couple',
        tips: 'This is an essential movement in most long dances'
      },
      {
        name: 'Half Right and Left',
        bars: 8,
        description: 'Ladies exchange places by side-stepping across the left, passing each other face to face, and finishing with two short threes (4 bars); gentlemen now exchange places, but side-step to the right (4 bars).',
        instructions: 'Ladies cross first, then gentlemen - timing is crucial',
        tips: 'Pass face to face, maintain good posture throughout'
      },
      {
        name: 'Dance with Opposite',
        bars: 8,
        description: 'Each gentleman and opposite lady take right hands, both sidestep to gentleman\'s left, finishing with two short threes (4 bars); sidestep back, finishing with two short threes (4 bars).',
        instructions: 'Right hands firmly but not tightly, move as a unit',
        tips: 'This introduces partner interaction with someone other than your own partner'
      },
      {
        name: 'Dance Around',
        bars: 8,
        description: 'Gentleman takes own partner\'s hands, both dance a complete circle around opposite couple (8 bars), finishing up to face in the opposite direction.',
        instructions: 'Circle anticlockwise around the opposite couple',
        tips: 'Finish facing the next couple to continue the progressive dance'
      }
    ],
    music_tempo: 120,
    prerequisites: [],
    description: 'The simplest of all dances from the point of view of execution. At starting, the dancers line-up in couples, lady on gentleman\'s right, each set of two couples facing each other.',
    instructions: 'This is and essential feature in the majority of "long dances". Focus on mastering the sidestep technique and understanding the basic formations before progressing to more complex dances.',
    historical_notes: 'From the original Irish Dancing Commission manual "Ár Rincí Fóirne" - considered the foundation dance for all ceili dancing.',
    region: null,
    year_recorded: 1939
  },

  {
    id: 'an-rince-mor',
    title: 'An Rince Mór',
    category: 'round',
    difficulty: 'beginner',
    time_signature: 'reel',
    formation: {
      type: 'round_dance',
      description: 'The dancers form a large ring round the room, each gent having his partner at his right hand'
    },
    movements: [
      {
        name: 'Ring to Left and Right',
        bars: 8,
        description: 'All the dancers in ring hold hands, and dance sidestep to left, finishing with two short "threes", and return to right, finishing as before.'
      },
      {
        name: 'Swing with Ladies on Left',
        bars: 8,
        description: 'Gents take crossed hands of ladies on their left, and couples swing in place, clockwise.'
      },
      {
        name: 'Swing with Partners',
        bars: 8,
        description: 'Gents take hands of partners and dance as in previous movement.'
      },
      {
        name: 'Link Arms',
        bars: 8,
        description: 'Gents link right arm of lady on their left and turn clockwise (2 bars); link left arm in left arm of partner and turn anticlockwise (2 bars); repeat the right arm link and turn with lady on left, and chain back to partners.'
      },
      {
        name: 'Lead Round',
        bars: 8,
        description: 'Couples lead around anticlockwise, with Promenade Step for six bars of music, and during the last two bars form a large ring to recommence dance.'
      }
    ],
    music_tempo: 120,
    prerequisites: [],
    description: 'A Round Dance in Reel time for any number of couples. Popularly used as the Damhsa Deireannach in the North of the country.',
    instructions: 'Simple round dance suitable for beginners. Often used as the final dance of the evening.',
    historical_notes: 'Traditional closing dance, especially popular in Northern Ireland.',
    region: null,
    year_recorded: 1969
  },

  // Intermediate Dances
  {
    id: 'siege-of-ennis',
    title: 'Siege of Ennis',
    category: 'long',
    difficulty: 'intermediate',
    time_signature: 'jig',
    formation: {
      type: 'long_dance',
      description: 'Lines of four dancers, two couples in each line, facing another set of four'
    },
    movements: [
      {
        name: 'Advance and Retire',
        bars: 8,
        description: 'Each set of four dancers take hands and advance to opposite four (2 bars); retire (2 bars). Advance and retire again (4 bars)',
        instructions: 'All four join hands in line, move together as one unit'
      },
      {
        name: 'Sides',
        bars: 8,
        description: 'The couple on the left of each line of four sidestep to the right behind, ending with rise and grind, while couple on right of each line of four sidestep to left, in front (4 bars); all sidestep back to place, ending with Rise and Grind (4 bars).',
        instructions: 'Master the rising step - this is essential for jig time dances'
      },
      {
        name: 'Hands Across',
        bars: 8,
        description: 'The two ladies and two gentlemen facing each other in the centre give right hands across and dance round to the right (4 bars); release hands, reverse, give left hand across, and dance to the left back to place (4 bars).',
        instructions: 'Hands across at shoulder height, dance around maintaining the cross formation'
      },
      {
        name: 'Advance, Retire and Pass Through',
        bars: 8,
        description: 'Advance and retire as explained in first movement (4 bars). All advance again (2 bars); each set facing the music raise hands allowing opposite four to pass under, one dancer under each arch, outer gentlemen passing on the outside.',
        instructions: 'Timing is crucial - raise hands just as opposite set approaches'
      }
    ],
    music_tempo: 130,
    prerequisites: ['walls-of-limerick'],
    description: 'A Long Dance in Jig Time. Dancers line up in fours, two couples in each line; each set of two couples stands facing another set of two couples.',
    instructions: 'Focus on the rising step technique specific to jig time. The pass-through movement requires good timing and coordination.',
    historical_notes: 'A progressive long dance that allows for many couples to participate simultaneously.',
    region: null,
    year_recorded: 1939
  },

  {
    id: 'four-hand-reel',
    title: 'The Four-Hand Reel',
    category: 'figure',
    difficulty: 'intermediate',
    time_signature: 'reel',
    formation: {
      type: 'four_hand',
      description: 'A and B (leading couple) facing C and D (opposite couple), each gentleman lightly holding partner\'s left hand in his right'
    },
    movements: [
      {
        name: 'Lead Around',
        bars: 16,
        description: 'Dancers half-right turn and lead around a complete circle (8 bars); release hands, about turn inwards, gentleman takes partner\'s right hand in his left and both lead back to place (8 bars)',
        instructions: 'Keep equal distance between couples throughout'
      },
      {
        name: 'The Body - The Square',
        bars: 16,
        description: 'Gentlemen sidestep a square in anti-clockwise direction, while ladies sidestep a square in clockwise direction, all finishing with two short-threes after each side-step (16 bars).',
        instructions: 'Each gentleman passes each lady twice - the lady passes in front on each occasion'
      },
      {
        name: 'The Body - Four Sevens',
        bars: 8,
        description: 'The gentleman sidesteps to the right behind partner, the lady sidestepping to the left in front (2 bars); gentleman sidestep back to place in front of partner, lady sidestepping back to place behind (2 bars); the movement is repeated (4 bars).',
        instructions: 'Note that the two short threes are not performed at the end of each sidestep in this movement'
      },
      {
        name: 'The Body - Hands Across',
        bars: 8,
        description: 'All four dancers give right hands across in the centre, shoulder high, dance around clockwise (4 bars); release hands, reverse, give left hands across and dance back to place (4 bars).',
        instructions: 'Hands at shoulder height, A and C take hands, as do B and D'
      },
      {
        name: 'The Body - Down the Centre',
        bars: 8,
        description: 'Leading couple turn to face each other, take right hands and sidestep through the centre to the place occupied by opposite couple, while the latter sidestep separately up the outside to place occupied by leading couple (2 bars).',
        instructions: 'Complex movement requiring coordination between couples'
      },
      {
        name: 'The Body - Right and Left Chain',
        bars: 8,
        description: 'Gentleman gives right hand to opposite lady, both move forward in semi-circle, gentlemen clockwise, ladies anti-clockwise, continue to meet partner with left hand, opposite lady again with right hand and on to own partner with left hand to finish in position.',
        instructions: 'This completes The Body - the core of the Four-Hand Reel'
      }
    ],
    music_tempo: 120,
    prerequisites: ['walls-of-limerick'],
    description: 'A fundamental figure dance that introduces the concept of "The Body" - a series of movements that form the core of many ceili dances.',
    instructions: 'Master the basic sidestep and understand partner positioning before attempting this dance. The Body movements are essential building blocks for more advanced dances.',
    historical_notes: 'The Body of this dance forms the foundation for most other figure dances.',
    region: null,
    year_recorded: 1939
  },

  // Advanced Dances
  {
    id: 'eight-hand-reel',
    title: 'The Eight-Hand Reel',
    category: 'figure',
    difficulty: 'advanced',
    time_signature: 'reel',
    formation: {
      type: 'eight_hand',
      description: 'Eight dancers arranged in a square formation with couples 1 and 2 as tops, couples 3 and 4 as sides'
    },
    movements: [
      {
        name: 'Lead Around',
        bars: 16,
        description: 'As described in the 4-hand reel. In the lead round care should be taken that an equal distance be maintained between the couples.',
        instructions: 'Critical that all eight dancers maintain proper spacing'
      },
      {
        name: 'Extended Sides',
        bars: 16,
        description: 'Gentlemen sidestep to the right behind partners, ladies sidestep to the left, in front (2 bars); finish with two short threes (2 bars); all again sidestep on in the same direction as before, and end with two short threes (4 bars).',
        instructions: 'Each gentleman takes right hand of lady next to him on his right'
      },
      {
        name: 'Skip Across',
        bars: 32,
        description: 'A and C now exchange places to the sidestep (2 bars), ending with two short threes (2 bars); E and G follow suit (4 bars), facing each other, right arm to right, when crossing.',
        instructions: 'Complex crossing pattern - practice slowly first'
      },
      {
        name: 'Return Chain',
        bars: 16,
        description: 'Gentlemen are now in original position, holding partner\'s right hand in own right; gentlemen give left hand to lady on right, ladies give left hand to gentlemen on left; all chain around giving right and left hand alternately.',
        instructions: 'Chain until meeting own partner again at opposite side'
      },
      {
        name: 'Back to Back',
        bars: 8,
        description: 'Gentleman, holding partner\'s right hand, sidesteps towards the left of contrary lady, while partner dances towards the left of contrary gentleman (2 bars); the four dancers thus forming a circle, gentlemen being back to back.',
        instructions: 'Forms temporary circles with gentlemen back to back'
      }
    ],
    music_tempo: 115,
    prerequisites: ['walls-of-limerick', 'four-hand-reel'],
    description: 'An advanced figure dance requiring coordination between eight dancers. Builds upon the Four-Hand Reel with additional complexity.',
    instructions: 'Ensure all dancers are comfortable with the Four-Hand Reel before attempting. Requires good spatial awareness and timing coordination.',
    historical_notes: 'The most popular of the figure dances, requiring eight dancers in perfect coordination.',
    region: null,
    year_recorded: 1939
  },

  {
    id: 'high-cauled-cap',
    title: 'High-Cauled Cap',
    category: 'figure',
    difficulty: 'advanced',
    time_signature: 'reel',
    formation: {
      type: 'eight_hand',
      description: 'As in 8-Hand Reel - eight dancers in square formation'
    },
    movements: [
      {
        name: 'Lead Around',
        bars: 16,
        description: 'As in 4-Hand Reel.',
        instructions: 'Standard lead around for eight dancers'
      },
      {
        name: 'Sides',
        bars: 16,
        description: 'Leading and opposite tops sidestep to the right (behind), while leading and opposite sides sidestep to the left, all partners holding hands; all finish with two short threes (4 bars).',
        instructions: 'All couples exchange positions with couple on right'
      },
      {
        name: 'Double Quarter Chain',
        bars: 16,
        description: 'Gentleman takes partner\'s right hand in right and both turn once in place (2 bars); gentleman chains with left hand to lady on left (2 bars), both turn in place (2 bars); chains back to own partner with right hand (2 bars), turning her in place.',
        instructions: 'Complex chaining pattern with multiple turns'
      },
      {
        name: 'Ladies Interlace',
        bars: 16,
        description: 'Each lady dances in front of own partner towards gentleman on left (2 bars), passes behind and around in front of him (2 bars), dances back towards own partner (2 bars), and behind him to original position (2 bars).',
        instructions: 'Ladies create interlacing pattern while gentlemen remain in position'
      },
      {
        name: 'Gents Interlace',
        bars: 16,
        description: 'Each gentleman now dances in front of own partner towards lady on right (2 bars), passes behind and around in front of her (2 bars), dances back towards own partner (2 bars) and behind her to original position (2 bars).',
        instructions: 'Gentlemen repeat the interlacing pattern'
      },
      {
        name: 'Stamp and Clap',
        bars: 16,
        description: 'All stamp right foot twice to one bar, and clap hands three times to second bar (2 bars). Repeat (2 bars). Partners change places to sidestep (2 bars), ending with two short threes (2 bars). Mark time with foot and beat palms as before (4 bars).',
        instructions: 'The signature movement - stamp twice, clap three times!'
      }
    ],
    music_tempo: 115,
    prerequisites: ['walls-of-limerick', 'four-hand-reel', 'eight-hand-reel'],
    description: 'An advanced figure dance with intricate movements including the famous "Stamp and Clap" sequence.',
    instructions: 'Master the Eight-Hand Reel before attempting. The stamp and clap movement is unique to this dance.',
    historical_notes: 'One of the most spirited and energetic of all ceili dances.',
    region: null,
    year_recorded: 1939
  },

  // Historical Dances (1500s-1800s)
  {
    id: 'the-hey',
    title: 'The Hey (An Héidhe)',
    category: 'long',
    difficulty: 'intermediate',
    time_signature: 'jig',
    formation: {
      type: 'chain_formation',
      description: '6-12 dancers in alternating male/female chain, joined hands in straight line'
    },
    movements: [
      {
        name: 'Basic Chain Movement',
        bars: 8,
        description: 'All move forward in chain with simple walking step (2 bars), begin gentle serpentine movement as chain undulates side to side (4 bars), return to straight line formation (2 bars).',
        instructions: 'Use simple walking steps initially, progress to skip-change steps for advanced dancers'
      },
      {
        name: 'Female Weaving Pattern',
        bars: 16,
        description: 'Females begin weaving pattern, moving around their male partners (4 bars), continue circular movement passing behind males (4 bars), complete circle now facing opposite direction (4 bars), return to original positions through reverse weaving (4 bars).',
        instructions: 'Males maintain steady position during female weaving, providing stable anchor points'
      },
      {
        name: 'Under-Arm Passes',
        bars: 8,
        description: 'Designated couples raise joined hands to form arches (2 bars), other dancers pass under raised arms (2 bars), arch couples lower arms and join the passing movement (2 bars), reform chain in new positions (2 bars).',
        instructions: 'Emphasize smooth transitions with "Up-through-down-reform" timing cues'
      }
    ],
    music_tempo: 116,
    prerequisites: ['walls-of-limerick'],
    description: 'A 1500s historical court dance performed for Queen Elizabeth I. Features intricate chain and weaving patterns with minimal upper body movement reflecting historical constraints.',
    instructions: 'Focus on smooth, flowing movements rather than sharp transitions. Emphasize historical context and court dance origins. Use slower tempo for learning.',
    historical_notes: 'Court dance performed for Queen Elizabeth I in the 1500s. Represents ancient Irish dance traditions adapted for formal court entertainment.',
    region: null,
    year_recorded: 1500
  },

  {
    id: 'the-trenchmor',
    title: 'The Trenchmor (Treanchmór)',
    category: 'figure',
    difficulty: 'intermediate',
    time_signature: 'jig',
    formation: {
      type: 'multiple_couples',
      description: '4-8 couples in rectangular formation, males on left of partners, facing center'
    },
    movements: [
      {
        name: 'Peasant Folk Elements',
        bars: 16,
        description: 'All couples advance to center with walking steps (4 bars), retire to places with simple folk steps (4 bars), partners turn with two hands for full turn (4 bars), all couples promenade around formation (4 bars).',
        instructions: 'Use earthy, grounded movements emphasizing community participation over individual display'
      },
      {
        name: 'Court Adaptation Elements',
        bars: 16,
        description: 'Couples advance with refined posture and steps (4 bars), formal retreat with courtly bearing (4 bars), elegant partner turns with extended arms (4 bars), stately promenade with measured steps (4 bars).',
        instructions: 'Lift posture, extend arms gracefully, maintain dignity appropriate for formal setting'
      },
      {
        name: 'Integration of Folk and Court',
        bars: 32,
        description: 'Begin with folk elements - advance, retire, turn (8 bars), transition to court styling with formal movements (8 bars), combine both styles within single movement (8 bars), return to folk conclusion (8 bars).',
        instructions: 'Practice smooth transitions between styles, emphasize contrast while maintaining flow'
      }
    ],
    music_tempo: 112,
    prerequisites: ['walls-of-limerick'],
    description: 'Peasant dance adapted for English court entertainment. Demonstrates the evolution from folk to formal styling while retaining Irish elements.',
    instructions: 'Emphasize contrast between folk and court styling. Show how Irish elements persisted despite formal requirements.',
    historical_notes: 'Peasant dance adapted for English court entertainment. Demonstrates cultural significance of adaptation while maintaining Irish identity.',
    region: null,
    year_recorded: 1600
  },

  {
    id: 'waves-of-tory',
    title: 'Tonnaí Thoraí (Waves of Tory)',
    category: 'long',
    difficulty: 'advanced',
    time_signature: 'reel',
    formation: {
      type: 'long_dance',
      description: 'Partners face each other in two lines, ladies on one side, gentlemen opposite'
    },
    movements: [
      {
        name: 'Gentle Wave Pattern',
        bars: 16,
        description: 'Lines sway gently side to side representing calm seas (4 bars), gradually increase undulation building wave energy (4 bars), lines advance and retire like tide movement (4 bars), return to gentle swaying (4 bars).',
        instructions: 'Continuous flowing movement, no sharp stops or starts, body moves as connected to water'
      },
      {
        name: 'Storm Wave Sequence',
        bars: 32,
        description: 'Lines cross through each other in turbulent pattern (8 bars), couples separate and rejoin like waves breaking (8 bars), individual dancers weave through formation like whitecaps (8 bars), all reform lines, gradually calming (8 bars).',
        instructions: 'Couples rise and fall to show wave height, quick direction changes represent wind shifts'
      },
      {
        name: 'The Tory Island Crossing',
        bars: 16,
        description: 'Top couple "launches" by advancing between lines (4 bars), navigates through other couples representing rough crossing (4 bars), reaches "island" at bottom of formation (4 bars), all couples shift up one position (4 bars).',
        instructions: 'Each couple takes turn making the "crossing" from mainland to Tory Island while others provide "waves" and "currents"'
      }
    ],
    music_tempo: 110,
    prerequisites: ['walls-of-limerick', 'siege-of-ennis'],
    description: 'Maritime heritage dance from Donegal coast tradition with Celtic sea-worship elements. Dance movements represent waves and rough seas.',
    instructions: 'Emphasize connection to maritime heritage and Celtic spirituality. Encourage dancers to feel the ocean\'s rhythm and power.',
    historical_notes: 'From Tory Island off Donegal coast. Represents ancient Celtic sea-worship traditions and maritime challenges of island life.',
    region: 'County Donegal',
    year_recorded: 1700
  },

  // Regional Dances (County Armagh)
  {
    id: 'three-tunes',
    title: 'The Three Tunes',
    category: 'figure',
    difficulty: 'advanced',
    time_signature: 'jig',
    formation: {
      type: 'eight_hand',
      description: 'Eight dancers in ring holding hands'
    },
    movements: [
      {
        name: 'Sides (Jig Time)',
        bars: 16,
        description: 'All dance sidestep to left, finishing with two short "threes", and return to right, finishing as before (8 bars); repeat this sidestep movement to right, and back to places (8 bars). While doing the last two "threes", all couples fall back to places as taken up at commencement of Eight-Hand Reel.',
        instructions: 'Danced to "Haste to the Wedding" jig'
      },
      {
        name: 'Rings (Jig Time)',
        bars: 16,
        description: 'The four ladies advance to centre, take hands, and with Promenade Step, dance round clockwise to places (4 bars); all clap hands twice (1 bar); partners dance half sidestep past each other, gents passing behind (count One-Two-Three) (1 bar); sidestep back to places, ladies now passing behind (2 bars). Repeat this movement, the gents dancing round in centre this time instead of the ladies.',
        instructions: 'Still in jig time - ladies first, then gents'
      },
      {
        name: 'Lead Around (Hornpipe Time)',
        bars: 16,
        description: 'Partners hold inside hands and lead around anticlockwise, as at beginning of Eight or Sixteen-hand Reel (8 bars); release hands, reverse, and again taking inside hands, lead back to places.',
        instructions: 'Now switching to hornpipe time - "Leslie\'s Hornpipe"'
      },
      {
        name: 'Stamp and Clap (Hornpipe Time)',
        bars: 16,
        description: 'All dancers stamp first the right foot, then the left, and then the right again, to one bar of music, and clap hands together three times on second bar (2 bars); sidestep past each other, the gent passing behind, and back to places, the gent now passing in front (4 bars).',
        instructions: 'Complex stamping and clapping sequence'
      },
      {
        name: 'See-Saw (Reel Time)',
        bars: 16,
        description: 'Dancers take partners\' hands (uncrossed) and swing around in couples anticlockwise (8 bars). Return clock-wise, swinging in reverse direction (8 bars)',
        instructions: 'Now in reel time - "The German Beau"'
      },
      {
        name: 'Roly-Poly (Reel Time)',
        bars: 24,
        description: 'All dancers hold closed hands at chest level and roll them round each other in forward direction (1 bar), and then roll them in the opposite direction (1 bar); pivot once to right on right heel (1 bar); clap hands together once (1 bar); gents shake right fist forward in air once (in threatening manner).',
        instructions: 'The famous "threatening gesture" movement!'
      }
    ],
    music_tempo: 120,
    prerequisites: ['walls-of-limerick', 'four-hand-reel', 'eight-hand-reel'],
    description: 'This is an eight-hand Figure Dance from Co. Armagh done to three tunes – "Haste to the Wedding" (Jig), "Leslie\'s Hornpipe", and "The German Beau" (Reel). The Reel is taken at a rather slower pace than the Jig, and the Hornpipe slightly slower still.',
    instructions: 'Unique dance using three different time signatures. Practice transitioning between jig, hornpipe, and reel timing.',
    historical_notes: 'Collected in the south of Co. Armagh. The music was taken down from the late Henry Savage.',
    region: 'County Armagh',
    year_recorded: 1943
  }
];

// Helper functions for data conversion
function convertTimeSignature(timeSignature) {
  const mapping = {
    'reel': '2/4',
    'jig': '6/8',
    'hornpipe': '2/4'
  };
  return mapping[timeSignature] || '2/4';
}

function getTempoDescription(timeSignature, tempo) {
  const base = timeSignature === 'jig' ? 'Jig time' : 
               timeSignature === 'reel' ? 'Reel time' : 
               'Hornpipe time';
  
  if (tempo < 115) return `Moderate ${base.toLowerCase()}`;
  if (tempo < 125) return `Lively ${base.toLowerCase()}`;
  return `Fast ${base.toLowerCase()}`;
}

function estimateParticipants(formation) {
  if (formation.type === 'two_couples_facing') return 4;
  if (formation.type === 'four_hand') return 4;
  if (formation.type === 'eight_hand') return 8;
  if (formation.type === 'long_dance') return 8; // minimum for long dance
  if (formation.type === 'round_dance') return 6; // minimum for circle
  if (formation.type === 'chain_formation') return 6;
  return 4; // default
}

function estimateDuration(movements, tempo) {
  const totalBars = movements.reduce((sum, movement) => sum + (movement.bars || 8), 0);
  const beatsPerMinute = tempo;
  const beatsPerBar = 4; // assuming 4/4 or equivalent
  const totalBeats = totalBars * beatsPerBar;
  const minutes = totalBeats / beatsPerMinute;
  return Math.max(3, Math.round(minutes)); // minimum 3 minutes
}

function convertMovementsToSteps(movements, danceName) {
  return movements.map((movement, index) => ({
    id: `${danceName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-step-${index + 1}`,
    name: {
      english: movement.name,
      irish: movement.name // Would need translation service for proper Irish
    },
    description: movement.description,
    counts: movement.bars || 8,
    footwork: movement.instructions || 'Standard céilí footwork',
    handholds: extractHandholds(movement.description),
    tips: [
      movement.tips || movement.instructions || 'Focus on timing and coordination',
      'Maintain good posture throughout',
      'Listen carefully to the music'
    ].filter(Boolean),
    commonMistakes: [
      'Poor timing with the music',
      'Not maintaining proper formation',
      'Rushing through the movements'
    ]
  }));
}

function extractHandholds(description) {
  if (description.includes('right hand')) return 'Right hands joined';
  if (description.includes('left hand')) return 'Left hands joined';
  if (description.includes('both hands')) return 'Both hands joined';
  if (description.includes('hands across')) return 'Hands across formation';
  if (description.includes('no hand')) return 'No hands';
  return 'Various handholds as described';
}

function translateToIrish(englishName) {
  // Basic translations - would need proper translation service
  const translations = {
    'The Walls of Limerick': 'Ballaí Luimní',
    'Siege of Ennis': 'Léigear Inis',
    'The Four-Hand Reel': 'Rinnce Ceithre Lámh',
    'The Eight-Hand Reel': 'Rinnce Ocht Lámh',
    'High-Cauled Cap': 'Caipín Ard',
    'An Rince Mór': 'An Rince Mór',
    'The Hey': 'An Héidhe',
    'The Trenchmor': 'Treanchmór',
    'Waves of Tory': 'Tonnaí Thoraí',
    'The Three Tunes': 'Na Trí Fhoinn'
  };
  return translations[englishName] || englishName;
}

// Convert ceili-app data to CeiliClasses format
function convertDanceData(sourceData) {
  return sourceData.map(dance => ({
    id: dance.id,
    name: {
      english: dance.title,
      irish: translateToIrish(dance.title)
    },
    difficulty: dance.difficulty,
    duration: estimateDuration(dance.movements, dance.music_tempo),
    participants: estimateParticipants(dance.formation),
    formation: dance.formation.description,
    music: {
      title: dance.title,
      tempo: getTempoDescription(dance.time_signature, dance.music_tempo),
      timeSignature: convertTimeSignature(dance.time_signature)
    },
    steps: convertMovementsToSteps(dance.movements, dance.title),
    culturalContext: [
      dance.description,
      dance.historical_notes,
      dance.instructions
    ].filter(Boolean).join(' '),
    region: dance.region || 'Traditional Irish',
    videoUrl: undefined,
    audioUrl: undefined
  }));
}

// Main integration function
function integrateDanceCatalog() {
  console.log('🎭 Starting Dance Catalog Integration...');
  
  const convertedDances = convertDanceData(ceiliAppDances);
  
  console.log(`✅ Converted ${convertedDances.length} dances from ceili-app format`);
  
  // Generate TypeScript file content
  const tsContent = `// GENERATED FILE - DO NOT EDIT MANUALLY
// Integrated dance catalog from ceili-app
// Generated on ${new Date().toISOString()}

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

export const ceiliDances: CeiliDance[] = ${JSON.stringify(convertedDances, null, 2)};

// Dance categories for easy filtering
export const danceCategories = {
  historical: ${JSON.stringify(convertedDances.filter(d => d.id.includes('hey') || d.id.includes('trenchmor') || d.id.includes('waves')).map(d => d.id))},
  standard: ${JSON.stringify(convertedDances.filter(d => ['walls-of-limerick', 'siege-of-ennis', 'four-hand-reel', 'eight-hand-reel'].includes(d.id)).map(d => d.id))},
  regional: ${JSON.stringify(convertedDances.filter(d => d.region && d.region !== 'Traditional Irish').map(d => d.id))},
  beginner: ${JSON.stringify(convertedDances.filter(d => d.difficulty === 'beginner').map(d => d.id))},
  intermediate: ${JSON.stringify(convertedDances.filter(d => d.difficulty === 'intermediate').map(d => d.id))},
  advanced: ${JSON.stringify(convertedDances.filter(d => d.difficulty === 'advanced').map(d => d.id))}
};

export default ceiliDances;
`;

  return {
    content: tsContent,
    danceCount: convertedDances.length,
    categories: {
      historical: convertedDances.filter(d => d.id.includes('hey') || d.id.includes('trenchmor') || d.id.includes('waves')).length,
      standard: convertedDances.filter(d => ['walls-of-limerick', 'siege-of-ennis', 'four-hand-reel', 'eight-hand-reel'].includes(d.id)).length,
      regional: convertedDances.filter(d => d.region && d.region !== 'Traditional Irish').length
    }
  };
}

// Run the integration
if (require.main === module) {
  const result = integrateDanceCatalog();
  
  const outputPath = path.join(__dirname, '..', 'src', 'data', 'ceiliDances-integrated.ts');
  fs.writeFileSync(outputPath, result.content, 'utf8');
  
  console.log(`🎉 Integration complete!`);
  console.log(`📊 Total dances: ${result.danceCount}`);
  console.log(`📚 Historical dances: ${result.categories.historical}`);
  console.log(`🎯 Standard dances: ${result.categories.standard}`);
  console.log(`🏰 Regional dances: ${result.categories.regional}`);
  console.log(`📝 Output written to: ${outputPath}`);
}

module.exports = { integrateDanceCatalog, convertDanceData };