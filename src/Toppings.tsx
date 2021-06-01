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

  const toppingsIndex = (input: string, direction: string) => {
    if (direction === 'left') {
      for (let [index, topping] of toppings.entries()) {
        if (topping.title === input && index - 1 > -1) return index - 1;
      }
    } else if (direction === 'right') {
      for (let [index, topping] of toppings.entries()) {
        if (topping.title === input && index + 1 < toppings.length)
          return index + 1;
      }
    }
    return null;
  };

  const shiftToppings = (direction: string) => {
    let index = toppingsIndex(title, direction);

    if (index === null) {
      return -1;
    }
    history.push(`/toppings/${toppings[index].id}`);
  };
  return (
    <>
      <Navbar title={title} />
      {toppingsIndex(title, 'left') !== null && (
        <div
          className={classes.LeftPanel}
          onClick={() => shiftToppings('left')}
        >
          <ArrowBackIosIcon />
          <h3>{toppings[toppingsIndex(title, 'left')].title}</h3>
        </div>
      )}
      <div className={classes.Toppings}>
        <div className={classes.ToppingsDescription}>
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
            ).map((item: AlbumStructure) => (
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
      {toppingsIndex(title, 'right') !== null && (
        <div
          className={classes.RightPanel}
          onClick={() => shiftToppings('right')}
        >
          <h3>{toppings[toppingsIndex(title, 'right')].title}</h3>
          <ArrowForwardIosIcon />
        </div>
      )}
      <footer className={classes.ToppingsFooter}>{title}</footer>
    </>
  );
};

export default withStyles(styles)(Toppings);
