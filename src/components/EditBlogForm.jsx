import "./Form.css";
import Form from "./Form";
import { useContext } from "react";
import { BlogsContext } from "../App";

const EditBlogForm = ({ title, description, body, id, editBlog }) => {
	const initialState = {
		title,
		description,
		body,
	};

	const { setBlogs } = useContext(BlogsContext);

	const updateBlog = (blog) => {
		setBlogs((oldBlogs) => [
			...oldBlogs.filter((b) => b.id !== id),
			{ ...blog, id },
		]);
		editBlog();
	};

	return (
		<section className="Form">
			<h2 className="title">Update Post</h2>
			<Form
				initialState={initialState}
				submitLabel="Save"
				submit={updateBlog}
			/>
		</section>
	);
};

export default EditBlogForm;
