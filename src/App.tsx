import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import Banner from "./components/navbar/Banner";
import Rooms from "./components/Rooms/Rooms";
import Products from "./components/Products/Products";
import { Carousel } from "./components/Carousel/Carousel";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Rooms />
      <Products />
      <Carousel />
    </div>
  );
};

export default App;
