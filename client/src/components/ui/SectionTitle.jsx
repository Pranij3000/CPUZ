export default function SectionTitle({ title, spanText, textAlign }) {
  return (
    <div className={`section-title ${textAlign}`}>
      <h3 className="">
        {title}
        <span>{spanText}</span>
      </h3>
    </div>
  );
}
