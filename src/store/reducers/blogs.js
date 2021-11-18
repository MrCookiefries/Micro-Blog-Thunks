import { blogsTypes } from "../actions/actionTypes";

const blogs = (state = {}, action) => {
	const { payload, id } = action;
	let stateCopy;
	switch (action.type) {
		case blogsTypes.add:
			return { ...state, ...payload };
		case blogsTypes.update:
			return { ...state, ...payload };
		case blogsTypes.load:
			return { ...state, ...payload };
		case blogsTypes.delete:
			stateCopy = { ...state };
			delete stateCopy[payload];
			return stateCopy;
		case blogsTypes.comments.add:
			return {
				...state, [id]: {
					...state[id], comments: {
						...state[id].comments, ...payload
					}
				}
			};
		case blogsTypes.comments.delete:
			stateCopy = {
				...state, [id]: {
					...state[id], comments: {
						...state[id].comments
					}
				}
			};
			delete stateCopy[id].comments[payload];
			return stateCopy;
		default:
			return state;
	}
};

export default blogs;
