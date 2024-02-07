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
import XX59Desktop from "../../assests/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import XX59Tablet from "../../assests/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import XX59Mobile from "../../assests/product-xx59-headphones/mobile/image-category-page-preview.jpg";

import galleryImgOneDesk from "../../assests/product-xx59-headphones/desktop/image-gallery-1.jpg";
import galleryImgTwoDesk from "../../assests/product-xx59-headphones/desktop/image-gallery-2.jpg";
import galleryImgThreeDesk from "../../assests/product-xx59-headphones/desktop/image-gallery-3.jpg";

import galleryImgOneTab from "../../assests/product-xx59-headphones/tablet/image-gallery-1.jpg";
import galleryImgTwoTab from "../../assests/product-xx59-headphones/tablet/image-gallery-2.jpg";
import galleryImgThreeTab from "../../assests/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg";

import galleryImgOneMob from "../../assests/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";
import galleryImgTwoMob from "../../assests/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";
import galleryImgThreeMob from "../../assests/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";

const XX59 = () => {
  return (
    <>
      <Layout>
        <ProductPageItem
          goBack="/headphones"
          DesktopImg={XX59Desktop}
          TabletImg={XX59Tablet}
          MobileImg={XX59Mobile}
          productName="XX59 HEADPHONES"
          productDesc="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          productPrice="$ 899"
        />
        <ProductFeatures
          featurePara1="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
          featurePara2="More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
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

export default XX59;
