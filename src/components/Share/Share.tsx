import styles from "./Share.module.scss";
import furniture from "../../assets/furniture.png";
import furniture2 from "../../assets/furniture2.png";
import furniture3 from "../../assets/furniture3.png";
import furniture4 from "../../assets/furniture4.png";

import furniture6 from "../../assets/furniture6.png";
import furniture7 from "../../assets/furniture7.png";

const Share = () => {
  return (
    <section className={styles.share}>
      <div className={styles.shareText}>
        <div className={styles.shareSmallText}>Share your setup with</div>
        <div className={styles.shareHeaderText}>#FuniroFurniture</div>
      </div>
      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.card1}`}>
          <img src={furniture} />
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <img src={furniture2} />
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <img src={furniture3} />
        </div>
        <div className={`${styles.card} ${styles.card4}`}>
          <img src={furniture4} />
        </div>

        <div className={`${styles.card} ${styles.card5}`}>
          <img src={furniture6} />
        </div>
        <div className={`${styles.card} ${styles.card6}`}>
          <img src={furniture7} />
        </div>
      </div>
    </section>
  );
};

export default Share;
