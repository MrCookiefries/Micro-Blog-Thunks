import axios from "axios";
import { blogsTypes } from "./actionTypes";

const baseUrl = "http://localhost:5000/api";

const blogsActions = {
	add: blogData => ({ type: blogsTypes.add, payload: blogData }),
	update: blogData => ({ type: blogsTypes.update, payload: blogData }),
	delete: blogId => ({ type: blogsTypes.delete, payload: blogId }),
	fetchAll: () => async dispatch => {
		try {
			const resp = await axios.get(`${baseUrl}/posts`);
			dispatch(blogsActions.load(resp.data));
		} catch (err) {
			console.error(err);
		}
	},
	load: blogs => ({
		type: blogsTypes.load, payload: blogs.reduce((acc, b) => {
			const { id, ...blog } = b;
			acc[id] = blog;
			return acc;
		}, {})
	}),
	fetchOne: id => async dispatch => {
		const postId = id;
		try {
			const resp = await axios.get(`${baseUrl}/posts/${postId}`);
			const { id, ...data } = resp.data;
			const blogData = {
				[id]: {
					...data, comments: data.comments.reduce((acc, c) => {
						const { id, ...restC } = c;
						acc[id] = restC;
						return acc;
					}, {})
				}
			};
			dispatch(blogsActions.update(blogData));
		} catch (err) {
			console.error(err);
		}
	},
	comments: {
		add: (blogId, comment) => ({
			type: blogsTypes.comments.add, payload: comment, id: blogId
		}),
		delete: (blogId, commentId) => ({
			type: blogsTypes.comments.delete, payload: commentId, id: blogId,
		})
	}
};

export default blogsActions;
