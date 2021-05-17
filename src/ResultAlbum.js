import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  Album: {
    backgroundColor: '#dae1e4',
    borderRadius: '5px',
    height: '150px',
    width: '150px',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  },
};

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
