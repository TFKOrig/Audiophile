import React from "react";
import "./index.css";
import "./responsive.css";
import desktopImg from "../../assests/home/desktop/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

const HDisplayYX1 = () => {
  return (
    <>
      <div className="yx-1">
        <div className="yx1-left">
          <img src={desktopImg} alt="Desktop" className="desktopImg img-fluid" />
        </div>
        <div className="yx1-right">
            <h1 className="yx1-title">YX1 EARPHONES</h1>
            <Link to="/earphones" className="yx1-btn-link">SEE PRODUCT</Link>
        </div>
      </div>
    </>
  );
};

export default HDisplayYX1;
