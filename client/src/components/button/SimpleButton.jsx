import "./SimpleButton.scss";
export default function SimpleButton({ placeholder }) {
	return (
		<>
			<a href="#" className="simple-button text-text px-12 py-4">
				{placeholder}
			</a>
		</>
	);
}
