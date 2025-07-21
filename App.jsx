import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './PAGES/Home';
import Weather from './PAGES/Weather';
import Alerts from './PAGES/Alert';
import FamousSites from './PAGES/FamousSites';
import Sidebar from './components/SideBar';
import './index.css';

const ads = [
  { img: '/src/logo.jpg', link: 'https://yourstore.com' },
  { img: 'https://via.placeholder.com/250x300?text=Local+Cafe', link: 'https://yourcafe.com' }
];

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/sites" element={<FamousSites />} />
        </Routes>
        <Sidebar ads={ads} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
