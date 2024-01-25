import React from 'react'
import close from '../Images/Icons/close.png'
import logo from '../Images/Icons/logo_light1.png'
import '../styles/JungleFindFrame.css'
function JungleFIndFrame() {
  return (
    <div className='frame'>
      <div className='top'>
        <img id='close' src={close} alt='Close' />
        <img id='logo-top' src={logo} alt='Logo' />
      </div>
    </div>
  )
}

export default JungleFIndFrame
