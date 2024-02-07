import React from "react";
import "./index.css";
import "./responsive.css";
import DesktopImageBestGear from "../../assests/shared/desktop/image-best-gear.jpg";
import TabletImageBestGear from "../../assests/shared/tablet/image-best-gear.jpg";
import MobileImageBestGear from "../../assests/shared/mobile/image-best-gear.jpg";

const AudioGear = () => {
  return (
    <>
      <div className="container information">
        <div className="right-content">
          <h1 className="audio-gear-heading">
            BRINGING YOU THE{" "}
            <span
              style={{
                color: "#d87d4a",
              }}
            >
              BEST
            </span>{" "}
            AUDIO GEAR
          </h1>
          <p className="audio-gear-para">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="left-content">
          <img
            src={DesktopImageBestGear}
            alt="Best Gear"
            className="desktop-audio-gear-img"
            style={{
              borderRadius: "0.5vw",
            }}
          />
          <img src={TabletImageBestGear} alt="Best Gear" className="tablet-audio-gear-img img-fluid" />
          <img src={MobileImageBestGear} alt="Best Gear" className="mobile-audio-gear-img img-fluid" />
        </div>
      </div>
    </>
  );
};

export default AudioGear;
