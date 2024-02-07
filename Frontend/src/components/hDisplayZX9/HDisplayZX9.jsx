import React from "react";
import "./index.css";
import "./responsive.css";
import desktopImg from "../../assests/home/desktop/image-speaker-zx9.png";
import tabletImg from "../../assests/home/tablet/image-speaker-zx9.png";
import mobileImg from "../../assests/home/mobile/image-speaker-zx9.png";
import { Link } from "react-router-dom";

const HDisplayZX9 = () => {
  return (
    <>
      <div className="zx-9 ">
        <div className="image">
          <img src={desktopImg} alt="speaker-zx9" className="desktop-img" />
          <img src={tabletImg} alt="speaker-zx9" className="tablet-img" />
          <img
            src={mobileImg}
            alt="speaker-zx9"
            className="mobile-img"
          />
        </div>
        <div className="detail">
          <h1 className="title">ZX9 SPEAKER</h1>
          <p className="desc">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button type="button" className="ZX9-btn">
            <Link className="zx9-link" to="/speakers">SEE PRODUCT</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default HDisplayZX9;
