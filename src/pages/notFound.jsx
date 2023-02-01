// create a function component for not found page
import React from "react";
import bg from "../assets/images/home/location/background.webp";
import "../assets/styles/pages/notFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <img src={bg} alt="" className="not-found__img" />
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Page Not Found</h2>
    </div>
  );
}
