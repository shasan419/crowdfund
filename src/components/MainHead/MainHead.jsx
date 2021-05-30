import React from "react";
import "./MainHead.css";
import masterlogo from "../../images/logo-mastercraft.svg";
import bookmark from "../../images/icon-bookmark.svg";
import bookmarkGreen from "../../images/icon-bookmark-green.svg";

const MainHead = (props) => {
  const { isBookmarked, onBookmarkChange, openModel } = props;
  return (
    <div className="header">
      <div className="mastercraft">
        <img src={masterlogo} alt="masterlogo" />
      </div>
      <h2 className="header-bold">Mastercraft Bamboo Monitor Riser</h2>
      <p className="text">
        A beautiful &amp; handcrafted monitor stand to reduce neck and eye
        strain.
      </p>
      <div className="header-btns">
        <div className="btn" id="back-project" onClick={() => openModel()}>
          Back this project
        </div>
        <div className="bookmark" onClick={() => onBookmarkChange()}>
          <img
            style={{ cursor: "pointer" }}
            src={isBookmarked ? bookmarkGreen : bookmark}
            alt="bm"
          />
          <label
            className={isBookmarked ? "bookmark-text-green" : "bookmark-text"}
          >
            Bookmark
          </label>
        </div>
      </div>
    </div>
  );
};

export default MainHead;
