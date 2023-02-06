import { Link } from "react-router-dom";
import "../../assets/styles/components/productSearch/seemore.css";

export default function SeeMore({ title }) {
  return (
    <div className="see-more">
      <span className="see-more__title">{title}</span>
      <Link
        className="see-more__link"
        to={
          title.toLowerCase().includes("brownie")
            ? "/all-prods/brownie"
            : title.toLowerCase().includes("roll")
            ? "/all-prods/cinnamon roll"
            : title.toLowerCase().includes("tart")
            ? "/all-prods/tart"
            : "/"
        }
      >
        see all
      </Link>
    </div>
  );
}
