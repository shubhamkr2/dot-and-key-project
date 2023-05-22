import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import styles from "../Styles/SingleImageCarousel.module.css";


function SingleImageCarousel({ images }) {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    
  };
  return (
    <div className={styles.carousel_container}>
      <Slider {...settings} ref={ref}>
      {images?.map((image)=>(
        <div className={styles.carousel_image}>
            <img src={image} alt="product image"/>
        </div>
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

export { SingleImageCarousel };
