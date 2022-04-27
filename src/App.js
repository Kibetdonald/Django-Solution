// import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./container/HomePage";
import ActivatePage from "./container/Activate";
import LoginPage from "./container/LoginPage";
import ResetPasswordPage from "./container/ResetPassword";
import ResetPasswordConfirmPage from "./container/ResetPasswordConfirm";
import SignUpPage from "./container/SignUp";
import GoogleLogin from "./container/GoogleLogin";
import Layout from "./HOC/Layout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/activate/:uid/:token"
              element={<ActivatePage />}
            />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/resetpass" element={<ResetPasswordPage />} />
            <Route
              exact
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirmPage />}
            />
            <Route exact path="/signUp" element={<SignUpPage />} />
            <Route exact path="/google" component={GoogleLogin} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
