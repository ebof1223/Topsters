import React, { useState } from "react";
import Album from "./Album";
import "./styles/Toppings.css";
import Navbar from "./Navbar";
export default function Toppings(props) {
  const [musicProvider, setMusicProvider] = useState("spotify");

  const albumComponents = props.albums.map((item) => (
    <Album
      album={item.name}
      artist={item.artist.name}
      key={item.artist.mbid}
      url={item.url}
      cover={item.image[3]["#text"]}
      musicProvider={musicProvider}
    />
  ));

  return (
    <div className='Toppings'>
      <Navbar
        handleChange={(e) => setMusicProvider(e.target.value)}
        musicProvider={musicProvider}
      />
      <div className='Toppings-albums'>{albumComponents}</div>
      {/* Footer */}
    </div>
  );
}
