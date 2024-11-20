# Spotify Playlist Generator

## Overview
The Spotify Playlist Generator creates personalized playlists by analyzing text descriptions. Users can describe their desired playlist vibe, and the application generates a curated playlist of songs that match that description. This project uses the Spotify API to analyze song characteristics and create custom playlists.

## Current Features
- OAuth authentication with Spotify
- Text-based playlist generation using keyword analysis
- Song recommendations based on audio features (valence, energy, danceability, etc.)
- Save generated playlists directly to your Spotify account
- Simple and intuitive user interface

## Upcoming Features
- Natural Language Processing (NLP) for better text understanding
- Enhanced playlist customization options
- More sophisticated audio feature mapping

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/spotify-playlist-generator.git
    ```
2. Install dependencies for both client and server:
    ```bash
    cd spotify-playlist-generator/server
    npm install
    cd ../client
    npm install
    ```

## Configuration
1. Create a Spotify Developer account and register your application
2. Create `server/.env` file:
    ```
    SPOTIFY_CLIENT_ID=your_client_id
    SPOTIFY_CLIENT_SECRET=your_client_secret
    REDIRECT_URI=http://localhost:5001/auth/callback
    ```

## Running the Application
1. Start the server:
    ```bash
    cd server
    npm start
    ```
2. In a new terminal, start the client:
    ```bash
    cd client
    npm run dev
    ```
3. Visit `http://localhost:5173` in your browser

## Project Structure
```
.
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API and processing services
│   │   └── App.jsx        # Main application component
└── server/                # Backend Node.js server
    ├── routes/            # API routes
    ├── config.js          # Server configuration
    └── server.js          # Express server setup
```

## Technical Details
- Frontend: React + Vite
- Backend: Node.js + Express
- Authentication: Spotify OAuth
- APIs: Spotify Web API
- Current Text Processing: Keyword-based feature mapping
- Planned: Python NLP integration

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.