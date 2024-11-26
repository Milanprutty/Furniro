import FilterIcons from "../../assets/FilterIcon.svg";
import DropDown from "./DropDown";
import { productArray } from "../Products/productData";

interface Props {
  currentOption: number;
  setCurrentOption: React.Dispatch<React.SetStateAction<number>>;
  displayed: number;
  startingPoint: number;
  currentOption2: string;
  setCurrentOption2: React.Dispatch<React.SetStateAction<string>>;
}

const FilterOptions = ({
  currentOption,
  setCurrentOption,
  startingPoint,
  displayed,
  currentOption2,
  setCurrentOption2,
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
          Showing {startingPoint !== 0 ? startingPoint : 1}-{displayed} of{" "}
          {productArray.length} results
        </div>
      </div>

      <div className="shop-filters_right-side">
        <div>
          <div>Show</div>

          <DropDown
            setCurrentOption={setCurrentOption}
            currentoption={currentOption}
            width={"30px"}
            options={[6, 12, 18]}
          />
          <div>Sort By</div>
        </div>
        <div>
          <DropDown
            setCurrentOption={setCurrentOption2}
            currentoption={currentOption2}
            options={["name", "price", "price reversed", "none"]}
          />
        </div>
      </div>
    </section>
  );
};

export default FilterOptions;
