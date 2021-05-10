import React from "react";
import MiniToppings from "./MiniToppings";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    padding: "1rem",
  },

  albums: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

function ToppingsList(props) {
  const goToToppings = (id) => {
    props.history.push(`/toppings/${id}`);
  };

  const { classes, toppings } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Toppings List</h1>
        </nav>
        <div className={classes.albums}>
          {toppings.map((item) => (
            <MiniToppings {...item} handleClick={() => goToToppings(item.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(ToppingsList);

/* <Link to={`/toppings/${item.id}`}>{item.title}</Link> */
