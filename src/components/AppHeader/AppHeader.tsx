import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const AppHeader: React.FC = () => {
  return (
    <header className="mb-4">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Color Picker</Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppHeader;
