import React from "react";
import "./styles/Album.css";
import { spotifySVG } from "./svgs";
export default function Album({ cover, album, artist }) {
  return (
    <div
      style={{
        background: `url(${cover}) no-repeat center center/cover`,
      }}
      className='Album'
    >
      <div>
        <div className='album-content'>
          <span>{album}</span>
        </div>
        <div className='social-links'>{spotifySVG}</div>
      </div>
    </div>
  );
}
