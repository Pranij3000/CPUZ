export default function EmailInput({ label }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type="email" />
    </div>
  );
}
