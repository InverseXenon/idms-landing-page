import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import '../styles/App.css';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;