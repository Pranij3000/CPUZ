import "./BannerVideo.scss";
import BackgroundVideo from "../components/backgrounds/BackgroundVideo.jsx";

export default function BannerVideo({ url, title, spanText, subTitle }) {
  return (
    <>
      <section className="banner py-64 py-md-120 pt-xl-180 pb-xl-260">
        <div className="container">
          <div className="banner-wrapper">
            <div className="title text-center">
              <h1 className="mb-12">
                {title}
                <span>{spanText}</span>
              </h1>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
        <div className="background-video-wrapper">
          <BackgroundVideo url={url}></BackgroundVideo>
        </div>
      </section>
    </>
  );
}
