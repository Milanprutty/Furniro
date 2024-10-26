import "./Navbar.scss";
import Furniro from "../../assets/Furniro.svg";

import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/shoppingCart.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/ContextProvider";

const Navbar = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Navbar must be used within a ContextProvider");
  }

  const { setIsOpen } = context;

  return (
    <div className="navbar-container">
      <Link to={"/"}>
        <div>
          <img src={Furniro} alt="" />
        </div>
      </Link>
      <nav className="navbar-center">
        <ul className="navbar-center__list">
          <li>
            <Link to={"/"}>Home </Link>
          </li>

          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>

          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="navbar-icons">
        <img src={search} />
        <img src={heart} />
        <img src={cart} className="cart" onClick={() => setIsOpen(true)} />
      </div>
    </div>
  );
};

export default Navbar;
