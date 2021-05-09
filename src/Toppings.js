import React from "react";
import Album from "./Album";
import "./styles/Toppings.css";
import Navbar from "./Navbar";
export default function Toppings(props) {
  const albumComponents = props.albums.map((item) => (
    <Album
      album={item.name}
      artist={item.artist.name}
      key={item.artist.mbid}
      url={item.url}
      cover={item.image[3]["#text"]}
    />
  ));

  return (
    <div className='Toppings'>
      <Navbar />
      <div className='Toppings-albums'>{albumComponents}</div>
      {/* Footer */}
    </div>
  );
}
