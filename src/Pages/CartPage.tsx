import NotificationContainer from "../components/AddedItemNotification/NotificationContainer";
import Cart from "../components/Cart/Cart";
import FeatureFrame from "../components/FeatureFrame/FeatureFrame";
import Footer from "../components/Footer/Footer";
import useShoppingCart from "../components/hooks/useShoppingCart";

import Navbar from "../components/navbar/Navbar";
import ShopBanner from "../components/ShopBanner/ShopBanner";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const CartPage = () => {
  const { isOpen, handleDeleteItem, ref } = useShoppingCart();

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
      <ShopBanner name="Cart" location="Cart" />
      <NotificationContainer />
      <Cart />
      <FeatureFrame />
      <Footer />
    </>
  );
};

export default CartPage;
