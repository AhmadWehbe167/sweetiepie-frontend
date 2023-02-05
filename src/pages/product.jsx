import { useParams } from "react-router-dom";
import { useState } from "react";
import FPSpinner from "../components/utils/fullPageSpinner";
import useOnLoad from "../customHooks/useOnLoad";
import { fetchData } from "../services/admin/update";
import useLocalStorage from "../customHooks/useStorage";
import { useNavigate } from "react-router-dom";
import { SIZES } from "../constants/typesAndSizes";
import whatsapp from "../assets/icons/product/whatsapp.png";
import brownie1Image from "../assets/images/home/featuredProducts/brownie-1.webp";
import brownie2Image from "../assets/images/home/featuredProducts/brownie-2.webp";
import brownie3Image from "../assets/images/home/featuredProducts/brownie-3.webp";
import "../assets/styles/pages/product.css";

export default function Product() {
  const { id } = useParams();
  const [isValid, setValid] = useState(false);
  const [authToken] = useLocalStorage("auth", "");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);
  const navigate = useNavigate();

  useOnLoad(() => {
    fetchData(
      id,
      authToken,
      (res) => {
        setName(res.data.name);
        setPrice(res.data.price);
        setDescription(res.data.description);
        setType(res.data.type);
        setSize(res.data.size);
        setImageUrls(res.data.images);
        setValid(true);
      },
      (err) => {
        navigate("/not-found");
      }
    );
  });

  //format price by adding dollar at the beginning and formating it as a decimal number with two digits after the point and add commas for convinience
  function formatPrice(price) {
    return `$${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  }

  return !isValid ? (
    <FPSpinner />
  ) : (
    <div className="product">
      <div className="product__upper">
        <div className="product__image-cont">
          <img
            src={imageUrls[0]}
            alt="product"
            className="product__image-main"
          />
          <div className="product__image-subcont">
            {imageUrls.slice(1).map((e) => {
              return <img src={e} alt="product" className="product__image" />;
            })}
          </div>
        </div>
        <div className="product__info">
          <div>
            <span className="product__type">{type.toUpperCase()}</span>
            <h1 className="product__title">{name}</h1>
            <span className="product__price">{formatPrice(price)}</span>
          </div>
          <p className="product__description">{description}</p>
          <div className="product__size">
            <span className="product__size-title">Size:</span>
            <div className="product__size-options">
              {SIZES.map((e) => {
                return (
                  <div className="product__option">
                    <input
                      type="radio"
                      name={e.toLowerCase()}
                      id={e.toLowerCase()}
                      checked={e.toLowerCase() === size}
                    />
                    <label htmlFor="radio1">{e}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="inquire-btn">
            <img src={whatsapp} alt="" className="inquire-btn__img" />
            <span className="inquire-btn__text">Inquire</span>
          </button>
        </div>
      </div>
      <div className="product__lower">
        <h1 className="product__lower-title">View More {type + "s"}</h1>
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
