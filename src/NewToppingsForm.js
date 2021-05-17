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
const arrayMove = require('array-move');
const drawerWidth = 500;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },

  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    height: 'calc(100vh - 64px)',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

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
