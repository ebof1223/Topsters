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
  onClick: () => void;
}
const Album: React.FC<Props> = ({ cover, classes, onClick }) => {
  return (
    <Paper
      elevation={5}
      square
      style={{
        background: `url(${cover}) no-repeat center center/cover`,
      }}
      className={classes.Album}
      onClick={onClick}
    ></Paper>
  );
};

export default withStyles(styles)(Album);
