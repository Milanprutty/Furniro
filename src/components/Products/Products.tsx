import { useState } from "react";
import "./Products.scss";
import { productArray } from "./productData";
import productPicture from "../../assets/product.png";
import Button from "../Button/Button";
import like from "../../assets/like.svg";
import share from "../../assets/share.svg";
import compare from "../../assets/compare.svg";

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
          return (
            <div className="product" key={i}>
              <img
                className="product__picture"
                src={productPicture}
                alt="product picture"
              />
              <div className="product__details">
                <div className="product__name">{product.name}</div>
                <div className="product__description">
                  {product.description}
                </div>
                <div className="product__price">USD {product.price}</div>
              </div>
              <div className="product-overlay">
                <Button className="secondary Reusable-Button">
                  Add to cart
                </Button>
                <div className="actions">
                  <div className="actions__action">
                    <img src={share} alt="share" />
                    <div>Share</div>
                  </div>
                  <div className="actions__action">
                    <img src={compare} alt="compare" />
                    <div>Compare</div>
                  </div>
                  <div className="actions__action">
                    <img src={like} alt="like" />
                    <div>Like</div>
                  </div>
                </div>
              </div>
            </div>
          );
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
