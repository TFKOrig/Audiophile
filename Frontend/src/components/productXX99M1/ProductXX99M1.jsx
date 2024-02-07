import React from "react";
import "./index.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import xx99M1Desktop from "../../assests/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx99M1Tablet from "../../assests/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx99M1Mobile from "../../assests/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";

const ProductXX99M1 = () => {
  return (
    <>
      <div className="xx99m1 container">
        <div className="xx99m1-left">
          <img
            src={xx99M1Desktop}
            alt="XX9 Mark-1 Product"
            className="xx99m1-desktop"
          />
          <img
            src={xx99M1Tablet}
            alt="XX9 Mark-1 Product"
            className="xx99m1-tablet img-fluid"
          />
          <img
            src={xx99M1Mobile}
            alt="XX9 Mark-1 Product"
            className="xx99m1-mobile img-fluid"
          />
        </div>
        <div className="xx99m1-right">
          <h1 className="xx99m1-heading text-focus-in">
            XX99 MARK I HEADPHONES
          </h1>
          <p className="xx99m1-content text-focus-in">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <Link to="/xx99mark1" type="button" className="btn xx99m1-btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductXX99M1;
