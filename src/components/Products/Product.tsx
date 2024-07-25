import Button from "../Button/Button";
import like from "../../assets/like.svg";
import share from "../../assets/share.svg";
import compare from "../../assets/compare.svg";
import productPicture from "../../assets/product.png";
import { Products } from "./productData";

interface Props {
  product: Products;
}

const Product = ({ product }: Props) => {
  return (
    <div className="product">
      <img
        className="product__picture"
        src={productPicture}
        alt="product picture"
      />
      <div className="product__details">
        <div className="product__name">{product.name}</div>
        <div className="product__description">{product.description}</div>
        <div className="product__price">USD {product.price}</div>
      </div>
      <div className="product-overlay">
        <Button className="secondary Reusable-Button">Add to cart</Button>
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
};

export default Product;
