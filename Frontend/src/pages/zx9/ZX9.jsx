import React from "react";
import {
  Categories,
  FeaturingProduct,
  Layout,
  ProductFeatures,
  ProductPageItem,
} from "../../components";

import ZX9Desktop from "../../assests/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import ZX9Tablet from "../../assests/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import ZX9Mobile from "../../assests/product-zx9-speaker/mobile/image-category-page-preview.jpg";

import galleryImgOneDesk from "../../assests/product-zx9-speaker/desktop/image-gallery-1.jpg";
import galleryImgTwoDesk from "../../assests/product-zx9-speaker/desktop/image-gallery-2.jpg";
import galleryImgThreeDesk from "../../assests/product-zx9-speaker/desktop/image-gallery-3.jpg";

import galleryImgOneTab from "../../assests/product-zx9-speaker/tablet/image-gallery-1.jpg";
import galleryImgTwoTab from "../../assests/product-zx9-speaker/tablet/image-gallery-2.jpg";
import galleryImgThreeTab from "../../assests/product-zx9-speaker/tablet/image-gallery-3.jpg";

import galleryImgOneMob from "../../assests/product-zx9-speaker/mobile/image-gallery-1.jpg";
import galleryImgTwoMob from "../../assests/product-zx9-speaker/mobile/image-gallery-2.jpg";
import galleryImgThreeMob from "../../assests/product-zx9-speaker/mobile/image-gallery-3.jpg";

const ZX9 = () => {
  return (
    <>
      <Layout>
        <ProductPageItem
          goBack="/speakers"
          DesktopImg={ZX9Desktop}
          TabletImg={ZX9Tablet}
          MobileImg={ZX9Mobile}
          productName="ZX9 SPEAKER"
          productDesc="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          productPrice="$ 4,500"
        />

        <ProductFeatures
          featurePara1="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."
          featurePara2="Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
          wx1="2x"
          boxItem1="Speaker Unit"
          wx2="2x"
          boxItem2="Speaker Cloth Panel"
          wx3="1x"
          boxItem3="User Manual"
          wx4="1x"
          boxItem4="3.5mm 10m Audio Cable"
          wx5="1x"
          boxItem5="10m Optical Cable"
        />

        <FeaturingProduct
          galleryImgOneDesk={galleryImgOneDesk}
          galleryImgTwoDesk={galleryImgTwoDesk}
          galleryImgThreeDesk={galleryImgThreeDesk}
          galleryImgOneTab={galleryImgOneTab}
          galleryImgTwoTab={galleryImgTwoTab}
          galleryImgThreeTab={galleryImgThreeTab}
          galleryImgOneMob={galleryImgOneMob}
          galleryImgTwoMob={galleryImgTwoMob}
          galleryImgThreeMob={galleryImgThreeMob}
        />
        <div className="container">
          <Categories />
        </div>
      </Layout>
    </>
  );
};

export default ZX9;
