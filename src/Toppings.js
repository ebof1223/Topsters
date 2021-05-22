import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import useAuth from './spotify/useAuth';
import Album from './Album';
import Navbar from './Navbar';
import styles from './styles/ToppingsStyles';
import SpotifyWebApi from 'spotify-web-api-node';
import Player from './Player';

const spotifyApi = new SpotifyWebApi({
  clientId: '0423b49839824b2d8056e7a5a8666622',
});

function Toppings({ albums, classes, authCode }) {
  const [musicProvider, setMusicProvider] = useState('spotify');
  const [open, setOpen] = useState(false);
  const [playingAlbum, setPlayingAlbum] = useState();
  const accessToken = useAuth(authCode);
  console.log(accessToken);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  const filterMatches = (array, target) => {
    var stringSimilarity = require('string-similarity');

    let similarityIndices = array.map((item) =>
      stringSimilarity.compareTwoStrings(item.name, target)
    );
    let closestMatch = Math.max(...similarityIndices);
    return array[similarityIndices.indexOf(closestMatch)];
  };

  const handleClick = (index) => {
    if (!accessToken) return;
    var matchArray = [];
    spotifyApi
      .searchArtists(albums[index].artist.name)
      .then((res) => {
        return res.body.artists.items[0].uri;
      })
      .then((uri) => {
        let match = /artist:(.*)/;
        let artistId = match.exec(uri)[1];
        return spotifyApi.getArtistAlbums(artistId, { limit: 50 });
      })
      .then((res) => {
        console.log('You clicked on', albums[index].name);
        let results = res.body.items;
        for (let result of results) {
          if (
            result.name.toUpperCase().includes(albums[index].name.toUpperCase())
          )
            matchArray = [...matchArray, result];
        }

        //if match array is still empty
        if (!matchArray.length) {
          spotifyApi
            .searchArtists(albums[index].artist.name)
            .then((res) => {
              return res.body.artists.items[0].uri;
            })
            .then((uri) => {
              let match = /artist:(.*)/;
              let artistId = match.exec(uri)[1];
              return spotifyApi.getArtistAlbums(artistId, {
                limit: 50,
                offset: 50,
              });
            })
            .then((res) => {
              let results = res.body.items;
              for (let result of results) {
                if (
                  result.name
                    .toUpperCase()
                    .includes(albums[index].name.toUpperCase())
                )
                  matchArray = [...matchArray, result];
              }
              console.log('pagination results', matchArray);
              console.log(
                'pagination filter',
                filterMatches(matchArray, albums[index].name).uri
              );
              setPlayingAlbum(
                filterMatches(matchArray, albums[index].name).uri
              );
            });
        } else if (matchArray.length > 1) {
          console.log('multiple match results', matchArray);
          console.log(
            'multiple match filter',
            filterMatches(matchArray, albums[index].name).uri
          );
          setPlayingAlbum(filterMatches(matchArray, albums[index].name).uri);
        } else {
          console.log('match array === 1', matchArray[0].uri);
          setPlayingAlbum(matchArray[0].uri);
        }
      });
  };

  const handleMusicProviderChange = (e) => {
    setMusicProvider(e.target.value);
    setOpen(!open);
  };

  const albumComponents = albums.map((item, index) => (
    <Album
      artist={item.artist.name}
      key={item.name}
      url={item.url}
      cover={item.image[3]['#text']}
      musicProvider={musicProvider}
      onClick={() => handleClick(index)}
    />
  ));

  return (
    <div elevation={3} className={classes.Toppings}>
      <Navbar
        open={open}
        setOpen={setOpen}
        handleMusicProviderChange={handleMusicProviderChange}
        musicProvider={musicProvider}
        authCode={authCode}
      />
      <div className={classes.ToppingsAlbums}>{albumComponents}</div>
      <footer className={classes.ToppingsFooter}>
        <Player accessToken={accessToken} albumUri={playingAlbum} />
      </footer>
    </div>
  );
}

export default withStyles(styles)(Toppings);
