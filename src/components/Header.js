import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="header">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="https://via.placeholder.com/40x40.png?text=IDMS" // Replace with actual logo URL if available
            alt="IDMS Infotech"
            className="d-inline-block align-top"
          />
          {' IDMS Infotech'}
        </Navbar.Brand>
        <div className="mx-auto">
          Welcome - Functional Support
        </div>
        <Button variant="danger" className="ms-auto logout-btn">
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;