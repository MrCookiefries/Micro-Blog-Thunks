import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import "./Blog.css";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import EditBlogForm from "./EditBlogForm";
import blogsActions from "../store/actions/blogsActions";

const Blog = () => {
	const [showEdit, setShowEdit] = useState(false);
	const dispatch = useDispatch();

	const editBlog = () => setShowEdit(!showEdit);

	const { id } = useParams();
	const blog = useSelector((store) => store.blogs[id], shallowEqual);

	useEffect(() => {
		dispatch(blogsActions.fetchOne(id));
	}, [dispatch, id]);

	if (!blog) return <Navigate to="/" />;

	const { title, description, body, comments } = blog;

	const deleteBlog = () => dispatch(blogsActions.delete(id));

	return showEdit ? (
		<EditBlogForm {...blog} id={id} editBlog={editBlog} />
	) : (
		<section className="Blog">
			<article>
				<h2 className="title">{title}</h2>
				<p className="description">{description}</p>
				<div className="buttons">
					<button onClick={editBlog} className="edit" type="button">
						Edit
					</button>
					<button onClick={deleteBlog} type="button">
						Delete
					</button>
				</div>
				<p className="body">{body}</p>
			</article>
			<div className="comments">
				<CommentList comments={comments} blogId={id} />
				<CommentForm blogId={id} />
			</div>
		</section>
	);
};

export default Blog;
