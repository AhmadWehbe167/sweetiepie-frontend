import "../../assets/styles/components/productSearch/card.css";
import image from "../../assets/images/productSearch/brownie.webp";

function Card({ title, price }) {
  return (
    <div className="card">
      <img className="card__img" src={image} alt="product" />
      <span className="card__title">{title}</span>
      <span className="card__price">{"$" + price}</span>
    </div>
  );
}

export default Card;
