import FeatureFrame from "../components/FeatureFrame/FeatureFrame";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ShopBanner from "../components/ShopBanner/ShopBanner";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import ShopProducts from "../components/ShopProducts/ShopProducts";
import useShoppingCart from "../components/hooks/useShoppingCart";
import "../App.scss";

const ShopPage = () => {
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
      <ShopBanner name="Shop" location="Shop" />
      <ShopProducts />
      <FeatureFrame />
      <Footer />
    </>
  );
};

export default ShopPage;
