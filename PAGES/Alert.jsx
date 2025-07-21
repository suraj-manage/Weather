import React, { useState, useEffect } from 'react';
import ButtonGroup from '../components/ButtonsGroup';
import ContentArea from '../components/ContentArea';
import { fetchWiki } from '../utils/FetchWiki';
import { fetchAlerts } from '../utils/FetchAlerts';

function Alert() {
  const [area, setArea] = useState('');
  const [title, setTitle] = useState('Welcome to Local-Guide');
  const [content, setContent] = useState('Your go-to guide for navigating the world...');
  const [alerts, setAlerts] = useState([]);
  const [places, setPlaces] = useState([]);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    if (!area) {
      setTitle('Welcome to Local-Guide');
      setContent('Your go-to guide for navigating the world...');
    } else {
      setTitle(`Welcome to ${area}`);
      fetchWiki(area, setContent, setAlerts, setPlaces, setTemperature);
    }
  }, [area]);

  return (
    <div className="layout-offset">
      <h2 style={{ color: '#4b6cb7' }}>{title}</h2>
      <ButtonGroup
        fetchWeather={() => {}}
        fetchWiki={() => {}}
        fetchAlerts={() => fetchAlerts(area, setContent, setAlerts, setPlaces, setTemperature)}
        fetchFamousSites={() => {}}
      />
      <ContentArea content={content} alerts={alerts} places={places} temperature={temperature} />
    </div>
  );
}

export default Alert;
