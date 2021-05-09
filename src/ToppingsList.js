import React from "react";
import { Link } from "react-router-dom";

export default function ToppingsList({ toppings }) {
  return (
    <div>
      <h1>Toppings List</h1>
      {toppings.map((item) => (
        <Link to={`/toppings/${item.id}`}>{item.title}</Link>
      ))}
    </div>
  );
}
