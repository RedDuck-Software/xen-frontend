import React, { FC, useState, useEffect, useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { LOTTERYADDRESS } from "../../helpers/constants";

import Header from "../../components/header/Header";
import makeBlockie from "ethereum-blockies-base64";
import Participants from "../../components/Participants/Participants";
import LottoFooter from "../../components/LottoFooter/LottoFooter";
import LottoStats from "../../components/LottoStats/LottoStats";
import { Lottery__factory } from "../../typechain";

import ArrowLeft from "../../assets/img/lotto/timer/arr-left.png";
import ArrowRight from "../../assets/img/lotto/timer/arr-right.png";
import CircleTimer from "../../assets/img/lotto/timer/circle-3.png";
import BublesAvatar from "../../assets/img/lotto/timer/bubles-avatar.svg";

import "../../index.scss";
import "./LottoPage.scss";
import Countdown from "react-countdown";

const LottoPage: FC = () => {
  const countdownRef = useRef<any>(null);
  const { account, connector } = useWeb3React();
  const [totalAllTimePrizePool, setTotalAllTimePrizePool] = useState<string>();
  const [totalGamesPlayed, setTotalGamesPlayed] = useState<string>();
  const [totalPrizePool, setTotalPrizePool] = useState<string>();
  const [nextParticipateTimestamp, setNextParticipateTimestamp] =
    useState<number>(0);
  const [allParticipants, setAllParticipants] = useState<any>([]);
  const [totalWinningToDate, setTotalWinningToDate] = useState<string>();
  const [myEntry, setMyEntry] = useState<string>();
  const [chancesOfWinning, setChancesOfWinning] = useState<string>();
  const [inputAmountValue, setInputAmountValue] = useState<number>(0);

  async function getTotalInfo() {
    if (!connector || !account) return "!args";

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);

    const Lottery = Lottery__factory.connect(LOTTERYADDRESS, signer);
    const totalPrizePool = await (await Lottery.totalPrizePool()).toString();
    const totalAllTimePrizePool = await (
      await Lottery.totalAllTimePrizePool()
    ).toString();
    const totalGamesPlayed = await (
      await Lottery.totalGamesPlayed()
    ).toString();
    const nextParticipateTimestamp = (await Lottery.nextParticipateTimestamp())
      .mul(1000)
      .toNumber();
    setTotalPrizePool(totalPrizePool);
    setTotalAllTimePrizePool(totalAllTimePrizePool);
    setTotalGamesPlayed(totalGamesPlayed);

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
    const allParticipants = tx.map((item) => ({
      address: item.participantAddress,
      tokenAmount: item.tokenAmount.toString(),
    }));

    setAllParticipants(allParticipants);
    getMyEntry();
  };

  const getMyEntry = () => {
    if (!allParticipants.length || !account) return;

    const myEntry = allParticipants.find(
      (participant: any) => participant.address === account
    );

    if (!myEntry) return;
    setMyEntry(myEntry.tokenAmount);
  };

  const getTotalWinningToDate = () => {
    if (!allParticipants.length) return;

    const totalWinningToDate = allParticipants.reduce(
      (totalWinning: string, participant: any) =>
        totalWinning + +participant.tokenAmount,
      0
    );

    setTotalWinningToDate(totalWinningToDate.toString());
    getChancesOfWinning(totalWinningToDate.toString());
  };

  const getChancesOfWinning = (totalWinningToDate: string) => {
    if (!allParticipants.length || !totalWinningToDate || !account) return;

    const user = allParticipants.find(
      (participant: any) => participant.address === account
    );

    if (!user) return;

    const chancesOfWinning = (100 * user.tokenAmount) / +totalWinningToDate;
    setChancesOfWinning(chancesOfWinning.toString());
  };

  useEffect(() => {
    if (connector) {
      getTotalInfo();
      getParticipants();
    }
  }, [connector]);

  useEffect(() => {
    if (allParticipants.length && account) {
      getMyEntry();
      getTotalWinningToDate();
    }
  }, [account, allParticipants]);

  useEffect(() => {
    if (countdownRef?.current && nextParticipateTimestamp) {
      countdownRef.current.start();
    }
  }, [countdownRef, nextParticipateTimestamp]);

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
                🔥{totalPrizePool}{" "}
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
                type="number"
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

          <LottoStats
            myEntry={myEntry}
            totalWinningToDate={totalWinningToDate}
            chancesOfWinning={chancesOfWinning}
          />
        </div>
      </div>
      <LottoFooter
        nextLottoPrize={totalPrizePool}
        lottoPriceAllTime={totalAllTimePrizePool}
        totalWinnerAllTime={totalGamesPlayed}
        totalDrawAllTime={totalGamesPlayed}
      />
      <div className="lotto__timer-bubbles">
        {allParticipants.slice(0, 3).map((item: any, key: number) => {
          return (
            <div
              className={`lotto__timer-bubbles-L lotto__timer-bubbles-${++key}`}
            >
              <div className="lotto__timer-bubbles-block">
                <img
                  src={makeBlockie(item.address)}
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
                <p className="lotto__timer-bubbles-block-percent">
                  {(item.tokenAmount * 100) / totalRoundPrizePool}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LottoPage;
