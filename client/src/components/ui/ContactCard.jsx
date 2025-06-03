import "./ContactCard.scss";
export default function ContactCard({ svg, title, info, link }) {
  return (
    <a href={link} className="p-12 bg-light-bg rounded-8 contact-card d-flex">
      <div className="icon-wrapper">{svg && <img src={svg} alt="Icon" />}</div>
      <div className="detail-container">
        <h6 className="mb-4">{title}</h6>
        <p>{info}</p>
      </div>
    </a>
  );
}
