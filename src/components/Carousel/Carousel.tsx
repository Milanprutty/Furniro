import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import carouselImg from "../../assets/carouselimg1.png";
import "./Carousel.scss";
import Dash from "../../assets/dash.svg";
import MiniRightArrow from "../../assets/miniRightArrow.svg";
import "swiper/swiper-bundle.css";
import Line from "../../assets/line.svg";
import CarouselImg2 from "../../assets/carouselimg2.png";

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
    const handleConsoleLog = () => {
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
      handleConsoleLog
    );

    const refVar = swiperRef;

    return () => {
      refVar.current?.removeEventListener(
        "swiperrealindexchange",
        handleConsoleLog
      );
    };
  }, [carouselData]);

  return (
    <div style={{ position: "relative", marginTop: "50px" }}>
      <swiper-container
        loop="true"
        ref={swiperRef}
        centered-slides={true}
        slides-per-view={3}
        className="alr"
      >
        {carouselData.map((image, i) => {
          return (
            <div className="swiper-slide" key={i}>
              <div className="swiper">
                <img className="swiper-img" src={image.img} />
                <div
                  className={
                    image.isShowing ? "enabled content" : "disabled content"
                  }
                >
                  <div className="swiper__info">
                    <div className="swiper__room">
                      0{i + 1} <img src={Dash} alt="Dash" /> Bed Room
                    </div>
                    <div className="swiper__description">Inner Peace</div>
                  </div>
                </div>
                <div
                  className={
                    image.isShowing
                      ? "arrow arrow-enabled"
                      : "arrow arrow-disabled"
                  }
                >
                  <img src={MiniRightArrow} />
                </div>
              </div>
            </div>
          );
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
