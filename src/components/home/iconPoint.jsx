import "../../assets/styles/components/home/iconPoint.css";

export default function IconPoint({ innerRef, icon, text, isVisible }) {
  return (
    <div
      ref={innerRef}
      className={"icon-point" + (isVisible ? " animate-icon-point" : "")}
    >
      <img src={icon} alt="" className="icon-point__img" />
      <span className="icon-point__text">{text}</span>
    </div>
  );
}
