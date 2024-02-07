import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./responsive.css";
import logo from "../../assests/logo/logo.svg";
import facebook from "../../assests/shared/desktop/icon-facebook.svg";
import twitter from "../../assests/shared/desktop/icon-twitter.svg";
import instagram from "../../assests/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="right-footer-box">
          <img src={logo} alt="Logo" className="footer-img"/>
          <p className="footer-content">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="copyright">Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="left-footer-box">
          <div className="footer-links">
            <Link to="/" className="footer-link">
              HOME
            </Link>
            <Link to="/headphones" className="footer-link">
              HEADPHONES
            </Link>
            <Link to="/speakers" className="footer-link">
              SPEAKERS
            </Link>
            <Link to="/earphones" className="footer-link">
              EARPHONES
            </Link>
          </div>
          <div className="footer-icons">
            <img src={facebook} alt="Icons" className="f-icons"/>
            <img src={twitter} alt="Icons" className="f-icons"/>
            <img src={instagram} alt="Icons" className="f-icons"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
