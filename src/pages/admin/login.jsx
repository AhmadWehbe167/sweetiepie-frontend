import React, { useState } from "react";
import AdminBtn from "../../components/admin/adminBtn";
import TextInput from "../../components/admin/textInput";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import useLocalStorage from "../../customHooks/useStorage";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailIcon from "../../assets/icons/admin/email.png";
import passIcon from "../../assets/icons/admin/password.png";
import "../../assets/styles/pages/admin/adminCard.css";
import "../../assets/styles/pages/admin/login.css";
import axios from "axios";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage("auth", "");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      handleLogIn(values.email, values.password);
    },
  });

  return (
    <div className="admin-card">
      <h1 className="admin-card__title admin-card__title--center">Log In</h1>
      <p className="admin-card__subtitle">
        Welcome Back! Enter your email and password to continue
      </p>
      <Alert
        icon={false}
        severity="error"
        variant="filled"
        sx={{
          display: error ? "block" : "none",
          marginBottom: "20px",
          fontSize: "15px",
          backgroundColor: "#DD5858",
          margin: "1rem",
        }}
      >
        {error}
      </Alert>
      <TextInput
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        image={emailIcon}
        placeholder={"Email"}
        customClasses={
          formik.touched.email && formik.errors.email
            ? "custom-field--error"
            : ""
        }
      />
      {formik.touched.email && formik.errors.email ? (
        <p className="field-error">{formik.errors.email}</p>
      ) : null}
      <TextInput
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        image={passIcon}
        placeholder={"Password"}
        type={"password"}
        customClasses={
          formik.touched.password && formik.errors.password
            ? "custom-field--error"
            : ""
        }
      />
      {formik.touched.password && formik.errors.password ? (
        <p className="field-error">{formik.errors.password}</p>
      ) : null}
      {loading ? (
        <AdminBtn
          text={"Sigining In..."}
          onClick={formik.handleSubmit}
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
    </div>
  );

  async function handleLogIn(email, password) {
    setError(null);
    setLoading(true);
    axios
      .post("https://sweetiepie-api.onrender.com/auth", {
        email,
        password,
      })
      .then((response) => {
        setToken(response.data);
        navigate("/");
      })
      .catch((error) => {
        setError(
          error.response.data || "Something went wrong. Please try again."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }
}
