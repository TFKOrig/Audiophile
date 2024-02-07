import React from "react";
import "./index.css";
import "./responsive.css";
import XX9Mark2Desktop from "../../assests/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX9Mark2Tablet from "../../assests/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import XX9Mark2Mobile from "../../assests/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import { Link } from "react-router-dom";

const ProductXX99M2 = () => {
  return (
    <>
      <div className="xx99m2 container">
        <div className="xx99m2-left">
          <img
            src={XX9Mark2Desktop}
            alt="XX9 Mark-2 Product"
            className="xx9m2-desktop"
          />
          <img
            src={XX9Mark2Tablet}
            alt="XX9 Mark-2 Product"
            className="xx9m2-tablet img-fluid"
          />
          <img
            src={XX9Mark2Mobile}
            alt="XX9 Mark-2 Product"
            className="xx9m2-mobile img-fluid"
          />
        </div>
        <div className="xx99m2-right">
          <p
            className="new-product"
            style={{
              color: "#d87d4a",
              fontWeight: "400",
              lineHeight: "17px",
            }}
          >
            NEW PRODUCT
          </p>
          <h1 className="xx9m2-heading text-focus-in">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="xx9m2-content text-focus-in">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Link to="/xx99mark2" type="button" className="btn xx9m2-btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductXX99M2;
