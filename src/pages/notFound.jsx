// create a function component for not found page
import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/pages/notFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Page Not Found</h2>
      <Link to="/" className="not-found__link">
        Go Back
      </Link>
    </div>
  );
}

export default NotFound;
