import { useContext } from "react";
import styles from "./ShoppingCart.module.scss";
import { MyContext } from "../context/ContextProvider";
import Img from "../../assets/carouselimg1.png";
import Delete from "../../assets/delete.svg";
import { Link } from "react-router-dom";

interface Props {
  className: string;
  onDeleteItem: (index: number) => void;
}

const ShoppingCart = ({ className, onDeleteItem }: Props) => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Navbar must be used within a ContextProvider");
  }

  const { cart } = context;

  let num = 0;

  cart.forEach((item) => {
    num += item.price * item.count;
  });

  return (
    <div className={styles[className]}>
      <div className={styles.titles}>
        <h2>Shopping Cart</h2>
        <div>cart</div>
      </div>

      <div className={styles.items}>
        {cart.length > 0 ? (
          cart.map((cartitem, i) => {
            return (
              <div className={styles.item} key={i}>
                <div>
                  <img className={styles.image} src={Img} alt="" />
                </div>

                <div>
                  <div className={styles.name}>{cartitem.name}</div>
                  <div className={styles.descriptions}>
                    <span>{cartitem.count}</span>
                    <span className={styles.x}>x</span>
                    <span className={styles.price}>USD {cartitem.price}</span>
                  </div>
                </div>

                <img
                  src={Delete}
                  className={styles.delete}
                  onClick={() => onDeleteItem(i)}
                  alt="delete"
                />
              </div>
            );
          })
        ) : (
          <div style={{ minWidth: "200px" }}>Cart is Empty</div>
        )}
      </div>
      <div className={styles.bottom}>
        {cart.length !== 0 && (
          <div className={styles.subtotalContainer}>
            <div>Subtotal</div>
            <div style={{ fontSize: "16px" }} className={styles.price}>
              USD {num}
            </div>
          </div>
        )}
        {cart.length !== 0 && (
          <div className={styles.buttons}>
            <Link to="/cart">
              <button className={styles.button}>Cart</button>
            </Link>
            <Link to="/checkout">
              <button className={styles.button}>Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
