import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import styles from './styles/AlbumStyles';

interface Props {
  cover: string;
  classes: {
    Album: string;
    boxContent: string;
  };
}
const Album: React.FC<Props> = ({ cover, classes }) => {
  return (
    <Paper
      elevation={3}
      square
      style={{
        background: `url(${cover}) no-repeat center center/cover`,
      }}
      className={classes.Album}
    >
      <div>
        <div className={classes.boxContent}></div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(Album);
