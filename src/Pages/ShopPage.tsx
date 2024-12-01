import FeatureFrame from "../components/FeatureFrame/FeatureFrame";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ShopBanner from "../components/ShopBanner/ShopBanner";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import ShopProducts from "../components/ShopProducts/ShopProducts";
import useShoppingCart from "../components/hooks/useShoppingCart";
import "../App.scss";
import { useLocation } from "react-router";
import { useEffect } from "react";
import NotificationContainer from "../components/AddedItemNotification/NotificationContainer";

const ShopPage = () => {
  const { isOpen, handleDeleteItem, ref } = useShoppingCart();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div ref={ref}>
        <Navbar />
        <ShoppingCart
          className={isOpen ? "open" : "closed"}
          onDeleteItem={handleDeleteItem}
        />
      </div>
      {isOpen && <div className="overlay"></div>}
      <ShopBanner name="Shop" location="Shop" />
      <ShopProducts />
      <NotificationContainer />
      <FeatureFrame />
      <Footer />
    </>
  );
};

export default ShopPage;
