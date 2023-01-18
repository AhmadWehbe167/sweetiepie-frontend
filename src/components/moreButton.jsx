import "../assets/styles/components/moreButton.css";

function MoreButton({ firstOnClick, secondOnClick, firstText, secondText, isVisible }) {
  return (
    <div className={"buttons-container" + (isVisible ? " animate-more-button" : "")}>
      <div className="wide-button" onClick={firstOnClick}>
        <span className="wide-button__text">{firstText}</span>
      </div>
      <div className="shallow-button" onClick={secondOnClick}>
        <span className="shallow-button__text">{secondText}</span>
      </div>
    </div>
  );
}

export default MoreButton;
