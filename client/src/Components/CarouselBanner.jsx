import React, { Component, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import styles from "../Styles/CarouselBanner.module.css";

function CarouselBanner({ images }) {
  const ref = useRef(null);
  const handleNextSlide = () => {
    ref.current.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings} ref={ref}>
        {images?.map((item,i) => (
          <div className={styles.carousel_img} key={i}>
            <img src={item} alt="Images" />
          </div>
        ))}
      </Slider>
      <div className={styles.left_arrow} onClick={handlePrevSlide}>
        <IconContext.Provider value={{ size: "2rem" }}>
          <AiOutlineArrowLeft />
        </IconContext.Provider>
      </div>

      <div className={styles.right_arrow} onClick={handleNextSlide}>
        <IconContext.Provider value={{ size: "2rem" }}>
          <AiOutlineArrowRight />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export { CarouselBanner };
