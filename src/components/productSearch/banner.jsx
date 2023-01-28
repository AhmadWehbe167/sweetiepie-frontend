import "../../assets/styles/components/productSearch/banner.css";

function Banner({ image }) {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__bg" />
    </div>
  );
}

export default Banner;
