import React from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";

import AdminNavbar from "../components/Navbars/AdminNavbar";
import AdminFooter from "../components/Footers/AdminFooter";
import Sidebar from "../components/Sidebar/Sidebar";

import routes from "../routes";

import "../assets/scss/creditpadi-admin.scss";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <Sidebar routes={routes} />
      <AdminNavbar />
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Navigate replace to="/admin/index" />} />
        </Routes>
      <AdminFooter />
    </>
  );
};

export default Admin;
