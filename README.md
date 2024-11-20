# Spotify Playlist Generator

## Overview
The Spotify Playlist Generator is a tool that allows users to create custom playlists based on various criteria such as mood, genre, and more. This project leverages the Spotify API to fetch song data and generate playlists tailored to user preferences.

## Features
- Generate playlists based on mood, genre, and other criteria
- Save and manage generated playlists
- User authentication with Spotify
- Responsive and user-friendly interface

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/spotify-playlist-generator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Spotify-Playlist-Generator
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```

## Usage
1. Create a Spotify Developer account and register your application to get your client ID and client secret.
2. Create a `.env` file in the root directory and add your Spotify credentials:
    ```
    SPOTIFY_CLIENT_ID=your_client_id
    SPOTIFY_CLIENT_SECRET=your_client_secret
    ```
3. Start the application:
    ```bash
    npm start
    ```
4. Open your browser and navigate to `http://localhost:5173` to use the Spotify Playlist Generator.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)

## Code Breakdown

1. /client/ folder handles all frontend code, written primarily in React/Vite
2. /server/ folder handles all backend code, written primarily in Node.js/Express
3. 