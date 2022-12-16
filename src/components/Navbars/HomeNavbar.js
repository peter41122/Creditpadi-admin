import React from "react";
import { useNavigate } from "react-router-dom";

const HomeNavbar = () => {
  const navigate = useNavigate();

  const handleClick = (route, data) => {
    navigate(route, data);
  };

  return (
    <nav className="navbar-top navbar-horizontal navbar-dark navbar navbar-expand-md py-4">
      <div className="px-4 container">
        <a className="navbar-brand" href="/">
          Creditpadi
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="navbar-brand text-dark mb-0" id="offcanvasNavbarLabel">
              Creditpadi
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="ms-auto navbar-nav">
              <li className="nav-item">
                <a className="nav-link-icon nav-link" href="/">
                  <span className="nav-link-inner--text">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link-icon nav-link" href="/">
                  <span className="nav-link-inner--text">Products</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link-icon nav-link" href="/">
                  <span className="nav-link-inner--text">About</span>
                </a>
              </li>
              <li className="nav-item d-none d-md-block">
                <button
                  className="btn btn-warning rounded-pill text-light mx-3"
                  type="button"
                  onClick={() => handleClick("/auth/signup")}
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
