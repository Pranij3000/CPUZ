import "./SimpleButton.scss";
import { Link } from "react-router-dom";

export default function SimpleButton({ placeholder, link }) {
  return (
    <>
      <Link to={link} className="simple-button text-text px-12 py-4">
        {placeholder}
      </Link>
    </>
  );
}
