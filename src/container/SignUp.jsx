import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
import axios from "axios";
import googleImg from "../assets/images/2.png";

const SignUpPage = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(first_name, last_name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  // const continueWithFacebook = async () => {
  //     try {
  //         const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`)

  //         window.location.replace(res.data.authorization_url);
  //     } catch (err) {

  //     }
  // };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  if (accountCreated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <h3 className="smartLogo">Authentication</h3>
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Create Account</h1>

                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name*"
                      name="first_name"
                      value={first_name}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name*"
                      name="last_name"
                      value={last_name}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email*"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password*"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      minLength="6"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Confirm Password*"
                      name="re_password"
                      value={re_password}
                      onChange={(e) => onChange(e)}
                      minLength="6"
                      required
                    />
                  </div>
                  <br />
                  <center>
                    <div className="form-group mb-0">
                      <button className="btn btn-login" type="submit">
                        Register{" "}
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
                    Already have an account? <Link to="/login">Sign In</Link>
                  </p>
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

export default connect(mapStateToProps, { signup })(SignUpPage);
