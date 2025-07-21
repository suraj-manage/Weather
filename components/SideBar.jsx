// components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ ads }) => (
  <div className="sidebar">
    {ads.map((ad, index) => (
      <a href={ad.link} target="_blank" rel="noopener noreferrer" key={index}>
        <img src={ad.img} alt={`Ad ${index + 1}`} />
      </a>
    ))}
  </div>
);

export default Sidebar;