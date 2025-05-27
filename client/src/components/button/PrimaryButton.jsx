import "./PrimaryButton.scss";
export default function PrimaryButton({ placeholder }) {
	return (
		<>
			<a href="#" className="primary-button px-20 py-8 bg-primary text-black rounded-12">
				{placeholder}
			</a>
		</>
	);
}
