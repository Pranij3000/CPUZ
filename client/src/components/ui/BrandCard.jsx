import "./BrandCard.scss";
export default function BrandCard({ url }) {
  if (!url) {
    return null;
  }
  return (
    <>
      <div className="brand-card px-16 d-flex align-items-center justify-content-center">
        <img src={url} alt="" className="img-fluid" />
      </div>
    </>
  );
}
