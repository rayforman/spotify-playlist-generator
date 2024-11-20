const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const config = require('../config');
const router = express.Router();

const spotifyApi = new SpotifyWebApi({
  clientId: config.spotifyClientId,
  clientSecret: config.spotifyClientSecret,
  redirectUri: config.redirectUri
});

// Add this middleware to check for token
router.use((req, res, next) => {
  if (!spotifyApi.getAccessToken()) {
    return res.status(401).json({ error: 'No Spotify token available. Please log in again.' });
  }
  next();
});

router.post('/recommendations', async (req, res) => {
    try {
      const { audioFeatures } = req.body;
      console.log('Received audio features:', audioFeatures); // Add this debug log
  
      // Need at least one seed to get recommendations
      const recommendations = await spotifyApi.getRecommendations({
        limit: 20,
        seed_genres: ['pop'], // Add a seed genre
        target_valence: audioFeatures.valence,
        target_energy: audioFeatures.energy,
        target_danceability: audioFeatures.danceability,
        min_popularity: 20
      });
  
      console.log('Got recommendations:', recommendations.body.tracks.length); // Add this debug log
      res.json(recommendations.body.tracks);
    } catch (error) {
      console.error('Detailed error:', error.body || error); // Enhanced error logging
      res.status(500).json({ error: 'Failed to get recommendations' });
    }
});

// Export both the router and the spotifyApi instance
module.exports = { router, spotifyApi };