// src/PAGES/Weather.jsx
import React, { useEffect, useState } from 'react';
import ContentArea from '../components/ContentArea';
import { fetchWeather } from '../utils/fetchWeather';

function Weather({ area }) {
  const [title, setTitle] = useState('Local Weather');
  const [content, setContent] = useState('');
  const [alerts, setAlerts] = useState([]);
  const [places, setPlaces] = useState([]);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    if (area) {
      setTitle(`Weather in ${area}`);
      fetchWeather(area, setContent, setAlerts, setPlaces, setTemperature);
    } else {
      setContent('Enter a city name to check weather.');
    }
  }, [area]);

  return (
    <div className="layout-offset">
      <h2 style={{ color: '#2c8a7f' }}>{title}</h2>
      <ContentArea
        content={content}
        alerts={alerts}
        places={places}
        temperature={temperature}
      />
    </div>
  );
}

export default Weather;
