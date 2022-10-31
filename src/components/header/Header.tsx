import React, { FC, useEffect, useState } from "react";

import "./Header.scss";
import "../../index.scss";

import RectanglesLeft from "../../assets/bg/rectangles-left.png";
import RectanglesRight from "../../assets/bg/rectangles-right.png";
import Cubes from "../../assets/icons/cubes.svg";
import Roullete from "../../assets/icons/roulette.svg";
import Cards from "../../assets/icons/cards.svg";

import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";
import { Lottery__factory, XENToken__factory } from "../../typechain";
import { ethers } from "ethers";
import { LOTTERYADDRESS, XENADDRESS } from "../../helpers/constants";

const Header: FC = () => {
  const [accountBalance, setAccountBalance] = useState<any>();
  const { account, connector, activate } = useWeb3React();
  const navigate = useNavigate();

  async function getXenBalance() {
    if (!connector || !account) return "!args";

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);

    const LotteryContract = Lottery__factory.connect(LOTTERYADDRESS, signer);
    const userAddress = await signer.getAddress();
    const userContractBal = await LotteryContract.usersContractBalance(
      userAddress
    );
    // ethers.utils.formatUnits(userContractBal, 18);

    setAccountBalance(ethers.utils.formatUnits(userContractBal, 18));
    console.log("account balance: ", userContractBal.toString());
  }
  useEffect(() => {
    getXenBalance();
  });

  return (
    <div>
      <img src={RectanglesLeft} alt="" className="rectangles__left" />
      <img src={RectanglesRight} alt="" className="rectangles__right" />
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
              {account
                ? account?.slice(0, 4) + "..." + account?.slice(38, 42)
                : "Connect Wallet "}
            </a>
          </li>
          <li className="header__btn header__btn-right">
            <a href="" className="header__link">
              {accountBalance ? +accountBalance : "000,000"}{" "}
              <span className="header__span">XEN</span>
            </a>
          </li>
          <li className="header__btn header__btn-right">
            <a href="" className="header__link">
              Goerli Testnet<span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
