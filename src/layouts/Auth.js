import React from "react";
// import Register from "../views/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "../routes";

import "../assets/scss/creditpadi-auth.scss";

const Auth = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.path}
            element={prop.component}
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
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Navigate replace to="/auth/signup" />} />
      </Routes>
    </>
  );
};

export default Auth;
