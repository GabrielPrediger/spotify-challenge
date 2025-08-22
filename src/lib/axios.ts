import axios from 'axios';

let accessToken = '';

async function getAccessToken() {
  if (accessToken) {
    return accessToken;
  }

  try {
    const response = await axios.get('http://localhost:3001/api/token');
    accessToken = response.data.access_token;

    setTimeout(() => {
        accessToken = '';
    }, (response.data.expires_in - 60) * 1000);

    return accessToken;
  } catch (error) {
    console.error('Could not fetch access token:', error);
    return null;
  }
}

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

spotifyApi.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default spotifyApi;