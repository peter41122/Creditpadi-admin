import React from "react";

const Footer = ({ collapse }) => {
  return (
    <footer className={`footer ${collapse ? "sidebar-nav-collapsed" : ""}`}>
      <div className="px-4">
        <div className="align-items-center justify-content-xl-between row">
          <div className="col-xl-6">
            <div className="copyright text-center text-xl-start text-muted">
              © {new Date().getFullYear()} Creditpadi Consulting Group
            </div>
          </div>
          <div className="col-xl-6"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
