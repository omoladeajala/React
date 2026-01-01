import React from "react";
import ReactDOM from "react-dom";

let greetings = 

const hour = new Date().getHours();
const currentTime = 


if ( currentTime < 12) {
  greetings = "Good Morning"
} else if 
    ( currentTime < 18 )
  { greetings = "Good Afternoon"
} else {
  greetings = "Good Evening"
}
ReactDOM.render(
  <h1 className="heading" style={{color: "blue"}}>{greetings}</h1>
  ,document.getElementById("root"))