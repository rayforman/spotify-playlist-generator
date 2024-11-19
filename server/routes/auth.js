const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const config = require('../config');
const router = express.Router();

console.log('SpotifyWebApi Config:', {
  clientId: !!config.spotifyClientId, // logs true/false for security
  clientSecret: !!config.spotifyClientSecret,
  redirectUri: config.redirectUri
});

const spotifyApi = new SpotifyWebApi({
  clientId: config.spotifyClientId,
  clientSecret: config.spotifyClientSecret,
  redirectUri: config.redirectUri
});

// Login endpoint
router.get('/login', (req, res) => {
  const scopes = [
    'user-read-private',
    'playlist-modify-public',
    'playlist-modify-private'
  ];
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes);
  res.json({ url: authorizeURL });
});

// Callback endpoint
router.get('/callback', async (req, res) => {
  const { code } = req.query;
  console.log('Callback received with code:', code);
  try {
    console.log('Attempting to get tokens...');
    const data = await spotifyApi.authorizationCodeGrant(code);
    console.log('Got tokens successfully');
    const { access_token, refresh_token } = data.body;
    
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);
    
    console.log('Redirecting to front end...');
    // Add forward slash before query parameter
    res.redirect('http://localhost:5173/?success=true');
  } catch (error) {
    console.error('Full Auth Error:', error);
    res.redirect('http://localhost:5173/?error=auth_failed');
  }
});

module.exports = router;