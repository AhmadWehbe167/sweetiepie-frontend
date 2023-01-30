import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/components/productSearch/search.css";

export default function Search() {
  return (
    <div className="search">
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
      />
    </div>
  );
}
