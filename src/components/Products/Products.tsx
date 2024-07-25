import { useState } from "react";
import "./Products.scss";
import { productArray } from "./productData";

import Button from "../Button/Button";

import Product from "./Product";

const Products = () => {
  const [shownProducts, setShownProducts] = useState<number>(8);

  const showMoreProducts = () => {
    setShownProducts(shownProducts + 4);
  };

  return (
    <div className="products-section">
      <div className="products__header">Our Products</div>
      <div className="product-container">
        {productArray.slice(0, shownProducts).map((product, i) => {
          return <Product key={i} product={product} />;
        })}
      </div>
      <div>
        {shownProducts >= productArray.length || (
          <Button
            onClick={showMoreProducts}
            className="secondary Reusable-Button"
          >
            Show More
          </Button>
        )}
      </div>
    </div>
  );
};

export default Products;
