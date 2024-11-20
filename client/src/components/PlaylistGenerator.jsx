import React, { useState } from 'react';
import { getRecommendedTracks } from '../services/trackRecommendations';
import { processInputToFeatures } from '../services/textProcessing';
import PlaylistDisplay from './PlaylistDisplay';

const PlaylistGenerator = ({ onMoodSelect }) => {
  const [inputText, setInputText] = useState('');
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const audioFeatures = processInputToFeatures(inputText);
      console.log('Processed features:', audioFeatures);
      const recommendedTracks = await getRecommendedTracks(audioFeatures);
      setTracks(recommendedTracks);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleTextSubmit} className="mb-8">
        <input
          type="text"
          maxLength={100}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Describe your playlist vibe..."
          className="w-full p-3 border rounded"
        />
        <div className="text-right text-gray-500">
          {inputText.length}/100 characters
        </div>
        <button 
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generate Playlist
        </button>
      </form>

      {loading ? (
        <div className="p-4 text-center">Loading...</div>
      ) : (
        <PlaylistDisplay 
          tracks={tracks} 
          playlistName={inputText} />
      )}
    </div>
  );
};

export default PlaylistGenerator;