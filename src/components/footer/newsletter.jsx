import { useState } from "react";
import useLocalStorage from "../../customHooks/useStorage";
import icon from "../../assets/icons/footer/email.svg";
import { CircularProgress } from "@mui/material";
import saveEmail from "../../services/saveEmail";
import "../../assets/styles/components/footer/newsletter.css";

export default function NewsLetter({ setOpen, setMessage }) {
  const [authToken] = useLocalStorage("auth", "");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  async function handleEmail() {
    setLoading(true);
    saveEmail(email, authToken, setOpen, setMessage).finally(() => {
      setLoading(false);
    });
  }

  return (
    <div className="newsletter">
      <input
        name="email"
        type="email"
        className="newsletter__input"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="newsletter__icon-container" onClick={handleEmail}>
        {!loading ? (
          <img src={icon} alt="email" className="newsletter__icon" />
        ) : (
          <CircularProgress sx={{ color: "#fff" }} size={30} />
        )}
      </div>
    </div>
  );
}
