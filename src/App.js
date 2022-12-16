import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeLayout from "./layouts/Home";
import AuthLayout from "./layouts/Auth";
import AdminLayout from "./layouts/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeLayout />} />
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
