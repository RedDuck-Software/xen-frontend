import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { FC, useState } from "react";
import { XENToken__factory } from "../../typechain/factories/XENToken__factory";
import Circle from "../../assets/circle.svg";
import "../../index.css";
import "../DepositPage/DepositPage.css";
import "./AccountPage.css";

const AccountPage: FC = () => {
  return (
    <div className="background">
      <div className="deposit">
        <div className="deposit__sidebar">
          <h1 className="landing__title">BurnXEN.io</h1>
          <ul>
            <li>
              <a href="/lotto-page"> XEN Lotto</a>{" "}
            </li>
            <li>
              <a href="">
                Roulette<span>Coming soon</span>
              </a>
            </li>
            <li>
              <a href="">
                Poker<span>Coming soon</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="deposit__links">
          <p>
            <a href="/deposit-page">Deposit</a>
          </p>
          <p>Withdraw</p>
          <div>
            <p>Low on Balance Deposit now below</p>
          </div>
        </div>
        <div>
          <span>Balance</span>
          <p>326,565 XEN</p>
        </div>
        <div>Ethereum dropdown</div>
        <div>
          <img src={Circle} alt="circle" />
          <span>
            <a href="/account-page">ACC</a>{" "}
          </span>
        </div>
      </div>
      <div className="account__block">
        <h1 className="account__title">Your account</h1>
      </div>
    </div>
  );
};

export default AccountPage;
