import React, { useState } from 'react'
import close from '../Images/Icons/close.png'
import logo from '../Images/Icons/logo_light1.png'
import '../styles/JungleFindFrame.css'
import ControlPanel from './ControlPanel'
import Login from './Login'
import SignUp from './SignUp'
import UserMenu from './UserMenu'
import Locations from './Locations'

function JungleFIndFrame({ onCloseUserMenu }) {

  const [view, setView] = useState('controlPanel'); // 'login' ||  'signUp'
  const [isUserLoggedIn, setIsUserLoggedIn ] = useState(false);
  const [isLocations, setIsLocations] = useState(false);

  const handleClose = () => onCloseUserMenu();

  const handleLogin = () => {
    // console.log('handle login ')
    setView('login')
  }

  const handleSignUp = () => {
    setView('signUp')
  }

  const handleBackToLogin = () => {
    setView('login')
  }

  const handleLoggedIn = () => {
    setIsUserLoggedIn(true);
    setView('userMenu')
  }

  const handleLocations = () => {
    setView('locations')
  }

  const handleBackToUserMenu = () => {
    setView('userMenu')
  }

  const isControlPanelView = view === 'controlPanel';
  const isLoginView = view === 'login';
  const isSignUpView = view === 'signUp';
  const isUserLoggedInView = view === 'userMenu';
  const isLocationsView = view === 'locations';


  return (
    <div className='frame'>
      <div className='top'>
        <img id='close' src={close} alt='Close' onClick={handleClose} />
        <img id='logo-top' src={logo} alt='Logo' />
      </div>
      {isControlPanelView && <ControlPanel onLogin={handleLogin} onSignUp={handleSignUp} /> }
      {isLoginView && <Login onSignUp={handleSignUp} onLoggedIn={handleLoggedIn}/>}
      {isSignUpView && <SignUp onBack={handleBackToLogin}/>}
      {isUserLoggedInView && <UserMenu onLocations={handleLocations}/>}
      {isLocationsView && <Locations onBackToUserMenu={handleBackToUserMenu}/>}
    </div>
  )
}

export default JungleFIndFrame
