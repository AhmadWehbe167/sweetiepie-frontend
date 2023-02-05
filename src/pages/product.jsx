import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FPSpinner from "../components/utils/fullPageSpinner";
import useLocalStorage from "../customHooks/useStorage";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../services/admin/update";
import {
  formatPrice,
  handleInquire,
  handleLoadPage,
} from "../services/product";
import whatsapp from "../assets/icons/product/whatsapp.png";
import "../assets/styles/pages/product.css";

export default function Product() {
  const { id } = useParams();
  const [authToken] = useLocalStorage("auth", "");
  const [isValid, setValid] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedItems, setRelatedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleLoadPage(
      setValid,
      setSelectedImage,
      fetchData,
      id,
      authToken,
      setName,
      setPrice,
      setDescription,
      setType,
      setSize,
      setImageUrls,
      setRelatedItems,
      navigate
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return !isValid ? (
    <FPSpinner />
  ) : (
    <div className="product">
      <div className="product__upper">
        <div className="product__image-cont">
          <div className="product__image-main">
            <img src={imageUrls[selectedImage]} alt="product" />
          </div>
          <div className="product__image-subcont">
            {imageUrls.map((e, idx) => {
              return (
                <div
                  key={e}
                  className={
                    "product__image " +
                    (selectedImage === idx ? "product__image--selected" : "")
                  }
                >
                  <img
                    src={e}
                    alt="product"
                    onClick={() => setSelectedImage(idx)}
                  />
                </div>
              );
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
              <p className="product__size-desc">
                {size === "other"
                  ? "Not definite"
                  : size === "both"
                  ? "Available in " +
                    size +
                    " sizes. One piece or full portion."
                  : "Available in " + size}
              </p>
            </div>
          </div>
          <button className="inquire-btn" onClick={() => handleInquire(name)}>
            <img src={whatsapp} alt="" className="inquire-btn__img" />
            <span className="inquire-btn__text">Inquire</span>
          </button>
        </div>
      </div>
      <div className="product__lower">
        <h1 className="product__lower-title">View More {type + "s"}</h1>
        <div className="product__lower-cont">
          {relatedItems.map((e) => {
            return (
              <div
                key={e._id}
                className="product__item"
                onClick={() => {
                  navigate(`/products/${e._id}`);
                }}
              >
                <img src={e.images[0]} alt="" className="product__item-img" />
                <span className="product__item-title">{e.name}</span>
                <span className="product__item-price">
                  {formatPrice(e.price)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
