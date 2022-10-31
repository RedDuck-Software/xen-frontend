import React, { useEffect, useState } from "react";

import AvatarSix from "../../assets/img/lotto/avatar/avatar-6.svg";
import AvatarSeven from "../../assets/img/lotto/avatar/avatar-7.svg";
import AvatarEight from "../../assets/img/lotto/avatar/avatar-8.svg";
import AvatarNine from "../../assets/img/lotto/avatar/avatar-9.svg";
import AvatarTen from "../../assets/img/lotto/avatar/avatar-10.svg";
import AvatarEleven from "../../assets/img/lotto/avatar/avatar-11.svg";
import AvatarTwelve from "../../assets/img/lotto/avatar/avatar-12.svg";
import AvatarThirteen from "../../assets/img/lotto/avatar/avatar-13.svg";
import Value from "../../assets/img/lotto/value.svg";

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

const LottoStats = () => {
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

    console.log("winners", allWinners);
    setWinners(allWinners);
  };

  useEffect(() => {
    if (connector) {
      getWinners();
      console.log(winners);
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
            <p className="lotto__stats-my__number">
              20,000 <span className="lotto__stats-my__block-span">XEN</span>
            </p>
          </div>
          <img src={LineStats} alt="" className="lotto__stats-my__line" />
          <div className="lotto__stats-my__block">
            <p className="lotto__stats-my__block-title">Chances of Winning</p>
            <p className="lotto__stats-my__block-number">5.37%</p>
          </div>
          <img src={LineStats} alt="" className="lotto__stats-my__line" />
          <div className="lotto__stats-my__block">
            <p className="lotto__stats-my__block-title">
              Total winnings to date
            </p>
            <p className="lotto__stats-my__block-numbers">
              125,567,000{" "}
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

          {/* <div className="lotto__participants-draw">
            <img src={AvatarSeven} alt="" />
            <p className="lotto__participants-draw-text">Tim Ckil</p>
            <img src={Value} alt="" />
            <p className="lotto__participants-draw-text">199.45 xen</p>
          </div>
          <div className="lotto__participants-draw">
            <img src={AvatarEight} alt="" />
            <p className="lotto__participants-draw-text">Flip Trox</p>
            <img src={Value} alt="" />
            <p className="lotto__participants-draw-text">186.32 xen</p>
          </div>
          <div className="lotto__participants-draw">
            <img src={AvatarNine} alt="" />
            <p className="lotto__participants-draw-text">Sam Dux</p>
            <img src={Value} alt="" />
            <p className="lotto__participants-draw-text">167.30 xen</p>
          </div>
          <div className="lotto__participants-draw">
            <img src={AvatarTen} alt="" />
            <p className="lotto__participants-draw-text">Quentine Liv</p>
            <img src={Value} alt="" />
            <p className="lotto__participants-draw-text">102.12 xen</p>
          </div>
          <div className="lotto__participants-draw">
            <img src={AvatarEleven} alt="" />
            <p className="lotto__participants-draw-text">Yuval Hip</p>
            <img src={Value} alt="" />
            <p className="lotto__participants-draw-text">85.12 xen</p>
          </div>
          <div className="lotto__participants-draw">
            <img src={AvatarTwelve} alt="" />
            <p className="lotto__participants-draw-text">Maxxy Lip</p>
            <img src={Value} alt="" />
            <p className="lotto__participants-draw-text">72.21 xen</p>
          </div>
          <div className="lotto__participants-draw">
            <img src={AvatarThirteen} alt="" />
            <p className="lotto__participants-draw-text">Tim Dexter</p>
            <img src={Value} alt="" />
            <p className="lotto__participants-draw-text">65.77 xen</p>
          </div> */}
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
