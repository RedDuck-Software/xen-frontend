import React, { FC } from "react";
import "./Header.scss";
import "../../index.scss";
import RectanglesLeft from "../../assets/bg/rectangles-left.png";
import RectanglesRight from "../../assets/bg/rectangles-right.png";

const Header: FC = () => {
  return (
    <div>
      <img src={RectanglesLeft} alt="" className="rectangles__left" />
      <img src={RectanglesRight} alt="" className="rectangles__right" />
      <div className="header">
        <ul className="header__list">
          <li>
            <a href="">XEN Lotto</a>
          </li>
          <li className="header__btn">
            <a href="">Roulette</a>
          </li>
          <li>
            <a href="">Poker</a>
          </li>
          <li>
            <a href="">BurnXEN.io</a>
          </li>
          <li>
            <a href="">Connect Wallet</a>
          </li>
          <li>
            <a href="">
              000,000,00 <span>XEN</span>
            </a>
          </li>
          <li>
            <a href="">
              Ethereum<span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
