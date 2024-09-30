import { useState } from "react";
import { productArray } from "./productData";

import Button from "../Button/Button";

import Product from "./Product";

interface Props {
  productCount: number;
}

const ProductMap = ({ productCount }: Props) => {
  const [shownProducts, setShownProducts] = useState<number>(productCount);

  const showMoreProducts = () => {
    setShownProducts(shownProducts + 4);
  };

  return (
    <>
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
    </>
  );
};

export default ProductMap;
