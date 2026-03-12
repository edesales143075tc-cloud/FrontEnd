import React from 'react';
import SubjectCard from './SubjectCard';
import { mockData } from '../mockData';

const SubjectList = ({ onSelect }) => (
  <div>
    <h2 style={{ marginBottom: '20px' }}>Subject Catalog</h2>
    <table className="data-table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Title</th>
          <th>Term</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {mockData.subjects.map(s => (
          <SubjectCard key={s.code} subject={s} onClick={onSelect} />
        ))}
      </tbody>
    </table>
  </div>
);

export default SubjectList;