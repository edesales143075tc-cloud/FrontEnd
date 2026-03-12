import React from 'react';
import ProgramCard from './ProgramCard';
import { mockData } from '../mockData';

const ProgramList = ({ onSelect }) => (
  <div>
    <h2 style={{ marginBottom: '20px' }}>Program Offerings</h2>
    <div className="stats-grid">
      {mockData.programs.map(p => (
        <ProgramCard key={p.id} program={p} onClick={onSelect} />
      ))}
    </div>
  </div>
);

export default ProgramList;