import React from 'react';
import { mockData } from '../mockData';

const Dashboard = () => {
  const totalPrograms = mockData.programs.length;
  const totalSubjects = mockData.subjects.length;

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Academic Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Programs</h3>
          <p className="brand-name" style={{fontSize: '2rem'}}>{totalPrograms}</p>
        </div>
        <div className="stat-card">
          <h3>Total Subjects</h3>
          <p className="brand-name" style={{fontSize: '2rem'}}>{totalSubjects}</p>
        </div>
        <div className="stat-card">
          <h3>Active Status</h3>
          <p style={{color: '#00d2ff', fontWeight: 'bold'}}>System Online</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;