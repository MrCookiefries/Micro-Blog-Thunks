import "./FormField.css";

const FormField = ({
	name,
	value,
	label,
	handleChange,
	required = true,
	type = "text",
}) => {
	return (
		<label className="FormField">
			{label}
			{type !== "textarea" ? (
				<input
					type={type}
					required={required}
					name={name}
					value={value}
					onChange={handleChange}
				/>
			) : (
				<textarea
					required={required}
					name={name}
					value={value}
					onChange={handleChange}
				></textarea>
			)}
		</label>
	);
};

export default FormField;
