import React from 'react';

const Dashboard = ({ data }) => {
  const stats = {
    totalProgs: data.programs.length,
    totalSubs: data.subjects.length,
    active: data.programs.filter(p => p.status === 'active').length,
    withPrereq: data.subjects.filter(s => s.prereq !== 'none').length,
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Programs" value={stats.totalProgs} color="blue" />
        <StatCard title="Subjects" value={stats.totalSubs} color="purple" />
        <StatCard title="Active Programs" value={stats.active} color="green" />
        <StatCard title="W/ Pre-requisites" value={stats.withPrereq} color="orange" />
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color }) => (
  <div className={`p-5 bg-white border-b-4 border-${color}-500 shadow-sm rounded-lg`}>
    <p className="text-gray-500 text-xs font-bold uppercase">{title}</p>
    <p className="text-4xl font-black mt-2">{value}</p>
  </div>
);

export default Dashboard;