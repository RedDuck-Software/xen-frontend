import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { FC, useState } from "react";
import { XENToken__factory } from "../../typechain/factories/XENToken__factory";
import Circle from "../../assets/circle.svg";
import "../../index.scss";
import "../DepositPage/DepositPage.scss";
import "./AccountPage.scss";
import Header from "../../components/Header/Header";

const AccountPage: FC = () => {
  return (
    <div className="background">
      <Header />
      <div className="account__block">
        <h1 className="account__title">Your account</h1>
      </div>
    </div>
  );
};

export default AccountPage;
