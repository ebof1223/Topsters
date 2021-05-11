import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/styles";
import { LASTFM_API_KEY } from "./sensitive";
const LASTFM_API_URL = "http://ws.audioscrobbler.com/2.0/";

const styles = {
  resultsContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
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
  const [results, setResults] = useState("");

  useEffect(() => {
    console.log(results, "in useEffect");
  }, [results]);

  const addToToppings = (itemIdx) => {
    console.log(results);
    // setUserToppings([...userToppings, results[itemIdx]]);
  };
  const getDiscography = async (artist) => {
    setResults("");
    await axios
      .get(
        `${LASTFM_API_URL}?method=artist.gettopalbums&artist=${artist}&api_key=${LASTFM_API_KEY}&format=json`
      )
      .then((res) => {
        let albumsArray = res.data.topalbums.album.filter(
          (item) => item.image[3]["#text"]
        );
        while (albumsArray.length % 3 !== 0) {
          albumsArray.splice(albumsArray.length - 1, 1);
        }
        setResults(
          albumsArray.map((item, index) => (
            <div
              style={{
                background: `url(${item.image[3]["#text"]}) no-repeat center center/cover`,
              }}
              key={item.name}
              className={classes.Album}
              onClick={(e) => addToToppings(e.target.dataset.index)}
              data-index={index}
            ></div>
          ))
        );
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
      {console.log(results, "in render")}
      <div className={classes.resultsContainer}>{results}</div>
    </>
  );
};

export default withStyles(styles)(LASTFM_API);
