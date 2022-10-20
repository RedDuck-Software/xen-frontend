import React, { FC } from "react";
import Header from "../../components/Header/Header";
import Participants from "../../components/Participants/Participants";
import "../../index.scss";
import "./LottoPage.scss";

const LottoPage: FC = () => {
  return (
    <div className="wrapper wrapper-lotto">
      <Header />
      <div className="lotto-bg">
        <div className="lotto">
          <div className="lotto-row">
            <Participants />
            <div className="lotto-timer">
              <p>NEXT DRAW IN</p>
              {/* <p>00:56:46</p> */}
              {/* <p>{timer}</p> */}
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
            <p>Next Lotto Prize</p>
            <p>
              18,567,000<span>XEN</span>
            </p>
          </div>
          <div className="lotto__footer-block">
            <p>Next Lotto Burn</p>
            <p>
              1,856,700<span>XEN</span>
            </p>
          </div>
          <div className="lotto__footer-block">
            <p>Number of players</p>
            <p>
              22<span>XEN</span>
            </p>
          </div>
          <div className="lotto__footer-block">
            <p>Total Draws All Time</p>
            <p>
              2573<span>XEN</span>
            </p>
          </div>
          <div className="lotto__footer-block">
            <p>Lotto Prize All Time</p>
            <p>
              1,108,567,000<span>XEN</span>
            </p>
          </div>
          <div className="lotto__footer-block">
            <p>XEN Burn All Time</p>
            <p>
              108,567,000<span>XEN</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LottoPage;
