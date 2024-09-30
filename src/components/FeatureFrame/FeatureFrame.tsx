import Feature from "./Feature";
import styles from "./FeatureFrame.module.scss";
import { shopFeatures } from "./Features";

const FeatureFrame = () => {
  return (
    <section className={styles.frame}>
      {shopFeatures.map((item, i) => {
        return <Feature key={i} feature={item} />;
      })}
    </section>
  );
};

export default FeatureFrame;
