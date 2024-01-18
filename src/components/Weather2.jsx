// src/components/Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [address, setAddress] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY_WEATHER

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${API_KEY}`
      );

      const temperatureInCelsius = response.data.main.temp - 273.15;

      // Update the state with the converted temperature
   setWeatherData({ ...response.data, main: { ...response.data.main, temp: temperatureInCelsius } });

    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter home address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Loading...' : 'Get Weather'}
      </button>

      {weatherData && (
        <div>
          <h2>Weather for {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp.toFixed(2)} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
