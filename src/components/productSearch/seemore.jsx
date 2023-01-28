import { Link } from "react-router-dom";
import "../../assets/styles/components/productSearch/seemore.css";

function SeeMore({ title }) {
  return (
    <div className="see-more">
      <span className="see-more__title">{title}</span>
      <Link
        className="see-more__link"
        to={
          title.toLowerCase().includes("brownie")
            ? "/all-prods/brownies"
            : title.toLowerCase().includes("roll")
            ? "/all-prods/rolls"
            : title.toLowerCase().includes("tart")
            ? "/all-prods/tarts"
            : "/"
        }
      >
        see all
      </Link>
    </div>
  );
}

export default SeeMore;
