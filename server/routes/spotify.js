const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const config = require('../config');
const router = express.Router();
const axios = require('axios');


const spotifyApi = new SpotifyWebApi({
  clientId: config.spotifyClientId,
  clientSecret: config.spotifyClientSecret,
  redirectUri: config.redirectUri
});

async function getNLPFeatures(text) {
  try {
    const response = await axios.post('http://localhost:5002/analyze', {
      text: text
    });
    return response.data;
  } catch (error) {
    console.error('Error getting NLP features:', error);
    throw error;
  }
}

// Global variable to store recommended tracks
let globalTracks = [];

// Middleware to check for token
router.use((req, res, next) => {
  if (!spotifyApi.getAccessToken()) {
    return res.status(401).json({ error: 'No Spotify token available. Please log in again.' });
  }
  next();
});

// Route to get recommendations, using NLP
router.post('/recommendations', async (req, res) => {
  try {
    const { text } = req.body;
    console.log('Received text:', text);

    // Get NLP analysis
    const nlpResponse = await getNLPFeatures(text);
    const audioFeatures = nlpResponse.features;
    const genres = nlpResponse.genres;
    
    console.log('NLP features:', audioFeatures);
    console.log('Selected genres:', genres);

    // Get recommendations from Spotify API
    const recommendations = await spotifyApi.getRecommendations({
      limit: 20,
      seed_genres: genres, // Updated: use genres from NLP
      target_valence: audioFeatures.valence,
      target_energy: audioFeatures.energy,
      target_danceability: audioFeatures.danceability,
      target_acousticness: audioFeatures.acousticness,
      target_instrumentalness: audioFeatures.instrumentalness,
      target_speechiness: audioFeatures.speechiness,
      target_liveness: audioFeatures.liveness,
      target_tempo: audioFeatures.tempo,
      min_popularity: 20
    });

    // Update globalTracks with new recommendations
    globalTracks = recommendations.body.tracks.map(track => track.uri);
    
    res.json(recommendations.body.tracks);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ error: 'Failed to get recommendations' });
  }
});

// Route to create a playlist
router.post('/create-playlist', async (req, res) => {
    try {
      const { name } = req.body;
  
      if (!name || !globalTracks.length) {
        return res.status(400).json({ error: 'Missing playlist name or no tracks available.' });
      }
  
      // Get the current user's profile
      const me = await spotifyApi.getMe();
      console.log('Authenticated user:', me.body);
  
      // Create a new playlist
      const playlist = await spotifyApi.createPlaylist(name, {
        description: 'Created with Spotify Playlist Generator: https://github.com/rayforman/spotify-playlist-generator',
        public: false
      });
      console.log('Playlist created:', playlist.body);
  
      // Add tracks to the playlist
      await spotifyApi.addTracksToPlaylist(playlist.body.id, globalTracks);
  
      res.json({ success: true, playlistId: playlist.body.id });
    } catch (error) {
      console.error('Error creating playlist:', error.body || error);
      res.status(500).json({ error: 'Failed to create playlist' });
    }
  });

module.exports = { router, spotifyApi };