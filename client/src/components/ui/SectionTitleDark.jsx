export default function SectionTitleDark({ title, spanText, textAlign }) {
  return (
    <div className={`section-title ${textAlign}`}>
      <h3 className="text-main-bg">
        {title}
        <span className="text-secondary">{spanText}</span>
      </h3>
    </div>
  );
}
