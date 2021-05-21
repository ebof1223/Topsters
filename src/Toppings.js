import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import useAuth from './spotify/useAuth';
import Album from './Album';
import Navbar from './Navbar';
import styles from './styles/ToppingsStyles';

function Toppings({ title, albums, classes, authCode }) {
  const [musicProvider, setMusicProvider] = useState('spotify');
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    console.log(`${albums[index].name} ${albums[index].artist.name}`);
  };

  const handleMusicProviderChange = (e) => {
    setMusicProvider(e.target.value);
    setOpen(!open);
  };

  const albumComponents = albums.map((item, index) => (
    <Album
      artist={item.artist.name}
      key={item.name}
      url={item.url}
      cover={item.image[3]['#text']}
      musicProvider={musicProvider}
      onClick={() => handleClick(index)}
    />
  ));

  const accessToken = useAuth(authCode);

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
