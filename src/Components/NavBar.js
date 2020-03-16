import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Button from "react-bootstrap/Button";
import { Nav } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#">
          <img
            src="images/inclusion-logo-retina.png"
            width="150"
            height="25"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#">Applicant</Nav.Link>
          <Nav.Link href="/login">Admin</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
