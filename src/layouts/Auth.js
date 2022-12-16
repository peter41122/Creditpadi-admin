import React from "react";
// import Register from "../views/Register";
import { Routes, Route, Navigate } from "react-router-dom";

import routes from "../routes";

import "../assets/scss/creditpadi-auth.scss";

const Auth = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        console.table(prop);
        return (
          <Route
            path={prop.layout + prop.path}
            element={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  console.log("-----", getRoutes(routes));

  return (
    <>
      Auth Layout
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Navigate replace to="/auth/signin" />} />
      </Routes>
    </>
  );
};

export default Auth;
