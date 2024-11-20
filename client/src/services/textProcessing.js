// Temporary mapping until we implement NLP
export const processInputToFeatures = (text) => {
    // Default values - middle of the range
    const baseFeatures = {
      valence: 0.5,     // Emotional tone
      energy: 0.5,      // Energy level
      danceability: 0.5, // Danceability
      tempo: 120,       // Average tempo
      acousticness: 0.5, // Acoustic vs electronic
      instrumentalness: 0.3, // Vocal vs instrumental
      loudness: -10,    // Average loudness
      speechiness: 0.3,  // Speech-like vs music
      liveness: 0.3,    // Studio vs live
      mode: 1,          // Major vs minor
      key: 0            // Musical key
    };
  
    // Very basic keyword matching
    const keywords = {
      // Happy/Sad
      'happy': { valence: 0.8, energy: 0.7 },
      'sad': { valence: 0.2, energy: 0.3 },
      // Energy levels
      'energetic': { energy: 0.8, tempo: 140 },
      'calm': { energy: 0.3, tempo: 90 },
      // Style preferences
      'dance': { danceability: 0.8, energy: 0.7 },
      'acoustic': { acousticness: 0.8, instrumentalness: 0.2 },
      'instrumental': { instrumentalness: 0.8 },
      // Volume preferences
      'loud': { loudness: -5, energy: 0.7 },
      'quiet': { loudness: -15, energy: 0.3 },
      // More keywords can be added...
    };
  
    // Convert input to lowercase for matching
    const lowercaseText = text.toLowerCase();
  
    // Adjust features based on keywords found in input
    Object.entries(keywords).forEach(([keyword, features]) => {
      if (lowercaseText.includes(keyword)) {
        Object.entries(features).forEach(([feature, value]) => {
          baseFeatures[feature] = value;
        });
      }
    });
  
    return baseFeatures;
  };