import React from 'react';
import MiniToppings from './MiniToppings';
import { withStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './styles/ToppingsListStyles';

function ToppingsList({ classes, toppings, history, setToppings }) {
  const goToToppings = (id) => {
    history.push(`/toppings/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>Toppings List</h1>
          <Link to={'/toppings/new'}>
            <Fab color="inherit" aria-label="add" size="small">
              <AddIcon />
            </Fab>
          </Link>
        </nav>
        <TransitionGroup className={classes.albums}>
          {toppings.toppings.map((item) => (
            <CSSTransition key={item.id} classNames="fade" timeout={2000}>
              <MiniToppings
                {...item}
                key={item.id}
                handleClick={() => goToToppings(item.id)}
                id={item.id}
                setToppings={setToppings}
                toppings={toppings}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default withStyles(styles)(ToppingsList);
