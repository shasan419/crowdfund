import React, { Component } from "react";
import Content from "../Content/Content";
import Header from "../Header/Header";
import "./Main.css";
import MainHead from "../MainHead/MainHead";
import Stats from "../Stats/Stats";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import closeModalIcon from "../../images/icon-close-modal.svg";
import ModalCard from "../ModalCard/ModalCard";
import contenCard from "../../data/content";
import ThanksModal from "../ThanksModal/ThanksModal";

const ThankModal = Modal.styled`
  width: 90%;
  max-width:720px;
  height: auto;
  border-radius: 10px;
  margin:auto;
  margin-bottom:40px;
  position: relative;
  background-color: white;
  opacity: 100%;
  transition : all 0.3s ease-in-out;`;
// NOTE - Naming descriptively can improve readability eg: ThanksModal, PledgeModal
const PledgeModal = Modal.styled`
  max-width:500px;
  height: auto;
  border-radius: 10px;
  margin-bottom:40px;
  position: relative;
  background-color: white;
  opacity: 100%;
  transition : all 0.3s ease-in-out;`;
const FadingBackground = styled(BaseModalBackground)`
  opacity: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  overflow-y: scroll;
  transition: all 0.3s ease-in-out;
`;

class Main extends Component {
  state = {
    isOpen: false,
    isThanksOpen: false,
    isBookmarked: false,
    id: 0,
    head: "",
    contentCard: [...contenCard],
    totalRaised: 89914,
    totalBacked: 5007,
    progress: 89.914,
  };

  handleBookmarkChange = () => {
    const { isBookmarked } = this.state;
    this.setState({ isBookmarked: !isBookmarked });
  };

  toggleModal = (no) => {
    const id = no;
    const change = !this.state.isOpen;
    this.setState({ isOpen: change, id });
  };

  toggleThanksModal = (txt) => {
    const change = !this.state.isThanksOpen;
    const change2 = !this.state.isOpen;
    this.setState({ isThanksOpen: change, isOpen: change2, head: txt });
  };

  handleModel = () => {
    this.toggleModal(0);
  };

  handleRewardClick = (no) => {
    this.toggleModal(no);
  };

  handleRadioClick = (no) => {
    const id = no;
    this.setState({ id });
  };

  handleContinue = (txt, dollars) => {
    const updatedMoney = this.state.totalRaised + Number(dollars);
    const increaseBacked = this.state.totalBacked + 1;
    const progress = (updatedMoney / 100000) * 100;
    this.setState({
      totalBacked: increaseBacked,
      totalRaised: updatedMoney,
      progress,
    });
    this.toggleThanksModal(txt);
  };

  handleGotIt = () => {
    this.setState({ isThanksOpen: false });
  };

  render() {
    const {
      isBookmarked,
      contentCard,
      isOpen,
      id,
      isThanksOpen,
      head,
      totalRaised,
      totalBacked,
      progress,
    } = this.state;
    const {
      toggleModal,
      toggleThanksModal,
      handleRadioClick,
      handleBookmarkChange,
      handleModel,
      handleRewardClick,
      handleContinue,
      handleGotIt,
    } = this;
    return (
      <ModalProvider backgroundComponent={FadingBackground}>
        <React.Fragment>
          {" "}
          <Header />
          <div className="main-container" id="main">
            <MainHead
              isBookmarked={isBookmarked}
              openModel={handleModel}
              onBookmarkChange={handleBookmarkChange}
            />
            {/* NOTE - should get metrics data via props to be updated on pledge submissions */}
            <Stats
              totalRaised={totalRaised}
              totalBacked={totalBacked}
              progress={progress}
            />
            <Content
              contentCard={contentCard}
              onRewardClick={handleRewardClick}
            />
            <ThankModal
              isOpen={isOpen}
              onBackgroundClick={toggleModal}
              onEscapeKeydown={toggleModal}
            >
              <img
                src={closeModalIcon}
                alt="closeModel"
                onClick={toggleModal}
                className="modal-close"
              />
              <ModalCard
                onRadioClick={handleRadioClick}
                content={contentCard}
                id={id}
                onContinue={handleContinue}
              />
            </ThankModal>

            <PledgeModal
              isOpen={isThanksOpen}
              onBackgroundClick={toggleThanksModal}
              onEscapeKeydown={toggleThanksModal}
            >
              <ThanksModal val={head} onGotit={handleGotIt} />
            </PledgeModal>
          </div>
          <Footer />
        </React.Fragment>
      </ModalProvider>
    );
  }
}

export default Main;
