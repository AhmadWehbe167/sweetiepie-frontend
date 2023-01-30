import "../../assets/styles/components/admin/adminBtn.css";

export default function AdminBtn({ text, customClass, onClick }) {
  return (
    <button className={`adminBtn ${customClass}`} onClick={onClick}>
      {text}
    </button>
  );
}
