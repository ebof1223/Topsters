import React from 'react';
import MiniToppings from './MiniToppings';
import { withStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import styles from './styles/ToppingsListStyles';

function ToppingsList(props) {
  const goToToppings = (id) => {
    props.history.push(`/toppings/${id}`);
  };

  const { classes, toppings } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Toppings List</h1>
          <Link to={'/toppings/new'}>
            <Fab color="inherit" aria-label="add" size="small">
              <AddIcon />
            </Fab>
          </Link>
        </nav>
        <div className={classes.albums}>
          {toppings.map((item) => (
            <MiniToppings
              {...item}
              key={item.id}
              handleClick={() => goToToppings(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(ToppingsList);
