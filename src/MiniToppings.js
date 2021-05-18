import React from 'react';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import fantano from './userImgs/fantano.jpeg';
import styles from './styles/MiniToppingsStyles';

function MiniToppings(props) {
  const { classes, title, albums } = props;

  const miniToppings = albums.map((item) => (
    <div
      className={classes.miniToppings}
      style={{
        background: `url(${item.image[3]['#text']}) no-repeat center center/cover`,
      }}
      key={item.name}
    ></div>
  ));

  return (
    <Paper variant="outlined">
      <div className={classes.root} onClick={props.handleClick}>
        <Paper elevation={3} square>
          <div className={classes.albums}>{miniToppings}</div>
        </Paper>
        <h5 className={classes.title}>
          {title}{' '}
          <span className={classes.avatar}>
            <Avatar alt="fantano" src={fantano} height="10px" />
          </span>
        </h5>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(MiniToppings);
