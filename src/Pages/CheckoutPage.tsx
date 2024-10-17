import Checkout from "../components/Checkout/Checkout";
import Navbar from "../components/navbar/Navbar";
import ShopBanner from "../components/ShopBanner/ShopBanner";

const CheckoutPage = () => {
  return (
    <>
      <Navbar />
      <ShopBanner name="Checkout" location="Checkout" />
      <Checkout />
    </>
  );
};

export default CheckoutPage;
