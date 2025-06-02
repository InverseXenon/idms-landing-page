import React from 'react';
import '../App.css';
import Logo from '../assets/logo.svg';
import BusinessLeadsIcon from '../assets/businessLeads.svg';
import SalesIcon from '../assets/sales.svg';
import PlanningIcon from '../assets/planning.svg';
import PurchaseIcon from '../assets/purchase.svg';
import StoreIcon from '../assets/store.svg';
import MaintenanceIcon from '../assets/maintenance.svg';
import ProductionIcon from '../assets/production.svg';
import QualityIcon from '../assets/quality.svg';
import DispatchIcon from '../assets/dispatch.svg';
import HrIcon from '../assets/hr.svg';
import AccountsIcon from '../assets/accounts.svg';
import FinanceIcon from '../assets/finance.svg';
import SettingsIcon from '../assets/settings.svg';
import SupportIcon from '../assets/support.svg';

function Sidebar({ activePage, onMenuClick }) {
  const menuItems = [
    { id: "Business Leads", icon: BusinessLeadsIcon },
    { id: "Sales", icon: SalesIcon },
    { id: "Planning", icon: PlanningIcon },
    { id: "Purchase", icon: PurchaseIcon },
    { id: "Stores", icon: StoreIcon },
    { id: "Maintenance", icon: MaintenanceIcon },
    { id: "Project Mgmt.", icon: ProductionIcon },
    { id: "Quality", icon: QualityIcon },
    { id: "Dispatch", icon: DispatchIcon },
    { id: "HR & Admin", icon: HrIcon },
    { id: "Accounts", icon: AccountsIcon },
    { id: "Finance", icon: FinanceIcon },
    { id: "Settings", icon: SettingsIcon },
    { id: "Support", icon: SupportIcon },
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
            <img
              src={item.icon}
              alt={`${item.id} Icon`}
              className="menu-icon"
              style={{ width: '20px', height: '20px', display: 'block' }}
              onError={() => console.log(`Failed to load icon for ${item.id}`)}
            />
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
