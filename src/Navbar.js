import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import "./styles/Navbar.css";

export default function Navbar({ handleChange, musicProvider }) {
  return (
    <header className='Navbar'>
      <div className='logo'>
        <a href='#'>toppings</a>
      </div>
      <div className='select-container'>
        <Select onChange={handleChange} value={musicProvider}>
          <MenuItem value='spotify'>Spotify</MenuItem>
          <MenuItem value='applemusic'>Apple Music</MenuItem>
          <MenuItem value='youtube'>YouTube</MenuItem>
        </Select>
      </div>
    </header>
  );
}
