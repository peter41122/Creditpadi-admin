import React from "react";
import routes from "../../routes";

const Sidebar = ({ collapse }) => {
  const createLinks = (routes, collapse) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <li className="nav-item" key={key}>
            <a
              className="nav-link "
              href={prop.layout + prop.path}
              activeclassname="active"
            >
              <img src={prop.icon} alt={`{prop.name} Icon`} width={25} className={collapse && 'm-auto'} />
              {!collapse && <span className="ps-3">{prop.name}</span>}
            </a>
          </li>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <aside id="sidebar" className={`sidebar ${collapse ? "sidebar-nav-collapsed" : ""}`}>
      <ul
        className="sidebar-nav"
        id="sidebar-nav"
      >
        {createLinks(routes, collapse)}
      </ul>
    </aside>
  );
};

export default Sidebar;
