import { useState, useEffect } from 'react';
import React from 'react';
import Login from './components/Login';
import PlaylistGenerator from './components/PlaylistGenerator';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      setIsLoggedIn(true);
      window.history.replaceState({}, document.title, '/');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {!isLoggedIn ? (
        <Login />
      ) : (
        <PlaylistGenerator />
      )}
    </div>
  );
}

export default App;