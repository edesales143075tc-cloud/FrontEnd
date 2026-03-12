import React from 'react';

const ProgramDetails = ({ program, onBack }) => (
  <div className="form-container" style={{ maxWidth: '100%' }}>
    <button className="login-btn" style={{ width: 'auto', padding: '8px 20px', marginBottom: '20px' }} onClick={onBack}>
      ← Back to List
    </button>
    <h2 className="brand-name" style={{ fontSize: '2.5rem' }}>{program.name}</h2>
    <p style={{ margin: '10px 0 30px 0', color: '#8b949e' }}>{program.desc}</p>
    
    <div className="stats-grid">
      {program.years.map((y, index) => (
        <div key={index} className="stat-card">
          <h4 style={{ color: '#00d2ff' }}>{y.year}</h4>
          <p style={{ marginTop: '10px' }}>{y.subjects.join(', ')}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ProgramDetails;