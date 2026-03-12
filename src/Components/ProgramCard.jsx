import React from 'react';

const ProgramCard = ({ program, onClick }) => (
  <div className="stat-card" onClick={() => onClick(program)} style={{ cursor: 'pointer' }}>
    <span className="badge badge-term">{program.code}</span>
    <h3 style={{ marginTop: '10px', color: 'white' }}>{program.name}</h3>
    <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>{program.duration}</p>
    <div style={{ marginTop: '15px' }}>
       <span className="badge badge-active">{program.status}</span>
    </div>
  </div>
);

export default ProgramCard;