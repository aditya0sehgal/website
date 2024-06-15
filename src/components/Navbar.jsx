function Navbar({ theme, changeTheme }) {
  return (
    <>
      <nav
        id="main-navbar"
        className={`navbar navbar-expand-md sticky-top bg-${theme} p-3`}
        data-bs-theme={theme}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#About Me">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Skills & Certifications">
                  Skills & Certifications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Work Experience">
                  Work Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact Me">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <a className="toggler" onClick={changeTheme}>
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
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
