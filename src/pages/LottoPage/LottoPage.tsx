import React, { FC } from "react";
import Header from "../../components/header/Header";
import Participants from "../../components/Participants/Participants";
import LineTop from "../../assets/img/lotto/line-top.png";
import LineBottom from "../../assets/img/lotto/line-bottom.png";
import "../../index.scss";
import "./LottoPage.scss";
import { useWeb3React } from "@web3-react/core";

const LottoPage: FC = () => {
  const { account, connector, activate } = useWeb3React();

  console.log("connector", connector);
  return (
    <div className="wrapper wrapper-lotto">
      <Header />
      <div className="lotto">
        <div className="lotto-row">
          <Participants />
          <div className="lotto-timer">
            <p>NEXT DRAW IN</p>
            <p>HOW MUCH XEN YOU WANT TO TO ENTER INTO DRAW </p>
            <div className="lotto__block-scroll">
              <div className="lotto__block-text">
                <p>20,000</p>
                <p>XEN</p>
                <p>Enter draw</p>
              </div>
              <div className="lotto__block-subtext">
                <p>current chance to win 1.37%</p>
              </div>
            </div>
            <div className="lotto__bet">
              <p>AutoBet is Off</p>
              <p>Enable to enter new rounds automatically</p>
            </div>
          </div>
          <div>
            <div className="lotto__prize">
              <p>Next Lotto Prize</p>
              <p>18,567,000</p>
            </div>
            <div className="lotto__stats">
              <p>My Stats</p>
            </div>
            <div className="lotto__entry">
              <p>My Entry</p>
              <p>
                20,000<span>XEN</span>
              </p>
            </div>
            <div className="lotto__chance">
              <p>My Current Chance Of Winning</p>
              <p>1.37%</p>
            </div>
            <div className="lotto__winning">
              <p>My Total Winnings To Date</p>
              <p>
                125,567,000<span>XEN</span>
              </p>
            </div>
          </div>
          <div>
            <p>Previous Winners</p>
          </div>
        </div>
      </div>
      <div className="lotto__footer">
        <div className="lotto__footer-block">
          <img
            src={LineTop}
            alt=""
            className="lotto__footer-line lotto__footer-line-top"
          />
          <div className="landing__block-text">
            <p className="landing__block-title">Next Lotto Prize</p>
            <p className="landing__block-numbers">
              18,567,000<span className="landing__block-span">XEN</span>
            </p>
          </div>
          <img
            src={LineTop}
            alt=""
            className="lotto__footer-line lotto__footer-line-center"
          />
          <div className="landing__block-text">
            <p className="landing__block-title">Next Lotto Burn</p>
            <p className="landing__block-numbers">
              18,567,000<span className="landing__block-span">XEN</span>
            </p>
          </div>
          <img
            src={LineBottom}
            alt=""
            className="lotto__footer-line lotto__footer-line-bottom"
          />
        </div>
        <div className="lotto__footer-block">
          <img
            src={LineTop}
            alt=""
            className="lotto__footer-line lotto__footer-line-top"
          />
          <div className="landing__block-text">
            <p className="landing__block-title">Lotto Prize All Time</p>
            <p className="landing__block-numbers">
              1,108,567,000<span className="landing__block-span">XEN</span>
            </p>
          </div>
          <img
            src={LineTop}
            alt=""
            className="lotto__footer-line lotto__footer-line-center"
          />
          <div className="landing__block-text">
            <p className="landing__block-title">Lotto Burn All Time</p>
            <p className="landing__block-numbers">
              18,567,000<span className="landing__block-span">XEN</span>
            </p>
          </div>
          <img
            src={LineBottom}
            alt=""
            className="lotto__footer-line lotto__footer-line-bottom"
          />
        </div>
        <div className="lotto__footer-block">
          <img
            src={LineTop}
            alt=""
            className="lotto__footer-line lotto__footer-line-top"
          />
          <div className="landing__block-text">
            <p className="landing__block-title">Total Draw All Time</p>
            <p className="landing__block-numbers">
              2574<span className="landing__block-span">XEN Draws</span>
            </p>
          </div>
          <img
            src={LineTop}
            alt=""
            className="lotto__footer-line lotto__footer-line-center"
          />
          <div className="landing__block-text">
            <p className="landing__block-title">Total Winner All Time</p>
            <p className="landing__block-numbers">
              567<span className="landing__block-span">Players</span>
            </p>
          </div>
          <img
            src={LineBottom}
            alt=""
            className="lotto__footer-line lotto__footer-line-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default LottoPage;
