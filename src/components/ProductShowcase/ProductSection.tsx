import styles from "./ProductSection.module.scss";
import furniture1 from "../../assets/furniture.png";
import furniture2 from "../../assets/furniture2.png";
import furniture3 from "../../assets/furniture3.png";
import furniture4 from "../../assets/furniture4.png";
import { SetStateAction, useState } from "react";
import star from "../../assets/star.svg";
import MagnifyImage from "./MagnifyImage";

interface Props {
  name: string;
  price: number;
  options: string[];
}

const images = [furniture1, furniture2, furniture3, furniture4];

const ProductSection = ({ name, price, options }: Props) => {
  const [currentImage, setCurrentImage] = useState<string>(furniture1);
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0);

  const handleImageChange = (newImage: SetStateAction<string>) => {
    setCurrentImage(newImage);
  };

  const handleIndexChange = (method: string, index: number) => {
    if (method === "size") {
      setCurrentSizeIndex(index);
    } else if (method === "color") {
      return;
    }
  };

  return (
    <section className={styles.container}>
      <section className={styles.leftSide}>
        <div className={styles.smallImages}>
          {images.map((image, i) => {
            return (
              <img
                onClick={() => handleImageChange(image)}
                className={styles.smallImg}
                src={image}
                key={i}
                alt="image"
              />
            );
          })}
        </div>
        <div style={{ position: "relative" }}>
          <MagnifyImage currentImage={currentImage} />
        </div>
      </section>
      <section className={styles.rightSide}>
        <div className={styles.headerContainer}>
          <h1 className={styles.nameHeader}>{name}</h1>
          <div className={styles.price}>USD {price}</div>
          <div className={styles.ratings}>
            <div className={styles.starContainer}>
              {Array.from({ length: 5 }, (_, i) => (
                <img key={i} src={star} alt="star" />
              ))}
            </div>
            <div className={styles.line}></div>
            <div className={styles.reviewCount}>5 Customer Review</div>
          </div>
          <div className={styles.description}>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </div>
          <div className={styles.options}>
            <span>size</span>
            <div>
              {options.map((option, i) => {
                return (
                  <div
                    className={
                      currentSizeIndex === i
                        ? `${styles.active}`
                        : `${styles.inactive}`
                    }
                    onClick={() => handleIndexChange("size", i)}
                    key={i}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductSection;
