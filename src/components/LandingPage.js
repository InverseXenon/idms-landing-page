import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import '../App.css';

function LandingPage() {
  const [activePage, setActivePage] = useState("Project Mgmt.");
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 4500); // 4.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleMenuClick = (menuItem) => {
    setActivePage(menuItem);
  };

  return (
    <div className="landing-page">
      {showNotification && (
        <div className="notification">
          <span>Login Done Successfully!</span>
          <div className="progress-bar"></div>
        </div>
      )}
      <Header username="Functional Support" />
      <div className="main-content">
        <Sidebar activePage={activePage} onMenuClick={handleMenuClick} />
        <Dashboard />
      </div>
    </div>
  );
}

export default LandingPage;