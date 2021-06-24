import styles from './styles/SearchStyles';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import { LASTFM_API_KEY } from './sensitive';
import { AlbumStructure } from './interface';
import { useEffect, useRef, useState } from 'react';
const LASTFM_API_URL = 'http://ws.audioscrobbler.com/2.0/';
interface Props {
  classes: {
    root: string;
    SearchBar: string;
    ProgressBar: string;
    Overlay: string;
    '@keyframes fill': string;
    Hide: string;
    fill: any;
  };
  userSearch: string;
  setUserSearch: (input: string) => void;
  setIsLoading: (input: boolean) => void;
  setResults: (input: AlbumStructure[]) => void;
  setOpenDrawer: (input: boolean) => void;
  setNoResults: (i: boolean) => void;
  history: {
    push: (input: string) => void;
    location: any;
  };
  setOpenConfirm: (i: boolean) => void;
  openConfirm: boolean;
}
const Search: React.FC<Props> = ({
  classes,
  setUserSearch,
  userSearch,
  setResults,
  setIsLoading,
  setOpenDrawer,
  setNoResults,
  history,
  openConfirm,
}) => {
  const focusSearch: React.MutableRefObject<any> = useRef();
  const overlay: React.MutableRefObject<any> = useRef();
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    var timer: any;
    if (
      !history.location.pathname.includes('edit') &&
      !history.location.pathname.includes('new')
    )
      return;

    const keydownEventListener = () => {
      if (openConfirm) return;
      if (!/^[0-9a-zA-Z]*$/) return;
      document.getElementById('fill').classList.remove(classes.fill);
      setTimeout(
        () => document.getElementById('fill').classList.add(classes.fill),
        0
      );
      clearTimeout(timer);
      setIsTyping(true);
      focusSearch.current.focus();
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsTyping(false);
        setUserSearch('');
      }, 3000);
    };

    document.addEventListener('keydown', keydownEventListener);

    return () => {
      document.removeEventListener('keydown', keydownEventListener);
    };
  }, [classes.fill, history.location.pathname, openConfirm, setUserSearch]);

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    setIsTyping(false);
    getDiscography(userSearch);
    setUserSearch('');
  };

  const getDiscography = async (artist: string) => {
    setResults([]);
    setIsLoading(true);
    setNoResults(false);
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
          setOpenDrawer(true);
        });
    } catch (error) {
      setNoResults(true);
    }
    setIsLoading(false);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div
          className={isTyping ? classes.Overlay : classes.Hide}
          ref={overlay}
        >
          <input
            ref={focusSearch}
            id="focusSearch"
            autoFocus
            autoComplete="off"
            className={classes.SearchBar}
            value={userSearch}
            type="text"
            onChange={(e) => setUserSearch(e.target.value)}
          />
          <div className={classes.ProgressBar}>
            <div className={classes.fill} id="fill" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default withStyles(styles)(Search);
