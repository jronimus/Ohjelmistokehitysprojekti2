import React, { useState } from 'react'
import close from '../Images/Icons/close.png'
import logo from '../Images/Icons/logo_light1.png'
import '../styles/JungleFindFrame.css'
import ControlPanel from './ControlPanel'
import Login from './Login'
import SignUp from './SignUp'

function JungleFIndFrame() {

  const [view, setView] = useState('controlPanel'); // 'login' ||  'signUp'

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
  const isControlPanelView = view === 'controlPanel';
  const isLoginView = view === 'login';
  const isSignUpView = view === 'signUp';

  return (
    <div className='frame'>
      <div className='top'>
        <img id='close' src={close} alt='Close' />
        <img id='logo-top' src={logo} alt='Logo' />
      </div>
      {isControlPanelView && <ControlPanel onLogin={handleLogin} onSignUp={handleSignUp} /> }
      {isLoginView && <Login onSignUp={handleSignUp}/>}
      {isSignUpView && <SignUp onBack={handleBackToLogin}/>}
    </div>
  )
}

export default JungleFIndFrame
