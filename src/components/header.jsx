import "../assets/styles/components/header.css";
import menu from "../assets/icons/header/menu.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <img
        src={menu}
        alt="menu icon"
        className="header__menu-icon"
        onClick={handleOpen}
      />
      <div className="header-container">
        <span
          className={"header__logo " + (open ? "header__logo--invisible" : "")}
        >
          Sweetie Pies
        </span>
        <ul
          className={
            "header__navbar " + (open ? "" : "header__navbar--display ")
          }
        >
          <li className="header__navlinks">
            <Link to={"/"}>Home</Link>
          </li>

          <li className="header__navlinks">
            <Link to={"/product-search"}>Shop</Link>
          </li>

          <li className="header__navlinks">
            <Link to={"/about"}>About</Link>
          </li>

          <li className="header__navlinks">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
