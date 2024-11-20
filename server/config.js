require('dotenv').config();

module.exports = {
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
  spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
  redirectUri: process.env.REDIRECT_URI || 'http://localhost:5001/auth/callback'
};