import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/AlbumStyles';

function Album({ cover, classes }) {
  return (
    <div
      style={{
        background: `url(${cover}) no-repeat center center/cover`,
      }}
      className={classes.Album}
    >
      <div>
        <div className={classes.boxContent}></div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Album);
