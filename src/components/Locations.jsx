import React from 'react'
import '../styles/UserMenu.css'
import back from '../Images/Icons/back.png'
import groupLocations from '../Images/Icons/GroupLocations.png'

const Locations = () =>  {

  return (
    <>
    <div className='header'>
        <figure className='back'>
          <img src={back} alt='back icon' />
        </figure>
        <h2>Your Locations</h2>
    </div>
    <figure className='groupLocations'>
        <img src={groupLocations} alt='different locations' />
    </figure>
    </>
  )
}

export default Locations