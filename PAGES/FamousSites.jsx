import React, { useEffect, useState } from 'react';
import ContentArea from '../components/ContentArea';
import { fetchFamousSites } from '../utils/FetchFamousSites';

function FamousSites({ area }) {
  const [title, setTitle] = useState('Welcome to Local-Guide');
  const [content, setContent] = useState('Your go-to guide for navigating the world...');
  const [alerts, setAlerts] = useState([]);
  const [places, setPlaces] = useState([]);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    if (area) {
      setTitle(`Top places in ${area}`);
      fetchFamousSites(area, setContent, setAlerts, setPlaces, setTemperature);
    } else {
      setTitle('Welcome to Local-Guide');
      setContent('Enter a city name in the search bar to discover famous places!');
    }
  }, [area]);

  return (
    <div className="layout-offset">
      <h2 style={{ color: '#4b6cb7' }}>{title}</h2>

      {/* You can reuse this if you want buttons; for now, they're not needed here */}
      {/* <ButtonGroup
        fetchFamousSites={() =>
          fetchFamousSites(area, setContent, setAlerts, setPlaces, setTemperature)
        }
      /> */}

      <ContentArea
        content={content}
        alerts={alerts}
        places={places}
        temperature={temperature}
      />
    </div>
  );
}

export default FamousSites;
