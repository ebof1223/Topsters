import { AlbumStructure } from './interface';
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
  setUserToppings: (args: AlbumStructure[]) => void;
  userToppings: AlbumStructure[];
  currentNode: {
    data: Node;
    next: Node;
    prev: Node;
  };
  userToppingsHistory: any;
  nodesFromTail: number;
  setNodesFromTail: (input: number) => void;
  setCurrentNode: (input: {}) => void;
}

const Search: React.FC<Props> = ({
  classes,
  setUserToppings,
  userToppings,
  currentNode,
  setCurrentNode,
  userToppingsHistory,
  nodesFromTail,
  setNodesFromTail,
}) => {
  const [userSearch, setUserSearch] = useState('');
  const [results, setResults] = useState<AlbumStructure[]>([]);

  const addToToppings = (itemIdx: number) => {
    console.log(results[itemIdx]);
    if (
      userToppings.some(
        (item: AlbumStructure) => item.name === results[itemIdx].name
      )
    ) {
      console.log('DUPLICATE ERROR');
      return;
    }
    if (userToppings.length > 8) {
      console.log('EXCEEDED MAX TOPPINGS VALUE');
      return;
    }

    let newToppings = [...userToppings, results[itemIdx]];
    userToppingsHistory.toppingsInsert(
      currentNode,
      newToppings,
      userToppingsHistory,
      nodesFromTail
    );
    setNodesFromTail(0);
    setUserToppings(newToppings);
    setCurrentNode(userToppingsHistory.getTailNode());
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
          var albumsArray = res.data.topalbums.album.filter(
            (item: AlbumStructure) => item.image[3]['#text']
          );
          return albumsArray;
        })

        .then(async (albumsArray) => {
          let albumsArrayCopy = [];
          for (let album of albumsArray) {
            let res = await axios.get(
              `${LASTFM_API_URL}?method=album.getinfo&api_key=${LASTFM_API_KEY}&artist=${album.artist.name}&album=${album.name}&format=json`
            );
            if (res.data.album && res.data.album.tracks.track.length > 1) {
              albumsArrayCopy.push(res.data.album);
            }
          }
          setResults(albumsArrayCopy);
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
        {results.map((item: AlbumStructure, index: number) => (
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
