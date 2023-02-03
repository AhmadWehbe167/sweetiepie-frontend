import "../../assets/styles/components/admin/custom-field.css";

export default function TextInput({
  id,
  name,
  image,
  placeholder,
  formik,
  field,
  large = false,
  type = "text",
}) {
  const value = formik.values[field];
  const onChange = formik.handleChange;
  const onBlur = formik.handleBlur;
  const isVisitedError = formik.touched[field] && formik.errors[field];
  const customClasses = isVisitedError ? "custom-field--error" : "";
  function ErrorAlert() {
    return isVisitedError ? (
      <p className="field-error">{formik.errors[field]}</p>
    ) : null;
  }

  return (
    <div className="input-col">
      <div
        className={(large ? "text-lg-input " : "custom-field ") + customClasses}
      >
        {!large ? (
          <img src={image} alt="" className="custom-field__icon" />
        ) : null}
        {large ? (
          <textarea
            id={id}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            className="lg-input__input"
            type={type}
            placeholder={placeholder}
          />
        ) : (
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
        )}
      </div>
      <ErrorAlert />
    </div>
  );
}
