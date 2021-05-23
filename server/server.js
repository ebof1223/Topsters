const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken; 
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '0423b49839824b2d8056e7a5a8666622',
    clientSecret: '6eeb336d2e414f65bc0eba7367f4f58f',
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expires: data.body.expiresIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.post('/login', (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '0423b49839824b2d8056e7a5a8666622',
    clientSecret: '6eeb336d2e414f65bc0eba7367f4f58f',
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
      console.log(data);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.listen(3001);
