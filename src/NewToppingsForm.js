import React from 'react';
import { useState } from 'react';
import NewToppingsFormNav from './NewToppingsFormNav';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Search from './Search';
import DraggableToppingsList from './DraggableToppingsList';
import styles from './styles/NewToppingsFormStyles';
const arrayMove = require('array-move');

function NewToppingsForm({ saveToppings, history, toppings, classes }) {
  const [open, setOpen] = useState(false);
  const [userToppings, setUserToppings] = useState([]);
  const [userToppingsName, setUserToppingsName] = useState('');

  const onSortEnd = ({ oldIndex, newIndex }) => {
    document.body.style.cursor = 'default';
    setUserToppings(arrayMove(userToppings, oldIndex, newIndex));
  };

  return (
    <>
      <NewToppingsFormNav
        open={open}
        setOpen={setOpen}
        history={history}
        setUserToppings={setUserToppings}
        toppings={toppings}
        saveToppings={saveToppings}
        userToppingsName={userToppingsName}
        setUserToppingsName={setUserToppingsName}
        userToppings={userToppings}
      />
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => setOpen(!open)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Search
            setUserToppings={setUserToppings}
            userToppings={userToppings}
          />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableToppingsList
            axis="xy"
            userToppings={userToppings}
            setUserToppings={setUserToppings}
            onSortStart={() => (document.body.style.cursor = 'grabbing')}
            onSortEnd={onSortEnd}
          />
        </main>
      </div>
    </>
  );
}

export default withStyles(styles, { withTheme: true })(NewToppingsForm);
