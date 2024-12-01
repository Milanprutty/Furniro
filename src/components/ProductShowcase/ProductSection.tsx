import styles from "./ProductSection.module.scss";
import furniture1 from "../../assets/furniture.png";
import furniture2 from "../../assets/furniture2.png";
import furniture3 from "../../assets/furniture3.png";
import furniture4 from "../../assets/furniture4.png";
import { SetStateAction, useContext, useState } from "react";
import star from "../../assets/star.svg";
import MagnifyImage from "./MagnifyImage";
import Button from "./Button";
import { MyContext } from "../context/ContextProvider";

interface Props {
  name: string;
  price: number;
  options: string[];
  id: string;
}

const images = [furniture1, furniture2, furniture3, furniture4];
const colors = ["#816DFA", "#000000", "#B88E2F"];

const ProductSection = ({ name, price, options, id }: Props) => {
  const [currentImage, setCurrentImage] = useState<string>(furniture1);
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0);

  const handleImageChange = (newImage: SetStateAction<string>) => {
    setCurrentImage(newImage);
  };

  const handleIndexChange = (method: string, index: number) => {
    if (method === "size") {
      setCurrentSizeIndex(index);
    }
  };

  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Navbar must be used within a ContextProvider");
  }

  const { cart, setCart } = context;

  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    const filtered = cart.filter((item) => {
      return item.id === id;
    });
    if (filtered.length === 0) {
      setCart([
        ...cart,
        {
          id: id,
          name: name,
          count: count,
          price: price,
        },
      ]);
    } else {
      alert("Item is already in cart");
    }
  };

  return (
    <div className={styles.column}>
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
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </div>
            <div className={styles.options}>
              <span className={styles.span}>size</span>
              <div className={styles.sizes}>
                {options.map((option, i) => {
                  return (
                    <div
                      className={
                        currentSizeIndex === i
                          ? `${styles.active} ${styles.size}`
                          : `${styles.inactive} ${styles.size}`
                      }
                      onClick={() => handleIndexChange("size", i)}
                      key={i}
                    >
                      <span>{option}</span>
                    </div>
                  );
                })}
              </div>
              <span className={styles.span}>Color</span>
              <div className={styles.sizes}>
                {colors.map((color, i) => {
                  return (
                    <div
                      className={styles.color}
                      key={i}
                      style={{ backgroundColor: `${color}` }}
                    ></div>
                  );
                })}
              </div>
              <div className={styles.buttons}>
                <Button setCount={setCount} count={count} type="count" />
                <Button onClick={handleAddToCart} type="normal">
                  Add To Cart
                </Button>
                <Button type="normal">+ Compare</Button>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.infoText}>
                <div>SKU</div>
                <div>:</div>
                <div>SS001</div>
                <div>Category</div>
                <div>:</div>
                <div>Sofas</div>
                <div>Tags</div>
                <div>:</div>
                <div>Sofa, Chair, Home, Shop</div>
                <div>Share</div>
                <div>:</div>
                <div>Facebook, LinkedIn, Twitter</div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductSection;
