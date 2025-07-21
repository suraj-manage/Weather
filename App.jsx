import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './PAGES/Home';
import Weather from './PAGES/Weather';
import Alert from './PAGES/Alert';
import FamousSites from './PAGES/FamousSites';
import Sidebar from './components/SideBar';
import './index.css';

const ads = [
  { img: '/src/logo.jpg', link: 'https://yourstore.com',
    img: '/src/logo.jpg', link: 'https://google.com'
   }
];

function App() {
  const [area, setArea] = useState('');

  return (
    <Router>
      <Header area={area} setArea={setArea} />
      <div className="container">
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home area={area} />} />
            <Route path="/weather" element={<Weather area={area} />} />
            <Route path="/alerts" element={<Alert area={area} />} />
            <Route path="/sites" element={<FamousSites area={area} />} />
          </Routes>
        </div>
      
        <Sidebar ads={ads} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;