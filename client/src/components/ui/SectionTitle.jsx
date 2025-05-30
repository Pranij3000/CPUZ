export default function SectionTitle({ title, spanText, extraClass }) {
	return (
		<div className={`section-title ${extraClass}`}>
			<h3 className="">
				{title}
				<span>{spanText}</span>
			</h3>
		</div>
	);
}
