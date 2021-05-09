import React from "react";
import "./styles/Album.css";
import { spotifySVG, appleSVG, youtubeSVG } from "./svgs";
export default function Album({ cover, album, musicProvider }) {
  const generateMusicProviderSVG = (value) => {
    switch (value) {
      case "spotify":
        return <div className='social-links'>{spotifySVG}</div>;
      case "applemusic":
        return <div className='social-links'>{appleSVG}</div>;
      case "youtube":
        return <div className='social-links'>{youtubeSVG}</div>;
      default:
        break;
    }
  };

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
        {generateMusicProviderSVG(musicProvider)}
      </div>
    </div>
  );
}
