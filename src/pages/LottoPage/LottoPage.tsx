import React, { FC, useState, useEffect, useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { LOTTERYADDRESS, XENADDRESS } from "../../helpers/constants";

import Header from "../../components/header/Header";
import Participants from "../../components/Participants/Participants";
import LottoFooter from "../../components/LottoFooter/LottoFooter";
import LottoStats from "../../components/LottoStats/LottoStats";
import { XENToken__factory } from "../../typechain/factories/XENToken__factory";
import { Lottery__factory } from "../../typechain";
import { injected } from "../../helpers/connectors";

import ArrowLeft from "../../assets/img/lotto/timer/arr-left.png";
import ArrowRight from "../../assets/img/lotto/timer/arr-right.png";
import CircleTimer from "../../assets/img/lotto/timer/circle-3.png";
import BublesAvatar from "../../assets/img/lotto/timer/bubles-avatar.svg";

import "../../index.scss";
import "./LottoPage.scss";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";

const LottoPage: FC = () => {
  const countdownRef = useRef<any>(null);
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
  const [nextParticipateTimestamp, setNextParticipateTimestamp] =
    useState<number>(0);
  const [inputAmountValue, setInputAmountValue] = useState<number>(0);
  const navigate = useNavigate();
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
    const Erc20Contract = XENToken__factory.connect(XENADDRESS, signer);

    const tx = await Erc20Contract.approve(
      LOTTERYADDRESS,
      ethers.utils.parseEther(selectedAmountToDeposit.toString())
    );
    await tx.wait();

    const Lottery = Lottery__factory.connect(LOTTERYADDRESS, signer);

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

    const Erc20Contract = XENToken__factory.connect(XENADDRESS, signer);

    console.log("accountaccount", account);
    console.log("signersigner", signer);
    console.log("connector", connector);

    const value = await Erc20Contract.balanceOf(account);
    console.log(value);
    setAccountBalance(value);
  }

  async function getTime() {
    if (!connector || !account) return "!args";

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);

    const Lottery = Lottery__factory.connect(LOTTERYADDRESS, signer);
    const nextRound = await (
      await Lottery.nextParticipateTimestamp()
    ).toString();
    console.log("nextRound", nextRound);
    const date = new Date(+nextRound * 1000);
    console.log(date);

    setTimer(date);
  }

  async function getTotalInfo() {
    if (!connector || !account) return "!args";

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);

    const Lottery = Lottery__factory.connect(LOTTERYADDRESS, signer);
    console.log("dasdas");
    const totalGamesPlayed = await (
      await Lottery.totalGamesPlayed()
    ).toString();
    const totalPayout = await (await Lottery.totalPayoutToday()).toString();
    const totalAmount = await (
      await Lottery.totalAllTimePrizePool()
    ).toString();
    const lastWinner = await (await Lottery.lastWinner()).toString();
    const lastWonAmount = await (await Lottery.lastWonAmount()).toString();
    const nextParticipateTimestamp = (await Lottery.nextParticipateTimestamp())
      .mul(1000)
      .toNumber();

    console.log("totalPayout", totalPayout);
    console.log("totalAmount before set", totalAmount);
    console.log("totalGamesPlayed", totalGamesPlayed);

    setLastWinner(lastWinner);
    setLastWonAmount(lastWonAmount);
    setTotalGamesPlayed(totalGamesPlayed);
    setTotalPayout(totalPayout);
    setTotalAmount(totalAmount);
    setNextParticipateTimestamp(nextParticipateTimestamp);
  }

  const getAmount = async (amount: number) => {
    if (!connector || !account) return "!args";
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner();

    const amountContract = Lottery__factory.connect(LOTTERYADDRESS, signer);

    const tx = await amountContract.participate(amount);
    await tx.wait();
  };

  useEffect(() => {
    if (!connector) {
      navigate("/");
    }
    if (connector) {
      console.log("here");
      console.log("connector", account);
      getXenBalance();
      getTime();
      getTotalInfo();
    }
  }, []);

  useEffect(() => {
    if (countdownRef?.current && nextParticipateTimestamp) {
      countdownRef.current.start();
    }
  }, [countdownRef, nextParticipateTimestamp]);

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
              <Countdown
                ref={countdownRef}
                autoStart={true}
                date={new Date(nextParticipateTimestamp)}
                renderer={({ formatted: f }) => (
                  <p className="lotto__timer-block__date">
                    {f.hours}:{f.minutes}:{f.seconds}
                  </p>
                )}
              />
              <p className="lotto__timer-block__prize">Lotto Prize</p>
              <p className="lotto__timer-block__numbers">
                🔥18,465,657{" "}
                <span className="lotto__timer-block__span">XEN</span>
              </p>
            </div>
            <img
              src={ArrowLeft}
              alt=""
              className="lotto__timer-img__arr-left"
            />
            <img
              src={ArrowRight}
              alt=""
              className="lotto__timer-img__arr-right"
            />
            <img
              src={CircleTimer}
              alt=""
              className="lotto__timer-img__circle"
            />
            <div className="lotto__timer-draw">
              <input
                type="text"
                placeholder="Enter Amount"
                className="lotto__timer-draw__input"
                value={inputAmountValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputAmountValue(+e.target.value)
                }
              />
              <button
                onClick={() => getAmount(inputAmountValue)}
                className="lotto__timer-draw__button"
              >
                ENTER DRAW
              </button>
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
      <div className="lotto__timer-bubbles">
        <div className="lotto__timer-bubbles-L lotto__timer-bubbles-first">
          <div className="lotto__timer-bubbles-block">
            <img
              src={BublesAvatar}
              alt=""
              className="lotto__timer-bubbles-block-avatar"
            />
            <p className="lotto__timer-bubbles-block-account">
              {account
                ? account?.slice(0, 4) + "..." + account?.slice(38, 42)
                : "Connect Wallet "}
            </p>
            <p className="lotto__timer-bubbles-block-numbers">
              220K <span className="lotto__timer-bubbles-block-span">XEN</span>
            </p>
            <p className="lotto__timer-bubbles-block-percent">69%</p>
          </div>
        </div>
        <div className="lotto__timer-bubbles-L lotto__timer-bubbles-second">
          <div className="lotto__timer-bubbles-block">
            <img
              src={BublesAvatar}
              alt=""
              className="lotto__timer-bubbles-block-avatar"
            />
            <p className="lotto__timer-bubbles-block-account">
              {account
                ? account?.slice(0, 4) + "..." + account?.slice(38, 42)
                : "Connect Wallet "}
            </p>
            <p className="lotto__timer-bubbles-block-numbers">
              120K <span className="lotto__timer-bubbles-block-span">XEN</span>
            </p>
            <p className="lotto__timer-bubbles-block-percent">43%</p>
          </div>
        </div>
        <div className="lotto__timer-bubbles-L lotto__timer-bubbles-third">
          <div className="lotto__timer-bubbles-block">
            <img
              src={BublesAvatar}
              alt=""
              className="lotto__timer-bubbles-block-avatar"
            />
            <p className="lotto__timer-bubbles-block-account">
              {account
                ? account?.slice(0, 4) + "..." + account?.slice(38, 42)
                : "Connect Wallet "}
            </p>
            <p className="lotto__timer-bubbles-block-numbers">
              110K <span className="lotto__timer-bubbles-block-span">XEN</span>
            </p>
            <p className="lotto__timer-bubbles-block-percent">33%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LottoPage;
