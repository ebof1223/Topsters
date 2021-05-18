import React from 'react';
import { withStyles } from '@material-ui/styles';
import { appleSVG } from './svgs';
import styles from './styles/AlbumStyles';

function Album({ cover, musicProvider, classes }) {
  const generateMusicProviderSVG = (value) => {
    switch (value) {
      case 'spotify':
        return (
          <div className={classes.links}>
            <img
              style={{ height: '25px', width: '25px' }}
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
              alt="applemusic-btn"
            />
          </div>
        );
      case 'applemusic':
        return <div className={classes.links}>{appleSVG}</div>;
      case 'youtube':
        return (
          <div className={classes.links}>
            <img
              style={{ height: '25px', width: '25px' }}
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/YouTube_social_white_squircle.svg"
              alt="spotify-btn"
            />
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div
      style={{
        background: `url(${cover}) no-repeat center center/cover`,
      }}
      className={classes.Album}
    >
      <div>
        <div className={classes.boxContent}></div>
        {generateMusicProviderSVG(musicProvider)}
      </div>
    </div>
  );
}

export default withStyles(styles)(Album);
