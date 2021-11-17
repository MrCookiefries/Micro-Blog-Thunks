import "./Form.css";
import { v4 as uuidV4 } from "uuid";
import Form from "./Form";

const CommentForm = ({ setBlogs, blog, id }) => {
	const initialState = {
		text: "",
	};

	const createComment = (comment) =>
		setBlogs((oldBlogs) => [
			...oldBlogs.filter((b) => b.id !== id),
			{
				...blog,
				id,
				comments: [...blog.comments, { ...comment, id: uuidV4() }],
			},
		]);

	return (
		<section className="Form">
			<h2 className="title">Create Comment</h2>
			<Form
				initialState={initialState}
				submitLabel="Add"
				submit={createComment}
			/>
		</section>
	);
};

export default CommentForm;
