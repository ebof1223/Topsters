import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Album from './Album';
import Navbar from './Navbar';
import styles from './styles/ToppingsStyles';

function Toppings({ title, albums, classes }) {
  const [open, setOpen] = useState(false);

  const albumComponents = albums.map((item) => (
    <Album
      artist={item.artist.name}
      key={item.name}
      url={item.url}
      cover={item.image[3]['#text']}
    />
  ));

  return (
    <div elevation={3} className={classes.Toppings}>
      <Navbar open={open} setOpen={setOpen} />
      <div className={classes.ToppingsAlbums}>{albumComponents}</div>
      <footer className={classes.ToppingsFooter}>{title}</footer>
    </div>
  );
}

export default withStyles(styles)(Toppings);
