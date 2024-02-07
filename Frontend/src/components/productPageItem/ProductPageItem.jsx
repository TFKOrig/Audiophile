import React from "react";
import "./index.css";
import "./responsive.css";
import { Link } from "react-router-dom";

const ProductPageItem = (props) => {
  return (
    <>
      <div className="container p-xx99m2">
        <Link to={props.goBack} className="btn btn-goBack">
          Go Back
        </Link>
        <div className="xx99m2-p container">
          <div className="p-xx99m2-left">
            <img
              src={props.DesktopImg}
              alt="XX9 Mark-2 Product"
              className="p-xx9m2-desktop"
            />
            <img
              src={props.TabletImg}
              alt="XX9 Mark-2 Product"
              className="p-xx9m2-tablet img-fluid"
            />
            <img
              src={props.MobileImg}
              alt="XX9 Mark-2 Product"
              className="p-xx9m2-mobile img-fluid"
            />
          </div>
          <div className="p-xx99m2-right">
            <p
              to="/form"
              className="new-product"
              style={{
                color: "#d87d4a",
                fontWeight: "400",
                lineHeight: "17px",
              }}
            >
              NEW PRODUCT
            </p>
            <h1 className="p-xx9m2-heading text-focus-in">
              {props.productName}
            </h1>
            <p className="p-xx9m2-content text-focus-in">{props.productDesc}</p>
            <p className="product-price text-focus-in">{props.productPrice}</p>
            <Link to="/form" type="button" className="btn p-xx9m2-btn">
              ORDER NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPageItem;
