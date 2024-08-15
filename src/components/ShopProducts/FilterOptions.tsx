import FilterIcons from "../../assets/FilterIcon.svg";
import DropDown from "./DropDown";

interface Props {
  currentOption: number;
  setCurrentOption: React.Dispatch<React.SetStateAction<number>>;
}

const FilterOptions = ({ currentOption, setCurrentOption }: Props) => {
  return (
    <section className="shop-filters-container">
      <div className="shop-filters_left-side">
        <div>
          <img src={FilterIcons} />
          <div>Filter</div>
        </div>
        <div className="shop-filters_border"></div>
        <div>Showing 1-16</div>
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
