import { useState } from "react";
import FilterOptions from "./FilterOptions";
import Products from "./Products";
import "./ShopProducts.scss";

const ShopProducts = () => {
  const [currentOption, setCurrentOption] = useState(6);

  return (
    <div>
      <FilterOptions
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
      />
      <Products currentOption={currentOption} />
    </div>
  );
};

export default ShopProducts;
