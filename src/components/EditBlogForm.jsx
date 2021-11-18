import "./Form.css";
import Form from "./Form";
import { useDispatch } from "react-redux";
import blogsActions from "../store/actions/blogsActions";

const EditBlogForm = ({ title, description, body, id, editBlog }) => {
	const initialState = {
		title,
		description,
		body,
	};

	const dispatch = useDispatch();

	const updateBlog = (blog) => {
		dispatch(blogsActions.update({ [id]: blog }));
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
