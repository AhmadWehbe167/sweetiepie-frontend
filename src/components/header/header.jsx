import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../../assets/icons/header/menu.png";
import "../../assets/styles/components/header/header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <img
        src={menu}
        alt="menu icon"
        className="header__menu-icon"
        onClick={toggleOpen}
      />
      <div className="header-container">
        <Link to={"/"}>
          <span
            className={
              "header__logo " + (open ? "header__logo--invisible" : "")
            }
          >
            Sweetie Pies
          </span>
        </Link>
        <ul
          className={
            "header__navbar " + (open ? "" : "header__navbar--display ")
          }
        >
          <li className="header__navlinks">
            <Link to={"/"} onClick={handleClose}>
              Home
            </Link>
          </li>

          <li className="header__navlinks">
            <Link to={"/product-search"} onClick={handleClose}>
              Shop
            </Link>
          </li>

          <li className="header__navlinks">
            <Link to={"/about"} onClick={handleClose}>
              About
            </Link>
          </li>

          <li className="header__navlinks">
            <Link to={"/contact"} onClick={handleClose}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
