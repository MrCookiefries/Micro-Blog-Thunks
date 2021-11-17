import FormField from "./FormField";
import useFormData from "../hooks/useFormData";
import { Link } from "react-router-dom";

const Form = ({ initialState = {}, submitLabel = "Submit", submit }) => {
	const [formData, handleChange, resetForm] = useFormData(initialState);

	const capitalize = (word) =>
		word[0].toUpperCase() + [...word].slice(1).join("");

	const handleSubmit = (evt) => {
		evt.preventDefault();
		resetForm();
		submit(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			{Object.entries(formData).map(([k, v]) => (
				<FormField
					key={k}
					name={k}
					value={v}
					handleChange={handleChange}
					label={capitalize(k)}
					type={k === "body" ? "textarea" : "text"}
				/>
			))}
			<div className="buttons">
				<button type="submit">{submitLabel}</button>
				<Link to="../">
					<button type="button">Cancel</button>
				</Link>
			</div>
		</form>
	);
};

export default Form;
