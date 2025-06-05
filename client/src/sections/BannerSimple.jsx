import "./BannerSimple.scss";
export default function BannerSimple({ placeholder, background }) {
  return (
    <section className="banner-simple bg-light-bg py-20 py-lg-32" background={{ background }}>
      <div className="container">
        <div className="section-title text-center">
          <h3>{placeholder}</h3>
        </div>
      </div>
    </section>
  );
}
