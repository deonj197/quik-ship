import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Navbar, Nav } from "react-bootstrap";

export default function SimpleContainer() {
  return (
    <Navbar bg="info" expand="xl">
      <Navbar.Brand href="#home" style={{ fontSize: "24px" }}>
        Quik Ship
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ fontSize: "20px" }}>
          <Nav.Item>
            <Nav.Link href="#Home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
