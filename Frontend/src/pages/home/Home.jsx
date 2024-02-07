import React from "react";
import "./index.css";
import "./responsive.css";
import { Categories, HDisplayYX1, HDisplayZX7, HDisplayZX9, Header, Layout } from "../../components";

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <div className="container" id="list-container">
          <Categories />
          <HDisplayZX9 />
          <HDisplayZX7/>
          <HDisplayYX1/>
        </div>
      </Layout>
    </>
  );
};

export default Home;
