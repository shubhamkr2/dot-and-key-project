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
    <div className={styles.carousel_container}>
      <Slider {...settings} ref={ref}>
        {images?.map((item) => (
          <div>
            <img src={item} style={{ width: "100%" }} alt="Images" />
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
          left: "0%",
          top: "40%",
          // border: "1px solid red",
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
          top: "40%",
          right: "0%",
          // border: "1px solid red",
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

export { CarouselBanner };
