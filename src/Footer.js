import React from "react";
import Container from "@material-ui/core/Container";

import { NavbarBrand, Navbar } from "react-bootstrap";
export function Footer() {
  return (
    <div style={{ textAlign: "center" }}>
      {" "}
      <Navbar bg="dark" expand="xl" fixed="bottom">
        <Container>
          <NavbarBrand>
            Contact Us! | 555-565-5555 | myemail@email.com
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
