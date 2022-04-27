import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { googleAuthenticate } from "../actions/auth";
import queryString from "query-string";

const GoogleLogin = ({ googleAuthenticate }) => {
  let location = useLocation();

  useEffect(() => {
    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;

    console.log("State: " + state);
    console.log("Code: " + code);

    if (state && code) {
      googleAuthenticate(state, code);
    }
  }, [location]);

  return (
    <center>
      <div className="container">
        <div class="jumbotron mt-5">
          <h1 class="display-4">Welcome to Auth System!</h1>

          <hr class="my-4" />

          <Link className="btn btn-login" to="/login" role="button">
            Login
          </Link>
        </div>
      </div>
    </center>
  );
};

export default connect(null, { googleAuthenticate })(GoogleLogin);
