  import React, { useEffect } from 'react'
  import { useState } from 'react';
  import './Weather.css'
  import axios from 'axios';
  
//component
  const Weather = ({city}) => {

    const [weatherData, setWeatherData] = useState(null);//for storing data rec from api
    const [notFound, setNotFound] = useState(false);
  //   const [weatherData, setWeatherData] = useState('');
  // const [isMounted, setIsMounted] = useState(true);
      useEffect(()=>{
        //function
        const fetchData = async() =>{
          try{
            let API_KEY = import.meta.env.VITE_API_KEY_WEATHER;
            console.log(API_KEY);
            let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=Metric`;
      
            let response = await axios.get(URL)
          //  if(isMounted){
              setWeatherData(response.data);
              setNotFound(false); // Reset notFound flag if data is found
          //  }
         
          }
          catch(error){
            console.error('Error fetching weather data', error)
            setNotFound(true); // Reset notFound flag if data is found
          }

        };

        fetchData();
      }, [city])

      if (!weatherData) {
        // Render loading state or return null
        return <h1 className='container'>Weather Forecast</h1>;
      }
    
    
 // Cleanup function to set isMounted to false when the component is unmounted
//  return () => {
//   setIsMounted(false);
//};


  return (
      
    <div className='container'>
      {notFound ? (<div>City not found</div>
      ):(
        <>
          <h1>Weather Forecast</h1>
          <h3 className='location'>{weatherData.name}</h3>
          <img
            src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
            style={{ width: '100px', height: '100px' }}
          />
          <div> {weatherData.weather[0].description}</div>
          <div className='temp'>Temp: {weatherData.main.temp} °C</div>
          <div className='temp'>Feels like: {weatherData.main.feels_like} °C</div>
          <div className='humidity'>Humidity: {weatherData.main.humidity}%</div>
          

        </>
      )
      }
    
    </div>
     
    
   
    )
  }
  
  export default Weather;