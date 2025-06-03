export default function TextInput({ label }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type="text" />
    </div>
  );
}
