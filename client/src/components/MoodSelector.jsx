import React, { useState } from 'react';

const MoodSelector = ({ onMoodSelect }) => {
  const moods = ['Happy', 'Relaxed', 'Energetic', 'Melancholic'];
  const [selectedMood, setSelectedMood] = useState('');

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    onMoodSelect(mood);
  };

  return (
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
  );
};

export default MoodSelector;