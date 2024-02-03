import React from 'react'
import '../styles/Locations.css'
import back from '../Images/Icons/back.png'
import groupLocations from '../Images/Icons/GroupLocations.png'

const Locations = ({ onBackToUserMenu }) =>  {

  const handleBack = () => onBackToUserMenu();

  return (
    <>
    <div className='header'>
        <figure className='back'>
          <img src={back} alt='back icon' onClick={handleBack} />
        </figure>
        <h2 className='locations-title'>Your Locations</h2>
    </div>
    <figure className='groupLocations'>
        <img src={groupLocations} alt='different locations' />
    </figure>
    </>
  )
}

export default Locations