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
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 950,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className={styles.carousel_container}>
      <Slider {...settings} ref={ref}>
        {images?.map((item) => (
          <Carousel_Product_Card product={item} />
        ))}
      </Slider>

      <div className={styles.prev_btn} onClick={handlePrevSlide}>
        <IconContext.Provider value={{ size: "2rem" }}>
          <AiOutlineArrowLeft />
        </IconContext.Provider>
      </div>
      <div className={styles.next_btn} onClick={handleNextSlide}>
        <IconContext.Provider value={{ size: "2rem" }}>
          <AiOutlineArrowRight />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default ProductCarousel;
