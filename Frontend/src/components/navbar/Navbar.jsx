import React from "react";
import { NavLink } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap";
import logo from "../../assests/logo/logo.svg";
import cart from "../../assests/shared/desktop/icon-cart.svg";
import "./index.css";
import "./responsive.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container" id="container">
          <NavLink className="navbar-brand logo" to="/">
            <img src={logo} alt="Audiophile Logo" className="img-fluid" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/headphones">
                  HEADPHONES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/speakers">
                  SPEAKERS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/earphones">
                  EARPHONES
                </NavLink>
              </li>
            </ul>
          </div>
          <button type="button" className="cart">
            <img src={cart} alt="Cart Icon" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
