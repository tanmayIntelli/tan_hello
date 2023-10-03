import React from "react";
import "../css/cardSkill.css";

const CardSkill = ({ text, imgUrl }) => {
  return (
    <div className="cardSkill-container">
      <div>
        <p style={{ color: "black" }}>{text}</p>
      </div>

      <img src={imgUrl} className="cardSkill-img" alt="Javascript" />
    </div>
  );
};

export default CardSkill;
