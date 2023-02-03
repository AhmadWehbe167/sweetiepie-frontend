import "../../assets/styles/components/admin/custom-field.css";

export default function Dropdown({
  image,
  options,
  onClick: setVal,
  initial = options[0],
}) {
  return (
    <div className="custom-field">
      <img src={image} alt="" className="custom-field__icon" />
      <select
        className="custom-field__input"
        value={initial}
        onChange={(val) => {
          setVal(val.target.value);
        }}
      >
        {options.map((e) => {
          return (
            <option key={e} value={e.toLowerCase()}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
}
