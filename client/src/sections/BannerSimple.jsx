import "./BannerSimple.scss";
export default function BannerSimple({ placeholder, svg }) {
  return (
    <section className="banner-simple py-20 bg-main-gradient border-bottom-white-200">
      <div className="container">
        <div className="section-title text-start d-flex align-items-center">
          <div className="icon-wrapper">{svg && <img src={svg} alt="Icon" className="img-fluid" />}</div>
          <h3 className="text-white">{placeholder}</h3>
        </div>
      </div>
    </section>
  );
}
