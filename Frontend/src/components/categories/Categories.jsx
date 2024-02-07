import React from "react";
import "./index.css";
import "./responsive.css";
import Card from "../card/Card";
import headphoneImg from "../../assests/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../assests/shared/desktop/image-category-thumbnail-speakers.png";
import earphoneImg from "../../assests/shared/desktop/image-category-thumbnail-earphones.png";

const Categories = () => {
  return (
    <>
      <div className="container category" id="list-category">
        <Card imageSrc={headphoneImg} title="HEADPHONES" linkTo="/headphones" />
        <Card imageSrc={speakerImg} title="SPEAKERS" linkTo="/speakers" />
        <Card imageSrc={earphoneImg} title="EARPHONES" linkTo="/earphones" />
      </div>
    </>
  );
};

export default Categories;
