import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar-container">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-title">
            <span> Real</span>Estate
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavLink to="/" className="link">
                Home
              </NavLink>
              <NavLink to="/services" className="link">
                Services
              </NavLink>
              <NavLink to="/features" className="link">
                Features
              </NavLink>
              <NavLink to="/about" className="link">
                About Us
              </NavLink>
              <NavLink to="/contact" className="link">
                Contact Us
              </NavLink>
            </Nav>
            <Nav>
              <Nav.Link to="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} to="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
