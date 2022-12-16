import React from "react";
import Navbar from "../components/Navbars/HomeNavbar";
import LandingPage from "../views/Index";
import Footer from "../components/Footers/HomeFooter";

import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap";

import "../assets/scss/creditpadi-home.scss";

const Home = () => {
  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);

  return (
    <div className="main-content">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Home;
