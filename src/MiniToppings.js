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
  colors: {
    backgroundColor: "grey",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    paddingTop: "0,5rem",
    fontSize: "1rem",
    position: "relative",
  },
  avatar: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
};

function MiniToppings(props) {
  const { classes, title } = props;

  return (
    <div className={classes.root}>
      <div className={classes.albums} />
      <h5 className={classes.title}>
        {title} <span className={classes.avatar}>🙈</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniToppings);
