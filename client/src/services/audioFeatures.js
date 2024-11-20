// Map each mood to a point in Spotify's audio feature space
const moodVectors = {
    Happy: {
      valence: 0.8,     // Very positive/happy
      energy: 0.7,      // High energy
      danceability: 0.7, // Very danceable
      tempo: 120,       // Upbeat tempo
      acousticness: 0.3, // Mix of acoustic/electronic
      instrumentalness: 0.2, // Prefer tracks with vocals
      loudness: -6,     // Fairly loud
      speechiness: 0.3,  // Normal vocals
      liveness: 0.3,    // Studio feel
      mode: 1           // Major key
    },
    Relaxed: {
      valence: 0.5,     // Neutral positiveness
      energy: 0.3,      // Low energy
      danceability: 0.4, // Less danceable
      tempo: 90,        // Slower tempo
      acousticness: 0.8, // More acoustic
      instrumentalness: 0.4, // Mix of vocal/instrumental
      loudness: -12,    // Quieter
      speechiness: 0.2,  // Soft vocals
      liveness: 0.2,    // Studio feel
      mode: 1           // Major key
    },
    Energetic: {
      valence: 0.7,     // Fairly positive
      energy: 0.9,      // Very high energy
      danceability: 0.8, // Very danceable
      tempo: 135,       // Fast tempo
      acousticness: 0.2, // More electronic
      instrumentalness: 0.1, // Strong vocal presence
      loudness: -4,     // Very loud
      speechiness: 0.4,  // Clear vocals
      liveness: 0.6,    // Live performance feel
      mode: 1           // Major key
    },
    Melancholic: {
      valence: 0.2,     // Negative/sad
      energy: 0.4,      // Low energy
      danceability: 0.3, // Less danceable
      tempo: 85,        // Slower tempo
      acousticness: 0.7, // More acoustic
      instrumentalness: 0.3, // Mix of vocal/instrumental
      loudness: -10,    // Quieter
      speechiness: 0.3,  // Normal vocals
      liveness: 0.2,    // Studio feel
      mode: 0           // Minor key
    }
  };
  
  // Function to get feature vector for a mood
  export const getMoodVector = (mood) => {
    return moodVectors[mood] || null;
  };
  
  // Export vectors for use in other parts of the application
  export default moodVectors;