import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greetings;

const customStyle = {
  color: "",
};

if (currentTime < 12) {
  greetings = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greetings = "Good Afternoon";
  customStyle.color = "green";
} else {
  greetings = "Good Night";
  customStyle.color = "purple";
}

ReactDOM.render(
  <h1 className="heading" style={{ color: "blue" }}>
    {greetings}
  </h1>,
  document.getElementById("root")
);
