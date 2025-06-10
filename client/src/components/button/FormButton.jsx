import "./FormButton.scss";

export default function FormButton({ placeholder, type = "submit", disabled = false }) {
  return (
    <button type={type} className="form-button d-block p-12 bg-secondary rounded-16 text-white" disabled={disabled}>
      {placeholder}
    </button>
  );
}
