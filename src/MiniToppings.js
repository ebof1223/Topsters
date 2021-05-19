import React from 'react';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import fantano from './userImgs/fantano.jpeg';
import styles from './styles/MiniToppingsStyles';
import DeleteIcon from '@material-ui/icons/Delete';

function MiniToppings({
  classes,
  title,
  albums,
  id,
  deleteDialog,
  setDeleteDialog,
  handleClick,
  setToBeDeleted,
}) {
  const miniToppings = albums.map((item) => (
    <div
      className={classes.miniToppings}
      style={{
        background: `url(${item.image[3]['#text']}) no-repeat center center/cover`,
      }}
      key={item.name}
    ></div>
  ));

  const handleDelete = (e) => {
    e.stopPropagation();
    setToBeDeleted(id);
    setDeleteDialog(!deleteDialog);
  };

  return (
    <Paper variant="outlined">
      <div className={classes.root} onClick={handleClick}>
        <Paper outlined="true" className={classes.delete}>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={(e) => handleDelete(e)}
          />
        </Paper>
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
