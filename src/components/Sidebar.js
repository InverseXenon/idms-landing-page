import '../App.css';
import Logo from '../assets/logo.svg'; // Import the logo only

function Sidebar({ activePage, onMenuClick }) {
  const menuItems = [
    { id: "Business Leads", icon: "bi-briefcase" },
    { id: "Sales", icon: "bi-graph-up" },
    { id: "Planning", icon: "bi-person-workspace" },
    { id: "Purchase", icon: "bi-cart" },
    { id: "Stores", icon: "bi-shop" },
    { id: "Maintenance", icon: "bi-tools" },
    { id: "Project Mgmt.", icon: "bi-kanban" },
    { id: "Quality", icon: "bi-gem" },
    { id: "Dispatch", icon: "bi-truck" },
    { id: "HR & Admin", icon: "bi-person" },
    { id: "Accounts", icon: "bi-currency-rupee" },
    { id: "Finance", icon: "bi-coin" },
    { id: "Settings", icon: "bi-gear" },
    { id: "Support", icon: "bi-headset" },
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div
          key={item.id}
          className={`sidebar-item ${activePage === item.id ? "active" : ""} color-${index % 5}`}
          onClick={() => onMenuClick(item.id)}
        >
          <div className="icon-container">
            <i className={`${item.icon} menu-icon`}></i>
          </div>
          <span className="menu-text">{item.id}</span>
        </div>
      ))}
      <div className="powered-by">
        <div className="icon-container">
          <img
            src={Logo}
            alt="IDMS Logo"
            className="powered-by-logo"
          />
        </div>
        <span>Powered by IDMS</span>
      </div>
    </div>
  );
}

export default Sidebar;