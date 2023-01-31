import React from "react";
import "../css/welcome.css";
import { TypeAnimation } from "react-type-animation";
import { Row, Col } from "react-bootstrap";

function WelcomePage() {
  return (
    <div className="welcome">
      <div className="content">
      <div className="static-text">I  am </div>
      <div className="dynamic-text"><TypeAnimation
        sequence={[
          "Ambitious", // Types 'One'
          1500, // Waits 1s
          "Self motivated", // Deletes 'One' and types 'Two'
          1500, // Waits 2s
          "a Software Engineer",
          1500,
          "a Proud Indian",
          1500,
          "TANMAY",
          2000 // Types 'Three' without deleting 'Two'
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
      /></div>
      </div>
    </div>
  );
}

export default WelcomePage;
"Ambitious","Self motivated","Critical thinker","a Software Engineer","a Proud Indian", "TANMAY"