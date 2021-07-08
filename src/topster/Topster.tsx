import { withStyles } from '@material-ui/styles';
import { AlbumTemplate, TopsterTemplate } from '../interface';
import { Paper } from '@material-ui/core';
import { useState } from 'react';
import Album from './Album';
import Navbar from './Navbar';
import styles from './topster-styles/TopsterStyles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
    Footer: string;
  };
  topsters?: TopsterTemplate[];
  recommended?: TopsterTemplate[];
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
  topsters,
  history,
  recommended,
  bookmarks,
  setBookmarks,
}) => {
  const listToBeRendered = recommended || topsters;
  // console.log(listToBeRendered);

  const [selectedAlbum, setSelectedAlbum] = useState<AlbumTemplate>(albums[0]);

  const selectAlbum = (index: number) => {
    console.log(albums[index]);
    setSelectedAlbum(albums[index]);
  };

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
    history.push(
      `/${recommended ? 'recommended' : 'topsters'}/${
        listToBeRendered[index].id
      }`
    );
  };
  return (
    <>
      <Navbar
        title={title}
        history={history}
        id={id}
        type={recommended ? 'recommended' : 'topsters'}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        recommended={recommended}
      />
      {topsterIndex(title, 'left') !== null && (
        <div
          className={classes.LeftPanel}
          onClick={() => shiftTopsters('left')}
        >
          <ArrowBackIosIcon />
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
          <ArrowForwardIosIcon />
        </div>
      )}
    </>
  );
};

export default withStyles(styles)(Topster);
