import React, { Component, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import styles from "../Styles/ProductCarousel.module.css";
import { Carousel_Product_Card } from "./Carousel_Product_Card";

function ProductCarousel({ images }) {
  const ref = useRef(null);
  const handleNextSlide = () => {
    ref.current.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        position: "relative",
      }}
    >
      <Slider {...settings} ref={ref}>
        {images?.map((item, i) => (
          <div key={i}>
            <Carousel_Product_Card product={item} />
          </div>
        ))}
      </Slider>

      <div
        className="button"
        onClick={handlePrevSlide}
        style={{
          position: "absolute",
          width: "50px",
          height: "150px",
          left: "-7%",
          top: "30%",
          border: "1px solid gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <IconContext.Provider value={{ size: "2rem" }}>
          <AiOutlineArrowLeft />
        </IconContext.Provider>
      </div>
      <div
        className="button"
        onClick={handleNextSlide}
        style={{
          position: "absolute",
          top: "30%",
          right: "-3%",
          border: "1px solid gray",
          width: "50px",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <IconContext.Provider value={{ size: "2rem" }}>
          <AiOutlineArrowRight />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default ProductCarousel;
