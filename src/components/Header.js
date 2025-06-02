import '../App.css';
import IDMSLogo from '../assets/IDMS_logo.svg'; // Import the logo with text

function Header({ username }) {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={IDMSLogo} alt="IDMS Logo" className="logo" />
      </div>
      <div className="header-right">
        <span className="welcome-message">Welcome, {username}</span>
        <button className="logout-button">
          <span>Logout</span>
          <i className="bi bi-box-arrow-right logout-icon"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;