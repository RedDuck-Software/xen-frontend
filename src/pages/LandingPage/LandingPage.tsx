import React, { FC } from "react";
import "../../index.css";
import "./LandingPage.css";

const LandingPage: FC = () => {
  return (
    <div className="background">
      <div className="landing">
        <div>
          <h1 className="landing__title">BurnXEN.io</h1>
          <ul>
            <li>
              <a href="/lotto-page">XEN Lotto</a>{" "}
            </li>
            <li>
              <a href="/">
                Roulette<span>Coming soon</span>
              </a>
            </li>
            <li>
              <a href="">
                Poker<span>Coming soon</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="landing__block">
          <div className="landing__top">
            <div className="landing__top-block">
              <p>To get started</p>
              <button className="landing__btn">Login with MetaMask</button>
            </div>
          </div>
          <div className="landing__main">
            <div className="landing__main-block">
              <p>
                389,135,105<span>XEN</span>
              </p>
              <div>
                <p>Total Payout Today</p>
              </div>
            </div>
            <div className="landing__main-block">
              <p>
                423,846,268<span>XEN</span>
              </p>
              <div>
                <p>Total Payout All Time</p>
              </div>
            </div>
            <div className="landing__main-block">
              <p>
                11,901,431<span>XEN</span>
              </p>
              <div>
                <p>Burnt today</p>
              </div>
            </div>
            <div className="landing__main-block">
              <p>
                80,953,235<span>XEN</span>
              </p>
              <div>
                <p> Burnt All Time</p>
              </div>
            </div>
          </div>
          <div className="landing__main-about">
            <div className="landing__main-about-block">
              <p>What are we about!</p>
            </div>
          </div>
        </div>
        <div>
          <p>Eherium dropdown</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
