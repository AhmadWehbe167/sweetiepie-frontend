import icon from "../../assets/icons/footer/email.svg";
import "../../assets/styles/components/footer/newsletter.css";

function NewsLetter() {
  function handleEmail() {
    // TODO: implement handle Email
    console.log("handle email");
  }
  return (
    <div className="newsletter">
      <input
        type="text"
        className="newsletter__input"
        placeholder="Email address"
      />
      <div onClick={handleEmail} className="newsletter__icon-container">
        <img src={icon} alt="email" className="newsletter__icon" />
      </div>
    </div>
  );
}

export default NewsLetter;
