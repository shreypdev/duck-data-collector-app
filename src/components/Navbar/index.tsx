import React from "react";
import "./Navbar.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaUser, FaSignInAlt } from "react-icons/fa";

export const NavigationBar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Duck Data Collector</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/add-new-data">Add New Data</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signup">
              <FaUser /> Sign Up
            </Nav.Link>
            <Nav.Link href="/login">
              <FaSignInAlt /> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar;
