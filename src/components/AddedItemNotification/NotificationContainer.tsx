import { useContext, useEffect, useRef, useState } from "react";
import useShoppingCart from "../hooks/useShoppingCart";
import styles from "./Container.module.scss";
import { MyContext } from "../context/ContextProvider";

type Notification = {
  id: number;
  message: string;
  timer: NodeJS.Timeout | null;
  visible: false | true;
  type: "success" | "error";
};

const NotificationContainer = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error(
      "NotificationContainer must be used within a ContextProvider"
    );
  }

  const { notifications, setNotifications } = context;

  const { cart } = useShoppingCart();
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);
  const prevCartRef = useRef(cart);

  useEffect(() => {
    const prevCart = prevCartRef.current;
    prevCartRef.current = cart;

    if (prevCart.length < cart.length) {
      const id = Date.now();
      const newNotification: Notification = {
        id,
        message: "Successfully added item to cart",
        type: "success",
        visible: true,
        timer: null,
      };

      setNotifications((prev) => [...prev, newNotification]);

      const fadeOutTimer = setTimeout(() => {
        setNotifications((prev) =>
          prev.map((notif) =>
            notif.id === id ? { ...notif, visible: false } : notif
          )
        );
      }, 2000);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((notif) => notif.id !== id));
      }, 2500);

      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === id ? { ...notif, timer: fadeOutTimer } : notif
        )
      );
    }
  }, [cart, setNotifications, notifications]);
  useEffect(() => {
    return () => {
      notifications.forEach((notif) => {
        if (notif.timer) {
          clearTimeout(notif.timer);
        }
      });
    };
  }, [notifications]);

  useEffect(() => {
    const onResize = () => {
      setCurrentHeight(window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      style={{ top: `${currentHeight - 100 - notifications.length * 30}px` }}
      className={styles.notifications}
    >
      {notifications.map((item, i) => (
        <div
          className={`${styles.notification} ${styles[item.type]}  ${
            item.visible ? styles.visible : styles.hidden
          }`}
          key={i}
        >
          {item.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;
