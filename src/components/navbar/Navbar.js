import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{ zIndex: "100" }}
      id="nav"
      className="navbar navbar-expand-md navbar-light py-3 position-fixed w-100"
    >
      <div className="container">
        <a href="#" className="navbar-brand">
          <img className="navbar-logo" src="/assets/logo.png" alt="logo" />
        </a>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li
              data-toggle="collapse"
              data-target="#navbar"
              className="d-block d-md-none nav-item"
            >
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="d-none d-md-block nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              data-toggle="collapse"
              data-target="#navbar"
              className="d-block d-md-none nav-item"
            >
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="d-none d-md-block nav-item">
              <NavLink
                to="/services"
                activeClassName="selected"
                className="nav-link"
              >
                Services
              </NavLink>
            </li>
            <li
              data-toggle="collapse"
              data-target="#navbar"
              className="d-block d-md-none nav-item"
            >
              <Link to="/photos" className="nav-link">
                Photos
              </Link>
            </li>
            <li className="d-none d-md-block nav-item">
              <NavLink
                to="/photos"
                activeClassName="selected"
                className="nav-link"
              >
                Photos
              </NavLink>
            </li>
            <li
              data-toggle="collapse"
              data-target="#navbar"
              className="d-block d-md-none nav-item"
            >
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="d-none d-md-block nav-item">
              <NavLink
                to="/contact"
                activeClassName="selected"
                className="nav-link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
