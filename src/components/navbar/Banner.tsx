import "./Banner.scss";
import banner from "../../assets/banner.png";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${banner})` }} className="banner">
      <div className="banner__rectangle">
        <div className="banner__arrival">New Arrival</div>
        <div className="banner__collectionText">
          Discover Our New Collection
        </div>
        <div className="banner__mainText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </div>
        <div>
          <Button className="banner-btn selected Reusable-Button">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
