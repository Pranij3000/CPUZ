import "./ImageCard.scss";
export default function ImageCard({ path }) {
  return (
    <>
      <div className="img-card-wrapper">
        <img className="image-card img-fluid" src={path} alt="" />
      </div>
    </>
  );
}
