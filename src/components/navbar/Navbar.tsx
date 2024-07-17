import "./Navbar.scss";
import Furniro from "../../assets/Furniro.svg";
import accountAlert from "../../assets/accountAlert.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/shoppingCart.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <img src={Furniro} about="" />
      </div>
      <div className="navbar-center">
        <ul className="navbar-center__list">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar-icons">
        <img src={accountAlert} />
        <img src={search} />
        <img src={heart} />
        <img src={cart} />
      </div>
    </div>
  );
};

export default Navbar;
