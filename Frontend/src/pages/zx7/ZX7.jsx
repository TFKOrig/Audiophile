import React from "react";
import {
  Categories,
  FeaturingProduct,
  Layout,
  ProductFeatures,
  ProductPageItem,
} from "../../components";
import XX99M1Desktop from "../../assests/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import XX99M1Tablet from "../../assests/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import XX99M1Mobile from "../../assests/product-zx7-speaker/mobile/image-category-page-preview.jpg";

import galleryImgOneDesk from "../../assests/product-zx7-speaker/desktop/image-gallery-1.jpg";
import galleryImgTwoDesk from "../../assests/product-zx7-speaker/desktop/image-gallery-2.jpg";
import galleryImgThreeDesk from "../../assests/product-zx7-speaker/desktop/image-gallery-3.jpg";

import galleryImgOneTab from "../../assests/product-zx7-speaker/tablet/image-gallery-1.jpg";
import galleryImgTwoTab from "../../assests/product-zx7-speaker/tablet/image-gallery-2.jpg";
import galleryImgThreeTab from "../../assests/product-zx7-speaker/tablet/image-gallery-3.jpg";

import galleryImgOneMob from "../../assests/product-zx7-speaker/mobile/image-gallery-1.jpg";
import galleryImgTwoMob from "../../assests/product-zx7-speaker/mobile/image-gallery-2.jpg";
import galleryImgThreeMob from "../../assests/product-zx7-speaker/mobile/image-gallery-3.jpg";

const ZX7 = () => {
  return (
    <>
      <Layout>
        <ProductPageItem
          goBack="/speakers"
          DesktopImg={XX99M1Desktop}
          TabletImg={XX99M1Tablet}
          MobileImg={XX99M1Mobile}
          productName="ZX7 SPEAKER"
          productDesc="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          productPrice="$ 3,500"
        />

        <ProductFeatures
          featurePara1="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."
          featurePara2="The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
          wx1="2x"
          boxItem1="Speaker Unit"
          wx2="2x"
          boxItem2="Speaker Cloth Panel"
          wx3="1x"
          boxItem3="User Manual"
          wx4="1x"
          boxItem4="3.5mm 7.5m Audio Cable"
          wx5="1x"
          boxItem5="7.5m Optical Cable"
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

export default ZX7;
