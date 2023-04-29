import React from "react";
import { CarouselBanner } from "../Components/CarouselBanner";
import ProductCarousel from "../Components/ProductCarousel";

const images = [
  "https://www.dotandkey.com/cdn/shop/files/pro_desk_552a0e39-53bd-4a71-98da-ceb1a8d819b7_1024x1024.jpg?v=1680865716",
  "https://www.dotandkey.com/cdn/shop/files/vit_c_range_8fe898e8-20cf-48b8-b793-7636da885b89_1024x1024.jpg?v=1682569560",
  "https://www.dotandkey.com/cdn/shop/files/vit_c_range_1_1024x1024.jpg?v=1681794075",
  "https://www.dotandkey.com/cdn/shop/files/CATE_DESK_4375de5a-9172-48e3-9308-938dcbe6759b_1024x1024.jpg?v=1681794124",
];
const cards=[
  "1","2","3","4","5","6"
]
function Home() {
  return (
    <div>
      <CarouselBanner images={images} />
      {/* <ProductCarousel images={images} /> */}
    </div>
  );
}

export { Home };
