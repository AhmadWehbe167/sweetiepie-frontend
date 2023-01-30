import "../../assets/styles/components/productSearch/banner.css";

export default function Banner({ image }) {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__bg" />
    </div>
  );
}
