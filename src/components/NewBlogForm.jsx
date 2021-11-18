import Form from "./Form";
import "./Form.css";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import blogsActions from "../store/actions/blogsActions";

const NewBlogForm = () => {
	const initialState = {
		title: "",
		description: "",
		body: "",
	};

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const createBlog = (blog) => {
		dispatch(blogsActions.add({ [uuidV4()]: blog }));
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
