import "../../assets/styles/components/admin/custom-field.css";

export default function TextInput({ image, placeholder }) {
  return (
    <div className="custom-field">
      <img src={image} alt="" className="custom-field__icon" />
      <input
        type="text"
        className="custom-field__input"
        placeholder={placeholder}
      />
    </div>
  );
}
