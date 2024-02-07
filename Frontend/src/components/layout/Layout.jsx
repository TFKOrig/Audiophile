import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import AudioGear from "../audioGear/AudioGear";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="content">{props.children}</div>
      <AudioGear/>
      <Footer />
    </>
  );
};

export default Layout;