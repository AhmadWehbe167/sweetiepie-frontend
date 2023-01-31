import AdminBtn from "../components/admin/adminBtn";
import TextLgInput from "../components/admin/textLgInput";
import TextInput from "../components/admin/textInput";
import emailImage from "../assets/images/contact/email.png";
import emailIcon from "../assets/icons/admin/email.png";
import personIcon from "../assets/icons/contact/person.png";
import phoneIcon from "../assets/icons/contact/phone.png";
import "../assets/styles/pages/admin/adminCard.css";
import "../assets/styles/pages/contact.css";

export default function Contact() {
  return (
    <div className="admin-card">
      <div className="card__image-cont">
        <img src={emailImage} alt="" className="card__left-image" />
      </div>
      <div className="card__content">
        <h1 className="admin-card__title">Contact Us</h1>
        <p className="admin-card__subtitle">
          We will answer your questions in a short time
        </p>
        <div className="card__inputs-cont">
          <TextInput image={personIcon} placeholder={"First Name"} />
          <TextInput image={personIcon} placeholder={"Last Name"} />
        </div>
        <TextInput image={emailIcon} placeholder={"Email"} />
        <TextInput image={phoneIcon} placeholder={"Phone"} />
        <TextLgInput placeholder={"Describe your issue"} />
        <AdminBtn text={"Send"} />
      </div>
    </div>
  );
}
