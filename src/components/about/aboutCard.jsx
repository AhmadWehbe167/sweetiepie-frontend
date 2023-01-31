import "../../assets/styles/components/about/aboutCard.css";

export default function AboutCard({ icon, title, desc }) {
  return (
    <div className="about-card">
      <img src={icon} alt="" className="about-card__icon" />
      <h1 className="about-card__title">{title}</h1>
      <p className="about-card__desc">{desc}</p>
    </div>
  );
}
