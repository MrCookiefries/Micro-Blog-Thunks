import { blogsTypes } from "./actionTypes";

const blogsActions = {
	add: blogData => ({ type: blogsTypes.add, payload: blogData }),
	update: blogData => ({ type: blogsTypes.update, payload: blogData }),
	delete: blogId => ({ type: blogsTypes.delete, payload: blogId }),
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
