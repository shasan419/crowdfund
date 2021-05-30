import React from "react";
import "./ThanksModal.css";
import checkIcon from "../../images/icon-check.svg";

const ThanksModal = (props) => {
  const { val, onGotit } = props;
  return (
    <div className="modal modal-success">
      <div className="img">
        <img src={checkIcon} alt="check icon" />
      </div>
      <h2>Thanks for your support!</h2>
      <p className="text">
        {`Your pledge brings us one step closer to sharing Mastercraft ${val} worldwide. You will get an email once our campaign is
      completed.`}
      </p>
      <div className="btn close-object" onClick={() => onGotit()}>
        Got it!
      </div>
    </div>
  );
};

export default ThanksModal;
