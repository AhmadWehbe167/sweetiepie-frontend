import React from "react";
import SearchCard from "./searchCard";

function SearchList({ filteredItems }) {
  const filtered = filteredItems.map((item) => (
    <SearchCard customKey={item._id} key={item._id} item={item} />
  ));
  return <div>{filtered}</div>;
}

export default SearchList;
