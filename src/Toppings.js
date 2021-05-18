import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Album from './Album';
import Navbar from './Navbar';

const styles = {
  Toppings: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  ToppingsAlbums: {
    height: '90%',
  },

  ToppingsFooter: {
    backgroundColor: 'white',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '1rem',
    fontWeight: 'bold',
  },
};

function Toppings(props) {
  const [musicProvider, setMusicProvider] = useState('spotify');
  const [open, setOpen] = useState(false);
  const { title, albums, classes } = props;

  const handleMusicProviderChange = (e) => {
    setMusicProvider(e.target.value);
    setOpen(!open);
  };

  const albumComponents = albums.map((item) => (
    <Album
      artist={item.artist.name}
      key={item.name}
      url={item.url}
      cover={item.image[3]['#text']}
      musicProvider={musicProvider}
    />
  ));

  return (
    <div elevation={3} className={classes.Toppings}>
      <Navbar
        open={open}
        setOpen={setOpen}
        handleMusicProviderChange={handleMusicProviderChange}
        musicProvider={musicProvider}
      />
      <div className={classes.ToppingsAlbums}>{albumComponents}</div>
      <footer className={classes.ToppingsFooter}>{title}</footer>
    </div>
  );
}

export default withStyles(styles)(Toppings);
