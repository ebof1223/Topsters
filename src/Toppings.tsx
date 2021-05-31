import { withStyles } from '@material-ui/styles';
import { AlbumStructure, ToppingsStructure } from './interface';
import Album from './Album';
import Navbar from './Navbar';
import styles from './styles/ToppingsStyles';
import { Paper } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState } from 'react';
interface Props {
  title: string;
  albums: AlbumStructure[];
  classes: {
    Toppings: string;
    LeftPanel: string;
    RightPanel: string;
    ToppingsContainer: string;
    ToppingsDescription: string;
    ToppingsAlbums: string;
    ToppingsFooter: string;
  };
  toppings: ToppingsStructure[];
  history: {
    push: (input: string) => void;
  };
}

const Toppings: React.FC<Props> = ({
  title,
  albums,
  classes,
  toppings,
  history,
}) => {
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumStructure>(albums[0]);

  const selectAlbum = (index: number) => {
    console.log(albums[index]);
    setSelectedAlbum(albums[index]);
  };

  const prevToppingsIndex = (input: string) => {
    for (let [index, topping] of toppings.entries()) {
      if (topping.title === input && index - 1 > -1) return index - 1;
    }
    return null;
  };

  const previousToppings = () => {
    let index = prevToppingsIndex(title);
    if (index === null) {
      return -1;
    }
    history.push(`/toppings/${toppings[index].title}`);
  };
  return (
    <>
      <Navbar />
      {prevToppingsIndex(title) !== null ? (
        <div className={classes.LeftPanel} onClick={previousToppings}>
          <ArrowBackIosIcon />
          <h3>{toppings[prevToppingsIndex(title)].title}</h3>
        </div>
      ) : (
        ''
      )}
      <div className={classes.Toppings}>
        <div className={classes.ToppingsDescription}>
          <h1>{selectedAlbum.name}</h1>
          <h2>{selectedAlbum.artist}</h2>
          <ol>
            {selectedAlbum.tracks.track.map((item: AlbumStructure) => (
              <li key={item.name}>{item.name.toUpperCase()}</li>
            ))}
          </ol>
        </div>
        <Paper elevation={5} square className={classes.ToppingsContainer}>
          <div className={classes.ToppingsAlbums}>
            {albums.map((item: AlbumStructure, index: number) => (
              <Album
                key={item.name}
                cover={item.image[3]['#text']}
                onClick={() => selectAlbum(index)}
              />
            ))}
          </div>
        </Paper>
      </div>
      <div className={classes.RightPanel}>
        <h3>Alfie's Tunes</h3>
        <ArrowForwardIosIcon />
      </div>
      <footer className={classes.ToppingsFooter}>{title}</footer>
    </>
  );
};

export default withStyles(styles)(Toppings);
