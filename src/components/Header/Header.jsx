import React from 'react';
import logo from "../../images/logo.png";
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />{' '}
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/review">Review</Nav.Link>
            <Nav.Link href="/manage">Manage Review</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
