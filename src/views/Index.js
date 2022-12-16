import React from "react";

const Index = () => {
  return (
    <section className="site_container">
      <div className="container-lg h-100 m-auto position-relative">
        <div className="col-8 col-md-5 col-lg-5 banner-mockup d-none d-md-block">
          <img
            className="img-fluid"
            src={require("../assets/img/banner/mobile-group.png")}
            alt="mobile-group.png"
          />
        </div>
        <div className="row d-flex align-items-center banner-content h-100">
          <div className="col-12 col-md-7 col-lg-6 mt-2 mt-md-0 p-md-3 px-5">
            <h1 className="display-4 fw-bold mb-4">
              Manage your expenses intelligently with Creditpadi
            </h1>
            <h6 className="mb-4 fw-light pe-0 pe-sm-5 pe-lg-5 mb-3">
              Creditpadi helps African freelancers and teams to easily manage
              and automate their expenses., and receive payment from anywhere
              with our corporate card.
            </h6>
            <div className="input-group mb-3 get-started-area">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Enter your phone number"
                aria-label="Enter your phone number"
                aria-describedby="button-getstarted"
              />
              <button
                className="btn btn-warning rounded-pill text-light"
                type="button"
                id="button-getstarted"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
