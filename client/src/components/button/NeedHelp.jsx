import "./NeedHelp.scss";
import { Link } from "react-router-dom";

export default function NeedHelp() {
  return (
    <>
      <p className="need-help text-text">
        Need Help?
        <Link to="/contact-us" className="ml-4 contact-us text-text">
          Contact Us
        </Link>
      </p>
    </>
  );
}
