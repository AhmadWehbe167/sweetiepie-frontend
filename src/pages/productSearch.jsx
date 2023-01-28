import "../assets/styles/pages/productSearch.css";
import Search from "../components/productSearch/search";
import Banner from "../components/productSearch/banner";
import SeeMore from "../components/productSearch/seemore";
import GridContainer from "../components/productSearch/gridCont";
import brownieBg from "../assets/images/productSearch/brownies-bg.webp";
import rollsBg from "../assets/images/productSearch/rolls-bg.webp";
import tartsBg from "../assets/images/productSearch/tarts-bg.webp";

function ProductSearch() {
  return (
    <div className="productSearch">
      <Search />
      <Banner image={brownieBg} />
      <SeeMore title="Brownies" />
      <GridContainer />
      <Banner image={rollsBg} />
      <SeeMore title="Cinnamon Rolls" />
      <GridContainer />
      <Banner image={tartsBg} />
      <SeeMore title="Tarts" />
      <GridContainer />
    </div>
  );
}

export default ProductSearch;
