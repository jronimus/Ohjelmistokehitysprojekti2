import React from 'react'
import '../styles/UserMenu.css'
import person from '../Images/Icons/person.png'
import events from '../Images/Icons/Events.png'
import weather from '../Images/Icons/Weather.png'
import districts from '../Images/Icons/Districts.png'
import bikes from '../Images/Icons/Bikes.png'
import settings from '../Images/Icons/Settings.png'
import activities from '../Images/Icons/Activities.png'
import locations from '../Images/Icons/Locations.png'

const UserMenu = () =>  {

  return (
    <div className='grid-container'>
      <div className='login-box'>
        <figure className='person'>
          <img src={person} alt='Login icon' />
        </figure>
        <p>
          Joni Ronimus
          joni.ronimus@gmail.com
        </p>
      </div>
      <div className='locations-box grid-item'>
        <img src={locations} />
      </div>
      <div className='activities-box grid-item'>
        <img src={activities} />
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
    </div>
  )
}

export default UserMenu