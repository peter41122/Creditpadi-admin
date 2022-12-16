import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleClick = (route, data) => {
    navigate(route, data);
  };

  return (
    <div className="authframe">
      <div className="signup-content row g-0">
        <div className="left-panel d-none d-md-block col-6 col-md-6">
          <div className="brand my-auto">
            <a className="navbar-brand" href="/">
              Creditpadi
            </a>
          </div>
        </div>
        <div className="right-panel col-12 col-md-6">
          <div className="container">
            <div className="row g-3 justify-content-end mx-1 my-auto">
              <div className="col-auto">
                <label className="col-form-label">
                  Already on{" "}
                  <b>
                    <i>Creditpadi</i>
                  </b>{" "}
                  ?
                </label>
              </div>
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-default rounded-pill px-4"
                  onClick={() => handleClick("/auth/signin")}
                >
                  Sign In
                </button>
              </div>
            </div>
            <div className="container p-5 m-auto">
              <form>
                <div className="my-5">
                  <h3 className="page-title text-center">
                    Sign Up for an account
                  </h3>
                </div>
                <div className="d-grid gap-4 social-sign-btn-group">
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-default rounded-pill"
                  >
                    <img
                      className="img-fluid float-start"
                      src={require("../assets/img/auth/google.png")}
                      alt="GoogleLogo"
                      width={30}
                    />
                    <span className="m-auto">Continue with Google</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-default rounded-pill"
                  >
                    <img
                      className="img-fluid float-start"
                      src={require("../assets/img/auth/phone.png")}
                      alt="PhoneLogo"
                      width={28}
                    />
                    Continue with Phone
                  </button>
                </div>
                <div className="or-separator my-5 snapple-seperator">
                  <span className="or-text">
                    Or create an account with your email
                  </span>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="firstname"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-7">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="lastname"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <p className="px-3">
                  By clicking Agree & Join, you agree to the Creditpadi{" "}
                  <a href="#/">User Agreement</a>,{" "}
                  <a href="#/">Privacy Policy</a>, and{" "}
                  <a href="#/">Cookie Policy</a>.
                </p>
                <button
                  type="submit"
                  className="btn btn-default btn-lg rounded-pill px-4 w-100"
                  onClick={() => handleClick("/admin")}
                >
                  Agree & Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
