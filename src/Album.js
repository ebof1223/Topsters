import React from "react";
import "./styles/Album.css";
export default function Album({ cover, album, artist }) {
  return (
    <div
      style={{
        background: `url(${cover}) no-repeat`,
      }}
      className='Album'
    >
      <span>
        {album}
        {artist}
      </span>
    </div>
  );
}
