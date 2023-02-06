import { formatPrice } from "../../services/product";
import "../../assets/styles/components/productSearch/card.css";

export default function Card({ customKey, title, price, image }) {
  return (
    <div key={customKey} className="card">
      <img className="card__img" src={image} alt="product" />
      <span className="card__title">{title}</span>
      <span className="card__price">{formatPrice(price)}</span>
    </div>
  );
}
