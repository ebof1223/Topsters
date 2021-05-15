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
import Search from "./Search";
import TextField from "@material-ui/core/TextField";
import DraggableToppingsList from "./DraggableToppingsList";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import ClearAllIcon from "@material-ui/icons/ClearAll";
const arrayMove = require("array-move");
const drawerWidth = 500;

function NewToppingsFormNav({
  classes,
  open,
  setOpen,
  history,
  setUserToppings,
  userToppings,
  toppings,
  saveToppings,
}) {
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

  return (
    <div>
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
          <Typography variant='h6' noWrap></Typography>

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

          <div className={classes.buttonContainer}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button variant='contained' color='secondary' type='submit'>
                Go Back
              </Button>
            </Link>
            <Button onClick={() => setUserToppings([])}>
              <ClearAllIcon fontSize='large' />
            </Button>
            <Button
              onClick={() =>
                setUserToppings([
                  ...userToppings.sort((a, b) => 0.5 - Math.random()),
                ])
              }
            >
              <ShuffleIcon fontSize='large' />
            </Button>
            <Button>
              <UndoIcon fontSize='large' />
            </Button>
            <Button>
              <RedoIcon fontSize='large' />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NewToppingsFormNav;
