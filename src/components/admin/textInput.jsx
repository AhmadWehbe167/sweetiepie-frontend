import "../../assets/styles/components/admin/custom-field.css";

export default function TextInput({
  id,
  name,
  image,
  placeholder,
  onChange,
  onBlur,
  value,
  customClasses,
  type = "text",
}) {
  return (
    <>
      <div className={"custom-field " + customClasses}>
        <img src={image} alt="" className="custom-field__icon" />
        <input
          id={id}
          name={name}
          type={type}
          className="custom-field__input "
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          autoComplete="off"
        />
      </div>
    </>
  );
}
