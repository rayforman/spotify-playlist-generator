import React from 'react';

const Login = () => {
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5001/auth/login');
      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full"
      >
        Connect with Spotify
      </button>
    </div>
  );
};

export default Login;