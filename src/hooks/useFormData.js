import { useState } from "react";

const useFormData = (initialState) => {
	const [state, setState] = useState(initialState);

	const handleChange = evt => {
		const { name, value } = evt.target;

		setState(oldState => ({ ...oldState, [name]: value }));
	};

	const resetState = () => setState(initialState);

	return [state, handleChange, resetState];
};

export default useFormData;
