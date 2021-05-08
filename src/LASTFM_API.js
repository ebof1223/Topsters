import React from "react";
import axios from "axios";
import { LASTFM_API_KEY } from "./sensitive";
const LASTFM_API_URL = "http://ws.audioscrobbler.com/2.0/";

export default function LASTFM_API() {
  const [userSearch, setUserSearch] = React.useState("");

  const getDiscography = async (artist) => {
    await axios
      .get(
        `${LASTFM_API_URL}?method=artist.gettopalbums&artist=${artist}&api_key=${LASTFM_API_KEY}&format=json`
      )
      .then((res) => {
        console.log(res.data.topalbums.album);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return getDiscography(userSearch);
  };

  return (
    <>
      <h1>LastFM API Call</h1>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          autoComplete='off'
          className='search-bar'
          value={userSearch}
          type='text'
          onChange={(e) => setUserSearch(e.target.value)}
          placeholder='Enter artist'
        ></input>
        <button>Search</button>
      </form>
    </>
  );
}
