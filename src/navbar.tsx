// Navbar page

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from "./Home";
function Navibar() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="./Podcasts">Podcasts</Nav.Link>
              <Nav.Link href="./Movies">Movie List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navibar;