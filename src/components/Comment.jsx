import { useDispatch } from "react-redux";
import blogsActions from "../store/actions/blogsActions";
import "./Comment.css";

const Comment = ({ text, id, blogId }) => {
	const dispatch = useDispatch();

	const deleteComment = () =>
		dispatch(blogsActions.comments.delete(blogId, id));

	return (
		<li className="Comment">
			<button onClick={deleteComment} className="delete" type="button">
				Delete
			</button>
			{text}
		</li>
	);
};

export default Comment;
