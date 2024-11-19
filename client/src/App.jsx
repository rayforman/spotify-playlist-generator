import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import MoodSelector from './components/MoodSelector';

// In App.jsx
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Add these console logs
    console.log('Current URL:', window.location.search);
    const params = new URLSearchParams(window.location.search);
    console.log('Success parameter:', params.get('success'));
    
    if (params.get('success') === 'true') {
      console.log('Setting logged in to true');
      setIsLoggedIn(true);
      window.history.replaceState({}, document.title, '/');
    }
  }, []);

  // Add this console log
  console.log('isLoggedIn state:', isLoggedIn);

  return (
    <div className="min-h-screen bg-gray-100">
      {!isLoggedIn ? (
        <Login />
      ) : (
        <MoodSelector onMoodSelect={(mood) => console.log('Selected mood:', mood)} />
      )}
    </div>
  );
}

export default App;