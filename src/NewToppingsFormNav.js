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
import TextField from '@material-ui/core/TextField';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { withStyles } from '@material-ui/styles';
const drawerWidth = 500;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '64px',
    // transition: theme.transitions.create(['margin', 'width'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },
  // appBarShift: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
});

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
  const [errors, setErrors] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ title: '' });
    const newToppings = {
      title: userToppingsName,
      id: userToppingsName.toLowerCase().replace(/ /g, '-'),
      albums: userToppings,
    };

    if (toppings.toppings.some((item) => item.title === newToppings.title))
      return setErrors({ title: 'This title has already been taken' });

    if (!userToppingsName) return setErrors({ title: 'Please enter a title' });

    saveToppings(newToppings);
    history.push('/');
  };

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
          <Typography variant="h6" noWrap>
            {/* go back! */}
            toppings
          </Typography>
        </Toolbar>
        <div className={classes.buttonContainer}>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className={classes.root}
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Toppings Name"
              name="userToppingsName"
              value={userToppingsName}
              onChange={(e) => setUserToppingsName(e.target.value)}
              helperText={errors?.title}
              error={Boolean(errors?.title)}
            />
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </form>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary" type="submit">
              Go Back
            </Button>
          </Link>

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
        </div>
      </AppBar>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(NewToppingsFormNav);
