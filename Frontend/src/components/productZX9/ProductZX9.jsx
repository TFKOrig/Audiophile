import React from 'react';
import "./index.css";
import "./responsive.css";
import ZX9Desktop from "../../assests/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import ZX9Tablet from "../../assests/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import ZX9Mobile from "../../assests/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import { Link } from "react-router-dom";

const ProductZX9 = () => {
  return (
      <>
      <div className="zx9p container">
        <div className="zx9p-left">
          <img
            src={ZX9Desktop}
            alt="ZX9 Product"
            className="zx9p-desktop"
          />
          <img
            src={ZX9Tablet}
            alt="ZX9 Product"
            className="zx9p-tablet img-fluid"
          />
          <img
            src={ZX9Mobile}
            alt="ZX9 Product"
            className="zx9p-mobile img-fluid"
          />
        </div>
        <div className="zx9p-right">
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
          <h1 className="zx9p-heading text-focus-in">
            ZX9 SPEAKER
          </h1>
          <p className="zx9p-content text-focus-in">
          Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
          </p>
          <Link to="/zx9" type="button" className="btn zx9p-btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProductZX9
