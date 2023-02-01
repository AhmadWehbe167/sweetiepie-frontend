import { Alert } from "@mui/material";
import "../../assets/styles/components/admin/custom-field.css";

export default function TextInput({
  image,
  placeholder,
  onChange,
  error,
  type = "text",
}) {
  return (
    <>
      <div className="custom-field">
        <img src={image} alt="" className="custom-field__icon" />
        <input
          type={type}
          className="custom-field__input"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
}
