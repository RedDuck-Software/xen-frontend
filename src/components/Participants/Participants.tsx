import React from 'react'

import ParticipantsSvg from '../../assets/img/lotto/participants.svg'
import AvatarFirst from '../../assets/img/lotto/avatar/avatar-1.svg'
import AvatarSecond from '../../assets/img/lotto/avatar/avatar-2.svg'
import AvatarThird from '../../assets/img/lotto/avatar/avatar-3.svg'
import AvatarFourth from '../../assets/img/lotto/avatar/avatar-4.svg'
import AvatarFive from '../../assets/img/lotto/avatar/avatar-5.svg'
import AvatarSix from '../../assets/img/lotto/avatar/avatar-6.svg'
import AvatarSeven from '../../assets/img/lotto/avatar/avatar-7.svg'
import AvatarEight from '../../assets/img/lotto/avatar/avatar-8.svg'
import AvatarNine from '../../assets/img/lotto/avatar/avatar-9.svg'
import AvatarTen from '../../assets/img/lotto/avatar/avatar-10.svg'
import AvatarEleven from '../../assets/img/lotto/avatar/avatar-11.svg'
import AvatarTwelve from '../../assets/img/lotto/avatar/avatar-12.svg'
import AvatarThirteen from '../../assets/img/lotto/avatar/avatar-13.svg'
import Value from '../../assets/img/lotto/value.svg'
import LineTop from '../../assets/img/lotto/line-top.png'
import LineBottom from '../../assets/img/lotto/line-bottom.png'

import '../../pages/LottoPage/LottoPage.scss'

interface IParticipants {
  participants: [{ address: string; tokenAmount: string }]
}

const Participants = ({ participants }: IParticipants) => {
  console.log('Participants: ', participants)

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
        <img src={ParticipantsSvg} alt="" className="lotto__participants-img" />{' '}
        Participants This Draw
      </p>
      {participants.map((participant: any) => (
        <div className="lotto__participants-draw">
          <img src={AvatarFirst} alt="" />
          <p className="lotto__participants-draw-text">
            {participant.address.slice(0, 4) +
              '...' +
              participant.address.slice(38, 42)}
          </p>
          <img src={Value} alt="" />
          <p className="lotto__participants-draw-text">
            {participant.tokenAmount} xen
          </p>
        </div>
      ))}
    </div>
  )
}

export default Participants
