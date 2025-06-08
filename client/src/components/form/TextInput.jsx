export default function TextInput({ label, name, value, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
}
