import React from "react";
import "./index.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import rightArrow from "../../assests/shared/desktop/icon-arrow-right.svg";

const Card = (props) => {
  return (
    <>
      <Link to={props.linkTo} className="cardLink">
        <div className="cardList">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={props.imageSrc}
              className="card-img-top"
              alt="Category Thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <div  className="shop-link">
                <p> SHOP</p>
                <img
                  src={rightArrow}
                  alt="Right Arrow"
                  aria-hidden="true"
                  className="img-fluid right-arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
