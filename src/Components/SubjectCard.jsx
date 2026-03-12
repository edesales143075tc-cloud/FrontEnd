import React from 'react';

const SubjectCard = ({ subject, onClick }) => (
  <tr>
    <td><b style={{color: '#00d2ff'}}>{subject.code}</b></td>
    <td>{subject.title}</td>
    <td><span className="badge badge-term">{subject.term}</span></td>
    <td>
      <button 
        className="login-btn" 
        style={{ padding: '5px 15px', fontSize: '0.8rem', width: 'auto' }}
        onClick={() => onClick(subject)}
      >
        View
      </button>
    </td>
  </tr>
);

export default SubjectCard;