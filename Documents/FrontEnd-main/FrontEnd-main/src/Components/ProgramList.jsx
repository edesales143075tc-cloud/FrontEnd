import React, { useState } from 'react';
import ProgramCard from './ProgramCard';
import FilterBar from './FilterBar';

const ProgramList = ({ programs, onSelect }) => {
  const [query, setQuery] = useState('');

  const filtered = programs.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.code.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <FilterBar onSearch={setQuery} placeholder="Search program code or name..." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        {filtered.map(p => (
          <ProgramCard key={p.id} program={p} onClick={() => onSelect(p)} />
        ))}
      </div>
    </div>
  );
};

export default ProgramList;