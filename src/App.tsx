import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import Banner from "./components/navbar/Banner";
import Rooms from "./components/Rooms/Rooms";
import Products from "./components/Products/Products";
import { Carousel } from "./components/Carousel/Carousel";
import Share from "./components/Share/Share";
import Footer from "./components/Footer/Footer";

const App = () => {
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

export default App;
