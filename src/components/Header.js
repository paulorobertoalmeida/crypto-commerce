import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const Header = () => {
  return (
      <div className="header-nb">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Cypto-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#Crypto Pieces">Link</Nav.Link>
                </Nav>
                
                <Button variant="outline-success">Login</Button>
                
            </Navbar.Collapse>
            </Navbar>
      </div>

    );
};

export default Header;