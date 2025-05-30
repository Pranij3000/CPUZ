import { Link } from "react-router-dom";
import "./ComponentCard.scss";
export default function ComponentCard({ label, path, img }) {
  return (
    <>
      <Link className="cd-card d-block bg-main-gradient px-16 pt-12 pb-80 rounded-4" to={path}>
        <h4 className="text-text mb-8">{label}</h4>
        <span className="colored-link text-text">View {label}</span>
        <div className="component-image">
          <img src={img} alt="" className="img-fluid" />
        </div>
      </Link>
    </>
  );
}
