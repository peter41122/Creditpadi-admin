import React from "react";

const AdminNavbar = ({ collapse, setCollapse }) => {
  return (
    <div id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <span className="pe-3" onClick={() => setCollapse()}>
          {!collapse ? (
            <i className="bi bi-list toggle-sidebar-btn"></i>
          ) : (
            <i className="bi bi-filter-left toggle-sidebar-btn"></i>
          )}
        </span>
        <a className="navbar-brand ps-4" href="/admin/dashboard">
          Creditpadi
        </a>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-3"
              href="#/"
            >
              <img
                src={require("../../assets/img/admin/avatar-man.png")}
                alt="Profile"
                className="rounded-circle"
              />
              <span className="d-none d-md-block ps-2">A. Steven</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
