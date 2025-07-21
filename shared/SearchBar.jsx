import React from 'react';

const SearchBar = ({ area, setArea }) => {
  return (
    <input
      type="text"
      placeholder="Search area..."
      value={area}
      onChange={(e) => setArea(e.target.value)}
    />
  );
};

export default SearchBar;