import "../../assets/styles/components/admin/text-lg-input.css";

export default function TextLgInput({ placeholder, name }) {
  return (
    <div className="text-lg-input">
      <textarea
        name={name}
        className="lg-input__input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
