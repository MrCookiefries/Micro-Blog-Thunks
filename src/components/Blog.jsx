import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { BlogsContext } from "../App";
import "./Blog.css";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import EditBlogForm from "./EditBlogForm";

const Blog = () => {
	const [showEdit, setShowEdit] = useState(false);

	const editBlog = () => setShowEdit(!showEdit);

	const { id } = useParams();
	const { blogs, setBlogs } = useContext(BlogsContext);
	const blog = blogs.find((b) => b.id === id);

	if (!blog) return <Navigate to="/" />;

	const { title, description, body, comments } = blog;

	const deleteBlog = () => setBlogs(blogs.filter((b) => b.id !== id));

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
				<CommentForm setBlogs={setBlogs} blog={blog} id={id} />
			</div>
		</section>
	);
};

export default Blog;
