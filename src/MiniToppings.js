import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  albums: {
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    height: "150px",
    width: "100%",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0",
    alignItems: "center",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  avatar: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniToppings: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
};

function MiniToppings(props) {
  const { classes, title, albums } = props;
  const miniToppings = albums.map((item) => (
    <div
      className={classes.miniToppings}
      style={{
        background: `url(${item.image[3]["#text"]}) no-repeat center center/cover`,
      }}
      key={item.name}
    ></div>
  ));

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.albums}>{miniToppings}</div>
      <h5 className={classes.title}>
        {title} <span className={classes.avatar}>🙈</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniToppings);
