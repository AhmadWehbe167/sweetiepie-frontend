import image from "../assets/images/home/featuredProducts/brownie-2.webp";
import whatsapp from "../assets/icons/product/whatsapp.png";
import brownie1Image from "../assets/images/home/featuredProducts/brownie-1.webp";
import brownie2Image from "../assets/images/home/featuredProducts/brownie-2.webp";
import brownie3Image from "../assets/images/home/featuredProducts/brownie-3.webp";
import "../assets/styles/pages/product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="product__upper">
        <div className="product__image-cont">
          <img src={image} alt="product" className="product__image-main" />
          <div className="product__image-subcont">
            <img src={image} alt="product" className="product__image" />
            <img src={image} alt="product" className="product__image" />
            <img src={image} alt="product" className="product__image" />
          </div>
        </div>
        <div className="product__info">
          <div>
            <span className="product__type">brownies</span>
            <h1 className="product__title">Lotus Nirvana</h1>
            <span className="product__price">$15.00</span>
          </div>
          <p className="product__description">
            A brownie is a rich, chocolatey treat that is perfect for satisfying
            your sweet tooth. It has a soft, moist texture and a fudgy,
            indulgent flavor that is sure to please. Whether you prefer your
            brownies plain or loaded with toppings like nuts, frosting, or
            chocolate chips
          </p>
          <div className="product__size">
            <span className="product__size-title">Size:</span>
            <div className="product__size-options">
              <div className="product__option">
                <input type="radio" name="radio" id="radio1" checked />
                <label htmlFor="radio1">One Piece</label>
              </div>
              <div className="product__option">
                <input type="radio" name="radio" id="radio2" />
                <label htmlFor="radio2">Whole Portion</label>
              </div>
              <div className="product__option">
                <input type="radio" name="radio" id="radio3" />
                <label htmlFor="radio3">Other</label>
              </div>
            </div>
          </div>
          <button className="inquire-btn">
            <img src={whatsapp} alt="" className="inquire-btn__img" />
            <span className="inquire-btn__text">Inquire</span>
          </button>
        </div>
      </div>
      <div className="product__lower">
        <h1 className="product__lower-title">View More Brownies</h1>
        <div className="product__lower-cont">
          <div className="product__item">
            <img src={brownie1Image} alt="" className="product__item-img" />
            <span className="product__item-title">Lotus Nirvana</span>
            <span className="product__item-price">$15.00</span>
          </div>
          <div className="product__item">
            <img src={brownie2Image} alt="" className="product__item-img" />
            <span className="product__item-title">Lotus Nirvana</span>
            <span className="product__item-price">$15.00</span>
          </div>
          <div className="product__item">
            <img src={brownie3Image} alt="" className="product__item-img" />
            <span className="product__item-title">Lotus Nirvana</span>
            <span className="product__item-price">$15.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
