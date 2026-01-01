import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

ReactDOM.render(
  <div>
    <Heading />
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
