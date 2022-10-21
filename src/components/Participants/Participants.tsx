import React from "react";
import ParticipantsSvg from "../../assets/img/lotto/participants.svg";
import AvatarFirst from "../../assets/img/lotto/avatar/avatar-1.svg";
import AvatarSecond from "../../assets/img/lotto/avatar/avatar-2.svg";
import AvatarThird from "../../assets/img/lotto/avatar/avatar-3.svg";
import AvatarFourth from "../../assets/img/lotto/avatar/avatar-4.svg";
import AvatarFive from "../../assets/img/lotto/avatar/avatar-5.svg";
import AvatarSix from "../../assets/img/lotto/avatar/avatar-6.svg";
import AvatarSeven from "../../assets/img/lotto/avatar/avatar-7.svg";
import AvatarEight from "../../assets/img/lotto/avatar/avatar-8.svg";
import AvatarNine from "../../assets/img/lotto/avatar/avatar-9.svg";
import AvatarTen from "../../assets/img/lotto/avatar/avatar-10.svg";
import AvatarEleven from "../../assets/img/lotto/avatar/avatar-11.svg";
import AvatarTwelve from "../../assets/img/lotto/avatar/avatar-12.svg";
import AvatarThirteen from "../../assets/img/lotto/avatar/avatar-13.svg";
import Value from "../../assets/img/lotto/value.svg";
import LineTop from "../../assets/img/lotto/line-top.png";
import LineBottom from "../../assets/img/lotto/line-bottom.png";
import "../../pages/LottoPage/LottoPage.scss";

const Participants = () => {
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
        <img src={ParticipantsSvg} alt="" className="lotto__participants-img" /> Participants This
        Draw
      </p>
      <div className="lotto__participants-draw">
        <img src={AvatarFirst} alt="" />
        <p className="lotto__participants-draw-text">Joe Lury</p>
        <img src={Value} alt="" />
        <p className="lotto__participants-draw-text">595.12 xen</p>
      </div>
      <div className="lotto__participants-draw">
        <img src={AvatarSecond} alt="" />
        <p className="lotto__participants-draw-text">Harry Clix</p>
        <img src={Value} alt="" />
        <p className="lotto__participants-draw-text">459.88 xen</p>
      </div>
      <div className="lotto__participants-draw">
        <img src={AvatarThird} alt="" />
        <p className="lotto__participants-draw-text">Nazreen Bob</p>
        <img src={Value} alt="" />
        <p className="lotto__participants-draw-text">310.45 xen</p>
      </div>
      <div className="lotto__participants-draw">
        <img src={AvatarFourth} alt="" />
        <p className="lotto__participants-draw-text">Joe Kitten</p>
        <img src={Value} alt="" />
        <p className="lotto__participants-draw-text">299.65 xen</p>
      </div>
      <div className="lotto__participants-draw">
        <img src={AvatarFive} alt="" />
        <p className="lotto__participants-draw-text">Larry Pag</p>
        <img src={Value} alt="" />
        <p className="lotto__participants-draw-text">278.56 xen</p>
      </div>
      <div className="lotto__participants-draw">
        <img src={AvatarSix} alt="" />
        <p className="lotto__participants-draw-text">Relly Blue</p>
        <img src={Value} alt="" />
        <p className="lotto__participants-draw-text">234.55 xen</p>
      </div>
      <div className="lotto__participants-draw">
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
      </div>
    </div>
  );
};

export default Participants;
