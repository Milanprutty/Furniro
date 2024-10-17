import styles from "./ShopBanner.module.scss";
import shopbannerimg from "../../assets/shopBanner.png";
import shopBannerArrow from "../../assets/ShopBannerArrow.svg";

interface Props {
  name: string;
  location: string;
}

const ShopBanner = ({ name, location }: Props) => {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${shopbannerimg})` }}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.header}>{name}</h1>
        <div className={styles.text}>
          <span>Home</span>
          <img src={shopBannerArrow} />
          <span>{location}</span>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
