import React from 'react'
import { TeamInfo } from './TeamData'
import "../styles/meetTheTeam.css"

const MeetTheTeam = () => {
  return (
    <div className='meetTheTeamContainer'>
        <h1>Meet the Elite Wraps Team</h1>
        <div className='meetTheTeamContent'>
            {TeamInfo.map((info, index) => {
                return (
                    <div className="teamCard" key={index}>
                        <img src={info.img} alt="Team Member" className="teamCardImg" />
                        <h4>{info.name}</h4>
                        <p>{info.about}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MeetTheTeam