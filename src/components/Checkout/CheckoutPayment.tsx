import { useState } from "react";
import useShoppingCart from "../hooks/useShoppingCart";
import styles from "./CheckoutPayment.module.scss";
import { BsCircle, BsCircleFill } from "react-icons/bs";
const CheckoutPayment = () => {
  const { cart } = useShoppingCart();

  let num = 0;

  cart.forEach((item) => {
    num += item.price * item.count;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const options = [
    {
      name: "Direct Bank Transfer",
      description:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    },
    {
      name: "Direct Bank Transfer",
      description:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    },
    {
      name: "Cash On Delivery",
      description: "lorem ipsum",
    },
  ];

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.right}>
      <div className={styles.container}>
        <div className={styles.totalheader}>
          <h3 className={styles.header}>Product</h3>
          <h3 className={styles.header}>Subtotal</h3>
        </div>
        <div className={styles.cartitems}>
          <div className={styles.cartitems}>
            {cart.map((item, i) => {
              return (
                <div key={i} className={styles.cartItem}>
                  <div>
                    <span className={styles.name}>{item.name}</span>{" "}
                    <span className={styles.count}>x </span>
                    <span className={styles.count}>USD {item.count}</span>
                  </div>
                  <div className={styles.light}>USD {item.price}</div>
                </div>
              );
            })}
          </div>
          <div className={styles.totalheader}>
            <div>Subtotal</div>
            <div className={styles.light}>{num}</div>
          </div>
          <div className={styles.totalheader}>
            <div>Total</div>
            <div className={styles.bold}>{num}</div>
          </div>
        </div>
      </div>
      <div className={styles.transferoptions}>
        <div className={styles.optionscontainer}>
          {options.map((option, i) => {
            return (
              <div className={styles.transfercontainer} key={i}>
                <div className={styles.transfer}>
                  <div
                    style={{ height: "18px", display: "flex" }}
                    onClick={() => {
                      handleClick(i);
                    }}
                  >
                    {i === currentIndex ? (
                      <BsCircleFill />
                    ) : (
                      <BsCircle style={{ cursor: "pointer" }} />
                    )}
                  </div>
                  {
                    <div
                      className={
                        currentIndex == i
                          ? `${styles.currentText}`
                          : `${styles.graytext}`
                      }
                    >
                      {option.name}
                    </div>
                  }
                </div>
                {currentIndex == i && (
                  <div className={styles.description}>{option.description}</div>
                )}
              </div>
            );
          })}
          <div>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={styles.button}>Place Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPayment;
