import { useContext } from "react";
import styles from "./Cart.module.scss";
import { MyContext } from "../context/ContextProvider";
import furniture from "../../assets/furniture.png";
import Trash from "../../assets/trashIcon.svg";
import useShoppingCart from "../hooks/useShoppingCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const context = useContext(MyContext);

  const { handleDeleteItem } = useShoppingCart();

  if (!context) {
    throw new Error("Navbar must be used within a ContextProvider");
  }

  const { cart } = context;
  let num = 0;

  cart.forEach((item) => {
    num += item.price * item.count;
  });

  return (
    <section className={styles.leftright}>
      <section className={styles.leftside}>
        <div className={styles.titles}>
          <h3 className={styles.producttop}>Product</h3>
          <h3>Price</h3>

          <div className={styles.quantitysubtotal}>
            <h3 className={styles.quantitytop}>Quantity</h3>
            <h3>Subtotal</h3>
          </div>
        </div>
        <div className={styles.cartitems}>
          {cart.map((item, i) => {
            return (
              <div className={styles.cartitem} key={i}>
                <img className={styles.image} src={furniture} alt="furniture" />
                <div className={styles.gray}>{item.name}</div>
                <div className={styles.hiddenprice}>
                  <div>{item.count} </div>
                  <span> * </span>
                  <div> {item.price} </div>
                </div>
                <div className={`${styles.gray} ${styles.getshidden} `}>
                  USD {item.price}
                </div>
                <div className={styles.quantity}>{item.count}</div>
                <div className={styles.subtotal}>
                  USD {item.count * item.price}
                </div>
                <img
                  className={styles.trash}
                  onClick={() => handleDeleteItem(i)}
                  src={Trash}
                  alt="trash"
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.rightside}>
        <h1 className={styles.total}>Cart Totals</h1>
        <div className={styles.rightsidestuff}>
          <div className={styles.priceinfo}>
            <span className={styles.pricename}>Subtotal</span>
            <span className={styles.greyprice}>USD {num}</span>
          </div>
          <div className={styles.priceinfo}>
            <span className={styles.pricename}>Total</span>
            <span className={styles.bigprice}>USD {num}</span>
          </div>
          <button className={styles.button}>
            <Link to="/checkout">Check Out</Link>
          </button>
        </div>
      </section>
    </section>
  );
};

export default Cart;
