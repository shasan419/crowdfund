import React from "react";
import "./ContentCard.css";

const ContentCard = (props) => {
  const { id, heading, topRight, text, left, onRewardClick } = props;
  let cl = "content-card";
  if (left === "0") {
    cl = cl + " unavailable";
  }

  return (
    <div className={cl}>
      <div className="section-top">
        <h3 className="section-heading">{heading}</h3>
        <h4 className="top-cyan">{topRight}</h4>
      </div>
      <p className="text">{text}</p>
      <div className="section-bottom">
        <div>
          <span className="stat-bold">{left}</span> left
        </div>
        <div className="btn" onClick={() => onRewardClick(id)}>
          Select Reward
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
