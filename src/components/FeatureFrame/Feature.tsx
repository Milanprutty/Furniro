import { Features } from "./Features";
import styles from "./FeatureFrame.module.scss";

interface Props {
  feature: Features;
}

const Feature = ({ feature }: Props) => {
  return (
    <article className={styles.Feature}>
      <div>
        <img src={feature.image} alt="Feature" />
      </div>

      <div className={styles.text}>
        <h2>{feature.header}</h2>
        <span>{feature.description}</span>
      </div>
    </article>
  );
};

export default Feature;
