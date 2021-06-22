import styles from './styles/SearchStyles';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import { LASTFM_API_KEY } from './sensitive';
import { AlbumStructure } from './interface';
const LASTFM_API_URL = 'http://ws.audioscrobbler.com/2.0/';
interface Props {
  classes: {
    root: string;
    SearchBar: string;
  };
  userSearch: string;
  setUserSearch: (input: string) => void;
  setIsLoading: (input: boolean) => void;
  setResults: (input: AlbumStructure[]) => void;
  setOpen: (input: boolean) => void;
}
const Search: React.FC<Props> = ({
  classes,
  setUserSearch,
  userSearch,
  setResults,
  setIsLoading,
  setOpen,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    getDiscography(userSearch);
    setUserSearch('');
  };
  document.addEventListener('keydown', (event) => {
    if (/^[a-z0-9]$/i.test(event.key)) {
      document.getElementById('search').focus();
    }
  });
  const getDiscography = async (artist: string) => {
    setIsLoading(true);
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
    setOpen(true);
    setIsLoading(false);
  };
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          autoComplete="off"
          className={classes.SearchBar}
          value={userSearch}
          type="text"
          onChange={(e) => setUserSearch(e.target.value)}
          id="search"
        ></input>
      </form>
    </div>
  );
};
export default withStyles(styles)(Search);
