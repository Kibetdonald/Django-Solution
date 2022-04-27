import { React, useState, Fragment } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbars = ({ logout, isAuthenticated }) => {
  const [navigate, setNavigate] = useState(false);

  const logout_user = () => {
    logout();
    setNavigate(true);
  };

  const guestLinks = () => (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          Sign Up
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = () => (
    <li className="nav-item">
      <a className="nav-link" href="#!" onClick={logout_user}>
        Logout
      </a>
    </li>
  );
  return (
    // <Fragment>
    //   <Navbar
    //     className="navbar navbar-expand-lg navbar-light bg-light"
    //     collapseOnSelect
    //   >
    //     <Container>
    //       <Navbar.Brand href="#home">System Authentication</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="me-auto">
    //           <Nav.Link href="#features">Features</Nav.Link>
    //           <Nav.Link href="#pricing">Pricing</Nav.Link>
    //           <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.2">
    //               Another action
    //             </NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.3">
    //               Something
    //             </NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action/3.4">
    //               Separated link
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav>
    //         <div className="collapse navbar-collapse" id="navbarNav">
    //           <ul className="navbar-nav">
    //             <li className="nav-item active">
    //               <Link className="nav-link" to="/">
    //                 Home <span className="sr-only">(current)</span>
    //               </Link>
    //             </li>
    //             {isAuthenticated ? authLinks() : guestLinks()}
    //           </ul>
    //         </div>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    //   {navigate ? <Navigate to="/" /> : <Fragment></Fragment>}
    // </Fragment>
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Auth System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {isAuthenticated ? authLinks() : guestLinks()}
          </ul>
        </div>
      </nav>
      {navigate ? <Navigate to="/" /> : <Fragment></Fragment>}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbars);
