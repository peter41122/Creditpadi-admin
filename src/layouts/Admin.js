import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminNavbar from "../components/Navbars/AdminNavbar";
import AdminFooter from "../components/Footers/AdminFooter";
import Sidebar from "../components/Sidebar/Sidebar";

import routes from "../routes";

import "../assets/scss/creditpadi-admin.scss";

const Admin = () => {
  const [collapse, setCollapse] = useState(true);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return <Route path={prop.path} element={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <AdminNavbar collapse={collapse} setCollapse={handleCollapse} />
      <Sidebar collapse={collapse} routes={routes} />
      <main className={`maincontent ${collapse ? "sidebar-nav-collapsed" : ""}`} >
        <Routes>
          {getRoutes(routes)}
          <Route
            path="/*"
            element={<Navigate replace to="/admin/dashboard" />}
          />
        </Routes>
      </main>
      <AdminFooter collapse={collapse} />
    </>
  );
};

export default Admin;
