import Card from "./card";
import { Link } from "react-router-dom";
import "../../assets/styles/components/productSearch/gridCont.css";

export default function GridContainer({ items }) {
  return (
    <div className="grid-container">
      {items.map((e) => {
        return (
          <Link key={e._id} to={`/products/${e._id}`}>
            <Card title={e.name} price={e.price} image={e.images[0]} />
          </Link>
        );
      })}
    </div>
  );
}
