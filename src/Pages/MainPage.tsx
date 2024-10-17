import Banner from "../components/navbar/Banner";
import Rooms from "../components/Rooms/Rooms";
import Products from "../components/Products/Products";
import Share from "../components/Share/Share";
import Footer from "../components/Footer/Footer";
import { Carousel } from "../components/Carousel/Carousel";
import Navbar from "../components/navbar/Navbar";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import useShoppingCart from "../components/hooks/useShoppingCart";
import "../App.scss";

const MainPage = () => {
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
      <Banner />
      <Rooms />
      <Products />
      <Carousel />
      <Share />
      <Footer />
    </>
  );
};

export default MainPage;
