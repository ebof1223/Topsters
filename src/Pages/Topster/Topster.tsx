import { withStyles } from '@material-ui/styles';
import { AlbumTemplate, TopsterTemplate } from '../interface';
import { Paper } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Album from './Album';
import Navbar from './Navbar';
import styles from './topster-styles/TopsterStyles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { UserContext } from '../Home/UserContext';
interface Props {
  title: string;
  id: string;
  albums: any;
  classes: {
    Topster: string;
    LeftPanel: string;
    RightPanel: string;
    TopsterContainer: string;
    Description: string;
    Albums: string;
    record: string;
  };
  recommended?: any;
  history: {
    goBack: () => void;
    push: (input: string) => void;
  };
  bookmarks?: TopsterTemplate[];
  setBookmarks?: (i: TopsterTemplate[]) => void;
}

const Topster: React.FC<Props> = ({
  title,
  id,
  albums,
  classes,
  history,
  recommended,
  bookmarks,
  setBookmarks,
}) => {
  const topsters = useContext(UserContext);
  const [listToBeRendered, setListToRendered] = useState(topsters);
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumTemplate>(albums[0]);
  const selectAlbum = (index: number) => {
    setSelectedAlbum(albums[index]);
  };
  useEffect(() => {
    if (window.location.href.includes('recommended')) {
      setListToRendered(recommended);
    }
    if (window.location.href.includes('bookmarks'))
      setListToRendered(bookmarks);
    return () => {
      setListToRendered(topsters);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const topsterIndex = (input: string, direction: string) => {
    if (direction === 'left') {
      for (let [index, topster] of listToBeRendered.entries()) {
        if (topster.title === input && index - 1 > -1) return index - 1;
      }
    } else if (direction === 'right') {
      for (let [index, topster] of listToBeRendered.entries()) {
        if (topster.title === input && index + 1 < listToBeRendered.length)
          return index + 1;
      }
    }
    return null;
  };

  const shiftTopsters = (direction: string) => {
    let index = topsterIndex(title, direction);

    if (index === null) {
      return -1;
    }

    if (window.location.href.includes('recommended'))
      history.push(`/recommended/${listToBeRendered[index].id}`);
    if (window.location.href.includes('topsters'))
      history.push(`/topsters/${listToBeRendered[index].id}`);
    if (window.location.href.includes('bookmarks'))
      history.push(`/bookmarks/${listToBeRendered[index].id}`);
  };
  return (
    <>
      <Navbar
        title={title}
        history={history}
        id={id}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        recommended={recommended}
      />
      {topsterIndex(title, 'left') !== null && (
        <div
          className={classes.LeftPanel}
          onClick={() => shiftTopsters('left')}
        >
          <Tooltip title="Previous">
            <ArrowBackIosIcon />
          </Tooltip>
        </div>
      )}
      <div className={classes.Topster}>
        <div className={classes.Description}>
          <h1>{selectedAlbum.name}</h1>
          <h2>{selectedAlbum.artist}</h2>
          <ol>
            {Object.values(
              selectedAlbum.tracks.track.reduce(
                (
                  unique: { [x: string]: any },
                  o: { name: string | number }
                ) => {
                  if (!unique[o.name]) unique[o.name] = o;
                  return unique;
                },
                {}
              )
            ).map((item: AlbumTemplate) => (
              <li key={item.name}>{item.name.toUpperCase()}</li>
            ))}
          </ol>
        </div>
        <Paper elevation={5} square className={classes.TopsterContainer}>
          <div className={classes.Albums}>
            {albums.map((item: AlbumTemplate, index: number) => (
              <Album
                key={item.name}
                cover={item.image[3]['#text']}
                onClick={() => selectAlbum(index)}
                selected={albums[index] === selectedAlbum ? true : false}
              />
            ))}
          </div>
        </Paper>
        <img
          className={classes.record}
          src="https://upload.wikimedia.org/wikipedia/commons/7/75/Vinyl_record.svg"
          alt="vinyl-record"
        />
      </div>
      {topsterIndex(title, 'right') !== null && (
        <div
          className={classes.RightPanel}
          onClick={() => shiftTopsters('right')}
        >
          <Tooltip title="Next">
            <ArrowForwardIosIcon />
          </Tooltip>
        </div>
      )}
    </>
  );
};

export default withStyles(styles)(Topster);
