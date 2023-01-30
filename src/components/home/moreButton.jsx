import "../../assets/styles/components/home/moreButton.css";

function MoreButton({
  innerRef,
  firstOnClick,
  secondOnClick,
  firstText,
  secondText,
  isVisible,
}) {
  return (
    <div
      ref={innerRef}
      className={
        "buttons-container" + (isVisible ? " animate-more-button" : "")
      }
    >
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
