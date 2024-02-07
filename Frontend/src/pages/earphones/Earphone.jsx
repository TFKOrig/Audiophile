import React from "react";
import "./index.css";
import "./responsive.css";
import { Categories, Layout, SubTitle } from "../../components";
import ProductYX1 from "../../components/productYX1/ProductYX1";

const Earphone = () => {
  return (
    <>
      <Layout>
        <div className="earphones">
          <SubTitle subTitle="EARPHONES" />
          <ProductYX1/>
        </div>
        <div className="container">
          <Categories />
        </div>
      </Layout>
    </>
  );
};

export default Earphone;
