import React from "react";
import "./index.css";
import "./responsive.css";

const SubTitle = (props) => {
  return (
    <>
      <div className="subTitle">
        <div className="cat-heading">{props.subTitle}</div>
      </div>
    </>
  );
};

export default SubTitle;
