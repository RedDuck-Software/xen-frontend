import React, { FC } from "react";

import "./Header.scss";
import "../../index.scss";

import RectanglesLeft from "../../assets/bg/rectangles-left.png";
import RectanglesRight from "../../assets/bg/rectangles-right.png";
import Cubes from "../../assets/icons/cubes.svg";
import Roullete from "../../assets/icons/roulette.svg";
import Cards from "../../assets/icons/cards.svg";

import { useWeb3React } from "@web3-react/core";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../state/hooks";

const Header: FC = () => {
  const depositedBalance = useAppSelector(
    (state) => state.balances.depositBalance
  );
  const { account } = useWeb3React();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div>
      <img src={RectanglesLeft} alt="" className="rectangles__left" />
      <img
        src={RectanglesRight}
        alt=""
        className="rectangles__right"
        style={pathname === "/deposit-page" ? { bottom: "90px" } : {}}
      />
      <div className="header">
        <ul className="header__list">
          <li className="header__btn-lotto">
            <a className="header__link" onClick={() => navigate("/lotto-page")}>
              <img src={Cubes} alt="" className="header__icon" /> XEN Lotto
            </a>
          </li>
          <li className="header__btn">
            <a href="" className="header__link">
              <img src={Roullete} alt="" className="header__icon" />
              Roulette
            </a>
          </li>
          <li className="header__btn">
            <a href="" className="header__link">
              <img src={Cards} alt="" className="header__icon" />
              Poker
            </a>
          </li>
          <li className="header__btn-center">
            <a href="/" className="header__link">
              BurnXEN.io
            </a>
          </li>
          <li className="header__btn header__btn-right">
            <a href="" className="header__link">
              {account ? (
                account?.slice(0, 4) + "..." + account?.slice(38, 42)
              ) : (
                <button onClick={() => navigate("/")}>Connect wallet</button>
              )}
            </a>
          </li>
          <li className="header__btn header__btn-right">
            <a href="" className="header__link">
              {depositedBalance} <span className="header__span">XEN</span>
            </a>
          </li>
          <li className="header__btn header__btn-right">
            <a href="" className="header__link">
              BSC Testnet<span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
