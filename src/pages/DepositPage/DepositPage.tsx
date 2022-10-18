import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { FC, useState } from "react";
import { XENToken__factory } from "../../typechain/factories/XENToken__factory";
import Circle from "../../assets/circle.svg";
import "../../index.css";
import "../DepositPage/DepositPage.css";

const DepositPage: FC = () => {
  const { account, connector, deactivate } = useWeb3React();
  const [amount, setAmount] = useState<any>();

  async function approveErc20() {
    ///erc 20 lottery token addr 0x35183828ffd461Ac38082D3efF8b3e6689AD5750
    //lottery contract 0x3Bc65Fbae3Fe4553e6C492F48c0e661316fA7B33

    if (!connector) return alert("!connector");
    const provider = new ethers.providers.Web3Provider(await connector.getProvider());

    const signer = provider.getSigner(0);
    const Erc20Contract = XENToken__factory.connect(
      "0x35183828ffd461Ac38082D3efF8b3e6689AD5750",
      signer
    );

    await Erc20Contract.approve(
      "0x3Bc65Fbae3Fe4553e6C492F48c0e661316fA7B33",
      ethers.utils.parseEther(amount)
    );
  }

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
          <a href="/deposit-page">Deposit</a>
          <a href="/deposit-page">Withdraw</a>
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
      <div className="deposit__block"></div>
      <div className="deposit__block-text">
        <div>
          <p>How can I deposit tokens?</p>
          <p>
            1.Enter the amount of tokens you wish to deposit from your metamask wallet to your
            burnXEN.io account balance. 2.Accept the transaction in the metamask popup. 3.Your
            tokens will be deposited in accordance with transaction times on the network you are
            depositing from.
          </p>
          <p>When will I see my balance?</p>
          <p>
            After 1 confirmation on the blockchain you are depositing om. If you have any issues try
            manual page refresh and if that doesnt help contact support.
          </p>
          <p>Why only XEN and ?</p>
          <p>
            Our mission is to bring adoption to the XEN ecosystem and add utility to the token. Most
            importantly all we want to increase XEN Burn to help reduce the supply
          </p>
        </div>
      </div>
      <p>INPUT BALANCE OF XEN TO DEPOSIT</p>
      <input type="number" onChange={(e) => setAmount(e.target.value)}></input>
      <button onClick={approveErc20}>Deposit</button>
    </div>
  );
};

export default DepositPage;
