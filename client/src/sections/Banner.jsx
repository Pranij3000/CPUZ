import "./Banner.scss";
export default function Banner({ title, spanText, subTitle, background }) {
  return (
    <>
      <section className="banner py-32 py-xl-64" style={{ background: background }}>
        <div className="container">
          <div className="banner-wrapper d-flex align-items-end">
            <div className="title text-md-center mx-md-auto">
              <h1 className="mb-4">
                {title}
                <span>{spanText}</span>
              </h1>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
