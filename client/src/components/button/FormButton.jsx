import "./FormButton.scss";

export default function FormButton({ placeholder }) {
  return <button className="form-button d-block p-12 bg-secondary rounded-16 text-white">{placeholder}</button>;
}
