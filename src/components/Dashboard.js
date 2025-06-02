import React from 'react';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

const Dashboard = () => {
  return (
    <Container fluid className="mt-5 pt-3 dashboard-content">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Masters</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transactions</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Reports</Breadcrumb.Item>
        <Breadcrumb.Item active>Project Mgmt. Overview</Breadcrumb.Item>
      </Breadcrumb>
      <h4>Project Mgmt. Overview</h4>
      <Row className="mb-4">
        <Col md={2}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Projects</Card.Title>
              <Card.Text>6</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>WIP Projects</Card.Title>
              <Card.Text>6</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Closed Projects</Card.Title>
              <Card.Text>0</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total SOW Amount</Card.Title>
              <Card.Text>271.16 Lakh</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Outstanding SOW Amt</Card.Title>
              <Card.Text>10.34 Lakh</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Monthly Projects [By Count]</Card.Title>
              <div className="empty-graph">
                {/* Placeholder for empty graph */}
                <p>No data available</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Monthly Projects [By Amount]</Card.Title>
              <div className="empty-graph">
                {/* Placeholder for empty graph */}
                <p>No data available</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;