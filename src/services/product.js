import { adminInfo } from "../constants/admin";
import axios from "axios";

export function formatPrice(price) {
  return `$${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
}

export function handleInquire(name) {
  window.open(
    `https://wa.me/${adminInfo.phoneNumber}?text=Hi%20I%20would%20like%20to%20inquire%20about%20the%20` +
      name +
      `%20product. \n` +
      window.location.href
  );
}

export function handleLoadPage(
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
) {
  setValid(false);
  setSelectedImage(0);
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
      axios({
        method: "get",
        baseURL: process.env.REACT_APP_API_ENDPOINT,
        url: "/items",
        headers: {
          "x-auth-token": authToken,
        },
      })
        .then((response) => {
          let items = response.data;
          items = items.filter((e) => e.type === res.data.type);
          items = items.filter((e) => e._id !== res.data._id);
          items = items.slice(0, 3);
          setRelatedItems(items);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    (err) => {
      navigate("/not-found");
    }
  );
}
