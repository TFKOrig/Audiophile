import React from 'react';
import "./index.css";
import "./responsive.css";
import yx1Desktop from "../../assests/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import yx1Tablet from "../../assests/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import yx1Mobile from "../../assests/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import { Link } from "react-router-dom";


const ProductYX1 = () => {
  return (
    <>
      <div className="yx1p container">
        <div className="yx1p-left">
          <img
            src={yx1Desktop}
            alt="YX1 Product"
            className="yx1p-desktop"
          />
          <img
            src={yx1Tablet}
            alt="YX1 Product"
            className="yx1p-tablet img-fluid"
          />
          <img
            src={yx1Mobile}
            alt="YX1 Product"
            className="yx1p-mobile img-fluid"
          />
        </div>
        <div className="yx1p-right">
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
          <h1 className="yx1p-heading text-focus-in">
          YX1 WIRELESS EARPHONES
          </h1>
          <p className="yx1p-content text-focus-in">
          Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
          </p>
          <Link to="/yx1" type="button" className="btn yx1p-btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProductYX1
