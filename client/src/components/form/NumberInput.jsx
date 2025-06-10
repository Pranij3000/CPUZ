export default function NumberInput({ label, name, value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type="tel" id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
}
