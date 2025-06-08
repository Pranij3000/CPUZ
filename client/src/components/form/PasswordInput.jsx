export default function PasswordInput({ label, name, value, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input type="password" id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
}
