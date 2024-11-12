import { useState } from "react";
import "./Burger.scss";
import { Link } from "react-router-dom";

const Burger = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="burger">
      <div
        onClick={handleClick}
        className={isOpened ? "openmenu hamburger" : "hamburger"}
      >
        <div>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </div>
      <div className={isOpened ? "dropdown__open" : "dropdown__closed"}>
        <ul className="dropdown__list">
          <li className="hidefirst">
            <Link to={"/"}>Home </Link>
          </li>

          <li className="hidefirst">
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li className="dropdown__cart">
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li className="hidefirst">About</li>
          <li className="hidefirst">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Burger;
