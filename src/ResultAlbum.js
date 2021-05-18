import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ResultAlbumStyles';

function Result_Album({ cover, onClick, classes }) {
  return (
    <div
      style={{
        background: `url(${cover}) no-repeat center center/cover`,
      }}
      onClick={onClick}
      className={classes.Album}
    ></div>
  );
}

export default withStyles(styles)(Result_Album);
