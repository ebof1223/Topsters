import React, { useEffect } from 'react';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=0423b49839824b2d8056e7a5a8666622&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

export default function Login({ setAuthCode }) {
  const code = new URLSearchParams(window.location.search).get('code');

  useEffect(() => {
    if (code) setAuthCode(code);
  }, [code, setAuthCode]);

  return (
    <div>
      <a href={AUTH_URL}>
        <div>
          <img
            style={{
              height: '25px',
              width: '25px',
              position: 'absolute',
              top: 0,
              left: 0,
              marginLeft: '1rem',
              marginTop: '1rem',
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="spotify"
          />
        </div>
      </a>
    </div>
  );
}
