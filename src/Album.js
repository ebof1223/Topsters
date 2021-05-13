import React from "react";
import { withStyles } from "@material-ui/styles";
import { spotifySVG, appleSVG, youtubeSVG } from "./svgs";

const styles = {
  Album: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover div": {
      opacity: 1,
      transition: "0.5s",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    padding: " 10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "0.7rem",
  },
  links: {
    position: "absolute",
    display: "inline-block",
    margin: "0 auto",
    bottom: 0,
    right: 0,
    marginRight: "0.25rem",
    marginBottom: "0.25rem",
    opacity: 0,
    height: "25px",
    width: "25px",
  },
};

function Album({ cover, musicProvider, classes }) {
  const generateMusicProviderSVG = (value) => {
    switch (value) {
      case "spotify":
        return (
          <div className={classes.links}>
            <img
              style={{ height: "25px", width: "25px" }}
              src='https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg'
            />
          </div>
        );
      case "applemusic":
        return <div className={classes.links}>{appleSVG}</div>;
      case "youtube":
        return (
          <div className={classes.links}>
            <img
              style={{ height: "25px", width: "25px" }}
              src='https://upload.wikimedia.org/wikipedia/commons/4/4f/YouTube_social_white_squircle.svg'
            />
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div
      style={{
        background: `url(${cover}) no-repeat center center/cover`,
      }}
      className={classes.Album}
    >
      <div>
        <div className={classes.boxContent}></div>
        {generateMusicProviderSVG(musicProvider)}
      </div>
    </div>
  );
}

export default withStyles(styles)(Album);
