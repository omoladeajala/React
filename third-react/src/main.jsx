import React from "react";
import ReactDOM from "react-dom/client";
import pi from "./math.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>{pi}</li>
    <li>2</li>
    <li>3</li>
  </ul>
);
