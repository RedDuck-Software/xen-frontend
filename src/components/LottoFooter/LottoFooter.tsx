import React from "react";
import { ethers } from "ethers";

import LineTop from "../../assets/img/lotto/line-top.png";
import LineBottom from "../../assets/img/lotto/line-bottom.png";

import "../../index.scss";

type LottoFooterProps = {
  nextLottoPrize: string | undefined;
  lottoPriceAllTime: string | undefined;
  totalWinnerAllTime: string | undefined;
  totalDrawAllTime: string | undefined;
  lastWonAmount: string | undefined;
  totalParticipants: string | undefined;
};

const LottoFooter = ({
  nextLottoPrize,
  lottoPriceAllTime,
  totalWinnerAllTime,
  totalDrawAllTime,
  lastWonAmount,
  totalParticipants,
}: LottoFooterProps) => {
  return (
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
            {nextLottoPrize
              ? ethers.utils
                  .formatEther(nextLottoPrize)
                  .replace(/\.(\d{1,2}).*$/, ".$1")
              : ""}
            <span className="landing__block-span">XEN</span>
          </p>
        </div>
        <img
          src={LineTop}
          alt=""
          className="lotto__footer-line lotto__footer-line-center"
        />
        <div className="landing__block-text">
          <p className="landing__block-title">Last Won amount</p>
          <p className="landing__block-numbers">
            {lastWonAmount
              ? ethers.utils
                  .formatEther(lastWonAmount)
                  .replace(/\.(\d{1,2}).*$/, ".$1")
              : ""}
            <span className="landing__block-span">XEN</span>
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
            {lottoPriceAllTime
              ? ethers.utils
                  .formatEther(lottoPriceAllTime)
                  .replace(/\.(\d{1,2}).*$/, ".$1")
              : ""}
            <span className="landing__block-span">XEN</span>
          </p>
        </div>
        <img
          src={LineTop}
          alt=""
          className="lotto__footer-line lotto__footer-line-center"
        />
        <div className="landing__block-text">
          <p className="landing__block-title">Total participants</p>
          <p className="landing__block-numbers">
            {totalParticipants}
            <span className="landing__block-span">XEN</span>
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
            {totalDrawAllTime}
            <span className="landing__block-span">XEN Draws</span>
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
            {totalWinnerAllTime ? totalWinnerAllTime : ""}
            <span className="landing__block-span">Players</span>
          </p>
        </div>
        <img
          src={LineBottom}
          alt=""
          className="lotto__footer-line lotto__footer-line-bottom"
        />
      </div>
    </div>
  );
};

export default LottoFooter;
