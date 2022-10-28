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
  const [allParticipants, setAllParticipants] = useState<any>([]);
  const [inputAmountValue, setInputAmountValue] = useState<number>(0);
  const navigate = useNavigate();
  const [nextLottoPrize, setNextLottoPrize] = useState<any>();
  const [totalPrizePool, setTotalPrizePool] = useState<any>();
  const [lottoPriceAllTime, setLottoPriceAllTime] = useState<any>();
  const [totalDrawAllTimeTotal, setTotalDrawAllTimeTotal] = useState<any>();
  const [totalWinnerAllTime, setTotalWinnerAllTime] = useState<any>();
  const [current, setCurrent] = useState<any>();

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

  const getParticipants = async () => {
    if (!connector || !account) return "!args";
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner();

    const contract = Lottery__factory.connect(LOTTERYADDRESS, signer);
    const tx = await contract.getParticipants();
    const allParticipants = tx
      .sort((a, b) => +b.tokenAmount.toString() - +a.tokenAmount.toString())
      .map((item) => ({
        address: item.participantAddress,
        tokenAmount: item.tokenAmount.toString(),
      }));

    setAllParticipants(allParticipants);
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
      getParticipants();
    }
  }, []);

  const getCurent = async () => {
    if (!connector || !account) return "!args";
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner();

    const currentContract = Lottery__factory.connect(LOTTERYADDRESS, signer);

    const tx = await currentContract.getCurrect();
    console.log("TX", tx);
    setCurrent(tx);
  };
  useEffect(() => {
    if (countdownRef?.current && nextParticipateTimestamp) {
      countdownRef.current.start();
    }
  }, [countdownRef, nextParticipateTimestamp]);

  const getStaticticsData = async () => {
    if (!connector) return;
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);
    console.log("lotterAdress", signer);
    const contract = Lottery__factory.connect(LOTTERYADDRESS, signer);
    const nextLottoPrize = await contract.totalPrizePool();
    const totalPrizePool = await contract.totalAllTimePrizePool();
    const lottoPriceAllTime = await contract.totalAllTimePrizePool();
    const totalDrawAllTimeTotal = await contract.totalGamesPlayed();
    const totalWinnerAllTime = await contract.totalGamesPlayed();

    setNextLottoPrize(nextLottoPrize);
    setTotalPrizePool(totalPrizePool);
    setLottoPriceAllTime(lottoPriceAllTime);
    setTotalDrawAllTimeTotal(totalDrawAllTimeTotal);
    setTotalWinnerAllTime(totalWinnerAllTime);
  };

  useEffect(() => {
    getStaticticsData();
    getCurent();
  }, [connector, nextParticipateTimestamp]);

  console.log("current", +current.toString());
  console.log("P", nextParticipateTimestamp);
  console.log("current", current);

  console.log("connector", connector);
  return (
    <div className="wrapper wrapper-lotto">
      <Header />
      <div className="lotto">
        <div className="lotto-row">
          <Participants participants={allParticipants} />
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
                disabled={
                  +nextParticipateTimestamp.toString() / 1000 <=
                  +current.toString()
                    ? true
                    : false
                }
                onClick={() => getAmount(inputAmountValue)}
                className="lotto__timer-draw__button"
              >
                {+nextParticipateTimestamp.toString() / 1000 <=
                +current.toString()
                  ? "Chossing winner…"
                  : "ENTER DRAW"}
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
        nextLottoPrize={nextLottoPrize}
        totalPrizePool={totalPrizePool}
        lottoPriceAllTime={lottoPriceAllTime}
        totalDrawAllTimeTotal={totalDrawAllTimeTotal}
        totalWinnerAllTime={totalWinnerAllTime}
      />
      <div className="lotto__timer-bubbles">
        {allParticipants.slice(0, 3).map((item: any, key: number) => {
          return (
            <div
              className={`lotto__timer-bubbles-L lotto__timer-bubbles-${++key}`}
            >
              <div className="lotto__timer-bubbles-block">
                <img
                  src={BublesAvatar}
                  alt=""
                  className="lotto__timer-bubbles-block-avatar"
                />
                <p className="lotto__timer-bubbles-block-account">
                  {item.address
                    ? item.address.slice(0, 4) +
                      "..." +
                      item.address.slice(38, 42)
                    : "Connect Wallet "}
                </p>
                <p className="lotto__timer-bubbles-block-numbers">
                  {item.tokenAmount}{" "}
                  <span className="lotto__timer-bubbles-block-span">XEN</span>
                </p>
                <p className="lotto__timer-bubbles-block-percent">69%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LottoPage;
