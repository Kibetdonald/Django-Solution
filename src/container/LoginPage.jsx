import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import googleImg from "../assets/images/1.png";
// import googleImg from "../assets/images/2.png";
import { login } from "../actions/auth";
import axios from "axios";

const LoginPage = ({ isAuthenticated, login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:8000/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  const continueWithFacebook = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  if (isAuthenticated) {
    return <Navigate to="/nice" />;
  }
  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <h3 className="smartLogo">Authentication</h3>
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>

                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        label="Email"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                      />
                      <div
                        id="validationServerUsernameFeedback"
                        className="invalid-feedback"
                      >
                        Please enter your Email Address.
                      </div>
                    </div>
                    <br />
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        minLength="6"
                        required
                      />

                      {/* <label>
                        <input onClick={handleToggle} type="checkbox" /> Show
                        password
                      </label> */}
                    </div>
                    {/* <label>
                      <input type="checkbox" /> Show password
                    </label> */}
                    <br />
                    {/* <ReCAPTCHA
                      sitekey="6Ldui9ceAAAAAND8D15Aqe4moWGeb7hyS6mY1a9y"
                      onChange={onChange}
                      secretkey="6Ldui9ceAAAAAMcCnqekdVQCNQXIJk8YuyNrpaGI"
                    /> */}

                    <center>
                      <div className="form-group mb-0">
                        <button className="btn btn-login" type="submit">
                          Login
                        </button>
                      </div>
                    </center>
                  </form>

                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>

                  <div className="social-login">
                    <img
                      onClick={continueWithGoogle}
                      className="button-google"
                      src={googleImg}
                      alt="googleImg"
                    />
                  </div>

                  <div className="text-center dont-have">
                    <p className="mt-3">
                      Don't have an account? <Link to="/signUp">Sign Up</Link>
                    </p>
                    <p className="mt-3">
                      Forgot your Password?{" "}
                      <Link to="/resetpass">Reset Password</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginPage);
