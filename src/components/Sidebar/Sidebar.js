import React from "react";
import { Link } from "react-router-dom";

import routes from "../../routes";

const Sidebar = ({ collapse }) => {
  const [active, setActive] = React.useState(3);

  const createLinks = (routes, type, collapse) => {
    return routes.map((prop, key) => {
      if (prop.type === type) {
        return (
          <li
            className={`nav-item ${active === key ? "active" : ""}`}
            key={key}
            onClick={() => setActive(key)}
          >
            <Link className="nav-link" to={prop.layout + prop.path}>
              <img
                src={prop.icon}
                alt={`${prop.name} Icon`}
                width={25}
                className={collapse ? "m-auto" : ""}
              />
              {!collapse && <span className="ps-3">{prop.name}</span>}
            </Link>
          </li>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <aside
      id="sidebar"
      className={`sidebar d-flex flex-column ${collapse ? "sidebar-nav-collapsed" : ""}`}
    >
      <ul className="sidebar-nav flex-grow-1" id="sidebar-nav">
        {createLinks(routes, 2, collapse)}
      </ul>
      <ul className="sidebar-nav" id="sidebar-nav">
        {createLinks(routes, 3, collapse)}
      </ul>
    </aside>
  );
};

export default Sidebar;
