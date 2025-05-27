import "./SimpleButton.scss";
import { Link } from "react-router-dom";

export default function SimpleButton({ placeholder, path }) {
  return (
    <>
      <Link to={path} className="simple-button text-text px-12 py-4">
        {placeholder}
      </Link>
    </>
  );
}
