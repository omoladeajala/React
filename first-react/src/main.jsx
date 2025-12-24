import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <h1>My Favourite Food</h1>
    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
      <li>Chicken</li>
    </ul>
  </div>
);
