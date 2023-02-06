import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./searchList";
import "../../assets/styles/components/productSearch/search.css";

export default function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const filteredItems = details.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchField.toLowerCase()) ||
      item.type.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="search">
      <div className="search-bar">
        <FontAwesomeIcon
          className="search__icon"
          icon={faSearch}
          color="grey"
          size="lg"
        />
        <input
          className="search__input"
          type="text"
          placeholder="What are you looking for..."
          onChange={handleChange}
          value={searchField}
        />
      </div>
      <Scroll classNames={searchField === "" ? "search-scroll--hidden" : ""}>
        <SearchList filteredItems={filteredItems} />
      </Scroll>
    </div>
  );
}
