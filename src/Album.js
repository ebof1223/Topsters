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

function Album({ cover, album, musicProvider, classes }) {
  const generateMusicProviderSVG = (value) => {
    switch (value) {
      case "spotify":
        return <div className={classes.links}>{spotifySVG}</div>;
      case "applemusic":
        return <div className={classes.links}>{appleSVG}</div>;
      case "youtube":
        return <div className={classes.links}>{youtubeSVG}</div>;
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
        <div className={classes.boxContent}>
          <span>{album}</span>
        </div>
        {generateMusicProviderSVG(musicProvider)}
      </div>
    </div>
  );
}

export default withStyles(styles)(Album);
