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
import XX9Mark2Desktop from "../../assests/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX9Mark2Tablet from "../../assests/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import XX9Mark2Mobile from "../../assests/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import {
  galleryImgOneDesk,
  galleryImgTwoDesk,
  galleryImgThreeDesk,
} from "../../assests/product-xx99-mark-two-headphones/desktop/index";

import {
  galleryImgOneTab,
  galleryImgTwoTab,
  galleryImgThreeTab,
} from "../../assests/product-xx99-mark-two-headphones/tablet/index";

import {
  galleryImgOneMob,
  galleryImgTwoMob,
  galleryImgThreeMob,
} from "../../assests/product-xx99-mark-two-headphones/mobile/index";

const XX99Mark2 = () => {
  return (
    <>
      <Layout>
        <ProductPageItem
          goBack="/headphones"
          DesktopImg={XX9Mark2Desktop}
          TabletImg={XX9Mark2Tablet}
          MobileImg={XX9Mark2Mobile}
          productName="XX99 MARK II HEADPHONES"
          productDesc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          productPrice="$ 2,999"
        />

        <ProductFeatures
          featurePara1="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat."
          featurePara2="The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
          wx1="1x"
          boxItem1="Headphone Unit"
          wx2="2x"
          boxItem2="Replacement Earcups"
          wx3="1x"
          boxItem3="User Manual"
          wx4="1x"
          boxItem4="3.5mm 5m Audio Cable"
          wx5="1x"
          boxItem5="Travel Bag"
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

export default XX99Mark2;
