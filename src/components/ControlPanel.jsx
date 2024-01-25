import React from 'react'
import '../styles/ControlPanel.css'
import person from '../Images/Icons/person.png'
import events from '../Images/Icons/Events.png'
import weather from '../Images/Icons/Weather.png'
import districts from '../Images/Icons/Districts.png'
import bikes from '../Images/Icons/Bikes.png'
import settings from '../Images/Icons/Settings.png'
import transit from '../Images/Icons/Transit.png'

function ControlPanel() {
  return (
    <div className='grid-container'>
      <div className='login-box'>
        <figure className='person'>
          <img src={person} alt='Login icon' />
        </figure>
        <p>
          Welcome! To access personalized content, please log in or register for
          an account.
        </p>
      </div>
      <div className='events-box grid-item'>
        <img src={events} />
      </div>
      <div className='weather-box grid-item'>
        <img src={weather} />
      </div>
      <div className='districts-box grid-item'>
        <img src={districts} />
      </div>
      <div className='bikes-box grid-item'>
        <img src={bikes} />
      </div>
      <div className='settings-box grid-item'>
        <img src={settings} />
      </div>
      <div className='transit-box grid-item'>
        <img src={transit} />
      </div>
    </div>
  )
}

export default ControlPanel
