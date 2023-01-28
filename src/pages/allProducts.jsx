import { useParams } from "react-router-dom";
import Search from "../components/productSearch/search";
import GridContainer from "../components/productSearch/gridCont";
import "../assets/styles/pages/allProducts.css";

function AllProducts() {
  const { type } = useParams();
  return (
    <div className="products">
      <h1 className="products__title">{type.toUpperCase()}</h1>
      <Search />
      <GridContainer />
    </div>
  );
}

export default AllProducts;
