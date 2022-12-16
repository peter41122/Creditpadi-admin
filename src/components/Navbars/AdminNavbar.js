import React from "react";

const AdminNavbar = (props) => {
  return (
    <div id="header" class="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a className="navbar-brand" href="/admin/dashboard">
          Creditpadi
        </a>
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="#/"
            >
              <img
                src={require("../../assets/img/admin/avatar-man.png")}
                alt="Profile"
                className="rounded-circle"
              />
              <span className="d-none d-md-block ps-2">
                A. Steven
              </span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Kevin Anderson</h6>
                <span>Web Designer</span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="#/"
                >
                  <i className="bi bi-person"></i>
                  <span>My Profile</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="#/"
                >
                  <i className="bi bi-gear"></i>
                  <span>Account Settings</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="pages-faq.html"
                >
                  <i className="bi bi-question-circle"></i>
                  <span>Need Help?</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="#/"
                >
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
