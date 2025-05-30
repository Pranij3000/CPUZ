import "./SecondaryButton.scss";
import { Link } from "react-router-dom";

export default function SecondaryButton({ placeholder, path, onClick }) {
  return (
    <>
      <Link onClick={onClick} to={path} className="secondary-button px-8 py-8 border-primary text-primary rounded-12 d-block text-center">
        {placeholder}
      </Link>
    </>
  );
}
