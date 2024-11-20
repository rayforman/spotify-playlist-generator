import React from 'react';

const PlaylistDisplay = ({ tracks }) => {
  if (!tracks || tracks.length === 0) {
    return <div>No tracks found</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Recommended Tracks</h2>
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