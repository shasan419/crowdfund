import React from "react";
import "./ModalCard.css";
import RewardCard from "./RewardCard/RewardCard";

const ModalCard = (props) => {
  const { onRadioClick, content, id, onContinue } = props;
  const con = [
    {
      id: 0,
      heading: "Pledge with no reward",
      topRight: "",
      text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      left: "unlimited",
      amt: "0",
      disable: false,
    },
    ...content,
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Back this project</h2>
      <p className="text">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <RewardCard
        onRadioClick={onRadioClick}
        content={con}
        id={id}
        onContinue={onContinue}
      />
    </div>
  );
};

export default ModalCard;
