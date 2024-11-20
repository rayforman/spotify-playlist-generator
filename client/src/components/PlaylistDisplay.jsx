import React, { useState } from 'react';

const PlaylistDisplay = ({ tracks, playlistName }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSavePlaylist = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('http://localhost:5001/spotify/create-playlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: playlistName || 'My Generated Playlist', // Use input text or fallback
          tracks: tracks.map(track => track.uri),
        }),
      });
      
      if (response.ok) {
        setSaveMessage('Playlist saved successfully!');
      } else {
        setSaveMessage('Failed to save playlist');
      }
    } catch (error) {
      console.error('Error saving playlist:', error);
      setSaveMessage('Error saving playlist');
    }
    setIsSaving(false);
  };

  if (!tracks || tracks.length === 0 || !playlistName) {
    return <div>No tracks found</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recommended Tracks</h2>
        <button
          onClick={handleSavePlaylist}
          disabled={isSaving}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
        >
          {isSaving ? 'Saving...' : 'Save to Spotify'}
        </button>
      </div>
      {saveMessage && (
        <div className="mb-4 text-center font-medium">
          {saveMessage}
        </div>
      )}
      <div style={{ whiteSpace: 'pre' }}>
        {tracks.map((track, index) => (
          <div key={track.id}>
            <div className="font-medium">{track.name}</div>
            <div className="text-gray-600">{track.artists[0].name}</div>
            {index < tracks.length - 1 && '\n'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistDisplay;