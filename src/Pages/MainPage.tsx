import Banner from "../components/navbar/Banner";
import Rooms from "../components/Rooms/Rooms";
import Products from "../components/Products/Products";
import Share from "../components/Share/Share";
import Footer from "../components/Footer/Footer";
import { Carousel } from "../components/Carousel/Carousel";
import Navbar from "../components/navbar/Navbar";
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../components/context/ContextProvider";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import "../App.scss";

const MainPage = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Navbar must be used within a ContextProvider");
  }

  const { isOpen, setIsOpen, cart, setCart } = context;

  const ref = useRef<HTMLDivElement>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && isOpen && !isDeleting) {
        const target = e.target as Node;

        if (ref.current.contains(target)) {
          return;
        }

        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, setIsOpen, isDeleting]);

  const handleDeleteItem = (index: number) => {
    setIsDeleting(true);

    const newArr = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(newArr);

    setTimeout(() => {
      setIsDeleting(false);
    }, 200);
  };

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
