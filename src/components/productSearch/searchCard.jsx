import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/components/productSearch/searchCard.css";

function SearchCard({ customKey, item }) {
  return (
    <Link to={`/products/${item._id}`}>
      <div className="search-card" key={customKey}>
        <h2 className="search-card__name">{item.name}</h2>
        <p className="search-card__type">{item.type}</p>
      </div>
    </Link>
  );
}

export default SearchCard;
