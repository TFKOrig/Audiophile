import React from "react";
import "./index.css";
import "./responsive.css";
import {
  Categories,
  FeaturingProduct,
  Layout,
  ProductFeatures,
  ProductPageItem,
} from "../../components";
import XX99M1Desktop from "../../assests/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX99M1Tablet from "../../assests/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import XX99M1Mobile from "../../assests/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";

import galleryImgOneDesk from "../../assests/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import galleryImgTwoDesk from "../../assests/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import galleryImgThreeDesk from "../../assests/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";

import galleryImgOneTab from "../../assests/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg";
import galleryImgTwoTab from "../../assests/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg";
import galleryImgThreeTab from "../../assests/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg";

import galleryImgOneMob from "../../assests/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";
import galleryImgTwoMob from "../../assests/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";
import galleryImgThreeMob from "../../assests/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";

const XX99Mark1 = () => {
  return (
    <>
      <Layout>
        <ProductPageItem
          goBack="/headphones"
          DesktopImg={XX99M1Desktop}
          TabletImg={XX99M1Tablet}
          MobileImg={XX99M1Mobile}
          productName="XX99 MARK I HEADPHONES"
          productDesc="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          productPrice="$ 1,750"
        />

        <ProductFeatures
          featurePara1="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz."
          featurePara2="From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector."
          wx1="1x"
          boxItem1="Headphone Unit"
          wx2="2x"
          boxItem2="Replacement Earcups"
          wx3="1x"
          boxItem3="User Manual"
          wx4="1x"
          boxItem4="3.5mm 5m Audio Cable"
          wx5=" "
          boxItem5=" "
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

export default XX99Mark1;
