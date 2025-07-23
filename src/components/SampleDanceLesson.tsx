import React from 'react';
import { DanceLessonPlayer } from './DanceLessonPlayer';

// Sample data for testing the dance lesson player
const sampleDanceData = {
  danceName: "Walls of Limerick",
  irishName: "Ballaí Luimnigh",
  
  // YouTube video IDs for different angles
  videoStreams: {
    frontView: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
    sideView: "dQw4w9WgXcQ",  // Replace with actual YouTube video IDs
    overhead: "dQw4w9WgXcQ",  // Replace with actual YouTube video IDs
  },
  
  // Optional background music
  musicVideo: "dQw4w9WgXcQ", // Replace with Irish traditional music video ID
  
  steps: [
    {
      stepNumber: 1,
      irishTerm: "Céim tosach",
      phonetic: "KAYH-im TOH-suh",
      english: "Opening Step",
      description: "Stand in formation with partners facing. Take three steps forward, starting with the right foot.",
      videoSegment: {
        startTime: 0,
        endTime: 15
      },
      culturalNote: "This opening is traditional in most Irish ceili dances, representing the greeting between dancers."
    },
    {
      stepNumber: 2,
      irishTerm: "Casadh",
      phonetic: "KAH-soo",
      english: "Turn",
      description: "Turn clockwise with your partner, maintaining eye contact. This represents the social aspect of Irish dancing.",
      videoSegment: {
        startTime: 15,
        endTime: 30
      },
      culturalNote: "The turn symbolizes the circular nature of Irish community life and eternal bonds."
    },
    {
      stepNumber: 3,
      irishTerm: "Damhsa na gcos",
      phonetic: "DOW-sah nah goss",
      english: "Footwork",
      description: "Execute the traditional Irish step - hop, step, step, hop. Keep your back straight and arms at your sides.",
      videoSegment: {
        startTime: 30,
        endTime: 45
      },
      culturalNote: "This footwork pattern dates back to 18th century Irish country dancing."
    },
    {
      stepNumber: 4,
      irishTerm: "Filleadh",
      phonetic: "FILL-oo",
      english: "Return",
      description: "Return to your original position with three steps backward, maintaining the rhythm.",
      videoSegment: {
        startTime: 45,
        endTime: 60
      },
      culturalNote: "The return represents coming home, a central theme in Irish culture."
    }
  ],
  
  culturalContext: {
    historicalOrigin: "County Limerick, 18th century",
    significance: "One of the most popular Irish ceili dances, representing the strong walls and community spirit of Limerick city.",
    regionalImportance: "Particularly significant in Munster province, often performed at weddings and festivals."
  }
};

export const SampleDanceLesson: React.FC = () => {
  const handleStepComplete = (stepNumber: number) => {
    console.log(`Step ${stepNumber} completed!`);
  };

  const handleLessonComplete = () => {
    console.log('Entire lesson completed!');
    alert('Congratulations! You have learned the Walls of Limerick!');
  };

  return (
    <div>
      <h1>Sample Irish Ceili Dance Lesson</h1>
      <p>This demonstrates the updated dance lesson player with YouTube integration and 3D viewer.</p>
      
      <DanceLessonPlayer
        danceName={sampleDanceData.danceName}
        irishName={sampleDanceData.irishName}
        videoStreams={sampleDanceData.videoStreams}
        musicVideo={sampleDanceData.musicVideo}
        steps={sampleDanceData.steps}
        culturalContext={sampleDanceData.culturalContext}
        onStepComplete={handleStepComplete}
        onLessonComplete={handleLessonComplete}
      />
      
      <div style={{ padding: '20px', marginTop: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>How to Use:</h3>
        <ul>
          <li><strong>Video Views:</strong> Switch between Front, Side, Top, and 3D views</li>
          <li><strong>YouTube Integration:</strong> Replace the video IDs with actual Irish dance instruction videos</li>
          <li><strong>3D Viewer:</strong> Interactive 3D formations with different dance patterns (circle, line, square, longways)</li>
          <li><strong>Pronunciation:</strong> Click on Irish terms to hear pronunciation (uses Web Speech API as fallback)</li>
          <li><strong>Music Player:</strong> Toggle the music player in the bottom-right corner</li>
          <li><strong>Step Navigation:</strong> Click step numbers to jump between dance steps</li>
        </ul>
        
        <h3>Next Steps:</h3>
        <ul>
          <li>Replace sample YouTube video IDs with actual Irish dance content</li>
          <li>Add real Irish pronunciation audio files</li>
          <li>Customize the 3D formations for specific dances</li>
          <li>Add more cultural context and historical information</li>
        </ul>
      </div>
    </div>
  );
};