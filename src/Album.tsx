import React from 'react';
import { withStyles } from '@material-ui/styles';
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
};

export default withStyles(styles)(Album);
