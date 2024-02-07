import React from "react";
import "./index.css";
import "./responsive.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="main">
        <div className="header">
          <div className="container h-content">
            <p className="new-product container">NEW PRODUCT</p>
            <h1 className="container header__title">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <div className="disc">
              <p className="container description">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>
            <div className="container small-screen">
              <p className="container description">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>
            <Link to="/xx99mark2" className="link">
              <button type="button" className="container btn">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
