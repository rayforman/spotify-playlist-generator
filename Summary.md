# Spotify AI Playlist Generator

The Spotify AI Playlist Generator is a web application designed for music enthusiasts who want a more intuitive and natural way to create personalized playlists on Spotify. Our app leverages the power of OpenAI's GPT-3.5 language model to analyze a user's text description of their desired playlist vibe, mood, or theme, and then translates that into a set of track audio features using Spotify's API.

For example, a user could input a prompt like "Mellow indie folk for a rainy Sunday morning" and our app would intelligently map keywords in that description to features like low danceability, medium-low valence, and acoustic instrumentalness to find the best matching tracks. It enables users to create highly specific, situational playlists using natural language instead of manual search and curation.

On the backend, our app communicates with Spotify's API to query tracks based on the derived audio feature combinations, generating a list of track recommendations that are then saved as a new playlist in the user's Spotify account. The user authenticates via Spotify OAuth to grant playlist editing permissions.

Our target audience includes casual listeners looking for an effortless way to soundtrack different moments and moods, as well as playlist curators seeking inspiration and a starting point for further personalization. By making playlist creation as easy as describing what you want to hear, we aim to increase engagement with Spotify's vast catalog and drive discovery of new tracks and artists.

## Key Features and Benefits

- Intuitive text-to-playlist creation using natural language powered by advanced AI 
- Intelligent mapping of descriptive keywords to granular audio features for highly targeted recommendations
- Ability to save AI-generated playlists directly to user's Spotify account for easy listening
- Potential for virality as users share unique and hyper-specific playlists created with the app
- Increased exposure for artists and tracks as they are surfaced in relevant user-generated playlists
- Showcase of Spotify API's potential for innovative music discovery experiences

## Technical Stack

Under the hood, the app is built with React on the frontend, Node.js/Express on the backend, and Python/Flask for the NLP service that interacts with the OpenAI API. Spotify's Web API powers the track search, audio feature extraction, and playlist creation.

We are committed to using Spotify's API and track data in full compliance with all Terms of Service and user privacy best practices. Track data is used in an ephemeral way only to generate playlist outputs and is not retained.