import React, { FC, useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import Header from "../../components/Header/Header";
import Participants from "../../components/Participants/Participants";
import LottoFooter from "../../components/LottoFooter/LottoFooter";
import LottoStats from "../../components/LottoStats/LottoStats";
import { XENToken__factory } from "../../typechain/factories/XENToken__factory";
import { Lottery__factory } from "../../typechain";
import { injected } from "../../helpers/connectors";

import ArrowLeft from "../../assets/img/lotto/timer/arr-left.png";
import ArrowRight from "../../assets/img/lotto/timer/arr-right.png";
import CircleTimer from "../../assets/img/lotto/timer/circle-3.png";

import "../../index.scss";
import "./LottoPage.scss";

const LottoPage: FC = () => {
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
    const provider = new ethers.providers.Web3Provider(await connector.getProvider());

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

    const Lottery = Lottery__factory.connect("0xd726259899a2d52da68A8eda4C74719F445ED359", signer);

    const tx2 = await Lottery.participate(
      ethers.utils.parseEther(selectedAmountToDeposit.toString())
    );
    await tx2.wait();
  }
  async function getXenBalance() {
    if (!connector || !account) return "!args";

    const provider = new ethers.providers.Web3Provider(await connector.getProvider());
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

  async function getTime() {
    if (!connector || !account) return "!args";

    const provider = new ethers.providers.Web3Provider(await connector.getProvider());
    const signer = provider.getSigner(0);

    const Lottery = Lottery__factory.connect("0xd726259899a2d52da68A8eda4C74719F445ED359", signer);
    const nextRound = await (await Lottery.nextParticipateTimestamp()).toString();
    console.log("nextRound", nextRound);
    const date = new Date(+nextRound * 1000);
    console.log(date);

    setTimer(date);
  }

  async function getTotalInfo() {
    if (!connector || !account) return "!args";

    const provider = new ethers.providers.Web3Provider(await connector.getProvider());
    const signer = provider.getSigner(0);

    const Lottery = Lottery__factory.connect("0xd726259899a2d52da68A8eda4C74719F445ED359", signer);
    console.log("dasdas");
    const totalGamesPlayed = await (await Lottery.totalGamesPlayed()).toString();
    const totalPayout = await (await Lottery.totalPayoutToday()).toString();
    const totalAmount = await (await Lottery.totalAmount()).toString();
    const lastWinner = await (await Lottery.lastWinner()).toString();
    const lastWonAmount = await (await Lottery.lastWonAmount()).toString();

    console.log("totalPayout", totalPayout);
    console.log("totalAmount before set", totalAmount);
    console.log("totalGamesPlayed", totalGamesPlayed);

    setLastWinner(lastWinner);
    setLastWonAmount(lastWonAmount);
    setTotalGamesPlayed(totalGamesPlayed);
    setTotalPayout(totalPayout);
    setTotalAmount(totalAmount);
  }
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
      getTime();
      getTotalInfo();
    }
  }, []);

  console.log("connector", connector);
  return (
    <div className="wrapper wrapper-lotto">
      <Header />
      <div className="lotto">
        <div className="lotto-row">
          <Participants />
          <div className="lotto__timer">
            <div className="lotto__timer-block">
              <p className="lotto__timer-block__title">Next Draw In</p>
              <p className="lotto__timer-block__date">00:58:23</p>
              <p className="lotto__timer-block__prize">Lotto Prize</p>
              <p className="lotto__timer-block__numbers">
                🔥18,465,657 <span className="lotto__timer-block__span">XEN</span>
              </p>
            </div>
            <img src={ArrowLeft} alt="" className="lotto__timer-img__arr-left" />
            <img src={ArrowRight} alt="" className="lotto__timer-img__arr-right" />
            <img src={CircleTimer} alt="" className="lotto__timer-img__circle" />
            <div className="lotto__timer-draw">
              <input type="text" placeholder="Enter Amount" className="lotto__timer-draw__input" />
              <button className="lotto__timer-draw__button">ENTER DRAW</button>
            </div>
          </div>

          <LottoStats />

        </div>
      </div>
      <LottoFooter
        totalGamesPlayed={totalGamesPlayed}
        totalPayout={totalPayout}
        totalAmount={totalAmount}
        lastWinner={lastWinner}
        lastWonAmount={lastWonAmount}
      />
    </div>
  );
};

export default LottoPage;
