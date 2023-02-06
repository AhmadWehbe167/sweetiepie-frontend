import React from "react";
import "../../assets/styles/components/productSearch/scroll.css";

function Scroll({ children, classNames }) {
  return <div className={"search-scroll " + classNames}>{children}</div>;
}

export default Scroll;
