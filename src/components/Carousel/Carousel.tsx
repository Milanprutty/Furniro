import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import carouselImg from "../../assets/carouselimg1.png";
import "./Carousel.scss";

import "swiper/swiper-bundle.css";
import Line from "../../assets/line.svg";
import CarouselImg2 from "../../assets/carouselimg2.png";
import Button from "../Button/Button";
import CarouselItem from "./CarouselItem";

register();

type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };

export const Carousel = () => {
  const [carouselData, setCarouselData] = useState([
    {
      img: carouselImg,
      isShowing: true,
    },
    {
      img: CarouselImg2,
    },
    {
      img: carouselImg,
    },
    {
      img: CarouselImg2,
    },
    {
      img: carouselImg,
    },
  ]);

  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    const handleEditData = () => {
      const editedData = carouselData.map((item, i) => {
        if (i === swiperRef.current?.swiper.realIndex) {
          return { ...item, isShowing: true };
        }
        return { ...item, isShowing: false };
      });

      setCarouselData(editedData);
    };

    swiperRef.current?.addEventListener(
      "swiperrealindexchange",
      handleEditData
    );

    const refVar = swiperRef;

    return () => {
      refVar.current?.removeEventListener(
        "swiperrealindexchange",
        handleEditData
      );
    };
  }, [carouselData]);

  return (
    <div style={{ position: "relative", marginTop: "50px" }}>
      <div className="carousel-text">
        <div className="carousel-header">
          50+ Beautiful rooms inspiration
          <div className="carousel-description">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </div>
        </div>

        <div>
          <Button
            className="Reusable-Button secondary"
            style={{
              backgroundColor: "#b88e2f",
              color: "white",
              padding: "15px 50px",
            }}
          >
            Explore More
          </Button>
        </div>
      </div>
      <swiper-container
        loop="true"
        ref={swiperRef}
        centered-slides={true}
        slides-per-view={3}
        className="carousel"
        breakpoints={JSON.stringify({
          1300: { slidesPerView: 3 },
          880: { slidesPerView: 2 },
          200: { slidesPerView: 1 },
        })}
      >
        {carouselData.map((image, i) => {
          return <CarouselItem image={image} key={i} i={i} />;
        })}
      </swiper-container>
      <div
        className="swiper__left-arrow nav-arrow"
        onClick={() => swiperRef.current?.swiper.slidePrev()}
      >
        <img src={Line} alt="" />
      </div>
      <div
        className="swiper__right-arrow  nav-arrow"
        onClick={() => swiperRef.current?.swiper.slideNext()}
      >
        <img src={Line} alt="" />
      </div>
    </div>
  );
};
