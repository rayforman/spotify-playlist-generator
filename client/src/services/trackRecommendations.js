import { getMoodVector } from './audioFeatures';

const SPOTIFY_BASE_URL = 'http://localhost:5001/spotify';

export const getRecommendedTracks = async (mood) => {
  try {
    const moodVector = getMoodVector(mood);
    
    const response = await fetch(`${SPOTIFY_BASE_URL}/recommendations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ audioFeatures: moodVector }),
    });

    if (!response.ok) {
      throw new Error('Failed to get recommendations');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting track recommendations:', error);
    throw error;
  }
};