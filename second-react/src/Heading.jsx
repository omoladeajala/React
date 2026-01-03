import React from "react";

function Heading() {
const date = new Date();
const currentTime = date.getHours();

let greetings;

const customStyle = {
  color: "";
}

if (currentTime < 12) {
  greetings = "Good Morning";
  customStyle = "red";
} else if (currentTime < 18){
  greetings = "Good Afternoon";
  customStyle = "green";
} else {
  greetings = "Good Night";
  customStyle = "blue";
}

return <h1 className="heading" style={customStyle}>
    {greetings}
  </h1>

}

export default Heading;