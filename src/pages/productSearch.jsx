import { useEffect, useState } from "react";
import { fetchByType } from "../services/productSearch";
import useLocalStorage from "../customHooks/useStorage";
import Search from "../components/productSearch/search";
import Banner from "../components/productSearch/banner";
import SeeMore from "../components/productSearch/seemore";
import GridContainer from "../components/productSearch/gridCont";
import useWindowWidth from "../customHooks/useWindowWidth";
import FPSpinner from "../components/utils/fullPageSpinner";
import { Link } from "react-router-dom";
import brownieBg from "../assets/images/productSearch/brownies-bg.webp";
import rollsBg from "../assets/images/productSearch/rolls-bg.webp";
import tartsBg from "../assets/images/productSearch/tarts-bg.webp";
import "../assets/styles/pages/productSearch.css";

export default function ProductSearch() {
  const [authToken] = useLocalStorage("auth", "");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [brownies, setBrownies] = useState([]);
  const [tarts, setTarts] = useState([]);
  const [rolls, setRolls] = useState([]);
  const width = useWindowWidth();

  useEffect(() => {
    let itemsNb = 5;
    if (width < 460) {
      itemsNb = 3;
    } else if (width >= 460 && width < 680) {
      itemsNb = 4;
    } else if (width >= 680 && width < 900) {
      itemsNb = 3;
    } else if (width >= 900 && width < 1120) {
      itemsNb = 4;
    }
    setLoading(true);
    setError(false);
    fetchByType(
      "brownie",
      authToken,
      itemsNb,
      (res) => {
        setBrownies(res);
      },
      () => {
        setError(true);
      }
    );
    fetchByType(
      "tart",
      authToken,
      itemsNb,
      (res) => {
        setTarts(res);
      },
      () => {
        setError(true);
      }
    );
    fetchByType(
      "cinnamon roll",
      authToken,
      itemsNb,
      (res) => {
        setRolls(res);
      },
      () => {
        setError(true);
      }
    ).finally(() => {
      setLoading(false);
    });
  }, [authToken, width]);

  return (
    <div className="productSearch">
      {authToken !== "" ? (
        <Link to="/admin/upload">
          <button className="add-item__btn">+</button>
        </Link>
      ) : null}
      <Search details={[...brownies, ...tarts, ...rolls]} error={error} />
      {brownies.length > 0 ? (
        <>
          <Banner image={brownieBg} />
          <SeeMore title="Brownies" />
        </>
      ) : null}
      {loading ? <FPSpinner /> : <GridContainer items={brownies} />}
      {rolls.length > 0 ? (
        <>
          <Banner image={rollsBg} />
          <SeeMore title="Cinnamon Rolls" />
        </>
      ) : null}
      {loading ? <FPSpinner /> : <GridContainer items={rolls} />}
      {tarts.length > 0 ? (
        <>
          <Banner image={tartsBg} />
          <SeeMore title="Tarts" />
        </>
      ) : null}
      {loading ? <FPSpinner /> : <GridContainer items={tarts} />}
    </div>
  );
}
