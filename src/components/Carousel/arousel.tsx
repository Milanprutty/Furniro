import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselImg from "../../assets/carouselimg1.png";
import "./Carousel.scss";

const carouselData = [
  {
    img: carouselImg,
  },
  {
    img: carouselImg,
  },
  {
    img: carouselImg,
  },
  {
    img: carouselImg,
  },
  {
    img: carouselImg,
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: true,
    centerMode: true,
    slidesToScroll: 1,
  };
  return (
    <div className="inspirations">
      <div className="inspirations-text">
        <div className="inspirations__header">
          50+ Beautiful rooms inspiration
        </div>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {carouselData.map((item, i) => {
            return (
              <div key={i}>
                <img src={item.img} alt="carousel image" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
