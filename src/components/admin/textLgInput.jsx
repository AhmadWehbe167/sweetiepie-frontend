import "../../assets/styles/components/admin/text-lg-input.css";

function TextLgInput({ placeholder }) {
  return (
    <div className="text-lg-input">
      <textarea
        className="lg-input__input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextLgInput;
