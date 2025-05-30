export default function SectionTitleDark({ title, spanText, extraClass }) {
	return (
		<div className={`section-title ${extraClass}`}>
			<h3 className="text-main-bg">
				{title}
				<span className="text-secondary">{spanText}</span>
			</h3>
		</div>
	);
}
