import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";

const styles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "6vh",
  },

  logo: {
    marginRight: "1rem",
    padding: "0 1rem",
    background: "#eceff1",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, OxygenUbuntu, Cantarell,'Open Sans', 'Helvetica Neue',sans-serif",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },

  selectContainer: {
    marginRight: "1rem",
  },
};

function Navbar({
  handleMusicProviderChange,
  musicProvider,
  open,
  setOpen,
  classes,
}) {
  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to={"/"}>toppings</Link>
      </div>
      <div className={classes.selectContainer}>
        <Select onChange={handleMusicProviderChange} value={musicProvider}>
          <MenuItem value='spotify'>Spotify</MenuItem>
          <MenuItem value='applemusic'>Apple Music</MenuItem>
          <MenuItem value='youtube'>YouTube</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={2000}
        message={
          <span id='message-id'>Music Provider Successfully Changed!</span>
        }
        onClose={() => setOpen(false)}
        ContentProps={{ "aria-describedby": "message-id" }}
        action={[
          <IconButton color='inherit' key='done' aria-label='done'>
            <DoneIcon />
          </IconButton>,
        ]}
      ></Snackbar>
    </header>
  );
}

export default withStyles(styles)(Navbar);
