import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Part-2
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="/formDemo">
                      UseEffect
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/useSearch">
                      searchWithUseEffect
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/preStea">
                      Exp PerState
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Part-3
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="/performance ">
                      performance
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Part-4
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="/redux ">
                      Redux
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/reduxToo ">
                      ReduxToolKite
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="/performance ">
                      Redux
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/performance ">
                      Redux
                    </a>
                  </li> */}
              
                </ul>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link" href="/formDemo">
                  UseEffect
                </a>
              </li>
            
              <li className="nav-item">
                <a className="nav-link" href="/useSearch">
                  searchWithUseEffect
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/preStea">
                  Exp PerState
                </a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
