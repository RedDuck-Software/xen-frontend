import React, { useEffect, useState } from "react";

import makeBlockie from "ethereum-blockies-base64";
import Share from "../../assets/img/lotto/share.svg";
import LineStats from "../../assets/img/lotto/line-stats.png";
import Crown from "../../assets/img/lotto/crown.svg";
import LineTop from "../../assets/img/lotto/line-top.png";
import LineBottom from "../../assets/img/lotto/line-bottom.png";

import "../../index.scss";
import { ethers, BigNumber } from "ethers";
import { Lottery__factory } from "../../typechain";
import { BSC_RPC_URL, LOTTERYADDRESS } from "../../helpers/constants";

type LottoFooterProps = {
  myEntry: string | undefined;
  totalWinningToDate: string | undefined;
  chancesOfWinning: string | undefined;
};

const LottoStats = ({
  myEntry,
  totalWinningToDate,
  chancesOfWinning,
}: LottoFooterProps) => {
  const [winners, setWinners] = useState<any>([]);

  const getWinners = async () => {
    const provider = new ethers.providers.JsonRpcProvider(BSC_RPC_URL);

    const WinnersContract = Lottery__factory.connect(LOTTERYADDRESS, provider);
    const allWinners = await WinnersContract.getAllWinners();

    setWinners(allWinners.slice(allWinners.length - 5, allWinners.length));
  };

  useEffect(() => {
    getWinners();
  }, []);

  return (
    <div>
      <div className="lotto__stats">
        <img
          src={LineTop}
          alt=""
          className="lotto__participants-line lotto__participants-line-top"
        />
        <div className="lotto__stats-my">
          <div className="lotto__stats-my__header">
            <img src={Share} alt="" className="lotto__stats-my__header-img" />
            <p className="lotto__stats-my__header-title">My Stats</p>
          </div>
          <div className="lotto__stats-my__block">
            <p className="lotto__stats-my__block-title">My Entry</p>
            {myEntry ? (
              <p className="lotto__stats-my__number">
                {ethers.utils
                  .formatEther(myEntry)
                  .replace(/\.(\d{1,2}).*$/, ".$1")}{" "}
                <span className="lotto__stats-my__block-span">XEN</span>
              </p>
            ) : (
              <p className="lotto__stats-my__number">You don't participate</p>
            )}
          </div>
          <img src={LineStats} alt="" className="lotto__stats-my__line" />
          <div className="lotto__stats-my__block">
            <p className="lotto__stats-my__block-title">Chances of Winning</p>
            {chancesOfWinning ? (
              <p className="lotto__stats-my__number">
                {parseFloat(chancesOfWinning).toFixed(2)}{" "}
                <span className="lotto__stats-my__block-span">%</span>
              </p>
            ) : (
              <p className="lotto__stats-my__number">You don't participate</p>
            )}
          </div>
          <img src={LineStats} alt="" className="lotto__stats-my__line" />
          <div className="lotto__stats-my__block">
            <p className="lotto__stats-my__block-title">
              Total winnings to date
            </p>
            {totalWinningToDate ? (
              <p className="lotto__stats-my__block-numbers">
                {totalWinningToDate.replace(/\.(\d{1,2}).*$/, ".$1")}
                <span className="lotto__stats-my__block-span">XEN</span>
              </p>
            ) : (
              <p className="lotto__stats-my__block-span">
                No draw was deposited
              </p>
            )}
          </div>
          <img
            src={LineBottom}
            alt=""
            className="lotto__participants-line lotto__stats-line__bottom"
          />
        </div>
      </div>
      <div className="lotto__winners">
        <img
          src={LineTop}
          alt=""
          className="lotto__participants-line lotto__participants-line-top"
        />
        <div className="lotto__winners__header">
          {" "}
          <img src={Crown} alt="" className="lotto__participants-img" />
          <p className="lotto__participants-title">Previous Winners</p>
        </div>
        <div>
          {winners.slice().map((winner: any, key: number) => (
            <div className="lotto__participants-draw" key={winner + key}>
              <img
                className="lotto__participants-draw-images"
                src={makeBlockie(winner.winnerAddress.toString())}
                alt=""
              />
              <p className="lotto__participants-draw-text">
                {winner.winnerAddress.toString().slice(0, 4) +
                  "..." +
                  winner.winnerAddress.toString().slice(38, 42)}
              </p>
              <p className="lotto__participants-draw-text">
                {ethers.utils
                  .formatEther(winner.wonAmount.toString())
                  .replace(/\.(\d{1,2}).*$/, ".$1")}
              </p>
            </div>
          ))}
        </div>
        <img
          src={LineTop}
          alt=""
          className="lotto__participants-line lotto__participants-line-top"
        />
      </div>
    </div>
  );
};

export default LottoStats;
