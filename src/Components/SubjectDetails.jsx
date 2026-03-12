import React from 'react';

const SubjectDetails = ({ subject, onBack }) => (
  <div className="stat-card">
    <button className="login-btn" style={{ width: 'auto', padding: '8px 20px', marginBottom: '20px' }} onClick={onBack}>
      ← Close Details
    </button>
    <h2 style={{ color: '#00d2ff' }}>{subject.code}: {subject.title}</h2>
    <hr style={{ border: '0.5px solid #30363d', margin: '20px 0' }} />
    <div className="stats-grid">
      <div>
        <label style={{ color: '#8b949e', fontSize: '0.8rem' }}>Pre-requisites</label>
        <p>{subject.pre}</p>
      </div>
      <div>
        <label style={{ color: '#8b949e', fontSize: '0.8rem' }}>Units</label>
        <p>{subject.units} Units</p>
      </div>
    </div>
    <p style={{ marginTop: '20px' }}>{subject.desc}</p>
  </div>
);

export default SubjectDetails;