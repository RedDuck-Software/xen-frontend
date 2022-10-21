import React from "react";

import LineTop from "../../assets/img/lotto/line-top.png";
import LineBottom from "../../assets/img/lotto/line-bottom.png";

import "../../index.scss";

const LottoFooter = () => {
  return (
    <div className="lotto__footer">
      <div className="lotto__footer-block">
        <img src={LineTop} alt="" className="lotto__footer-line lotto__footer-line-top" />
        <div className="landing__block-text">
          <p className="landing__block-title">Next Lotto Prize</p>
          <p className="landing__block-numbers">
            18,567,000<span className="landing__block-span">XEN</span>
          </p>
        </div>
        <img src={LineTop} alt="" className="lotto__footer-line lotto__footer-line-center" />
        <div className="landing__block-text">
          <p className="landing__block-title">Next Lotto Burn</p>
          <p className="landing__block-numbers">
            18,567,000<span className="landing__block-span">XEN</span>
          </p>
        </div>
        <img src={LineBottom} alt="" className="lotto__footer-line lotto__footer-line-bottom" />
      </div>
      <div className="lotto__footer-block">
        <img src={LineTop} alt="" className="lotto__footer-line lotto__footer-line-top" />
        <div className="landing__block-text">
          <p className="landing__block-title">Lotto Prize All Time</p>
          <p className="landing__block-numbers">
            1,108,567,000<span className="landing__block-span">XEN</span>
          </p>
        </div>
        <img src={LineTop} alt="" className="lotto__footer-line lotto__footer-line-center" />
        <div className="landing__block-text">
          <p className="landing__block-title">Lotto Burn All Time</p>
          <p className="landing__block-numbers">
            18,567,000<span className="landing__block-span">XEN</span>
          </p>
        </div>
        <img src={LineBottom} alt="" className="lotto__footer-line lotto__footer-line-bottom" />
      </div>
      <div className="lotto__footer-block">
        <img src={LineTop} alt="" className="lotto__footer-line lotto__footer-line-top" />
        <div className="landing__block-text">
          <p className="landing__block-title">Total Draw All Time</p>
          <p className="landing__block-numbers">
            2574<span className="landing__block-span">XEN Draws</span>
          </p>
        </div>
        <img src={LineTop} alt="" className="lotto__footer-line lotto__footer-line-center" />
        <div className="landing__block-text">
          <p className="landing__block-title">Total Winner All Time</p>
          <p className="landing__block-numbers">
            567<span className="landing__block-span">Players</span>
          </p>
        </div>
        <img src={LineBottom} alt="" className="lotto__footer-line lotto__footer-line-bottom" />
      </div>
    </div>
  );
};

export default LottoFooter;
