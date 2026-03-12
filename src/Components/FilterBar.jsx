import React from 'react';

const FilterBar = ({ onSearch }) => (
  <div className="input-field" style={{ marginBottom: '30px' }}>
    <input 
      type="text" 
      placeholder="Search by code or name..." 
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

export default FilterBar;