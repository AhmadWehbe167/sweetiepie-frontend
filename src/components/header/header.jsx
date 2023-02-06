import { useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../../customHooks/useStorage";
import menu from "../../assets/icons/header/menu.png";
import "../../assets/styles/components/header/header.css";

const NAV_NAMES = ["Home", "Shop", "About", "Contact"];
const NAV_LINKS = ["/", "/product-search", "/about", "/contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [authToken, setAuthToken] = useLocalStorage("auth", "");

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
          {NAV_NAMES.map((e, idx) => {
            return (
              <li key={e} className="header__navlinks">
                <Link to={NAV_LINKS[idx]} onClick={handleClose}>
                  {e}
                </Link>
              </li>
            );
          })}
          {authToken !== "" ? (
            <li className="header__navlinks">
              <Link
                to={"/"}
                onClick={() => {
                  handleClose();
                  setAuthToken("");
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li className="header__navlinks">
              <Link to={"/admin/login"} onClick={handleClose}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
