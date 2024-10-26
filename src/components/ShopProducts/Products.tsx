import { useEffect, useState } from "react";
import "../Products/Products.scss";
import { productArray as originalProductArray } from "../Products/productData";
import Product from "../Products/Product";
import Button from "../Button/Button";

interface Props {
  currentOption: number;
  displayed: number;
  setStartingPoint: React.Dispatch<React.SetStateAction<number>>;
  setDisplayed: React.Dispatch<React.SetStateAction<number>>;
  startingPoint: number;
  currentOption2: string;
}

const Products = ({
  currentOption,
  displayed,
  setStartingPoint,
  setDisplayed,
  startingPoint,
  currentOption2,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [productArray, setProductArray] = useState(originalProductArray);

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

  useEffect(() => {
    let sortedArray = [...originalProductArray];
    if (currentOption2 === "price") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (currentOption2 === "name") {
      sortedArray.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    } else if (currentOption2 === "price reversed") {
      sortedArray.sort((a, b) => a.price - b.price).reverse();
    } else if (currentOption2 === "none") {
      sortedArray = [...originalProductArray];
    }
    setProductArray(sortedArray);
  }, [currentOption2]);

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
          {activeIndex > 0 ? (
            <Button
              aria-label="left navigation"
              className={"reusable-Button nav-btn"}
              onClick={() => handleClick(activeIndex - 1)}
            >
              Previous
            </Button>
          ) : (
            <div className="hidden"></div>
          )}

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
                    ? "clickedItem reusable-Button nav-btn"
                    : "reusable-Button nav-btn"
                }
                onClick={() => handleClick(i)}
              >
                {i + 1}
              </button>
            )
          )}
          {activeIndex < Math.ceil(productArray.length / currentOption - 1) ? (
            <Button
              aria-label="right navigation"
              className={"reusable-Button nav-btn"}
              onClick={() => handleClick(activeIndex + 1)}
            >
              Next
            </Button>
          ) : (
            <div className="hidden"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
