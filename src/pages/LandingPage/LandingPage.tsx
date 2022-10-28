import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { LOTTERYADDRESS } from "../../helpers/constants";

import { injected } from "../../helpers/connectors";
import { Lottery__factory } from "../../typechain";
import Header from "../../components/header/Header";
import "../../index.scss";
import "./LandingPage.scss";

import MetaMask from "../../assets/icons/metamask.svg";
import Cubes from "../../assets/img/landing/cubes.png";
import LineLeft from "../../assets/img/landing/line-left.png";
import LineRight from "../../assets/img/landing/line-right.png";
import LineAboutTop from "../../assets/img/landing/line-about.png";
import LineAboutBottom from "../../assets/img/landing/line-about.png";

import "../../index.scss";
import "./LandingPage.scss";

const LandingPage: FC = () => {
  const [totalPayout, setTotalPayout] = React.useState<any>();
  const [totalPayoutAllTime, setTotalPayoutAllTime] = React.useState<any>();
  const { account, connector, activate } = useWeb3React();
  const navigate = useNavigate();
  async function connect() {
    try {
      await activate(injected);
      sessionStorage.setItem("isWalletConnected", "true");
    } catch (ex) {
      console.log("err");
      console.log(ex);
    }
  }
  console.log("connector", connector);
  console.log("account", account);
  useEffect(() => {
    if (connector) {
      navigate("deposit-page");
    }
  });

  async function getTotalInfo() {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://eth-goerli.g.alchemy.com/v2/RjtXgibyHZpH_pzNdKAnh28f0Ja_UUEf`
    );
    const LotteryCounter = Lottery__factory.connect(LOTTERYADDRESS, provider);
    /*const totalPayout = await (
      await LotteryCounter.totalPayoutToday()
    ).toString()*/
    const totalPayoutAllTime = await (
      await LotteryCounter.totalAllTimePrizePool()
    ).toString();
    setTotalPayout(totalPayout);
    setTotalPayoutAllTime(totalPayoutAllTime);
  }

  useEffect(() => {
    getTotalInfo();
  }, []);

  return (
    <div className="background">
      <Header />
      <div className="landing__block">
        <div className="landing__top">
          <div className="landing__top-block">
            <p className="landing__title">TO GET STARTED</p>
            <button
              className="landing__btn landing__btn-login"
              onClick={connect}
            >
              <img src={MetaMask} alt="" className="landing__btn-img" /> Login
              with MetaMask
            </button>
          </div>
        </div>
        <div className="landing__main">
          <div className="landing__main-block landing__main-block-left">
            <div className="landing__block-text">
              <p className="landing__block-title">Total Payout Today</p>
              <p className="landing__block-numbers">
                {totalPayout}
                <span className="landing__block-span">XEN</span>
              </p>
            </div>
          </div>
          <div className="landing__main-block landing__main-block-right">
            <div className="landing__block-text">
              <p className="landing__block-title">Total Payout All Time</p>
              <p className="landing__block-numbers">
                {totalPayoutAllTime}
                <span className="landing__block-span">XEN</span>
              </p>
            </div>
          </div>
          <div className="landing__main-block landing__main-block-down-left">
            <div className="landing__block-text">
              <p className="landing__block-title">Burnt today</p>
              <p className="landing__block-numbers">
                11,901,431<span className="landing__block-span">XEN</span>
              </p>
            </div>
          </div>
          <div className="landing__main-block landing__main-block-down-right">
            <div className="landing__block-text">
              <p className="landing__block-title">Burnt All Time</p>
              <p className="landing__block-numbers">
                80,953,235<span className="landing__block-span">XEN</span>
              </p>
            </div>
          </div>
          <div className="landing__main-block-romb ">
            <img src={Cubes} alt="" className="landing__main-block-romb-img" />
            <p className="landing__main-block-romb-title">XEN Lotto</p>
            <img
              src={LineLeft}
              alt=""
              className="landing__line landing__line-left"
            />
            <img
              src={LineRight}
              alt=""
              className="landing__line landing__line-right"
            />
          </div>
        </div>

        <div className="landing__main-about">
          <div className="landing__main-about-block">
            <p className="landing__main-about-title">About Us</p>
            <p className="landing__main-about-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letteers, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishg packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'loret is ipsum' will
              uncover many web sites still in their infancy.
            </p>
          </div>
        </div>
        <img
          src={LineAboutTop}
          alt=""
          className="landing__line-about landing__line-about-top"
        />
        <img
          src={LineAboutBottom}
          alt=""
          className="landing__line-about landing__line-about-bottom"
        />
      </div>
    </div>
  );
};

export default LandingPage;
