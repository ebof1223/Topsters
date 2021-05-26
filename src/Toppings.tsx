import { useState } from 'react';
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
    ToppingsAlbums: string;
    ToppingsFooter: string;
  };
}

const Toppings: React.FC<Props> = ({ title, albums, classes }) => {
  const [open, setOpen] = useState(false);

  return (
    <Paper elevation={3} className={classes.Toppings}>
      <Navbar open={open} setOpen={setOpen} />
      <div className={classes.ToppingsAlbums}>
        {albums.map((item: AlbumStructure) => (
          <Album key={item.name} cover={item.image[3]['#text']} />
        ))}
      </div>
      <footer className={classes.ToppingsFooter}>{title}</footer>
    </Paper>
  );
};

export default withStyles(styles)(Toppings);
