import React from "react";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import AdminFooter from "../components/Footers/AdminFooter";
import Sidebar from "../components/Sidebar/Sidebar";

import routes from "../routes";

const Admin = (props) => {

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
      />
      <AdminNavbar />
      <AdminFooter />
    </>
  );
};

export default Admin;
