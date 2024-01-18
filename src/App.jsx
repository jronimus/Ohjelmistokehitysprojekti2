import { useState } from 'react'
import NavBar from './components/NavBar'
import GoogleMaps from "./components/GoogleMaps"
 import Weather from './components/WeatherForecast/Weather'
// import Weather2 from './components/Weather2'

const App = () => {
  
  const [city, setCity] = useState('');

  return (
    <>
       <NavBar setCity={setCity}/>
      <GoogleMaps/>
      <Weather city={city} />
     
    </>
  )
}
export default App
