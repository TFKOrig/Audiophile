import React from "react";
import "./index.css";
import "./responsive.css";
import {
  Categories,
  Layout,
  ProductXX59,
  ProductXX99M1,
  ProductXX99M2,
  SubTitle,
} from "../../components";

const Headphone = () => {
  return (
    <>
      <Layout>
        <div className="headphone">
          <SubTitle subTitle="HEADPHONES" />
          <ProductXX99M2 />
          <ProductXX99M1 />
          <ProductXX59 />
        </div>
        <div className="container">
          <Categories />
        </div>
      </Layout>
    </>
  );
};

export default Headphone;
