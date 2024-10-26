import Checkout from "../components/Checkout/Checkout";
import useShoppingCart from "../components/hooks/useShoppingCart";
import Navbar from "../components/navbar/Navbar";
import ShopBanner from "../components/ShopBanner/ShopBanner";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const CheckoutPage = () => {
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
      <ShopBanner name="Checkout" location="Checkout" />
      <Checkout />
    </>
  );
};

export default CheckoutPage;
