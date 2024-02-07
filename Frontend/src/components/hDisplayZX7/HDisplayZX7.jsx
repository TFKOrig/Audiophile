import React from "react";
import "./index.css";
import "./responsive.css";
import { Link } from "react-router-dom";

const HDisplayZX7 = () => {
  return (
    <>
      <div className="zx-7">
        <div className="zx7-content">
          <h1 className="zx7-heading">ZX7 SPEAKER</h1>
          <Link to="/speakers" className="zx7-btn-link">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </>
  );
};

export default HDisplayZX7;
