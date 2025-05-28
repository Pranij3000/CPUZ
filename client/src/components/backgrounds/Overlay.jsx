import "./Overlay.scss";
export default function Overlay({ onClick }) {
  return (
    <>
      <div className="overlay" onClick={onClick}></div>
    </>
  );
}
