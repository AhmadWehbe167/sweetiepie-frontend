import "../../assets/styles/components/home/narrowButton.css";

function NarButton({ text, onClick }) {
  return (
    <div className="narrow-button" onClick={onClick}>
      <span className="narrow-button__text">{text}</span>
    </div>
  );
}

export default NarButton;
