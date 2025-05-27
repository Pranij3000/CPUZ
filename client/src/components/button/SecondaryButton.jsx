import "./SecondaryButton.scss";
export default function SecondaryButton({ placeholder }) {
	return (
		<>
			<a href="#" className="secondary-button px-32 py-8 border-primary text-primary rounded-4">
				{placeholder}
			</a>
		</>
	);
}
