import React from "react";
import { ethers } from "ethers";

import ParticipantsSvg from "../../assets/img/lotto/participants.svg";
import Value from "../../assets/img/lotto/value.svg";
import LineTop from "../../assets/img/lotto/line-top.png";
import LineBottom from "../../assets/img/lotto/line-bottom.png";
import makeBlockie from "ethereum-blockies-base64";

import "../../pages/LottoPage/LottoPage.scss";

interface IParticipants {
  participants: [{ address: string; tokenAmount: string }];
}

const Participants = ({ participants }: IParticipants) => {
  return (
    <div className="lotto__participants">
      <img
        src={LineTop}
        alt=""
        className="lotto__participants-line lotto__participants-line-top"
      />
      <img
        src={LineBottom}
        alt=""
        className="lotto__participants-line lotto__participants-line-bottom"
      />
      <p className="lotto__participants-title">
        <img src={ParticipantsSvg} alt="" className="lotto__participants-img" />{" "}
        Participants This Draw
      </p>
      {participants.map((participant, i) => (
        <div
          key={participant.address}
          className="lotto__participants-draw"
          style={i === participants.length - 1 ? { marginBottom: "10px" } : {}}
        >
          <img
            className="lotto__participants-draw-images"
            src={makeBlockie(participant.address.toString())}
            alt=""
          />
          <p className="lotto__participants-draw-text">
            {participant.address.slice(0, 4) +
              "..." +
              participant.address.slice(38, 42)}
          </p>
          <img src={Value} alt="" />
          <p className="lotto__participants-draw-text">
            {ethers.utils
              .formatEther(participant.tokenAmount)
              .replace(/\.(\d{1,2}).*$/, ".$1")}{" "}
            xen
          </p>
        </div>
      ))}
    </div>
  );
};

export default Participants;
