import Comment from "./Comment";
import "./CommentList.css";

const CommentList = ({ comments = {}, blogId }) => {
	return (
		<div className="CommentList">
			<h3 className="title">Comments</h3>
			{Object.keys(comments).length ? (
				<ul>
					{Object.entries(comments).map(([id, c]) => (
						<Comment key={id} id={id} {...c} blogId={blogId} />
					))}
				</ul>
			) : (
				<p>Sorry, there are no comments yet...</p>
			)}
		</div>
	);
};

export default CommentList;
