import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import styles from './styles/AlbumStyles';

interface Props {
  cover: string;
  classes: {
    Album: string;
    boxContent: string;
    SelectedAlbum: string;
  };
  onClick: () => void;
  selected: boolean;
}
const Album: React.FC<Props> = ({ cover, classes, onClick, selected }) => {
  return (
    <Paper
      elevation={5}
      square
      style={{
        background: `url(${cover}) no-repeat center center/cover`,
      }}
      className={selected ? classes.SelectedAlbum : classes.Album}
      onClick={onClick}
    ></Paper>
  );
};

export default withStyles(styles)(Album);
