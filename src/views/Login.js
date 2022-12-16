import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
                  New to{" "}
                  <b>
                    <i>Creditpadi</i>
                  </b>{" "}
                  ?{" "}
                </label>
              </div>
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-default rounded-pill px-4"
                  onClick={() => handleClick("/auth/signup")}
                >
                  Join now
                </button>
              </div>
            </div>
            <div className="container p-5 m-auto">
              <form>
                <div className="my-3 my-md-5 pt-5">
                  <h1 className="page-title fw-bold text-center">
                    Welcome Back
                  </h1>
                  <h3 className="text-center">
                    Sign In your Creditpadi account
                  </h3>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="Email or Phone"
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
                <button
                  type="submit"
                  className="btn btn-default btn-lg rounded-pill px-4 w-100"
                >
                  Sign In
                </button>
                <div className="or-separator my-3 snapple-seperator">
                  <span className="or-text">or</span>
                </div>
                <button
                  type="button"
                  className="btn btn-lg btn-outline-default rounded-pill px-4 w-100"
                >
                  <img
                    className="img-fluid float-start"
                    src={require("../assets/img/auth/google.png")}
                    alt="GoogleLogo"
                    width={30}
                  />
                  <span className="m-auto">Sign in with Google</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
