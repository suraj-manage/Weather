import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchBar from '../shared/SearchBar';
import '../utils/header.css';

const Header = ({ area, setArea }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">🌍 LOCAL-GUIDE</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/alerts">Alerts</Link>
          <Link to="/sites">Sites</Link>
        </nav>
      </div>
      <form onSubmit={handleSearch}>
        <SearchBar area={area} setArea={setArea} />
      </form>
    </header>
  );
};

export default Header;
