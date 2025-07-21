// src/utils/fetchWiki.js
import axios from 'axios';

export const fetchWiki = async (
  area,
  setContent,
  setAlerts,
  setPlaces,
  setTemperature,
  setWikiInfo
) => {
  try {
    const res = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(area)}`
    );

    if (res.data.extract) {
      setContent(''); // Clear main content, use wikiInfo instead
      setWikiInfo(res.data);
      setAlerts([]);
      setPlaces([]);
      setTemperature(null);
    } else {
      setContent('No Wikipedia summary found.');
      setWikiInfo(null);
    }
  } catch {
    setContent('Error fetching Wikipedia summary.');
    setWikiInfo(null);
  }
};
