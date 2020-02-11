import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
export default function SimpleContainer() {
  return (
    <Navbar bg="info" expand="xl">
      <LinkContainer to="/home" style={{ fontSize: "24px", color: "orange" }}>
        <Navbar.Brand>Quik Ship</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ fontSize: "20px" }}>
          <Nav.Item>
            <NavLink to="/Home" style={{ color: "orange" }}>
              Home
            </NavLink>
          </Nav.Item>
          <NavDropdown
            title="Product"
            style={{ fontSize: "20px", color: "orange" }}
          >
            <LinkContainer to="/shoedata">
              <NavDropdown.Item eventKey="4.1">Shoes</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/shirtdata">
              <NavDropdown.Item eventKey="4.2">Shirts</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item eventKey="4.3">Hats</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Other</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <NavLink to="#" style={{ color: "orange" }}>
              Contact
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
