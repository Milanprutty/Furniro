import Banner from "../components/navbar/Banner";
import Rooms from "../components/Rooms/Rooms";
import Products from "../components/Products/Products";
import Share from "../components/Share/Share";
import Footer from "../components/Footer/Footer";
import { Carousel } from "../components/Carousel/Carousel";
import Navbar from "../components/navbar/Navbar";

const MainPage = () => {
  return (
    <>
      <Navbar />
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
