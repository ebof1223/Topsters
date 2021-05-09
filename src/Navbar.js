import React from "react";
import SimpleMenu from "./MusicPlatformSelector";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <header className='Navbar'>
      <div className='logo'>
        <a href='#'>toppings</a>
      </div>
      <SimpleMenu />
    </header>
  );
}
