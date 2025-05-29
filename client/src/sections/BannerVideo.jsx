import "./BannerVideo.scss";
import BackgroundVideo from "../components/backgrounds/BackgroundVideo.jsx";

export default function BannerVideo({ url, title, subTitle }) {
  return (
    <>
      <section className="banner py-140">
        <div className="container">
          <div className="banner-wrapper">
            <div className="title text-center">
              <h1>
                {subTitle}
                <span>{title}</span>
              </h1>
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
