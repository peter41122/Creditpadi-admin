import React from "react";
import routes from "../../routes";

const Sidebar = () => {
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <li className="nav-item" key={key}>
            <a
              className="nav-link "
              href={prop.layout + prop.path}
              activeclassname="active"
            >
              <img src={prop.icon} alt={`{prop.name} Icon`} width={25} />
              <span className="ps-3">{prop.name}</span>
            </a>
          </li>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {createLinks(routes)}
      </ul>
    </aside>
  );
};

export default Sidebar;
