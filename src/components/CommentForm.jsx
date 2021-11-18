import "./Form.css";
import { v4 as uuidV4 } from "uuid";
import Form from "./Form";
import { useDispatch } from "react-redux";
import blogsActions from "../store/actions/blogsActions";

const CommentForm = ({ blogId }) => {
	const initialState = {
		text: "",
	};

	const dispatch = useDispatch();

	const createComment = (comment) =>
		dispatch(blogsActions.comments.add(blogId, { [uuidV4()]: comment }));

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
