import React from "react";
import "./index.css";
import "./responsive.css";

const ProductFeatures = (props) => {
  return (
    <>
      <div className="container product-item">
        <div className="p-left">
          <h1 className="p-heading">FEATURES</h1>
          <p className="p-para">{props.featurePara1}</p>
          <p className="p-para">{props.featurePara2}</p>
        </div>
        <div className="p-right">
          <h1 className="p-heading">IN THE BOX</h1>
          <ul className="p-ul">
            <li className="p-li">
              <span className="p-wx">{props.wx1}</span>
              {props.boxItem1}
            </li>
            <li className="p-li">
              <span className="p-wx">{props.wx2}</span>
              {props.boxItem2}
            </li>
            <li className="p-li">
              <span className="p-wx">{props.wx3}</span>
              {props.boxItem3}
            </li>
            <li className="p-li">
              <span className="p-wx">{props.wx4}</span>
              {props.boxItem4}
            </li>
            <li className="p-li">
              <span className="p-wx">{props.wx5}</span>
              {props.boxItem5}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductFeatures;
