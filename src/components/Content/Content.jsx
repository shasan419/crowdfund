import React from "react";
import "./Content.css";
import ContentCard from "./ContentCard/ContentCard";

const Content = (props) => {
  const { contentCard, onRewardClick } = props;
  return (
    <div className="content">
      <h3 className="section-heading">About this project</h3>
      <p className="text">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="text">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      {contentCard.map((card) => {
        return (
          <ContentCard
            key={card.id}
            id={card.id}
            heading={card.heading}
            topRight={card.topRight}
            text={card.text}
            left={card.left}
            onRewardClick={onRewardClick}
          />
        );
      })}
    </div>
  );
};

export default Content;
