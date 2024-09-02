import { useState } from "react";
import FilterOptions from "./FilterOptions";
import Products from "./Products";
import "./ShopProducts.scss";

const ShopProducts = () => {
  const [currentOption, setCurrentOption] = useState(6);
  const [startingPoint, setStartingPoint] = useState(0);
  const [displayed, setDisplayed] = useState(currentOption);
  const [currentOption2, setCurrentOption2] = useState("none");

  return (
    <div>
      <FilterOptions
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
        displayed={displayed}
        startingPoint={startingPoint}
        currentOption2={currentOption2}
        setCurrentOption2={setCurrentOption2}
      />
      <Products
        currentOption2={currentOption2}
        currentOption={currentOption}
        startingPoint={startingPoint}
        setStartingPoint={setStartingPoint}
        displayed={displayed}
        setDisplayed={setDisplayed}
      />
    </div>
  );
};

export default ShopProducts;
