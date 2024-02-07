import React from "react";
import "./index.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import zx7Desktop from "../../assests/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import zx7Tablet from "../../assests/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import zx7Mobile from "../../assests/product-zx7-speaker/mobile/image-category-page-preview.jpg";




const Productzx7p = () => {
  return (
    <>
      <div className="zx7p container">
        <div className="zx7p-left">
          <img
            src={zx7Desktop}
            alt="ZX7 Product"
            className="zx7p-desktop"
          />
          <img
            src={zx7Tablet}
            alt="ZX7 Product"
            className="zx7p-tablet img-fluid"
          />
          <img
            src={zx7Mobile}
            alt="ZX7 Product"
            className="zx7p-mobile img-fluid"
          />
        </div>
        <div className="zx7p-right">
          <h1 className="zx7p-heading text-focus-in">
            ZX7 SPEAKER
          </h1>
          <p className="zx7p-content text-focus-in">
          Stream high quality sound wirelessly with minimal to no loss. The zx7p speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
          </p>
          <Link to="/zx7" type="button" className="btn zx7p-btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </>
  )
}

export default Productzx7p
