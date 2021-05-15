import React from "react";
import { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import LASTFM_API from "./LASTFM_API";
import TextField from "@material-ui/core/TextField";
import DraggableToppingsList from "./DraggableToppingsList";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import ClearAllIcon from "@material-ui/icons/ClearAll";
const arrayMove = require("array-move");
const drawerWidth = 500;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function NewToppingsForm({ saveToppings, history, toppings }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [userToppings, setUserToppings] = React.useState([]);
  const [userToppingsName, setUserToppingsName] = useState("");
  const [errors, setErrors] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ title: "" });
    const newToppings = {
      title: userToppingsName,
      id: userToppingsName.toLowerCase().replace(/ /g, "-"),
      albums: userToppings,
    };

    if (toppings.toppings.some((item) => item.title === newToppings.title))
      return setErrors({ title: "This title has already been taken" });

    if (!userToppingsName) return setErrors({ title: "Please enter a title" });

    saveToppings(newToppings);
    history.push("/");
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    document.body.style.cursor = "default";
    setUserToppings(arrayMove(userToppings, oldIndex, newIndex));
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color='inherit'
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={() => setOpen(!open)}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap>
              {/* go back! */}
              <Link to={"/"} style={{ textDecoration: "none" }}>
                toppings
              </Link>
            </Typography>

            <form
              onSubmit={(e) => handleSubmit(e)}
              className={classes.root}
              autoComplete='off'
            >
              <TextField
                id='standard-basic'
                label='Toppings Name'
                name='userToppingsName'
                value={userToppingsName}
                onChange={(e) => setUserToppingsName(e.target.value)}
                helperText={errors?.title}
                error={Boolean(errors?.title)}
              />
              <Button variant='contained' color='primary' type='submit'>
                Save
              </Button>
            </form>
            {/* BUTTONS HERE */}

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
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
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
          <LASTFM_API
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
            axis='xy'
            userToppings={userToppings}
            setUserToppings={setUserToppings}
            onSortStart={() => (document.body.style.cursor = "grabbing")}
            onSortEnd={onSortEnd}
          />
        </main>
      </div>
    </>
  );
}
