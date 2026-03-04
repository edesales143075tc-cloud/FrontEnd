import React, { useState } from 'react';
import SubjectCard from './SubjectCard';

const SubjectList = ({ subjects, onSelect }) => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? subjects : subjects.filter(s => s.term === filter);

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['All', 'Semester', 'Term', 'Both'].map(t => (
          <button key={t} onClick={() => setFilter(t)} 
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
              filter === t ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(s => <SubjectCard key={s.id} subject={s} onClick={() => onSelect(s)} />)}
      </div>
    </div>
  );
};

export default SubjectList;