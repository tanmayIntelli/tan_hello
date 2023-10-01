import React from "react";
import "../css/cardSkill.css";

const CardSkill = ({ text, imgUrl }) => {
  return (
    <div className="cardSkill-container">
      <div>
        <p>{text}</p>
      </div>

      <img src={imgUrl} className="cardSkill-img" alt="Javascript" />
    </div>
  );
};

export default CardSkill;
