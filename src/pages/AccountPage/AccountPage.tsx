import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { FC, useState } from "react";
import { XENToken__factory } from "../../typechain/factories/XENToken__factory";
import Circle from "../../assets/circle.svg";
import "../../index.scss";
import "../DepositPage/DepositPage.scss";
import "./AccountPage.scss";
import Header from "../../components/header/Header";
import Logo from "../../assets/account/Vector 4144.png";
import Copy from "../../assets/account/CopyImg.png";
import Corner_1 from "../../assets/deposit/Vector 4140.png";
import Corner_2 from "../../assets/deposit/Vector 4141.png";
import Corner_3 from "../../assets/deposit/Vector 4142.png";
import Corner_4 from "../../assets/deposit/Vector 4143.png";
import Stick_1 from "../../assets/deposit/Group 22724.png";
import Stick_2 from "../../assets/deposit/Group 22725.png";

const AccountPage: FC = () => {
  return (
    <div className="background">
      <Header />
      <div className="wrap">
        <div className="account">
          <div className="account__title">My Account</div>
          <div className="account__block">
            <div className="deposit__block-corner-1">
              <img src={Corner_1} alt="corner" />
            </div>
            <div className="deposit__block-corner-2">
              <img src={Corner_2} alt="corner" />
            </div>
            <div className="deposit__block-corner-3">
              <img src={Corner_3} alt="corner" />
            </div>
            <div className="deposit__block-corner-4">
              <img src={Corner_4} alt="corner" />
            </div>
            <div className="account__block-info">
              <img src={Logo} alt="logo" />
              <div className="account__block-address">
                ag658dAB847BHT8387829BJHK938485DRT958895
                <div className="account__block-copy-img">
                  <img src={Copy} alt="copy" />
                </div>
              </div>
            </div>
            <div className="account__block-input">
              <input type="text" value="My Custome Name" />
            </div>
            <div className="account__block-save">
              <button className="account__block-save-button">SAVE</button>
            </div>
          </div>
          <div className="account__transaction-history">
            <div className="account__transaction-history-title">
              Transaction History
            </div>
            <div className="account__transaction-histoty-statistic">
              <div className="statistic__stick-1">
                <img src={Stick_1} alt="stick" />
              </div>
              <div className="statistic__stick-2">
                <img src={Stick_2} alt="stick" />
              </div>
              <div className="statistic__stick-3">
                <img src={Stick_2} alt="stick" />
              </div>
              <div className="statistic__stick-4">
                <img src={Stick_1} alt="stick" />
              </div>
              <ul className="statistic-list statistic-list-header">
                <li>DATE</li>
                <li>TOKEN</li>
                <li>Debit/Credit</li>
                <li>Possible Win</li>
                <li>GAME</li>
                <li>BET</li>
                <li>CHANCE</li>
                <li>Win/Lose</li>
              </ul>

              <ul className="statistic-list">
                <li>12/10/22</li>
                <li className="statistic-list__xen">XEN</li>
                <li className="green">10,768,89</li>
                <li className="blue">50,768,89</li>
                <li>XEN lotto</li>
                <li>Auto</li>
                <li>85.22%</li>
                <li className="green">Win</li>
              </ul>

              <ul className="statistic-list">
                <li>12/10/22</li>
                <li className="statistic-list__xen">XEN</li>
                <li className="red">10,768,89</li>
                <li className="blue">20,239,89</li>
                <li>XEN lotto</li>
                <li>Manual</li>
                <li>5.75%</li>
                <li className="red">Lose</li>
              </ul>
              <ul className="statistic-list">
                <li>12/10/22</li>
                <li className="statistic-list__xen">XEN</li>
                <li className="green">27,768,89</li>
                <li className="blue">100,989,33</li>
                <li>XEN lotto</li>
                <li>Auto</li>
                <li>57.44%</li>
                <li className="green">Win</li>
              </ul>

              <ul className="statistic-list">
                <li>12/10/22</li>
                <li className="statistic-list__xen">XEN</li>
                <li className="red"> 10,768,89</li>
                <li className="blue">30,376,22</li>
                <li>XEN lotto</li>
                <li>Manual</li>
                <li>5.75%</li>
                <li className="red">Lose</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
