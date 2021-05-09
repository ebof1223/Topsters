import React from "react";
import { Link } from "react-router-dom";
import MiniToppings from "./MiniToppings";

export default function ToppingsList({ toppings }) {
  return (
    <div>
      <h1>Toppings List</h1>
      {toppings.map((item) => (
        <MiniToppings {...item} />
      ))}
    </div>
  );
}

/* <Link to={`/toppings/${item.id}`}>{item.title}</Link> */
