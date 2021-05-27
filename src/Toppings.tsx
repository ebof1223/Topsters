import { withStyles } from '@material-ui/styles';
import { AlbumStructure } from './interface';
import Album from './Album';
import Navbar from './Navbar';
import styles from './styles/ToppingsStyles';
import { Paper } from '@material-ui/core';

interface Props {
  title: string;
  albums: AlbumStructure[];
  classes: {
    Toppings: string;
    ToppingsContainer: string;
    ToppingsAlbums: string;
    ToppingsFooter: string;
  };
}

const Toppings: React.FC<Props> = ({ title, albums, classes }) => {
  console.log(albums[0]);
  return (
    <div className={classes.Toppings}>
      {/* <Navbar /> */}
      <div className="ToppingsDescription">
        <h1>{albums[0].name}</h1>
        <h2>{albums[0].artist.name}</h2>
      </div>
      <Paper square className={classes.ToppingsContainer}>
        <div className={classes.ToppingsAlbums}>
          {albums.map((item: AlbumStructure) => (
            <Album key={item.name} cover={item.image[3]['#text']} />
          ))}
        </div>
      </Paper>
      {/* <footer className={classes.ToppingsFooter}>{title}</footer> */}
    </div>
  );
};

export default withStyles(styles)(Toppings);
