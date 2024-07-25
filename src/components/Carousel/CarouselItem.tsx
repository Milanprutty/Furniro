import Dash from "../../assets/dash.svg";
import MiniRightArrow from "../../assets/miniRightArrow.svg";

interface imageData {
  img: string;
  isShowing?: boolean;
}

interface Props {
  image: imageData;
  i: number;
}

const CarouselItem = ({ image, i }: Props) => {
  return (
    <div className="swiper-slide">
      <div className="swiper">
        <img className="swiper-img" src={image.img} />
        <div
          className={image.isShowing ? "enabled content" : "disabled content"}
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
            image.isShowing ? "arrow arrow-enabled" : "arrow arrow-disabled"
          }
        >
          <img src={MiniRightArrow} />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
