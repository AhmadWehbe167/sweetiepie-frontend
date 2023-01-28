import Card from "./card";
import "../../assets/styles/components/productSearch/gridCont.css";

function GridContainer() {
  return (
    <div className="grid-container">
      <Card title={"Lotus Nirvana"} price={12} />
      <Card title={"Lotus Another"} price={900} />
      <Card title={"Lotus Another"} price={900} />
      <Card title={"Lotus Another"} price={900} />
      <Card title={"Lotus Another"} price={900} />
      <Card title={"Lotus Another"} price={900} />
      <Card title={"Lotus Another"} price={900} />
      <Card title={"Lotus Another"} price={900} />
      <Card title={"Lotus Another"} price={900} />
      <Card title={"Lotus Another"} price={900} />
    </div>
  );
}

export default GridContainer;
