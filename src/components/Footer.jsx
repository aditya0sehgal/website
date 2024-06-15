import reactLogo from "../assets/react.svg";

function Footer({ theme }) {
  return (
    <div className="footer">
      <nav
        className={`navbar navbar-expand-md fixed-bottom bg-${theme} p-3`}
        data-bs-theme={theme}
      >
        <div className="container-fluid">
          <ul id="footer-ul" className="navbar-nav">
            <li className="nav-item">
              <a
                style={
                  theme === "light" ? { color: "blue" } : { color: "white" }
                }
                target="blank"
                href="https://www.facebook.com/aditya.sehgal.71066"
              >
                <i className="fa-brands fa-2x fa-facebook"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                style={theme === "light" ? {} : { color: "white" }}
                target="blank"
                href="https://www.linkedin.com/in/aditya0sehgal"
              >
                <i className="fa-brands fa-2x fa-linkedin"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                style={
                  theme === "light" ? { color: "black" } : { color: "white" }
                }
                target="blank"
                href="https://github.com/aditya0sehgal/"
              >
                <i className="fa-brands fa-2x fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                style={
                  theme === "light" ? { color: "red" } : { color: "white" }
                }
                target="blank"
                href="mailto:aditya0sehgal.dev@gmail.com"
              >
                <i className="fa-solid fa-2x fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a className="navbar-brand" href="https://react.dev" target="_blank">
            Made with <i className="fa-solid fa-heart"></i> using &nbsp;
            <img
              src={reactLogo}
              alt="Logo"
              width="40"
              height="30"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
