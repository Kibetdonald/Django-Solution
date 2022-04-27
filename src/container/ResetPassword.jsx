import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../actions/auth";

const ResetPasswordPage = ({ reset_password }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Navigate to="/" />;
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
                <h1>Reset Password</h1>

                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <br />

                  <center>
                    <div className="form-group mb-0">
                      <button className="btn btn-login" type="submit">
                        Login
                      </button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(null, { reset_password })(ResetPasswordPage);
