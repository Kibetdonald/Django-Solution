import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
// import NavBar from "../components/NavBar";

const HomePage = () => (
  <div className="container">
    <div class="jumbotron mt-5">
      <h1 class="display-4">Authentication System</h1>
      <p class="lead">Hello World</p>
      <hr class="my-4" />
      <p>Click the Log In button</p>
      <Link className="btn btn-login" to="/login" role="button">
        Login
      </Link>
    </div>
  </div>
);
export default HomePage;
