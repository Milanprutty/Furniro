import styles from "./ShopBanner.module.scss";
import shopbannerimg from "../../assets/shopBanner.png";
import shopBannerArrow from "../../assets/ShopBannerArrow.svg";

const ShopBanner = () => {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${shopbannerimg})` }}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.header}>Shop</h1>
        <div className={styles.text}>
          <span>Home</span>
          <img src={shopBannerArrow} />
          <span>Shop</span>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
