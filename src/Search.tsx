import React from 'react';
import Album from './interface';
import { useState } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/styles';
import styles from './styles/SearchStyles';
import { LASTFM_API_KEY } from './sensitive';
import ResultAlbum from './ResultAlbum';
const LASTFM_API_URL = 'http://ws.audioscrobbler.com/2.0/';

interface Props {
  classes: {
    resultsContainer: string;
  };
  setUserToppings: (args: object) => void;
  userToppings: Album[];
}

const Search: React.FC<Props> = ({
  classes,
  setUserToppings,
  userToppings,
}) => {
  const [userSearch, setUserSearch] = useState('');
  const [results, setResults] = useState<Album[]>([]);

  const addToToppings = (itemIdx: number) => {
    if (
      userToppings.some((item: Album) => item.name === results[itemIdx].name)
    ) {
      console.log('DUPLICATE ERROR');
      return;
    }
    if (userToppings.length > 19) {
      console.log('EXCEEDED MAX TOPPINGS VALUE');
      return;
    }
    setUserToppings([...userToppings, results[itemIdx]]);
  };

  const getDiscography = async (artist: string) => {
    setResults([]);
    try {
      await axios
        .get(
          `${LASTFM_API_URL}?method=artist.gettopalbums&artist=${artist}&api_key=${LASTFM_API_KEY}&format=json`
        )
        .then((res) => {
          console.log('this is our log', res.data.topalbums.album);
          let albumsArray = res.data.topalbums.album.filter(
            (item: Album) => item.image[3]['#text']
          );
          setResults(albumsArray);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    getDiscography(userSearch);
    setUserSearch('');
  };

  return (
    <>
      <div style={{ margin: '0 auto' }}>
        <h1>LastFM API Call</h1>
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            autoComplete="off"
            className="search-bar"
            value={userSearch}
            type="text"
            onChange={(e) => setUserSearch(e.target.value)}
            placeholder="Enter artist"
          ></input>
          <button>Search</button>
        </form>
      </div>
      <div className={classes.resultsContainer}>
        {results.map((item: Album, index: number) => (
          <ResultAlbum
            key={`${item.name}-result`}
            onClick={() => addToToppings(index)}
            cover={item.image[3]['#text']}
          />
        ))}
      </div>
    </>
  );
};

export default withStyles(styles)(Search);
