import { useContext } from "react";
import { BlogsContext } from "../App";
import "./Comment.css";

const Comment = ({ text, id, blogId }) => {
	const { blogs, setBlogs } = useContext(BlogsContext);
	const blog = blogs.find((b) => b.id === blogId);

	const deleteComment = () =>
		setBlogs((oldBlogs) => [
			...oldBlogs.filter((b) => b.id !== blogId),
			{
				...blog,
				id: blogId,
				comments: [...blog.comments.filter((c) => c.id !== id)],
			},
		]);

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
