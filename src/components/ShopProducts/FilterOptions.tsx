import FilterIcons from "../../assets/FilterIcon.svg";
import DropDown from "./DropDown";
import { productArray } from "../Products/productData";

interface Props {
  currentOption: number;
  setCurrentOption: React.Dispatch<React.SetStateAction<number>>;
  displayed: number;
  startingPoint: number;
}

const FilterOptions = ({
  currentOption,
  setCurrentOption,
  startingPoint,
  displayed,
}: Props) => {
  return (
    <section className="shop-filters-container">
      <div className="shop-filters_left-side">
        <div>
          <img src={FilterIcons} />
          <div>Filter</div>
        </div>
        <div className="shop-filters_border"></div>
        <div>
          Showing {startingPoint}-{displayed} of {productArray.length} results
        </div>
      </div>
      <div className="shop-filters_right-side">
        <div>Show</div>

        <DropDown
          setCurrentOption={setCurrentOption}
          currentOption={currentOption}
          width={"30px"}
          classname="first"
        />
        <div>Sort By</div>
        <div></div>
        <DropDown
          setCurrentOption={setCurrentOption}
          currentOption="Default"
          classname="second"
        />
      </div>
    </section>
  );
};

export default FilterOptions;
