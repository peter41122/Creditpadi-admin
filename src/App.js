import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import HomeLayout from "./layouts/Home";
import AuthLayout from "./layouts/Auth";
import AdminLayout from "./layouts/Admin";

import './assets/scss/creditpadi.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<HomeLayout />} /> */}
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
