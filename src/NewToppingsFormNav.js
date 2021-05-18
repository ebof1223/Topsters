import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { withStyles } from '@material-ui/core/styles';
import NewToppingsModal from './NewToppingsModal';
import styles from './styles/NewToppingsFormNavStyles';

function NewToppingsFormNav({
  classes,
  open,
  setOpen,
  history,
  setUserToppings,
  userToppings,
  toppings,
  saveToppings,
  userToppingsName,
  setUserToppingsName,
}) {
  return (
    <div classes={classes.root}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap></Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <Link to={'/'} style={{ textDecoration: 'none', marginLeft: '2rem' }}>
            <Typography variant="h6" noWrap>
              toppings
            </Typography>
          </Link>
        </Toolbar>
        <div className={classes.btnContainer}>
          <Button onClick={() => setUserToppings([])}>
            <ClearAllIcon />
          </Button>
          <Button
            onClick={() =>
              setUserToppings([
                ...userToppings.sort((a, b) => 0.5 - Math.random()),
              ])
            }
          >
            <ShuffleIcon />
          </Button>
          <Button>
            <UndoIcon />
          </Button>
          <Button>
            <RedoIcon />
          </Button>

          <Link to={'/'} style={{ textDecoration: 'none', marginLeft: '2rem' }}>
            <Button variant="contained" color="secondary" type="submit">
              Go Back
            </Button>
          </Link>
          <NewToppingsModal
            userToppingsName={userToppingsName}
            setUserToppingsName={setUserToppingsName}
            userToppings={userToppings}
            toppings={toppings}
            history={history}
            saveToppings={saveToppings}
          />
        </div>
      </AppBar>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(NewToppingsFormNav);
