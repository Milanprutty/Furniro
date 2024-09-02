import "./Navbar.scss";
import Furniro from "../../assets/Furniro.svg";
import accountAlert from "../../assets/accountAlert.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/shoppingCart.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to={"/"}>
        <div>
          <img src={Furniro} about="" />
        </div>
      </Link>
      <nav className="navbar-center">
        <ul className="navbar-center__list">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/shop"}>
            <li>Shop</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
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
