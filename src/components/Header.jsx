import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Browse</Nav.Link>
            <Nav.Link href="#link">Tickets</Nav.Link>
            <NavDropdown title="Live shows" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Musical shows
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Standup comedy
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex gap-2">
          <button className="btn btn-primary mr-4">Register</button>
          <button className="btn btn-light">Login</button>
        </div>
      </Container>
    </Navbar>
  );
}
