import React from "react";
import { useState } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/styles";
import { LASTFM_API_KEY } from "./sensitive";
const LASTFM_API_URL = "http://ws.audioscrobbler.com/2.0/";

const styles = {
  resultsContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flexStart",
    marginLeft: "1.5rem",
    marginBottom: "1.5rem",
  },
  Album: {
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    height: "150px",
    width: "150px",
    overflow: "hidden",
  },
};

const LASTFM_API = ({ classes, setUserToppings, userToppings }) => {
  const [userSearch, setUserSearch] = useState("");
  const [results, setResults] = useState([]);
  const addToToppings = (itemIdx) => {
    //maybe jiggle everything?
    if (userToppings.some((item) => item.name === results[itemIdx].name)) {
      console.log("DUPLICATE ERROR");
      return;
    }
    if (userToppings.length > 19) {
      console.log("EXCEEDED MAX TOPPINGS VALUE");
      return;
    }
    setUserToppings([...userToppings, results[itemIdx]]);
  };
  const getDiscography = async (artist) => {
    setResults([]);
    await axios
      .get(
        `${LASTFM_API_URL}?method=artist.gettopalbums&artist=${artist}&api_key=${LASTFM_API_KEY}&format=json`
      )
      .then((res) => {
        let albumsArray = res.data.topalbums.album.filter(
          (item) => item.image[3]["#text"]
        );
        // while (albumsArray.length % 3 !== 0) {
        //   albumsArray.splice(albumsArray.length - 1, 1);
        // }
        setResults(albumsArray);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getDiscography(userSearch);
    setUserSearch("");
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
      <div className={classes.resultsContainer}>
        {results.map((item, index) => (
          <div
            style={{
              background: `url(${item.image[3]["#text"]}) no-repeat center center/cover`,
            }}
            key={`${item.name}-result`}
            className={classes.Album}
            onClick={(e) => addToToppings(e.target.dataset.index)}
            data-index={index}
          ></div>
        ))}
      </div>
    </>
  );
};

export default withStyles(styles)(LASTFM_API);
