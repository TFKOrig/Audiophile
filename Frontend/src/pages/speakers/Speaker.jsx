import React from "react";
import "./index.css";
import "./responsive.css";
import { Categories, Layout, SubTitle } from "../../components";
import ProductZX9 from "../../components/productZX9/ProductZX9";
import ProductZX7 from "../../components/productZX7/ProductZX7";

const Speaker = () => {
  return (
    <>
      <Layout>
        <div className="speakers">
          <SubTitle subTitle="SPEAKERS" />
          <ProductZX9 />
          <ProductZX7 />
        </div>
        {/* <div className="container">
          <Categories />
        </div> */}
      </Layout>
    </>
  );
};

export default Speaker;
