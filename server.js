import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());

const PORT = 3001;

app.get('/api/token', async (req, res) => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(
            process.env.SPOTIFY_CLIENT_ID +
              ':' +
              process.env.SPOTIFY_CLIENT_SECRET,
          ).toString('base64'),
      },
      body: 'grant_type=client_credentials',
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch token' });
  }
});

app.listen(PORT, () => {
  console.log(`Token server running on http://localhost:${PORT}`);
});
