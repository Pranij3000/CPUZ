export default function NumberInput({ label }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type="number" />
    </div>
  );
}
