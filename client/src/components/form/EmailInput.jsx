export default function EmailInput({ label, name, value, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input type="email" id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
}
