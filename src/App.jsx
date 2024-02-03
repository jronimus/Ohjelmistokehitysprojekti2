import { useState } from 'react'
import NavBar from './components/NavBar'
import GoogleMaps from './components/GoogleMaps'
import Weather from './components/Weather'
import Datahub from './components/Datahub'
import JungleFIndFrame from './components/JungleFIndFrame'
// import Weather2 from './components/Weather2'

const App = () => {
  const [city, setCity] = useState('');
  const [isJungleFindFrameOpen, setIsJungleFindFrameOpen] = useState(false);

  const handleUserMenu = () => {
    console.log('user menu in App');
    setIsJungleFindFrameOpen(true);
  }

  return (
    <>
      <NavBar setCity={setCity} onUserMenu={handleUserMenu} />
      <GoogleMaps />
      <Weather city={city} />
      {/* <Datahub /> */}
      { isJungleFindFrameOpen && <JungleFIndFrame />}
    </>
  )
}
export default App
