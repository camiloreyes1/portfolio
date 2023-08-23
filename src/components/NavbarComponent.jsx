import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

function NavbarComponent() {


    return (
    <>
      <Navbar className="NB1" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">JCReyes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/all-projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
    </>

    );
}



export default NavbarComponent