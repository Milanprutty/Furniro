import Button from "../Button/Button";
import like from "../../assets/like.svg";
import share from "../../assets/share.svg";
import compare from "../../assets/compare.svg";
import productPicture from "../../assets/product.png";
import { Products } from "./productData";
import { Link } from "react-router-dom";
import Search from "../../assets/search.svg";
import { useContext } from "react";
import { MyContext } from "../context/ContextProvider";

interface Props {
  product: Products;
}

const Product = ({ product }: Props) => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Navbar must be used within a ContextProvider");
  }

  const { cart, setCart } = context;

  const handleAddToCart = (count: number) => {
    const filtered = cart.filter((item) => {
      return item.id === product.id;
    });
    if (filtered.length === 0) {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          count: count,
          price: product.price,
        },
      ]);
    }
  };

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
        <Button
          onClick={() => handleAddToCart(1)}
          className="secondary Reusable-Button"
        >
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
          <div className="actions__action">
            <img src={Search} alt="search" />
            <Link to={`/products/${product.id}`}>
              <div onClick={() => window.scrollTo(0, 0)}>View Item</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
