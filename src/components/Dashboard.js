import React from 'react';
import Graph from './Graph';
import PieChart from './PieChart';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3 style={{marginLeft:"285px", marginTop:"50px"}}>Dashboard</h3>
      <div className="charts-container">
        <div className="chart-item">
          <Graph />
        </div>
        <div className="chart-item">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
