// src/PAGES/Home.jsx
import React, { useEffect, useState } from 'react';
import ContentArea from '../components/ContentArea';
import { fetchWiki } from '../utils/fetchWiki';

function Home({ area }) {
  const [title, setTitle] = useState('Welcome to Local-Guide');
  const [content, setContent] = useState('Explore a place with Wikipedia summary.');
  const [alerts, setAlerts] = useState([]);
  const [places, setPlaces] = useState([]);
  const [temperature, setTemperature] = useState(null);
  const [wikiInfo, setWikiInfo] = useState(null);

  useEffect(() => {
    if (area) {
      setTitle(`About ${area}`);
      fetchWiki(area, setContent, setAlerts, setPlaces, setTemperature, setWikiInfo);
    }
  }, [area]);

  return (
    <div className="layout-offset">
      <h2 style={{ color: '#4b6cb7' }}>{title}</h2>

      {/* Wiki Card */}
      {wikiInfo && (
        <div className="wiki-card">
          {wikiInfo.thumbnail?.source && (
            <img
              src={wikiInfo.thumbnail.source}
              alt={wikiInfo.title}
              className="wiki-image"
            />
          )}
          <p>{wikiInfo.extract}</p>
          <a href={wikiInfo.content_urls.desktop.page} target="_blank" rel="noreferrer">
            Read more on Wikipedia
          </a>
        </div>
      )}

      {/* Generic Content Output */}
      <ContentArea
        content={content}
        alerts={alerts}
        places={places}
        temperature={temperature}
      />
    </div>
  );
}

export default Home;
