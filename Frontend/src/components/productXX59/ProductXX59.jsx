import React from "react";
import "./index.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import XX59Desktop from "../../assests/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import XX59Tablet from "../../assests/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import XX59mobile from "../../assests/product-xx59-headphones/mobile/image-category-page-preview.jpg";

const ProductXX59 = () => {
  return (
    <>
      <div className="xx59 container">
        <div className="xx59-left">
          <img src={XX59Desktop} alt="XX59 Product" className="xx59-desktop" />
          <img
            src={XX59Tablet}
            alt="XX59 Product"
            className="xx59-tablet img-fluid"
          />
          <img
            src={XX59mobile}
            alt="XX59 Product"
            className="xx59-mobile img-fluid"
          />
        </div>
        <div className="xx59-right">
          <h1 className="xx59-heading text-focus-in">XX59 HEADPHONES</h1>
          <p className="xx59-content text-focus-in">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <Link to="/xx59" type="button" className="btn xx59-btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductXX59;
