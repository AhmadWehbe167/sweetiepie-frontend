import { useState } from "react";
import useLocalStorage from "../customHooks/useStorage";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import formikOptions from "../services/contact";
import ErrorAlert from "../components/admin/errorAlert";
import AdminBtn from "../components/admin/adminBtn";
import TextInput from "../components/admin/textInput";
import emailImage from "../assets/images/contact/email.png";
import emailIcon from "../assets/icons/admin/email.png";
import personIcon from "../assets/icons/contact/person.png";
import phoneIcon from "../assets/icons/contact/phone.png";
import "../assets/styles/pages/admin/adminCard.css";
import "../assets/styles/pages/contact.css";

export default function Contact() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authToken] = useLocalStorage("auth", "");
  const navigate = useNavigate();
  const formik = useFormik(
    formikOptions(setError, setLoading, navigate, authToken)
  );

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
        <ErrorAlert error={error} />
        <div className="card__inputs-cont">
          <TextInput
            id="firstName"
            name="firstName"
            image={personIcon}
            placeholder="First Name"
            formik={formik}
            field="firstName"
          />
          <TextInput
            id="lastName"
            name="lastName"
            image={personIcon}
            placeholder="Last Name"
            formik={formik}
            field="lastName"
          />
        </div>
        <TextInput
          id="email"
          name="email"
          image={emailIcon}
          placeholder="Email"
          formik={formik}
          field="email"
        />
        <TextInput
          id="phone"
          name="phone"
          image={phoneIcon}
          placeholder="Phone"
          formik={formik}
          field="phone"
        />
        <TextInput
          id="description"
          name="description"
          placeholder="Describe your issue"
          formik={formik}
          field="description"
          large={true}
        />
        {loading ? (
          <AdminBtn
            text={"Sending..."}
            customClass={"disabled-btn"}
            disabled={true}
          />
        ) : (
          <AdminBtn
            text={"Send"}
            disabled={false}
            onClick={formik.handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
