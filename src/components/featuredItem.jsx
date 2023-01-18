import "../assets/styles/components/featuredItem.css";

function FeaturedItem({ title, bg, image, className, isVisible }) {
  return (
    <div className={"featured-item " + (isVisible ? "animate" : "")}>
      <div className="featured-item__top">
        <img src={bg} alt="" className="featured-item__bg" />
        <img src={image} alt="" className={"featured-item__image " + className } />
      </div>
      <span className="featured-item__title">{title}</span>
    </div>
  );
}

export default FeaturedItem;
