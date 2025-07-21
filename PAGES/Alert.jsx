// src/PAGES/Alert.jsx
import React, { useEffect, useState } from 'react';
import ContentArea from '../components/ContentArea';
import { fetchAlerts } from '../utils/fetchAlerts';

function Alert({ area }) {
  const [title, setTitle] = useState('Local Alerts');
  const [content, setContent] = useState('');
  const [alerts, setAlerts] = useState([]);
  const [places, setPlaces] = useState([]);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    if (area) {
      setTitle(`Alerts for ${area}`);
      fetchAlerts(area, setContent, setAlerts, setPlaces, setTemperature);
    } else {
      setContent('Enter a city name to see local alerts.');
    }
  }, [area]);

  return (
    <div className="layout-offset">
      <h2 style={{ color: '#b74b4b' }}>{title}</h2>
      <ContentArea
        content={content}
        alerts={alerts}
        places={places}
        temperature={temperature}
      />
    </div>
  );
}

export default Alert;
