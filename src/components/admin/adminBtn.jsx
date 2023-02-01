import "../../assets/styles/components/admin/adminBtn.css";

export default function AdminBtn({ text, customClass, onClick, disabled }) {
  return (
    <button
      type="button"
      className={`adminBtn ${customClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
