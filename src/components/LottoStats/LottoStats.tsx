import React, { useEffect, useState } from "react";

import AvatarSeven from "../../assets/img/lotto/avatar/avatar-7.svg";
import makeBlockie from 'ethereum-blockies-base64';
import Share from "../../assets/img/lotto/share.svg";
import LineStats from "../../assets/img/lotto/line-stats.png";
import Crown from "../../assets/img/lotto/crown.svg";
import LineTop from "../../assets/img/lotto/line-top.png";
import LineBottom from "../../assets/img/lotto/line-bottom.png";

import "../../index.scss";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { Lottery__factory } from "../../typechain";
import { LOTTERYADDRESS } from "../../helpers/constants";

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
  const { connector } = useWeb3React();

  const getWinners = async () => {
    if (!connector || !winners) return "!args";

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner();

    const WinnersContract = Lottery__factory.connect(LOTTERYADDRESS, signer);
    const allWinners = await WinnersContract.getAllWinners();

    setWinners(allWinners);
  };

  useEffect(() => {
    if (connector) {
      getWinners();
    }
  }, [connector]);

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
                {myEntry}{" "}
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
            <p className="lotto__stats-my__block-numbers">
              {totalWinningToDate ? totalWinningToDate : ""}
              <span className="lotto__stats-my__block-span">XEN</span>
            </p>
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
          {winners.map((winner: any) => (
            <div
              
              className="lotto__participants-draw"
            >
              <img className="lotto__participants-draw-images" src={makeBlockie(winner.winnerAddress.toString())} alt="" />
              <p className="lotto__participants-draw-text">
                {winner.winnerAddress.toString().slice(0, 4) +
                  "..." +
                  winner.winnerAddress.toString().slice(38, 42)}
              </p>
              <p className="lotto__participants-draw-text">
                {winner.wonAmount.toString()}
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
