
import {Container,Nav ,Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark p-4">
      <Container>
        <Navbar.Brand href="#home"><h1 className="text-light">FRANKLIN ASPERO</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/skills">Skills</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/projects">Projects</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavigationBar;