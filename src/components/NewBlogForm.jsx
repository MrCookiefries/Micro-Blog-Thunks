import { useContext } from "react";
import { BlogsContext } from "../App";
import Form from "./Form";
import "./Form.css";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";

const NewBlogForm = () => {
	const initialState = {
		title: "",
		description: "",
		body: "",
	};

	const { setBlogs } = useContext(BlogsContext);
	const navigate = useNavigate();

	const createBlog = (blog) => {
		setBlogs((oldBlogs) => [
			...oldBlogs,
			{ ...blog, id: uuidV4(), comments: [] },
		]);
		navigate("/");
	};

	return (
		<section className="Form">
			<h2 className="title">New Post</h2>
			<Form
				initialState={initialState}
				submitLabel="Create"
				submit={createBlog}
			/>
		</section>
	);
};

export default NewBlogForm;
