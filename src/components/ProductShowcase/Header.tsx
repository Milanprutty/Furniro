import styles from "./Header.module.scss";
import rightArrow from "../../assets/ShopBannerArrow.svg";

interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  return (
    <section className={styles.header}>
      <p className={styles.location}>Home</p>
      <img src={rightArrow} alt="arrow" />
      <p className={styles.location}>Shop</p>
      <img src={rightArrow} alt="arrow" />
      <div className={styles.line}></div>

      <p className={styles.name}>{name}</p>
    </section>
  );
};

export default Header;
