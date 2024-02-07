import React from "react";
import "./index.css";
import "./responsive.css";

const FeaturingProduct = (props) => {
  return (
    <>
      <div className="container featuringProduct">
        <div className="fp-parent">
          {/* Desktop Images */}
          <img
            src={props.galleryImgOneDesk}
            alt="Featured Product"
            className=" fp-Desktop item-1"
          />
          <img
            src={props.galleryImgTwoDesk}
            alt="Featured Product"
            className=" fp-Desktop item-2"
          />
          <img
            src={props.galleryImgThreeDesk}
            alt="Featured Product"
            className=" fp-Desktop item-3"
          />

          {/* Tablet Images */}
          <img
            src={props.galleryImgOneTab}
            alt="Featured Product"
            className=" fp-Tablet item-1 img-fluid"
          />
          <img
            src={props.galleryImgTwoTab}
            alt="Featured Product"
            className=" fp-Tablet item-2 img-fluid"
          />
          <img
            src={props.galleryImgThreeTab}
            alt="Featured Product"
            className=" fp-Tablet item-3 img-fluid"
          />

          {/* Mobile Images */}
          <img
            src={props.galleryImgOneMob}
            alt="Featured Product"
            className=" fp-Mobile item-1 img-fluid"
          />
          <img
            src={props.galleryImgTwoMob}
            alt="Featured Product"
            className=" fp-Mobile item-2 img-fluid"
          />
          <img
            src={props.galleryImgThreeMob}
            alt="Featured Product"
            className=" fp-Mobile item-3 img-fluid"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturingProduct;
