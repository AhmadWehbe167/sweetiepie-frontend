import React, { useState, useEffect } from "react";
import AdminBtn from "../../components/admin/adminBtn";
import TextInput from "../../components/admin/textInput";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import useLocalStorage from "../../customHooks/useStorage";
import emailIcon from "../../assets/icons/admin/email.png";
import passIcon from "../../assets/icons/admin/password.png";
import "../../assets/styles/pages/admin/adminCard.css";
import "../../assets/styles/pages/admin/login.css";
import axios from "axios";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage("auth", "");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogIn = async () => {
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
  };

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
        image={emailIcon}
        placeholder={"Email"}
        value={email}
        onChange={handleEmailChange}
      />
      <TextInput
        image={passIcon}
        placeholder={"Password"}
        type={"password"}
        value={password}
        onChange={handlePasswordChange}
      />
      {loading ? (
        <AdminBtn
          text={"Sigining In..."}
          onClick={handleLogIn}
          disabled={true}
          customClass={"disabled-btn"}
        />
      ) : (
        <AdminBtn text={"Sign In"} onClick={handleLogIn} />
      )}
    </div>
  );
}
