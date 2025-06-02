import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link href="#business-leads" className="sidebar-link">
          <i className="bi bi-briefcase me-2"></i> Business Leads
        </Nav.Link>
        <Nav.Link href="#sales" className="sidebar-link">
          <i className="bi bi-graph-up me-2"></i> Sales
        </Nav.Link>
        <Nav.Link href="#planning" className="sidebar-link">
          <i className="bi bi-calendar me-2"></i> Planning
        </Nav.Link>
        <Nav.Link href="#purchase" className="sidebar-link">
          <i className="bi bi-cart me-2"></i> Purchase
        </Nav.Link>
        <Nav.Link href="#stores" className="sidebar-link">
          <i className="bi bi-shop me-2"></i> Stores
        </Nav.Link>
        <Nav.Link href="#maintenance" className="sidebar-link">
          <i className="bi bi-tools me-2"></i> Maintenance
        </Nav.Link>
        <Nav.Link href="#project-mgmt" className="sidebar-link active">
          <i className="bi bi-kanban me-2"></i> Project Mgmt.
        </Nav.Link>
        <Nav.Link href="#quality" className="sidebar-link">
          <i className="bi bi-gem me-2"></i> Quality
        </Nav.Link>
        <Nav.Link href="#dispatch" className="sidebar-link">
          <i className="bi bi-truck me-2"></i> Dispatch
        </Nav.Link>
        <Nav.Link href="#hr-admin" className="sidebar-link">
          <i className="bi bi-person me-2"></i> HR & Admin
        </Nav.Link>
        <Nav.Link href="#accounts" className="sidebar-link">
          <i className="bi bi-calculator me-2"></i> Accounts
        </Nav.Link>
        <Nav.Link href="#finance" className="sidebar-link">
          <i className="bi bi-coin me-2"></i> Finance
        </Nav.Link>
        <Nav.Link href="#settings" className="sidebar-link">
          <i className="bi bi-gear me-2"></i> Settings
        </Nav.Link>
        <Nav.Link href="#support" className="sidebar-link">
          <i className="bi bi-headset me-2"></i> Support
        </Nav.Link>
      </Nav>
      <div className="sidebar-footer">
        <img
          src="https://via.placeholder.com/20x20.png?text=IDMS" // Replace with actual logo
          alt="IDMS Logo"
          className="me-2"
        />
        Powered by IDMS
      </div>
    </div>
  );
};

export default Sidebar;