import React from "react";
import {
  Categories,
  FeaturingProduct,
  Layout,
  ProductFeatures,
  ProductPageItem,
} from "../../components";

import YX1Desktop from "../../assests/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import YX1Tablet from "../../assests/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import YX1Mobile from "../../assests/product-yx1-earphones/mobile/image-category-page-preview.jpg";

import galleryImgOneDesk from "../../assests/product-yx1-earphones/desktop/image-gallery-1.jpg";
import galleryImgTwoDesk from "../../assests/product-yx1-earphones/desktop/image-gallery-2.jpg";
import galleryImgThreeDesk from "../../assests/product-yx1-earphones/desktop/image-gallery-3.jpg";

import galleryImgOneTab from "../../assests/product-yx1-earphones/tablet/image-gallery-1.jpg";
import galleryImgTwoTab from "../../assests/product-yx1-earphones/tablet/image-gallery-2.jpg";
import galleryImgThreeTab from "../../assests/product-yx1-earphones/tablet/image-gallery-3.jpg";

import galleryImgOneMob from "../../assests/product-yx1-earphones/mobile/image-gallery-1.jpg";
import galleryImgTwoMob from "../../assests/product-yx1-earphones/mobile/image-gallery-2.jpg";
import galleryImgThreeMob from "../../assests/product-yx1-earphones/mobile/image-gallery-3.jpg";

const YX1 = () => {
  return (
    <>
      <Layout>
        <ProductPageItem
          goBack="/earphones"
          DesktopImg={YX1Desktop}
          TabletImg={YX1Tablet}
          MobileImg={YX1Mobile}
          productName="YX1 WIRELESS EARPHONES"
          productDesc="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          productPrice="$ 599"
        />

        <ProductFeatures
          featurePara1="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."
          featurePara2="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
          wx1="2x"
          boxItem1="Earphone Unit"
          wx2="6x"
          boxItem2="Multi-Size Earplugs"
          wx3="1x"
          boxItem3="User Manual"
          wx4="1x"
          boxItem4="USB-C Charging Cable"
          wx5="1x"
          boxItem5="Travel Pouch"
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

export default YX1;
