import React, { FC, useState, useEffect, useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { BSC_RPC_URL, LOTTERYADDRESS } from "../../helpers/constants";

import Header from "../../components/header/Header";
import makeBlockie from "ethereum-blockies-base64";
import Participants from "../../components/Participants/Participants";
import LottoFooter from "../../components/LottoFooter/LottoFooter";
import LottoStats from "../../components/LottoStats/LottoStats";
import { Lottery__factory } from "../../typechain";

import ArrowLeft from "../../assets/img/lotto/timer/arr-left.png";
import ArrowRight from "../../assets/img/lotto/timer/arr-right.png";
import CircleTimer from "../../assets/img/lotto/timer/circle-3.png";

import "../../index.scss";
import "./LottoPage.scss";
import Countdown from "react-countdown";
import { getBalances } from "../../utils/getBalances";
import Loader from "../../components/Loader";

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
  const [lastWonAmount, setLastWonAmount] = useState<string>();
  const [errorText, setErrorText] = useState<string>();
  const [depositedAmount, setDepositedAmount] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [finishedTxCounter, setFinishedTxCounter] = useState<number>(0);
  const [bubbleSize, setBubbleSize] = useState<number>();

  async function getTotalInfo(account: string) {
    const provider = new ethers.providers.JsonRpcProvider(BSC_RPC_URL);

    const Lottery = Lottery__factory.connect(LOTTERYADDRESS, provider);
    const totalPrizePool = await (await Lottery.totalPrizePool()).toString();
    const totalAllTimePrizePool = await (
      await Lottery.totalAllTimePrizePool()
    ).toString();
    const totalGamesPlayed = await (
      await Lottery.totalGamesPlayed()
    ).toString();

    const lastWonAmount = await (await Lottery.lastWonAmount()).toString();
    const nextParticipateTimestamp = (await Lottery.nextParticipateTimestamp())
      .mul(1000)
      .toNumber();

    const participants = await Lottery.getParticipants();
    const formattedParticipants = participants.map((item) => ({
      address: item.participantAddress,
      tokenAmount: item.depositedAmount.toString(),
    }));

    const myEntry = formattedParticipants.find((p) => p.address === account);

    const totalWinningToDate = formattedParticipants.reduce(
      (totalWinning, participant) => totalWinning + +participant.tokenAmount,
      0
    );

    if (myEntry) {
      const chancesOfWinning =
        (100 * +myEntry.tokenAmount) / totalWinningToDate;
      setChancesOfWinning(chancesOfWinning.toString());
      setMyEntry(myEntry.tokenAmount);
    }

    setTotalPrizePool(totalPrizePool);
    setTotalAllTimePrizePool(totalAllTimePrizePool);
    setTotalGamesPlayed(totalGamesPlayed);
    setLastWonAmount(lastWonAmount);
    setNextParticipateTimestamp(nextParticipateTimestamp);
    setAllParticipants(formattedParticipants);
    setTotalWinningToDate(totalWinningToDate.toString());
  }

  const participate = async (amount: number) => {
    setErrorText("");

    if (!connector || !account) return "!args";

    if (amount < 1) {
      setErrorText("You can't enter less than 1 XEN token");
      return;
    }

    if (!depositedAmount || amount > depositedAmount) {
      setErrorText("You can't enter more than your deposited XEN balance");
      return;
    }

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner();

    const amountContract = Lottery__factory.connect(LOTTERYADDRESS, signer);
    const tx = await amountContract.participate(
      ethers.utils.parseEther(amount.toString())
    );

    setIsLoading(true);
    await tx.wait();

    setFinishedTxCounter((prevState) => prevState + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!account) return;
    const getData = async () => {
      getTotalInfo(account);

      const { depositedBalance } = await getBalances(account);
      setDepositedAmount(depositedBalance);
    };
    getData();
  }, [account, finishedTxCounter]);

  useEffect(() => {
    if (countdownRef?.current && nextParticipateTimestamp) {
      countdownRef.current.start();
      setIsLoading(false);
    }
  }, [countdownRef, nextParticipateTimestamp]);

  return (
    <Loader isLoading={isLoading}>
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
                  🔥
                  {totalPrizePool
                    ? ethers.utils
                        .formatEther(totalPrizePool)
                        .replace(/\.(\d{1,2}).*$/, ".$1")
                    : ""}{" "}
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
              {errorText && (
                <span className="lotto__timer-error">{errorText}</span>
              )}
              <div className="lotto__timer-draw">
                <input
                  type="number"
                  min={1}
                  max={depositedAmount}
                  placeholder="Enter Amount"
                  className="lotto__timer-draw__input"
                  value={inputAmountValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputAmountValue(+e.target.value)
                  }
                />
                <button
                  onClick={() => participate(inputAmountValue)}
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
          lastWonAmount={lastWonAmount}
          totalParticipants={allParticipants.length}
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
                    {ethers.utils
                      .formatEther(item.tokenAmount)
                      .replace(/\.(\d{1,2}).*$/, ".$1")}{" "}
                    <span className="lotto__timer-bubbles-block-span">XEN</span>
                  </p>
                  {totalPrizePool && (
                    <p className="lotto__timer-bubbles-block-percent">
                      {((item.tokenAmount * 100) / +totalPrizePool).toFixed(2)}%
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Loader>
  );
};

export default LottoPage;
