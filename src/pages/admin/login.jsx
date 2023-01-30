import AdminBtn from "../../components/admin/adminBtn";
import TextInput from "../../components/admin/textInput";
import emailIcon from "../../assets/icons/admin/email.png";
import passIcon from "../../assets/icons/admin/password.png";
import "../../assets/styles/pages/admin/card.css";
import "../../assets/styles/pages/admin/login.css";

export default function Login() {
  function handleLogIn() {
    // TODO: implement log in
    console.log("log in");
  }
  return (
    <div className="card">
      <h1 className="card__title card__title--center">Log In</h1>
      <p className="card__subtitle">
        Welcome Back! Enter your email and password to continue
      </p>
      <TextInput image={emailIcon} placeholder={"Item Name"} />
      <TextInput image={passIcon} placeholder={"Item Name"} type={"password"} />
      <AdminBtn text={"Sign In"} onClick={handleLogIn} />
    </div>
  );
}
