import { useState } from 'react'
import NavBar from './components/NavBar'
import GoogleMaps from './components/GoogleMaps'
import Weather from './components/Weather'
import Datahub from './components/Datahub'
import JungleFIndFrame from './components/JungleFIndFrame'
// import Weather2 from './components/Weather2'

const App = () => {
  const [city, setCity] = useState('')

  return (
    <>
      <NavBar setCity={setCity} />
      <GoogleMaps />
      <Weather city={city} />
      {/* <Datahub /> */}
      <JungleFIndFrame />
    </>
  )
}
export default App
