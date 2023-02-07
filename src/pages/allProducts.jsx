import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchByType } from "../services/productSearch";
import FPSpinner from "../components/utils/fullPageSpinner";
import Search from "../components/productSearch/search";
import GridContainer from "../components/productSearch/gridCont";
import useOnLoad from "../customHooks/useOnLoad";
import useLocalStorage from "../customHooks/useStorage";
import { useNavigate } from "react-router-dom";
import "../assets/styles/pages/allProducts.css";

export default function AllProducts() {
  const { type } = useParams();
  const [authToken] = useLocalStorage("auth", "");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useOnLoad(async () => {
    setLoading(true);
    await fetchByType(
      type,
      authToken,
      "all",
      (res) => {
        setItems(res);
      },
      () => {
        navigate("/");
      }
    ).finally(() => {
      setLoading(false);
    });
  });

  return (
    <div className="products">
      <h1 className="products__title">{type.toUpperCase()}</h1>
      <Search details={items} />
      {loading ? <FPSpinner /> : <GridContainer items={items} />}
    </div>
  );
}
