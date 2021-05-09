import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import "./styles/Navbar.css";

export default function Navbar({
  handleMusicProviderChange,
  musicProvider,
  open,
  setOpen,
}) {
  return (
    <header className='Navbar'>
      <div className='logo'>
        <a href='#'>toppings</a>
      </div>
      <div className='select-container'>
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
