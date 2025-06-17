import "./FormButton.scss";

export default function FormButton({ placeholder, type = "submit", disabled = false, extraClass, onClick }) {
	return (
		<button onClick={onClick} type={type} className={`form-button d-block py-8 px-24 bg-secondary rounded-16 text-white ${extraClass}`} disabled={disabled}>
			{placeholder}
		</button>
	);
}
