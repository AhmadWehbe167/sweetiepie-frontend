import "../../assets/styles/components/admin/custom-field.css";

export default function Dropdown({ image, options, onClick: setVal }) {
  return (
    <div className="custom-field">
      <img src={image} alt="" className="custom-field__icon" />
      <select className="custom-field__input" defaultValue={options[0]}>
        {options.map((e, idx) => {
          return (
            <option
              key={e}
              value={e.toLowerCase()}
              onClick={() => {
                setVal(e.toLowerCase());
              }}
            >
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
}
