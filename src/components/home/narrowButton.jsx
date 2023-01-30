import "../../assets/styles/components/home/narrowButton.css";

export default function NarButton({ text, onClick }) {
  return (
    <div className="narrow-button" onClick={onClick}>
      <span className="narrow-button__text">{text}</span>
    </div>
  );
}
