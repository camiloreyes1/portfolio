import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

function NavbarComponent() {


    return (
    <div >
      <Navbar className="NB1" bg="dark-subtle" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand  className="fw-bold m-2" href="/">JCReyes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/all-projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
          </Nav>
          <Nav >
            
          </Nav>
        </Container>
      </Navbar>
   
    </div>

    );
}



export default NavbarComponent