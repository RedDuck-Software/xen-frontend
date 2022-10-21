import React, { FC } from "react";
import Header from "../../components/header/Header";
import Participants from "../../components/Participants/Participants";

import "../../index.scss";
import "./LottoPage.scss";
import { useWeb3React } from "@web3-react/core";
import LottoFooter from "../../components/LottoFooter/LottoFooter";
import LottoStats from "../../components/LottoStats/LottoStats";
import ArrowLeft from "../../assets/img/lotto/timer/arr-left.png";
import ArrowRight from "../../assets/img/lotto/timer/arr-right.png";
import CircleTimer from "../../assets/img/lotto/timer/circle-3.png";
import CircleTimerFirst from "../../assets/img/lotto/timer/circle-1.png";
import CircleTimerSecond from "../../assets/img/lotto/timer/circle-2.png";

const LottoPage: FC = () => {
  const { account, connector, activate } = useWeb3React();

  console.log("connector", connector);
  return (
    <div className="wrapper wrapper-lotto">
      <Header />
      <div className="lotto">
        <div className="lotto-row">
          <Participants />
          <div className="lotto__timer">
            <div className="lotto__timer-block">
              <p className="lotto__timer-block__title">Next Draw In</p>
              <p className="lotto__timer-block__date">00:58:23</p>
              <p className="lotto__timer-block__prize">Lotto Prize</p>
              <p className="lotto__timer-block__numbers">
                🔥18,465,657 <span className="lotto__timer-block__span">XEN</span>
              </p>
            </div>
            <img src={ArrowLeft} alt="" className="lotto__timer-img__arr-left" />
            <img src={ArrowRight} alt="" className="lotto__timer-img__arr-right" />
            <img src={CircleTimer} alt="" className="lotto__timer-img__circle" />
            {/* <img src={CircleTimerFirst} alt="" className="lotto__timer-img" />
            <img src={CircleTimerSecond} alt="" className="lotto__timer-img" /> */}
            <div className="lotto__timer-draw">
              <input type="text" placeholder="Enter Amount" className="lotto__timer-draw__input" />
              <button className="lotto__timer-draw__button">ENTER DRAW</button>
            </div>
          </div>

          <LottoStats />

        </div>
      </div>
      <LottoFooter />
    </div>
  );
};

export default LottoPage;
