import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { FC, useContext, useEffect, useState } from "react";
import { XENToken__factory } from "../../typechain/factories/XENToken__factory";
import "../../index.scss";
import "../DepositPage/DepositPage.scss";
import { Lottery__factory } from "../../typechain";
import { Context } from "../../Context";
import { injected } from "../../helpers/connectors";
import Header from "../../components/header/Header";
import DepositButton from "../../components/DepositButton/DepositButtton";
import Slider from "../../assets/deposit/slider.png";
import MetaMaskPng from "../../assets/deposit/MetaMask_Fox 1.png";
import Corner_1 from "../../assets/deposit/Vector 4140.png";
import Corner_2 from "../../assets/deposit/Vector 4141.png";
import Corner_3 from "../../assets/deposit/Vector 4142.png";
import Corner_4 from "../../assets/deposit/Vector 4143.png";
import Stick_1 from "../../assets/deposit/Group 22724.png";
import Stick_2 from "../../assets/deposit/Group 22725.png";
import { approveErc20 } from "../../helpers/utils/approve";

const DepositPage: FC = () => {
  const { account, connector, activate } = useWeb3React();
  const [amount, setAmount] = useState<any>();
  const [accountBalance, setAccountBalance] = useState<any>();
  const [showModal, setShowModal] = useState<boolean>();
  const [timer, setTimer] = useState<any>();
  const [totalPayout, setTotalPayout] = useState<any>();
  const [totalAmount, setTotalAmount] = useState<any>();
  const [totalGamesPlayed, setTotalGamesPlayed] = useState<any>();
  const [lastWinner, setLastWinner] = useState<any>();
  const [lastWonAmount, setLastWonAmount] = useState<any>();
  const [selectedAmountToDeposit, setSelectedAmountToDeposit] = useState<any>();
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log("err");
      console.log(ex);
    }
  }

  async function ApproveAndDeposit() {
    if (!connector) return alert("!connector");
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);
    const Erc20Contract = XENToken__factory.connect(
      "0x82Fbc13cB7e1046ff9F878E7ddcF1c5190416113",
      signer
    );

    const tx = await Erc20Contract.approve(
      "0xd726259899a2d52da68A8eda4C74719F445ED359",
      ethers.utils.parseEther(selectedAmountToDeposit.toString())
    );
    await tx.wait();

    const Lottery = Lottery__factory.connect(
      "0xd726259899a2d52da68A8eda4C74719F445ED359",
      signer
    );

    const tx2 = await Lottery.participate(
      ethers.utils.parseEther(selectedAmountToDeposit.toString())
    );
    await tx2.wait();
  }
  async function getXenBalance() {
    if (!connector || !account) return "!args";

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);

    const Erc20Contract = XENToken__factory.connect(
      "0x82Fbc13cB7e1046ff9F878E7ddcF1c5190416113",
      signer
    );

    console.log("accountaccount", account);
    console.log("signersigner", signer);
    console.log("connector", connector);

    const value = await Erc20Contract.balanceOf(account);
    console.log(value);
    setAccountBalance(value);
  }

  // async function getTime() {
  //   if (!connector || !account) return "!args";

  //   const provider = new ethers.providers.Web3Provider(
  //     await connector.getProvider()
  //   );
  //   const signer = provider.getSigner(0);

  //   const Lottery = Lottery__factory.connect(
  //     "0xd726259899a2d52da68A8eda4C74719F445ED359",
  //     signer
  //   );
  //   const nextRound = await (
  //     await Lottery.nextParticipateTimestamp()
  //   ).toString();
  //   console.log("nextRound", nextRound);
  //   const date = new Date(+nextRound * 1000);
  //   console.log(date);

  //   setTimer(date);
  // }

  // async function getTotalInfo() {
  //   if (!connector || !account) return "!args";

  //   const provider = new ethers.providers.Web3Provider(
  //     await connector.getProvider()
  //   );
  //   const signer = provider.getSigner(0);

  //   const Lottery = Lottery__factory.connect(
  //     "0xd726259899a2d52da68A8eda4C74719F445ED359",
  //     signer
  //   );
  //   console.log("dasdas");
  //   const totalGamesPlayed = await (
  //     await Lottery.totalGamesPlayed()
  //   ).toString();
  //   const totalPayout = await (await Lottery.totalPayoutToday()).toString();
  //   const totalAmount = await (await Lottery.totalAmount()).toString();
  //   const lastWinner = await (await Lottery.lastWinner()).toString();
  //   const lastWonAmount = await (await Lottery.lastWonAmount()).toString();

  //   console.log("totalPayout", totalPayout);
  //   console.log("totalAmount before set", totalAmount);
  //   console.log("totalGamesPlayed", totalGamesPlayed);

  //   setLastWinner(lastWinner);
  //   setLastWonAmount(lastWonAmount);
  //   setTotalGamesPlayed(totalGamesPlayed);
  //   setTotalPayout(totalPayout);
  //   setTotalAmount(totalAmount);
  // }
  useEffect(() => {
    if (!connector) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
    if (connector) {
      console.log("here");
      console.log("connector", account);
      getXenBalance();
      // getTime();
      // getTotalInfo();
    }
  }, []);

  console.log("connector", connector);
  return (
    <div className="background">
      <Header />
      <div className="wrap">
        <div className="deposit">
          <div className="deposit__links">
            <div className="withraw-btn">
              <DepositButton type={"outline"}>WITHDRAW</DepositButton>
            </div>
            <div className="deposit-btn">
              <DepositButton type={"primary-blue"}>DEPOSIT</DepositButton>
            </div>
          </div>
          <div className="deposit__block">
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
            <div className="deposit__block-title">
              How much you want to withdraw?
            </div>
            <div className="deposit__block-balance">
              {selectedAmountToDeposit
                ? selectedAmountToDeposit.toString()
                : "0"}
              <span>XEN</span>
            </div>
            <div className="deposit__block-input">
              <input
                type="range"
                min="0"
                max={accountBalance ? accountBalance.toString() : "0"}
                onChange={(e) => setSelectedAmountToDeposit(e.target.value)}
              />
            </div>
            <div className="deposit__block-btn">
              <button className="landing__btn" onClick={ApproveAndDeposit}>
                <img src={MetaMaskPng} />
                Deposit
              </button>
            </div>
          </div>
          <div className="deposit__text">
            <div className="col">
              <div className="deposit__text-stick-1">
                <img src={Stick_1} alt="stick" />
              </div>
              <div className="deposit__text-stick-2">
                <img src={Stick_2} alt="stick" />
              </div>
              <div className="deposit__text-stick-3">
                <img src={Stick_2} alt="stick" />
              </div>
              <div className="deposit__text-stick-4">
                <img src={Stick_1} alt="stick" />
              </div>

              <div className="deposit__text-item">
                <p className="deposit__title">How can I deposit tokens?</p>
                <p>
                  1.Enter the amount of tokens you wish to deposit from your
                  metamask wallet to your burnXEN.io account balance. 2.Accept
                  the transaction in the metamask popup. 3.Your tokens will be
                  deposited in accordance with transaction times on the network
                  you are depositing from.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="deposit__text-stick-1">
                <img src={Stick_1} alt="stick" />
              </div>
              <div className="deposit__text-stick-2">
                <img src={Stick_2} alt="stick" />
              </div>
              <div className="deposit__text-stick-3">
                <img src={Stick_2} alt="stick" />
              </div>
              <div className="deposit__text-stick-4">
                <img src={Stick_1} alt="stick" />
              </div>
              <div className="deposit__text-item">
                <p className="deposit__title ">When will I see my balance?</p>
                <p>
                  After 1 confirmation on the blockchain you are depositing om.
                  If you have any issues try manual page refresh and if that
                  doesnt help contact support.
                </p>
                <p className="deposit__title top">Why only XEN and ?</p>
                <p>
                  Our mission is to bring adoption to the XEN ecosystem and add
                  utility to the token. Most importantly all we want to increase
                  XEN Burn to help reduce the supply
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
