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

const UserMenu = ({onLocations}) =>  {

  const handleLocations = () => onLocations();

  return (
    <div className='gr-container'>
      <div className='log-box'>
        <figure className='person'>
          <img src={person} alt='Login icon' />
        </figure>
        <p>
          <span className='bold'>Joni Ronimus</span><br/>
          joni.ronimus@gmail.com
        </p>
      </div>
      <div className='locationsBox item'>
        <img src={locations}  role='button' onClick={handleLocations} />
      </div>
      <div className='activitiesBox item'>
        <img src={activities} />
      </div>
      <div className='eventsBox item'>
        <img src={events} />
      </div>
      <div className='weatherBox item'>
        <img src={weather} />
      </div>
      <div className='districtsBox item'>
        <img src={districts} />
      </div>
      <div className='bikesBox item'>
        <img src={bikes} />
      </div>
      <div className='settingsBox item'>
        <img src={settings} />
      </div>
    </div>
  )
}

export default UserMenu