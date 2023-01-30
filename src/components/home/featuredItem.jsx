import "../../assets/styles/components/home/featuredItem.css";

function FeaturedItem({ innerRef, title, bg, image, className, isVisible }) {
  return (
    <div
      ref={innerRef}
      className={"featured-item " + (isVisible ? "animate-featured" : "")}
    >
      <div className="featured-item__top">
        <img src={bg} alt="" className="featured-item__bg" />
        <img
          src={image}
          alt=""
          className={"featured-item__image " + className}
        />
      </div>
      <span className="featured-item__title">{title}</span>
    </div>
  );
}

export default FeaturedItem;
