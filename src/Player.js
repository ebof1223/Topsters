import React, { useEffect, useState } from 'react';
import SpotifyWebPlayer from 'react-spotify-web-playback/lib';

function Player({ accessToken, albumUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [albumUri]);

  if (!accessToken) return null;
  return (
    <SpotifyWebPlayer
      token={accessToken}
      showSaveIcon
      uris={albumUri ? [albumUri] : []}
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
    />
  );
}

export default Player;
