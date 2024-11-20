const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const { router: spotifyRoutes } = require('./routes/spotify');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/spotify', spotifyRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));