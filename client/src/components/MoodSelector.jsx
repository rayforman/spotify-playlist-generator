import React, { useState } from 'react';
import { getRecommendedTracks } from '../services/trackRecommendations';
import PlaylistDisplay from './PlaylistDisplay';

const MoodSelector = ({ onMoodSelect }) => {
  const moods = ['Happy', 'Relaxed', 'Energetic', 'Melancholic'];
  const [selectedMood, setSelectedMood] = useState('');
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleMoodSelect = async (mood) => {
    setSelectedMood(mood);
    setLoading(true);
    try {
      const recommendedTracks = await getRecommendedTracks(mood);
      setTracks(recommendedTracks);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
    onMoodSelect(mood);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => handleMoodSelect(mood)}
            className={`p-4 rounded-lg ${
              selectedMood === mood 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {mood}
          </button>
        ))}
      </div>
      {loading ? (
        <div className="p-4 text-center">Loading...</div>
      ) : (
        <PlaylistDisplay tracks={tracks} />
      )}
    </div>
  );
};

export default MoodSelector;