import React from "react";
import "../css/card.css";

const Card = ({ title, link, linkText, description, imgUrl }) => {
  const styleBg = {
    flex: "4",
    background: `url(${imgUrl})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  };
  return (
    <div className="outer-div">
      <div className="inner-div">
        <div className="front">
          <div className="front-details">
            <div style={styleBg}></div>
            <div className="front-title">{title}</div>
          </div>
          <div className="front__text">
            <span className="front__text-hover">Hover to Read More</span>
          </div>
        </div>
        <div className="back">
          <div>
            {description.map((text) => (
              <p style={{ color: "white" }}>{text}</p>
            ))}
            {link && (
              <div className="front-link">
                <a href={link} rel="nofollow noreferrer" target="_blank">
                  {linkText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
