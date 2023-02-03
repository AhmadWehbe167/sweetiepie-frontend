import React, { useState } from "react";
import AdminBtn from "../../components/admin/adminBtn";
import TextInput from "../../components/admin/textInput";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../components/admin/errorAlert";
import useLocalStorage from "../../customHooks/useStorage";
import { useFormik } from "formik";
import formikOptions from "../../services/auth/login";
import useAuthNav from "../../services/auth/authNav";
import emailIcon from "../../assets/icons/admin/email.png";
import passIcon from "../../assets/icons/admin/password.png";
import "../../assets/styles/pages/admin/adminCard.css";
import "../../assets/styles/pages/admin/login.css";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useLocalStorage("auth", "");
  const navigate = useNavigate();
  useAuthNav(token, navigate, "/", "");
  const formik = useFormik(
    formikOptions(setError, setLoading, setToken, navigate)
  );

  return (
    <form className="admin-card" onSubmit={formik.handleSubmit}>
      <h1 className="admin-card__title admin-card__title--center">Log In</h1>
      <p className="admin-card__subtitle">
        Welcome Back! Enter your email and password to continue
      </p>
      <ErrorAlert error={error} />
      <TextInput
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        image={emailIcon}
        placeholder={"Email"}
        formik={formik}
        field="email"
        customClasses={
          formik.touched.email && formik.errors.email
            ? "custom-field--error"
            : ""
        }
      />
      {/* {formik.touched.email && formik.errors.email ? (
        <p className="field-error">{formik.errors.email}</p>
      ) : null} */}
      <TextInput
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        image={passIcon}
        placeholder={"Password"}
        type={"password"}
        formik={formik}
        field="password"
        customClasses={
          formik.touched.password && formik.errors.password
            ? "custom-field--error"
            : ""
        }
      />
      {/* {formik.touched.password && formik.errors.password ? (
        <p className="field-error">{formik.errors.password}</p>
      ) : null} */}
      {loading ? (
        <AdminBtn
          text={"Sigining In..."}
          disabled={true}
          customClass={"disabled-btn"}
        />
      ) : (
        <AdminBtn
          text={"Sign In"}
          onClick={formik.handleSubmit}
          disabled={formik.errors.email || formik.errors.password}
          customClass={
            formik.errors.email || formik.errors.password ? "disabled-btn" : ""
          }
        />
      )}
    </form>
  );
}
