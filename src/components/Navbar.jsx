import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarComponent({ theme, changeTheme }) {
  return (
    <Navbar
      id="main-navbar"
      bg={theme}
      variant={theme}
      expand="md"
      sticky="top"
      className="p-3"
      data-bs-theme={theme}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="me-auto">
            <Nav.Link href="#About Me">About Me</Nav.Link>
            <Nav.Link href="#Skills & Certifications">
              Skills & Certifications
            </Nav.Link>
            <Nav.Link href="#Work Experience">Work Experience</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
            <Nav.Link href="#Contact Me">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="toggler" onClick={changeTheme}>
          {theme === "light" ? (
            <span style={{ fontSize: "36px" }} className="material-icons">
              dark_mode
            </span>
          ) : (
            <span
              style={{ fontSize: "36px", color: "yellow " }}
              className="material-icons"
            >
              light_mode
            </span>
          )}
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
