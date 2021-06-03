import React from "react";
import "./Stats.css";

const Stats = (props) => {
  const { totalRaised, totalBacked, progress } = props;
  return (
    <div className="stats">
      <div className="stats-info">
        <div className="stat">
          <div className="stat-bold backed">
            $<span id="backed-num">{totalRaised.toLocaleString()}</span>
          </div>
          <p className="text stat-text">
            of $<span id="backed-total">100,000</span> backed
          </p>
        </div>
        <div className="stat">
          <div className="stat-bold backers" id="backers">
            {totalBacked.toLocaleString()}
          </div>
          <p className="text stat-text">total backers</p>
        </div>
        <div className="stat">
          <div className="stat-bold">56</div>
          <p className="text stat-text">days left</p>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Stats;
