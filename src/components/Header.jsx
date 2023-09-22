import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Link to="/" className="navbar-brand">
          Movies App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/browse" className="nav-link">
              Browse
            </Link>
            <Link to="/tickets" className="nav-link">
              Tickets
            </Link>
            <NavDropdown title="Live shows" id="basic-nav-dropdown">
              <Link to="/shows" className="dropdown-item">
                Musical shows
              </Link>
              <Link to="/shows" className="dropdown-item">
                Standup comedy
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex gap-2">
          <Link to="/signup" className="btn btn-primary mr-4">
            Register
          </Link>
          <Link to="/login" className="btn btn-light">
            Login
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}
