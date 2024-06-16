import { Container, Row, Col } from "react-bootstrap";
import reactLogo from "../assets/react.svg";

function Footer({ theme }) {
  return (
    <footer className={`bg-${theme} p-3`} data-bs-theme={theme}>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs="auto" className="d-flex justify-content-start">
            <a
              style={theme === "light" ? { color: "blue" } : { color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/aditya.sehgal.71066"
              className="mx-2"
            >
              <i className="fa-brands fa-2x fa-facebook"></i>
            </a>
            <a
              style={theme === "light" ? {} : { color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/aditya0sehgal"
              className="mx-2"
            >
              <i className="fa-brands fa-2x fa-linkedin"></i>
            </a>
            <a
              style={
                theme === "light" ? { color: "black" } : { color: "white" }
              }
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/aditya0sehgal/"
              className="mx-2"
            >
              <i className="fa-brands fa-2x fa-github"></i>
            </a>
            <a
              style={theme === "light" ? { color: "red" } : { color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:aditya0sehgal.dev@gmail.com"
              className="mx-2"
            >
              <i className="fa-solid fa-2x fa-envelope"></i>
            </a>
          </Col>
          <Col
            xs="auto"
            className="ms-auto d-flex justify-content-end align-items-center"
          >
            <a
              className="text-decoration-none"
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={
                theme === "light" ? { color: "black" } : { color: "white" }
              }
            >
              Made with{" "}
              <i className="fa-solid fa-heart"></i> using &nbsp;
              <img
                src={reactLogo}
                alt="Logo"
                width="40"
                height="30"
                className="d-inline-block align-text-top"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
