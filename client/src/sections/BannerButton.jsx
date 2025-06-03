import "./BannerButton.scss";
import PrimaryButton from "../components/button/PrimaryButton";

export default function BannerButton({ background, strong, title, description, BtnPlaceholder }) {
  return (
    <section className="banner-button py-64" style={{ background: background }}>
      <div className="container">
        <div className="banner-button-wrapper d-flex align-items-end">
          <div className="banner-button-content text-md-center mx-md-auto">
            <strong className="text-primary">{strong}</strong>
            <h1>{title}</h1>
            <p className="mb-16">{description}</p>
            <PrimaryButton path="/" placeholder={BtnPlaceholder} />
          </div>
        </div>
      </div>
    </section>
  );
}
