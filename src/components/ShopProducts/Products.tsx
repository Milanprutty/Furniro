import { useEffect, useState } from "react";
import "../Products/Products.scss";
import { productArray } from "../Products/productData";
import Product from "../Products/Product";
import Button from "../Button/Button";

interface Props {
  currentOption: number;
  displayed: number;
  setStartingPoint: React.Dispatch<React.SetStateAction<number>>;
  setDisplayed: React.Dispatch<React.SetStateAction<number>>;
  startingPoint: number;
}

const Products = ({
  currentOption,
  displayed,
  setStartingPoint,
  setDisplayed,
  startingPoint,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setStartingPoint(index * currentOption);
    setDisplayed((index + 1) * currentOption);
    setActiveIndex(index);
  };

  useEffect(() => {
    setDisplayed(currentOption);
    setStartingPoint(0);
    setActiveIndex(0);
  }, [currentOption, setDisplayed, setStartingPoint]);

  return (
    <div className="products-section">
      <div style={{ marginTop: "50px" }} className="product-container">
        {productArray.slice(startingPoint, displayed).map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
      <div>
        <div
          className={activeIndex === 0 ? "firstItem" : "otherItems"}
          style={{ display: "flex", gap: "2rem" }}
        >
          <Button
            aria-label="left navigation"
            className={activeIndex > 0 ? "reusable-Button" : "hiddenBtn"}
            style={{
              padding: "20px 30px",
              borderRadius: "10px",
              border: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
              fontWeight: "300px",
            }}
            onClick={() => handleClick(activeIndex - 1)}
          >
            Previous
          </Button>

          {Array.from(
            { length: Math.ceil(productArray.length / currentOption) },
            (_, i) => (
              <button
                key={i}
                style={{
                  width: "60px",
                  height: "60px",
                  fontSize: "20px",
                  borderRadius: "10px",
                  color: "black",
                  border: "none",
                  cursor: "pointer",
                }}
                className={
                  i === activeIndex
                    ? "clickedItem reusable-Button"
                    : "reusable-Button"
                }
                onClick={() => handleClick(i)}
              >
                {i + 1}
              </button>
            )
          )}

          <Button
            aria-label="right navigation"
            className={
              activeIndex < Math.ceil(productArray.length / currentOption - 1)
                ? "reusable-Button"
                : "hiddenBtn"
            }
            style={{
              padding: "20px 30px",
              borderRadius: "10px",
              border: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
              fontWeight: "300" as const,
            }}
            onClick={() => handleClick(activeIndex + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
