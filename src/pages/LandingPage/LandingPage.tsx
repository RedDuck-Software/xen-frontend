import React, { FC } from "react";
import Header from "../../components/header/Header";
import "../../index.scss";
import "./LandingPage.scss";
import MetaMask from "../../assets/icons/metamask.svg";
import Cubes from "../../assets//img/landing/cubes.png";

const LandingPage: FC = () => {
  return (
    <div className="background">
      <Header />
      <div className="landing__block">
        <div className="landing__top">
          <div className="landing__top-block">
            <p className="landing__title">To get started</p>
            <button className="landing__btn">
              <img src={MetaMask} alt="" /> Login with MetaMask
            </button>
          </div>
        </div>
        <div className="landing__main">
          <div className="landing__main-block landing__main-block-left">
            <p>
              389,135,105<span>XEN</span>
            </p>
            <div>
              <p>Total Payout Today</p>
            </div>
          </div>
          <div className="landing__main-block landing__main-block-right">
            <p>
              423,846,268<span>XEN</span>
            </p>
            <div>
              <p>Total Payout All Time</p>
            </div>
          </div>
          <div className="landing__main-block landing__main-block-down-left">
            <p>
              11,901,431<span>XEN</span>
            </p>
            <div>
              <p>Burnt today</p>
            </div>
          </div>
          <div className="landing__main-block landing__main-block-down-right">
            <p>
              80,953,235<span>XEN</span>
            </p>
            <div>
              <p> Burnt All Time</p>
            </div>
          </div>
          <div className="landing__main-block-romb ">
            <img src={Cubes} alt="" />
            <p>XEN Lotto</p>
          </div>
        </div>
        <div className="landing__main-about">
          <div className="landing__main-about-block">
            <p>What are we about!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
